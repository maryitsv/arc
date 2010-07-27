
/*
var acu_tra_area_administrativa = new Ext.form.TextField( {
	labelStyle: 'width:280px;',
	anchor: '90%',
	name: 'acu_tra_area_administrativa',
	id: 'acu_tra_area_administrativa',
	fieldLabel: '<html>N&uacute;mero de trabajadores en el &aacute;rea administrativa</html>',
	disabled : false,
	listeners:
	{
		'render': function(){ 
					ayuda( 'acu_tra_area_administrativa', ayuda_acu_tra_area_administrativa );
     	}
	}              
} );

var acu_tra_area_operativa = new Ext.form.TextField( {
	labelStyle: 'width:280px;',
	anchor: '90%',
	name: 'acu_tra_area_operativa',
	id: 'acu_tra_area_operativa',
	fieldLabel: '<html>N&uacute;mero de trabajadores en el &aacute;rea operativa</html>',
	disabled : false,
	listeners:
	{
		'render': function(){ 
					ayuda( 'acu_tra_area_operativa', ayuda_acu_tra_area_operativa );
     	}
	}              
} );*/

var acu_tra_personaladministrativo_data = [
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0]
];

var acu_tra_personaladministrativo_datastore = new Ext.data.SimpleStore({
   fields:
   [
      {name: 'cargo', type: 'string'},
      {name: 'vinculacion', type: 'string'},
      {name: 'remuneracion', type: 'int'},
   ]
});

acu_tra_personaladministrativo_datastore.loadData(acu_tra_personaladministrativo_data);

var acu_tra_tipoVinculacion_data = [
   ['Contrato a t&eacute;rmino indefinido'],
   ['Contrato a t&eacute;rmino fijo'],
   ['Oden de prestaci&oacute;n de servicios'],
   ['Sin contrato, con bonificaci&oacute;n']
];

var acu_tra_tipoVinculacion_datastore = new Ext.data.SimpleStore({
    fields: ['vinculacion'],
    data : acu_tra_tipoVinculacion_data
});

var acu_tra_tipoVinculacion_adminitrativo_combobox = new Ext.form.ComboBox({
    store: acu_tra_tipoVinculacion_datastore,
    displayField: 'vinculacion',
    typeAhead: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var acu_tra_tipoVinculacion_operativo_combobox = new Ext.form.ComboBox({
    store: acu_tra_tipoVinculacion_datastore,
    displayField: 'vinculacion',
    typeAhead: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});


var acu_tra_personaladministrativo_gridpanel = new Ext.grid.EditorGridPanel({
   store: acu_tra_personaladministrativo_datastore,
   frame: true,
   border: false,
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
			editor: acu_tra_tipoVinculacion_operativo_combobox 
		},
		{
			header: 'Remuneraci&oacute;n mensual', 
			width: 130, 
			dataIndex: 'remuneracion', 
			renderer: 'usMoney',
			editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 1000000})
		}                        
   ],
   autoWidth: true,
   height: 276,
   //hidden: true,
   wrap: true,
   stripeRows: true,
   clicksToEdit: 1,
   title: 'Trabajadores y su vinculaci&oacute;n: personal administrativo'
});


var acu_tra_personaloperativo_data = [
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0],
   ['Cargo', 'Contrato a t&eacute;rmino indefinido', 0]
];

var acu_tra_personaloperativo_datastore = new Ext.data.SimpleStore({
   fields:
   [
      {name: 'cargo', type: 'string'},
      {name: 'vinculacion', type: 'string'},
      {name: 'remuneracion', type: 'int'},
   ]
});

acu_tra_personaloperativo_datastore.loadData(acu_tra_personaloperativo_data);

var acu_tra_personaloperativo_gridpanel = new Ext.grid.EditorGridPanel({
   store: acu_tra_personaloperativo_datastore,
   frame: true,
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
			editor: acu_tra_tipoVinculacion_operativo_combobox 
		},
		{
			header: 'Remuneraci&oacute;n mensual', 
			width: 130, 
			dataIndex: 'remuneracion', 
			renderer: 'usMoney',
			editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 1000000})
		}                        
   ],
   autoWidth: true,
   height: 276,
   //hidden: true,
   wrap: true,
   stripeRows: true,
   clicksToEdit: 1,
   title: 'Trabajadores y su vinculaci&oacute;n: personal operativo'
});


var acu_tra_manual_procedimiento = new Ext.form.RadioGroup({
	itemCls: 'x-check-group-alt',
	labelStyle: 'width:250px;',
	columns: 1,
	fieldLabel: '&iquest;Cuenta con un Manual de Procedimientos?',
	items:
	[
		{
			boxLabel: 'Si', 
			id: 'acu_tra_manual_procedimiento_si',
			name: 'acu_tra_manual_procedimiento', 
			checked: true,
			listeners:
			{
				'render': function(){ 
					ayuda( 'acu_tra_manual_procedimiento_si', ayuda_acu_tra_manual_procedimiento );
				}
			}
		},
		{ 
			boxLabel: 'No',
			id: 'acu_tra_manual_procedimiento_no',
			name: 'acu_tra_manual_procedimiento',
			listeners:
			{
				'render': function(){ 
					ayuda( 'acu_tra_manual_procedimiento_no', ayuda_acu_tra_manual_procedimiento );
				}
			}
		}
	]                
});

var acu_tra_manual_funciones = new Ext.form.RadioGroup( {
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
			listeners:
			{
				'render': function(){ 
					ayuda( 'acu_tra_manual_funciones_si', ayuda_acu_tra_manual_funciones );
				}
			}
		},
		{ 
			boxLabel: 'No',
			id: 'acu_tra_manual_funciones_no',
			name: 'acu_tra_manual_funciones' ,
			listeners:
			{
				'render': function(){ 
					ayuda( 'acu_tra_manual_funciones_no', ayuda_acu_tra_manual_funciones );
				}
			}
		}
	]                
} );

var acu_trabajadoresyvinculacion_presonaladministrativo_formpanel = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_acu_trabajadoresyvinculacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			//title: 'Personal administrativo',
			border: false,
			id: 'acu_trabajadoresyvinculacion_personaladministrativo_fieldset',
			height: 310,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 170,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_tra_personaladministrativo_gridpanel ]
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
							acu_trabajadoresyvinculacion_presonaladministrativo_formpanel.hide();
							acu_trabajadoresyvinculacion_presonaloperativo_formpanel.show();
			}
	    }
	]
});

var acu_tra_manual_funciones = new Ext.form.RadioGroup( {
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
			listeners:
			{
				'render': function(){ 
					ayuda( 'acu_tra_manual_funciones_si', ayuda_acu_tra_manual_funciones );
				}
			}
		},
		{ 
			boxLabel: 'No',
			id: 'acu_tra_manual_funciones_no',
			name: 'acu_tra_manual_funciones' ,
			listeners:
			{
				'render': function(){ 
					ayuda( 'acu_tra_manual_funciones_no', ayuda_acu_tra_manual_funciones );
				}
			}
		}
	]                
} );

var acu_trabajadoresyvinculacion_presonaloperativo_formpanel = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	hidden: true,
	layout: 'column',
	renderTo: 'div_form_acu_trabajadoresyvinculacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			//title: 'Personal operativo',
			border: false,
			id: 'acu_trabajadoresyvinculacion_personaloperativo_fieldset',
			height: 310,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 170,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_tra_personaloperativo_gridpanel ]
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
							acu_trabajadoresyvinculacion_presonaloperativo_formpanel.hide();
							acu_trabajadoresyvinculacion_presonaladministrativo_formpanel.show();
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

var form_acu_trabajadoresyvinculacion = new Ext.Panel({
	border: false,
	layout: 'form',
	renderTo: 'div_form_acu_trabajadoresyvinculacion',
	autoWidth: true,
	items: [acu_trabajadoresyvinculacion_presonaladministrativo_formpanel, acu_trabajadoresyvinculacion_presonaloperativo_formpanel]
});

function acu_trabajadoresyvinculacion_subirdatos() {
	//subirDatos(form_acu_trabajadoresyvinculacion, 'acueducto_trabajadoresyvinculacion/actualizarTrabajadoresyVinculacion'); //action no implementado
}



