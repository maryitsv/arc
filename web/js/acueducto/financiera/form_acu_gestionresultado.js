
var acu_gestionresultado_datastore = new Ext.data.Store({
	id: 'acu_gestionresultado_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_gestionresultado/obtenerDatosAcuGestionResultado', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
				{name: 'acu_gre_plan_gestion_resultados'},
				{name: 'acu_gre_micromedidores_funcionando'},
				{name: 'acu_gre_total_suscriptores_micromedicion'}, 
				{name: 'acu_gre_valor_micromedicion'},  
				{name: 'acu_gre_macromedidores_funcionando'},
				{name: 'acu_gre_macromedidores_proyectados'},
				{name: 'acu_gre_valor_macromedicion'},
				{name: 'acu_gre_muestras_tomadas'},
				{name: 'acu_gre_muestras_aptas'},
				{name: 'acu_gre_valor_calidad_agua'},
				{name: 'acu_gre_total_suscriptores_facturacion'}, 
				{name: 'acu_gre_total_facturas_diciembre'},
				{name: 'acu_gre_valor_facturacion'}
	])
});


var acu_gre_plan_gestion_resultados = new Ext.form.RadioGroup ({
   itemCls: 'x-check-group-alt',
   labelStyle: 'width:140px;',
   id: 'acu_gre_plan_gestion_resultados',
   fieldLabel: '<html>&iquest;Tiene definido un plan de gesti&oacute;n y resultados?</html>',
   columns: 1,
   items:
	[
	  {
		boxLabel: 'Si',
		name: 'acu_gre_plan_gestion_resultados', 
		inputValue: 1,
		checked: true
	  },
	  { 
		boxLabel: 'No',
		name: 'acu_gre_plan_gestion_resultados',
		inputValue: 0,
	  }
	]
	,
	listeners:
        {
			'render': function(){
				ayuda('acu_gre_plan_gestion_resultados', ayuda_acu_gre_plan_gestion_resultados);
			}
        }
} );

/////////////***************** micromedidores **********/////////////////////////

var acu_gre_actividad1_label = new Ext.form.Label ( {
	html: '<font size=2>Implementar MICROMEDICI&Oacute;N<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_micromedidores_funcionando = new Ext.form.NumberField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_micromedidores_funcionando',
	id: 'acu_gre_micromedidores_funcionando',
	fieldLabel: '<html>N&uacute;mero de micromedidores instalados y funcionando</html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG1',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_micromedidores_funcionando', ayuda_acu_gre_micromedidores_funcionando);
		},
		'keyup': function(){
			acu_gestionresultado_calcularmicromedidores();
		}
	}                        
} );

var acu_gre_total_suscriptores_micromedicion = new Ext.form.NumberField ({
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_total_suscriptores_micromedicion',
	id: 'acu_gre_total_suscriptores_micromedicion',
	fieldLabel: '<html>N&uacute;mero total de suscriptores</html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG1',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_total_suscriptores_micromedicion', ayuda_acu_gre_total_suscriptores_micromedicion);
		},
		'keyup': function(){
			acu_gestionresultado_calcularmicromedidores();
		}
	}              
});

var acu_gre_valor_micromedicion = new Ext.form.NumberField ( {
	enableKeyEvents: true,
	anchor: '100%',
	decimalPrecision: 6,
	maxLength: 10000000,
	minLength: 0,
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_micromedicion',
	id: 'acu_gre_valor_micromedicion',
	fieldLabel: '<html><b>Valor</b></html>',
	disabled : true              
} );

/////////////***************** macromedidores **********/////////////////////////

var acu_gre_actividad2_label = new Ext.form.Label ( {
	html: '<font size=2>Implementar MACROMEDICI&Oacute;N<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_macromedidores_funcionando = new Ext.form.NumberField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_macromedidores_funcionando',
	id: 'acu_gre_macromedidores_funcionando',
	fieldLabel: '<html>N&uacute;mero de macromedidores instalados y funcionando</html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG2',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_macromedidores_funcionando', ayuda_acu_gre_macromedidores_funcionando);
		},
		'keyup': function(){
			acu_gestionresultado_calcularmacromedidores();
		}
	}              
} );

var acu_gre_macromedidores_proyectados = new Ext.form.NumberField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_macromedidores_proyectados',
	id: 'acu_gre_macromedidores_proyectados',
	fieldLabel: '<html>N&uacute;mero de Macromedidores proyectados</html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG2',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_macromedidores_proyectados', ayuda_acu_gre_macromedidores_proyectados);
		},
		'keyup': function(){
			acu_gestionresultado_calcularmacromedidores();
		}
	}              
} );

var acu_gre_valor_macromedicion = new Ext.form.NumberField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	decimalPrecision: 6,
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_macromedicion',
	id: 'acu_gre_valor_macromedicion',
	fieldLabel: '<html><b>Valor</b></html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : true              
} );

/////////////***************** calidad de agua **********/////////////////////////

var acu_gre_actividad3_label = new Ext.form.Label ( {
	html: '<font size=2>Toma de muestras para medir la calidad del agua<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_muestras_aptas = new Ext.form.NumberField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_muestras_aptas',
	id: 'acu_gre_muestras_aptas',
	fieldLabel: '<html>N&uacute;mero de muestras aptas</html',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG3',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_muestras_aptas', ayuda_acu_gre_muestras_aptas);
		},
		'keyup': function(){
			acu_gestionresultado_calcularcalidadagua();
		}
	}              
} );

var acu_gre_muestras_tomadas = new Ext.form.NumberField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_muestras_tomadas',
	id: 'acu_gre_muestras_tomadas',
	fieldLabel: '<html>N&uacute;mero de muestras tomadas</html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG3',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_muestras_tomadas', ayuda_acu_gre_muestras_tomadas);
		},
		'keyup': function(){
			acu_gestionresultado_calcularcalidadagua();
		}
	}              
} );

var acu_gre_valor_calidad_agua = new Ext.form.NumberField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	decimalPrecision: 6,
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_calidad_agua',
	id: 'acu_gre_valor_calidad_agua',
	fieldLabel: '<html><b>Valor</b></html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : true              
} );

/////////////***************** sistema de facturacion **********/////////////////////////

var acu_gre_actividad4_label = new Ext.form.Label ( {
	html: '<font size=2>Implementar un sistema de facturaci&oacute;n<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_total_suscriptores_facturacion = new Ext.form.NumberField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_total_suscriptores_facturacion',
	id: 'acu_gre_total_suscriptores_facturacion',
	fieldLabel: '<html>N&uacute;mero total de suscriptores</html>',
	maxLength: 10000000,
	minLength: 0,
	//vtype: 'calcularValorPG4',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_total_suscriptores_facturacion', ayuda_acu_gre_total_suscriptores_facturacion);
		},
		'keyup': function(){
			acu_gestionresultado_calcularfacturacion();
		}
	}              
} );

var acu_gre_total_facturas_diciembre = new Ext.form.NumberField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_total_facturas_diciembre',
	id: 'acu_gre_total_facturas_diciembre',
	fieldLabel: '<html>N&uacute;mero total de facturas expedidas en Diciembre del a&ntilde;o anterior</html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : false,
	//vtype: 'calcularValorPG4',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_total_facturas_diciembre', ayuda_acu_gre_total_facturas_diciembre);
		},
		'keyup': function(){
			acu_gestionresultado_calcularfacturacion();
		}
	}              
} );

var acu_gre_valor_facturacion = new Ext.form.NumberField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	decimalPrecision: 6,
	name: 'acu_gre_valor_facturacion',
	id: 'acu_gre_valor_facturacion',
	fieldLabel: '<html><b>Valor</b></html>',
	maxLength: 10000000,
	minLength: 0,
	disabled : true              
}  );

var acu_gestionresultado_actividad12_formpanel = new Ext.form.FormPanel({
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
			id: 'acu_gestionresultado_plan_gestion_resultados_fieldset',
			defaultType: 'NumberField',
			labelWidth: 210,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
	   },
	   {
			xtype: 'fieldset',
			id: 'acu_gestionresultado_actividad1_fieldset',
			columnWidth: '.495',
			height: 280,
			title: 'Actividad 1',
			defaultType: 'NumberField',
			labelWidth: 300,
			defaults: {labelStyle: 'font-size:1.0em;'},
			padding: 8,
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px 10px 10px;'
		},
		{xtype: 'panel', columnWidth: '.01' },
	    {
			xtype: 'fieldset',
			id: 'acu_gestionresultado_actividad2_fieldset',
			title: 'Actividad 2',
			columnWidth: '.495',
			height: 280,
			defaultType: 'NumberField',
			labelWidth: 305,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
		}
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(2);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							acu_gestionresultado_actividad12_subirdatos();
			}
	    }
	]
});


var acu_gestionresultado_actividad34_formpanel = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	height: largo_panel-15,
	hidden: true,
	layout: 'column',
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			id: 'acu_gestionresultado_actividad3_fieldset',
			columnWidth: '.495',
			height: 300,
			title: 'Actividad 3',
			defaultType: 'NumberField',
			labelWidth: 300,
			defaults: {labelStyle: 'font-size:1.0em;'},
			padding: 8,
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px 10px 10px;'
		},
		{xtype: 'panel', columnWidth: '.01' },
	    {
			xtype: 'fieldset',
			id: 'acu_gestionresultado_actividad4_fieldset',
			title: 'Actividad 4',
			columnWidth: '.495',
			height: 300,
			defaultType: 'NumberField',
			labelWidth: 300,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;'
		}
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							acu_gestionresultado_actividad34_formpanel.hide();
							acu_gestionresultado_actividad12_formpanel.show();
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							acu_gestionresultado_actividad34_subirdatos();
			}
	    }
	]
});

if(true){
	Ext.getCmp('acu_gestionresultado_plan_gestion_resultados_fieldset').add( acu_gre_plan_gestion_resultados );
	Ext.getCmp('acu_gestionresultado_actividad1_fieldset').add( [ 
		acu_gre_actividad1_label, acu_gre_micromedidores_funcionando, 
		acu_gre_total_suscriptores_micromedicion, 
		{xtype: 'label', html: '<br/><br/>'},
		acu_gre_valor_micromedicion 
	] );
	Ext.getCmp('acu_gestionresultado_actividad2_fieldset').add( [ 
		acu_gre_actividad2_label, acu_gre_macromedidores_funcionando, 
		acu_gre_macromedidores_proyectados,
		{xtype: 'label', html: '<br/><br/>'},
		acu_gre_valor_macromedicion
	] );
	Ext.getCmp('acu_gestionresultado_actividad3_fieldset').add( [ 
		acu_gre_actividad3_label, 
		acu_gre_muestras_aptas, 
		acu_gre_muestras_tomadas,
		{xtype: 'label', html: '<br/><br/>'},
		acu_gre_valor_calidad_agua
	] );
	Ext.getCmp('acu_gestionresultado_actividad4_fieldset').add( [ 
		acu_gre_actividad4_label,
		acu_gre_total_facturas_diciembre,
		acu_gre_total_suscriptores_facturacion,
		{xtype: 'label', html: '<br/>'},
		acu_gre_valor_facturacion
	] );
}

var form_acu_gestionresultado = new Ext.Panel({
	border: false,
	renderTo: 'div_form_acu_gestionresultado',
	autoWidth: true,
	items: [acu_gestionresultado_actividad12_formpanel, acu_gestionresultado_actividad34_formpanel]
});

acu_gestionresultado_datastore.load({
  callback: function() {
	var record = acu_gestionresultado_datastore.getAt(0);
	acu_gestionresultado_actividad12_formpanel.getForm().loadRecord(record);
	acu_gestionresultado_actividad34_formpanel.getForm().loadRecord(record);
  }
});

function acu_gestionresultado_actividad12_subirdatos() {
	
	subirDatos(
		acu_gestionresultado_actividad12_formpanel, 
		'acueducto_gestionresultado/actualizarGestionResultado',
		{
			form: 'actividad12', 
			acu_gre_valor_micromedicion: Ext.getCmp('acu_gre_valor_micromedicion').getValue(),
			acu_gre_valor_macromedicion: Ext.getCmp('acu_gre_valor_macromedicion').getValue()
		},
		function(){
			acu_gestionresultado_actividad12_formpanel.hide();
			acu_gestionresultado_actividad34_formpanel.show();
		}
	);
}

function acu_gestionresultado_actividad34_subirdatos() {
	subirDatos(
		acu_gestionresultado_actividad34_formpanel, 
		'acueducto_gestionresultado/actualizarGestionResultado',
		{
			form: 'actividad34',
			acu_gre_valor_calidad_agua: Ext.getCmp('acu_gre_valor_calidad_agua').getValue(),
			acu_gre_valor_facturacion: Ext.getCmp('acu_gre_valor_facturacion').getValue()
		},
		function(){
			Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(4);
		}
	);
}

function acu_gestionresultado_calcularmicromedidores(){
	Ext.getCmp('acu_gre_valor_micromedicion').setValue(
			Ext.getCmp('acu_gre_micromedidores_funcionando').getValue() / Ext.getCmp('acu_gre_total_suscriptores_micromedicion').getValue()
	);
}

function acu_gestionresultado_calcularmacromedidores(){
	Ext.getCmp('acu_gre_valor_macromedicion').setValue(
			Ext.getCmp('acu_gre_macromedidores_funcionando').getValue() / Ext.getCmp('acu_gre_macromedidores_proyectados').getValue()
	);
}

function acu_gestionresultado_calcularcalidadagua(){
	Ext.getCmp('acu_gre_valor_calidad_agua').setValue(
			Ext.getCmp('acu_gre_muestras_aptas').getValue() / Ext.getCmp('acu_gre_muestras_tomadas').getValue()
	);
}

function acu_gestionresultado_calcularfacturacion(){
	Ext.getCmp('acu_gre_valor_facturacion').setValue(
			Ext.getCmp('acu_gre_total_facturas_diciembre').getValue() / Ext.getCmp('acu_gre_total_suscriptores_facturacion').getValue()
	);
}


