<?php


/**
 * This class defines the structure of the 'prestadorporservicio' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/27/10 16:10:58
=======
 * 07/27/10 18:48:14
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
class PrestadorporservicioTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.PrestadorporservicioTableMap';

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
		$this->setName('prestadorporservicio');
		$this->setPhpName('Prestadorporservicio');
		$this->setClassname('Prestadorporservicio');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(false);
		// columns
		$this->addForeignPrimaryKey('PPSG_PRE_ID', 'PpsgPreId', 'INTEGER' , 'prestador', 'PRE_ID', true, null, null);
		$this->addForeignPrimaryKey('PPSG_SER_ID', 'PpsgSerId', 'INTEGER' , 'servicio', 'SER_ID', true, null, null);
		$this->addColumn('PPSG_OBSERVACION', 'PpsgObservacion', 'LONGVARCHAR', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Prestador', 'Prestador', RelationMap::MANY_TO_ONE, array('ppsg_pre_id' => 'pre_id', ), null, 'CASCADE');
    $this->addRelation('Servicio', 'Servicio', RelationMap::MANY_TO_ONE, array('ppsg_ser_id' => 'ser_id', ), null, 'CASCADE');
    $this->addRelation('Periodoporprestadorservicio', 'Periodoporprestadorservicio', RelationMap::ONE_TO_MANY, array('ppsg_pre_id' => 'pps_pre_id', ), null, 'CASCADE');
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

} // PrestadorporservicioTableMap
