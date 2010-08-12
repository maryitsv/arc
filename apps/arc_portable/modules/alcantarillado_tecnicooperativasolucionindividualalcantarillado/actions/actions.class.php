<?php

/**
 * alcantarillado_tecnicooperativasolucionindividualalcantarillado actions.
 *
 * @package    arc
 * @subpackage alcantarillado_tecnicooperativasolucionindividualalcantarillado
 * @author     maryit
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_tecnicooperativasolucionindividualalcantarilladoActions extends sfActions
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



/**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo obtiene el id de un servicio
  */
  protected function obtenerServicioId($ser_nombre)
	{
		$conexion = new Criteria();			
		$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
		$servicio = ServicioPeer::doSelectOne($conexion);
		$ser_id = $servicio->getSerId();
		return  $ser_id;
	}
	
	/**
  *@author:maryit sanchez
  *@date:9 de agosto de 2010
  *Este metodo obtiene el id de un tecnico operativo dados el periodo, y id del prestador, basicamente busca la tupla para obtener el id, pero si no existe la crea
  */
    public function obtenerTopId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(TecnicooperativoPeer::TOP_PPS_ANIO, $pps_anio);
	$conexion->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
	
	$tecnicooperativofila = TecnicooperativoPeer::doSelectOne($conexion);
	
	if(!$tecnicooperativofila){
	$tecnicooperativofila=new Tecnicooperativo();
	$tecnicooperativofila->setTopPpsPreId($pps_pre_id);
	$tecnicooperativofila->setTopPpsAnio($pps_anio);
	$tecnicooperativofila->setTopPpsSerId($pps_ser_id);
	$tecnicooperativofila->save();
	}
				
	return $tecnicooperativofila->getTopId();
  }
 
  /**
  *@author:maryit sanchez
  *@date:11 de agosto de 2010
  *Este metodo actualizalas soluciones individuales de alcantarillado
  */
  public function executeActualizarTecnicooperativasolucionindividualalcantarillado(sfWebRequest $request)
  {
	$salida = '';
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativasolucionindividualalcantarilladoPeer::TOSIA_TOP_ID, $top_id);
			$solucionindividual = TecnicooperativasolucionindividualalcantarilladoPeer::doSelectOne($conexion);
			$formulario=$this->getRequestParameter('formulario');

			if(!$solucionindividual)
			{
				$solucionindividual =new Tecnicooperativasolucionindividualalcantarillado();
				$solucionindividual->setTosiaTopId($top_id);
			}
			
			if($solucionindividual){
			
				if($formulario=='letrina_sanitario'){
					$solucionindividual->setTosiaLetrina($this->getRequestParameter('alc_tosia_letrina'));
					$solucionindividual->setTosiaLetrinaSecaNumeroViviendas($this->getRequestParameter('alc_tosia_letrina_seca_numero_viviendas'));
					$solucionindividual->setTosiaLetrinaPosoNumeroViviendas($this->getRequestParameter('alc_tosia_letrina_poso_numero_viviendas'));
					$solucionindividual->setTosiaLetrinaEcologicaNumeroViviendas($this->getRequestParameter('alc_tosia_letrina_ecologica_numero_viviendas'));
				
					$solucionindividual->setTosiaTasaSanitaria($this->getRequestParameter('alc_tosia_tasa_sanitaria'));
					$solucionindividual->setTosiaTasaSanitariaCampoNumeroViviendas($this->getRequestParameter('alc_tosia_tasa_sanitaria_campo_numero_viviendas'));
					$solucionindividual->setTosiaTasaSanitariaTanqueNumeroViviendas($this->getRequestParameter('alc_tosia_tasa_sanitaria_tanque_numero_viviendas'));
					$solucionindividual->setTosiaTasaSanitariaAlcantarillaNumeroViviendas($this->getRequestParameter('alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas'));
				}

				if($formulario=='inodoroalto_inodorobajo'){
					$solucionindividual->setTosiaInodoroBajoConsumo($this->getRequestParameter('alc_tosia_inodoro_bajo_consumo'));
					$solucionindividual->setTosiaInodoroBajoConsumoCampoNumeroViviendas($this->getRequestParameter('alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas'));
					$solucionindividual->setTosiaInodoroBajoConsumoTanqueNumeroViviendas($this->getRequestParameter('alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas'));
					$solucionindividual->setTosiaInodoroBajoConsumoAlcantarillaNumeroViviendas($this->getRequestParameter('alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas'));
				
					$solucionindividual->setTosiaInodoroAltoConsumo($this->getRequestParameter('alc_tosia_inodoro_alto_consumo'));
					$solucionindividual->setTosiaInodoroAltoConsumoCampoNumeroViviendas($this->getRequestParameter('alc_tosia_inodoro_alto_consumo_campo_numero_viviendas'));
					$solucionindividual->setTosiaInodoroAltoConsumoTanqueNumeroViviendas($this->getRequestParameter('alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas'));
					$solucionindividual->setTosiaInodoroAltoConsumoAlcantarillaNumeroViviendas($this->getRequestParameter('alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas'));			
				}

				if($formulario=='campoabierto_otro'){
					$solucionindividual->setTosiaCampoAbierto($this->getRequestParameter('alc_tosia_campo_abierto'));
					$solucionindividual->setTosiaCampoAbiertoNumeroViviendas($this->getRequestParameter('alc_tosia_campo_abierto_numero_viviendas'));
					$solucionindividual->setTosiaOtro($this->getRequestParameter('alc_tosia_otro'));
					$solucionindividual->setTosiaOtroNumeroViviendas($this->getRequestParameter('alc_tosia_otro_numero_viviendas'));			
					$solucionindividual->setTosiaOtroCual($this->getRequestParameter('alc_tosia_otro_cual'));			
				}


				$solucionindividual->save();
				
				$salida = "({success: true, mensaje:'La informacion de tecnico operativa de alcantarillado soluciones individuales fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion al actualizar en tecnico operativa, alcantarillado soluciones individuales  ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }

 /**
  *@author:maryit sanchez
  *@date:11 de agosto de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente a Tecnico operativa solucion individual alcantarillado para
  *un periodo, un prestador y un servicio especifico
  */
 public function executeObtenerDatosTecnicooperativasolucionindividualalcantarillado(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativasolucionindividualalcantarilladoPeer::TOSIA_TOP_ID, $top_id);
			$solucionindividual = TecnicooperativasolucionindividualalcantarilladoPeer::doSelectOne($conexion);

			if($solucionindividual)
			{
				$datos[$fila]['alc_tosia_letrina'] = $solucionindividual->getTosiaLetrina();
				$datos[$fila]['alc_tosia_letrina_seca_numero_viviendas'] = $solucionindividual->getTosiaLetrinaSecaNumeroViviendas();
				$datos[$fila]['alc_tosia_letrina_poso_numero_viviendas'] = $solucionindividual->getTosiaLetrinaPosoNumeroViviendas();
				$datos[$fila]['alc_tosia_letrina_ecologica_numero_viviendas'] = $solucionindividual->getTosiaLetrinaEcologicaNumeroViviendas();

				$datos[$fila]['alc_tosia_tasa_sanitaria'] = $solucionindividual->getTosiaTasaSanitaria();
				$datos[$fila]['alc_tosia_tasa_sanitaria_campo_numero_viviendas'] = $solucionindividual->getTosiaTasaSanitariaCampoNumeroViviendas();
				$datos[$fila]['alc_tosia_tasa_sanitaria_tanque_numero_viviendas'] = $solucionindividual->getTosiaTasaSanitariaTanqueNumeroViviendas();
				$datos[$fila]['alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas'] = $solucionindividual->getTosiaTasaSanitariaAlcantarillaNumeroViviendas();

				$datos[$fila]['alc_tosia_inodoro_bajo_consumo'] = $solucionindividual->getTosiaInodoroBajoConsumo();
				$datos[$fila]['alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas'] = $solucionindividual->getTosiaInodoroBajoConsumoCampoNumeroViviendas();
				$datos[$fila]['alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas'] = $solucionindividual->getTosiaInodoroBajoConsumoTanqueNumeroViviendas();
				$datos[$fila]['alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas'] = $solucionindividual->getTosiaInodoroBajoConsumoAlcantarillaNumeroViviendas();

				$datos[$fila]['alc_tosia_inodoro_alto_consumo'] = $solucionindividual->getTosiaInodoroAltoConsumo();
				$datos[$fila]['alc_tosia_inodoro_alto_consumo_campo_numero_viviendas'] = $solucionindividual->getTosiaInodoroAltoConsumoCampoNumeroViviendas();
				$datos[$fila]['alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas'] = $solucionindividual->getTosiaInodoroAltoConsumoTanqueNumeroViviendas();
				$datos[$fila]['alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas'] = $solucionindividual->getTosiaInodoroAltoConsumoAlcantarillaNumeroViviendas();
				
				$datos[$fila]['alc_tosia_campo_abierto'] = $solucionindividual->getTosiaCampoAbierto();
				$datos[$fila]['alc_tosia_campo_abierto_numero_viviendas'] = $solucionindividual->getTosiaCampoAbiertoNumeroViviendas();
				$datos[$fila]['alc_tosia_otro'] = $solucionindividual->getTosiaOtro();
				$datos[$fila]['alc_tosia_otro_numero_viviendas'] = $solucionindividual->getTosiaOtroNumeroViviendas();
				$datos[$fila]['alc_tosia_otro_cual'] = $solucionindividual->getTosiaOtroCual();

				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion al listar en tecnico operativa, alcantarillado soluciones individuales  ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }

}
