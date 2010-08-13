<?php

/**
 * acueducto_fondosolidaridadredistribucioningresos actions.
 *
 * @package    arc
 * @subpackage acueducto_fondosolidaridadredistribucioningresos
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_fondosolidaridadredistribucioningresosActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
  //  $this->forward('default', 'module');
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
  *Esta funcion actualiza la informacion de fondo de solidaridad
  */
    public function executeActualizarFondosolidaridadredistribucioningresos(sfWebRequest $request)
  { 
	$salida = '';
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(FondosolidaridadredistribucioningresosPeer::FSI_COM_ID, $com_id);
			$fsri = FondosolidaridadredistribucioningresosPeer::doSelectOne($conexion);

			$conexionv = new Criteria();
			$conexionv->add(VinculacionalservicioPeer::VAS_COM_ID, $com_id);
			$vinculacion = VinculacionalservicioPeer::doSelectOne($conexionv);
		
			if($fsri && $vinculacion)
			{
					$fsri->setFsiSolTranferenciaRecursos($this->getRequestParameter('acu_fsi_sol_tranferencia_recursos'));
					$fsri->setFsiReciboRecursos($this->getRequestParameter('acu_fsi_recibo_recursos'));
					$fsri->setFsiReciboRecursosValorRecib(str_replace(',','',$this->getRequestParameter('acu_fsi_recibo_recursos_valor_recib')));
					$fsri->setFsiAporteRecursos($this->getRequestParameter('acu_fsi_aporte_recursos'));
					$fsri->setFsiAporteRecursosValorApor(str_replace(',','',$this->getRequestParameter('acu_fsi_aporte_recursos_valor_apor')));
					$fsri->save();
					
					$vinculacion->setVasSuscripcionContrato($this->getRequestParameter('acu_vas_suscripcion_contrato'));
					$vinculacion->save();
					
					$salida = "({success: true, mensaje:'Fue actualizado exitosamente'})";
			} else {
					$fsri=new Fondosolidaridadredistribucioningresos();
					$fsri->setFsiComId($com_id);
					$fsri->setFsiSolTranferenciaRecursos($this->getRequestParameter('acu_fsi_sol_tranferencia_recursos'));
					$fsri->setFsiReciboRecursos($this->getRequestParameter('acu_fsi_recibo_recursos'));
					$fsri->setFsiReciboRecursosValorRecib(str_replace(',','',$this->getRequestParameter('acu_fsi_recibo_recursos_valor_recib')));
					$fsri->setFsiAporteRecursos($this->getRequestParameter('acu_fsi_aporte_recursos'));
					$fsri->setFsiAporteRecursosValorApor(str_replace(',','',$this->getRequestParameter('acu_fsi_aporte_recursos_valor_apor')));
					$fsri->save();
					
					$vinculacion= new Vinculacionalservicio();
					$vinculacion->setVasComId($com_id);
					$vinculacion->setVasSuscripcionContrato($this->getRequestParameter('acu_vas_suscripcion_contrato'));
					$vinculacion->save();
					
					$salida = "({success: true, mensaje:'Fue actualizado exitosamente'})";
			}
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		
	return $this->renderText($salida);
  }
  /*
  *@author:maryit sanchez
  *@date:28 de julio de 2010
  *Esta funcion devuelve un registro con la informacion de fondo de solidaridad para
  *un periodo un prestador y un servicio especifico
  */
 public function executeObtenerDatosFondosolidaridadredistribucioningresos(sfWebRequest $request)
  { 
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(FondosolidaridadredistribucioningresosPeer::FSI_COM_ID, $com_id);
			$fsri = FondosolidaridadredistribucioningresosPeer::doSelectOne($conexion);

			$conexionv = new Criteria();
			$conexionv->add(VinculacionalservicioPeer::VAS_COM_ID, $com_id);
			$vinculacion = VinculacionalservicioPeer::doSelectOne($conexionv);
		
			if($fsri && $vinculacion)
			{
				$datos[$fila]['acu_fsi_sol_tranferencia_recursos'] = $fsri->getFsiSolTranferenciaRecursos();
				$datos[$fila]['acu_fsi_recibo_recursos'] = $fsri->getFsiReciboRecursos();
				$datos[$fila]['acu_fsi_recibo_recursos_valor_recib'] = $fsri->getFsiReciboRecursosValorRecib();
				$datos[$fila]['acu_fsi_aporte_recursos'] = $fsri->getFsiAporteRecursos();
				$datos[$fila]['acu_fsi_aporte_recursos_valor_apor'] = $fsri->getFsiAporteRecursosValorApor();
				$datos[$fila]['acu_vas_suscripcion_contrato'] = $vinculacion->getVasSuscripcionContrato();

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
