	var usu_clave_valor_trae='';
	
	var usuario_datastore = new Ext.data.JsonStore({	
		id: 'usuario_datastore',
		url:'usuario/cargar',
		root: 'results',
		baseParams:{task:'LISTARUSUARIOS'},
		totalProperty: 'total',
		reader:new Ext.data.JsonReader({
			root:'results',
			totalProperty:'total',
			id:'id'}),
		fields:[
			{name: 'usu_id', type: 'int'},
			{name: 'usu_login', type: 'string'},
			{name: 'usu_clave', type: 'string'},
			{name: 'usu_per_id', type: 'string'},
			{name: 'usu_estado', type: 'string'},
			{name: 'per_nombre', type: 'string'}
		],
		sortInfo:{field: 'usu_login', direction: 'ASC'}	
	});
	usuario_datastore.load({params: {start: 0, limit: 10}});
  
	var usuario_columnmodel = new Ext.grid.ColumnModel({
	columns:[{
		header: 'id',dataIndex: 'usu_id',width: 60},{
		header: 'Login',dataIndex: 'usu_login',width: 100},{
		header: 'Perfil',dataIndex: 'per_nombre',width: 100},{
		header: 'Estado',dataIndex: 'usu_estado',width: 120}
	],
	defaults:{sortable:true}});
	
	var usuario_gridpanel =  new Ext.grid.GridPanel({
		columnWidth:'.5',
		region: 'center',
		height: largo_panel-40,
		id: 'usuario_gridpanel',
		cm: usuario_columnmodel,
		stripeRows:true,
		ds: usuario_datastore,
        title:'Lista de usuarios del sistema',
		border: true,
		bbar: new Ext.PagingToolbar({
								pageSize: 10,
								store: usuario_datastore,
								displayInfo: true,
								displayMsg: 'Usuarios {0} - {1} de {2}',
								emptyMsg: "No hay Usuarios"
								}),
		listeners:  {
						render: function(g) {
							g.getSelectionModel().selectRow(0);
						},
						delay: 10
					},
		tbar:[
				{text: 'Nuevo',tooltip: 'Agregar un usuario',iconCls:'usuario_nuevo_icono',handler:usuario_agregar},
				{text: 'Borrar',tooltip: 'Borra un usuario',iconCls:'usuario_borrar_icono',handler:usuario_confirmar_borrado},
				{text: '',tooltip: 'Usuarios habilitados',iconCls:'usuario_habilitados_icono',
					handler: function()
					{
						usuario_datastore.baseParams.usu_estado = 'habilitado';
						usuario_datastore.load({params: {start: 0, limit: 10}});
					}
				},
				{text: '',tooltip: 'Usuarios deshabilitados',iconCls:'usuario_deshabilitados_icono',
					handler: function()
					{
						usuario_datastore.baseParams.usu_estado = 'deshabilitado';
						usuario_datastore.load({params: {start: 0, limit: 10}});
					}
				},
				{text: '',tooltip: 'Todos los usuarios',iconCls:'usuario_todos_icono',
					handler: function()
					{
						usuario_datastore.baseParams.usu_estado = '';
						usuario_datastore.load({params: {start: 0, limit: 10}});
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
					
					usuario_formpanel.getForm().loadRecord(rec);
					login_usuario = Ext.getCmp('usu_login').getValue();
					titulo = 'Actualizar datos de '+login_usuario;
					Ext.getCmp('usuario_guardar_boton').setText('Actualizar');
					Ext.getCmp('usuario_formpanel').setTitle(titulo);
					Ext.getCmp('usu_login').setDisabled(true);
					
					Ext.getCmp('usu_clave').setDisabled(false);
					Ext.getCmp('usu_reclave').setDisabled(false);
					Ext.getCmp('usu_reclave').setValue(rec.get('usu_clave'));
					usu_clave_valor_trae = rec.get('usu_clave');
                                        
					Ext.getCmp('usu_per_id').setDisabled(false);
					Ext.getCmp('usu_estado_habilitado').setDisabled(false);
					Ext.getCmp('usu_estado_deshabilitado').setDisabled(false);

					if(rec.get('usu_estado')=='habilitado')
					{
						Ext.getCmp('usu_estado_habilitado').setValue(true);
						Ext.getCmp('usu_estado_deshabilitado').setValue(false);
					}
					else 
					{
						Ext.getCmp('usu_estado_habilitado').setValue(false);
						Ext.getCmp('usu_estado_deshabilitado').setValue(true);
					}
				}
				}
		}),
		viewConfig: {
			forceFit:true,
			enableRowBody:true,
			showPreview:true,
			getRowClass: function(record, rowIndex, p, ds) {
					    return 'x-grid3-row-expanded';
					//return 'x-grid3-row-collapsed';
				    }
		}

	});


	var  usuario_perfil_datastore = new Ext.data.JsonStore({
		id: ' usuario_perfil_datastore',
		url:'usuario/cargar',
		root: 'results',
		baseParams:{task:'LISTARPERFILES'},
		totalProperty: 'total',
		fields:[
			{name: 'per_id', type: 'string'},
			{name: 'per_nombre', type: 'string'},
		],
		sortInfo:{field: 'per_nombre', direction: 'ASC'}
	});
	usuario_perfil_datastore.load();
  
	var usuario_formpanel = new Ext.FormPanel({
		id: 'usuario_formpanel',
		columnWidth: '.5',
		url: 'usuario/cargar',
		frame: true,
		labelAlign: 'left',
		title: 'Datos de usuario',
		autoHeight:true,
		//height: 500,//largo_panel-40,
		bodyStyle: 'padding:5px',
		autoScroll: true,
		defaults: { allowBlank:false, disabled:true, anchor:'98%',xtype:'textfield', labelWidth: 120},		
		layout: 'form',
		style: {"margin-left": "10px"},
		items: 
		[
			{xtype: 'label',html:'<center>Todos los campos son obligatorios<br/><br/></center>',style: 'font-size:8.5pt; color:#484848;font-weight: bold;'},
			{fieldLabel: 'Id de usuario',name: 'usu_id',id: 'usu_id'},
			{fieldLabel: 'Login de usuario',name: 'usu_login',id: 'usu_login',blankText: 'El login es obligatorio', vtype:'alphanum'},
			{fieldLabel: 'Clave de usuario',name: 'usu_clave',id: 'usu_clave',inputType:'password',blankText: 'La clave es obligatoria y debe tener minimo 8 digitos'},
			{fieldLabel: 'Repetir clave',name: 'usu_reclave',id: 'usu_reclave',initialPassField: 'usu_reclave',
			inputType:'password',blankText: 'Repetir la clave es obligatorio'},
			{
				xtype: 'combo',
				store:  usuario_perfil_datastore,
				hiddenName :'per_id',
				name: 'usu_per_id',
				id: 'usu_per_id',
				mode:'local', 
				valueField:'per_id',
				forceSelection:true,
				displayField: 'per_nombre',
				triggerAction: 'all',
				emptyText: 'Selecione....',
				selectOnFocus: true,
				fieldLabel: 'Perfil usuario'
			},
			{
				xtype:      'radiogroup',
				fieldLabel: 'Estado de usuario',
				columns:1,
				items: 
				[	
					{disabled:true,boxLabel:'Habilitado',name:'usu_estado',id:'usu_estado_habilitado',inputValue: 'habilitado'},
					{disabled:true,boxLabel:'Deshabilitado',name:'usu_estado',id:'usu_estado_deshabilitado',inputValue: 'deshabilitado'}
				]
			}
		],
		buttons:[
				{text:'Actualizar',align:'center',id: 'usuario_guardar_boton',iconCls:'usuario_actualizar_icono',handler:usuario_actualizar},
				{text:'Limpiar',align:'center',id: 'usuario_limpiar_boton',iconCls:'usuario_limpiar_icono',
				  handler:function()
					{ 
						usuario_formpanel.getForm().reset();
					}}
			]
	});

	var usuario_contenedor = new Ext.Panel({
		id: 'usuario_contenedor',
		url: 'usuario/cargar',
		frame: true,
                monitorResize:true,  
		labelAlign: 'left',
		title: 'Gesti&oacute;n de usuarios',
		bodyStyle:'padding:5px',
		autoScroll:true,
		layout:'column',
		items: 
		[usuario_gridpanel,usuario_formpanel],
		renderTo:'div_gestion_usuario'
	});

/*************************************/
/*Aqui tenemos el manejo de eventos tanto de crear , actualizar, eliminar*/
/*************************************/
	function usuario_agregar(formulario,accion)
	{
		  usuario_maskara = new Ext.LoadMask(usuario_formpanel.getEl(), {msg:'Cargando...',removeMask: true});
		  usuario_maskara.show();
		  setTimeout('usuario_maskara.hide()',500);
		  var usuario_titulo_Panel = 'Nuevo usuario';
		  Ext.getCmp('usuario_formpanel').setTitle(usuario_titulo_Panel);
		  usuario_formpanel.getForm().reset();
		  Ext.getCmp('usu_login').setDisabled(false);
		  Ext.getCmp('usu_clave').setDisabled(false);
		  Ext.getCmp('usu_reclave').setDisabled(false);
		  Ext.getCmp('usu_per_id').setDisabled(false);
		  
		//manejo de estado por defecto
		  Ext.getCmp('usu_estado_habilitado').setDisabled(false);
	  	  Ext.getCmp('usu_estado_deshabilitado').setDisabled(false);
		  Ext.getCmp('usu_estado_habilitado').setValue(true);
		  Ext.getCmp('usu_estado_deshabilitado').setValue(false);
		  Ext.getCmp('usuario_guardar_boton').setText('Crear');
	}

	function usuario_actualizar(formulario,accion)
	{
	  var verificacion =usuario_verificarcampos(); 

	  if(verificacion)
	  {
		  var claveEncrypt = '';
		  if(Ext.getCmp('usu_clave').getValue() != ''){
			if(usu_clave_valor_trae == Ext.getCmp('usu_clave').getValue() && Ext.getCmp('usuario_guardar_boton').getText() == 'Actualizar')
			{//este if es para ver si cambio la clave o no, si no la cambio no encripte
			claveEncrypt = Ext.getCmp('usu_clave').getValue();
			}
			else
			{//si la cambio o esta creando entonces encripte y mande
			claveEncrypt = hex_md5(Ext.getCmp('usu_clave').getValue());
			}

		  }
		  
		  if (Ext.getCmp('usuario_guardar_boton').getText() == 'Actualizar')
		  {
			  task = 'ACTUALIZARUSUARIO';
			  Ext.getCmp('usu_id').setDisabled(false);
			  Ext.getCmp('usu_login').setDisabled(false);
		  }
		  else
		  {
			  task = 'CREARUSUARIO';
		  }
		    Ext.getCmp('usu_clave').setDisabled(true);
		    Ext.getCmp('usu_reclave').setDisabled(true);
		  
		  usuario_formpanel.getForm().submit({
			  method: 'POST',
			  url:'usuario/cargar',
			  params: {
				task: task,
				usu_clave_encriptada:claveEncrypt
			  },
			  waitTitle: 'Enviando',
			  waitMsg: 'Enviando datos...',
			  success: function(response, action)
			  {
				obj = Ext.util.JSON.decode(action.response.responseText);
				mostrarMensajeRapido('Aviso',obj.mensaje);
				 // usuario_datastore.reload();
				usuario_datastore.baseParams.usu_estado = '';
				usuario_datastore.load({params: {start: 0, limit: 10}});
				Ext.getCmp('usu_id').setDisabled(true);
				if(task=='ACTUALIZARUSUARIO')
				{
				Ext.getCmp('usu_login').setDisabled(true);
				}
				else{
				usuario_formpanel.getForm().reset();
				}
				Ext.getCmp('usu_clave').setDisabled(false);
				Ext.getCmp('usu_reclave').setDisabled(false);
				
			  },
			  failure: function(form, action, response)
			  {
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText); 
					mostrarMensajeConfirmacion(obj.errors.reason);
				}
				  
				Ext.getCmp('usu_id').setDisabled(true);
				if(task=='ACTUALIZARUSUARIO')
				{
				Ext.getCmp('usu_login').setDisabled(true);
				}
				Ext.getCmp('usu_clave').setDisabled(false);
				Ext.getCmp('usu_reclave').setDisabled(false);
			  }
		  });
		    		
		
	  }
	}

	function usuario_confirmar_borrado()
	{
		if(usuario_gridpanel.selModel.getCount() == 1)
		{
			Ext.MessageBox.confirm('Confirmacion','Desea borrar este Usuario?', usuario_borrar);
		} else if(usuario_gridpanel.selModel.getCount() > 1){
			Ext.MessageBox.confirm('Confirmacion','Borrar estos Usuarios?', usuario_borrar);
		} else {
			Ext.MessageBox.alert('Advertencia','Usted no puede borrar un elemento que no ha sido seleccionado');
		}
	}

	function usuario_borrar(boton){
		if(boton=='yes'){
		
			var selections = usuario_gridpanel.selModel.getSelections();
			var usuariosSelecionados = [];
			var fila=usuario_gridpanel.selModel.getSelected();
			
			var identificador=fila.get('usu_id');
			usuariosSelecionados.push(identificador);
			var encoded_array = Ext.encode(usuariosSelecionados);
			Ext.Ajax.request({  
				waitMsg: 'Por Favor Espere...',
				url:'usuario/cargar',
   				params: { 
					task: "ELIMINARUSUARIO", 
					ids_usuarios:  encoded_array
				}, 
				success: function(response){
				obj = Ext.util.JSON.decode(response.responseText);
					if (obj.success)
					{
						mostrarMensajeRapido('Aviso',obj.mensaje);
						usuario_datastore.reload();
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
	
	function usuario_verificarcampos(){
		var valido=true;
	
		if(!(Ext.getCmp('usu_login').isValid()  && 
		     Ext.getCmp('usu_clave').isValid())) 
	 	{
	 		mostrarMensajeRapido('Aviso','Faltan campos por llenar');
	 		return false;
	 	}
		
		if(!(Ext.getCmp('usu_clave').getValue() == Ext.getCmp('usu_reclave').getValue())) 
	 	{mostrarMensajeConfirmacion('Aviso','La clave y la reclave deben ser iguales');
	 	return false;}
		
		if((Ext.getCmp('usu_clave').getValue()).length < 5) 
	 	{
	 	mostrarMensajeConfirmacion('Aviso','La clave debe tener minimo 5 digitos');
	 	return false;
	 	}
	 	
		if(!(Ext.getCmp('usu_per_id').validate())) 
	 	{
	 	mostrarMensajeConfirmacion('Aviso','Debe selecionar un perfil');
	 	return false;
	 	}

	return valido;
	}
	
