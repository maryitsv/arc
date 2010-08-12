<?php

/**
 * alcantarillado_informacioncontable actions.
 *
 * @package    arc
 * @subpackage alcantarillado_informacioncontable
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_informacioncontableActions extends sfActions
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
	$conexion->add(InformacioncontablePeer::ICO_IAF_ID, $iaf_id);
	$alc_informacioncontable = InformacioncontablePeer::doSelectOne($conexion);

	if($alc_informacioncontable)
	{
		try
		{
			if($this->getRequestParameter('form') == 'activosPasivos')
			{
				//$alc_informacioncontable->setIcoBalanceGeneral($this->getRequestParameter('alc_ico_balance_general'));
				$alc_informacioncontable->setIcoBalanceGeneral($pps_periodo);
				$alc_informacioncontable->setIcoActivos(str_replace(',', '', $this->getRequestParameter('alc_ico_activos')));
				$alc_informacioncontable->setIcoActivosCorrientes(str_replace(',', '', $this->getRequestParameter('alc_ico_activos_corrientes')));
				$alc_informacioncontable->setIcoEfectivo(str_replace(',', '', $this->getRequestParameter('alc_ico_efectivo')));
				$alc_informacioncontable->setIcoDeudores(str_replace(',', '', $this->getRequestParameter('alc_ico_deudores')));
				$alc_informacioncontable->setIcoInventario(str_replace(',', '', $this->getRequestParameter('alc_ico_inventario')));
				$alc_informacioncontable->setIcoActivosFijos(str_replace(',', '', $this->getRequestParameter('alc_ico_activos_fijos')));
				$alc_informacioncontable->setIcoPropiedadPlantaEquipos(str_replace(',', '', $this->getRequestParameter('alc_ico_propiedad_planta_equipos')));
				$alc_informacioncontable->setIcoOtrosActivos(str_replace(',', '', $this->getRequestParameter('alc_ico_otros_activos')));
				$alc_informacioncontable->setIcoPasivos(str_replace(',', '', $this->getRequestParameter('alc_ico_pasivos'))); 
				$alc_informacioncontable->setIcoPasivosCorrientes(str_replace(',', '', $this->getRequestParameter('alc_ico_pasivos_corrientes'))); 
				$alc_informacioncontable->setIcoObligacionesFinancieras(str_replace(',', '', $this->getRequestParameter('alc_ico_obligaciones_financieras'))); 
				$alc_informacioncontable->setIcoOtrasCuentasPorPagar(str_replace(',', '', $this->getRequestParameter('alc_ico_otras_cuentas_por_pagar')));
				$alc_informacioncontable->setIcoObligacionesLaborales(str_replace(',', '', $this->getRequestParameter('alc_ico_obligaciones_laborales')));
				$alc_informacioncontable->setIcoOtrosPasivos(str_replace(',', '', $this->getRequestParameter('alc_ico_otros_pasivos')));
				$alc_informacioncontable->setIcoPatrimonio(str_replace(',', '', $this->getRequestParameter('alc_ico_patrimonio')));
				$alc_informacioncontable->setIcoEstadoDeResultados($pps_periodo);
				//$alc_informacioncontable->setIcoEstadoDeResultados($this->getRequestParameter('alc_ico_estado_de_resultados'));
			}
			if($this->getRequestParameter('form') == 'totales')
			{
				$alc_informacioncontable->setIcoTotalIngresos(str_replace(',', '', $this->getRequestParameter('alc_ico_total_ingresos')));
				$alc_informacioncontable->setIcoIngresosOperacionales(str_replace(',', '', $this->getRequestParameter('alc_ico_ingresos_operacionales')));
				$alc_informacioncontable->setIcoIngresosNoOperacionales(str_replace(',', '', $this->getRequestParameter('alc_ico_ingresos_no_operacionales')));
				$alc_informacioncontable->setIcoTotalEgresos(str_replace(',', '', $this->getRequestParameter('alc_ico_total_egresos')));
				$alc_informacioncontable->setIcoGastosAdministrativos(str_replace(',', '', $this->getRequestParameter('alc_ico_gastos_administrativos')));
				$alc_informacioncontable->setIcoCostoOperacionMantenimiento(str_replace(',', '', $this->getRequestParameter('alc_ico_costo_operacion_mantenimiento'))); 
				$alc_informacioncontable->setIcoCostoInversion(str_replace(',', '', $this->getRequestParameter('alc_ico_costo_inversion')));
				$alc_informacioncontable->setIcoResultadosEjercicio(str_replace(',', '', $this->getRequestParameter('alc_ico_resultados_ejercicio')));
			}
			
			$alc_informacioncontable->save();
		
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
			$alc_informacioncontable = new Informacioncontable();
			$alc_informacioncontable->setIcoIafId($iaf_id);
			
			if($this->getRequestParameter('form') == 'activosPasivos')
			{
				//$alc_informacioncontable->setIcoBalanceGeneral($this->getRequestParameter('alc_ico_balance_general'));
				$alc_informacioncontable->setIcoBalanceGeneral($pps_periodo);
				$alc_informacioncontable->setIcoActivos(str_replace(',', '', $this->getRequestParameter('alc_ico_activos')));
				$alc_informacioncontable->setIcoActivosCorrientes(str_replace(',', '', $this->getRequestParameter('alc_ico_activos_corrientes')));
				$alc_informacioncontable->setIcoEfectivo(str_replace(',', '', $this->getRequestParameter('alc_ico_efectivo')));
				$alc_informacioncontable->setIcoDeudores(str_replace(',', '', $this->getRequestParameter('alc_ico_deudores')));
				$alc_informacioncontable->setIcoInventario(str_replace(',', '', $this->getRequestParameter('alc_ico_inventario')));
				$alc_informacioncontable->setIcoActivosFijos(str_replace(',', '', $this->getRequestParameter('alc_ico_activos_fijos')));
				$alc_informacioncontable->setIcoPropiedadPlantaEquipos(str_replace(',', '', $this->getRequestParameter('alc_ico_propiedad_planta_equipos')));
				$alc_informacioncontable->setIcoOtrosActivos(str_replace(',', '', $this->getRequestParameter('alc_ico_otros_activos')));
				$alc_informacioncontable->setIcoPasivos(str_replace(',', '', $this->getRequestParameter('alc_ico_pasivos'))); 
				$alc_informacioncontable->setIcoPasivosCorrientes(str_replace(',', '', $this->getRequestParameter('alc_ico_pasivos_corrientes'))); 
				$alc_informacioncontable->setIcoObligacionesFinancieras(str_replace(',', '', $this->getRequestParameter('alc_ico_obligaciones_financieras'))); 
				$alc_informacioncontable->setIcoOtrasCuentasPorPagar(str_replace(',', '', $this->getRequestParameter('alc_ico_otras_cuentas_por_pagar')));
				$alc_informacioncontable->setIcoObligacionesLaborales(str_replace(',', '', $this->getRequestParameter('alc_ico_obligaciones_laborales')));
				$alc_informacioncontable->setIcoOtrosPasivos(str_replace(',', '', $this->getRequestParameter('alc_ico_otros_pasivos')));
				$alc_informacioncontable->setIcoPatrimonio(str_replace(',', '', $this->getRequestParameter('alc_ico_patrimonio')));
				$alc_informacioncontable->setIcoEstadoDeResultados($pps_periodo);
				//$alc_informacioncontable->setIcoEstadoDeResultados($this->getRequestParameter('alc_ico_estado_de_resultados'));
			}
			if($this->getRequestParameter('form') == 'totales')
			{
				$alc_informacioncontable->setIcoTotalIngresos(str_replace(',', '', $this->getRequestParameter('alc_ico_total_ingresos')));
				$alc_informacioncontable->setIcoIngresosOperacionales(str_replace(',', '', $this->getRequestParameter('alc_ico_ingresos_operacionales')));
				$alc_informacioncontable->setIcoIngresosNoOperacionales(str_replace(',', '', $this->getRequestParameter('alc_ico_ingresos_no_operacionales')));
				$alc_informacioncontable->setIcoTotalEgresos(str_replace(',', '', $this->getRequestParameter('alc_ico_total_egresos')));
				$alc_informacioncontable->setIcoGastosAdministrativos(str_replace(',', '', $this->getRequestParameter('alc_ico_gastos_administrativos')));
				$alc_informacioncontable->setIcoCostoOperacionMantenimiento(str_replace(',', '', $this->getRequestParameter('alc_ico_costo_operacion_mantenimiento'))); 
				$alc_informacioncontable->setIcoCostoInversion(str_replace(',', '', $this->getRequestParameter('alc_ico_costo_inversion')));
				$alc_informacioncontable->setIcoResultadosEjercicio(str_replace(',', '', $this->getRequestParameter('alc_ico_resultados_ejercicio')));
			}
			
			$alc_informacioncontable->save();
			
			$salida = "({success: true, mensaje:'La informacion contable fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en informacion contable'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAlcInformacionContable(sfWebRequest $request)
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
		$conexion->add(InformacioncontablePeer::ICO_IAF_ID, $alc_administrativafinanciera->getIafId());
		$alc_informacioncontable = InformacioncontablePeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($alc_informacioncontable)
		{
			//$datos[$pos]['alc_ico_balance_general']=$alc_informacioncontable->getIcoBalanceGeneral();
			$datos[$pos]['alc_ico_balance_general']=$pps_periodo;
			$datos[$pos]['alc_ico_activos']=$alc_informacioncontable->getIcoActivos();
			$datos[$pos]['alc_ico_activos_corrientes']=$alc_informacioncontable->getIcoActivosCorrientes();
			$datos[$pos]['alc_ico_efectivo']=$alc_informacioncontable->getIcoEfectivo();
			$datos[$pos]['alc_ico_deudores']=$alc_informacioncontable->getIcoDeudores();
			$datos[$pos]['alc_ico_inventario']=$alc_informacioncontable->getIcoInventario();
			$datos[$pos]['alc_ico_activos_fijos']=$alc_informacioncontable->getIcoActivosFijos();
			$datos[$pos]['alc_ico_propiedad_planta_equipos']=$alc_informacioncontable->getIcoPropiedadPlantaEquipos();
			$datos[$pos]['alc_ico_otros_activos']=$alc_informacioncontable->getIcoOtrosActivos();
			$datos[$pos]['alc_ico_pasivos']=$alc_informacioncontable->getIcoPasivos();
			$datos[$pos]['alc_ico_pasivos_corrientes']=$alc_informacioncontable->getIcoPasivosCorrientes();
			$datos[$pos]['alc_ico_obligaciones_financieras']=$alc_informacioncontable->getIcoObligacionesFinancieras();
			$datos[$pos]['alc_ico_otras_cuentas_por_pagar']=$alc_informacioncontable->getIcoOtrasCuentasPorPagar();
			$datos[$pos]['alc_ico_obligaciones_laborales']=$alc_informacioncontable->getIcoObligacionesLaborales();
			$datos[$pos]['alc_ico_otros_pasivos']=$alc_informacioncontable->getIcoOtrosPasivos();
			$datos[$pos]['alc_ico_patrimonio']=$alc_informacioncontable->getIcoPatrimonio();
			//$datos[$pos]['alc_ico_estado_de_resultados']=$alc_informacioncontable->getIcoEstadoDeResultados();
			$datos[$pos]['alc_ico_estado_de_resultados']=$pps_periodo;
			
			$datos[$pos]['alc_ico_total_ingresos']=$alc_informacioncontable->getIcoTotalIngresos();
			$datos[$pos]['alc_ico_ingresos_operacionales']=$alc_informacioncontable->getIcoIngresosOperacionales();
			$datos[$pos]['alc_ico_ingresos_no_operacionales']=$alc_informacioncontable->getIcoIngresosNoOperacionales();
			$datos[$pos]['alc_ico_total_egresos']=$alc_informacioncontable->getIcoTotalEgresos();
			$datos[$pos]['alc_ico_gastos_administrativos']=$alc_informacioncontable->getIcoGastosAdministrativos();
			$datos[$pos]['alc_ico_costo_operacion_mantenimiento']=$alc_informacioncontable->getIcoCostoOperacionMantenimiento();
			$datos[$pos]['alc_ico_costo_inversion']=$alc_informacioncontable->getIcoCostoInversion();
			$datos[$pos]['alc_ico_resultados_ejercicio']=$alc_informacioncontable->getIcoResultadosEjercicio();
			
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
