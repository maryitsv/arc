
/*CREACION DE DATSOTORES Y COLUMNS*/
    //creamos el data estore cargando desde la base de datos
    informacionvisual_datastore = new Ext.data.GroupingStore({
		id: 'informacionvisual_datastore',
		proxy: new Ext.data.HttpProxy({
			  url: 'informacionvisual/listarInformacionvisual', 
			  method: 'POST'
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
			{name: 'iv_tipo_archivo'},
			{name: 'iv_url'},
			{name: 'iv_descripcion'}	
		]),
		sortInfo:{field: 'iv_nombre', direction: "ASC"},
		groupField:'iv_tipo'
    });

	function ponerIconoDoc(val,x,store)
    {
		var iv_url_imagen=store.data.iv_url;
		return '<img src="'+iv_url_imagen+'">';
    }
    
    var informacionvisual_colmodel;
	
    informacionvisual_colmodel = new Ext.grid.ColumnModel({
    defaults:{sortable: true, locked: false, resizable: true, width: 160},
    columns:[
		{id: 'imagen', header: "Imagen", width: 50, dataIndex: 'imagen', renderer: ponerIconoDoc},
		{ header: "Nombre",  dataIndex: 'iv_nombre'},
		{ header: "Tipo", width: 70, dataIndex: 'iv_tipo'},
		{ header: "Tipo Archivo", width: 70, dataIndex: 'iv_tipo_archivo'},
		{id: 'iv_descripcion', header: "Descripcion", width: 230,  dataIndex: 'iv_descripcion'}
    	]
    });

    informacionvisual_datastore.load();
   

    /*CREACION DELA GRILLA*/
    //cargamos el modelo de la tabla

    var informacionvisual_gridpanel = new Ext.grid.GridPanel({
        id: 'informacionvisual_gridpanel',
        title:'Documentos Existentes',
		columnWidth: '.6',
		height: largo_panel-40,
		frame: true,
		autoExpandColumn: 'iv_descripcion',
		autoExpandMin: 200,
		ds: informacionvisual_datastore,
		cm: informacionvisual_colmodel,
		stripeRows:true,
		sm: new Ext.grid.RowSelectionModel({
			singleSelect: true,
			listeners: {
				rowselect: function(sm, row, rec) {
							Ext.getCmp('informacionvisual_formpanel').getForm().loadRecord(rec);
							Ext.getCmp('informacionvisual_descargar_boton').setText('Descargar');
							Ext.getCmp('informacionvisual_eliminar_boton').setText('Eliminar');
				}
			}
		}),           
		listeners: {
			render: function(g) {
					g.getSelectionModel().selectRow(0);
			},delay: 10
		},
		tbar:[
			{text:'Nuevo',handler:informacionvisual_crear,iconCls:'nuevo_doc',tooltip:'Pulse aqui para guardar nuevos documentos'},'-',
			{text:'Busqueda Especializada',iconCls:'buscar',tooltip:'Escoja un modulo para filtrar los documentos'}
			
		],
		bbar: new Ext.PagingToolbar({
			pageSize: 20,
			store: informacionvisual_datastore,
			displayInfo: true,
			displayMsg: 'Informacion {0} - {1} de {2}',
			emptyMsg: "No hay informacion"
		}),
		view: new Ext.grid.GroupingView()
    });
	
	var informacionvisual_tipoarchivo_data = [
	   ['Mapa'],
	   ['Imagen'],
	   ['Otro']
	];
	
	var informacionvisual_tipoarchivo_datastore = new Ext.data.SimpleStore({
		fields: ['tipoarchivo'],
		data : informacionvisual_tipoarchivo_data
	});

	var informacionvisual_tipoarchivo_combobox = new Ext.form.ComboBox({
		store: informacionvisual_tipoarchivo_datastore,
		displayField: 'tipoarchivo',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		fieldLabel: 'Tipo archivo',
		emptyText: 'Selecciona...',
		selectOnFocus: true
	});

   /*CREACION DE FORMULARIO*/
	var informacionvisual_formpanel = new Ext.FormPanel({
		title:'Datos detallados de la informaci&oacute;nvisual',
		columnWidth:'.4',
		height: largo_panel-15,
		frame:true,
		id:'informacionvisual_formpanel',
		//fileUpload: true,
		defaults:{xtype:'textfield',anchor:'100%'},
		items:
		[
			{
				fieldLabel: 'Nombre',
				id:'iv_nombre',
				name: 'iv_nombre',
				emptyText: 'Nombre del documento'
			},
			{
				xtype: 'fileuploadfield', 
				id: 'archivo', 
				emptyText: 'Seleccione un documento', 
				fieldLabel: 'Escojer',
				name: 'archivo',buttonText: '',
				buttonCfg: {iconCls: 'archivo'}
		  	},
			{
				id:'iv_id',
				name: 'iv_id'//,
				//xtype:'hidden'
			},
			informacionvisual_tipoarchivo_combobox,
			{
				fieldLabel: 'Descripcion',
				id:'iv_descripcion',
				name:'iv_descripcion',
				xtype: 'textarea',
				emptyText:'Digite una breve descripcion del archivo'
			}
		],
		buttons:
		[
			{
				text:'Descargar',
				id:'informacionvisual_descargar_boton',
				handler: informacionvisual_descargar,
				iconCls: 'descargar_doc',
				tooltip: 'Seleccione un documento y pulse aqui para descargarlo'
			},{
				text:'Eliminar',
				id: 'informacionvisual_eliminar_boton',
				handler: informacionvisual_eliminar,
				iconCls: 'eliminar_doc',
				tooltip: 'Seleccione un documento y pulse aqui para eliminarlo'
			}
		]	
	});

    
/*INTEGRACION AL CONTENEDOR*/
	var informacionvisual_contenedor_panel = new Ext.Panel({
		id: 'informacionvisual_contenedor_panel',
		height: largo_panel-15,
		autoWidth: true,
		frame: true,
		border: false,
		iconCls:'docs',
		tabTip :'Aqui puedes ver, agregar , eliminar y descargar doucmentos',
		monitorResize:true,
		layout:'column',
		items: [informacionvisual_gridpanel, informacionvisual_formpanel],
		renderTo:'div_informacionvisual'
	});
   
   

		/***************************************************FUNCIONES******************************************/
    function informacionvisual_crear(){
		
		Ext.getCmp('informacionvisual_formpanel').getForm().reset();

		Ext.getCmp('informacionvisual_descargar_boton').setText('Guardar');
		Ext.getCmp('informacionvisual_eliminar_boton').setText('Cancelar');

    }


        
	function informacionvisual_descargar()
	{
		//if(Ext.getCmp('informacionvisual_descargar_boton').getText()=='Guardar')
		//{//falta verificar campos, el iv_nombre , el archivo: la iv_descripcion
			 var verificacion =informacionvisual_verificarCamposDocumento();
			
	 		 if(verificacion)
	  		{
				/*subirDatos(
					informacionvisual_formpanel,
					'informacionvisual/crearInformacionvisual',
					{},
					function(){
					Ext.getCmp('informacionvisual_descargar_boton').setText('Descargar');
					Ext.getCmp('informacionvisual_eliminar_boton').setText('Eliminar');
					}
					);*/
					
					(informacionvisual_formpanel.getForm()).submit({
						//method: 'POST',
						scope:this,
						url: 'informacionvisual/crearInformacionvisual',
						params: {},
						waitTitle: 'Enviando',
						waitMsg: 'Enviando datos...',
						success: function(response, action)
						{
							obj = Ext.util.JSON.decode(action.response.responseText);
							salida = true;
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
					/*
					(formDocumento.getForm()).submit({
				  waitTitle: 'Enviando',
				  waitMsg: 'Por Favor Espere...',
				  scope:this,
				  url:'documentos/cargar',
				  params: { 
					  task: 'CREATEDOC'
				  }, 
				  success: function(response, action)
				  {
				  },
				  failure: function(form, response)
				  {
				  }
				  });*/
			

			}
		//}
		/*
		if(Ext.getCmp('informacionvisual_descargar_boton').getText()=='Descargar')
		{
            // var url = URL_AGILHU+'informacionvisual/descargar //le mandamos los url
            //win = window.open(url,'Documento','height=400,width=600,resizable=1,scrollbars=1, menubar=1');
		}*/
    }
         
	function informacionvisual_eliminar()
	{/*
		if(Ext.getCmp('informacionvisual_eliminar_boton').getText()=='Eliminar')
		{
			Ext.Ajax.request({  
				waitMsg: 'Por Favor Espere...',
				url:'documentos/cargar',
   				params: { 
					task: 'ELIMINARDOC',
				  	Identificador:Ext.getCmp('idDocumento').getValue(),
					iv_nombre:Ext.getCmp('iv_nombre').getValue()
				}, 
				success: function(response)
				  {
				     obj = Ext.util.JSON.decode(response.responseText);
				     if(obj.success)
				     {agaviso(obj.mensaje);}

				     if (obj.success == false)
				     {agerror(obj.errors.reason);}

				     informacionvisual_datastore.reload(); 
				  },
				  failure: function(form, response)
				  {
				     
				      agerror('servidor no encontrado');
				  }
			});
		}
		
        if(Ext.getCmp('informacionvisual_eliminar_boton').getText()=='Cancelar')
        {
            informacionvisual_gridpanel.enable(); 
            Ext.getCmp('informacionvisual_descargar_boton').setText('Descargar');
            Ext.getCmp('informacionvisual_eliminar_boton').setText('Eliminar');
		}*/
    }


	function informacionvisual_verificarCamposDocumento(){
		
		var valido=true;
		if(!(Ext.getCmp('iv_nombre').isValid())) 
	 	{
	 		agalerta('El nombre del documento y el archivo son obligatorios');
	 		return false;
	 	}
		return valido;
	}
	

