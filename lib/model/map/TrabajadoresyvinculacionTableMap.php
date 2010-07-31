<?php


/**
 * This class defines the structure of the 'trabajadoresyvinculacion' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 22:19:59
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TrabajadoresyvinculacionTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TrabajadoresyvinculacionTableMap';

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
		$this->setName('trabajadoresyvinculacion');
		$this->setPhpName('Trabajadoresyvinculacion');
		$this->setClassname('Trabajadoresyvinculacion');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('trabajadoresyvinculacion_tra_id_seq');
		// columns
		$this->addPrimaryKey('TRA_ID', 'TraId', 'INTEGER', true, null, null);
		$this->addForeignKey('TRA_IAF_ID', 'TraIafId', 'INTEGER', 'administrativafinanciera', 'IAF_ID', false, null, null);
		$this->addColumn('TRA_MANUAL_PROCEDIMIENTO', 'TraManualProcedimiento', 'VARCHAR', false, 255, null);
		$this->addColumn('TRA_MANUAL_FUNCIONES', 'TraManualFunciones', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Administrativafinanciera', 'Administrativafinanciera', RelationMap::MANY_TO_ONE, array('tra_iaf_id' => 'iaf_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Personaladministrativo', 'Personaladministrativo', RelationMap::ONE_TO_MANY, array('tra_id' => 'pad_tra_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Personaloperativo', 'Personaloperativo', RelationMap::ONE_TO_MANY, array('tra_id' => 'pop_tra_id', ), 'RESTRICT', 'CASCADE');
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

} // TrabajadoresyvinculacionTableMap
