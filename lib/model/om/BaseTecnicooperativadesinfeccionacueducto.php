<?php

/**
 * Base class that represents a row from the 'tecnicooperativadesinfeccionacueducto' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/22/10 22:08:04
 *
 * @package    lib.model.om
 */
abstract class BaseTecnicooperativadesinfeccionacueducto extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        TecnicooperativadesinfeccionacueductoPeer
	 */
	protected static $peer;

	/**
	 * The value for the toda_id field.
	 * @var        int
	 */
	protected $toda_id;

	/**
	 * The value for the toda_top_id field.
	 * @var        int
	 */
	protected $toda_top_id;

	/**
	 * The value for the toda_desinfeccion field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion;

	/**
	 * The value for the toda_tipo_desinfeccion field.
	 * @var        string
	 */
	protected $toda_tipo_desinfeccion;

	/**
	 * The value for the toda_desinfeccion_cloro field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion_cloro;

	/**
	 * The value for the toda_desinfeccion_hipoclorito_sodio field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion_hipoclorito_sodio;

	/**
	 * The value for the toda_desinfeccion_hipoclorito_calcio field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion_hipoclorito_calcio;

	/**
	 * The value for the toda_desinfeccion_ozonacion field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion_ozonacion;

	/**
	 * The value for the toda_desinfeccion_rayos_ultravioleta field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion_rayos_ultravioleta;

	/**
	 * The value for the toda_desinfeccion_dioxido_cloro field.
	 * @var        boolean
	 */
	protected $toda_desinfeccion_dioxido_cloro;

	/**
	 * @var        Tecnicooperativo
	 */
	protected $aTecnicooperativo;

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
	
	const PEER = 'TecnicooperativadesinfeccionacueductoPeer';

	/**
	 * Get the [toda_id] column value.
	 * 
	 * @return     int
	 */
	public function getTodaId()
	{
		return $this->toda_id;
	}

	/**
	 * Get the [toda_top_id] column value.
	 * 
	 * @return     int
	 */
	public function getTodaTopId()
	{
		return $this->toda_top_id;
	}

	/**
	 * Get the [toda_desinfeccion] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccion()
	{
		return $this->toda_desinfeccion;
	}

	/**
	 * Get the [toda_tipo_desinfeccion] column value.
	 * 
	 * @return     string
	 */
	public function getTodaTipoDesinfeccion()
	{
		return $this->toda_tipo_desinfeccion;
	}

	/**
	 * Get the [toda_desinfeccion_cloro] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccionCloro()
	{
		return $this->toda_desinfeccion_cloro;
	}

	/**
	 * Get the [toda_desinfeccion_hipoclorito_sodio] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccionHipocloritoSodio()
	{
		return $this->toda_desinfeccion_hipoclorito_sodio;
	}

	/**
	 * Get the [toda_desinfeccion_hipoclorito_calcio] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccionHipocloritoCalcio()
	{
		return $this->toda_desinfeccion_hipoclorito_calcio;
	}

	/**
	 * Get the [toda_desinfeccion_ozonacion] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccionOzonacion()
	{
		return $this->toda_desinfeccion_ozonacion;
	}

	/**
	 * Get the [toda_desinfeccion_rayos_ultravioleta] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccionRayosUltravioleta()
	{
		return $this->toda_desinfeccion_rayos_ultravioleta;
	}

	/**
	 * Get the [toda_desinfeccion_dioxido_cloro] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodaDesinfeccionDioxidoCloro()
	{
		return $this->toda_desinfeccion_dioxido_cloro;
	}

	/**
	 * Set the value of [toda_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->toda_id !== $v) {
			$this->toda_id = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_ID;
		}

		return $this;
	} // setTodaId()

	/**
	 * Set the value of [toda_top_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaTopId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->toda_top_id !== $v) {
			$this->toda_top_id = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_TOP_ID;
		}

		if ($this->aTecnicooperativo !== null && $this->aTecnicooperativo->getTopId() !== $v) {
			$this->aTecnicooperativo = null;
		}

		return $this;
	} // setTodaTopId()

	/**
	 * Set the value of [toda_desinfeccion] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccion($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion !== $v) {
			$this->toda_desinfeccion = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION;
		}

		return $this;
	} // setTodaDesinfeccion()

	/**
	 * Set the value of [toda_tipo_desinfeccion] column.
	 * 
	 * @param      string $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaTipoDesinfeccion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->toda_tipo_desinfeccion !== $v) {
			$this->toda_tipo_desinfeccion = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_TIPO_DESINFECCION;
		}

		return $this;
	} // setTodaTipoDesinfeccion()

	/**
	 * Set the value of [toda_desinfeccion_cloro] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccionCloro($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion_cloro !== $v) {
			$this->toda_desinfeccion_cloro = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_CLORO;
		}

		return $this;
	} // setTodaDesinfeccionCloro()

	/**
	 * Set the value of [toda_desinfeccion_hipoclorito_sodio] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccionHipocloritoSodio($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion_hipoclorito_sodio !== $v) {
			$this->toda_desinfeccion_hipoclorito_sodio = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_HIPOCLORITO_SODIO;
		}

		return $this;
	} // setTodaDesinfeccionHipocloritoSodio()

	/**
	 * Set the value of [toda_desinfeccion_hipoclorito_calcio] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccionHipocloritoCalcio($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion_hipoclorito_calcio !== $v) {
			$this->toda_desinfeccion_hipoclorito_calcio = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_HIPOCLORITO_CALCIO;
		}

		return $this;
	} // setTodaDesinfeccionHipocloritoCalcio()

	/**
	 * Set the value of [toda_desinfeccion_ozonacion] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccionOzonacion($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion_ozonacion !== $v) {
			$this->toda_desinfeccion_ozonacion = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_OZONACION;
		}

		return $this;
	} // setTodaDesinfeccionOzonacion()

	/**
	 * Set the value of [toda_desinfeccion_rayos_ultravioleta] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccionRayosUltravioleta($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion_rayos_ultravioleta !== $v) {
			$this->toda_desinfeccion_rayos_ultravioleta = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_RAYOS_ULTRAVIOLETA;
		}

		return $this;
	} // setTodaDesinfeccionRayosUltravioleta()

	/**
	 * Set the value of [toda_desinfeccion_dioxido_cloro] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 */
	public function setTodaDesinfeccionDioxidoCloro($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->toda_desinfeccion_dioxido_cloro !== $v) {
			$this->toda_desinfeccion_dioxido_cloro = $v;
			$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_DIOXIDO_CLORO;
		}

		return $this;
	} // setTodaDesinfeccionDioxidoCloro()

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

			$this->toda_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->toda_top_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->toda_desinfeccion = ($row[$startcol + 2] !== null) ? (boolean) $row[$startcol + 2] : null;
			$this->toda_tipo_desinfeccion = ($row[$startcol + 3] !== null) ? (string) $row[$startcol + 3] : null;
			$this->toda_desinfeccion_cloro = ($row[$startcol + 4] !== null) ? (boolean) $row[$startcol + 4] : null;
			$this->toda_desinfeccion_hipoclorito_sodio = ($row[$startcol + 5] !== null) ? (boolean) $row[$startcol + 5] : null;
			$this->toda_desinfeccion_hipoclorito_calcio = ($row[$startcol + 6] !== null) ? (boolean) $row[$startcol + 6] : null;
			$this->toda_desinfeccion_ozonacion = ($row[$startcol + 7] !== null) ? (boolean) $row[$startcol + 7] : null;
			$this->toda_desinfeccion_rayos_ultravioleta = ($row[$startcol + 8] !== null) ? (boolean) $row[$startcol + 8] : null;
			$this->toda_desinfeccion_dioxido_cloro = ($row[$startcol + 9] !== null) ? (boolean) $row[$startcol + 9] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 10; // 10 = TecnicooperativadesinfeccionacueductoPeer::NUM_COLUMNS - TecnicooperativadesinfeccionacueductoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Tecnicooperativadesinfeccionacueducto object", $e);
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

		if ($this->aTecnicooperativo !== null && $this->toda_top_id !== $this->aTecnicooperativo->getTopId()) {
			$this->aTecnicooperativo = null;
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
			$con = Propel::getConnection(TecnicooperativadesinfeccionacueductoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = TecnicooperativadesinfeccionacueductoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aTecnicooperativo = null;
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
			$con = Propel::getConnection(TecnicooperativadesinfeccionacueductoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseTecnicooperativadesinfeccionacueducto:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				TecnicooperativadesinfeccionacueductoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseTecnicooperativadesinfeccionacueducto:delete:post') as $callable)
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
			$con = Propel::getConnection(TecnicooperativadesinfeccionacueductoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseTecnicooperativadesinfeccionacueducto:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseTecnicooperativadesinfeccionacueducto:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				TecnicooperativadesinfeccionacueductoPeer::addInstanceToPool($this);
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

			if ($this->aTecnicooperativo !== null) {
				if ($this->aTecnicooperativo->isModified() || $this->aTecnicooperativo->isNew()) {
					$affectedRows += $this->aTecnicooperativo->save($con);
				}
				$this->setTecnicooperativo($this->aTecnicooperativo);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = TecnicooperativadesinfeccionacueductoPeer::TODA_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = TecnicooperativadesinfeccionacueductoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setTodaId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += TecnicooperativadesinfeccionacueductoPeer::doUpdate($this, $con);
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

			if ($this->aTecnicooperativo !== null) {
				if (!$this->aTecnicooperativo->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aTecnicooperativo->getValidationFailures());
				}
			}


			if (($retval = TecnicooperativadesinfeccionacueductoPeer::doValidate($this, $columns)) !== true) {
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
		$pos = TecnicooperativadesinfeccionacueductoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getTodaId();
				break;
			case 1:
				return $this->getTodaTopId();
				break;
			case 2:
				return $this->getTodaDesinfeccion();
				break;
			case 3:
				return $this->getTodaTipoDesinfeccion();
				break;
			case 4:
				return $this->getTodaDesinfeccionCloro();
				break;
			case 5:
				return $this->getTodaDesinfeccionHipocloritoSodio();
				break;
			case 6:
				return $this->getTodaDesinfeccionHipocloritoCalcio();
				break;
			case 7:
				return $this->getTodaDesinfeccionOzonacion();
				break;
			case 8:
				return $this->getTodaDesinfeccionRayosUltravioleta();
				break;
			case 9:
				return $this->getTodaDesinfeccionDioxidoCloro();
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
		$keys = TecnicooperativadesinfeccionacueductoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getTodaId(),
			$keys[1] => $this->getTodaTopId(),
			$keys[2] => $this->getTodaDesinfeccion(),
			$keys[3] => $this->getTodaTipoDesinfeccion(),
			$keys[4] => $this->getTodaDesinfeccionCloro(),
			$keys[5] => $this->getTodaDesinfeccionHipocloritoSodio(),
			$keys[6] => $this->getTodaDesinfeccionHipocloritoCalcio(),
			$keys[7] => $this->getTodaDesinfeccionOzonacion(),
			$keys[8] => $this->getTodaDesinfeccionRayosUltravioleta(),
			$keys[9] => $this->getTodaDesinfeccionDioxidoCloro(),
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
		$pos = TecnicooperativadesinfeccionacueductoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setTodaId($value);
				break;
			case 1:
				$this->setTodaTopId($value);
				break;
			case 2:
				$this->setTodaDesinfeccion($value);
				break;
			case 3:
				$this->setTodaTipoDesinfeccion($value);
				break;
			case 4:
				$this->setTodaDesinfeccionCloro($value);
				break;
			case 5:
				$this->setTodaDesinfeccionHipocloritoSodio($value);
				break;
			case 6:
				$this->setTodaDesinfeccionHipocloritoCalcio($value);
				break;
			case 7:
				$this->setTodaDesinfeccionOzonacion($value);
				break;
			case 8:
				$this->setTodaDesinfeccionRayosUltravioleta($value);
				break;
			case 9:
				$this->setTodaDesinfeccionDioxidoCloro($value);
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
		$keys = TecnicooperativadesinfeccionacueductoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setTodaId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setTodaTopId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setTodaDesinfeccion($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setTodaTipoDesinfeccion($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setTodaDesinfeccionCloro($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setTodaDesinfeccionHipocloritoSodio($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setTodaDesinfeccionHipocloritoCalcio($arr[$keys[6]]);
		if (array_key_exists($keys[7], $arr)) $this->setTodaDesinfeccionOzonacion($arr[$keys[7]]);
		if (array_key_exists($keys[8], $arr)) $this->setTodaDesinfeccionRayosUltravioleta($arr[$keys[8]]);
		if (array_key_exists($keys[9], $arr)) $this->setTodaDesinfeccionDioxidoCloro($arr[$keys[9]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(TecnicooperativadesinfeccionacueductoPeer::DATABASE_NAME);

		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_ID)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_ID, $this->toda_id);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_TOP_ID)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_TOP_ID, $this->toda_top_id);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION, $this->toda_desinfeccion);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_TIPO_DESINFECCION)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_TIPO_DESINFECCION, $this->toda_tipo_desinfeccion);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_CLORO)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_CLORO, $this->toda_desinfeccion_cloro);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_HIPOCLORITO_SODIO)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_HIPOCLORITO_SODIO, $this->toda_desinfeccion_hipoclorito_sodio);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_HIPOCLORITO_CALCIO)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_HIPOCLORITO_CALCIO, $this->toda_desinfeccion_hipoclorito_calcio);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_OZONACION)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_OZONACION, $this->toda_desinfeccion_ozonacion);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_RAYOS_ULTRAVIOLETA)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_RAYOS_ULTRAVIOLETA, $this->toda_desinfeccion_rayos_ultravioleta);
		if ($this->isColumnModified(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_DIOXIDO_CLORO)) $criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_DESINFECCION_DIOXIDO_CLORO, $this->toda_desinfeccion_dioxido_cloro);

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
		$criteria = new Criteria(TecnicooperativadesinfeccionacueductoPeer::DATABASE_NAME);

		$criteria->add(TecnicooperativadesinfeccionacueductoPeer::TODA_ID, $this->toda_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getTodaId();
	}

	/**
	 * Generic method to set the primary key (toda_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setTodaId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Tecnicooperativadesinfeccionacueducto (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setTodaTopId($this->toda_top_id);

		$copyObj->setTodaDesinfeccion($this->toda_desinfeccion);

		$copyObj->setTodaTipoDesinfeccion($this->toda_tipo_desinfeccion);

		$copyObj->setTodaDesinfeccionCloro($this->toda_desinfeccion_cloro);

		$copyObj->setTodaDesinfeccionHipocloritoSodio($this->toda_desinfeccion_hipoclorito_sodio);

		$copyObj->setTodaDesinfeccionHipocloritoCalcio($this->toda_desinfeccion_hipoclorito_calcio);

		$copyObj->setTodaDesinfeccionOzonacion($this->toda_desinfeccion_ozonacion);

		$copyObj->setTodaDesinfeccionRayosUltravioleta($this->toda_desinfeccion_rayos_ultravioleta);

		$copyObj->setTodaDesinfeccionDioxidoCloro($this->toda_desinfeccion_dioxido_cloro);


		$copyObj->setNew(true);

		$copyObj->setTodaId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Tecnicooperativadesinfeccionacueducto Clone of current object.
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
	 * @return     TecnicooperativadesinfeccionacueductoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new TecnicooperativadesinfeccionacueductoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Tecnicooperativo object.
	 *
	 * @param      Tecnicooperativo $v
	 * @return     Tecnicooperativadesinfeccionacueducto The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setTecnicooperativo(Tecnicooperativo $v = null)
	{
		if ($v === null) {
			$this->setTodaTopId(NULL);
		} else {
			$this->setTodaTopId($v->getTopId());
		}

		$this->aTecnicooperativo = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Tecnicooperativo object, it will not be re-added.
		if ($v !== null) {
			$v->addTecnicooperativadesinfeccionacueducto($this);
		}

		return $this;
	}


	/**
	 * Get the associated Tecnicooperativo object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Tecnicooperativo The associated Tecnicooperativo object.
	 * @throws     PropelException
	 */
	public function getTecnicooperativo(PropelPDO $con = null)
	{
		if ($this->aTecnicooperativo === null && ($this->toda_top_id !== null)) {
			$this->aTecnicooperativo = TecnicooperativoPeer::retrieveByPk($this->toda_top_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aTecnicooperativo->addTecnicooperativadesinfeccionacueductos($this);
			 */
		}
		return $this->aTecnicooperativo;
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

			$this->aTecnicooperativo = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BaseTecnicooperativadesinfeccionacueducto:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseTecnicooperativadesinfeccionacueducto::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseTecnicooperativadesinfeccionacueducto
