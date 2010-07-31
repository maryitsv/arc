<?php

/**
 * prestador_gestionar actions.
 *
 * @package    arc
 * @subpackage prestador_gestionar
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class prestador_gestionarActions extends sfActions
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
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo permite la creacion de Prestadors del sistema
  */	  
	public function executeCrearPrestador()
	{
		$salida	='';
		
		try{
			$pre_usu_id = $this->getRequestParameter('pre_usu_id');
			
			$conexion=new Criteria();
			$conexion->add(PrestadorPeer::PRE_USU_ID, $pre_usu_id);
			$prestador=PrestadorPeer::doSelectOne($conexion);

			if(!$prestador)
			{
				$prestador = new Prestador();	
				$prestador->setPreUsuId($this->getRequestParameter('pre_usu_id')); //esto debe ser unico para todos los prestadores
				$prestador->setPreRanId($this->getRequestParameter('pre_ran_id'));
				$prestador->setPreNombrePrestador($this->getRequestParameter('pre_nombre_prestador'));
				$prestador->setPreTipoIdentificacionPrestador($this->getRequestParameter('pre_tipo_identificacion_prestador'));
				$prestador->setPreIdentificacionPrestador($this->getRequestParameter('pre_identificacion_prestador'));
	
			/*	$prestador->getPreEstado($this->getRequestParameter('pre_estado'));
				$prestador->getPreSerAcueducto($this->getRequestParameter('pre_ser_acueducto'));
				$prestador->getPreSerAlcantarillado($this->getRequestParameter('pre_ser_alcantarillado'));
				$prestador->getPreSerAseo($this->getRequestParameter('pre_ser_aseo'));*/
				  
				$prestador->save();
				$salida = "({success: true, mensaje:'El prestador fue creado exitosamente'})";
				
			} 
			else {
				$salida = "({success: false, errors: { reason: 'Ya existe un prestador con ese mismo login de este prestador,cambielo e intente de nuevo'}})";
			}
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en  el prestador".$excepcion."'}})";
		}	
		return $this->renderText($salida);
	}
  /**
  *@author:maryit sanchez
  *@date:30 de julio de 2010
  *Este metodo permite la actualizacion de Prestadores del sistema
  */	  
	public function executeActualizarPrestador()
	{
		$salida = '';
		
		try{
			$pre_id = $this->getRequestParameter('pre_id');
			$conexion = new Criteria();
			$conexion->add(PrestadorPeer::PRE_ID, $pre_id);
			$prestador = PrestadorPeer::doSelectOne($conexion);
			
			if($prestador)
			{
				$prestador->setPreUsuId($this->getRequestParameter('pre_usu_id')); 
				$prestador->setPreRanId($this->getRequestParameter('pre_ran_id'));
				$prestador->setPreNombrePrestador($this->getRequestParameter('pre_nombre_prestador'));
				$prestador->setPreTipoIdentificacionPrestador($this->getRequestParameter('pre_tipo_identificacion_prestador'));
				$prestador->setPreIdentificacionPrestador($this->getRequestParameter('pre_identificacion_prestador'));
			/*	$prestador->getPreEstado($this->getRequestParameter('pre_estado'));
				$prestador->getPreSerAcueducto($this->getRequestParameter('pre_ser_acueducto'));
				$prestador->getPreSerAlcantarillado($this->getRequestParameter('pre_ser_alcantarillado'));
				$prestador->getPreSerAseo($this->getRequestParameter('pre_ser_aseo')); */
				
				$prestador->save();
				$salida = "({success: true, mensaje:'El Prestador fue actualizado exitosamente'})";
			} 
			else 
			{
				$salida = "({success: false, errors: { reason: 'No se a actualizado el prestador , porque no existe'}})";
			}
		}
		catch (Exception $excepcion)
		{
			$salida =  "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		return $this->renderText($salida);
	}
  /**
  *@author:maryit sanchez
  *@date:30 de julio de 2010
  *Este metodo permite la eliminacion de Prestadores
  */	  
	public function executeEliminarPrestador()
	{
		$salida =  "";
		try{
			$ids_prestadores_codificados = $this->getRequestParameter('ids_prestadores');
			$ids_prestadores = json_decode($ids_prestadores_codificados);
			
			foreach ($ids_prestadores as $pre_id)
			{
				$conexion = new Criteria();
				$conexion->add(PrestadorPeer::pre_id, $pre_id);
				
				if($conexion)
				{
					$Prestadorsaeliminar = PrestadorPeer::doSelect($conexion);
					foreach ($Prestadorsaeliminar as $elemento)
					{
						$elemento->delete();
					}
					$salida = "({success: true, mensaje:'El prestador fue eliminado exitosamente'})";
				}
				else
				{
					$salida = "({success: false, errors: { reason: 'No se pudo eliminar el prestador, porque ya ha registrado informacion'}})";
				}		
			}
			
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		return $this->renderText($salida);
	}

	
	  /**
  *@author:maryit sanchez
  *@date:30 de julio de 2010
  *Este metodo retorna un listado de los Prestadores del sistema
  */	  
	public function executeListarPrestadores()
	{ 
		$salida = '';
		try{
			$conexion = new Criteria();
		/*	if($this->getRequestParameter('pre_estado'))
			{
			$conexion->add(PrestadorPeer::pre_estado,$this->getRequestParameter('pre_estado'));
			}*/
			$numero_prestadores = PrestadorPeer::doCount($conexion);
			$conexion->setLimit($this->getRequestParameter('limit'));
			$conexion->setOffset($this->getRequestParameter('start'));
			$prestadores = PrestadorPeer::doSelect($conexion);
			$pos = 0;
			$datos;
			
			foreach ($prestadores As $temporal)
			{
				$datos[$pos]['pre_id']=$temporal->getPreId();
				$datos[$pos]['pre_ran_id']=$temporal->getPreRanId();
				$datos[$pos]['pre_usu_id']=$temporal->getPreUsuId();
				$datos[$pos]['pre_nombre_prestador']=$temporal->getPreNombrePrestador();
				$datos[$pos]['pre_tipo_identificacion_prestador'] = $temporal->getPreTipoIdentificacionPrestador();
				$datos[$pos]['pre_identificacion_prestador'] = $temporal->getPreIdentificacionPrestador();
				//$datos[$pos]['pre_estado']=$temporal->getPreEstado();
				//$datos[$pos]['pre_ser_acueducto'] = $temporal->getPreSerAcueducto();
				//$datos[$pos]['pre_ser_alcantarillado'] =  $temporal->getPreSerAlcantarillado();
				//$datos[$pos]['pre_ser_aseo'] =  $temporal->getPreSerAseo();
				
				$pos++;
			}
			
			if($pos>0){
				$jsonresult = json_encode($datos);
				$salida = '({"total":"'.$numero_prestadores.'","results":'.$jsonresult.'})';
			}
			else {
				$salida =  '({"total":"0", "results":""})';
			}
		}
		catch (Exception $excepcion)
		{
			$salida =  '({"total":"0", "results":"", mensaje:"Hubo una excepcion"})';
		}
		return $this->renderText($salida);
	}
	
	protected function obtenerPerfilId($per_nombre)
	{
		try{
		$conexion = new Criteria();
		$conexion->add(PerfilPeer::PER_NOMBRE,$per_nombre);
		$perfil = PerfilPeer::doSelectOne($conexion);
		return $perfil->getPerId(); 
		}
		catch (Exception $excepcion)
		{
		return 0;
		}
		
	}

	
	 /**
  *@author:maryit sanchez
  *@date:30 de julio de 2010
  *Este metodo retorna un listado de los usuarios habilitados con perfil prestador  del sistema
  */	  
	public function executeListarUsuarios()
	{ 
		$salida = '({"total":"0", "results":""})';
		try{
			$conexion = new Criteria();
			$conexion->add(UsuarioPeer::USU_ESTADO,'habilitado');
			$conexion->add(UsuarioPeer::USU_PER_ID,$this->obtenerPerfilId('prestador'));
			$numero_usuarios = UsuarioPeer::doCount($conexion);
			$usuarios = UsuarioPeer::doSelect($conexion);
			$pos = 0;
			$datos;
			
			foreach ($usuarios As $temporal)
			{
				$datos[$pos]['usu_id']=$temporal->getUsuId();
				$datos[$pos]['usu_login']=$temporal->getUsuLogin();
				$pos++;
			}
			
			if($pos>0){
				$jsonresult = json_encode($datos);
				$salida = '({"total":"'.$numero_usuarios.'","results":'.$jsonresult.'})';
			}
		}
		catch (Exception $excepcion)
		{
			$salida = '({"total":"0", "results":"", mensaje:"Hubo una excepcion"})';
		}
		return $this->renderText($salida);
	}

		 /**
  *@author:maryit sanchez
  *@date:30 de julio de 2010
  *Este metodo retorna un listado de los rangos  del sistema
  */	  
	public function executeListarRangos()
	{ 
		$salida = '({"total":"0", "results":""})';
		try{
			$conexion = new Criteria();
			$numero_rangos = RangoPeer::doCount($conexion);
			$rangos = RangoPeer::doSelect($conexion);
			$pos = 0;
			$datos;
			
			foreach ($rangos As $temporal)
			{
				$datos[$pos]['ran_id']=$temporal->getRanId();
				$datos[$pos]['ran_tipo']=$temporal->getRanTipo();
				$pos++;
			}
			
			if($pos>0){
				$jsonresult = json_encode($datos);
				$salida = '({"total":"'.$numero_rangos.'","results":'.$jsonresult.'})';
			}
		}
		catch (Exception $excepcion)
		{
			$salida = '({"total":"0", "results":"", mensaje:"Hubo una excepcion"})';
		}
		return $this->renderText($salida);
	}
}
