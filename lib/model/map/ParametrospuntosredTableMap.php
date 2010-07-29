<?php


/**
 * This class defines the structure of the 'parametrospuntosred' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 21:52:40
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class ParametrospuntosredTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ParametrospuntosredTableMap';

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
		$this->setName('parametrospuntosred');
		$this->setPhpName('Parametrospuntosred');
		$this->setClassname('Parametrospuntosred');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('parametrospuntosred_ppr_id_seq');
		// columns
		$this->addPrimaryKey('PPR_ID', 'PprId', 'INTEGER', true, null, null);
		$this->addColumn('PPR_NOMBRE_PARAMENTRO', 'PprNombreParamentro', 'VARCHAR', true, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Parametroxfrecuencia', 'Parametroxfrecuencia', RelationMap::ONE_TO_MANY, array('ppr_id' => 'pfe_ppr_id_paramentro', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Resultadosxpunto', 'Resultadosxpunto', RelationMap::ONE_TO_MANY, array('ppr_id' => 'rep_ppr_id_paramentro', ), 'RESTRICT', 'RESTRICT');
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

} // ParametrospuntosredTableMap
