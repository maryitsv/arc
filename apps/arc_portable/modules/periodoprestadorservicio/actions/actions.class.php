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
	$pps_mes = $this->getRequestParameter('pps_mes');
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
	//$pps_anio = $pps_anio.'-'.$pps_mes.'-'.'1';
	
	if($pps_ser_acu == 1)
	{
		if($this->asignarPeriodoPrestadorServicio($pps_pre_id, $pps_ser_id_acu, $pps_anio))
		{
			$this->getUser()->setAttribute('pps_ser_id_acu', $pps_ser_acu);
		}
		else
		{
			return $this->renderText("({success: false, errors: { reason: 'no puede prestar el servicio de acueducto'}})");
		}
	}
	
	if($pps_ser_alc == 2)
	{
		if($this->asignarPeriodoPrestadorServicio($pps_pre_id, $pps_ser_id_alc, $pps_anio))
		{
			$this->getUser()->setAttribute('pps_ser_id_alc', $pps_ser_alc);
		}
		else
		{
			return $this->renderText("({success: false, errors: { reason: 'no puede prestar el servicio de alcantarillado'}})");
		}
	}
	
	if($pps_ser_ase == 3)
	{
		if($this->asignarPeriodoPrestadorServicio($pps_pre_id, $pps_ser_id_ase, $pps_anio))
		{
			$this->getUser()->setAttribute('pps_ser_id_ase', $pps_ser_ase);
		}
		else
		{
			return $this->renderText("({success: false, errors: { reason: 'no puede prestar el servicio de aseo'}})");
		}
	}
	
	$rango_acueducto = $this->calcularRango($pps_numero_suscriptores_acueducto);
	$rango_alcantarillado = $this->calcularRango($pps_numero_suscriptores_alcantarillado);
	$rango_aseo = $this->calcularRango($pps_numero_suscriptores_aseo);

	$salida = "({success: true, rango_acueducto: ".$rango_acueducto.", rango_alcantarillado: ".$rango_alcantarillado.", rango_aseo: ".$rango_aseo." })";
	
	//$this->getUser()->setAttribute('pps_anio', $pps_anio.'-'.$pps_mes.'-'.'1');
	$this->getUser()->setAttribute('pps_anio', $pps_anio);
	return $this->renderText($salida);
  }
  
  private function calcularRango($numerosuscriptores)
  {
	if($numerosuscriptores <= 100)
	{
		return 1;
	}
	else
	{
		if($numerosuscriptores > 100 && $numerosuscriptores <= 600)
		{
			return 2;
		}
		else
		{
			if($numerosuscriptores > 600)
			{
				return 3;
			}
		}
	}
  }
  
  private function asignarPeriodoPrestadorServicio($pps_pre_id, $pps_ser_id, $pps_anio)
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
		
		if(!$periodoprestadorservicio_alc)
		{
			try
			{
				$periodoprestadorservicio_alc = new Periodoporprestadorservicio();
				$periodoprestadorservicio_alc->setPpsPreId($pps_pre_id);
				$periodoprestadorservicio_alc->setPpsSerId($pps_ser_id);
				$periodoprestadorservicio_alc->setPpsAnio($pps_anio);
				$periodoprestadorservicio_alc->save();
				return true;
			}
			catch(Exception $exception)
			{
				return false;
			}
		}
		else
		{
			return true;
		}
	}
	else
	{
		return false;
	}
  }
}
