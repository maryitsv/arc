<?php

/**
 * usuario actions.
 *
 * @package    arc
 * @subpackage usuario
 * @author     maryit sanchez
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class usuarioActions extends sfActions
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
  *Este metodo controla la accion a la cual va a llamar
  */	  
   public function executeCargar()
	{
		$task = '';
		$salida	='';
		$task = $this->getRequestParameter('task');

		switch($task){
			case "LISTARUSUARIOS":
				$salida = $this->listarUsuarios();
				break;

			case "LISTARPERFILES":
				$salida = $this->listarPerfiles();
				break;

			case "ACTUALIZARUSUARIO":
				$salida = $this->actualizarUsuario();
				break;

			case "CREARUSUARIO":
				$salida = $this->crearUsuario();
				break;

			case "ELIMINARUSUARIO":
				$salida = $this->eliminarUsuario();
				break;
			default:
				$salida =  "({failure:true})";
				break;
		}	
		return $this->renderText($salida);
	}

  /**
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo permite la creacion de usuarios del sistema
  */	  
	protected function crearUsuario()
	{
		try{
			$usu_login = $this->getRequestParameter('usu_login');
			
			$conexion=new Criteria();
			$conexion->add(UsuarioPeer::USU_LOGIN, $usu_login);
			$usuario=UsuarioPeer::doSelectOne($conexion);
			$salida	='';
			if(!$usuario)
			{
				  $usuario = new Usuario();			  
				  $usuario->setUsuLogin($this->getRequestParameter('usu_login'));
				 //-- $usuario->setUsuClave($this->getRequestParameter('usu_clave_encriptada'));
				  $usuario->setUsuClave(md5($this->getRequestParameter('usu_clave')));
				  $usuario->setUsuEstado($this->getRequestParameter('usu_estado'));
				  $usuario->setUsuPerId($this->getRequestParameter('per_id'));
				  try
				  {
					$usuario->save();
				  }
				  catch (Exception $excepcionUsuario)
				  {
					 $salida = "({success: false, errors: { reason: 'Ya existe un usuario con el nombre de usuario igual a: ".$this->getRequestParameter('usu_login')."'}})";
					 return $salida;
				  }
				  $salida = "({success: true, mensaje:'El usuario fue creado exitosamente'})";
			} 
			else {
			  $salida = "({success: false, errors: { reason: 'Ya existe una persona con ese mismo usuario,cambielo e intente denuevo'}})";
			}
			return $salida;
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}	
	}
  /**
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo permite la actualizacion de usuarios del sistema
  */	  
	protected function actualizarUsuario()
	{
		try{
			$usu_id = $this->getRequestParameter('usu_id');
			$conexion = new Criteria();
			$conexion->add(UsuarioPeer::USU_ID, $usu_id);
			$usuario = UsuarioPeer::doSelectOne($conexion);
			$salida = '';

			if($usuario)
			{
				//	$usuario->setUsuLogin($this->getRequestParameter('usu_login'));//no se actualiza por que debe ser unico
					//--$usuario->setUsuClave($this->getRequestParameter('usu_clave_encriptada'));
					if($usuario->getUsuClave() != $this->getRequestParameter('usu_clave')){
						$usuario->setUsuClave(md5($this->getRequestParameter('usu_clave')));
					}
					$usuario->setUsuEstado($this->getRequestParameter('usu_estado'));
					$usuario->setUsuPerId($this->getRequestParameter('per_id'));
					
					try
					{
						$usuario->save();
					}
					catch (Exception $excepcionUsuario)
					{
						$salida = "({success: false, errors: { reason: 'Ya existe un usuario con el nombre de usuario igual a: ".$this->getRequestParameter('Login')."'}})";
						return $salida;
					}
					$salida = "({success: true, mensaje:'El usuario fue actualizado exitosamente'})";
			} else {
				$salida = "({success: false, errors: { reason: 'No se a actualizado el usuario corecctamente'}})";
			}
		
			return $salida;
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
	}
  /**
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo permite la eliminacion de usuarios
  */	  
	protected function eliminarUsuario()
	{
		try{
			$ids_usuarios_codificados = $this->getRequestParameter('ids_usuarios');
			$ids_usuarios = json_decode($ids_usuarios_codificados);
			
			foreach ($ids_usuarios as $usu_id)
			{
				$conexion = new Criteria();
				$conexion->add(UsuarioPeer::USU_ID, $usu_id);
				
				if($conexion)
				{
					$usuariosaeliminar = UsuarioPeer::doSelect($conexion);
					foreach ($usuariosaeliminar as $elemento)
					{
						$elemento->delete();
					}
					$salida = "({success: true, mensaje:'El usuario fue eliminado exitosamente'})";
				}
				else
				{
					$salida = "({success: false, errors: { reason: 'No se pudo eliminar el usuario'}})";
				}		
			}
			return $salida;
		}
		catch (Exception $excepcion)
		{
			return "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
	}

	/**
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo permite obtener el nombre de un perfil de usuario
  */	  
	protected function obetenerNombrePerfil($per_id)
	{
		$perfil = PerfilPeer::retrieveByPK($per_id);
		return $perfil->getPerNombre(); 
	}
	
	  /**
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo retorna un listado de los usuarios del sistema
  */	  
	protected function listarUsuarios()
	{ 
		try{
			$conexion = new Criteria();
			if($this->getRequestParameter('usu_estado'))
			{
			$conexion->add(UsuarioPeer::USU_ESTADO,$this->getRequestParameter('usu_estado'));
			}
			$numero_usuarios = UsuarioPeer::doCount($conexion);
			$conexion->setLimit($this->getRequestParameter('limit'));
			$conexion->setOffset($this->getRequestParameter('start'));
			$usuarios = UsuarioPeer::doSelect($conexion);
			$pos = 0;
			$datos;
			
			foreach ($usuarios As $temporal)
			{
				$datos[$pos]['usu_id']=$temporal->getUsuId();
				$datos[$pos]['usu_per_id']=$temporal->getUsuPerId();
				$datos[$pos]['usu_estado']=$temporal->getUsuEstado();
				$datos[$pos]['usu_login']=$temporal->getUsuLogin();
				$datos[$pos]['usu_clave']=$temporal->getUsuClave();
				$datos[$pos]['per_nombre'] = $this->obetenerNombrePerfil($temporal->getUsuPerId());
				
				$pos++;
			}
			
			if($pos>0){
				$jsonresult = json_encode($datos);
				return '({"total":"'.$numero_usuarios.'","results":'.$jsonresult.'})';
			}
			else {
				return '({"total":"0", "results":""})';
			}
		}
		catch (Exception $excepcion)
		{
			return '({"total":"0", "results":"", mensaje:"Hubo una excepcion"})';
		}
	}

  /**
  *@author:maryit sanchez
  *@date:18 de julio de 2010
  *Este metodo retorna una lista de los diferentes perfiles de usuario
  */	  
	protected function listarPerfiles()
	{
		try{
			$conexion = new Criteria();
			$perfiles = PerfilPeer::doSelect($conexion);
			$pos = 0;
			$datos;
			foreach ($perfiles As $temporal)
			{
				$datos[$pos]['per_id']=''.$temporal->getPerId();
				$datos[$pos]['per_nombre']=$temporal->getPerNombre();
				$pos++;
			}

			if($pos>0){
				$jsonresult = json_encode($datos);
				return '({"total":"'.$pos.'","results":'.$jsonresult.'})';
			}
			else {
				return '({"total":"0", "results":""})';
			}	
		}
		catch (Exception $excepcion)
		{
			return '({"total":"0", "results":"", mensaje:"Hubo una excepcion"})';
		}
	}

}
