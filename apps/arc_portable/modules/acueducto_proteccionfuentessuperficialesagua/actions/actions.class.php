<?php

/**
 * acueducto_proteccionfuentessuperficialesagua actions.
 *
 * @package    arc
 * @subpackage acueducto_proteccionfuentessuperficialesagua
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_proteccionfuentessuperficialesaguaActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
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
  *Este metodo llama a funciones especificas que actualizan la informacion de Proteccionfuentessuperficialesagua
  *@param: formulario : valores que toma,  programas o coberturaForestal
  */
  public function executeActualizarProteccionfuentessuperficialesagua(sfWebRequest $request)
  {
	$salida = '';
		try{
			$formulario=$this->getRequestParameter('formulario');
			
			if($formulario=='programas')
			{
				$salida = $this->ActualizarProgramas();
			}
			if($formulario=='coberturaForestal')
			{
				$salida = $this->ActualizarCoberturaForestal();
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
  *Este metodo actualiza la informacion concerniente al primer formulario de  Proteccionfuentessuperficialesagua
  */
    public function ActualizarProgramas()
  {
	$salida = '';
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(ProteccionfuentessuperficialesaguaPeer::PFU_MIC_ID, $mic_id);
			$protecfuensuper = ProteccionfuentessuperficialesaguaPeer::doSelectOne($conexion);
			
			if(!$protecfuensuper)
			{
				$protecfuensuper =new proteccionfuentessuperficialesagua();
				$protecfuensuper->setPfuMicId($mic_id);
			}
			
			if($protecfuensuper){
				$protecfuensuper->setPfuProgramasAislamiento($this->getRequestParameter('acu_pfu_programas_aislamiento'));
				$protecfuensuper->setPfuProgramasReforestacion($this->getRequestParameter('acu_pfu_programas_reforestacion'));
				$protecfuensuper->setPfuProgramasMejoramientoUsosuelo($this->getRequestParameter('acu_pfu_programas_mejoramiento_uso_suelo'));
				$protecfuensuper->setPfuProgramasAdquisicionTierra($this->getRequestParameter('acu_pfu_programas_adquisicion_tierra'));
				$protecfuensuper->setPfuProgramasEducacionAmbiental($this->getRequestParameter('acu_pfu_programas_educacion_ambiental'));
				$protecfuensuper->setPfuProgramasReduccionUsoAgroquimicos($this->getRequestParameter('acu_pfu_programas_reduccion_uso_agroquimicos'));
				
				$protecfuensuper->setPfuCoberturaForestalAreaProtectoraCauce($this->getRequestParameter('acu_pfu_cobertura_forestal_area_protectora_cauce'));
				$protecfuensuper->setPfuAislamientoFranjaAmarillaMicrocuenca($this->getRequestParameter('acu_pfu_aislamiento_franja_amarilla_microcuenca'));
				$protecfuensuper->setPfuAreaMicrocuencaPropiedadAcueducto($this->getRequestParameter('acu_pfu_area_microcuenca_propiedad_acueducto'));
				$protecfuensuper->setPfuExtensionHas($this->getRequestParameter('acu_pfu_extension_has'));
				
				$protecfuensuper->setPfuSituacionArribaCaptacionReserva($this->getRequestParameter('acu_pfu_situacion_arriba_captacion_reserva'));
				$protecfuensuper->setPfuSituacionArribaCaptacionProtegida($this->getRequestParameter('acu_pfu_situacion_arriba_captacion_protegida'));
					
				$protecfuensuper->save();
				
				$salida = "({success: true, mensaje:'La info de proteccion fuentes superficiales de agua fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en proteccion fuentes superficiales de agua ".$excepcion."'}})";
		}
		
	return $salida;
  }
 /**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo actualiza la informacion concerniente al segundo formulario de  Proteccionfuentessuperficialesagua
  */
     public function ActualizarCoberturaForestal()
  {
	$salida = '';
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(ProteccionfuentessuperficialesaguaPeer::PFU_MIC_ID, $mic_id);
			$protecfuensuper = ProteccionfuentessuperficialesaguaPeer::doSelectOne($conexion);
			
			if(!$protecfuensuper)
			{
				$protecfuensuper =new proteccionfuentessuperficialesagua();
				$protecfuensuper->setPfuMicId($mic_id);
			}
			
			if($protecfuensuper){
				$protecfuensuper->setPfuCoberturaForestalNatural($this->getRequestParameter('acu_pfu_cobertura_forestal_natural'));
				$protecfuensuper->setPfuCoberturaForestalProtector($this->getRequestParameter('acu_pfu_cobertura_forestal_protector'));
				$protecfuensuper->setPfuCoberturaForestalProtectorProductor($this->getRequestParameter('acu_pfu_cobertura_forestal_protector_productor'));
				$protecfuensuper->setPfuCoberturaForestalProductor($this->getRequestParameter('acu_pfu_cobertura_forestal_productor'));
				$protecfuensuper->setPfuCoberturaForestalRegeneracionNatural($this->getRequestParameter('acu_pfu_cobertura_forestal_regeneracion_natural'));
				
				$protecfuensuper->setPfuCoberturaForestalNaturalTendencia($this->getRequestParameter('acu_pfu_cobertura_forestal_natural_tendencia'));
				$protecfuensuper->setPfuCoberturaForestalProtectorTendencia($this->getRequestParameter('acu_pfu_cobertura_forestal_protector_tendencia'));
				$protecfuensuper->setPfuCoberturaForestalProtectorProductorTendencia($this->getRequestParameter('acu_pfu_cobertura_forestal_protector_productor_tendencia'));
				$protecfuensuper->setPfuCoberturaForestalProductorTendencia($this->getRequestParameter('acu_pfu_cobertura_forestal_productor_tendencia'));
				$protecfuensuper->setPfuCoberturaForestalRegeneracionNaturalTendencia($this->getRequestParameter('acu_pfu_cobertura_forestal_regeneracion_natural_tendencia'));
				
				$protecfuensuper->setPfuCoberturaForestalMasUsada($this->getRequestParameter('acu_pfu_cobertura_forestal_mas_usada'));
					
				$protecfuensuper->save();
				
				$salida = "({success: true, mensaje:'La info de proteccion fuentes superficiales de agua fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en proteccion fuentes superficiales de agua ".$excepcion."'}})";
		}
		
	return $salida;
  }
  
  
    /*
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo llama a funciones especificas que obtienen la informacion de Proteccionfuentessuperficialesagua
  *@param: formulario : valores que toma,  programas o coberturaForestal
  */
 public function executeObtenerDatosProteccionfuentessuperficialesagua(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	
		try{
			$formulario=$this->getRequestParameter('formulario');
			
			if($formulario=='programas')
			{
				$salida = $this->ObtenerDatosProgramas();
			}
			if($formulario=='coberturaForestal')
			{
				$salida = $this->ObtenerDatosCoberturaForestal();
			}
		
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en Proteccionfuentessuperficialesagua  ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
  
    /*
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente al primer formulario de  Proteccionfuentessuperficialesagua para 
  *un periodo un prestador y un servicio especifico
  */
 public function ObtenerDatosProgramas()
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(ProteccionfuentessuperficialesaguaPeer::PFU_MIC_ID, $mic_id);
			$protecfuensuper = ProteccionfuentessuperficialesaguaPeer::doSelectOne($conexion);

			if($protecfuensuper)
			{
				$datos[$fila]['acu_pfu_programas_aislamiento'] = $protecfuensuper->getPfuProgramasAislamiento();
				$datos[$fila]['acu_pfu_programas_reforestacion'] = $protecfuensuper->getPfuProgramasReforestacion();
				$datos[$fila]['acu_pfu_programas_mejoramiento_uso_suelo'] = $protecfuensuper->getPfuProgramasMejoramientoUsosuelo();
				$datos[$fila]['acu_pfu_programas_adquisicion_tierra'] = $protecfuensuper->getPfuProgramasAdquisicionTierra();
				$datos[$fila]['acu_pfu_programas_educacion_ambiental'] = $protecfuensuper->getPfuProgramasEducacionAmbiental();
				$datos[$fila]['acu_pfu_programas_reduccion_uso_agroquimicos'] = $protecfuensuper->getPfuProgramasReduccionUsoAgroquimicos();
				
				$datos[$fila]['acu_pfu_cobertura_forestal_area_protectora_cauce'] = $protecfuensuper->getPfuCoberturaForestalAreaProtectoraCauce();
				$datos[$fila]['acu_pfu_aislamiento_franja_amarilla_microcuenca'] = $protecfuensuper->getPfuAislamientoFranjaAmarillaMicrocuenca();
				$datos[$fila]['acu_pfu_area_microcuenca_propiedad_acueducto'] = $protecfuensuper->getPfuAreaMicrocuencaPropiedadAcueducto();
				$datos[$fila]['acu_pfu_extension_has'] = $protecfuensuper->getPfuExtensionHas();
				
				$datos[$fila]['acu_pfu_situacion_arriba_captacion_reserva'] = $protecfuensuper->getPfuSituacionArribaCaptacionReserva();
				$datos[$fila]['acu_pfu_situacion_arriba_captacion_protegida'] = $protecfuensuper->getPfuSituacionArribaCaptacionProtegida();
				
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en Proteccionfuentessuperficialesagua formulario 1 ".$excepcion."'}})";
		}
		
	return $salida;
  }
  
  
   /*
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente al primer formulario de  Proteccionfuentessuperficialesagua para 
  *un periodo un prestador y un servicio especifico
  */
 public function ObtenerDatosCoberturaForestal()
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(ProteccionfuentessuperficialesaguaPeer::PFU_MIC_ID, $mic_id);
			$protecfuensuper = ProteccionfuentessuperficialesaguaPeer::doSelectOne($conexion);

			if($protecfuensuper)
			{
				$datos[$fila]['acu_pfu_cobertura_forestal_natural'] = $protecfuensuper->getPfuCoberturaForestalNatural();
				$datos[$fila]['acu_pfu_cobertura_forestal_protector'] = $protecfuensuper->getPfuCoberturaForestalProtector();
				$datos[$fila]['acu_pfu_cobertura_forestal_protector_productor'] = $protecfuensuper->getPfuCoberturaForestalProtectorProductor();
				$datos[$fila]['acu_pfu_cobertura_forestal_productor'] = $protecfuensuper->getPfuCoberturaForestalProductor();
				$datos[$fila]['acu_pfu_cobertura_forestal_regeneracion_natural'] = $protecfuensuper->getPfuCoberturaForestalRegeneracionNatural();
				
				$datos[$fila]['acu_pfu_cobertura_forestal_natural_tendencia'] = $protecfuensuper->getPfuCoberturaForestalNaturalTendencia();
				$datos[$fila]['acu_pfu_cobertura_forestal_protector_tendencia'] = $protecfuensuper->getPfuCoberturaForestalProtectorTendencia();
				$datos[$fila]['acu_pfu_cobertura_forestal_protector_productor_tendencia'] = $protecfuensuper->getPfuCoberturaForestalProtectorProductorTendencia();
				$datos[$fila]['acu_pfu_cobertura_forestal_productor_tendencia'] = $protecfuensuper->getPfuCoberturaForestalProductorTendencia();
				$datos[$fila]['acu_pfu_cobertura_forestal_regeneracion_natural_tendencia'] = $protecfuensuper->getPfuCoberturaForestalRegeneracionNaturalTendencia();
				
				$datos[$fila]['acu_pfu_cobertura_forestal_mas_usada'] = $protecfuensuper->getPfuCoberturaForestalMasUsada();
				
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en Proteccionfuentessuperficialesagua formulario 1 ".$excepcion."'}})";
		}
		
	return $salida;
  }
  
}
