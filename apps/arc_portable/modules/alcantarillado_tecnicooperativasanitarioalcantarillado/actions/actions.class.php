<?php

/**
 * alcantarillado_tecnicooperativasanitarioalcantarillado actions.
 *
 * @package    arc
 * @subpackage alcantarillado_tecnicooperativasanitarioalcantarillado
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_tecnicooperativasanitarioalcantarilladoActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
   // $this->forward('default', 'module');
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
  *Este metodo obtiene el id de un tecnico operativo dados el periodo, y id del prproblema_taponamientor, basicamente busca la tupla para obtener el id, pero si no existe la crea
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
  *Este metodo actualizalas sanitario de alcantarillado
  */
  public function executeActualizarTecnicooperativasanitarioalcantarillado(sfWebRequest $request)
  {
	$salida = '';
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativasanitarioalcantarilladoPeer::TOSA_TOP_ID, $top_id);
			$sanitario = TecnicooperativasanitarioalcantarilladoPeer::doSelectOne($conexion);
			
			if(!$sanitario)
			{
				$sanitario =new Tecnicooperativasanitarioalcantarillado();
				$sanitario->setTosaTopId($top_id);
			}
			
			if($sanitario){
				$sanitario->setTosaCajaDomiciliar($this->getRequestParameter('alc_tosa_caja_domiciliar'));
				$sanitario->setTosaColectores($this->getRequestParameter('alc_tosa_colectores'));
				$sanitario->setTosaCamaraInspeccion($this->getRequestParameter('alc_tosa_camara_inspeccion'));
				$sanitario->setTosaEstacionBombeo($this->getRequestParameter('alc_tosa_estacion_bombeo'));
				$sanitario->setTosaEmisorFinal($this->getRequestParameter('alc_tosa_emisor_final'));
				$sanitario->setTosaEstructuraDescarga($this->getRequestParameter('alc_tosa_estructura_descarga'));

				$sanitario->setTosaCajaDomiciliarFunciona($this->getRequestParameter('alc_tosa_caja_domiciliar_funciona'));
				$sanitario->setTosaColectoresFunciona($this->getRequestParameter('alc_tosa_colectores_funciona'));
				$sanitario->setTosaCamaraInspeccionFunciona($this->getRequestParameter('alc_tosa_camara_inspeccion_funciona'));
				$sanitario->setTosaEstacionBombeoFunciona($this->getRequestParameter('alc_tosa_estacion_bombeo_funciona'));
				$sanitario->setTosaEmisorFinalFunciona($this->getRequestParameter('alc_tosa_emisor_final_funciona'));
				$sanitario->setTosaEstructuraDescargaFunciona($this->getRequestParameter('alc_tosa_estructura_descarga_funciona'));

				$sanitario->setTosaCajaDomiciliarSeUsa($this->getRequestParameter('alc_tosa_caja_domiciliar_se_usa'));
				$sanitario->setTosaColectoresSeUsa($this->getRequestParameter('alc_tosa_colectores_se_usa'));
				$sanitario->setTosaCamaraInspeccionSeUsa($this->getRequestParameter('alc_tosa_camara_inspeccion_se_usa'));
				$sanitario->setTosaEstacionBombeoSeUsa($this->getRequestParameter('alc_tosa_estacion_bombeo_se_usa'));
				$sanitario->setTosaEmisorFinalSeUsa($this->getRequestParameter('alc_tosa_emisor_final_se_usa'));
				$sanitario->setTosaEstructuraDescargaSeUsa($this->getRequestParameter('alc_tosa_estructura_descarga_se_usa'));
			
				$sanitario->setTosaCajaDomiciliarProblemaTaponamiento($this->getRequestParameter('alc_tosa_caja_domiciliar_problema_taponamiento'));
				$sanitario->setTosaColectoresProblemaTaponamiento($this->getRequestParameter('alc_tosa_colectores_problema_taponamiento'));
				$sanitario->setTosaCamaraInspeccionProblemaTaponamiento($this->getRequestParameter('alc_tosa_camara_inspeccion_problema_taponamiento'));
				$sanitario->setTosaEstacionBombeoProblemaTaponamiento($this->getRequestParameter('alc_tosa_estacion_bombeo_problema_taponamiento'));
				$sanitario->setTosaEmisorFinalProblemaTaponamiento($this->getRequestParameter('alc_tosa_emisor_final_problema_taponamiento'));
				$sanitario->setTosaEstructuraDescargaProblemaTaponamiento($this->getRequestParameter('alc_tosa_estructura_descarga_problema_taponamiento'));
				
				$sanitario->setTosaCajaDomiciliarProblemaRebose($this->getRequestParameter('alc_tosa_caja_domiciliar_problema_rebose'));
				$sanitario->setTosaColectoresProblemaRebose($this->getRequestParameter('alc_tosa_colectores_problema_rebose'));
				$sanitario->setTosaCamaraInspeccionProblemaRebose($this->getRequestParameter('alc_tosa_camara_inspeccion_problema_rebose'));
				$sanitario->setTosaEstacionBombeoProblemaRebose($this->getRequestParameter('alc_tosa_estacion_bombeo_problema_rebose'));
				$sanitario->setTosaEmisorFinalProblemaRebose($this->getRequestParameter('alc_tosa_emisor_final_problema_rebose'));
				$sanitario->setTosaEstructuraDescargaProblemaRebose($this->getRequestParameter('alc_tosa_estructura_descarga_problema_rebose'));

				$sanitario->setTosaCajaDomiciliarProblemaRotura($this->getRequestParameter('alc_tosa_caja_domiciliar_problema_rotura'));
				$sanitario->setTosaColectoresProblemaRotura($this->getRequestParameter('alc_tosa_colectores_problema_rotura'));
				$sanitario->setTosaCamaraInspeccionProblemaRotura($this->getRequestParameter('alc_tosa_camara_inspeccion_problema_rotura'));
				$sanitario->setTosaEstacionBombeoProblemaRotura($this->getRequestParameter('alc_tosa_estacion_bombeo_problema_rotura'));
				$sanitario->setTosaEmisorFinalProblemaRotura($this->getRequestParameter('alc_tosa_emisor_final_problema_rotura'));
				$sanitario->setTosaEstructuraDescargaProblemaRotura($this->getRequestParameter('alc_tosa_estructura_descarga_problema_rotura'));
				
				$sanitario->setTosaCajaDomiciliarProblemaOlor($this->getRequestParameter('alc_tosa_caja_domiciliar_problema_olor'));
				$sanitario->setTosaColectoresProblemaOlor($this->getRequestParameter('alc_tosa_colectores_problema_olor'));
				$sanitario->setTosaCamaraInspeccionProblemaOlor($this->getRequestParameter('alc_tosa_camara_inspeccion_problema_olor'));
				$sanitario->setTosaEstacionBombeoProblemaOlor($this->getRequestParameter('alc_tosa_estacion_bombeo_problema_olor'));
				$sanitario->setTosaEmisorFinalProblemaOlor($this->getRequestParameter('alc_tosa_emisor_final_problema_olor'));
				$sanitario->setTosaEstructuraDescargaProblemaOlor($this->getRequestParameter('alc_tosa_estructura_descarga_problema_olor'));
			
			
				$sanitario->save();
				
				$salida = "({success: true, mensaje:'La informacion de la solucion colectiva de alcantarillado fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en solucion colectiva de alcantarillado ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }

 /**
  *@author:maryit sanchez
  *@date:11 de agosto de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente a Tecnico operativa sanitaro alcantarillado para
  *un periodo, un periodo y un servicio especifico
  */
 public function executeObtenerDatosTecnicooperativasanitarioalcantarillado(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativasanitarioalcantarilladoPeer::TOSA_TOP_ID, $top_id);
			$sanitario = TecnicooperativasanitarioalcantarilladoPeer::doSelectOne($conexion);

			if($sanitario)
			{
				
				$datos[$fila]['alc_tosa_caja_domiciliar'] = $sanitario->getTosaCajaDomiciliar();
				$datos[$fila]['alc_tosa_colectores'] = $sanitario->getTosaColectores();
				$datos[$fila]['alc_tosa_camara_inspeccion'] = $sanitario->getTosaCamaraInspeccion();
				$datos[$fila]['alc_tosa_estacion_bombeo'] = $sanitario->getTosaEstacionBombeo();
				$datos[$fila]['alc_tosa_emisor_final'] = $sanitario->getTosaEmisorFinal();
				$datos[$fila]['alc_tosa_estructura_descarga'] = $sanitario->getTosaEstructuraDescarga();
				

				$datos[$fila]['alc_tosa_caja_domiciliar_funciona'] = $sanitario->getTosaCajaDomiciliarFunciona();
				$datos[$fila]['alc_tosa_colectores_funciona'] = $sanitario->getTosaColectoresFunciona();
				$datos[$fila]['alc_tosa_camara_inspeccion_funciona'] = $sanitario->getTosaCamaraInspeccionFunciona();
				$datos[$fila]['alc_tosa_estacion_bombeo_funciona'] = $sanitario->getTosaEstacionBombeoFunciona();
				$datos[$fila]['alc_tosa_emisor_final_funciona'] = $sanitario->getTosaEmisorFinalFunciona();
				$datos[$fila]['alc_tosa_estructura_descarga_funciona'] = $sanitario->getTosaEstructuraDescargaFunciona();
				
				
				$datos[$fila]['alc_tosa_caja_domiciliar_se_usa'] = $sanitario->getTosaCajaDomiciliarSeUsa();
				$datos[$fila]['alc_tosa_colectores_se_usa'] = $sanitario->getTosaColectoresSeUsa();
				$datos[$fila]['alc_tosa_camara_inspeccion_se_usa'] = $sanitario->getTosaCamaraInspeccionSeUsa();
				$datos[$fila]['alc_tosa_estacion_bombeo_se_usa'] = $sanitario->getTosaEstacionBombeoSeUsa();
				$datos[$fila]['alc_tosa_emisor_final_se_usa'] = $sanitario->getTosaEmisorFinalSeUsa();
				$datos[$fila]['alc_tosa_estructura_descarga_se_usa'] = $sanitario->getTosaEstructuraDescargaSeUsa();
				

				$datos[$fila]['alc_tosa_caja_domiciliar_problema_taponamiento'] = $sanitario->getTosaCajaDomiciliarProblemaTaponamiento();
				$datos[$fila]['alc_tosa_colectores_problema_taponamiento'] = $sanitario->getTosaColectoresProblemaTaponamiento();
				$datos[$fila]['alc_tosa_camara_inspeccion_problema_taponamiento'] = $sanitario->getTosaCamaraInspeccionProblemaTaponamiento();
				$datos[$fila]['alc_tosa_estacion_bombeo_problema_taponamiento'] = $sanitario->getTosaEstacionBombeoProblemaTaponamiento();
				$datos[$fila]['alc_tosa_emisor_final_problema_taponamiento'] = $sanitario->getTosaEmisorFinalProblemaTaponamiento();
				$datos[$fila]['alc_tosa_estructura_descarga_problema_taponamiento'] = $sanitario->getTosaEstructuraDescargaProblemaTaponamiento();
				

				$datos[$fila]['alc_tosa_caja_domiciliar_problema_rebose'] = $sanitario->getTosaCajaDomiciliarProblemaRebose();
				$datos[$fila]['alc_tosa_colectores_problema_rebose'] = $sanitario->getTosaColectoresProblemaRebose();
				$datos[$fila]['alc_tosa_camara_inspeccion_problema_rebose'] = $sanitario->getTosaCamaraInspeccionProblemaRebose();
				$datos[$fila]['alc_tosa_estacion_bombeo_problema_rebose'] = $sanitario->getTosaEstacionBombeoProblemaRebose();
				$datos[$fila]['alc_tosa_emisor_final_problema_rebose'] = $sanitario->getTosaEmisorFinalProblemaRebose();
				$datos[$fila]['alc_tosa_estructura_descarga_problema_rebose'] = $sanitario->getTosaEstructuraDescargaProblemaRebose();
		
				$datos[$fila]['alc_tosa_caja_domiciliar_problema_rotura'] = $sanitario->getTosaCajaDomiciliarProblemaRotura();
				$datos[$fila]['alc_tosa_colectores_problema_rotura'] = $sanitario->getTosaColectoresProblemaRotura();
				$datos[$fila]['alc_tosa_camara_inspeccion_problema_rotura'] = $sanitario->getTosaCamaraInspeccionProblemaRotura();
				$datos[$fila]['alc_tosa_estacion_bombeo_problema_rotura'] = $sanitario->getTosaEstacionBombeoProblemaRotura();
				$datos[$fila]['alc_tosa_emisor_final_problema_rotura'] = $sanitario->getTosaEmisorFinalProblemaRotura();
				$datos[$fila]['alc_tosa_estructura_descarga_problema_rotura'] = $sanitario->getTosaEstructuraDescargaProblemaRotura();
				

				$datos[$fila]['alc_tosa_caja_domiciliar_problema_olor'] = $sanitario->getTosaCajaDomiciliarProblemaOlor();
				$datos[$fila]['alc_tosa_colectores_problema_olor'] = $sanitario->getTosaColectoresProblemaOlor();
				$datos[$fila]['alc_tosa_camara_inspeccion_problema_olor'] = $sanitario->getTosaCamaraInspeccionProblemaOlor();
				$datos[$fila]['alc_tosa_estacion_bombeo_problema_olor'] = $sanitario->getTosaEstacionBombeoProblemaOlor();
				$datos[$fila]['alc_tosa_emisor_final_problema_olor'] = $sanitario->getTosaEmisorFinalProblemaOlor();
				$datos[$fila]['alc_tosa_estructura_descarga_problema_olor'] = $sanitario->getTosaEstructuraDescargaProblemaOlor();
					
		
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en solucion colectiva de alcantarillado ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
}
