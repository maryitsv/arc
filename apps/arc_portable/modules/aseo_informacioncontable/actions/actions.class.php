<?php

/**
 * aseo_informacioncontable actions.
 *
 * @package    arc
 * @subpackage aseo_informacioncontable
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class aseo_informacioncontableActions extends sfActions
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
	$conexion->add(InformacioncontablePeer::ICO_IAF_ID, $iaf_id);
	$ase_informacioncontable = InformacioncontablePeer::doSelectOne($conexion);

	if($ase_informacioncontable)
	{
		try
		{
			if($this->getRequestParameter('form') == 'activosPasivos')
			{
				//$ase_informacioncontable->setIcoBalanceGeneral($this->getRequestParameter('ase_ico_balance_general'));
				$ase_informacioncontable->setIcoBalanceGeneral($pps_anio);
				$ase_informacioncontable->setIcoActivos(str_replace(',', '', $this->getRequestParameter('ase_ico_activos')));
				$ase_informacioncontable->setIcoActivosCorrientes(str_replace(',', '', $this->getRequestParameter('ase_ico_activos_corrientes')));
				$ase_informacioncontable->setIcoEfectivo(str_replace(',', '', $this->getRequestParameter('ase_ico_efectivo')));
				$ase_informacioncontable->setIcoDeudores(str_replace(',', '', $this->getRequestParameter('ase_ico_deudores')));
				$ase_informacioncontable->setIcoInventario(str_replace(',', '', $this->getRequestParameter('ase_ico_inventario')));
				$ase_informacioncontable->setIcoActivosFijos(str_replace(',', '', $this->getRequestParameter('ase_ico_activos_fijos')));
				$ase_informacioncontable->setIcoPropiedadPlantaEquipos(str_replace(',', '', $this->getRequestParameter('ase_ico_propiedad_planta_equipos')));
				$ase_informacioncontable->setIcoOtrosActivos(str_replace(',', '', $this->getRequestParameter('ase_ico_otros_activos')));
				$ase_informacioncontable->setIcoPasivos(str_replace(',', '', $this->getRequestParameter('ase_ico_pasivos'))); 
				$ase_informacioncontable->setIcoPasivosCorrientes(str_replace(',', '', $this->getRequestParameter('ase_ico_pasivos_corrientes'))); 
				$ase_informacioncontable->setIcoObligacionesFinancieras(str_replace(',', '', $this->getRequestParameter('ase_ico_obligaciones_financieras'))); 
				$ase_informacioncontable->setIcoOtrasCuentasPorPagar(str_replace(',', '', $this->getRequestParameter('ase_ico_otras_cuentas_por_pagar')));
				$ase_informacioncontable->setIcoObligacionesLaborales(str_replace(',', '', $this->getRequestParameter('ase_ico_obligaciones_laborales')));
				$ase_informacioncontable->setIcoOtrosPasivos(str_replace(',', '', $this->getRequestParameter('ase_ico_otros_pasivos')));
				$ase_informacioncontable->setIcoPatrimonio(str_replace(',', '', $this->getRequestParameter('ase_ico_patrimonio')));
				$ase_informacioncontable->setIcoEstadoDeResultados($pps_anio);
				//$ase_informacioncontable->setIcoEstadoDeResultados($this->getRequestParameter('ase_ico_estado_de_resultados'));
			}
			if($this->getRequestParameter('form') == 'totales')
			{
				$ase_informacioncontable->setIcoTotalIngresos(str_replace(',', '', $this->getRequestParameter('ase_ico_total_ingresos')));
				$ase_informacioncontable->setIcoIngresosOperacionales(str_replace(',', '', $this->getRequestParameter('ase_ico_ingresos_operacionales')));
				$ase_informacioncontable->setIcoIngresosNoOperacionales(str_replace(',', '', $this->getRequestParameter('ase_ico_ingresos_no_operacionales')));
				$ase_informacioncontable->setIcoTotalEgresos(str_replace(',', '', $this->getRequestParameter('ase_ico_total_egresos')));
				$ase_informacioncontable->setIcoGastosAdministrativos(str_replace(',', '', $this->getRequestParameter('ase_ico_gastos_administrativos')));
				$ase_informacioncontable->setIcoCostoOperacionMantenimiento(str_replace(',', '', $this->getRequestParameter('ase_ico_costo_operacion_mantenimiento'))); 
				$ase_informacioncontable->setIcoCostoInversion(str_replace(',', '', $this->getRequestParameter('ase_ico_costo_inversion')));
				$ase_informacioncontable->setIcoResultadosEjercicio(str_replace(',', '', $this->getRequestParameter('ase_ico_resultados_ejercicio')));
			}
			
			$ase_informacioncontable->save();
		
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
			$ase_informacioncontable = new Informacioncontable();
			$ase_informacioncontable->setIcoIafId($iaf_id);
			
			if($this->getRequestParameter('form') == 'activosPasivos')
			{
				//$ase_informacioncontable->setIcoBalanceGeneral($this->getRequestParameter('ase_ico_balance_general'));
				$ase_informacioncontable->setIcoBalanceGeneral($pps_anio);
				$ase_informacioncontable->setIcoActivos(str_replace(',', '', $this->getRequestParameter('ase_ico_activos')));
				$ase_informacioncontable->setIcoActivosCorrientes(str_replace(',', '', $this->getRequestParameter('ase_ico_activos_corrientes')));
				$ase_informacioncontable->setIcoEfectivo(str_replace(',', '', $this->getRequestParameter('ase_ico_efectivo')));
				$ase_informacioncontable->setIcoDeudores(str_replace(',', '', $this->getRequestParameter('ase_ico_deudores')));
				$ase_informacioncontable->setIcoInventario(str_replace(',', '', $this->getRequestParameter('ase_ico_inventario')));
				$ase_informacioncontable->setIcoActivosFijos(str_replace(',', '', $this->getRequestParameter('ase_ico_activos_fijos')));
				$ase_informacioncontable->setIcoPropiedadPlantaEquipos(str_replace(',', '', $this->getRequestParameter('ase_ico_propiedad_planta_equipos')));
				$ase_informacioncontable->setIcoOtrosActivos(str_replace(',', '', $this->getRequestParameter('ase_ico_otros_activos')));
				$ase_informacioncontable->setIcoPasivos(str_replace(',', '', $this->getRequestParameter('ase_ico_pasivos'))); 
				$ase_informacioncontable->setIcoPasivosCorrientes(str_replace(',', '', $this->getRequestParameter('ase_ico_pasivos_corrientes'))); 
				$ase_informacioncontable->setIcoObligacionesFinancieras(str_replace(',', '', $this->getRequestParameter('ase_ico_obligaciones_financieras'))); 
				$ase_informacioncontable->setIcoOtrasCuentasPorPagar(str_replace(',', '', $this->getRequestParameter('ase_ico_otras_cuentas_por_pagar')));
				$ase_informacioncontable->setIcoObligacionesLaborales(str_replace(',', '', $this->getRequestParameter('ase_ico_obligaciones_laborales')));
				$ase_informacioncontable->setIcoOtrosPasivos(str_replace(',', '', $this->getRequestParameter('ase_ico_otros_pasivos')));
				$ase_informacioncontable->setIcoPatrimonio(str_replace(',', '', $this->getRequestParameter('ase_ico_patrimonio')));
				$ase_informacioncontable->setIcoEstadoDeResultados($pps_anio);
				//$ase_informacioncontable->setIcoEstadoDeResultados($this->getRequestParameter('ase_ico_estado_de_resultados'));
			}
			if($this->getRequestParameter('form') == 'totales')
			{
				$ase_informacioncontable->setIcoTotalIngresos(str_replace(',', '', $this->getRequestParameter('ase_ico_total_ingresos')));
				$ase_informacioncontable->setIcoIngresosOperacionales(str_replace(',', '', $this->getRequestParameter('ase_ico_ingresos_operacionales')));
				$ase_informacioncontable->setIcoIngresosNoOperacionales(str_replace(',', '', $this->getRequestParameter('ase_ico_ingresos_no_operacionales')));
				$ase_informacioncontable->setIcoTotalEgresos(str_replace(',', '', $this->getRequestParameter('ase_ico_total_egresos')));
				$ase_informacioncontable->setIcoGastosAdministrativos(str_replace(',', '', $this->getRequestParameter('ase_ico_gastos_administrativos')));
				$ase_informacioncontable->setIcoCostoOperacionMantenimiento(str_replace(',', '', $this->getRequestParameter('ase_ico_costo_operacion_mantenimiento'))); 
				$ase_informacioncontable->setIcoCostoInversion(str_replace(',', '', $this->getRequestParameter('ase_ico_costo_inversion')));
				$ase_informacioncontable->setIcoResultadosEjercicio(str_replace(',', '', $this->getRequestParameter('ase_ico_resultados_ejercicio')));
			}
			
			$ase_informacioncontable->save();
			
			$salida = "({success: true, mensaje:'La informacion contable fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en informacion contable'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAseInformacionContable(sfWebRequest $request)
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
		$conexion->add(InformacioncontablePeer::ICO_IAF_ID, $ase_administrativafinanciera->getIafId());
		$ase_informacioncontable = InformacioncontablePeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($ase_informacioncontable)
		{
			//$datos[$pos]['ase_ico_balance_general']=$ase_informacioncontable->getIcoBalanceGeneral();
			$datos[$pos]['ase_ico_balance_general']=$pps_anio;
			$datos[$pos]['ase_ico_activos']=$ase_informacioncontable->getIcoActivos();
			$datos[$pos]['ase_ico_activos_corrientes']=$ase_informacioncontable->getIcoActivosCorrientes();
			$datos[$pos]['ase_ico_efectivo']=$ase_informacioncontable->getIcoEfectivo();
			$datos[$pos]['ase_ico_deudores']=$ase_informacioncontable->getIcoDeudores();
			$datos[$pos]['ase_ico_inventario']=$ase_informacioncontable->getIcoInventario();
			$datos[$pos]['ase_ico_activos_fijos']=$ase_informacioncontable->getIcoActivosFijos();
			$datos[$pos]['ase_ico_propiedad_planta_equipos']=$ase_informacioncontable->getIcoPropiedadPlantaEquipos();
			$datos[$pos]['ase_ico_otros_activos']=$ase_informacioncontable->getIcoOtrosActivos();
			$datos[$pos]['ase_ico_pasivos']=$ase_informacioncontable->getIcoPasivos();
			$datos[$pos]['ase_ico_pasivos_corrientes']=$ase_informacioncontable->getIcoPasivosCorrientes();
			$datos[$pos]['ase_ico_obligaciones_financieras']=$ase_informacioncontable->getIcoObligacionesFinancieras();
			$datos[$pos]['ase_ico_otras_cuentas_por_pagar']=$ase_informacioncontable->getIcoOtrasCuentasPorPagar();
			$datos[$pos]['ase_ico_obligaciones_laborales']=$ase_informacioncontable->getIcoObligacionesLaborales();
			$datos[$pos]['ase_ico_otros_pasivos']=$ase_informacioncontable->getIcoOtrosPasivos();
			$datos[$pos]['ase_ico_patrimonio']=$ase_informacioncontable->getIcoPatrimonio();
			//$datos[$pos]['ase_ico_estado_de_resultados']=$ase_informacioncontable->getIcoEstadoDeResultados();
			$datos[$pos]['ase_ico_estado_de_resultados']=$pps_anio;
			
			$datos[$pos]['ase_ico_total_ingresos']=$ase_informacioncontable->getIcoTotalIngresos();
			$datos[$pos]['ase_ico_ingresos_operacionales']=$ase_informacioncontable->getIcoIngresosOperacionales();
			$datos[$pos]['ase_ico_ingresos_no_operacionales']=$ase_informacioncontable->getIcoIngresosNoOperacionales();
			$datos[$pos]['ase_ico_total_egresos']=$ase_informacioncontable->getIcoTotalEgresos();
			$datos[$pos]['ase_ico_gastos_administrativos']=$ase_informacioncontable->getIcoGastosAdministrativos();
			$datos[$pos]['ase_ico_costo_operacion_mantenimiento']=$ase_informacioncontable->getIcoCostoOperacionMantenimiento();
			$datos[$pos]['ase_ico_costo_inversion']=$ase_informacioncontable->getIcoCostoInversion();
			$datos[$pos]['ase_ico_resultados_ejercicio']=$ase_informacioncontable->getIcoResultadosEjercicio();
			
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
