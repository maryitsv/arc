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
	
	$pps_ser_id_acu = $this->obtenerServicioId('acueducto');
	$pps_ser_id_alc = $this->obtenerServicioId('alcantarillado');
	$pps_ser_id_ase = $this->obtenerServicioId('aseo');
	
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	
	if($pps_ser_acu == 1)
	{
		$conexion = new Criteria();
		$conexion->add(PrestadorporservicioPeer::PPSG_PRE_ID, $pps_pre_id);
		$conexion->add(PrestadorporservicioPeer::PPSG_SER_ID, $pps_ser_id_acu);
		$prestadorservicio_acu = PrestadorporservicioPeer::doSelectOne($conexion);
		
		if($prestadorservicio_acu)
		{
			$conexion = new Criteria();
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_SER_ID, $pps_ser_id_acu);
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $pps_pre_id);
			$conexion->add(PeriodoporprestadorservicioPeer::PPS_ANIO, $pps_anio);
			$periodoprestadorservicio_acu = PeriodoporprestadorservicioPeer::doSelectOne($conexion);
			if($periodoprestadorservicio_acu)
			{
				$this->getUser()->setAttribute('pps_ser_id_acu', $pps_ser_id_acu);
				$salida = "({success: true, mensaje:' No se que poner aqui!!! acueducto'})";
			}
			else
			{
				try
				{
					$periodoprestadorservicio_acu = new Periodoporprestadorporservicio();
					$periodoprestadorservicio_acu->setPpsPreId($pps_pre_id);
					$periodoprestadorservicio_acu->setPpsSerId($pps_ser_id_acu);
					$periodoprestadorservicio_acu->setPpsAnio($pps_anio);
					$periodoprestadorservicio_acu->save();
					$this->getUser()->setAttribute('pps_ser_id_acu', $pps_ser_id_acu);
					$salida = "({success: true, mensaje:' No se que poner aqui!!! acueducto'})";
				}
				catch(Exception $exception)
				{
					return $this->renderText("({success: false, errors: { reason: 'Hubo un problema en acueducto'}})");
				}
			}
		}
		else
		{
			return $this->renderText("({success: false, errors: { reason: 'Usted no puede prestar el servicio de acueducto'}})");
		}
	}
	
	if($pps_ser_alc == 1)
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
				$salida = "({success: true, mensaje:' No se que poner aqui!!! alcantarillado'})";
			}
			else
			{
				try
				{
					$periodoprestadorservicio_alc = new Periodoporprestadorporservicio();
					$periodoprestadorservicio_alc->setPpsPreId($pps_pre_id);
					$periodoprestadorservicio_alc->setPpsSerId($pps_ser_id_alc);
					$periodoprestadorservicio_alc->setPpsAnio($pps_anio);
					$periodoprestadorservicio_alc->save();
					$this->getUser()->setAttribute('pps_ser_id_alc', $pps_ser_id_alc);
					$salida = "({success: true, mensaje:' No se que poner aqui!!! alcantarillado'})";
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
	
	if($pps_ser_ase == 1)
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
				$salida = "({success: true, mensaje:' No se que poner aqui!!! aseo'})";
			}
			else
			{
				try
				{
					$periodoprestadorservicio_ase = new Periodoporprestadorporservicio();
					$periodoprestadorservicio_ase->setPpsPreId($pps_pre_id);
					$periodoprestadorservicio_ase->setPpsSerId($pps_ser_id_ase);
					$periodoprestadorservicio_ase->setPpsAnio($pps_anio);
					$periodoprestadorservicio_ase->save();
					$this->getUser()->setAttribute('usu_ser_id_ase', $pps_ser_id_ase);
					$salida = "({success: true, mensaje:' No se que poner aqui!!! aseo'})";
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
	
	$this->getUser()->setAttribute('pps_anio', $pps_anio);
	
	return $this->renderText($salida);
  }
  
}
