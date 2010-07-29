<?php

/**
 * acueducto_analisiscobertura actions.
 *
 * @package    arc
 * @subpackage acueducto_analisiscobertura
 * @author     Your name here
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
  *Este metodo controla las peticiones que le hacen a el modulo, y dependiendo de lo que se solicite se llama a la funcion adecuada
  */
    public function executeCargar(){
  	   
		
		
    }

  /**
  *@author:maryit sanchez
  *@date:13 de julio de 2010
  *Este metodo retorna un listado de los estratos socioeconomicos
  */	
	public function executeListarEstratos()
	{
		$salida='({"total":"0", "results":""})';
		$fila=0;
		$datos;
		
        try{

			$conexion = new Criteria();
			$estratos = EstratoPeer::doSelect($conexion);
			
			foreach($estratos As $estrato)
			{
			  $datos[$fila]['est_id'] = $estrato->getEstId();
			  $datos[$fila]['est_nombre'] = $estrato->getEstNombre();
			  if($estrato->getEstResidencial())
			  {$datos[$fila]['est_residencial'] = 'Residencial';}
			  else{$datos[$fila]['est_residencial'] = 'No Residencial';}
			  $fila++;
			}

			if($fila>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}
		}catch (Exception $excepcion)
		{
			//return $salida;
		}		

		return $this->renderText($salida);
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
	
	if(!$comercialfila)
	{
	$comercialfila = new Comercial();
	$comercialfila->setComPpsPreId($pps_pre_id);
	$comercialfila->setComPpsSerId($pps_ser_id);
	$comercialfila->setComPpsAnio($pps_anio);
	$comercialfila->save();
	}
	
	return $comercialfila->getComId();
  }
  
  /*esta funcion crea o actualiza un registro de analissi de cobertura en la bd
  */
  public function executeActualizarAnalisisCobertura(sfWebRequest $request)
  {
  $salida = '';
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(AnalisiscoberturaPeer::ACO_COM_ID, $com_id);
			$analisisCobertura = AnalisiscoberturaPeer::doSelectOne($conexion);

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
			} else {
			
				$analisisCobertura=new Analisiscobertura();
				$analisisCobertura->setAcoComId($com_id);
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
  
    public function executeActualizarSuscriptoresServicioAcueducto(sfWebRequest $request)
  {
/*  $salida = '';
	
		try{
			$com_id=$this->obtenerComId();
			
			$conexion = new Criteria();
			$conexion->add(AnalisisCoberturaPeer::ACO_COM_ID, $com_id);
			$analisisCobertura = AnalisisCoberturaPeer::doSelectOne($conexion);

			if($analisisCobertura)
			{
				$analisisCobertura->save();
		
				$salida = "({success: true, mensaje:'Fue actualizado exitosamente'})";
			} else {
				$salida = "({success: false, errors: { reason: 'No se a actualizado Peticiones , quejas y recursos'}})";
			}
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		
	return $this->renderText($salida);*/
  }
  
/*esta funcion devuelve un registro con la informacion de analisis de cobertura para un periodo un prestador y un servicio especifico*/
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

}
