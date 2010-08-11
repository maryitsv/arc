<?php

/**
 * periodoprestadorservicio actions.
 *
 * @package    arc
 * @subpackage periodoprestadorservicio
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class periodoprestadorservicioActions extends sfActions
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
  
  public function executeSeleccionarPeriodoPrestadorServicio(sfWebRequest $request)
  {
	$salida = '';
	
	$pps_anio = $this->getRequestParameter('pps_anio');
	$pps_ser_acu = $this->getRequestParameter('pps_ser_acu');
	$pps_ser_alc = $this->getRequestParameter('pps_ser_alc');
	$pps_ser_ase = $this->getRequestParameter('pps_ser_ase');

	$pps_numero_suscriptores_acueducto = $this->getRequestParameter('pps_numero_suscriptores_acueducto');
	$pps_numero_suscriptores_alcantarillado = $this->getRequestParameter('pps_numero_suscriptores_alcantarillado');
	$pps_numero_suscriptores_aseo = $this->getRequestParameter('pps_numero_suscriptores_aseo');
	
	$pps_ser_id_acu = $this->obtenerServicioId('acueducto');
	$pps_ser_id_alc = $this->obtenerServicioId('alcantarillado');
	$pps_ser_id_ase = $this->obtenerServicioId('aseo');
	
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	
	if($pps_ser_acu == 1)
	{
		$this->asignarPeriodoPrestadorServicio($pps_pre_id, $pps_ser_id_acu);
	}
	
	if($pps_ser_alc == 2)
	{
		$conexion = new Criteria();
		$conexion->add(PrestadorporservicioPeer::PPSG_PRE_ID, $pps_pre_id);
		$conexion->add(PrestadorporservicioPeer::PPSG_SER_ID, $pps_ser_id_alc);
		$prestadorservicio_alc = PrestadorporservicioPeer::doSelectOne($conexion);
		
		if($prestadorservicio_alc)
		{
			$conexion = new Criteria();
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id_alc);
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_ANIO, $pps_anio);
			$periodoprestadorservicio_alc = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
			if($periodoprestadorservicio_alc)
			{
				$this->getUser()->setAttribute('pps_ser_id_alc', $pps_ser_id_alc);
				$salida = "({success: true, mensaje:'success'})";
			}
			else
			{
				try
				{
					$periodoprestadorservicio_alc = new Periodoporprestadorservicio();
					$periodoprestadorservicio_alc->setPpsPreId($pps_pre_id);
					$periodoprestadorservicio_alc->setPpsSerId($pps_ser_id_alc);
					$periodoprestadorservicio_alc->setPpsAnio($pps_anio);
					$periodoprestadorservicio_alc->save();
					$this->getUser()->setAttribute('pps_ser_id_alc', $pps_ser_id_alc);
					$salida = "({success: true, mensaje:'success'})";
				}
				catch(Exception $exception)
				{
					return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en alcantarillado'}})");
				}
			}
		}
		else
		{
			return $this->renderText("({success: false, errors: { reason: 'Usted no puede prestar el servicio de alcantarillado'}})");
		}
	}
	
	if($pps_ser_ase == 3)
	{
		$conexion = new Criteria();
		$conexion->add(PrestadorporservicioPeer::PPSG_PRE_ID, $pps_pre_id);
		$conexion->add(PrestadorporservicioPeer::PPSG_SER_ID, $pps_ser_id_ase);
		$prestadorservicio_ase = PrestadorporservicioPeer::doSelectOne($conexion);
		
		if($prestadorservicio_ase)
		{
			$conexion = new Criteria();
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id_ase);
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_ANIO, $pps_anio);
			$periodoprestadorservicio_ase = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
			if($periodoprestadorservicio_ase)
			{
				$this->getUser()->setAttribute('usu_ser_id_ase', $pps_ser_id_ase);
				$salida = "({success: true, mensaje:'success'})";
			}
			else
			{
				try
				{
					$periodoprestadorservicio_ase = new Periodoporprestadorservicio();
					$periodoprestadorservicio_ase->setPpsPreId($pps_pre_id);
					$periodoprestadorservicio_ase->setPpsSerId($pps_ser_id_ase);
					$periodoprestadorservicio_ase->setPpsAnio($pps_anio);
					$periodoprestadorservicio_ase->save();
					$this->getUser()->setAttribute('usu_ser_id_ase', $pps_ser_id_ase);
					$salida = "({success: true, mensaje:'success'})";
				}
				catch(Exception $exception)
				{
					return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en aseo'}})");
				}
			}
		}
		else
		{
			return $this->renderText("({success: false, errors: { reason: 'Usted no puede prestar el servicio de aseo'}})");
		}
	}
	if($pps_numero_suscriptores_acueducto  <= 100)
	{
	
	}
	else
	{
		//if()
	}
	$pps_numero_suscriptores_acueducto = $this->getRequestParameter('pps_numero_suscriptores_acueducto');
	$pps_numero_suscriptores_alcantarillado = $this->getRequestParameter('pps_numero_suscriptores_alcantarillado');
	$pps_numero_suscriptores_aseo = $this->getRequestParameter('pps_numero_suscriptores_aseo');
	
	
	$salida = "({success: true, mensaje:'success'})";
	
	
	$this->getUser()->setAttribute('pps_anio', $pps_anio);
	
	return $this->renderText($salida);
  }
  
  private function asignarPeriodoPrestadorServicio($pps_pre_id, $pps_ser_id)
  {
	$conexion = new Criteria();
	$conexion->add(PrestadorporservicioPeer::PPSG_PRE_ID, $pps_pre_id);
	$conexion->add(PrestadorporservicioPeer::PPSG_SER_ID, $pps_ser_id);
	$prestadorservicio = PrestadorporservicioPeer::doSelectOne($conexion);
	
	if($prestadorservicio)
	{
		$conexion = new Criteria();
		$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id);
		$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
		$conexion->add(PeriodoporprestadorservicioPeer::PPS_ANIO, $pps_anio);
		$periodoprestadorservicio_alc = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
		if($periodoprestadorservicio_alc)
		{
			$salida = "({success: true, mensaje:'success'})";
		}
		else
		{
			try
			{
				$periodoprestadorservicio_alc = new Periodoporprestadorservicio();
				$periodoprestadorservicio_alc->setPpsPreId($pps_pre_id);
				$periodoprestadorservicio_alc->setPpsSerId($pps_ser_id);
				$periodoprestadorservicio_alc->setPpsAnio($pps_anio);
				$periodoprestadorservicio_alc->save();
				$salida = "({success: true, mensaje:'success'})";
			}
			catch(Exception $exception)
			{
				return "({success: false, errors: { reason: 'Hubo un problema en alcantarillado'}})";
			}
		}
	}
	else
	{
		return "({success: false, errors: { reason: 'Usted no puede prestar el servicio de alcantarillado'}})";
	}
  }
  
}
