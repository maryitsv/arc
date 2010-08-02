var acu_tra_trabajadores_data = [
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Administrativo'],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0, 'Operativo']
];

var acu_tra_trabajadores_datastore = new Ext.data.SimpleStore({
   fields:
   [
      {name: 'cargo', type: 'string'},
      {name: 'vinculacion', type: 'string'},
      {name: 'remuneracion', type: 'int'},
	  {name: 'tipotrabajador', type: 'string'}
   ]
});

acu_tra_trabajadores_datastore.loadData(acu_tra_trabajadores_data);

var acu_tra_tipovinculacion_data = [
   ['Contrato a t&eacute;rmino indefinido'],
   ['Contrato a t&eacute;rmino fijo'],
   ['Oden de prestaci&oacute;n de servicios'],
   ['Sin contrato, con bonificaci&oacute;n']
];

var acu_tra_tipovinculacion_datastore = new Ext.data.SimpleStore({
    fields: ['vinculacion'],
    data : acu_tra_tipovinculacion_data
});

var acu_tra_tipovinculacion_combobox = new Ext.form.ComboBox({
    store: acu_tra_tipovinculacion_datastore,
    displayField: 'vinculacion',
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var acu_tra_tipotrabajador_data = [
   ['Administrativo'],
   ['Operativo']
];

var acu_tra_tipotrabajador_datastore = new Ext.data.SimpleStore({
    fields: ['tipotrabajador'],
    data : acu_tra_tipotrabajador_data
});

var acu_tra_tipotrabajador_combobox = new Ext.form.ComboBox({
    store: acu_tra_tipotrabajador_datastore,
    displayField: 'tipotrabajador',
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
	listeners:
	{
		'afteredit': function(){
			acu_trabajadoresyvinculacion_guardarTrabajador();
		}
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
			id:'cargo', 
			header: "Cargo", 
			width: 140, 
			sortable: true, 
			dataIndex: 'cargo',
			editor: new Ext.form.TextField({ allowBlank: false})
		},
		{
			header: 'Tipo de vinculaci&oacute;n', 
			width: 170, 
			dataIndex: 'vinculacion',
			editor: acu_tra_tipovinculacion_combobox 
		},
		{
			header: 'Remuneraci&oacute;n mensual', 
			width: 130, 
			dataIndex: 'remuneracion', 
			renderer: 'usMoney',
			editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false})
		},
		{
			header: 'Tipo de Empleado', 
			width: 130, 
			dataIndex: 'tipotrabajador',
			editor: acu_tra_tipotrabajador_combobox
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
			checked: true
		},
		{ 
			boxLabel: 'No',
			name: 'acu_tra_manual_procedimiento'
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
			checked: true
		},
		{ 
			boxLabel: 'No',
			id: 'acu_tra_manual_funciones_no',
			name: 'acu_tra_manual_funciones' 
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_tra_manual_funciones', ayuda_acu_tra_manual_funciones );
		}
	}
} );

var form_acu_trabajadoresyvinculacion = new Ext.form.FormPanel({
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
							Ext.getCmp('acueducto').setActiveTab(2);
							acu_trabajadoresyvinculacion_subirdatos();
			}
	    }
	]
});

function acu_trabajadoresyvinculacion_subirdatos() {
	//subirDatos(form_acu_trabajadoresyvinculacion, 'acueducto_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion'); //action no implementado
}

function acu_trabajadoresyvinculacion_guardarTrabajador() {
	//subirDatos(form_acu_trabajadoresyvinculacion, 'acueducto_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion'); //action no implementado
}

function acu_trabajadoresyvinculacion_agregartrabajadores(btn, ev) {
	var row = new acu_tra_trabajadores_gridpanel.store.recordType({
		cargo : '',
		vinculacion: '',
		remuneracion : ''
	});
	acu_tra_trabajadores_roweditor.stopEditing();
	acu_tra_trabajadores_gridpanel.store.insert(0, row);
	acu_tra_trabajadores_roweditor.startEditing(0);
}

function acu_trabajadoresyvinculacion_eliminartrabajadores() {
	var rec = acu_tra_trabajadores_gridpanel.getSelectionModel().getSelected();
	if (!rec) {
		return false;
	}
	acu_tra_trabajadores_gridpanel.store.remove(rec);
}
