<?php


/**
 * Skeleton subclass for performing query and update operations on the 'tecnicooperativalineaconduccionaguacrudaacueducto' table.
 *
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 12:26:15
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 *
 * @package    lib.model
 */
class TecnicooperativalineaconduccionaguacrudaacueductoPeer extends BaseTecnicooperativalineaconduccionaguacrudaacueductoPeer {
	public static function crearCanal($topId, $tipoCanalId, $materialCanalId, $longitud, $diametro, $edad) {
		$criteria = new Criteria();
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TOP_ID, $topId);
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TIPO_CANAL_ID, $tipoCanalId);
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_MATERIAL_CANAL_ID, $materialCanalId);
		$canal = TecnicooperativalineaconduccionaguacrudaacueductoPeer::doSelectOne($criteria);
		if(!$canal) {
			$canal = new Tecnicooperativalineaconduccionaguacrudaacueducto();
			$canal->setTolcTopId($topId);
			$canal->setTolcTipoCanalId($tipoCanalId);
			$canal->setTolcMaterialCanalId($materialCanalId);
		}
		$canal->setTolcLongitud($longitud);
		$canal->setTolcDiametro($diametro);
		$canal->setTolcEdad($edad);
		$canal->save();
	}
	public static function eliminarCanales($topId, $tipoCanalId) {
		$criteria = new Criteria();
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TOP_ID, $topId);
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TIPO_CANAL_ID, $tipoCanalId);
		$canales = TecnicooperativalineaconduccionaguacrudaacueductoPeer::doSelect($criteria);
		if(count($canales)>0) {
			foreach($canales as $canal) {
				$canal->delete();
			}
		}
	}
	public static function consultarCanalSiExiste($topId, $tipoCanalId, $materialId = null) {
		$criteria = new Criteria();
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TOP_ID, $topId);
		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TIPO_CANAL_ID, $tipoCanalId);
		if($materialId) {
			$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_MATERIAL_CANAL_ID, $materialId);
		}

		return TecnicooperativalineaconduccionaguacrudaacueductoPeer::doSelectOne($criteria);
	}
} // TecnicooperativalineaconduccionaguacrudaacueductoPeer
