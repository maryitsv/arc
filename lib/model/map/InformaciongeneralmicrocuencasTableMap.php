<?php


/**
 * This class defines the structure of the 'informaciongeneralmicrocuencas' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/26/10 20:32:36
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class InformaciongeneralmicrocuencasTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.InformaciongeneralmicrocuencasTableMap';

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
		$this->setName('informaciongeneralmicrocuencas');
		$this->setPhpName('Informaciongeneralmicrocuencas');
		$this->setClassname('Informaciongeneralmicrocuencas');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('informaciongeneralmicrocuencas_imi_id_seq');
		// columns
		$this->addPrimaryKey('IMI_ID', 'ImiId', 'INTEGER', true, null, null);
		$this->addForeignKey('IMI_MIC_ID', 'ImiMicId', 'INTEGER', 'microcuencas', 'MIC_ID', true, null, null);
		$this->addForeignKey('IMI_DEP_ID', 'ImiDepId', 'INTEGER', 'departamento', 'DEP_ID', true, null, null);
		$this->addForeignKey('IMI_MUN_ID', 'ImiMunId', 'INTEGER', 'municipio', 'MUN_ID', true, null, null);
		$this->addColumn('IMI_LOCALIDAD', 'ImiLocalidad', 'VARCHAR', true, 100, null);
		$this->addColumn('IMI_MICROCUENCA', 'ImiMicrocuenca', 'VARCHAR', false, 100, null);
		$this->addColumn('IMI_CODIGO_CUENCA', 'ImiCodigoCuenca', 'VARCHAR', false, 100, null);
		$this->addColumn('IMI_FECHA', 'ImiFecha', 'DATE', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Microcuencas', 'Microcuencas', RelationMap::MANY_TO_ONE, array('imi_mic_id' => 'mic_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Departamento', 'Departamento', RelationMap::MANY_TO_ONE, array('imi_dep_id' => 'dep_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Municipio', 'Municipio', RelationMap::MANY_TO_ONE, array('imi_mun_id' => 'mun_id', ), 'RESTRICT', 'RESTRICT');
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

} // InformaciongeneralmicrocuencasTableMap
