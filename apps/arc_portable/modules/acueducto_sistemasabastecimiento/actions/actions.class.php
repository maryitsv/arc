<?php

/**
 * acueducto_tecnicooperativa actions.
 *
 * @package    arc
 * @subpackage acueducto_tecnicooperativa
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_sistemasabastecimientoActions extends sfActions
{
	/**
	 * Executes index action
	 *
	 * @param sfRequest $request A request object
	 */
	public function executeIndex(sfWebRequest $request)
	{
		//    $this->forward('default', 'module');
	}

	public function executeSubirDatos(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativaAcueducto = TecnicooperativaacueductoPeer::consultarTecnicoOperativoAcueducto($pps_anio, $pps_pre_id, $pps_ser_id);

		$tecnicoOperativaAcueducto->setToaGravedadSinTratamiento($request->getParameter('toa_gravedad_sin_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaBombeoSinTratamiento($request->getParameter('toa_bombeo_sin_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaGravedadConTratamiento($request->getParameter('toa_gravedad_con_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaBombeoConTratamiento($request->getParameter('toa_bombeo_con_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaGravedadBombeoSinTratamiento($request->getParameter('toa_gravedad_bombeo_sin_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaGravedadBombeoConTratamiento($request->getParameter('toa_gravedad_bombeo_con_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaGravedadSinTratamientoBombeoConTratamiento($request->getParameter('toa_gravedad_sin_tratamiento_bombeo_con_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaGravedadConTratamientoBombeoSinTratamiento($request->getParameter('toa_gravedad_con_tratamiento_bombeo_sin_tratamiento', 0));
		$tecnicoOperativaAcueducto->setToaCantidadAguaDistribuidaPorAno($request->getParameter('toa_cantidad_agua_distribuida_por_ano'));

		$tecnicoOperativaAcueducto->setToaSolucionAcarreo($request->getParameter('toa_solucion_acarreo'));
		$tecnicoOperativaAcueducto->setToaSolucionAcarreoViviendas($request->getParameter('toa_solucion_acarreo_viviendas'));
		$tecnicoOperativaAcueducto->setToaSolucionNacimiento($request->getParameter('toa_solucion_nacimiento'));
		$tecnicoOperativaAcueducto->setToaSolucionNacimientoViviendas($request->getParameter('toa_solucion_nacimiento_viviendas'));
		$tecnicoOperativaAcueducto->setToaSolucionAljibe($request->getParameter('toa_solucion_aljibe'));
		$tecnicoOperativaAcueducto->setToaSolucionAljibeViviendas($request->getParameter('toa_solucion_aljibe_viviendas'));
		$tecnicoOperativaAcueducto->setToaSolucionAguaLluvia($request->getParameter('toa_solucion_agua_lluvia'));
		$tecnicoOperativaAcueducto->setToaSolucionAguaLluviaViviendas($request->getParameter('toa_solucion_agua_lluvia_viviendas'));
		$tecnicoOperativaAcueducto->setToaSolucionOtro($request->getParameter('toa_solucion_otro'));
		$tecnicoOperativaAcueducto->setToaSolucionOtroCual($request->getParameter('toa_solucion_otro_cual'));
		$tecnicoOperativaAcueducto->setToaSolucionOtroViviendas($request->getParameter('toa_solucion_otro_viviendas'));

		$tecnicoOperativaAcueducto->save();
		return sfView::NONE;
	}

	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$result = array();
		$datos = array();

		$tecnicoOperativaAcueducto = TecnicooperativaacueductoPeer::consultarTecnicoOperativoAcueductoSiExiste($pps_anio, $pps_pre_id, $pps_ser_id);

		if($tecnicoOperativaAcueducto) {

			$campos = array();

			$campos['toa_gravedad_sin_tratamiento'] = $tecnicoOperativaAcueducto->getToaGravedadSinTratamiento();
			$campos['toa_bombeo_sin_tratamiento'] = $tecnicoOperativaAcueducto->getToaBombeoSinTratamiento();
			$campos['toa_gravedad_con_tratamiento'] = $tecnicoOperativaAcueducto->getToaGravedadConTratamiento();
			$campos['toa_bombeo_con_tratamiento'] = $tecnicoOperativaAcueducto->getToaBombeoConTratamiento();
			$campos['toa_gravedad_bombeo_sin_tratamiento'] = $tecnicoOperativaAcueducto->getToaGravedadBombeoSinTratamiento();
			$campos['toa_gravedad_bombeo_con_tratamiento'] = $tecnicoOperativaAcueducto->getToaGravedadBombeoConTratamiento();
			$campos['toa_gravedad_sin_tratamiento_bombeo_con_tratamiento'] = $tecnicoOperativaAcueducto->getToaGravedadSinTratamientoBombeoConTratamiento();
			$campos['toa_gravedad_con_tratamiento_bombeo_sin_tratamiento'] = $tecnicoOperativaAcueducto->getToaGravedadConTratamientoBombeoSinTratamiento();
			$campos['toa_cantidad_agua_distribuida_por_ano'] = $tecnicoOperativaAcueducto->getToaCantidadAguaDistribuidaPorAno();

			$campos['toa_solucion_acarreo'] = $tecnicoOperativaAcueducto->getToaSolucionAcarreo();
			$campos['toa_solucion_acarreo_viviendas'] = $tecnicoOperativaAcueducto->getToaSolucionAcarreoViviendas();
			$campos['toa_solucion_nacimiento'] = $tecnicoOperativaAcueducto->getToaSolucionNacimiento();
			$campos['toa_solucion_nacimiento_viviendas'] = $tecnicoOperativaAcueducto->getToaSolucionNacimientoViviendas();
			$campos['toa_solucion_aljibe'] = $tecnicoOperativaAcueducto->getToaSolucionAljibe();
			$campos['toa_solucion_aljibe_viviendas'] = $tecnicoOperativaAcueducto->getToaSolucionAljibeViviendas();
			$campos['toa_solucion_agua_lluvia'] = $tecnicoOperativaAcueducto->getToaSolucionAguaLluvia();
			$campos['toa_solucion_agua_lluvia_viviendas'] = $tecnicoOperativaAcueducto->getToaSolucionAguaLluviaViviendas();
			$campos['toa_solucion_otro'] = $tecnicoOperativaAcueducto->getToaSolucionOtro();
			$campos['toa_solucion_otro_cual'] = $tecnicoOperativaAcueducto->getToaSolucionOtroCual();
			$campos['toa_solucion_otro_viviendas'] = $tecnicoOperativaAcueducto->getToaSolucionOtroViviendas();

			$datos[] = $campos;

		}

		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
