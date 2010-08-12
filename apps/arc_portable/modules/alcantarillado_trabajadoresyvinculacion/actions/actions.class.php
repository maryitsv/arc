<?php

/**
 * alcantarillado_trabajadoresyvinculacion actions.
 *
 * @package    arc
 * @subpackage alcantarillado_trabajadoresyvinculacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_trabajadoresyvinculacionActions extends sfActions
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
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$alc_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);
	
	if($alc_administrativafinanciera)
	{
		$iaf_id = $alc_administrativafinanciera->getIafId();
		
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $iaf_id);
		$alc_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		if($alc_trabajadoresyvinculacion)
		{
			try
			{
				$alc_trabajadoresyvinculacion->setTraManualProcedimiento($this->getRequestParameter('alc_tra_manual_procedimiento'));
				$alc_trabajadoresyvinculacion->setTraManualFunciones($this->getRequestParameter('alc_tra_manual_funciones'));
				
				$alc_trabajadoresyvinculacion->save();
				
				$alc_poa_id = $this->getRequestParameter('alc_poa_id');
				
				if($alc_poa_id)
				{
					$personaloperativoadministrativo = PersonaloperativoadministrativoPeer::retrieveByPK($this->getRequestParameter('alc_poa_id'));
					if($personaloperativoadministrativo)
					{
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('alc_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('alc_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('alc_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('alc_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('alc_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('alc_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
					else
					{
						return $this->renderText("({success: false, errors: { reason: 'El empleado no existe en la base de datos'}})");
					}
				}
				else
				{
					$alc_poa_cedula = $this->getRequestParameter('alc_poa_cedula');
				
					if($alc_poa_cedula)
					{
						$personaloperativoadministrativo = new Personaloperativoadministrativo();
						$personaloperativoadministrativo->setPoaTraId($alc_trabajadoresyvinculacion->getTraId());
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('alc_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('alc_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('alc_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('alc_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('alc_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('alc_poa_tipo_trabajador'));
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
				$alc_trabajadoresyvinculacion = new Trabajadoresyvinculacion();
				
				$alc_trabajadoresyvinculacion->setTraIafId($iaf_id);
				$alc_trabajadoresyvinculacion->setTraManualProcedimiento($this->getRequestParameter('alc_tra_manual_procedimiento'));
				$alc_trabajadoresyvinculacion->setTraManualFunciones($this->getRequestParameter('alc_tra_manual_funciones'));
				
				$alc_trabajadoresyvinculacion->save();
				
				$alc_poa_id = $this->getRequestParameter('alc_poa_id');
				
				if($alc_poa_id)
				{
					$personaloperativoadministrativo = PersonaloperativoadministrativoPeer::retrieveByPK($this->getRequestParameter('alc_poa_id'));
					if($personaloperativoadministrativo)
					{
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('alc_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('alc_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('alc_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('alc_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('alc_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('alc_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
					else
					{
						return $this->renderText("({success: false, errors: { reason: 'El empleado no existe en la base de datos'}})");
					}
				}
				else
				{
					$alc_poa_cedula = $this->getRequestParameter('alc_poa_cedula');
				
					if($alc_poa_cedula)
					{
						$personaloperativoadministrativo = new Personaloperativoadministrativo();
						$personaloperativoadministrativo->setPoaTraId($alc_trabajadoresyvinculacion->getTraId());
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('alc_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('alc_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('alc_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('alc_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('alc_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('alc_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
				}
				
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
	$poa_id = $this->getRequestParameter('alc_poa_id');
	
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
  
  public function executeObtenerDatosAlcTrabajadoresyVinculacion(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$alc_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($alc_administrativafinanciera)
	{
	
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $alc_administrativafinanciera->getIafId());
		$alc_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($alc_trabajadoresyvinculacion)
		{
		
			$datos[$pos]['alc_tra_manual_procedimiento']=$alc_trabajadoresyvinculacion->getTraManualProcedimiento();
			$datos[$pos]['alc_tra_manual_funciones']=$alc_trabajadoresyvinculacion->getTraManualFunciones();
			
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
  
  public function executeObtenerDatosAlcTrabajadores(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$alc_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($alc_administrativafinanciera)
	{
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $alc_administrativafinanciera->getIafId());
		$alc_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		if($alc_trabajadoresyvinculacion)
		{	
			$conexion = new Criteria();
			$conexion->add(PersonaloperativoadministrativoPeer::POA_TRA_ID, $alc_trabajadoresyvinculacion->getTraId());
			$numero_personaloperativoadministrativo = PersonaloperativoadministrativoPeer::doCount($conexion);
			$alc_personaloperativoadministrativo = PersonaloperativoadministrativoPeer::doSelect($conexion);
			
			$datos;
			$pos=0;

			if($alc_personaloperativoadministrativo)
			{
				foreach ($alc_personaloperativoadministrativo As $temporal)
				{
					$datos[$pos]['alc_poa_id']=$temporal->getPoaId();
					$datos[$pos]['alc_poa_cedula']=$temporal->getPoaCedula();
					$datos[$pos]['alc_poa_nombre']=$temporal->getPoaNombre();
					$datos[$pos]['alc_poa_cargo']=$temporal->getPoaCargo();
					$datos[$pos]['alc_poa_tipo_vinculacion']=$temporal->getPoaTipoVinculacion();
					$datos[$pos]['alc_poa_remuneracion_mensual']=$temporal->getPoaRemuneracionMensual();
					$datos[$pos]['alc_poa_tipo_trabajador']=$temporal->getPoaTipoTrabajador();
					
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
