<?php

/**
 * acueducto_administrativafinanciera actions.
 *
 * @package    arc
 * @subpackage acueducto_administrativafinanciera
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_administrativafinancieraActions extends sfActions
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
  
  public function executeActualizarAcuAdministrativaFinanciera(sfWebRequest $request)
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
		try
		{
			$acu_administrativafinanciera->setIafNombreDiligenciador($this->getRequestParameter('acu_nombre_diligenciador'));
			$acu_administrativafinanciera->setIafApellidoDiligenciador($this->getRequestParameter('acu_apellido_diligenciador'));
			$acu_administrativafinanciera->setIafIdentificacionDiligenciador($this->getRequestParameter('acu_identificacion_diligenciador'));
			$acu_administrativafinanciera->setIafTipoIdentificacionDiligenciador($this->getRequestParameter('acu_tipo_identificacion_diligenciador'));
			$acu_administrativafinanciera->setIafTelefonoDiligenciador($this->getRequestParameter('acu_telefono_diligenciador'));
			
			$acu_administrativafinanciera->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en administracion financiera'}})");
		}
	}
	else
	{
		try
		{
			$acu_administrativafinanciera = new Administrativafinanciera();
			
			$acu_administrativafinanciera->setIafPpsPreId($pps_pre_id);
			$acu_administrativafinanciera->setIafPpsAnio($pps_anio);
			$acu_administrativafinanciera->setIafPpsSerId($pps_ser_id);
			
			$acu_administrativafinanciera->setIafNombreDiligenciador($this->getRequestParameter('acu_nombre_diligenciador'));
			$acu_administrativafinanciera->setIafApellidoDiligenciador($this->getRequestParameter('acu_apellido_diligenciador'));
			$acu_administrativafinanciera->setIafIdentificacionDiligenciador($this->getRequestParameter('acu_identificacion_diligenciador'));
			$acu_administrativafinanciera->setIafTipoIdentificacionDiligenciador($this->getRequestParameter('acu_tipo_identificacion_diligenciador'));
			$acu_administrativafinanciera->setIafTelefonoDiligenciador($this->getRequestParameter('acu_telefono_diligenciador'));
			
			$acu_administrativafinanciera->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en administracion financiera'}})");
		}
	}
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcueducto()
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
	
	$datos;
	$pos=0;

	if($acu_administrativafinanciera)
	{
	
	
		$datos[$pos]['acu_nombre_diligenciador']=$acu_administrativafinanciera->getIafNombreDiligenciador();
		$datos[$pos]['acu_apellido_diligenciador']=$acu_administrativafinanciera->getIafApellidoDiligenciador();
		$datos[$pos]['acu_identificacion_diligenciador']=$acu_administrativafinanciera->getIafIdentificacionDiligenciador();
		$datos[$pos]['acu_tipo_identificacion_diligenciador']=$acu_administrativafinanciera->getIafTipoIdentificacionDiligenciador();
		$datos[$pos]['acu_telefono_diligenciador']=$acu_administrativafinanciera->getIafTelefonoDiligenciador();	
		
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$pos.',"results":'.$jsonresult.'})';
	

	}
	else {
		$salida = '({"total":"0", "results":""})';
	}
	return 	$this->renderText($salida);
   }
  
}
