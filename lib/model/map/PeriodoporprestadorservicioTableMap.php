<?php


/**
 * This class defines the structure of the 'periodoporprestadorservicio' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/29/10 01:11:12
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class PeriodoporprestadorservicioTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.PeriodoporprestadorservicioTableMap';

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
		$this->setName('periodoporprestadorservicio');
		$this->setPhpName('Periodoporprestadorservicio');
		$this->setClassname('Periodoporprestadorservicio');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(false);
		// columns
		$this->addForeignPrimaryKey('PPS_PRE_ID', 'PpsPreId', 'INTEGER' , 'prestadorporservicio', 'PPSG_PRE_ID', true, null, null);
		$this->addPrimaryKey('PPS_SER_ID', 'PpsSerId', 'INTEGER', true, null, null);
		$this->addPrimaryKey('PPS_ANIO', 'PpsAnio', 'INTEGER', true, null, null);
		$this->addColumn('PPS_PRESUPUESTO_APROBADO', 'PpsPresupuestoAprobado', 'VARCHAR', false, 255, null);
		$this->addColumn('PPS_SUSCRIPTORES_PENDIENTES_DE_PAGO', 'PpsSuscriptoresPendientesDePago', 'VARCHAR', false, 255, null);
		$this->addColumn('PPS_ESTATUTOS', 'PpsEstatutos', 'VARCHAR', false, 255, null);
		$this->addColumn('PPS_NUMERO_EMPLEADOS_CON_COMPETENCIAS', 'PpsNumeroEmpleadosConCompetencias', 'VARCHAR', false, 255, null);
		$this->addColumn('PPS_NUMERO_EMPLEADOS_SIN_COMPETENCIAS', 'PpsNumeroEmpleadosSinCompetencias', 'VARCHAR', false, 255, null);
		$this->addColumn('PPS_NUMERO_EMPLEADOS_PROCESO_COMPETENCIAS', 'PpsNumeroEmpleadosProcesoCompetencias', 'VARCHAR', false, 255, null);
		$this->addColumn('PPS_NOMBRE_DILIGENCIADOR', 'PpsNombreDiligenciador', 'VARCHAR', false, 200, null);
		$this->addColumn('PPS_APELLIDO_DILIGENCIADOR', 'PpsApellidoDiligenciador', 'VARCHAR', false, 200, null);
		$this->addColumn('PPS_TELEFONO_DILIGENCIADOR', 'PpsTelefonoDiligenciador', 'VARCHAR', false, 15, null);
		$this->addColumn('PPS_IDENTIFICACION_DILIGENCIADOR', 'PpsIdentificacionDiligenciador', 'VARCHAR', false, 30, null);
		$this->addColumn('PPS_TIPO_IDENTIFICACION_DILIGENCIADOR', 'PpsTipoIdentificacionDiligenciador', 'VARCHAR', false, 20, null);
		$this->addColumn('PPS_NUMERO_SUSCRIPTORES', 'PpsNumeroSuscriptores', 'INTEGER', false, null, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Prestadorporservicio', 'Prestadorporservicio', RelationMap::MANY_TO_ONE, array('pps_pre_id' => 'ppsg_pre_id', ), null, 'CASCADE');
    $this->addRelation('Administrativafinanciera', 'Administrativafinanciera', RelationMap::ONE_TO_MANY, array('pps_pre_id' => 'iaf_pps_pre_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Calidad', 'Calidad', RelationMap::ONE_TO_MANY, array('pps_pre_id' => 'cal_pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Comercial', 'Comercial', RelationMap::ONE_TO_MANY, array('pps_pre_id' => 'com_pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Microcuencas', 'Microcuencas', RelationMap::ONE_TO_MANY, array('pps_pre_id' => 'mic_pps_pre_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::ONE_TO_MANY, array('pps_pre_id' => 'top_pps_pre_id', ), 'RESTRICT', 'CASCADE');
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

} // PeriodoporprestadorservicioTableMap
