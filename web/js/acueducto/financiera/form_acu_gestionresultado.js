

var acu_gre_plan_gestion_resultados = new Ext.form.RadioGroup ({
   itemCls: 'x-check-group-alt',
   labelStyle: 'width:140px;',
   fieldLabel: '<html>&iquest;Tiene definido un plan de gesti&oacute;n y resultados?</html>',
   columns: 1,
   items:
   [
	  {
		boxLabel: 'Si',
		id: 'acu_gre_plan_gestion_resultados_si',
		name: 'acu_gre_plan_gestion_resultados', 
		checked: true,
		listeners:
        {
			'render': function(){
				ayuda('acu_gre_plan_gestion_resultados_si', ayuda_acu_gre_plan_gestion_resultados);
			}
        }
	  },
	  { 
		boxLabel: 'No',
		id: 'acu_gre_plan_gestion_resultados_no',
		name: 'acu_gre_plan_gestion_resultados',
		listeners:
        {
			'render': function(){
				ayuda('acu_gre_plan_gestion_resultados_no', ayuda_acu_gre_plan_gestion_resultados);
			}
        }
	  }
   ]                
} );

var acu_gre_actividad1_label = new Ext.form.Label ( {
	html: '<font size=2>Implementar micromedici&oacute;n<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_micromedidores_funcionando = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_micromedidores_funcionando',
	id: 'acu_gre_micromedidores_funcionando',
	fieldLabel: '<html>N&uacute;mero de micromedidores instalados y funcionando</html>',
	disabled : false,
	//vtype: 'calcularValorPG1',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_micromedidores_funcionando', ayuda_acu_gre_micromedidores_funcionando);
		}
	}                        
} );

var acu_gre_total_suscriptores_micromedicion = new Ext.form.TextField ({
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_total_suscriptores_micromedicion',
	id: 'acu_gre_total_suscriptores_micromedicion',
	fieldLabel: '<html>N&uacute;mero total de suscriptores</html>',
	disabled : false,
	//vtype: 'calcularValorPG1',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_total_suscriptores_micromedicion', ayuda_acu_gre_total_suscriptores_micromedicion);
		}
	}              
});

var acu_gre_valor_micromedicion = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_micromedicion',
	id: 'acu_gre_valor_micromedicion',
	fieldLabel: '<html><b>Valor</b></html>',
	disabled : true              
} );

var acu_gre_actividad2_label = new Ext.form.Label ( {
	html: '<font size=2>Implementar macromedici&oacute;n<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_macromedidores_funcionando = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_macromedidores_funcionando',
	id: 'acu_gre_macromedidores_funcionando',
	fieldLabel: '<html>N&uacute;mero de macromedidores instalados y funcionando</html>',
	disabled : false,
	//vtype: 'calcularValorPG2',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_macromedidores_funcionando', ayuda_acu_gre_macromedidores_funcionando);
		}
	}              
} );

var acu_gre_macromedidores_proyectados = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_macromedidores_proyectados',
	id: 'acu_gre_macromedidores_proyectados',
	fieldLabel: '<html>N&uacute;mero de Macromedidores proyectados</html>',
	disabled : false,
	//vtype: 'calcularValorPG2',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_macromedidores_proyectados', ayuda_acu_gre_macromedidores_proyectados);
		}
	}              
} );

var acu_gre_valor_macromedicion = new Ext.form.TextField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_macromedicion',
	id: 'acu_gre_valor_macromedicion',
	fieldLabel: '<html><b>Valor</b></html>',
	disabled : true              
} );

var acu_gre_actividad3_label = new Ext.form.Label ( {
	html: '<font size=2>Toma de muestras para medir la calidad del agua<br/><br/><b>Indicadores</b></font><br/><br/>'
} );

var acu_gre_muestras_aptasvar = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_muestras_aptasvar',
	id: 'acu_gre_muestras_aptasvar',
	fieldLabel: '<html>N&uacute;mero de muestras aptas</html',
	disabled : false,
	//vtype: 'calcularValorPG3',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_muestras_aptasvar', ayuda_acu_gre_muestras_aptasvar);
		}
	}              
} );

var acu_gre_muestras_tomadas = new Ext.form.TextField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_muestras_tomadas',
	id: 'acu_gre_muestras_tomadas',
	fieldLabel: '<html>N&uacute;mero de muestras tomadas</html>',
	disabled : false,
	//vtype: 'calcularValorPG3',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_muestras_tomadas', ayuda_acu_gre_muestras_tomadas);
		}
	}              
} );

var acu_gre_valor_calidad_agua = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_calidad_agua',
	id: 'acu_gre_valor_calidad_agua',
	fieldLabel: '<html><b>Valor</b></html>',
	disabled : true              
} );

var acu_gre_actividad4_label = new Ext.form.Label ( {
	html: '<font size=2>Implementar un sistema de facturaci&oacute;n<br/><br/><b>Indicadores</b></font><br/><br/>'
} );


var acu_gre_total_suscriptores_facturacion = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_total_suscriptores_facturacion',
	id: 'acu_gre_total_suscriptores_facturacion',
	fieldLabel: '<html>N&uacute;mero total de facturas expedidas en Diciembre del a&ntilde;o anterior</html>',
	disabled : false,
	//vtype: 'calcularValorPG4',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_total_suscriptores_facturacion', ayuda_acu_gre_total_suscriptores_facturacion);
		}
	}              
} );

var acu_gre_total_facturas_diciembre = new Ext.form.TextField ( { 
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_total_facturas_diciembre',
	id: 'acu_gre_total_facturas_diciembre',
	fieldLabel: '<html>N&uacute;mero total de suscriptores</html>',
	disabled : false,
	vtype: 'calcularValorPG4',
	listeners:
	{
		'render': function(){
			ayuda('acu_gre_total_facturas_diciembre', ayuda_acu_gre_total_facturas_diciembre);
		}
	}              
} );

var acu_gre_valor_facturacion = new Ext.form.TextField ( {
	enableKeyEvents: true,
	anchor: '100%',
	labelStyle: 'width:340px;',
	name: 'acu_gre_valor_facturacion',
	id: 'acu_gre_valor_facturacion',
	fieldLabel: '<html><b>Valor</b></html>',
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
			defaultType: 'textfield',
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
			defaultType: 'textfield',
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
			defaultType: 'textfield',
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
							acu_gestionresultado_actividad12_formpanel.hide();
							acu_gestionresultado_actividad34_formpanel.show();
			}
	    }
	]
});


var acu_gestionresultado_actividad34_formpanel = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	height: largo_panel-15,
	layout: 'column',
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			id: 'acu_gestionresultado_actividad3_fieldset',
			columnWidth: '.495',
			height: 300,
			title: 'Actividad 3',
			defaultType: 'textfield',
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
			defaultType: 'textfield',
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
							Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(4);
							acu_gestionresultado_subirdatos();
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
		acu_gre_muestras_aptasvar, 
		acu_gre_muestras_tomadas,
		{xtype: 'label', html: '<br/><br/>'},
		acu_gre_valor_calidad_agua
	] );
	Ext.getCmp('acu_gestionresultado_actividad4_fieldset').add( [ 
		acu_gre_actividad4_label, 
		acu_gre_total_suscriptores_facturacion, 
		acu_gre_total_facturas_diciembre,
		{xtype: 'label', html: '<br/><br/>'},
		acu_gre_valor_facturacion
	] );
}

var form_acu_gestionresultado = new Ext.Panel({
	border: false,
	layout: 'form',
	renderTo: 'div_form_acu_gestionresultado',
	autoWidth: true,
	items: [acu_gestionresultado_actividad12_formpanel, acu_gestionresultado_actividad34_formpanel]
});

function acu_gestionresultado_subirdatos() {

	subirDatos(form_acu_gestionresultado, 'acueducto_gestionresultado/actualizarGestionResultado');

}