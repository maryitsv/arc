<?php


/**
 * This class defines the structure of the 'materialcanal' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/26/10 20:32:37
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class MaterialcanalTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.MaterialcanalTableMap';

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
		$this->setName('materialcanal');
		$this->setPhpName('Materialcanal');
		$this->setClassname('Materialcanal');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('materialcanal_mca_id_seq');
		// columns
		$this->addPrimaryKey('MCA_ID', 'McaId', 'INTEGER', true, null, null);
		$this->addColumn('MCA_NOMBRE', 'McaNombre', 'VARCHAR', true, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativaaduccionimpulsionacueducto', 'Tecnicooperativaaduccionimpulsionacueducto', RelationMap::ONE_TO_MANY, array('mca_id' => 'toai_material_canal_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativalineaconduccionaguacrudaacueducto', 'Tecnicooperativalineaconduccionaguacrudaacueducto', RelationMap::ONE_TO_MANY, array('mca_id' => 'tolc_material_canal_id', ), 'RESTRICT', 'CASCADE');
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

} // MaterialcanalTableMap
