<?php

/**
 * alcantarillado_capacitacion actions.
 *
 * @package    arc
 * @subpackage alcantarillado_capacitacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_capacitacionActions extends sfActions
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
  
  public function executeActualizarCapacitacion(sfWebRequest $request)
  {
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PERIODO, $pps_periodo);
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
		$alc_administrativafinanciera->setIafPpsPeriodo($pps_periodo);
		$alc_administrativafinanciera->setIafPpsSerId($pps_ser_id);
		$alc_administrativafinanciera->save();

		$iaf_id = $alc_administrativafinanciera->getIafId();
	}

	$conexion = new Criteria();
	$conexion->add(CapacitacionPeer::CAP_IAF_ID, $iaf_id);
	$alc_capacitacion = CapacitacionPeer::doSelectOne($conexion);
		
	if($alc_capacitacion)
	{
		try
		{
			$alc_capacitacion->setCapDadaPrestador($this->getRequestParameter('alc_cap_dada_prestador'));
			$alc_capacitacion->setCapActividadCapacitacionUsoEficienteAgua($this->getRequestParameter('alc_cap_actividad_capacitacion_uso_eficiente_agua'));
			$alc_capacitacion->setCapActividadCapacitacionHigienePersonal($this->getRequestParameter('alc_cap_actividad_capacitacion_higiene_personal'));
			$alc_capacitacion->setCapActividadCapacitacionHigieneVivienda($this->getRequestParameter('alc_cap_actividad_capacitacion_higiene_vivienda'));
			$alc_capacitacion->setCapActividadCapacitacionHigieneSitiosPublicos($this->getRequestParameter('alc_cap_actividad_capacitacion_higiene_sitios_publicos'));
			$alc_capacitacion->setCapActividadCapacitacionEducacionAmbiental($this->getRequestParameter('alc_cap_actividad_capacitacion_educacion_ambiental'));
			$alc_capacitacion->setCapActividadCapacitacionParticipacionComunitaria($this->getRequestParameter('alc_cap_actividad_capacitacion_participacion_comunitaria'));
			$alc_capacitacion->setCapActividadCapacitacionVeeduriaCiudadana($this->getRequestParameter('alc_cap_actividad_capacitacion_veeduria_ciudadana'));
			$alc_capacitacion->setCapActividadCapacitacionFuncionSistAbastecimiento($this->getRequestParameter('alc_cap_actividad_capacitacion_funcion_sist_abastecimiento'));
			$alc_capacitacion->setCapActividadCapacitacionOtraCuales($this->getRequestParameter('alc_cap_actividad_capacitacion_otra_cuales'));
			$alc_capacitacion->setCapCapacitacionRecibidaPrestador($this->getRequestParameter('alc_cap_capacitacion_recibida_prestador')); 
			$alc_capacitacion->setCapTemasCapacitacionAdministrativos($this->getRequestParameter('alc_cap_temas_capacitacion_administrativos'));
			$alc_capacitacion->setCapTemasCapacitacionNormativos($this->getRequestParameter('alc_cap_temas_capacitacion_normativos'));
			$alc_capacitacion->setCapTemasCapacitacionAmbientales($this->getRequestParameter('alc_cap_temas_capacitacion_ambientales'));
			$alc_capacitacion->setCapTemasCapacitacionOperativos($this->getRequestParameter('alc_cap_temas_capacitacion_operativos'));
			$alc_capacitacion->setCapTemasCapacitacionSui($this->getRequestParameter('alc_cap_temas_capacitacion_sui')); 
			$alc_capacitacion->setCapTemasCapacitacionOtraCual($this->getRequestParameter('alc_cap_temas_capacitacion_otra_cual'));
			$alc_capacitacion->setCapInstitucionesOfrecieron($this->getRequestParameter('alc_cap_instituciones_ofrecieron'));
			$alc_capacitacion->setCapNumeroDirectivaHombres($this->getRequestParameter('alc_cap_numero_directiva_hombres'));
			$alc_capacitacion->setCapNumeroDirectivaMujeres($this->getRequestParameter('alc_cap_numero_directiva_mujeres'));
			
			$alc_capacitacion->save();
		
			$salida = "({success: true, mensaje:'La informacion de capacitacion fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en capacitacion'}})");
		}
	}
	else
	{
		try
		{
			$alc_capacitacion = new Capacitacion();
			
			$alc_capacitacion->setCapIafId($iaf_id);
			$alc_capacitacion->setCapDadaPrestador($this->getRequestParameter('alc_cap_dada_prestador'));
			$alc_capacitacion->setCapActividadCapacitacionUsoEficienteAgua($this->getRequestParameter('alc_cap_actividad_capacitacion_uso_eficiente_agua'));
			$alc_capacitacion->setCapActividadCapacitacionHigienePersonal($this->getRequestParameter('alc_cap_actividad_capacitacion_higiene_personal'));

			$alc_capacitacion->setCapActividadCapacitacionHigieneVivienda($this->getRequestParameter('alc_cap_actividad_capacitacion_higiene_vivienda'));
			$alc_capacitacion->setCapActividadCapacitacionHigieneSitiosPublicos($this->getRequestParameter('alc_cap_actividad_capacitacion_higiene_sitios_publicos'));
			$alc_capacitacion->setCapActividadCapacitacionEducacionAmbiental($this->getRequestParameter('alc_cap_actividad_capacitacion_educacion_ambiental'));
			$alc_capacitacion->setCapActividadCapacitacionParticipacionComunitaria($this->getRequestParameter('alc_cap_actividad_capacitacion_participacion_comunitaria'));
			$alc_capacitacion->setCapActividadCapacitacionVeeduriaCiudadana($this->getRequestParameter('alc_cap_actividad_capacitacion_veeduria_ciudadana'));
			$alc_capacitacion->setCapActividadCapacitacionFuncionSistAbastecimiento($this->getRequestParameter('alc_cap_actividad_capacitacion_funcion_sist_abastecimiento'));
			$alc_capacitacion->setCapActividadCapacitacionOtraCuales($this->getRequestParameter('alc_cap_actividad_capacitacion_otra_cuales'));
			$alc_capacitacion->setCapCapacitacionRecibidaPrestador($this->getRequestParameter('alc_cap_capacitacion_recibida_prestador')); 
			$alc_capacitacion->setCapTemasCapacitacionAdministrativos($this->getRequestParameter('alc_cap_temas_capacitacion_administrativos'));
			$alc_capacitacion->setCapTemasCapacitacionNormativos($this->getRequestParameter('alc_cap_temas_capacitacion_normativos'));
			$alc_capacitacion->setCapTemasCapacitacionAmbientales($this->getRequestParameter('alc_cap_temas_capacitacion_ambientales'));
			$alc_capacitacion->setCapTemasCapacitacionOperativos($this->getRequestParameter('alc_cap_temas_capacitacion_operativos'));
			$alc_capacitacion->setCapTemasCapacitacionSui($this->getRequestParameter('alc_cap_temas_capacitacion_sui')); 
			$alc_capacitacion->setCapTemasCapacitacionOtraCual($this->getRequestParameter('alc_cap_temas_capacitacion_otra_cual'));
			$alc_capacitacion->setCapInstitucionesOfrecieron($this->getRequestParameter('alc_cap_instituciones_ofrecieron'));
			$alc_capacitacion->setCapNumeroDirectivaHombres($this->getRequestParameter('alc_cap_numero_directiva_hombres'));
			$alc_capacitacion->setCapNumeroDirectivaMujeres($this->getRequestParameter('alc_cap_numero_directiva_mujeres'));
			
			$alc_capacitacion->save();
			
			$salida = "({success: true, mensaje:'La informacion de capacitacion fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en capacitacion:".$exception."'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAlcCapacitacion(sfWebRequest $request)
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
		$conexion->add(CapacitacionPeer::CAP_IAF_ID, $alc_administrativafinanciera->getIafId());
		$alc_capacitacion = CapacitacionPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($alc_capacitacion)
		{
		
			$datos[$pos]['alc_cap_dada_prestador']=$alc_capacitacion->getCapDadaPrestador();
			$datos[$pos]['alc_cap_actividad_capacitacion_uso_eficiente_agua']=$alc_capacitacion->getCapActividadCapacitacionUsoEficienteAgua();
			$datos[$pos]['alc_cap_actividad_capacitacion_higiene_personal']=$alc_capacitacion->getCapActividadCapacitacionHigienePersonal();
			$datos[$pos]['alc_cap_actividad_capacitacion_higiene_vivienda']=$alc_capacitacion->getCapActividadCapacitacionHigieneVivienda();
			$datos[$pos]['alc_cap_actividad_capacitacion_higiene_sitios_publicos']=$alc_capacitacion->getCapActividadCapacitacionHigieneSitiosPublicos();
			$datos[$pos]['alc_cap_actividad_capacitacion_educacion_ambiental']=$alc_capacitacion->getCapActividadCapacitacionEducacionAmbiental();
			$datos[$pos]['alc_cap_actividad_capacitacion_participacion_comunitaria']=$alc_capacitacion->getCapActividadCapacitacionParticipacionComunitaria();
			$datos[$pos]['alc_cap_actividad_capacitacion_veeduria_ciudadana']=$alc_capacitacion->getCapActividadCapacitacionVeeduriaCiudadana();
			$datos[$pos]['alc_cap_actividad_capacitacion_funcion_sist_abastecimiento']=$alc_capacitacion->getCapActividadCapacitacionFuncionSistAbastecimiento();
			$datos[$pos]['alc_cap_actividad_capacitacion_otra_cuales']=$alc_capacitacion->getCapActividadCapacitacionOtraCuales();
			$datos[$pos]['alc_cap_capacitacion_recibida_prestador']=$alc_capacitacion->getCapCapacitacionRecibidaPrestador(); 
			$datos[$pos]['alc_cap_temas_capacitacion_administrativos']=$alc_capacitacion->getCapTemasCapacitacionAdministrativos();
			$datos[$pos]['alc_cap_temas_capacitacion_normativos']=$alc_capacitacion->getCapTemasCapacitacionNormativos();
			$datos[$pos]['alc_cap_temas_capacitacion_ambientales']=$alc_capacitacion->getCapTemasCapacitacionAmbientales();
			$datos[$pos]['alc_cap_temas_capacitacion_operativos']=$alc_capacitacion->getCapTemasCapacitacionOperativos();
			$datos[$pos]['alc_cap_temas_capacitacion_sui']=$alc_capacitacion->getCapTemasCapacitacionSui(); 
			$datos[$pos]['alc_cap_temas_capacitacion_otra_cual']=$alc_capacitacion->getCapTemasCapacitacionOtraCual();
			$datos[$pos]['alc_cap_instituciones_ofrecieron']=$alc_capacitacion->getCapInstitucionesOfrecieron();
			$datos[$pos]['alc_cap_numero_directiva_hombres']=$alc_capacitacion->getCapNumeroDirectivaHombres();
			$datos[$pos]['alc_cap_numero_directiva_mujeres']=$alc_capacitacion->getCapNumeroDirectivaMujeres();
			
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
