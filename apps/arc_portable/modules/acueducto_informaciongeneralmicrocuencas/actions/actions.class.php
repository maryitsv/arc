<?php

/**
 * acueducto_informaciongeneralmicrocuencas actions.
 *
 * @package    arc
 * @subpackage acueducto_informaciongeneralmicrocuencas
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_informaciongeneralmicrocuencasActions extends sfActions
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
  
     /*
  *@author:maryit sanchez
  *@date:25 de julio de 2010
  *Esta funcion lista los departamentos de colombia
  */
  public function executeListarDepartamentos(sfWebRequest $request)
  {
		$salida='({"total":"0", "results":""})';
		$fila=0;
		$datos;
		
        try{

			$conexion = new Criteria();
			$departamentos = DepartamentoPeer::doSelect($conexion);
			
			foreach($departamentos As $departamento)
			{
			  $datos[$fila]['dep_id'] = $departamento->getDepId();
			  $datos[$fila]['dep_nombre'] = $departamento->getDepNombre();
			  $fila++;
			}

			if($fila>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}
		}catch (Exception $excepcion)
		{
			$salida='exception en listar depatamentos';
		}		
		return $this->renderText($salida);
  }
  
     /*
  *@author:maryit sanchez
  *@date:25 de julio de 2010
  *Esta funcion lista los municipios de colombia dado el id de un departamentos especifico
  */
  public function executeListarMunicipios(sfWebRequest $request)
  {
		$salida='({"total":"0", "results":""})';
		$fila=0;
		$datos;
		$dep_id=$this->getRequestParameter('dep_id');
		
        try{

			$conexion = new Criteria();
			if($dep_id){
			$conexion ->add(MunicipioPeer::MUN_DEP_ID,$dep_id);
			}
			$municipios = MunicipioPeer::doSelect($conexion);
			
			foreach($municipios As $municipio)
			{
			  $datos[$fila]['mun_id'] = $municipio->getMunId();
			  $datos[$fila]['mun_nombre'] = $municipio->getMunNombre();
			  $fila++;
			}

			if($fila>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}
		}catch (Exception $excepcion)
		{
			//$salida='exception en listar depatamentos';
		}		
		return $this->renderText($salida);
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
  *@date:28 de julio de 2010
  *Este metodo retorna el id de la tabla microcuencas, dada la informacion del periodo y del prestador
  */  
    public function obtenerMicId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(MicrocuencasPeer::MIC_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(MicrocuencasPeer::MIC_PPS_PERIODO, $pps_periodo);
	$conexion->add(MicrocuencasPeer::MIC_PPS_SER_ID, $pps_ser_id);
	
	$microcuencafila = MicrocuencasPeer::doSelectOne($conexion);
	
	if(!$microcuencafila){
	$microcuencafila=new Microcuencas();
	$microcuencafila->setMicPpsPreId($pps_pre_id);
	$microcuencafila->setMicPpsPeriodo($pps_periodo);
	$microcuencafila->setMicPpsSerId($pps_ser_id);
	$microcuencafila->save();
	}
				
	return $microcuencafila->getMicId();
  }
    /*
  *@author:maryit sanchez
  *@date:28 de julio de 2010
  *Esta funcion actualiza la informacion general de microcuencas
  */
  public function executeActualizarInformaciongeneralmicrocuencas(sfWebRequest $request)
  {  
	$salida = '';
	
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(InformaciongeneralmicrocuencasPeer::IMI_MIC_ID, $mic_id);
			$informaciongeneralmicrocuencas = InformaciongeneralmicrocuencasPeer::doSelectOne($conexion);
			
			if(!$informaciongeneralmicrocuencas)
			{
				$informaciongeneralmicrocuencas =new Informaciongeneralmicrocuencas();
				$informaciongeneralmicrocuencas->setImiMicId($mic_id);
			}		
			
			if($informaciongeneralmicrocuencas)
			{
				$informaciongeneralmicrocuencas->setImiLocalidad($this->getRequestParameter('acu_imi_localidad'));
				$informaciongeneralmicrocuencas->setImiDepId($this->getRequestParameter('acu_imi_dep_id'));
				$informaciongeneralmicrocuencas->setImiMunId($this->getRequestParameter('acu_imi_mun_id'));
				$informaciongeneralmicrocuencas->setImiMicrocuenca($this->getRequestParameter('acu_imi_microcuenca'));
				$informaciongeneralmicrocuencas->setImiCodigoCuenca($this->getRequestParameter('acu_imi_codigo_cuenca'));
				$informaciongeneralmicrocuencas->setImiFecha($this->getRequestParameter('acu_imi_fecha'));
				$informaciongeneralmicrocuencas->save();
				
				$salida = "({success: true, mensaje:'La info general de microcuencas fue actualizado exitosamente'})";
			} 
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en info general de microcuencas ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
    /*
  *@author:maryit sanchez
  *@date:28 de julio de 2010
  *Esta funcion devuelve un registro con la informacion general de microcuencas para
  *un periodo un prestador y un servicio especifico
  */
 public function executeObtenerDatosInformaciongeneralmicrocuencas(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(InformaciongeneralmicrocuencasPeer::IMI_MIC_ID, $mic_id);
			$informaciongeneralmicrocuencas = InformaciongeneralmicrocuencasPeer::doSelectOne($conexion);
			
			if($informaciongeneralmicrocuencas)
			{
				$datos[$fila]['acu_imi_localidad'] = $informaciongeneralmicrocuencas->getImiLocalidad();
				$datos[$fila]['acu_imi_dep_id'] = $informaciongeneralmicrocuencas->getImiDepId();
				$datos[$fila]['acu_imi_mun_id'] = $informaciongeneralmicrocuencas->getImiMunId();
				$datos[$fila]['acu_imi_microcuenca'] = $informaciongeneralmicrocuencas->getImiMicrocuenca();
				$datos[$fila]['acu_imi_codigo_cuenca'] = $informaciongeneralmicrocuencas->getImiCodigoCuenca();
				$datos[$fila]['acu_imi_fecha'] = $informaciongeneralmicrocuencas->getImiFecha();
				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion en info general microcuencas'}})";
		}
		
	return $this->renderText($salida);
  }
}
