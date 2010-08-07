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
		$acu_calidad = new Calidad();
		$acu_calidad->setCalPpsPreId($pps_pre_id);
		$acu_calidad->setCalPpsAnio($pps_anio);
		$acu_calidad->setCalPpsSerId($pps_ser_id);
		$acu_calidad->save();

		$cal_id = $acu_calidad->getCalId();
	}
	
	
	
	
	if($acu_administrativafinanciera)
	{
		$iaf_id = $acu_administrativafinanciera->getIafId();
		
		$conexion = new Criteria();
		$conexion->add(TrabajadoresyvinculacionPeer::TRA_IAF_ID, $iaf_id);
		$acu_trabajadoresyvinculacion = TrabajadoresyvinculacionPeer::doSelectOne($conexion);
		
		if($acu_trabajadoresyvinculacion)
		{
			try
			{
				$acu_trabajadoresyvinculacion->setTraManualProcedimiento($this->getRequestParameter('acu_tra_manual_procedimiento'));
				$acu_trabajadoresyvinculacion->setTraManualFunciones($this->getRequestParameter('acu_tra_manual_funciones'));
				
				$acu_trabajadoresyvinculacion->save();
				
				$acu_poa_id = $this->getRequestParameter('acu_poa_id');
				
				if($acu_poa_id)
				{
					$personaloperativoadministrativo = PersonaloperativoadministrativoPeer::retrieveByPK($this->getRequestParameter('acu_poa_id'));
					if($personaloperativoadministrativo)
					{
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('acu_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('acu_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('acu_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('acu_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('acu_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('acu_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
					else
					{
						return $this->renderText("({success: false, errors: { reason: 'El empleado no existe en la base de datos'}})");
					}
				}
				else
				{
					$acu_poa_cedula = $this->getRequestParameter('acu_poa_cedula');
				
					if($acu_poa_cedula)
					{
						$personaloperativoadministrativo = new Personaloperativoadministrativo();
						$personaloperativoadministrativo->setPoaTraId($acu_trabajadoresyvinculacion->getTraId());
						$personaloperativoadministrativo->setPoaCedula($this->getRequestParameter('acu_poa_cedula'));
						$personaloperativoadministrativo->setPoaNombre($this->getRequestParameter('acu_poa_nombre'));
						$personaloperativoadministrativo->setPoaCargo($this->getRequestParameter('acu_poa_cargo'));
						$personaloperativoadministrativo->setPoaTipoVinculacion($this->getRequestParameter('acu_poa_tipo_vinculacion'));
						$personaloperativoadministrativo->setPoaRemuneracionMensual($this->getRequestParameter('acu_poa_remuneracion_mensual'));
						$personaloperativoadministrativo->setPoaTipoTrabajador($this->getRequestParameter('acu_poa_tipo_trabajador'));
						$personaloperativoadministrativo->save();
					}
				}
				
				$salida = "({success: true, mensaje:'La informacion de trabajadores y vinculacion fue actualizada exitosamente'})";
			}
			catch(Exception $exception)
			{
				return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en trabajadores y vinculacion:".$exception."'}})");
			}
		}
		else
		{
			try
			{
				$acu_trabajadoresyvinculacion = new Trabajadoresyvinculacion();
				
				$acu_trabajadoresyvinculacion->setTraIafId($iaf_id);
				$acu_trabajadoresyvinculacion->setTraManualProcedimiento($this->getRequestParameter('acu_tra_manual_procedimiento'));
				$acu_trabajadoresyvinculacion->setTraManualFunciones($this->getRequestParameter('acu_tra_manual_funciones'));
				
				$acu_trabajadoresyvinculacion->save();
				
				$salida = "({success: true, mensaje:'La informacion de trabajadores y vinculacion fue actualizada exitosamente'})";
			}
			catch(Exception $exception)
			{
				return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en trabajadores y vinculacion'}})");
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
