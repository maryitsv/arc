<?php


/**
 * This class defines the structure of the 'tecnicooperativaalmacenamientoacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/27/10 16:11:01
=======
 * 07/27/10 18:48:18
>>>>>>> 6b4e80154d2fdf2e3b5339f488c0c1e98b3b0a65
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativaalmacenamientoacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativaalmacenamientoacueductoTableMap';

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
		$this->setName('tecnicooperativaalmacenamientoacueducto');
		$this->setPhpName('Tecnicooperativaalmacenamientoacueducto');
		$this->setClassname('Tecnicooperativaalmacenamientoacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativaalmacenamientoacueducto_toaa_id_seq');
		// columns
		$this->addPrimaryKey('TOAA_ID', 'ToaaId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOAA_TOP_ID', 'ToaaTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addForeignKey('TOAA_TAN_ID', 'ToaaTanId', 'INTEGER', 'tanque', 'TAN_ID', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('toaa_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tanque', 'Tanque', RelationMap::MANY_TO_ONE, array('toaa_tan_id' => 'tan_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativaalmacenamientoacueductoTableMap
