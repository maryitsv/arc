
var ase_ico_balance_general = new Ext.form.TextField( {
	fieldLabel: 'Balance general a diciembre 30 de', 
	emptyText: 'ingrese el año del balance general',
	//anchor: '100%',
	id: 'ase_ico_balance_general', 
	name: 'ase_ico_balance_general', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_balance_general', ayuda_ase_ico_balance_general );
     	}
	}
} );

var ase_ico_activos = new Ext.form.TextField( {
	fieldLabel: 'Activos ($)', 
	emptyText: 'ingrese los activos', 
	id: 'ase_ico_activos', 
	name: 'ase_ico_activos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_activos', ayuda_ase_ico_activos );
     	}
	}
} );

var ase_ico_activos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Activos corrientes ($)', 
	emptyText: 'ingrese los activos corrientes', 
	id: 'ase_ico_activos_corrientes', 
	name: 'ase_ico_activos_corrientes', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_activos_corrientes', ayuda_ase_ico_activos_corrientes );
     	}
	}
} );

var ase_ico_efectivo = new Ext.form.TextField( {
	fieldLabel: 'Efectivo (caja m&aacute;s bancos) ($)', 
	emptyText: 'ingrese la cantidad de efectivo', 
	id: 'ase_ico_efectivo', 
	name: 'ase_ico_efectivo', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_efectivo', ayuda_ase_ico_efectivo );
     	}
	}
} );

var ase_ico_deudores = new Ext.form.TextField( {
	fieldLabel: 'Deudores (cuentas por cobrar) ($)', 
	emptyText: 'ingrese la cantidad de deudores', 
	id: 'ase_ico_deudores', 
	name: 'ase_ico_deudores', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_deudores', ayuda_ase_ico_deudores );
     	}
	}
} );

var ase_ico_inventario = new Ext.form.TextField( {
	fieldLabel: 'Inventario ($)', 
	emptyText: 'ingrese el inventario', 
	id: 'ase_ico_inventario', 
	name: 'ase_ico_inventario', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_inventario', ayuda_ase_ico_inventario );
     	}
	}
} );

var ase_ico_activos_fijos = new Ext.form.TextField( {
	fieldLabel: 'Activos fijos ($)', 
	emptyText: 'ingrese los activos fijos', 
	id: 'ase_ico_activos_fijos', 
	name: 'ase_ico_activos_fijos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_activos_fijos', ayuda_ase_ico_activos_fijos );
     	}
	}
} );

var ase_ico_propiedad_planta_equipos = new Ext.form.TextField( {
	fieldLabel: 'Propiedad, planta y equipos ($)', 
	emptyText: 'ingrese la cantidad en bienes', 
	id: 'ase_ico_propiedad_planta_equipos', 
	name: 'ase_ico_propiedad_planta_equipos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_propiedad_planta_equipos', ayuda_ase_ico_propiedad_planta_equipos );
     	}
	}
} );

var ase_ico_otros_activos = new Ext.form.TextField( {
	fieldLabel: 'Otros activos ($)', 
	emptyText: 'ingrese la cantidad de otros activos', 
	id: 'ase_ico_otros_activos', 
	name: 'ase_ico_otros_activos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_otros_activos', ayuda_ase_ico_otros_activos );
     	}
	}
} );

var ase_ico_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Pasivos ($)', 
	emptyText: 'ingrese los pasivos', 
	id: 'ase_ico_pasivos', 
	name: 'ase_ico_pasivos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_pasivos', ayuda_ase_ico_pasivos );
     	}
	}
} );

var ase_ico_pasivos_corrientes = new Ext.form.TextField( {
	fieldLabel: 'Pasivos corrientes ($)', 
	emptyText: 'ingrese los pasivos corrientes', 
	id: 'ase_ico_pasivos_corrientes', 
	name: 'ase_ico_pasivos_corrientes', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_pasivos_corrientes', ayuda_ase_ico_pasivos_corrientes );
     	}
	}
} );

var ase_ico_obligaciones_financieras = new Ext.form.TextField( { 
	fieldLabel: 'Obligaciones financieras (bancos o similares) ($)', 
	emptyText: 'ingrese las obligaciones financieras', 
	id: 'ase_ico_obligaciones_financieras', 
	name: 'ase_ico_obligaciones_financieras', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_obligaciones_financieras', ayuda_ase_ico_obligaciones_financieras );
     	}
	}
} );

var ase_ico_otras_cuentas_por_pagar = new Ext.form.TextField( {
	fieldLabel: 'Otras cuentas por pagar (proveedores) ($)', 
	emptyText: 'ingrese otras cuentas por pagar', 
	id: 'ase_ico_otras_cuentas_por_pagar', 
	name: 'ase_ico_otras_cuentas_por_pagar', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_otras_cuentas_por_pagar', ayuda_ase_ico_otras_cuentas_por_pagar );
     	}
	}
} );

var ase_ico_obligaciones_laborales = new Ext.form.TextField( {
	fieldLabel: 'Obligaciones laborales y de seguridad social ($)', 
	emptyText: 'ingrese el valor de las obligaciones laborales', 
	id: 'ase_ico_obligaciones_laborales', 
	name: 'ase_ico_obligaciones_laborales', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_obligaciones_laborales', ayuda_ase_ico_obligaciones_laborales );
     	}
	}
} );
	
var ase_ico_otros_pasivos = new Ext.form.TextField( {
	fieldLabel: 'Otros pasivos ($)', 
	emptyText: 'ingrese otros pasivos', 
	id: 'ase_ico_otros_pasivos', 
	name: 'ase_ico_otros_pasivos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_otros_pasivos', ayuda_ase_ico_otros_pasivos );
     	}
	}
} );

var ase_ico_patrimonio = new Ext.form.TextField( {
	fieldLabel: 'Patrimonio ($)', 
	emptyText: 'ingrese el patrimonio', 
	id: 'ase_ico_patrimonio', 
	name: 'ase_ico_patrimonio', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_patrimonio', ayuda_ase_ico_patrimonio );
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
			defaultType: 'textfield',
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
			defaultType: 'textfield',
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
							Ext.getCmp('aseo').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							ase_financieracontable_activos_pasivos_formpanel.hide();
							ase_financieracontable_totales_formpanel.show();
			}
	    }
	]
});

var ase_ico_estado_de_resultados = new Ext.form.TextField( { 
	fieldLabel: 'Estado de resultados entre enero 1 y diciembre 31 de', 
	emptyText: 'ingrese el año de los resultados',
	//anchor: '100%',
	id: 'ase_ico_estado_de_resultados', 
	name: 'ase_ico_estado_de_resultados', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_estado_de_resultados', ayuda_ase_ico_estado_de_resultados );
     	}
	}
} );

var ase_ico_total_ingresos = new Ext.form.TextField( {
	fieldLabel: 'Total de ingresos ($)', 
	emptyText: 'ingrese el total de ingresos',
	anchor: '100%',
	id: 'ase_ico_total_ingresos', 
	name: 'ase_ico_total_ingresos', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_total_ingresos', ayuda_ase_ico_total_ingresos );
     	}
	}
} );

var ase_ico_ingresos_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos operacionales ($)', 
	emptyText: 'ingrese los ingresos operacionales',
	anchor: '100%',
	id: 'ase_ico_ingresos_operacionales', 
	name: 'ase_ico_ingresos_operacionales', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_ingresos_operacionales', ayuda_ase_ico_ingresos_operacionales );
     	}
	}
} );

var ase_ico_ingresos_no_operacionales = new Ext.form.TextField( {
	fieldLabel: 'Ingresos no operacionales ($)', 
	emptyText: 'ingrese los ingresos no operacionales',
	anchor: '100%',
	id: 'ase_ico_ingresos_no_operacionales', 
	name: 'ase_ico_ingresos_no_operacionales', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_ingresos_no_operacionales', ayuda_ase_ico_ingresos_no_operacionales );
     	}
	}
} );

var ase_ico_total_egresos = new Ext.form.TextField( {
	fieldLabel: 'Total de egresos ($)', 
	emptyText: 'ingrese el total de egresos',
	anchor: '100%',
	id: 'ase_ico_total_egresos', 
	name: 'ase_ico_total_egresos', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_total_egresos', ayuda_ase_ico_total_egresos );
     	}
	}
} );

var ase_ico_gastos_administrativos = new Ext.form.TextField( { 
	fieldLabel: 'Gastos administrativos ($)', 
	emptyText: 'ingrese los gastos administrativos',
	anchor: '100%',
	id: 'ase_ico_gastos_administrativos', 
	name: 'ase_ico_gastos_administrativos', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_gastos_administrativos', ayuda_ase_ico_gastos_administrativos );
     	}
	}
} );

var ase_ico_costo_operacion_mantenimiento = new Ext.form.TextField( {
	fieldLabel: 'Costos de operacion y mantenimiento ($)', 
	emptyText: 'ingrese los costos de operacion y mantenimiento',
	anchor: '100%',
	id: 'ase_ico_costo_operacion_mantenimiento', 
	name: 'ase_ico_costo_operacion_mantenimiento', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_costo_operacion_mantenimiento', ayuda_ase_ico_costo_operacion_mantenimiento );
     	}
	}
} );

var ase_ico_costo_inversion = new Ext.form.TextField( {
	fieldLabel: 'Costos de inversion ($)', 
	emptyText: 'ingrese los costos de inversion',
	anchor: '100%',
	id: 'ase_ico_costo_inversion', 
	name: 'ase_ico_costo_inversion', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_costo_inversion', ayuda_ase_ico_costo_inversion );
     	}
	}
} );

var ase_ico_resultados_ejecicio = new Ext.form.TextField( {
	fieldLabel: 'Resultados del ejercicio ($)', 
	emptyText: 'ingrese los resultados del ejercicio',
	anchor: '100%',
	id: 'ase_ico_resultados_ejecicio', 
	name: 'ase_ico_resultados_ejecicio', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_ico_resultados_ejecicio', ayuda_ase_ico_resultados_ejecicio );
     	}
	}
} );

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
							ase_financieracontable_totales_formpanel.hide();
							ase_financieracontable_activos_pasivos_formpanel.show();
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(1);
			}
	    }
	]
});

if(true){
	Ext.getCmp('ase_informacioncontable_balance_general_fieldset').add( ase_ico_balance_general );
	Ext.getCmp('ase_informacioncontable_activos_fieldset').add( [ase_ico_activos, ase_ico_activos_corrientes, ase_ico_efectivo, ase_ico_deudores, ase_ico_inventario, ase_ico_activos_fijos, ase_ico_propiedad_planta_equipos, ase_ico_otros_activos] );
	Ext.getCmp('ase_informacioncontable_pasivos_fieldset').add( [ase_ico_pasivos, ase_ico_pasivos_corrientes, ase_ico_obligaciones_financieras, ase_ico_otras_cuentas_por_pagar, ase_ico_obligaciones_laborales, ase_ico_otros_pasivos, ase_ico_patrimonio] );
	Ext.getCmp('ase_informacioncontable_totales_fieldset').add( [ase_ico_estado_de_resultados, ase_ico_total_ingresos, ase_ico_ingresos_operacionales, ase_ico_ingresos_no_operacionales, ase_ico_total_egresos, ase_ico_gastos_administrativos, ase_ico_costo_operacion_mantenimiento, ase_ico_costo_inversion, ase_ico_resultados_ejecicio] );
}

var form_ase_informacioncontable = new Ext.Panel({
	border: false,
	renderTo: 'div_form_ase_informacioncontable',
	autoWidth: true,
	items: [ase_financieracontable_activos_pasivos_formpanel, ase_financieracontable_totales_formpanel]
});

	

function ase_informacioncontable_subirdatos() {
	//Ext.example.msg('Aviso', 'Subir datos!!!');
}

