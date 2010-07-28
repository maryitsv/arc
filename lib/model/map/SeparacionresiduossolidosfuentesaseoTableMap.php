<?php


/**
 * This class defines the structure of the 'separacionresiduossolidosfuentesaseo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 12:35:47
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class SeparacionresiduossolidosfuentesaseoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.SeparacionresiduossolidosfuentesaseoTableMap';

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
		$this->setName('separacionresiduossolidosfuentesaseo');
		$this->setPhpName('Separacionresiduossolidosfuentesaseo');
		$this->setClassname('Separacionresiduossolidosfuentesaseo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('separacionresiduossolidosfuentesaseo_srsf_id_seq');
		// columns
		$this->addPrimaryKey('SRSF_ID', 'SrsfId', 'INTEGER', true, null, null);
		$this->addForeignKey('SRSF_TOP_ID', 'SrsfTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('SRSF_PROGRAMA_SEPARACION_RESIDUOS_SOLIDOS', 'SrsfProgramaSeparacionResiduosSolidos', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_ORGANICO', 'SrsfMaterialesSeparadosOrganico', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_OTROS_VIDRIO', 'SrsfMaterialesSeparadosOtrosVidrio', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_OTROS_PAPEL', 'SrsfMaterialesSeparadosOtrosPapel', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_OTROS_PLASTICO', 'SrsfMaterialesSeparadosOtrosPlastico', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_OTROS_METALES', 'SrsfMaterialesSeparadosOtrosMetales', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_OTROS_OTROS', 'SrsfMaterialesSeparadosOtrosOtros', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_MATERIALES_SEPARADOS_HIGENICOS', 'SrsfMaterialesSeparadosHigenicos', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_NUMERO_SUSCRIPTORES_QUE_SEPARAN', 'SrsfNumeroSuscriptoresQueSeparan', 'INTEGER', false, null, null);
		$this->addColumn('SRSF_EXISTE_SEPARACION_SITIO_FINAL', 'SrsfExisteSeparacionSitioFinal', 'VARCHAR', false, 255, null);
		$this->addColumn('SRSF_TONELADAS_RESIDUOS_ANIO', 'SrsfToneladasResiduosAnio', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('srsf_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Comunidadserviciorecoleccion', 'Comunidadserviciorecoleccion', RelationMap::ONE_TO_MANY, array('srsf_id' => 'csr_srsf_id', ), 'RESTRICT', 'RESTRICT');
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

} // SeparacionresiduossolidosfuentesaseoTableMap
