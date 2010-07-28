<?php


/**
 * This class defines the structure of the 'proteccionfuentessuperficialesagua' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 15:52:54
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class ProteccionfuentessuperficialesaguaTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ProteccionfuentessuperficialesaguaTableMap';

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
		$this->setName('proteccionfuentessuperficialesagua');
		$this->setPhpName('Proteccionfuentessuperficialesagua');
		$this->setClassname('Proteccionfuentessuperficialesagua');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('proteccionfuentessuperficialesagua_pfu_id_seq');
		// columns
		$this->addPrimaryKey('PFU_ID', 'PfuId', 'INTEGER', true, null, null);
		$this->addForeignKey('PFU_MIC_ID', 'PfuMicId', 'INTEGER', 'microcuencas', 'MIC_ID', true, null, null);
		$this->addColumn('PFU_PROGRAMAS_AISLAMIENTO', 'PfuProgramasAislamiento', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_PROGRAMAS_REFORESTACION', 'PfuProgramasReforestacion', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_PROGRAMAS_MEJORAMIENTO_USO_SUELO', 'PfuProgramasMejoramientoUsoSuelo', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_PROGRAMAS_ADQUISICION_TIERRA', 'PfuProgramasAdquisicionTierra', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_PROGRAMAS_EDUCACION_AMBIENTAL', 'PfuProgramasEducacionAmbiental', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_PROGRAMAS_REDUCCION_USO_AGROQUIMICOS', 'PfuProgramasReduccionUsoAgroquimicos', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_SITUACION_ARRIBA_CAPTACION_RESERVA', 'PfuSituacionArribaCaptacionReserva', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_SITUACION_ARRIBA_CAPTACION_PROTEGIDA', 'PfuSituacionArribaCaptacionProtegida', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_BOSQUE_NATURAL', 'PfuCoberturaForestalBosqueNatural', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR', 'PfuCoberturaForestalBosqueProtector', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR_PRODUCTOR', 'PfuCoberturaForestalBosqueProtectorProductor', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_PRODUCTOR', 'PfuCoberturaForestalProductor', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_REGENERACION_NATURAL', 'PfuCoberturaForestalRegeneracionNatural', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_BOSQUE_NATURAL_TENDENCIA', 'PfuCoberturaForestalBosqueNaturalTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR_TENDENCIA', 'PfuCoberturaForestalBosqueProtectorTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR_PRODUCTOR_TENDENCIA', 'PfuCoberturaForestalBosqueProtectorProductorTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_PRODUCTOR_TENDENCIA', 'PfuCoberturaForestalProductorTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_REGENERACION_NATURAL_TENDENCIA', 'PfuCoberturaForestalRegeneracionNaturalTendencia', 'VARCHAR', false, 50, null);
		$this->addColumn('PFU_AISLAMIENTO_FRANJA_AMARILLA_MICROCUENCA', 'PfuAislamientoFranjaAmarillaMicrocuenca', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_AREA_PROTECTORA_CAUCE', 'PfuCoberturaForestalAreaProtectoraCauce', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_AREA_MICROCUENCA_PROPIEDAD_ACUEDUCTO', 'PfuAreaMicrocuencaPropiedadAcueducto', 'VARCHAR', false, 255, null);
		$this->addColumn('PFU_COBERTURA_FORESTAL_MAS_USADA', 'PfuCoberturaForestalMasUsada', 'VARCHAR', false, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Microcuencas', 'Microcuencas', RelationMap::MANY_TO_ONE, array('pfu_mic_id' => 'mic_id', ), 'RESTRICT', 'CASCADE');
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

} // ProteccionfuentessuperficialesaguaTableMap
