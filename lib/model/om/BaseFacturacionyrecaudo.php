<?php

/**
 * Base class that represents a row from the 'facturacionyrecaudo' table.
 *
 * 
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * 07/28/10 21:52:36
 *
 * @package    lib.model.om
 */
abstract class BaseFacturacionyrecaudo extends BaseObject  implements Persistent {


	/**
	 * The Peer class.
	 * Instance provides a convenient way of calling static methods on a class
	 * that calling code may not be able to identify.
	 * @var        FacturacionyrecaudoPeer
	 */
	protected static $peer;

	/**
	 * The value for the fac_id field.
	 * @var        int
	 */
	protected $fac_id;

	/**
	 * The value for the fac_com_id field.
	 * @var        int
	 */
	protected $fac_com_id;

	/**
	 * The value for the fac_frecuencia_del_servicio field.
	 * @var        string
	 */
	protected $fac_frecuencia_del_servicio;

	/**
	 * The value for the fac_frecuenc_facturacion field.
	 * @var        string
	 */
	protected $fac_frecuenc_facturacion;

	/**
	 * The value for the fac_frecuenc_fac_justificacion field.
	 * @var        string
	 */
	protected $fac_frecuenc_fac_justificacion;

	/**
	 * The value for the fac_num_fac_exp_ultimo_periodo field.
	 * @var        int
	 */
	protected $fac_num_fac_exp_ultimo_periodo;

	/**
	 * The value for the fac_sist_fac_utilizado field.
	 * @var        string
	 */
	protected $fac_sist_fac_utilizado;

	/**
	 * The value for the fac_frecuencia_fac_justifica field.
	 * @var        string
	 */
	protected $fac_frecuencia_fac_justifica;

	/**
	 * The value for the fac_morosidad_promedio field.
	 * @var        string
	 */
	protected $fac_morosidad_promedio;

	/**
	 * The value for the fac_vol_agua_fac_en_el_anio_acu field.
	 * @var        string
	 */
	protected $fac_vol_agua_fac_en_el_anio_acu;

	/**
	 * The value for the fac_vol_agua_suministrado_anio_acu field.
	 * @var        string
	 */
	protected $fac_vol_agua_suministrado_anio_acu;

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
	
	const PEER = 'FacturacionyrecaudoPeer';

	/**
	 * Get the [fac_id] column value.
	 * 
	 * @return     int
	 */
	public function getFacId()
	{
		return $this->fac_id;
	}

	/**
	 * Get the [fac_com_id] column value.
	 * 
	 * @return     int
	 */
	public function getFacComId()
	{
		return $this->fac_com_id;
	}

	/**
	 * Get the [fac_frecuencia_del_servicio] column value.
	 * 
	 * @return     string
	 */
	public function getFacFrecuenciaDelServicio()
	{
		return $this->fac_frecuencia_del_servicio;
	}

	/**
	 * Get the [fac_frecuenc_facturacion] column value.
	 * 
	 * @return     string
	 */
	public function getFacFrecuencFacturacion()
	{
		return $this->fac_frecuenc_facturacion;
	}

	/**
	 * Get the [fac_frecuenc_fac_justificacion] column value.
	 * 
	 * @return     string
	 */
	public function getFacFrecuencFacJustificacion()
	{
		return $this->fac_frecuenc_fac_justificacion;
	}

	/**
	 * Get the [fac_num_fac_exp_ultimo_periodo] column value.
	 * 
	 * @return     int
	 */
	public function getFacNumFacExpUltimoPeriodo()
	{
		return $this->fac_num_fac_exp_ultimo_periodo;
	}

	/**
	 * Get the [fac_sist_fac_utilizado] column value.
	 * 
	 * @return     string
	 */
	public function getFacSistFacUtilizado()
	{
		return $this->fac_sist_fac_utilizado;
	}

	/**
	 * Get the [fac_frecuencia_fac_justifica] column value.
	 * 
	 * @return     string
	 */
	public function getFacFrecuenciaFacJustifica()
	{
		return $this->fac_frecuencia_fac_justifica;
	}

	/**
	 * Get the [fac_morosidad_promedio] column value.
	 * 
	 * @return     string
	 */
	public function getFacMorosidadPromedio()
	{
		return $this->fac_morosidad_promedio;
	}

	/**
	 * Get the [fac_vol_agua_fac_en_el_anio_acu] column value.
	 * 
	 * @return     string
	 */
	public function getFacVolAguaFacEnElAnioAcu()
	{
		return $this->fac_vol_agua_fac_en_el_anio_acu;
	}

	/**
	 * Get the [fac_vol_agua_suministrado_anio_acu] column value.
	 * 
	 * @return     string
	 */
	public function getFacVolAguaSuministradoAnioAcu()
	{
		return $this->fac_vol_agua_suministrado_anio_acu;
	}

	/**
	 * Set the value of [fac_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->fac_id !== $v) {
			$this->fac_id = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_ID;
		}

		return $this;
	} // setFacId()

	/**
	 * Set the value of [fac_com_id] column.
	 * 
	 * @param      int $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacComId($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->fac_com_id !== $v) {
			$this->fac_com_id = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_COM_ID;
		}

		if ($this->aComercial !== null && $this->aComercial->getComId() !== $v) {
			$this->aComercial = null;
		}

		return $this;
	} // setFacComId()

	/**
	 * Set the value of [fac_frecuencia_del_servicio] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacFrecuenciaDelServicio($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_frecuencia_del_servicio !== $v) {
			$this->fac_frecuencia_del_servicio = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_FRECUENCIA_DEL_SERVICIO;
		}

		return $this;
	} // setFacFrecuenciaDelServicio()

	/**
	 * Set the value of [fac_frecuenc_facturacion] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacFrecuencFacturacion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_frecuenc_facturacion !== $v) {
			$this->fac_frecuenc_facturacion = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_FRECUENC_FACTURACION;
		}

		return $this;
	} // setFacFrecuencFacturacion()

	/**
	 * Set the value of [fac_frecuenc_fac_justificacion] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacFrecuencFacJustificacion($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_frecuenc_fac_justificacion !== $v) {
			$this->fac_frecuenc_fac_justificacion = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_FRECUENC_FAC_JUSTIFICACION;
		}

		return $this;
	} // setFacFrecuencFacJustificacion()

	/**
	 * Set the value of [fac_num_fac_exp_ultimo_periodo] column.
	 * 
	 * @param      int $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacNumFacExpUltimoPeriodo($v)
	{
		if ($v !== null) {
			$v = (int) $v;
		}

		if ($this->fac_num_fac_exp_ultimo_periodo !== $v) {
			$this->fac_num_fac_exp_ultimo_periodo = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_NUM_FAC_EXP_ULTIMO_PERIODO;
		}

		return $this;
	} // setFacNumFacExpUltimoPeriodo()

	/**
	 * Set the value of [fac_sist_fac_utilizado] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacSistFacUtilizado($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_sist_fac_utilizado !== $v) {
			$this->fac_sist_fac_utilizado = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_SIST_FAC_UTILIZADO;
		}

		return $this;
	} // setFacSistFacUtilizado()

	/**
	 * Set the value of [fac_frecuencia_fac_justifica] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacFrecuenciaFacJustifica($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_frecuencia_fac_justifica !== $v) {
			$this->fac_frecuencia_fac_justifica = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_FRECUENCIA_FAC_JUSTIFICA;
		}

		return $this;
	} // setFacFrecuenciaFacJustifica()

	/**
	 * Set the value of [fac_morosidad_promedio] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacMorosidadPromedio($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_morosidad_promedio !== $v) {
			$this->fac_morosidad_promedio = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_MOROSIDAD_PROMEDIO;
		}

		return $this;
	} // setFacMorosidadPromedio()

	/**
	 * Set the value of [fac_vol_agua_fac_en_el_anio_acu] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacVolAguaFacEnElAnioAcu($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_vol_agua_fac_en_el_anio_acu !== $v) {
			$this->fac_vol_agua_fac_en_el_anio_acu = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_VOL_AGUA_FAC_EN_EL_ANIO_ACU;
		}

		return $this;
	} // setFacVolAguaFacEnElAnioAcu()

	/**
	 * Set the value of [fac_vol_agua_suministrado_anio_acu] column.
	 * 
	 * @param      string $v new value
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 */
	public function setFacVolAguaSuministradoAnioAcu($v)
	{
		if ($v !== null) {
			$v = (string) $v;
		}

		if ($this->fac_vol_agua_suministrado_anio_acu !== $v) {
			$this->fac_vol_agua_suministrado_anio_acu = $v;
			$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_VOL_AGUA_SUMINISTRADO_ANIO_ACU;
		}

		return $this;
	} // setFacVolAguaSuministradoAnioAcu()

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

			$this->fac_id = ($row[$startcol + 0] !== null) ? (int) $row[$startcol + 0] : null;
			$this->fac_com_id = ($row[$startcol + 1] !== null) ? (int) $row[$startcol + 1] : null;
			$this->fac_frecuencia_del_servicio = ($row[$startcol + 2] !== null) ? (string) $row[$startcol + 2] : null;
			$this->fac_frecuenc_facturacion = ($row[$startcol + 3] !== null) ? (string) $row[$startcol + 3] : null;
			$this->fac_frecuenc_fac_justificacion = ($row[$startcol + 4] !== null) ? (string) $row[$startcol + 4] : null;
			$this->fac_num_fac_exp_ultimo_periodo = ($row[$startcol + 5] !== null) ? (int) $row[$startcol + 5] : null;
			$this->fac_sist_fac_utilizado = ($row[$startcol + 6] !== null) ? (string) $row[$startcol + 6] : null;
			$this->fac_frecuencia_fac_justifica = ($row[$startcol + 7] !== null) ? (string) $row[$startcol + 7] : null;
			$this->fac_morosidad_promedio = ($row[$startcol + 8] !== null) ? (string) $row[$startcol + 8] : null;
			$this->fac_vol_agua_fac_en_el_anio_acu = ($row[$startcol + 9] !== null) ? (string) $row[$startcol + 9] : null;
			$this->fac_vol_agua_suministrado_anio_acu = ($row[$startcol + 10] !== null) ? (string) $row[$startcol + 10] : null;
			$this->resetModified();

			$this->setNew(false);

			if ($rehydrate) {
				$this->ensureConsistency();
			}

			// FIXME - using NUM_COLUMNS may be clearer.
			return $startcol + 11; // 11 = FacturacionyrecaudoPeer::NUM_COLUMNS - FacturacionyrecaudoPeer::NUM_LAZY_LOAD_COLUMNS).

		} catch (Exception $e) {
			throw new PropelException("Error populating Facturacionyrecaudo object", $e);
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

		if ($this->aComercial !== null && $this->fac_com_id !== $this->aComercial->getComId()) {
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
			$con = Propel::getConnection(FacturacionyrecaudoPeer::DATABASE_NAME, Propel::CONNECTION_READ);
		}

		// We don't need to alter the object instance pool; we're just modifying this instance
		// already in the pool.

		$stmt = FacturacionyrecaudoPeer::doSelectStmt($this->buildPkeyCriteria(), $con);
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
			$con = Propel::getConnection(FacturacionyrecaudoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		try {
			$ret = $this->preDelete($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseFacturacionyrecaudo:delete:pre') as $callable)
			{
			  if (call_user_func($callable, $this, $con))
			  {
			    $con->commit();
			
			    return;
			  }
			}

			if ($ret) {
				FacturacionyrecaudoPeer::doDelete($this, $con);
				$this->postDelete($con);
				// symfony_behaviors behavior
				foreach (sfMixer::getCallables('BaseFacturacionyrecaudo:delete:post') as $callable)
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
			$con = Propel::getConnection(FacturacionyrecaudoPeer::DATABASE_NAME, Propel::CONNECTION_WRITE);
		}
		
		$con->beginTransaction();
		$isInsert = $this->isNew();
		try {
			$ret = $this->preSave($con);
			// symfony_behaviors behavior
			foreach (sfMixer::getCallables('BaseFacturacionyrecaudo:save:pre') as $callable)
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
				foreach (sfMixer::getCallables('BaseFacturacionyrecaudo:save:post') as $callable)
				{
				  call_user_func($callable, $this, $con, $affectedRows);
				}

				FacturacionyrecaudoPeer::addInstanceToPool($this);
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
				$this->modifiedColumns[] = FacturacionyrecaudoPeer::FAC_ID;
			}

			// If this object has been modified, then save it to the database.
			if ($this->isModified()) {
				if ($this->isNew()) {
					$pk = FacturacionyrecaudoPeer::doInsert($this, $con);
					$affectedRows += 1; // we are assuming that there is only 1 row per doInsert() which
										 // should always be true here (even though technically
										 // BasePeer::doInsert() can insert multiple rows).

					$this->setFacId($pk);  //[IMV] update autoincrement primary key

					$this->setNew(false);
				} else {
					$affectedRows += FacturacionyrecaudoPeer::doUpdate($this, $con);
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


			if (($retval = FacturacionyrecaudoPeer::doValidate($this, $columns)) !== true) {
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
		$pos = FacturacionyrecaudoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				return $this->getFacId();
				break;
			case 1:
				return $this->getFacComId();
				break;
			case 2:
				return $this->getFacFrecuenciaDelServicio();
				break;
			case 3:
				return $this->getFacFrecuencFacturacion();
				break;
			case 4:
				return $this->getFacFrecuencFacJustificacion();
				break;
			case 5:
				return $this->getFacNumFacExpUltimoPeriodo();
				break;
			case 6:
				return $this->getFacSistFacUtilizado();
				break;
			case 7:
				return $this->getFacFrecuenciaFacJustifica();
				break;
			case 8:
				return $this->getFacMorosidadPromedio();
				break;
			case 9:
				return $this->getFacVolAguaFacEnElAnioAcu();
				break;
			case 10:
				return $this->getFacVolAguaSuministradoAnioAcu();
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
		$keys = FacturacionyrecaudoPeer::getFieldNames($keyType);
		$result = array(
			$keys[0] => $this->getFacId(),
			$keys[1] => $this->getFacComId(),
			$keys[2] => $this->getFacFrecuenciaDelServicio(),
			$keys[3] => $this->getFacFrecuencFacturacion(),
			$keys[4] => $this->getFacFrecuencFacJustificacion(),
			$keys[5] => $this->getFacNumFacExpUltimoPeriodo(),
			$keys[6] => $this->getFacSistFacUtilizado(),
			$keys[7] => $this->getFacFrecuenciaFacJustifica(),
			$keys[8] => $this->getFacMorosidadPromedio(),
			$keys[9] => $this->getFacVolAguaFacEnElAnioAcu(),
			$keys[10] => $this->getFacVolAguaSuministradoAnioAcu(),
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
		$pos = FacturacionyrecaudoPeer::translateFieldName($name, $type, BasePeer::TYPE_NUM);
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
				$this->setFacId($value);
				break;
			case 1:
				$this->setFacComId($value);
				break;
			case 2:
				$this->setFacFrecuenciaDelServicio($value);
				break;
			case 3:
				$this->setFacFrecuencFacturacion($value);
				break;
			case 4:
				$this->setFacFrecuencFacJustificacion($value);
				break;
			case 5:
				$this->setFacNumFacExpUltimoPeriodo($value);
				break;
			case 6:
				$this->setFacSistFacUtilizado($value);
				break;
			case 7:
				$this->setFacFrecuenciaFacJustifica($value);
				break;
			case 8:
				$this->setFacMorosidadPromedio($value);
				break;
			case 9:
				$this->setFacVolAguaFacEnElAnioAcu($value);
				break;
			case 10:
				$this->setFacVolAguaSuministradoAnioAcu($value);
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
		$keys = FacturacionyrecaudoPeer::getFieldNames($keyType);

		if (array_key_exists($keys[0], $arr)) $this->setFacId($arr[$keys[0]]);
		if (array_key_exists($keys[1], $arr)) $this->setFacComId($arr[$keys[1]]);
		if (array_key_exists($keys[2], $arr)) $this->setFacFrecuenciaDelServicio($arr[$keys[2]]);
		if (array_key_exists($keys[3], $arr)) $this->setFacFrecuencFacturacion($arr[$keys[3]]);
		if (array_key_exists($keys[4], $arr)) $this->setFacFrecuencFacJustificacion($arr[$keys[4]]);
		if (array_key_exists($keys[5], $arr)) $this->setFacNumFacExpUltimoPeriodo($arr[$keys[5]]);
		if (array_key_exists($keys[6], $arr)) $this->setFacSistFacUtilizado($arr[$keys[6]]);
		if (array_key_exists($keys[7], $arr)) $this->setFacFrecuenciaFacJustifica($arr[$keys[7]]);
		if (array_key_exists($keys[8], $arr)) $this->setFacMorosidadPromedio($arr[$keys[8]]);
		if (array_key_exists($keys[9], $arr)) $this->setFacVolAguaFacEnElAnioAcu($arr[$keys[9]]);
		if (array_key_exists($keys[10], $arr)) $this->setFacVolAguaSuministradoAnioAcu($arr[$keys[10]]);
	}

	/**
	 * Build a Criteria object containing the values of all modified columns in this object.
	 *
	 * @return     Criteria The Criteria object containing all modified values.
	 */
	public function buildCriteria()
	{
		$criteria = new Criteria(FacturacionyrecaudoPeer::DATABASE_NAME);

		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_ID)) $criteria->add(FacturacionyrecaudoPeer::FAC_ID, $this->fac_id);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_COM_ID)) $criteria->add(FacturacionyrecaudoPeer::FAC_COM_ID, $this->fac_com_id);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_FRECUENCIA_DEL_SERVICIO)) $criteria->add(FacturacionyrecaudoPeer::FAC_FRECUENCIA_DEL_SERVICIO, $this->fac_frecuencia_del_servicio);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_FRECUENC_FACTURACION)) $criteria->add(FacturacionyrecaudoPeer::FAC_FRECUENC_FACTURACION, $this->fac_frecuenc_facturacion);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_FRECUENC_FAC_JUSTIFICACION)) $criteria->add(FacturacionyrecaudoPeer::FAC_FRECUENC_FAC_JUSTIFICACION, $this->fac_frecuenc_fac_justificacion);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_NUM_FAC_EXP_ULTIMO_PERIODO)) $criteria->add(FacturacionyrecaudoPeer::FAC_NUM_FAC_EXP_ULTIMO_PERIODO, $this->fac_num_fac_exp_ultimo_periodo);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_SIST_FAC_UTILIZADO)) $criteria->add(FacturacionyrecaudoPeer::FAC_SIST_FAC_UTILIZADO, $this->fac_sist_fac_utilizado);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_FRECUENCIA_FAC_JUSTIFICA)) $criteria->add(FacturacionyrecaudoPeer::FAC_FRECUENCIA_FAC_JUSTIFICA, $this->fac_frecuencia_fac_justifica);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_MOROSIDAD_PROMEDIO)) $criteria->add(FacturacionyrecaudoPeer::FAC_MOROSIDAD_PROMEDIO, $this->fac_morosidad_promedio);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_VOL_AGUA_FAC_EN_EL_ANIO_ACU)) $criteria->add(FacturacionyrecaudoPeer::FAC_VOL_AGUA_FAC_EN_EL_ANIO_ACU, $this->fac_vol_agua_fac_en_el_anio_acu);
		if ($this->isColumnModified(FacturacionyrecaudoPeer::FAC_VOL_AGUA_SUMINISTRADO_ANIO_ACU)) $criteria->add(FacturacionyrecaudoPeer::FAC_VOL_AGUA_SUMINISTRADO_ANIO_ACU, $this->fac_vol_agua_suministrado_anio_acu);

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
		$criteria = new Criteria(FacturacionyrecaudoPeer::DATABASE_NAME);

		$criteria->add(FacturacionyrecaudoPeer::FAC_ID, $this->fac_id);

		return $criteria;
	}

	/**
	 * Returns the primary key for this object (row).
	 * @return     int
	 */
	public function getPrimaryKey()
	{
		return $this->getFacId();
	}

	/**
	 * Generic method to set the primary key (fac_id column).
	 *
	 * @param      int $key Primary key.
	 * @return     void
	 */
	public function setPrimaryKey($key)
	{
		$this->setFacId($key);
	}

	/**
	 * Sets contents of passed object to values from current object.
	 *
	 * If desired, this method can also make copies of all associated (fkey referrers)
	 * objects.
	 *
	 * @param      object $copyObj An object of Facturacionyrecaudo (or compatible) type.
	 * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
	 * @throws     PropelException
	 */
	public function copyInto($copyObj, $deepCopy = false)
	{

		$copyObj->setFacComId($this->fac_com_id);

		$copyObj->setFacFrecuenciaDelServicio($this->fac_frecuencia_del_servicio);

		$copyObj->setFacFrecuencFacturacion($this->fac_frecuenc_facturacion);

		$copyObj->setFacFrecuencFacJustificacion($this->fac_frecuenc_fac_justificacion);

		$copyObj->setFacNumFacExpUltimoPeriodo($this->fac_num_fac_exp_ultimo_periodo);

		$copyObj->setFacSistFacUtilizado($this->fac_sist_fac_utilizado);

		$copyObj->setFacFrecuenciaFacJustifica($this->fac_frecuencia_fac_justifica);

		$copyObj->setFacMorosidadPromedio($this->fac_morosidad_promedio);

		$copyObj->setFacVolAguaFacEnElAnioAcu($this->fac_vol_agua_fac_en_el_anio_acu);

		$copyObj->setFacVolAguaSuministradoAnioAcu($this->fac_vol_agua_suministrado_anio_acu);


		$copyObj->setNew(true);

		$copyObj->setFacId(NULL); // this is a auto-increment column, so set to default value

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
	 * @return     Facturacionyrecaudo Clone of current object.
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
	 * @return     FacturacionyrecaudoPeer
	 */
	public function getPeer()
	{
		if (self::$peer === null) {
			self::$peer = new FacturacionyrecaudoPeer();
		}
		return self::$peer;
	}

	/**
	 * Declares an association between this object and a Comercial object.
	 *
	 * @param      Comercial $v
	 * @return     Facturacionyrecaudo The current object (for fluent API support)
	 * @throws     PropelException
	 */
	public function setComercial(Comercial $v = null)
	{
		if ($v === null) {
			$this->setFacComId(NULL);
		} else {
			$this->setFacComId($v->getComId());
		}

		$this->aComercial = $v;

		// Add binding for other direction of this n:n relationship.
		// If this object has already been added to the Comercial object, it will not be re-added.
		if ($v !== null) {
			$v->addFacturacionyrecaudo($this);
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
		if ($this->aComercial === null && ($this->fac_com_id !== null)) {
			$this->aComercial = ComercialPeer::retrieveByPk($this->fac_com_id);
			/* The following can be used additionally to
			   guarantee the related object contains a reference
			   to this object.  This level of coupling may, however, be
			   undesirable since it could result in an only partially populated collection
			   in the referenced object.
			   $this->aComercial->addFacturacionyrecaudos($this);
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
	  if (!$callable = sfMixer::getCallable('BaseFacturacionyrecaudo:'.$method))
	  {
	    throw new sfException(sprintf('Call to undefined method BaseFacturacionyrecaudo::%s', $method));
	  }
	
	  array_unshift($arguments, $this);
	
	  return call_user_func_array($callable, $arguments);
	}

} // BaseFacturacionyrecaudo
