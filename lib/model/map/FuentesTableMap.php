<?php


/**
 * This class defines the structure of the 'fuentes' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 01:11:08
=======
<<<<<<< HEAD
 * 07/29/10 12:37:28
=======
<<<<<<< HEAD
 * 07/29/10 00:06:58
=======
 * 07/28/10 21:52:37
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
>>>>>>> 48ea370b158b87b5f84de3ad8d71891aac6362b0
>>>>>>> 424fbbb7da7e7b7dd07c377772bb35df6fa5351d
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class FuentesTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.FuentesTableMap';

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
		$this->setName('fuentes');
		$this->setPhpName('Fuentes');
		$this->setClassname('Fuentes');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('fuentes_fue_id_seq');
		// columns
		$this->addPrimaryKey('FUE_ID', 'FueId', 'INTEGER', true, null, null);
		$this->addForeignKey('FUE_MIC_ID', 'FueMicId', 'INTEGER', 'microcuencas', 'MIC_ID', true, null, null);
		$this->addColumn('FUE_NUMERO_FUENTES', 'FueNumeroFuentes', 'INTEGER', false, null, null);
		$this->addColumn('FUE_NUMERO_FUENTES_SUBTERRANEAS', 'FueNumeroFuentesSubterraneas', 'INTEGER', false, null, null);
		$this->addColumn('FUE_COMPRA_AGUA_BLOQUE', 'FueCompraAguaBloque', 'VARCHAR', false, 255, null);
		$this->addColumn('FUE_METODO_AFORO_VOLUMETRICO', 'FueMetodoAforoVolumetrico', 'VARCHAR', false, 255, null);
		$this->addColumn('FUE_METODO_AFORO_MICROMOLINETE', 'FueMetodoAforoMicromolinete', 'VARCHAR', false, 255, null);
		$this->addColumn('FUE_METODO_AFORO_VELOCIDAD', 'FueMetodoAforoVelocidad', 'VARCHAR', false, 255, null);
		$this->addColumn('FUE_METODO_AFORO_OTRO_CUAL', 'FueMetodoAforoOtroCual', 'VARCHAR', false, 100, null);
		$this->addColumn('FUE_CUMPLE_PERMISOS', 'FueCumplePermisos', 'VARCHAR', false, 255, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Microcuencas', 'Microcuencas', RelationMap::MANY_TO_ONE, array('fue_mic_id' => 'mic_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Fuentessubterraneas', 'Fuentessubterraneas', RelationMap::ONE_TO_MANY, array('fue_id' => 'fsu_fue_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Fuentessuperficiales', 'Fuentessuperficiales', RelationMap::ONE_TO_MANY, array('fue_id' => 'fsp_fue_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Tipofuentesuperficial', 'Tipofuentesuperficial', RelationMap::ONE_TO_MANY, array('fue_id' => 'tfu_fue_id', ), 'RESTRICT', 'RESTRICT');
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

} // FuentesTableMap
