<?php

/**
 * acueducto_desinfeccion actions.
 *
 * @package    arc
 * @subpackage acueducto_desinfeccion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_desinfeccionActions extends sfActions
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

		$desinfeccion = TecnicooperativadesinfeccionacueductoPeer::consultarDesinfeccion($pps_anio, $pps_pre_id, $pps_ser_id);

		$desinfeccion->setTodaDesinfeccion($request->getParameter('toda_desinfeccion', 0));
		$desinfeccion->setTodaDesinfeccionCloro($request->getParameter('toda_desinfeccion_cloro', 0));
		$desinfeccion->setTodaDesinfeccionHipocloritoSodio($request->getParameter('toda_desinfeccion_hipoclorito_sodio', 0));
		$desinfeccion->setTodaDesinfeccionHipocloritoCalcio($request->getParameter('toda_desinfeccion_hipoclorito_calcio', 0));
		$desinfeccion->setTodaDesinfeccionOzonacion($request->getParameter('toda_desinfeccion_ozonacion', 0));
		$desinfeccion->setTodaDesinfeccionRayosUltravioleta($request->getParameter('toda_desinfeccion_rayos_ultravioleta', 0));
		$desinfeccion->setTodaDesinfeccionDioxidoCloro($request->getParameter('toda_desinfeccion_dioxido_cloro', 0));

		$desinfeccion->save();

		return sfView::NONE;
	}

	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$result = array();
		$datos = array();

		$desinfeccion = TecnicooperativadesinfeccionacueductoPeer::consultarDesinfeccionSiExiste($pps_anio, $pps_pre_id, $pps_ser_id);

		if($desinfeccion) {
			$campos = array();

			$campos['toda_desinfeccion'] = $desinfeccion->getTodaDesinfeccion();
			$campos['toda_desinfeccion_cloro'] = $desinfeccion->getTodaDesinfeccionCloro();
			$campos['toda_desinfeccion_hipoclorito_sodio'] = $desinfeccion->getTodaDesinfeccionHipocloritoSodio();
			$campos['toda_desinfeccion_hipoclorito_calcio'] = $desinfeccion->getTodaDesinfeccionHipocloritoCalcio();
			$campos['toda_desinfeccion_ozonacion'] = $desinfeccion->getTodaDesinfeccionOzonacion();
			$campos['toda_desinfeccion_rayos_ultravioleta'] = $desinfeccion->getTodaDesinfeccionRayosUltravioleta();
			$campos['toda_desinfeccion_dioxido_cloro'] = $desinfeccion->getTodaDesinfeccionDioxidoCloro();

			$datos[] = $campos;
		}

		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
