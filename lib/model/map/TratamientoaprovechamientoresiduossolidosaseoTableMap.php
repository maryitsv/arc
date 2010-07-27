<?php


/**
 * This class defines the structure of the 'tratamientoaprovechamientoresiduossolidosaseo' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/27/10 18:48:26
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class TratamientoaprovechamientoresiduossolidosaseoTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.TratamientoaprovechamientoresiduossolidosaseoTableMap';

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
		$this->setName('tratamientoaprovechamientoresiduossolidosaseo');
		$this->setPhpName('Tratamientoaprovechamientoresiduossolidosaseo');
		$this->setClassname('Tratamientoaprovechamientoresiduossolidosaseo');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('tratamientoaprovechamientoresiduossolidosaseo_tap_id_seq');
		// columns
		$this->addPrimaryKey('TAP_ID', 'TapId', 'INTEGER', true, null, null);
		$this->addForeignKey('TAP_TOP_ID', 'TapTopId', 'INTEGER', 'tecnicooperativo', 'TOP_ID', true, null, null);
		$this->addColumn('TAP_PESO_RESIDUOS_COMIDA_JARDIN', 'TapPesoResiduosComidaJardin', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_PAPEL_CARTON', 'TapPesoPapelCarton', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_PLASTICOS', 'TapPesoPlasticos', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_CAUCHO_CUERO', 'TapPesoCauchoCuero', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_TEXTILES', 'TapPesoTextiles', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_MADERA', 'TapPesoMadera', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_PRODUCTOS_METALICOS', 'TapPesoProductosMetalicos', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_VIDRIOS', 'TapPesoVidrios', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_CERAMICOS_ROCA_ESCOMBRO', 'TapPesoCeramicosRocaEscombro', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_HUESOS', 'TapPesoHuesos', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_RESIDUOS_HIGENICOS', 'TapPesoResiduosHigenicos', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_PESO_OTROS_RESIDUOS', 'TapPesoOtrosResiduos', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_TON_MES', 'TapDestiRsSepaOrganiTonMes', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_DIS_CIE_ABIE', 'TapDestiRsSepaOrganiDisCieAbie', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_DIS_RELL_SANI', 'TapDestiRsSepaOrganiDisRellSani', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_ARROJA_AGUA', 'TapDestiRsSepaOrganiArrojaAgua', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_ARROJA_AGUA_CANT', 'TapDestiRsSepaOrganiArrojaAguaCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_APROVECHA', 'TapDestiRsSepaOrganiAprovecha', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_APROV_TOTAL_PROCE', 'TapDestiRsSepaOrganiAprovTotalProce', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_APROV_TOTAL_TERMI', 'TapDestiRsSepaOrganiAprovTotalTermi', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_ORGANI_OTRO_CUAL', 'TapDestiRsSepaOrganiOtroCual', 'VARCHAR', false, 100, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_TON_MES', 'TapDestiRsSepaResiclaTonMes', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_QUEMAN', 'TapDestiRsSepaResiclaQueman', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_DIS_CIE_ABIE', 'TapDestiRsSepaResiclaDisCieAbie', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_DIS_RELL_SANI', 'TapDestiRsSepaResiclaDisRellSani', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_ARROJA_AGUA', 'TapDestiRsSepaResiclaArrojaAgua', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_ARROJA_AGUA_CANT', 'TapDestiRsSepaResiclaArrojaAguaCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_REGALAN', 'TapDestiRsSepaResiclaRegalan', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VENDEN', 'TapDestiRsSepaResiclaVenden', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_VIDRIO', 'TapDestiRsSepaResiclaVenVidrio', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_PAPEL', 'TapDestiRsSepaResiclaVenPapel', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_PLASTI', 'TapDestiRsSepaResiclaVenPlasti', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_METAL', 'TapDestiRsSepaResiclaVenMetal', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_VIDRIO_CANT', 'TapDestiRsSepaResiclaVenVidrioCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_PAPEL_CANT', 'TapDestiRsSepaResiclaVenPapelCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_PLASTI_CANT', 'TapDestiRsSepaResiclaVenPlastiCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_RESICLA_VEN_METAL_CANT', 'TapDestiRsSepaResiclaVenMetalCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_HIGEN_QUEMAN', 'TapDestiRsSepaHigenQueman', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_HIGEN_DIS_CIE_ABIE', 'TapDestiRsSepaHigenDisCieAbie', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_HIGEN_DIS_RELL_SANI', 'TapDestiRsSepaHigenDisRellSani', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_HIGEN_ARROJA_AGUA', 'TapDestiRsSepaHigenArrojaAgua', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_HIGEN_ARROJA_AGUA_CANT', 'TapDestiRsSepaHigenArrojaAguaCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_SEPA_HIGEN_OTRO_CUAL', 'TapDestiRsSepaHigenOtroCual', 'VARCHAR', false, 100, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_QUEMAN', 'TapDestiRsNosepaRecoleQueman', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_DIS_CIE_ABIE', 'TapDestiRsNosepaRecoleDisCieAbie', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_DIS_RELL_SANI', 'TapDestiRsNosepaRecoleDisRellSani', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_ARROJA_AGUA', 'TapDestiRsNosepaRecoleArrojaAgua', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_ARROJA_AGUA_CANT', 'TapDestiRsNosepaRecoleArrojaAguaCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP', 'TapDestiRsNosepaRecoleSepaSitDisp', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_NOCOMER', 'TapDestiRsNosepaRecoleSepaSitDispNocomer', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER', 'TapDestiRsNosepaRecoleSepaSitDispComer', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_VIDRIO', 'TapDestiRsNosepaRecoleSepaSitDispComerVidrio', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PAPEL', 'TapDestiRsNosepaRecoleSepaSitDispComerPapel', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PLASTI', 'TapDestiRsNosepaRecoleSepaSitDispComerPlasti', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_METAL', 'TapDestiRsNosepaRecoleSepaSitDispComerMetal', 'BOOLEAN', false, null, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_VIDRIO_CANT', 'TapDestiRsNosepaRecoleSepaSitDispComerVidrioCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PAPEL_CANT', 'TapDestiRsNosepaRecoleSepaSitDispComerPapelCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PLASTI_CANT', 'TapDestiRsNosepaRecoleSepaSitDispComerPlastiCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_METAL_CANT', 'TapDestiRsNosepaRecoleSepaSitDispComerMetalCant', 'VARCHAR', false, 255, null);
		$this->addColumn('TAP_DESTI_RS_NOSEPA_RECOLE_OTRO_CUAL', 'TapDestiRsNosepaRecoleOtroCual', 'VARCHAR', false, 100, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Tecnicooperativo', 'Tecnicooperativo', RelationMap::MANY_TO_ONE, array('tap_top_id' => 'top_id', ), 'RESTRICT', 'CASCADE');
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

} // TratamientoaprovechamientoresiduossolidosaseoTableMap
