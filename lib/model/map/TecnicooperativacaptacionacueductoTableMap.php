<?php


/**
 * This class defines the structure of the 'tecnicooperativacaptacionacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 15:52:57
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativacaptacionacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativacaptacionacueductoTableMap';

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
		$this->setName('tecnicooperativacaptacionacueducto');
		$this->setPhpName('Tecnicooperativacaptacionacueducto');
		$this->setClassname('Tecnicooperativacaptacionacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativacaptacionacueducto_toca_id_seq');
		// columns
		$this->addPrimaryKey('TOCA_ID', 'TocaId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOCA_TOP_ID', 'TocaTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addForeignKey('TOCA_CAPT_ID', 'TocaCaptId', 'INTEGER', 'captacion', 'CAPT_ID', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('toca_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Captacion', 'Captacion', RelationMap::MANY_TO_ONE, array('toca_capt_id' => 'capt_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativacaptacionacueductoTableMap
