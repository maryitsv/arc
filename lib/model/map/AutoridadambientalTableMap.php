<?php


/**
 * This class defines the structure of the 'autoridadambiental' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 18:50:37
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class AutoridadambientalTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.AutoridadambientalTableMap';

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
		$this->setName('autoridadambiental');
		$this->setPhpName('Autoridadambiental');
		$this->setClassname('Autoridadambiental');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('autoridadambiental_aua_id_seq');
		// columns
		$this->addPrimaryKey('AUA_ID', 'AuaId', 'INTEGER', true, null, null);
		$this->addColumn('AUA_NOMBRE', 'AuaNombre', 'VARCHAR', true, 300, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Disposicionfinalresiduosaseo', 'Disposicionfinalresiduosaseo', RelationMap::ONE_TO_MANY, array('aua_id' => 'dfr_autoridad_autonoma_id', ), 'RESTRICT', 'RESTRICT');
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

} // AutoridadambientalTableMap
