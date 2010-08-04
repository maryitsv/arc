<?php

/**
 * acueducto_plantatratamiento_aguapotable actions.
 *
 * @package    arc
 * @subpackage acueducto_plantatratamiento_aguapotable
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_plantatratamiento_aguapotableActions extends sfActions
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

	public function executeIndex3(sfWebRequest $request)
	{
			
	}

	public function executeSubirDatos1(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$plantaTratamiento = TecnicooperativaplantaaguapotableacueductoPeer::consultarPlantaTratamiento($pps_anio, $pps_pre_id, $pps_ser_id);

		$plantaTratamiento->setToplaTecnologiaUtilizadaCc($request->getParameter('topla_tecnologia_utilizada_cc', 0));
		$plantaTratamiento->setToplaCicloCompletoMr($request->getParameter('topla_ciclo_completo_mr', 0));
		$plantaTratamiento->setToplaCicloCompletoFlh($request->getParameter('topla_ciclo_completo_flh', 0));
		$plantaTratamiento->setToplaCicloCompletoFlm($request->getParameter('topla_ciclo_completo_flm', 0));
		$plantaTratamiento->setToplaCicloCompletoSd($request->getParameter('topla_ciclo_completo_sd', 0));
		$plantaTratamiento->setToplaCicloCompletoFr($request->getParameter('topla_ciclo_completo_fr', 0));

		$plantaTratamiento->setToplaTecnologiaUtilizadaFd($request->getParameter('topla_tecnologia_utilizada_fd', 0));
		$plantaTratamiento->setToplaFiltracionDirectaMr($request->getParameter('topla_filtracion_directa_mr', 0));
		$plantaTratamiento->setToplaFiltracionDirectaFlh($request->getParameter('topla_filtracion_directa_flh', 0));
		$plantaTratamiento->setToplaFiltracionDirectaFlm($request->getParameter('topla_filtracion_directa_flm', 0));
		$plantaTratamiento->setToplaFiltracionDirectaFr($request->getParameter('topla_filtracion_directa_fr', 0));

		$plantaTratamiento->setToplaTecnologiaUtilizadaPc($request->getParameter('topla_tecnologia_utilizada_pc', 0));

		$plantaTratamiento->save();

		return sfView::NONE;
	}

	public function executeSubirDatos2(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$plantaTratamiento = TecnicooperativaplantaaguapotableacueductoPeer::consultarPlantaTratamiento($pps_anio, $pps_pre_id, $pps_ser_id);

		$plantaTratamiento->setToplaTecnologiaUtilizadaFime($request->getParameter('topla_tecnologia_utilizada_fime', 0));
		$plantaTratamiento->setToplaFimeFgd($request->getParameter('topla_fime_fgdi', 0));
		$plantaTratamiento->setToplaFimeFgac($request->getParameter('topla_fime_fgac', 0));
		$plantaTratamiento->setToplaFimeFgas2($request->getParameter('topla_fime_fgas2', 0));
		$plantaTratamiento->setToplaFimeFgas3($request->getParameter('topla_fime_fgas3', 0));
		$plantaTratamiento->setToplaFimeFla($request->getParameter('topla_fime_fla', 0));

		$plantaTratamiento->setToplaTecnologiaUtilizadaRhm($request->getParameter('topla_tecnologia_utilizada_rhm', 0));
		$plantaTratamiento->setToplaRhmBandejasCascadas($request->getParameter('topla_rhm_bandejas_cascadas', 0));
		$plantaTratamiento->setToplaRhmAspersores($request->getParameter('topla_rhm_aspersores', 0));
		$plantaTratamiento->setToplaRhmSd($request->getParameter('topla_rhm_sd', 0));
		$plantaTratamiento->setToplaRhmFr($request->getParameter('topla_rhm_fr', 0));
		$plantaTratamiento->setToplaRhmFime($request->getParameter('topla_rhm_fime', 0));

		$plantaTratamiento->save();

		return sfView::NONE;
	}

	public function executeSubirDatos3(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$plantaTratamiento = TecnicooperativaplantaaguapotableacueductoPeer::consultarPlantaTratamiento($pps_anio, $pps_pre_id, $pps_ser_id);

		$plantaTratamiento->setToplaTecnologiaUtilizadaCt($request->getParameter('topla_tecnologia_utilizada_ct', 0));
		$plantaTratamiento->setToplaPlantaTtmtoFunciona($request->getParameter('topla_planta_ttmto_funciona', 0));
		$plantaTratamiento->setToplaEstructurasMedicionCau($request->getParameter('topla_estructuras_medicion_cau', 0));
		$plantaTratamiento->setToplaMenorCaudalOperacionDiseno($request->getParameter('topla_menor_caudal_operacion_diseno', 0));

		$plantaTratamiento->save();

		return sfView::NONE;
	}

	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$result = array();
		$datos = array();

		$plantaTratamiento = TecnicooperativaplantaaguapotableacueductoPeer::consultarPlantaTratamientoSiExiste($pps_anio, $pps_pre_id, $pps_ser_id);

		if($plantaTratamiento) {
			$campos = array();

			$campos['topla_tecnologia_utilizada_cc'] = $plantaTratamiento->getToplaTecnologiaUtilizadaCc();
			$campos['topla_ciclo_completo_mr'] = $plantaTratamiento->getToplaCicloCompletoMr();
			$campos['topla_ciclo_completo_flh'] = $plantaTratamiento->getToplaCicloCompletoFlh();
			$campos['topla_ciclo_completo_flm'] = $plantaTratamiento->getToplaCicloCompletoFlm();
			$campos['topla_ciclo_completo_sd'] = $plantaTratamiento->getToplaCicloCompletoSd();
			$campos['topla_ciclo_completo_fr'] = $plantaTratamiento->getToplaCicloCompletoFr();

			$campos['topla_tecnologia_utilizada_fd'] = $plantaTratamiento->getToplaTecnologiaUtilizadaFd();
			$campos['topla_filtracion_directa_mr'] = $plantaTratamiento->getToplaFiltracionDirectaMr();
			$campos['topla_filtracion_directa_flh'] = $plantaTratamiento->getToplaFiltracionDirectaFlh();
			$campos['topla_filtracion_directa_flm'] = $plantaTratamiento->getToplaFiltracionDirectaFlm();
			$campos['topla_filtracion_directa_fr'] = $plantaTratamiento->getToplaFiltracionDirectaFr();

			$campos['topla_tecnologia_utilizada_pc'] = $plantaTratamiento->getToplaTecnologiaUtilizadaPc();

			$campos['topla_tecnologia_utilizada_fime'] = $plantaTratamiento->getToplaTecnologiaUtilizadaFime();
			$campos['topla_fime_fgdi'] = $plantaTratamiento->getToplaFimeFgd();
			$campos['topla_fime_fgac'] = $plantaTratamiento->getToplaFimeFgac();
			$campos['topla_fime_fgas2'] = $plantaTratamiento->getToplaFimeFgas2();
			$campos['topla_fime_fgas3'] = $plantaTratamiento->getToplaFimeFgas3();
			$campos['topla_fime_fla'] = $plantaTratamiento->getToplaFimeFla();

			$campos['topla_tecnologia_utilizada_rhm'] = $plantaTratamiento->getToplaTecnologiaUtilizadaRhm();
			$campos['topla_rhm_bandejas_cascadas'] = $plantaTratamiento->getToplaRhmBandejasCascadas();
			$campos['topla_rhm_aspersores'] = $plantaTratamiento->getToplaRhmAspersores();
			$campos['topla_rhm_sd'] = $plantaTratamiento->getToplaRhmSd();
			$campos['topla_rhm_fr'] = $plantaTratamiento->getToplaRhmFr();
			$campos['topla_rhm_fime'] = $plantaTratamiento->getToplaRhmFime();

			$campos['topla_tecnologia_utilizada_ct'] = $plantaTratamiento->getToplaTecnologiaUtilizadaCt();
			$campos['topla_planta_ttmto_funciona'] = $plantaTratamiento->getToplaPlantaTtmtoFunciona();
			$campos['topla_estructuras_medicion_cau'] = $plantaTratamiento->getToplaEstructurasMedicionCau();
			$campos['topla_menor_caudal_operacion_diseno'] = $plantaTratamiento->getToplaMenorCaudalOperacionDiseno();

			$datos[] = $campos;
		}

		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
