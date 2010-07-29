var acu_informacioncontable_datastore = new Ext.data.Store({
	id: 'acu_informacioncontable_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_informacioncontable/obtenerDatosAcuInformacionContable', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
			  {name: 'acu_ico_balance_general', type: 'int'},
			  {name: 'acu_ico_activos', type: 'float'},
			  {name: 'acu_ico_activos_corrientes', type: 'float'},
			  {name: 'acu_ico_efectivo', type: 'float'},
			  {name: 'acu_ico_deudores', type: 'float'},
			  {name: 'acu_ico_inventario', type: 'float'},
			  {name: 'acu_ico_activos_fijos', type: 'float'},
			  {name: 'acu_ico_propiedad_planta_equipos', type: 'float'},
			  {name: 'acu_ico_otros_activos', type: 'float'},
			  {name: 'acu_ico_pasivos', type: 'float'},
			  {name: 'acu_ico_pasivos_corrientes', type: 'float'},
			  {name: 'acu_ico_obligaciones_financieras', type: 'float'},
			  {name: 'acu_ico_otras_cuentas_por_pagar', type: 'float'},
			  {name: 'acu_ico_obligaciones_laborales', type: 'float'},
			  {name: 'acu_ico_otros_pasivos', type: 'float'},
			  {name: 'acu_ico_patrimonio', type: 'float'},
			  {name: 'acu_ico_estado_de_resultados', type: 'int'},
			  {name: 'acu_ico_total_ingresos', type: 'float'},
			  {name: 'acu_ico_ingresos_operacionales', type: 'float'},
			  {name: 'acu_ico_ingresos_no_operacionales', type: 'float'},
			  {name: 'acu_ico_total_egresos', type: 'float'},
			  {name: 'acu_ico_gastos_administrativos', type: 'float'},
			  {name: 'acu_ico_costo_operacion_mantenimiento', type: 'float'}, 
			  {name: 'acu_ico_costo_inversion', type: 'float'},
			  {name: 'acu_ico_resultados_ejercicio', type: 'float'}
	])
});

var acu_ico_balance_general = new Ext.form.NumberField( {
	fieldLabel: 'Balance general a diciembre 30 de', 
	emptyText: 'ingrese el año del balance general',
	disabled: true,
	//anchor: '100%',
	id: 'acu_ico_balance_general', 
	name: 'acu_ico_balance_general', 
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_balance_general', ayuda_acu_ico_balance_general );
     	}
	}
} );

//////********************** activos ************************///////////////

var acu_ico_activos = new Ext.form.NumberField( {
	fieldLabel: 'Activos ($)', 
	emptyText: 'ingrese los activos',
	id: 'acu_ico_activos',
	disabled: true,
	decimalPrecision: 7,
	inputType: 'usmoney',
	name: 'acu_ico_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_activos', ayuda_acu_ico_activos );
     	},
		'keyup' : function(){ 
					//formatoNumeroCampo(this); 
		} 
	}
} );

var acu_ico_activos_corrientes = new Ext.form.NumberField( {
	fieldLabel: 'Activos corrientes ($)', 
	emptyText: 'ingrese los activos corrientes', 
	id: 'acu_ico_activos_corrientes',
	enableKeyEvents: true,
	decimalPrecision: 7,
	name: 'acu_ico_activos_corrientes', 
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_activos_corrientes', ayuda_acu_ico_activos_corrientes );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_efectivo = new Ext.form.NumberField( {
	fieldLabel: 'Efectivo (caja m&aacute;s bancos) ($)', 
	emptyText: 'ingrese la cantidad de efectivo', 
	id: 'acu_ico_efectivo', 
	name: 'acu_ico_efectivo',
	enableKeyEvents: true,
	decimalPrecision: 7,
	//vtype:'acu_informacioncontable_sumaractivos_//vtype',
	enableKeyEvents: true,
	anchor: '100%', 
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_efectivo', ayuda_acu_ico_efectivo );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_deudores = new Ext.form.NumberField( {  
	fieldLabel: 'Deudores (cuentas por cobrar) ($)', 
	emptyText: 'ingrese la cantidad de deudores', 
	id: 'acu_ico_deudores', 
	name: 'acu_ico_deudores',
	enableKeyEvents: true,
	decimalPrecision: 7,
	//vtype:'acu_informacioncontable_sumaractivos_//vtype',
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_deudores', ayuda_acu_ico_deudores );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos();  
		} 
	}
} );

var acu_ico_inventario = new Ext.form.NumberField( {
	fieldLabel: 'Inventario ($)', 
	emptyText: 'ingrese el inventario', 
	id: 'acu_ico_inventario', 
	name: 'acu_ico_inventario',
	enableKeyEvents: true,
	anchor: '100%',
	decimalPrecision: 7,
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_inventario', ayuda_acu_ico_inventario );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_activos_fijos = new Ext.form.NumberField( {
	fieldLabel: 'Activos fijos ($)', 
	emptyText: 'ingrese los activos fijos', 
	id: 'acu_ico_activos_fijos',
	decimalPrecision: 7,
	name: 'acu_ico_activos_fijos', 
	enableKeyEvents: true,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_activos_fijos', ayuda_acu_ico_activos_fijos );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_propiedad_planta_equipos = new Ext.form.NumberField( {
	fieldLabel: 'Propiedad, planta y equipos ($)', 
	emptyText: 'ingrese la cantidad en bienes', 
	id: 'acu_ico_propiedad_planta_equipos',
	enableKeyEvents: true,
	decimalPrecision: 7,
	name: 'acu_ico_propiedad_planta_equipos', 
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_propiedad_planta_equipos', ayuda_acu_ico_propiedad_planta_equipos );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_otros_activos = new Ext.form.NumberField( { 
	fieldLabel: 'Otros activos ($)', 
	emptyText: 'ingrese la cantidad de otros activos', 
	id: 'acu_ico_otros_activos', 
	name: 'acu_ico_otros_activos',
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_otros_activos', ayuda_acu_ico_otros_activos );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

//////************ pasivos ***************//////////

var acu_ico_pasivos = new Ext.form.NumberField( {
	fieldLabel: 'Pasivos ($)', 
	disabled: true,
	emptyText: 'ingrese los pasivos', 
	id: 'acu_ico_pasivos', 
	name: 'acu_ico_pasivos', 
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_pasivos', ayuda_acu_ico_pasivos );
     	},
		'keyup' : function(){ 
					//formatoNumeroCampo(this); 
		} 
	}
} );

var acu_ico_pasivos_corrientes = new Ext.form.NumberField( {
	fieldLabel: 'Pasivos corrientes ($)', 
	emptyText: 'ingrese los pasivos corrientes', 
	id: 'acu_ico_pasivos_corrientes', 
	name: 'acu_ico_pasivos_corrientes',
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_pasivos_corrientes', ayuda_acu_ico_pasivos_corrientes );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_obligaciones_financieras = new Ext.form.NumberField( { 
	fieldLabel: 'Obligaciones financieras (bancos o similares) ($)', 
	emptyText: 'ingrese las obligaciones financieras', 
	id: 'acu_ico_obligaciones_financieras', 
	name: 'acu_ico_obligaciones_financieras',
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_obligaciones_financieras', ayuda_acu_ico_obligaciones_financieras );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_otras_cuentas_por_pagar = new Ext.form.NumberField( { 
	fieldLabel: 'Otras cuentas por pagar (proveedores) ($)', 
	emptyText: 'ingrese otras cuentas por pagar', 
	id: 'acu_ico_otras_cuentas_por_pagar', 
	name: 'acu_ico_otras_cuentas_por_pagar',
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_otras_cuentas_por_pagar', ayuda_acu_ico_otras_cuentas_por_pagar );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_obligaciones_laborales = new Ext.form.NumberField( {
	fieldLabel: 'Obligaciones laborales y de seguridad social ($)', 
	emptyText: 'ingrese el valor de las obligaciones laborales', 
	id: 'acu_ico_obligaciones_laborales', 
	name: 'acu_ico_obligaciones_laborales', 
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_obligaciones_laborales', ayuda_acu_ico_obligaciones_laborales );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );
	
var acu_ico_otros_pasivos = new Ext.form.NumberField( {
	fieldLabel: 'Otros pasivos ($)', 
	emptyText: 'ingrese otros pasivos', 
	id: 'acu_ico_otros_pasivos', 
	name: 'acu_ico_otros_pasivos',
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_otros_pasivos', ayuda_acu_ico_otros_pasivos );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_patrimonio = new Ext.form.NumberField( {
	fieldLabel: 'Patrimonio ($)', 
	emptyText: 'ingrese el patrimonio', 
	id: 'acu_ico_patrimonio', 
	name: 'acu_ico_patrimonio',
	enableKeyEvents: true,
	decimalPrecision: 7,
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_patrimonio', ayuda_acu_ico_patrimonio );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

//////****************** totales *****************//////////////////////

var acu_ico_estado_de_resultados = new Ext.form.NumberField( { 
	fieldLabel: 'Estado de resultados entre enero 1 y diciembre 31 de', 
	emptyText: 'ingrese el año de los resultados',
	disabled: true,
	//anchor: '100%',
	id: 'acu_ico_estado_de_resultados', 
	name: 'acu_ico_estado_de_resultados', 
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_estado_de_resultados', ayuda_acu_ico_estado_de_resultados );
     	}
	}
} );

var acu_ico_total_ingresos = new Ext.form.NumberField( {
	fieldLabel: 'Total de ingresos ($)', 
	emptyText: 'ingrese el total de ingresos',
	anchor: '100%',
	id: 'acu_ico_total_ingresos',
	enableKeyEvents: true,
	decimalPrecision: 7,
	name: 'acu_ico_total_ingresos',
	disabled: true,
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_total_ingresos', ayuda_acu_ico_total_ingresos );
     	},
		'keyup' : function(){ 
					//formatoNumeroCampo(this); 
		} 
	}
} );

var acu_ico_ingresos_operacionales = new Ext.form.NumberField( {
	fieldLabel: 'Ingresos operacionales ($)', 
	emptyText: 'ingrese los ingresos operacionales',
	anchor: '100%',
	enableKeyEvents: true,
	decimalPrecision: 7,
	id: 'acu_ico_ingresos_operacionales', 
	name: 'acu_ico_ingresos_operacionales', 
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_ingresos_operacionales', ayuda_acu_ico_ingresos_operacionales );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularingresos(); 
		} 
	}
} );

var acu_ico_ingresos_no_operacionales = new Ext.form.NumberField( {
	fieldLabel: 'Ingresos no operacionales ($)', 
	emptyText: 'ingrese los ingresos no operacionales',
	anchor: '100%',
	id: 'acu_ico_ingresos_no_operacionales', 
	name: 'acu_ico_ingresos_no_operacionales',
	enableKeyEvents: true,
	decimalPrecision: 7,
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_ingresos_no_operacionales', ayuda_acu_ico_ingresos_no_operacionales );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularingresos(); 
		} 
	}
} );

var acu_ico_total_egresos = new Ext.form.NumberField( {
	fieldLabel: 'Total de egresos ($)', 
	emptyText: 'ingrese el total de egresos',
	anchor: '100%',
	id: 'acu_ico_total_egresos', 
	name: 'acu_ico_total_egresos',
	enableKeyEvents: true,
	decimalPrecision: 7,
	disabled: true,
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_total_egresos', ayuda_acu_ico_total_egresos );
     	},
		'keyup' : function(){ 
					//formatoNumeroCampo(this); 
		} 
	}
} );

var acu_ico_gastos_administrativos = new Ext.form.NumberField( { 
	fieldLabel: 'Gastos administrativos ($)', 
	emptyText: 'ingrese los gastos administrativos',
	anchor: '100%',
	id: 'acu_ico_gastos_administrativos', 
	name: 'acu_ico_gastos_administrativos',
	enableKeyEvents: true,
	decimalPrecision: 7,
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_gastos_administrativos', ayuda_acu_ico_gastos_administrativos );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularegresos(); 
		} 
	}
} );

var acu_ico_costo_operacion_mantenimiento = new Ext.form.NumberField( {
	fieldLabel: 'Costos de operacion y mantenimiento ($)', 
	emptyText: 'ingrese los costos de operacion y mantenimiento',
	anchor: '100%',
	id: 'acu_ico_costo_operacion_mantenimiento', 
	name: 'acu_ico_costo_operacion_mantenimiento',
	enableKeyEvents: true,
	decimalPrecision: 7,
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_costo_operacion_mantenimiento', ayuda_acu_ico_costo_operacion_mantenimiento );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularegresos(); 
		} 
	}
} );

var acu_ico_costo_inversion = new Ext.form.NumberField( {
	fieldLabel: 'Costos de inversion ($)', 
	emptyText: 'ingrese los costos de inversion',
	anchor: '100%',
	id: 'acu_ico_costo_inversion', 
	name: 'acu_ico_costo_inversion',
	enableKeyEvents: true,
	decimalPrecision: 7,
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_costo_inversion', ayuda_acu_ico_costo_inversion );
     	},
		'keyup' : function(){ 
					acu_informacioncontable_calcularegresos(); 
		} 
	}
} );

var acu_ico_resultados_ejercicio = new Ext.form.NumberField( {
	fieldLabel: 'Resultados del ejercicio ($)', 
	emptyText: 'ingrese los resultados del ejercicio',
	anchor: '100%',
	disabled: true,
	id: 'acu_ico_resultados_ejercicio', 
	name: 'acu_ico_resultados_ejercicio',
	enableKeyEvents: true,
	decimalPrecision: 7,	
	width: 300, 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_resultados_ejercicio', ayuda_acu_ico_resultados_ejercicio );
     	},
		'keyup' : function(){ 
					//formatoNumeroCampo(this); 
		} 
	}
} );

var acu_financieracontable_activos_pasivos_formpanel = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	height: largo_panel-15,
	layout: 'column',
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			border: false,
		    columnWidth: '1',
			id: 'acu_informacioncontable_balance_general_fieldset',
			defaultType: 'NumberField',
			labelWidth: 210,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
	   },
	   {
			xtype: 'fieldset',
			id: 'acu_informacioncontable_activos_fieldset',
			columnWidth: '.495',
			height: 300,
			title: 'Activos',
			defaultType: 'numberfield',
			labelWidth: 150,
			defaults: {labelStyle: 'font-size:1.0em;'},
			padding: 8,
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px 10px 10px;'
		},
		{xtype: 'panel', columnWidth: '.01' },
	    {
			xtype: 'fieldset',
			id: 'acu_informacioncontable_pasivos_fieldset',
			title: 'Pasivos',
			columnWidth: '.495',
			height: 300,
			defaultType: 'numberfield',
			labelWidth: 150,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
		}
	],
	buttons:[
		{
			text: 'Atras', 
			//iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('acueducto').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							acu_informacioncontable_activos_pasivos_subirdatos();
			}
	    }
	]
});

var acu_financieracontable_totales_formpanel = new Ext.form.FormPanel({
	hidden: true,
	autoWidth: true,
	border: false,
	layout: 'column',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			title: 'Resultados totales',
		    columnWidth: '1',
			id: 'acu_informacioncontable_totales_fieldset',
			defaultType: 'NumberField',
			labelWidth: 310,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			//iconCls: 'crear16', 
			handler: function(){
							acu_financieracontable_totales_formpanel.hide();
							acu_financieracontable_activos_pasivos_formpanel.show();
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							acu_informacioncontable_totales_subirdatos();
			}
	    }
	]
});

if(true){
	Ext.getCmp('acu_informacioncontable_balance_general_fieldset').add( acu_ico_balance_general );
	Ext.getCmp('acu_informacioncontable_activos_fieldset').add( [acu_ico_activos, acu_ico_activos_corrientes, acu_ico_efectivo, acu_ico_deudores, acu_ico_inventario, acu_ico_activos_fijos, acu_ico_propiedad_planta_equipos, acu_ico_otros_activos] );
	Ext.getCmp('acu_informacioncontable_pasivos_fieldset').add( [acu_ico_pasivos, acu_ico_pasivos_corrientes, acu_ico_obligaciones_financieras, acu_ico_otras_cuentas_por_pagar, acu_ico_obligaciones_laborales, acu_ico_otros_pasivos, acu_ico_patrimonio] );
	Ext.getCmp('acu_informacioncontable_totales_fieldset').add( [acu_ico_estado_de_resultados, acu_ico_total_ingresos, acu_ico_ingresos_operacionales, acu_ico_ingresos_no_operacionales, acu_ico_total_egresos, acu_ico_gastos_administrativos, acu_ico_costo_operacion_mantenimiento, acu_ico_costo_inversion, acu_ico_resultados_ejercicio] );
}

var form_acu_informacioncontable = new Ext.Panel({
	border: false,
	//layout: 'form',
	renderTo: 'div_form_acu_informacioncontable',
	autoWidth: true,
	items: [acu_financieracontable_activos_pasivos_formpanel, acu_financieracontable_totales_formpanel]
});

acu_informacioncontable_datastore.load({
  callback: function() {
	var record = acu_informacioncontable_datastore.getAt(0);
	acu_financieracontable_activos_pasivos_formpanel.getForm().loadRecord(record);
	acu_financieracontable_totales_formpanel.getForm().loadRecord(record);
  }
});

function acu_informacioncontable_activos_pasivos_subirdatos(){
	subirDatos(
		acu_financieracontable_activos_pasivos_formpanel, 
		'acueducto_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'activosPasivos', 
			acu_ico_activos: Ext.getCmp('acu_ico_activos').getValue(),
			acu_ico_pasivos: Ext.getCmp('acu_ico_pasivos').getValue()
		},
		function(){
			acu_financieracontable_activos_pasivos_formpanel.hide();
			acu_financieracontable_totales_formpanel.show();
		}
	);
}

function acu_informacioncontable_totales_subirdatos(){
	subirDatos(
		acu_financieracontable_totales_formpanel, 
		'acueducto_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'totales',
			acu_ico_total_ingresos: Ext.getCmp('acu_ico_total_ingresos').getValue(),
			acu_ico_total_egresos: Ext.getCmp('acu_ico_total_egresos').getValue(),
			acu_ico_resultados_ejercicio: Ext.getCmp('acu_ico_resultados_ejercicio').getValue()
		},
		function(){
			Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(1);
		}
	);
}

function acu_informacioncontable_calcularactivos(){
	Ext.getCmp('acu_ico_activos').setValue(
		Ext.getCmp('acu_ico_activos_corrientes').getValue() + 
		Ext.getCmp('acu_ico_efectivo').getValue() +
		Ext.getCmp('acu_ico_deudores').getValue() +
		Ext.getCmp('acu_ico_inventario').getValue() + 
		Ext.getCmp('acu_ico_activos_fijos').getValue() +
		Ext.getCmp('acu_ico_propiedad_planta_equipos').getValue() + 
		Ext.getCmp('acu_ico_otros_activos').getValue() 
	);
}

function acu_informacioncontable_calcularpasivos(){
	Ext.getCmp('acu_ico_pasivos').setValue(
		Ext.getCmp('acu_ico_pasivos_corrientes').getValue() + 
		Ext.getCmp('acu_ico_obligaciones_financieras').getValue() +
		Ext.getCmp('acu_ico_otras_cuentas_por_pagar').getValue() +
		Ext.getCmp('acu_ico_obligaciones_laborales').getValue() + 
		Ext.getCmp('acu_ico_otros_pasivos').getValue() +
		Ext.getCmp('acu_ico_patrimonio').getValue()
	);
}

function acu_informacioncontable_calcularingresos(){
	Ext.getCmp('acu_ico_total_ingresos').setValue(
		Ext.getCmp('acu_ico_ingresos_operacionales').getValue() + 
		Ext.getCmp('acu_ico_ingresos_no_operacionales').getValue()
	);
	
	Ext.getCmp('acu_ico_resultados_ejercicio').setValue(
		Ext.getCmp('acu_ico_total_ingresos').getValue() -
		Ext.getCmp('acu_ico_total_egresos').getValue()
	);
}

function acu_informacioncontable_calcularegresos(){
	Ext.getCmp('acu_ico_total_egresos').setValue(
		Ext.getCmp('acu_ico_gastos_administrativos').getValue() + 
		Ext.getCmp('acu_ico_costo_operacion_mantenimiento').getValue() + 
		Ext.getCmp('acu_ico_costo_inversion').getValue() 
	);
	
	Ext.getCmp('acu_ico_resultados_ejercicio').setValue(
		Ext.getCmp('acu_ico_total_ingresos').getValue() -
		Ext.getCmp('acu_ico_total_egresos').getValue()
	);
}


