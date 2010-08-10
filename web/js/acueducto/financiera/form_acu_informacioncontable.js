
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

var acu_ico_balance_general = new Ext.form.TextField( {
	fieldLabel: 'Balance general a diciembre 30 de', 
	emptyText: '0',//// 'ingrese el año del balance general',
	disabled: true,
	id: 'acu_ico_balance_general', 
	name: 'acu_ico_balance_general',
	maxLength: 6,
	minLength: 0,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_balance_general', ayuda_acu_ico_balance_general );
     	}
	}
} );

//////********************** activos ************************///////////////

var acu_ico_activos = new Ext.form.TextField( {
	fieldLabel: 'Activos ($)', 
	emptyText: '0',//// 'ingrese los activos',
	id: 'acu_ico_activos',
	maxLength: 17,
	minLength: 0,
	disabled: true,
	name: 'acu_ico_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_activos', ayuda_acu_ico_activos );
     	}
	}
} );

var acu_ico_activos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Activos corrientes ($)', 
	emptyText: '0',//// 'ingrese los activos corrientes', 
	id: 'acu_ico_activos_corrientes',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'acu_ico_activos_corrientes', 
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_activos_corrientes', ayuda_acu_ico_activos_corrientes );
     	},
		'keyup' : function(){
					//acu_ico_activos_corrientes.setValue(Ext.util.Format.usMoney(acu_ico_activos_corrientes.getValue()));
					validar_formatear(acu_ico_activos_corrientes);
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_efectivo = new Ext.form.TextField( {
	fieldLabel: 'Efectivo (caja m&aacute;s bancos) ($)', 
	emptyText: '0',//// 'ingrese la cantidad de efectivo', 
	id: 'acu_ico_efectivo',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_efectivo',
	enableKeyEvents: true,
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_efectivo', ayuda_acu_ico_efectivo );
     	},
		'keyup' : function(){ 
					validar_formatear(acu_ico_efectivo);
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_deudores = new Ext.form.TextField( {  
	fieldLabel: 'Deudores (cuentas por cobrar) ($)', 
	emptyText: '0',//// 'ingrese la cantidad de deudores', 
	id: 'acu_ico_deudores',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_deudores',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_deudores', ayuda_acu_ico_deudores );
     	},
		'keyup' : function(){ 
					validar_formatear(acu_ico_deudores);
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_inventario = new Ext.form.TextField( {
	fieldLabel: 'Inventario ($)', 
	emptyText: '0',//// 'ingrese el inventario', 
	id: 'acu_ico_inventario',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_inventario',
	enableKeyEvents: true,
	anchor: '100%',
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_inventario', ayuda_acu_ico_inventario );
     	},
		'keyup' : function(){ 
					validar_formatear(acu_ico_inventario);
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_activos_fijos = new Ext.form.TextField( {
	fieldLabel: 'Activos fijos ($)', 
	emptyText: '0',//// 'ingrese los activos fijos', 
	id: 'acu_ico_activos_fijos',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_activos_fijos', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_activos_fijos', ayuda_acu_ico_activos_fijos );
     	},
		'keyup' : function(){ 
					validar_formatear(acu_ico_activos_fijos);
					acu_informacioncontable_calcularactivos();  
		} 
	}
} );

var acu_ico_propiedad_planta_equipos = new Ext.form.TextField( {
	fieldLabel: 'Propiedad, planta y equipos ($)', 
	emptyText: '0',//// 'ingrese la cantidad en bienes', 
	id: 'acu_ico_propiedad_planta_equipos',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'acu_ico_propiedad_planta_equipos', 
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_propiedad_planta_equipos', ayuda_acu_ico_propiedad_planta_equipos );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_propiedad_planta_equipos);
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

var acu_ico_otros_activos = new Ext.form.TextField( { 
	fieldLabel: 'Otros activos ($)', 
	emptyText: '0',//// 'ingrese la cantidad de otros activos', 
	id: 'acu_ico_otros_activos',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_otros_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_otros_activos', ayuda_acu_ico_otros_activos );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_otros_activos);
					acu_informacioncontable_calcularactivos(); 
		} 
	}
} );

//////************ pasivos ***************//////////

var acu_ico_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Pasivos ($)', 
	disabled: true,
	emptyText: '0',//// 'ingrese los pasivos', 
	id: 'acu_ico_pasivos',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_pasivos', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_pasivos', ayuda_acu_ico_pasivos );
     	},
		'keyup' : function(){
					//formatoNumeroCampo(this); 
		} 
	}
} );

var acu_ico_pasivos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Pasivos corrientes ($)', 
	emptyText: '0',//// 'ingrese los pasivos corrientes', 
	id: 'acu_ico_pasivos_corrientes',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_pasivos_corrientes',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_pasivos_corrientes', ayuda_acu_ico_pasivos_corrientes );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_pasivos_corrientes);
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_obligaciones_financieras = new Ext.form.TextField( { 
	fieldLabel: 'Obligaciones financieras (bancos o similares) ($)', 
	emptyText: '0',//// 'ingrese las obligaciones financieras', 
	id: 'acu_ico_obligaciones_financieras',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_obligaciones_financieras',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_obligaciones_financieras', ayuda_acu_ico_obligaciones_financieras );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_obligaciones_financieras);
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_otras_cuentas_por_pagar = new Ext.form.TextField( { 
	fieldLabel: 'Otras cuentas por pagar (proveedores) ($)', 
	emptyText: '0',//// 'ingrese otras cuentas por pagar', 
	id: 'acu_ico_otras_cuentas_por_pagar',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_otras_cuentas_por_pagar',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_otras_cuentas_por_pagar', ayuda_acu_ico_otras_cuentas_por_pagar );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_otras_cuentas_por_pagar);
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_obligaciones_laborales = new Ext.form.TextField( {
	fieldLabel: 'Obligaciones laborales y de seguridad social ($)', 
	emptyText: '0',//// 'ingrese el valor de las obligaciones laborales', 
	id: 'acu_ico_obligaciones_laborales',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_obligaciones_laborales', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_obligaciones_laborales', ayuda_acu_ico_obligaciones_laborales );
     	},
		'keyup' : function(){ 
					validar_formatear(acu_ico_obligaciones_laborales);
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );
	
var acu_ico_otros_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Otros pasivos ($)', 
	emptyText: '0',//// 'ingrese otros pasivos', 
	id: 'acu_ico_otros_pasivos',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_otros_pasivos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_otros_pasivos', ayuda_acu_ico_otros_pasivos );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_otros_pasivos);
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var acu_ico_patrimonio = new Ext.form.TextField( {
	fieldLabel: 'Patrimonio ($)', 
	emptyText: '0',//// 'ingrese el patrimonio', 
	id: 'acu_ico_patrimonio',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_patrimonio',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_patrimonio', ayuda_acu_ico_patrimonio );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_patrimonio);
					acu_informacioncontable_calcularpasivos(); 
		} 
	}
} );

//////****************** totales *****************//////////////////////

var acu_ico_estado_de_resultados = new Ext.form.TextField( { 
	fieldLabel: 'Estado de resultados entre enero 1 y diciembre 31 de', 
	emptyText: '0',//// 'ingrese el año de los resultados',
	disabled: true,
	id: 'acu_ico_estado_de_resultados',
	maxLength: 6,
	minLength: 0,
	name: 'acu_ico_estado_de_resultados', 
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_estado_de_resultados', ayuda_acu_ico_estado_de_resultados );
     	}
	}
} );

var acu_ico_total_ingresos = new Ext.form.TextField( {
	fieldLabel: 'Total de ingresos ($)', 
	emptyText: '0',//// 'ingrese el total de ingresos',
	anchor: '100%',
	id: 'acu_ico_total_ingresos',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'acu_ico_total_ingresos',
	disabled: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_total_ingresos', ayuda_acu_ico_total_ingresos );
     	}
	}
} );

var acu_ico_ingresos_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos operacionales ($)', 
	emptyText: '0',//// 'ingrese los ingresos operacionales',
	anchor: '100%',
	enableKeyEvents: true,
	id: 'acu_ico_ingresos_operacionales',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_ingresos_operacionales', 
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_ingresos_operacionales', ayuda_acu_ico_ingresos_operacionales );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_ingresos_operacionales);
					acu_informacioncontable_calcularingresos(); 
		} 
	}
} );

var acu_ico_ingresos_no_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos no operacionales ($)', 
	emptyText: '0',//// 'ingrese los ingresos no operacionales',
	anchor: '100%',
	id: 'acu_ico_ingresos_no_operacionales',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_ingresos_no_operacionales',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_ingresos_no_operacionales', ayuda_acu_ico_ingresos_no_operacionales );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_ingresos_no_operacionales);
					acu_informacioncontable_calcularingresos(); 
		} 
	}
} );

var acu_ico_total_egresos = new Ext.form.TextField( {
	fieldLabel: 'Total de egresos ($)', 
	emptyText: '0',//// 'ingrese el total de egresos',
	anchor: '100%',
	id: 'acu_ico_total_egresos',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_total_egresos',
	enableKeyEvents: true,
	disabled: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_total_egresos', ayuda_acu_ico_total_egresos );
     	}
	}
} );

var acu_ico_gastos_administrativos = new Ext.form.TextField( { 
	fieldLabel: 'Gastos administrativos ($)', 
	emptyText: '0',//// 'ingrese los gastos administrativos',
	anchor: '100%',
	id: 'acu_ico_gastos_administrativos',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_gastos_administrativos',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_gastos_administrativos', ayuda_acu_ico_gastos_administrativos );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_gastos_administrativos);
					acu_informacioncontable_calcularegresos(); 
		} 
	}
} );

var acu_ico_costo_operacion_mantenimiento = new Ext.form.TextField( {
	fieldLabel: 'Costos de operacion y mantenimiento ($)', 
	emptyText: '0',//// 'ingrese los costos de operacion y mantenimiento',
	anchor: '100%',
	id: 'acu_ico_costo_operacion_mantenimiento',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_costo_operacion_mantenimiento',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_costo_operacion_mantenimiento', ayuda_acu_ico_costo_operacion_mantenimiento );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_costo_operacion_mantenimiento);
					acu_informacioncontable_calcularegresos(); 
		} 
	}
} );

var acu_ico_costo_inversion = new Ext.form.TextField( {
	fieldLabel: 'Costos de inversion ($)', 
	emptyText: '0',//// 'ingrese los costos de inversion',
	anchor: '100%',
	id: 'acu_ico_costo_inversion',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_costo_inversion',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_costo_inversion', ayuda_acu_ico_costo_inversion );
     	},
		'keyup' : function(){
					validar_formatear(acu_ico_costo_inversion);
					acu_informacioncontable_calcularegresos(); 
		} 
	}
} );

var acu_ico_resultados_ejercicio = new Ext.form.TextField( {
	fieldLabel: 'Resultados del ejercicio ($)', 
	emptyText: '0',//// 'ingrese los resultados del ejercicio',
	anchor: '100%',
	disabled: true,
	id: 'acu_ico_resultados_ejercicio',
	maxLength: 17,
	minLength: 0,
	name: 'acu_ico_resultados_ejercicio',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'acu_ico_resultados_ejercicio', ayuda_acu_ico_resultados_ejercicio );
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
			defaultType: 'TextField',
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

var acu_informacioncontable_fieldarray = new Array(
	acu_ico_activos,
	acu_ico_activos_corrientes,
	acu_ico_efectivo, 
	acu_ico_deudores, 
	acu_ico_inventario, 
	acu_ico_activos_fijos, 
	acu_ico_propiedad_planta_equipos, 
	acu_ico_otros_activos, 
	acu_ico_pasivos, 
	acu_ico_pasivos_corrientes, 
	acu_ico_obligaciones_financieras, 
	acu_ico_otras_cuentas_por_pagar, 
	acu_ico_obligaciones_laborales, 
	acu_ico_otros_pasivos, 
	acu_ico_patrimonio, 
	acu_ico_total_ingresos, 
	acu_ico_ingresos_operacionales, 
	acu_ico_ingresos_no_operacionales, 
	acu_ico_total_egresos, 
	acu_ico_gastos_administrativos, 
	acu_ico_costo_operacion_mantenimiento,  
	acu_ico_costo_inversion, 
	acu_ico_resultados_ejercicio
);

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
			defaultType: 'TextField',
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
		acu_informacioncontable_formatear();
	}
});

function acu_informacioncontable_activos_pasivos_subirdatos(){
	//acu_informacioncontable_desformatear();

	subirDatos(
		acu_financieracontable_activos_pasivos_formpanel, 
		'acueducto_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'activosPasivos', 
			acu_ico_activos: parseFloat(quitarFormatoNumeroCampo(acu_ico_activos)),
			acu_ico_pasivos: parseFloat(quitarFormatoNumeroCampo(acu_ico_pasivos))
		},
		function(){
			acu_financieracontable_activos_pasivos_formpanel.hide();
			acu_financieracontable_totales_formpanel.show();
			//acu_informacioncontable_formatear();
		}
	);
}

function acu_informacioncontable_totales_subirdatos(){
	//acu_informacioncontable_desformatear();
	
	subirDatos(
		acu_financieracontable_totales_formpanel, 
		'acueducto_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'totales',
			acu_ico_total_ingresos: parseFloat(quitarFormatoNumeroCampo(acu_ico_total_ingresos)),
			acu_ico_total_egresos: parseFloat(quitarFormatoNumeroCampo(acu_ico_total_egresos)),
			acu_ico_resultados_ejercicio: parseFloat(quitarFormatoNumeroCampo(acu_ico_resultados_ejercicio))
		},
		function(){
			//acu_informacioncontable_formatear();
			Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(1);
		}
	);
}

function acu_informacioncontable_calcularactivos(){
	acu_ico_activos.setValue(
		parseFloat(quitarFormatoNumeroCampo(acu_ico_activos_corrientes)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_efectivo)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_deudores)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_inventario)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_activos_fijos)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_propiedad_planta_equipos)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_otros_activos))
	);
	validar_formatear(acu_ico_activos);
}

function acu_informacioncontable_calcularpasivos(){
	acu_ico_pasivos.setValue(
		parseFloat(quitarFormatoNumeroCampo(acu_ico_pasivos_corrientes)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_obligaciones_financieras)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_otras_cuentas_por_pagar)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_obligaciones_laborales)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_otros_pasivos)) +
		parseFloat(quitarFormatoNumeroCampo(acu_ico_patrimonio))
	);
	validar_formatear(acu_ico_pasivos);
}

function acu_informacioncontable_calcularingresos(){
	acu_ico_total_ingresos.setValue(
		parseFloat(quitarFormatoNumeroCampo(acu_ico_ingresos_operacionales)) + 
		parseFloat(quitarFormatoNumeroCampo(acu_ico_ingresos_no_operacionales))
	);
	
	acu_ico_resultados_ejercicio.setValue(
		parseFloat(quitarFormatoNumeroCampo(acu_ico_total_ingresos)) -
		parseFloat(quitarFormatoNumeroCampo(acu_ico_total_egresos))
	);
	validar_formatear(acu_ico_total_ingresos);
	validar_formatear(acu_ico_resultados_ejercicio);
}

function acu_informacioncontable_calcularegresos(){
	acu_ico_total_egresos.setValue(
		parseFloat(quitarFormatoNumeroCampo(acu_ico_gastos_administrativos)) + 
		parseFloat(quitarFormatoNumeroCampo(acu_ico_costo_operacion_mantenimiento)) + 
		parseFloat(quitarFormatoNumeroCampo(acu_ico_costo_inversion))
	);
	
	acu_ico_resultados_ejercicio.setValue(
		parseFloat(quitarFormatoNumeroCampo(acu_ico_total_ingresos)) -
		parseFloat(quitarFormatoNumeroCampo(acu_ico_total_egresos))
	);
	validar_formatear(acu_ico_total_egresos);
	validar_formatear(acu_ico_resultados_ejercicio);
}

function acu_informacioncontable_desformatear(){
	for(e = 0; e < acu_informacioncontable_fieldarray.length ; e++){
		(acu_informacioncontable_fieldarray[e]).setValue(quitarFormatoNumeroCampo(acu_informacioncontable_fieldarray[e]));
	}
}

function acu_informacioncontable_formatear(){
	for(e = 0; e < acu_informacioncontable_fieldarray.length ; e++){
		validar_formatear(acu_informacioncontable_fieldarray[e]);
	}
}
