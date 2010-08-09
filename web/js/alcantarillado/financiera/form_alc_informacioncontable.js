
var alc_informacioncontable_datastore = new Ext.data.Store({
	id: 'alc_informacioncontable_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'alcantarillado_informacioncontable/obtenerDatosAlcInformacionContable', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
			  {name: 'alc_ico_balance_general', type: 'int'},
			  {name: 'alc_ico_activos', type: 'float'},
			  {name: 'alc_ico_activos_corrientes', type: 'float'},
			  {name: 'alc_ico_efectivo', type: 'float'},
			  {name: 'alc_ico_deudores', type: 'float'},
			  {name: 'alc_ico_inventario', type: 'float'},
			  {name: 'alc_ico_activos_fijos', type: 'float'},
			  {name: 'alc_ico_propiedad_planta_equipos', type: 'float'},
			  {name: 'alc_ico_otros_activos', type: 'float'},
			  {name: 'alc_ico_pasivos', type: 'float'},
			  {name: 'alc_ico_pasivos_corrientes', type: 'float'},
			  {name: 'alc_ico_obligaciones_financieras', type: 'float'},
			  {name: 'alc_ico_otras_cuentas_por_pagar', type: 'float'},
			  {name: 'alc_ico_obligaciones_laborales', type: 'float'},
			  {name: 'alc_ico_otros_pasivos', type: 'float'},
			  {name: 'alc_ico_patrimonio', type: 'float'},
			  {name: 'alc_ico_estado_de_resultados', type: 'int'},
			  {name: 'alc_ico_total_ingresos', type: 'float'},
			  {name: 'alc_ico_ingresos_operacionales', type: 'float'},
			  {name: 'alc_ico_ingresos_no_operacionales', type: 'float'},
			  {name: 'alc_ico_total_egresos', type: 'float'},
			  {name: 'alc_ico_gastos_administrativos', type: 'float'},
			  {name: 'alc_ico_costo_operacion_mantenimiento', type: 'float'}, 
			  {name: 'alc_ico_costo_inversion', type: 'float'},
			  {name: 'alc_ico_resultados_ejercicio', type: 'float'}
	])
});

var alc_ico_balance_general = new Ext.form.TextField( {
	fieldLabel: 'Balance general a diciembre 30 de', 
	emptyText: '0',//// 'ingrese el año del balance general',
	disabled: true,
	id: 'alc_ico_balance_general', 
	name: 'alc_ico_balance_general',
	maxLength: 6,
	minLength: 0,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_balance_general', ayuda_alc_ico_balance_general );
     	}
	}
} );

//////********************** activos ************************///////////////

var alc_ico_activos = new Ext.form.TextField( {
	fieldLabel: 'Activos ($)', 
	emptyText: '0',//// 'ingrese los activos',
	id: 'alc_ico_activos',
	maxLength: 17,
	minLength: 0,
	disabled: true,
	name: 'alc_ico_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_activos', ayuda_alc_ico_activos );
     	}
	}
} );

var alc_ico_activos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Activos corrientes ($)', 
	emptyText: '0',//// 'ingrese los activos corrientes', 
	id: 'alc_ico_activos_corrientes',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'alc_ico_activos_corrientes', 
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_activos_corrientes', ayuda_alc_ico_activos_corrientes );
     	},
		'keyup' : function(){
					//alc_ico_activos_corrientes.setValue(Ext.util.Format.usMoney(alc_ico_activos_corrientes.getValue()));
					validar_formatear(alc_ico_activos_corrientes);
					alc_informacioncontable_calcularactivos(); 
		} 
	}
} );

var alc_ico_efectivo = new Ext.form.TextField( {
	fieldLabel: 'Efectivo (caja m&aacute;s bancos) ($)', 
	emptyText: '0',//// 'ingrese la cantidad de efectivo', 
	id: 'alc_ico_efectivo',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_efectivo',
	enableKeyEvents: true,
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_efectivo', ayuda_alc_ico_efectivo );
     	},
		'keyup' : function(){ 
					validar_formatear(alc_ico_efectivo);
					alc_informacioncontable_calcularactivos(); 
		} 
	}
} );

var alc_ico_deudores = new Ext.form.TextField( {  
	fieldLabel: 'Deudores (cuentas por cobrar) ($)', 
	emptyText: '0',//// 'ingrese la cantidad de deudores', 
	id: 'alc_ico_deudores',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_deudores',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_deudores', ayuda_alc_ico_deudores );
     	},
		'keyup' : function(){ 
					validar_formatear(alc_ico_deudores);
					alc_informacioncontable_calcularactivos(); 
		} 
	}
} );

var alc_ico_inventario = new Ext.form.TextField( {
	fieldLabel: 'Inventario ($)', 
	emptyText: '0',//// 'ingrese el inventario', 
	id: 'alc_ico_inventario',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_inventario',
	enableKeyEvents: true,
	anchor: '100%',
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_inventario', ayuda_alc_ico_inventario );
     	},
		'keyup' : function(){ 
					validar_formatear(alc_ico_inventario);
					alc_informacioncontable_calcularactivos(); 
		} 
	}
} );

var alc_ico_activos_fijos = new Ext.form.TextField( {
	fieldLabel: 'Activos fijos ($)', 
	emptyText: '0',//// 'ingrese los activos fijos', 
	id: 'alc_ico_activos_fijos',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_activos_fijos', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_activos_fijos', ayuda_alc_ico_activos_fijos );
     	},
		'keyup' : function(){ 
					validar_formatear(alc_ico_activos_fijos);
					alc_informacioncontable_calcularactivos();  
		} 
	}
} );

var alc_ico_propiedad_planta_equipos = new Ext.form.TextField( {
	fieldLabel: 'Propiedad, planta y equipos ($)', 
	emptyText: '0',//// 'ingrese la cantidad en bienes', 
	id: 'alc_ico_propiedad_planta_equipos',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'alc_ico_propiedad_planta_equipos', 
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_propiedad_planta_equipos', ayuda_alc_ico_propiedad_planta_equipos );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_propiedad_planta_equipos);
					alc_informacioncontable_calcularactivos(); 
		} 
	}
} );

var alc_ico_otros_activos = new Ext.form.TextField( { 
	fieldLabel: 'Otros activos ($)', 
	emptyText: '0',//// 'ingrese la cantidad de otros activos', 
	id: 'alc_ico_otros_activos',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_otros_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_otros_activos', ayuda_alc_ico_otros_activos );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_otros_activos);
					alc_informacioncontable_calcularactivos(); 
		} 
	}
} );

//////************ pasivos ***************//////////

var alc_ico_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Pasivos ($)', 
	disabled: true,
	emptyText: '0',//// 'ingrese los pasivos', 
	id: 'alc_ico_pasivos',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_pasivos', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_pasivos', ayuda_alc_ico_pasivos );
     	},
		'keyup' : function(){
					//formatoNumeroCampo(this); 
		} 
	}
} );

var alc_ico_pasivos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Pasivos corrientes ($)', 
	emptyText: '0',//// 'ingrese los pasivos corrientes', 
	id: 'alc_ico_pasivos_corrientes',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_pasivos_corrientes',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_pasivos_corrientes', ayuda_alc_ico_pasivos_corrientes );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_pasivos_corrientes);
					alc_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var alc_ico_obligaciones_financieras = new Ext.form.TextField( { 
	fieldLabel: 'Obligaciones financieras (bancos o similares) ($)', 
	emptyText: '0',//// 'ingrese las obligaciones financieras', 
	id: 'alc_ico_obligaciones_financieras',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_obligaciones_financieras',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_obligaciones_financieras', ayuda_alc_ico_obligaciones_financieras );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_obligaciones_financieras);
					alc_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var alc_ico_otras_cuentas_por_pagar = new Ext.form.TextField( { 
	fieldLabel: 'Otras cuentas por pagar (proveedores) ($)', 
	emptyText: '0',//// 'ingrese otras cuentas por pagar', 
	id: 'alc_ico_otras_cuentas_por_pagar',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_otras_cuentas_por_pagar',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_otras_cuentas_por_pagar', ayuda_alc_ico_otras_cuentas_por_pagar );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_otras_cuentas_por_pagar);
					alc_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var alc_ico_obligaciones_laborales = new Ext.form.TextField( {
	fieldLabel: 'Obligaciones laborales y de seguridad social ($)', 
	emptyText: '0',//// 'ingrese el valor de las obligaciones laborales', 
	id: 'alc_ico_obligaciones_laborales',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_obligaciones_laborales', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_obligaciones_laborales', ayuda_alc_ico_obligaciones_laborales );
     	},
		'keyup' : function(){ 
					validar_formatear(alc_ico_obligaciones_laborales);
					alc_informacioncontable_calcularpasivos(); 
		} 
	}
} );
	
var alc_ico_otros_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Otros pasivos ($)', 
	emptyText: '0',//// 'ingrese otros pasivos', 
	id: 'alc_ico_otros_pasivos',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_otros_pasivos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_otros_pasivos', ayuda_alc_ico_otros_pasivos );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_otros_pasivos);
					alc_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var alc_ico_patrimonio = new Ext.form.TextField( {
	fieldLabel: 'Patrimonio ($)', 
	emptyText: '0',//// 'ingrese el patrimonio', 
	id: 'alc_ico_patrimonio',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_patrimonio',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_patrimonio', ayuda_alc_ico_patrimonio );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_patrimonio);
					alc_informacioncontable_calcularpasivos(); 
		} 
	}
} );

//////****************** totales *****************//////////////////////

var alc_ico_estado_de_resultados = new Ext.form.TextField( { 
	fieldLabel: 'Estado de resultados entre enero 1 y diciembre 31 de', 
	emptyText: '0',//// 'ingrese el año de los resultados',
	disabled: true,
	id: 'alc_ico_estado_de_resultados',
	maxLength: 6,
	minLength: 0,
	name: 'alc_ico_estado_de_resultados', 
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_estado_de_resultados', ayuda_alc_ico_estado_de_resultados );
     	}
	}
} );

var alc_ico_total_ingresos = new Ext.form.TextField( {
	fieldLabel: 'Total de ingresos ($)', 
	emptyText: '0',//// 'ingrese el total de ingresos',
	anchor: '100%',
	id: 'alc_ico_total_ingresos',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'alc_ico_total_ingresos',
	disabled: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_total_ingresos', ayuda_alc_ico_total_ingresos );
     	}
	}
} );

var alc_ico_ingresos_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos operacionales ($)', 
	emptyText: '0',//// 'ingrese los ingresos operacionales',
	anchor: '100%',
	enableKeyEvents: true,
	id: 'alc_ico_ingresos_operacionales',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_ingresos_operacionales', 
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_ingresos_operacionales', ayuda_alc_ico_ingresos_operacionales );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_ingresos_operacionales);
					alc_informacioncontable_calcularingresos(); 
		} 
	}
} );

var alc_ico_ingresos_no_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos no operacionales ($)', 
	emptyText: '0',//// 'ingrese los ingresos no operacionales',
	anchor: '100%',
	id: 'alc_ico_ingresos_no_operacionales',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_ingresos_no_operacionales',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_ingresos_no_operacionales', ayuda_alc_ico_ingresos_no_operacionales );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_ingresos_no_operacionales);
					alc_informacioncontable_calcularingresos(); 
		} 
	}
} );

var alc_ico_total_egresos = new Ext.form.TextField( {
	fieldLabel: 'Total de egresos ($)', 
	emptyText: '0',//// 'ingrese el total de egresos',
	anchor: '100%',
	id: 'alc_ico_total_egresos',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_total_egresos',
	enableKeyEvents: true,
	disabled: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_total_egresos', ayuda_alc_ico_total_egresos );
     	}
	}
} );

var alc_ico_gastos_administrativos = new Ext.form.TextField( { 
	fieldLabel: 'Gastos administrativos ($)', 
	emptyText: '0',//// 'ingrese los gastos administrativos',
	anchor: '100%',
	id: 'alc_ico_gastos_administrativos',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_gastos_administrativos',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_gastos_administrativos', ayuda_alc_ico_gastos_administrativos );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_gastos_administrativos);
					alc_informacioncontable_calcularegresos(); 
		} 
	}
} );

var alc_ico_costo_operacion_mantenimiento = new Ext.form.TextField( {
	fieldLabel: 'Costos de operacion y mantenimiento ($)', 
	emptyText: '0',//// 'ingrese los costos de operacion y mantenimiento',
	anchor: '100%',
	id: 'alc_ico_costo_operacion_mantenimiento',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_costo_operacion_mantenimiento',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_costo_operacion_mantenimiento', ayuda_alc_ico_costo_operacion_mantenimiento );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_costo_operacion_mantenimiento);
					alc_informacioncontable_calcularegresos(); 
		} 
	}
} );

var alc_ico_costo_inversion = new Ext.form.TextField( {
	fieldLabel: 'Costos de inversion ($)', 
	emptyText: '0',//// 'ingrese los costos de inversion',
	anchor: '100%',
	id: 'alc_ico_costo_inversion',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_costo_inversion',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_costo_inversion', ayuda_alc_ico_costo_inversion );
     	},
		'keyup' : function(){
					validar_formatear(alc_ico_costo_inversion);
					alc_informacioncontable_calcularegresos(); 
		} 
	}
} );

var alc_ico_resultados_ejercicio = new Ext.form.TextField( {
	fieldLabel: 'Resultados del ejercicio ($)', 
	emptyText: '0',//// 'ingrese los resultados del ejercicio',
	anchor: '100%',
	disabled: true,
	id: 'alc_ico_resultados_ejercicio',
	maxLength: 17,
	minLength: 0,
	name: 'alc_ico_resultados_ejercicio',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_resultados_ejercicio', ayuda_alc_ico_resultados_ejercicio );
     	}
	}
} );

var alc_financieracontable_activos_pasivos_formpanel = new Ext.form.FormPanel({
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
			id: 'alc_informacioncontable_balance_general_fieldset',
			defaultType: 'TextField',
			labelWidth: 210,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
	   },
	   {
			xtype: 'fieldset',
			id: 'alc_informacioncontable_activos_fieldset',
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
			id: 'alc_informacioncontable_pasivos_fieldset',
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
							Ext.getCmp('alcantarillado').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							alc_informacioncontable_activos_pasivos_subirdatos();
			}
	    }
	]
});

var alc_informacioncontable_fieldarray = new Array(
	alc_ico_activos,
	alc_ico_activos_corrientes,
	alc_ico_efectivo, 
	alc_ico_deudores, 
	alc_ico_inventario, 
	alc_ico_activos_fijos, 
	alc_ico_propiedad_planta_equipos, 
	alc_ico_otros_activos, 
	alc_ico_pasivos, 
	alc_ico_pasivos_corrientes, 
	alc_ico_obligaciones_financieras, 
	alc_ico_otras_cuentas_por_pagar, 
	alc_ico_obligaciones_laborales, 
	alc_ico_otros_pasivos, 
	alc_ico_patrimonio, 
	alc_ico_total_ingresos, 
	alc_ico_ingresos_operacionales, 
	alc_ico_ingresos_no_operacionales, 
	alc_ico_total_egresos, 
	alc_ico_gastos_administrativos, 
	alc_ico_costo_operacion_mantenimiento,  
	alc_ico_costo_inversion, 
	alc_ico_resultados_ejercicio
);

var alc_financieracontable_totales_formpanel = new Ext.form.FormPanel({
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
			id: 'alc_informacioncontable_totales_fieldset',
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
							alc_financieracontable_totales_formpanel.hide();
							alc_financieracontable_activos_pasivos_formpanel.show();
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							alc_informacioncontable_totales_subirdatos();
			}
	    }
	]
});

if(true){
	Ext.getCmp('alc_informacioncontable_balance_general_fieldset').add( alc_ico_balance_general );
	Ext.getCmp('alc_informacioncontable_activos_fieldset').add( [alc_ico_activos, alc_ico_activos_corrientes, alc_ico_efectivo, alc_ico_deudores, alc_ico_inventario, alc_ico_activos_fijos, alc_ico_propiedad_planta_equipos, alc_ico_otros_activos] );
	Ext.getCmp('alc_informacioncontable_pasivos_fieldset').add( [alc_ico_pasivos, alc_ico_pasivos_corrientes, alc_ico_obligaciones_financieras, alc_ico_otras_cuentas_por_pagar, alc_ico_obligaciones_laborales, alc_ico_otros_pasivos, alc_ico_patrimonio] );
	Ext.getCmp('alc_informacioncontable_totales_fieldset').add( [alc_ico_estado_de_resultados, alc_ico_total_ingresos, alc_ico_ingresos_operacionales, alc_ico_ingresos_no_operacionales, alc_ico_total_egresos, alc_ico_gastos_administrativos, alc_ico_costo_operacion_mantenimiento, alc_ico_costo_inversion, alc_ico_resultados_ejercicio] );
}

var form_alc_informacioncontable = new Ext.Panel({
	border: false,
	//layout: 'form',
	renderTo: 'div_form_alc_informacioncontable',
	autoWidth: true,
	items: [alc_financieracontable_activos_pasivos_formpanel, alc_financieracontable_totales_formpanel]
});

alc_informacioncontable_datastore.load({
	callback: function() {
		var record = alc_informacioncontable_datastore.getAt(0);
		alc_financieracontable_activos_pasivos_formpanel.getForm().loadRecord(record);
		alc_financieracontable_totales_formpanel.getForm().loadRecord(record);
		alc_informacioncontable_formatear();
	}
});

function alc_informacioncontable_activos_pasivos_subirdatos(){
	//alc_informacioncontable_desformatear();

	subirDatos(
		alc_financieracontable_activos_pasivos_formpanel, 
		'alcantarillado_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'activosPasivos', 
			alc_ico_activos: parseFloat(quitarFormatoNumeroCampo(alc_ico_activos)),
			alc_ico_pasivos: parseFloat(quitarFormatoNumeroCampo(alc_ico_pasivos))
		},
		function(){
			alc_financieracontable_activos_pasivos_formpanel.hide();
			alc_financieracontable_totales_formpanel.show();
			//alc_informacioncontable_formatear();
		}
	);
}

function alc_informacioncontable_totales_subirdatos(){
	//alc_informacioncontable_desformatear();
	
	subirDatos(
		alc_financieracontable_totales_formpanel, 
		'alcantarillado_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'totales',
			alc_ico_total_ingresos: parseFloat(quitarFormatoNumeroCampo(alc_ico_total_ingresos)),
			alc_ico_total_egresos: parseFloat(quitarFormatoNumeroCampo(alc_ico_total_egresos)),
			alc_ico_resultados_ejercicio: parseFloat(quitarFormatoNumeroCampo(alc_ico_resultados_ejercicio))
		},
		function(){
			//alc_informacioncontable_formatear();
			Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(1);
		}
	);
}

function alc_informacioncontable_calcularactivos(){
	alc_ico_activos.setValue(
		parseFloat(quitarFormatoNumeroCampo(alc_ico_activos_corrientes)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_efectivo)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_deudores)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_inventario)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_activos_fijos)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_propiedad_planta_equipos)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_otros_activos))
	);
	validar_formatear(alc_ico_activos);
}

function alc_informacioncontable_calcularpasivos(){
	alc_ico_pasivos.setValue(
		parseFloat(quitarFormatoNumeroCampo(alc_ico_pasivos_corrientes)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_obligaciones_financieras)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_otras_cuentas_por_pagar)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_obligaciones_laborales)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_otros_pasivos)) +
		parseFloat(quitarFormatoNumeroCampo(alc_ico_patrimonio))
	);
	validar_formatear(alc_ico_pasivos);
}

function alc_informacioncontable_calcularingresos(){
	alc_ico_total_ingresos.setValue(
		parseFloat(quitarFormatoNumeroCampo(alc_ico_ingresos_operacionales)) + 
		parseFloat(quitarFormatoNumeroCampo(alc_ico_ingresos_no_operacionales))
	);
	
	alc_ico_resultados_ejercicio.setValue(
		parseFloat(quitarFormatoNumeroCampo(alc_ico_total_ingresos)) -
		parseFloat(quitarFormatoNumeroCampo(alc_ico_total_egresos))
	);
	validar_formatear(alc_ico_total_ingresos);
	validar_formatear(alc_ico_resultados_ejercicio);
}

function alc_informacioncontable_calcularegresos(){
	alc_ico_total_egresos.setValue(
		parseFloat(quitarFormatoNumeroCampo(alc_ico_gastos_administrativos)) + 
		parseFloat(quitarFormatoNumeroCampo(alc_ico_costo_operacion_mantenimiento)) + 
		parseFloat(quitarFormatoNumeroCampo(alc_ico_costo_inversion))
	);
	
	alc_ico_resultados_ejercicio.setValue(
		parseFloat(quitarFormatoNumeroCampo(alc_ico_total_ingresos)) -
		parseFloat(quitarFormatoNumeroCampo(alc_ico_total_egresos))
	);
	validar_formatear(alc_ico_total_egresos);
	validar_formatear(alc_ico_resultados_ejercicio);
}

function alc_informacioncontable_desformatear(){
	for(e = 0; e < alc_informacioncontable_fieldarray.length ; e++){
		(alc_informacioncontable_fieldarray[e]).setValue(quitarFormatoNumeroCampo(alc_informacioncontable_fieldarray[e]));
	}
}

function alc_informacioncontable_formatear(){
	for(e = 0; e < alc_informacioncontable_fieldarray.length ; e++){
		validar_formatear(alc_informacioncontable_fieldarray[e]);
	}
}
