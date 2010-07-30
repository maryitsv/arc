var acu_cag_control_ca_distribuida = new Ext.form.RadioGroup({
	labelStyle: 'width:340px;',
	width: 70,
	id: 'acu_cag_control_ca_distribuida',
	fieldLabel: '<html>&iquest;Se realizan controles de calidad del agua distribuida?</html>',
	columns: 2,
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'acu_cag_control_ca_distribuida', 
			inputValue: 1, 
			checked: true
		},
		{ 
			boxLabel: 'No', 
			name: 'acu_cag_control_ca_distribuida',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_control_ca_distribuida', ayuda_acu_cag_control_ca_distribuida );
		}
	}
});

var acu_cag_visita_sspd = new Ext.form.RadioGroup({
	id: 'acu_cag_visita_sspd',
	width: 70,
	fieldLabel: '<html>&iquest;En el &uacute;ltimo a&ntilde;o ha recibido visitas de la Superintendencia de Servicios P&uacute;blicos Domiciliarios?</html>',
	columns: 2,
	items:
	[
		{
			boxLabel: 'Si', 
			inputValue: 1, 
			checked: true
		},
		{
			boxLabel: 'No',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_visita_sspd', ayuda_acu_cag_visita_sspd );
		}
	}
});

var acu_cag_numero_visita_sspd = new Ext.form.NumberField({
	id: 'acu_cag_numero_visita_sspd',
	width: 100,
	labelStyle: 'width:300px; text-align:center;',
	emptyText: '0',
	name: 'acu_cag_numero_visita_sspd',
	fieldLabel: '<html>&iquest;Cu&aacute;ntas?</html>',
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_numero_visita_sspd', ayuda_acu_cag_numero_visita_sspd );
		}
	}
});

var acu_calidad_calidadaguadistribuida_data = [
	['Turbiedad(UNT)','Mensual',0,0,0,0],
	['Color Aparente (UPC)','Mensual',0,0,0,0],
	['pH','Mensual',0,0,0,0],
	['Cloro residual libre(mg/l)','Mensual',0,0,0,0],
	['Coliformes totales UFC/100 ml','Bimestral',0,0,0,0],
	['Eschericha Coli en 100 ml','Bimestral',0,0,0,0],
	['Carbono Org&aacute;nico Total (mg/l)','Anual',0,0,0,0],
	['Floruros (mg/l)','Anual',0,0,0,0]
];

var acu_calidad_calidadaguadistribuida_datastore = new Ext.data.SimpleStore({
	fields: [
		{name: 'parametros'},
		{name: 'frecuenciaMin', type: 'string'},
		{name: 'punto1', type: 'float'},
		{name: 'punto2', type: 'float'},
		{name: 'punto3', type: 'float'},
		{name: 'frecuenciaReal', type: 'string'}
	]
});

acu_calidad_calidadaguadistribuida_datastore.loadData(acu_calidad_calidadaguadistribuida_data);

var acu_calidad_calidadaguadistribuida_roweditor = new Ext.ux.grid.RowEditor({
	saveText: 'Guardar',
	cancelText: 'Cancelar'
});

var acu_calidad_calidadaguadistribuida_gridpanel = new Ext.grid.GridPanel({
	store: acu_calidad_calidadaguadistribuida_datastore,
	//id: 'acu_calidad_calidadaguadistribuida_gridpanel',
	plugins: [acu_calidad_calidadaguadistribuida_roweditor],
	columnWidth: '1',
	height: 255,
	frame: true,
	stripeRows: true,
	autoExpandColumn: 'parametros',
	clicksToEdit:1,
	title: 'Presente los resultados de los an&#225;lisis del agua que distribuye:',
	columns: [
		{id:'parametros',header: "Par&aacute;metros", width: 200, sortable: true, dataIndex: 'parametros', resizable: false},
		{header: "Frecuencia<br>M&iacute;nima", width: 70,sortable: true, dataIndex: 'frecuenciaMin', resizable: false},
		{header: "Punto 1:", width: 70,sortable: true, dataIndex: 'punto1', editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000}), resizable: false},
		{header: "Punto 2:", width: 70, sortable: true, dataIndex: 'punto2', editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000}), resizable: false},
		{header: "Punto 3:", width: 70, sortable: true, dataIndex: 'punto3', editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000}), resizable: false},
		{header: "Frecuencia<br>Real:", width: 70, sortable: true, dataIndex: 'frecuenciaReal', editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000}), resizable: false}
		/*
		{header: 'Punto', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Turbiedad (UNT)', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Color Aparente (UPC)', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Cloro residual libre (mg/l)', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'pH', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Coliformes Totales UFC/100 ml', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Eschericha Coli en 100 ml', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Carbono Orgánico Total (mg/l)', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Fluoruros (mg/l)', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Frecuencia minima', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: 'Frecuencia real', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})}*/
	],
	tbar: [
		{
			text: 'Agregar punto',
			//iconCls: 'agregar',
			//handler: acu_trabajadoresyvinculacion_agregarpersonaloperativo
		}, '-', 
		{
			text: 'Agregar parametro',
			//iconCls: 'agregar',
			//handler: acu_trabajadoresyvinculacion_agregarpersonaloperativo
		},
		{
			text: 'Borrar punto',
			//iconCls: 'eliminar',
			//handler: acu_trabajadoresyvinculacion_eliminarpersonaloperativo
		}, '-',
		{
			text: 'Borrar parametro',
			//iconCls: 'eliminar',
			//handler: acu_trabajadoresyvinculacion_eliminarpersonaloperativo
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});

var form_acu_calidad_calidadaguadistribuida = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_acu_calidad_calidadaguadistribuida',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '1',
			labelWidth: 330,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_cag_control_ca_distribuida ]
		},
		acu_calidad_calidadaguadistribuida_gridpanel,
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '.6',
			labelWidth: 350,
			defaults: {labelStyle: 'font-size:1.0em;'},
			items: [ acu_cag_visita_sspd ]
		},
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '.3',
			defaultType: 'textfield',
			labelWidth: 90,
			defaults: {labelStyle: 'font-size:1.0em;'},
			items: [ acu_cag_numero_visita_sspd ]
		}
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_acu_calidad').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							Ext.getCmp('panel_servicios').setActiveGroup(2);
							Ext.getCmp('alcantarillado').setActiveTab(0);
			}
	    }
	]
});