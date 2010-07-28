<?php


/**
 * This class defines the structure of the 'informacionvisual' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 12:35:42
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class InformacionvisualTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.InformacionvisualTableMap';

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
		$this->setName('informacionvisual');
		$this->setPhpName('Informacionvisual');
		$this->setClassname('Informacionvisual');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('informacionvisual_iv_id_seq');
		// columns
		$this->addPrimaryKey('IV_ID', 'IvId', 'INTEGER', true, null, null);
		$this->addForeignKey('IV_PRE_ID', 'IvPreId', 'INTEGER', 'prestador', 'PRE_ID', true, null, null);
		$this->addColumn('IV_NOMBRE', 'IvNombre', 'VARCHAR', true, 100, null);
		$this->addColumn('IV_URL', 'IvUrl', 'VARCHAR', false, 200, null);
		$this->addColumn('IV_DESCRIPCION', 'IvDescripcion', 'VARCHAR', false, 200, null);
		$this->addColumn('IV_TIPO', 'IvTipo', 'VARCHAR', false, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Prestador', 'Prestador', RelationMap::MANY_TO_ONE, array('iv_pre_id' => 'pre_id', ), 'RESTRICT', 'CASCADE');
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

} // InformacionvisualTableMap
