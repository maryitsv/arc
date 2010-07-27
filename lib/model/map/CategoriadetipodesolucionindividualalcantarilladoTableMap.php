<?php


/**
 * This class defines the structure of the 'categoriadetipodesolucionindividualalcantarillado' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/27/10 18:48:05
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CategoriadetipodesolucionindividualalcantarilladoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CategoriadetipodesolucionindividualalcantarilladoTableMap';

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
		$this->setName('categoriadetipodesolucionindividualalcantarillado');
		$this->setPhpName('Categoriadetipodesolucionindividualalcantarillado');
		$this->setClassname('Categoriadetipodesolucionindividualalcantarillado');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('categoriadetipodesolucionindividualalcantarillado_ctdsia_id_seq');
		// columns
		$this->addPrimaryKey('CTDSIA_ID', 'CtdsiaId', 'INTEGER', true, null, null);
		$this->addColumn('CTDSIA_NOMBRE', 'CtdsiaNombre', 'VARCHAR', true, 80, null);
		$this->addForeignKey('CTDSIA_TDSIA_ID', 'CtdsiaTdsiaId', 'INTEGER', 'tipodesolucionindividualalcantarillado', 'TDSIA_ID', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tipodesolucionindividualalcantarillado', 'Tipodesolucionindividualalcantarillado', RelationMap::MANY_TO_ONE, array('ctdsia_tdsia_id' => 'tdsia_id', ), null, 'CASCADE');
    $this->addRelation('TecnicooperativasolucionindividualalcantarilladoRelatedByTosiaOpcion1CtdsiaId', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('ctdsia_id' => 'tosia_opcion1_ctdsia_id', ), null, 'CASCADE');
    $this->addRelation('TecnicooperativasolucionindividualalcantarilladoRelatedByTosiaOpcion2CtdsiaId', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('ctdsia_id' => 'tosia_opcion2_ctdsia_id', ), null, 'CASCADE');
    $this->addRelation('TecnicooperativasolucionindividualalcantarilladoRelatedByTosiaOpcion3CtdsiaId', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('ctdsia_id' => 'tosia_opcion3_ctdsia_id', ), null, 'CASCADE');
    $this->addRelation('TecnicooperativasolucionindividualalcantarilladoRelatedByTosiaOpcion4CtdsiaId', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('ctdsia_id' => 'tosia_opcion4_ctdsia_id', ), null, 'CASCADE');
    $this->addRelation('TecnicooperativasolucionindividualalcantarilladoRelatedByTosiaOpcion5CtdsiaId', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('ctdsia_id' => 'tosia_opcion5_ctdsia_id', ), null, 'CASCADE');
    $this->addRelation('TecnicooperativasolucionindividualalcantarilladoRelatedByTosiaOpcion6CtdsiaId', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('ctdsia_id' => 'tosia_opcion6_ctdsia_id', ), null, 'CASCADE');
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

} // CategoriadetipodesolucionindividualalcantarilladoTableMap
