<?php


/**
 * This class defines the structure of the 'usuario' table.
 *
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 22:20:01
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 * @package    lib.model.map
 */
class UsuarioTableMap extends TableMap {

	/**
	 * The (dot-path) name of this class
	 */
	const CLASS_NAME = 'lib.model.map.UsuarioTableMap';

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
		$this->setName('usuario');
		$this->setPhpName('Usuario');
		$this->setClassname('Usuario');
		$this->setPackage('lib.model');
		$this->setUseIdGenerator(true);
		$this->setPrimaryKeyMethodInfo('usuario_usu_id_seq');
		// columns
		$this->addPrimaryKey('USU_ID', 'UsuId', 'INTEGER', true, null, null);
		$this->addForeignKey('USU_PER_ID', 'UsuPerId', 'INTEGER', 'perfil', 'PER_ID', true, null, null);
		$this->addColumn('USU_LOGIN', 'UsuLogin', 'VARCHAR', true, 30, null);
		$this->addColumn('USU_CLAVE', 'UsuClave', 'VARCHAR', true, 32, null);
		$this->addColumn('USU_ESTADO', 'UsuEstado', 'VARCHAR', true, 20, null);
		// validators
	} // initialize()

	/**
	 * Build the RelationMap objects for this table relationships
	 */
	public function buildRelations()
	{
    $this->addRelation('Perfil', 'Perfil', RelationMap::MANY_TO_ONE, array('usu_per_id' => 'per_id', ), 'RESTRICT', 'RESTRICT');
    $this->addRelation('Prestador', 'Prestador', RelationMap::ONE_TO_MANY, array('usu_id' => 'pre_usu_id', ), 'RESTRICT', 'RESTRICT');
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

} // UsuarioTableMap
