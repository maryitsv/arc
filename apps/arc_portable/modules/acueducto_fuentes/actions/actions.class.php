<?php

/**
 * acueducto_fuentes actions.
 *
 * @package    arc
 * @subpackage acueducto_fuentes
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_fuentesActions extends sfActions
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
  *@date:29 de julio de 2010
  *Este metodo obtiene el id de una microcuenca dados el periodo, y id del prestador, basicamente busca la microcuenca para obtener el id, pero si no existe la crea
  */
    public function obtenerMicId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(MicrocuencasPeer::MIC_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(MicrocuencasPeer::MIC_PPS_ANIO, $pps_anio);
	$conexion->add(MicrocuencasPeer::MIC_PPS_SER_ID, $pps_ser_id);
	
	$microcuencafila = MicrocuencasPeer::doSelectOne($conexion);
	
	if(!$microcuencafila){
	$microcuencafila=new Microcuencas();
	$microcuencafila->setMicPpsPreId($pps_pre_id);
	$microcuencafila->setMicPpsAnio($pps_anio);
	$microcuencafila->setMicPpsSerId($pps_ser_id);
	$microcuencafila->save();
	}
				
	return $microcuencafila->getMicId();
  }
 
 /**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo llama a funciones especificas que actualizan la informacion de Fuentes
  *@param: formulario : valores que toma,  abastecenElSistema 
  */
  public function executeActualizarFuentes(sfWebRequest $request)
  {
	$salida = '';
		try{
			$formulario=$this->getRequestParameter('formulario');
			
			if($formulario=='abastecenElSistema')
			{
				$salida = $this->ActualizarAbastecenElSistema();
			}
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en proteccion fuentes superficiales de agua ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
  
   
 /**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo actualiza la informacion concerniente al primer formulario de  Fuentes, 
  *especificamente a el abastecimiento del sistema y metodos de aforo 
  */
    public function ActualizarAbastecenElSistema()
  {
	$salida = '';
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(FuentesPeer::FUE_MIC_ID, $mic_id);
			$fuentes = FuentesPeer::doSelectOne($conexion);
			
			if(!$fuentes)
			{
				$fuentes =new Fuentes();
				$fuentes->setFueMicId($mic_id);
			}
			
			if($fuentes){
			
				$fuentes->setFueTieneFuentesSuperficiales($this->getRequestParameter('acu_fue_tiene_fuentes_superficiales'));
				$fuentes->setFueTieneFuentesSubterraneas($this->getRequestParameter('acu_fue_tiene_fuentes_subterraneas'));
				$fuentes->setFueCompraAguaBloque($this->getRequestParameter('acu_fue_compra_agua_bloque'));
				$fuentes->setFueNumeroFuentesSubterraneas($this->getRequestParameter('acu_fue_numero_fuentes_subterraneas'));
				$fuentes->setFueNumeroFuentesSuperficiales($this->getRequestParameter('acu_fue_numero_fuentes_superficiales'));
				
				$fuentes->setFueMetodoAforoMicromolinete($this->getRequestParameter('acu_fue_metodo_aforo_micromolinete'));
				$fuentes->setFueMetodoAforoVolumetrico($this->getRequestParameter('acu_fue_metodo_aforo_volumetrico'));
				$fuentes->setFueMetodoAforoVelocidad($this->getRequestParameter('acu_fue_metodo_aforo_velocidad'));
				$fuentes->setFueMetodoAforoOtroCual($this->getRequestParameter('acu_fue_metodo_aforo_otro_cual'));
				$fuentes->setFueCumplePermisos($this->getRequestParameter('acu_fue_cumple_permisos'));
					
				$fuentes->save();
				
				$salida = "({success: true, mensaje:'La info de fuentes  fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en  fuentes ".$excepcion."'}})";
		}
		
	return $salida;
  }
  
   /*
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo llama a funciones especificas que obtienen la informacion de Fuentes
  *@param: formulario : valores que toma,  abastecenElSistema
  */
 public function executeObtenerDatosFuentes(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	
		try{
			$formulario=$this->getRequestParameter('formulario');
			
			if($formulario=='abastecenElSistema')
			{
				$salida = $this->ObtenerDatosAbastecenElSistema();
			}
		
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en Fuentes  ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
  
   /*
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente al primer formulario de  Fuentes para 
  *un periodo un prestador y un servicio especifico
  */
 public function ObtenerDatosAbastecenElSistema()
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(FuentesPeer::FUE_MIC_ID, $mic_id);
			$fuentes = FuentesPeer::doSelectOne($conexion);

			if($fuentes)
			{
				$datos[$fila]['acu_fue_tiene_fuentes_superficiales'] = $fuentes->getFueTieneFuentesSuperficiales();
				$datos[$fila]['acu_fue_tiene_fuentes_subterraneas'] = $fuentes->getFueTieneFuentesSubterraneas();
				$datos[$fila]['acu_fue_compra_agua_bloque'] = $fuentes->getFueCompraAguaBloque();
				$datos[$fila]['acu_fue_numero_fuentes_subterraneas'] = $fuentes->getFueNumeroFuentesSubterraneas();
				$datos[$fila]['acu_fue_numero_fuentes_superficiales'] = $fuentes->getFueNumeroFuentesSuperficiales();
				
				$datos[$fila]['acu_fue_metodo_aforo_micromolinete'] = $fuentes->getFueMetodoAforoMicromolinete();
				$datos[$fila]['acu_fue_metodo_aforo_volumetrico'] = $fuentes->getFueMetodoAforoVolumetrico();
				$datos[$fila]['acu_fue_metodo_aforo_velocidad'] = $fuentes->getFueMetodoAforoVelocidad();
				$datos[$fila]['acu_fue_metodo_aforo_otro_cual'] = $fuentes->getFueMetodoAforoOtroCual();
				$datos[$fila]['acu_fue_cumple_permisos'] = $fuentes->getFueCumplePermisos();
				
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en Fuentes formulario 1 ".$excepcion."'}})";
		}
		
	return $salida;
  }
  
}
