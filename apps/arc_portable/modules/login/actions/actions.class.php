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
		
		if(!$usuario){			
	
			return $this->renderText("{success: false, errors: { reason: 'el usuario o clave incorrectas' }}");
			}
		else {
						
			$this->getUser()->setAttribute('usu_id', $usuario->getUsuId());
			$this->getUser()->setAttribute('usu_login', $usuario->getUsuLogin());
			$this->getUser()->setAttribute('usu_per_id', $usuario->getUsuPerId());
			//eto no va aqui		
			//$this->getUser()->setAttribute('pps_anio','2010');
		//	$this->getUser()->setAttribute('pps_pre_id','5');
			//$this->getUser()->setAttribute('pps_pre_id', 1);
			
			$this->getUser()->setAuthenticated(true);
			
					
			return $this->renderText("{success:true,mensaje:'".$usuario->getPerfil()->getPerNombre()."'}");
		}

  }


  
  
}
