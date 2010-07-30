<?php

/**
 * acueducto_informacioncontable actions.
 *
 * @package    arc
 * @subpackage acueducto_informacioncontable
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_informacioncontableActions extends sfActions
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
  
  public function executeActualizarInformacionContable(sfWebRequest $request)
  {
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(AdministrativafinancieraPeer::IAF_PPS_ANIO, $pps_anio);
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
		$acu_administrativafinanciera->setIafPpsAnio($pps_anio);
		$acu_administrativafinanciera->setIafPpsSerId($pps_ser_id);
		$acu_administrativafinanciera->save();

		$iaf_id = $acu_administrativafinanciera->getIafId();
	}

	$conexion = new Criteria();
	$conexion->add(InformacioncontablePeer::ICO_IAF_ID, $iaf_id);
	$acu_informacioncontable = InformacioncontablePeer::doSelectOne($conexion);

	if($acu_informacioncontable)
	{
		try
		{
			if($this->getRequestParameter('form') == 'activosPasivos')
			{
				//$acu_informacioncontable->setIcoBalanceGeneral($this->getRequestParameter('acu_ico_balance_general'));
				$acu_informacioncontable->setIcoBalanceGeneral($pps_anio);
				$acu_informacioncontable->setIcoActivos($this->getRequestParameter('acu_ico_activos'));
				$acu_informacioncontable->setIcoActivosCorrientes($this->getRequestParameter('acu_ico_activos_corrientes'));
				$acu_informacioncontable->setIcoEfectivo($this->getRequestParameter('acu_ico_efectivo'));
				$acu_informacioncontable->setIcoDeudores($this->getRequestParameter('acu_ico_deudores'));
				$acu_informacioncontable->setIcoInventario($this->getRequestParameter('acu_ico_inventario'));
				$acu_informacioncontable->setIcoActivosFijos($this->getRequestParameter('acu_ico_activos_fijos'));
				$acu_informacioncontable->setIcoPropiedadPlantaEquipos($this->getRequestParameter('acu_ico_propiedad_planta_equipos'));
				$acu_informacioncontable->setIcoOtrosActivos($this->getRequestParameter('acu_ico_otros_activos'));
				$acu_informacioncontable->setIcoPasivos($this->getRequestParameter('acu_ico_pasivos')); 
				$acu_informacioncontable->setIcoPasivosCorrientes($this->getRequestParameter('acu_ico_pasivos_corrientes')); 
				$acu_informacioncontable->setIcoObligacionesFinancieras($this->getRequestParameter('acu_ico_obligaciones_financieras')); 
				$acu_informacioncontable->setIcoOtrasCuentasPorPagar($this->getRequestParameter('acu_ico_otras_cuentas_por_pagar'));
				$acu_informacioncontable->setIcoObligacionesLaborales($this->getRequestParameter('acu_ico_obligaciones_laborales'));
				$acu_informacioncontable->setIcoOtrosPasivos($this->getRequestParameter('acu_ico_otros_pasivos'));
				$acu_informacioncontable->setIcoPatrimonio($this->getRequestParameter('acu_ico_patrimonio'));
				$acu_informacioncontable->setIcoEstadoDeResultados($pps_anio);
				//$acu_informacioncontable->setIcoEstadoDeResultados($this->getRequestParameter('acu_ico_estado_de_resultados'));
			}
			if($this->getRequestParameter('form') == 'totales')
			{
				$acu_informacioncontable->setIcoTotalIngresos($this->getRequestParameter('acu_ico_total_ingresos'));
				$acu_informacioncontable->setIcoIngresosOperacionales($this->getRequestParameter('acu_ico_ingresos_operacionales'));
				$acu_informacioncontable->setIcoIngresosNoOperacionales($this->getRequestParameter('acu_ico_ingresos_no_operacionales'));
				$acu_informacioncontable->setIcoTotalEgresos($this->getRequestParameter('acu_ico_total_egresos'));
				$acu_informacioncontable->setIcoGastosAdministrativos($this->getRequestParameter('acu_ico_gastos_administrativos'));
				$acu_informacioncontable->setIcoCostoOperacionMantenimiento($this->getRequestParameter('acu_ico_costo_operacion_mantenimiento')); 
				$acu_informacioncontable->setIcoCostoInversion($this->getRequestParameter('acu_ico_costo_inversion'));
				$acu_informacioncontable->setIcoResultadosEjercicio($this->getRequestParameter('acu_ico_resultados_ejercicio'));
			}
			
			$acu_informacioncontable->save();
		
			$salida = "({success: true, mensaje:'La informacion contable fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en informacion contable'}})");
		}
	}
	else
	{
		try
		{
			$acu_informacioncontable = new Informacioncontable();
			$acu_informacioncontable->setIcoIafId($iaf_id);
			
			if($this->getRequestParameter('form') == 'activosPasivos')
			{
				//$acu_informacioncontable->setIcoBalanceGeneral($this->getRequestParameter('acu_ico_balance_general'));
				$acu_informacioncontable->setIcoBalanceGeneral($pps_anio);
				$acu_informacioncontable->setIcoActivos($this->getRequestParameter('acu_ico_activos'));
				$acu_informacioncontable->setIcoActivosCorrientes($this->getRequestParameter('acu_ico_activos_corrientes'));
				$acu_informacioncontable->setIcoEfectivo($this->getRequestParameter('acu_ico_efectivo'));
				$acu_informacioncontable->setIcoDeudores($this->getRequestParameter('acu_ico_deudores'));
				$acu_informacioncontable->setIcoInventario($this->getRequestParameter('acu_ico_inventario'));
				$acu_informacioncontable->setIcoActivosFijos($this->getRequestParameter('acu_ico_activos_fijos'));
				$acu_informacioncontable->setIcoPropiedadPlantaEquipos($this->getRequestParameter('acu_ico_propiedad_planta_equipos'));
				$acu_informacioncontable->setIcoOtrosActivos($this->getRequestParameter('acu_ico_otros_activos'));
				$acu_informacioncontable->setIcoPasivos($this->getRequestParameter('acu_ico_pasivos')); 
				$acu_informacioncontable->setIcoPasivosCorrientes($this->getRequestParameter('acu_ico_pasivos_corrientes')); 
				$acu_informacioncontable->setIcoObligacionesFinancieras($this->getRequestParameter('acu_ico_obligaciones_financieras')); 
				$acu_informacioncontable->setIcoOtrasCuentasPorPagar($this->getRequestParameter('acu_ico_otras_cuentas_por_pagar'));
				$acu_informacioncontable->setIcoObligacionesLaborales($this->getRequestParameter('acu_ico_obligaciones_laborales'));
				$acu_informacioncontable->setIcoOtrosPasivos($this->getRequestParameter('acu_ico_otros_pasivos'));
				$acu_informacioncontable->setIcoPatrimonio($this->getRequestParameter('acu_ico_patrimonio'));
				$acu_informacioncontable->setIcoEstadoDeResultados($pps_anio);
				//$acu_informacioncontable->setIcoEstadoDeResultados($this->getRequestParameter('acu_ico_estado_de_resultados'));
			}
			if($this->getRequestParameter('form') == 'totales')
			{
				$acu_informacioncontable->setIcoTotalIngresos($this->getRequestParameter('acu_ico_total_ingresos'));
				$acu_informacioncontable->setIcoIngresosOperacionales($this->getRequestParameter('acu_ico_ingresos_operacionales'));
				$acu_informacioncontable->setIcoIngresosNoOperacionales($this->getRequestParameter('acu_ico_ingresos_no_operacionales'));
				$acu_informacioncontable->setIcoTotalEgresos($this->getRequestParameter('acu_ico_total_egresos'));
				$acu_informacioncontable->setIcoGastosAdministrativos($this->getRequestParameter('acu_ico_gastos_administrativos'));
				$acu_informacioncontable->setIcoCostoOperacionMantenimiento($this->getRequestParameter('acu_ico_costo_operacion_mantenimiento')); 
				$acu_informacioncontable->setIcoCostoInversion($this->getRequestParameter('acu_ico_costo_inversion'));
				$acu_informacioncontable->setIcoResultadosEjercicio($this->getRequestParameter('acu_ico_resultados_ejercicio'));
			}
			
			$acu_informacioncontable->save();
			
			$salida = "({success: true, mensaje:'La informacion contable fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en informacion contable'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcuInformacionContable(sfWebRequest $request)
  {
	$salida = "";
	
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
	
		$conexion = new Criteria();
		$conexion->add(InformacioncontablePeer::ICO_IAF_ID, $acu_administrativafinanciera->getIafId());
		$acu_informacioncontable = InformacioncontablePeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($acu_informacioncontable)
		{
			//$datos[$pos]['acu_ico_balance_general']=$acu_informacioncontable->getIcoBalanceGeneral();
			$datos[$pos]['acu_ico_balance_general']=$pps_anio;
			$datos[$pos]['acu_ico_activos']=$acu_informacioncontable->getIcoActivos();
			$datos[$pos]['acu_ico_activos_corrientes']=$acu_informacioncontable->getIcoActivosCorrientes();
			$datos[$pos]['acu_ico_efectivo']=$acu_informacioncontable->getIcoEfectivo();
			$datos[$pos]['acu_ico_deudores']=$acu_informacioncontable->getIcoDeudores();
			$datos[$pos]['acu_ico_inventario']=$acu_informacioncontable->getIcoInventario();
			$datos[$pos]['acu_ico_activos_fijos']=$acu_informacioncontable->getIcoActivosFijos();
			$datos[$pos]['acu_ico_propiedad_planta_equipos']=$acu_informacioncontable->getIcoPropiedadPlantaEquipos();
			$datos[$pos]['acu_ico_otros_activos']=$acu_informacioncontable->getIcoOtrosActivos();
			$datos[$pos]['acu_ico_pasivos']=$acu_informacioncontable->getIcoPasivos();
			$datos[$pos]['acu_ico_pasivos_corrientes']=$acu_informacioncontable->getIcoPasivosCorrientes();
			$datos[$pos]['acu_ico_obligaciones_financieras']=$acu_informacioncontable->getIcoObligacionesFinancieras();
			$datos[$pos]['acu_ico_otras_cuentas_por_pagar']=$acu_informacioncontable->getIcoOtrasCuentasPorPagar();
			$datos[$pos]['acu_ico_obligaciones_laborales']=$acu_informacioncontable->getIcoObligacionesLaborales();
			$datos[$pos]['acu_ico_otros_pasivos']=$acu_informacioncontable->getIcoOtrosPasivos();
			$datos[$pos]['acu_ico_patrimonio']=$acu_informacioncontable->getIcoPatrimonio();
			//$datos[$pos]['acu_ico_estado_de_resultados']=$acu_informacioncontable->getIcoEstadoDeResultados();
			$datos[$pos]['acu_ico_estado_de_resultados']=$pps_anio;
			
			$datos[$pos]['acu_ico_total_ingresos']=$acu_informacioncontable->getIcoTotalIngresos();
			$datos[$pos]['acu_ico_ingresos_operacionales']=$acu_informacioncontable->getIcoIngresosOperacionales();
			$datos[$pos]['acu_ico_ingresos_no_operacionales']=$acu_informacioncontable->getIcoIngresosNoOperacionales();
			$datos[$pos]['acu_ico_total_egresos']=$acu_informacioncontable->getIcoTotalEgresos();
			$datos[$pos]['acu_ico_gastos_administrativos']=$acu_informacioncontable->getIcoGastosAdministrativos();
			$datos[$pos]['acu_ico_costo_operacion_mantenimiento']=$acu_informacioncontable->getIcoCostoOperacionMantenimiento();
			$datos[$pos]['acu_ico_costo_inversion']=$acu_informacioncontable->getIcoCostoInversion();
			$datos[$pos]['acu_ico_resultados_ejercicio']=$acu_informacioncontable->getIcoResultadosEjercicio();
			
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
