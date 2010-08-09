<?php

/**
 * acueducto_calidadaguadistribuida actions.
 *
 * @package    arc
 * @subpackage acueducto_calidadaguadistribuida
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_calidadaguadistribuidaActions extends sfActions
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
  
  public function executeObtenerDatosAcuCalidadAguaDistribuida(sfWebRequest $request)
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
	
	if(!$acu_calidad)
	{
		try
		{
			$acu_calidad = new Calidad();
			$acu_calidad->setCalPpsPreId($pps_pre_id);
			$acu_calidad->setCalPpsAnio($pps_anio);
			$acu_calidad->setCalPpsSerId($pps_ser_id);
			$acu_calidad->save();
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Error en calidad'}})");
		}
	}

	$conexion = new Criteria();
	$conexion->add(CalidadaguaPeer::CAG_CAL_ID, $acu_calidad->getCalId());
	$acu_calidadaguadistribuida = CalidadaguaPeer::doSelectOne($conexion);

	$datos;
	$pos=0;

	if($acu_calidadaguadistribuida)
	{
		$acu_cag_id = $acu_calidadaguadistribuida->getCagId();
		
		$conexion = new Criteria();
		$numero_parametrosred = ParametrospuntosredPeer::doCount($conexion);
		$parametrosred = ParametrospuntosredPeer::doSelect($conexion);

		$datos[0]['acu_cag_control_ca_distribuida']=$acu_calidadaguadistribuida->getCagControlCaDistribuida();
		$datos[0]['acu_cag_numero_visita_sspd']=$acu_calidadaguadistribuida->getCagNumeroVisitaSspd();
		
		if($parametrosred)
		{
			foreach ($parametrosred As $temporal)
			{
				$acu_ppr_id = $temporal->getPprId();
			
				$datos[$pos]['acu_ppr_id']=$acu_ppr_id;
				$datos[$pos]['acu_ppr_nombre_parametro']=$temporal->getPprNombreParametro();
				$datos[$pos]['acu_pfe_frecuencia_minima']=$this->obtenerFrecuenciaMinima($acu_cag_id, $acu_ppr_id);
				$datos[$pos]['acu_pfe_frecuencia_real']=$this->obtenerFrecuenciaReal($acu_cag_id, $acu_ppr_id);
				$datos[$pos]['acu_rep_resultado_punto_1']=$this->obtenerResultadoPunto($acu_cag_id, $acu_ppr_id, 1);
				$datos[$pos]['acu_rep_resultado_punto_2']=$this->obtenerResultadoPunto($acu_cag_id, $acu_ppr_id, 2);
				$datos[$pos]['acu_rep_resultado_punto_3']=$this->obtenerResultadoPunto($acu_cag_id, $acu_ppr_id, 3);
				
				$pos++;
			}
		}
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$numero_parametrosred.',"results":'.$jsonresult.'})';
	}
	else
	{
		$conexion = new Criteria();
		$numero_parametrosred = ParametrospuntosredPeer::doCount($conexion);
		$parametrosred = ParametrospuntosredPeer::doSelect($conexion);
		
		if($parametrosred)
		{
			foreach ($parametrosred As $temporal)
			{
				$acu_ppr_id = $temporal->getPprId();
			
				$datos[$pos]['acu_ppr_id']=$acu_ppr_id;
				$datos[$pos]['acu_ppr_nombre_parametro']=$temporal->getPprNombreParametro();
				$datos[$pos]['acu_pfe_frecuencia_minima']='';
				$datos[$pos]['acu_pfe_frecuencia_real']='';
				$datos[$pos]['acu_rep_resultado_punto_1']=0;
				$datos[$pos]['acu_rep_resultado_punto_2']=0;
				$datos[$pos]['acu_rep_resultado_punto_3']=0;
				
				$pos++;
			}
		}
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$numero_parametrosred.',"results":'.$jsonresult.'})';
	}
	return 	$this->renderText($salida);
  }
  
  private function obtenerResultadoPunto($id_calidadagua, $id_parametro, $numero_punto)
  {
	$conexion = new Criteria();
	$conexion->add(ResultadosxpuntoPeer::REP_CAG_ID, $id_calidadagua);
	$conexion->add(ResultadosxpuntoPeer::REP_PPR_ID_PARAMETRO, $id_parametro);
	$conexion->add(ResultadosxpuntoPeer::REP_PUNTO, $numero_punto);
	$resultadoxpunto = ResultadosxpuntoPeer::doSelectOne($conexion);
	
	if($resultadoxpunto)
	{
		return $resultadoxpunto->getRepResultado();
	}
	else
	{
		return 0;
	}
  }
  
  private function obtenerFrecuenciaMinima($id_calidadagua, $id_parametro)
  {
	$conexion = new Criteria();
	$conexion->add(ParametroxfrecuenciaPeer::PFE_CAG_ID, $id_calidadagua);
	$conexion->add(ParametroxfrecuenciaPeer::PFE_PPR_ID_PARAMETRO, $id_parametro);
	$frecuenciamin = ParametroxfrecuenciaPeer::doSelectOne($conexion);
	
	if($frecuenciamin)
	{
		return $frecuenciamin->getPfeFrecuenciaMinima();
	}
	else
	{
		return '';
	}
  }
  
  private function obtenerFrecuenciaReal($id_calidadagua, $id_parametro)
  {
	$conexion = new Criteria();
	$conexion->add(ParametroxfrecuenciaPeer::PFE_CAG_ID, $id_calidadagua);
	$conexion->add(ParametroxfrecuenciaPeer::PFE_PPR_ID_PARAMETRO, $id_parametro);
	$frecuenciareal = ParametroxfrecuenciaPeer::doSelectOne($conexion);
	
	if($frecuenciareal)
	{
		return $frecuenciareal->getPfeFrecuenciaReal();
	}
	else
	{
		return '';
	}
  }
  
  public function executeActualizarPuntosCalidadAguaDistribuida(sfWebRequest $request)
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
		try
		{
			$acu_calidad = new Calidad();
			$acu_calidad->setCalPpsPreId($pps_pre_id);
			$acu_calidad->setCalPpsAnio($pps_anio);
			$acu_calidad->setCalPpsSerId($pps_ser_id);
			$acu_calidad->save();

			$cal_id = $acu_calidad->getCalId();
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Error en calidad'}})");
		}
	}
	
	$conexion = new Criteria();
	$conexion->add(CalidadaguaPeer::CAG_CAL_ID, $cal_id);
	$acu_calidadaguadistribuida = CalidadaguaPeer::doSelectOne($conexion);
	
	if( !$acu_calidadaguadistribuida )
	{
		try
		{
			$acu_calidadaguadistribuida = new Calidadagua();
			$acu_calidadaguadistribuida->setCagCalId($cal_id);
			$acu_calidadaguadistribuida->save();
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Error en calidad de agua'}})");
		}
	}
	
	$acu_cag_id = $acu_calidadaguadistribuida->getCagId();
	
	$acu_ppr_id=$this->getRequestParameter('acu_ppr_id');
	$acu_ppr_nombre_parametro=$this->getRequestParameter('acu_ppr_nombre_parametro');
	
	if($acu_ppr_id == '')
	{
		try
		{
			$parametrospuntosred = new Parametrospuntosred();
			$parametrospuntosred->setPprNombreParametro($this->getRequestParameter('acu_ppr_nombre_parametro'));
			$parametrospuntosred->save();
			$acu_ppr_id = $parametrospuntosred->getPprId();
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Error al guardar el parametro'}})");
		}
	}
	
	try
	{
		$this->guardarResultadoxPunto($acu_cag_id, $acu_ppr_id, 1, $this->getRequestParameter('acu_rep_resultado_punto_1'));
		$this->guardarResultadoxPunto($acu_cag_id, $acu_ppr_id, 2, $this->getRequestParameter('acu_rep_resultado_punto_2'));
		$this->guardarResultadoxPunto($acu_cag_id, $acu_ppr_id, 3, $this->getRequestParameter('acu_rep_resultado_punto_3'));
	}
	catch(Exception $exception)
	{
		return $this->renderText("({success: false, errors: { reason: 'Error al guardar resultados de los puntos'}})");
	}
	
	try
	{
		$conexion = new Criteria();
		$conexion->add(ParametroxfrecuenciaPeer::PFE_CAG_ID, $acu_cag_id);
		$conexion->add(ParametroxfrecuenciaPeer::PFE_PPR_ID_PARAMETRO, $acu_ppr_id);
		$acu_parametroxfrecuencia = ParametroxfrecuenciaPeer::doSelectOne($conexion);
		
		if( !$acu_parametroxfrecuencia )
		{
			$acu_parametroxfrecuencia = new Parametroxfrecuencia();
			$acu_parametroxfrecuencia->setPfePprIdParametro($acu_ppr_id);
			$acu_parametroxfrecuencia->setPfeCagId($acu_cag_id);
		}
		
		$acu_parametroxfrecuencia->setPfeFrecuenciaMinima($this->getRequestParameter('acu_pfe_frecuencia_minima'));
		$acu_parametroxfrecuencia->setPfeFrecuenciaReal($this->getRequestParameter('acu_pfe_frecuencia_real'));
		
		$acu_parametroxfrecuencia->save();
	}
	catch(Exception $exception)
	{
		return $this->renderText("({success: false, errors: { reason: 'Error en parametro por frecuencia:".$exception."'}})");
	}
	
	$salida = "({success: true, mensaje:'La informacion del parametro fue actualizada exitosamente'})";
	return $this->renderText($salida);
  }
  
  private function guardarResultadoxPunto($id_calidadagua, $id_parametro, $num_punto, $resultado_punto)
  {
	$conexion = new Criteria();
	$conexion->add(ResultadosxpuntoPeer::REP_CAG_ID, $id_calidadagua);
	$conexion->add(ResultadosxpuntoPeer::REP_PPR_ID_PARAMETRO, $id_parametro);
	$conexion->add(ResultadosxpuntoPeer::REP_PUNTO, $num_punto);
	$acu_resultadosxpunto = ResultadosxpuntoPeer::doSelectOne($conexion);
	
	try
	{
		if( !$acu_resultadosxpunto )
		{
			$acu_resultadosxpunto = new Resultadosxpunto();
			$acu_resultadosxpunto->setRepCagId($id_calidadagua);
			$acu_resultadosxpunto->setRepPprIdParametro($id_parametro);
			$acu_resultadosxpunto->setRepPunto($num_punto);
		}
		
		$acu_resultadosxpunto->setRepResultado($resultado_punto);
		
		$acu_resultadosxpunto->save();
	}
	catch(Exception $exception)
	{
		return $this->renderText("({success: false, errors: { reason: 'Error al guardar resultados de los puntos'}})");
	}
  }
  
  public function executeActualizarCalidadAguaDistribuida(sfWebRequest $request)
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
		try
		{
			$acu_calidad = new Calidad();
			$acu_calidad->setCalPpsPreId($pps_pre_id);
			$acu_calidad->setCalPpsAnio($pps_anio);
			$acu_calidad->setCalPpsSerId($pps_ser_id);
			$acu_calidad->save();

			$cal_id = $acu_calidad->getCalId();
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Error en calidad'}})");
		}
	}
	
	$conexion = new Criteria();
	$conexion->add(CalidadaguaPeer::CAG_CAL_ID, $cal_id);
	$acu_calidadaguadistribuida = CalidadaguaPeer::doSelectOne($conexion);
	
	try
	{
		if( !$acu_calidadaguadistribuida )
		{

				$acu_calidadaguadistribuida = new Calidadagua();
				$acu_calidadaguadistribuida->setCagCalId($cal_id);
		}
		
		$acu_calidadaguadistribuida->setCagControlCaDistribuida($this->getRequestParameter('acu_cag_control_ca_distribuida'));
		//$acu_calidadaguadistribuida->setCagPuntosRedAnalizados($this->getRequestParameter('acu_cag_puntos_red_analizados'));
		$acu_calidadaguadistribuida->setCagNumeroVisitaSspd($this->getRequestParameter('acu_cag_numero_visita_sspd'));
		$acu_calidadaguadistribuida->save();
	}
	catch(Exception $exception)
	{
		return $this->renderText("({success: false, errors: { reason: 'Error en calidad de agua'}})");
	}
	
	$salida = "({success: true, mensaje:'La informacion de calidad de agua distribuida fue actualizada exitosamente'})";
	return $this->renderText($salida);
  }
  
}
