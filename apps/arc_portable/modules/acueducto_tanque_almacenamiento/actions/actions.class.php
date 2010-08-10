<?php

/**
 * acueducto_tanque_almacenamiento actions.
 *
 * @package    arc
 * @subpackage acueducto_tanque_almacenamiento
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_tanque_almacenamientoActions extends sfActions
{
	/**
	 * Executes index action
	 *
	 * @param sfRequest $request A request object
	 */
	public function executeIndex(sfWebRequest $request)
	{
			
	}

	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$data = array();

		$criteria = new Criteria();
		$criteria->add(TanquePeer::TAN_TOP_ID, $tecnicoOperativo->getTopId());
		$tanques = TanquePeer::doSelect($criteria);

		foreach($tanques as $tanque) {
			$campos = array();
			$campos['tan_id'] = $tanque->getTanId();
			$campos['tan_volumen'] = $tanque->getTanVolumen();
			$campos['tan_estado_id'] = $tanque->getTanEstadoId();
			$campos['tan_bypass_directo_red'] = $tanque->getTanBypassDirectoRed();
			$campos['tan_presencia_valvula_control'] = $tanque->getTanPresenciaValvulaControl();
			$campos['tan_proteccion_tapa'] = $tanque->getTanProteccionTapa();
			$campos['tan_cerramiento_lote'] = $tanque->getTanCerramientoLote();
			$campos['tan_ventosa_salida'] = $tanque->getTanVentosaSalida();
			$campos['tan_macro_medidor'] = $tanque->getTanMacroMedidor();
			$data[] = $campos;
		}

		$result['data'] = $data;

		return $this->renderText(json_encode($result));
	}

	public function executeAdicionarTanque() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		$tanque = new Tanque();
		$tanque->setTecnicooperativo($tecnicoOperativo);
		$tanque->setTanVolumen(0);
		$tanque->setTanEstadoId(1);
		$tanque->setTanBypassDirectoRed(0);
		$tanque->setTanPresenciaValvulaControl(0);
		$tanque->setTanProteccionTapa(0);
		$tanque->setTanCerramientoLote(0);
		$tanque->setTanVentosaSalida(0);
		$tanque->setTanMacroMedidor(0);

		$tanque->save();

		return sfView::NONE;
	}

	public function executeActualizarTanque(sfWebRequest $request) {
		$tanque = TanquePeer::retrieveByPK($request->getParameter('tan_id'));
		$tanque->setTanVolumen($request->getParameter('tan_volumen'));
		$tanque->setTanEstadoId($request->getParameter('tan_estado_id'));
		$tanque->setTanBypassDirectoRed($request->getParameter('tan_bypass_directo_red'));
		$tanque->setTanPresenciaValvulaControl($request->getParameter('tan_presencia_valvula_control'));
		$tanque->setTanProteccionTapa($request->getParameter('tan_proteccion_tapa'));
		$tanque->setTanCerramientoLote($request->getParameter('tan_cerramiento_lote'));
		$tanque->setTanVentosaSalida($request->getParameter('tan_ventosa_salida'));
		$tanque->setTanMacroMedidor($request->getParameter('tan_macro_medidor'));
		$tanque->save();
		return sfView::NONE;
	}

	public function executeEliminarTanque(sfWebRequest $request) {
		$tanque = TanquePeer::retrieveByPK($request->getParameter('tan_id'));
		$tanque->delete();
		return sfView::NONE;
	}
}
