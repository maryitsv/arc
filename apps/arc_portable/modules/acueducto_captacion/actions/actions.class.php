<?php

/**
 * acueducto_captacion actions.
 *
 * @package    arc
 * @subpackage acueducto_captacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_captacionActions extends sfActions
{
	/**
	 * Executes index action
	 *
	 * @param sfRequest $request A request object
	 */
	public function executeIndex(sfWebRequest $request)
	{
			
	}

	public function executeObtenerDatosFuentesSuperficiales() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$data = array();

		$criteria = new Criteria();
		$criteria->add(CaptacionSuperficialPeer::CASP_TOP_ID, $tecnicoOperativo->getTopId());
		$captaciones = CaptacionSuperficialPeer::doSelect($criteria);

		foreach($captaciones as $captacion) {
			$campos = array();
			$campos['casp_id'] = $captacion->getCaspId();
			$campos['casp_tipo_de_fondo'] = $captacion->getCaspTipoDeFondo();
			$campos['casp_tipo_lateral'] = $captacion->getCaspTipoLateral();
			$campos['casp_tipo_lecho_filtrante'] = $captacion->getCaspTipoLechoFiltrante();
			$campos['casp_tipo_trincho_represa'] = $captacion->getCaspTipoTrinchoRepresa();
			$campos['casp_estado_estructura_id'] = $captacion->getCaspEstadoEstructuraId();
			$data[] = $campos;
		}

		$result['data'] = $data;

		return $this->renderText(json_encode($result));
	}

	public function executeAdicionarFuenteSuperficial() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$captacion = new CaptacionSuperficial();
		$captacion->setTecnicooperativo($tecnicoOperativo);
		$captacion->setCaspTipoDeFondo(0);
		$captacion->setCaspTipoLateral(0);
		$captacion->setCaspTipoLechoFiltrante(0);
		$captacion->setCaspTipoTrinchoRepresa(0);
		$captacion->setCaspEstadoEstructuraId(1);

		$captacion->save();

		return sfView::NONE;
	}

	public function executeActualizarFuenteSuperficial(sfWebRequest $request) {
		$fuenteSuperficial = CaptacionSuperficialPeer::retrieveByPK($request->getParameter('casp_id'));
		$fuenteSuperficial->setCaspTipoDeFondo($request->getParameter('casp_tipo_de_fondo'));
		$fuenteSuperficial->setCaspTipoLateral($request->getParameter('casp_tipo_lateral'));
		$fuenteSuperficial->setCaspTipoLechoFiltrante($request->getParameter('casp_tipo_lecho_filtrante'));
		$fuenteSuperficial->setCaspTipoTrinchoRepresa($request->getParameter('casp_tipo_trincho_represa'));
		$fuenteSuperficial->setCaspEstadoEstructuraId($request->getParameter('casp_estado_estructura_id'));
		$fuenteSuperficial->save();
		return sfView::NONE;
	}

	public function executeActualizarFuenteSubterranea(sfWebRequest $request) {
		$fuenteSubterranea = CaptacionSubterraneaPeer::retrieveByPK($request->getParameter('casb_id'));
		$fuenteSubterranea->setCasbEstadoPozoId($request->getParameter('casb_estado_pozo_id'));
		$fuenteSubterranea->setCasbEstadoBombaId($request->getParameter('casb_estado_bomba_id'));
		$fuenteSubterranea->setCasbFuenteEnergiaId($request->getParameter('casb_fuente_energia_id'));
		$fuenteSubterranea->save();
		return sfView::NONE;
	}

	public function executeEliminarFuenteSuperficial(sfWebRequest $request) {
		$fuenteSuperficial = CaptacionSuperficialPeer::retrieveByPK($request->getParameter('casp_id'));
		$fuenteSuperficial->delete();
		return sfView::NONE;
	}

	public function executeObtenerDatosFuentesSubterraneas() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$data = array();

		$criteria = new Criteria();
		$criteria->add(CaptacionSubterraneaPeer::CASB_TOP_ID, $tecnicoOperativo->getTopId());
		$captaciones = CaptacionSubterraneaPeer::doSelect($criteria);

		foreach($captaciones as $captacion) {
			$campos = array();
			$campos['casb_id'] = $captacion->getCasbId();
			$campos['casb_estado_pozo_id'] = $captacion->getCasbEstadoPozoId();
			$campos['casb_estado_bomba_id'] = $captacion->getCasbEstadoBombaId();
			$campos['casb_fuente_energia_id'] = $captacion->getCasbFuenteEnergiaId();
			$data[] = $campos;
		}

		$result['data'] = $data;

		return $this->renderText(json_encode($result));
	}

	public function executeAdicionarFuenteSubterranea() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$captacion = new CaptacionSubterranea();
		$captacion->setTecnicooperativo($tecnicoOperativo);
		$captacion->setCasbEstadoPozoId(1);
		$captacion->setCasbEstadoBombaId(1);
		$captacion->setCasbFuenteEnergiaId(1);

		$captacion->save();

		return sfView::NONE;
	}

	public function executeEliminarFuenteSubterranea(sfWebRequest $request) {
		$fuenteSubterranea = CaptacionSubterraneaPeer::retrieveByPK($request->getParameter('casb_id'));
		$fuenteSubterranea->delete();
		return sfView::NONE;
	}
}
