<?php

/**
 * acueducto_informaciongeneralmicrocuencas actions.
 *
 * @package    arc
 * @subpackage acueducto_informaciongeneralmicrocuencas
 * @author     Your name here
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
			//$salida='exception en listar depatamentos';
		}		
		return $this->renderText($salida);
  }
  
  
  public function executeListarMunicipios(sfWebRequest $request)
  {
		$salida='({"total":"0", "results":""})';
		$fila=0;
		$datos;
		$dep_id=$this->getRequestParameter('dep_id');
		
        try{

			$conexion = new Criteria();
			$conexion ->add(MunicipioPeer::MUN_DEP_ID,$dep_id);
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
}
