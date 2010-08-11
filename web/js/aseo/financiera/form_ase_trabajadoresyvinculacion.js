var ase_trabajadoresyvinculacion_datastore = new Ext.data.Store({
	id: 'ase_trabajadoresyvinculacion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo_trabajadoresyvinculacion/obtenerDatosAseTrabajadoresyVinculacion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
			  {name: 'ase_tra_manual_procedimiento', type: 'int'}, 
			  {name: 'ase_tra_manual_funciones', type: 'int'}
	])
});

var ase_tra_trabajadores_data = [
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['', '', '', 'Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Operativo']
];

var ase_tra_trabajadores_datastore = new Ext.data.Store({
	id: 'ase_tra_trabajadores_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo_trabajadoresyvinculacion/obtenerDatosAseTrabajadores', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
				{name: 'ase_poa_id', type: 'int'},
				{name: 'ase_poa_cedula', type: 'string'},
				{name: 'ase_poa_nombre', type: 'string'},
				{name: 'ase_poa_cargo', type: 'string'},
				{name: 'ase_poa_tipo_vinculacion', type: 'string'},
				{name: 'ase_poa_remuneracion_mensual', type: 'int'},
				{name: 'ase_poa_tipo_trabajador', type: 'string'}
   ])
});

ase_tra_trabajadores_datastore.load();
//ase_tra_trabajadores_datastore.loadData(ase_tra_trabajadores_data);

var ase_poa_tipo_vinculacion_data = [
   ['Contrato a t&eacute;rmino indefinido'],
   ['Contrato a t&eacute;rmino fijo'],
   ['Oden de prestaci&oacute;n de servicios'],
   ['Sin contrato, con bonificaci&oacute;n']
];

var ase_poa_tipo_vinculacion_datastore = new Ext.data.SimpleStore({
    fields: ['ase_poa_tipo_vinculacion'],
    data : ase_poa_tipo_vinculacion_data
});

var ase_poa_tipo_vinculacion_combobox = new Ext.form.ComboBox({
    store: ase_poa_tipo_vinculacion_datastore,
    displayField: 'ase_poa_tipo_vinculacion',
	id: 'ase_poa_tipo_vinculacion',
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_poa_tipo_vinculacion', ayuda_ase_poa_tipo_vinculacion );
		}
	}
});

var ase_poa_tipo_trabajador_data = [
   ['Administrativo'],
   ['Operativo']
];

var ase_poa_tipo_trabajador_datastore = new Ext.data.SimpleStore({
    fields: ['ase_poa_tipo_trabajador'],
    data : ase_poa_tipo_trabajador_data
});

var ase_poa_tipo_trabajador_combobox = new Ext.form.ComboBox({
    store: ase_poa_tipo_trabajador_datastore,
    displayField: 'ase_poa_tipo_trabajador',
	id: 'ase_poa_tipo_trabajador',
    typeAhead: true,
	forceSelection: true,
    mode: 'local',
	allowBlank: false,
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_poa_tipo_trabajador', ayuda_ase_poa_tipo_trabajador );
		}
	}
});

var ase_tra_trabajadores_roweditor = new Ext.ux.grid.RowEditor({
	id: 'ase_tra_trabajadores_roweditor',
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	showTooltip: function(msg){},
	listeners:
	{
		'afteredit': function(){
			ase_trabajadoresyvinculacion_guardarTrabajador();
		},
		'canceledit': function(){}
	}
});

var ase_tra_trabajadores_gridpanel = new Ext.grid.GridPanel({
	store: ase_tra_trabajadores_datastore,
	title: 'Personal ',
	frame: true,
	stripeRows: true,
	plugins: [ase_tra_trabajadores_roweditor],
	autoWidth: true,
	height: 276,
	columns:
	[
		{
			header: "id",
			width: 140,
			hidden: true,
			sortable: true, 
			dataIndex: 'ase_poa_id'//,
			//editor: new Ext.form.TextField()
		},
		{
			header: 'Cedula',
			width: 170,
			dataIndex: 'ase_poa_cedula',
			editor: new Ext.form.TextField({ 
				allowBlank: false,
				id: 'ase_poa_cedula',
				maxLength: 100, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_poa_cedula', ayuda_ase_poa_cedula );
					}
				}
			}) 
		},
		{
			header: 'Nombre', 
			width: 170,
			dataIndex: 'ase_poa_nombre',
			editor: new Ext.form.TextField({ 
				allowBlank: false,
				id: 'ase_poa_nombre',
				maxLength: 250, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_poa_nombre', ayuda_ase_poa_nombre );
					}
				}
			}) 
		},
		{
			header: "Cargo", 
			width: 140, 
			sortable: true,
			maxLength: 100,
			minLength: 0,
			dataIndex: 'ase_poa_cargo',
			editor: new Ext.form.TextField({ 
				allowBlank: false,
				id: 'ase_poa_cargo',
				maxLength: 100, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_poa_cargo', ayuda_ase_poa_cargo );
					}
				}
			})
		},
		{
			header: 'Tipo de vinculaci&oacute;n', 
			width: 170, 
			dataIndex: 'ase_poa_tipo_vinculacion',
			editor: ase_poa_tipo_vinculacion_combobox 
		},
		{
			header: 'Remuneraci&oacute;n mensual', 
			width: 130,
			dataIndex: 'ase_poa_remuneracion_mensual', 
			renderer: 'usMoney',
			editor: new Ext.form.NumberField({ 
				allowBlank: false,
				id: 'ase_poa_remuneracion_mensual',
				allowNegative: false, 
				maxLength: 17, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_poa_remuneracion_mensual', ayuda_ase_poa_remuneracion_mensual );
					}
				}
			})
		},
		{
			header: 'Tipo de Empleado', 
			width: 130, 
			dataIndex: 'ase_poa_tipo_trabajador',
			editor: ase_poa_tipo_trabajador_combobox
		}
	],
	tbar: [
		{
			text: 'Agregar',
			//iconCls: 'agregar',
			handler: ase_trabajadoresyvinculacion_agregartrabajadores
		}, '-', 
		{
			text: 'Borrar',
			//iconCls: 'eliminar',
			handler: ase_trabajadoresyvinculacion_eliminartrabajadores
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});

var ase_tra_manual_procedimiento = new Ext.form.RadioGroup({
	id: 'ase_tra_manual_procedimiento',
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:250px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Procedimientos?',
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'ase_tra_manual_procedimiento', 
			checked: true,
			inputValue: 1
		},
		{ 
			boxLabel: 'No',
			name: 'ase_tra_manual_procedimiento',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'ase_tra_manual_procedimiento', ayuda_ase_tra_manual_procedimiento );
		}
	}
});

var ase_tra_manual_funciones = new Ext.form.RadioGroup( {
	id: 'ase_tra_manual_funciones',
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:230px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Funciones?',
	items:
	[
		{
			boxLabel: 'Si',
			id: 'ase_tra_manual_funciones_si',
			name: 'ase_tra_manual_funciones', 
			checked: true,
			inputValue: 1
		},
		{ 
			boxLabel: 'No',
			id: 'ase_tra_manual_funciones_no',
			name: 'ase_tra_manual_funciones',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'ase_tra_manual_funciones', ayuda_ase_tra_manual_funciones );
		}
	}
} );

var form_ase_trabajadoresyvinculacion = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	//hidden: true,
	layout: 'column',
	renderTo: 'div_form_ase_trabajadoresyvinculacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		{
			xtype: 'fieldset',
			border: false,
			id: 'ase_trabajadoresyvinculacion_trabajadores_fieldset',
			height: 310,
		    columnWidth: '1',
			defaultType: 'textfield',
			labelWidth: 170,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ ase_tra_trabajadores_gridpanel ]
	   },
	   {
			xtype: 'fieldset',
			id: 'ase_trabajadoresyvinculacion_manual_fieldset',
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
					items: [ ase_tra_manual_procedimiento ]
				}, 
				{
					xtype: 'panel',
					layout: 'form',
					border: false,
					columnWidth: '.4',
					labelWidth: 240,
					defaultType: 'textfield',
					items: [ ase_tra_manual_funciones ]
				}
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(3);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							//Ext.getCmp('aseo').setActiveTab(2);
							ase_trabajadoresyvinculacion_subirdatos();
			}
	    }
	]
});

ase_trabajadoresyvinculacion_datastore.load({
  callback: function() {
	var record = ase_trabajadoresyvinculacion_datastore.getAt(0);
	form_ase_trabajadoresyvinculacion.getForm().loadRecord(record);
  }
});

function ase_trabajadoresyvinculacion_subirdatos() {
	subirDatos(
		form_ase_trabajadoresyvinculacion, 
		'aseo_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion',
		{},
		function(){
			Ext.getCmp('aseo').setActiveTab(2);
		}
	);
}

function ase_trabajadoresyvinculacion_guardarTrabajador() {
	var rec = ase_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	subirDatos(
		form_ase_trabajadoresyvinculacion, 
		'aseo_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion',
		{
			ase_poa_id: rec.get('ase_poa_id'),
			ase_poa_cedula: rec.get('ase_poa_cedula'),
			ase_poa_nombre: rec.get('ase_poa_nombre'),
			ase_poa_cargo: rec.get('ase_poa_cargo'),
			ase_poa_tipo_vinculacion: rec.get('ase_poa_tipo_vinculacion'),
			ase_poa_remuneracion_mensual: rec.get('ase_poa_remuneracion_mensual'),
			ase_poa_tipo_trabajador: rec.get('ase_poa_tipo_trabajador')
		}
	);
}

function ase_trabajadoresyvinculacion_agregartrabajadores(btn, ev) {
	var row = new ase_tra_trabajadores_gridpanel.store.recordType({
		ase_poa_id: '',
		ase_poa_cedula: 'nuevo',
		ase_poa_nombre: 'nuevo',
		ase_poa_cargo: 'nuevo',
		ase_poa_tipo_vinculacion: '',
		ase_poa_remuneracion_mensual: '0',
		ase_poa_tipo_trabajador: ''
	});
	ase_tra_trabajadores_roweditor.stopEditing();
	ase_tra_trabajadores_gridpanel.store.insert(0, row);
}

function ase_trabajadoresyvinculacion_eliminartrabajadores() {
	var rec = ase_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	
	if (!rec) {
		return false;
	}
	
	if(rec.get('ase_poa_id') == ''){
		ase_tra_trabajadores_gridpanel.store.remove(rec);
	}
	else{
		subirDatos(
			form_ase_trabajadoresyvinculacion, 
			'aseo_trabajadoresyvinculacion/eliminarTrabajadores',
			{
				ase_poa_id: rec.get('ase_poa_id')
			},
			function(){
				ase_tra_trabajadores_datastore.load();
			}
		);
	}
}
