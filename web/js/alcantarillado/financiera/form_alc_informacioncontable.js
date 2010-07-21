
var alc_ico_balance_general = new Ext.form.TextField( {
	fieldLabel: 'Balance general a diciembre 30 de', 
	emptyText: 'ingrese el año del balance general',
	//anchor: '100%',
	id: 'alc_ico_balance_general', 
	name: 'alc_ico_balance_general', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_balance_general', ayuda_alc_ico_balance_general );
     	}
	}
} );

var alc_ico_activos = new Ext.form.TextField( {
	fieldLabel: 'Activos ($)', 
	emptyText: 'ingrese los activos', 
	id: 'alc_ico_activos', 
	name: 'alc_ico_activos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_activos', ayuda_alc_ico_activos );
     	}
	}
} );

var alc_ico_activos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Activos corrientes ($)', 
	emptyText: 'ingrese los activos corrientes', 
	id: 'alc_ico_activos_corrientes', 
	name: 'alc_ico_activos_corrientes', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_activos_corrientes', ayuda_alc_ico_activos_corrientes );
     	}
	}
} );

var alc_ico_efectivo = new Ext.form.TextField( {
	fieldLabel: 'Efectivo (caja m&aacute;s bancos) ($)', 
	emptyText: 'ingrese la cantidad de efectivo', 
	id: 'alc_ico_efectivo', 
	name: 'alc_ico_efectivo', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_efectivo', ayuda_alc_ico_efectivo );
     	}
	}
} );

var alc_ico_deudores = new Ext.form.TextField( {
	fieldLabel: 'Deudores (cuentas por cobrar) ($)', 
	emptyText: 'ingrese la cantidad de deudores', 
	id: 'alc_ico_deudores', 
	name: 'alc_ico_deudores', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_deudores', ayuda_alc_ico_deudores );
     	}
	}
} );

var alc_ico_inventario = new Ext.form.TextField( {
	fieldLabel: 'Inventario ($)', 
	emptyText: 'ingrese el inventario', 
	id: 'alc_ico_inventario', 
	name: 'alc_ico_inventario', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_inventario', ayuda_alc_ico_inventario );
     	}
	}
} );

var alc_ico_activos_fijos = new Ext.form.TextField( {
	fieldLabel: 'Activos fijos ($)', 
	emptyText: 'ingrese los activos fijos', 
	id: 'alc_ico_activos_fijos', 
	name: 'alc_ico_activos_fijos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_activos_fijos', ayuda_alc_ico_activos_fijos );
     	}
	}
} );

var alc_ico_propiedad_planta_equipos = new Ext.form.TextField( {
	fieldLabel: 'Propiedad, planta y equipos ($)', 
	emptyText: 'ingrese la cantidad en bienes', 
	id: 'alc_ico_propiedad_planta_equipos', 
	name: 'alc_ico_propiedad_planta_equipos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_propiedad_planta_equipos', ayuda_alc_ico_propiedad_planta_equipos );
     	}
	}
} );

var alc_ico_otros_activos = new Ext.form.TextField( {
	fieldLabel: 'Otros activos ($)', 
	emptyText: 'ingrese la cantidad de otros activos', 
	id: 'alc_ico_otros_activos', 
	name: 'alc_ico_otros_activos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_otros_activos', ayuda_alc_ico_otros_activos );
     	}
	}
} );

var alc_ico_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Pasivos ($)', 
	emptyText: 'ingrese los pasivos', 
	id: 'alc_ico_pasivos', 
	name: 'alc_ico_pasivos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_pasivos', ayuda_alc_ico_pasivos );
     	}
	}
} );

var alc_ico_pasivos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Pasivos corrientes ($)', 
	emptyText: 'ingrese los pasivos corrientes', 
	id: 'alc_ico_pasivos_corrientes', 
	name: 'alc_ico_pasivos_corrientes', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_pasivos_corrientes', ayuda_alc_ico_pasivos_corrientes );
     	}
	}
} );

var alc_ico_obligaciones_financieras = new Ext.form.TextField( { 
	fieldLabel: 'Obligaciones financieras (bancos o similares) ($)', 
	emptyText: 'ingrese las obligaciones financieras', 
	id: 'alc_ico_obligaciones_financieras', 
	name: 'alc_ico_obligaciones_financieras', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_obligaciones_financieras', ayuda_alc_ico_obligaciones_financieras );
     	}
	}
} );

var alc_ico_otras_cuentas_por_pagar = new Ext.form.TextField( {
	fieldLabel: 'Otras cuentas por pagar (proveedores) ($)', 
	emptyText: 'ingrese otras cuentas por pagar', 
	id: 'alc_ico_otras_cuentas_por_pagar', 
	name: 'alc_ico_otras_cuentas_por_pagar', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_otras_cuentas_por_pagar', ayuda_alc_ico_otras_cuentas_por_pagar );
     	}
	}
} );

var alc_ico_obligaciones_laborales = new Ext.form.TextField( {
	fieldLabel: 'Obligaciones laborales y de seguridad social ($)', 
	emptyText: 'ingrese el valor de las obligaciones laborales', 
	id: 'alc_ico_obligaciones_laborales', 
	name: 'alc_ico_obligaciones_laborales', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_obligaciones_laborales', ayuda_alc_ico_obligaciones_laborales );
     	}
	}
} );
	
var alc_ico_otros_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Otros pasivos ($)', 
	emptyText: 'ingrese otros pasivos', 
	id: 'alc_ico_otros_pasivos', 
	name: 'alc_ico_otros_pasivos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_otros_pasivos', ayuda_alc_ico_otros_pasivos );
     	}
	}
} );

var alc_ico_patrimonio = new Ext.form.TextField( {
	fieldLabel: 'Patrimonio ($)', 
	emptyText: 'ingrese el patrimonio', 
	id: 'alc_ico_patrimonio', 
	name: 'alc_ico_patrimonio', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_patrimonio', ayuda_alc_ico_patrimonio );
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
			defaultType: 'textfield',
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
			defaultType: 'textfield',
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
			defaultType: 'textfield',
			labelWidth: 150,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
		}
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('alcantarillado').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							alc_financieracontable_activos_pasivos_formpanel.hide();
							alc_financieracontable_totales_formpanel.show();
			}
	    }
	]
});

var alc_ico_estado_de_resultados = new Ext.form.TextField( { 
	fieldLabel: 'Estado de resultados entre enero 1 y diciembre 31 de', 
	emptyText: 'ingrese el año de los resultados',
	//anchor: '100%',
	id: 'alc_ico_estado_de_resultados', 
	name: 'alc_ico_estado_de_resultados', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_estado_de_resultados', ayuda_alc_ico_estado_de_resultados );
     	}
	}
} );

var alc_ico_total_ingresos = new Ext.form.TextField( {
	fieldLabel: 'Total de ingresos ($)', 
	emptyText: 'ingrese el total de ingresos',
	anchor: '100%',
	id: 'alc_ico_total_ingresos', 
	name: 'alc_ico_total_ingresos', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_total_ingresos', ayuda_alc_ico_total_ingresos );
     	}
	}
} );

var alc_ico_ingresos_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos operacionales ($)', 
	emptyText: 'ingrese los ingresos operacionales',
	anchor: '100%',
	id: 'alc_ico_ingresos_operacionales', 
	name: 'alc_ico_ingresos_operacionales', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_ingresos_operacionales', ayuda_alc_ico_ingresos_operacionales );
     	}
	}
} );

var alc_ico_ingresos_no_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos no operacionales ($)', 
	emptyText: 'ingrese los ingresos no operacionales',
	anchor: '100%',
	id: 'alc_ico_ingresos_no_operacionales', 
	name: 'alc_ico_ingresos_no_operacionales', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_ingresos_no_operacionales', ayuda_alc_ico_ingresos_no_operacionales );
     	}
	}
} );

var alc_ico_total_egresos = new Ext.form.TextField( {
	fieldLabel: 'Total de egresos ($)', 
	emptyText: 'ingrese el total de egresos',
	anchor: '100%',
	id: 'alc_ico_total_egresos', 
	name: 'alc_ico_total_egresos', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_total_egresos', ayuda_alc_ico_total_egresos );
     	}
	}
} );

var alc_ico_gastos_administrativos = new Ext.form.TextField( { 
	fieldLabel: 'Gastos administrativos ($)', 
	emptyText: 'ingrese los gastos administrativos',
	anchor: '100%',
	id: 'alc_ico_gastos_administrativos', 
	name: 'alc_ico_gastos_administrativos', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_gastos_administrativos', ayuda_alc_ico_gastos_administrativos );
     	}
	}
} );

var alc_ico_costo_operacion_mantenimiento = new Ext.form.TextField( {
	fieldLabel: 'Costos de operacion y mantenimiento ($)', 
	emptyText: 'ingrese los costos de operacion y mantenimiento',
	anchor: '100%',
	id: 'alc_ico_costo_operacion_mantenimiento', 
	name: 'alc_ico_costo_operacion_mantenimiento', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_costo_operacion_mantenimiento', ayuda_alc_ico_costo_operacion_mantenimiento );
     	}
	}
} );

var alc_ico_costo_inversion = new Ext.form.TextField( {
	fieldLabel: 'Costos de inversion ($)', 
	emptyText: 'ingrese los costos de inversion',
	anchor: '100%',
	id: 'alc_ico_costo_inversion', 
	name: 'alc_ico_costo_inversion', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_costo_inversion', ayuda_alc_ico_costo_inversion );
     	}
	}
} );

var alc_ico_resultados_ejecicio = new Ext.form.TextField( {
	fieldLabel: 'Resultados del ejercicio ($)', 
	emptyText: 'ingrese los resultados del ejercicio',
	anchor: '100%',
	id: 'alc_ico_resultados_ejecicio', 
	name: 'alc_ico_resultados_ejecicio', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_ico_resultados_ejecicio', ayuda_alc_ico_resultados_ejecicio );
     	}
	}
} );

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
			defaultType: 'textfield',
			labelWidth: 310,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							alc_financieracontable_totales_formpanel.hide();
							alc_financieracontable_activos_pasivos_formpanel.show();
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(1);
			}
	    }
	]
});

if(true){
	Ext.getCmp('alc_informacioncontable_balance_general_fieldset').add( alc_ico_balance_general );
	Ext.getCmp('alc_informacioncontable_activos_fieldset').add( [alc_ico_activos, alc_ico_activos_corrientes, alc_ico_efectivo, alc_ico_deudores, alc_ico_inventario, alc_ico_activos_fijos, alc_ico_propiedad_planta_equipos, alc_ico_otros_activos] );
	Ext.getCmp('alc_informacioncontable_pasivos_fieldset').add( [alc_ico_pasivos, alc_ico_pasivos_corrientes, alc_ico_obligaciones_financieras, alc_ico_otras_cuentas_por_pagar, alc_ico_obligaciones_laborales, alc_ico_otros_pasivos, alc_ico_patrimonio] );
	Ext.getCmp('alc_informacioncontable_totales_fieldset').add( [alc_ico_estado_de_resultados, alc_ico_total_ingresos, alc_ico_ingresos_operacionales, alc_ico_ingresos_no_operacionales, alc_ico_total_egresos, alc_ico_gastos_administrativos, alc_ico_costo_operacion_mantenimiento, alc_ico_costo_inversion, alc_ico_resultados_ejecicio] );
}

var form_alc_informacioncontable = new Ext.Panel({
	border: false,
	renderTo: 'div_form_alc_informacioncontable',
	autoWidth: true,
	items: [alc_financieracontable_activos_pasivos_formpanel, alc_financieracontable_totales_formpanel]
});

	

function alc_informacioncontable_subirdatos() {
	//Ext.example.msg('Aviso', 'Subir datos!!!');
}

