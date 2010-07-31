<?php


/**
 * This class defines the structure of the 'fuentessubterraneas' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 18:50:51
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class FuentessubterraneasTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.FuentessubterraneasTableMap';

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
		$this->setName('fuentessubterraneas');
		$this->setPhpName('Fuentessubterraneas');
		$this->setClassname('Fuentessubterraneas');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('fuentessubterraneas_fsu_id_seq');
		// columns
		$this->addPrimaryKey('FSU_ID', 'FsuId', 'INTEGER', true, null, null);
		$this->addForeignKey('FSU_FUE_ID', 'FsuFueId', 'INTEGER', 'fuentes', 'FUE_ID', true, null, null);
		$this->addColumn('FSU_NOMBRE', 'FsuNombre', 'VARCHAR', true, 100, null);
		$this->addColumn('FSU_PROMEDIO_CAPTACION', 'FsuPromedioCaptacion', 'VARCHAR', false, 255, null);
		$this->addColumn('FSU_ENTIDAD_EXPIDIO_CONCESION', 'FsuEntidadExpidioConcesion', 'VARCHAR', false, 200, null);
		$this->addColumn('FSU_FECHA_EXPEDICION_CONCESION', 'FsuFechaExpedicionConcesion', 'DATE', false, null, null);
		$this->addColumn('FSU_FECHA_VENCIMIENTO_CONCESION', 'FsuFechaVencimientoConcesion', 'DATE', false, null, null);
		$this->addColumn('FSU_CAUDAL_ADJUDICADO_CONCESION', 'FsuCaudalAdjudicadoConcesion', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Fuentes', 'Fuentes', RelationMap::MANY_TO_ONE, array('fsu_fue_id' => 'fue_id', ), 'RESTRICT', 'RESTRICT');
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

} // FuentessubterraneasTableMap
