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
  	    
		$task = '';
		
		$salida	='';
		$task = $this->getRequestParameter('task');

		switch($task){
			case "LISTARESTRATOS":
				$salida = $this->listarEstratos();
				break;

			case "CREARANALISISCOBERTURA":
			    $servicio=$this->getRequestParameter('servicio');
				$salida = $this->crearAnalisisCoberturaAcueductoAlcantarillado($servicio);
				break;
	
			default:
				$salida =  "({failure:true})";
				break;
		}
		return $this->renderText($salida);
    }

  /**
  *@author:maryit sanchez
  *@date:13 de julio de 2010
  *Este metodo retorna un listado de los estratos socioeconomicos
  */	
	protected function listarEstratos()
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
			  $datos[$fila]['est_residencial'] = $estrato->getEstResidencial();
			  
			  $fila++;
			}

			if($fila>0){
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			}
		}catch (Exception $excepcion)
		{
			return $salida;
		}		
		
		return $salida;
	}  

	protected function crearAnalisisCoberturaAcueductoAlcantarillado($servicio)
	{
		$com_id=1;//'obtener de la sesion';
		$salida	='';		

		try
		{/*
		$analisisCobertura = new Analisiscoberturaacueductoalcantarillado();			  
		$analisisCobertura->setAcoCatastroUsuarios($this->getRequestParameter($servicio+'aco_catastro_usuarios'));
		$analisisCobertura->setAcoAnioElaImplCatastro($this->getRequestParameter($servicio+'aco_anio_ela_impl_catastro_usu'));
		$analisisCobertura->setAcoNumPrediosArea($this->getRequestParameter($servicio+'aco_num_predios_area'));
		$analisisCobertura->setAcoNumPrediosConecSistema($this->getRequestParameter($servicio+'aco_num_predios_conec_sistema'));
		$analisisCobertura->setAcoEstraSocecoAdopMpio($this->getRequestParameter($servicio+'aco_estrat_soceco_adop_mpio'));
		$analisisCobertura->setAcoEstraSocecoAdopMpioJus($this->getRequestParameter($servicio+'aco_estra_soceco_adop_mpio_jus'));
		$analisisCobertura->setAcoNumSusServicioOficial($this->getRequestParameter($servicio+'aco_num_sus_servicio_oficial'));
		$analisisCobertura->setAcoTarifEstrServicioOficial($this->getRequestParameter($servicio+'aco_tarif_estr_servicio_oficial'));

	//	$analisisCobertura->save();*/
		$salida = "({success: true, mensaje:'El Modulo fue creado exitosamente'})";
		}
		catch (Exception $excepcion)
		{
		 $salida = "({success: false, errors: { reason: 'Hubo un problema creando en analisis de cobertura'}})";
		 return $salida;
		}
		
		return $salida;
	}
  
}
