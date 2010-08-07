<?php

/**
 * informacionvisual actions.
 *
 * @package    arc
 * @subpackage informacionvisual
 * @author     gustavo y maryit
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class informacionvisualActions extends sfActions
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
*@date : 6 de agosto de 2010
*@author:maryit sanchez
* Es esta funcion obtenemos un listado de todos los proyectos en los que puede participar el usuario logueado
*/
public function executeListarInformacionvisual()
  {
  		$conexion = new Criteria();
		$conexion->add(InformacionvisualPeer::IV_PRE_ID,$this->getUser()->getAttribute('pps_pre_id'));
		$informacionvisual_cantidad = InformacionvisualPeer::doCount($conexion);

		$conexion->setLimit($this->getRequestParameter('limit'));
		$conexion->setOffset($this->getRequestParameter('start'));
		$informacionvisual = InformacionvisualPeer::doSelect($conexion);
		
		$pos = 0;
		$datos;
		$salida='';
		
		if($informacionvisual){	
		
			foreach ($informacionvisual As $temporal)
			{

		    $datos[$pos]['iv_id']=$temporal->getIvId();
		    $datos[$pos]['iv_nombre']=$temporal->getIvNombre();
		    $datos[$pos]['iv_descripcion']=$temporal->getIvDescripcion();
		    $datos[$pos]['iv_tipo']=$temporal->getIvTipo();
		    $datos[$pos]['iv_url']=$temporal->getIvUrl();
		    
		    $pos++;
			}
			
			if($pos>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$informacionvisual_cantidad .'","results":'.$jsonresult.'})';
			}
		}
		else {
			$salida= '({"total":"0", "results":""})';
		}
	return $this->renderText($salida);
  }
  
 /**
 *Aqui se crea un doc
 */ 
  public function executeCrearInformacionvisual()
  {
	$salida	='';

	try
	{  
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');  
		$iv_nombre = $this->getRequestParameter('iv_nombre');	
		$informacionvisual = new Informacionvisual();
		$informacionvisual->setIvPreId($pps_pre_id );
		$informacionvisual->setIvNombre($iv_nombre);
		$informacionvisual->setIvDescripcion($this->getRequestParameter('iv_descripcion'));
		$informacionvisual->setIvTipo($this->getRequestParameter('iv_tipo'));
		$informacionvisual->setIvUrl("uploads/".$pps_pre_id."/".$_FILES['archivo']['name']);
		$informacionvisual->save();		

		
		$nombre_carpeta = "uploads/".$pps_pre_id;

		if(!is_dir($nombre_carpeta))
		{
			mkdir($nombre_carpeta, 0700);
		}
		
		sleep(1);
		$nombre = $_FILES['archivo']['name'];//$iv_nombre;//
		$tamano = $_FILES['archivo']['size'];
		$tipo = $_FILES['archivo']['type'];
		$temporal = $_FILES['archivo']['tmp_name'];
		
		if(file_exists($nombre_carpeta."/".$nombre))
		{
			$salida = "({success: false, errors: { reason: 'Ya existe el archivo'}})";
		}
		else
		{
			if(false)/*$tamano > algo*/
			{
				$salida = "({success: false, errors: { reason: 'El archivo exede el limite de tamaño'}})";
			}
			else
			{
				copy($temporal, "uploads/".$this->getUser()->getAttribute('pps_pre_id')."/".$nombre);
				$salida = "({success: true, mensaje:'El archivo subio exitosamente'})";
			}
		}
		
	}
	catch (Exception $excepcion)
	{
		$salida = "({success: false, errors: { reason: 'Ya'}})";
		return $salida;
	}
	 		
	return $this->renderText($salida);
  }
  
/*Aqui se elimina*/

 public function executeEliminarInformacionvisual()
  {
        $salida	="({success: false, mensaje:'El archivo no se ha eliminado con exito'})"; 
	
	try{	
	       	$informacionvisual = InformacionvisualPeer::retrieveByPK($this->getRequestParameter('iv_id'));
		if($informacionvisual){
			unlink($informacionvisual->getIvUrl());
			$informacionvisual->delete();
			$salida = "({success: true, mensaje:'El archivo se ha eliminado con exito'})"; 
		}
		else{
			$salida = "({success: false, mensaje:'El archivo no se ha eliminado con exito por que lo hemos encontrado'})"; 
		}
	}
	catch (Exception $excepcion)
	{
		$salida = "({success: false, errors: { reason: 'Ha ocurrido una execpcion'}})";
		return $salida;
	}
	return $this->renderText($salida);
  }
}
