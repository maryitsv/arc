<?php


/**
 * This class defines the structure of the 'peticionesquejasrecursos' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/22/10 22:07:58
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class PeticionesquejasrecursosTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.PeticionesquejasrecursosTableMap';

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
		$this->setName('peticionesquejasrecursos');
		$this->setPhpName('Peticionesquejasrecursos');
		$this->setClassname('Peticionesquejasrecursos');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('peticionesquejasrecursos_pqr_id_seq');
		// columns
		$this->addPrimaryKey('PQR_ID', 'PqrId', 'INTEGER', true, null, null);
		$this->addForeignKey('PQR_COM_ID', 'PqrComId', 'INTEGER', 'comercial', 'COM_ID', true, null, null);
		$this->addColumn('PQR_REGISTRO_PQR', 'PqrRegistroPqr', 'BOOLEAN', false, null, null);
		$this->addColumn('PQR_CANTIDAD_ANUAL_PQR', 'PqrCantidadAnualPqr', 'INTEGER', false, null, null);
		$this->addColumn('PQR_CANTIDAD_PQR_FACTURACION', 'PqrCantidadPqrFacturacion', 'INTEGER', false, null, null);
		$this->addColumn('PQR_CANTIDAD_PQR_INSTALACION', 'PqrCantidadPqrInstalacion', 'INTEGER', false, null, null);
		$this->addColumn('PQR_CANTIDAD_PQR_PREST_SERVICIO', 'PqrCantidadPqrPrestServicio', 'INTEGER', false, null, null);
		$this->addColumn('PQR_CANTIDAD_PQR_OTRO', 'PqrCantidadPqrOtro', 'INTEGER', false, null, null);
		$this->addColumn('PQR_CANTIDAD_PQR_EXPLICA_OTROS', 'PqrCantidadPqrExplicaOtros', 'CHAR', false, 50, null);
		$this->addColumn('PQR_INF_CAUSA_SUSPENSION_CORTE', 'PqrInfCausaSuspensionCorte', 'BOOLEAN', false, null, null);
		$this->addColumn('PQR_INF_CAUSA_SUSP_CORTE_EXPLIC', 'PqrInfCausaSuspCorteExplic', 'CHAR', false, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Comercial', 'Comercial', RelationMap::MANY_TO_ONE, array('pqr_com_id' => 'com_id', ), 'RESTRICT', 'CASCADE');
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

} // PeticionesquejasrecursosTableMap
