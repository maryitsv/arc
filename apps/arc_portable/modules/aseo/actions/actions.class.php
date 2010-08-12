<?php

/**
 * aseo actions.
 *
 * @package    arc
 * @subpackage aseo
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class aseoActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
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
  
  public function executeActualizarAseo(sfWebRequest $request)
  {
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('aseo');
	
	$conexion = new Criteria();
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PERIODO, $pps_periodo);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
	$aseo = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
	
	if($aseo)
	{
		try
		{
			$aseo->setPpsNombreDiligenciador($this->getRequestParameter('ase_pps_nombre_diligenciador'));
			$aseo->setPpsApellidoDiligenciador($this->getRequestParameter('ase_pps_apellido_diligenciador'));
			$aseo->setPpsIdentificacionDiligenciador($this->getRequestParameter('ase_pps_identificacion_diligenciador'));
			$aseo->setPpsTipoIdentificacionDiligenciador($this->getRequestParameter('ase_pps_tipo_identificacion_diligenciador'));
			$aseo->setPpsTelefonoDiligenciador($this->getRequestParameter('ase_pps_telefono_diligenciador'));
			
			$aseo->setPpsPresupuestoAprobado($this->getRequestParameter('ase_pps_presupuesto_aprobado'));
			$aseo->setPpsSuscriptoresPendientesDePago($this->getRequestParameter('ase_pps_suscriptores_pendientes_de_pago'));
			$aseo->setPpsEstatutos($this->getRequestParameter('ase_pps_estatutos'));
			$aseo->setPpsNumeroEmpleadosConCompetencias($this->getRequestParameter('ase_pps_numero_empleados_con_competencias'));
			$aseo->setPpsNumeroEmpleadosSinCompetencias($this->getRequestParameter('ase_pps_numero_empleados_sin_competencias'));
			$aseo->setPpsNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('ase_pps_numero_empleados_proceso_competencias'));
			$aseo->setPpsNumeroSuscriptores($this->getRequestParameter('ase_pps_numero_suscriptores'));
			
			$aseo->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en aseo'}})");
		}
	}
	else
	{
		try
		{
			$aseo = new Periodoporprestadorservicio();
			
			$aseo->setPpsPreId($pps_pre_id);
			$aseo->setPpsPeriodo($pps_periodo);
			$aseo->setPpsSerId($pps_ser_id);
			
			$aseo->setPpsNombreDiligenciador($this->getRequestParameter('ase_pps_nombre_diligenciador'));
			$aseo->setPpsApellidoDiligenciador($this->getRequestParameter('ase_pps_apellido_diligenciador'));
			$aseo->setPpsIdentificacionDiligenciador($this->getRequestParameter('ase_pps_identificacion_diligenciador'));
			$aseo->setPpsTipoIdentificacionDiligenciador($this->getRequestParameter('ase_pps_tipo_identificacion_diligenciador'));
			$aseo->setPpsTelefonoDiligenciador($this->getRequestParameter('ase_pps_telefono_diligenciador'));
			
			$aseo->setPpsPresupuestoAprobado($this->getRequestParameter('ase_pps_presupuesto_aprobado'));
			$aseo->setPpsSuscriptoresPendientesDePago($this->getRequestParameter('ase_pps_suscriptores_pendientes_de_pago'));
			$aseo->setPpsEstatutos($this->getRequestParameter('ase_pps_estatutos'));
			$aseo->setPpsNumeroEmpleadosConCompetencias($this->getRequestParameter('ase_pps_numero_empleados_con_competencias'));
			$aseo->setPpsNumeroEmpleadosSinCompetencias($this->getRequestParameter('ase_pps_numero_empleados_sin_competencias'));
			$aseo->setPpsNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('ase_pps_numero_empleados_proceso_competencias'));
			$aseo->setPpsNumeroSuscriptores($this->getRequestParameter('ase_pps_numero_suscriptores'));
			
			$aseo->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en aseo:".$exception."'}})");
		}
	}
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAseo()
  {
	$salida = "";
	
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('aseo');
	
	$conexion = new Criteria();
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PERIODO, $pps_periodo);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
	$aseo = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
	
	$datos;
	$pos=0;

	if($aseo)
	{
		$datos[$pos]['ase_pps_pre_id']=$aseo->getPpsPreId();
		$datos[$pos]['ase_pps_ser_id']=$aseo->getPpsSerId();
		$datos[$pos]['ase_pps_periodo']=$aseo->getPpsPeriodo();
		$datos[$pos]['ase_pps_presupuesto_aprobado']=$aseo->getPpsPresupuestoAprobado();
		$datos[$pos]['ase_pps_suscriptores_pendientes_de_pago']=$aseo->getPpsSuscriptoresPendientesDePago();
		$datos[$pos]['ase_pps_estatutos']=$aseo->getPpsEstatutos();
		$datos[$pos]['ase_pps_numero_empleados_con_competencias']=$aseo->getPpsNumeroEmpleadosConCompetencias();
		$datos[$pos]['ase_pps_numero_empleados_sin_competencias']=$aseo->getPpsNumeroEmpleadosSinCompetencias();
		$datos[$pos]['ase_pps_numero_empleados_proceso_competencias']=$aseo->getPpsNumeroEmpleadosProcesoCompetencias();
		$datos[$pos]['ase_pps_nombre_diligenciador']=$aseo->getPpsNombreDiligenciador();
		$datos[$pos]['ase_pps_apellido_diligenciador']=$aseo->getPpsApellidoDiligenciador();
		$datos[$pos]['ase_pps_telefono_diligenciador']=$aseo->getPpsTelefonoDiligenciador();
		$datos[$pos]['ase_pps_identificacion_diligenciador']=$aseo->getPpsIdentificacionDiligenciador();
		$datos[$pos]['ase_pps_tipo_identificacion_diligenciador']=$aseo->getPpsTipoIdentificacionDiligenciador();
		$datos[$pos]['ase_pps_numero_suscriptores']=$aseo->getPpsNumeroSuscriptores();
		
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$pos.',"results":'.$jsonresult.'})';
	}
	else {
		$salida = '({"total":"0", "results":""})';
	}
	return 	$this->renderText($salida);
   }
}
