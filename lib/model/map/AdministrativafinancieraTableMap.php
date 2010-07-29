<?php


/**
 * This class defines the structure of the 'administrativafinanciera' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 00:06:49
=======
 * 07/28/10 21:52:25
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class AdministrativafinancieraTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.AdministrativafinancieraTableMap';

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
		$this->setName('administrativafinanciera');
		$this->setPhpName('Administrativafinanciera');
		$this->setClassname('Administrativafinanciera');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('administrativafinanciera_iaf_id_seq');
		// columns
		$this->addPrimaryKey('IAF_ID', 'IafId', 'INTEGER', true, null, null);
		$this->addForeignKey('IAF_PPS_PRE_ID', 'IafPpsPreId', 'INTEGER', 'periodoporprestadorservicio', 'PPS_PRE_ID', true, null, null);
		$this->addColumn('IAF_PPS_ANIO', 'IafPpsAnio', 'INTEGER', true, null, null);
		$this->addColumn('IAF_PPS_SER_ID', 'IafPpsSerId', 'INTEGER', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Periodoporprestadorservicio', 'Periodoporprestadorservicio', RelationMap::MANY_TO_ONE, array('iaf_pps_pre_id' => 'pps_pre_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Capacitacion', 'Capacitacion', RelationMap::ONE_TO_MANY, array('iaf_id' => 'cap_iaf_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Gestionresultado', 'Gestionresultado', RelationMap::ONE_TO_MANY, array('iaf_id' => 'gre_iaf_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Informacioncontable', 'Informacioncontable', RelationMap::ONE_TO_MANY, array('iaf_id' => 'ico_iaf_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Participacionciudadana', 'Participacionciudadana', RelationMap::ONE_TO_MANY, array('iaf_id' => 'par_iaf_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Trabajadoresyvinculacion', 'Trabajadoresyvinculacion', RelationMap::ONE_TO_MANY, array('iaf_id' => 'tra_iaf_id', ), 'RESTRICT', 'CASCADE');
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

} // AdministrativafinancieraTableMap
