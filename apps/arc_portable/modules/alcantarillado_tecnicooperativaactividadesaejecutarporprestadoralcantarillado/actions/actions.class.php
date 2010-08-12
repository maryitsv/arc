<?php

/**
 * alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarillado actions.
 *
 * @package    arc
 * @subpackage alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarillado
 * @author     maryit
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarilladoActions extends sfActions
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
  *Este metodo actualizalas  actividades ejecutar prestador de alcantarillado tecnico operativo
  */
  public function executeActualizarTecnicooperativaactividadesaejecutarporprestadoralcantarillado(sfWebRequest $request)
  {
	$salida = '';
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativaactividadesaejecutarporprestadoralcantarilladoPeer::TOAAEP_TOP_ID, $top_id);
			$actividadesaejecutarporprestador = TecnicooperativaactividadesaejecutarporprestadoralcantarilladoPeer::doSelectOne($conexion);
			
			if(!$actividadesaejecutarporprestador)
			{
				$actividadesaejecutarporprestador =new Tecnicooperativaactividadesaejecutarporprestadoralcantarillado();
				$actividadesaejecutarporprestador->setToaaepTopId($top_id);
			}
			
			if($actividadesaejecutarporprestador){
			
				$actividadesaejecutarporprestador->setToaaepActividadRecoleccionTransporte($this->getRequestParameter('alc_toaaep_actividad_recoleccion_transporte'));
				$actividadesaejecutarporprestador->setToaaepActividadTratamiento($this->getRequestParameter('alc_toaaep_actividad_tratamiento'));
				$actividadesaejecutarporprestador->setToaaepActividadOperacionMatenimiento($this->getRequestParameter('alc_toaaep_actividad_operacion_matenimiento'));
				$actividadesaejecutarporprestador->setToaaepActividadDisposicionFinal($this->getRequestParameter('alc_toaaep_actividad_disposicion_final'));
				
			
				$actividadesaejecutarporprestador->save();
				
				$salida = "({success: true, mensaje:'La informacion de tecnico operativa de alcantarillado actividades a ejcutar por prestador  fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion al actualizar en tecnico operativa, alcantarillado actividades a ejcutar por prestador  ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }

 /**
  *@author:maryit sanchez
  *@date:11 de agosto de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente a Tecnico operativa actividades ejecutar prestador alcantarillado para
  *un periodo, un prestador y un servicio especifico
  */
 public function executeObtenerDatosTecnicooperativaactividadesaejecutarporprestadoralcantarillado(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativaactividadesaejecutarporprestadoralcantarilladoPeer::TOAAEP_TOP_ID, $top_id);
			$actividadesaejecutarporprestador = TecnicooperativaactividadesaejecutarporprestadoralcantarilladoPeer::doSelectOne($conexion);

			if($actividadesaejecutarporprestador)
			{
				$datos[$fila]['alc_toaaep_actividad_recoleccion_transporte'] = $actividadesaejecutarporprestador->getToaaepActividadRecoleccionTransporte();
				$datos[$fila]['alc_toaaep_actividad_tratamiento'] = $actividadesaejecutarporprestador->getToaaepActividadTratamiento();
				$datos[$fila]['alc_toaaep_actividad_operacion_matenimiento'] = $actividadesaejecutarporprestador->getToaaepActividadOperacionMatenimiento();
				$datos[$fila]['alc_toaaep_actividad_disposicion_final'] = $actividadesaejecutarporprestador->getToaaepActividadDisposicionFinal();
				
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion al listar en tecnico operativa, alcantarillado actividades a ejcutar por prestador  ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }

}
