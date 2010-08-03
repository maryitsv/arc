<?php

/**
 * acueducto_componentessistema actions.
 *
 * @package    arc
 * @subpackage acueducto_componentessistema
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_componentessistemaActions extends sfActions
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
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativaComponentesSistema = TecnicooperativacomponentessistemaPeer::consultarComponentesSistema($pps_anio, $pps_pre_id, $pps_ser_id);

		$tecnicoOperativaComponentesSistema->setTocsCaptacion($request->getParameter('tocs_captacion', 0));
		$tecnicoOperativaComponentesSistema->setTocsCaptacionCantidad($request->getParameter('tocs_captacion_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsAduccion($request->getParameter('tocs_aduccion', 0));
		$tecnicoOperativaComponentesSistema->setTocsAduccionCantidad($request->getParameter('tocs_aduccion_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsDesarenador($request->getParameter('tocs_desarenador', 0));
		$tecnicoOperativaComponentesSistema->setTocsDesarenadorCantidad($request->getParameter('tocs_desarenador_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsConduccionAguaCruda($request->getParameter('tocs_conduccion_agua_cruda', 0));
		$tecnicoOperativaComponentesSistema->setTocsConduccionAguaCrudaCantidad($request->getParameter('tocs_conduccion_agua_cruda_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsPlantaTratamiento($request->getParameter('tocs_planta_tratamiento', 0));
		$tecnicoOperativaComponentesSistema->setTocsPlantaTratamientoCantidad($request->getParameter('tocs_planta_tratamiento_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsDesinfeccion($request->getParameter('tocs_desinfeccion', 0));
		$tecnicoOperativaComponentesSistema->setTocsDesinfeccionCantidad($request->getParameter('tocs_desinfeccion_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsTanqueAlmacenamiento($request->getParameter('tocs_tanque_almacenamiento', 0));
		$tecnicoOperativaComponentesSistema->setTocsTanqueAlmacenamientoCantidad($request->getParameter('tocs_tanque_almacenamiento_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsConduccionAguaTratada($request->getParameter('tocs_conduccion_agua_tratada', 0));
		$tecnicoOperativaComponentesSistema->setTocsConduccionAguaTratadaCantidad($request->getParameter('tocs_conduccion_agua_tratada_cantidad', 0));
		$tecnicoOperativaComponentesSistema->setTocsRedDistribucion($request->getParameter('tocs_red_distribucion', 0));
		$tecnicoOperativaComponentesSistema->setTocsRedDistribucionCantidad($request->getParameter('tocs_red_distribucion_cantidad', 0));

		$tecnicoOperativaComponentesSistema->save();
		return sfView::NONE;
	}

	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$result = array();
		$datos = array();

		$tecnicoOperativaComponentesSistema = TecnicooperativacomponentessistemaPeer::consultarComponentesSistemaSiExiste($pps_anio, $pps_pre_id, $pps_ser_id);
			
		if($tecnicoOperativaComponentesSistema) {
			$campos = array();

			$campos['tocs_captacion'] = $tecnicoOperativaComponentesSistema->getTocsCaptacion();
			$campos['tocs_captacion_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsCaptacionCantidad();
			$campos['tocs_aduccion'] = $tecnicoOperativaComponentesSistema->getTocsAduccion();
			$campos['tocs_aduccion_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsAduccionCantidad();
			$campos['tocs_desarenador'] = $tecnicoOperativaComponentesSistema->getTocsDesarenador();
			$campos['tocs_desarenador_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsDesarenadorCantidad();
			$campos['tocs_conduccion_agua_cruda'] = $tecnicoOperativaComponentesSistema->getTocsConduccionAguaCruda();
			$campos['tocs_conduccion_agua_cruda_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsConduccionAguaCrudaCantidad();
			$campos['tocs_planta_tratamiento'] = $tecnicoOperativaComponentesSistema->getTocsPlantaTratamiento();
			$campos['tocs_planta_tratamiento_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsPlantaTratamientoCantidad();
			$campos['tocs_desinfeccion'] = $tecnicoOperativaComponentesSistema->getTocsDesinfeccion();
			$campos['tocs_desinfeccion_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsDesinfeccionCantidad();
			$campos['tocs_tanque_almacenamiento'] = $tecnicoOperativaComponentesSistema->getTocsTanqueAlmacenamiento();
			$campos['tocs_tanque_almacenamiento_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsTanqueAlmacenamientoCantidad();
			$campos['tocs_conduccion_agua_tratada'] = $tecnicoOperativaComponentesSistema->getTocsConduccionAguaTratada();
			$campos['tocs_conduccion_agua_tratada_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsConduccionAguaTratadaCantidad();
			$campos['tocs_red_distribucion'] = $tecnicoOperativaComponentesSistema->getTocsRedDistribucion();
			$campos['tocs_red_distribucion_cantidad'] = $tecnicoOperativaComponentesSistema->getTocsRedDistribucionCantidad();

			$datos[] = $campos;
		}

		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
