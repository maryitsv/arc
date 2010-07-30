<?php

/**
 * acueducto_gestionresultado actions.
 *
 * @package    arc
 * @subpackage acueducto_gestionresultado
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_gestionresultadoActions extends sfActions
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
  
  public function executeActualizarGestionResultado(sfWebRequest $request)
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
	$conexion->add(GestionresultadoPeer::GRE_IAF_ID, $iaf_id);
	$acu_gestionresultado = GestionresultadoPeer::doSelectOne($conexion);
		
	if($acu_gestionresultado)
	{
		try
		{
			if($this->getRequestParameter('form') == 'actividad12'){
				$acu_gestionresultado->setGreIafId($iaf_id);
				$acu_gestionresultado->setGrePlanGestionResultados($this->getRequestParameter('acu_gre_plan_gestion_resultados'));
				$acu_gestionresultado->setGreMicromedidoresFuncionando($this->getRequestParameter('acu_gre_micromedidores_funcionando'));
				$acu_gestionresultado->setGreTotalSuscriptoresMicromedicion($this->getRequestParameter('acu_gre_total_suscriptores_micromedicion')); 
				$acu_gestionresultado->setGreValorMicromedicion($this->getRequestParameter('acu_gre_valor_micromedicion'));  
				$acu_gestionresultado->setGreMacromedidoresFuncionando($this->getRequestParameter('acu_gre_macromedidores_funcionando'));
				$acu_gestionresultado->setGreMacromedidoresProyectados($this->getRequestParameter('acu_gre_macromedidores_proyectados'));
				$acu_gestionresultado->setGreValorMacromedicion($this->getRequestParameter('acu_gre_valor_macromedicion'));
			}
			
			if($this->getRequestParameter('form') == 'actividad34'){
				$acu_gestionresultado->setGreMuestrasTomadas($this->getRequestParameter('acu_gre_muestras_tomadas'));
				$acu_gestionresultado->setGreMuestrasAptas($this->getRequestParameter('acu_gre_muestras_aptas'));
				$acu_gestionresultado->setGreValorCalidadAgua($this->getRequestParameter('acu_gre_valor_calidad_agua'));
				$acu_gestionresultado->setGreTotalSuscriptoresFacturacion($this->getRequestParameter('acu_gre_total_suscriptores_facturacion')); 
				$acu_gestionresultado->setGreTotalFacturasDiciembre($this->getRequestParameter('acu_gre_total_facturas_diciembre'));
				$acu_gestionresultado->setGreValorFacturacion($this->getRequestParameter('acu_gre_valor_facturacion'));
			}
			
			$acu_gestionresultado->save();
		
			$salida = "({success: true, mensaje:'La informacion de gestion de resultados fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en gestion resultado: ".$exception."'}})");
		}
	}
	else
	{
		try
		{
			$acu_gestionresultado = new Gestionresultado();
			
			if($this->getRequestParameter('form') == 'actividad12'){
				$acu_gestionresultado->setGreIafId($iaf_id);
				$acu_gestionresultado->setGrePlanGestionResultados($this->getRequestParameter('acu_gre_plan_gestion_resultados'));
				$acu_gestionresultado->setGreMicromedidoresFuncionando($this->getRequestParameter('acu_gre_micromedidores_funcionando'));
				$acu_gestionresultado->setGreTotalSuscriptoresMicromedicion($this->getRequestParameter('acu_gre_total_suscriptores_micromedicion')); 
				$acu_gestionresultado->setGreValorMicromedicion($this->getRequestParameter('acu_gre_valor_micromedicion'));  
				$acu_gestionresultado->setGreMacromedidoresFuncionando($this->getRequestParameter('acu_gre_macromedidores_funcionando'));
				$acu_gestionresultado->setGreMacromedidoresProyectados($this->getRequestParameter('acu_gre_macromedidores_proyectados'));
				$acu_gestionresultado->setGreValorMacromedicion($this->getRequestParameter('acu_gre_valor_macromedicion'));
			}
			
			if($this->getRequestParameter('form') == 'actividad34'){
				$acu_gestionresultado->setGreMuestrasTomadas($this->getRequestParameter('acu_gre_muestras_tomadas'));
				$acu_gestionresultado->setGreMuestrasAptas($this->getRequestParameter('acu_gre_muestras_aptas'));
				$acu_gestionresultado->setGreValorCalidadAgua($this->getRequestParameter('acu_gre_valor_calidad_agua'));
				$acu_gestionresultado->setGreTotalSuscriptoresFacturacion($this->getRequestParameter('acu_gre_total_suscriptores_facturacion')); 
				$acu_gestionresultado->setGreTotalFacturasDiciembre($this->getRequestParameter('acu_gre_total_facturas_diciembre'));
				$acu_gestionresultado->setGreValorFacturacion($this->getRequestParameter('acu_gre_valor_facturacion'));
			}
			
			$acu_gestionresultado->save();
			
			$salida = "({success: true, mensaje:'La informacion de gestion de resultados fue actualizada exitosamente: ".$this->getRequestParameter('acu_gre_valor_micromedicion')."'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en gestion resultado: ".$exception."'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcuGestionResultado(sfWebRequest $request)
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
		$conexion->add(GestionresultadoPeer::GRE_IAF_ID, $acu_administrativafinanciera->getIafId());
		$acu_gestionresultado = GestionresultadoPeer::doSelectOne($conexion);
		
		$datos;
		$pos=0;
		
		if($acu_gestionresultado)
		{
			$datos[$pos]['acu_gre_plan_gestion_resultados']=$acu_gestionresultado->getGrePlanGestionResultados();
			$datos[$pos]['acu_gre_micromedidores_funcionando']=$acu_gestionresultado->getGreMicromedidoresFuncionando();
			$datos[$pos]['acu_gre_total_suscriptores_micromedicion']=$acu_gestionresultado->getGreTotalSuscriptoresMicromedicion(); 
			$datos[$pos]['acu_gre_valor_micromedicion']=$acu_gestionresultado->getGreValorMicromedicion();  
			$datos[$pos]['acu_gre_macromedidores_funcionando']=$acu_gestionresultado->getGreMacromedidoresFuncionando();
			$datos[$pos]['acu_gre_macromedidores_proyectados']=$acu_gestionresultado->getGreMacromedidoresProyectados();
			$datos[$pos]['acu_gre_valor_macromedicion']=$acu_gestionresultado->getGreValorMacromedicion();
			
			$datos[$pos]['acu_gre_muestras_tomadas']=$acu_gestionresultado->getGreMuestrasTomadas();
			$datos[$pos]['acu_gre_muestras_aptas']=$acu_gestionresultado->getGreMuestrasAptas();
			$datos[$pos]['acu_gre_valor_calidad_agua']=$acu_gestionresultado->getGreValorCalidadAgua();
			$datos[$pos]['acu_gre_total_suscriptores_facturacion']=$acu_gestionresultado->getGreTotalSuscriptoresFacturacion(); 
			$datos[$pos]['acu_gre_total_facturas_diciembre']=$acu_gestionresultado->getGreTotalFacturasDiciembre();
			$datos[$pos]['acu_gre_valor_facturacion']=$acu_gestionresultado->getGreValorFacturacion();

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
