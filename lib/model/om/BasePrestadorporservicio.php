<?php

/**
 * Base class that represents a row from the 'prestadorporservicio' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/29/10 16:24:16
 *
 * @package    lib.model.om
 */
abstract class BasePrestadorporservicio extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        PrestadorporservicioPeer
	 */
	protected static $peer;

	/**
	 * The value for the ppsg_pre_id field.
	 * @var        int
	 */
	protected $ppsg_pre_id;

	/**
	 * The value for the ppsg_ser_id field.
	 * @var        int
	 */
	protected $ppsg_ser_id;

	/**
	 * The value for the ppsg_observacion field.
	 * @var        string
	 */
	protected $ppsg_observacion;

	/**
	 * @var        Prestador
	 */
	protected $aPrestador;

	/**
	 * @var        Servicio
	 */
	protected $aServicio;

	/**
	 * @var        array Periodoporprestadorservicio[] Collection to store aggregation of Periodoporprestadorservicio objects.
	 */
	protected $collPeriodoporprestadorservicios;

	/**
	 * @var        Criteria The criteria used to select the current contents of collPeriodoporprestadorservicios.
	 */
	private $lastPeriodoporprestadorservicioCriteria = null;

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
	
	const PEER = 'PrestadorporservicioPeer';

	/**
	 * Get the [ppsg_pre_id] column value.
	 * 
	 * @return     int
	 */
	public function getPpsgPreId()
	{
		return $this->ppsg_pre_id;
	}

	/**
	 * Get the [ppsg_ser_id] column value.
	 * 
	 * @return     int
	 */
	public function getPpsgSerId()
	{
		return $this->ppsg_ser_id;
	}

	/**
	 * Get the [ppsg_observacion] column value.
	 * 
	 * @return     string
	 */
	public function getPpsgObservacion()
	{
		return $this->ppsg_observacion;
	}

	/**
	 * Set the value of [ppsg_pre_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Prestadorporservicio The current object (for fluent API support)
	 */
	public function setPpsgPreId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->ppsg_pre_id !== $v) {
			$this->ppsg_pre_id = $v;
			$this->modifiedColumns[] = PrestadorporservicioPeer::PPSG_PRE_ID;
		}

		if ($this->aPrestador !== null && $this->aPrestador->getPreId() !== $v) {
			$this->aPrestador = null;
		}

		return $this;
	} // setPpsgPreId()

	/**
	 * Set the value of [ppsg_ser_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Prestadorporservicio The current object (for fluent API support)
	 */
	public function setPpsgSerId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->ppsg_ser_id !== $v) {
			$this->ppsg_ser_id = $v;
			$this->modifiedColumns[] = PrestadorporservicioPeer::PPSG_SER_ID;
		}

		if ($this->aServicio !== null && $this->aServicio->getSerId() !== $v) {
			$this->aServicio = null;
		}

		return $this;
	} // setPpsgSerId()

	/**
	 * Set the value of [ppsg_observacion] column.
	 * 
	 * @param      string $v new value
	 * @return     Prestadorporservicio The current object (for fluent API support)
	 */
	public function setPpsgObservacion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->ppsg_observacion !== $v) {
			$this->ppsg_observacion = $v;
			$this->modifiedColumns[] = PrestadorporservicioPeer::PPSG_OBSERVACION;
		}

		return $this;
	} // setPpsgObservacion()

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

			$this->ppsg_pre_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->ppsg_ser_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->ppsg_observacion = ($row[$startcol + 2] !== null) ? (string) $row[$startcol + 2] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 3; // 3 = PrestadorporservicioPeer::NUM_COLUMNS - PrestadorporservicioPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Prestadorporservicio object", $e);
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

		if ($this->aPrestador !== null && $this->ppsg_pre_id !== $this->aPrestador->getPreId()) {
			$this->aPrestador = null;
		}
		if ($this->aServicio !== null && $this->ppsg_ser_id !== $this->aServicio->getSerId()) {
			$this->aServicio = null;
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
			$con = Propel::getConnection(PrestadorporservicioPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = PrestadorporservicioPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aPrestador = null;
			$this->aServicio = null;
			$this->collPeriodoporprestadorservicios = null;
			$this->lastPeriodoporprestadorservicioCriteria = null;

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
			$con = Propel::getConnection(PrestadorporservicioPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BasePrestadorporservicio:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				PrestadorporservicioPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BasePrestadorporservicio:delete:post') as $callable)
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
			$con = Propel::getConnection(PrestadorporservicioPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BasePrestadorporservicio:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BasePrestadorporservicio:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				PrestadorporservicioPeer::addInstanceToPool($this);
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

			if ($this->aPrestador !== null) {
				if ($this->aPrestador->isModified() || $this->aPrestador->isNew()) {
					$affectedRows += $this->aPrestador->save($con);
				}
				$this->setPrestador($this->aPrestador);
			}

			if ($this->aServicio !== null) {
				if ($this->aServicio->isModified() || $this->aServicio->isNew()) {
					$affectedRows += $this->aServicio->save($con);
				}
				$this->setServicio($this->aServicio);
			}


			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = PrestadorporservicioPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setNew(false);
				} else {
					$affectedRows += PrestadorporservicioPeer::doUpdate($this, $con);
				}

				$this->resetModified(); // [HL] After being saved an object is no longer 'modified'
			}

			if ($this->collPeriodoporprestadorservicios !== null) {
				foreach ($this->collPeriodoporprestadorservicios as $referrerFK) {
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

			if ($this->aPrestador !== null) {
				if (!$this->aPrestador->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aPrestador->getValidationFailures());
				}
			}

			if ($this->aServicio !== null) {
				if (!$this->aServicio->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aServicio->getValidationFailures());
				}
			}


			if (($retval = PrestadorporservicioPeer::doValidate($this, $columns)) !== true) {
				$failureMap = array_merge($failureMap, $retval);
			}


				if ($this->collPeriodoporprestadorservicios !== null) {
					foreach ($this->collPeriodoporprestadorservicios as $referrerFK) {
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
		$pos = PrestadorporservicioPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getPpsgPreId();
				break;
			case 1:
				return $this->getPpsgSerId();
				break;
			case 2:
				return $this->getPpsgObservacion();
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
		$keys = PrestadorporservicioPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getPpsgPreId(),
			$keys[1] => $this->getPpsgSerId(),
			$keys[2] => $this->getPpsgObservacion(),
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
		$pos = PrestadorporservicioPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setPpsgPreId($value);
				break;
			case 1:
				$this->setPpsgSerId($value);
				break;
			case 2:
				$this->setPpsgObservacion($value);
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
		$keys = PrestadorporservicioPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setPpsgPreId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setPpsgSerId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setPpsgObservacion($arr[$keys[2]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(PrestadorporservicioPeer::DATABASE_NAME);

		if ($this->isColumnModified(PrestadorporservicioPeer::PPSG_PRE_ID)) $criteria->add(PrestadorporservicioPeer::PPSG_PRE_ID, $this->ppsg_pre_id);
		if ($this->isColumnModified(PrestadorporservicioPeer::PPSG_SER_ID)) $criteria->add(PrestadorporservicioPeer::PPSG_SER_ID, $this->ppsg_ser_id);
		if ($this->isColumnModified(PrestadorporservicioPeer::PPSG_OBSERVACION)) $criteria->add(PrestadorporservicioPeer::PPSG_OBSERVACION, $this->ppsg_observacion);

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
		$criteria = new Criteria(PrestadorporservicioPeer::DATABASE_NAME);

		$criteria->add(PrestadorporservicioPeer::PPSG_PRE_ID, $this->ppsg_pre_id);
		$criteria->add(PrestadorporservicioPeer::PPSG_SER_ID, $this->ppsg_ser_id);

		return $criteria;
	}

	/**
	 * Returns the composite primary key for this object.
	 * The array elements will be in same order as specified in XML.
	 * @return     array
	 */
	public function getPrimaryKey()
	{
		$pks = array();

		$pks[0] = $this->getPpsgPreId();

		$pks[1] = $this->getPpsgSerId();

		return $pks;
	}

	/**
	 * Set the [composite] primary key.
	 *
	 * @param      array $keys The elements of the composite key (order must match the order in XML file).
	 * @return     void
	 */
	public function setPrimaryKey($keys)
	{

		$this->setPpsgPreId($keys[0]);

		$this->setPpsgSerId($keys[1]);

	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Prestadorporservicio (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setPpsgPreId($this->ppsg_pre_id);

		$copyObj->setPpsgSerId($this->ppsg_ser_id);

		$copyObj->setPpsgObservacion($this->ppsg_observacion);


		if ($deepCopy) {
			// important: temporarily setNew(false) because this affects the behavior of
			// the getter/setter methods for fkey referrer objects.
			$copyObj->setNew(false);

			foreach ($this->getPeriodoporprestadorservicios() as $relObj) {
				if ($relObj !== $this) {  // ensure that we don't try to copy a reference to ourselves
					$copyObj->addPeriodoporprestadorservicio($relObj->copy($deepCopy));
				}
			}

		} // if ($deepCopy)


		$copyObj->setNew(true);

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
	 * @return     Prestadorporservicio Clone of current object.
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
	 * @return     PrestadorporservicioPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new PrestadorporservicioPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Prestador object.
	 *
	 * @param      Prestador $v
	 * @return     Prestadorporservicio The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setPrestador(Prestador $v = null)
	{
		if ($v === null) {
			$this->setPpsgPreId(NULL);
		} else {
			$this->setPpsgPreId($v->getPreId());
		}

		$this->aPrestador = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Prestador object, it will not be re-added.
		if ($v !== null) {
			$v->addPrestadorporservicio($this);
		}

		return $this;
	}


	/**
	 * Get the associated Prestador object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Prestador The associated Prestador object.
	 * @throws     PropelException
	 */
	public function getPrestador(PropelPDO $con = null)
	{
		if ($this->aPrestador === null && ($this->ppsg_pre_id !== null)) {
			$this->aPrestador = PrestadorPeer::retrieveByPk($this->ppsg_pre_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aPrestador->addPrestadorporservicios($this);
			 */
		}
		return $this->aPrestador;
	}

	/**
	 * Declares an association between this object and a Servicio object.
	 *
	 * @param      Servicio $v
	 * @return     Prestadorporservicio The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setServicio(Servicio $v = null)
	{
		if ($v === null) {
			$this->setPpsgSerId(NULL);
		} else {
			$this->setPpsgSerId($v->getSerId());
		}

		$this->aServicio = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Servicio object, it will not be re-added.
		if ($v !== null) {
			$v->addPrestadorporservicio($this);
		}

		return $this;
	}


	/**
	 * Get the associated Servicio object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Servicio The associated Servicio object.
	 * @throws     PropelException
	 */
	public function getServicio(PropelPDO $con = null)
	{
		if ($this->aServicio === null && ($this->ppsg_ser_id !== null)) {
			$this->aServicio = ServicioPeer::retrieveByPk($this->ppsg_ser_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aServicio->addPrestadorporservicios($this);
			 */
		}
		return $this->aServicio;
	}

	/**
	 * Clears out the collPeriodoporprestadorservicios collection (array).
	 *
	 * This does not modify the database; however, it will remove any associated objects, causing
	 * them to be refetched by subsequent calls to accessor method.
	 *
	 * @return     void
	 * @see        addPeriodoporprestadorservicios()
	 */
	public function clearPeriodoporprestadorservicios()
	{
		$this->collPeriodoporprestadorservicios = null; // important to set this to NULL since that means it is uninitialized
	}

	/**
	 * Initializes the collPeriodoporprestadorservicios collection (array).
	 *
	 * By default this just sets the collPeriodoporprestadorservicios collection to an empty array (like clearcollPeriodoporprestadorservicios());
	 * however, you may wish to override this method in your stub class to provide setting appropriate
	 * to your application -- for example, setting the initial array to the values stored in database.
	 *
	 * @return     void
	 */
	public function initPeriodoporprestadorservicios()
	{
		$this->collPeriodoporprestadorservicios = array();
	}

	/**
	 * Gets an array of Periodoporprestadorservicio objects which contain a foreign key that references this object.
	 *
	 * If this collection has already been initialized with an identical Criteria, it returns the collection.
	 * Otherwise if this Prestadorporservicio has previously been saved, it will retrieve
	 * related Periodoporprestadorservicios from storage. If this Prestadorporservicio is new, it will return
	 * an empty collection or the current collection, the criteria is ignored on a new object.
	 *
	 * @param      PropelPDO $con
	 * @param      Criteria $criteria
	 * @return     array Periodoporprestadorservicio[]
	 * @throws     PropelException
	 */
	public function getPeriodoporprestadorservicios($criteria = null, PropelPDO $con = null)
	{
		if ($criteria === null) {
			$criteria = new Criteria(PrestadorporservicioPeer::DATABASE_NAME);
		}
		elseif ($criteria instanceof Criteria)
		{
			$criteria = clone $criteria;
		}

		if ($this->collPeriodoporprestadorservicios === null) {
			if ($this->isNew()) {
			   $this->collPeriodoporprestadorservicios = array();
			} else {

				$criteria->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $this->ppsg_pre_id);

				PeriodoporprestadorservicioPeer::addSelectColumns($criteria);
				$this->collPeriodoporprestadorservicios = PeriodoporprestadorservicioPeer::doSelect($criteria, $con);
			}
		} else {
			// criteria has no effect for a new object
			if (!$this->isNew()) {
				// the following code is to determine if a new query is
				// called for.  If the criteria is the same as the last
				// one, just return the collection.


				$criteria->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $this->ppsg_pre_id);

				PeriodoporprestadorservicioPeer::addSelectColumns($criteria);
				if (!isset($this->lastPeriodoporprestadorservicioCriteria) || !$this->lastPeriodoporprestadorservicioCriteria->equals($criteria)) {
					$this->collPeriodoporprestadorservicios = PeriodoporprestadorservicioPeer::doSelect($criteria, $con);
				}
			}
		}
		$this->lastPeriodoporprestadorservicioCriteria = $criteria;
		return $this->collPeriodoporprestadorservicios;
	}

	/**
	 * Returns the number of related Periodoporprestadorservicio objects.
	 *
	 * @param      Criteria $criteria
	 * @param      boolean $distinct
	 * @param      PropelPDO $con
	 * @return     int Count of related Periodoporprestadorservicio objects.
	 * @throws     PropelException
	 */
	public function countPeriodoporprestadorservicios(Criteria $criteria = null, $distinct = false, PropelPDO $con = null)
	{
		if ($criteria === null) {
			$criteria = new Criteria(PrestadorporservicioPeer::DATABASE_NAME);
		} else {
			$criteria = clone $criteria;
		}

		if ($distinct) {
			$criteria->setDistinct();
		}

		$count = null;

		if ($this->collPeriodoporprestadorservicios === null) {
			if ($this->isNew()) {
				$count = 0;
			} else {

				$criteria->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $this->ppsg_pre_id);

				$count = PeriodoporprestadorservicioPeer::doCount($criteria, false, $con);
			}
		} else {
			// criteria has no effect for a new object
			if (!$this->isNew()) {
				// the following code is to determine if a new query is
				// called for.  If the criteria is the same as the last
				// one, just return count of the collection.


				$criteria->add(PeriodoporprestadorservicioPeer::PPS_PRE_ID, $this->ppsg_pre_id);

				if (!isset($this->lastPeriodoporprestadorservicioCriteria) || !$this->lastPeriodoporprestadorservicioCriteria->equals($criteria)) {
					$count = PeriodoporprestadorservicioPeer::doCount($criteria, false, $con);
				} else {
					$count = count($this->collPeriodoporprestadorservicios);
				}
			} else {
				$count = count($this->collPeriodoporprestadorservicios);
			}
		}
		return $count;
	}

	/**
	 * Method called to associate a Periodoporprestadorservicio object to this object
	 * through the Periodoporprestadorservicio foreign key attribute.
	 *
	 * @param      Periodoporprestadorservicio $l Periodoporprestadorservicio
	 * @return     void
	 * @throws     PropelException
	 */
	public function addPeriodoporprestadorservicio(Periodoporprestadorservicio $l)
	{
		if ($this->collPeriodoporprestadorservicios === null) {
			$this->initPeriodoporprestadorservicios();
		}
		if (!in_array($l, $this->collPeriodoporprestadorservicios, true)) { // only add it if the **same** object is not already associated
			array_push($this->collPeriodoporprestadorservicios, $l);
			$l->setPrestadorporservicio($this);
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
			if ($this->collPeriodoporprestadorservicios) {
				foreach ((array) $this->collPeriodoporprestadorservicios as $o) {
					$o->clearAllReferences($deep);
				}
			}
		} // if ($deep)

		$this->collPeriodoporprestadorservicios = null;
			$this->aPrestador = null;
			$this->aServicio = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BasePrestadorporservicio:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BasePrestadorporservicio::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BasePrestadorporservicio
