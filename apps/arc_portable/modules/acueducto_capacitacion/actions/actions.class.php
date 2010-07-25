<?php

/**
 * acueducto_capacitacion actions.
 *
 * @package    arc
 * @subpackage acueducto_capacitacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_capacitacionActions extends sfActions
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
		$conexion->add(CapacitacionPeer::CAP_IAF_ID, $iaf_id);
		$acu_capacitacion = CapacitacionPeer::doSelectOne($conexion);
		
		if($acu_capacitacion)
		{
			try
			{
				$acu_capacitacion->setCapDadaPrestador($this->getRequestParameter('acu_cap_dada_prestador'));
				$acu_capacitacion->setCapActividadCapacitacionUsoEficienteAgua($this->getRequestParameter('acu_cap_actividad_capacitacion_uso_eficiente_agua'));
			//	$acu_capacitacion->setCapActividadCapacitacionHigienePersonal($this->getRequestParameter('acu_cap_actividad_capacitacion_higene_personal'));
			//	$acu_capacitacion->setCapActividadCapacitacionHigieneVivienda($this->getRequestParameter('acu_cap_actividad_capacitacion_higene_vivienda'));
			//	$acu_capacitacion->setCapActividadCapacitacionHigieneSitiosPublicos($this->getRequestParameter('acu_cap_actividad_capacitacion_higene_sitios_publicos'));
				$acu_capacitacion->setCapActividadCapacitacionEducacionAmbiental($this->getRequestParameter('acu_cap_actividad_capacitacion_educacion_ambiental'));
				$acu_capacitacion->setCapActividadCapacitacionParticipacionComunitaria($this->getRequestParameter('acu_cap_actividad_capacitacion_participacion_comunitaria'));
				$acu_capacitacion->setCapActividadCapacitacionVeeduriaCiudadana($this->getRequestParameter('acu_cap_actividad_capacitacion_veeduria_ciudadana'));
				$acu_capacitacion->setCapActividadCapacitacionFuncionSistAbastecimiento($this->getRequestParameter('acu_cap_actividad_capacitacion_funcion_sist_abastecimiento'));
				$acu_capacitacion->setCapActividadCapacitacionOtraCuales($this->getRequestParameter('acu_cap_actividad_capacitacion_otra_cuales'));
			//	$acu_capacitacion->setCapCapacitacionRecibidaPrestador($this->getRequestParameter('acu_cap_capacitacion_recibida_prestador')); 
				$acu_capacitacion->setCapTemasCapacitacionAdministrativos($this->getRequestParameter('acu_cap_temas_capacitacion_administrativos'));
				$acu_capacitacion->setCapTemasCapacitacionNormativos($this->getRequestParameter('acu_cap_temas_capacitacion_normativos'));
				$acu_capacitacion->setCapTemasCapacitacionAmbientales($this->getRequestParameter('acu_cap_temas_capacitacion_ambientales'));
				$acu_capacitacion->setCapTemasCapacitacionOperativos($this->getRequestParameter('acu_cap_temas_capacitacion_operativos'));
				$acu_capacitacion->setCapTemasCapacitacionSui($this->getRequestParameter('acu_cap_temas_capacitacion_sui')); 
				$acu_capacitacion->setCapTemasCapacitacionOtraCual($this->getRequestParameter('acu_cap_temas_capacitacion_otra_cual'));
				$acu_capacitacion->setCapInstitucionesOfrecieron($this->getRequestParameter('acu_cap_instituciones_ofrecieron'));
				$acu_capacitacion->setCapNumeroDirectivaHombres($this->getRequestParameter('acu_cap_numero_directiva_hombres'));
				$acu_capacitacion->setCapNumeroDirectivaMujeres($this->getRequestParameter('acu_cap_numero_directiva_mujeres'));
				
				$acu_capacitacion->save();
			
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
				$acu_capacitacion = new Capacitacion();
				
				$acu_capacitacion->setCapIafId($iaf_id);
				$acu_capacitacion->setCapDadaPrestador($this->getRequestParameter('acu_cap_dada_prestador'));
				$acu_capacitacion->setCapActividadCapacitacionUsoEficienteAgua($this->getRequestParameter('acu_cap_actividad_capacitacion_uso_eficiente_agua'));
			//	$acu_capacitacion->setCapActividadCapacitacionHigienePersonal($this->getRequestParameter('acu_cap_actividad_capacitacion_higene_personal'));
			//  cap_actividad_capacitacion_higene_personal en la bd
			//  cap_actividad_capacitacion_higene_vivienda en la bd
			//  cap_actividad_capacitacion_higene_sitios_publicos en la bd
  
			//	$acu_capacitacion->setCapActividadCapacitacionHigieneVivienda($this->getRequestParameter('acu_cap_actividad_capacitacion_higene_vivienda'));
			//	$acu_capacitacion->setCapActividadCapacitacionHigieneSitiosPublicos($this->getRequestParameter('acu_cap_actividad_capacitacion_higene_sitios_publicos'));
				$acu_capacitacion->setCapActividadCapacitacionEducacionAmbiental($this->getRequestParameter('acu_cap_actividad_capacitacion_educacion_ambiental'));
				$acu_capacitacion->setCapActividadCapacitacionParticipacionComunitaria($this->getRequestParameter('acu_cap_actividad_capacitacion_participacion_comunitaria'));
				$acu_capacitacion->setCapActividadCapacitacionVeeduriaCiudadana($this->getRequestParameter('acu_cap_actividad_capacitacion_veeduria_ciudadana'));
				$acu_capacitacion->setCapActividadCapacitacionFuncionSistAbastecimiento($this->getRequestParameter('acu_cap_actividad_capacitacion_funcion_sist_abastecimiento'));
				$acu_capacitacion->setCapActividadCapacitacionOtraCuales($this->getRequestParameter('acu_cap_actividad_capacitacion_otra_cuales'));
			//	$acu_capacitacion->setCapCapacitacionRecibidaPrestador($this->getRequestParameter('acu_cap_capacitacion_recibida_prestador')); 
			// cap_capacitacion_recibida_prest en la bd
				$acu_capacitacion->setCapTemasCapacitacionAdministrativos($this->getRequestParameter('acu_cap_temas_capacitacion_administrativos'));
				$acu_capacitacion->setCapTemasCapacitacionNormativos($this->getRequestParameter('acu_cap_temas_capacitacion_normativos'));
				$acu_capacitacion->setCapTemasCapacitacionAmbientales($this->getRequestParameter('acu_cap_temas_capacitacion_ambientales'));
				$acu_capacitacion->setCapTemasCapacitacionOperativos($this->getRequestParameter('acu_cap_temas_capacitacion_operativos'));
				$acu_capacitacion->setCapTemasCapacitacionSui($this->getRequestParameter('acu_cap_temas_capacitacion_sui')); 
				$acu_capacitacion->setCapTemasCapacitacionOtraCual($this->getRequestParameter('acu_cap_temas_capacitacion_otra_cual'));
				$acu_capacitacion->setCapInstitucionesOfrecieron($this->getRequestParameter('acu_cap_instituciones_ofrecieron'));
				$acu_capacitacion->setCapNumeroDirectivaHombres($this->getRequestParameter('acu_cap_numero_directiva_hombres'));
				$acu_capacitacion->setCapNumeroDirectivaMujeres($this->getRequestParameter('acu_cap_numero_directiva_mujeres'));
				
				$acu_capacitacion->save();
				
				$salida = "({success: true, mensaje:'La informacion de capacitacion fue actualizada exitosamente'})";
			}
			catch(Exception $exception)
			{
				return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en capacitacion'}})");
			}
		}
	}
	else
	{
		return $this->renderText("({success: false, errors: { reason: 'Debe primero registrar informacion general de administracion financiera'}})");
	}
	
	return $this->renderText($salida);
  }
  
}
