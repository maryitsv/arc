<?php


/**
 * This class defines the structure of the 'suscriptoresservicioacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/28/10 13:25:22
=======
 * 07/28/10 15:52:56
>>>>>>> 9ae73683bd9fcb839d0feb5ce3110184317c3501
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class SuscriptoresservicioacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.SuscriptoresservicioacueductoTableMap';

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
		$this->setName('suscriptoresservicioacueducto');
		$this->setPhpName('Suscriptoresservicioacueducto');
		$this->setClassname('Suscriptoresservicioacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('suscriptoresservicioacueducto_ssacu_id_seq');
		// columns
		$this->addPrimaryKey('SSACU_ID', 'SsacuId', 'INTEGER', true, null, null);
		$this->addForeignKey('SSACU_ACO_ID', 'SsacuAcoId', 'INTEGER', 'analisiscobertura', 'ACO_ID', true, null, null);
		$this->addForeignKey('SSACU_EST_ID', 'SsacuEstId', 'INTEGER', 'estrato', 'EST_ID', true, null, null);
		$this->addColumn('SSACU_NUMERO_SUSCRIPTORES', 'SsacuNumeroSuscriptores', 'INTEGER', true, null, null);
		$this->addColumn('SSACU_TARIFA_SIN_MEDICION', 'SsacuTarifaSinMedicion', 'VARCHAR', false, 255, null);
		$this->addColumn('SSACU_CARGO_FIJO', 'SsacuCargoFijo', 'VARCHAR', false, 255, null);
		$this->addColumn('SSACU_TARIFA_CONSUMO_BASICO', 'SsacuTarifaConsumoBasico', 'VARCHAR', false, 255, null);
		$this->addColumn('SSACU_TARIFA_CONSUMO_COMPLEMENTARIO', 'SsacuTarifaConsumoComplementario', 'VARCHAR', false, 255, null);
		$this->addColumn('SSACU_TARIFA_CONSUMO_SUNTUARIO', 'SsacuTarifaConsumoSuntuario', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Analisiscobertura', 'Analisiscobertura', RelationMap::MANY_TO_ONE, array('ssacu_aco_id' => 'aco_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Estrato', 'Estrato', RelationMap::MANY_TO_ONE, array('ssacu_est_id' => 'est_id', ), 'RESTRICT', 'CASCADE');
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

} // SuscriptoresservicioacueductoTableMap
