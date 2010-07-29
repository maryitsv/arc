<?php


/**
 * This class defines the structure of the 'personaloperativo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 21:52:41
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class PersonaloperativoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.PersonaloperativoTableMap';

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
		$this->setName('personaloperativo');
		$this->setPhpName('Personaloperativo');
		$this->setClassname('Personaloperativo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('personaloperativo_pop_id_seq');
		// columns
		$this->addPrimaryKey('POP_ID', 'PopId', 'INTEGER', true, null, null);
		$this->addForeignKey('POP_TRA_ID', 'PopTraId', 'INTEGER', 'trabajadoresyvinculacion', 'TRA_ID', false, null, null);
		$this->addColumn('POP_CARGO', 'PopCargo', 'VARCHAR', false, 100, null);
		$this->addColumn('POP_CONTRATO_TERMINO_INDEFINIDO', 'PopContratoTerminoIndefinido', 'VARCHAR', false, 255, null);
		$this->addColumn('POP_CONTRATO_TERMINO_FIJO', 'PopContratoTerminoFijo', 'VARCHAR', false, 255, null);
		$this->addColumn('POP_ORDEN_PRESTACION_SERVICIOS', 'PopOrdenPrestacionServicios', 'VARCHAR', false, 255, null);
		$this->addColumn('POP_SIN_CONTRATO_CON_BONIFICACION', 'PopSinContratoConBonificacion', 'VARCHAR', false, 255, null);
		$this->addColumn('POP_REMUNERACION_MENSUAL', 'PopRemuneracionMensual', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Trabajadoresyvinculacion', 'Trabajadoresyvinculacion', RelationMap::MANY_TO_ONE, array('pop_tra_id' => 'tra_id', ), 'RESTRICT', 'CASCADE');
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

} // PersonaloperativoTableMap
