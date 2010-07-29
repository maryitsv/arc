<?php


/**
 * This class defines the structure of the 'reddistribucion' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 01:11:14
=======
<<<<<<< HEAD
 * 07/29/10 12:37:35
=======
<<<<<<< HEAD
 * 07/29/10 00:07:04
=======
 * 07/28/10 21:52:43
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
>>>>>>> 48ea370b158b87b5f84de3ad8d71891aac6362b0
>>>>>>> 424fbbb7da7e7b7dd07c377772bb35df6fa5351d
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class ReddistribucionTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ReddistribucionTableMap';

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
		$this->setName('reddistribucion');
		$this->setPhpName('Reddistribucion');
		$this->setClassname('Reddistribucion');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('reddistribucion_rdist_id_seq');
		// columns
		$this->addPrimaryKey('RDIST_ID', 'RdistId', 'INTEGER', true, null, null);
		$this->addColumn('RDIST_NOMBRE', 'RdistNombre', 'VARCHAR', true, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativareddistribucionacueducto', 'Tecnicooperativareddistribucionacueducto', RelationMap::ONE_TO_MANY, array('rdist_id' => 'tord_red_distribucion_id', ), 'RESTRICT', 'CASCADE');
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

} // ReddistribucionTableMap
