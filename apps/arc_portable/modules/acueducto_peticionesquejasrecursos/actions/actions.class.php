<?php

/**
 * acueducto_peticionesquejasrecursos actions.
 *
 * @package    arc
 * @subpackage acueducto_peticionesquejasrecursos
 * @author     Your name here
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
  
  protected function obtenerServicioId($ser_nombre)
	{
		$conexion = new Criteria();			
		$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
		$servicio = ServicioPeer::doSelectOne($conexion);
		$ser_id = $servicio->getSerId();
		return  $ser_id;
	}
	
    public function obtenerComId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(ComercialPeer::COM_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(ComercialPeer::COM_PPS_ANIO, $pps_anio);
	$conexion->add(ComercialPeer::COM_PPS_SER_ID, $pps_ser_id);
	
	$comercialfila = ComercialPeer::doSelectOne($conexion);
				
	return $comercialfila->getComId();
  }
  /*
  acu_pqr_registro_pqr
acu_pqr_inf_causa_suspension_corte
acu_pqr_inf_causa_susp_corte_explic
acu_pqr_cantidad_pqr_facturacion
acu_pqr_cantidad_pqr_instalacion
acu_pqr_cantidad_pqr_prest_servicio
acu_pqr_cantidad_pqr_otro
acu_pqr_cantidad_pqr_explica_otros
acu_pqr_cantidad_anual_pqr
  */
  public function executeActualizarPeticionesquejasrecursos(sfWebRequest $request)
  {
  $salida = '';
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(PeticionesquejasrecursosPeer::PQR_COM_ID, $com_id);
			$pqr = PeticionesquejasrecursosPeer::doSelectOne($conexion);

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
			} else {
					$pqr = new Peticionesquejasrecursos();
					$pqr->setPqrComId($com_id);
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
