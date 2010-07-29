<?php


/**
 * This class defines the structure of the 'tecnicooperativasolucioncolectivaalcantarillado' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 21:52:50
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativasolucioncolectivaalcantarilladoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativasolucioncolectivaalcantarilladoTableMap';

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
		$this->setName('tecnicooperativasolucioncolectivaalcantarillado');
		$this->setPhpName('Tecnicooperativasolucioncolectivaalcantarillado');
		$this->setClassname('Tecnicooperativasolucioncolectivaalcantarillado');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativasolucioncolectivaalcantarillado_tosca_id_seq');
		// columns
		$this->addPrimaryKey('TOSCA_ID', 'ToscaId', 'INTEGER', true, null, null);
		$this->addColumn('TOSCA_POSEE_ALCANTARILLADO_COLECTIVO', 'ToscaPoseeAlcantarilladoColectivo', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_SANITARIO_FUNCIONA', 'ToscaSanitarioFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_SANITARIO_NUMERO_SUSCRIPTORES', 'ToscaSanitarioNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_SANITARIO_SE_USA', 'ToscaSanitarioSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_SANITARIO_ESTADO', 'ToscaSanitarioEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addColumn('TOSCA_PLUVIAL_FUNCIONA', 'ToscaPluvialFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_PLUVIAL_NUMERO_SUSCRIPTORES', 'ToscaPluvialNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_PLUVIAL_SE_USA', 'ToscaPluvialSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_PLUVIAL_ESTADO', 'ToscaPluvialEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addColumn('TOSCA_COMBI_CONVENCIONAL_FUNCIONA', 'ToscaCombiConvencionalFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_COMBI_CONVENCIONAL_NUMERO_SUSCRIPTORES', 'ToscaCombiConvencionalNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_COMBI_CONVENCIONAL_SE_USA', 'ToscaCombiConvencionalSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_COMBI_CONVENCIONAL_ESTADO', 'ToscaCombiConvencionalEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addColumn('TOSCA_COMBI_NO_CONVENCIONAL_FUNCIONA', 'ToscaCombiNoConvencionalFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_COMBI_NO_CONVENCIONAL_NUMERO_SUSCRIPTORES', 'ToscaCombiNoConvencionalNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_COMBI_NO_CONVENCIONAL_SE_USA', 'ToscaCombiNoConvencionalSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_COMBI_NO_CONVENCIONAL_ESTADO', 'ToscaCombiNoConvencionalEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addColumn('TOSCA_SIMPLIFICADO_FUNCIONA', 'ToscaSimplificadoFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_SIMPLIFICADO_NUMERO_SUSCRIPTORES', 'ToscaSimplificadoNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_SIMPLIFICADO_SE_USA', 'ToscaSimplificadoSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_SIMPLIFICADO_ESTADO', 'ToscaSimplificadoEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addColumn('TOSCA_SIN_ARRASTRE_SOLIDOS_FUNCIONA', 'ToscaSinArrastreSolidosFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_SIN_ARRASTRE_SOLIDOS_NUMERO_SUSCRIPTORES', 'ToscaSinArrastreSolidosNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_SIN_ARRASTRE_SOLIDOS_SE_USA', 'ToscaSinArrastreSolidosSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_SIN_ARRASTRE_SOLIDOS_ESTADO', 'ToscaSinArrastreSolidosEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addColumn('TOSCA_OTRO_CUAL', 'ToscaOtroCual', 'VARCHAR', false, 80, null);
		$this->addColumn('TOSCA_OTRO_FUNCIONA', 'ToscaOtroFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOSCA_OTRO_NUMERO_SUSCRIPTORES', 'ToscaOtroNumeroSuscriptores', 'INTEGER', false, null, null);
		$this->addColumn('TOSCA_OTRO_SE_USA', 'ToscaOtroSeUsa', 'VARCHAR', false, 255, null);
		$this->addForeignKey('TOSCA_OTRO_ESTADO', 'ToscaOtroEstado', 'INTEGER', 'estadogeneral', 'ESG_ID', false, null, null);
		$this->addForeignKey('TOSCA_ACTIVIDADES_A_EJECUTAR', 'ToscaActividadesAEjecutar', 'INTEGER', 'actividadesaejecutarporprestadoralcantarillado', 'AAEP_ID', false, null, null);
		$this->addForeignKey('TOSCA_TOP_ID', 'ToscaTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('EstadogeneralRelatedByToscaSanitarioEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_sanitario_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByToscaPluvialEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_pluvial_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByToscaCombiConvencionalEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_combi_convencional_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByToscaCombiNoConvencionalEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_combi_no_convencional_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByToscaSimplificadoEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_simplificado_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByToscaSinArrastreSolidosEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_sin_arrastre_solidos_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('EstadogeneralRelatedByToscaOtroEstado', 'Estadogeneral', RelationMap::MANY_TO_ONE, array('tosca_otro_estado' => 'esg_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Actividadesaejecutarporprestadoralcantarillado', 'Actividadesaejecutarporprestadoralcantarillado', RelationMap::MANY_TO_ONE, array('tosca_actividades_a_ejecutar' => 'aaep_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('tosca_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativasolucioncolectivaalcantarilladoTableMap
