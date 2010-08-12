<?php

/**
 * alcantarillado_tecnicooperativacombinadoalcantarillado actions.
 *
 * @package    arc
 * @subpackage alcantarillado_tecnicooperativacombinadoalcantarillado
 * @author     maryit
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_tecnicooperativacombinadoalcantarilladoActions extends sfActions
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
  *@date:12 de agosto de 2010
  *Este metodo actualiza tecnico operativa combinado de alcantarillado
  */
  public function executeActualizarTecnicooperativacombinadoalcantarillado(sfWebRequest $request)
  {
	$salida = '';
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativacombinadoalcantarilladoPeer::TOCCA_TOP_ID, $top_id);
			$combinado = TecnicooperativacombinadoalcantarilladoPeer::doSelectOne($conexion);
			
			if(!$combinado)
			{
				$combinado =new Tecnicooperativacombinadoalcantarillado();
				$combinado->setToccaTopId($top_id);
			}
			
			if($combinado){

				$combinado->setToccaCajaDomiciliar($this->getRequestParameter('alc_tocca_caja_domiciliar'));
				$combinado->setToccaColectores($this->getRequestParameter('alc_tocca_colectores'));
				$combinado->setToccaCamaraInspeccion($this->getRequestParameter('alc_tocca_camara_inspeccion'));
				$combinado->setToccaSumideros($this->getRequestParameter('alc_tocca_sumideros'));
				$combinado->setToccaEstructuraSeparacion($this->getRequestParameter('alc_tocca_estructura_separacion'));
				$combinado->setToccaEstacionBombeo($this->getRequestParameter('alc_tocca_estacion_bombeo'));
				$combinado->setToccaEmisorFinal($this->getRequestParameter('alc_tocca_emisor_final'));
				$combinado->setToccaEstructuraDescarga($this->getRequestParameter('alc_tocca_estructura_descarga'));

				$combinado->setToccaCajaDomiciliarFunciona($this->getRequestParameter('alc_tocca_caja_domiciliar_funciona'));
				$combinado->setToccaColectoresFunciona($this->getRequestParameter('alc_tocca_colectores_funciona'));
				$combinado->setToccaCamaraInspeccionFunciona($this->getRequestParameter('alc_tocca_camara_inspeccion_funciona'));
				$combinado->setToccaSumiderosFunciona($this->getRequestParameter('alc_tocca_sumideros_funciona'));
				$combinado->setToccaEstructuraSeparacionFunciona($this->getRequestParameter('alc_tocca_estructura_separacion_funciona'));
				$combinado->setToccaEstacionBombeoFunciona($this->getRequestParameter('alc_tocca_estacion_bombeo_funciona'));
				$combinado->setToccaEmisorFinalFunciona($this->getRequestParameter('alc_tocca_emisor_final_funciona'));
				$combinado->setToccaEstructuraDescargaFunciona($this->getRequestParameter('alc_tocca_estructura_descarga_funciona'));

				$combinado->setToccaCajaDomiciliarSeUsa($this->getRequestParameter('alc_tocca_caja_domiciliar_se_usa'));
				$combinado->setToccaColectoresSeUsa($this->getRequestParameter('alc_tocca_colectores_se_usa'));
				$combinado->setToccaCamaraInspeccionSeUsa($this->getRequestParameter('alc_tocca_camara_inspeccion_se_usa'));
				$combinado->setToccaSumiderosSeUsa($this->getRequestParameter('alc_tocca_sumideros_se_usa'));
				$combinado->setToccaEstructuraSeparacionSeUsa($this->getRequestParameter('alc_tocca_estructura_separacion_se_usa'));
				$combinado->setToccaEstacionBombeoSeUsa($this->getRequestParameter('alc_tocca_estacion_bombeo_se_usa'));
				$combinado->setToccaEmisorFinalSeUsa($this->getRequestParameter('alc_tocca_emisor_final_se_usa'));
				$combinado->setToccaEstructuraDescargaSeUsa($this->getRequestParameter('alc_tocca_estructura_descarga_se_usa'));
			
				$combinado->setToccaCajaDomiciliarProblemaTaponamiento($this->getRequestParameter('alc_tocca_caja_domiciliar_problema_taponamiento'));
				$combinado->setToccaColectoresProblemaTaponamiento($this->getRequestParameter('alc_tocca_colectores_problema_taponamiento'));
				$combinado->setToccaCamaraInspeccionProblemaTaponamiento($this->getRequestParameter('alc_tocca_camara_inspeccion_problema_taponamiento'));
				$combinado->setToccaSumiderosProblemaTaponamiento($this->getRequestParameter('alc_tocca_sumideros_problema_taponamiento'));
				$combinado->setToccaEstructuraSeparacionProblemaTaponamiento($this->getRequestParameter('alc_tocca_estructura_separacion_problema_taponamiento'));
				$combinado->setToccaEstacionBombeoProblemaTaponamiento($this->getRequestParameter('alc_tocca_estacion_bombeo_problema_taponamiento'));
				$combinado->setToccaEmisorFinalProblemaTaponamiento($this->getRequestParameter('alc_tocca_emisor_final_problema_taponamiento'));
				$combinado->setToccaEstructuraDescargaProblemaTaponamiento($this->getRequestParameter('alc_tocca_estructura_descarga_problema_taponamiento'));
				
				$combinado->setToccaCajaDomiciliarProblemaRebose($this->getRequestParameter('alc_tocca_caja_domiciliar_problema_rebose'));
				$combinado->setToccaColectoresProblemaRebose($this->getRequestParameter('alc_tocca_colectores_problema_rebose'));
				$combinado->setToccaCamaraInspeccionProblemaRebose($this->getRequestParameter('alc_tocca_camara_inspeccion_problema_rebose'));
				$combinado->setToccaSumiderosProblemaRebose($this->getRequestParameter('alc_tocca_sumideros_problema_rebose'));
				$combinado->setToccaEstructuraSeparacionProblemaRebose($this->getRequestParameter('alc_tocca_estructura_separacion_problema_rebose'));
				$combinado->setToccaEstacionBombeoProblemaRebose($this->getRequestParameter('alc_tocca_estacion_bombeo_problema_rebose'));
				$combinado->setToccaEmisorFinalProblemaRebose($this->getRequestParameter('alc_tocca_emisor_final_problema_rebose'));
				$combinado->setToccaEstructuraDescargaProblemaRebose($this->getRequestParameter('alc_tocca_estructura_descarga_problema_rebose'));

				$combinado->setToccaCajaDomiciliarProblemaRotura($this->getRequestParameter('alc_tocca_caja_domiciliar_problema_rotura'));
				$combinado->setToccaColectoresProblemaRotura($this->getRequestParameter('alc_tocca_colectores_problema_rotura'));
				$combinado->setToccaCamaraInspeccionProblemaRotura($this->getRequestParameter('alc_tocca_camara_inspeccion_problema_rotura'));
				$combinado->setToccaSumiderosProblemaRotura($this->getRequestParameter('alc_tocca_sumideros_problema_rotura'));
				$combinado->setToccaEstructuraSeparacionProblemaRotura($this->getRequestParameter('alc_tocca_estructura_separacion_problema_rotura'));
				$combinado->setToccaEstacionBombeoProblemaRotura($this->getRequestParameter('alc_tocca_estacion_bombeo_problema_rotura'));
				$combinado->setToccaEmisorFinalProblemaRotura($this->getRequestParameter('alc_tocca_emisor_final_problema_rotura'));
				$combinado->setToccaEstructuraDescargaProblemaRotura($this->getRequestParameter('alc_tocca_estructura_descarga_problema_rotura'));
				
				$combinado->setToccaCajaDomiciliarProblemaOlor($this->getRequestParameter('alc_tocca_caja_domiciliar_problema_olor'));
				$combinado->setToccaColectoresProblemaOlor($this->getRequestParameter('alc_tocca_colectores_problema_olor'));
				$combinado->setToccaCamaraInspeccionProblemaOlor($this->getRequestParameter('alc_tocca_camara_inspeccion_problema_olor'));
				$combinado->setToccaSumiderosProblemaOlor($this->getRequestParameter('alc_tocca_sumideros_problema_olor'));
				$combinado->setToccaEstructuraSeparacionProblemaOlor($this->getRequestParameter('alc_tocca_estructura_separacion_problema_olor'));
				$combinado->setToccaEstacionBombeoProblemaOlor($this->getRequestParameter('alc_tocca_estacion_bombeo_problema_olor'));
				$combinado->setToccaEmisorFinalProblemaOlor($this->getRequestParameter('alc_tocca_emisor_final_problema_olor'));
				$combinado->setToccaEstructuraDescargaProblemaOlor($this->getRequestParameter('alc_tocca_estructura_descarga_problema_olor'));
			
			
				$combinado->save();
				
				$salida = "({success: true, mensaje:'La informacion tecnico operativa combinado de alcantarillado fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en tecnico operativa combinado de alcantarillado ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }

 /**
  *@author:maryit sanchez
  *@date:12 de agosto de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente a tecnico operativa combinado alcantarillado para
  *un periodo, un prestador y un servicio especifico
  */
 public function executeObtenerDatosTecnicooperativacombinadoalcantarillado(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativacombinadoalcantarilladoPeer::TOCCA_TOP_ID, $top_id);
			$combinado = TecnicooperativacombinadoalcantarilladoPeer::doSelectOne($conexion);

			if($combinado)
			{
				
				$datos[$fila]['alc_tocca_caja_domiciliar'] = $combinado->getToccaCajaDomiciliar();
				$datos[$fila]['alc_tocca_colectores'] = $combinado->getToccaColectores();
				$datos[$fila]['alc_tocca_camara_inspeccion'] = $combinado->getToccaCamaraInspeccion();
				$datos[$fila]['alc_tocca_sumideros'] = $combinado->getToccaSumideros();
				$datos[$fila]['alc_tocca_estructura_separacion'] = $combinado->getToccaEstructuraSeparacion();
				$datos[$fila]['alc_tocca_estacion_bombeo'] = $combinado->getToccaEstacionBombeo();
				$datos[$fila]['alc_tocca_emisor_final'] = $combinado->getToccaEmisorFinal();
				$datos[$fila]['alc_tocca_estructura_descarga'] = $combinado->getToccaEstructuraDescarga();
				

				$datos[$fila]['alc_tocca_caja_domiciliar_funciona'] = $combinado->getToccaCajaDomiciliarFunciona();
				$datos[$fila]['alc_tocca_colectores_funciona'] = $combinado->getToccaColectoresFunciona();
				$datos[$fila]['alc_tocca_camara_inspeccion_funciona'] = $combinado->getToccaCamaraInspeccionFunciona();
				$datos[$fila]['alc_tocca_sumideros_funciona'] = $combinado->getToccaSumiderosFunciona();
				$datos[$fila]['alc_tocca_estructura_separacion_funciona'] = $combinado->getToccaEstructuraSeparacionFunciona();
				$datos[$fila]['alc_tocca_estacion_bombeo_funciona'] = $combinado->getToccaEstacionBombeoFunciona();
				$datos[$fila]['alc_tocca_emisor_final_funciona'] = $combinado->getToccaEmisorFinalFunciona();
				$datos[$fila]['alc_tocca_estructura_descarga_funciona'] = $combinado->getToccaEstructuraDescargaFunciona();
				
				
				$datos[$fila]['alc_tocca_caja_domiciliar_se_usa'] = $combinado->getToccaCajaDomiciliarSeUsa();
				$datos[$fila]['alc_tocca_colectores_se_usa'] = $combinado->getToccaColectoresSeUsa();
				$datos[$fila]['alc_tocca_camara_inspeccion_se_usa'] = $combinado->getToccaCamaraInspeccionSeUsa();
				$datos[$fila]['alc_tocca_sumideros_se_usa'] = $combinado->getToccaSumiderosSeUsa();
				$datos[$fila]['alc_tocca_estructura_separacion_se_usa'] = $combinado->getToccaEstructuraSeparacionSeUsa();
				$datos[$fila]['alc_tocca_estacion_bombeo_se_usa'] = $combinado->getToccaEstacionBombeoSeUsa();
				$datos[$fila]['alc_tocca_emisor_final_se_usa'] = $combinado->getToccaEmisorFinalSeUsa();
				$datos[$fila]['alc_tocca_estructura_descarga_se_usa'] = $combinado->getToccaEstructuraDescargaSeUsa();
				

				$datos[$fila]['alc_tocca_caja_domiciliar_problema_taponamiento'] = $combinado->getToccaCajaDomiciliarProblemaTaponamiento();
				$datos[$fila]['alc_tocca_colectores_problema_taponamiento'] = $combinado->getToccaColectoresProblemaTaponamiento();
				$datos[$fila]['alc_tocca_camara_inspeccion_problema_taponamiento'] = $combinado->getToccaCamaraInspeccionProblemaTaponamiento();
				$datos[$fila]['alc_tocca_sumideros_problema_taponamiento'] = $combinado->getToccaSumiderosProblemaTaponamiento();
				$datos[$fila]['alc_tocca_estructura_separacion_problema_taponamiento'] = $combinado->getToccaEstructuraSeparacionProblemaTaponamiento();
				$datos[$fila]['alc_tocca_estacion_bombeo_problema_taponamiento'] = $combinado->getToccaEstacionBombeoProblemaTaponamiento();
				$datos[$fila]['alc_tocca_emisor_final_problema_taponamiento'] = $combinado->getToccaEmisorFinalProblemaTaponamiento();
				$datos[$fila]['alc_tocca_estructura_descarga_problema_taponamiento'] = $combinado->getToccaEstructuraDescargaProblemaTaponamiento();
				

				$datos[$fila]['alc_tocca_caja_domiciliar_problema_rebose'] = $combinado->getToccaCajaDomiciliarProblemaRebose();
				$datos[$fila]['alc_tocca_colectores_problema_rebose'] = $combinado->getToccaColectoresProblemaRebose();
				$datos[$fila]['alc_tocca_camara_inspeccion_problema_rebose'] = $combinado->getToccaCamaraInspeccionProblemaRebose();
				$datos[$fila]['alc_tocca_sumideros_problema_rebose'] = $combinado->getToccaSumiderosProblemaRebose();
				$datos[$fila]['alc_tocca_estructura_separacion_problema_rebose'] = $combinado->getToccaEstructuraSeparacionProblemaRebose();
				$datos[$fila]['alc_tocca_estacion_bombeo_problema_rebose'] = $combinado->getToccaEstacionBombeoProblemaRebose();
				$datos[$fila]['alc_tocca_emisor_final_problema_rebose'] = $combinado->getToccaEmisorFinalProblemaRebose();
				$datos[$fila]['alc_tocca_estructura_descarga_problema_rebose'] = $combinado->getToccaEstructuraDescargaProblemaRebose();
		
				$datos[$fila]['alc_tocca_caja_domiciliar_problema_rotura'] = $combinado->getToccaCajaDomiciliarProblemaRotura();
				$datos[$fila]['alc_tocca_colectores_problema_rotura'] = $combinado->getToccaColectoresProblemaRotura();
				$datos[$fila]['alc_tocca_camara_inspeccion_problema_rotura'] = $combinado->getToccaCamaraInspeccionProblemaRotura();
				$datos[$fila]['alc_tocca_sumideros_problema_rotura'] = $combinado->getToccaSumiderosProblemaRotura();
				$datos[$fila]['alc_tocca_estructura_separacion_problema_rotura'] = $combinado->getToccaEstructuraSeparacionProblemaRotura();
				$datos[$fila]['alc_tocca_estacion_bombeo_problema_rotura'] = $combinado->getToccaEstacionBombeoProblemaRotura();
				$datos[$fila]['alc_tocca_emisor_final_problema_rotura'] = $combinado->getToccaEmisorFinalProblemaRotura();
				$datos[$fila]['alc_tocca_estructura_descarga_problema_rotura'] = $combinado->getToccaEstructuraDescargaProblemaRotura();
				

				$datos[$fila]['alc_tocca_caja_domiciliar_problema_olor'] = $combinado->getToccaCajaDomiciliarProblemaOlor();
				$datos[$fila]['alc_tocca_colectores_problema_olor'] = $combinado->getToccaColectoresProblemaOlor();
				$datos[$fila]['alc_tocca_camara_inspeccion_problema_olor'] = $combinado->getToccaCamaraInspeccionProblemaOlor();
				$datos[$fila]['alc_tocca_sumideros_problema_olor'] = $combinado->getToccaSumiderosProblemaOlor();
				$datos[$fila]['alc_tocca_estructura_separacion_problema_olor'] = $combinado->getToccaEstructuraSeparacionProblemaOlor();
				$datos[$fila]['alc_tocca_estacion_bombeo_problema_olor'] = $combinado->getToccaEstacionBombeoProblemaOlor();
				$datos[$fila]['alc_tocca_emisor_final_problema_olor'] = $combinado->getToccaEmisorFinalProblemaOlor();
				$datos[$fila]['alc_tocca_estructura_descarga_problema_olor'] = $combinado->getToccaEstructuraDescargaProblemaOlor();
					
		
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en tecnico operativa combinado de alcantarillado ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
}
