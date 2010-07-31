<?php


/**
 * This class defines the structure of the 'actividadesresiduossolidosaseo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * Fri Jul 30 18:20:55 2010
=======
 * 07/30/10 18:50:36
>>>>>>> 5fbae45358806c5fc2096efd08a691e24fe41e3c
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class ActividadesresiduossolidosaseoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ActividadesresiduossolidosaseoTableMap';

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
		$this->setName('actividadesresiduossolidosaseo');
		$this->setPhpName('Actividadesresiduossolidosaseo');
		$this->setClassname('Actividadesresiduossolidosaseo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('actividadesresiduossolidosaseo_ars_id_seq');
		// columns
		$this->addPrimaryKey('ARS_ID', 'ArsId', 'INTEGER', true, null, null);
		$this->addForeignKey('ARS_TOP_ID', 'ArsTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('ARS_RECOLE_TRANS_RESIDUOS_NO_PELIGROSOS', 'ArsRecoleTransResiduosNoPeligrosos', 'VARCHAR', false, 255, null);
		$this->addColumn('ARS_TRATAMIENTO_RESIDUOS_NO_PELIGROSOS', 'ArsTratamientoResiduosNoPeligrosos', 'VARCHAR', false, 255, null);
		$this->addColumn('ARS_APROVECHAMIENTO_RESIDUOS', 'ArsAprovechamientoResiduos', 'VARCHAR', false, 255, null);
		$this->addColumn('ARS_DISPOSICION_FINAL', 'ArsDisposicionFinal', 'VARCHAR', false, 255, null);
		$this->addColumn('ARS_BARRIDO_LIMPIEZA_AREA_PUBLICA', 'ArsBarridoLimpiezaAreaPublica', 'VARCHAR', false, 255, null);
		$this->addColumn('ARS_RECOLE_TRASN_RESIDUOS_HOSPITALARIOS_NO_PELIGROSOS', 'ArsRecoleTrasnResiduosHospitalariosNoPeligrosos', 'VARCHAR', false, 255, null);
		$this->addColumn('ARS_RECOLE_TRASN_RESIDUOS_HOSPITALARIOS_PELIGROSOS', 'ArsRecoleTrasnResiduosHospitalariosPeligrosos', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('ars_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // ActividadesresiduossolidosaseoTableMap
