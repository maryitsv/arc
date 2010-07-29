<?php

/**
 * acueducto_proteccionfuentessuperficialesagua actions.
 *
 * @package    arc
 * @subpackage acueducto_proteccionfuentessuperficialesagua
 * @author     Your name here
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
  //  $this->forward('default', 'module');
  }
  
  
  protected function obtenerServicioId($ser_nombre)
	{
		$conexion = new Criteria();			
		$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
		$servicio = ServicioPeer::doSelectOne($conexion);
		$ser_id = $servicio->getSerId();
		return  $ser_id;
	}
	
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
  
  /*
  
var ayuda_ acu_pfu_programas_aislamiento  = 'existe el programa de aislamiento??, selecione esta casilla en caso de que exista';
var ayuda_ acu_pfu_programas_reforestacion  = '';
var ayuda_ acu_pfu_programas_mejoramiento_uso_suelo  = '';
var ayuda_ acu_pfu_programas_adquisicion_tierra  = '';
var ayuda_ acu_pfu_programas_educacion_ambiental  = '';
var ayuda_ acu_pfu_programas_reduccion_uso_agroquimicos  = '';

var ayuda_ acu_pfu_cobertura_forestal_area_protectora_cauce  = '';
var ayuda_ acu_pfu_aislamiento_franja_amarilla_microcuenca  = '';
var ayuda_ acu_pfu_aislamiento_franja_amarilla_microcuenca  = '';
var ayuda_ acu_pfu_area_microcuenca_propiedad_acueducto  = '';
var ayuda_ acu_pfu_extension_has  = 'escriba el numero de ext has';
var ayuda_ acu_pfu_situacion_arriba_capatacion_reserva  = '';
var ayuda_ acu_pfu_situacion_arriba_capatacion_protegida='Es aquella protegida por iniciativa de los propietarios, comunidad o por autoridades locales';  
  					*/
  public function executeActualizarProteccionfuentessuperficialesagua(sfWebRequest $request)
  {
	$salida = '';
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(ProteccionfuentessuperficialesaguaPeer::PFU_MIC_ID, $mic_id);
			$proteccionfuentessuperficiales = ProteccionfuentessuperficialesaguaPeer::doSelectOne($conexion);
			
			if($proteccionfuentessuperficiales)
			{
					$proteccionfuentessuperficiales->setPfuProgramasAislamiento($this->getRequestParameter('acu_pfu_programas_aislamiento'));
					$proteccionfuentessuperficiales->setPfuProgramasReforestacion($this->getRequestParameter('acu_pfu_programas_reforestacion'));
					$proteccionfuentessuperficiales->setPfuProgramasMejoramientoUsosuelo($this->getRequestParameter('acu_pfu_programas_mejoramiento_uso_suelo'));
					$proteccionfuentessuperficiales->setPfuProgramasAdquisicionTierra($this->getRequestParameter('acu_pfu_programas_adquisicion_tierra'));
					$proteccionfuentessuperficiales->setPfuProgramasEducacionAmbiental($this->getRequestParameter('acu_pfu_programas_educacion_ambiental'));
					$proteccionfuentessuperficiales->setPfuProgramasReduccionUsoAgroquimicos($this->getRequestParameter('acu_pfu_programas_reduccion_uso_agroquimicos'));
					
					$proteccionfuentessuperficiales->setPfuCoberturaForestalAreaProtectoraCauce($this->getRequestParameter('acu_pfu_cobertura_forestal_area_protectora_cauce'));
					$proteccionfuentessuperficiales->setPfuAislamientoFranjaAmarillaMicrocuenca($this->getRequestParameter('acu_pfu_aislamiento_franja_amarilla_microcuenca'));
					$proteccionfuentessuperficiales->setPfuAreaMicrocuencaPropiedadAcueducto($this->getRequestParameter('acu_pfu_area_microcuenca_propiedad_acueducto'));
					//$proteccionfuentessuperficiales->setPfuExtensionHas($this->getRequestParameter('acu_pfu_extension_has'));
					
					$proteccionfuentessuperficiales->setPfuSituacionArribaCaptacionReserva($this->getRequestParameter('acu_pfu_situacion_arriba_captacion_reserva'));
					$proteccionfuentessuperficiales->setPfuSituacionArribaCaptacionProtegida($this->getRequestParameter('acu_pfu_situacion_arriba_captacion_protegida'));
					
					$proteccionfuentessuperficiales->save();
					
					$salida = "({success: true, mensaje:'La info de proteccion fuentes superficiales de agua  fue actualizado exitosamente'})";
			} else {
					$proteccionfuentessuperficiales =new proteccionfuentessuperficialesagua();
					$proteccionfuentessuperficiales->setPfuMicId($mic_id);
					$proteccionfuentessuperficiales->setPfuProgramasAislamiento($this->getRequestParameter('acu_pfu_programas_aislamiento'));
					$proteccionfuentessuperficiales->setPfuProgramasReforestacion($this->getRequestParameter('acu_pfu_programas_reforestacion'));
					$proteccionfuentessuperficiales->setPfuProgramasMejoramientoUsosuelo($this->getRequestParameter('acu_pfu_programas_mejoramiento_uso_suelo'));
					$proteccionfuentessuperficiales->setPfuProgramasAdquisicionTierra($this->getRequestParameter('acu_pfu_programas_adquisicion_tierra'));
					$proteccionfuentessuperficiales->setPfuProgramasEducacionAmbiental($this->getRequestParameter('acu_pfu_programas_educacion_ambiental'));
					$proteccionfuentessuperficiales->setPfuProgramasReduccionUsoAgroquimicos($this->getRequestParameter('acu_pfu_programas_reduccion_uso_agroquimicos'));
					
					$proteccionfuentessuperficiales->setPfuCoberturaForestalAreaProtectoraCauce($this->getRequestParameter('acu_pfu_cobertura_forestal_area_protectora_cauce'));
					$proteccionfuentessuperficiales->setPfuAislamientoFranjaAmarillaMicrocuenca($this->getRequestParameter('acu_pfu_aislamiento_franja_amarilla_microcuenca'));
					$proteccionfuentessuperficiales->setPfuAreaMicrocuencaPropiedadAcueducto($this->getRequestParameter('acu_pfu_area_microcuenca_propiedad_acueducto'));
					//$proteccionfuentessuperficiales->setPfuExtensionHas($this->getRequestParameter('acu_pfu_extension_has'));
					
					$proteccionfuentessuperficiales->setPfuSituacionArribaCaptacionReserva($this->getRequestParameter('acu_pfu_situacion_arriba_captacion_reserva'));
					$proteccionfuentessuperficiales->setPfuSituacionArribaCaptacionProtegida($this->getRequestParameter('acu_pfu_situacion_arriba_captacion_protegida'));
						
					$proteccionfuentessuperficiales->save();
					
					$salida = "({success: true, mensaje:'La info de proteccion fuentes superficiales de agua fue actualizado exitosamente'})";

			}
		
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en proteccion fuentes superficiales de agua ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
}
