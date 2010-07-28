<?php


/**
 * This class defines the structure of the 'estadogeneral' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/28/10 13:25:13
=======
 * 07/28/10 15:52:49
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
class EstadogeneralTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.EstadogeneralTableMap';

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
		$this->setName('estadogeneral');
		$this->setPhpName('Estadogeneral');
		$this->setClassname('Estadogeneral');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('estadogeneral_esg_id_seq');
		// columns
		$this->addPrimaryKey('ESG_ID', 'EsgId', 'INTEGER', true, null, null);
		$this->addColumn('ESG_NOMBRE', 'EsgNombre', 'VARCHAR', true, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('CaptacionRelatedByCaptEstadoEstructuraId', 'Captacion', RelationMap::ONE_TO_MANY, array('esg_id' => 'capt_estado_estructura_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('CaptacionRelatedByCaptEstadoPozoId', 'Captacion', RelationMap::ONE_TO_MANY, array('esg_id' => 'capt_estado_pozo_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('CaptacionRelatedByCaptEstadoBombaId', 'Captacion', RelationMap::ONE_TO_MANY, array('esg_id' => 'capt_estado_bomba_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Disposicionfinalresiduosaseo', 'Disposicionfinalresiduosaseo', RelationMap::ONE_TO_MANY, array('esg_id' => 'dfr_estado_via_acceso_sitio_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tanque', 'Tanque', RelationMap::ONE_TO_MANY, array('esg_id' => 'tan_estado_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaSanitarioEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_sanitario_estado', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaPluvialEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_pluvial_estado', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaCombiConvencionalEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_combi_convencional_estado', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaCombiNoConvencionalEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_combi_no_convencional_estado', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaSimplificadoEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_simplificado_estado', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaSinArrastreSolidosEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_sin_arrastre_solidos_estado', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('TecnicooperativasolucioncolectivaalcantarilladoRelatedByToscaOtroEstado', 'Tecnicooperativasolucioncolectivaalcantarillado', RelationMap::ONE_TO_MANY, array('esg_id' => 'tosca_otro_estado', ), 'RESTRICT', 'CASCADE');
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

} // EstadogeneralTableMap
