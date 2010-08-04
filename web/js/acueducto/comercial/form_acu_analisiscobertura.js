/*
ARC
desarrollado por maryit sanchez
2010
*/


	var acu_analisiscobertura_datos_datastore = new Ext.data.Store({
        id: 'acu_analisiscobertura_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_analisiscobertura/obtenerDatosAnalisiscobertura', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
				  {name: 'acu_aco_catastro_usuarios', type: 'int'},	    
				  {name: 'acu_aco_anio_ela_impl_catastro_usu', type: 'string'},
				  {name: 'acu_aco_num_predios_conec_sistema', type: 'string'},
				  {name: 'acu_aco_estrat_soceco_adop_mpio', type: 'int'},
				  {name: 'acu_aco_estra_soceco_adop_mpio_jus', type: 'string'},
				  {name: 'acu_aco_num_predios_area', type: 'string'},
		])
    });
	

	var acu_analisiscobertura_panel = new Ext.FormPanel({
		id: 'acu_analisiscobertura_panel',
	//	frame: true,
		hidden: false,
		autoWidth:true,
		height: largo_panel-15,
		layout:'form',
		bodyStyle: 'padding:10px;',
		items:
		[
			{
			   xtype: 'radiogroup',
			   labelStyle: 'width: 370px; '+letra,
			   itemCls: 'x-check-group-alt',
			   labelSeparator: '',		  
			   fieldLabel: '<html>&iquest;Se ha elaborado e implementado un catastro de usuarios?</html>',
			   id: 'acu_aco_catastro_usuarios',
			   columns: 1,
			   width:80,
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'acu_aco_catastro_usuarios', id:'acu_aco_catastro_usuarios_si',
					 inputValue: 1, checked: true
				  },
				  { 
					boxLabel: 'No', name: 'acu_aco_catastro_usuarios', id:'acu_aco_catastro_usuarios_no',
					inputValue: 0 
				  }
			   ],
			   listeners:{
			   'render': function() {
							ayuda('acu_aco_catastro_usuarios', ayuda_acu_aco_catastro_usuarios);
						}
			   }
			},
			{
				xtype: 'spinnerfield',
				fieldLabel: '<html>&iquest;En que a&ntilde;o lo implemento?</html>',
				name:'acu_aco_anio_ela_impl_catastro_usu',
				id:'acu_aco_anio_ela_impl_catastro_usu',
				labelStyle: 'width: 370px; text-align:right;'+letra,
				minValue: 2005,
				maxValue: 2040,
				value: 2010,
				accelerate: true,
				listeners:{
					'render': function() {
						ayuda('acu_aco_anio_ela_impl_catastro_usu', ayuda_acu_aco_anio_ela_impl_catastro_usu);
					}
				}
			},
			{
				xtype:'label',
				html:'<br/>'
			},
			{
			   xtype: 'numberfield',
			   labelStyle: 'width: 370px;'+letra,
			   fieldLabel: '<html>N&uacute;mero de predios en el &aacute;rea de prestaci&oacute;n del servicio p&uacute;blico domiciliario</html>',
			   name: 'acu_aco_num_predios_area',
			   id: 'acu_aco_num_predios_area',
			   emptyText: '0',
			   enableKeyEvents: true,
			   width: 120,
			   vtype: 'alphanum',
			   listeners:
			   {
			   'render': function() {
						ayuda('acu_aco_num_predios_area', ayuda_acu_aco_num_predios_area);
					}             
			   }
			},
			{
			   xtype: 'numberfield',
			   labelStyle: 'width: 370px;'+letra,
			   fieldLabel: '<html>N&uacute;mero de predios conectados al sistema</html>',
			   name: 'acu_aco_num_predios_conec_sistema',
			   id: 'acu_aco_num_predios_conec_sistema',
			   enableKeyEvents: true,
			   width: 120,
			   emptyText: '0',
			   listeners:
			   {
			   	'render': function() {
						ayuda('acu_aco_num_predios_conec_sistema', ayuda_acu_aco_num_predios_conec_sistema);
					},
				'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } } 
			   },
				vtype: 'alphanum'
			},
			{
			   xtype: 'radiogroup',
			   id: 'acu_aco_estrat_soceco_adop_mpio',
			   itemCls: 'x-check-group-alt',
			   labelSeparator: '',
			   columns: 1,
			   labelStyle: 'width: '+'370px;'+letra,//+'px;'+letra
			   fieldLabel: '<html>&iquest;Aplica la estratificaci&oacute;n socioecon&oacute;mica aplicada por el municipio de acuerdo con la metodolog&iacute;a del Departamento Nacional de Planeaci&oacute;n?</html>',
			   width:80,
			   items:
			   [
				  {
					 boxLabel: 'Si', 
					 name: 'acu_aco_estrat_soceco_adop_mpio',
					 id:'acu_aco_estrat_soceco_adop_mpio_si',
					 inputValue: 1,
					 checked: true,
					 listeners:
					 {
						'check' : function(radio, valor) 
						   {
								if (!valor)
								{
								Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').enable();
								}
								else {
								Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').reset();
								Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').disable();
								}
						   }                
					 }
				  },
				  { 
					 boxLabel: 'No', 
					 name: 'acu_aco_estrat_soceco_adop_mpio',
					 inputValue: 0,
					 id: 'acu_aco_estrat_soceco_adop_mpio_no' 
				  }
			   ],
			   listeners:
			   {
			   	'render': function() {
						ayuda('acu_aco_estrat_soceco_adop_mpio', ayuda_acu_aco_estrat_soceco_adop_mpio);
					}
			   },
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;text-align:right;'+letra,
			   fieldLabel: '<html>&iquest;Por qu&eacute; no?</html>',
			   name: 'acu_aco_estra_soceco_adop_mpio_jus',
			   id: 'acu_aco_estra_soceco_adop_mpio_jus',
			   disabled : true,
			   width: 300,
			   listeners:
			   {
			   	'render': function() {
						ayuda('acu_aco_estra_soceco_adop_mpio_jus', ayuda_acu_aco_estra_soceco_adop_mpio_jus);
					}
			   }
			}
	   ],
	   buttons:
	   [
		  {
			 text: '<html>Atr&aacute;s</html>',
			 iconCls:'atras',
			 disabled: false,
			 handler: function()
			 {
				// (Ext.getCmp('panel_servicios')).setActiveGroup(0);
				 Ext.getCmp('acueducto').setActiveTab(1);
			 }
		  },   
		  {
			 text: 'Continuar',
			 iconCls:'continuar',
			 handler: function()
			 {  
				acu_analisiscobertura_cargardatostemporal();
				var accion=acu_analisiscobertura_verfiricaraccion();
				if(accion=='crear' || accion=='actualizar')
				{
					acu_analisiscobertura_subirdatos(accion);
				}

				acu_analisiscobertura_estratos_gridpanel.show();
				acu_analisiscobertura_panel.hide();						
			 }
		  }      
	   ]
	});


/*****************************Formulario 2 estratos*********************************/
	var acu_analisiscobertura_estratos_datastore=new Ext.data.GroupingStore({
	        proxy: new Ext.data.HttpProxy({
		      url: 'acueducto_analisiscobertura/listarSuscritoresservicioacueducto',	
			  method: 'POST'
	        }),
	        baseParams:{},
			id:'acu_analisiscobertura_estratos_datastore',
			reader:new Ext.data.JsonReader({
			  root:'results',
			  totalProperty:'total',
			  id:'acu_id'},
			  [
			   {name:'acu_est_id'},
			   {name:'acu_est_nombre'},//esto es del estrato
			   {name:'acu_est_residencial'},//esto es del estrato
			   {name:'acu_ssacu_numero_suscriptores'},
			   {name:'acu_ssacu_tarifa_sin_medicion'},
			   {name:'acu_ssacu_cargo_fijo'},
			   {name:'acu_ssacu_tarifa_consumo_basico'},
			   {name:'acu_ssacu_tarifa_consumo_complementario'},
			   {name:'acu_ssacu_tarifa_consumo_suntuario'}
			  ]
			 ),
			sortInfo:{field: 'acu_est_nombre', direction: 'ASC'},	
		    groupField:'acu_est_residencial'
    });

	
	var acu_analisiscobertura_estratos_maxvalue=1000000000;
	var acu_analisiscobertura_estratos_colmodel = new Ext.grid.ColumnModel({
	  defaults:{sortable:false, allowBlank: false, allowNegative: false},
	  columns:[
		{header: "<html>Clasificaci&oacute;n</html>", width: 80,  sortable: true, dataIndex: 'acu_est_nombre'},
		{header: "<html>Clasificaci&oacute;n</html>", width: 80,  sortable: true, hidden:true, dataIndex: 'acu_est_residencial'},
        {header: "<html>N&uacute;mero de <br/>suscriptores</html>", width: 120, dataIndex: 'acu_ssacu_numero_suscriptores', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue:acu_analisiscobertura_estratos_maxvalue })},
        {header: "<html>Tarifa sin medici&oacute;n <br/>($/Suscr/mes)</html>", width: 100, dataIndex: 'acu_ssacu_tarifa_sin_medicion', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({  maxValue: acu_analisiscobertura_estratos_maxvalue})},
        {header: "Cargo fijo <br/>($/Suscr/mes)", width: 80, dataIndex: 'acu_ssacu_cargo_fijo', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({  maxValue: acu_analisiscobertura_estratos_maxvalue})},
        {header: "<html>Tarifa consumo <br/>b&aacute;sico</html> ($/m3)", width: 120, dataIndex: 'acu_ssacu_tarifa_consumo_basico', renderer: formatoNumeroCelda, 
           editor: new Ext.form.NumberField({  maxValue: acu_analisiscobertura_estratos_maxvalue})},
        {header: "Tarifa consumo <br/>complementario ($/m3)", width: 120, dataIndex: 'acu_ssacu_tarifa_consumo_complementario', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue: acu_analisiscobertura_estratos_maxvalue})},
        {header: "Tarifa consumo <br/>suntuario ($/m3)", width: 120, dataIndex: 'acu_ssacu_tarifa_consumo_suntuario', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue: acu_analisiscobertura_estratos_maxvalue})}                  
		]
	});

   	acu_analisiscobertura_estratos_datastore.load();
	
	var acu_analisiscobertura_estratos_roweditor = new Ext.ux.grid.RowEditor({
		saveText: 'Guardar',
		cancelText: 'Cancelar',
		commitChangesText: 'Debe terminar de editar los campos, o cancelar la edicion',
		errorText: 'Error'
	});

	acu_analisiscobertura_estratos_datastore.on('update',acu_analisiscobertura_estratos_actualizar);
	
	
	//grilla con lo modulos 
	var acu_analisiscobertura_estratos_gridpanel = new Ext.grid.GridPanel({
		id: 'acu_analisiscobertura_estratos_gridpanel',	
        hidden: true,
		columnLines : true,
		stripeRows:true,
		store: acu_analisiscobertura_estratos_datastore,
		cm: acu_analisiscobertura_estratos_colmodel,
		height: largo_panel-15,
		border: true,
		enableColLock:false,
		autoWidth: true,
	    wrap:true,
	    stripeRows: true,
	    clicksToEdit: 1,
	    title: 'An&aacute;lisis de cobertura: Suscriptores',
	    buttons:
	    [
		  {
			 text: '<html>Atr&aacute;s</html>',
			 disabled: false,
			 iconCls:'atras',
			 handler: function()
			 {
			 acu_analisiscobertura_estratos_gridpanel.hide();
			 acu_analisiscobertura_panel.show();
			 }
		  },
		  {
			 text: 'Continuar',
			 iconCls:'continuar',
			 handler: function()
			 {
			 acu_analisiscobertura_datos_datastore.reload();
			 acu_comercial_tabpanel.setActiveTab(1);		 
			 }
		  }      
	    ],
        view: new Ext.grid.GroupingView(),
		plugins:[acu_analisiscobertura_estratos_roweditor]
	});
	
   var acu_analisiscobertura_contenedor=new Ext.Panel({
    height:largo_panel-20,
	border:false,
	//frame:true,
	//title: 'An&aacute;lisis de cobertura',
	layout:'fit',
    items:[acu_analisiscobertura_panel,acu_analisiscobertura_estratos_gridpanel],
	renderTo:'div_form_acu_analisiscobertura'
   });

	//***************Funciones************///
    var acu_analisiscobertura_panel_datanuevo;
	var acu_analisiscobertura_panel_dataviejo=new Array();

	function acu_analisiscobertura_cargardatostemporal(){
	
		if(acu_analisiscobertura_panel_datanuevo)
		{
			acu_analisiscobertura_panel_dataviejo=acu_analisiscobertura_panel_datanuevo;
		}
		acu_analisiscobertura_panel_datanuevo=new Array();
		acu_analisiscobertura_panel_datanuevo['acu_aco_catastro_usuarios'] = Ext.getCmp('acu_aco_catastro_usuarios').getValue().getGroupValue();
		acu_analisiscobertura_panel_datanuevo['acu_aco_anio_ela_impl_catastro_usu'] = Ext.getCmp('acu_aco_anio_ela_impl_catastro_usu').getValue();
		acu_analisiscobertura_panel_datanuevo['acu_aco_num_predios_area'] = Ext.getCmp('acu_aco_num_predios_area').getValue();
		acu_analisiscobertura_panel_datanuevo['acu_aco_num_predios_conec_sistema'] = Ext.getCmp('acu_aco_num_predios_conec_sistema').getValue();
		acu_analisiscobertura_panel_datanuevo['acu_aco_estrat_soceco_adop_mpio'] = Ext.getCmp('acu_aco_estrat_soceco_adop_mpio').getValue().getGroupValue();
		acu_analisiscobertura_panel_datanuevo['acu_aco_estra_soceco_adop_mpio_jus'] = Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').getValue();
	}
	
	
	
	function acu_analisiscobertura_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_analisiscobertura_panel_dataviejo) // si existe el viejo, compare
		{
			if(acu_analisiscobertura_panel_datanuevo['acu_aco_catastro_usuarios'] != acu_analisiscobertura_panel_dataviejo['acu_aco_catastro_usuarios'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_panel_datanuevo['acu_aco_anio_ela_impl_catastro_usu'] != acu_analisiscobertura_panel_dataviejo['acu_aco_anio_ela_impl_catastro_usu'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_panel_datanuevo['acu_aco_num_predios_area'] != acu_analisiscobertura_panel_dataviejo['acu_aco_num_predios_area'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_panel_datanuevo['acu_aco_num_predios_conec_sistema'] != acu_analisiscobertura_panel_dataviejo['acu_aco_num_predios_conec_sistema'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_panel_datanuevo['acu_aco_estrat_soceco_adop_mpio'] != acu_analisiscobertura_panel_dataviejo['acu_aco_estrat_soceco_adop_mpio'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_panel_datanuevo['acu_aco_estra_soceco_adop_mpio_jus'] != acu_analisiscobertura_panel_dataviejo['acu_aco_estra_soceco_adop_mpio_jus'])
			{accion='actualizar';}
		}
		else
		{
			accion='crear';
		}
		return accion;
	}
	
	function acu_analisiscobertura_subirdatos(accion_realizar){
	
		acu_analisiscobertura_panel.getForm().submit({
			method: 'POST',
			url:'acueducto_analisiscobertura/actualizarAnalisisCobertura',
			params: {
				servicio:'acueducto'
			},
			waitTitle: 'Enviando',
			waitMsg: 'Enviando datos...',
			success: function(response, action)
			{
			  obj = Ext.util.JSON.decode(action.response.responseText);
			   mostrarMensajeRapido('Aviso',obj.mensaje);
			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText); 
					mostrarMensajeConfirmacion('Error',obj.errors.reason);
				}
			}
		});

	}
	
	acu_analisiscobertura_datos_datastore.load({
	  callback: function() {
		var record = acu_analisiscobertura_datos_datastore.getAt(0);
		acu_analisiscobertura_panel.getForm().loadRecord(record);	
	  }
	});

	function acu_analisiscobertura_estratos_actualizar(store,record,operation){

		 Ext.Ajax.request({
			waitMsg: 'Por Favor Espere...',
			url: 'acueducto_analisiscobertura/actualizarSuscriptoresservicioacueducto',
			method: 'POST',
			params: {
				acu_est_nombre:      record.data.acu_est_nombre,
				acu_est_residencial: record.data.acu_est_residencial,
				acu_ssacu_est_id:                record.data.acu_est_id,
				acu_ssacu_numero_suscriptores:   record.data.acu_ssacu_numero_suscriptores,
				acu_ssacu_tarifa_sin_medicion:   record.data.acu_ssacu_tarifa_sin_medicion,
				acu_ssacu_cargo_fijo:                    record.data.acu_ssacu_cargo_fijo,
				acu_ssacu_tarifa_consumo_basico:         record.data.acu_ssacu_tarifa_consumo_basico,
				acu_ssacu_tarifa_consumo_complementario: record.data.acu_ssacu_tarifa_consumo_complementario,
				acu_ssacu_tarifa_consumo_suntuario:      record.data.acu_ssacu_tarifa_consumo_suntuario
			},
			success: function(response, action)
			{
				//obj = Ext.util.JSON.decode(action.response.responseText);
				mostrarMensajeRapido('Aviso','La informacion del estrato fue actualizada');
			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText); 
					mostrarMensajeConfirmacion('Error','hubo un problema al tratar de guardar la configuracion del estrato');
				}
			}
		});
	}
