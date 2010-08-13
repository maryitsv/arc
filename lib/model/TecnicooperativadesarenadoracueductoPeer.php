<?php


/**
 * Skeleton subclass for performing query and update operations on the 'tecnicooperativadesarenadoracueducto' table.
 *
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 12:26:14
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 *
 * @package    lib.model
 */
class TecnicooperativadesarenadoracueductoPeer extends BaseTecnicooperativadesarenadoracueductoPeer {
	public static function consultarDesarenador($pps_periodo, $pps_pre_id, $pps_ser_id) {
		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_periodo, $pps_pre_id, $pps_ser_id);
		$desarenadores = $tecnicoOperativo->getTecnicooperativadesarenadoracueductos();
		if(count($desarenadores)>0) {
			$desarenador = $desarenadores[0];
		}
		else {
			$desarenador = new Tecnicooperativadesarenadoracueducto();
			$desarenador->setTodesTopId($tecnicoOperativo->getTopId());
		}

		return $desarenador;
	}

	public static function consultarDesarenadorSiExiste($pps_periodo, $pps_pre_id, $pps_ser_id) {
		$tecnicoOperativo = TecnicooperativoPeer::consultarTecnicoOperativo($pps_periodo, $pps_pre_id, $pps_ser_id);
		$desarenadores = $tecnicoOperativo->getTecnicooperativadesarenadoracueductos();
		$desarenador = null;
		if(count($desarenadores)>0) {
			$desarenador = $desarenadores[0];
		}

		return $desarenador;
	}
} // TecnicooperativadesarenadoracueductoPeer
