<?php


/**
 * This class defines the structure of the 'informacioncontable' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 13:25:15
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class InformacioncontableTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.InformacioncontableTableMap';

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
		$this->setName('informacioncontable');
		$this->setPhpName('Informacioncontable');
		$this->setClassname('Informacioncontable');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('informacioncontable_ico_id_seq');
		// columns
		$this->addPrimaryKey('ICO_ID', 'IcoId', 'INTEGER', true, null, null);
		$this->addForeignKey('ICO_IAF_ID', 'IcoIafId', 'INTEGER', 'administrativafinanciera', 'IAF_ID', true, null, null);
		$this->addColumn('ICO_BALANCE_GENERAL', 'IcoBalanceGeneral', 'DATE', false, null, null);
		$this->addColumn('ICO_ACTIVOS', 'IcoActivos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_ACTIVOS_CORRIENTES', 'IcoActivosCorrientes', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_EFECTIVO', 'IcoEfectivo', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_DEUDORES', 'IcoDeudores', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_INVENTARIO', 'IcoInventario', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_ACTIVOS_FIJOS', 'IcoActivosFijos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_PROPIEDAD_PLANTA_EQUIPOS', 'IcoPropiedadPlantaEquipos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_OTROS_ACTIVOS', 'IcoOtrosActivos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_PASIVOS', 'IcoPasivos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_PASIVOS_CORRIENTES', 'IcoPasivosCorrientes', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_OBLIGACIONES_FINANCIERAS', 'IcoObligacionesFinancieras', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_OTRAS_CUENTAS_POR_PAGAR', 'IcoOtrasCuentasPorPagar', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_OBLIGACIONES_LABORALES', 'IcoObligacionesLaborales', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_OTROS_PASIVOS', 'IcoOtrosPasivos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_PATRIMONIO', 'IcoPatrimonio', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_ESTADO_DE_RESULTADOS', 'IcoEstadoDeResultados', 'DATE', false, null, null);
		$this->addColumn('ICO_TOTAL_INGRESOS', 'IcoTotalIngresos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_INGRESOS_OPERACIONALES', 'IcoIngresosOperacionales', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_INGRESOS_NO_OPERACIONALES', 'IcoIngresosNoOperacionales', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_TOTAL_EGRESOS', 'IcoTotalEgresos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_GASTOS_ADMINISTRATIVOS', 'IcoGastosAdministrativos', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_COSTO_OPERACION_MANTENIMIENTO', 'IcoCostoOperacionMantenimiento', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_COSTO_INVERSION', 'IcoCostoInversion', 'VARCHAR', false, 255, null);
		$this->addColumn('ICO_RESULTADOS_EJERCICIO', 'IcoResultadosEjercicio', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Administrativafinanciera', 'Administrativafinanciera', RelationMap::MANY_TO_ONE, array('ico_iaf_id' => 'iaf_id', ), 'RESTRICT', 'RESTRICT');
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

} // InformacioncontableTableMap
