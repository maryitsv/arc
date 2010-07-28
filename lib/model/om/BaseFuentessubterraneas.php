<?php

/**
 * Base class that represents a row from the 'fuentessubterraneas' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 12:35:40
 *
 * @package    lib.model.om
 */
abstract class BaseFuentessubterraneas extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        FuentessubterraneasPeer
	 */
	protected static $peer;

	/**
	 * The value for the fsu_id field.
	 * @var        int
	 */
	protected $fsu_id;

	/**
	 * The value for the fsu_fue_id field.
	 * @var        int
	 */
	protected $fsu_fue_id;

	/**
	 * The value for the fsu_nombre field.
	 * @var        string
	 */
	protected $fsu_nombre;

	/**
	 * The value for the fsu_promedio_captacion field.
	 * @var        string
	 */
	protected $fsu_promedio_captacion;

	/**
	 * The value for the fsu_entidad_expidio_concesion field.
	 * @var        string
	 */
	protected $fsu_entidad_expidio_concesion;

	/**
	 * The value for the fsu_fecha_expedicion_concesion field.
	 * @var        string
	 */
	protected $fsu_fecha_expedicion_concesion;

	/**
	 * The value for the fsu_fecha_vencimiento_concesion field.
	 * @var        string
	 */
	protected $fsu_fecha_vencimiento_concesion;

	/**
	 * The value for the fsu_caudal_adjudicado_concesion field.
	 * @var        string
	 */
	protected $fsu_caudal_adjudicado_concesion;

	/**
	 * @var        Fuentes
	 */
	protected $aFuentes;

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
	
	const PEER = 'FuentessubterraneasPeer';

	/**
	 * Get the [fsu_id] column value.
	 * 
	 * @return     int
	 */
	public function getFsuId()
	{
		return $this->fsu_id;
	}

	/**
	 * Get the [fsu_fue_id] column value.
	 * 
	 * @return     int
	 */
	public function getFsuFueId()
	{
		return $this->fsu_fue_id;
	}

	/**
	 * Get the [fsu_nombre] column value.
	 * 
	 * @return     string
	 */
	public function getFsuNombre()
	{
		return $this->fsu_nombre;
	}

	/**
	 * Get the [fsu_promedio_captacion] column value.
	 * 
	 * @return     string
	 */
	public function getFsuPromedioCaptacion()
	{
		return $this->fsu_promedio_captacion;
	}

	/**
	 * Get the [fsu_entidad_expidio_concesion] column value.
	 * 
	 * @return     string
	 */
	public function getFsuEntidadExpidioConcesion()
	{
		return $this->fsu_entidad_expidio_concesion;
	}

	/**
	 * Get the [optionally formatted] temporal [fsu_fecha_expedicion_concesion] column value.
	 * 
	 *
	 * @param      string $format The date/time format string (either date()-style or strftime()-style).
	 *							If format is NULL, then the raw DateTime object will be returned.
	 * @return     mixed Formatted date/time value as string or DateTime object (if format is NULL), NULL if column is NULL
	 * @throws     PropelException - if unable to parse/validate the date/time value.
	 */
	public function getFsuFechaExpedicionConcesion($format = 'Y-m-d')
	{
		if ($this->fsu_fecha_expedicion_concesion === null) {
			return null;
		}



		try {
			$dt = new DateTime($this->fsu_fecha_expedicion_concesion);
		} catch (Exception $x) {
			throw new PropelException("Internally stored date/time/timestamp value could not be converted to DateTime: " . var_export($this->fsu_fecha_expedicion_concesion, true), $x);
		}

		if ($format === null) {
			// Because propel.useDateTimeClass is TRUE, we return a DateTime object.
			return $dt;
		} elseif (strpos($format, '%') !== false) {
			return strftime($format, $dt->format('U'));
		} else {
			return $dt->format($format);
		}
	}

	/**
	 * Get the [optionally formatted] temporal [fsu_fecha_vencimiento_concesion] column value.
	 * 
	 *
	 * @param      string $format The date/time format string (either date()-style or strftime()-style).
	 *							If format is NULL, then the raw DateTime object will be returned.
	 * @return     mixed Formatted date/time value as string or DateTime object (if format is NULL), NULL if column is NULL
	 * @throws     PropelException - if unable to parse/validate the date/time value.
	 */
	public function getFsuFechaVencimientoConcesion($format = 'Y-m-d')
	{
		if ($this->fsu_fecha_vencimiento_concesion === null) {
			return null;
		}



		try {
			$dt = new DateTime($this->fsu_fecha_vencimiento_concesion);
		} catch (Exception $x) {
			throw new PropelException("Internally stored date/time/timestamp value could not be converted to DateTime: " . var_export($this->fsu_fecha_vencimiento_concesion, true), $x);
		}

		if ($format === null) {
			// Because propel.useDateTimeClass is TRUE, we return a DateTime object.
			return $dt;
		} elseif (strpos($format, '%') !== false) {
			return strftime($format, $dt->format('U'));
		} else {
			return $dt->format($format);
		}
	}

	/**
	 * Get the [fsu_caudal_adjudicado_concesion] column value.
	 * 
	 * @return     string
	 */
	public function getFsuCaudalAdjudicadoConcesion()
	{
		return $this->fsu_caudal_adjudicado_concesion;
	}

	/**
	 * Set the value of [fsu_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->fsu_id !== $v) {
			$this->fsu_id = $v;
			$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_ID;
		}

		return $this;
	} // setFsuId()

	/**
	 * Set the value of [fsu_fue_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuFueId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->fsu_fue_id !== $v) {
			$this->fsu_fue_id = $v;
			$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_FUE_ID;
		}

		if ($this->aFuentes !== null && $this->aFuentes->getFueId() !== $v) {
			$this->aFuentes = null;
		}

		return $this;
	} // setFsuFueId()

	/**
	 * Set the value of [fsu_nombre] column.
	 * 
	 * @param      string $v new value
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuNombre($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fsu_nombre !== $v) {
			$this->fsu_nombre = $v;
			$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_NOMBRE;
		}

		return $this;
	} // setFsuNombre()

	/**
	 * Set the value of [fsu_promedio_captacion] column.
	 * 
	 * @param      string $v new value
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuPromedioCaptacion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fsu_promedio_captacion !== $v) {
			$this->fsu_promedio_captacion = $v;
			$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_PROMEDIO_CAPTACION;
		}

		return $this;
	} // setFsuPromedioCaptacion()

	/**
	 * Set the value of [fsu_entidad_expidio_concesion] column.
	 * 
	 * @param      string $v new value
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuEntidadExpidioConcesion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fsu_entidad_expidio_concesion !== $v) {
			$this->fsu_entidad_expidio_concesion = $v;
			$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_ENTIDAD_EXPIDIO_CONCESION;
		}

		return $this;
	} // setFsuEntidadExpidioConcesion()

	/**
	 * Sets the value of [fsu_fecha_expedicion_concesion] column to a normalized version of the date/time value specified.
	 * 
	 * @param      mixed $v string, integer (timestamp), or DateTime value.  Empty string will
	 *						be treated as NULL for temporal objects.
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuFechaExpedicionConcesion($v)
	{
		// we treat '' as NULL for temporal objects because DateTime('') == DateTime('now')
		// -- which is unexpected, to say the least.
		if ($v === null || $v === '') {
			$dt = null;
		} elseif ($v instanceof DateTime) {
			$dt = $v;
		} else {
			// some string/numeric value passed; we normalize that so that we can
			// validate it.
			try {
				if (is_numeric($v)) { // if it's a unix timestamp
					$dt = new DateTime('@'.$v, new DateTimeZone('UTC'));
					// We have to explicitly specify and then change the time zone because of a
					// DateTime bug: http://bugs.php.net/bug.php?id=43003
					$dt->setTimeZone(new DateTimeZone(date_default_timezone_get()));
				} else {
					$dt = new DateTime($v);
				}
			} catch (Exception $x) {
				throw new PropelException('Error parsing date/time value: ' . var_export($v, true), $x);
			}
		}

		if ( $this->fsu_fecha_expedicion_concesion !== null || $dt !== null ) {
			// (nested ifs are a little easier to read in this case)

			$currNorm = ($this->fsu_fecha_expedicion_concesion !== null && $tmpDt = new DateTime($this->fsu_fecha_expedicion_concesion)) ? $tmpDt->format('Y-m-d') : null;
			$newNorm = ($dt !== null) ? $dt->format('Y-m-d') : null;

			if ( ($currNorm !== $newNorm) // normalized values don't match 
					)
			{
				$this->fsu_fecha_expedicion_concesion = ($dt ? $dt->format('Y-m-d') : null);
				$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_FECHA_EXPEDICION_CONCESION;
			}
		} // if either are not null

		return $this;
	} // setFsuFechaExpedicionConcesion()

	/**
	 * Sets the value of [fsu_fecha_vencimiento_concesion] column to a normalized version of the date/time value specified.
	 * 
	 * @param      mixed $v string, integer (timestamp), or DateTime value.  Empty string will
	 *						be treated as NULL for temporal objects.
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuFechaVencimientoConcesion($v)
	{
		// we treat '' as NULL for temporal objects because DateTime('') == DateTime('now')
		// -- which is unexpected, to say the least.
		if ($v === null || $v === '') {
			$dt = null;
		} elseif ($v instanceof DateTime) {
			$dt = $v;
		} else {
			// some string/numeric value passed; we normalize that so that we can
			// validate it.
			try {
				if (is_numeric($v)) { // if it's a unix timestamp
					$dt = new DateTime('@'.$v, new DateTimeZone('UTC'));
					// We have to explicitly specify and then change the time zone because of a
					// DateTime bug: http://bugs.php.net/bug.php?id=43003
					$dt->setTimeZone(new DateTimeZone(date_default_timezone_get()));
				} else {
					$dt = new DateTime($v);
				}
			} catch (Exception $x) {
				throw new PropelException('Error parsing date/time value: ' . var_export($v, true), $x);
			}
		}

		if ( $this->fsu_fecha_vencimiento_concesion !== null || $dt !== null ) {
			// (nested ifs are a little easier to read in this case)

			$currNorm = ($this->fsu_fecha_vencimiento_concesion !== null && $tmpDt = new DateTime($this->fsu_fecha_vencimiento_concesion)) ? $tmpDt->format('Y-m-d') : null;
			$newNorm = ($dt !== null) ? $dt->format('Y-m-d') : null;

			if ( ($currNorm !== $newNorm) // normalized values don't match 
					)
			{
				$this->fsu_fecha_vencimiento_concesion = ($dt ? $dt->format('Y-m-d') : null);
				$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_FECHA_VENCIMIENTO_CONCESION;
			}
		} // if either are not null

		return $this;
	} // setFsuFechaVencimientoConcesion()

	/**
	 * Set the value of [fsu_caudal_adjudicado_concesion] column.
	 * 
	 * @param      string $v new value
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 */
	public function setFsuCaudalAdjudicadoConcesion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fsu_caudal_adjudicado_concesion !== $v) {
			$this->fsu_caudal_adjudicado_concesion = $v;
			$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_CAUDAL_ADJUDICADO_CONCESION;
		}

		return $this;
	} // setFsuCaudalAdjudicadoConcesion()

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

			$this->fsu_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->fsu_fue_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->fsu_nombre = ($row[$startcol + 2] !== null) ? (string) $row[$startcol + 2] : null;
			$this->fsu_promedio_captacion = ($row[$startcol + 3] !== null) ? (string) $row[$startcol + 3] : null;
			$this->fsu_entidad_expidio_concesion = ($row[$startcol + 4] !== null) ? (string) $row[$startcol + 4] : null;
			$this->fsu_fecha_expedicion_concesion = ($row[$startcol + 5] !== null) ? (string) $row[$startcol + 5] : null;
			$this->fsu_fecha_vencimiento_concesion = ($row[$startcol + 6] !== null) ? (string) $row[$startcol + 6] : null;
			$this->fsu_caudal_adjudicado_concesion = ($row[$startcol + 7] !== null) ? (string) $row[$startcol + 7] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 8; // 8 = FuentessubterraneasPeer::NUM_COLUMNS - FuentessubterraneasPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Fuentessubterraneas object", $e);
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

		if ($this->aFuentes !== null && $this->fsu_fue_id !== $this->aFuentes->getFueId()) {
			$this->aFuentes = null;
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
			$con = Propel::getConnection(FuentessubterraneasPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = FuentessubterraneasPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aFuentes = null;
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
			$con = Propel::getConnection(FuentessubterraneasPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseFuentessubterraneas:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				FuentessubterraneasPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseFuentessubterraneas:delete:post') as $callable)
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
			$con = Propel::getConnection(FuentessubterraneasPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseFuentessubterraneas:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseFuentessubterraneas:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				FuentessubterraneasPeer::addInstanceToPool($this);
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

			if ($this->aFuentes !== null) {
				if ($this->aFuentes->isModified() || $this->aFuentes->isNew()) {
					$affectedRows += $this->aFuentes->save($con);
				}
				$this->setFuentes($this->aFuentes);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = FuentessubterraneasPeer::FSU_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = FuentessubterraneasPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setFsuId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += FuentessubterraneasPeer::doUpdate($this, $con);
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

			if ($this->aFuentes !== null) {
				if (!$this->aFuentes->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aFuentes->getValidationFailures());
				}
			}


			if (($retval = FuentessubterraneasPeer::doValidate($this, $columns)) !== true) {
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
		$pos = FuentessubterraneasPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getFsuId();
				break;
			case 1:
				return $this->getFsuFueId();
				break;
			case 2:
				return $this->getFsuNombre();
				break;
			case 3:
				return $this->getFsuPromedioCaptacion();
				break;
			case 4:
				return $this->getFsuEntidadExpidioConcesion();
				break;
			case 5:
				return $this->getFsuFechaExpedicionConcesion();
				break;
			case 6:
				return $this->getFsuFechaVencimientoConcesion();
				break;
			case 7:
				return $this->getFsuCaudalAdjudicadoConcesion();
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
		$keys = FuentessubterraneasPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getFsuId(),
			$keys[1] => $this->getFsuFueId(),
			$keys[2] => $this->getFsuNombre(),
			$keys[3] => $this->getFsuPromedioCaptacion(),
			$keys[4] => $this->getFsuEntidadExpidioConcesion(),
			$keys[5] => $this->getFsuFechaExpedicionConcesion(),
			$keys[6] => $this->getFsuFechaVencimientoConcesion(),
			$keys[7] => $this->getFsuCaudalAdjudicadoConcesion(),
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
		$pos = FuentessubterraneasPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setFsuId($value);
				break;
			case 1:
				$this->setFsuFueId($value);
				break;
			case 2:
				$this->setFsuNombre($value);
				break;
			case 3:
				$this->setFsuPromedioCaptacion($value);
				break;
			case 4:
				$this->setFsuEntidadExpidioConcesion($value);
				break;
			case 5:
				$this->setFsuFechaExpedicionConcesion($value);
				break;
			case 6:
				$this->setFsuFechaVencimientoConcesion($value);
				break;
			case 7:
				$this->setFsuCaudalAdjudicadoConcesion($value);
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
		$keys = FuentessubterraneasPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setFsuId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setFsuFueId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setFsuNombre($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setFsuPromedioCaptacion($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setFsuEntidadExpidioConcesion($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setFsuFechaExpedicionConcesion($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setFsuFechaVencimientoConcesion($arr[$keys[6]]);
		if (array_key_exists($keys[7], $arr)) $this->setFsuCaudalAdjudicadoConcesion($arr[$keys[7]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(FuentessubterraneasPeer::DATABASE_NAME);

		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_ID)) $criteria->add(FuentessubterraneasPeer::FSU_ID, $this->fsu_id);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_FUE_ID)) $criteria->add(FuentessubterraneasPeer::FSU_FUE_ID, $this->fsu_fue_id);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_NOMBRE)) $criteria->add(FuentessubterraneasPeer::FSU_NOMBRE, $this->fsu_nombre);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_PROMEDIO_CAPTACION)) $criteria->add(FuentessubterraneasPeer::FSU_PROMEDIO_CAPTACION, $this->fsu_promedio_captacion);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_ENTIDAD_EXPIDIO_CONCESION)) $criteria->add(FuentessubterraneasPeer::FSU_ENTIDAD_EXPIDIO_CONCESION, $this->fsu_entidad_expidio_concesion);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_FECHA_EXPEDICION_CONCESION)) $criteria->add(FuentessubterraneasPeer::FSU_FECHA_EXPEDICION_CONCESION, $this->fsu_fecha_expedicion_concesion);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_FECHA_VENCIMIENTO_CONCESION)) $criteria->add(FuentessubterraneasPeer::FSU_FECHA_VENCIMIENTO_CONCESION, $this->fsu_fecha_vencimiento_concesion);
		if ($this->isColumnModified(FuentessubterraneasPeer::FSU_CAUDAL_ADJUDICADO_CONCESION)) $criteria->add(FuentessubterraneasPeer::FSU_CAUDAL_ADJUDICADO_CONCESION, $this->fsu_caudal_adjudicado_concesion);

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
		$criteria = new Criteria(FuentessubterraneasPeer::DATABASE_NAME);

		$criteria->add(FuentessubterraneasPeer::FSU_ID, $this->fsu_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getFsuId();
	}

	/**
	 * Generic method to set the primary key (fsu_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setFsuId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Fuentessubterraneas (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setFsuFueId($this->fsu_fue_id);

		$copyObj->setFsuNombre($this->fsu_nombre);

		$copyObj->setFsuPromedioCaptacion($this->fsu_promedio_captacion);

		$copyObj->setFsuEntidadExpidioConcesion($this->fsu_entidad_expidio_concesion);

		$copyObj->setFsuFechaExpedicionConcesion($this->fsu_fecha_expedicion_concesion);

		$copyObj->setFsuFechaVencimientoConcesion($this->fsu_fecha_vencimiento_concesion);

		$copyObj->setFsuCaudalAdjudicadoConcesion($this->fsu_caudal_adjudicado_concesion);


		$copyObj->setNew(true);

		$copyObj->setFsuId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Fuentessubterraneas Clone of current object.
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
	 * @return     FuentessubterraneasPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new FuentessubterraneasPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Fuentes object.
	 *
	 * @param      Fuentes $v
	 * @return     Fuentessubterraneas The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setFuentes(Fuentes $v = null)
	{
		if ($v === null) {
			$this->setFsuFueId(NULL);
		} else {
			$this->setFsuFueId($v->getFueId());
		}

		$this->aFuentes = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Fuentes object, it will not be re-added.
		if ($v !== null) {
			$v->addFuentessubterraneas($this);
		}

		return $this;
	}


	/**
	 * Get the associated Fuentes object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Fuentes The associated Fuentes object.
	 * @throws     PropelException
	 */
	public function getFuentes(PropelPDO $con = null)
	{
		if ($this->aFuentes === null && ($this->fsu_fue_id !== null)) {
			$this->aFuentes = FuentesPeer::retrieveByPk($this->fsu_fue_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aFuentes->addFuentessubterraneass($this);
			 */
		}
		return $this->aFuentes;
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

			$this->aFuentes = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BaseFuentessubterraneas:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseFuentessubterraneas::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseFuentessubterraneas
