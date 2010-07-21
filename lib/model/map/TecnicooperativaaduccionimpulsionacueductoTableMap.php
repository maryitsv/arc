<?php


/**
 * This class defines the structure of the 'tecnicooperativaaduccionimpulsionacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/17/10 19:39:22
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativaaduccionimpulsionacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativaaduccionimpulsionacueductoTableMap';

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
		$this->setName('tecnicooperativaaduccionimpulsionacueducto');
		$this->setPhpName('Tecnicooperativaaduccionimpulsionacueducto');
		$this->setClassname('Tecnicooperativaaduccionimpulsionacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativaaduccionimpulsionacueducto_toai_id_seq');
		// columns
		$this->addPrimaryKey('TOAI_ID', 'ToaiId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOAI_TOP_ID', 'ToaiTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', false, null, null);
		$this->addForeignKey('TOAI_MATERIAL_CANAL_ID', 'ToaiMaterialCanalId', 'INTEGER', 'materialcanal', 'MCA_ID', false, null, null);
		$this->addForeignKey('TOAI_TIPO_CANAL_ID', 'ToaiTipoCanalId', 'INTEGER', 'tipocanal', 'TCA_ID', false, null, null);
		$this->addColumn('TOAI_LONGITUD', 'ToaiLongitud', 'VARCHAR', false, 255, null);
		$this->addColumn('TOAI_DIAMETRO', 'ToaiDiametro', 'VARCHAR', false, 255, null);
		$this->addColumn('TOAI_EDAD', 'ToaiEdad', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('toai_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Materialcanal', 'Materialcanal', RelationMap::MANY_TO_ONE, array('toai_material_canal_id' => 'mca_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tipocanal', 'Tipocanal', RelationMap::MANY_TO_ONE, array('toai_tipo_canal_id' => 'tca_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativaaduccionimpulsionacueductoTableMap
