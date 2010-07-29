<?php


/**
 * This class defines the structure of the 'tecnicooperativo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 12:37:44
=======
<<<<<<< HEAD
 * 07/29/10 00:07:11
=======
 * 07/28/10 21:52:52
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
>>>>>>> 48ea370b158b87b5f84de3ad8d71891aac6362b0
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativoTableMap';

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
		$this->setName('tecnicooperativo');
		$this->setPhpName('Tecnicooperativo');
		$this->setClassname('Tecnicooperativo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativo_top_id_seq');
		// columns
		$this->addPrimaryKey('TOP_ID', 'TopId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOP_PPS_PRE_ID', 'TopPpsPreId', 'INTEGER', 'periodoporprestadorservicio', 'PPS_PRE_ID', true, null, null);
		$this->addColumn('TOP_PPS_ANIO', 'TopPpsAnio', 'INTEGER', true, null, null);
		$this->addColumn('TOP_PPS_SER_ID', 'TopPpsSerId', 'INTEGER', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Periodoporprestadorservicio', 'Periodoporprestadorservicio', RelationMap::MANY_TO_ONE, array('top_pps_pre_id' => 'pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Actividadesresiduossolidosaseo', 'Actividadesresiduossolidosaseo', RelationMap::ONE_TO_MANY, array('top_id' => 'ars_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Disposicionfinalresiduosaseo', 'Disposicionfinalresiduosaseo', RelationMap::ONE_TO_MANY, array('top_id' => 'dfr_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Recolecciontrasnporteaseo', 'Recolecciontrasnporteaseo', RelationMap::ONE_TO_MANY, array('top_id' => 'rtr_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Separacionresiduossolidosfuentesaseo', 'Separacionresiduossolidosfuentesaseo', RelationMap::ONE_TO_MANY, array('top_id' => 'srsf_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativaacueducto', 'Tecnicooperativaacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'toa_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativaaduccionimpulsionacueducto', 'Tecnicooperativaaduccionimpulsionacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'toai_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativaalmacenamientoacueducto', 'Tecnicooperativaalmacenamientoacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'toaa_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativacaptacionacueducto', 'Tecnicooperativacaptacionacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'toca_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativacomponentessistema', 'Tecnicooperativacomponentessistema', RelationMap::ONE_TO_MANY, array('top_id' => 'tocs_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativadesarenadoracueducto', 'Tecnicooperativadesarenadoracueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'todes_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativadesinfeccionacueducto', 'Tecnicooperativadesinfeccionacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'toda_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativalineaconduccionaguacrudaacueducto', 'Tecnicooperativalineaconduccionaguacrudaacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'tolc_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativaplantaaguapotableacueducto', 'Tecnicooperativaplantaaguapotableacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'topla_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativareddistribucionacueducto', 'Tecnicooperativareddistribucionacueducto', RelationMap::ONE_TO_MANY, array('top_id' => 'tord_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativasolucioncolectivaalcantarillado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('top_id' => 'tosca_top_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativasolucionindividualalcantarillado', 'Tecnicooperativasolucionindividualalcantarillado', RelationMap::ONE_TO_MANY, array('top_id' => 'tosia_top_id', ), null, 'CASCADE');
    $this->addRelation('Tratamientoaprovechamientoresiduossolidosaseo', 'Tratamientoaprovechamientoresiduossolidosaseo', RelationMap::ONE_TO_MANY, array('top_id' => 'tap_top_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativoTableMap
