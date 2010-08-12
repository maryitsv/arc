<?php

/**
 * alcantarillado actions.
 *
 * @package    arc
 * @subpackage alcantarillado
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarilladoActions extends sfActions
{

  protected function obtenerServicioId($ser_nombre)
  {
	$conexion = new Criteria();			
	$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
	$servicio = ServicioPeer::doSelectOne($conexion);
	$ser_id = $servicio->getSerId();
	return  $ser_id;
  }

  public function executeIndex(sfWebRequest $request)
  {
    //$this->forward('default', 'module');
  }
  
  public function executeActualizarAlcantarillado(sfWebRequest $request)
  {
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PERIODO, $pps_periodo);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
	$alcantarillado = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
	
	if($alcantarillado)
	{
		try
		{
			$alcantarillado->setPpsNombreDiligenciador($this->getRequestParameter('alc_pps_nombre_diligenciador'));
			$alcantarillado->setPpsApellidoDiligenciador($this->getRequestParameter('alc_pps_apellido_diligenciador'));
			$alcantarillado->setPpsIdentificacionDiligenciador($this->getRequestParameter('alc_pps_identificacion_diligenciador'));
			$alcantarillado->setPpsTipoIdentificacionDiligenciador($this->getRequestParameter('alc_pps_tipo_identificacion_diligenciador'));
			$alcantarillado->setPpsTelefonoDiligenciador($this->getRequestParameter('alc_pps_telefono_diligenciador'));
			
			$alcantarillado->setPpsPresupuestoAprobado($this->getRequestParameter('alc_pps_presupuesto_aprobado'));
			$alcantarillado->setPpsSuscriptoresPendientesDePago($this->getRequestParameter('alc_pps_suscriptores_pendientes_de_pago'));
			$alcantarillado->setPpsEstatutos($this->getRequestParameter('alc_pps_estatutos'));
			$alcantarillado->setPpsNumeroEmpleadosConCompetencias($this->getRequestParameter('alc_pps_numero_empleados_con_competencias'));
			$alcantarillado->setPpsNumeroEmpleadosSinCompetencias($this->getRequestParameter('alc_pps_numero_empleados_sin_competencias'));
			$alcantarillado->setPpsNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('alc_pps_numero_empleados_proceso_competencias'));
			$alcantarillado->setPpsNumeroSuscriptores($this->getRequestParameter('alc_pps_numero_suscriptores'));
			
			$alcantarillado->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en alcantarillado'}})");
		}
	}
	else
	{
		try
		{
			$alcantarillado = new Periodoporprestadorservicio();
			
			$alcantarillado->setPpsPreId($pps_pre_id);
			$alcantarillado->setPpsPeriodo($pps_periodo);
			$alcantarillado->setPpsSerId($pps_ser_id);
			
			$alcantarillado->setPpsNombreDiligenciador($this->getRequestParameter('alc_pps_nombre_diligenciador'));
			$alcantarillado->setPpsApellidoDiligenciador($this->getRequestParameter('alc_pps_apellido_diligenciador'));
			$alcantarillado->setPpsIdentificacionDiligenciador($this->getRequestParameter('alc_pps_identificacion_diligenciador'));
			$alcantarillado->setPpsTipoIdentificacionDiligenciador($this->getRequestParameter('alc_pps_tipo_identificacion_diligenciador'));
			$alcantarillado->setPpsTelefonoDiligenciador($this->getRequestParameter('alc_pps_telefono_diligenciador'));
			
			$alcantarillado->setPpsPresupuestoAprobado($this->getRequestParameter('alc_pps_presupuesto_aprobado'));
			$alcantarillado->setPpsSuscriptoresPendientesDePago($this->getRequestParameter('alc_pps_suscriptores_pendientes_de_pago'));
			$alcantarillado->setPpsEstatutos($this->getRequestParameter('alc_pps_estatutos'));
			$alcantarillado->setPpsNumeroEmpleadosConCompetencias($this->getRequestParameter('alc_pps_numero_empleados_con_competencias'));
			$alcantarillado->setPpsNumeroEmpleadosSinCompetencias($this->getRequestParameter('alc_pps_numero_empleados_sin_competencias'));
			$alcantarillado->setPpsNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('alc_pps_numero_empleados_proceso_competencias'));
			$alcantarillado->setPpsNumeroSuscriptores($this->getRequestParameter('alc_pps_numero_suscriptores'));
			
			$alcantarillado->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en alcantarillado'}})");
		}
	}
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAlcantarillado()
  {
	$salida = "";
	
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PERIODO, $pps_periodo);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
	$alcantarillado = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
	
	$datos;
	$pos=0;

	if($alcantarillado)
	{
		$datos[$pos]['alc_pps_pre_id']=$alcantarillado->getPpsPreId();
		$datos[$pos]['alc_pps_ser_id']=$alcantarillado->getPpsSerId();
		$datos[$pos]['alc_pps_periodo']=$alcantarillado->getPpsPeriodo();
		$datos[$pos]['alc_pps_presupuesto_aprobado']=$alcantarillado->getPpsPresupuestoAprobado();
		$datos[$pos]['alc_pps_suscriptores_pendientes_de_pago']=$alcantarillado->getPpsSuscriptoresPendientesDePago();
		$datos[$pos]['alc_pps_estatutos']=$alcantarillado->getPpsEstatutos();
		$datos[$pos]['alc_pps_numero_empleados_con_competencias']=$alcantarillado->getPpsNumeroEmpleadosConCompetencias();
		$datos[$pos]['alc_pps_numero_empleados_sin_competencias']=$alcantarillado->getPpsNumeroEmpleadosSinCompetencias();
		$datos[$pos]['alc_pps_numero_empleados_proceso_competencias']=$alcantarillado->getPpsNumeroEmpleadosProcesoCompetencias();
		$datos[$pos]['alc_pps_nombre_diligenciador']=$alcantarillado->getPpsNombreDiligenciador();
		$datos[$pos]['alc_pps_apellido_diligenciador']=$alcantarillado->getPpsApellidoDiligenciador();
		$datos[$pos]['alc_pps_telefono_diligenciador']=$alcantarillado->getPpsTelefonoDiligenciador();
		$datos[$pos]['alc_pps_identificacion_diligenciador']=$alcantarillado->getPpsIdentificacionDiligenciador();
		$datos[$pos]['alc_pps_tipo_identificacion_diligenciador']=$alcantarillado->getPpsTipoIdentificacionDiligenciador();
		$datos[$pos]['alc_pps_numero_suscriptores']=$alcantarillado->getPpsNumeroSuscriptores();
		
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$pos.',"results":'.$jsonresult.'})';
	}
	else {
		$salida = '({"total":"0", "results":""})';
	}
	return 	$this->renderText($salida);
   }
}
