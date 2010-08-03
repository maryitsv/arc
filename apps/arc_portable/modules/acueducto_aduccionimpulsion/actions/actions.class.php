<?php

/**
 * acueducto_aduccionimpulsion actions.
 *
 * @package    arc
 * @subpackage acueducto_aduccionimpulsion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_aduccionimpulsionActions extends sfActions
{
	/**
	 * Executes index action
	 *
	 * @param sfRequest $request A request object
	 */
	public function executeIndex(sfWebRequest $request)
	{
			
	}

	public function executeIndex2(sfWebRequest $request)
	{
			
	}

	//	public static function crearCanal($topId, $tipoCanalId, $materialCanalId, $longitud, $diametro, $edad) {
	//		$criteria = new Criteria();
	//		$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $topId);
	//		$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, $tipoCanalId);
	//		$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, $materialCanalId);
	//		$canal = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
	//		if(!$canal) {
	//			$canal = new Tecnicooperativaaduccionimpulsionacueducto();
	//			$canal->setToaiTopId($topId);
	//			$canal->setToaiTipoCanalId($tipoCanalId);
	//			$canal->setToaiMaterialCanalId($materialCanalId);
	//		}
	//		$canal->setToaiLongitud($longitud);
	//		$canal->setToaiDiametro($diametro);
	//		$canal->setToaiEdad($edad);
	//		$canal->save();
	//	}
	//
	//	public static function eliminarCanales($topId, $tipoCanalId) {
	//		$criteria = new Criteria();
	//		$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $topId);
	//		$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, $tipoCanalId);
	//		$canales = TecnicooperativaaduccionimpulsionacueductoPeer::doSelect($criteria);
	//		if(count($canales)>0) {
	//			foreach($canales as $canal) {
	//				$canal->delete();
	//			}
	//		}
	//	}

	public function executeSubirDatos1(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('toai_canal_abierto')) {
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 1, 1, $request->getParameter('toai_canal_abierto_tierra_longitud'), null, $request->getParameter('toai_canal_abierto_tierra_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 1, 2, $request->getParameter('toai_canal_abierto_concreto_longitud'), null, $request->getParameter('toai_canal_abierto_concreto_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 1, 3, $request->getParameter('toai_canal_abierto_mamposteria_longitud'), null, $request->getParameter('toai_canal_abierto_mamposteria_edad'));
		}
		else {
			TecnicooperativaaduccionimpulsionacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 1);
		}

		if($request->hasParameter('toai_canal_cubierto')) {
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 2, 1, $request->getParameter('toai_canal_cubierto_tierra_longitud'), null, $request->getParameter('toai_canal_cubierto_tierra_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 2, 2, $request->getParameter('toai_canal_cubierto_concreto_longitud'), null, $request->getParameter('toai_canal_cubierto_concreto_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 2, 3, $request->getParameter('toai_canal_cubierto_mamposteria_longitud'), null, $request->getParameter('toai_canal_cubierto_mamposteria_edad'));
		}
		else {
			TecnicooperativaaduccionimpulsionacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 2);
		}

		return sfView::NONE;
	}

	public function executeSubirDatos2(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('toai_tuberia')) {
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 4, $request->getParameter('toai_tuberia_asbesto_cemento_longitud'), $request->getParameter('toai_tuberia_asbesto_cemento_diametro'), $request->getParameter('toai_tuberia_asbesto_cemento_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 5, $request->getParameter('toai_tuberia_hierro_ductil_longitud'), $request->getParameter('toai_tuberia_hierro_ductil_diametro'), $request->getParameter('toai_tuberia_hierro_ductil_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 2, $request->getParameter('toai_tuberia_concreto_longitud'), $request->getParameter('toai_tuberia_concreto_diametro'), $request->getParameter('toai_tuberia_concreto_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 6, $request->getParameter('toai_tuberia_pvc_longitud'), $request->getParameter('toai_tuberia_pvc_diametro'), $request->getParameter('toai_tuberia_pvc_edad'));
		}
		else {
			TecnicooperativaaduccionimpulsionacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 3);
		}

		if($request->hasParameter('toai_manguera')) {
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 4, 7, $request->getParameter('toai_manguera_polietileno_hd_longitud'), $request->getParameter('toai_manguera_polietileno_hd_diametro'), $request->getParameter('toai_manguera_polietileno_hd_edad'));
			TecnicooperativaaduccionimpulsionacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 4, 8, $request->getParameter('toai_manguera_polietileno_ld_longitud'), $request->getParameter('toai_manguera_polietileno_ld_diametro'), $request->getParameter('toai_manguera_polietileno_ld_edad'));
		}
		else {
			TecnicooperativaaduccionimpulsionacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 4);
		}

		return sfView::NONE;
	}


	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$datos = array();

		if($tecnicoOperativo) {
			$campos = array();

			$canalAbierto = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1);

			if($canalAbierto) {
				$campos['toai_canal_abierto'] = 1;

				$enTierra = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1, 1);
				if($enTierra){
					$campos['toai_canal_abierto_tierra_longitud'] = $enTierra->getToaiLongitud();
					$campos['toai_canal_abierto_tierra_edad'] = $enTierra->getToaiEdad();
				}

				$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1, 2);
				if($concreto){
					$campos['toai_canal_abierto_concreto_longitud'] = $concreto->getToaiLongitud();
					$campos['toai_canal_abierto_concreto_edad'] = $concreto->getToaiEdad();
				}

				$mamposteria = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1, 3);
				if($mamposteria){
					$campos['toai_canal_abierto_mamposteria_longitud'] = $mamposteria->getToaiLongitud();
					$campos['toai_canal_abierto_mamposteria_edad'] = $mamposteria->getToaiEdad();
				}
			}

			$canalcubierto = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2);

			if($canalcubierto) {
				$campos['toai_canal_cubierto'] = 1;

				$enTierra = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2, 1);
				if($enTierra){
					$campos['toai_canal_cubierto_tierra_longitud'] = $enTierra->getToaiLongitud();
					$campos['toai_canal_cubierto_tierra_edad'] = $enTierra->getToaiEdad();
				}

				$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2, 2);
				if($concreto){
					$campos['toai_canal_cubierto_concreto_longitud'] = $concreto->getToaiLongitud();
					$campos['toai_canal_cubierto_concreto_edad'] = $concreto->getToaiEdad();
				}

				$mamposteria = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2, 3);
				if($mamposteria){
					$campos['toai_canal_cubierto_mamposteria_longitud'] = $mamposteria->getToaiLongitud();
					$campos['toai_canal_cubierto_mamposteria_edad'] = $mamposteria->getToaiEdad();
				}
			}

			$tuberia = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3);

			if($tuberia) {
				$campos['toai_tuberia'] = 1;

				$asbestoCemento = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 4);
				if($asbestoCemento){
					$campos['toai_tuberia_asbesto_cemento_longitud'] = $asbestoCemento->getToaiLongitud();
					$campos['toai_tuberia_asbesto_cemento_diametro'] = $asbestoCemento->getToaiDiametro();
					$campos['toai_tuberia_asbesto_cemento_edad'] = $asbestoCemento->getToaiEdad();
				}

				$hierroDuctil = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 5);
				if($hierroDuctil){
					$campos['toai_tuberia_hierro_ductil_longitud'] = $hierroDuctil->getToaiLongitud();
					$campos['toai_tuberia_hierro_ductil_diametro'] = $hierroDuctil->getToaiDiametro();
					$campos['toai_tuberia_hierro_ductil_edad'] = $hierroDuctil->getToaiEdad();
				}

				$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 2);
				if($concreto){
					$campos['toai_tuberia_concreto_longitud'] = $concreto->getToaiLongitud();
					$campos['toai_tuberia_concreto_diametro'] = $concreto->getToaiDiametro();
					$campos['toai_tuberia_concreto_edad'] = $concreto->getToaiEdad();
				}

				$pvc = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 6);
				if($pvc){
					$campos['toai_tuberia_pvc_longitud'] = $pvc->getToaiLongitud();
					$campos['toai_tuberia_pvc_diametro'] = $pvc->getToaiDiametro();
					$campos['toai_tuberia_pvc_edad'] = $pvc->getToaiEdad();
				}
			}

			$manguera = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4);
			if($manguera) {
				$campos['toai_manguera'] = 1;

				$polietilenoHd = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4, 7);
				if($polietilenoHd){
					$campos['toai_manguera_polietileno_hd_longitud'] = $polietilenoHd->getToaiLongitud();
					$campos['toai_manguera_polietileno_hd_diametro'] = $polietilenoHd->getToaiDiametro();
					$campos['toai_manguera_polietileno_hd_edad'] = $polietilenoHd->getToaiEdad();
				}

				$polietilenoLd = TecnicooperativaaduccionimpulsionacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4, 8);
				if($polietilenoLd){
					$campos['toai_manguera_polietileno_ld_longitud'] = $polietilenoLd->getToaiLongitud();
					$campos['toai_manguera_polietileno_ld_diametro'] = $polietilenoLd->getToaiDiametro();
					$campos['toai_manguera_polietileno_ld_edad'] = $polietilenoLd->getToaiEdad();
				}
			}

			$datos[] = $campos;
		}

		$result = array();
		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
