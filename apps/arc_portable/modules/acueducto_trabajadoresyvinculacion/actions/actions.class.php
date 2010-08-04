<?php

/**
 * acueducto_trabajadoresyvinculacion actions.
 *
 * @package    arc
 * @subpackage acueducto_trabajadoresyvinculacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_trabajadoresyvinculacionActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
    //$this->forward('default', 'module');
  }
  
  protected function obtenerServicioId($ser_nombre)
  {
	$conexion = new Criteria();			
	$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
	$servicio = ServicioPeer::doSelectOne($conexion);
	$ser_id = $servicio->getSerId();
	return  $ser_id;
  }
  
  public function executeActualizarTrabajadoresyVinculacion(sfWebRequest $request)
  {
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$acu_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);
	
	if($acu_administrativafinanciera)
	{
		$iaf_id = $acu_administrativafinanciera->getIafId();
		
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $iaf_id);
		$acu_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		if($acu_trabajadoresyvinculacion)
		{
			try
			{
				$acu_trabajadoresyvinculacion->setTraManualProcedimiento($this->getRequestParameter('acu_tra_manual_procedimiento'));
				$acu_trabajadoresyvinculacion->setTraManualFunciones($this->getRequestParameter('acu_tra_manual_funciones'));
				
				$acu_trabajadoresyvinculacion->save();
				
				$acu_poa_id = $this->getRequestParameter('acu_poa_id');
				
				if($acu_poa_id)
				{
					$personaloperativoadministrativo = PersonaloperativoadministrativoPeer::retrieveByPK($this->getRequestParameter('acu_poa_id'));
					if($personaloperativoadministrativo)
					{
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('acu_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('acu_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('acu_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('acu_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('acu_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('acu_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
					else
					{
						return $this->renderText("({success: false, errors: { reason: 'El empleado no existe en la base de datos'}})");
					}
				}
				else
				{
					$acu_poa_cedula = $this->getRequestParameter('acu_poa_cedula');
				
					if($acu_poa_cedula)
					{
						$personaloperativoadministrativo = new Personaloperativoadministrativo();
						$personaloperativoadministrativo->setPoaTraId($acu_trabajadoresyvinculacion->getTraId());
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('acu_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('acu_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('acu_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('acu_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('acu_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('acu_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
				}
				
				$salida = "({success: true, mensaje:'La informacion de trabajadores y vinculacion fue actualizada exitosamente'})";
			}
			catch(Exception $exception)
			{
				return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en trabajadores y vinculacion:".$exception."'}})");
			}
		}
		else
		{
			try
			{
				$acu_trabajadoresyvinculacion = new Trabajadoresyvinculacion();
				
				$acu_trabajadoresyvinculacion->setTraIafId($iaf_id);
				$acu_trabajadoresyvinculacion->setTraManualProcedimiento($this->getRequestParameter('acu_tra_manual_procedimiento'));
				$acu_trabajadoresyvinculacion->setTraManualFunciones($this->getRequestParameter('acu_tra_manual_funciones'));
				
				$acu_trabajadoresyvinculacion->save();
				
				$salida = "({success: true, mensaje:'La informacion de trabajadores y vinculacion fue actualizada exitosamente'})";
			}
			catch(Exception $exception)
			{
				return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en trabajadores y vinculacion'}})");
			}
		}
	}
	else
	{
		return $this->renderText("({success: false, errors: { reason: 'Debe primero registrar informacion general de administracion financiera'}})");
	}
	
	return $this->renderText($salida);
  }
  
  public function executeEliminarTrabajadores(sfWebRequest $request)
  {
	$salida;
	$poa_id = $this->getRequestParameter('acu_poa_id');
	
	if($poa_id != '')
	{
		$personaloperativoadministrativo = PersonaloperativoadministrativoPeer::retrieveByPK($poa_id);
		if($personaloperativoadministrativo)
		{
			try
			{
				$personaloperativoadministrativo->delete();
				$salida = "({success: true, mensaje:'Trabajador eliminado exitosamente'})";
			}
			catch(Exception $exception)
			{
				$salida = "({success: false, errors: { reason: 'error al eliminar el trabajador'}})";
			}
		}
	}
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcuTrabajadoresyVinculacion(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$acu_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($acu_administrativafinanciera)
	{
	
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $acu_administrativafinanciera->getIafId());
		$acu_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($acu_trabajadoresyvinculacion)
		{
		
			$datos[$pos]['acu_tra_manual_procedimiento']=$acu_trabajadoresyvinculacion->getTraManualProcedimiento();
			$datos[$pos]['acu_tra_manual_funciones']=$acu_trabajadoresyvinculacion->getTraManualFunciones();
			
			$jsonresult = json_encode($datos);
			$salida = '({"total":'.$pos.',"results":'.$jsonresult.'})';
		}
		else
		{
			$salida = '({"total":"0", "results":""})';
		}
	}
	else {
		$salida = '({"total":"0", "results":""})';
	}
	return 	$this->renderText($salida);
  }
  
  public function executeObtenerDatosAcuTrabajadores(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$acu_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($acu_administrativafinanciera)
	{
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $acu_administrativafinanciera->getIafId());
		$acu_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		if($acu_trabajadoresyvinculacion)
		{	
			$conexion = new Criteria();
			$conexion->add(PersonaloperativoadministrativoPeer::POA_TRA_ID, $acu_trabajadoresyvinculacion->getTraId());
			$numero_personaloperativoadministrativo = PersonaloperativoadministrativoPeer::doCount($conexion);
			$acu_personaloperativoadministrativo = PersonaloperativoadministrativoPeer::doSelect($conexion);
			
			$datos;
			$pos=0;

			if($acu_personaloperativoadministrativo)
			{
				foreach ($acu_personaloperativoadministrativo As $temporal)
				{
					$datos[$pos]['acu_poa_id']=$temporal->getPoaId();
					$datos[$pos]['acu_poa_cedula']=$temporal->getPoaCedula();
					$datos[$pos]['acu_poa_nombre']=$temporal->getPoaNombre();
					$datos[$pos]['acu_poa_cargo']=$temporal->getPoaCargo();
					$datos[$pos]['acu_poa_tipo_vinculacion']=$temporal->getPoaTipoVinculacion();
					$datos[$pos]['acu_poa_remuneracion_mensual']=$temporal->getPoaRemuneracionMensual();
					$datos[$pos]['acu_poa_tipo_trabajador']=$temporal->getPoaTipoTrabajador();
					
					$pos++;
				}
				
				$jsonresult = json_encode($datos);
				$salida = '({"total":'.$numero_personaloperativoadministrativo.',"results":'.$jsonresult.'})';
			}
			else
			{
				$salida = '({"total":"0", "results":""})';
			}
		}
		else
		{
			$salida = '({"total":"0", "results":""})';
		}
	}
	else {
		$salida = '({"total":"0", "results":""})';
	}
	return 	$this->renderText($salida);
  }
}
