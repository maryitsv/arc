
	
	var acu_fuentes_abastecenelsistema_datos_datastore = new Ext.data.Store({
        id: 'acu_fuentes_abastecenelsistema_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_fuentes/obtenerDatosFuentes', 
                method: 'POST'
        }),
        baseParams:{formulario:'abastecenElSistema'}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_fue_tiene_fuentes_superficiales', type: 'int'},	    
                  {name: 'acu_fue_tiene_fuentes_subterraneas', type: 'int'},
				  {name: 'acu_fue_compra_agua_bloque', type: 'int'},
				  {name: 'acu_fue_numero_fuentes_subterraneas', type: 'int'},
				  {name: 'acu_fue_numero_fuentes_superficiales', type: 'int'},
				  {name: 'acu_fue_metodo_aforo_micromolinete', type: 'int'},
				  {name: 'acu_fue_metodo_aforo_volumetrico', type: 'int'},
				  {name: 'acu_fue_metodo_aforo_velocidad', type: 'int'},
				  {name: 'acu_fue_metodo_aforo_otro_cual', type: 'string'},
				  {name: 'acu_fue_cumple_permisos', type: 'int'}
		])
    });
	
	var acu_fuentes_abastecenelsistema_panel = new Ext.FormPanel({
		id:'acu_fuentes_abastecenelsistema_panel',
		frame: false,
		border:false,
		autoWidth: true,
		height: largo_panel-15,
		layout:'column',
		bodyStyle: 'padding:10px;',
		defaults:{  anchor:'98%'},
		items:
		[    
			{
				xtype:'fieldset',
				title:'Fuentes que abastecen el sistema',
				layout:'column',
				columnWidth:'.58',
				bodyStyle: 'padding:10px;',
				defaults:{layout:'form',border:false},
				items:
				[
					{
						width:220,
						defaults:{labelStyle: 'width:160px;'+letra},
						items:
						[	{xtype: 'label', html: '<html>Existencia de este tipo de fuente?</html>', cls:'x-form-check-group-label'},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_tiene_fuentes_superficiales',
								id:   'acu_fue_tiene_fuentes_superficiales',
								inputValue: 1,
								fieldLabel: '<html>Fuentes superficiales</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_tiene_fuentes_superficiales',ayuda_acu_fue_tiene_fuentes_superficiales);
									},
									'check':function( chekbox , cheked){
										if(!cheked){
											Ext.getCmp('acu_fue_numero_fuentes_superficiales').reset();
										}
										Ext.getCmp('acu_fue_numero_fuentes_superficiales').setDisabled(!cheked);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_tiene_fuentes_subterraneas',
								id:   'acu_fue_tiene_fuentes_subterraneas',
								inputValue: 1,
								fieldLabel: '<html>Fuentes subterraneas</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_tiene_fuentes_subterraneas',ayuda_acu_fue_tiene_fuentes_subterraneas);
									},
									'check':function( chekbox , cheked){
										if(!cheked){
											Ext.getCmp('acu_fue_numero_fuentes_subterraneas').reset();
										}
										Ext.getCmp('acu_fue_numero_fuentes_subterraneas').setDisabled(!cheked);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_compra_agua_bloque',
								id:   'acu_fue_compra_agua_bloque',
								inputValue: 1,
								fieldLabel: '<html>Compra agua en bloque</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_compra_agua_bloque',ayuda_acu_fue_compra_agua_bloque);
									}
								}
							}
						]
					},{
						width:110,
						defaults:{width:100,hideLabel:true},
						items:
						[	
							{xtype: 'label', text: 'Cantidad', cls:'x-form-check-group-label'},
							{
							   xtype: 'numberfield',
							   disabled:true,
							   name: 'acu_fue_numero_fuentes_superficiales',
							   id: 'acu_fue_numero_fuentes_superficiales',
							   listeners:
							   {
									'render': function() {
											ayuda('acu_fue_numero_fuentes_superficiales', ayuda_acu_fue_numero_fuentes_superficiales);
											}
								}
							},
							{
							   xtype: 'numberfield',
							   disabled:true,
							   name: 'acu_fue_numero_fuentes_subterraneas',
							   id: 'acu_fue_numero_fuentes_subterraneas',
							   listeners:
							   {
									'render': function() {
											ayuda('acu_fue_numero_fuentes_subterraneas', ayuda_acu_fue_numero_fuentes_subterraneas);
											}
								}
							}
						]
					}
				]
			},
			{
				columnWidth:'.02',
				bodyStyle: 'padding-left:10px;padding-right:10px;',
			},
			{
				xtype:'fieldset',
				title:'Metodo de aforo',
				layout:'column',
				columnWidth:'.4',
				defaults:{layout:'form',border:false},
				items:
				[
					{
					//	width:220,
						bodyStyle: 'padding:5px;',
						defaults:{labelStyle: 'width:100px;'+letra},
						items:
						[	
							{
								xtype: 'checkbox', 
								name: 'acu_fue_metodo_aforo_volumetrico',
								id:   'acu_fue_metodo_aforo_volumetrico',
								inputValue: 1,
								fieldLabel: '<html>Volumetrico</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_volumetrico',ayuda_acu_fue_metodo_aforo_volumetrico);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_metodo_aforo_micromolinete',
								id:   'acu_fue_metodo_aforo_micromolinete',
								inputValue: 1,
								fieldLabel: '<html>Micromolinete</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_micromolinete',ayuda_acu_fue_metodo_aforo_micromolinete);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_metodo_aforo_velocidad',
								id:   'acu_fue_metodo_aforo_velocidad',
								inputValue: 1,
								fieldLabel: '<html>Velocidad</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_velocidad',ayuda_acu_fue_metodo_aforo_velocidad);
									}
								}
							},
							{
								xtype: 'textfield', 
								name: 'acu_fue_metodo_aforo_otro_cual',
								id:   'acu_fue_metodo_aforo_otro_cual',
								fieldLabel: '<html>Otro</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_otro_cual',ayuda_acu_fue_metodo_aforo_otro_cual);
									}
								}
							}
						]
					}
				]
			},
			{
				bodyStyle: 'padding-top:10px;',
				items:[
				{
					xtype:'fieldset',
					bodyStyle: 'padding-top:5px;',
					title:'Aspectos legales',
					border:false,
					layout:'form',
					columnWidth:'1',
					defaults:{layout:'form',border:false},
					items:
					[
						{
							xtipe:'label',
							labelStyle: 'width:150px;'+letra,
							html: '<html>Cumple con los permisos de acuerdo con el Art&iacute;culo 25 de la Ley 142 de 1994?</html>'
						},
						{
							xtype: 'radiogroup',
							id:'acu_fue_cumple_permisos',
							width:100,
							hideLabel:true,
							columns: 2,
							items:
							[
								{
								 boxLabel: 'Si', name: 'acu_fue_cumple_permisos',id:'acu_fue_cumple_permisos_si', 
								 checked: true, inputValue:1,
								},
								{ 
								boxLabel: 'No', name: 'acu_fue_cumple_permisos',id:'acu_fue_cumple_permisos_no',
								inputValue:0 
								}
							],
							listeners:
							{
							'render': function() {
									ayuda('acu_fue_cumple_permisos', ayuda_acu_fue_cumple_permisos);
									}
							}
						}
					]
				}]
			}
		],
		buttons:
		[
		  {
			 text: '<html>Atr&aacute;s</html>',
			 iconCls:'atras',
			 handler: function()
			 {
				acu_microcuenca_tabpanel.setActiveTab(0);
			 }
		  },
		  {
			 text: 'Continuar',
			 iconCls:'continuar',
			 handler: function()
			 {
				
				acu_fuentes_abastecenelsistema_cargardatostemporal();
				var accion=acu_fuentes_abastecenelsistema_verfiricaraccion();
				
				if(accion=='crear' || accion=='actualizar')
				{
					acu_fuentes_abastecenelsistema_subirdatos(accion);
				}
				 
				acu_fuentes_abastecenelsistema_panel.hide();
				acu_fuentessuperficiales_gridpanel.show();
				
			 }
		  }      
		]
	});
	
	/*Funciones abastecimiento del sistema*/
    var acu_fuentes_abastecenelsistema_panel_datanuevo;
	var acu_fuentes_abastecenelsistema_panel_dataviejo=new Array();

	
	function acu_fuentes_abastecenelsistema_cargardatostemporal(){
	
		if(acu_fuentes_abastecenelsistema_panel_datanuevo)
		{
			acu_fuentes_abastecenelsistema_panel_dataviejo=acu_fuentes_abastecenelsistema_panel_datanuevo;
		}
		acu_fuentes_abastecenelsistema_panel_datanuevo=new Array();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_tiene_fuentes_superficiales'] = Ext.getCmp('acu_fue_tiene_fuentes_superficiales').getValue();
		
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_tiene_fuentes_subterraneas'] =Ext.getCmp('acu_fue_tiene_fuentes_subterraneas').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_compra_agua_bloque'] = Ext.getCmp('acu_fue_compra_agua_bloque').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_numero_fuentes_subterraneas'] = Ext.getCmp('acu_fue_numero_fuentes_subterraneas').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_numero_fuentes_superficiales'] = Ext.getCmp('acu_fue_numero_fuentes_superficiales').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_micromolinete'] = Ext.getCmp('acu_fue_metodo_aforo_micromolinete').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_volumetrico'] = Ext.getCmp('acu_fue_metodo_aforo_volumetrico').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_velocidad'] = Ext.getCmp('acu_fue_metodo_aforo_velocidad').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_otro_cual'] = Ext.getCmp('acu_fue_metodo_aforo_otro_cual').getValue();
		acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_cumple_permisos'] = Ext.getCmp('acu_fue_cumple_permisos').getValue().getGroupValue();
		
	}
	
	function acu_fuentes_abastecenelsistema_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_fuentes_abastecenelsistema_panel_dataviejo) // si existe el viejo, compare
		{
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_tiene_fuentes_superficiales'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_tiene_fuentes_superficiales'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_tiene_fuentes_subterraneas'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_tiene_fuentes_subterraneas'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_compra_agua_bloque'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_compra_agua_bloque'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_numero_fuentes_subterraneas'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_numero_fuentes_subterraneas'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_numero_fuentes_superficiales'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_numero_fuentes_superficiales'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_micromolinete'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_metodo_aforo_micromolinete'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_volumetrico'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_metodo_aforo_volumetrico'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_velocidad'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_metodo_aforo_velocidad'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_metodo_aforo_otro_cual'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_metodo_aforo_otro_cual'])
			{accion='actualizar';}
			
			if(acu_fuentes_abastecenelsistema_panel_datanuevo['acu_fue_cumple_permisos'] != acu_fuentes_abastecenelsistema_panel_dataviejo['acu_fue_cumple_permisos'])
			{accion='actualizar';}			
		}
		else
		{
			accion='crear';
		}
			
		return accion;
	}
	
	function acu_fuentes_abastecenelsistema_subirdatos(accion_realizar){
		subirDatos(
			acu_fuentes_abastecenelsistema_panel,
			'acueducto_fuentes/actualizarFuentes',
			{formulario:'abastecenElSistema'},
			function(){}
		);
		
	}
	
	
acu_fuentes_abastecenelsistema_datos_datastore.load({
  callback: function() {
	var record = acu_fuentes_abastecenelsistema_datos_datastore.getAt(0);
	acu_fuentes_abastecenelsistema_panel.getForm().loadRecord(record);	
  }
});

	
/****************************************Fuentes superficiales*****************/
	var acu_fuentes_superficiales_datastore=new Ext.data.Store({
	        proxy: new Ext.data.HttpProxy({
		      url: 'acueducto_fuentes/listarFuentessuperficiales',	
			  method: 'POST'
	        }),
	        baseParams:{},
			id:'acu_fuentes_superficiales_datastore',
			reader:new Ext.data.JsonReader({
			  root:'results',
			  totalProperty:'total',
			  id:'acu_id'},
			  [
				{type: 'int', name: 'acu_fsp_id'},
				{type: 'string', name: 'acu_fsp_nombre_fuente'},
				{type: 'string', name: 'acu_fsp_tipo_fuente'},
				{type: 'float', name: 'acu_fsp_epoca_lluvia_caudal_captado'},
				{type: 'float', name: 'acu_fsp_epoca_lluvia_caudal_total'},
				{type: 'float', name: 'acu_fsp_epoca_seca_caudal_captado'},
				{type: 'float', name: 'acu_fsp_epoca_seca_caudal_total'},
				{type: 'string', name: 'acu_fsp_entidad_expidio_concesion'},
				{type: 'date', name: 'acu_fsp_fecha_expedicion_concesion',dateFormat: 'Y-m-d'},
				{type: 'date', name: 'acu_fsp_fecha_vencimiento_concesion',dateFormat: 'Y-m-d'},
				{type: 'float', name: 'acu_fsp_caudal_adjudicado_concesion'}
			  ]
			 ),
			sortInfo:{field: 'acu_fsp_nombre_fuente', direction: 'ASC'}
    });

	function formatDate(value){
        return value ? value.dateFormat('Y-m-d') : '';
    }
	
	var acu_fuentessuperficiales_tipo_fuente_data = [
	   ['Nacimiento'],
	   ['Quebrada o R&iacute;o'],
	   ['Lago o Reservorio'],
	   ['Mar']
	];
	
	var acu_fuentessuperficiales_tipo_fuente_datastore = new Ext.data.SimpleStore({
		fields: ['tipofuente'],
		data : acu_fuentessuperficiales_tipo_fuente_data
	});

	var acu_fuentessuperficiales_tipo_fuente_combobox = new Ext.form.ComboBox({
		store: acu_fuentessuperficiales_tipo_fuente_datastore,
		displayField: 'tipofuente',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		emptyText: 'Selecciona...',
		selectOnFocus: true
	});
	
	var acu_fuentessuperficiales_autoridadambiental_datastore= new Ext.data.Store({
		id: 'acu_fuentessuperficiales_autoridadambiental_datastore',
		proxy: new Ext.data.HttpProxy({
			url: 'acueducto_fuentes/listarAutoridadesambientales', 
			method: 'POST'
			}),
		baseParams:{}, 
		reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},
			[{name: 'aua_id'},{name: 'aua_nombre'}]),
		sortInfo:{field: 'aua_nombre', direction: "ASC"}
    });
	acu_fuentessuperficiales_autoridadambiental_datastore.load();
	
	var acu_fuentessuperficiales_autoridadambiental_combobox = new Ext.form.ComboBox({
		store: acu_fuentessuperficiales_autoridadambiental_datastore,
		displayField: 'aua_nombre',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		emptyText: 'Selecciona...',
		selectOnFocus: true
	});
	
	var acu_fuentes_superficiales_colmodel = new Ext.grid.ColumnModel({
	  defaults:{sortable:false, allowBlank: false, allowNegative: false},
	  columns:[
		        	{dataIndex: 'acu_fsp_nombre_fuente', header: 'Nombre',
					editor: new Ext.form.TextField({allowBlank: false}),
					tooltip:'Nombre de la fuente'
				},
				{dataIndex: 'acu_fsp_tipo_fuente', header: 'Tipo',
					editor: acu_fuentessuperficiales_tipo_fuente_combobox,
					tooltip:'Tipo de fuente superficial'
				},
				{dataIndex: 'acu_fsp_epoca_lluvia_caudal_captado', header: 'Caudal captado',
					editor: new Ext.form.NumberField({allowBlank: false,allowNegative: false,maxValue: 100000})
				},
				{dataIndex: 'acu_fsp_epoca_lluvia_caudal_total', header: 'Caudal total',
					editor: new Ext.form.NumberField({allowBlank: false,allowNegative: false,maxValue: 100000})
				},
				{dataIndex: 'acu_fsp_epoca_seca_caudal_captado', header: 'Caudal captado',
					editor: new Ext.form.NumberField({allowBlank: false,allowNegative: false,maxValue: 100000})
				},
				{dataIndex: 'acu_fsp_epoca_seca_caudal_total', header: 'Caudal total',
					editor: new Ext.form.NumberField({allowBlank: false,allowNegative: false,maxValue: 100000})
				},			
				{dataIndex: 'acu_fsp_entidad_expidio_concesion', header: 'Entidad expidio',
					editor: acu_fuentessuperficiales_autoridadambiental_combobox,
					tooltip:'Entidad que expidio la concesion'
				},
				{
					header: 'Fecha expedicion',dataIndex: 'acu_fsp_fecha_expedicion_concesion',
					width: 95,renderer: formatDate,
					format: 'Y-m-d',xtype: 'datecolumn',
					editor: new  Ext.form.DateField({
						format: 'Y-m-d'
					}),
					tooltip:'Fecha de expidici&oacute;n de la concesi&oacute;n de aguas'
				},
				{dataIndex: 'acu_fsp_fecha_vencimiento_concesion', header: 'Fecha vencimiento',
					format:'Y-m-d',xtype: 'datecolumn',
					editor: {xtype: 'datefield',format:'Y-m-d'},
					tooltip:'Fecha de vencimiento de la concesi&oacute;n'
				},
				{dataIndex: 'acu_fsp_caudal_adjudicado_concesion', header: 'Caudal adjudicado (l/s)',
					editor: new Ext.form.NumberField({allowNegative: false,maxValue: 100000}),
					tooltip:'Caudal adjudicado en la concesi&oacute;n'
				}
		]
	});

   	acu_fuentes_superficiales_datastore.load();
	
    //esto es para las multiples columnas
    var acu_fuentessuperficiales_nombreCampos = [
			{header: 'Datos de la Fuente', colspan:2 , align: 'center'},
			{header: 'Epoca de lluvia', colspan: 2, align: 'center'},
			{header: 'Epoca seca', colspan: 2, align: 'center'},
			{header: 'Aspectos legales', colspan: 4, align: 'center'},
     ];
    //este es el plugin de las multiples columnas
    var acu_fuentessuperficiales_group = new Ext.ux.grid.ColumnHeaderGroup({
        rows: [ acu_fuentessuperficiales_nombreCampos]
    });
    
	var acu_fuentessuperficiales_roweditor = new Ext.ux.grid.RowEditor({
		saveText: 'Guardar',
		cancelText: 'Cancelar',
		commitChangesText: 'Debe terminar de editar los campos, o cancelar la edicion',
		errorText: 'Error'
	});
	
    var acu_fuentessuperficiales_gridpanel = new Ext.grid.GridPanel({
		frame: true,
		hidden:true,
        title: 'Fuentes superficiales de agua',
		id:'acu_fuentessuperficiales_grid',
		autoWidth:true,
		clicksToEdit: 1,
        height: largo_panel-15,
        store:acu_fuentes_superficiales_datastore,
        cm: acu_fuentes_superficiales_colmodel,
        viewConfig: {
            forceFit: true
        },
		tbar:
		[
			{
				text:'Agregar',
				tooltip:'Agregar otra fuente',
				iconCls:'agregar',
				handler:acu_fuentessuperficiales_agregarfuente
			},'-'
		],
		bbar:
		[	'->',
			{
				text: '<html>Atr&aacute;s<html>',
				iconCls:'atras',
				handler:function(){
				acu_fuentes_abastecenelsistema_panel.show();
				acu_fuentessuperficiales_grid.hide();
				
				}
			},
			{
				text: 'Continuar',
				iconCls:'continuar',
				handler:function(){
				
				acu_fuentessuperficiales_gridpanel.hide();
				acu_fuentessubterraneas_gridpanel.show();
				}
			}
		],
        plugins: [acu_fuentessuperficiales_group,acu_fuentessuperficiales_roweditor]
    }); 
	acu_fuentes_superficiales_datastore.on('update',acu_fuentes_superficiales_actualizar);
	
	
	/*****Funciones fuentes superficiales*/
	
	function acu_fuentes_superficiales_actualizar(store,record,operation){

		 Ext.Ajax.request({
			waitMsg: 'Por Favor Espere...',
			url: 'acueducto_fuentes/actualizarFuentessuperficiales',
			method: 'POST',
			params: {
				acu_fsp_id:            record.data.acu_fsp_id,
				acu_fsp_nombre_fuente: record.data.acu_fsp_nombre_fuente,
				acu_fsp_tipo_fuente:   record.data.acu_fsp_tipo_fuente,
				acu_fsp_epoca_lluvia_caudal_captado: record.data.acu_fsp_epoca_lluvia_caudal_captado,
				acu_fsp_epoca_lluvia_caudal_total:   record.data.acu_fsp_epoca_lluvia_caudal_total,
				acu_fsp_epoca_seca_caudal_captado:   record.data.acu_fsp_epoca_seca_caudal_captado,
				acu_fsp_epoca_seca_caudal_total:     record.data.acu_fsp_epoca_seca_caudal_total,
				acu_fsp_entidad_expidio_concesion:   record.data.acu_fsp_entidad_expidio_concesion,
				acu_fsp_fecha_expedicion_concesion:  record.data.acu_fsp_fecha_expedicion_concesion.format('Y-m-d'),
				acu_fsp_fecha_vencimiento_concesion: record.data.acu_fsp_fecha_vencimiento_concesion.format('Y-m-d'),
				acu_fsp_caudal_adjudicado_concesion: record.data.acu_fsp_caudal_adjudicado_concesion
			},
			success: function(response, action)
			{
				mostrarMensajeRapido('Aviso','La informacion de fuentes superficiales fue actualizado exitosamente');
			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					mostrarMensajeConfirmacion('Error','Hubo un problema al tratar de guardar esta fuente');
				}
			}
		});
	}
	function acu_fuentessuperficiales_agregarfuente(btn, ev) {
		var row = new acu_fuentessuperficiales_gridpanel.store.recordType({
			acu_fsp_nombre_fuente : 'Nombre fuente',
			acu_fsp_tipo_fuente: '',
			acu_fsp_epoca_lluvia_caudal_captado : '0',
			acu_fsp_epoca_lluvia_caudal_total : '0',
			acu_fsp_epoca_seca_caudal_captado: '0',
			acu_fsp_epoca_seca_caudal_total : '0',
			acu_fsp_entidad_expidio_concesion : '0',
			acu_fsp_fecha_expedicion_concesion: '',
			acu_fsp_fecha_vencimiento_concesion : '',
			acu_fsp_caudal_adjudicado_concesion : '0'
		});
		acu_fuentessuperficiales_roweditor.stopEditing();
		acu_fuentessuperficiales_gridpanel.store.insert(0, row);
		acu_fuentessuperficiales_roweditor.startEditing(0);
	}
/*****************Fuentes subterraneas***************/
	var acu_fuentes_subterraneas_datastore=new Ext.data.Store({
	        proxy: new Ext.data.HttpProxy({
		      url: 'acueducto_fuentes/listarFuentessubterraneas',	
			  method: 'POST'
	        }),
	        baseParams:{},
			id:'acu_fuentes_subterraneas_datastore',
			reader:new Ext.data.JsonReader({
			  root:'results',
			  totalProperty:'total',
			  id:'acu_id'},
			  [
				{type: 'int', name: 'acu_fsu_id'},
				{type: 'string', name: 'acu_fsu_nombre_fuente'},

				{type: 'float', name: 'acu_fsu_promedio_captacion'},
				{type: 'string', name: 'acu_fsu_entidad_expidio_concesion'},
				{type: 'date', name: 'acu_fsu_fecha_expedicion_concesion',dateFormat: 'Y-m-d'},
				{type: 'date', name: 'acu_fsu_fecha_vencimiento_concesion',dateFormat: 'Y-m-d'},
				{type: 'float', name: 'acu_fsu_caudal_adjudicado_concesion'}
			  ]
			 ),
			sortInfo:{field: 'acu_fsu_nombre_fuente', direction: 'ASC'}
    });

	
	var acu_fuentessubterraneas_autoridadambiental_datastore= new Ext.data.Store({
		id: 'acu_fuentessubterraneas_autoridadambiental_datastore',
		proxy: new Ext.data.HttpProxy({
			url: 'acueducto_fuentes/listarAutoridadesambientales', 
			method: 'POST'
			}),
		baseParams:{}, 
		reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},
			[{name: 'aua_id'},{name: 'aua_nombre'}]),
		sortInfo:{field: 'aua_nombre', direction: "ASC"}
    });
	acu_fuentessubterraneas_autoridadambiental_datastore.load();
	
	var acu_fuentessubterraneas_autoridadambiental_combobox = new Ext.form.ComboBox({
		store: acu_fuentessubterraneas_autoridadambiental_datastore,
		displayField: 'aua_nombre',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		emptyText: 'Selecciona...',
		selectOnFocus: true
	});
	
	var acu_fuentes_subterraneas_colmodel = new Ext.grid.ColumnModel({
	  defaults:{sortable:false, allowBlank: false, allowNegative: false},
	  columns:[
		        	{	
					dataIndex: 'acu_fsu_nombre_fuente', 
					header: 'Nombre',
					editor: new Ext.form.TextField({allowBlank: false}),
					tooltip:'Nombre de la fuente'
				},		
		        	{
					dataIndex: 'acu_fsu_promedio_captacion', 
					header: 'Promedio captaci&oacute;n',
					editor: new Ext.form.NumberField({allowNegative: false,maxValue: 100000}),
					tooltip:'Nombre de la fuente'
				},		
				{
					dataIndex: 'acu_fsu_entidad_expidio_concesion', 
					header: 'Entidad expidio',
					editor: acu_fuentessubterraneas_autoridadambiental_combobox,
					tooltip:'Entidad que expidio la concesion'
				},
				{
					header: 'Fecha expedicion',
					dataIndex: 'acu_fsu_fecha_expedicion_concesion',
					width: 95,renderer: formatDate,
					format: 'Y-m-d',xtype: 'datecolumn',
					editor: new  Ext.form.DateField({
						format: 'Y-m-d'
					}),
					tooltip:'Fecha de expidici&oacute;n de la concesi&oacute;n de aguas'
				},
				{
					dataIndex: 'acu_fsu_fecha_vencimiento_concesion', 
					header: 'Fecha vencimiento',
					format:'Y-m-d',xtype: 'datecolumn',
					editor: {xtype: 'datefield',format:'Y-m-d'},
					tooltip:'Fecha de vencimiento de la concesi&oacute;n'
				},
				{
					dataIndex: 'acu_fsu_caudal_adjudicado_concesion', 
					header: 'Caudal adjudicado (l/s)',
					editor: new Ext.form.NumberField({allowNegative: false,maxValue: 100000}),
					tooltip:'Caudal adjudicado en la concesi&oacute;n'
				}
		]
	});

   	acu_fuentes_subterraneas_datastore.load();
	
    //esto es para las multiples columnas
	var acu_fuentessubterraneas_nombreCampos = [
		{header: 'Datos de la Fuente', colspan:2 , align: 'center'},
		{header: 'Aspectos legales', colspan: 4, align: 'center'}
	];

	var acu_fuentessubterraneas_group = new Ext.ux.grid.ColumnHeaderGroup({
		rows: [ acu_fuentessubterraneas_nombreCampos]
	});
    
	var acu_fuentessubterraneas_roweditor = new Ext.ux.grid.RowEditor({
		saveText: 'Guardar',
		cancelText: 'Cancelar',
		commitChangesText: 'Debe terminar de editar los campos, o cancelar la edicion',
		errorText: 'Error'
	});
	
    var acu_fuentessubterraneas_gridpanel = new Ext.grid.GridPanel({
		frame: true,
		hidden:true,
		title: 'Fuentes subterraneas de agua',
		id:'acu_fuentessubterraneas_grid',
		autoWidth:true,
		clicksToEdit: 1,
		height: largo_panel-15,
		store:acu_fuentes_subterraneas_datastore,
		cm: acu_fuentes_subterraneas_colmodel,
		viewConfig: {
		    forceFit: true
		},
		tbar:
		[
			{
				text:'Agregar',
				tooltip:'Agregar otra fuente',
				iconCls:'agregar',
				handler:acu_fuentessubterraneas_agregarfuente
			},'-'
		],
		bbar:
		[	'->',
			{
				text: '<html>Atr&aacute;s<html>',
				iconCls:'atras',
				handler:function(){
				acu_fuentessuperficiales_gridpanel.show();
				acu_fuentessubterraneas_gridpanel.hide();
				
				}
			},
			{
				text: 'Continuar',
				iconCls:'continuar',
				handler:function(){
				
				acu_microcuenca_tabpanel.setActiveTab(2);
				}
			}
		],
        plugins: [acu_fuentessubterraneas_group,
		acu_fuentessubterraneas_roweditor]
    }); 
	acu_fuentes_subterraneas_datastore.on('update',acu_fuentes_subterraneas_actualizar);
	
	
	/*****Funciones fuentes subterraneas*/
	
	function acu_fuentes_subterraneas_actualizar(store,record,operation){

		 Ext.Ajax.request({
			waitMsg: 'Por Favor Espere...',
			url: 'acueducto_fuentes/actualizarFuentessubterraneas',
			method: 'POST',
			params: {
				acu_fsu_id:            record.data.acu_fsu_id,
				acu_fsu_nombre_fuente: record.data.acu_fsu_nombre_fuente,
				acu_fsu_promedio_captacion:   record.data.acu_fsu_promedio_captacion,
				acu_fsu_entidad_expidio_concesion:   record.data.acu_fsu_entidad_expidio_concesion,
				acu_fsu_fecha_expedicion_concesion:  record.data.acu_fsu_fecha_expedicion_concesion.format('Y-m-d'),
				acu_fsu_fecha_vencimiento_concesion: record.data.acu_fsu_fecha_vencimiento_concesion.format('Y-m-d'),
				acu_fsu_caudal_adjudicado_concesion: record.data.acu_fsu_caudal_adjudicado_concesion
			},
			success: function(response, action)
			{
				mostrarMensajeRapido('Aviso','La informacion de fuentes subterraneas fue actualizado exitosamente');
			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					mostrarMensajeConfirmacion('Error','Hubo un problema al tratar de guardar esta fuente');
				}
			}
		});
	}

	function acu_fuentessubterraneas_agregarfuente(btn, ev) {
		var row = new acu_fuentessubterraneas_gridpanel.store.recordType({
			acu_fsu_nombre_fuente : 'Nombre fuente',
			acu_fsu_promedio_captacion: '0',
			acu_fsu_entidad_expidio_concesion : '0',
			acu_fsu_fecha_expedicion_concesion: '',
			acu_fsu_fecha_vencimiento_concesion : '',
			acu_fsu_caudal_adjudicado_concesion : '0'
		});
		acu_fuentessubterraneas_roweditor.stopEditing();
		acu_fuentessubterraneas_gridpanel.store.insert(0, row);
		acu_fuentessubterraneas_roweditor.startEditing(0);
	}

	
	/*****************Contenedor de panels*********************/
	
   var acu_fuentes_contenedor=new Ext.Panel({
    height:largo_panel-15,
	border:false,
	layout:'fit',
    items:
	[	
		acu_fuentes_abastecenelsistema_panel,
		acu_fuentessuperficiales_gridpanel,
		acu_fuentessubterraneas_gridpanel
	],
	renderTo:'div_form_acu_fuentes'
   });

