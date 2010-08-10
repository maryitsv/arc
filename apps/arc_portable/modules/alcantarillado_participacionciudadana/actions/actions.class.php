<?php

/**
 * alcantarillado_participacionciudadana actions.
 *
 * @package    arc
 * @subpackage alcantarillado_participacionciudadana
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_participacionciudadanaActions extends sfActions
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
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$alc_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	$iaf_id;
	
	if($alc_administrativafinanciera)
	{
		$iaf_id = $alc_administrativafinanciera->getIafId();
	}
	else
	{
		$alc_administrativafinanciera = new Administrativafinanciera();
		$alc_administrativafinanciera->setIafPpsPreId($pps_pre_id);
		$alc_administrativafinanciera->setIafPpsAnio($pps_anio);
		$alc_administrativafinanciera->setIafPpsSerId($pps_ser_id);
		$alc_administrativafinanciera->save();

		$iaf_id = $alc_administrativafinanciera->getIafId();
	}

	$conexion = new Criteria();
	$conexion->add(ParticipacionciudadanaPeer::PAR_IAF_ID, $iaf_id);
	$alc_participacionciudadana = ParticipacionciudadanaPeer::doSelectOne($conexion);

	if($alc_participacionciudadana)
	{
		try
		{
			$alc_participacionciudadana->setParParticipacionCiudadanaDirecta($this->getRequestParameter('alc_par_participacion_ciudadana_directa'));
			$alc_participacionciudadana->setParParticipacionCiudadanaAsamblea($this->getRequestParameter('alc_par_participacion_ciudadana_asamblea'));
			$alc_participacionciudadana->setParParticipacionCiudadanaComiteDesarrolloControlSocial($this->getRequestParameter('alc_par_participacion_ciudadana_comite_desarrollo_control_social'));
			$alc_participacionciudadana->setParParticipacionCiudadanaVeedurias($this->getRequestParameter('alc_par_participacion_ciudadana_veedurias'));
			$alc_participacionciudadana->setParParticipacionCiudadanaOtraCual($this->getRequestParameter('alc_par_participacion_ciudadana_otra_cual'));
			$alc_participacionciudadana->setParPropuestasVocales($this->getRequestParameter('alc_par_propuestas_vocales'));
			
			$alc_participacionciudadana->save();
		
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
			$alc_participacionciudadana = new Participacionciudadana();

			$alc_participacionciudadana->setParIafId($iaf_id);
			$alc_participacionciudadana->setParParticipacionCiudadanaDirecta($this->getRequestParameter('alc_par_participacion_ciudadana_directa'));
			$alc_participacionciudadana->setParParticipacionCiudadanaAsamblea($this->getRequestParameter('alc_par_participacion_ciudadana_asamblea'));
			$alc_participacionciudadana->setParParticipacionCiudadanaComiteDesarrolloControlSocial($this->getRequestParameter('alc_par_participacion_ciudadana_comite_desarrollo_control_social'));
			$alc_participacionciudadana->setParParticipacionCiudadanaVeedurias($this->getRequestParameter('alc_par_participacion_ciudadana_veedurias'));
			$alc_participacionciudadana->setParParticipacionCiudadanaOtraCual($this->getRequestParameter('alc_par_participacion_ciudadana_otra_cual'));
			$alc_participacionciudadana->setParPropuestasVocales($this->getRequestParameter('alc_par_propuestas_vocales'));
			
			$alc_participacionciudadana->save();
			
			$salida = "({success: true, mensaje:'La informacion de participacion ciudadana fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en participacion ciudadana'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAlcParticipacionCiudadana(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$alc_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($alc_administrativafinanciera)
	{
	
		$conexion = new Criteria();
		$conexion->add(ParticipacionciudadanaPeer::PAR_IAF_ID, $alc_administrativafinanciera->getIafId());
		$alc_participacionciudadana = ParticipacionciudadanaPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($alc_participacionciudadana)
		{
			$datos[$pos]['alc_par_participacion_ciudadana_directa']=$alc_participacionciudadana->getParParticipacionCiudadanaDirecta();
			$datos[$pos]['alc_par_participacion_ciudadana_asamblea']=$alc_participacionciudadana->getParParticipacionCiudadanaAsamblea();
			$datos[$pos]['alc_par_participacion_ciudadana_comite_desarrollo_control_social']=$alc_participacionciudadana->getParParticipacionCiudadanaComiteDesarrolloControlSocial();
			$datos[$pos]['alc_par_participacion_ciudadana_veedurias']=$alc_participacionciudadana->getParParticipacionCiudadanaVeedurias();
			$datos[$pos]['alc_par_participacion_ciudadana_otra_cual']=$alc_participacionciudadana->getParParticipacionCiudadanaOtraCual();
			$datos[$pos]['alc_par_propuestas_vocales']=$alc_participacionciudadana->getParPropuestasVocales();
			
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
