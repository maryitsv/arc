<?php


/**
 * This class defines the structure of the 'capacitacion' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Fri Jul 30 14:41:20 2010
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class CapacitacionTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.CapacitacionTableMap';

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
		$this->setName('capacitacion');
		$this->setPhpName('Capacitacion');
		$this->setClassname('Capacitacion');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('capacitacion_cap_id_seq');
		// columns
		$this->addPrimaryKey('CAP_ID', 'CapId', 'INTEGER', true, null, null);
		$this->addForeignKey('CAP_IAF_ID', 'CapIafId', 'INTEGER', 'administrativafinanciera', 'IAF_ID', true, null, null);
		$this->addColumn('CAP_DADA_PRESTADOR', 'CapDadaPrestador', 'VARCHAR', true, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_USO_EFICIENTE_AGUA', 'CapActividadCapacitacionUsoEficienteAgua', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_HIGIENE_PERSONAL', 'CapActividadCapacitacionHigienePersonal', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_HIGIENE_VIVIENDA', 'CapActividadCapacitacionHigieneVivienda', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_HIGIENE_SITIOS_PUBLICOS', 'CapActividadCapacitacionHigieneSitiosPublicos', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_CAPACITACION_RECIBIDA_PRESTADOR', 'CapCapacitacionRecibidaPrestador', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_EDUCACION_AMBIENTAL', 'CapActividadCapacitacionEducacionAmbiental', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_PARTICIPACION_COMUNITARIA', 'CapActividadCapacitacionParticipacionComunitaria', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_VEEDURIA_CIUDADANA', 'CapActividadCapacitacionVeeduriaCiudadana', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_FUNCION_SIST_ABASTECIMIENTO', 'CapActividadCapacitacionFuncionSistAbastecimiento', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_ACTIVIDAD_CAPACITACION_OTRA_CUALES', 'CapActividadCapacitacionOtraCuales', 'VARCHAR', false, 100, null);
		$this->addColumn('CAP_TEMAS_CAPACITACION_ADMINISTRATIVOS', 'CapTemasCapacitacionAdministrativos', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_TEMAS_CAPACITACION_NORMATIVOS', 'CapTemasCapacitacionNormativos', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_TEMAS_CAPACITACION_AMBIENTALES', 'CapTemasCapacitacionAmbientales', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_TEMAS_CAPACITACION_OPERATIVOS', 'CapTemasCapacitacionOperativos', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_TEMAS_CAPACITACION_SUI', 'CapTemasCapacitacionSui', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_TEMAS_CAPACITACION_OTRA_CUAL', 'CapTemasCapacitacionOtraCual', 'VARCHAR', false, 100, null);
		$this->addColumn('CAP_INSTITUCIONES_OFRECIERON', 'CapInstitucionesOfrecieron', 'VARCHAR', false, 100, null);
		$this->addColumn('CAP_NUMERO_DIRECTIVA_HOMBRES', 'CapNumeroDirectivaHombres', 'VARCHAR', false, 255, null);
		$this->addColumn('CAP_NUMERO_DIRECTIVA_MUJERES', 'CapNumeroDirectivaMujeres', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Administrativafinanciera', 'Administrativafinanciera', RelationMap::MANY_TO_ONE, array('cap_iaf_id' => 'iaf_id', ), 'RESTRICT', 'RESTRICT');
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

} // CapacitacionTableMap