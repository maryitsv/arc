<?php


/**
 * This class defines the structure of the 'tipodesolucionindividualalcantarillado' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 12:26:17
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TipodesolucionindividualalcantarilladoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TipodesolucionindividualalcantarilladoTableMap';

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
		$this->setName('tipodesolucionindividualalcantarillado');
		$this->setPhpName('Tipodesolucionindividualalcantarillado');
		$this->setClassname('Tipodesolucionindividualalcantarillado');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tipodesolucionindividualalcantarillado_tdsia_id_seq');
		// columns
		$this->addPrimaryKey('TDSIA_ID', 'TdsiaId', 'INTEGER', true, null, null);
		$this->addColumn('TDSIA_NOMBRE', 'TdsiaNombre', 'VARCHAR', true, 80, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Categoriadetipodesolucionindividualalcantarillado', 'Categoriadetipodesolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('tdsia_id' => 'ctdsia_tdsia_id', ), null, 'CASCADE');
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

} // TipodesolucionindividualalcantarilladoTableMap
