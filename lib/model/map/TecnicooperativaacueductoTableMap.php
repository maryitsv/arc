<?php


/**
 * This class defines the structure of the 'tecnicooperativaacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/27/10 18:48:17
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativaacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativaacueductoTableMap';

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
		$this->setName('tecnicooperativaacueducto');
		$this->setPhpName('Tecnicooperativaacueducto');
		$this->setClassname('Tecnicooperativaacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativaacueducto_toa_id_seq');
		// columns
		$this->addPrimaryKey('TOA_ID', 'ToaId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOA_TOP_ID', 'ToaTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('TOA_GRAVEDAD_SIN_TRATAMIENTO', 'ToaGravedadSinTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_BOMBEO_SIN_TRATAMIENTO', 'ToaBombeoSinTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_GRAVEDAD_CON_TRATAMIENTO', 'ToaGravedadConTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_BOMBEO_CON_TRATAMIENTO', 'ToaBombeoConTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_GRAVEDAD_BOMBEO_SIN_TRATAMIENTO', 'ToaGravedadBombeoSinTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_GRAVEDAD_BOMBEO_CON_TRATAMIENTO', 'ToaGravedadBombeoConTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_GRAVEDAD_SIN_TRATAMIENTO_BOMBEO_CON_TRATAMIENTO', 'ToaGravedadSinTratamientoBombeoConTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_GRAVEDAD_CON_TRATAMIENTO_BOMBEO_SIN_TRATAMIENTO', 'ToaGravedadConTratamientoBombeoSinTratamiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_CANTIDAD_AGUA_DISTRIBUIDA_POR_ANO', 'ToaCantidadAguaDistribuidaPorAno', 'VARCHAR', false, 255, null);
		$this->addColumn('TOA_SOLUCION_ACARREO', 'ToaSolucionAcarreo', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_SOLUCION_ACARREO_VIVIENDAS', 'ToaSolucionAcarreoViviendas', 'INTEGER', false, null, null);
		$this->addColumn('TOA_SOLUCION_NACIMIENTO', 'ToaSolucionNacimiento', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_SOLUCION_NACIMIENTO_VIVIENDAS', 'ToaSolucionNacimientoViviendas', 'INTEGER', false, null, null);
		$this->addColumn('TOA_SOLUCION_ALJIBE', 'ToaSolucionAljibe', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_SOLUCION_ALJIBE_VIVIENDAS', 'ToaSolucionAljibeViviendas', 'INTEGER', false, null, null);
		$this->addColumn('TOA_SOLUCION_AGUA_LLUVIA', 'ToaSolucionAguaLluvia', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_SOLUCION_AGUA_LLUVIA_VIVIENDAS', 'ToaSolucionAguaLluviaViviendas', 'INTEGER', false, null, null);
		$this->addColumn('TOA_SOLUCION_OTRO', 'ToaSolucionOtro', 'BOOLEAN', false, null, null);
		$this->addColumn('TOA_SOLUCION_OTRO_CUAL', 'ToaSolucionOtroCual', 'VARCHAR', false, 100, null);
		$this->addColumn('TOA_SOLUCION_OTRO_VIVIENDAS', 'ToaSolucionOtroViviendas', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('toa_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativaacueductoTableMap
