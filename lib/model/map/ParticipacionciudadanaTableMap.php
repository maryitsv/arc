<?php


/**
 * This class defines the structure of the 'participacionciudadana' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 21:52:40
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class ParticipacionciudadanaTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.ParticipacionciudadanaTableMap';

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
		$this->setName('participacionciudadana');
		$this->setPhpName('Participacionciudadana');
		$this->setClassname('Participacionciudadana');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('participacionciudadana_par_id_seq');
		// columns
		$this->addPrimaryKey('PAR_ID', 'ParId', 'INTEGER', true, null, null);
		$this->addForeignKey('PAR_IAF_ID', 'ParIafId', 'INTEGER', 'administrativafinanciera', 'IAF_ID', true, null, null);
		$this->addColumn('PAR_PARTICIPACION_CIUDADANA_DIRECTA', 'ParParticipacionCiudadanaDirecta', 'VARCHAR', false, 255, null);
		$this->addColumn('PAR_PARTICIPACION_CIUDADANA_ASAMBLEA', 'ParParticipacionCiudadanaAsamblea', 'VARCHAR', false, 255, null);
		$this->addColumn('PAR_PARTICIPACION_CIUDADANA_COMITE_DESARROLLO_CONTROL_SOCIAL', 'ParParticipacionCiudadanaComiteDesarrolloControlSocial', 'VARCHAR', false, 255, null);
		$this->addColumn('PAR_PARTICIPACION_CIUDADANA_VEEDURIAS', 'ParParticipacionCiudadanaVeedurias', 'VARCHAR', false, 255, null);
		$this->addColumn('PAR_PARTICIPACION_CIUDADANA_OTRA_CUAL', 'ParParticipacionCiudadanaOtraCual', 'VARCHAR', false, 100, null);
		$this->addColumn('PAR_PROPUESTAS_VOCALES', 'ParPropuestasVocales', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Administrativafinanciera', 'Administrativafinanciera', RelationMap::MANY_TO_ONE, array('par_iaf_id' => 'iaf_id', ), 'RESTRICT', 'RESTRICT');
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

} // ParticipacionciudadanaTableMap
