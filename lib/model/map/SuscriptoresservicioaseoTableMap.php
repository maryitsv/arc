<?php


/**
 * This class defines the structure of the 'suscriptoresservicioaseo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/27/10 18:48:16
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class SuscriptoresservicioaseoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.SuscriptoresservicioaseoTableMap';

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
		$this->setName('suscriptoresservicioaseo');
		$this->setPhpName('Suscriptoresservicioaseo');
		$this->setClassname('Suscriptoresservicioaseo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('suscriptoresservicioaseo_ssase_id_seq');
		// columns
		$this->addPrimaryKey('SSASE_ID', 'SsaseId', 'INTEGER', true, null, null);
		$this->addForeignKey('SSASE_ACO_ID', 'SsaseAcoId', 'INTEGER', 'analisiscobertura', 'ACO_ID', true, null, null);
		$this->addForeignKey('SSASE_EST_ID', 'SsaseEstId', 'INTEGER', 'estrato', 'EST_ID', true, null, null);
		$this->addColumn('SSASE_TARIFA', 'SsaseTarifa', 'VARCHAR', false, 255, null);
		$this->addColumn('SSASE_NUMERO_SUSCRIPTORES', 'SsaseNumeroSuscriptores', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Analisiscobertura', 'Analisiscobertura', RelationMap::MANY_TO_ONE, array('ssase_aco_id' => 'aco_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Estrato', 'Estrato', RelationMap::MANY_TO_ONE, array('ssase_est_id' => 'est_id', ), 'RESTRICT', 'CASCADE');
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

} // SuscriptoresservicioaseoTableMap
