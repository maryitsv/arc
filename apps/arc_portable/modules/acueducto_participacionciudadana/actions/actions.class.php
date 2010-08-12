<?php

/**
 * acueducto_participacionciudadana actions.
 *
 * @package    arc
 * @subpackage acueducto_participacionciudadana
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_participacionciudadanaActions extends sfActions
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
  
  public function executeActualizarParticipacionCiudadana(sfWebRequest $request)
  {
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$acu_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	$iaf_id;
	
	if($acu_administrativafinanciera)
	{
		$iaf_id = $acu_administrativafinanciera->getIafId();
	}
	else
	{
		$acu_administrativafinanciera = new Administrativafinanciera();
		$acu_administrativafinanciera->setIafPpsPreId($pps_pre_id);
		$acu_administrativafinanciera->setIafPpsPeriodo($pps_periodo);
		$acu_administrativafinanciera->setIafPpsSerId($pps_ser_id);
		$acu_administrativafinanciera->save();

		$iaf_id = $acu_administrativafinanciera->getIafId();
	}

	$conexion = new Criteria();
	$conexion->add(ParticipacionciudadanaPeer::PAR_IAF_ID, $iaf_id);
	$acu_participacionciudadana = ParticipacionciudadanaPeer::doSelectOne($conexion);

	if($acu_participacionciudadana)
	{
		try
		{
			$acu_participacionciudadana->setParParticipacionCiudadanaDirecta($this->getRequestParameter('acu_par_participacion_ciudadana_directa'));
			$acu_participacionciudadana->setParParticipacionCiudadanaAsamblea($this->getRequestParameter('acu_par_participacion_ciudadana_asamblea'));
			$acu_participacionciudadana->setParParticipacionCiudadanaComiteDesarrolloControlSocial($this->getRequestParameter('acu_par_participacion_ciudadana_comite_desarrollo_control_social'));
			$acu_participacionciudadana->setParParticipacionCiudadanaVeedurias($this->getRequestParameter('acu_par_participacion_ciudadana_veedurias'));
			$acu_participacionciudadana->setParParticipacionCiudadanaOtraCual($this->getRequestParameter('acu_par_participacion_ciudadana_otra_cual'));
			$acu_participacionciudadana->setParPropuestasVocales($this->getRequestParameter('acu_par_propuestas_vocales'));
			
			$acu_participacionciudadana->save();
		
			$salida = "({success: true, mensaje:'La informacion de participacion ciudadana fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en participacion ciudadana'}})");
		}
	}
	else
	{
		try
		{
			$acu_participacionciudadana = new Participacionciudadana();

			$acu_participacionciudadana->setParIafId($iaf_id);
			$acu_participacionciudadana->setParParticipacionCiudadanaDirecta($this->getRequestParameter('acu_par_participacion_ciudadana_directa'));
			$acu_participacionciudadana->setParParticipacionCiudadanaAsamblea($this->getRequestParameter('acu_par_participacion_ciudadana_asamblea'));
			$acu_participacionciudadana->setParParticipacionCiudadanaComiteDesarrolloControlSocial($this->getRequestParameter('acu_par_participacion_ciudadana_comite_desarrollo_control_social'));
			$acu_participacionciudadana->setParParticipacionCiudadanaVeedurias($this->getRequestParameter('acu_par_participacion_ciudadana_veedurias'));
			$acu_participacionciudadana->setParParticipacionCiudadanaOtraCual($this->getRequestParameter('acu_par_participacion_ciudadana_otra_cual'));
			$acu_participacionciudadana->setParPropuestasVocales($this->getRequestParameter('acu_par_propuestas_vocales'));
			
			$acu_participacionciudadana->save();
			
			$salida = "({success: true, mensaje:'La informacion de participacion ciudadana fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en participacion ciudadana'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcuParticipacionCiudadana(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$acu_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($acu_administrativafinanciera)
	{
	
		$conexion = new Criteria();
		$conexion->add(ParticipacionciudadanaPeer::PAR_IAF_ID, $acu_administrativafinanciera->getIafId());
		$acu_participacionciudadana = ParticipacionciudadanaPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($acu_participacionciudadana)
		{
			$datos[$pos]['acu_par_participacion_ciudadana_directa']=$acu_participacionciudadana->getParParticipacionCiudadanaDirecta();
			$datos[$pos]['acu_par_participacion_ciudadana_asamblea']=$acu_participacionciudadana->getParParticipacionCiudadanaAsamblea();
			$datos[$pos]['acu_par_participacion_ciudadana_comite_desarrollo_control_social']=$acu_participacionciudadana->getParParticipacionCiudadanaComiteDesarrolloControlSocial();
			$datos[$pos]['acu_par_participacion_ciudadana_veedurias']=$acu_participacionciudadana->getParParticipacionCiudadanaVeedurias();
			$datos[$pos]['acu_par_participacion_ciudadana_otra_cual']=$acu_participacionciudadana->getParParticipacionCiudadanaOtraCual();
			$datos[$pos]['acu_par_propuestas_vocales']=$acu_participacionciudadana->getParPropuestasVocales();
			
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
}
