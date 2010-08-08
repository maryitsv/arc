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
		return sfView::NONE;
	}
}
