<?php


/**
 * This class defines the structure of the 'tipofuentesuperficial' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/29/10 16:24:29
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TipofuentesuperficialTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TipofuentesuperficialTableMap';

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
		$this->setName('tipofuentesuperficial');
		$this->setPhpName('Tipofuentesuperficial');
		$this->setClassname('Tipofuentesuperficial');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tipofuentesuperficial_tfu_id_seq');
		// columns
		$this->addPrimaryKey('TFU_ID', 'TfuId', 'INTEGER', true, null, null);
		$this->addForeignKey('TFU_FUE_ID', 'TfuFueId', 'INTEGER', 'fuentes', 'FUE_ID', true, null, null);
		$this->addColumn('TFU_NACIMIENTO', 'TfuNacimiento', 'VARCHAR', true, 100, null);
		$this->addColumn('TFU_QUEBRADA_RIO', 'TfuQuebradaRio', 'VARCHAR', false, 100, null);
		$this->addColumn('TFU_RESERVORIO', 'TfuReservorio', 'VARCHAR', false, 100, null);
		$this->addColumn('TFU_MAR', 'TfuMar', 'VARCHAR', false, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Fuentes', 'Fuentes', RelationMap::MANY_TO_ONE, array('tfu_fue_id' => 'fue_id', ), 'RESTRICT', 'RESTRICT');
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

} // TipofuentesuperficialTableMap
