<?php


/**
 * This class defines the structure of the 'materialreddistribucion' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/22/10 22:07:55
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class MaterialreddistribucionTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.MaterialreddistribucionTableMap';

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
		$this->setName('materialreddistribucion');
		$this->setPhpName('Materialreddistribucion');
		$this->setClassname('Materialreddistribucion');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('materialreddistribucion_mrd_id_seq');
		// columns
		$this->addPrimaryKey('MRD_ID', 'MrdId', 'INTEGER', true, null, null);
		$this->addColumn('MRD_NOMBRE', 'MrdNombre', 'VARCHAR', true, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativareddistribucionacueducto', 'Tecnicooperativareddistribucionacueducto', RelationMap::ONE_TO_MANY, array('mrd_id' => 'tord_material_distribucion_id', ), 'RESTRICT', 'CASCADE');
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

} // MaterialreddistribucionTableMap
