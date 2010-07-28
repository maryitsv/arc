<?php


/**
 * This class defines the structure of the 'tecnicooperativaplantaaguapotableacueducto' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 12:35:51
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TecnicooperativaplantaaguapotableacueductoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TecnicooperativaplantaaguapotableacueductoTableMap';

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
		$this->setName('tecnicooperativaplantaaguapotableacueducto');
		$this->setPhpName('Tecnicooperativaplantaaguapotableacueducto');
		$this->setClassname('Tecnicooperativaplantaaguapotableacueducto');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tecnicooperativaplantaaguapotableacueducto_topla_id_seq');
		// columns
		$this->addPrimaryKey('TOPLA_ID', 'ToplaId', 'INTEGER', true, null, null);
		$this->addForeignKey('TOPLA_TOP_ID', 'ToplaTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('TOPLA_TECNOLOGIA_UTILIZADA_CC', 'ToplaTecnologiaUtilizadaCc', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_TECNOLOGIA_UTILIZADA_FD', 'ToplaTecnologiaUtilizadaFd', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_TECNOLOGIA_UTILIZADA_PC', 'ToplaTecnologiaUtilizadaPc', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_TECNOLOGIA_UTILIZADA_FIME', 'ToplaTecnologiaUtilizadaFime', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_TECNOLOGIA_UTILIZADA_CT', 'ToplaTecnologiaUtilizadaCt', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_TECNOLOGIA_UTILIZADA_RHM', 'ToplaTecnologiaUtilizadaRhm', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_CICLO_COMPLETO_MR', 'ToplaCicloCompletoMr', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_CICLO_COMPLETO_FLH', 'ToplaCicloCompletoFlh', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_CICLO_COMPLETO_FLM', 'ToplaCicloCompletoFlm', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_CICLO_COMPLETO_SD', 'ToplaCicloCompletoSd', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_CICLO_COMPLETO_FR', 'ToplaCicloCompletoFr', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FILTRACION_DIRECTA_MR', 'ToplaFiltracionDirectaMr', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FILTRACION_DIRECTA_FLH', 'ToplaFiltracionDirectaFlh', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FILTRACION_DIRECTA_FLM', 'ToplaFiltracionDirectaFlm', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FILTRACION_DIRECTA_FR', 'ToplaFiltracionDirectaFr', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FIME_FGD', 'ToplaFimeFgd', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FIME_FGAC', 'ToplaFimeFgac', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FIME_FGAS2', 'ToplaFimeFgas2', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FIME_FGAS3', 'ToplaFimeFgas3', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_FIME_FLA', 'ToplaFimeFla', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_RHM_BANDEJAS_CASCADAS', 'ToplaRhmBandejasCascadas', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_RHM_ASPERSORES', 'ToplaRhmAspersores', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_RHM_SD', 'ToplaRhmSd', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_RHM_FR', 'ToplaRhmFr', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_RHM_FIME', 'ToplaRhmFime', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_PLANTA_TTMTO_FUNCIONA', 'ToplaPlantaTtmtoFunciona', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_ESTRUCTURAS_MEDICION_CAU', 'ToplaEstructurasMedicionCau', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_MENOR_CAUDAL_OPERACION_DISENO', 'ToplaMenorCaudalOperacionDiseno', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_PLANTA_COMPACTA', 'ToplaPlantaCompacta', 'VARCHAR', false, 255, null);
		$this->addColumn('TOPLA_COMBINACION_TECNOLOGIAS', 'ToplaCombinacionTecnologias', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('topla_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // TecnicooperativaplantaaguapotableacueductoTableMap
