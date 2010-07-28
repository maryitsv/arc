<?php

/**
 * Base class that represents a row from the 'tecnicooperativalineaconduccionaguacrudaacueducto' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 15:52:58
 *
 * @package    lib.model.om
 */
abstract class BaseTecnicooperativalineaconduccionaguacrudaacueducto extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        TecnicooperativalineaconduccionaguacrudaacueductoPeer
	 */
	protected static $peer;

	/**
	 * The value for the tolc_id field.
	 * @var        int
	 */
	protected $tolc_id;

	/**
	 * The value for the tolc_top_id field.
	 * @var        int
	 */
	protected $tolc_top_id;

	/**
	 * The value for the tolc_tipo_canal_id field.
	 * @var        int
	 */
	protected $tolc_tipo_canal_id;

	/**
	 * The value for the tolc_material_canal_id field.
	 * @var        int
	 */
	protected $tolc_material_canal_id;

	/**
	 * The value for the tolc_longitud field.
	 * @var        string
	 */
	protected $tolc_longitud;

	/**
	 * The value for the tolc_diametro field.
	 * @var        string
	 */
	protected $tolc_diametro;

	/**
	 * The value for the tolc_edad field.
	 * @var        int
	 */
	protected $tolc_edad;

	/**
	 * @var        Tecnicooperativo
	 */
	protected $aTecnicooperativo;

	/**
	 * @var        Tipocanal
	 */
	protected $aTipocanal;

	/**
	 * @var        Materialcanal
	 */
	protected $aMaterialcanal;

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
	
	const PEER = 'TecnicooperativalineaconduccionaguacrudaacueductoPeer';

	/**
	 * Get the [tolc_id] column value.
	 * 
	 * @return     int
	 */
	public function getTolcId()
	{
		return $this->tolc_id;
	}

	/**
	 * Get the [tolc_top_id] column value.
	 * 
	 * @return     int
	 */
	public function getTolcTopId()
	{
		return $this->tolc_top_id;
	}

	/**
	 * Get the [tolc_tipo_canal_id] column value.
	 * 
	 * @return     int
	 */
	public function getTolcTipoCanalId()
	{
		return $this->tolc_tipo_canal_id;
	}

	/**
	 * Get the [tolc_material_canal_id] column value.
	 * 
	 * @return     int
	 */
	public function getTolcMaterialCanalId()
	{
		return $this->tolc_material_canal_id;
	}

	/**
	 * Get the [tolc_longitud] column value.
	 * 
	 * @return     string
	 */
	public function getTolcLongitud()
	{
		return $this->tolc_longitud;
	}

	/**
	 * Get the [tolc_diametro] column value.
	 * 
	 * @return     string
	 */
	public function getTolcDiametro()
	{
		return $this->tolc_diametro;
	}

	/**
	 * Get the [tolc_edad] column value.
	 * 
	 * @return     int
	 */
	public function getTolcEdad()
	{
		return $this->tolc_edad;
	}

	/**
	 * Set the value of [tolc_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->tolc_id !== $v) {
			$this->tolc_id = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_ID;
		}

		return $this;
	} // setTolcId()

	/**
	 * Set the value of [tolc_top_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcTopId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->tolc_top_id !== $v) {
			$this->tolc_top_id = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TOP_ID;
		}

		if ($this->aTecnicooperativo !== null && $this->aTecnicooperativo->getTopId() !== $v) {
			$this->aTecnicooperativo = null;
		}

		return $this;
	} // setTolcTopId()

	/**
	 * Set the value of [tolc_tipo_canal_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcTipoCanalId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->tolc_tipo_canal_id !== $v) {
			$this->tolc_tipo_canal_id = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TIPO_CANAL_ID;
		}

		if ($this->aTipocanal !== null && $this->aTipocanal->getTcaId() !== $v) {
			$this->aTipocanal = null;
		}

		return $this;
	} // setTolcTipoCanalId()

	/**
	 * Set the value of [tolc_material_canal_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcMaterialCanalId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->tolc_material_canal_id !== $v) {
			$this->tolc_material_canal_id = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_MATERIAL_CANAL_ID;
		}

		if ($this->aMaterialcanal !== null && $this->aMaterialcanal->getMcaId() !== $v) {
			$this->aMaterialcanal = null;
		}

		return $this;
	} // setTolcMaterialCanalId()

	/**
	 * Set the value of [tolc_longitud] column.
	 * 
	 * @param      string $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcLongitud($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->tolc_longitud !== $v) {
			$this->tolc_longitud = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_LONGITUD;
		}

		return $this;
	} // setTolcLongitud()

	/**
	 * Set the value of [tolc_diametro] column.
	 * 
	 * @param      string $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcDiametro($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->tolc_diametro !== $v) {
			$this->tolc_diametro = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_DIAMETRO;
		}

		return $this;
	} // setTolcDiametro()

	/**
	 * Set the value of [tolc_edad] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 */
	public function setTolcEdad($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->tolc_edad !== $v) {
			$this->tolc_edad = $v;
			$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_EDAD;
		}

		return $this;
	} // setTolcEdad()

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

			$this->tolc_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->tolc_top_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->tolc_tipo_canal_id = ($row[$startcol + 2] !== null) ? (int) $row[$startcol + 2] : null;
			$this->tolc_material_canal_id = ($row[$startcol + 3] !== null) ? (int) $row[$startcol + 3] : null;
			$this->tolc_longitud = ($row[$startcol + 4] !== null) ? (string) $row[$startcol + 4] : null;
			$this->tolc_diametro = ($row[$startcol + 5] !== null) ? (string) $row[$startcol + 5] : null;
			$this->tolc_edad = ($row[$startcol + 6] !== null) ? (int) $row[$startcol + 6] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 7; // 7 = TecnicooperativalineaconduccionaguacrudaacueductoPeer::NUM_COLUMNS - TecnicooperativalineaconduccionaguacrudaacueductoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Tecnicooperativalineaconduccionaguacrudaacueducto object", $e);
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

		if ($this->aTecnicooperativo !== null && $this->tolc_top_id !== $this->aTecnicooperativo->getTopId()) {
			$this->aTecnicooperativo = null;
		}
		if ($this->aTipocanal !== null && $this->tolc_tipo_canal_id !== $this->aTipocanal->getTcaId()) {
			$this->aTipocanal = null;
		}
		if ($this->aMaterialcanal !== null && $this->tolc_material_canal_id !== $this->aMaterialcanal->getMcaId()) {
			$this->aMaterialcanal = null;
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
			$con = Propel::getConnection(TecnicooperativalineaconduccionaguacrudaacueductoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = TecnicooperativalineaconduccionaguacrudaacueductoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aTecnicooperativo = null;
			$this->aTipocanal = null;
			$this->aMaterialcanal = null;
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
			$con = Propel::getConnection(TecnicooperativalineaconduccionaguacrudaacueductoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseTecnicooperativalineaconduccionaguacrudaacueducto:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				TecnicooperativalineaconduccionaguacrudaacueductoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseTecnicooperativalineaconduccionaguacrudaacueducto:delete:post') as $callable)
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
			$con = Propel::getConnection(TecnicooperativalineaconduccionaguacrudaacueductoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseTecnicooperativalineaconduccionaguacrudaacueducto:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseTecnicooperativalineaconduccionaguacrudaacueducto:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				TecnicooperativalineaconduccionaguacrudaacueductoPeer::addInstanceToPool($this);
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

			if ($this->aTipocanal !== null) {
				if ($this->aTipocanal->isModified() || $this->aTipocanal->isNew()) {
					$affectedRows += $this->aTipocanal->save($con);
				}
				$this->setTipocanal($this->aTipocanal);
			}

			if ($this->aMaterialcanal !== null) {
				if ($this->aMaterialcanal->isModified() || $this->aMaterialcanal->isNew()) {
					$affectedRows += $this->aMaterialcanal->save($con);
				}
				$this->setMaterialcanal($this->aMaterialcanal);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = TecnicooperativalineaconduccionaguacrudaacueductoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setTolcId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += TecnicooperativalineaconduccionaguacrudaacueductoPeer::doUpdate($this, $con);
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

			if ($this->aTipocanal !== null) {
				if (!$this->aTipocanal->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aTipocanal->getValidationFailures());
				}
			}

			if ($this->aMaterialcanal !== null) {
				if (!$this->aMaterialcanal->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aMaterialcanal->getValidationFailures());
				}
			}


			if (($retval = TecnicooperativalineaconduccionaguacrudaacueductoPeer::doValidate($this, $columns)) !== true) {
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
		$pos = TecnicooperativalineaconduccionaguacrudaacueductoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getTolcId();
				break;
			case 1:
				return $this->getTolcTopId();
				break;
			case 2:
				return $this->getTolcTipoCanalId();
				break;
			case 3:
				return $this->getTolcMaterialCanalId();
				break;
			case 4:
				return $this->getTolcLongitud();
				break;
			case 5:
				return $this->getTolcDiametro();
				break;
			case 6:
				return $this->getTolcEdad();
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
		$keys = TecnicooperativalineaconduccionaguacrudaacueductoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getTolcId(),
			$keys[1] => $this->getTolcTopId(),
			$keys[2] => $this->getTolcTipoCanalId(),
			$keys[3] => $this->getTolcMaterialCanalId(),
			$keys[4] => $this->getTolcLongitud(),
			$keys[5] => $this->getTolcDiametro(),
			$keys[6] => $this->getTolcEdad(),
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
		$pos = TecnicooperativalineaconduccionaguacrudaacueductoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setTolcId($value);
				break;
			case 1:
				$this->setTolcTopId($value);
				break;
			case 2:
				$this->setTolcTipoCanalId($value);
				break;
			case 3:
				$this->setTolcMaterialCanalId($value);
				break;
			case 4:
				$this->setTolcLongitud($value);
				break;
			case 5:
				$this->setTolcDiametro($value);
				break;
			case 6:
				$this->setTolcEdad($value);
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
		$keys = TecnicooperativalineaconduccionaguacrudaacueductoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setTolcId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setTolcTopId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setTolcTipoCanalId($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setTolcMaterialCanalId($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setTolcLongitud($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setTolcDiametro($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setTolcEdad($arr[$keys[6]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(TecnicooperativalineaconduccionaguacrudaacueductoPeer::DATABASE_NAME);

		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_ID)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_ID, $this->tolc_id);
		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TOP_ID)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TOP_ID, $this->tolc_top_id);
		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TIPO_CANAL_ID)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_TIPO_CANAL_ID, $this->tolc_tipo_canal_id);
		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_MATERIAL_CANAL_ID)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_MATERIAL_CANAL_ID, $this->tolc_material_canal_id);
		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_LONGITUD)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_LONGITUD, $this->tolc_longitud);
		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_DIAMETRO)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_DIAMETRO, $this->tolc_diametro);
		if ($this->isColumnModified(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_EDAD)) $criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_EDAD, $this->tolc_edad);

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
		$criteria = new Criteria(TecnicooperativalineaconduccionaguacrudaacueductoPeer::DATABASE_NAME);

		$criteria->add(TecnicooperativalineaconduccionaguacrudaacueductoPeer::TOLC_ID, $this->tolc_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getTolcId();
	}

	/**
	 * Generic method to set the primary key (tolc_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setTolcId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Tecnicooperativalineaconduccionaguacrudaacueducto (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setTolcTopId($this->tolc_top_id);

		$copyObj->setTolcTipoCanalId($this->tolc_tipo_canal_id);

		$copyObj->setTolcMaterialCanalId($this->tolc_material_canal_id);

		$copyObj->setTolcLongitud($this->tolc_longitud);

		$copyObj->setTolcDiametro($this->tolc_diametro);

		$copyObj->setTolcEdad($this->tolc_edad);


		$copyObj->setNew(true);

		$copyObj->setTolcId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto Clone of current object.
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
	 * @return     TecnicooperativalineaconduccionaguacrudaacueductoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new TecnicooperativalineaconduccionaguacrudaacueductoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Tecnicooperativo object.
	 *
	 * @param      Tecnicooperativo $v
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setTecnicooperativo(Tecnicooperativo $v = null)
	{
		if ($v === null) {
			$this->setTolcTopId(NULL);
		} else {
			$this->setTolcTopId($v->getTopId());
		}

		$this->aTecnicooperativo = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Tecnicooperativo object, it will not be re-added.
		if ($v !== null) {
			$v->addTecnicooperativalineaconduccionaguacrudaacueducto($this);
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
		if ($this->aTecnicooperativo === null && ($this->tolc_top_id !== null)) {
			$this->aTecnicooperativo = TecnicooperativoPeer::retrieveByPk($this->tolc_top_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aTecnicooperativo->addTecnicooperativalineaconduccionaguacrudaacueductos($this);
			 */
		}
		return $this->aTecnicooperativo;
	}

	/**
	 * Declares an association between this object and a Tipocanal object.
	 *
	 * @param      Tipocanal $v
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setTipocanal(Tipocanal $v = null)
	{
		if ($v === null) {
			$this->setTolcTipoCanalId(NULL);
		} else {
			$this->setTolcTipoCanalId($v->getTcaId());
		}

		$this->aTipocanal = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Tipocanal object, it will not be re-added.
		if ($v !== null) {
			$v->addTecnicooperativalineaconduccionaguacrudaacueducto($this);
		}

		return $this;
	}


	/**
	 * Get the associated Tipocanal object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Tipocanal The associated Tipocanal object.
	 * @throws     PropelException
	 */
	public function getTipocanal(PropelPDO $con = null)
	{
		if ($this->aTipocanal === null && ($this->tolc_tipo_canal_id !== null)) {
			$this->aTipocanal = TipocanalPeer::retrieveByPk($this->tolc_tipo_canal_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aTipocanal->addTecnicooperativalineaconduccionaguacrudaacueductos($this);
			 */
		}
		return $this->aTipocanal;
	}

	/**
	 * Declares an association between this object and a Materialcanal object.
	 *
	 * @param      Materialcanal $v
	 * @return     Tecnicooperativalineaconduccionaguacrudaacueducto The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setMaterialcanal(Materialcanal $v = null)
	{
		if ($v === null) {
			$this->setTolcMaterialCanalId(NULL);
		} else {
			$this->setTolcMaterialCanalId($v->getMcaId());
		}

		$this->aMaterialcanal = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Materialcanal object, it will not be re-added.
		if ($v !== null) {
			$v->addTecnicooperativalineaconduccionaguacrudaacueducto($this);
		}

		return $this;
	}


	/**
	 * Get the associated Materialcanal object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Materialcanal The associated Materialcanal object.
	 * @throws     PropelException
	 */
	public function getMaterialcanal(PropelPDO $con = null)
	{
		if ($this->aMaterialcanal === null && ($this->tolc_material_canal_id !== null)) {
			$this->aMaterialcanal = MaterialcanalPeer::retrieveByPk($this->tolc_material_canal_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aMaterialcanal->addTecnicooperativalineaconduccionaguacrudaacueductos($this);
			 */
		}
		return $this->aMaterialcanal;
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
			$this->aTipocanal = null;
			$this->aMaterialcanal = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BaseTecnicooperativalineaconduccionaguacrudaacueducto:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseTecnicooperativalineaconduccionaguacrudaacueducto::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseTecnicooperativalineaconduccionaguacrudaacueducto
