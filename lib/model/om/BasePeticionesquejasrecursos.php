<?php

/**
 * Base class that represents a row from the 'peticionesquejasrecursos' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/29/10 12:37:33
=======
<<<<<<< HEAD
 * 07/29/10 00:07:03
=======
 * 07/28/10 21:52:42
>>>>>>> d566463288c5b8110a13446cf8dcc22996c79238
>>>>>>> 48ea370b158b87b5f84de3ad8d71891aac6362b0
 *
 * @package    lib.model.om
 */
abstract class BasePeticionesquejasrecursos extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        PeticionesquejasrecursosPeer
	 */
	protected static $peer;

	/**
	 * The value for the pqr_id field.
	 * @var        int
	 */
	protected $pqr_id;

	/**
	 * The value for the pqr_com_id field.
	 * @var        int
	 */
	protected $pqr_com_id;

	/**
	 * The value for the pqr_registro_pqr field.
	 * @var        string
	 */
	protected $pqr_registro_pqr;

	/**
	 * The value for the pqr_cantidad_anual_pqr field.
	 * @var        int
	 */
	protected $pqr_cantidad_anual_pqr;

	/**
	 * The value for the pqr_cantidad_pqr_facturacion field.
	 * @var        int
	 */
	protected $pqr_cantidad_pqr_facturacion;

	/**
	 * The value for the pqr_cantidad_pqr_instalacion field.
	 * @var        int
	 */
	protected $pqr_cantidad_pqr_instalacion;

	/**
	 * The value for the pqr_cantidad_pqr_prest_servicio field.
	 * @var        int
	 */
	protected $pqr_cantidad_pqr_prest_servicio;

	/**
	 * The value for the pqr_cantidad_pqr_otro field.
	 * @var        int
	 */
	protected $pqr_cantidad_pqr_otro;

	/**
	 * The value for the pqr_cantidad_pqr_explica_otros field.
	 * @var        string
	 */
	protected $pqr_cantidad_pqr_explica_otros;

	/**
	 * The value for the pqr_inf_causa_suspension_corte field.
	 * @var        string
	 */
	protected $pqr_inf_causa_suspension_corte;

	/**
	 * The value for the pqr_inf_causa_susp_corte_explic field.
	 * @var        string
	 */
	protected $pqr_inf_causa_susp_corte_explic;

	/**
	 * @var        Comercial
	 */
	protected $aComercial;

	/**
	 * Flag to prevent endless save loop, if this object is referenced
	 * by another object which falls in this transaction.
	 * @var        boolean
	 */
	protected $alreadyInSave = false;

	/**
	 * Flag to prevent endless validation loop, if this object is referenced
	 * by another object which falls in this transaction.
	 * @var        boolean
	 */
	protected $alreadyInValidation = false;

	// symfony behavior
	
	const PEER = 'PeticionesquejasrecursosPeer';

	/**
	 * Get the [pqr_id] column value.
	 * 
	 * @return     int
	 */
	public function getPqrId()
	{
		return $this->pqr_id;
	}

	/**
	 * Get the [pqr_com_id] column value.
	 * 
	 * @return     int
	 */
	public function getPqrComId()
	{
		return $this->pqr_com_id;
	}

	/**
	 * Get the [pqr_registro_pqr] column value.
	 * 
	 * @return     string
	 */
	public function getPqrRegistroPqr()
	{
		return $this->pqr_registro_pqr;
	}

	/**
	 * Get the [pqr_cantidad_anual_pqr] column value.
	 * 
	 * @return     int
	 */
	public function getPqrCantidadAnualPqr()
	{
		return $this->pqr_cantidad_anual_pqr;
	}

	/**
	 * Get the [pqr_cantidad_pqr_facturacion] column value.
	 * 
	 * @return     int
	 */
	public function getPqrCantidadPqrFacturacion()
	{
		return $this->pqr_cantidad_pqr_facturacion;
	}

	/**
	 * Get the [pqr_cantidad_pqr_instalacion] column value.
	 * 
	 * @return     int
	 */
	public function getPqrCantidadPqrInstalacion()
	{
		return $this->pqr_cantidad_pqr_instalacion;
	}

	/**
	 * Get the [pqr_cantidad_pqr_prest_servicio] column value.
	 * 
	 * @return     int
	 */
	public function getPqrCantidadPqrPrestServicio()
	{
		return $this->pqr_cantidad_pqr_prest_servicio;
	}

	/**
	 * Get the [pqr_cantidad_pqr_otro] column value.
	 * 
	 * @return     int
	 */
	public function getPqrCantidadPqrOtro()
	{
		return $this->pqr_cantidad_pqr_otro;
	}

	/**
	 * Get the [pqr_cantidad_pqr_explica_otros] column value.
	 * 
	 * @return     string
	 */
	public function getPqrCantidadPqrExplicaOtros()
	{
		return $this->pqr_cantidad_pqr_explica_otros;
	}

	/**
	 * Get the [pqr_inf_causa_suspension_corte] column value.
	 * 
	 * @return     string
	 */
	public function getPqrInfCausaSuspensionCorte()
	{
		return $this->pqr_inf_causa_suspension_corte;
	}

	/**
	 * Get the [pqr_inf_causa_susp_corte_explic] column value.
	 * 
	 * @return     string
	 */
	public function getPqrInfCausaSuspCorteExplic()
	{
		return $this->pqr_inf_causa_susp_corte_explic;
	}

	/**
	 * Set the value of [pqr_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_id !== $v) {
			$this->pqr_id = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_ID;
		}

		return $this;
	} // setPqrId()

	/**
	 * Set the value of [pqr_com_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrComId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_com_id !== $v) {
			$this->pqr_com_id = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_COM_ID;
		}

		if ($this->aComercial !== null && $this->aComercial->getComId() !== $v) {
			$this->aComercial = null;
		}

		return $this;
	} // setPqrComId()

	/**
	 * Set the value of [pqr_registro_pqr] column.
	 * 
	 * @param      string $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrRegistroPqr($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pqr_registro_pqr !== $v) {
			$this->pqr_registro_pqr = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_REGISTRO_PQR;
		}

		return $this;
	} // setPqrRegistroPqr()

	/**
	 * Set the value of [pqr_cantidad_anual_pqr] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrCantidadAnualPqr($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_cantidad_anual_pqr !== $v) {
			$this->pqr_cantidad_anual_pqr = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_CANTIDAD_ANUAL_PQR;
		}

		return $this;
	} // setPqrCantidadAnualPqr()

	/**
	 * Set the value of [pqr_cantidad_pqr_facturacion] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrCantidadPqrFacturacion($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_cantidad_pqr_facturacion !== $v) {
			$this->pqr_cantidad_pqr_facturacion = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_FACTURACION;
		}

		return $this;
	} // setPqrCantidadPqrFacturacion()

	/**
	 * Set the value of [pqr_cantidad_pqr_instalacion] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrCantidadPqrInstalacion($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_cantidad_pqr_instalacion !== $v) {
			$this->pqr_cantidad_pqr_instalacion = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_INSTALACION;
		}

		return $this;
	} // setPqrCantidadPqrInstalacion()

	/**
	 * Set the value of [pqr_cantidad_pqr_prest_servicio] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrCantidadPqrPrestServicio($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_cantidad_pqr_prest_servicio !== $v) {
			$this->pqr_cantidad_pqr_prest_servicio = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_PREST_SERVICIO;
		}

		return $this;
	} // setPqrCantidadPqrPrestServicio()

	/**
	 * Set the value of [pqr_cantidad_pqr_otro] column.
	 * 
	 * @param      int $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrCantidadPqrOtro($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pqr_cantidad_pqr_otro !== $v) {
			$this->pqr_cantidad_pqr_otro = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_OTRO;
		}

		return $this;
	} // setPqrCantidadPqrOtro()

	/**
	 * Set the value of [pqr_cantidad_pqr_explica_otros] column.
	 * 
	 * @param      string $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrCantidadPqrExplicaOtros($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pqr_cantidad_pqr_explica_otros !== $v) {
			$this->pqr_cantidad_pqr_explica_otros = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_EXPLICA_OTROS;
		}

		return $this;
	} // setPqrCantidadPqrExplicaOtros()

	/**
	 * Set the value of [pqr_inf_causa_suspension_corte] column.
	 * 
	 * @param      string $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrInfCausaSuspensionCorte($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pqr_inf_causa_suspension_corte !== $v) {
			$this->pqr_inf_causa_suspension_corte = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_INF_CAUSA_SUSPENSION_CORTE;
		}

		return $this;
	} // setPqrInfCausaSuspensionCorte()

	/**
	 * Set the value of [pqr_inf_causa_susp_corte_explic] column.
	 * 
	 * @param      string $v new value
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 */
	public function setPqrInfCausaSuspCorteExplic($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pqr_inf_causa_susp_corte_explic !== $v) {
			$this->pqr_inf_causa_susp_corte_explic = $v;
			$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_INF_CAUSA_SUSP_CORTE_EXPLIC;
		}

		return $this;
	} // setPqrInfCausaSuspCorteExplic()

	/**
	 * Indicates whether the columns in this object are only set to default values.
	 *
	 * This method can be used in conjunction with isModified() to indicate whether an object is both
	 * modified _and_ has some values set which are non-default.
	 *
	 * @return     boolean Whether the columns in this object are only been set with default values.
	 */
	public function hasOnlyDefaultValues()
	{
		// otherwise, everything was equal, so return TRUE
		return true;
	} // hasOnlyDefaultValues()

	/**
	 * Hydrates (populates) the object variables with values from the database resultset.
	 *
	 * An offset (0-based "start column") is specified so that objects can be hydrated
	 * with a subset of the columns in the resultset rows.  This is needed, for example,
	 * for results of JOIN queries where the resultset row includes columns from two or
	 * more tables.
	 *
	 * @param      array $row The row returned by PDOStatement->fetch(PDO::FETCH_NUM)
	 * @param      int $startcol 0-based offset column which indicates which restultset column to start with.
	 * @param      boolean $rehydrate Whether this object is being re-hydrated from the database.
	 * @return     int next starting column
	 * @throws     PropelException  - Any caught Exception will be rewrapped as a PropelException.
	 */
	public function hydrate($row, $startcol = 0, $rehydrate = false)
	{
		try {

			$this->pqr_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->pqr_com_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->pqr_registro_pqr = ($row[$startcol + 2] !== null) ? (string) $row[$startcol + 2] : null;
			$this->pqr_cantidad_anual_pqr = ($row[$startcol + 3] !== null) ? (int) $row[$startcol + 3] : null;
			$this->pqr_cantidad_pqr_facturacion = ($row[$startcol + 4] !== null) ? (int) $row[$startcol + 4] : null;
			$this->pqr_cantidad_pqr_instalacion = ($row[$startcol + 5] !== null) ? (int) $row[$startcol + 5] : null;
			$this->pqr_cantidad_pqr_prest_servicio = ($row[$startcol + 6] !== null) ? (int) $row[$startcol + 6] : null;
			$this->pqr_cantidad_pqr_otro = ($row[$startcol + 7] !== null) ? (int) $row[$startcol + 7] : null;
			$this->pqr_cantidad_pqr_explica_otros = ($row[$startcol + 8] !== null) ? (string) $row[$startcol + 8] : null;
			$this->pqr_inf_causa_suspension_corte = ($row[$startcol + 9] !== null) ? (string) $row[$startcol + 9] : null;
			$this->pqr_inf_causa_susp_corte_explic = ($row[$startcol + 10] !== null) ? (string) $row[$startcol + 10] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 11; // 11 = PeticionesquejasrecursosPeer::NUM_COLUMNS - PeticionesquejasrecursosPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Peticionesquejasrecursos object", $e);
		}
	}

	/**
	 * Checks and repairs the internal consistency of the object.
	 *
	 * This method is executed after an already-instantiated object is re-hydrated
	 * from the database.  It exists to check any foreign keys to make sure that
	 * the objects related to the current object are correct based on foreign key.
	 *
	 * You can override this method in the stub class, but you should always invoke
	 * the base method from the overridden method (i.e. parent::ensureConsistency()),
	 * in case your model changes.
	 *
	 * @throws     PropelException
	 */
	public function ensureConsistency()
	{

		if ($this->aComercial !== null && $this->pqr_com_id !== $this->aComercial->getComId()) {
			$this->aComercial = null;
		}
	} // ensureConsistency

	/**
	 * Reloads this object from datastore based on primary key and (optionally) resets all associated objects.
	 *
	 * This will only work if the object has been saved and has a valid primary key set.
	 *
	 * @param      boolean $deep (optional) Whether to also de-associated any related objects.
	 * @param      PropelPDO $con (optional) The PropelPDO connection to use.
	 * @return     void
	 * @throws     PropelException - if this object is deleted, unsaved or doesn't have pk match in db
	 */
	public function reload($deep = false, PropelPDO $con = null)
	{
		if ($this->isDeleted()) {
			throw new PropelException("Cannot reload a deleted object.");
		}

		if ($this->isNew()) {
			throw new PropelException("Cannot reload an unsaved object.");
		}

		if ($con === null) {
			$con = Propel::getConnection(PeticionesquejasrecursosPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = PeticionesquejasrecursosPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aComercial = null;
		} // if (deep)
	}

	/**
	 * Removes this object from datastore and sets delete attribute.
	 *
	 * @param      PropelPDO $con
	 * @return     void
	 * @throws     PropelException
	 * @see        BaseObject::setDeleted()
	 * @see        BaseObject::isDeleted()
	 */
	public function delete(PropelPDO $con = null)
	{
		if ($this->isDeleted()) {
			throw new PropelException("This object has already been deleted.");
		}

		if ($con === null) {
			$con = Propel::getConnection(PeticionesquejasrecursosPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BasePeticionesquejasrecursos:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				PeticionesquejasrecursosPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BasePeticionesquejasrecursos:delete:post') as $callable)
				{
				  call_user_func($callable, $this, $con);
				}

				$this->setDeleted(true);
				$con->commit();
			} else {
				$con->commit();
			}
		} catch (PropelException $e) {
			$con->rollBack();
			throw $e;
		}
	}

	/**
	 * Persists this object to the database.
	 *
	 * If the object is new, it inserts it; otherwise an update is performed.
	 * All modified related objects will also be persisted in the doSave()
	 * method.  This method wraps all precipitate database operations in a
	 * single transaction.
	 *
	 * @param      PropelPDO $con
	 * @return     int The number of rows affected by this insert/update and any referring fk objects' save() operations.
	 * @throws     PropelException
	 * @see        doSave()
	 */
	public function save(PropelPDO $con = null)
	{
		if ($this->isDeleted()) {
			throw new PropelException("You cannot save an object that has been deleted.");
		}

		if ($con === null) {
			$con = Propel::getConnection(PeticionesquejasrecursosPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BasePeticionesquejasrecursos:save:pre') as $callable)
			{
			  if (is_integer($affectedRows = call_user_func($callable, $this, $con)))
			  {
			    $con->commit();
			
			    return $affectedRows;
			  }
			}

			if ($isInsert) {
				$ret = $ret && $this->preInsert($con);
			} else {
				$ret = $ret && $this->preUpdate($con);
			}
			if ($ret) {
				$affectedRows = $this->doSave($con);
				if ($isInsert) {
					$this->postInsert($con);
				} else {
					$this->postUpdate($con);
				}
				$this->postSave($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BasePeticionesquejasrecursos:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				PeticionesquejasrecursosPeer::addInstanceToPool($this);
			} else {
				$affectedRows = 0;
			}
			$con->commit();
			return $affectedRows;
		} catch (PropelException $e) {
			$con->rollBack();
			throw $e;
		}
	}

	/**
	 * Performs the work of inserting or updating the row in the database.
	 *
	 * If the object is new, it inserts it; otherwise an update is performed.
	 * All related objects are also updated in this method.
	 *
	 * @param      PropelPDO $con
	 * @return     int The number of rows affected by this insert/update and any referring fk objects' save() operations.
	 * @throws     PropelException
	 * @see        save()
	 */
	protected function doSave(PropelPDO $con)
	{
		$affectedRows = 0; // initialize var to track total num of affected rows
		if (!$this->alreadyInSave) {
			$this->alreadyInSave = true;

			// We call the save method on the following object(s) if they
			// were passed to this object by their coresponding set
			// method.  This object relates to these object(s) by a
			// foreign key reference.

			if ($this->aComercial !== null) {
				if ($this->aComercial->isModified() || $this->aComercial->isNew()) {
					$affectedRows += $this->aComercial->save($con);
				}
				$this->setComercial($this->aComercial);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = PeticionesquejasrecursosPeer::PQR_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = PeticionesquejasrecursosPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setPqrId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += PeticionesquejasrecursosPeer::doUpdate($this, $con);
				}

				$this->resetModified(); // [HL] After being saved an object is no longer 'modified'
			}

			$this->alreadyInSave = false;

		}
		return $affectedRows;
	} // doSave()

	/**
	 * Array of ValidationFailed objects.
	 * @var        array ValidationFailed[]
	 */
	protected $validationFailures = array();

	/**
	 * Gets any ValidationFailed objects that resulted from last call to validate().
	 *
	 *
	 * @return     array ValidationFailed[]
	 * @see        validate()
	 */
	public function getValidationFailures()
	{
		return $this->validationFailures;
	}

	/**
	 * Validates the objects modified field values and all objects related to this table.
	 *
	 * If $columns is either a column name or an array of column names
	 * only those columns are validated.
	 *
	 * @param      mixed $columns Column name or an array of column names.
	 * @return     boolean Whether all columns pass validation.
	 * @see        doValidate()
	 * @see        getValidationFailures()
	 */
	public function validate($columns = null)
	{
		$res = $this->doValidate($columns);
		if ($res === true) {
			$this->validationFailures = array();
			return true;
		} else {
			$this->validationFailures = $res;
			return false;
		}
	}

	/**
	 * This function performs the validation work for complex object models.
	 *
	 * In addition to checking the current object, all related objects will
	 * also be validated.  If all pass then <code>true</code> is returned; otherwise
	 * an aggreagated array of ValidationFailed objects will be returned.
	 *
	 * @param      array $columns Array of column names to validate.
	 * @return     mixed <code>true</code> if all validations pass; array of <code>ValidationFailed</code> objets otherwise.
	 */
	protected function doValidate($columns = null)
	{
		if (!$this->alreadyInValidation) {
			$this->alreadyInValidation = true;
			$retval = null;

			$failureMap = array();


			// We call the validate method on the following object(s) if they
			// were passed to this object by their coresponding set
			// method.  This object relates to these object(s) by a
			// foreign key reference.

			if ($this->aComercial !== null) {
				if (!$this->aComercial->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aComercial->getValidationFailures());
				}
			}


			if (($retval = PeticionesquejasrecursosPeer::doValidate($this, $columns)) !== true) {
				$failureMap = array_merge($failureMap, $retval);
			}



			$this->alreadyInValidation = false;
		}

		return (!empty($failureMap) ? $failureMap : true);
	}

	/**
	 * Retrieves a field from the object by name passed in as a string.
	 *
	 * @param      string $name name
	 * @param      string $type The type of fieldname the $name is of:
	 *                     one of the class type constants BasePeer::TYPE_PHPNAME, BasePeer::TYPE_STUDLYPHPNAME
	 *                     BasePeer::TYPE_COLNAME, BasePeer::TYPE_FIELDNAME, BasePeer::TYPE_NUM
	 * @return     mixed Value of field.
	 */
	public function getByName($name, $type = BasePeer::TYPE_PHPNAME)
	{
		$pos = PeticionesquejasrecursosPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
		$field = $this->getByPosition($pos);
		return $field;
	}

	/**
	 * Retrieves a field from the object by Position as specified in the xml schema.
	 * Zero-based.
	 *
	 * @param      int $pos position in xml schema
	 * @return     mixed Value of field at $pos
	 */
	public function getByPosition($pos)
	{
		switch($pos) {
			case 0:
				return $this->getPqrId();
				break;
			case 1:
				return $this->getPqrComId();
				break;
			case 2:
				return $this->getPqrRegistroPqr();
				break;
			case 3:
				return $this->getPqrCantidadAnualPqr();
				break;
			case 4:
				return $this->getPqrCantidadPqrFacturacion();
				break;
			case 5:
				return $this->getPqrCantidadPqrInstalacion();
				break;
			case 6:
				return $this->getPqrCantidadPqrPrestServicio();
				break;
			case 7:
				return $this->getPqrCantidadPqrOtro();
				break;
			case 8:
				return $this->getPqrCantidadPqrExplicaOtros();
				break;
			case 9:
				return $this->getPqrInfCausaSuspensionCorte();
				break;
			case 10:
				return $this->getPqrInfCausaSuspCorteExplic();
				break;
			default:
				return null;
				break;
		} // switch()
	}

	/**
	 * Exports the object as an array.
	 *
	 * You can specify the key type of the array by passing one of the class
	 * type constants.
	 *
	 * @param      string $keyType (optional) One of the class type constants BasePeer::TYPE_PHPNAME, BasePeer::TYPE_STUDLYPHPNAME
	 *                        BasePeer::TYPE_COLNAME, BasePeer::TYPE_FIELDNAME, BasePeer::TYPE_NUM. Defaults to BasePeer::TYPE_PHPNAME.
	 * @param      boolean $includeLazyLoadColumns (optional) Whether to include lazy loaded columns.  Defaults to TRUE.
	 * @return     an associative array containing the field names (as keys) and field values
	 */
	public function toArray($keyType = BasePeer::TYPE_PHPNAME, $includeLazyLoadColumns = true)
	{
		$keys = PeticionesquejasrecursosPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getPqrId(),
			$keys[1] => $this->getPqrComId(),
			$keys[2] => $this->getPqrRegistroPqr(),
			$keys[3] => $this->getPqrCantidadAnualPqr(),
			$keys[4] => $this->getPqrCantidadPqrFacturacion(),
			$keys[5] => $this->getPqrCantidadPqrInstalacion(),
			$keys[6] => $this->getPqrCantidadPqrPrestServicio(),
			$keys[7] => $this->getPqrCantidadPqrOtro(),
			$keys[8] => $this->getPqrCantidadPqrExplicaOtros(),
			$keys[9] => $this->getPqrInfCausaSuspensionCorte(),
			$keys[10] => $this->getPqrInfCausaSuspCorteExplic(),
		);
		return $result;
	}

	/**
	 * Sets a field from the object by name passed in as a string.
	 *
	 * @param      string $name peer name
	 * @param      mixed $value field value
	 * @param      string $type The type of fieldname the $name is of:
	 *                     one of the class type constants BasePeer::TYPE_PHPNAME, BasePeer::TYPE_STUDLYPHPNAME
	 *                     BasePeer::TYPE_COLNAME, BasePeer::TYPE_FIELDNAME, BasePeer::TYPE_NUM
	 * @return     void
	 */
	public function setByName($name, $value, $type = BasePeer::TYPE_PHPNAME)
	{
		$pos = PeticionesquejasrecursosPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
		return $this->setByPosition($pos, $value);
	}

	/**
	 * Sets a field from the object by Position as specified in the xml schema.
	 * Zero-based.
	 *
	 * @param      int $pos position in xml schema
	 * @param      mixed $value field value
	 * @return     void
	 */
	public function setByPosition($pos, $value)
	{
		switch($pos) {
			case 0:
				$this->setPqrId($value);
				break;
			case 1:
				$this->setPqrComId($value);
				break;
			case 2:
				$this->setPqrRegistroPqr($value);
				break;
			case 3:
				$this->setPqrCantidadAnualPqr($value);
				break;
			case 4:
				$this->setPqrCantidadPqrFacturacion($value);
				break;
			case 5:
				$this->setPqrCantidadPqrInstalacion($value);
				break;
			case 6:
				$this->setPqrCantidadPqrPrestServicio($value);
				break;
			case 7:
				$this->setPqrCantidadPqrOtro($value);
				break;
			case 8:
				$this->setPqrCantidadPqrExplicaOtros($value);
				break;
			case 9:
				$this->setPqrInfCausaSuspensionCorte($value);
				break;
			case 10:
				$this->setPqrInfCausaSuspCorteExplic($value);
				break;
		} // switch()
	}

	/**
	 * Populates the object using an array.
	 *
	 * This is particularly useful when populating an object from one of the
	 * request arrays (e.g. $_POST).  This method goes through the column
	 * names, checking to see whether a matching key exists in populated
	 * array. If so the setByName() method is called for that column.
	 *
	 * You can specify the key type of the array by additionally passing one
	 * of the class type constants BasePeer::TYPE_PHPNAME, BasePeer::TYPE_STUDLYPHPNAME,
	 * BasePeer::TYPE_COLNAME, BasePeer::TYPE_FIELDNAME, BasePeer::TYPE_NUM.
	 * The default key type is the column's phpname (e.g. 'AuthorId')
	 *
	 * @param      array  $arr     An array to populate the object from.
	 * @param      string $keyType The type of keys the array uses.
	 * @return     void
	 */
	public function fromArray($arr, $keyType = BasePeer::TYPE_PHPNAME)
	{
		$keys = PeticionesquejasrecursosPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setPqrId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setPqrComId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setPqrRegistroPqr($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setPqrCantidadAnualPqr($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setPqrCantidadPqrFacturacion($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setPqrCantidadPqrInstalacion($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setPqrCantidadPqrPrestServicio($arr[$keys[6]]);
		if (array_key_exists($keys[7], $arr)) $this->setPqrCantidadPqrOtro($arr[$keys[7]]);
		if (array_key_exists($keys[8], $arr)) $this->setPqrCantidadPqrExplicaOtros($arr[$keys[8]]);
		if (array_key_exists($keys[9], $arr)) $this->setPqrInfCausaSuspensionCorte($arr[$keys[9]]);
		if (array_key_exists($keys[10], $arr)) $this->setPqrInfCausaSuspCorteExplic($arr[$keys[10]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(PeticionesquejasrecursosPeer::DATABASE_NAME);

		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_ID)) $criteria->add(PeticionesquejasrecursosPeer::PQR_ID, $this->pqr_id);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_COM_ID)) $criteria->add(PeticionesquejasrecursosPeer::PQR_COM_ID, $this->pqr_com_id);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_REGISTRO_PQR)) $criteria->add(PeticionesquejasrecursosPeer::PQR_REGISTRO_PQR, $this->pqr_registro_pqr);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_CANTIDAD_ANUAL_PQR)) $criteria->add(PeticionesquejasrecursosPeer::PQR_CANTIDAD_ANUAL_PQR, $this->pqr_cantidad_anual_pqr);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_FACTURACION)) $criteria->add(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_FACTURACION, $this->pqr_cantidad_pqr_facturacion);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_INSTALACION)) $criteria->add(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_INSTALACION, $this->pqr_cantidad_pqr_instalacion);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_PREST_SERVICIO)) $criteria->add(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_PREST_SERVICIO, $this->pqr_cantidad_pqr_prest_servicio);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_OTRO)) $criteria->add(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_OTRO, $this->pqr_cantidad_pqr_otro);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_EXPLICA_OTROS)) $criteria->add(PeticionesquejasrecursosPeer::PQR_CANTIDAD_PQR_EXPLICA_OTROS, $this->pqr_cantidad_pqr_explica_otros);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_INF_CAUSA_SUSPENSION_CORTE)) $criteria->add(PeticionesquejasrecursosPeer::PQR_INF_CAUSA_SUSPENSION_CORTE, $this->pqr_inf_causa_suspension_corte);
		if ($this->isColumnModified(PeticionesquejasrecursosPeer::PQR_INF_CAUSA_SUSP_CORTE_EXPLIC)) $criteria->add(PeticionesquejasrecursosPeer::PQR_INF_CAUSA_SUSP_CORTE_EXPLIC, $this->pqr_inf_causa_susp_corte_explic);

		return $criteria;
	}

	/**
	 * Builds a Criteria object containing the primary key for this object.
	 *
	 * Unlike buildCriteria() this method includes the primary key values regardless
	 * of whether or not they have been modified.
	 *
	 * @return     Criteria The Criteria object containing value(s) for primary key(s).
	 */
	public function buildPkeyCriteria()
	{
		$criteria = new Criteria(PeticionesquejasrecursosPeer::DATABASE_NAME);

		$criteria->add(PeticionesquejasrecursosPeer::PQR_ID, $this->pqr_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getPqrId();
	}

	/**
	 * Generic method to set the primary key (pqr_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setPqrId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Peticionesquejasrecursos (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setPqrComId($this->pqr_com_id);

		$copyObj->setPqrRegistroPqr($this->pqr_registro_pqr);

		$copyObj->setPqrCantidadAnualPqr($this->pqr_cantidad_anual_pqr);

		$copyObj->setPqrCantidadPqrFacturacion($this->pqr_cantidad_pqr_facturacion);

		$copyObj->setPqrCantidadPqrInstalacion($this->pqr_cantidad_pqr_instalacion);

		$copyObj->setPqrCantidadPqrPrestServicio($this->pqr_cantidad_pqr_prest_servicio);

		$copyObj->setPqrCantidadPqrOtro($this->pqr_cantidad_pqr_otro);

		$copyObj->setPqrCantidadPqrExplicaOtros($this->pqr_cantidad_pqr_explica_otros);

		$copyObj->setPqrInfCausaSuspensionCorte($this->pqr_inf_causa_suspension_corte);

		$copyObj->setPqrInfCausaSuspCorteExplic($this->pqr_inf_causa_susp_corte_explic);


		$copyObj->setNew(true);

		$copyObj->setPqrId(NULL); // this is a auto-increment column, so set to default value

	}

	/**
	 * Makes a copy of this object that will be inserted as a new row in table when saved.
	 * It creates a new object filling in the simple attributes, but skipping any primary
	 * keys that are defined for the table.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @return     Peticionesquejasrecursos Clone of current object.
	 * @throws     PropelException
	 */
	public function copy($deepCopy = false)
	{
		// we use get_class(), because this might be a subclass
		$clazz = get_class($this);
		$copyObj = new $clazz();
		$this->copyInto($copyObj, $deepCopy);
		return $copyObj;
	}

	/**
	 * Returns a peer instance associated with this om.
	 *
	 * Since Peer classes are not to have any instance attributes, this method returns the
	 * same instance for all member of this class. The method could therefore
	 * be static, but this would prevent one from overriding the behavior.
	 *
	 * @return     PeticionesquejasrecursosPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new PeticionesquejasrecursosPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Comercial object.
	 *
	 * @param      Comercial $v
	 * @return     Peticionesquejasrecursos The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setComercial(Comercial $v = null)
	{
		if ($v === null) {
			$this->setPqrComId(NULL);
		} else {
			$this->setPqrComId($v->getComId());
		}

		$this->aComercial = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Comercial object, it will not be re-added.
		if ($v !== null) {
			$v->addPeticionesquejasrecursos($this);
		}

		return $this;
	}


	/**
	 * Get the associated Comercial object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Comercial The associated Comercial object.
	 * @throws     PropelException
	 */
	public function getComercial(PropelPDO $con = null)
	{
		if ($this->aComercial === null && ($this->pqr_com_id !== null)) {
			$this->aComercial = ComercialPeer::retrieveByPk($this->pqr_com_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aComercial->addPeticionesquejasrecursoss($this);
			 */
		}
		return $this->aComercial;
	}

	/**
	 * Resets all collections of referencing foreign keys.
	 *
	 * This method is a user-space workaround for PHP's inability to garbage collect objects
	 * with circular references.  This is currently necessary when using Propel in certain
	 * daemon or large-volumne/high-memory operations.
	 *
	 * @param      boolean $deep Whether to also clear the references on all associated objects.
	 */
	public function clearAllReferences($deep = false)
	{
		if ($deep) {
		} // if ($deep)

			$this->aComercial = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BasePeticionesquejasrecursos:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BasePeticionesquejasrecursos::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BasePeticionesquejasrecursos
