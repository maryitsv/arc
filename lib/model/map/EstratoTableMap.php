<?php


/**
 * This class defines the structure of the 'estrato' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 00:06:57
=======
 * 07/28/10 21:52:36
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
class EstratoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.EstratoTableMap';

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
		$this->setName('estrato');
		$this->setPhpName('Estrato');
		$this->setClassname('Estrato');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('estrato_est_id_seq');
		// columns
		$this->addPrimaryKey('EST_ID', 'EstId', 'INTEGER', true, null, null);
		$this->addColumn('EST_NOMBRE', 'EstNombre', 'VARCHAR', true, 50, null);
		$this->addColumn('EST_RESIDENCIAL', 'EstResidencial', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Suscriptoresservicioacueducto', 'Suscriptoresservicioacueducto', RelationMap::ONE_TO_MANY, array('est_id' => 'ssacu_est_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Suscriptoresservicioaseo', 'Suscriptoresservicioaseo', RelationMap::ONE_TO_MANY, array('est_id' => 'ssase_est_id', ), 'RESTRICT', 'CASCADE');
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

} // EstratoTableMap
