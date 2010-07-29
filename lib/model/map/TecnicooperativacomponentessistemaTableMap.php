<?php


/**
 * This class defines the structure of the 'tecnicooperativacomponentessistema' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 01:11:17
=======
<<<<<<< HEAD
 * 07/29/10 12:37:39
=======
<<<<<<< HEAD
 * 07/29/10 00:07:07
=======
 * 07/28/10 21:52:47
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
>>>>>>> 48ea370b158b87b5f84de3ad8d71891aac6362b0
>>>>>>> 424fbbb7da7e7b7dd07c377772bb35df6fa5351d
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativacomponentessistemaTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativacomponentessistemaTableMap';

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
		$this->setName('tecnicooperativacomponentessistema');
		$this->setPhpName('Tecnicooperativacomponentessistema');
		$this->setClassname('Tecnicooperativacomponentessistema');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativacomponentessistema_tocs_id_seq');
		// columns
		$this->addPrimaryKey('TOCS_ID', 'TocsId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOCS_TOP_ID', 'TocsTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('TOCS_COMPONENTES', 'TocsComponentes', 'VARCHAR', true, 100, null);
		$this->addColumn('TOCS_CAPTACION', 'TocsCaptacion', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_CAPTACION_CANTIDAD', 'TocsCaptacionCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_ADUCCION', 'TocsAduccion', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_ADUCCION_CANTIDAD', 'TocsAduccionCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_DESARENADOR', 'TocsDesarenador', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_DESARENADOR_CANTIDAD', 'TocsDesarenadorCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_CONDUCCION_AGUA_CRUDA', 'TocsConduccionAguaCruda', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_CONDUCCION_AGUA_CRUDA_CANTIDAD', 'TocsConduccionAguaCrudaCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_PLANTA_TRATAMIENTO', 'TocsPlantaTratamiento', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_PLANTA_TRATAMIENTO_CANTIDAD', 'TocsPlantaTratamientoCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_DESINFECCION', 'TocsDesinfeccion', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_DESINFECCION_CANTIDAD', 'TocsDesinfeccionCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_TANQUE_ALMACENAMIENTO', 'TocsTanqueAlmacenamiento', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_TANQUE_ALMACENAMIENTO_CANTIDAD', 'TocsTanqueAlmacenamientoCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_CONDUCCION_AGUA_TRATADA', 'TocsConduccionAguaTratada', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_CONDUCCION_AGUA_TRATADA_CANTIDAD', 'TocsConduccionAguaTratadaCantidad', 'INTEGER', false, null, null);
		$this->addColumn('TOCS_RED_DISTRIBUCION', 'TocsRedDistribucion', 'VARCHAR', false, 255, null);
		$this->addColumn('TOCS_RED_DISTRIBUCION_CANTIDAD', 'TocsRedDistribucionCantidad', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('tocs_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativacomponentessistemaTableMap
