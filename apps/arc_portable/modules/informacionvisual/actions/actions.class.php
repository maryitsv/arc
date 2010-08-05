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
   // $this->forward('default', 'module');
  }
  
  
/**
*Es esta funcion obtenemos un listado de todos los proyectos en los que puede participar el usuario logueado
*/
public function executeListarInformacionvisual()
  {
  		$conexion = new Criteria();
		$conexion->add(InformacionvisualPeer::IV_PRE_ID,$this->getUser()->getAttribute('pps_pre_id'));
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
			$datos[$pos]['iv_tipo_archivo']=$temporal->getIvTipoArchivo();
		    $datos[$pos]['iv_url']=$temporal->getIvUrl();
		    
		    $pos++;
			}
			
			if($pos>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$pos.'","results":'.$jsonresult.'})';
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
  public function executeCrearInformacionVisual()
  {
        $salida	='';

       		try{    	
       		        $doc = new AgilhuDocumento();
			
			$doc->setDocNombre($this->getRequestParameter('nombre'));
			
			$doc->setDocDescripcion($this->getRequestParameter('descripcion'));
			$doc->setDocIdHis($this->getRequestParameter('historia'));
			$doc->setDocIdMod($this->getRequestParameter('modulo'));
			$doc->setDocIdPro($this->getUser()->getAttribute('proyectoSeleccionado'));//del proyecto que tenga seleccionado hasta el momento
			
			$doc->setDocIdRemitente($this->getUser()->getAttribute('idUsuario'));
			
			sleep(1);
			$tamano = $_FILES['archivo']['size'];
			$tipo = $_FILES['archivo']['type'];
			$temporal = $_FILES['archivo']['tmp_name'];
				
			$fp = fopen($temporal, "rb");
			$contenido = fread($fp, $tamano);
			fclose($fp); 
			
			$doc->setDocTamano(''.$tamano);
			$doc->setDocTipo(''.$tipo);
			
			$doc->setDocContenido(''.$contenido);
					
			$doc->save();
			
			}
			catch (Exception $excepcion)
			{
			$salida = "({success: false, errors: { reason: 'Ya'}})";
			return $salida;
			}
			$salida = "({success: true, mensaje:'El proyecto fue creado exitosamente'})";
	 		
  return $salida;
  }
  

   public function executeDescargarInformacionVisual()
   {
	
  		$conexion = new Criteria();
		$conexion->add(InformacionvisualPeer::DOC_ID,$this->getRequestParameter('Identificador'));
                $documento = InformacionvisualPeer::doSelectOne($conexion);
	
		$tipo=$documento->getDocTipo();
	
                $bin = $documento->getDocContenido(); 	
		$this->getResponse()->clearHttpHeaders();
	   
     	        $this->getResponse()->clearHttpHeaders();
	  	$this->getResponse()->setHttpHeader("Content-Type", $tipo);
     	        $this->getResponse()->setHttpHeader("Content-Length",$documento->getDocTamano(), true);
	  
		$dato1 = fread($bin, $documento->getDocTamano());
		$this->getResponse()->setContent($dato1);

   }

 public function executeEliminarInformacionVisual()
  {
        $salida	='';

       		try{    	
		$conexion = new Criteria();
		$conexion->add(InformacionvisualPeer::DOC_ID,$this->getRequestParameter('Identificador'));
		//$conexion->add(InformacionvisualPeer::DOC_NOMBRE,$this->getRequestParameter('nombre'));
		$conexion->add(InformacionvisualPeer::DOC_ID_PRO,$this->getUser()->getAttribute('proyectoSeleccionado'));

                $documento = InformacionvisualPeer::doSelectOne($conexion);

		if($documento)				
		{$documento->delete();}

			}
			catch (Exception $excepcion)
			{
			$salida = "({success: false, errors: { reason: 'No se pudo eliminar el documento'}})";
			return $salida;
			}
			$salida = "({success: true, mensaje:'El documento fue eliminado con exito'})";
	 		
  return $salida;
  }
}
