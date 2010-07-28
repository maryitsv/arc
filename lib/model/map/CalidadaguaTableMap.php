<?php


/**
 * This class defines the structure of the 'calidadagua' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/27/10 16:10:46
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CalidadaguaTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CalidadaguaTableMap';

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
		$this->setName('calidadagua');
		$this->setPhpName('Calidadagua');
		$this->setClassname('Calidadagua');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('calidadagua_cag_id_seq');
		// columns
		$this->addPrimaryKey('CAG_ID', 'CagId', 'INTEGER', true, null, null);
		$this->addForeignKey('CAG_CAL_ID', 'CagCalId', 'INTEGER', 'calidad', 'CAL_ID', true, null, null);
		$this->addColumn('CAG_CONTROL_CA_FUENTE', 'CagControlCaFuente', 'BOOLEAN', false, null, null);
		$this->addColumn('CAG_MAPA_RIESGO', 'CagMapaRiesgo', 'BOOLEAN', false, null, null);
		$this->addColumn('CAG_DB05_VALOR', 'CagDb05Valor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_DB05_FRECUENCIA', 'CagDb05Frecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_COLIFORMES_VALOR', 'CagColiformesValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_COLIFORMES_FRECUENCIA', 'CagColiformesFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_OXIGENO_DISUELTO_VALOR', 'CagOxigenoDisueltoValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_OXIGENO_DISUELTO_FRECUENCIA', 'CagOxigenoDisueltoFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_PH_VALOR', 'CagPhValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_PH_FRECUENCIA', 'CagPhFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_TURBIEDAD_VALOR', 'CagTurbiedadValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_TURBIEDAD_FRECUENCIA', 'CagTurbiedadFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_COLOR_VERDADERO_VALOR', 'CagColorVerdaderoValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_COLOR_VERDADERO_FRECUENCIA', 'CagColorVerdaderoFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_SABOR_OLOR_VALOR', 'CagSaborOlorValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_SABOR_OLOR_FRECUENCIA', 'CagSaborOlorFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_CLORUROS_VALOR', 'CagClorurosValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_CLORUROS_FRECUENCIA', 'CagClorurosFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_FLUORUROS_VALOR', 'CagFluorurosValor', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_FLUORUROS_FRECUENCIA', 'CagFluorurosFrecuencia', 'VARCHAR', false, 255, null);
		$this->addColumn('CAG_LABORATORIO_PROPIO', 'CagLaboratorioPropio', 'BOOLEAN', false, null, null);
		$this->addColumn('CAG_CONTROL_CA_DISTRIBUIDA', 'CagControlCaDistribuida', 'BOOLEAN', false, null, null);
		$this->addColumn('CAG_PUNTOS_RED_ANALIZADOS', 'CagPuntosRedAnalizados', 'INTEGER', false, null, null);
		$this->addColumn('CAG_VISITA_SSPD', 'CagVisitaSspd', 'BOOLEAN', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Calidad', 'Calidad', RelationMap::MANY_TO_ONE, array('cag_cal_id' => 'cal_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Parametroxfrecuencia', 'Parametroxfrecuencia', RelationMap::ONE_TO_MANY, array('cag_id' => 'pfe_cag_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Resultadosxpunto', 'Resultadosxpunto', RelationMap::ONE_TO_MANY, array('cag_id' => 'rep_cag_id', ), 'RESTRICT', 'RESTRICT');
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

} // CalidadaguaTableMap
