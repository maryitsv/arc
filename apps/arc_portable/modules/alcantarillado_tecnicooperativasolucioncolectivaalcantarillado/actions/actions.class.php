<?php

/**
 * alcantarillado_tecnicooperativasolucioncolectivaalcantarillado actions.
 *
 * @package    arc
 * @subpackage alcantarillado_tecnicooperativasolucioncolectivaalcantarillado
 * @author     maryit
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_tecnicooperativasolucioncolectivaalcantarilladoActions extends sfActions
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
  *Este metodo obtiene el id de un tecnico operativo dados el periodo, y id del prestador, basicamente busca la tupla para obtener el id, pero si no existe la crea
  */
    public function obtenerTopId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_ser_id = $this->obtenerServicioId('alcantarillado');
	
	$conexion = new Criteria();
	$conexion->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(TecnicooperativoPeer::TOP_PPS_PERIODO, $pps_periodo);
	$conexion->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
	
	$tecnicooperativofila = TecnicooperativoPeer::doSelectOne($conexion);
	
	if(!$tecnicooperativofila){
	$tecnicooperativofila=new Tecnicooperativo();
	$tecnicooperativofila->setTopPpsPreId($pps_pre_id);
	$tecnicooperativofila->setTopPpsPeriodo($pps_periodo);
	$tecnicooperativofila->setTopPpsSerId($pps_ser_id);
	$tecnicooperativofila->save();
	}
				
	return $tecnicooperativofila->getTopId();
  }
 
  /**
  *@author:maryit sanchez
  *@date:9 de agosto de 2010
  *Este metodo actualizalas soluciones colectivas de alcantarillado
  */
  public function executeActualizarTecnicooperativasolucioncolectivaalcantarillado(sfWebRequest $request)
  {
	$salida = '';
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativasolucioncolectivaalcantarilladoPeer::TOSCA_TOP_ID, $top_id);
			$solucioncolectiva = TecnicooperativasolucioncolectivaalcantarilladoPeer::doSelectOne($conexion);
			
			if(!$solucioncolectiva)
			{
				$solucioncolectiva =new Tecnicooperativasolucioncolectivaalcantarillado();
				$solucioncolectiva->setToscaTopId($top_id);
			}
			
			if($solucioncolectiva){
			
				$solucioncolectiva->setToscaPoseeAlcantarilladoColectivo($this->getRequestParameter('alc_tosca_posee_alcantarillado_colectivo'));

				$solucioncolectiva->setToscaSanitario($this->getRequestParameter('alc_tosca_sanitario'));
				$solucioncolectiva->setToscaPluvial($this->getRequestParameter('alc_tosca_pluvial'));
				$solucioncolectiva->setToscaCombiConvencional($this->getRequestParameter('alc_tosca_combi_convencional'));
				$solucioncolectiva->setToscaCombiNoConvencional($this->getRequestParameter('alc_tosca_combi_no_convencional'));
				$solucioncolectiva->setToscaSimplificado($this->getRequestParameter('alc_tosca_simplificado'));
				$solucioncolectiva->setToscaSinArrastreSolidos($this->getRequestParameter('alc_tosca_sin_arrastre_solidos'));
				$solucioncolectiva->setToscaOtro($this->getRequestParameter('alc_tosca_otro'));

				$solucioncolectiva->setToscaSanitarioNumeroSuscriptores($this->getRequestParameter('alc_tosca_sanitario_numero_suscriptores'));
				$solucioncolectiva->setToscaPluvialNumeroSuscriptores($this->getRequestParameter('alc_tosca_pluvial_numero_suscriptores'));
				$solucioncolectiva->setToscaCombiConvencionalNumeroSuscriptores($this->getRequestParameter('alc_tosca_combi_convencional_numero_suscriptores'));
				$solucioncolectiva->setToscaCombiNoConvencionalNumeroSuscriptores($this->getRequestParameter('alc_tosca_combi_no_convencional_numero_suscriptores'));
				$solucioncolectiva->setToscaSimplificadoNumeroSuscriptores($this->getRequestParameter('alc_tosca_simplificado_numero_suscriptores'));
				$solucioncolectiva->setToscaSinArrastreSolidosNumeroSuscriptores($this->getRequestParameter('alc_tosca_sin_arrastre_solidos_numero_suscriptores'));
				$solucioncolectiva->setToscaOtroNumeroSuscriptores($this->getRequestParameter('alc_tosca_otro_numero_suscriptores'));

				$solucioncolectiva->setToscaSanitarioFunciona($this->getRequestParameter('alc_tosca_sanitario_funciona'));
				$solucioncolectiva->setToscaPluvialFunciona($this->getRequestParameter('alc_tosca_pluvial_funciona'));
				$solucioncolectiva->setToscaCombiConvencionalFunciona($this->getRequestParameter('alc_tosca_combi_convencional_funciona'));
				$solucioncolectiva->setToscaCombiNoConvencionalFunciona($this->getRequestParameter('alc_tosca_combi_no_convencional_funciona'));
				$solucioncolectiva->setToscaSimplificadoFunciona($this->getRequestParameter('alc_tosca_simplificado_funciona'));
				$solucioncolectiva->setToscaSinArrastreSolidosFunciona($this->getRequestParameter('alc_tosca_sin_arrastre_solidos_funciona'));
				$solucioncolectiva->setToscaOtroFunciona($this->getRequestParameter('alc_tosca_otro_funciona'));

				$solucioncolectiva->setToscaSanitarioSeUsa($this->getRequestParameter('alc_tosca_sanitario_se_usa'));
				$solucioncolectiva->setToscaPluvialSeUsa($this->getRequestParameter('alc_tosca_pluvial_se_usa'));
				$solucioncolectiva->setToscaCombiConvencionalSeUsa($this->getRequestParameter('alc_tosca_combi_convencional_se_usa'));
				$solucioncolectiva->setToscaCombiNoConvencionalSeUsa($this->getRequestParameter('alc_tosca_combi_no_convencional_se_usa'));
				$solucioncolectiva->setToscaSimplificadoSeUsa($this->getRequestParameter('alc_tosca_simplificado_se_usa'));
				$solucioncolectiva->setToscaSinArrastreSolidosSeUsa($this->getRequestParameter('alc_tosca_sin_arrastre_solidos_se_usa'));
				$solucioncolectiva->setToscaOtroSeUsa($this->getRequestParameter('alc_tosca_otro_se_usa'));

				$solucioncolectiva->setToscaSanitarioEstado($this->getRequestParameter('alc_tosca_sanitario_estado'));
				$solucioncolectiva->setToscaPluvialEstado($this->getRequestParameter('alc_tosca_pluvial_estado'));
				$solucioncolectiva->setToscaCombiConvencionalEstado($this->getRequestParameter('alc_tosca_combi_convencional_estado'));
				$solucioncolectiva->setToscaCombiNoConvencionalEstado($this->getRequestParameter('alc_tosca_combi_no_convencional_estado'));
				$solucioncolectiva->setToscaSimplificadoEstado($this->getRequestParameter('alc_tosca_simplificado_estado'));
				$solucioncolectiva->setToscaSinArrastreSolidosEstado($this->getRequestParameter('alc_tosca_sin_arrastre_solidos_estado'));
				$solucioncolectiva->setToscaOtroEstado($this->getRequestParameter('alc_tosca_otro_estado'));

				$solucioncolectiva->save();
				
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
  *@date:10 de agosto de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente a Tecnico operativa solucion colectiva alcantarillado para
  *un periodo, un prestador y un servicio especifico
  */
 public function executeObtenerDatosTecnicooperativasolucioncolectivaalcantarillado(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$top_id = $this->obtenerTopId();
			$conexion = new Criteria();
			$conexion->add(TecnicooperativasolucioncolectivaalcantarilladoPeer::TOSCA_TOP_ID, $top_id);
			$solucioncolectiva = TecnicooperativasolucioncolectivaalcantarilladoPeer::doSelectOne($conexion);

			if($solucioncolectiva)
			{
				$datos[$fila]['alc_tosca_posee_alcantarillado_colectivo'] = $solucioncolectiva->getToscaPoseeAlcantarilladoColectivo();
				$datos[$fila]['alc_tosca_sanitario'] = $solucioncolectiva->getToscaSanitario();
				$datos[$fila]['alc_tosca_pluvial'] = $solucioncolectiva->getToscaPluvial();
				$datos[$fila]['alc_tosca_combi_convencional'] = $solucioncolectiva->getToscaCombiConvencional();
				$datos[$fila]['alc_tosca_combi_no_convencional'] = $solucioncolectiva->getToscaCombiNoConvencional();
				$datos[$fila]['alc_tosca_simplificado'] = $solucioncolectiva->getToscaSimplificado();
				$datos[$fila]['alc_tosca_sin_arrastre_solidos'] = $solucioncolectiva->getToscaSinArrastreSolidos();
				$datos[$fila]['alc_tosca_otro'] = $solucioncolectiva->getToscaOtro();

				$datos[$fila]['alc_tosca_sanitario_numero_suscriptores'] = $solucioncolectiva->getToscaSanitarioNumeroSuscriptores();
				$datos[$fila]['alc_tosca_pluvial_numero_suscriptores'] = $solucioncolectiva->getToscaPluvialNumeroSuscriptores();
				$datos[$fila]['alc_tosca_combi_convencional_numero_suscriptores'] = $solucioncolectiva->getToscaCombiConvencionalNumeroSuscriptores();
				$datos[$fila]['alc_tosca_combi_no_convencional_numero_suscriptores'] = $solucioncolectiva->getToscaCombiNoConvencionalNumeroSuscriptores();
				$datos[$fila]['alc_tosca_simplificado_numero_suscriptores'] = $solucioncolectiva->getToscaSimplificadoNumeroSuscriptores();
				$datos[$fila]['alc_tosca_sin_arrastre_solidos_numero_suscriptores'] = $solucioncolectiva->getToscaSinArrastreSolidosNumeroSuscriptores();
				$datos[$fila]['alc_tosca_otro_numero_suscriptores'] = $solucioncolectiva->getToscaOtroNumeroSuscriptores();
		
				$datos[$fila]['alc_tosca_sanitario_funciona'] = $solucioncolectiva->getToscaSanitarioFunciona();
				$datos[$fila]['alc_tosca_pluvial_funciona'] = $solucioncolectiva->getToscaPluvialFunciona();
				$datos[$fila]['alc_tosca_combi_convencional_funciona'] = $solucioncolectiva->getToscaCombiConvencionalFunciona();
				$datos[$fila]['alc_tosca_combi_no_convencional_funciona'] = $solucioncolectiva->getToscaCombiNoConvencionalFunciona();
				$datos[$fila]['alc_tosca_simplificado_funciona'] = $solucioncolectiva->getToscaSimplificadoFunciona();
				$datos[$fila]['alc_tosca_sin_arrastre_solidos_funciona'] = $solucioncolectiva->getToscaSinArrastreSolidosFunciona();
				$datos[$fila]['alc_tosca_otro_funciona'] = $solucioncolectiva->getToscaOtroFunciona();
				
				$datos[$fila]['alc_tosca_sanitario_se_usa'] = $solucioncolectiva->getToscaSanitarioSeUsa();
				$datos[$fila]['alc_tosca_pluvial_se_usa'] = $solucioncolectiva->getToscaPluvialSeUsa();
				$datos[$fila]['alc_tosca_combi_convencional_se_usa'] = $solucioncolectiva->getToscaCombiConvencionalSeUsa();
				$datos[$fila]['alc_tosca_combi_no_convencional_se_usa'] = $solucioncolectiva->getToscaCombiNoConvencionalSeUsa();
				$datos[$fila]['alc_tosca_simplificado_se_usa'] = $solucioncolectiva->getToscaSimplificadoSeUsa();
				$datos[$fila]['alc_tosca_sin_arrastre_solidos_se_usa'] = $solucioncolectiva->getToscaSinArrastreSolidosSeUsa();
				$datos[$fila]['alc_tosca_otro_se_usa'] = $solucioncolectiva->getToscaOtroSeUsa();

				$datos[$fila]['alc_tosca_sanitario_estado'] = $solucioncolectiva->getToscaSanitarioEstado();
				$datos[$fila]['alc_tosca_pluvial_estado'] = $solucioncolectiva->getToscaPluvialEstado();
				$datos[$fila]['alc_tosca_combi_convencional_estado'] = $solucioncolectiva->getToscaCombiConvencionalEstado();
				$datos[$fila]['alc_tosca_combi_no_convencional_estado'] = $solucioncolectiva->getToscaCombiNoConvencionalEstado();
				$datos[$fila]['alc_tosca_simplificado_estado'] = $solucioncolectiva->getToscaSimplificadoEstado();
				$datos[$fila]['alc_tosca_sin_arrastre_solidos_estado'] = $solucioncolectiva->getToscaSinArrastreSolidosEstado();
				$datos[$fila]['alc_tosca_otro_estado'] = $solucioncolectiva->getToscaOtroEstado();

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


 /**
  *@author:maryit sanchez
  *@date:12 de agosto de 2010
  *Esta funcion devuelve un listado de estados generales
  */
 public function executeListarEstados(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$conexion = new Criteria();
			$estadosgenerales = EstadogeneralPeer::doSelect($conexion);

			foreach($estadosgenerales as $temporal)
			{
				$datos[$fila]['esg_id'] = $temporal->getEsgId();
				$datos[$fila]['esg_nombre'] = $temporal->getEsgNombre();
				
				$fila++;
			} 
			if($fila>0){
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
