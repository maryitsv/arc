<?php


/**
 * This class defines the structure of the 'fuentessuperficiales' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/26/10 20:32:35
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class FuentessuperficialesTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.FuentessuperficialesTableMap';

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
		$this->setName('fuentessuperficiales');
		$this->setPhpName('Fuentessuperficiales');
		$this->setClassname('Fuentessuperficiales');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('fuentessuperficiales_fsp_id_seq');
		// columns
		$this->addPrimaryKey('FSP_ID', 'FspId', 'INTEGER', true, null, null);
		$this->addForeignKey('FSP_FUE_ID', 'FspFueId', 'INTEGER', 'fuentes', 'FUE_ID', true, null, null);
		$this->addColumn('FSP_NOMBRE_FUENTE', 'FspNombreFuente', 'VARCHAR', true, 100, null);
		$this->addColumn('FSP_EPOCA_LLUVIA_CAUDAL_TOTAL', 'FspEpocaLluviaCaudalTotal', 'VARCHAR', false, 255, null);
		$this->addColumn('FSP_EPOCA_LLUVIA_CAUDAL_CAPTADO', 'FspEpocaLluviaCaudalCaptado', 'VARCHAR', false, 255, null);
		$this->addColumn('FSP_EPOCA_SECA_CAUDAL_TOTAL', 'FspEpocaSecaCaudalTotal', 'VARCHAR', false, 255, null);
		$this->addColumn('FSP_EPOCA_SECA_CAUDAL_CAPTADO', 'FspEpocaSecaCaudalCaptado', 'VARCHAR', false, 255, null);
		$this->addColumn('CAF_ENTIDAD_EXPIDIO_CONCESION', 'CafEntidadExpidioConcesion', 'VARCHAR', false, 200, null);
		$this->addColumn('CAF_FECHA_EXPEDICION_CONCESION', 'CafFechaExpedicionConcesion', 'DATE', false, null, null);
		$this->addColumn('CAF_FECHA_VENCIMIENTO_CONCESION', 'CafFechaVencimientoConcesion', 'DATE', false, null, null);
		$this->addColumn('CAF_CAUDAL_ADJUDICADO_CONCESION', 'CafCaudalAdjudicadoConcesion', 'VARCHAR', false, 255, null);
		$this->addColumn('CAF_TIPO_FUENTE', 'CafTipoFuente', 'VARCHAR', false, 30, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Fuentes', 'Fuentes', RelationMap::MANY_TO_ONE, array('fsp_fue_id' => 'fue_id', ), 'RESTRICT', 'RESTRICT');
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

} // FuentessuperficialesTableMap
