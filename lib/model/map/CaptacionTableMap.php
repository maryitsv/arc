<?php


/**
 * This class defines the structure of the 'captacion' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/22/10 22:07:48
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CaptacionTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CaptacionTableMap';

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
		$this->setName('captacion');
		$this->setPhpName('Captacion');
		$this->setClassname('Captacion');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('captacion_capt_id_seq');
		// columns
		$this->addPrimaryKey('CAPT_ID', 'CaptId', 'INTEGER', true, null, null);
		$this->addColumn('CAPT_TIPO_DE_FONDO', 'CaptTipoDeFondo', 'BOOLEAN', false, null, null);
		$this->addColumn('CAPT_TIPO_LATERAL', 'CaptTipoLateral', 'BOOLEAN', false, null, null);
		$this->addColumn('CAPT_TIPO_LECHO_FILTRANTE', 'CaptTipoLechoFiltrante', 'BOOLEAN', false, null, null);
		$this->addColumn('CAPT_TIPO_LECHO_REPRESA', 'CaptTipoLechoRepresa', 'BOOLEAN', false, null, null);
		$this->addForeignKey('CAPT_ESTADO_ESTRUCTURA_ID', 'CaptEstadoEstructuraId', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addForeignKey('CAPT_ESTADO_POZO_ID', 'CaptEstadoPozoId', 'INTEGER', 'estadogeneral', 'ESG_ID', true, null, null);
		$this->addForeignKey('CAPT_ESTADO_BOMBA_ID', 'CaptEstadoBombaId', 'INTEGER', 'estadogeneral', 'ESG_ID', true, null, null);
		$this->addForeignKey('CAPT_FUENTE_ENERGIA_ID', 'CaptFuenteEnergiaId', 'INTEGER', 'fuenteenergia', 'FEN_ID', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('EstadogeneralRelatedByCaptEstadoEstructuraId', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('capt_estado_estructura_id' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByCaptEstadoPozoId', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('capt_estado_pozo_id' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByCaptEstadoBombaId', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('capt_estado_bomba_id' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Fuenteenergia', 'Fuenteenergia', RelationMap::MANY_TO_ONE, array('capt_fuente_energia_id' => 'fen_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativacaptacionacueducto', 'Tecnicooperativacaptacionacueducto', RelationMap::ONE_TO_MANY, array('capt_id' => 'toca_capt_id', ), 'RESTRICT', 'CASCADE');
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

} // CaptacionTableMap
