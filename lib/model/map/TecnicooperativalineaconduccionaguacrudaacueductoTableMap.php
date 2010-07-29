<?php


/**
 * This class defines the structure of the 'tecnicooperativalineaconduccionaguacrudaacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 00:07:08
=======
 * 07/28/10 21:52:48
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativalineaconduccionaguacrudaacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativalineaconduccionaguacrudaacueductoTableMap';

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
		$this->setName('tecnicooperativalineaconduccionaguacrudaacueducto');
		$this->setPhpName('Tecnicooperativalineaconduccionaguacrudaacueducto');
		$this->setClassname('Tecnicooperativalineaconduccionaguacrudaacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativalineaconduccionaguacrudaacueducto_tolc_id_seq');
		// columns
		$this->addPrimaryKey('TOLC_ID', 'TolcId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOLC_TOP_ID', 'TolcTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addForeignKey('TOLC_TIPO_CANAL_ID', 'TolcTipoCanalId', 'INTEGER', 'tipocanal', 'TCA_ID', true, null, null);
		$this->addForeignKey('TOLC_MATERIAL_CANAL_ID', 'TolcMaterialCanalId', 'INTEGER', 'materialcanal', 'MCA_ID', true, null, null);
		$this->addColumn('TOLC_LONGITUD', 'TolcLongitud', 'VARCHAR', false, 255, null);
		$this->addColumn('TOLC_DIAMETRO', 'TolcDiametro', 'VARCHAR', false, 255, null);
		$this->addColumn('TOLC_EDAD', 'TolcEdad', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('tolc_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tipocanal', 'Tipocanal', RelationMap::MANY_TO_ONE, array('tolc_tipo_canal_id' => 'tca_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Materialcanal', 'Materialcanal', RelationMap::MANY_TO_ONE, array('tolc_material_canal_id' => 'mca_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativalineaconduccionaguacrudaacueductoTableMap
