<?php


/**
 * This class defines the structure of the 'recolecciontrasnporteaseo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Tue Jul 27 13:17:12 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class RecolecciontrasnporteaseoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.RecolecciontrasnporteaseoTableMap';

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
		$this->setName('recolecciontrasnporteaseo');
		$this->setPhpName('Recolecciontrasnporteaseo');
		$this->setClassname('Recolecciontrasnporteaseo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('recolecciontrasnporteaseo_rtr_id_seq');
		// columns
		$this->addPrimaryKey('RTR_ID', 'RtrId', 'INTEGER', true, null, null);
		$this->addForeignKey('RTR_TOP_ID', 'RtrTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('RTR_TIPO_RECOLECCION_SELECTIVA', 'RtrTipoRecoleccionSelectiva', 'BOOLEAN', false, null, null);
		$this->addColumn('RTR_TIPO_RECOLECCION_CONJUNTIVA', 'RtrTipoRecoleccionConjuntiva', 'BOOLEAN', false, null, null);
		$this->addColumn('RTR_DISTANCIA_RECORRIDA_SITIO_FINAL', 'RtrDistanciaRecorridaSitioFinal', 'VARCHAR', false, 50, null);
		$this->addColumn('RTR_FRECUENCIA_SERVICIO_BARRIDO', 'RtrFrecuenciaServicioBarrido', 'VARCHAR', false, 100, null);
		$this->addColumn('RTR_FRECUENCIA_SERVICIO_RECOLECCION', 'RtrFrecuenciaServicioRecoleccion', 'VARCHAR', false, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('rtr_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Vehiculorecoleccion', 'Vehiculorecoleccion', RelationMap::ONE_TO_MANY, array('rtr_id' => 'ver_rtr_id', ), 'RESTRICT', 'RESTRICT');
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

} // RecolecciontrasnporteaseoTableMap
