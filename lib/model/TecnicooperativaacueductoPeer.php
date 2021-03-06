<?php


/**
 * Skeleton subclass for performing query and update operations on the 'tecnicooperativaacueducto' table.
 *
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 12:26:13
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 *
 * @package    lib.model
 */
class TecnicooperativaacueductoPeer extends BaseTecnicooperativaacueductoPeer {
	public static function consultarTecnicoOperativoAcueducto($pps_periodo, $pps_pre_id, $pps_ser_id) {
		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_periodo, $pps_pre_id, $pps_ser_id);
		$tecnicoOperativaAcueductos = $tecnicoOperativo->getTecnicooperativaacueductos();
		if(count($tecnicoOperativaAcueductos)>0) {
			$tecnicoOperativaAcueducto = $tecnicoOperativaAcueductos[0];
		}
		else {
			$tecnicoOperativaAcueducto = new Tecnicooperativaacueducto();
			$tecnicoOperativaAcueducto->setToaTopId($tecnicoOperativo->getTopId());
		}

		return $tecnicoOperativaAcueducto;
	}

	public static function consultarTecnicoOperativoAcueductoSiExiste($pps_periodo, $pps_pre_id, $pps_ser_id) {
		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_periodo, $pps_pre_id, $pps_ser_id);
		$tecnicoOperativaAcueductos = $tecnicoOperativo->getTecnicooperativaacueductos();
		$tecnicoOperativaAcueducto = null;
		if(count($tecnicoOperativaAcueductos)>0) {
			$tecnicoOperativaAcueducto = $tecnicoOperativaAcueductos[0];
		}

		return $tecnicoOperativaAcueducto;
	}
} // TecnicooperativaacueductoPeer
