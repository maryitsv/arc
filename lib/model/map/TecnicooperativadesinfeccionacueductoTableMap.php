<?php


/**
 * This class defines the structure of the 'tecnicooperativadesinfeccionacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * Fri Jul 30 18:21:03 2010
=======
 * 07/30/10 18:51:04
>>>>>>> 5fbae45358806c5fc2096efd08a691e24fe41e3c
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativadesinfeccionacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativadesinfeccionacueductoTableMap';

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
		$this->setName('tecnicooperativadesinfeccionacueducto');
		$this->setPhpName('Tecnicooperativadesinfeccionacueducto');
		$this->setClassname('Tecnicooperativadesinfeccionacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativadesinfeccionacueducto_toda_id_seq');
		// columns
		$this->addPrimaryKey('TODA_ID', 'TodaId', 'INTEGER', true, null, null);
		$this->addForeignKey('TODA_TOP_ID', 'TodaTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('TODA_DESINFECCION', 'TodaDesinfeccion', 'VARCHAR', false, 255, null);
		$this->addColumn('TODA_DESINFECCION_CLORO', 'TodaDesinfeccionCloro', 'VARCHAR', false, 255, null);
		$this->addColumn('TODA_DESINFECCION_HIPOCLORITO_SODIO', 'TodaDesinfeccionHipocloritoSodio', 'VARCHAR', false, 255, null);
		$this->addColumn('TODA_DESINFECCION_HIPOCLORITO_CALCIO', 'TodaDesinfeccionHipocloritoCalcio', 'VARCHAR', false, 255, null);
		$this->addColumn('TODA_DESINFECCION_OZONACION', 'TodaDesinfeccionOzonacion', 'VARCHAR', false, 255, null);
		$this->addColumn('TODA_DESINFECCION_RAYOS_ULTRAVIOLETA', 'TodaDesinfeccionRayosUltravioleta', 'VARCHAR', false, 255, null);
		$this->addColumn('TODA_DESINFECCION_DIOXIDO_CLORO', 'TodaDesinfeccionDioxidoCloro', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('toda_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativadesinfeccionacueductoTableMap
