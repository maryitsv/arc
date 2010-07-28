<?php


/**
 * This class defines the structure of the 'vehiculorecoleccion' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/27/10 16:11:08
=======
 * 07/27/10 18:48:26
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
class VehiculorecoleccionTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.VehiculorecoleccionTableMap';

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
		$this->setName('vehiculorecoleccion');
		$this->setPhpName('Vehiculorecoleccion');
		$this->setClassname('Vehiculorecoleccion');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('vehiculorecoleccion_ver_id_seq');
		// columns
		$this->addPrimaryKey('VER_ID', 'VerId', 'INTEGER', true, null, null);
		$this->addForeignKey('VER_RTR_ID', 'VerRtrId', 'INTEGER', 'recolecciontrasnporteaseo', 'RTR_ID', true, null, null);
		$this->addColumn('VER_TIPO_VEHICULO', 'VerTipoVehiculo', 'VARCHAR', false, 50, null);
		$this->addColumn('VER_TIPO_TRACCION', 'VerTipoTraccion', 'VARCHAR', false, 50, null);
		$this->addColumn('VER_CAPACIDAD', 'VerCapacidad', 'VARCHAR', false, 50, null);
		$this->addColumn('VER_ESADO_VEHICULO', 'VerEsadoVehiculo', 'VARCHAR', false, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Recolecciontrasnporteaseo', 'Recolecciontrasnporteaseo', RelationMap::MANY_TO_ONE, array('ver_rtr_id' => 'rtr_id', ), 'RESTRICT', 'RESTRICT');
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

} // VehiculorecoleccionTableMap
