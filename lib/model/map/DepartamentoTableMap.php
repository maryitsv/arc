<?php


/**
 * This class defines the structure of the 'departamento' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 13:25:11
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class DepartamentoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.DepartamentoTableMap';

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
		$this->setName('departamento');
		$this->setPhpName('Departamento');
		$this->setClassname('Departamento');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('departamento_dep_id_seq');
		// columns
		$this->addPrimaryKey('DEP_ID', 'DepId', 'INTEGER', true, null, null);
		$this->addColumn('DEP_NOMBRE', 'DepNombre', 'VARCHAR', true, 100, null);
		$this->addColumn('DEP_REGION', 'DepRegion', 'VARCHAR', false, 100, null);
		$this->addColumn('DEP_ZONA', 'DepZona', 'VARCHAR', false, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Disposicionfinalresiduosaseo', 'Disposicionfinalresiduosaseo', RelationMap::ONE_TO_MANY, array('dep_id' => 'dfr_departamento_dispocision_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Informaciongeneralmicrocuencas', 'Informaciongeneralmicrocuencas', RelationMap::ONE_TO_MANY, array('dep_id' => 'imi_dep_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Municipio', 'Municipio', RelationMap::ONE_TO_MANY, array('dep_id' => 'mun_dep_id', ), 'RESTRICT', 'RESTRICT');
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

} // DepartamentoTableMap
