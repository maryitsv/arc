<?php

/**
 * acueducto_trabajadoresyvinculacion actions.
 *
 * @package    arc
 * @subpackage acueducto_trabajadoresyvinculacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_trabajadoresyvinculacionActions extends sfActions
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
  
  public function executeActualizarTrabajadoresyVinculacion(sfWebRequest $request)
  {
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
		$iaf_id = $acu_administrativafinanciera->getIafId();
		
		$conexion = new Criteria();
		$conexion->add(Trabajadoresyvinculacion::TRA_IAF_ID, $iaf_id);
		$acu_trabajadoresyvinculacion = Trabajadoresyvinculacion::doSelectOne($conexion);
		
		if($acu_trabajadoresyvinculacion)
		{
			try
			{
				//$acu_trabajadoresyvinculacion->set....
				
				$acu_trabajadoresyvinculacion->save();
			
				$salida = "({success: true, mensaje:'La informacion de trabajadores y vinculacion fue actualizada exitosamente'})";
			}
			catch(Exception $exception)
			{
				return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en trabajadores y vinculacion'}})");
			}
		}
		else
		{
			try
			{
				$acu_trabajadoresyvinculacion = new Trabajadoresyvinculacion();
				
				$acu_trabajadoresyvinculacion->setTraIafId($iaf_id);
				//$acu_trabajadoresyvinculacion->set...
				
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
