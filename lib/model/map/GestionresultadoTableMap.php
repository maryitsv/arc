<?php


/**
 * This class defines the structure of the 'gestionresultado' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Fri Jul 30 18:20:59 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class GestionresultadoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.GestionresultadoTableMap';

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
		$this->setName('gestionresultado');
		$this->setPhpName('Gestionresultado');
		$this->setClassname('Gestionresultado');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('gestionresultado_gre_id_seq');
		// columns
		$this->addPrimaryKey('GRE_ID', 'GreId', 'INTEGER', true, null, null);
		$this->addForeignKey('GRE_IAF_ID', 'GreIafId', 'INTEGER', 'administrativafinanciera', 'IAF_ID', true, null, null);
		$this->addColumn('GRE_PLAN_GESTION_RESULTADOS', 'GrePlanGestionResultados', 'VARCHAR', false, 255, null);
		$this->addColumn('GRE_MICROMEDIDORES_FUNCIONANDO', 'GreMicromedidoresFuncionando', 'INTEGER', false, null, null);
		$this->addColumn('GRE_TOTAL_SUSCRIPTORES_MICROMEDICION', 'GreTotalSuscriptoresMicromedicion', 'INTEGER', false, null, null);
		$this->addColumn('GRE_VALOR_MICROMEDICION', 'GreValorMicromedicion', 'VARCHAR', false, 255, null);
		$this->addColumn('GRE_MACROMEDIDORES_FUNCIONANDO', 'GreMacromedidoresFuncionando', 'INTEGER', false, null, null);
		$this->addColumn('GRE_MACROMEDIDORES_PROYECTADOS', 'GreMacromedidoresProyectados', 'INTEGER', false, null, null);
		$this->addColumn('GRE_VALOR_MACROMEDICION', 'GreValorMacromedicion', 'VARCHAR', false, 255, null);
		$this->addColumn('GRE_MUESTRAS_TOMADAS', 'GreMuestrasTomadas', 'INTEGER', false, null, null);
		$this->addColumn('GRE_MUESTRAS_APTAS', 'GreMuestrasAptas', 'INTEGER', false, null, null);
		$this->addColumn('GRE_VALOR_CALIDAD_AGUA', 'GreValorCalidadAgua', 'VARCHAR', false, 255, null);
		$this->addColumn('GRE_TOTAL_SUSCRIPTORES_FACTURACION', 'GreTotalSuscriptoresFacturacion', 'INTEGER', false, null, null);
		$this->addColumn('GRE_TOTAL_FACTURAS_DICIEMBRE', 'GreTotalFacturasDiciembre', 'INTEGER', false, null, null);
		$this->addColumn('GRE_VALOR_FACTURACION', 'GreValorFacturacion', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Administrativafinanciera', 'Administrativafinanciera', RelationMap::MANY_TO_ONE, array('gre_iaf_id' => 'iaf_id', ), 'RESTRICT', 'RESTRICT');
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

} // GestionresultadoTableMap
