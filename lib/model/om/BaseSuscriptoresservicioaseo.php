<?php

/**
 * Base class that represents a row from the 'suscriptoresservicioaseo' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/30/10 18:51:01
 *
 * @package    lib.model.om
 */
abstract class BaseSuscriptoresservicioaseo extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        SuscriptoresservicioaseoPeer
	 */
	protected static $peer;

	/**
	 * The value for the ssase_id field.
	 * @var        int
	 */
	protected $ssase_id;

	/**
	 * The value for the ssase_aco_id field.
	 * @var        int
	 */
	protected $ssase_aco_id;

	/**
	 * The value for the ssase_est_id field.
	 * @var        int
	 */
	protected $ssase_est_id;

	/**
	 * The value for the ssase_tarifa field.
	 * @var        string
	 */
	protected $ssase_tarifa;

	/**
	 * The value for the ssase_numero_suscriptores field.
	 * @var        int
	 */
	protected $ssase_numero_suscriptores;

	/**
	 * @var        Analisiscobertura
	 */
	protected $aAnalisiscobertura;

	/**
	 * @var        Estrato
	 */
	protected $aEstrato;

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
	
	const PEER = 'SuscriptoresservicioaseoPeer';

	/**
	 * Get the [ssase_id] column value.
	 * 
	 * @return     int
	 */
	public function getSsaseId()
	{
		return $this->ssase_id;
	}

	/**
	 * Get the [ssase_aco_id] column value.
	 * 
	 * @return     int
	 */
	public function getSsaseAcoId()
	{
		return $this->ssase_aco_id;
	}

	/**
	 * Get the [ssase_est_id] column value.
	 * 
	 * @return     int
	 */
	public function getSsaseEstId()
	{
		return $this->ssase_est_id;
	}

	/**
	 * Get the [ssase_tarifa] column value.
	 * 
	 * @return     string
	 */
	public function getSsaseTarifa()
	{
		return $this->ssase_tarifa;
	}

	/**
	 * Get the [ssase_numero_suscriptores] column value.
	 * 
	 * @return     int
	 */
	public function getSsaseNumeroSuscriptores()
	{
		return $this->ssase_numero_suscriptores;
	}

	/**
	 * Set the value of [ssase_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 */
	public function setSsaseId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->ssase_id !== $v) {
			$this->ssase_id = $v;
			$this->modifiedColumns[] = SuscriptoresservicioaseoPeer::SSASE_ID;
		}

		return $this;
	} // setSsaseId()

	/**
	 * Set the value of [ssase_aco_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 */
	public function setSsaseAcoId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->ssase_aco_id !== $v) {
			$this->ssase_aco_id = $v;
			$this->modifiedColumns[] = SuscriptoresservicioaseoPeer::SSASE_ACO_ID;
		}

		if ($this->aAnalisiscobertura !== null && $this->aAnalisiscobertura->getAcoId() !== $v) {
			$this->aAnalisiscobertura = null;
		}

		return $this;
	} // setSsaseAcoId()

	/**
	 * Set the value of [ssase_est_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 */
	public function setSsaseEstId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->ssase_est_id !== $v) {
			$this->ssase_est_id = $v;
			$this->modifiedColumns[] = SuscriptoresservicioaseoPeer::SSASE_EST_ID;
		}

		if ($this->aEstrato !== null && $this->aEstrato->getEstId() !== $v) {
			$this->aEstrato = null;
		}

		return $this;
	} // setSsaseEstId()

	/**
	 * Set the value of [ssase_tarifa] column.
	 * 
	 * @param      string $v new value
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 */
	public function setSsaseTarifa($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->ssase_tarifa !== $v) {
			$this->ssase_tarifa = $v;
			$this->modifiedColumns[] = SuscriptoresservicioaseoPeer::SSASE_TARIFA;
		}

		return $this;
	} // setSsaseTarifa()

	/**
	 * Set the value of [ssase_numero_suscriptores] column.
	 * 
	 * @param      int $v new value
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 */
	public function setSsaseNumeroSuscriptores($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->ssase_numero_suscriptores !== $v) {
			$this->ssase_numero_suscriptores = $v;
			$this->modifiedColumns[] = SuscriptoresservicioaseoPeer::SSASE_NUMERO_SUSCRIPTORES;
		}

		return $this;
	} // setSsaseNumeroSuscriptores()

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

			$this->ssase_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->ssase_aco_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->ssase_est_id = ($row[$startcol + 2] !== null) ? (int) $row[$startcol + 2] : null;
			$this->ssase_tarifa = ($row[$startcol + 3] !== null) ? (string) $row[$startcol + 3] : null;
			$this->ssase_numero_suscriptores = ($row[$startcol + 4] !== null) ? (int) $row[$startcol + 4] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 5; // 5 = SuscriptoresservicioaseoPeer::NUM_COLUMNS - SuscriptoresservicioaseoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Suscriptoresservicioaseo object", $e);
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

		if ($this->aAnalisiscobertura !== null && $this->ssase_aco_id !== $this->aAnalisiscobertura->getAcoId()) {
			$this->aAnalisiscobertura = null;
		}
		if ($this->aEstrato !== null && $this->ssase_est_id !== $this->aEstrato->getEstId()) {
			$this->aEstrato = null;
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
			$con = Propel::getConnection(SuscriptoresservicioaseoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = SuscriptoresservicioaseoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aAnalisiscobertura = null;
			$this->aEstrato = null;
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
			$con = Propel::getConnection(SuscriptoresservicioaseoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseSuscriptoresservicioaseo:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				SuscriptoresservicioaseoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseSuscriptoresservicioaseo:delete:post') as $callable)
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
			$con = Propel::getConnection(SuscriptoresservicioaseoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseSuscriptoresservicioaseo:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseSuscriptoresservicioaseo:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				SuscriptoresservicioaseoPeer::addInstanceToPool($this);
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

			if ($this->aAnalisiscobertura !== null) {
				if ($this->aAnalisiscobertura->isModified() || $this->aAnalisiscobertura->isNew()) {
					$affectedRows += $this->aAnalisiscobertura->save($con);
				}
				$this->setAnalisiscobertura($this->aAnalisiscobertura);
			}

			if ($this->aEstrato !== null) {
				if ($this->aEstrato->isModified() || $this->aEstrato->isNew()) {
					$affectedRows += $this->aEstrato->save($con);
				}
				$this->setEstrato($this->aEstrato);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = SuscriptoresservicioaseoPeer::SSASE_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = SuscriptoresservicioaseoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setSsaseId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += SuscriptoresservicioaseoPeer::doUpdate($this, $con);
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

			if ($this->aAnalisiscobertura !== null) {
				if (!$this->aAnalisiscobertura->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aAnalisiscobertura->getValidationFailures());
				}
			}

			if ($this->aEstrato !== null) {
				if (!$this->aEstrato->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aEstrato->getValidationFailures());
				}
			}


			if (($retval = SuscriptoresservicioaseoPeer::doValidate($this, $columns)) !== true) {
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
		$pos = SuscriptoresservicioaseoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getSsaseId();
				break;
			case 1:
				return $this->getSsaseAcoId();
				break;
			case 2:
				return $this->getSsaseEstId();
				break;
			case 3:
				return $this->getSsaseTarifa();
				break;
			case 4:
				return $this->getSsaseNumeroSuscriptores();
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
		$keys = SuscriptoresservicioaseoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getSsaseId(),
			$keys[1] => $this->getSsaseAcoId(),
			$keys[2] => $this->getSsaseEstId(),
			$keys[3] => $this->getSsaseTarifa(),
			$keys[4] => $this->getSsaseNumeroSuscriptores(),
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
		$pos = SuscriptoresservicioaseoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setSsaseId($value);
				break;
			case 1:
				$this->setSsaseAcoId($value);
				break;
			case 2:
				$this->setSsaseEstId($value);
				break;
			case 3:
				$this->setSsaseTarifa($value);
				break;
			case 4:
				$this->setSsaseNumeroSuscriptores($value);
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
		$keys = SuscriptoresservicioaseoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setSsaseId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setSsaseAcoId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setSsaseEstId($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setSsaseTarifa($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setSsaseNumeroSuscriptores($arr[$keys[4]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(SuscriptoresservicioaseoPeer::DATABASE_NAME);

		if ($this->isColumnModified(SuscriptoresservicioaseoPeer::SSASE_ID)) $criteria->add(SuscriptoresservicioaseoPeer::SSASE_ID, $this->ssase_id);
		if ($this->isColumnModified(SuscriptoresservicioaseoPeer::SSASE_ACO_ID)) $criteria->add(SuscriptoresservicioaseoPeer::SSASE_ACO_ID, $this->ssase_aco_id);
		if ($this->isColumnModified(SuscriptoresservicioaseoPeer::SSASE_EST_ID)) $criteria->add(SuscriptoresservicioaseoPeer::SSASE_EST_ID, $this->ssase_est_id);
		if ($this->isColumnModified(SuscriptoresservicioaseoPeer::SSASE_TARIFA)) $criteria->add(SuscriptoresservicioaseoPeer::SSASE_TARIFA, $this->ssase_tarifa);
		if ($this->isColumnModified(SuscriptoresservicioaseoPeer::SSASE_NUMERO_SUSCRIPTORES)) $criteria->add(SuscriptoresservicioaseoPeer::SSASE_NUMERO_SUSCRIPTORES, $this->ssase_numero_suscriptores);

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
		$criteria = new Criteria(SuscriptoresservicioaseoPeer::DATABASE_NAME);

		$criteria->add(SuscriptoresservicioaseoPeer::SSASE_ID, $this->ssase_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getSsaseId();
	}

	/**
	 * Generic method to set the primary key (ssase_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setSsaseId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Suscriptoresservicioaseo (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setSsaseAcoId($this->ssase_aco_id);

		$copyObj->setSsaseEstId($this->ssase_est_id);

		$copyObj->setSsaseTarifa($this->ssase_tarifa);

		$copyObj->setSsaseNumeroSuscriptores($this->ssase_numero_suscriptores);


		$copyObj->setNew(true);

		$copyObj->setSsaseId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Suscriptoresservicioaseo Clone of current object.
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
	 * @return     SuscriptoresservicioaseoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new SuscriptoresservicioaseoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Analisiscobertura object.
	 *
	 * @param      Analisiscobertura $v
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setAnalisiscobertura(Analisiscobertura $v = null)
	{
		if ($v === null) {
			$this->setSsaseAcoId(NULL);
		} else {
			$this->setSsaseAcoId($v->getAcoId());
		}

		$this->aAnalisiscobertura = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Analisiscobertura object, it will not be re-added.
		if ($v !== null) {
			$v->addSuscriptoresservicioaseo($this);
		}

		return $this;
	}


	/**
	 * Get the associated Analisiscobertura object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Analisiscobertura The associated Analisiscobertura object.
	 * @throws     PropelException
	 */
	public function getAnalisiscobertura(PropelPDO $con = null)
	{
		if ($this->aAnalisiscobertura === null && ($this->ssase_aco_id !== null)) {
			$this->aAnalisiscobertura = AnalisiscoberturaPeer::retrieveByPk($this->ssase_aco_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aAnalisiscobertura->addSuscriptoresservicioaseos($this);
			 */
		}
		return $this->aAnalisiscobertura;
	}

	/**
	 * Declares an association between this object and a Estrato object.
	 *
	 * @param      Estrato $v
	 * @return     Suscriptoresservicioaseo The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setEstrato(Estrato $v = null)
	{
		if ($v === null) {
			$this->setSsaseEstId(NULL);
		} else {
			$this->setSsaseEstId($v->getEstId());
		}

		$this->aEstrato = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Estrato object, it will not be re-added.
		if ($v !== null) {
			$v->addSuscriptoresservicioaseo($this);
		}

		return $this;
	}


	/**
	 * Get the associated Estrato object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Estrato The associated Estrato object.
	 * @throws     PropelException
	 */
	public function getEstrato(PropelPDO $con = null)
	{
		if ($this->aEstrato === null && ($this->ssase_est_id !== null)) {
			$this->aEstrato = EstratoPeer::retrieveByPk($this->ssase_est_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aEstrato->addSuscriptoresservicioaseos($this);
			 */
		}
		return $this->aEstrato;
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

			$this->aAnalisiscobertura = null;
			$this->aEstrato = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BaseSuscriptoresservicioaseo:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseSuscriptoresservicioaseo::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseSuscriptoresservicioaseo
