<?php


/**
 * This class defines the structure of the 'cantidadaguafuentessuperficiales' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/22/10 22:07:47
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CantidadaguafuentessuperficialesTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CantidadaguafuentessuperficialesTableMap';

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
		$this->setName('cantidadaguafuentessuperficiales');
		$this->setPhpName('Cantidadaguafuentessuperficiales');
		$this->setClassname('Cantidadaguafuentessuperficiales');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('cantidadaguafuentessuperficiales_caf_id_seq');
		// columns
		$this->addPrimaryKey('CAF_ID', 'CafId', 'INTEGER', true, null, null);
		$this->addForeignKey('CAF_FUE_ID', 'CafFueId', 'INTEGER', 'fuentes', 'FUE_ID', true, null, null);
		$this->addColumn('CAF_NOMBRE_FUENTE', 'CafNombreFuente', 'VARCHAR', true, 100, null);
		$this->addColumn('CAF_EPOCA_LLUVIA_CAUDAL_TOTAL', 'CafEpocaLluviaCaudalTotal', 'VARCHAR', false, 255, null);
		$this->addColumn('CAF_EPOCA_LLUVIA_CAUDAL_CAPTADO', 'CafEpocaLluviaCaudalCaptado', 'VARCHAR', false, 255, null);
		$this->addColumn('CAF_EPOCA_SECA_CAUDAL_TOTAL', 'CafEpocaSecaCaudalTotal', 'VARCHAR', false, 255, null);
		$this->addColumn('CAF_EPOCA_SECA_CAUDAL_CAPTADO', 'CafEpocaSecaCaudalCaptado', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Fuentes', 'Fuentes', RelationMap::MANY_TO_ONE, array('caf_fue_id' => 'fue_id', ), 'RESTRICT', 'RESTRICT');
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

} // CantidadaguafuentessuperficialesTableMap
