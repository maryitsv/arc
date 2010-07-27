<?php


/**
 * This class defines the structure of the 'microcuencas' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Tue Jul 27 13:17:11 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class MicrocuencasTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.MicrocuencasTableMap';

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
		$this->setName('microcuencas');
		$this->setPhpName('Microcuencas');
		$this->setClassname('Microcuencas');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('microcuencas_mic_id_seq');
		// columns
		$this->addPrimaryKey('MIC_ID', 'MicId', 'INTEGER', true, null, null);
		$this->addForeignKey('MIC_PPS_PRE_ID', 'MicPpsPreId', 'INTEGER', 'periodoporprestadorservicio', 'PPS_PRE_ID', true, null, null);
		$this->addColumn('MIC_PPS_ANIO', 'MicPpsAnio', 'INTEGER', true, null, null);
		$this->addColumn('MIC_PPS_SER_ID', 'MicPpsSerId', 'INTEGER', true, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Periodoporprestadorservicio', 'Periodoporprestadorservicio', RelationMap::MANY_TO_ONE, array('mic_pps_pre_id' => 'pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Calidadcantidadagua', 'Calidadcantidadagua', RelationMap::ONE_TO_MANY, array('mic_id' => 'cca_mic_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Fuentes', 'Fuentes', RelationMap::ONE_TO_MANY, array('mic_id' => 'fue_mic_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Informaciongeneralmicrocuencas', 'Informaciongeneralmicrocuencas', RelationMap::ONE_TO_MANY, array('mic_id' => 'imi_mic_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Proteccionfuentessuperficialesagua', 'Proteccionfuentessuperficialesagua', RelationMap::ONE_TO_MANY, array('mic_id' => 'pfu_mic_id', ), 'RESTRICT', 'CASCADE');
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

} // MicrocuencasTableMap
