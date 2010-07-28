<?php


/**
 * This class defines the structure of the 'resultadosxpunto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 13:25:21
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class ResultadosxpuntoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ResultadosxpuntoTableMap';

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
		$this->setName('resultadosxpunto');
		$this->setPhpName('Resultadosxpunto');
		$this->setClassname('Resultadosxpunto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('resultadosxpunto_rep_id_seq');
		// columns
		$this->addPrimaryKey('REP_ID', 'RepId', 'INTEGER', true, null, null);
		$this->addForeignKey('REP_PPR_ID_PARAMENTRO', 'RepPprIdParamentro', 'INTEGER', 'parametrospuntosred', 'PPR_ID', true, null, null);
		$this->addForeignKey('REP_CAG_ID', 'RepCagId', 'INTEGER', 'calidadagua', 'CAG_ID', true, null, null);
		$this->addColumn('REP_PUNTO', 'RepPunto', 'INTEGER', false, null, null);
		$this->addColumn('REP_RESULTADO', 'RepResultado', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Parametrospuntosred', 'Parametrospuntosred', RelationMap::MANY_TO_ONE, array('rep_ppr_id_paramentro' => 'ppr_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Calidadagua', 'Calidadagua', RelationMap::MANY_TO_ONE, array('rep_cag_id' => 'cag_id', ), 'RESTRICT', 'RESTRICT');
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

} // ResultadosxpuntoTableMap
