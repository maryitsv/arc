<?php

/**
 * prestador actions.
 *
 * @package    arc
 * @subpackage prestador
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class prestadorActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  
  public function executeActualizarPrestador(sfWebRequest $request)
  {
	$salida = "";
	
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	
	$conexion = new Criteria();
	$conexion->add(PrestadorPeer::PRE_ID, $pps_pre_id);
	$prestador = PrestadorPeer::doSelectOne($conexion);
	
	if($prestador)
	{
		try
		{
			$prestador->setPreIdentificacionPrestador($this->getRequestParameter('pre_identificacion_prestador'));
			$prestador->setPreTipoIdentificacionPrestador($this->getRequestParameter('pre_tipo_identificacion_prestador'));
			$prestador->setPreNombrePrestador($this->getRequestParameter('pre_nombre_prestador'));
			/*$prestador->setPreEstatutos($this->getRequestParameter('pre_estatutos'));
			$prestador->setPreNumeroEmpleadosConCompetencias($this->getRequestParameter('pre_numero_empleados_con_competencias'));
			$prestador->setPreNumeroEmpleadosSinCompetencias($this->getRequestParameter('pre_numero_empleados_sin_competencias'));
			$prestador->setPreNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('pre_numero_empleados_proceso_competencias'));*/
			//$prestador->setPreSuscriptores($this->getRequestParameter('pre_suscriptores'));
			
			$prestador->save();
			
			$salida = "({success: true, mensaje:'El prestador fue actualizado exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en prestador'}})");
		}
	}
	else
	{
		try
		{
			$prestador = new Prestador();
			$prestador->setPreIdentificacionPrestador($this->getRequestParameter('pre_identificacion_prestador'));
			$prestador->setPreTipoIdentificacionPrestador($this->getRequestParameter('pre_tipo_identificacion_prestador'));
			$prestador->setPreNombrePrestador($this->getRequestParameter('pre_nombre_prestador'));
			/*$prestador->setPreEstatutos($this->getRequestParameter('pre_estatutos'));
			$prestador->setPreNumeroEmpleadosConCompetencias($this->getRequestParameter('pre_numero_empleados_con_competencias'));
			$prestador->setPreNumeroEmpleadosSinCompetencias($this->getRequestParameter('pre_numero_empleados_sin_competencias'));
			$prestador->setPreNumeroEmpleadosProcesoCompetencias($this->getRequestParameter('pre_numero_empleados_proceso_competencias'));
			$prestador->setPreSuscriptores($this->getRequestParameter('pre_suscriptores'));   *///***  ????????????????????????
			
			$prestador->save();
			
			$salida = "({success: true, mensaje:'El prestador fue creado exitosamente'})";
		}
		catch(Exception $exception)
		{
			return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en prestador'}})");
		}
	}
	
	return $this->renderText($salida);
  }
  
  
  public function executeObtenerDatosPrestador()
  {
	$salida = "";
	
	$usu_id = $this->getUser()->getAttribute('usu_id');
	$conexion = new Criteria();
	$conexion->add(PrestadorPeer::PRE_USU_ID, $usu_id);
	$prestador = PrestadorPeer::doSelectOne($conexion);
	$datos;
	$pos=0;

		if($prestador)
		{

			$datos[$pos]['pre_identificacion_prestador']=$prestador->getPreIdentificacionPrestador();
			$datos[$pos]['pre_tipo_identificacion_prestador']=$prestador->getPreTipoIdentificacionPrestador();
			$datos[$pos]['pre_nombre_prestador']=$prestador->getPreNombrePrestador();
			/*$datos[$pos]['pre_estatutos']=$prestador->getPreEstatutos();		
			$datos[$pos]['pre_numero_empleados_con_competencias']=$prestador->getPreNumeroEmpleadosConCompetencias();		
			$datos[$pos]['pre_numero_empleados_sin_competencias']=$prestador->getPreNumeroEmpleadosSinCompetencias();		
			$datos[$pos]['pre_numero_empleados_proceso_competencias']=$prestador->getPreNumeroEmpleadosProcesoCompetencias();*/	
			//$datos[$pos]['pre_suscriptores']=$prestador->getPreSuscriptores();		
			
			
			$jsonresult = json_encode($datos);
			$salida = '({"total":'.$pos.',"results":'.$jsonresult.'})';
		

		}
		else {
			$salida = '({"total":"0", "results":""})';
		}
	return 	$this->renderText($salida);
   }

  
  
  public function executeIndex(sfWebRequest $request)
  {
    //$this->forward('default', 'module');
  }
}
