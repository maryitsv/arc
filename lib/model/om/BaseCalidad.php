<?php

/**
 * Base class that represents a row from the 'calidad' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/29/10 12:37:18
 *
 * @package    lib.model.om
 */
abstract class BaseCalidad extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        CalidadPeer
	 */
	protected static $peer;

	/**
	 * The value for the cal_id field.
	 * @var        int
	 */
	protected $cal_id;

	/**
	 * The value for the cal_pps_pre_id field.
	 * @var        int
	 */
	protected $cal_pps_pre_id;

	/**
	 * The value for the cal_pps_anio field.
	 * @var        int
	 */
	protected $cal_pps_anio;

	/**
	 * The value for the cal_pps_ser_id field.
	 * @var        int
	 */
	protected $cal_pps_ser_id;

	/**
	 * @var        Periodoporprestadorservicio
	 */
	protected $aPeriodoporprestadorservicio;

	/**
	 * @var        array Calidadagua[] Collection to store aggregation of Calidadagua objects.
	 */
	protected $collCalidadaguas;

	/**
	 * @var        Criteria The criteria used to select the current contents of collCalidadaguas.
	 */
	private $lastCalidadaguaCriteria = null;

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
	
	const PEER = 'CalidadPeer';

	/**
	 * Get the [cal_id] column value.
	 * 
	 * @return     int
	 */
	public function getCalId()
	{
		return $this->cal_id;
	}

	/**
	 * Get the [cal_pps_pre_id] column value.
	 * 
	 * @return     int
	 */
	public function getCalPpsPreId()
	{
		return $this->cal_pps_pre_id;
	}

	/**
	 * Get the [cal_pps_anio] column value.
	 * 
	 * @return     int
	 */
	public function getCalPpsAnio()
	{
		return $this->cal_pps_anio;
	}

	/**
	 * Get the [cal_pps_ser_id] column value.
	 * 
	 * @return     int
	 */
	public function getCalPpsSerId()
	{
		return $this->cal_pps_ser_id;
	}

	/**
	 * Set the value of [cal_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Calidad The current object (for fluent API support)
	 */
	public function setCalId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->cal_id !== $v) {
			$this->cal_id = $v;
			$this->modifiedColumns[] = CalidadPeer::CAL_ID;
		}

		return $this;
	} // setCalId()

	/**
	 * Set the value of [cal_pps_pre_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Calidad The current object (for fluent API support)
	 */
	public function setCalPpsPreId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->cal_pps_pre_id !== $v) {
			$this->cal_pps_pre_id = $v;
			$this->modifiedColumns[] = CalidadPeer::CAL_PPS_PRE_ID;
		}

		if ($this->aPeriodoporprestadorservicio !== null && $this->aPeriodoporprestadorservicio->getPpsPreId() !== $v) {
			$this->aPeriodoporprestadorservicio = null;
		}

		return $this;
	} // setCalPpsPreId()

	/**
	 * Set the value of [cal_pps_anio] column.
	 * 
	 * @param      int $v new value
	 * @return     Calidad The current object (for fluent API support)
	 */
	public function setCalPpsAnio($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->cal_pps_anio !== $v) {
			$this->cal_pps_anio = $v;
			$this->modifiedColumns[] = CalidadPeer::CAL_PPS_ANIO;
		}

		return $this;
	} // setCalPpsAnio()

	/**
	 * Set the value of [cal_pps_ser_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Calidad The current object (for fluent API support)
	 */
	public function setCalPpsSerId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->cal_pps_ser_id !== $v) {
			$this->cal_pps_ser_id = $v;
			$this->modifiedColumns[] = CalidadPeer::CAL_PPS_SER_ID;
		}

		return $this;
	} // setCalPpsSerId()

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

			$this->cal_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->cal_pps_pre_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->cal_pps_anio = ($row[$startcol + 2] !== null) ? (int) $row[$startcol + 2] : null;
			$this->cal_pps_ser_id = ($row[$startcol + 3] !== null) ? (int) $row[$startcol + 3] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 4; // 4 = CalidadPeer::NUM_COLUMNS - CalidadPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Calidad object", $e);
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

		if ($this->aPeriodoporprestadorservicio !== null && $this->cal_pps_pre_id !== $this->aPeriodoporprestadorservicio->getPpsPreId()) {
			$this->aPeriodoporprestadorservicio = null;
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
			$con = Propel::getConnection(CalidadPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = CalidadPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aPeriodoporprestadorservicio = null;
			$this->collCalidadaguas = null;
			$this->lastCalidadaguaCriteria = null;

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
			$con = Propel::getConnection(CalidadPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseCalidad:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				CalidadPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseCalidad:delete:post') as $callable)
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
			$con = Propel::getConnection(CalidadPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseCalidad:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseCalidad:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				CalidadPeer::addInstanceToPool($this);
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

			if ($this->aPeriodoporprestadorservicio !== null) {
				if ($this->aPeriodoporprestadorservicio->isModified() || $this->aPeriodoporprestadorservicio->isNew()) {
					$affectedRows += $this->aPeriodoporprestadorservicio->save($con);
				}
				$this->setPeriodoporprestadorservicio($this->aPeriodoporprestadorservicio);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = CalidadPeer::CAL_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = CalidadPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setCalId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += CalidadPeer::doUpdate($this, $con);
				}

				$this->resetModified(); // [HL] After being saved an object is no longer 'modified'
			}

			if ($this->collCalidadaguas !== null) {
				foreach ($this->collCalidadaguas as $referrerFK) {
					if (!$referrerFK->isDeleted()) {
						$affectedRows += $referrerFK->save($con);
					}
				}
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

			if ($this->aPeriodoporprestadorservicio !== null) {
				if (!$this->aPeriodoporprestadorservicio->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aPeriodoporprestadorservicio->getValidationFailures());
				}
			}


			if (($retval = CalidadPeer::doValidate($this, $columns)) !== true) {
				$failureMap = array_merge($failureMap, $retval);
			}


				if ($this->collCalidadaguas !== null) {
					foreach ($this->collCalidadaguas as $referrerFK) {
						if (!$referrerFK->validate($columns)) {
							$failureMap = array_merge($failureMap, $referrerFK->getValidationFailures());
						}
					}
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
		$pos = CalidadPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getCalId();
				break;
			case 1:
				return $this->getCalPpsPreId();
				break;
			case 2:
				return $this->getCalPpsAnio();
				break;
			case 3:
				return $this->getCalPpsSerId();
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
		$keys = CalidadPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getCalId(),
			$keys[1] => $this->getCalPpsPreId(),
			$keys[2] => $this->getCalPpsAnio(),
			$keys[3] => $this->getCalPpsSerId(),
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
		$pos = CalidadPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setCalId($value);
				break;
			case 1:
				$this->setCalPpsPreId($value);
				break;
			case 2:
				$this->setCalPpsAnio($value);
				break;
			case 3:
				$this->setCalPpsSerId($value);
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
		$keys = CalidadPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setCalId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setCalPpsPreId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setCalPpsAnio($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setCalPpsSerId($arr[$keys[3]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(CalidadPeer::DATABASE_NAME);

		if ($this->isColumnModified(CalidadPeer::CAL_ID)) $criteria->add(CalidadPeer::CAL_ID, $this->cal_id);
		if ($this->isColumnModified(CalidadPeer::CAL_PPS_PRE_ID)) $criteria->add(CalidadPeer::CAL_PPS_PRE_ID, $this->cal_pps_pre_id);
		if ($this->isColumnModified(CalidadPeer::CAL_PPS_ANIO)) $criteria->add(CalidadPeer::CAL_PPS_ANIO, $this->cal_pps_anio);
		if ($this->isColumnModified(CalidadPeer::CAL_PPS_SER_ID)) $criteria->add(CalidadPeer::CAL_PPS_SER_ID, $this->cal_pps_ser_id);

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
		$criteria = new Criteria(CalidadPeer::DATABASE_NAME);

		$criteria->add(CalidadPeer::CAL_ID, $this->cal_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getCalId();
	}

	/**
	 * Generic method to set the primary key (cal_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setCalId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Calidad (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setCalPpsPreId($this->cal_pps_pre_id);

		$copyObj->setCalPpsAnio($this->cal_pps_anio);

		$copyObj->setCalPpsSerId($this->cal_pps_ser_id);


		if ($deepCopy) {
			// important: temporarily setNew(false) because this affects the behavior of
			// the getter/setter methods for fkey referrer objects.
			$copyObj->setNew(false);

			foreach ($this->getCalidadaguas() as $relObj) {
				if ($relObj !== $this) {  // ensure that we don't try to copy a reference to ourselves
					$copyObj->addCalidadagua($relObj->copy($deepCopy));
				}
			}

		} // if ($deepCopy)


		$copyObj->setNew(true);

		$copyObj->setCalId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Calidad Clone of current object.
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
	 * @return     CalidadPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new CalidadPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Periodoporprestadorservicio object.
	 *
	 * @param      Periodoporprestadorservicio $v
	 * @return     Calidad The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setPeriodoporprestadorservicio(Periodoporprestadorservicio $v = null)
	{
		if ($v === null) {
			$this->setCalPpsPreId(NULL);
		} else {
			$this->setCalPpsPreId($v->getPpsPreId());
		}

		$this->aPeriodoporprestadorservicio = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Periodoporprestadorservicio object, it will not be re-added.
		if ($v !== null) {
			$v->addCalidad($this);
		}

		return $this;
	}


	/**
	 * Get the associated Periodoporprestadorservicio object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Periodoporprestadorservicio The associated Periodoporprestadorservicio object.
	 * @throws     PropelException
	 */
	public function getPeriodoporprestadorservicio(PropelPDO $con = null)
	{
		if ($this->aPeriodoporprestadorservicio === null && ($this->cal_pps_pre_id !== null)) {
			$this->aPeriodoporprestadorservicio = PeriodoporprestadorservicioPeer::retrieveByPk($this->cal_pps_pre_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aPeriodoporprestadorservicio->addCalidads($this);
			 */
		}
		return $this->aPeriodoporprestadorservicio;
	}

	/**
	 * Clears out the collCalidadaguas collection (array).
	 *
	 * This does not modify the database; however, it will remove any associated objects, causing
	 * them to be refetched by subsequent calls to accessor method.
	 *
	 * @return     void
	 * @see        addCalidadaguas()
	 */
	public function clearCalidadaguas()
	{
		$this->collCalidadaguas = null; // important to set this to NULL since that means it is uninitialized
	}

	/**
	 * Initializes the collCalidadaguas collection (array).
	 *
	 * By default this just sets the collCalidadaguas collection to an empty array (like clearcollCalidadaguas());
	 * however, you may wish to override this method in your stub class to provide setting appropriate
	 * to your application -- for example, setting the initial array to the values stored in database.
	 *
	 * @return     void
	 */
	public function initCalidadaguas()
	{
		$this->collCalidadaguas = array();
	}

	/**
	 * Gets an array of Calidadagua objects which contain a foreign key that references this object.
	 *
	 * If this collection has already been initialized with an identical Criteria, it returns the collection.
	 * Otherwise if this Calidad has previously been saved, it will retrieve
	 * related Calidadaguas from storage. If this Calidad is new, it will return
	 * an empty collection or the current collection, the criteria is ignored on a new object.
	 *
	 * @param      PropelPDO $con
	 * @param      Criteria $criteria
	 * @return     array Calidadagua[]
	 * @throws     PropelException
	 */
	public function getCalidadaguas($criteria = null, PropelPDO $con = null)
	{
		if ($criteria === null) {
			$criteria = new Criteria(CalidadPeer::DATABASE_NAME);
		}
		elseif ($criteria instanceof Criteria)
		{
			$criteria = clone $criteria;
		}

		if ($this->collCalidadaguas === null) {
			if ($this->isNew()) {
			   $this->collCalidadaguas = array();
			} else {

				$criteria->add(CalidadaguaPeer::CAG_CAL_ID, $this->cal_id);

				CalidadaguaPeer::addSelectColumns($criteria);
				$this->collCalidadaguas = CalidadaguaPeer::doSelect($criteria, $con);
			}
		} else {
			// criteria has no effect for a new object
			if (!$this->isNew()) {
				// the following code is to determine if a new query is
				// called for.  If the criteria is the same as the last
				// one, just return the collection.


				$criteria->add(CalidadaguaPeer::CAG_CAL_ID, $this->cal_id);

				CalidadaguaPeer::addSelectColumns($criteria);
				if (!isset($this->lastCalidadaguaCriteria) || !$this->lastCalidadaguaCriteria->equals($criteria)) {
					$this->collCalidadaguas = CalidadaguaPeer::doSelect($criteria, $con);
				}
			}
		}
		$this->lastCalidadaguaCriteria = $criteria;
		return $this->collCalidadaguas;
	}

	/**
	 * Returns the number of related Calidadagua objects.
	 *
	 * @param      Criteria $criteria
	 * @param      boolean $distinct
	 * @param      PropelPDO $con
	 * @return     int Count of related Calidadagua objects.
	 * @throws     PropelException
	 */
	public function countCalidadaguas(Criteria $criteria = null, $distinct = false, PropelPDO $con = null)
	{
		if ($criteria === null) {
			$criteria = new Criteria(CalidadPeer::DATABASE_NAME);
		} else {
			$criteria = clone $criteria;
		}

		if ($distinct) {
			$criteria->setDistinct();
		}

		$count = null;

		if ($this->collCalidadaguas === null) {
			if ($this->isNew()) {
				$count = 0;
			} else {

				$criteria->add(CalidadaguaPeer::CAG_CAL_ID, $this->cal_id);

				$count = CalidadaguaPeer::doCount($criteria, false, $con);
			}
		} else {
			// criteria has no effect for a new object
			if (!$this->isNew()) {
				// the following code is to determine if a new query is
				// called for.  If the criteria is the same as the last
				// one, just return count of the collection.


				$criteria->add(CalidadaguaPeer::CAG_CAL_ID, $this->cal_id);

				if (!isset($this->lastCalidadaguaCriteria) || !$this->lastCalidadaguaCriteria->equals($criteria)) {
					$count = CalidadaguaPeer::doCount($criteria, false, $con);
				} else {
					$count = count($this->collCalidadaguas);
				}
			} else {
				$count = count($this->collCalidadaguas);
			}
		}
		return $count;
	}

	/**
	 * Method called to associate a Calidadagua object to this object
	 * through the Calidadagua foreign key attribute.
	 *
	 * @param      Calidadagua $l Calidadagua
	 * @return     void
	 * @throws     PropelException
	 */
	public function addCalidadagua(Calidadagua $l)
	{
		if ($this->collCalidadaguas === null) {
			$this->initCalidadaguas();
		}
		if (!in_array($l, $this->collCalidadaguas, true)) { // only add it if the **same** object is not already associated
			array_push($this->collCalidadaguas, $l);
			$l->setCalidad($this);
		}
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
			if ($this->collCalidadaguas) {
				foreach ((array) $this->collCalidadaguas as $o) {
					$o->clearAllReferences($deep);
				}
			}
		} // if ($deep)

		$this->collCalidadaguas = null;
			$this->aPeriodoporprestadorservicio = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BaseCalidad:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseCalidad::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseCalidad
