<?php

/**
 * Base class that represents a row from the 'tecnicooperativadesarenadoracueducto' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * 07/27/10 16:11:02
=======
 * 07/27/10 18:48:19
>>>>>>> 6b4e80154d2fdf2e3b5339f488c0c1e98b3b0a65
 *
 * @package    lib.model.om
 */
abstract class BaseTecnicooperativadesarenadoracueducto extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        TecnicooperativadesarenadoracueductoPeer
	 */
	protected static $peer;

	/**
	 * The value for the todes_id field.
	 * @var        int
	 */
	protected $todes_id;

	/**
	 * The value for the todes_top_id field.
	 * @var        int
	 */
	protected $todes_top_id;

	/**
	 * The value for the todes_bypass field.
	 * @var        boolean
	 */
	protected $todes_bypass;

	/**
	 * The value for the todes_valvula field.
	 * @var        boolean
	 */
	protected $todes_valvula;

	/**
	 * The value for the todes_aguas_erosion field.
	 * @var        boolean
	 */
	protected $todes_aguas_erosion;

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
	
	const PEER = 'TecnicooperativadesarenadoracueductoPeer';

	/**
	 * Get the [todes_id] column value.
	 * 
	 * @return     int
	 */
	public function getTodesId()
	{
		return $this->todes_id;
	}

	/**
	 * Get the [todes_top_id] column value.
	 * 
	 * @return     int
	 */
	public function getTodesTopId()
	{
		return $this->todes_top_id;
	}

	/**
	 * Get the [todes_bypass] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodesBypass()
	{
		return $this->todes_bypass;
	}

	/**
	 * Get the [todes_valvula] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodesValvula()
	{
		return $this->todes_valvula;
	}

	/**
	 * Get the [todes_aguas_erosion] column value.
	 * 
	 * @return     boolean
	 */
	public function getTodesAguasErosion()
	{
		return $this->todes_aguas_erosion;
	}

	/**
	 * Set the value of [todes_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativadesarenadoracueducto The current object (for fluent API support)
	 */
	public function setTodesId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->todes_id !== $v) {
			$this->todes_id = $v;
			$this->modifiedColumns[] = TecnicooperativadesarenadoracueductoPeer::TODES_ID;
		}

		return $this;
	} // setTodesId()

	/**
	 * Set the value of [todes_top_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Tecnicooperativadesarenadoracueducto The current object (for fluent API support)
	 */
	public function setTodesTopId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->todes_top_id !== $v) {
			$this->todes_top_id = $v;
			$this->modifiedColumns[] = TecnicooperativadesarenadoracueductoPeer::TODES_TOP_ID;
		}

		if ($this->aTecnicooperativo !== null && $this->aTecnicooperativo->getTopId() !== $v) {
			$this->aTecnicooperativo = null;
		}

		return $this;
	} // setTodesTopId()

	/**
	 * Set the value of [todes_bypass] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesarenadoracueducto The current object (for fluent API support)
	 */
	public function setTodesBypass($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->todes_bypass !== $v) {
			$this->todes_bypass = $v;
			$this->modifiedColumns[] = TecnicooperativadesarenadoracueductoPeer::TODES_BYPASS;
		}

		return $this;
	} // setTodesBypass()

	/**
	 * Set the value of [todes_valvula] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesarenadoracueducto The current object (for fluent API support)
	 */
	public function setTodesValvula($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->todes_valvula !== $v) {
			$this->todes_valvula = $v;
			$this->modifiedColumns[] = TecnicooperativadesarenadoracueductoPeer::TODES_VALVULA;
		}

		return $this;
	} // setTodesValvula()

	/**
	 * Set the value of [todes_aguas_erosion] column.
	 * 
	 * @param      boolean $v new value
	 * @return     Tecnicooperativadesarenadoracueducto The current object (for fluent API support)
	 */
	public function setTodesAguasErosion($v)
	{
		if ($v !== null) {
			$v = (boolean) $v;
		}

		if ($this->todes_aguas_erosion !== $v) {
			$this->todes_aguas_erosion = $v;
			$this->modifiedColumns[] = TecnicooperativadesarenadoracueductoPeer::TODES_AGUAS_EROSION;
		}

		return $this;
	} // setTodesAguasErosion()

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

			$this->todes_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->todes_top_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->todes_bypass = ($row[$startcol + 2] !== null) ? (boolean) $row[$startcol + 2] : null;
			$this->todes_valvula = ($row[$startcol + 3] !== null) ? (boolean) $row[$startcol + 3] : null;
			$this->todes_aguas_erosion = ($row[$startcol + 4] !== null) ? (boolean) $row[$startcol + 4] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 5; // 5 = TecnicooperativadesarenadoracueductoPeer::NUM_COLUMNS - TecnicooperativadesarenadoracueductoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Tecnicooperativadesarenadoracueducto object", $e);
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

		if ($this->aTecnicooperativo !== null && $this->todes_top_id !== $this->aTecnicooperativo->getTopId()) {
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
			$con = Propel::getConnection(TecnicooperativadesarenadoracueductoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = TecnicooperativadesarenadoracueductoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
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
			$con = Propel::getConnection(TecnicooperativadesarenadoracueductoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseTecnicooperativadesarenadoracueducto:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				TecnicooperativadesarenadoracueductoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseTecnicooperativadesarenadoracueducto:delete:post') as $callable)
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
			$con = Propel::getConnection(TecnicooperativadesarenadoracueductoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseTecnicooperativadesarenadoracueducto:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseTecnicooperativadesarenadoracueducto:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				TecnicooperativadesarenadoracueductoPeer::addInstanceToPool($this);
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
				$this->modifiedColumns[] = TecnicooperativadesarenadoracueductoPeer::TODES_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = TecnicooperativadesarenadoracueductoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setTodesId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += TecnicooperativadesarenadoracueductoPeer::doUpdate($this, $con);
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


			if (($retval = TecnicooperativadesarenadoracueductoPeer::doValidate($this, $columns)) !== true) {
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
		$pos = TecnicooperativadesarenadoracueductoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getTodesId();
				break;
			case 1:
				return $this->getTodesTopId();
				break;
			case 2:
				return $this->getTodesBypass();
				break;
			case 3:
				return $this->getTodesValvula();
				break;
			case 4:
				return $this->getTodesAguasErosion();
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
		$keys = TecnicooperativadesarenadoracueductoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getTodesId(),
			$keys[1] => $this->getTodesTopId(),
			$keys[2] => $this->getTodesBypass(),
			$keys[3] => $this->getTodesValvula(),
			$keys[4] => $this->getTodesAguasErosion(),
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
		$pos = TecnicooperativadesarenadoracueductoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setTodesId($value);
				break;
			case 1:
				$this->setTodesTopId($value);
				break;
			case 2:
				$this->setTodesBypass($value);
				break;
			case 3:
				$this->setTodesValvula($value);
				break;
			case 4:
				$this->setTodesAguasErosion($value);
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
		$keys = TecnicooperativadesarenadoracueductoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setTodesId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setTodesTopId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setTodesBypass($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setTodesValvula($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setTodesAguasErosion($arr[$keys[4]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(TecnicooperativadesarenadoracueductoPeer::DATABASE_NAME);

		if ($this->isColumnModified(TecnicooperativadesarenadoracueductoPeer::TODES_ID)) $criteria->add(TecnicooperativadesarenadoracueductoPeer::TODES_ID, $this->todes_id);
		if ($this->isColumnModified(TecnicooperativadesarenadoracueductoPeer::TODES_TOP_ID)) $criteria->add(TecnicooperativadesarenadoracueductoPeer::TODES_TOP_ID, $this->todes_top_id);
		if ($this->isColumnModified(TecnicooperativadesarenadoracueductoPeer::TODES_BYPASS)) $criteria->add(TecnicooperativadesarenadoracueductoPeer::TODES_BYPASS, $this->todes_bypass);
		if ($this->isColumnModified(TecnicooperativadesarenadoracueductoPeer::TODES_VALVULA)) $criteria->add(TecnicooperativadesarenadoracueductoPeer::TODES_VALVULA, $this->todes_valvula);
		if ($this->isColumnModified(TecnicooperativadesarenadoracueductoPeer::TODES_AGUAS_EROSION)) $criteria->add(TecnicooperativadesarenadoracueductoPeer::TODES_AGUAS_EROSION, $this->todes_aguas_erosion);

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
		$criteria = new Criteria(TecnicooperativadesarenadoracueductoPeer::DATABASE_NAME);

		$criteria->add(TecnicooperativadesarenadoracueductoPeer::TODES_ID, $this->todes_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getTodesId();
	}

	/**
	 * Generic method to set the primary key (todes_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setTodesId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Tecnicooperativadesarenadoracueducto (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setTodesTopId($this->todes_top_id);

		$copyObj->setTodesBypass($this->todes_bypass);

		$copyObj->setTodesValvula($this->todes_valvula);

		$copyObj->setTodesAguasErosion($this->todes_aguas_erosion);


		$copyObj->setNew(true);

		$copyObj->setTodesId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Tecnicooperativadesarenadoracueducto Clone of current object.
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
	 * @return     TecnicooperativadesarenadoracueductoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new TecnicooperativadesarenadoracueductoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Tecnicooperativo object.
	 *
	 * @param      Tecnicooperativo $v
	 * @return     Tecnicooperativadesarenadoracueducto The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setTecnicooperativo(Tecnicooperativo $v = null)
	{
		if ($v === null) {
			$this->setTodesTopId(NULL);
		} else {
			$this->setTodesTopId($v->getTopId());
		}

		$this->aTecnicooperativo = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Tecnicooperativo object, it will not be re-added.
		if ($v !== null) {
			$v->addTecnicooperativadesarenadoracueducto($this);
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
		if ($this->aTecnicooperativo === null && ($this->todes_top_id !== null)) {
			$this->aTecnicooperativo = TecnicooperativoPeer::retrieveByPk($this->todes_top_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aTecnicooperativo->addTecnicooperativadesarenadoracueductos($this);
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
	  if (!$callable = sfMixer::getCallable('BaseTecnicooperativadesarenadoracueducto:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseTecnicooperativadesarenadoracueducto::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseTecnicooperativadesarenadoracueducto
