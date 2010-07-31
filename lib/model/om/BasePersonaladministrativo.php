<?php

/**
 * Base class that represents a row from the 'personaladministrativo' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
<<<<<<< HEAD
 * Fri Jul 30 18:21:00 2010
=======
 * 07/30/10 18:50:56
>>>>>>> 5fbae45358806c5fc2096efd08a691e24fe41e3c
 *
 * @package    lib.model.om
 */
abstract class BasePersonaladministrativo extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        PersonaladministrativoPeer
	 */
	protected static $peer;

	/**
	 * The value for the pad_id field.
	 * @var        int
	 */
	protected $pad_id;

	/**
	 * The value for the pad_tra_id field.
	 * @var        int
	 */
	protected $pad_tra_id;

	/**
	 * The value for the pad_cargo field.
	 * @var        string
	 */
	protected $pad_cargo;

	/**
	 * The value for the pad_contrato_termino_indefinido field.
	 * @var        string
	 */
	protected $pad_contrato_termino_indefinido;

	/**
	 * The value for the pad_contrato_termino_fijo field.
	 * @var        string
	 */
	protected $pad_contrato_termino_fijo;

	/**
	 * The value for the pad_orden_pestacion_servicios field.
	 * @var        string
	 */
	protected $pad_orden_pestacion_servicios;

	/**
	 * The value for the pad_sin_contrato_con_bonificacion field.
	 * @var        string
	 */
	protected $pad_sin_contrato_con_bonificacion;

	/**
	 * The value for the pad_remuneracion_mensual field.
	 * @var        string
	 */
	protected $pad_remuneracion_mensual;

	/**
	 * @var        Trabajadoresyvinculacion
	 */
	protected $aTrabajadoresyvinculacion;

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
	
	const PEER = 'PersonaladministrativoPeer';

	/**
	 * Get the [pad_id] column value.
	 * 
	 * @return     int
	 */
	public function getPadId()
	{
		return $this->pad_id;
	}

	/**
	 * Get the [pad_tra_id] column value.
	 * 
	 * @return     int
	 */
	public function getPadTraId()
	{
		return $this->pad_tra_id;
	}

	/**
	 * Get the [pad_cargo] column value.
	 * 
	 * @return     string
	 */
	public function getPadCargo()
	{
		return $this->pad_cargo;
	}

	/**
	 * Get the [pad_contrato_termino_indefinido] column value.
	 * 
	 * @return     string
	 */
	public function getPadContratoTerminoIndefinido()
	{
		return $this->pad_contrato_termino_indefinido;
	}

	/**
	 * Get the [pad_contrato_termino_fijo] column value.
	 * 
	 * @return     string
	 */
	public function getPadContratoTerminoFijo()
	{
		return $this->pad_contrato_termino_fijo;
	}

	/**
	 * Get the [pad_orden_pestacion_servicios] column value.
	 * 
	 * @return     string
	 */
	public function getPadOrdenPestacionServicios()
	{
		return $this->pad_orden_pestacion_servicios;
	}

	/**
	 * Get the [pad_sin_contrato_con_bonificacion] column value.
	 * 
	 * @return     string
	 */
	public function getPadSinContratoConBonificacion()
	{
		return $this->pad_sin_contrato_con_bonificacion;
	}

	/**
	 * Get the [pad_remuneracion_mensual] column value.
	 * 
	 * @return     string
	 */
	public function getPadRemuneracionMensual()
	{
		return $this->pad_remuneracion_mensual;
	}

	/**
	 * Set the value of [pad_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pad_id !== $v) {
			$this->pad_id = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_ID;
		}

		return $this;
	} // setPadId()

	/**
	 * Set the value of [pad_tra_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadTraId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->pad_tra_id !== $v) {
			$this->pad_tra_id = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_TRA_ID;
		}

		if ($this->aTrabajadoresyvinculacion !== null && $this->aTrabajadoresyvinculacion->getTraId() !== $v) {
			$this->aTrabajadoresyvinculacion = null;
		}

		return $this;
	} // setPadTraId()

	/**
	 * Set the value of [pad_cargo] column.
	 * 
	 * @param      string $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadCargo($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pad_cargo !== $v) {
			$this->pad_cargo = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_CARGO;
		}

		return $this;
	} // setPadCargo()

	/**
	 * Set the value of [pad_contrato_termino_indefinido] column.
	 * 
	 * @param      string $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadContratoTerminoIndefinido($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pad_contrato_termino_indefinido !== $v) {
			$this->pad_contrato_termino_indefinido = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_CONTRATO_TERMINO_INDEFINIDO;
		}

		return $this;
	} // setPadContratoTerminoIndefinido()

	/**
	 * Set the value of [pad_contrato_termino_fijo] column.
	 * 
	 * @param      string $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadContratoTerminoFijo($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pad_contrato_termino_fijo !== $v) {
			$this->pad_contrato_termino_fijo = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_CONTRATO_TERMINO_FIJO;
		}

		return $this;
	} // setPadContratoTerminoFijo()

	/**
	 * Set the value of [pad_orden_pestacion_servicios] column.
	 * 
	 * @param      string $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadOrdenPestacionServicios($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pad_orden_pestacion_servicios !== $v) {
			$this->pad_orden_pestacion_servicios = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_ORDEN_PESTACION_SERVICIOS;
		}

		return $this;
	} // setPadOrdenPestacionServicios()

	/**
	 * Set the value of [pad_sin_contrato_con_bonificacion] column.
	 * 
	 * @param      string $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadSinContratoConBonificacion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pad_sin_contrato_con_bonificacion !== $v) {
			$this->pad_sin_contrato_con_bonificacion = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_SIN_CONTRATO_CON_BONIFICACION;
		}

		return $this;
	} // setPadSinContratoConBonificacion()

	/**
	 * Set the value of [pad_remuneracion_mensual] column.
	 * 
	 * @param      string $v new value
	 * @return     Personaladministrativo The current object (for fluent API support)
	 */
	public function setPadRemuneracionMensual($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->pad_remuneracion_mensual !== $v) {
			$this->pad_remuneracion_mensual = $v;
			$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_REMUNERACION_MENSUAL;
		}

		return $this;
	} // setPadRemuneracionMensual()

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

			$this->pad_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->pad_tra_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->pad_cargo = ($row[$startcol + 2] !== null) ? (string) $row[$startcol + 2] : null;
			$this->pad_contrato_termino_indefinido = ($row[$startcol + 3] !== null) ? (string) $row[$startcol + 3] : null;
			$this->pad_contrato_termino_fijo = ($row[$startcol + 4] !== null) ? (string) $row[$startcol + 4] : null;
			$this->pad_orden_pestacion_servicios = ($row[$startcol + 5] !== null) ? (string) $row[$startcol + 5] : null;
			$this->pad_sin_contrato_con_bonificacion = ($row[$startcol + 6] !== null) ? (string) $row[$startcol + 6] : null;
			$this->pad_remuneracion_mensual = ($row[$startcol + 7] !== null) ? (string) $row[$startcol + 7] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 8; // 8 = PersonaladministrativoPeer::NUM_COLUMNS - PersonaladministrativoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Personaladministrativo object", $e);
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

		if ($this->aTrabajadoresyvinculacion !== null && $this->pad_tra_id !== $this->aTrabajadoresyvinculacion->getTraId()) {
			$this->aTrabajadoresyvinculacion = null;
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
			$con = Propel::getConnection(PersonaladministrativoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = PersonaladministrativoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aTrabajadoresyvinculacion = null;
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
			$con = Propel::getConnection(PersonaladministrativoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BasePersonaladministrativo:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				PersonaladministrativoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BasePersonaladministrativo:delete:post') as $callable)
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
			$con = Propel::getConnection(PersonaladministrativoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BasePersonaladministrativo:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BasePersonaladministrativo:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				PersonaladministrativoPeer::addInstanceToPool($this);
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

			if ($this->aTrabajadoresyvinculacion !== null) {
				if ($this->aTrabajadoresyvinculacion->isModified() || $this->aTrabajadoresyvinculacion->isNew()) {
					$affectedRows += $this->aTrabajadoresyvinculacion->save($con);
				}
				$this->setTrabajadoresyvinculacion($this->aTrabajadoresyvinculacion);
			}

			if ($this->isNew() ) {
				$this->modifiedColumns[] = PersonaladministrativoPeer::PAD_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = PersonaladministrativoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setPadId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += PersonaladministrativoPeer::doUpdate($this, $con);
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

			if ($this->aTrabajadoresyvinculacion !== null) {
				if (!$this->aTrabajadoresyvinculacion->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aTrabajadoresyvinculacion->getValidationFailures());
				}
			}


			if (($retval = PersonaladministrativoPeer::doValidate($this, $columns)) !== true) {
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
		$pos = PersonaladministrativoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getPadId();
				break;
			case 1:
				return $this->getPadTraId();
				break;
			case 2:
				return $this->getPadCargo();
				break;
			case 3:
				return $this->getPadContratoTerminoIndefinido();
				break;
			case 4:
				return $this->getPadContratoTerminoFijo();
				break;
			case 5:
				return $this->getPadOrdenPestacionServicios();
				break;
			case 6:
				return $this->getPadSinContratoConBonificacion();
				break;
			case 7:
				return $this->getPadRemuneracionMensual();
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
		$keys = PersonaladministrativoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getPadId(),
			$keys[1] => $this->getPadTraId(),
			$keys[2] => $this->getPadCargo(),
			$keys[3] => $this->getPadContratoTerminoIndefinido(),
			$keys[4] => $this->getPadContratoTerminoFijo(),
			$keys[5] => $this->getPadOrdenPestacionServicios(),
			$keys[6] => $this->getPadSinContratoConBonificacion(),
			$keys[7] => $this->getPadRemuneracionMensual(),
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
		$pos = PersonaladministrativoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setPadId($value);
				break;
			case 1:
				$this->setPadTraId($value);
				break;
			case 2:
				$this->setPadCargo($value);
				break;
			case 3:
				$this->setPadContratoTerminoIndefinido($value);
				break;
			case 4:
				$this->setPadContratoTerminoFijo($value);
				break;
			case 5:
				$this->setPadOrdenPestacionServicios($value);
				break;
			case 6:
				$this->setPadSinContratoConBonificacion($value);
				break;
			case 7:
				$this->setPadRemuneracionMensual($value);
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
		$keys = PersonaladministrativoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setPadId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setPadTraId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setPadCargo($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setPadContratoTerminoIndefinido($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setPadContratoTerminoFijo($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setPadOrdenPestacionServicios($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setPadSinContratoConBonificacion($arr[$keys[6]]);
		if (array_key_exists($keys[7], $arr)) $this->setPadRemuneracionMensual($arr[$keys[7]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(PersonaladministrativoPeer::DATABASE_NAME);

		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_ID)) $criteria->add(PersonaladministrativoPeer::PAD_ID, $this->pad_id);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_TRA_ID)) $criteria->add(PersonaladministrativoPeer::PAD_TRA_ID, $this->pad_tra_id);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_CARGO)) $criteria->add(PersonaladministrativoPeer::PAD_CARGO, $this->pad_cargo);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_CONTRATO_TERMINO_INDEFINIDO)) $criteria->add(PersonaladministrativoPeer::PAD_CONTRATO_TERMINO_INDEFINIDO, $this->pad_contrato_termino_indefinido);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_CONTRATO_TERMINO_FIJO)) $criteria->add(PersonaladministrativoPeer::PAD_CONTRATO_TERMINO_FIJO, $this->pad_contrato_termino_fijo);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_ORDEN_PESTACION_SERVICIOS)) $criteria->add(PersonaladministrativoPeer::PAD_ORDEN_PESTACION_SERVICIOS, $this->pad_orden_pestacion_servicios);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_SIN_CONTRATO_CON_BONIFICACION)) $criteria->add(PersonaladministrativoPeer::PAD_SIN_CONTRATO_CON_BONIFICACION, $this->pad_sin_contrato_con_bonificacion);
		if ($this->isColumnModified(PersonaladministrativoPeer::PAD_REMUNERACION_MENSUAL)) $criteria->add(PersonaladministrativoPeer::PAD_REMUNERACION_MENSUAL, $this->pad_remuneracion_mensual);

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
		$criteria = new Criteria(PersonaladministrativoPeer::DATABASE_NAME);

		$criteria->add(PersonaladministrativoPeer::PAD_ID, $this->pad_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getPadId();
	}

	/**
	 * Generic method to set the primary key (pad_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setPadId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Personaladministrativo (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setPadTraId($this->pad_tra_id);

		$copyObj->setPadCargo($this->pad_cargo);

		$copyObj->setPadContratoTerminoIndefinido($this->pad_contrato_termino_indefinido);

		$copyObj->setPadContratoTerminoFijo($this->pad_contrato_termino_fijo);

		$copyObj->setPadOrdenPestacionServicios($this->pad_orden_pestacion_servicios);

		$copyObj->setPadSinContratoConBonificacion($this->pad_sin_contrato_con_bonificacion);

		$copyObj->setPadRemuneracionMensual($this->pad_remuneracion_mensual);


		$copyObj->setNew(true);

		$copyObj->setPadId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Personaladministrativo Clone of current object.
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
	 * @return     PersonaladministrativoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new PersonaladministrativoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Trabajadoresyvinculacion object.
	 *
	 * @param      Trabajadoresyvinculacion $v
	 * @return     Personaladministrativo The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setTrabajadoresyvinculacion(Trabajadoresyvinculacion $v = null)
	{
		if ($v === null) {
			$this->setPadTraId(NULL);
		} else {
			$this->setPadTraId($v->getTraId());
		}

		$this->aTrabajadoresyvinculacion = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Trabajadoresyvinculacion object, it will not be re-added.
		if ($v !== null) {
			$v->addPersonaladministrativo($this);
		}

		return $this;
	}


	/**
	 * Get the associated Trabajadoresyvinculacion object
	 *
	 * @param      PropelPDO Optional Connection object.
	 * @return     Trabajadoresyvinculacion The associated Trabajadoresyvinculacion object.
	 * @throws     PropelException
	 */
	public function getTrabajadoresyvinculacion(PropelPDO $con = null)
	{
		if ($this->aTrabajadoresyvinculacion === null && ($this->pad_tra_id !== null)) {
			$this->aTrabajadoresyvinculacion = TrabajadoresyvinculacionPeer::retrieveByPk($this->pad_tra_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aTrabajadoresyvinculacion->addPersonaladministrativos($this);
			 */
		}
		return $this->aTrabajadoresyvinculacion;
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

			$this->aTrabajadoresyvinculacion = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BasePersonaladministrativo:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BasePersonaladministrativo::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BasePersonaladministrativo
