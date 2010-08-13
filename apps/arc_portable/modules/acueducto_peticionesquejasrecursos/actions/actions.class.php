<?php

/**
 * acueducto_peticionesquejasrecursos actions.
 *
 * @package    arc
 * @subpackage acueducto_peticionesquejasrecursos
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_peticionesquejasrecursosActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
   // $this->forward('default', 'module');
  }
  /**
  *@author:maryit sanchez
  *@date:13 de julio de 2010
  *Este metodo retorna el id de un servicio especifico
  */  
  protected function obtenerServicioId($ser_nombre)
	{
		$conexion = new Criteria();			
		$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
		$servicio = ServicioPeer::doSelectOne($conexion);
		$ser_id = $servicio->getSerId();
		return  $ser_id;
	}
	/**
  *@author:maryit sanchez
  *@date:13 de julio de 2010
  *Este metodo retorna el id de la tabla comercial, dada la informacion del periodo y del prestador
  */  
    public function obtenerComId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(ComercialPeer::COM_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(ComercialPeer::COM_PPS_PERIODO, $pps_periodo);
	$conexion->add(ComercialPeer::COM_PPS_SER_ID, $pps_ser_id);
	
	$comercialfila = ComercialPeer::doSelectOne($conexion);
	if(!$comercialfila)
	{
	$comercialfila = new Comercial();
	$comercialfila->setComPpsPreId($pps_pre_id);
	$comercialfila->setComPpsSerId($pps_ser_id);
	$comercialfila->setComPpsPeriodo($pps_periodo);
	$comercialfila->save();
	}			
	return $comercialfila->getComId();
  }

    /*
  *@author:maryit sanchez
  *@date:21 de julio de 2010
  *Esta funcion actualiza la informacion de peticiones quejas y recursos 
  */
  public function executeActualizarPeticionesquejasrecursos(sfWebRequest $request)
  {
  $salida = '';
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(PeticionesquejasrecursosPeer::PQR_COM_ID, $com_id);
			$pqr = PeticionesquejasrecursosPeer::doSelectOne($conexion);

			if(!$pqr)
			{
				$pqr = new Peticionesquejasrecursos();
				$pqr->setPqrComId($com_id);
			}
			if($pqr)
			{
					$pqr->setPqrRegistroPqr($this->getRequestParameter('acu_pqr_registro_pqr'));   
					$pqr->setPqrInfCausaSuspensionCorte($this->getRequestParameter('acu_pqr_inf_causa_suspension_corte'));
					$pqr->setPqrInfCausaSuspCorteExplic($this->getRequestParameter('acu_pqr_inf_causa_susp_corte_explic'));
					$pqr->setPqrCantidadPqrFacturacion($this->getRequestParameter('acu_pqr_cantidad_pqr_facturacion'));
					$pqr->setPqrCantidadPqrInstalacion($this->getRequestParameter('acu_pqr_cantidad_pqr_instalacion'));
					$pqr->setPqrCantidadPqrPrestServicio($this->getRequestParameter('acu_pqr_cantidad_pqr_prest_servicio'));
					$pqr->setPqrCantidadPqrOtro($this->getRequestParameter('acu_pqr_cantidad_pqr_otro'));
					$pqr->setPqrCantidadPqrExplicaOtros($this->getRequestParameter('acu_pqr_cantidad_pqr_explica_otros'));
					$pqr->setPqrCantidadAnualPqr($this->getRequestParameter('acu_pqr_cantidad_anual_pqr'));					
					$pqr->save();
					
					$salida = "({success: true, mensaje:'Fue actualizado exitosamente'})";
			} 
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		
	return $this->renderText($salida);
  }


  /*
  *@author:maryit sanchez
  *@date:28 de julio de 2010
  *Esta funcion devuelve un registro con la informacion de peticiones, quejas y recursos para
  *un periodo un prestador y un servicio especifico
  */
    public function executeObtenerDatosPeticionesquejasrecursos(sfWebRequest $request)
  { 
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(PeticionesquejasrecursosPeer::PQR_COM_ID, $com_id);
			$pqr = PeticionesquejasrecursosPeer::doSelectOne($conexion);
		
			if($pqr)
			{
				$datos[$fila]['acu_pqr_registro_pqr'] = $pqr->getPqrRegistroPqr();
				$datos[$fila]['acu_pqr_inf_causa_suspension_corte'] = $pqr->getPqrInfCausaSuspensionCorte();
				$datos[$fila]['acu_pqr_inf_causa_susp_corte_explic'] = $pqr->getPqrInfCausaSuspCorteExplic();
				$datos[$fila]['acu_pqr_cantidad_pqr_facturacion'] = $pqr->getPqrCantidadPqrFacturacion();
				$datos[$fila]['acu_pqr_cantidad_pqr_instalacion'] = $pqr->getPqrCantidadPqrInstalacion();
				$datos[$fila]['acu_pqr_cantidad_pqr_prest_servicio'] = $pqr->getPqrCantidadPqrPrestServicio();
				$datos[$fila]['acu_pqr_cantidad_pqr_otro'] = $pqr->getPqrCantidadPqrOtro();
				$datos[$fila]['acu_pqr_cantidad_pqr_explica_otros'] = $pqr->getPqrCantidadPqrExplicaOtros();
				$datos[$fila]['acu_pqr_cantidad_anual_pqr'] = $pqr->getPqrCantidadAnualPqr();
					
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		
	return $this->renderText($salida);
  }

  
}
