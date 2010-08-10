<?php

/**
 * login actions.
 *
 * @package    arc
 * @subpackage login
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class loginActions extends sfActions
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
  
  
  public function executeAutenticar()
  {
		
		$conexion = new Criteria();
		$conexion->add(UsuarioPeer::USU_ESTADO,'habilitado');
		$conexion->add(UsuarioPeer::USU_LOGIN,$this->getRequestParameter('usu_login'));
		$conexion->add(UsuarioPeer::USU_CLAVE,$this->getRequestParameter('usu_clave_encriptada'));
		$usuario = UsuarioPeer::doSelectOne($conexion);
		
		if(!$usuario)
		{			
	
			return $this->renderText("{success: false, errors: { reason: 'el usuario o clave incorrectas' }}");
		}
		else
		{
						
			$this->getUser()->setAttribute('usu_id', $usuario->getUsuId());
			$this->getUser()->setAttribute('usu_login', $usuario->getUsuLogin());
			$this->getUser()->setAttribute('usu_per_id', $usuario->getUsuPerId());
			
			$perfil=$usuario->getPerfil()->getPerNombre();

			if($perfil == 'prestador')
			{
				if($this->obtenerPrestador($usuario->getUsuId()))
				{
					$this->getUser()->setAuthenticated(true);
					return $this->renderText("{success:true,mensaje:'".$perfil."'}");
				}
				else
				{
					return $this->renderText("{success: false, errors: { reason: 'el usuario o clave incorrectas' }}");
				}
			}
			if($perfil == 'administrador')
			{
				return $this->renderText("{success:true,mensaje:'".$perfil."'}");
			}

		}
  }

	public function obtenerPrestador($usu_id)
	{
		
		try
		{
			//$usu_id = $this->getRequestParameter('usu_id');
			$conexion = new Criteria();
			$conexion->add(PrestadorPeer::PRE_USU_ID, $usu_id);
			$prestador = PrestadorPeer::doSelectOne($conexion);
		//	echo($prestador->getPreId());
			if($prestador)
			{
				$this->getUser()->setAttribute('pps_pre_id', $prestador->getPreId()); 
				//$prestador->getPreRanId(); rango
				//$prestador->getPreNombrePrestador(); nombre
				//echo($prestador->getPreId());
			} 
			else 
			{
				return false;
			}
		}
		catch (Exception $excepcion)
		{
			return false;
			$salida =  "({success: false, errors: { reason: 'Hubo una excepcion'}})";
		}
		return true;
	}

	/**
	* Este metodo se encarga de sacar al usuario del sistema
	*/  
	public function executeDesautenticar()
	{
		if($this->getUser()->isAuthenticated())
		{
			$this->getUser()->setAuthenticated(false);
			$this->getUser()->getAttributeHolder()->clear();
		}    
		return $this->renderText("{success: true, mensaje: 'El usuario ha terminado'}");
	}

  
  
}
