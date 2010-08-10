<?php

/**
 * acueducto_reddistribucion actions.
 *
 * @package    arc
 * @subpackage acueducto_reddistribucion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_reddistribucionActions extends sfActions
{
	/**
	 * Executes index action
	 *
	 * @param sfRequest $request A request object
	 */
	public function executeIndex(sfWebRequest $request)
	{
			
	}

	public function executeSubirDatos1(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('tord_redes_primarias')) {
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 1, 1, $request->getParameter('tord_redes_primarias_asbesto_cemento_diametro'), $request->getParameter('tord_redes_primarias_asbesto_cemento_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 1, 2, $request->getParameter('tord_redes_primarias_hierro_ductil_diametro'), $request->getParameter('tord_redes_primarias_hierro_ductil_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 1, 3, $request->getParameter('tord_redes_primarias_concreto_diametro'), $request->getParameter('tord_redes_primarias_concreto_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 1, 4, $request->getParameter('tord_redes_primarias_pvc_diametro'), $request->getParameter('tord_redes_primarias_pvc_edad'));
		}
		else {
			TecnicooperativareddistribucionacueductoPeer::eliminarRedes($tecnicoOperativo->getTopId(), 1);
		}

		if($request->hasParameter('tord_redes_secundarias')) {
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 2, 1, $request->getParameter('tord_redes_secundarias_asbesto_cemento_diametro'), $request->getParameter('tord_redes_secundarias_asbesto_cemento_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 2, 2, $request->getParameter('tord_redes_secundarias_hierro_ductil_diametro'), $request->getParameter('tord_redes_secundarias_hierro_ductil_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 2, 3, $request->getParameter('tord_redes_secundarias_concreto_diametro'), $request->getParameter('tord_redes_secundarias_concreto_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 2, 4, $request->getParameter('tord_redes_secundarias_pvc_diametro'), $request->getParameter('tord_redes_secundarias_pvc_edad'));
		}
		else {
			TecnicooperativareddistribucionacueductoPeer::eliminarRedes($tecnicoOperativo->getTopId(), 2);
		}

		return sfView::NONE;
	}

	public function executeSubirDatos2(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('tord_redes_terciarias')) {
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 3, 1, $request->getParameter('tord_redes_terciarias_asbesto_cemento_diametro'), $request->getParameter('tord_redes_terciarias_asbesto_cemento_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 3, 2, $request->getParameter('tord_redes_terciarias_hierro_ductil_diametro'), $request->getParameter('tord_redes_terciarias_hierro_ductil_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 3, 3, $request->getParameter('tord_redes_terciarias_concreto_diametro'), $request->getParameter('tord_redes_terciarias_concreto_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 3, 4, $request->getParameter('tord_redes_terciarias_pvc_diametro'), $request->getParameter('tord_redes_terciarias_pvc_edad'));
		}
		else {
			TecnicooperativareddistribucionacueductoPeer::eliminarRedes($tecnicoOperativo->getTopId(), 3);
		}

		if($request->hasParameter('tord_manguera')) {
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 4, 5, $request->getParameter('tord_manguera_polietileno_hd_diametro'), $request->getParameter('tord_manguera_polietileno_hd_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRed($tecnicoOperativo->getTopId(), 4, 6, $request->getParameter('tord_manguera_polietileno_ld_diametro'), $request->getParameter('tord_manguera_polietileno_ld_edad'));
			TecnicooperativareddistribucionacueductoPeer::crearRedOtra($tecnicoOperativo->getTopId(), 4, 7, $request->getParameter('tord_manguera_otro_diametro'), $request->getParameter('tord_manguera_otro_edad'), 'Manguera', $request->getParameter('tord_manguera_otro_nombre'));
		}
		else {
			TecnicooperativareddistribucionacueductoPeer::eliminarRedes($tecnicoOperativo->getTopId(), 4);
		}

		return sfView::NONE;
	}

	public function executeSubirDatos3(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('tord_otro')) {
			TecnicooperativareddistribucionacueductoPeer::crearRedOtra($tecnicoOperativo->getTopId(), 5, 8, $request->getParameter('tord_otro_otro1_diametro'), $request->getParameter('tord_otro_otro1_edad'),  $request->getParameter('tord_otro_tipo_nombre'), $request->getParameter('tord_otro_otro1_nombre'));
			TecnicooperativareddistribucionacueductoPeer::crearRedOtra($tecnicoOperativo->getTopId(), 5, 9, $request->getParameter('tord_otro_otro2_diametro'), $request->getParameter('tord_otro_otro2_edad'),  $request->getParameter('tord_otro_tipo_nombre'), $request->getParameter('tord_otro_otro2_nombre'));
			TecnicooperativareddistribucionacueductoPeer::crearRedOtra($tecnicoOperativo->getTopId(), 5, 10, $request->getParameter('tord_otro_otro3_diametro'), $request->getParameter('tord_otro_otro3_edad'), $request->getParameter('tord_otro_tipo_nombre'), $request->getParameter('tord_otro_otro3_nombre'));
		}
		else {
			TecnicooperativareddistribucionacueductoPeer::eliminarRedes($tecnicoOperativo->getTopId(), 5);
		}

		if($request->hasParameter('toa_planos_actualizados')) {
			$acueducto = TecnicooperativaacueductoPeer::consultarTecnicoOperativoAcueducto($pps_anio, $pps_pre_id, $pps_ser_id);
			$acueducto->setToaPlanosActualizados($request->getParameter('toa_planos_actualizados'));
			$acueducto->setToaAnoActualizacionPlanos($request->getParameter('toa_ano_actualizacion_planos'));
			$acueducto->save();
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

			$redes_primarias = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 1);

			if($redes_primarias) {
				$campos['tord_redes_primarias'] = 1;

				$asbestoCemento = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 1, 1);
				if($asbestoCemento){
					$campos['tord_redes_primarias_asbesto_cemento_diametro'] = $asbestoCemento->getTordMaterialDiametro();
					$campos['tord_redes_primarias_asbesto_cemento_edad'] = $asbestoCemento->getTordMaterialEdad();
				}

				$hierroDuctil = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 1, 2);
				if($hierroDuctil){
					$campos['tord_redes_primarias_hierro_ductil_diametro'] = $hierroDuctil->getTordMaterialDiametro();
					$campos['tord_redes_primarias_hierro_ductil_edad'] = $hierroDuctil->getTordMaterialEdad();
				}

				$concreto = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 1, 3);
				if($concreto){
					$campos['tord_redes_primarias_concreto_diametro'] = $concreto->getTordMaterialDiametro();
					$campos['tord_redes_primarias_concreto_edad'] = $concreto->getTordMaterialEdad();
				}

				$pvc = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 1, 4);
				if($pvc){
					$campos['tord_redes_primarias_pvc_diametro'] = $pvc->getTordMaterialDiametro();
					$campos['tord_redes_primarias_pvc_edad'] = $pvc->getTordMaterialEdad();
				}
			}

			$redes_secundarias = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 2);

			if($redes_secundarias) {
				$campos['tord_redes_secundarias'] = 1;

				$asbestoCemento = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 2, 1);
				if($asbestoCemento){
					$campos['tord_redes_secundarias_asbesto_cemento_diametro'] = $asbestoCemento->getTordMaterialDiametro();
					$campos['tord_redes_secundarias_asbesto_cemento_edad'] = $asbestoCemento->getTordMaterialEdad();
				}

				$hierroDuctil = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 2, 2);
				if($hierroDuctil){
					$campos['tord_redes_secundarias_hierro_ductil_diametro'] = $hierroDuctil->getTordMaterialDiametro();
					$campos['tord_redes_secundarias_hierro_ductil_edad'] = $hierroDuctil->getTordMaterialEdad();
				}

				$concreto = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 2, 3);
				if($concreto){
					$campos['tord_redes_secundarias_concreto_diametro'] = $concreto->getTordMaterialDiametro();
					$campos['tord_redes_secundarias_concreto_edad'] = $concreto->getTordMaterialEdad();
				}

				$pvc = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 2, 4);
				if($pvc){
					$campos['tord_redes_secundarias_pvc_diametro'] = $pvc->getTordMaterialDiametro();
					$campos['tord_redes_secundarias_pvc_edad'] = $pvc->getTordMaterialEdad();
				}
			}

			$redes_terciarias = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 3);

			if($redes_terciarias) {
				$campos['tord_redes_terciarias'] = 1;

				$asbestoCemento = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 3, 1);
				if($asbestoCemento){
					$campos['tord_redes_terciarias_asbesto_cemento_diametro'] = $asbestoCemento->getTordMaterialDiametro();
					$campos['tord_redes_terciarias_asbesto_cemento_edad'] = $asbestoCemento->getTordMaterialEdad();
				}

				$hierroDuctil = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 3, 2);
				if($hierroDuctil){
					$campos['tord_redes_terciarias_hierro_ductil_diametro'] = $hierroDuctil->getTordMaterialDiametro();
					$campos['tord_redes_terciarias_hierro_ductil_edad'] = $hierroDuctil->getTordMaterialEdad();
				}

				$concreto = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 3, 3);
				if($concreto){
					$campos['tord_redes_terciarias_concreto_diametro'] = $concreto->getTordMaterialDiametro();
					$campos['tord_redes_terciarias_concreto_edad'] = $concreto->getTordMaterialEdad();
				}

				$pvc = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 3, 4);
				if($pvc){
					$campos['tord_redes_terciarias_pvc_diametro'] = $pvc->getTordMaterialDiametro();
					$campos['tord_redes_terciarias_pvc_edad'] = $pvc->getTordMaterialEdad();
				}
			}

			$manguera = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 4);

			if($manguera) {
				$campos['tord_manguera'] = 1;

				$polietilenoHd = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 4, 5);
				if($polietilenoHd){
					$campos['tord_manguera_polietileno_hd_diametro'] = $polietilenoHd->getTordMaterialDiametro();
					$campos['tord_manguera_polietileno_hd_edad'] = $polietilenoHd->getTordMaterialEdad();
				}

				$polietilenoLd = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 4, 6);
				if($polietilenoLd){
					$campos['tord_manguera_polietileno_ld_diametro'] = $polietilenoLd->getTordMaterialDiametro();
					$campos['tord_manguera_polietileno_ld_edad'] = $polietilenoLd->getTordMaterialEdad();
				}

				$otro = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 4, 7);
				if($otro){
					$campos['tord_manguera_otro_diametro'] = $otro->getTordMaterialDiametro();
					$campos['tord_manguera_otro_edad'] = $otro->getTordMaterialEdad();
					$campos['tord_manguera_otro_nombre'] = $otro->getTordNombreMaterial();
				}
			}

			$otro = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 5);
			if($otro) {
				$campos['tord_otro'] = 1;

				$otro1 = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 5, 8);
				if($otro1){
					$campos['tord_otro_otro1_diametro'] = $otro1->getTordMaterialDiametro();
					$campos['tord_otro_otro1_edad'] =     $otro1->getTordMaterialEdad();
					$campos['tord_otro_otro1_nombre'] =   $otro1->getTordNombreMaterial();
					$campos['tord_otro_tipo_nombre'] = $otro1->getTordNombreCanal();
				}

				$otro2 = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 5, 9);
				if($otro2){
					$campos['tord_otro_otro2_diametro'] = $otro2->getTordMaterialDiametro();
					$campos['tord_otro_otro2_edad'] =     $otro2->getTordMaterialEdad();
					$campos['tord_otro_otro2_nombre'] =   $otro2->getTordNombreMaterial();
				}

				$otro3 = TecnicooperativareddistribucionacueductoPeer::consultarRedSiExiste($tecnicoOperativo->getTopId(), 5, 10);
				if($otro3){
					$campos['tord_otro_otro3_diametro'] = $otro3->getTordMaterialDiametro();
					$campos['tord_otro_otro3_edad'] =     $otro3->getTordMaterialEdad();
					$campos['tord_otro_otro3_nombre'] =   $otro3->getTordNombreMaterial();
				}
			}

			$acueducto = TecnicooperativaacueductoPeer::consultarTecnicoOperativoAcueductoSiExiste($pps_anio, $pps_pre_id, $pps_ser_id);
			if($acueducto) {
				$campos['toa_planos_actualizados'] = $acueducto->getToaPlanosActualizados();
				if($campos['toa_planos_actualizados']) {
					$campos['toa_ano_actualizacion_planos'] = $acueducto->getToaAnoActualizacionPlanos();
				}
			}

			$datos[] = $campos;
		}

		$result = array();
		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
