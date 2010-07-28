<?php


/**
 * This class defines the structure of the 'calidad' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/28/10 13:25:05
=======
 * 07/28/10 15:52:42
>>>>>>> 9ae73683bd9fcb839d0feb5ce3110184317c3501
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CalidadTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CalidadTableMap';

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
		$this->setName('calidad');
		$this->setPhpName('Calidad');
		$this->setClassname('Calidad');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('calidad_cal_id_seq');
		// columns
		$this->addPrimaryKey('CAL_ID', 'CalId', 'INTEGER', true, null, null);
		$this->addForeignKey('CAL_PPS_PRE_ID', 'CalPpsPreId', 'INTEGER', 'periodoporprestadorservicio', 'PPS_PRE_ID', true, null, null);
		$this->addColumn('CAL_PPS_ANIO', 'CalPpsAnio', 'INTEGER', true, null, null);
		$this->addColumn('CAL_PPS_SER_ID', 'CalPpsSerId', 'INTEGER', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Periodoporprestadorservicio', 'Periodoporprestadorservicio', RelationMap::MANY_TO_ONE, array('cal_pps_pre_id' => 'pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Calidadagua', 'Calidadagua', RelationMap::ONE_TO_MANY, array('cal_id' => 'cag_cal_id', ), 'RESTRICT', 'CASCADE');
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

} // CalidadTableMap
