
var ase_informacioncontable_datastore = new Ext.data.Store({
	id: 'ase_informacioncontable_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo_informacioncontable/obtenerDatosAseInformacionContable', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
			  {name: 'ase_ico_balance_general', type: 'int'},
			  {name: 'ase_ico_activos', type: 'float'},
			  {name: 'ase_ico_activos_corrientes', type: 'float'},
			  {name: 'ase_ico_efectivo', type: 'float'},
			  {name: 'ase_ico_deudores', type: 'float'},
			  {name: 'ase_ico_inventario', type: 'float'},
			  {name: 'ase_ico_activos_fijos', type: 'float'},
			  {name: 'ase_ico_propiedad_planta_equipos', type: 'float'},
			  {name: 'ase_ico_otros_activos', type: 'float'},
			  {name: 'ase_ico_pasivos', type: 'float'},
			  {name: 'ase_ico_pasivos_corrientes', type: 'float'},
			  {name: 'ase_ico_obligaciones_financieras', type: 'float'},
			  {name: 'ase_ico_otras_cuentas_por_pagar', type: 'float'},
			  {name: 'ase_ico_obligaciones_laborales', type: 'float'},
			  {name: 'ase_ico_otros_pasivos', type: 'float'},
			  {name: 'ase_ico_patrimonio', type: 'float'},
			  {name: 'ase_ico_estado_de_resultados', type: 'int'},
			  {name: 'ase_ico_total_ingresos', type: 'float'},
			  {name: 'ase_ico_ingresos_operacionales', type: 'float'},
			  {name: 'ase_ico_ingresos_no_operacionales', type: 'float'},
			  {name: 'ase_ico_total_egresos', type: 'float'},
			  {name: 'ase_ico_gastos_administrativos', type: 'float'},
			  {name: 'ase_ico_costo_operacion_mantenimiento', type: 'float'}, 
			  {name: 'ase_ico_costo_inversion', type: 'float'},
			  {name: 'ase_ico_resultados_ejercicio', type: 'float'}
	])
});

var ase_ico_balance_general = new Ext.form.TextField( {
	fieldLabel: 'Balance general a diciembre 30 de', 
	emptyText: '0',//// 'ingrese el año del balance general',
	disabled: true,
	id: 'ase_ico_balance_general', 
	name: 'ase_ico_balance_general',
	maxLength: 6,
	minLength: 0,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_balance_general', ayuda_ase_ico_balance_general );
     	}
	}
} );

//////********************** activos ************************///////////////

var ase_ico_activos = new Ext.form.TextField( {
	fieldLabel: 'Activos ($)', 
	emptyText: '0',//// 'ingrese los activos',
	id: 'ase_ico_activos',
	maxLength: 17,
	minLength: 0,
	disabled: true,
	name: 'ase_ico_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_activos', ayuda_ase_ico_activos );
     	}
	}
} );

var ase_ico_activos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Activos corrientes ($)', 
	emptyText: '0',//// 'ingrese los activos corrientes', 
	id: 'ase_ico_activos_corrientes',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'ase_ico_activos_corrientes', 
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_activos_corrientes', ayuda_ase_ico_activos_corrientes );
     	},
		'keyup' : function(){
					//ase_ico_activos_corrientes.setValue(Ext.util.Format.usMoney(ase_ico_activos_corrientes.getValue()));
					validar_formatear(ase_ico_activos_corrientes);
					ase_informacioncontable_calcularactivos(); 
		} 
	}
} );

var ase_ico_efectivo = new Ext.form.TextField( {
	fieldLabel: 'Efectivo (caja m&aacute;s bancos) ($)', 
	emptyText: '0',//// 'ingrese la cantidad de efectivo', 
	id: 'ase_ico_efectivo',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_efectivo',
	enableKeyEvents: true,
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_efectivo', ayuda_ase_ico_efectivo );
     	},
		'keyup' : function(){ 
					validar_formatear(ase_ico_efectivo);
					ase_informacioncontable_calcularactivos(); 
		} 
	}
} );

var ase_ico_deudores = new Ext.form.TextField( {  
	fieldLabel: 'Deudores (cuentas por cobrar) ($)', 
	emptyText: '0',//// 'ingrese la cantidad de deudores', 
	id: 'ase_ico_deudores',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_deudores',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_deudores', ayuda_ase_ico_deudores );
     	},
		'keyup' : function(){ 
					validar_formatear(ase_ico_deudores);
					ase_informacioncontable_calcularactivos(); 
		} 
	}
} );

var ase_ico_inventario = new Ext.form.TextField( {
	fieldLabel: 'Inventario ($)', 
	emptyText: '0',//// 'ingrese el inventario', 
	id: 'ase_ico_inventario',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_inventario',
	enableKeyEvents: true,
	anchor: '100%',
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_inventario', ayuda_ase_ico_inventario );
     	},
		'keyup' : function(){ 
					validar_formatear(ase_ico_inventario);
					ase_informacioncontable_calcularactivos(); 
		} 
	}
} );

var ase_ico_activos_fijos = new Ext.form.TextField( {
	fieldLabel: 'Activos fijos ($)', 
	emptyText: '0',//// 'ingrese los activos fijos', 
	id: 'ase_ico_activos_fijos',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_activos_fijos', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_activos_fijos', ayuda_ase_ico_activos_fijos );
     	},
		'keyup' : function(){ 
					validar_formatear(ase_ico_activos_fijos);
					ase_informacioncontable_calcularactivos();  
		} 
	}
} );

var ase_ico_propiedad_planta_equipos = new Ext.form.TextField( {
	fieldLabel: 'Propiedad, planta y equipos ($)', 
	emptyText: '0',//// 'ingrese la cantidad en bienes', 
	id: 'ase_ico_propiedad_planta_equipos',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'ase_ico_propiedad_planta_equipos', 
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_propiedad_planta_equipos', ayuda_ase_ico_propiedad_planta_equipos );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_propiedad_planta_equipos);
					ase_informacioncontable_calcularactivos(); 
		} 
	}
} );

var ase_ico_otros_activos = new Ext.form.TextField( { 
	fieldLabel: 'Otros activos ($)', 
	emptyText: '0',//// 'ingrese la cantidad de otros activos', 
	id: 'ase_ico_otros_activos',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_otros_activos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_otros_activos', ayuda_ase_ico_otros_activos );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_otros_activos);
					ase_informacioncontable_calcularactivos(); 
		} 
	}
} );

//////************ pasivos ***************//////////

var ase_ico_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Pasivos ($)', 
	disabled: true,
	emptyText: '0',//// 'ingrese los pasivos', 
	id: 'ase_ico_pasivos',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_pasivos', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_pasivos', ayuda_ase_ico_pasivos );
     	},
		'keyup' : function(){
					//formatoNumeroCampo(this); 
		} 
	}
} );

var ase_ico_pasivos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Pasivos corrientes ($)', 
	emptyText: '0',//// 'ingrese los pasivos corrientes', 
	id: 'ase_ico_pasivos_corrientes',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_pasivos_corrientes',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_pasivos_corrientes', ayuda_ase_ico_pasivos_corrientes );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_pasivos_corrientes);
					ase_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var ase_ico_obligaciones_financieras = new Ext.form.TextField( { 
	fieldLabel: 'Obligaciones financieras (bancos o similares) ($)', 
	emptyText: '0',//// 'ingrese las obligaciones financieras', 
	id: 'ase_ico_obligaciones_financieras',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_obligaciones_financieras',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_obligaciones_financieras', ayuda_ase_ico_obligaciones_financieras );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_obligaciones_financieras);
					ase_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var ase_ico_otras_cuentas_por_pagar = new Ext.form.TextField( { 
	fieldLabel: 'Otras cuentas por pagar (proveedores) ($)', 
	emptyText: '0',//// 'ingrese otras cuentas por pagar', 
	id: 'ase_ico_otras_cuentas_por_pagar',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_otras_cuentas_por_pagar',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_otras_cuentas_por_pagar', ayuda_ase_ico_otras_cuentas_por_pagar );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_otras_cuentas_por_pagar);
					ase_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var ase_ico_obligaciones_laborales = new Ext.form.TextField( {
	fieldLabel: 'Obligaciones laborales y de seguridad social ($)', 
	emptyText: '0',//// 'ingrese el valor de las obligaciones laborales', 
	id: 'ase_ico_obligaciones_laborales',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_obligaciones_laborales', 
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_obligaciones_laborales', ayuda_ase_ico_obligaciones_laborales );
     	},
		'keyup' : function(){ 
					validar_formatear(ase_ico_obligaciones_laborales);
					ase_informacioncontable_calcularpasivos(); 
		} 
	}
} );
	
var ase_ico_otros_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Otros pasivos ($)', 
	emptyText: '0',//// 'ingrese otros pasivos', 
	id: 'ase_ico_otros_pasivos',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_otros_pasivos',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_otros_pasivos', ayuda_ase_ico_otros_pasivos );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_otros_pasivos);
					ase_informacioncontable_calcularpasivos(); 
		} 
	}
} );

var ase_ico_patrimonio = new Ext.form.TextField( {
	fieldLabel: 'Patrimonio ($)', 
	emptyText: '0',//// 'ingrese el patrimonio', 
	id: 'ase_ico_patrimonio',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_patrimonio',
	enableKeyEvents: true,
	anchor: '100%', 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_patrimonio', ayuda_ase_ico_patrimonio );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_patrimonio);
					ase_informacioncontable_calcularpasivos(); 
		} 
	}
} );

//////****************** totales *****************//////////////////////

var ase_ico_estado_de_resultados = new Ext.form.TextField( { 
	fieldLabel: 'Estado de resultados entre enero 1 y diciembre 31 de', 
	emptyText: '0',//// 'ingrese el año de los resultados',
	disabled: true,
	id: 'ase_ico_estado_de_resultados',
	maxLength: 6,
	minLength: 0,
	name: 'ase_ico_estado_de_resultados', 
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_estado_de_resultados', ayuda_ase_ico_estado_de_resultados );
     	}
	}
} );

var ase_ico_total_ingresos = new Ext.form.TextField( {
	fieldLabel: 'Total de ingresos ($)', 
	emptyText: '0',//// 'ingrese el total de ingresos',
	anchor: '100%',
	id: 'ase_ico_total_ingresos',
	maxLength: 17,
	minLength: 0,
	enableKeyEvents: true,
	name: 'ase_ico_total_ingresos',
	disabled: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_total_ingresos', ayuda_ase_ico_total_ingresos );
     	}
	}
} );

var ase_ico_ingresos_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos operacionales ($)', 
	emptyText: '0',//// 'ingrese los ingresos operacionales',
	anchor: '100%',
	enableKeyEvents: true,
	id: 'ase_ico_ingresos_operacionales',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_ingresos_operacionales', 
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_ingresos_operacionales', ayuda_ase_ico_ingresos_operacionales );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_ingresos_operacionales);
					ase_informacioncontable_calcularingresos(); 
		} 
	}
} );

var ase_ico_ingresos_no_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos no operacionales ($)', 
	emptyText: '0',//// 'ingrese los ingresos no operacionales',
	anchor: '100%',
	id: 'ase_ico_ingresos_no_operacionales',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_ingresos_no_operacionales',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_ingresos_no_operacionales', ayuda_ase_ico_ingresos_no_operacionales );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_ingresos_no_operacionales);
					ase_informacioncontable_calcularingresos(); 
		} 
	}
} );

var ase_ico_total_egresos = new Ext.form.TextField( {
	fieldLabel: 'Total de egresos ($)', 
	emptyText: '0',//// 'ingrese el total de egresos',
	anchor: '100%',
	id: 'ase_ico_total_egresos',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_total_egresos',
	enableKeyEvents: true,
	disabled: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_total_egresos', ayuda_ase_ico_total_egresos );
     	}
	}
} );

var ase_ico_gastos_administrativos = new Ext.form.TextField( { 
	fieldLabel: 'Gastos administrativos ($)', 
	emptyText: '0',//// 'ingrese los gastos administrativos',
	anchor: '100%',
	id: 'ase_ico_gastos_administrativos',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_gastos_administrativos',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_gastos_administrativos', ayuda_ase_ico_gastos_administrativos );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_gastos_administrativos);
					ase_informacioncontable_calcularegresos(); 
		} 
	}
} );

var ase_ico_costo_operacion_mantenimiento = new Ext.form.TextField( {
	fieldLabel: 'Costos de operacion y mantenimiento ($)', 
	emptyText: '0',//// 'ingrese los costos de operacion y mantenimiento',
	anchor: '100%',
	id: 'ase_ico_costo_operacion_mantenimiento',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_costo_operacion_mantenimiento',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_costo_operacion_mantenimiento', ayuda_ase_ico_costo_operacion_mantenimiento );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_costo_operacion_mantenimiento);
					ase_informacioncontable_calcularegresos(); 
		} 
	}
} );

var ase_ico_costo_inversion = new Ext.form.TextField( {
	fieldLabel: 'Costos de inversion ($)', 
	emptyText: '0',//// 'ingrese los costos de inversion',
	anchor: '100%',
	id: 'ase_ico_costo_inversion',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_costo_inversion',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_costo_inversion', ayuda_ase_ico_costo_inversion );
     	},
		'keyup' : function(){
					validar_formatear(ase_ico_costo_inversion);
					ase_informacioncontable_calcularegresos(); 
		} 
	}
} );

var ase_ico_resultados_ejercicio = new Ext.form.TextField( {
	fieldLabel: 'Resultados del ejercicio ($)', 
	emptyText: '0',//// 'ingrese los resultados del ejercicio',
	anchor: '100%',
	disabled: true,
	id: 'ase_ico_resultados_ejercicio',
	maxLength: 17,
	minLength: 0,
	name: 'ase_ico_resultados_ejercicio',
	enableKeyEvents: true,
	width: 300, 
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_resultados_ejercicio', ayuda_ase_ico_resultados_ejercicio );
     	}
	}
} );

var ase_financieracontable_activos_pasivos_formpanel = new Ext.form.FormPanel({
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
			id: 'ase_informacioncontable_balance_general_fieldset',
			defaultType: 'TextField',
			labelWidth: 210,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
	   },
	   {
			xtype: 'fieldset',
			id: 'ase_informacioncontable_activos_fieldset',
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
			id: 'ase_informacioncontable_pasivos_fieldset',
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
							Ext.getCmp('aseo').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							ase_informacioncontable_activos_pasivos_subirdatos();
			}
	    }
	]
});

var ase_informacioncontable_fieldarray = new Array(
	ase_ico_activos,
	ase_ico_activos_corrientes,
	ase_ico_efectivo, 
	ase_ico_deudores, 
	ase_ico_inventario, 
	ase_ico_activos_fijos, 
	ase_ico_propiedad_planta_equipos, 
	ase_ico_otros_activos, 
	ase_ico_pasivos, 
	ase_ico_pasivos_corrientes, 
	ase_ico_obligaciones_financieras, 
	ase_ico_otras_cuentas_por_pagar, 
	ase_ico_obligaciones_laborales, 
	ase_ico_otros_pasivos, 
	ase_ico_patrimonio, 
	ase_ico_total_ingresos, 
	ase_ico_ingresos_operacionales, 
	ase_ico_ingresos_no_operacionales, 
	ase_ico_total_egresos, 
	ase_ico_gastos_administrativos, 
	ase_ico_costo_operacion_mantenimiento,  
	ase_ico_costo_inversion, 
	ase_ico_resultados_ejercicio
);

var ase_financieracontable_totales_formpanel = new Ext.form.FormPanel({
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
			id: 'ase_informacioncontable_totales_fieldset',
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
							ase_financieracontable_totales_formpanel.hide();
							ase_financieracontable_activos_pasivos_formpanel.show();
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							ase_informacioncontable_totales_subirdatos();
			}
	    }
	]
});

if(true){
	Ext.getCmp('ase_informacioncontable_balance_general_fieldset').add( ase_ico_balance_general );
	Ext.getCmp('ase_informacioncontable_activos_fieldset').add( [ase_ico_activos, ase_ico_activos_corrientes, ase_ico_efectivo, ase_ico_deudores, ase_ico_inventario, ase_ico_activos_fijos, ase_ico_propiedad_planta_equipos, ase_ico_otros_activos] );
	Ext.getCmp('ase_informacioncontable_pasivos_fieldset').add( [ase_ico_pasivos, ase_ico_pasivos_corrientes, ase_ico_obligaciones_financieras, ase_ico_otras_cuentas_por_pagar, ase_ico_obligaciones_laborales, ase_ico_otros_pasivos, ase_ico_patrimonio] );
	Ext.getCmp('ase_informacioncontable_totales_fieldset').add( [ase_ico_estado_de_resultados, ase_ico_total_ingresos, ase_ico_ingresos_operacionales, ase_ico_ingresos_no_operacionales, ase_ico_total_egresos, ase_ico_gastos_administrativos, ase_ico_costo_operacion_mantenimiento, ase_ico_costo_inversion, ase_ico_resultados_ejercicio] );
}

var form_ase_informacioncontable = new Ext.Panel({
	border: false,
	//layout: 'form',
	renderTo: 'div_form_ase_informacioncontable',
	autoWidth: true,
	items: [ase_financieracontable_activos_pasivos_formpanel, ase_financieracontable_totales_formpanel]
});

ase_informacioncontable_datastore.load({
	callback: function() {
		var record = ase_informacioncontable_datastore.getAt(0);
		ase_financieracontable_activos_pasivos_formpanel.getForm().loadRecord(record);
		ase_financieracontable_totales_formpanel.getForm().loadRecord(record);
		ase_informacioncontable_formatear();
	}
});

function ase_informacioncontable_activos_pasivos_subirdatos(){
	//ase_informacioncontable_desformatear();

	subirDatos(
		ase_financieracontable_activos_pasivos_formpanel, 
		'aseo_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'activosPasivos', 
			ase_ico_activos: parseFloat(quitarFormatoNumeroCampo(ase_ico_activos)),
			ase_ico_pasivos: parseFloat(quitarFormatoNumeroCampo(ase_ico_pasivos))
		},
		function(){
			ase_financieracontable_activos_pasivos_formpanel.hide();
			ase_financieracontable_totales_formpanel.show();
			//ase_informacioncontable_formatear();
		}
	);
}

function ase_informacioncontable_totales_subirdatos(){
	//ase_informacioncontable_desformatear();
	
	subirDatos(
		ase_financieracontable_totales_formpanel, 
		'aseo_informacioncontable/actualizarInformacionContable',
		{ 
			form: 'totales',
			ase_ico_total_ingresos: parseFloat(quitarFormatoNumeroCampo(ase_ico_total_ingresos)),
			ase_ico_total_egresos: parseFloat(quitarFormatoNumeroCampo(ase_ico_total_egresos)),
			ase_ico_resultados_ejercicio: parseFloat(quitarFormatoNumeroCampo(ase_ico_resultados_ejercicio))
		},
		function(){
			//ase_informacioncontable_formatear();
			Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(1);
		}
	);
}

function ase_informacioncontable_calcularactivos(){
	ase_ico_activos.setValue(
		parseFloat(quitarFormatoNumeroCampo(ase_ico_activos_corrientes)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_efectivo)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_deudores)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_inventario)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_activos_fijos)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_propiedad_planta_equipos)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_otros_activos))
	);
	validar_formatear(ase_ico_activos);
}

function ase_informacioncontable_calcularpasivos(){
	ase_ico_pasivos.setValue(
		parseFloat(quitarFormatoNumeroCampo(ase_ico_pasivos_corrientes)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_obligaciones_financieras)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_otras_cuentas_por_pagar)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_obligaciones_laborales)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_otros_pasivos)) +
		parseFloat(quitarFormatoNumeroCampo(ase_ico_patrimonio))
	);
	validar_formatear(ase_ico_pasivos);
}

function ase_informacioncontable_calcularingresos(){
	ase_ico_total_ingresos.setValue(
		parseFloat(quitarFormatoNumeroCampo(ase_ico_ingresos_operacionales)) + 
		parseFloat(quitarFormatoNumeroCampo(ase_ico_ingresos_no_operacionales))
	);
	
	ase_ico_resultados_ejercicio.setValue(
		parseFloat(quitarFormatoNumeroCampo(ase_ico_total_ingresos)) -
		parseFloat(quitarFormatoNumeroCampo(ase_ico_total_egresos))
	);
	validar_formatear(ase_ico_total_ingresos);
	validar_formatear(ase_ico_resultados_ejercicio);
}

function ase_informacioncontable_calcularegresos(){
	ase_ico_total_egresos.setValue(
		parseFloat(quitarFormatoNumeroCampo(ase_ico_gastos_administrativos)) + 
		parseFloat(quitarFormatoNumeroCampo(ase_ico_costo_operacion_mantenimiento)) + 
		parseFloat(quitarFormatoNumeroCampo(ase_ico_costo_inversion))
	);
	
	ase_ico_resultados_ejercicio.setValue(
		parseFloat(quitarFormatoNumeroCampo(ase_ico_total_ingresos)) -
		parseFloat(quitarFormatoNumeroCampo(ase_ico_total_egresos))
	);
	validar_formatear(ase_ico_total_egresos);
	validar_formatear(ase_ico_resultados_ejercicio);
}

function ase_informacioncontable_desformatear(){
	for(e = 0; e < ase_informacioncontable_fieldarray.length ; e++){
		(ase_informacioncontable_fieldarray[e]).setValue(quitarFormatoNumeroCampo(ase_informacioncontable_fieldarray[e]));
	}
}

function ase_informacioncontable_formatear(){
	for(e = 0; e < ase_informacioncontable_fieldarray.length ; e++){
		validar_formatear(ase_informacioncontable_fieldarray[e]);
	}
}
