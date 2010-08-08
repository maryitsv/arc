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

			$datos[] = $campos;
		}

		$result = array();
		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
