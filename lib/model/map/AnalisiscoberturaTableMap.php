<?php


/**
 * This class defines the structure of the 'analisiscobertura' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Fri Jul 30 18:20:55 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class AnalisiscoberturaTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.AnalisiscoberturaTableMap';

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
		$this->setName('analisiscobertura');
		$this->setPhpName('Analisiscobertura');
		$this->setClassname('Analisiscobertura');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('analisiscobertura_aco_id_seq');
		// columns
		$this->addPrimaryKey('ACO_ID', 'AcoId', 'INTEGER', true, null, null);
		$this->addForeignKey('ACO_COM_ID', 'AcoComId', 'INTEGER', 'comercial', 'COM_ID', true, null, null);
		$this->addColumn('ACO_CATASTRO_USUARIOS', 'AcoCatastroUsuarios', 'VARCHAR', false, 255, null);
		$this->addColumn('ACO_ANIO_ELA_IMPL_CATASTRO_USU', 'AcoAnioElaImplCatastroUsu', 'INTEGER', false, null, null);
		$this->addColumn('ACO_NUM_PREDIOS_AREA', 'AcoNumPrediosArea', 'INTEGER', false, null, null);
		$this->addColumn('ACO_NUM_PREDIOS_CONEC_SISTEMA', 'AcoNumPrediosConecSistema', 'INTEGER', false, null, null);
		$this->addColumn('ACO_ESTRAT_SOCECO_ADOP_MPIO', 'AcoEstratSocecoAdopMpio', 'VARCHAR', false, 255, null);
		$this->addColumn('ACO_ESTRA_SOCECO_ADOP_MPIO_JUS', 'AcoEstraSocecoAdopMpioJus', 'CHAR', false, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Comercial', 'Comercial', RelationMap::MANY_TO_ONE, array('aco_com_id' => 'com_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Suscriptoresservicioacueducto', 'Suscriptoresservicioacueducto', RelationMap::ONE_TO_MANY, array('aco_id' => 'ssacu_aco_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Suscriptoresservicioaseo', 'Suscriptoresservicioaseo', RelationMap::ONE_TO_MANY, array('aco_id' => 'ssase_aco_id', ), 'RESTRICT', 'CASCADE');
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

} // AnalisiscoberturaTableMap
