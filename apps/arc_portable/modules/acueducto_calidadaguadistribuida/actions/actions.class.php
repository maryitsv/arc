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

	if($acu_calidad)
	{
		$conexion = new Criteria();
		$conexion->add(CalidadaguaPeer::CAG_CAL_ID, $acu_calidad->getCalId());
	}
	$acu_calidadaguadistribuida = CalidadaguaPeer::doSelectOne($conexion);
	
	$datos;
	$pos=0;
	
	$conexion = new Criteria();
	$conexion->add(CalidadaguaPeer::CAG_CAL_ID, $acu_calidad->getCalId());
	
	if($acu_calidadaguadistribuida)
	{
		$acu_cag_id = $acu_calidadaguadistribuida->getCagId();
		
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
			}
		}
		
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$numero_parametrosred.',"results":'.$jsonresult.'})';
	}
	return 	$this->renderText($salida);
  }
  
  private function obtenerResultadoPunto($acu_cag_id, $acu_ppr_id, $numero_punto)
  {
	$conexion = new Criteria();
	$conexion->add(ResultadosxpuntoPeer::REP_CAG_ID, $id_calidadagua);
	$conexion->add(ResultadosxpuntoPeer::REP_PPR_ID_PARAMETRO, $id_parametro);
	$conexion->add(ResultadosxpuntoPeer::REP_PUNTO, $numero_punto);
	$resultadoxpunto = ResultadosxpuntoPeer::doSelectOne($conexion);
	
	if($resultadoxpunto)
	{
		if($resultadoxpunto->getRepResultado() == '')
		{
			return 0;
		}
		else
		{
			return $resultadoxpunto->getRepResultado();
		}
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
}
