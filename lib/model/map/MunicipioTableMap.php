<?php


/**
 * This class defines the structure of the 'municipio' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 01:11:11
=======
<<<<<<< HEAD
 * 07/29/10 12:37:31
=======
<<<<<<< HEAD
 * 07/29/10 00:07:01
=======
 * 07/28/10 21:52:39
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
class MunicipioTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.MunicipioTableMap';

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
		$this->setName('municipio');
		$this->setPhpName('Municipio');
		$this->setClassname('Municipio');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('municipio_mun_id_seq');
		// columns
		$this->addPrimaryKey('MUN_ID', 'MunId', 'INTEGER', true, null, null);
		$this->addForeignKey('MUN_DEP_ID', 'MunDepId', 'INTEGER', 'departamento', 'DEP_ID', true, null, null);
		$this->addColumn('MUN_NOMBRE', 'MunNombre', 'VARCHAR', true, 200, null);
		$this->addColumn('MUN_ZONA', 'MunZona', 'VARCHAR', false, 50, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Departamento', 'Departamento', RelationMap::MANY_TO_ONE, array('mun_dep_id' => 'dep_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Disposicionfinalresiduosaseo', 'Disposicionfinalresiduosaseo', RelationMap::ONE_TO_MANY, array('mun_id' => 'dfr_municipio_disposicion_id', ), 'RESTRICT', 'CASCADE');
    $this->addRelation('Informaciongeneralmicrocuencas', 'Informaciongeneralmicrocuencas', RelationMap::ONE_TO_MANY, array('mun_id' => 'imi_mun_id', ), 'RESTRICT', 'RESTRICT');
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

} // MunicipioTableMap
