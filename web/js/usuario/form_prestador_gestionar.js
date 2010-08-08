	
	var prestador_gestionar_datastore = new Ext.data.JsonStore({	
		id: 'prestador_gestionar_datastore',
		url:'prestador_gestionar/listarPrestadores',
		root: 'results',
		baseParams:{},
		totalProperty: 'total',
		reader:new Ext.data.JsonReader({
			root:'results',
			totalProperty:'total',
			id:'id'}),
		fields:[
			{name: 'pre_id', type: 'int'},
			{name: 'pre_ran_id', type: 'string'},
			{name: 'pre_usu_id', type: 'int'},
			{name: 'pre_identificacion_prestador', type: 'string'},
			{name: 'pre_tipo_identificacion_prestador', type: 'string'},
			{name: 'pre_nombre_prestador', type: 'string'},
			{name: 'pre_estado', type: 'string'},//agregar este campo a la bd
			{name: 'pre_ser_acueducto', type: 'int'},//no permite asignar a la tabla prestadorporservicio
			{name: 'pre_ser_alcantarillado', type: 'int'},
			{name: 'pre_ser_aseo', type: 'int'}
		],
		sortInfo:{field: 'pre_nombre_prestador', direction: 'ASC'}	
	});
	prestador_gestionar_datastore.load({params: {start: 0, limit: 10}});
  
	var prestador_gestionar_columnmodel = new Ext.grid.ColumnModel({
	columns:[{
		header: 'id',dataIndex: 'pre_id',width: 60},{
		header: 'Nombre Prestador',dataIndex: 'pre_nombre_prestador',width: 100},{
		header: 'Identificaci&oacute;n Prestador',dataIndex: 'pre_identificacion_prestador',width: 100},{
		header: 'Tipo Identificaci&oacute;n',dataIndex: 'pre_tipo_identificacion_prestador',width: 120}
	],
	defaults:{sortable:true}});
	
	var prestador_gestionar_gridpanel =  new Ext.grid.GridPanel({
		columnWidth:'.5',
		region: 'center',
		height: largo_panel,
		frame: true,
		id: 'prestador_gestionar_gridpanel',
		cm: prestador_gestionar_columnmodel,
		stripeRows:true,
		ds: prestador_gestionar_datastore,
        title:'Lista de prestadores del sistema',
		border: true,
		bbar: new Ext.PagingToolbar({
								pageSize: 10,
								store: prestador_gestionar_datastore,
								displayInfo: true,
								displayMsg: 'Prestadores {0} - {1} de {2}',
								emptyMsg: "No hay Prestadores"
								}),
		listeners:  {
						render: function(g) {
							g.getSelectionModel().selectRow(0);
						},
						delay: 10
					},
		tbar:[
				{text: 'Nuevo',tooltip: 'Agregar un Prestadores',iconCls:'prestador_gestionar_nuevo_icono',handler:prestador_gestionar_agregar},
				//{text: 'Borrar',tooltip: 'Borra un Prestadores',iconCls:'prestador_gestionar_borrar_icono',handler:prestador_gestionar_confirmar_borrado},
				{text: '',tooltip: 'Prestadores habilitados',iconCls:'prestador_gestionar_habilitados_icono',
					handler: function()
					{
						prestador_gestionar_datastore.baseParams.pre_estado = 'habilitado';
						prestador_gestionar_datastore.load({params: {start: 0, limit: 10}});
					}
				},
				{text: '',tooltip: 'prestador_gestionars deshabilitados',iconCls:'prestador_gestionar_deshabilitados_icono',
					handler: function()
					{
						prestador_gestionar_datastore.baseParams.pre_estado = 'deshabilitado';
						prestador_gestionar_datastore.load({params: {start: 0, limit: 10}});
					}
				},
				{text: '',tooltip: 'Todos los prestador_gestionars',iconCls:'prestador_gestionar_todos_icono',
					handler: function()
					{
						prestador_gestionar_datastore.baseParams.pre_estado = '';
						prestador_gestionar_datastore.load({params: {start: 0, limit: 10}});
					}
				}
			],/*
		plugins:[new Ext.ux.grid.Search({
			mode:          'local',
			position:      top,
			searchText:    'Filtrar',
			iconCls:  'buscar',
			selectAllText: 'Seleccionar todos',
			searchTipText: 'Escriba el texto que desea buscar y presione la tecla enter',
			width:         100
		})],*/
		selModel: new Ext.grid.RowSelectionModel({
				singleSelect: true,
				listeners: {
				rowselect: function(sm, row, rec) {
					
					prestador_gestionar_formpanel.getForm().loadRecord(rec);
					pre_nombre_prestador_gestionar = Ext.getCmp('pre_nombre_prestador').getValue();
					titulo = 'Actualizar datos de '+pre_nombre_prestador_gestionar;
					Ext.getCmp('prestador_gestionar_guardar_boton').setText('Actualizar');
					Ext.getCmp('prestador_gestionar_formpanel').setTitle(titulo);
					Ext.getCmp('pre_nombre_prestador').setDisabled(false);
					
					Ext.getCmp('pre_tipo_identificacion_prestador').setDisabled(false);
					Ext.getCmp('pre_identificacion_prestador').setDisabled(false);
					Ext.getCmp('pre_servicios_fieldset').setDisabled(false);
					Ext.getCmp('pre_ran_tipo').setDisabled(false);
					Ext.getCmp('pre_usu_login').setDisabled(false);	

					//manejo de estado por defecto
					Ext.getCmp('pre_estado_habilitado').setDisabled(false);
					Ext.getCmp('pre_estado_deshabilitado').setDisabled(false);
					
				}
				}
		}),
		viewConfig: {
			forceFit:true,
			enableRowBody:true,
			showPreview:true,
			getRowClass: function(record, rowIndex, p, ds) {
					    return 'x-grid3-row-expanded';
				    }
		}

	});

	var  prestador_gestionar_usuarios_datastore = new Ext.data.JsonStore({
		id: ' prestador_gestionar_usuarios_datastore',
		url:'prestador_gestionar/listarUsuarios',
		root: 'results',
		baseParams:{},
		totalProperty: 'total',
		fields:[
			{name: 'usu_id', type: 'string'},
			{name: 'usu_login', type: 'string'},
		],
		sortInfo:{field: 'usu_login', direction: 'ASC'}
	});
	prestador_gestionar_usuarios_datastore.load();
	
	
	var  prestador_gestionar_rangos_datastore = new Ext.data.JsonStore({
		id: ' prestador_gestionar_rangos_datastore',
		url:'prestador_gestionar/listarRangos',
		root: 'results',
		baseParams:{},
		totalProperty: 'total',
		fields:[
			{name: 'ran_id', type: 'string'},
			{name: 'ran_tipo', type: 'string'},
		],
		sortInfo:{field: 'ran_tipo', direction: 'ASC'}
	});
	prestador_gestionar_rangos_datastore.load();
		
	var prestador_gestionar_tipos_identificacion_arraystore = new Ext.data.ArrayStore({
		fields: ['tipo'],
		data : [ ['Cedula'], ['Nit'], ['Pasaporte'], ['Rut'] ]
	});
	
	var prestador_gestionar_formpanel = new Ext.FormPanel({
		id: 'prestador_gestionar_formpanel',
		columnWidth: '.5',
		frame: true,
		labelAlign: 'left',
		title: 'Gestionar Datos de prestador',
		autoHeight:true,
		//height:largo_panel,
		bodyStyle: 'padding:5px',
		autoScroll: true,
		defaults: {  disabled:true, anchor:'90%',xtype:'textfield', labelStyle: 'width:140px;', boxMinWidth :90,boxMaxWidth:250},		
		layout: 'form',
		style: {"margin-left": "10px"},
		items: 
		[
			{fieldLabel: 'Id prestador',name: 'pre_id',id: 'pre_id',hidden:true, hideLabel:true,disabled:false},
			{fieldLabel: 'Nombre prestador',name: 'pre_nombre_prestador',id: 'pre_nombre_prestador',blankText: 'Este campo es obligatorio'},
			{
				allowBlank:false,
				xtype: 'combo',
				store:  prestador_gestionar_tipos_identificacion_arraystore,
				name: 'pre_tipo_identificacion_prestador',
				id: 'pre_tipo_identificacion_prestador',
				mode:'local', 
				valueField:'tipo',
				forceSelection:true,
				displayField: 'tipo',
				triggerAction: 'all',
				emptyText: 'Selecione....',
				selectOnFocus: true,
				fieldLabel: 'Tipo identificacion prestador'
			},
			{	
				allowBlank:false,
				fieldLabel: 'Identificacion prestador',
				name: 'pre_identificacion_prestador',
				id: 'pre_identificacion_prestador',
				blankText: 'Este campo es obligatorio'
			},
			{
				allowBlank:false,
				xtype: 'combo',
				store:  prestador_gestionar_rangos_datastore,
				hiddenName :'pre_ran_id',
				name: 'pre_ran_id',
				id: 'pre_ran_tipo',
				mode:'local', 
				valueField:'ran_id',
				forceSelection:true,
				displayField: 'ran_tipo',
				triggerAction: 'all',
				emptyText: 'Selecione....',
				selectOnFocus: true,
				fieldLabel: 'Rango de prestador'
			},
			{
				allowBlank:false,
				xtype: 'combo',
				store:  prestador_gestionar_usuarios_datastore,
				hiddenName :'pre_usu_id',
				name: 'pre_usu_id',
				id: 'pre_usu_login',
				mode:'local', 
				valueField:'usu_id',
				forceSelection:true,
				displayField: 'usu_login',
				triggerAction: 'all',
				emptyText: 'Selecione....',
				selectOnFocus: true,
				fieldLabel: 'Login usuario'
			},
			{
				allowBlank:false,
				xtype:      'radiogroup',
				fieldLabel: 'Estado de prestador',
				columns:1,
				id:'pre_estado',
				items: 
				[	
					{disabled:true,boxLabel:'Habilitado',name:'pre_estado',id:'pre_estado_habilitado',inputValue: 'habilitado'},
					{disabled:true,boxLabel:'Deshabilitado',name:'pre_estado',id:'pre_estado_deshabilitado',inputValue: 'deshabilitado'}
				]
			},//checks
			{
				xtype:'fieldset',
				title:'Servicios que presta',
				id:'pre_servicios_fieldset',
				boxMaxWidth:250,
				defaults:{hideLabel:true},
				items:
				[
					{	
						id: 'pre_ser_acueducto', 
						xtype:'checkbox',
						name:'pre_ser_acueducto',
						boxLabel:'Acueducto',
						inputValue: 1,
						listeners:
						{
							'render':function(){
								 ayuda('pre_ser_acueducto',ayuda_pre_ser_acueducto); 
								}
						}								
					},
					{	
						id: 'pre_ser_alcantarillado', 
						xtype:'checkbox',
						name:'pre_ser_alcantarillado',
						boxLabel:'Alcantarillado',
						inputValue: 1,
						listeners:
						{
							'render':function(){
								 ayuda('pre_ser_alcantarillado',ayuda_pre_ser_alcantarillado); 
								}
						}								
					},
					{	
						id: 'pre_ser_aseo', 
						xtype:'checkbox',
						name:'pre_ser_aseo',
						boxLabel:'Aseo',
						inputValue: 1,
						listeners:
						{
							'render':function(){
								 ayuda('pre_ser_aseo',ayuda_pre_ser_aseo); 
								}
						}								
					}
				]
			}	
		],
		buttons:[
				{text:'Actualizar',align:'center',id: 'prestador_gestionar_guardar_boton',iconCls:'prestador_gestionar_actualizar_icono',handler:prestador_gestionar_actualizar},
				{text:'Limpiar',align:'center',id: 'prestador_gestionar_limpiar_boton',iconCls:'prestador_gestionar_limpiar_icono',
				  handler:function()
					{ 
						prestador_gestionar_formpanel.getForm().reset();
					}}
			]
	});

	var prestador_gestionar_contenedor = new Ext.Panel({
        monitorResize:true,  
		labelAlign: 'left',
		height: largo_panel,
		layout:'column',
		items: 
		[prestador_gestionar_gridpanel,prestador_gestionar_formpanel],
		renderTo:'div_prestador_gestionar'
	});

/*************************************/
/*Aqui tenemos el manejo de eventos tanto de crear , actualizar, eliminar*/
/*************************************/
	function prestador_gestionar_agregar(formulario,accion)
	{
		prestador_gestionar_maskara = new Ext.LoadMask(prestador_gestionar_formpanel.getEl(), {msg:'Cargando...',removeMask: true});
		prestador_gestionar_maskara.show();
		setTimeout('prestador_gestionar_maskara.hide()',500);
		var prestador_gestionar_titulo_Panel = 'Nuevo Prestador';
		Ext.getCmp('prestador_gestionar_formpanel').setTitle(prestador_gestionar_titulo_Panel);
		prestador_gestionar_formpanel.getForm().reset();

		Ext.getCmp('pre_nombre_prestador').setDisabled(false);
		Ext.getCmp('pre_tipo_identificacion_prestador').setDisabled(false);
		Ext.getCmp('pre_identificacion_prestador').setDisabled(false);
		Ext.getCmp('pre_servicios_fieldset').setDisabled(false);
		Ext.getCmp('pre_ran_tipo').setDisabled(false);
		Ext.getCmp('pre_usu_login').setDisabled(false);	

		//manejo de estado por defecto
		Ext.getCmp('pre_estado_habilitado').setDisabled(false);
		Ext.getCmp('pre_estado_deshabilitado').setDisabled(false);
		Ext.getCmp('pre_estado_habilitado').setValue(true);
		Ext.getCmp('pre_estado_deshabilitado').setValue(false);
		Ext.getCmp('prestador_gestionar_guardar_boton').setText('Crear');
	}

	function prestador_gestionar_actualizar(formulario,accion)
	{
	  var verificacion =prestador_gestionar_verificarcampos(); 

		if(verificacion)
		{
			var task = 'crearPrestador';
		  
			if (Ext.getCmp('prestador_gestionar_guardar_boton').getText() == 'Actualizar')
			{
				task = 'actualizarPrestador';
			}
		  
			prestador_gestionar_formpanel.getForm().submit({
				method: 'POST',
				url:'prestador_gestionar/'+task,
				waitTitle: 'Enviando',
				waitMsg: 'Enviando datos...',
				success: function(response, action)
				{
					obj = Ext.util.JSON.decode(action.response.responseText);
					mostrarMensajeRapido('Aviso',obj.mensaje);
					
					prestador_gestionar_datastore.baseParams.pre_estado = '';
					prestador_gestionar_datastore.load({params: {start: 0, limit: 10}});
				},
				failure: function(form, action, response)
				{
					if(action.failureType == 'server'){
						obj = Ext.util.JSON.decode(action.response.responseText); 
						mostrarMensajeConfirmacion(obj.errors.reason);
					}
				  
				}
			});
		    		
		
	  }
	}

	function prestador_gestionar_confirmar_borrado()
	{
		if(prestador_gestionar_gridpanel.selModel.getCount() == 1)
		{
			Ext.MessageBox.confirm('Confirmacion','¿Desea borrar este prestador?', prestador_gestionar_borrar);
		} else {
			Ext.MessageBox.alert('Advertencia','Usted no puede borrar un prestador que no ha sido seleccionado');
		}
	}

	function prestador_gestionar_borrar(boton){
		if(boton=='yes'){
		
			var selections = prestador_gestionar_gridpanel.selModel.getSelections();
			var prestadores_selecionados = [];
			var fila=prestador_gestionar_gridpanel.selModel.getSelected();
			
			var identificador=fila.get('usu_id');
			prestadores_selecionados.push(identificador);
			var encoded_array = Ext.encode(prestadores_selecionados);
			
			Ext.Ajax.request({  
				waitMsg: 'Por Favor Espere...',
				url:'prestador_gestionar/eliminarPrestador',
   				params: { 
					ids_prestadores:  encoded_array
				}, 
				success: function(response){
					obj = Ext.util.JSON.decode(response.responseText);
					if (obj.success)
					{
						mostrarMensajeRapido('Aviso',obj.mensaje);
						prestador_gestionar_datastore.reload();
					}
					else if (obj.success == false)
					{
						mostrarMensajeRapido('Aviso',obj.errors.reason);
					}
				},
				failure: function(response){
					var result=response.responseText;
					mostrarMensajeConfirmacion('Error','No se pudo conectar con la base de datos');
				}
			});
		}
	}
	
	function prestador_gestionar_verificarcampos(){
	var valido=true;
	

	return valido;
	}
	
