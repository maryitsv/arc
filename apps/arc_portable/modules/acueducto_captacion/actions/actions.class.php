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

		$criteria = new Criteria();
		$criteria->add(TecnicooperativoPeer::TOP_PPS_ANIO, $pps_anio);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
		$tecnicoOperativo = TecnicooperativoPeer::doSelectOne($criteria);

		$data = array();

		if($tecnicoOperativo) {
			$criteria = new Criteria();
			$criteria->add(CaptacionPeer::CAPT_TOP_ID, $tecnicoOperativo->getTopId());
			$captaciones = CaptacionPeer::doSelect($criteria);

			foreach($captaciones as $captacion) {
				if($captacion->getCaptFuenteSuperficial()==1) {
					$campos = array();
					$campos['capt_id'] = $captacion->getCaptId();
					$campos['capt_tipo_de_fondo'] = $captacion->getCaptTipoDeFondo();
					$campos['capt_tipo_lateral'] = $captacion->getCaptTipoLateral();
					$campos['capt_tipo_lecho_filtrante'] = $captacion->getCaptTipoLechoFiltrante();
					$campos['capt_tipo_trincho_represa'] = $captacion->getCaptTipoTrinchoRepresa();
					$campos['capt_estado_estructura_id'] = $captacion->getCaptEstadoEstructuraId();
					$data[] = $campos;
				}
			}
		}

		$result['data'] = $data;

		return $this->renderText(json_encode($result));
	}

	public function executeObtenerDatosFuentesSubterraneas() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$criteria = new Criteria();
		$criteria->add(TecnicooperativoPeer::TOP_PPS_ANIO, $pps_anio);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
		$tecnicoOperativo = TecnicooperativoPeer::doSelectOne($criteria);

		$data = array();

		if($tecnicoOperativo) {
			$criteria = new Criteria();
			$criteria->add(CaptacionPeer::CAPT_TOP_ID, $tecnicoOperativo->getTopId());
			$captaciones = CaptacionPeer::doSelect($criteria);

			foreach($captaciones as $captacion) {
				if($captacion->getCaptFuenteSuperficial()==0) {
					$campos = array();
					$campos['capt_id'] = $captacion->getCaptId();
					$campos['capt_estado_pozo_id'] = $captacion->getCaptEstadoPozoId();
					$campos['capt_estado_bomba_id'] = $captacion->getCaptEstadoBombaId();
					$campos['capt_fuente_energia_id'] = $captacion->getCaptFuenteEnergiaId();
					$data[] = $campos;
				}
			}
		}

		$result['data'] = $data;

		return $this->renderText(json_encode($result));
	}

	public function executeAdicionarFuenteSuperficial() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$criteria = new Criteria();
		$criteria->add(TecnicooperativoPeer::TOP_PPS_ANIO, $pps_anio);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
		$tecnicoOperativo = TecnicooperativoPeer::doSelectOne($criteria);

		if($tecnicoOperativo) {
			$captacion = new Captacion();
			$captacion->setTecnicooperativo($tecnicoOperativo);
			$captacion->setCaptTipoDeFondo(0);
			$captacion->setCaptTipoLateral(0);
			$captacion->setCaptTipoLechoFiltrante(0);
			$captacion->setCaptTipoTrinchoRepresa(0);
			$captacion->setCaptEstadoEstructuraId(1);
			$captacion->setCaptFuenteSuperficial(1);

			$captacion->setCaptEstadoPozoId(1);
			$captacion->setCaptEstadoBombaId(1);
			$captacion->setCaptFuenteEnergiaId(1);

			$captacion->save();
		}

		return $this->renderText('Fuente superficial adicionada');
	}

	public function executeActualizarFuenteSuperficial(sfWebRequest $request) {
		$fuenteSuperficial = CaptacionPeer::retrieveByPK($request->getParameter('capt_id'));
		$fuenteSuperficial->setCaptTipoDeFondo($request->getParameter('capt_tipo_de_fondo'));
		$fuenteSuperficial->setCaptTipoLateral($request->getParameter('capt_tipo_lateral'));
		$fuenteSuperficial->setCaptTipoLechoFiltrante($request->getParameter('capt_tipo_lecho_filtrante'));
		$fuenteSuperficial->setCaptTipoTrinchoRepresa($request->getParameter('capt_tipo_trincho_represa'));
		$fuenteSuperficial->setCaptEstadoEstructuraId($request->getParameter('capt_estado_estructura_id'));
		$fuenteSuperficial->save();
		return sfView::NONE;
	}

	public function executeActualizarFuenteSubterranea(sfWebRequest $request) {
		$fuenteSuperficial = CaptacionPeer::retrieveByPK($request->getParameter('capt_id'));
		$fuenteSuperficial->setCaptEstadoPozoId($request->getParameter('capt_estado_pozo_id'));
		$fuenteSuperficial->setCaptEstadoBombaId($request->getParameter('capt_estado_bomba_id'));
		$fuenteSuperficial->setCaptFuenteEnergiaId($request->getParameter('capt_fuente_energia_id'));
		$fuenteSuperficial->save();
		return sfView::NONE;
	}

	public function executeEliminarFuenteSuperficial(sfWebRequest $request) {
		$fuenteSuperficial = CaptacionPeer::retrieveByPK($request->getParameter('capt_id'));
		$fuenteSuperficial->delete();
		return sfView::NONE;
	}
}
