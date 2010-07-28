<?php


/**
 * This class defines the structure of the 'comercial' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/28/10 13:25:11
=======
 * 07/28/10 15:52:47
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
class ComercialTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ComercialTableMap';

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
		$this->setName('comercial');
		$this->setPhpName('Comercial');
		$this->setClassname('Comercial');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('comercial_com_id_seq');
		// columns
		$this->addPrimaryKey('COM_ID', 'ComId', 'INTEGER', true, null, null);
		$this->addForeignKey('COM_PPS_PRE_ID', 'ComPpsPreId', 'INTEGER', 'periodoporprestadorservicio', 'PPS_PRE_ID', true, null, null);
		$this->addColumn('COM_PPS_ANIO', 'ComPpsAnio', 'INTEGER', true, null, null);
		$this->addColumn('COM_PPS_SER_ID', 'ComPpsSerId', 'INTEGER', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Periodoporprestadorservicio', 'Periodoporprestadorservicio', RelationMap::MANY_TO_ONE, array('com_pps_pre_id' => 'pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Analisiscobertura', 'Analisiscobertura', RelationMap::ONE_TO_MANY, array('com_id' => 'aco_com_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Facturacionyrecaudo', 'Facturacionyrecaudo', RelationMap::ONE_TO_MANY, array('com_id' => 'fac_com_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Fondosolidaridadredistribucioningresos', 'Fondosolidaridadredistribucioningresos', RelationMap::ONE_TO_MANY, array('com_id' => 'fsi_com_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Peticionesquejasrecursos', 'Peticionesquejasrecursos', RelationMap::ONE_TO_MANY, array('com_id' => 'pqr_com_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Vinculacionalservicio', 'Vinculacionalservicio', RelationMap::ONE_TO_MANY, array('com_id' => 'vas_com_id', ), 'RESTRICT', 'CASCADE');
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

} // ComercialTableMap
