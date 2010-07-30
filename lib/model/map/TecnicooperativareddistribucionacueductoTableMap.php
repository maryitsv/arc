<?php


/**
 * This class defines the structure of the 'tecnicooperativareddistribucionacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Fri Jul 30 14:41:28 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativareddistribucionacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativareddistribucionacueductoTableMap';

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
		$this->setName('tecnicooperativareddistribucionacueducto');
		$this->setPhpName('Tecnicooperativareddistribucionacueducto');
		$this->setClassname('Tecnicooperativareddistribucionacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativareddistribucionacueducto_tord_id_seq');
		// columns
		$this->addPrimaryKey('TORD_ID', 'TordId', 'INTEGER', true, null, null);
		$this->addForeignKey('TORD_TOP_ID', 'TordTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addForeignKey('TORD_RED_DISTRIBUCION_ID', 'TordRedDistribucionId', 'INTEGER', 'reddistribucion', 'RDIST_ID', true, null, null);
		$this->addForeignKey('TORD_MATERIAL_DISTRIBUCION_ID', 'TordMaterialDistribucionId', 'INTEGER', 'materialreddistribucion', 'MRD_ID', true, null, null);
		$this->addColumn('TORD_MATERIAL_DIAMETRO', 'TordMaterialDiametro', 'VARCHAR', false, 255, null);
		$this->addColumn('TORD_MATERIAL_EDAD', 'TordMaterialEdad', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('tord_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Reddistribucion', 'Reddistribucion', RelationMap::MANY_TO_ONE, array('tord_red_distribucion_id' => 'rdist_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Materialreddistribucion', 'Materialreddistribucion', RelationMap::MANY_TO_ONE, array('tord_material_distribucion_id' => 'mrd_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativareddistribucionacueductoTableMap
