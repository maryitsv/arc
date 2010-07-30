<?php

/**
 * acueducto_aduccionimpulsion actions.
 *
 * @package    arc
 * @subpackage acueducto_aduccionimpulsion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_aduccionimpulsionActions extends sfActions
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

	public function executeSubirDatos(sfWebRequest $request) {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$criteria = new Criteria();
		$criteria->add(TecnicooperativoPeer::TOP_PPS_ANIO, $pps_anio);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
		$tecnicoOperativo = TecnicooperativoPeer::doSelectOne($criteria);

		if(!$tecnicoOperativo) {
			$tecnicoOperativo = new Tecnicooperativo();
			$tecnicoOperativo->setTopPpsAnio($pps_anio);
			$tecnicoOperativo->setTopPpsPreId($pps_pre_id);
			$tecnicoOperativo->setTopPpsSerId($pps_ser_id);
			$tecnicoOperativo->save();
		}

		if($request->hasParameter('toai_canal_abierto')) {
			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 1);
			$enTierra = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if(!$enTierra) {
				$enTierra = new Tecnicooperativaaduccionimpulsionacueducto();
				$enTierra->setToaiTopId($tecnicoOperativo->getTopId());
				$enTierra->setToaiTipoCanalId(1);
				$enTierra->setToaiMaterialCanalId(1);
			}
			$enTierra->setToaiLongitud($request->getParameter('toai_canal_abierto_tierra_longitud'));
			$enTierra->setToaiEdad($request->getParameter('toai_canal_abierto_tierra_edad'));
			$enTierra->save();

			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 2);
			$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if(!$concreto) {
				$concreto = new Tecnicooperativaaduccionimpulsionacueducto();
				$concreto->setToaiTopId($tecnicoOperativo->getTopId());
				$concreto->setToaiTipoCanalId(1);
				$concreto->setToaiMaterialCanalId(2);
			}
			$concreto->setToaiLongitud($request->getParameter('toai_canal_abierto_concreto_longitud'));
			$concreto->setToaiEdad($request->getParameter('toai_canal_abierto_concreto_edad'));
			$concreto->save();

			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 3);
			$mamposteria = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if(!$mamposteria) {
				$mamposteria = new Tecnicooperativaaduccionimpulsionacueducto();
				$mamposteria->setToaiTopId($tecnicoOperativo->getTopId());
				$mamposteria->setToaiTipoCanalId(1);
				$mamposteria->setToaiMaterialCanalId(3);
			}
			$mamposteria->setToaiLongitud($request->getParameter('toai_canal_abierto_mamposteria_longitud'));
			$mamposteria->setToaiEdad($request->getParameter('toai_canal_abierto_mamposteria_edad'));
			$mamposteria->save();
		}

		if($request->hasParameter('toai_canal_cubierto')) {
			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 1);
			$enTierra = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if(!$enTierra) {
				$enTierra = new Tecnicooperativaaduccionimpulsionacueducto();
				$enTierra->setToaiTopId($tecnicoOperativo->getTopId());
				$enTierra->setToaiTipoCanalId(2);
				$enTierra->setToaiMaterialCanalId(1);
			}
			$enTierra->setToaiLongitud($request->getParameter('toai_canal_cubierto_tierra_longitud'));
			$enTierra->setToaiEdad($request->getParameter('toai_canal_cubierto_tierra_edad'));
			$enTierra->save();

			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 2);
			$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if(!$concreto) {
				$concreto = new Tecnicooperativaaduccionimpulsionacueducto();
				$concreto->setToaiTopId($tecnicoOperativo->getTopId());
				$concreto->setToaiTipoCanalId(2);
				$concreto->setToaiMaterialCanalId(2);
			}
			$concreto->setToaiLongitud($request->getParameter('toai_canal_cubierto_concreto_longitud'));
			$concreto->setToaiEdad($request->getParameter('toai_canal_cubierto_concreto_edad'));
			$concreto->save();

			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 3);
			$mamposteria = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if(!$mamposteria) {
				$mamposteria = new Tecnicooperativaaduccionimpulsionacueducto();
				$mamposteria->setToaiTopId($tecnicoOperativo->getTopId());
				$mamposteria->setToaiTipoCanalId(2);
				$mamposteria->setToaiMaterialCanalId(3);
			}
			$mamposteria->setToaiLongitud($request->getParameter('toai_canal_cubierto_mamposteria_longitud'));
			$mamposteria->setToaiEdad($request->getParameter('toai_canal_cubierto_mamposteria_edad'));
			$mamposteria->save();
		}

		return $this->renderText('Almacenado correctamente');
	}

	public function executeObtenerDatos() {
		$pps_anio = $this->getUser()->getAttribute('pps_anio');
		$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
		$pps_ser_id = 1;

		$criteria = new Criteria();
		$criteria->add(TecnicooperativoPeer::TOP_PPS_ANIO, $pps_anio);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_PRE_ID, $pps_pre_id);
		$criteria->add(TecnicooperativoPeer::TOP_PPS_SER_ID, $pps_ser_id);
		$tecnicoOperativo = TecnicooperativoPeer::doSelectOne($criteria);

		$datos = array();

		if($tecnicoOperativo) {
			$campos = array();

			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
			$canalAbierto = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if($canalAbierto) {
				$campos['toai_canal_abierto'] = 1;
					
				$criteria = new Criteria();
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 1);
				$enTierra = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
				if($enTierra){
					$campos['toai_canal_abierto_tierra_longitud'] = $enTierra->getToaiLongitud();
					$campos['toai_canal_abierto_tierra_edad'] = $enTierra->getToaiEdad();
				}

				$criteria = new Criteria();
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 2);
				$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
				if($concreto){
					$campos['toai_canal_abierto_concreto_longitud'] = $concreto->getToaiLongitud();
					$campos['toai_canal_abierto_concreto_edad'] = $concreto->getToaiEdad();
				}

				$criteria = new Criteria();
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 1);
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 3);
				$mamposteria = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
				if($mamposteria){
					$campos['toai_canal_abierto_mamposteria_longitud'] = $mamposteria->getToaiLongitud();
					$campos['toai_canal_abierto_mamposteria_edad'] = $mamposteria->getToaiEdad();
				}
			}

			$criteria = new Criteria();
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
			$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
			$canalcubierto = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
			if($canalcubierto) {
				$campos['toai_canal_cubierto'] = 1;
					
				$criteria = new Criteria();
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 1);
				$enTierra = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
				if($enTierra){
					$campos['toai_canal_cubierto_tierra_longitud'] = $enTierra->getToaiLongitud();
					$campos['toai_canal_cubierto_tierra_edad'] = $enTierra->getToaiEdad();
				}

				$criteria = new Criteria();
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 2);
				$concreto = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
				if($concreto){
					$campos['toai_canal_cubierto_concreto_longitud'] = $concreto->getToaiLongitud();
					$campos['toai_canal_cubierto_concreto_edad'] = $concreto->getToaiEdad();
				}

				$criteria = new Criteria();
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TOP_ID, $tecnicoOperativo->getTopId());
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_TIPO_CANAL_ID, 2);
				$criteria->add(TecnicooperativaaduccionimpulsionacueductoPeer::TOAI_MATERIAL_CANAL_ID, 3);
				$mamposteria = TecnicooperativaaduccionimpulsionacueductoPeer::doSelectOne($criteria);
				if($mamposteria){
					$campos['toai_canal_cubierto_mamposteria_longitud'] = $mamposteria->getToaiLongitud();
					$campos['toai_canal_cubierto_mamposteria_edad'] = $mamposteria->getToaiEdad();
				}
			}

			$datos[] = $campos;
		}

		$result = array();
		$result['data'] = $datos;
		return $this->renderText(json_encode($result));
	}
}
