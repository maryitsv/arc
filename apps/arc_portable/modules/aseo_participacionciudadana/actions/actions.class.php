<?php

/**
 * aseo_participacionciudadana actions.
 *
 * @package    arc
 * @subpackage aseo_participacionciudadana
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class aseo_participacionciudadanaActions extends sfActions
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
	$pps_ser_id = $this->obtenerServicioId('aseo');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$ase_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	$iaf_id;
	
	if($ase_administrativafinanciera)
	{
		$iaf_id = $ase_administrativafinanciera->getIafId();
	}
	else
	{
		$ase_administrativafinanciera = new Administrativafinanciera();
		$ase_administrativafinanciera->setIafPpsPreId($pps_pre_id);
		$ase_administrativafinanciera->setIafPpsPeriodo($pps_periodo);
		$ase_administrativafinanciera->setIafPpsSerId($pps_ser_id);
		$ase_administrativafinanciera->save();

		$iaf_id = $ase_administrativafinanciera->getIafId();
	}

	$conexion = new Criteria();
	$conexion->add(ParticipacionciudadanaPeer::PAR_IAF_ID, $iaf_id);
	$ase_participacionciudadana = ParticipacionciudadanaPeer::doSelectOne($conexion);

	if($ase_participacionciudadana)
	{
		try
		{
			$ase_participacionciudadana->setParParticipacionCiudadanaDirecta($this->getRequestParameter('ase_par_participacion_ciudadana_directa'));
			$ase_participacionciudadana->setParParticipacionCiudadanaAsamblea($this->getRequestParameter('ase_par_participacion_ciudadana_asamblea'));
			$ase_participacionciudadana->setParParticipacionCiudadanaComiteDesarrolloControlSocial($this->getRequestParameter('ase_par_participacion_ciudadana_comite_desarrollo_control_social'));
			$ase_participacionciudadana->setParParticipacionCiudadanaVeedurias($this->getRequestParameter('ase_par_participacion_ciudadana_veedurias'));
			$ase_participacionciudadana->setParParticipacionCiudadanaOtraCual($this->getRequestParameter('ase_par_participacion_ciudadana_otra_cual'));
			$ase_participacionciudadana->setParPropuestasVocales($this->getRequestParameter('ase_par_propuestas_vocales'));
			
			$ase_participacionciudadana->save();
		
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
			$ase_participacionciudadana = new Participacionciudadana();

			$ase_participacionciudadana->setParIafId($iaf_id);
			$ase_participacionciudadana->setParParticipacionCiudadanaDirecta($this->getRequestParameter('ase_par_participacion_ciudadana_directa'));
			$ase_participacionciudadana->setParParticipacionCiudadanaAsamblea($this->getRequestParameter('ase_par_participacion_ciudadana_asamblea'));
			$ase_participacionciudadana->setParParticipacionCiudadanaComiteDesarrolloControlSocial($this->getRequestParameter('ase_par_participacion_ciudadana_comite_desarrollo_control_social'));
			$ase_participacionciudadana->setParParticipacionCiudadanaVeedurias($this->getRequestParameter('ase_par_participacion_ciudadana_veedurias'));
			$ase_participacionciudadana->setParParticipacionCiudadanaOtraCual($this->getRequestParameter('ase_par_participacion_ciudadana_otra_cual'));
			$ase_participacionciudadana->setParPropuestasVocales($this->getRequestParameter('ase_par_propuestas_vocales'));
			
			$ase_participacionciudadana->save();
			
			$salida = "({success: true, mensaje:'La informacion de participacion ciudadana fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en participacion ciudadana'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAseParticipacionCiudadana(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('aseo');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$ase_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($ase_administrativafinanciera)
	{
	
		$conexion = new Criteria();
		$conexion->add(ParticipacionciudadanaPeer::PAR_IAF_ID, $ase_administrativafinanciera->getIafId());
		$ase_participacionciudadana = ParticipacionciudadanaPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($ase_participacionciudadana)
		{
			$datos[$pos]['ase_par_participacion_ciudadana_directa']=$ase_participacionciudadana->getParParticipacionCiudadanaDirecta();
			$datos[$pos]['ase_par_participacion_ciudadana_asamblea']=$ase_participacionciudadana->getParParticipacionCiudadanaAsamblea();
			$datos[$pos]['ase_par_participacion_ciudadana_comite_desarrollo_control_social']=$ase_participacionciudadana->getParParticipacionCiudadanaComiteDesarrolloControlSocial();
			$datos[$pos]['ase_par_participacion_ciudadana_veedurias']=$ase_participacionciudadana->getParParticipacionCiudadanaVeedurias();
			$datos[$pos]['ase_par_participacion_ciudadana_otra_cual']=$ase_participacionciudadana->getParParticipacionCiudadanaOtraCual();
			$datos[$pos]['ase_par_propuestas_vocales']=$ase_participacionciudadana->getParPropuestasVocales();
			
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
