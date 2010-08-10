<?php

/**
 * acueducto actions.
 *
 * @package    arc
 * @subpackage acueducto
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueductoActions extends sfActions
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
  
  public function executeActualizarAcueducto(sfWebRequest $request)
  {
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_ANIO, $pps_anio);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
	$acueducto = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
	
	if($acueducto)
	{
		try
		{
			$acueducto->setPpsNombreDiligenciador($this->getRequestParameter('acu_pps_nombre_diligenciador'));
			$acueducto->setPpsApellidoDiligenciador($this->getRequestParameter('acu_pps_apellido_diligenciador'));
			$acueducto->setPpsIdentificacionDiligenciador($this->getRequestParameter('acu_pps_identificacion_diligenciador'));
			$acueducto->setPpsTipoIdentificacionDiligenciador($this->getRequestParameter('acu_pps_tipo_identificacion_diligenciador'));
			$acueducto->setPpsTelefonoDiligenciador($this->getRequestParameter('acu_pps_telefono_diligenciador'));
			
			$acueducto->setPpsPresupuestoAprobado($this->getRequestParameter('acu_pps_presupuesto_aprobado'));
			$acueducto->setPpsSuscriptoresPendientesDePago($this->getRequestParameter('acu_pps_suscriptores_pendientes_de_pago'));
			$acueducto->setPpsEstatutos($this->getRequestParameter('acu_pps_estatutos'));
			$acueducto->setPpsNumeroEmpleadosConCompetencias($this->getRequestParameter('acu_pps_numero_empleados_con_competencias'));
			$acueducto->setPpsNumeroEmpleadosSinCompetencias($this->getRequestParameter('acu_pps_numero_empleados_sin_competencias'));
			$acueducto->setPpsNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('acu_pps_numero_empleados_proceso_competencias'));
			$acueducto->setPpsNumeroSuscriptores($this->getRequestParameter('acu_pps_numero_suscriptores'));
			
			$acueducto->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en acueducto'}})");
		}
	}
	else
	{
		try
		{
			$acueducto = new Periodoporprestadorservicio();
			
			$acueducto->setPpsPreId($pps_pre_id);
			$acueducto->setPpsAnio($pps_anio);
			$acueducto->setPpsSerId($pps_ser_id);
			
			$acueducto->setPpsNombreDiligenciador($this->getRequestParameter('acu_pps_nombre_diligenciador'));
			$acueducto->setPpsApellidoDiligenciador($this->getRequestParameter('acu_pps_apellido_diligenciador'));
			$acueducto->setPpsIdentificacionDiligenciador($this->getRequestParameter('acu_pps_identificacion_diligenciador'));
			$acueducto->setPpsTipoIdentificacionDiligenciador($this->getRequestParameter('acu_pps_tipo_identificacion_diligenciador'));
			$acueducto->setPpsTelefonoDiligenciador($this->getRequestParameter('acu_pps_telefono_diligenciador'));
			
			$acueducto->setPpsPresupuestoAprobado($this->getRequestParameter('acu_pps_presupuesto_aprobado'));
			$acueducto->setPpsSuscriptoresPendientesDePago($this->getRequestParameter('acu_pps_suscriptores_pendientes_de_pago'));
			$acueducto->setPpsEstatutos($this->getRequestParameter('acu_pps_estatutos'));
			$acueducto->setPpsNumeroEmpleadosConCompetencias($this->getRequestParameter('acu_pps_numero_empleados_con_competencias'));
			$acueducto->setPpsNumeroEmpleadosSinCompetencias($this->getRequestParameter('acu_pps_numero_empleados_sin_competencias'));
			$acueducto->setPpsNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('acu_pps_numero_empleados_proceso_competencias'));
			$acueducto->setPpsNumeroSuscriptores($this->getRequestParameter('acu_pps_numero_suscriptores'));
			
			$acueducto->save();
			
			$salida = "({success: true, mensaje:'La informacion administrativa financiera fue actualizada exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en acueducto'}})");
		}
	}
	return $this->renderText($salida);
  }
  
  public function executeObtenerDatosAcueducto()
  {
	$salida = "";
	
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_ANIO, $pps_anio);
	$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
	$acueducto = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
	
	$datos;
	$pos=0;

	if($acueducto)
	{
		$datos[$pos]['acu_pps_pre_id']=$acueducto->getPpsPreId();
		$datos[$pos]['acu_pps_ser_id']=$acueducto->getPpsSerId();
		$datos[$pos]['acu_pps_anio']=$acueducto->getPpsAnio();
		$datos[$pos]['acu_pps_presupuesto_aprobado']=$acueducto->getPpsPresupuestoAprobado();
		$datos[$pos]['acu_pps_suscriptores_pendientes_de_pago']=$acueducto->getPpsSuscriptoresPendientesDePago();
		$datos[$pos]['acu_pps_estatutos']=$acueducto->getPpsEstatutos();
		$datos[$pos]['acu_pps_numero_empleados_con_competencias']=$acueducto->getPpsNumeroEmpleadosConCompetencias();
		$datos[$pos]['acu_pps_numero_empleados_sin_competencias']=$acueducto->getPpsNumeroEmpleadosSinCompetencias();
		$datos[$pos]['acu_pps_numero_empleados_proceso_competencias']=$acueducto->getPpsNumeroEmpleadosProcesoCompetencias();
		$datos[$pos]['acu_pps_nombre_diligenciador']=$acueducto->getPpsNombreDiligenciador();
		$datos[$pos]['acu_pps_apellido_diligenciador']=$acueducto->getPpsApellidoDiligenciador();
		$datos[$pos]['acu_pps_telefono_diligenciador']=$acueducto->getPpsTelefonoDiligenciador();
		$datos[$pos]['acu_pps_identificacion_diligenciador']=$acueducto->getPpsIdentificacionDiligenciador();
		$datos[$pos]['acu_pps_tipo_identificacion_diligenciador']=$acueducto->getPpsTipoIdentificacionDiligenciador();
		$datos[$pos]['acu_pps_numero_suscriptores']=$acueducto->getPpsNumeroSuscriptores();
		
		$jsonresult = json_encode($datos);
		$salida = '({"total":'.$pos.',"results":'.$jsonresult.'})';
	}
	else {
		$salida = '({"total":"0", "results":""})';
	}
	return 	$this->renderText($salida);
   }
}
