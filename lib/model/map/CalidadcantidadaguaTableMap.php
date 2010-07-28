<?php


/**
 * This class defines the structure of the 'calidadcantidadagua' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 15:52:46
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CalidadcantidadaguaTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CalidadcantidadaguaTableMap';

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
		$this->setName('calidadcantidadagua');
		$this->setPhpName('Calidadcantidadagua');
		$this->setClassname('Calidadcantidadagua');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('calidadcantidadagua_cca_id_seq');
		// columns
		$this->addPrimaryKey('CCA_ID', 'CcaId', 'INTEGER', true, null, null);
		$this->addForeignKey('CCA_MIC_ID', 'CcaMicId', 'INTEGER', 'microcuencas', 'MIC_ID', true, null, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_CULTIVOS_PERMANENTES', 'CcaActividadesAgricolaCultivosPermanentes', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_CULTIVOS_SEMIPERMANENTES', 'CcaActividadesAgricolaCultivosSemipermanentes', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_TEMPORALES', 'CcaActividadesAgricolaTemporales', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_GANADERIA_BOBINA', 'CcaActividadPecuariaGanaderiaBobina', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_GANADERIA_EQUINA', 'CcaActividadPecuariaGanaderiaEquina', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_PORCICULTURA', 'CcaActividadPecuariaPorcicultura', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_CAPRICULTURA_OVINOS', 'CcaActividadPecuariaCapriculturaOvinos', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_AVICULTURA', 'CcaActividadPecuariaAvicultura', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_PISCICULTURA', 'CcaActividadPecuariaPiscicultura', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_OTROS_CUAL', 'CcaActividadPecuariaOtrosCual', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_QUIMICO', 'CcaControlPlagasEnfermedadesQuimico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_ORGANICO', 'CcaControlPlagasEnfermedadesOrganico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_BIOLOGICO', 'CcaControlPlagasEnfermedadesBiologico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_NINGUNO', 'CcaControlPlagasEnfermedadesNinguno', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_QUIMICO', 'CcaFertilizacionCultivosQuimico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_ORGANICO', 'CcaFertilizacionCultivosOrganico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_NINGUNO', 'CcaFertilizacionCultivosNinguno', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CAPACITACION_DADA_PRESTADOR', 'CcaCapacitacionDadaPrestador', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_QUIMICO', 'CcaControlMalezasQuimico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_MECA_MANU', 'CcaControlMalezasMecaManu', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_ORGANICO', 'CcaControlMalezasOrganico', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_NINGUNO', 'CcaControlMalezasNinguno', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_MINERIA', 'CcaMineria', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_EROSION', 'CcaErosion', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_MODIFICACIONES_PAISAJE_CONSTRUCION_VIAS', 'CcaModificacionesPaisajeConstrucionVias', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_MODIFICACIONES_PAISAJE_CONSTRUCION_VIVIENDA', 'CcaModificacionesPaisajeConstrucionVivienda', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_MODIFICACIONES_PAISAJE_CONSTRUCION_OTRO', 'CcaModificacionesPaisajeConstrucionOtro', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGAS_VIVIENDA_LIQUIDO', 'CcaDescargasViviendaLiquido', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGAS_VIVIENDA_SOLIDO', 'CcaDescargasViviendaSolido', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_AGRICOLA', 'CcaDescargaActividadProductivaAgricola', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_PECUARIA', 'CcaDescargaActividadProductivaPecuaria', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_MINERA', 'CcaDescargaActividadProductivaMinera', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_INDUSTRIAL', 'CcaDescargaActividadProductivaIndustrial', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_OTRA', 'CcaDescargaActividadProductivaOtra', 'VARCHAR', false, 255, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_MAYOR_AREA', 'CcaActividadesAgricolaMayorArea', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_CULTIVOS_PERMANENTES_TENDENCIA', 'CcaActividadesAgricolaCultivosPermanentesTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_CULTIVOS_SEMIPERMANENTES_TENDENCIA', 'CcaActividadesAgricolaCultivosSemipermanentesTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDADES_AGRICOLA_TEMPORALES_TENDENCIA', 'CcaActividadesAgricolaTemporalesTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_MAYOR_AREA', 'CcaActividadPecuariaMayorArea', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_GANADERIA_BOBINA_TENDENCIA', 'CcaActividadPecuariaGanaderiaBobinaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_GANADERIA_EQUINA_TENDENCIA', 'CcaActividadPecuariaGanaderiaEquinaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_PORCICULTURA_TENDENCIA', 'CcaActividadPecuariaPorciculturaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_CAPRICULTURA_OVINOS_TENDENCIA', 'CcaActividadPecuariaCapriculturaOvinosTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_AVICULTURA_TENDENCIA', 'CcaActividadPecuariaAviculturaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_PISCICULTURA_TENDENCIA', 'CcaActividadPecuariaPisciculturaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_ACTIVIDAD_PECUARIA_OTROS_CUAL_TENDENCIA', 'CcaActividadPecuariaOtrosCualTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_MAS_USADO', 'CcaControlPlagasEnfermedadesMasUsado', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_QUIMICO_TENDENCIA', 'CcaControlPlagasEnfermedadesQuimicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_ORGANICO_TENDENCIA', 'CcaControlPlagasEnfermedadesOrganicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_BIOLOGICO_TENDENCIA', 'CcaControlPlagasEnfermedadesBiologicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_PLAGAS_ENFERMEDADES_NINGUNO_TENDENCIA', 'CcaControlPlagasEnfermedadesNingunoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_MAS_USADO', 'CcaFertilizacionCultivosMasUsado', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_QUIMICO_TENDENCIA', 'CcaFertilizacionCultivosQuimicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_ORGANICO_TENDENCIA', 'CcaFertilizacionCultivosOrganicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_FERTILIZACION_CULTIVOS_NINGUNO_TENDENCIA', 'CcaFertilizacionCultivosNingunoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_MAS_USADO', 'CcaControlMalezasMasUsado', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_QUIMICO_TENDENCIA', 'CcaControlMalezasQuimicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_MECA_MANU_TENDENCIA', 'CcaControlMalezasMecaManuTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_ORGANICO_TENDENCIA', 'CcaControlMalezasOrganicoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_CONTROL_MALEZAS_NINGUNO_TENDENCIA', 'CcaControlMalezasNingunoTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_MINERIA_TENDENCIA', 'CcaMineriaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_EROSION_TENDENCIA', 'CcaErosionTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_MODIFICACIONES_PAISAJE_CONSTRUCION_VIAS_TENDENCIA', 'CcaModificacionesPaisajeConstrucionViasTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_MODIFICACIONES_PAISAJE_CONSTRUCION_VIVIENDA_TENDENCIA', 'CcaModificacionesPaisajeConstrucionViviendaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_MODIFICACIONES_PAISAJE_CONSTRUCION_OTRO_TENDENCIA', 'CcaModificacionesPaisajeConstrucionOtroTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_AGRICOLA_TENDENCIA', 'CcaDescargaActividadProductivaAgricolaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_PECUARIA_TENDENCIA', 'CcaDescargaActividadProductivaPecuariaTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_MINERA_TENDENCIA', 'CcaDescargaActividadProductivaMineraTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_INDUSTRIAL_TENDENCIA', 'CcaDescargaActividadProductivaIndustrialTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_OTRA_TENDENCIA', 'CcaDescargaActividadProductivaOtraTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_AGRICOLA_ESPE', 'CcaDescargaActividadProductivaAgricolaEspe', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_PECUARIA_ESPE', 'CcaDescargaActividadProductivaPecuariaEspe', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_MINERA_ESPE', 'CcaDescargaActividadProductivaMineraEspe', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_INDUSTRIAL_ESPE', 'CcaDescargaActividadProductivaIndustrialEspe', 'VARCHAR', false, 50, null);
		$this->addColumn('CCA_DESCARGA_ACTIVIDAD_PRODUCTIVA_OTRA_ESPE', 'CcaDescargaActividadProductivaOtraEspe', 'VARCHAR', false, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Microcuencas', 'Microcuencas', RelationMap::MANY_TO_ONE, array('cca_mic_id' => 'mic_id', ), 'RESTRICT', 'CASCADE');
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

} // CalidadcantidadaguaTableMap
