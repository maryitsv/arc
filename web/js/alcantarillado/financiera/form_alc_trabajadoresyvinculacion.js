var alc_trabajadoresyvinculacion_datastore = new Ext.data.Store({
	id: 'alc_trabajadoresyvinculacion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'alcantarillado_trabajadoresyvinculacion/obtenerDatosAlcTrabajadoresyVinculacion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
			  {name: 'alc_tra_manual_procedimiento', type: 'int'}, 
			  {name: 'alc_tra_manual_funciones', type: 'int'}
	])
});

var alc_tra_trabajadores_data = [
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Operativo']
];

var alc_tra_trabajadores_datastore = new Ext.data.Store({
	id: 'alc_tra_trabajadores_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'alcantarillado_trabajadoresyvinculacion/obtenerDatosAlcTrabajadores', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
				{name: 'alc_poa_id', type: 'int'},
				{name: 'alc_poa_cedula', type: 'string'},
				{name: 'alc_poa_nombre', type: 'string'},
				{name: 'alc_poa_cargo', type: 'string'},
				{name: 'alc_poa_tipo_vinculacion', type: 'string'},
				{name: 'alc_poa_remuneracion_mensual', type: 'int'},
				{name: 'alc_poa_tipo_trabajador', type: 'string'}
   ])
});

alc_tra_trabajadores_datastore.load();
//alc_tra_trabajadores_datastore.loadData(alc_tra_trabajadores_data);

var alc_poa_tipo_vinculacion_data = [
   ['Contrato a t&eacute;rmino indefinido'],
   ['Contrato a t&eacute;rmino fijo'],
   ['Oden de prestaci&oacute;n de servicios'],
   ['Sin contrato, con bonificaci&oacute;n']
];

var alc_poa_tipo_vinculacion_datastore = new Ext.data.SimpleStore({
    fields: ['alc_poa_tipo_vinculacion'],
    data : alc_poa_tipo_vinculacion_data
});

var alc_poa_tipo_vinculacion_combobox = new Ext.form.ComboBox({
    store: alc_poa_tipo_vinculacion_datastore,
    displayField: 'alc_poa_tipo_vinculacion',
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var alc_poa_tipo_trabajador_data = [
   ['Administrativo'],
   ['Operativo']
];

var alc_poa_tipo_trabajador_datastore = new Ext.data.SimpleStore({
    fields: ['alc_poa_tipo_trabajador'],
    data : alc_poa_tipo_trabajador_data
});

var alc_poa_tipo_trabajador_combobox = new Ext.form.ComboBox({
    store: alc_poa_tipo_trabajador_datastore,
    displayField: 'alc_poa_tipo_trabajador',
    typeAhead: true,
	forceSelection: true,
    mode: 'local',
	allowBlank: false,
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var alc_tra_trabajadores_roweditor = new Ext.ux.grid.RowEditor({
	id: 'alc_tra_trabajadores_roweditor',
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	showTooltip: function(msg){},
	listeners:
	{
		'afteredit': function(){
			alc_trabajadoresyvinculacion_guardarTrabajador();
		},
		'canceledit': function(){}
	}
});

var alc_tra_trabajadores_gridpanel = new Ext.grid.GridPanel({
	store: alc_tra_trabajadores_datastore,
	title: 'Personal ',
	frame: true,
	stripeRows: true,
	plugins: [alc_tra_trabajadores_roweditor],
	autoWidth: true,
	height: 276,
	columns:
	[
		{
			header: "id",
			width: 140,
			hidden: true,
			sortable: true, 
			dataIndex: 'alc_poa_id'//,
			//editor: new Ext.form.TextField()
		},
		{
			header: 'Cedula',
			width: 170,
			dataIndex: 'alc_poa_cedula',
			editor: new Ext.form.TextField({ allowBlank: false, maxLength: 100, minLength: 0}) 
		},
		{
			header: 'Nombre', 
			width: 170,
			dataIndex: 'alc_poa_nombre',
			editor: new Ext.form.TextField({ allowBlank: false, maxLength: 250, minLength: 0}) 
		},
		{
			header: "Cargo", 
			width: 140, 
			sortable: true,
			maxLength: 100,
			minLength: 0,
			dataIndex: 'alc_poa_cargo',
			editor: new Ext.form.TextField({ allowBlank: false, maxLength: 100, minLength: 0})
		},
		{
			header: 'Tipo de vinculaci&oacute;n', 
			width: 170, 
			dataIndex: 'alc_poa_tipo_vinculacion',
			editor: alc_poa_tipo_vinculacion_combobox 
		},
		{
			header: 'Remuneraci&oacute;n mensual', 
			width: 130,
			dataIndex: 'alc_poa_remuneracion_mensual', 
			renderer: 'usMoney',
			editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxLength: 17, minLength: 0})
		},
		{
			header: 'Tipo de Empleado', 
			width: 130, 
			dataIndex: 'alc_poa_tipo_trabajador',
			editor: alc_poa_tipo_trabajador_combobox
		}
	],
	tbar: [
		{
			text: 'Agregar',
			//iconCls: 'agregar',
			handler: alc_trabajadoresyvinculacion_agregartrabajadores
		}, '-', 
		{
			text: 'Borrar',
			//iconCls: 'eliminar',
			handler: alc_trabajadoresyvinculacion_eliminartrabajadores
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});

var alc_tra_manual_procedimiento = new Ext.form.RadioGroup({
	id: 'alc_tra_manual_procedimiento',
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:250px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Procedimientos?',
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'alc_tra_manual_procedimiento', 
			checked: true,
			inputValue: 1
		},
		{ 
			boxLabel: 'No',
			name: 'alc_tra_manual_procedimiento',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'alc_tra_manual_procedimiento', ayuda_alc_tra_manual_procedimiento );
		}
	}
});

var alc_tra_manual_funciones = new Ext.form.RadioGroup( {
	id: 'alc_tra_manual_funciones',
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:230px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Funciones?',
	items:
	[
		{
			boxLabel: 'Si',
			id: 'alc_tra_manual_funciones_si',
			name: 'alc_tra_manual_funciones', 
			checked: true,
			inputValue: 1
		},
		{ 
			boxLabel: 'No',
			id: 'alc_tra_manual_funciones_no',
			name: 'alc_tra_manual_funciones',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'alc_tra_manual_funciones', ayuda_alc_tra_manual_funciones );
		}
	}
} );

var form_alc_trabajadoresyvinculacion = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	//hidden: true,
	layout: 'column',
	renderTo: 'div_form_alc_trabajadoresyvinculacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		{
			xtype: 'fieldset',
			border: false,
			id: 'alc_trabajadoresyvinculacion_trabajadores_fieldset',
			height: 310,
		    columnWidth: '1',
			defaultType: 'textfield',
			labelWidth: 170,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ alc_tra_trabajadores_gridpanel ]
	   },
	   {
			xtype: 'fieldset',
			id: 'alc_trabajadoresyvinculacion_manual_fieldset',
			layout: 'column',
			border: false,
			height: 70,
		    columnWidth: '1',
			defaultType: 'textfield',
			items: [
				{
					xtype: 'panel',
					layout: 'form',
					border: false,
					columnWidth: '.4',
					labelWidth: 250,
					defaultType: 'textfield',
					items: [ alc_tra_manual_procedimiento ]
				}, 
				{
					xtype: 'panel',
					layout: 'form',
					border: false,
					columnWidth: '.4',
					labelWidth: 240,
					defaultType: 'textfield',
					items: [ alc_tra_manual_funciones ]
				}
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(3);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							//Ext.getCmp('alcantarillado').setActiveTab(2);
							alc_trabajadoresyvinculacion_subirdatos();
			}
	    }
	]
});

alc_trabajadoresyvinculacion_datastore.load({
  callback: function() {
	var record = alc_trabajadoresyvinculacion_datastore.getAt(0);
	form_alc_trabajadoresyvinculacion.getForm().loadRecord(record);
  }
});

function alc_trabajadoresyvinculacion_subirdatos() {
	subirDatos(
		form_alc_trabajadoresyvinculacion, 
		'alcantarillado_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion',
		{},
		function(){
			Ext.getCmp('alcantarillado').setActiveTab(2);
		}
	);
}

function alc_trabajadoresyvinculacion_guardarTrabajador() {
	var rec = alc_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	subirDatos(
		form_alc_trabajadoresyvinculacion, 
		'alcantarillado_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion',
		{
			alc_poa_id: rec.get('alc_poa_id'),
			alc_poa_cedula: rec.get('alc_poa_cedula'),
			alc_poa_nombre: rec.get('alc_poa_nombre'),
			alc_poa_cargo: rec.get('alc_poa_cargo'),
			alc_poa_tipo_vinculacion: rec.get('alc_poa_tipo_vinculacion'),
			alc_poa_remuneracion_mensual: rec.get('alc_poa_remuneracion_mensual'),
			alc_poa_tipo_trabajador: rec.get('alc_poa_tipo_trabajador')
		}
	);
}

function alc_trabajadoresyvinculacion_agregartrabajadores(btn, ev) {
	var row = new alc_tra_trabajadores_gridpanel.store.recordType({
		alc_poa_id: '',
		alc_poa_cedula: 'nuevo',
		alc_poa_nombre: 'nuevo',
		alc_poa_cargo: 'nuevo',
		alc_poa_tipo_vinculacion: '',
		alc_poa_remuneracion_mensual: '0',
		alc_poa_tipo_trabajador: ''
	});
	alc_tra_trabajadores_roweditor.stopEditing();
	alc_tra_trabajadores_gridpanel.store.insert(0, row);
}

function alc_trabajadoresyvinculacion_eliminartrabajadores() {
	var rec = alc_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	
	if (!rec) {
		return false;
	}
	
	if(rec.get('alc_poa_id') == ''){
		alc_tra_trabajadores_gridpanel.store.remove(rec);
	}
	else{
		subirDatos(
			form_alc_trabajadoresyvinculacion, 
			'alcantarillado_trabajadoresyvinculacion/eliminarTrabajadores',
			{
				alc_poa_id: rec.get('alc_poa_id')
			},
			function(){
				alc_tra_trabajadores_datastore.load();
			}
		);
	}
}
