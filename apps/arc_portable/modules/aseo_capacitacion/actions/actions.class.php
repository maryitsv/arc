<?php

/**
 * aseo_capacitacion actions.
 *
 * @package    arc
 * @subpackage aseo_capacitacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class aseo_capacitacionActions extends sfActions
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
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('aseo');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
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
		$ase_administrativafinanciera->setIafPpsAnio($pps_anio);
		$ase_administrativafinanciera->setIafPpsSerId($pps_ser_id);
		$ase_administrativafinanciera->save();

		$iaf_id = $ase_administrativafinanciera->getIafId();
	}

	$conexion = new Criteria();
	$conexion->add(CapacitacionPeer::CAP_IAF_ID, $iaf_id);
	$ase_capacitacion = CapacitacionPeer::doSelectOne($conexion);
		
	if($ase_capacitacion)
	{
		try
		{
			$ase_capacitacion->setCapDadaPrestador($this->getRequestParameter('ase_cap_dada_prestador'));
			$ase_capacitacion->setCapActividadCapacitacionUsoEficienteAgua($this->getRequestParameter('ase_cap_actividad_capacitacion_uso_eficiente_agua'));
			$ase_capacitacion->setCapActividadCapacitacionHigienePersonal($this->getRequestParameter('ase_cap_actividad_capacitacion_higiene_personal'));
			$ase_capacitacion->setCapActividadCapacitacionHigieneVivienda($this->getRequestParameter('ase_cap_actividad_capacitacion_higiene_vivienda'));
			$ase_capacitacion->setCapActividadCapacitacionHigieneSitiosPublicos($this->getRequestParameter('ase_cap_actividad_capacitacion_higiene_sitios_publicos'));
			$ase_capacitacion->setCapActividadCapacitacionEducacionAmbiental($this->getRequestParameter('ase_cap_actividad_capacitacion_educacion_ambiental'));
			$ase_capacitacion->setCapActividadCapacitacionParticipacionComunitaria($this->getRequestParameter('ase_cap_actividad_capacitacion_participacion_comunitaria'));
			$ase_capacitacion->setCapActividadCapacitacionVeeduriaCiudadana($this->getRequestParameter('ase_cap_actividad_capacitacion_veeduria_ciudadana'));
			$ase_capacitacion->setCapActividadCapacitacionFuncionSistAbastecimiento($this->getRequestParameter('ase_cap_actividad_capacitacion_funcion_sist_abastecimiento'));
			$ase_capacitacion->setCapActividadCapacitacionOtraCuales($this->getRequestParameter('ase_cap_actividad_capacitacion_otra_cuales'));
			$ase_capacitacion->setCapCapacitacionRecibidaPrestador($this->getRequestParameter('ase_cap_capacitacion_recibida_prestador')); 
			$ase_capacitacion->setCapTemasCapacitacionAdministrativos($this->getRequestParameter('ase_cap_temas_capacitacion_administrativos'));
			$ase_capacitacion->setCapTemasCapacitacionNormativos($this->getRequestParameter('ase_cap_temas_capacitacion_normativos'));
			$ase_capacitacion->setCapTemasCapacitacionAmbientales($this->getRequestParameter('ase_cap_temas_capacitacion_ambientales'));
			$ase_capacitacion->setCapTemasCapacitacionOperativos($this->getRequestParameter('ase_cap_temas_capacitacion_operativos'));
			$ase_capacitacion->setCapTemasCapacitacionSui($this->getRequestParameter('ase_cap_temas_capacitacion_sui')); 
			$ase_capacitacion->setCapTemasCapacitacionOtraCual($this->getRequestParameter('ase_cap_temas_capacitacion_otra_cual'));
			$ase_capacitacion->setCapInstitucionesOfrecieron($this->getRequestParameter('ase_cap_instituciones_ofrecieron'));
			$ase_capacitacion->setCapNumeroDirectivaHombres($this->getRequestParameter('ase_cap_numero_directiva_hombres'));
			$ase_capacitacion->setCapNumeroDirectivaMujeres($this->getRequestParameter('ase_cap_numero_directiva_mujeres'));
			
			$ase_capacitacion->save();
		
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
			$ase_capacitacion = new Capacitacion();
			
			$ase_capacitacion->setCapIafId($iaf_id);
			$ase_capacitacion->setCapDadaPrestador($this->getRequestParameter('ase_cap_dada_prestador'));
			$ase_capacitacion->setCapActividadCapacitacionUsoEficienteAgua($this->getRequestParameter('ase_cap_actividad_capacitacion_uso_eficiente_agua'));
			$ase_capacitacion->setCapActividadCapacitacionHigienePersonal($this->getRequestParameter('ase_cap_actividad_capacitacion_higiene_personal'));

			$ase_capacitacion->setCapActividadCapacitacionHigieneVivienda($this->getRequestParameter('ase_cap_actividad_capacitacion_higiene_vivienda'));
			$ase_capacitacion->setCapActividadCapacitacionHigieneSitiosPublicos($this->getRequestParameter('ase_cap_actividad_capacitacion_higiene_sitios_publicos'));
			$ase_capacitacion->setCapActividadCapacitacionEducacionAmbiental($this->getRequestParameter('ase_cap_actividad_capacitacion_educacion_ambiental'));
			$ase_capacitacion->setCapActividadCapacitacionParticipacionComunitaria($this->getRequestParameter('ase_cap_actividad_capacitacion_participacion_comunitaria'));
			$ase_capacitacion->setCapActividadCapacitacionVeeduriaCiudadana($this->getRequestParameter('ase_cap_actividad_capacitacion_veeduria_ciudadana'));
			$ase_capacitacion->setCapActividadCapacitacionFuncionSistAbastecimiento($this->getRequestParameter('ase_cap_actividad_capacitacion_funcion_sist_abastecimiento'));
			$ase_capacitacion->setCapActividadCapacitacionOtraCuales($this->getRequestParameter('ase_cap_actividad_capacitacion_otra_cuales'));
			$ase_capacitacion->setCapCapacitacionRecibidaPrestador($this->getRequestParameter('ase_cap_capacitacion_recibida_prestador')); 
			$ase_capacitacion->setCapTemasCapacitacionAdministrativos($this->getRequestParameter('ase_cap_temas_capacitacion_administrativos'));
			$ase_capacitacion->setCapTemasCapacitacionNormativos($this->getRequestParameter('ase_cap_temas_capacitacion_normativos'));
			$ase_capacitacion->setCapTemasCapacitacionAmbientales($this->getRequestParameter('ase_cap_temas_capacitacion_ambientales'));
			$ase_capacitacion->setCapTemasCapacitacionOperativos($this->getRequestParameter('ase_cap_temas_capacitacion_operativos'));
			$ase_capacitacion->setCapTemasCapacitacionSui($this->getRequestParameter('ase_cap_temas_capacitacion_sui')); 
			$ase_capacitacion->setCapTemasCapacitacionOtraCual($this->getRequestParameter('ase_cap_temas_capacitacion_otra_cual'));
			$ase_capacitacion->setCapInstitucionesOfrecieron($this->getRequestParameter('ase_cap_instituciones_ofrecieron'));
			$ase_capacitacion->setCapNumeroDirectivaHombres($this->getRequestParameter('ase_cap_numero_directiva_hombres'));
			$ase_capacitacion->setCapNumeroDirectivaMujeres($this->getRequestParameter('ase_cap_numero_directiva_mujeres'));
			
			$ase_capacitacion->save();
			
			$salida = "({success: true, mensaje:'La informacion de capacitacion fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en capacitacion:".$exception."'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAseCapacitacion(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('aseo');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_SER_ID, $pps_ser_id);
	$ase_administrativafinanciera = AdministrativafinancieraPeer::doSelectOne($conexion);

	if($ase_administrativafinanciera)
	{
	
		$conexion = new Criteria();
		$conexion->add(CapacitacionPeer::CAP_IAF_ID, $ase_administrativafinanciera->getIafId());
		$ase_capacitacion = CapacitacionPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($ase_capacitacion)
		{
		
			$datos[$pos]['ase_cap_dada_prestador']=$ase_capacitacion->getCapDadaPrestador();
			$datos[$pos]['ase_cap_actividad_capacitacion_uso_eficiente_agua']=$ase_capacitacion->getCapActividadCapacitacionUsoEficienteAgua();
			$datos[$pos]['ase_cap_actividad_capacitacion_higiene_personal']=$ase_capacitacion->getCapActividadCapacitacionHigienePersonal();
			$datos[$pos]['ase_cap_actividad_capacitacion_higiene_vivienda']=$ase_capacitacion->getCapActividadCapacitacionHigieneVivienda();
			$datos[$pos]['ase_cap_actividad_capacitacion_higiene_sitios_publicos']=$ase_capacitacion->getCapActividadCapacitacionHigieneSitiosPublicos();
			$datos[$pos]['ase_cap_actividad_capacitacion_educacion_ambiental']=$ase_capacitacion->getCapActividadCapacitacionEducacionAmbiental();
			$datos[$pos]['ase_cap_actividad_capacitacion_participacion_comunitaria']=$ase_capacitacion->getCapActividadCapacitacionParticipacionComunitaria();
			$datos[$pos]['ase_cap_actividad_capacitacion_veeduria_ciudadana']=$ase_capacitacion->getCapActividadCapacitacionVeeduriaCiudadana();
			$datos[$pos]['ase_cap_actividad_capacitacion_funcion_sist_abastecimiento']=$ase_capacitacion->getCapActividadCapacitacionFuncionSistAbastecimiento();
			$datos[$pos]['ase_cap_actividad_capacitacion_otra_cuales']=$ase_capacitacion->getCapActividadCapacitacionOtraCuales();
			$datos[$pos]['ase_cap_capacitacion_recibida_prestador']=$ase_capacitacion->getCapCapacitacionRecibidaPrestador(); 
			$datos[$pos]['ase_cap_temas_capacitacion_administrativos']=$ase_capacitacion->getCapTemasCapacitacionAdministrativos();
			$datos[$pos]['ase_cap_temas_capacitacion_normativos']=$ase_capacitacion->getCapTemasCapacitacionNormativos();
			$datos[$pos]['ase_cap_temas_capacitacion_ambientales']=$ase_capacitacion->getCapTemasCapacitacionAmbientales();
			$datos[$pos]['ase_cap_temas_capacitacion_operativos']=$ase_capacitacion->getCapTemasCapacitacionOperativos();
			$datos[$pos]['ase_cap_temas_capacitacion_sui']=$ase_capacitacion->getCapTemasCapacitacionSui(); 
			$datos[$pos]['ase_cap_temas_capacitacion_otra_cual']=$ase_capacitacion->getCapTemasCapacitacionOtraCual();
			$datos[$pos]['ase_cap_instituciones_ofrecieron']=$ase_capacitacion->getCapInstitucionesOfrecieron();
			$datos[$pos]['ase_cap_numero_directiva_hombres']=$ase_capacitacion->getCapNumeroDirectivaHombres();
			$datos[$pos]['ase_cap_numero_directiva_mujeres']=$ase_capacitacion->getCapNumeroDirectivaMujeres();
			
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
