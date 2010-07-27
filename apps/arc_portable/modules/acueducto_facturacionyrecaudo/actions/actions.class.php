<?php

/**
 * acueducto_facturacionyrecaudo actions.
 *
 * @package    arc
 * @subpackage acueducto_facturacionyrecaudo
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_facturacionyrecaudoActions extends sfActions
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
    
  protected function obtenerServicioId($ser_nombre)
	{
		$conexion = new Criteria();			
		$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
		$servicio = ServicioPeer::doSelectOne($conexion);
		$ser_id = $servicio->getSerId();
		return  $ser_id;
	}
	
    public function obtenerComId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_anio = $this->getUser()->getAttribute('pps_anio');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(ComercialPeer::COM_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(ComercialPeer::COM_PPS_ANIO, $pps_anio);
	$conexion->add(ComercialPeer::COM_PPS_SER_ID, $pps_ser_id);
	
	$comercialfila = ComercialPeer::doSelectOne($conexion);
				
	return $comercialfila->getComId();
  }
  
  
  /* acu_fac_frecuencia_del_servicio
 acu_fac_frecuenc_facturacion
 acu_fac_frecuenc_fac_justificacion
 acu_fac_num_fac_exp_ultimo_periodo
 acu_fac_sist_fac_utilizado
 acu_fac_frecuencia_fac_justifica
 acu_fac_morosidad_promedio
 acu_fac_vol_agua_fac_en_el_anio_acu
 acu_fac_vol_agua_suministrado_anio_acu */
  public function executeActualizarFacturacionyRecaudo(sfWebRequest $request)
  {  
	$salida = '';
	
		try{

			$com_id = $this->obtenerComId();
			$conexion = new Criteria();
			$conexion->add(FacturacionyrecaudoPeer::FAC_COM_ID, $com_id);
			$facturacionyrecaudo = FacturacionyrecaudoPeer::doSelectOne($conexion);
			
			if($facturacionyrecaudo)
			{
					$facturacionyrecaudo->setFacFrecuenciaDelServicio($this->getRequestParameter('acu_fac_frecuencia_del_servicio'));
					$facturacionyrecaudo->setFacFrecuencFacturacion($this->getRequestParameter('acu_fac_frecuenc_facturacion'));
					$facturacionyrecaudo->setFacFrecuencFacJustificacion($this->getRequestParameter('acu_fac_frecuenc_fac_justificacion'));
					$facturacionyrecaudo->setFacNumFacExpUltimoPeriodo($this->getRequestParameter('acu_fac_num_fac_exp_ultimo_periodo'));
					$facturacionyrecaudo->setFacSistFacUtilizado($this->getRequestParameter('acu_fac_sist_fac_utilizado'));
					$facturacionyrecaudo->setFacFrecuenciaFacJustifica($this->getRequestParameter('acu_fac_frecuencia_fac_justifica'));
					$facturacionyrecaudo->setFacMorosidadPromedio($this->getRequestParameter('acu_fac_morosidad_promedio'));
					$facturacionyrecaudo->setFacVolAguaFacEnElAnioAcu($this->getRequestParameter('acu_fac_vol_agua_fac_en_el_anio_acu'));
					$facturacionyrecaudo->setFacVolAguaSuministradoAnioAcu($this->getRequestParameter('acu_fac_vol_agua_suministrado_anio_acu'));
					
					$facturacionyrecaudo->save();
					
					$salida = "({success: true, mensaje:'La facturacion y recaudo fue actualizado exitosamente'})";
			} else {
					$facturacionyrecaudo =new Facturacionyrecaudo();
					$facturacionyrecaudo->setFacComId($com_id);
					$facturacionyrecaudo->setFacFrecuenciaDelServicio($this->getRequestParameter('acu_fac_frecuencia_del_servicio'));
					$facturacionyrecaudo->setFacFrecuencFacturacion($this->getRequestParameter('acu_fac_frecuenc_facturacion'));
					$facturacionyrecaudo->setFacFrecuencFacJustificacion($this->getRequestParameter('acu_fac_frecuenc_fac_justificacion'));
					$facturacionyrecaudo->setFacNumFacExpUltimoPeriodo($this->getRequestParameter('acu_fac_num_fac_exp_ultimo_periodo'));
					$facturacionyrecaudo->setFacSistFacUtilizado($this->getRequestParameter('acu_fac_sist_fac_utilizado'));
					$facturacionyrecaudo->setFacFrecuenciaFacJustifica($this->getRequestParameter('acu_fac_frecuencia_fac_justifica'));
					$facturacionyrecaudo->setFacMorosidadPromedio($this->getRequestParameter('acu_fac_morosidad_promedio'));
					$facturacionyrecaudo->setFacVolAguaFacEnElAnioAcu($this->getRequestParameter('acu_fac_vol_agua_fac_en_el_anio_acu'));
					$facturacionyrecaudo->setFacVolAguaSuministradoAnioAcu($this->getRequestParameter('acu_fac_vol_agua_suministrado_anio_acu'));
					
					$facturacionyrecaudo->save();
					
					$salida = "({success: true, mensaje:'La facturacion y recaudo fue actualizado exitosamente'})";

			}
		
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en facturacion y recaudo'}})";
		}
		
	return $this->renderText($salida);
  }

 public function executeObtenerDatosFacturacionyrecaudo(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$com_id = $this->obtenerComId();
			$conexion = new Criteria();
			$conexion->add(FacturacionyrecaudoPeer::FAC_COM_ID, $com_id);
			$facturacionyrecaudo = FacturacionyrecaudoPeer::doSelectOne($conexion);
			
			if($facturacionyrecaudo)
			{
				$datos[$fila]['acu_fac_frecuencia_del_servicio'] = $facturacionyrecaudo->getFacFrecuenciaDelServicio();
				$datos[$fila]['acu_fac_frecuenc_facturacion'] = $facturacionyrecaudo->getFacFrecuencFacturacion();
				$datos[$fila]['acu_fac_frecuenc_fac_justificacion'] = $facturacionyrecaudo->getFacFrecuencFacJustificacion();
				$datos[$fila]['acu_fac_num_fac_exp_ultimo_periodo'] = $facturacionyrecaudo->getFacNumFacExpUltimoPeriodo();
				$datos[$fila]['acu_fac_sist_fac_utilizado'] = $facturacionyrecaudo->getFacSistFacUtilizado();
				$datos[$fila]['acu_fac_frecuencia_fac_justifica'] = $facturacionyrecaudo->getFacFrecuenciaFacJustifica();
				$datos[$fila]['acu_fac_morosidad_promedio'] = $facturacionyrecaudo->getFacMorosidadPromedio();
				$datos[$fila]['acu_fac_vol_agua_fac_en_el_anio_acu'] = $facturacionyrecaudo->getFacVolAguaFacEnElAnioAcu();
				$datos[$fila]['acu_fac_vol_agua_suministrado_anio_acu'] = $facturacionyrecaudo->getFacVolAguaSuministradoAnioAcu();
				
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en facturacion y recaudo'}})";
		}
		
	return $this->renderText($salida);
  }
}
