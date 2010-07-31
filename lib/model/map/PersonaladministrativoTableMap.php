<?php


/**
 * This class defines the structure of the 'personaladministrativo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Fri Jul 30 18:21:00 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class PersonaladministrativoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.PersonaladministrativoTableMap';

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
		$this->setName('personaladministrativo');
		$this->setPhpName('Personaladministrativo');
		$this->setClassname('Personaladministrativo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('personaladministrativo_pad_id_seq');
		// columns
		$this->addPrimaryKey('PAD_ID', 'PadId', 'INTEGER', true, null, null);
		$this->addForeignKey('PAD_TRA_ID', 'PadTraId', 'INTEGER', 'trabajadoresyvinculacion', 'TRA_ID', false, null, null);
		$this->addColumn('PAD_CARGO', 'PadCargo', 'VARCHAR', false, 100, null);
		$this->addColumn('PAD_CONTRATO_TERMINO_INDEFINIDO', 'PadContratoTerminoIndefinido', 'VARCHAR', false, 255, null);
		$this->addColumn('PAD_CONTRATO_TERMINO_FIJO', 'PadContratoTerminoFijo', 'VARCHAR', false, 255, null);
		$this->addColumn('PAD_ORDEN_PESTACION_SERVICIOS', 'PadOrdenPestacionServicios', 'VARCHAR', false, 255, null);
		$this->addColumn('PAD_SIN_CONTRATO_CON_BONIFICACION', 'PadSinContratoConBonificacion', 'VARCHAR', false, 255, null);
		$this->addColumn('PAD_REMUNERACION_MENSUAL', 'PadRemuneracionMensual', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Trabajadoresyvinculacion', 'Trabajadoresyvinculacion', RelationMap::MANY_TO_ONE, array('pad_tra_id' => 'tra_id', ), 'RESTRICT', 'CASCADE');
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

} // PersonaladministrativoTableMap
