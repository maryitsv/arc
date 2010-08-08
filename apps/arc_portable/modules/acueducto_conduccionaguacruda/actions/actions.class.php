<?php

/**
 * acueducto_conduccionaguacruda actions.
 *
 * @package    arc
 * @subpackage acueducto_conduccionaguacruda
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_conduccionaguacrudaActions extends sfActions
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

		if($request->hasParameter('tolc_canal_abierto')) {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 1, 1, $request->getParameter('tolc_canal_abierto_tierra_longitud'), null, $request->getParameter('tolc_canal_abierto_tierra_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 1, 2, $request->getParameter('tolc_canal_abierto_concreto_longitud'), null, $request->getParameter('tolc_canal_abierto_concreto_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 1, 3, $request->getParameter('tolc_canal_abierto_mamposteria_longitud'), null, $request->getParameter('tolc_canal_abierto_mamposteria_edad'));
		}
		else {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 1);
		}

		if($request->hasParameter('tolc_canal_cubierto')) {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 2, 1, $request->getParameter('tolc_canal_cubierto_tierra_longitud'), null, $request->getParameter('tolc_canal_cubierto_tierra_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 2, 2, $request->getParameter('tolc_canal_cubierto_concreto_longitud'), null, $request->getParameter('tolc_canal_cubierto_concreto_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 2, 3, $request->getParameter('tolc_canal_cubierto_mamposteria_longitud'), null, $request->getParameter('tolc_canal_cubierto_mamposteria_edad'));
		}
		else {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 2);
		}

		return sfView::NONE;
	}

	public function executeSubirDatos2(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('tolc_tuberia')) {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 4, $request->getParameter('tolc_tuberia_asbesto_cemento_longitud'), $request->getParameter('tolc_tuberia_asbesto_cemento_diametro'), $request->getParameter('tolc_tuberia_asbesto_cemento_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 5, $request->getParameter('tolc_tuberia_hierro_ductil_longitud'), $request->getParameter('tolc_tuberia_hierro_ductil_diametro'), $request->getParameter('tolc_tuberia_hierro_ductil_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 2, $request->getParameter('tolc_tuberia_concreto_longitud'), $request->getParameter('tolc_tuberia_concreto_diametro'), $request->getParameter('tolc_tuberia_concreto_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 3, 6, $request->getParameter('tolc_tuberia_pvc_longitud'), $request->getParameter('tolc_tuberia_pvc_diametro'), $request->getParameter('tolc_tuberia_pvc_edad'));
		}
		else {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 3);
		}

		if($request->hasParameter('tolc_manguera')) {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 4, 7, $request->getParameter('tolc_manguera_polietileno_hd_longitud'), $request->getParameter('tolc_manguera_polietileno_hd_diametro'), $request->getParameter('tolc_manguera_polietileno_hd_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanal($tecnicoOperativo->getTopId(), 4, 8, $request->getParameter('tolc_manguera_polietileno_ld_longitud'), $request->getParameter('tolc_manguera_polietileno_ld_diametro'), $request->getParameter('tolc_manguera_polietileno_ld_edad'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanalOtro($tecnicoOperativo->getTopId(), 4, 9, $request->getParameter('tolc_manguera_otro_longitud'), $request->getParameter('tolc_manguera_otro_diametro'), $request->getParameter('tolc_manguera_otro_edad'), 'Manguera', $request->getParameter('tolc_manguera_otro_nombre'));
		}
		else {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 4);
		}

		return sfView::NONE;
	}

	public function executeSubirDatos3(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_anio, $pps_pre_id, $pps_ser_id);

		if($request->hasParameter('tolc_otro')) {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanalOtro($tecnicoOperativo->getTopId(), 5, 10, $request->getParameter('tolc_otro_otro1_longitud'), $request->getParameter('tolc_otro_otro1_diametro'), $request->getParameter('tolc_otro_otro1_edad'), $request->getParameter('tolc_otro_tipo_nombre'), $request->getParameter('tolc_otro_otro1_nombre'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanalOtro($tecnicoOperativo->getTopId(), 5, 11, $request->getParameter('tolc_otro_otro2_longitud'), $request->getParameter('tolc_otro_otro2_diametro'), $request->getParameter('tolc_otro_otro2_edad'), $request->getParameter('tolc_otro_tipo_nombre'), $request->getParameter('tolc_otro_otro2_nombre'));
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::crearCanalOtro($tecnicoOperativo->getTopId(), 5, 12, $request->getParameter('tolc_otro_otro3_longitud'), $request->getParameter('tolc_otro_otro3_diametro'), $request->getParameter('tolc_otro_otro3_edad'), $request->getParameter('tolc_otro_tipo_nombre'), $request->getParameter('tolc_otro_otro3_nombre'));
		}
		else {
			TecnicooperativalineaconduccionaguacrudaacueductoPeer::eliminarCanales($tecnicoOperativo->getTopId(), 5);
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

			$canalAbierto = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1);

			if($canalAbierto) {
				$campos['tolc_canal_abierto'] = 1;

				$enTierra = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1, 1);
				if($enTierra){
					$campos['tolc_canal_abierto_tierra_longitud'] = $enTierra->getTolcLongitud();
					$campos['tolc_canal_abierto_tierra_edad'] = $enTierra->getTolcEdad();
				}

				$concreto = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1, 2);
				if($concreto){
					$campos['tolc_canal_abierto_concreto_longitud'] = $concreto->getTolcLongitud();
					$campos['tolc_canal_abierto_concreto_edad'] = $concreto->getTolcEdad();
				}

				$mamposteria = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 1, 3);
				if($mamposteria){
					$campos['tolc_canal_abierto_mamposteria_longitud'] = $mamposteria->getTolcLongitud();
					$campos['tolc_canal_abierto_mamposteria_edad'] = $mamposteria->getTolcEdad();
				}
			}

			$canalcubierto = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2);

			if($canalcubierto) {
				$campos['tolc_canal_cubierto'] = 1;

				$enTierra = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2, 1);
				if($enTierra){
					$campos['tolc_canal_cubierto_tierra_longitud'] = $enTierra->getTolcLongitud();
					$campos['tolc_canal_cubierto_tierra_edad'] = $enTierra->getTolcEdad();
				}

				$concreto = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2, 2);
				if($concreto){
					$campos['tolc_canal_cubierto_concreto_longitud'] = $concreto->getTolcLongitud();
					$campos['tolc_canal_cubierto_concreto_edad'] = $concreto->getTolcEdad();
				}

				$mamposteria = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 2, 3);
				if($mamposteria){
					$campos['tolc_canal_cubierto_mamposteria_longitud'] = $mamposteria->getTolcLongitud();
					$campos['tolc_canal_cubierto_mamposteria_edad'] = $mamposteria->getTolcEdad();
				}
			}

			$tuberia = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3);

			if($tuberia) {
				$campos['tolc_tuberia'] = 1;

				$asbestoCemento = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 4);
				if($asbestoCemento){
					$campos['tolc_tuberia_asbesto_cemento_longitud'] = $asbestoCemento->getTolcLongitud();
					$campos['tolc_tuberia_asbesto_cemento_diametro'] = $asbestoCemento->getTolcDiametro();
					$campos['tolc_tuberia_asbesto_cemento_edad'] = $asbestoCemento->getTolcEdad();
				}

				$hierroDuctil = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 5);
				if($hierroDuctil){
					$campos['tolc_tuberia_hierro_ductil_longitud'] = $hierroDuctil->getTolcLongitud();
					$campos['tolc_tuberia_hierro_ductil_diametro'] = $hierroDuctil->getTolcDiametro();
					$campos['tolc_tuberia_hierro_ductil_edad'] = $hierroDuctil->getTolcEdad();
				}

				$concreto = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 2);
				if($concreto){
					$campos['tolc_tuberia_concreto_longitud'] = $concreto->getTolcLongitud();
					$campos['tolc_tuberia_concreto_diametro'] = $concreto->getTolcDiametro();
					$campos['tolc_tuberia_concreto_edad'] = $concreto->getTolcEdad();
				}

				$pvc = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 3, 6);
				if($pvc){
					$campos['tolc_tuberia_pvc_longitud'] = $pvc->getTolcLongitud();
					$campos['tolc_tuberia_pvc_diametro'] = $pvc->getTolcDiametro();
					$campos['tolc_tuberia_pvc_edad'] = $pvc->getTolcEdad();
				}
			}

			$manguera = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4);
			if($manguera) {
				$campos['tolc_manguera'] = 1;

				$polietilenoHd = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4, 7);
				if($polietilenoHd){
					$campos['tolc_manguera_polietileno_hd_longitud'] = $polietilenoHd->getTolcLongitud();
					$campos['tolc_manguera_polietileno_hd_diametro'] = $polietilenoHd->getTolcDiametro();
					$campos['tolc_manguera_polietileno_hd_edad'] = $polietilenoHd->getTolcEdad();
				}

				$polietilenoLd = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4, 8);
				if($polietilenoLd){
					$campos['tolc_manguera_polietileno_ld_longitud'] = $polietilenoLd->getTolcLongitud();
					$campos['tolc_manguera_polietileno_ld_diametro'] = $polietilenoLd->getTolcDiametro();
					$campos['tolc_manguera_polietileno_ld_edad'] = $polietilenoLd->getTolcEdad();
				}

				$otro = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 4, 9);
				if($otro){
					$campos['tolc_manguera_otro_longitud'] = $otro->getTolcLongitud();
					$campos['tolc_manguera_otro_diametro'] = $otro->getTolcDiametro();
					$campos['tolc_manguera_otro_edad'] = $otro->getTolcEdad();
					$campos['tolc_manguera_otro_nombre'] = $otro->getTolcNombreMaterial();
				}
			}

			$otro = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 5);
			if($otro) {
				$campos['tolc_otro'] = 1;

				$otro1 = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 5, 10);
				if($otro1){
					$campos['tolc_otro_otro1_longitud'] = $otro1->getTolcLongitud();
					$campos['tolc_otro_otro1_diametro'] = $otro1->getTolcDiametro();
					$campos['tolc_otro_otro1_edad'] =     $otro1->getTolcEdad();
					$campos['tolc_otro_otro1_nombre'] =   $otro1->getTolcNombreMaterial();
					$campos['tolc_otro_tipo_nombre'] = $otro1->getTolcNombreCanal();
				}

				$otro2 = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 5, 11);
				if($otro2){
					$campos['tolc_otro_otro2_longitud'] = $otro2->getTolcLongitud();
					$campos['tolc_otro_otro2_diametro'] = $otro2->getTolcDiametro();
					$campos['tolc_otro_otro2_edad'] =     $otro2->getTolcEdad();
					$campos['tolc_otro_otro2_nombre'] =   $otro2->getTolcNombreMaterial();
				}

				$otro3 = TecnicooperativalineaconduccionaguacrudaacueductoPeer::consultarCanalSiExiste($tecnicoOperativo->getTopId(), 5, 12);
				if($otro3){
					$campos['tolc_otro_otro3_longitud'] = $otro3->getTolcLongitud();
					$campos['tolc_otro_otro3_diametro'] = $otro3->getTolcDiametro();
					$campos['tolc_otro_otro3_edad'] =     $otro3->getTolcEdad();
					$campos['tolc_otro_otro3_nombre'] =   $otro3->getTolcNombreMaterial();
				}
			}

			$datos[] = $campos;
		}

		$result = array();
		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
