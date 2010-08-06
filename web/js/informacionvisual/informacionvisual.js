
	var informacionvisual_tipoarchivo_data = [
	   ['Mapa'],
	   ['Imagen'],
	   ['Otro']
	];
	
	var informacionvisual_tipoarchivo_datastore = new Ext.data.SimpleStore({
		fields: ['tipoarchivo'],
		data : informacionvisual_tipoarchivo_data
	});

	
   //CREACION DE FORMULARIO
	var informacionvisual_formpanel = new Ext.FormPanel({
		title:'Datos detallados de la informaci&oacute;n visual',
		columnWidth:'.4',
		height: largo_panel-15,
		frame:true,
		id:'informacionvisual_formpanel',
		fileUpload: true,
		defaults:{xtype:'textfield',anchor:'100%'},
		items:
		[
			{
				fieldLabel: 'Nombre',
				id: 'iv_nombre',
				name: 'iv_nombre',
				emptyText: 'Nombre del documento',
				maxLength: 100,
				maskRe: /([a-zA-Z0-9\s]+)$/,
				allowBlank: false
			},{
				xtype: 'fileuploadfield', 
				id: 'archivo', 
				emptyText: 'Seleccione un documento', 
				fieldLabel: 'Escojer',
				name: 'archivo',buttonText: '',allowBlank:false,
				buttonCfg: {iconCls: 'archivo'}
		  	},{
				xtype:'combo',
				allowBlank:false,
				store: informacionvisual_tipoarchivo_datastore,
				id:'iv_tipo',
				name:'iv_tipo',
				forceSelection:true,
				displayField: 'tipoarchivo',
				typeAhead: true,
				mode: 'local',
				triggerAction: 'all',
				fieldLabel: 'Tipo archivo',
				emptyText: 'Selecciona...',
				selectOnFocus: true
			},
			{
				fieldLabel: 'Descripcion',
				id:'iv_descripcion',
				name:'iv_descripcion',
				allowBlank:false,
				xtype: 'textarea',
				maxLength :200,
				emptyText:'Digite una breve descripcion del archivo'
			},{
				id:'iv_url',
				name: 'iv_url',
				xtype:'hidden'
			},{
				id:'iv_id',
				name: 'iv_id',
				xtype:'hidden'
			}
		],
		buttons:
		[
			{	
				text:'Nuevo',
				handler:informacionvisual_crear,
				id:'informacionvisual_crear_boton',
				iconCls:'nuevo_doc',
				tooltip:'Pulse aqui para guardar nuevos documentos'
			},{
				text:'Eliminar',
				disabled:true,
				id: 'informacionvisual_eliminar_boton',
				handler: informacionvisual_eliminar,
				iconCls: 'eliminar_doc',
				tooltip: 'Seleccione un documento y pulse aqui para eliminarlo'
			},{
				text:'Descargar',
				disabled:true,
				id:'informacionvisual_descargar_boton',
				handler: informacionvisual_descargar,
				iconCls: 'descargar_doc',
				tooltip: 'Seleccione un documento y pulse aqui para descargarlo'
			}
		]	
	});


//creacion grid
	var informacionvisual_datastore = new Ext.data.GroupingStore({
		id: 'informacionvisual_datastore',
		proxy: new Ext.data.HttpProxy({
			url: 'informacionvisual/listarInformacionvisual', 
			method: 'POST',
			limit: 10,
			star: 0
		}),
		baseParams:{}, 
		reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[ 
			{name: 'iv_id'},
			{name: 'iv_nombre'},
			{name: 'iv_tipo'},
			{name: 'iv_url'},
			{name: 'iv_descripcion'}	
		]),
		sortInfo:{field: 'iv_nombre', direction: "ASC"},
		groupField:'iv_tipo'
	});
	informacionvisual_datastore.load();

	function informacionvisual_ponericono(val,x,store)
	{
		var iv_url_imagen=store.data.iv_url;
		return '<img src="../'+iv_url_imagen+'" width=50 heigth=50/>';
	}
   
 	
	var informacionvisual_colmodel = new Ext.grid.ColumnModel({
	defaults:{sortable: true, locked: false, resizable: true},
	columns:[
		{id: 'imagen', header: "Imagen", width: 60, dataIndex: 'imagen', renderer: informacionvisual_ponericono},
		{ header: "Nombre",  dataIndex: 'iv_nombre'},
		{ header: "Tipo archivo", width: 70, dataIndex: 'iv_tipo'},
		{id: 'iv_descripcion', header: "Descripcion", width: 230,  dataIndex: 'iv_descripcion'}
	]
	});

	
    //CREACION DELA GRILLA
    //cargamos el modelo de la tabla
	var informacionvisual_gridpanel = new Ext.grid.GridPanel({
		id: 'informacionvisual_gridpanel',
		title:'Informacion visual existentes',
		columnWidth: '.6',
		//stripeRows:true,
		//frame: true,
		ds: informacionvisual_datastore,
		cm: informacionvisual_colmodel,
		sm: new Ext.grid.RowSelectionModel({
			singleSelect: true,
			listeners: {
				rowselect: function(sm, row, rec) {
					Ext.getCmp('informacionvisual_formpanel').getForm().loadRecord(rec);
					Ext.getCmp('informacionvisual_crear_boton').setText('Nuevo');
					Ext.getCmp('informacionvisual_eliminar_boton').setText('Eliminar');
					Ext.getCmp('informacionvisual_descargar_boton').setDisabled(false);
					Ext.getCmp('informacionvisual_eliminar_boton').setDisabled(false);
						
				}
			}
		}),
		autoExpandColumn: 'iv_descripcion',
		autoExpandMin: 200,
		height: largo_panel-40,
		listeners: {
			viewready: function(g) {
				g.getSelectionModel().selectRow(0);
			}
		},
		bbar: new Ext.PagingToolbar({
			pageSize: 10,
			store: informacionvisual_datastore,
			displayInfo: true,
			displayMsg: 'Informacion {0} - {1} de {2}',
			emptyMsg: "No hay informacion visual"
		}),
		view: new Ext.grid.GroupingView()
    	});
	
/*INTEGRACION AL CONTENEDOR*/
	var informacionvisual_contenedor_panel = new Ext.Panel({
		id: 'informacionvisual_contenedor_panel',
		height: largo_panel-15,
		autoWidth: true,
		border: false,
		tabTip :'Aqui puedes ver, agregar , eliminar y descargar doucmentos',
		monitorResize:true,
		layout:'column',
		items: 
		[
			informacionvisual_gridpanel, 
			informacionvisual_formpanel
		],
		renderTo:'div_informacionvisual'
	});
   
   

/************************************************FUNCIONES*****************************/

	function informacionvisual_crear(){
		
		if(Ext.getCmp('informacionvisual_crear_boton').getText()=='Nuevo')
		{
			Ext.getCmp('informacionvisual_formpanel').getForm().reset();
			Ext.getCmp('informacionvisual_crear_boton').setText('Guardar');
			Ext.getCmp('informacionvisual_descargar_boton').setDisabled(true);
			Ext.getCmp('informacionvisual_eliminar_boton').setText('Cancelar');
			Ext.getCmp('informacionvisual_eliminar_boton').setDisabled(false);
		}

		if(Ext.getCmp('informacionvisual_crear_boton').getText()=='Guardar')
		{ 
			var verificacion =informacionvisual_verificarCamposDocumento();
	  
	 		 if(verificacion)
	  		{
				subirDatos(
					informacionvisual_formpanel,
					'informacionvisual/crearInformacionvisual',
					{},
					function(){
					Ext.getCmp('informacionvisual_crear_boton').setText('Nuevo');
					Ext.getCmp('informacionvisual_eliminar_boton').setText('Eliminar');
					Ext.getCmp('informacionvisual_descargar_boton').setDisabled(false);
					informacionvisual_datastore.reload(); 
					}
					);
			}
		}

	}


        
	function informacionvisual_descargar()
	{
		if(Ext.getCmp('iv_url').getValue()!='')
		{
			var url = '../'+Ext.getCmp('iv_url').getValue(); ;
			var w = window.open(url,'Documento','height=400,width=600,resizable=1,scrollbars=1, menubar=1');
		}
		else{
			mostrarMensajeConfirmacion('Error',"Selecione una imagen a descargar");
		}
	}
         
	function informacionvisual_eliminar()
	{
		if(Ext.getCmp('informacionvisual_eliminar_boton').getText()=='Eliminar')
		{
			if(Ext.getCmp('iv_id').getValue()!='')
			{
				subirDatosAjax(
						'informacionvisual/eliminarInformacionvisual',
						{iv_id:Ext.getCmp('iv_id').getValue()},
						function(){
						informacionvisual_formpanel.getForm().reset();
						informacionvisual_datastore.reload(); 
						}
				);
			}
			else{
				mostrarMensajeConfirmacion('Error',"Selecione una imagen a eliminar");
			}

		}
	
		
		if(Ext.getCmp('informacionvisual_eliminar_boton').getText()=='Cancelar')
		{
		    Ext.getCmp('informacionvisual_crear_boton').setText('Nuevo');
		    Ext.getCmp('informacionvisual_descargar_boton').setDisabled(false);
		    Ext.getCmp('informacionvisual_eliminar_boton').setText('Eliminar');
		}
	}


	function informacionvisual_verificarCamposDocumento(){
		
		var valido=true;
		if(!(Ext.getCmp('iv_nombre').isValid())) 
	 	{
	 		return false;
			mostrarMensajeConfirmacion('Error',"El nombre descriptivo de la informaci&oacute;n es obligatorio");
	 	}
		if(!(Ext.getCmp('iv_descripcion').isValid())) 
	 	{
			mostrarMensajeConfirmacion('Error',"Verifique que la descripci&oacute;n este correcta");
			return false;
	 	}
		if(!(informacionvisual_formpanel.getForm().isValid()))
		{
			mostrarMensajeConfirmacion('Error',"Verifique los campos sehan llenados correcta");
			return false;

		}

		return valido;
	}

