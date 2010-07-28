<?php


/**
 * This class defines the structure of the 'tanque' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/28/10 13:25:22
=======
 * 07/28/10 15:52:56
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
class TanqueTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TanqueTableMap';

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
		$this->setName('tanque');
		$this->setPhpName('Tanque');
		$this->setClassname('Tanque');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tanque_tan_id_seq');
		// columns
		$this->addPrimaryKey('TAN_ID', 'TanId', 'INTEGER', true, null, null);
		$this->addForeignKey('TAN_ESTADO_ID', 'TanEstadoId', 'INTEGER', 'estadogeneral', 'ESG_ID', true, null, null);
		$this->addColumn('TAN_BYPASS_DIRECTO_RED', 'TanBypassDirectoRed', 'VARCHAR', false, 255, null);
		$this->addColumn('TAN_PRESENCIA_VALVULA_CONTROL', 'TanPresenciaValvulaControl', 'VARCHAR', false, 255, null);
		$this->addColumn('TAN_PROTECCION_TAPA', 'TanProteccionTapa', 'VARCHAR', false, 255, null);
		$this->addColumn('TAN_CERRAMIENTO_LOTE', 'TanCerramientoLote', 'VARCHAR', false, 255, null);
		$this->addColumn('TAN_VENTOSA_SALIDA', 'TanVentosaSalida', 'VARCHAR', false, 255, null);
		$this->addColumn('TAN_MACRO_MEDIDOR', 'TanMacroMedidor', 'VARCHAR', false, 255, null);
		$this->addColumn('TAN_VOLUMEN', 'TanVolumen', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Estadogeneral', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tan_estado_id' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativaalmacenamientoacueducto', 'Tecnicooperativaalmacenamientoacueducto', RelationMap::ONE_TO_MANY, array('tan_id' => 'toaa_tan_id', ), 'RESTRICT', 'CASCADE');
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

} // TanqueTableMap
