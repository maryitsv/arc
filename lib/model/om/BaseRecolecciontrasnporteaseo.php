<?php

/**
 * Base class that represents a row from the 'recolecciontrasnporteaseo' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/29/10 00:07:04
 *
 * @package    lib.model.om
 */
abstract class BaseRecolecciontrasnporteaseo extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        RecolecciontrasnporteaseoPeer
	 */
	protected static $peer;

	/**
	 * The value for the rtr_id field.
	 * @var        int
	 */
	protected $rtr_id;

	/**
	 * The value for the rtr_top_id field.
	 * @var        int
	 */
	protected $rtr_top_id;

	/**
	 * The value for the rtr_tipo_recoleccion_selectiva field.
	 * @var        string
	 */
	protected $rtr_tipo_recoleccion_selectiva;

	/**
	 * The value for the rtr_tipo_recoleccion_conjuntiva field.
	 * @var        string
	 */
	protected $rtr_tipo_recoleccion_conjuntiva;

	/**
	 * The value for the rtr_distancia_recorrida_sitio_final field.
	 * @var        string
	 */
	protected $rtr_distancia_recorrida_sitio_final;

	/**
	 * The value for the rtr_frecuencia_servicio_barrido field.
	 * @var        string
	 */
	protected $rtr_frecuencia_servicio_barrido;

	/**
	 * The value for the rtr_frecuencia_servicio_recoleccion field.
	 * @var        string
	 */
	protected $rtr_frecuencia_servicio_recoleccion;

	/**
	 * @var        Tecnicooperativo
	 */
	protected $aTecnicooperativo;

	/**
	 * @var        array Vehiculorecoleccion[] Collection to store aggregation of Vehiculorecoleccion objects.
	 */
	protected $collVehiculorecoleccions;

	/**
	 * @var        Criteria The criteria used to select the current contents of collVehiculorecoleccions.
	 */
	private $lastVehiculorecoleccionCriteria = null;

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
	
	const PEER = 'RecolecciontrasnporteaseoPeer';

	/**
	 * Get the [rtr_id] column value.
	 * 
	 * @return     int
	 */
	public function getRtrId()
	{
		return $this->rtr_id;
	}

	/**
	 * Get the [rtr_top_id] column value.
	 * 
	 * @return     int
	 */
	public function getRtrTopId()
	{
		return $this->rtr_top_id;
	}

	/**
	 * Get the [rtr_tipo_recoleccion_selectiva] column value.
	 * 
	 * @return     string
	 */
	public function getRtrTipoRecoleccionSelectiva()
	{
		return $this->rtr_tipo_recoleccion_selectiva;
	}

	/**
	 * Get the [rtr_tipo_recoleccion_conjuntiva] column value.
	 * 
	 * @return     string
	 */
	public function getRtrTipoRecoleccionConjuntiva()
	{
		return $this->rtr_tipo_recoleccion_conjuntiva;
	}

	/**
	 * Get the [rtr_distancia_recorrida_sitio_final] column value.
	 * 
	 * @return     string
	 */
	public function getRtrDistanciaRecorridaSitioFinal()
	{
		return $this->rtr_distancia_recorrida_sitio_final;
	}

	/**
	 * Get the [rtr_frecuencia_servicio_barrido] column value.
	 * 
	 * @return     string
	 */
	public function getRtrFrecuenciaServicioBarrido()
	{
		return $this->rtr_frecuencia_servicio_barrido;
	}

	/**
	 * Get the [rtr_frecuencia_servicio_recoleccion] column value.
	 * 
	 * @return     string
	 */
	public function getRtrFrecuenciaServicioRecoleccion()
	{
		return $this->rtr_frecuencia_servicio_recoleccion;
	}

	/**
	 * Set the value of [rtr_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->rtr_id !== $v) {
			$this->rtr_id = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_ID;
		}

		return $this;
	} // setRtrId()

	/**
	 * Set the value of [rtr_top_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrTopId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->rtr_top_id !== $v) {
			$this->rtr_top_id = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_TOP_ID;
		}

		if ($this->aTecnicooperativo !== null && $this->aTecnicooperativo->getTopId() !== $v) {
			$this->aTecnicooperativo = null;
		}

		return $this;
	} // setRtrTopId()

	/**
	 * Set the value of [rtr_tipo_recoleccion_selectiva] column.
	 * 
	 * @param      string $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrTipoRecoleccionSelectiva($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->rtr_tipo_recoleccion_selectiva !== $v) {
			$this->rtr_tipo_recoleccion_selectiva = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_TIPO_RECOLECCION_SELECTIVA;
		}

		return $this;
	} // setRtrTipoRecoleccionSelectiva()

	/**
	 * Set the value of [rtr_tipo_recoleccion_conjuntiva] column.
	 * 
	 * @param      string $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrTipoRecoleccionConjuntiva($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->rtr_tipo_recoleccion_conjuntiva !== $v) {
			$this->rtr_tipo_recoleccion_conjuntiva = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_TIPO_RECOLECCION_CONJUNTIVA;
		}

		return $this;
	} // setRtrTipoRecoleccionConjuntiva()

	/**
	 * Set the value of [rtr_distancia_recorrida_sitio_final] column.
	 * 
	 * @param      string $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrDistanciaRecorridaSitioFinal($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->rtr_distancia_recorrida_sitio_final !== $v) {
			$this->rtr_distancia_recorrida_sitio_final = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_DISTANCIA_RECORRIDA_SITIO_FINAL;
		}

		return $this;
	} // setRtrDistanciaRecorridaSitioFinal()

	/**
	 * Set the value of [rtr_frecuencia_servicio_barrido] column.
	 * 
	 * @param      string $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrFrecuenciaServicioBarrido($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->rtr_frecuencia_servicio_barrido !== $v) {
			$this->rtr_frecuencia_servicio_barrido = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_FRECUENCIA_SERVICIO_BARRIDO;
		}

		return $this;
	} // setRtrFrecuenciaServicioBarrido()

	/**
	 * Set the value of [rtr_frecuencia_servicio_recoleccion] column.
	 * 
	 * @param      string $v new value
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 */
	public function setRtrFrecuenciaServicioRecoleccion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->rtr_frecuencia_servicio_recoleccion !== $v) {
			$this->rtr_frecuencia_servicio_recoleccion = $v;
			$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_FRECUENCIA_SERVICIO_RECOLECCION;
		}

		return $this;
	} // setRtrFrecuenciaServicioRecoleccion()

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

			$this->rtr_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->rtr_top_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->rtr_tipo_recoleccion_selectiva = ($row[$startcol + 2] !== null) ? (string) $row[$startcol + 2] : null;
			$this->rtr_tipo_recoleccion_conjuntiva = ($row[$startcol + 3] !== null) ? (string) $row[$startcol + 3] : null;
			$this->rtr_distancia_recorrida_sitio_final = ($row[$startcol + 4] !== null) ? (string) $row[$startcol + 4] : null;
			$this->rtr_frecuencia_servicio_barrido = ($row[$startcol + 5] !== null) ? (string) $row[$startcol + 5] : null;
			$this->rtr_frecuencia_servicio_recoleccion = ($row[$startcol + 6] !== null) ? (string) $row[$startcol + 6] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 7; // 7 = RecolecciontrasnporteaseoPeer::NUM_COLUMNS - RecolecciontrasnporteaseoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Recolecciontrasnporteaseo object", $e);
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

		if ($this->aTecnicooperativo !== null && $this->rtr_top_id !== $this->aTecnicooperativo->getTopId()) {
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
			$con = Propel::getConnection(RecolecciontrasnporteaseoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = RecolecciontrasnporteaseoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
		$row = $stmt->fetch(PDO::FETCH_NUM);
		$stmt->closeCursor();
		if (!$row) {
			throw new PropelException('Cannot find matching row in the database to reload object values.');
		}
		$this->hydrate($row, 0, true); // rehydrate

		if ($deep) {  // also de-associate any related objects?

			$this->aTecnicooperativo = null;
			$this->collVehiculorecoleccions = null;
			$this->lastVehiculorecoleccionCriteria = null;

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
			$con = Propel::getConnection(RecolecciontrasnporteaseoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseRecolecciontrasnporteaseo:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				RecolecciontrasnporteaseoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseRecolecciontrasnporteaseo:delete:post') as $callable)
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
			$con = Propel::getConnection(RecolecciontrasnporteaseoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseRecolecciontrasnporteaseo:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseRecolecciontrasnporteaseo:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				RecolecciontrasnporteaseoPeer::addInstanceToPool($this);
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
				$this->modifiedColumns[] = RecolecciontrasnporteaseoPeer::RTR_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = RecolecciontrasnporteaseoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setRtrId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += RecolecciontrasnporteaseoPeer::doUpdate($this, $con);
				}

				$this->resetModified(); // [HL] After being saved an object is no longer 'modified'
			}

			if ($this->collVehiculorecoleccions !== null) {
				foreach ($this->collVehiculorecoleccions as $referrerFK) {
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

			if ($this->aTecnicooperativo !== null) {
				if (!$this->aTecnicooperativo->validate($columns)) {
					$failureMap = array_merge($failureMap, $this->aTecnicooperativo->getValidationFailures());
				}
			}


			if (($retval = RecolecciontrasnporteaseoPeer::doValidate($this, $columns)) !== true) {
				$failureMap = array_merge($failureMap, $retval);
			}


				if ($this->collVehiculorecoleccions !== null) {
					foreach ($this->collVehiculorecoleccions as $referrerFK) {
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
		$pos = RecolecciontrasnporteaseoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getRtrId();
				break;
			case 1:
				return $this->getRtrTopId();
				break;
			case 2:
				return $this->getRtrTipoRecoleccionSelectiva();
				break;
			case 3:
				return $this->getRtrTipoRecoleccionConjuntiva();
				break;
			case 4:
				return $this->getRtrDistanciaRecorridaSitioFinal();
				break;
			case 5:
				return $this->getRtrFrecuenciaServicioBarrido();
				break;
			case 6:
				return $this->getRtrFrecuenciaServicioRecoleccion();
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
		$keys = RecolecciontrasnporteaseoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getRtrId(),
			$keys[1] => $this->getRtrTopId(),
			$keys[2] => $this->getRtrTipoRecoleccionSelectiva(),
			$keys[3] => $this->getRtrTipoRecoleccionConjuntiva(),
			$keys[4] => $this->getRtrDistanciaRecorridaSitioFinal(),
			$keys[5] => $this->getRtrFrecuenciaServicioBarrido(),
			$keys[6] => $this->getRtrFrecuenciaServicioRecoleccion(),
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
		$pos = RecolecciontrasnporteaseoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setRtrId($value);
				break;
			case 1:
				$this->setRtrTopId($value);
				break;
			case 2:
				$this->setRtrTipoRecoleccionSelectiva($value);
				break;
			case 3:
				$this->setRtrTipoRecoleccionConjuntiva($value);
				break;
			case 4:
				$this->setRtrDistanciaRecorridaSitioFinal($value);
				break;
			case 5:
				$this->setRtrFrecuenciaServicioBarrido($value);
				break;
			case 6:
				$this->setRtrFrecuenciaServicioRecoleccion($value);
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
		$keys = RecolecciontrasnporteaseoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setRtrId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setRtrTopId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setRtrTipoRecoleccionSelectiva($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setRtrTipoRecoleccionConjuntiva($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setRtrDistanciaRecorridaSitioFinal($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setRtrFrecuenciaServicioBarrido($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setRtrFrecuenciaServicioRecoleccion($arr[$keys[6]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(RecolecciontrasnporteaseoPeer::DATABASE_NAME);

		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_ID)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_ID, $this->rtr_id);
		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_TOP_ID)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_TOP_ID, $this->rtr_top_id);
		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_TIPO_RECOLECCION_SELECTIVA)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_TIPO_RECOLECCION_SELECTIVA, $this->rtr_tipo_recoleccion_selectiva);
		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_TIPO_RECOLECCION_CONJUNTIVA)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_TIPO_RECOLECCION_CONJUNTIVA, $this->rtr_tipo_recoleccion_conjuntiva);
		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_DISTANCIA_RECORRIDA_SITIO_FINAL)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_DISTANCIA_RECORRIDA_SITIO_FINAL, $this->rtr_distancia_recorrida_sitio_final);
		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_FRECUENCIA_SERVICIO_BARRIDO)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_FRECUENCIA_SERVICIO_BARRIDO, $this->rtr_frecuencia_servicio_barrido);
		if ($this->isColumnModified(RecolecciontrasnporteaseoPeer::RTR_FRECUENCIA_SERVICIO_RECOLECCION)) $criteria->add(RecolecciontrasnporteaseoPeer::RTR_FRECUENCIA_SERVICIO_RECOLECCION, $this->rtr_frecuencia_servicio_recoleccion);

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
		$criteria = new Criteria(RecolecciontrasnporteaseoPeer::DATABASE_NAME);

		$criteria->add(RecolecciontrasnporteaseoPeer::RTR_ID, $this->rtr_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getRtrId();
	}

	/**
	 * Generic method to set the primary key (rtr_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setRtrId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Recolecciontrasnporteaseo (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setRtrTopId($this->rtr_top_id);

		$copyObj->setRtrTipoRecoleccionSelectiva($this->rtr_tipo_recoleccion_selectiva);

		$copyObj->setRtrTipoRecoleccionConjuntiva($this->rtr_tipo_recoleccion_conjuntiva);

		$copyObj->setRtrDistanciaRecorridaSitioFinal($this->rtr_distancia_recorrida_sitio_final);

		$copyObj->setRtrFrecuenciaServicioBarrido($this->rtr_frecuencia_servicio_barrido);

		$copyObj->setRtrFrecuenciaServicioRecoleccion($this->rtr_frecuencia_servicio_recoleccion);


		if ($deepCopy) {
			// important: temporarily setNew(false) because this affects the behavior of
			// the getter/setter methods for fkey referrer objects.
			$copyObj->setNew(false);

			foreach ($this->getVehiculorecoleccions() as $relObj) {
				if ($relObj !== $this) {  // ensure that we don't try to copy a reference to ourselves
					$copyObj->addVehiculorecoleccion($relObj->copy($deepCopy));
				}
			}

		} // if ($deepCopy)


		$copyObj->setNew(true);

		$copyObj->setRtrId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Recolecciontrasnporteaseo Clone of current object.
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
	 * @return     RecolecciontrasnporteaseoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new RecolecciontrasnporteaseoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Tecnicooperativo object.
	 *
	 * @param      Tecnicooperativo $v
	 * @return     Recolecciontrasnporteaseo The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setTecnicooperativo(Tecnicooperativo $v = null)
	{
		if ($v === null) {
			$this->setRtrTopId(NULL);
		} else {
			$this->setRtrTopId($v->getTopId());
		}

		$this->aTecnicooperativo = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Tecnicooperativo object, it will not be re-added.
		if ($v !== null) {
			$v->addRecolecciontrasnporteaseo($this);
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
		if ($this->aTecnicooperativo === null && ($this->rtr_top_id !== null)) {
			$this->aTecnicooperativo = TecnicooperativoPeer::retrieveByPk($this->rtr_top_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aTecnicooperativo->addRecolecciontrasnporteaseos($this);
			 */
		}
		return $this->aTecnicooperativo;
	}

	/**
	 * Clears out the collVehiculorecoleccions collection (array).
	 *
	 * This does not modify the database; however, it will remove any associated objects, causing
	 * them to be refetched by subsequent calls to accessor method.
	 *
	 * @return     void
	 * @see        addVehiculorecoleccions()
	 */
	public function clearVehiculorecoleccions()
	{
		$this->collVehiculorecoleccions = null; // important to set this to NULL since that means it is uninitialized
	}

	/**
	 * Initializes the collVehiculorecoleccions collection (array).
	 *
	 * By default this just sets the collVehiculorecoleccions collection to an empty array (like clearcollVehiculorecoleccions());
	 * however, you may wish to override this method in your stub class to provide setting appropriate
	 * to your application -- for example, setting the initial array to the values stored in database.
	 *
	 * @return     void
	 */
	public function initVehiculorecoleccions()
	{
		$this->collVehiculorecoleccions = array();
	}

	/**
	 * Gets an array of Vehiculorecoleccion objects which contain a foreign key that references this object.
	 *
	 * If this collection has already been initialized with an identical Criteria, it returns the collection.
	 * Otherwise if this Recolecciontrasnporteaseo has previously been saved, it will retrieve
	 * related Vehiculorecoleccions from storage. If this Recolecciontrasnporteaseo is new, it will return
	 * an empty collection or the current collection, the criteria is ignored on a new object.
	 *
	 * @param      PropelPDO $con
	 * @param      Criteria $criteria
	 * @return     array Vehiculorecoleccion[]
	 * @throws     PropelException
	 */
	public function getVehiculorecoleccions($criteria = null, PropelPDO $con = null)
	{
		if ($criteria === null) {
			$criteria = new Criteria(RecolecciontrasnporteaseoPeer::DATABASE_NAME);
		}
		elseif ($criteria instanceof Criteria)
		{
			$criteria = clone $criteria;
		}

		if ($this->collVehiculorecoleccions === null) {
			if ($this->isNew()) {
			   $this->collVehiculorecoleccions = array();
			} else {

				$criteria->add(VehiculorecoleccionPeer::VER_RTR_ID, $this->rtr_id);

				VehiculorecoleccionPeer::addSelectColumns($criteria);
				$this->collVehiculorecoleccions = VehiculorecoleccionPeer::doSelect($criteria, $con);
			}
		} else {
			// criteria has no effect for a new object
			if (!$this->isNew()) {
				// the following code is to determine if a new query is
				// called for.  If the criteria is the same as the last
				// one, just return the collection.


				$criteria->add(VehiculorecoleccionPeer::VER_RTR_ID, $this->rtr_id);

				VehiculorecoleccionPeer::addSelectColumns($criteria);
				if (!isset($this->lastVehiculorecoleccionCriteria) || !$this->lastVehiculorecoleccionCriteria->equals($criteria)) {
					$this->collVehiculorecoleccions = VehiculorecoleccionPeer::doSelect($criteria, $con);
				}
			}
		}
		$this->lastVehiculorecoleccionCriteria = $criteria;
		return $this->collVehiculorecoleccions;
	}

	/**
	 * Returns the number of related Vehiculorecoleccion objects.
	 *
	 * @param      Criteria $criteria
	 * @param      boolean $distinct
	 * @param      PropelPDO $con
	 * @return     int Count of related Vehiculorecoleccion objects.
	 * @throws     PropelException
	 */
	public function countVehiculorecoleccions(Criteria $criteria = null, $distinct = false, PropelPDO $con = null)
	{
		if ($criteria === null) {
			$criteria = new Criteria(RecolecciontrasnporteaseoPeer::DATABASE_NAME);
		} else {
			$criteria = clone $criteria;
		}

		if ($distinct) {
			$criteria->setDistinct();
		}

		$count = null;

		if ($this->collVehiculorecoleccions === null) {
			if ($this->isNew()) {
				$count = 0;
			} else {

				$criteria->add(VehiculorecoleccionPeer::VER_RTR_ID, $this->rtr_id);

				$count = VehiculorecoleccionPeer::doCount($criteria, false, $con);
			}
		} else {
			// criteria has no effect for a new object
			if (!$this->isNew()) {
				// the following code is to determine if a new query is
				// called for.  If the criteria is the same as the last
				// one, just return count of the collection.


				$criteria->add(VehiculorecoleccionPeer::VER_RTR_ID, $this->rtr_id);

				if (!isset($this->lastVehiculorecoleccionCriteria) || !$this->lastVehiculorecoleccionCriteria->equals($criteria)) {
					$count = VehiculorecoleccionPeer::doCount($criteria, false, $con);
				} else {
					$count = count($this->collVehiculorecoleccions);
				}
			} else {
				$count = count($this->collVehiculorecoleccions);
			}
		}
		return $count;
	}

	/**
	 * Method called to associate a Vehiculorecoleccion object to this object
	 * through the Vehiculorecoleccion foreign key attribute.
	 *
	 * @param      Vehiculorecoleccion $l Vehiculorecoleccion
	 * @return     void
	 * @throws     PropelException
	 */
	public function addVehiculorecoleccion(Vehiculorecoleccion $l)
	{
		if ($this->collVehiculorecoleccions === null) {
			$this->initVehiculorecoleccions();
		}
		if (!in_array($l, $this->collVehiculorecoleccions, true)) { // only add it if the **same** object is not already associated
			array_push($this->collVehiculorecoleccions, $l);
			$l->setRecolecciontrasnporteaseo($this);
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
			if ($this->collVehiculorecoleccions) {
				foreach ((array) $this->collVehiculorecoleccions as $o) {
					$o->clearAllReferences($deep);
				}
			}
		} // if ($deep)

		$this->collVehiculorecoleccions = null;
			$this->aTecnicooperativo = null;
	}

	// symfony_behaviors behavior
	
	/**
	 * Calls methods defined via {@link sfMixer}.
	 */
	public function __call($method, $arguments)
	{
	  if (!$callable = sfMixer::getCallable('BaseRecolecciontrasnporteaseo:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseRecolecciontrasnporteaseo::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseRecolecciontrasnporteaseo
