<?php


/**
 * This class defines the structure of the 'facturacionyrecaudo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/22/10 22:07:52
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class FacturacionyrecaudoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.FacturacionyrecaudoTableMap';

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
		$this->setName('facturacionyrecaudo');
		$this->setPhpName('Facturacionyrecaudo');
		$this->setClassname('Facturacionyrecaudo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('facturacionyrecaudo_fac_id_seq');
		// columns
		$this->addPrimaryKey('FAC_ID', 'FacId', 'INTEGER', true, null, null);
		$this->addForeignKey('FAC_COM_ID', 'FacComId', 'INTEGER', 'comercial', 'COM_ID', true, null, null);
		$this->addColumn('FAC_FRECUENCIA_DEL_SERVICIO', 'FacFrecuenciaDelServicio', 'BOOLEAN', false, null, null);
		$this->addColumn('FAC_FRECUENC_FACTURACION', 'FacFrecuencFacturacion', 'VARCHAR', false, 30, null);
		$this->addColumn('FAC_FRECUENC_FAC_JUSTIFICACION', 'FacFrecuencFacJustificacion', 'VARCHAR', false, 30, null);
		$this->addColumn('FAC_NUM_FAC_EXP_ULTIMO_PERIODO', 'FacNumFacExpUltimoPeriodo', 'INTEGER', false, null, null);
		$this->addColumn('FAC_SIST_FAC_UTILIZADO', 'FacSistFacUtilizado', 'BOOLEAN', false, null, null);
		$this->addColumn('FAC_FRECUENCIA_FAC_JUSTIFICA', 'FacFrecuenciaFacJustifica', 'VARCHAR', false, 30, null);
		$this->addColumn('FAC_MOROSIDAD_PROMEDIO', 'FacMorosidadPromedio', 'VARCHAR', false, 255, null);
		$this->addColumn('FAC_VOL_AGUA_FAC_EN_EL_ANIO_ACU', 'FacVolAguaFacEnElAnioAcu', 'VARCHAR', false, 255, null);
		$this->addColumn('FAC_VOL_AGUA_SUMINISTRADO_ANIO_ACU', 'FacVolAguaSuministradoAnioAcu', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Comercial', 'Comercial', RelationMap::MANY_TO_ONE, array('fac_com_id' => 'com_id', ), 'RESTRICT', 'CASCADE');
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

} // FacturacionyrecaudoTableMap
