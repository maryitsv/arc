<?php

/**
 * acueducto_analisiscobertura actions.
 *
 * @package    arc
 * @subpackage acueducto_analisiscobertura
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_analisiscoberturaActions extends sfActions
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
  
	/**
  *@author:maryit sanchez
  *@date:13 de julio de 2010
  *Este metodo retorna el id de un servicio especifico
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
  *@date:13 de julio de 2010
  *Este metodo retorna el id de la tabla comercial, dada la informacion del periodo y del prestador
  */  
    public function obtenerComId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(ComercialPeer::COM_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(ComercialPeer::COM_PPS_PERIODO, $pps_periodo);
	$conexion->add(ComercialPeer::COM_PPS_SER_ID, $pps_ser_id);
	
	$comercialfila = ComercialPeer::doSelectOne($conexion);
	
	if(!$comercialfila)
	{
	$comercialfila = new Comercial();
	$comercialfila->setComPpsPreId($pps_pre_id);
	$comercialfila->setComPpsSerId($pps_ser_id);
	$comercialfila->setComPpsPeriodo($pps_periodo);
	$comercialfila->save();
	}
	
	return $comercialfila->getComId();
  }
  
  /*
  *@author:maryit sanchez
  *@date:21 de julio de 2010
  *Esta funcion crea o actualiza un registro de analisis de cobertura en la bd
  */
  public function executeActualizarAnalisisCobertura(sfWebRequest $request)
  {
  $salida = '';
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(AnalisiscoberturaPeer::ACO_COM_ID, $com_id);
			$analisisCobertura = AnalisiscoberturaPeer::doSelectOne($conexion);

			if(!$analisisCobertura)
			{
				$analisisCobertura=new Analisiscobertura();
				$analisisCobertura->setAcoComId($com_id);
			}
			
			if($analisisCobertura)
			{
				$analisisCobertura->setAcoCatastroUsuarios($this->getRequestParameter('acu_aco_catastro_usuarios'));
				$analisisCobertura->setAcoAnioElaImplCatastroUsu($this->getRequestParameter('acu_aco_anio_ela_impl_catastro_usu'));
				$analisisCobertura->setAcoNumPrediosArea($this->getRequestParameter('acu_aco_num_predios_area'));
				$analisisCobertura->setAcoNumPrediosConecSistema($this->getRequestParameter('acu_aco_num_predios_conec_sistema'));
				$analisisCobertura->setAcoEstratSocecoAdopMpio($this->getRequestParameter('acu_aco_estrat_soceco_adop_mpio'));
				$analisisCobertura->setAcoEstraSocecoAdopMpioJus($this->getRequestParameter('acu_aco_estra_soceco_adop_mpio_jus'));
				$analisisCobertura->save();
		
				$salida = "({success: true, mensaje:'Fue actualizado exitosamente'})";
			}
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en analisis cobertura".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
  
   /*
  *@author:maryit sanchez
  *@date:28 de julio de 2010
  *Esta funcion devuelve un registro con la informacion de analisis de cobertura para
  *un periodo un prestador y un servicio especifico
  */
 public function executeObtenerDatosAnalisiscobertura(sfWebRequest $request)
  {
		$salida='({"total":"0", "results":""})';
		$fila=0;
		$datos;
		
        try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(AnalisiscoberturaPeer::ACO_COM_ID, $com_id);
			$analisisCobertura = AnalisiscoberturaPeer::doSelectOne($conexion);

			if($analisisCobertura)
			{
				$datos[$fila]['acu_aco_catastro_usuarios'] = $analisisCobertura->getAcoCatastroUsuarios();
				$datos[$fila]['acu_aco_anio_ela_impl_catastro_usu'] = $analisisCobertura->getAcoAnioElaImplCatastroUsu();
				$datos[$fila]['acu_aco_num_predios_area'] = $analisisCobertura->getAcoNumPrediosArea();
				$datos[$fila]['acu_aco_num_predios_conec_sistema'] = $analisisCobertura->getAcoNumPrediosConecSistema();
				$datos[$fila]['acu_aco_estrat_soceco_adop_mpio'] = $analisisCobertura->getAcoEstratSocecoAdopMpio();
				$datos[$fila]['acu_aco_estra_soceco_adop_mpio_jus'] = $analisisCobertura->getAcoEstraSocecoAdopMpioJus();
				
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}

		}catch (Exception $excepcion)
		{
			//return $salida;
		}		

		return $this->renderText($salida);
  }

  /**
  *@author:maryit sanchez
  *@date:4 de agosto de 2010
  *Este metodo retorna un el id de analisis cobertura
  */
    public function obtenerAcoId()
  { 
	$com_id=$this->obtenerComId();
			
	$conexion = new Criteria();
	$conexion->add(AnalisiscoberturaPeer::ACO_COM_ID, $com_id);
	$analisisCobertura = AnalisiscoberturaPeer::doSelectOne($conexion);

	if(!$analisisCobertura)
	{
		$analisisCobertura=new Analisiscobertura();
		$analisisCobertura->setAcoComId($com_id);
	}
	
	return $analisisCobertura->getAcoId();
  }
  
  /**
  *@author:maryit sanchez
  *@date:4 de agosto de 2010
  *Este metodo actualiza los suscritores servicio acueducto por estrato 
  */
    public function executeActualizarSuscriptoresservicioacueducto(sfWebRequest $request)
  {
  $salida = '';
	/*Nota SSACU_ACO_ID , SSACU_EST_ID deben ser indixes unicos */
		try{
			$aco_id=$this->obtenerAcoId();
			$est_id=$this->getRequestParameter('acu_ssacu_est_id');
			
			$conexion = new Criteria();
			
			$conexion->add(SuscriptoresservicioacueductoPeer::SSACU_ACO_ID, $aco_id);
			$conexion->add(SuscriptoresservicioacueductoPeer::SSACU_EST_ID, $est_id);			
			$suscriptoresacueducto = SuscriptoresservicioacueductoPeer::doSelectOne($conexion);

			
			if(!$suscriptoresacueducto)
			{
				$suscriptoresacueducto=new Suscriptoresservicioacueducto();
				
				$suscriptoresacueducto->setSsacuAcoId($aco_id);//pendiente
				$suscriptoresacueducto->setSsacuEstId($est_id);
				
			}
			
			if($suscriptoresacueducto)
			{   
				$suscriptoresacueducto->setSsacuNumeroSuscriptores($this->getRequestParameter('acu_ssacu_numero_suscriptores'));
				$suscriptoresacueducto->setSsacuTarifaSinMedicion($this->getRequestParameter('acu_ssacu_tarifa_sin_medicion'));
				$suscriptoresacueducto->setSsacuCargoFijo($this->getRequestParameter('acu_ssacu_cargo_fijo'));
				$suscriptoresacueducto->setSsacuTarifaConsumoBasico($this->getRequestParameter('acu_ssacu_tarifa_consumo_basico'));
				$suscriptoresacueducto->setSsacuTarifaConsumoComplementario($this->getRequestParameter('acu_ssacu_tarifa_consumo_complementario'));
				$suscriptoresacueducto->setSsacuTarifaConsumoSuntuario($this->getRequestParameter('acu_ssacu_tarifa_consumo_suntuario'));
				$suscriptoresacueducto->save();
		
				$salida = "({success: true, mensaje:'Fue actualizado exitosamente'})";
			}
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en suscriptores servicio acueducto descripcion".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
  
   /**
  *@author:maryit sanchez
  *@date:4 de agosto de 2010
  *Este metodo retorna un listado de los estratos socioeconomicos con  las tarifas de medicion cargo fijo entre otros
  */	
	public function executeListarSuscritoresservicioacueducto()
	{
		$salida='({"total":"0", "results":""})';
		$fila=0;
		$datos;
		
        try{

			$conexion = new Criteria();
			$estratos = EstratoPeer::doSelect($conexion);
			
			foreach($estratos As $estrato)
			{
			  $datos[$fila]['acu_est_id'] = $estrato->getEstId();
			  $datos[$fila]['acu_est_nombre'] = $estrato->getEstNombre();
			  if($estrato->getEstResidencial())
			  {$datos[$fila]['acu_est_residencial'] = 'Residencial';}
			  else{$datos[$fila]['acu_est_residencial'] = 'No Residencial';}
			  
			  //obtener los datos de los suscriptores
			  $aco_id=$this->obtenerAcoId();
			  $est_id=$estrato->getEstId();
			
			  $conexion = new Criteria();
			  $conexion->add(SuscriptoresservicioacueductoPeer::SSACU_ACO_ID, $aco_id);
			  $conexion->add(SuscriptoresservicioacueductoPeer::SSACU_EST_ID, $est_id);			
			  $suscriptoresacueducto = SuscriptoresservicioacueductoPeer::doSelectOne($conexion);
			  
			  if($suscriptoresacueducto){
				$datos[$fila]['acu_ssacu_numero_suscriptores'] = $suscriptoresacueducto->getSsacuNumeroSuscriptores ();
				$datos[$fila]['acu_ssacu_tarifa_sin_medicion'] =$suscriptoresacueducto->getSsacuTarifaSinMedicion ();
				$datos[$fila]['acu_ssacu_cargo_fijo'] = $suscriptoresacueducto->getSsacuCargoFijo ();
				$datos[$fila]['acu_ssacu_tarifa_consumo_basico'] = $suscriptoresacueducto->getSsacuTarifaConsumoBasico ();
				$datos[$fila]['acu_ssacu_tarifa_consumo_complementario'] = $suscriptoresacueducto->getSsacuTarifaConsumoComplementario ();
				$datos[$fila]['acu_ssacu_tarifa_consumo_suntuario'] = $suscriptoresacueducto->getSsacuTarifaConsumoSuntuario ();				
			  }
			  else{
				$datos[$fila]['acu_ssacu_numero_suscriptores'] = "0";
				$datos[$fila]['acu_ssacu_tarifa_sin_medicion'] = "0";
				$datos[$fila]['acu_ssacu_cargo_fijo'] = "0";
				$datos[$fila]['acu_ssacu_tarifa_consumo_basico'] = "0";
				$datos[$fila]['acu_ssacu_tarifa_consumo_complementario'] = "0";
				$datos[$fila]['acu_ssacu_tarifa_consumo_suntuario'] = "0";	
			  }

			
			  $fila++;
			}

			if($fila>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}
		}catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en suscriptores servicio acueducto descripcion".$excepcion."'}})";
		}		

		return $this->renderText($salida);
	}  
	
}
