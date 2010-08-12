<?php

/**
 * acueducto_desarenador actions.
 *
 * @package    arc
 * @subpackage acueducto_desarenador
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_desarenadorActions extends sfActions
{
	/**
	 * Executes index action
	 *
	 * @param sfRequest $request A request object
	 */
	public function executeIndex(sfWebRequest $request)
	{
			
	}

	public function executeSubirDatos(sfWebRequest $request) {
		$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$desarenador = TecnicooperativadesarenadoracueductoPeer::consultarDesarenador($pps_periodo, $pps_pre_id, $pps_ser_id);

		$desarenador->setTodesValvula($request->getParameter('todes_valvula', 0));
		$desarenador->setTodesBypass($request->getParameter('todes_bypass', 0));
		$desarenador->setTodesAguasErosion($request->getParameter('todes_aguas_erosion', 0));

		$desarenador->save();

		return sfView::NONE;
	}

	public function executeObtenerDatos() {
		$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$result = array();
		$datos = array();

		$desarenador = TecnicooperativadesarenadoracueductoPeer::consultarDesarenadorSiExiste($pps_periodo, $pps_pre_id, $pps_ser_id);

		if($desarenador) {
			$campos = array();

			$campos['todes_valvula'] = $desarenador->getTodesValvula();
			$campos['todes_bypass'] = $desarenador->getTodesBypass();
			$campos['todes_aguas_erosion'] = $desarenador->getTodesAguasErosion();

			$datos[] = $campos;
		}

		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
