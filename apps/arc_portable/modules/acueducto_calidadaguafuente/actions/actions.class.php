<?php

/**
 * acueducto_calidadaguafuente actions.
 *
 * @package    arc
 * @subpackage acueducto_calidadaguafuente
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_calidadaguafuenteActions extends sfActions
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
  
  public function executeActualizarCalidadAguaFuente(sfWebRequest $request)
  {
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(CalidadPeer::CAL_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(CalidadPeer::CAL_PPS_ANIO, $pps_anio);
	$conexion->add(CalidadPeer::CAL_PPS_SER_ID, $pps_ser_id);
	$acu_calidad = CalidadPeer::doSelectOne($conexion);

	$cal_id;
	
	if($acu_calidad)
	{
		$cal_id = $acu_calidad->getCalId();
	}
	else
	{
		$acu_calidad = new Calidad();
		$acu_calidad->setCalPpsPreId($pps_pre_id);
		$acu_calidad->setCalPpsAnio($pps_anio);
		$acu_calidad->setCalPpsSerId($pps_ser_id);
		$acu_calidad->save();

		$cal_id = $acu_calidad->getCalId();
	}

	$conexion = new Criteria();
	$conexion->add(CalidadaguaPeer::CAG_CAL_ID, $cal_id);
	$acu_calidadaguafuente = CalidadaguaPeer::doSelectOne($conexion);
		
	if($acu_calidadaguafuente)
	{
		try
		{
			$acu_calidadaguafuente->setCagControlCaFuente($this->getRequestParameter('acu_cag_control_ca_fuente'));
			$acu_calidadaguafuente->setCagMapaRiesgo($this->getRequestParameter('acu_cag_mapa_riesgo'));
			$acu_calidadaguafuente->setCagDb05Valor($this->getRequestParameter('acu_cag_db05_valor'));
			$acu_calidadaguafuente->setCagDb05Frecuencia($this->getRequestParameter('acu_cag_db05_frecuencia'));
			$acu_calidadaguafuente->setCagColiformesValor($this->getRequestParameter('acu_cag_coliformes_valor'));
			$acu_calidadaguafuente->setCagColiformesFrecuencia($this->getRequestParameter('acu_cag_coliformes_frecuencia'));
			$acu_calidadaguafuente->setCagOxigenoDisueltoValor($this->getRequestParameter('acu_cag_oxigeno_disuelto_valor'));
			$acu_calidadaguafuente->setCagOxigenoDisueltoFrecuencia($this->getRequestParameter('acu_cag_oxigeno_disuelto_frecuencia'));
			$acu_calidadaguafuente->setCagPhValor($this->getRequestParameter('acu_cag_ph_valor'));
			$acu_calidadaguafuente->setCagPhFrecuencia($this->getRequestParameter('acu_cag_ph_frecuencia'));
			$acu_calidadaguafuente->setCagTurbiedadValor($this->getRequestParameter('acu_cag_turbiedad_valor'));
			$acu_calidadaguafuente->setCagTurbiedadFrecuencia($this->getRequestParameter('acu_cag_turbiedad_frecuencia'));
			$acu_calidadaguafuente->setCagColorVerdaderoValor($this->getRequestParameter('acu_cag_color_verdadero_valor'));
			$acu_calidadaguafuente->setCagColorVerdaderoFrecuencia($this->getRequestParameter('acu_cag_color_verdadero_frecuencia'));
			$acu_calidadaguafuente->setCagSaborOlorValor($this->getRequestParameter('acu_cag_sabor_olor_valor'));
			$acu_calidadaguafuente->setCagSaborOlorFrecuencia($this->getRequestParameter('acu_cag_sabor_olor_frecuencia'));
			$acu_calidadaguafuente->setCagClorurosValor($this->getRequestParameter('acu_cag_cloruros_valor'));
			$acu_calidadaguafuente->setCagClorurosFrecuencia($this->getRequestParameter('acu_cag_cloruros_frecuencia'));
			$acu_calidadaguafuente->setCagFluorurosValor($this->getRequestParameter('acu_cag_fluoruros_valor'));
			$acu_calidadaguafuente->setCagFluorurosFrecuencia($this->getRequestParameter('acu_cag_fluoruros_frecuencia'));
			$acu_calidadaguafuente->setCagLaboratorioPropio($this->getRequestParameter('acu_cag_laboratorio_propio'));
			$acu_calidadaguafuente->setCagControlCaDistribuida($this->getRequestParameter('acu_cag_control_ca_distribuida'));
			$acu_calidadaguafuente->setCagPuntosRedAnalizados($this->getRequestParameter('acu_cag_puntos_red_analizados'));
			$acu_calidadaguafuente->setCagVisitaSspd($this->getRequestParameter('acu_cag_visita_sspd'));
			
			$acu_calidadaguafuente->save();
		
			$salida = "({success: true, mensaje:'La informacion de calidad de agua en la fuente fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en calidad de agua:".$exception."'}})");
		}
	}
	else
	{
		try
		{
			$acu_calidadaguafuente = new Calidadagua();
			
			$acu_calidadaguafuente->setCagCalId($cal_id);
			
			$acu_calidadaguafuente->setCagControlCaFuente($this->getRequestParameter('acu_cag_control_ca_fuente'));
			$acu_calidadaguafuente->setCagMapaRiesgo($this->getRequestParameter('acu_cag_mapa_riesgo'));
			$acu_calidadaguafuente->setCagDb05Valor($this->getRequestParameter('acu_cag_db05_valor'));
			$acu_calidadaguafuente->setCagDb05Frecuencia($this->getRequestParameter('acu_cag_db05_frecuencia'));
			$acu_calidadaguafuente->setCagColiformesValor($this->getRequestParameter('acu_cag_coliformes_valor'));
			$acu_calidadaguafuente->setCagColiformesFrecuencia($this->getRequestParameter('acu_cag_coliformes_frecuencia'));
			$acu_calidadaguafuente->setCagOxigenoDisueltoValor($this->getRequestParameter('acu_cag_oxigeno_disuelto_valor'));
			$acu_calidadaguafuente->setCagOxigenoDisueltoFrecuencia($this->getRequestParameter('acu_cag_oxigeno_disuelto_frecuencia'));
			$acu_calidadaguafuente->setCagPhValor($this->getRequestParameter('acu_cag_ph_valor'));
			$acu_calidadaguafuente->setCagPhFrecuencia($this->getRequestParameter('acu_cag_ph_frecuencia'));
			$acu_calidadaguafuente->setCagTurbiedadValor($this->getRequestParameter('acu_cag_turbiedad_valor'));
			$acu_calidadaguafuente->setCagTurbiedadFrecuencia($this->getRequestParameter('acu_cag_turbiedad_frecuencia'));
			$acu_calidadaguafuente->setCagColorVerdaderoValor($this->getRequestParameter('acu_cag_color_verdadero_valor'));
			$acu_calidadaguafuente->setCagColorVerdaderoFrecuencia($this->getRequestParameter('acu_cag_color_verdadero_frecuencia'));
			$acu_calidadaguafuente->setCagSaborOlorValor($this->getRequestParameter('acu_cag_sabor_olor_valor'));
			$acu_calidadaguafuente->setCagSaborOlorFrecuencia($this->getRequestParameter('acu_cag_sabor_olor_frecuencia'));
			$acu_calidadaguafuente->setCagClorurosValor($this->getRequestParameter('acu_cag_cloruros_valor'));
			$acu_calidadaguafuente->setCagClorurosFrecuencia($this->getRequestParameter('acu_cag_cloruros_frecuencia'));
			$acu_calidadaguafuente->setCagFluorurosValor($this->getRequestParameter('acu_cag_fluoruros_valor'));
			$acu_calidadaguafuente->setCagFluorurosFrecuencia($this->getRequestParameter('acu_cag_fluoruros_frecuencia'));
			$acu_calidadaguafuente->setCagLaboratorioPropio($this->getRequestParameter('acu_cag_laboratorio_propio'));
			$acu_calidadaguafuente->setCagControlCaDistribuida($this->getRequestParameter('acu_cag_control_ca_distribuida'));
			$acu_calidadaguafuente->setCagPuntosRedAnalizados($this->getRequestParameter('acu_cag_puntos_red_analizados'));
			$acu_calidadaguafuente->setCagVisitaSspd($this->getRequestParameter('acu_cag_visita_sspd'));
			
			$acu_calidadaguafuente->save();
			
			$salida = "({success: true, mensaje:'La informacion de calidad de agua en la fuente fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en calidad de agua:".$exception."'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcuCalidadAguaFuente(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(CalidadPeer::CAL_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(CalidadPeer::CAL_PPS_ANIO, $pps_anio);
	$conexion->add(CalidadPeer::CAL_PPS_SER_ID, $pps_ser_id);
	$acu_calidad = CalidadPeer::doSelectOne($conexion);

	if($acu_calidad)
	{
	
		$conexion = new Criteria();
		$conexion->add(CapacitacionPeer::CAP_IAF_ID, $acu_calidad->getCalId());
		$acu_calidadaguafuente = CalidadaguaPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($acu_calidadaguafuente)
		{
			/*$datos[0]['parametros']='DBO<sub>5</sub>(mg/l)';
			$datos[0]['valores']=$acu_calidadaguafuente->();
			$datos[0]['frecuencia']=$acu_calidadaguafuente->();
			$datos[1]['parametros']='Coliformes Totales UFC/100 ml';
			$datos[1]['valores']=$acu_calidadaguafuente->();
			$datos[1]['frecuencia']=$acu_calidadaguafuente->();
			$datos[2]['parametros']='Ox&iacute;geno disuelto (mg/l)';
			$datos[2]['valores']=$acu_calidadaguafuente->();
			$datos[2]['frecuencia']=$acu_calidadaguafuente->();
			$datos[3]['parametros']='pH';
			$datos[3]['valores']=$acu_calidadaguafuente->(); 
			$datos[3]['frecuencia']=$acu_calidadaguafuente->();
			$datos[4]['parametros']='Turbiedad (UNT)';
			$datos[4]['valores']=$acu_calidadaguafuente->();
			$datos[4]['frecuencia']=$acu_calidadaguafuente->();
			$datos[5]['parametros']='Color verdadero (UPC)'; 
			$datos[5]['valores']=$acu_calidadaguafuente->();
			$datos[5]['frecuencia']=$acu_calidadaguafuente->();
			$datos[6]['parametros']='Sabor y Olor';
			$datos[6]['valores']=$acu_calidadaguafuente->();
			$datos[6]['frecuencia']=$acu_calidadaguafuente->();
			$datos[7]['parametros']='Cloruros (mg-Cl)';
			$datos[7]['valores']=$acu_calidadaguafuente->();
			$datos[7]['frecuencia']=$acu_calidadaguafuente->();
			$datos[8]['parametros']='Floruros (mg-F)';
			$datos[8]['valores']=$acu_calidadaguafuente->();
			$datos[8]['frecuencia']=$acu_calidadaguafuente->();*/
			
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
