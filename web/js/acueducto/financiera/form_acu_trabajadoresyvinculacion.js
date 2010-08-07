var acu_trabajadoresyvinculacion_datastore = new Ext.data.Store({
	id: 'acu_trabajadoresyvinculacion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_trabajadoresyvinculacion/obtenerDatosAcuTrabajadoresyVinculacion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
			  {name: 'acu_tra_manual_procedimiento', type: 'int'}, 
			  {name: 'acu_tra_manual_funciones', type: 'int'}
	])
});

var acu_tra_trabajadores_data = [
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Operativo']
];

var acu_tra_trabajadores_datastore = new Ext.data.Store({
	id: 'acu_tra_trabajadores_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_trabajadoresyvinculacion/obtenerDatosAcuTrabajadores', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
				{name: 'acu_poa_id', type: 'int'},
				{name: 'acu_poa_cedula', type: 'string'},
				{name: 'acu_poa_nombre', type: 'string'},
				{name: 'acu_poa_cargo', type: 'string'},
				{name: 'acu_poa_tipo_vinculacion', type: 'string'},
				{name: 'acu_poa_remuneracion_mensual', type: 'int'},
				{name: 'acu_poa_tipo_trabajador', type: 'string'}
   ])
});

acu_tra_trabajadores_datastore.load();
//acu_tra_trabajadores_datastore.loadData(acu_tra_trabajadores_data);

var acu_poa_tipo_vinculacion_data = [
   ['Contrato a t&eacute;rmino indefinido'],
   ['Contrato a t&eacute;rmino fijo'],
   ['Oden de prestaci&oacute;n de servicios'],
   ['Sin contrato, con bonificaci&oacute;n']
];

var acu_poa_tipo_vinculacion_datastore = new Ext.data.SimpleStore({
    fields: ['acu_poa_tipo_vinculacion'],
    data : acu_poa_tipo_vinculacion_data
});

var acu_poa_tipo_vinculacion_combobox = new Ext.form.ComboBox({
    store: acu_poa_tipo_vinculacion_datastore,
    displayField: 'acu_poa_tipo_vinculacion',
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var acu_poa_tipo_trabajador_data = [
   ['Administrativo'],
   ['Operativo']
];

var acu_poa_tipo_trabajador_datastore = new Ext.data.SimpleStore({
    fields: ['acu_poa_tipo_trabajador'],
    data : acu_poa_tipo_trabajador_data
});

var acu_poa_tipo_trabajador_combobox = new Ext.form.ComboBox({
    store: acu_poa_tipo_trabajador_datastore,
    displayField: 'acu_poa_tipo_trabajador',
    typeAhead: true,
	forceSelection: true,
    mode: 'local',
	allowBlank: false,
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var acu_tra_trabajadores_roweditor = new Ext.ux.grid.RowEditor({
	id: 'acu_tra_trabajadores_roweditor',
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	showTooltip: function(msg){},
	listeners:
	{
		'afteredit': function(){
			acu_trabajadoresyvinculacion_guardarTrabajador();
		},
		'canceledit': function(){}
	}
});

var acu_tra_trabajadores_gridpanel = new Ext.grid.GridPanel({
	store: acu_tra_trabajadores_datastore,
	title: 'Personal ',
	frame: true,
	stripeRows: true,
	plugins: [acu_tra_trabajadores_roweditor],
	autoWidth: true,
	height: 276,
	columns:
	[
		{
			header: "id",
			width: 140,
			hidden: true,
			sortable: true, 
			dataIndex: 'acu_poa_id',
			editor: new Ext.form.TextField()
		},
		{
			header: 'Cedula',
			width: 170, 
			dataIndex: 'acu_poa_cedula',
			editor: new Ext.form.TextField({ allowBlank: false}) 
		},
		{
			header: 'Nombre', 
			width: 170, 
			dataIndex: 'acu_poa_nombre',
			editor: new Ext.form.TextField({ allowBlank: false}) 
		},
		{
			header: "Cargo", 
			width: 140, 
			sortable: true, 
			dataIndex: 'acu_poa_cargo',
			editor: new Ext.form.TextField({ allowBlank: false})
		},
		{
			header: 'Tipo de vinculaci&oacute;n', 
			width: 170, 
			dataIndex: 'acu_poa_tipo_vinculacion',
			editor: acu_poa_tipo_vinculacion_combobox 
		},
		{
			header: 'Remuneraci&oacute;n mensual', 
			width: 130, 
			dataIndex: 'acu_poa_remuneracion_mensual', 
			renderer: 'usMoney',
			editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false})
		},
		{
			header: 'Tipo de Empleado', 
			width: 130, 
			dataIndex: 'acu_poa_tipo_trabajador',
			editor: acu_poa_tipo_trabajador_combobox
		}
	],
	tbar: [
		{
			text: 'Agregar',
			//iconCls: 'agregar',
			handler: acu_trabajadoresyvinculacion_agregartrabajadores
		}, '-', 
		{
			text: 'Borrar',
			//iconCls: 'eliminar',
			handler: acu_trabajadoresyvinculacion_eliminartrabajadores
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});


var acu_tra_manual_procedimiento = new Ext.form.RadioGroup({
	id: 'acu_tra_manual_procedimiento',
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:250px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Procedimientos?',
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'acu_tra_manual_procedimiento', 
			checked: true,
			inputValue: 1
		},
		{ 
			boxLabel: 'No',
			name: 'acu_tra_manual_procedimiento',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_tra_manual_procedimiento', ayuda_acu_tra_manual_procedimiento );
		}
	}
});

var acu_tra_manual_funciones = new Ext.form.RadioGroup( {
	id: 'acu_tra_manual_funciones',
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:230px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Funciones?',
	items:
	[
		{
			boxLabel: 'Si',
			id: 'acu_tra_manual_funciones_si',
			name: 'acu_tra_manual_funciones', 
			checked: true,
			inputValue: 1
		},
		{ 
			boxLabel: 'No',
			id: 'acu_tra_manual_funciones_no',
			name: 'acu_tra_manual_funciones',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_tra_manual_funciones', ayuda_acu_tra_manual_funciones );
		}
	}
} );

var form_acu_trabajadoresyvinculacion = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	//hidden: true,
	layout: 'column',
	renderTo: 'div_form_acu_trabajadoresyvinculacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		{
			xtype: 'fieldset',
			border: false,
			id: 'acu_trabajadoresyvinculacion_trabajadores_fieldset',
			height: 310,
		    columnWidth: '1',
			defaultType: 'textfield',
			labelWidth: 170,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_tra_trabajadores_gridpanel ]
	   },
	   {
			xtype: 'fieldset',
			id: 'acu_trabajadoresyvinculacion_manual_fieldset',
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
					items: [ acu_tra_manual_procedimiento ]
				}, 
				{
					xtype: 'panel',
					layout: 'form',
					border: false,
					columnWidth: '.4',
					labelWidth: 240,
					defaultType: 'textfield',
					items: [ acu_tra_manual_funciones ]
				}
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(3);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							//Ext.getCmp('acueducto').setActiveTab(2);
							acu_trabajadoresyvinculacion_subirdatos();
			}
	    }
	]
});

acu_trabajadoresyvinculacion_datastore.load({
  callback: function() {
	var record = acu_trabajadoresyvinculacion_datastore.getAt(0);
	form_acu_trabajadoresyvinculacion.getForm().loadRecord(record);
  }
});

function acu_trabajadoresyvinculacion_subirdatos() {
	subirDatos(
		form_acu_trabajadoresyvinculacion, 
		'acueducto_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion',
		{},
		function(){
			Ext.getCmp('acueducto').setActiveTab(2);
		}
	);
}

function acu_trabajadoresyvinculacion_guardarTrabajador() {
	var rec = acu_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	subirDatos(
		form_acu_trabajadoresyvinculacion, 
		'acueducto_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion',
		{
			acu_poa_id: rec.get('acu_poa_id'),
			acu_poa_cedula: rec.get('acu_poa_cedula'),
			acu_poa_nombre: rec.get('acu_poa_nombre'),
			acu_poa_cargo: rec.get('acu_poa_cargo'),
			acu_poa_tipo_vinculacion: rec.get('acu_poa_tipo_vinculacion'),
			acu_poa_remuneracion_mensual: rec.get('acu_poa_remuneracion_mensual'),
			acu_poa_tipo_trabajador: rec.get('acu_poa_tipo_trabajador')
		}
	);
}

function acu_trabajadoresyvinculacion_agregartrabajadores(btn, ev) {
	var row = new acu_tra_trabajadores_gridpanel.store.recordType({
		acu_poa_id: '',
		acu_poa_cedula: 'nuevo',
		acu_poa_nombre: 'nuevo',
		acu_poa_cargo: 'nuevo',
		acu_poa_tipo_vinculacion: '',
		acu_poa_remuneracion_mensual: '0',
		acu_poa_tipo_trabajador: ''
	});
	acu_tra_trabajadores_roweditor.stopEditing();
	acu_tra_trabajadores_gridpanel.store.insert(0, row);
}

function acu_trabajadoresyvinculacion_eliminartrabajadores() {
	var rec = acu_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	
	if (!rec) {
		return false;
	}
	
	if(rec.get('acu_poa_id') == ''){
		acu_tra_trabajadores_gridpanel.store.remove(rec);
	}
	else{
		subirDatos(
			form_acu_trabajadoresyvinculacion, 
			'acueducto_trabajadoresyvinculacion/eliminarTrabajadores',
			{
				acu_poa_id: rec.get('acu_poa_id')
			},
			function(){
				acu_tra_trabajadores_datastore.load();
			}
		);
	}
}
