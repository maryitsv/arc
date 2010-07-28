<?php


/**
 * This class defines the structure of the 'disposicionfinalresiduosaseo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/28/10 13:25:13
=======
 * 07/28/10 15:52:48
>>>>>>> 9ae73683bd9fcb839d0feb5ce3110184317c3501
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class DisposicionfinalresiduosaseoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.DisposicionfinalresiduosaseoTableMap';

	/**
	 * Initialize the table attributes, columns and validators
	 * Relations are not initialized by this method since they are lazy loaded
	 *
	 * @return     void
	 * @throws     PropelException
	 */
	public function initialize()
	{
	  // attributes
		$this->setName('disposicionfinalresiduosaseo');
		$this->setPhpName('Disposicionfinalresiduosaseo');
		$this->setClassname('Disposicionfinalresiduosaseo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('disposicionfinalresiduosaseo_dfr_id_seq');
		// columns
		$this->addPrimaryKey('DFR_ID', 'DfrId', 'INTEGER', true, null, null);
		$this->addForeignKey('DFR_AUTORIDAD_AUTONOMA_ID', 'DfrAutoridadAutonomaId', 'INTEGER', 'autoridadambiental', 'AUA_ID', true, null, null);
		$this->addForeignKey('DFR_ESTADO_VIA_ACCESO_SITIO_ID', 'DfrEstadoViaAccesoSitioId', 'INTEGER', 'estadogeneral', 'ESG_ID', true, null, null);
		$this->addForeignKey('DFR_DEPARTAMENTO_DISPOCISION_ID', 'DfrDepartamentoDispocisionId', 'INTEGER', 'departamento', 'DEP_ID', true, null, null);
		$this->addForeignKey('DFR_MUNICIPIO_DISPOSICION_ID', 'DfrMunicipioDisposicionId', 'INTEGER', 'municipio', 'MUN_ID', true, null, null);
		$this->addForeignKey('DFR_TOP_ID', 'DfrTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('DFR_CONTRATA_DISPOSICION_FINAL', 'DfrContrataDisposicionFinal', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_NOMBRE_ENTIDAD_PRESTADORA_SERVICIO_DISPOSICION', 'DfrNombreEntidadPrestadoraServicioDisposicion', 'VARCHAR', false, 200, null);
		$this->addColumn('DFR_CORREGIMIENTO_DISPOSICION', 'DfrCorregimientoDisposicion', 'VARCHAR', false, 200, null);
		$this->addColumn('DFR_VEREDA_DISPOSICION', 'DfrVeredaDisposicion', 'VARCHAR', false, 200, null);
		$this->addColumn('DFR_CUENTA_AUTORIZACION_AMBIENTAL_DISPOSICION', 'DfrCuentaAutorizacionAmbientalDisposicion', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_TIPO_AUTORIZACION_AMBIENTAL', 'DfrTipoAutorizacionAmbiental', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_RESOLUCION_AUTORIZA_DISPOSICION', 'DfrResolucionAutorizaDisposicion', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_FECHA_RESOLUCION', 'DfrFechaResolucion', 'DATE', false, null, null);
		$this->addColumn('DFR_FECHA_TERMINACION_RESOLUCION', 'DfrFechaTerminacionResolucion', 'DATE', false, null, null);
		$this->addColumn('DFR_FECHA_TERMINACION_VIDA_UTIL_SITIO_DISPOSICION', 'DfrFechaTerminacionVidaUtilSitioDisposicion', 'DATE', false, null, null);
		$this->addColumn('DFR_CANTIDAD_ANUAL_RESIDUOS_BOTADERO_CIELO_ABIERTO', 'DfrCantidadAnualResiduosBotaderoCieloAbierto', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_CANTIDAD_ANUAL_RESIDUOS_RELLENO_SANITARIO', 'DfrCantidadAnualResiduosRellenoSanitario', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_DIST_CENTRO_POBLADO_MAS_CERCANO_SITIO', 'DfrDistCentroPobladoMasCercanoSitio', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_DIST_CUERPO_AGUA_MAS_CERCANO_SITIO', 'DfrDistCuerpoAguaMasCercanoSitio', 'VARCHAR', false, 100, null);
		$this->addColumn('DRF_ANIOS_UTILIZACION_SITIO', 'DrfAniosUtilizacionSitio', 'INTEGER', false, null, null);
		$this->addColumn('DFR_AREA_DESTINADA_PARA_DISPOSICION_SITIO', 'DfrAreaDestinadaParaDisposicionSitio', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_SI_RELLENO_TIPO_RELLENO', 'DfrSiRellenoTipoRelleno', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_PRESENCIA_RECICLADORES_SITIO', 'DfrPresenciaRecicladoresSitio', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_CANTIDAD_PERSONAS_SITIO', 'DfrCantidadPersonasSitio', 'INTEGER', false, null, null);
		$this->addColumn('DFR_TRATAMIENTO_LIXIVIADOS_SITIO', 'DfrTratamientoLixiviadosSitio', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_TIPO_TRATAMIENTO_LIXIVIADOS_SITIO', 'DfrTipoTratamientoLixiviadosSitio', 'VARCHAR', false, 200, null);
		$this->addColumn('DFR_LIXI_ENTRADA_FECHA', 'DfrLixiEntradaFecha', 'DATE', false, null, null);
		$this->addColumn('DFR_LIXI_ENTRADA_CAUDAL', 'DfrLixiEntradaCaudal', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_LIXI_ENTRADA_DBO5', 'DfrLixiEntradaDbo5', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_LIXI_ENTRADA_SST', 'DfrLixiEntradaSst', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_LIXI_SALIDA_FECHA2', 'DfrLixiSalidaFecha2', 'DATE', false, null, null);
		$this->addColumn('DFR_LIXI_SALIDA_CAUDAL2', 'DfrLixiSalidaCaudal2', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_LIXI_SALIDA_DBO6', 'DfrLixiSalidaDbo6', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_LIXI_SALIDA_SST2', 'DfrLixiSalidaSst2', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_DESCARGA_LIXI_RIO', 'DfrDescargaLixiRio', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_DESCARGA_LIXI_LAGO', 'DfrDescargaLixiLago', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_DESCARGA_LIXI_MAR', 'DfrDescargaLixiMar', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_DESCARGA_LIXI_SUELO', 'DfrDescargaLixiSuelo', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_DESCARGA_LIXI_RIO_NOMBRE', 'DfrDescargaLixiRioNombre', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_DESCARGA_LIXI_LAGO_NOMBRE', 'DfrDescargaLixiLagoNombre', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_DESCARGA_LIXI_MAR_NOMBRE', 'DfrDescargaLixiMarNombre', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_DESCARGA_LIXI_SUELO_NOMBRE', 'DfrDescargaLixiSueloNombre', 'VARCHAR', false, 100, null);
		$this->addColumn('DFR_PROGRAMA_CONTROL_VECTORES', 'DfrProgramaControlVectores', 'VARCHAR', false, 255, null);
		$this->addColumn('DFR_PROGRAMA_CONTROL_GASES', 'DfrProgramaControlGases', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Autoridadambiental', 'Autoridadambiental', RelationMap::MANY_TO_ONE, array('dfr_autoridad_autonoma_id' => 'aua_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Estadogeneral', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('dfr_estado_via_acceso_sitio_id' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Departamento', 'Departamento', RelationMap::MANY_TO_ONE, array('dfr_departamento_dispocision_id' => 'dep_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Municipio', 'Municipio', RelationMap::MANY_TO_ONE, array('dfr_municipio_disposicion_id' => 'mun_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('dfr_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
	} // buildRelations()

	/**
	 * 
	 * Gets the list of behaviors registered for this table
	 * 
	 * @return array Associative array (name => parameters) of behaviors
	 */
	public function getBehaviors()
	{
		return array(
			'symfony' => array('form' => 'true', 'filter' => 'true', ),
			'symfony_behaviors' => array(),
		);
	} // getBehaviors()

} // DisposicionfinalresiduosaseoTableMap
