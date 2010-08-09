var alc_capacitacion_datastore = new Ext.data.Store({
	id: 'alc_capacitacion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'alcantarillado_capacitacion/obtenerDatosAlcCapacitacion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
				{name: 'alc_cap_dada_prestador', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_uso_eficiente_agua', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_higiene_personal', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_higiene_vivienda', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_higiene_sitios_publicos', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_educacion_ambiental', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_participacion_comunitaria', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_veeduria_ciudadana', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_funcion_sist_abastecimiento', type: 'int'},
				{name: 'alc_cap_actividad_capacitacion_otra_cuales', type: 'string'},
				{name: 'alc_cap_capacitacion_recibida_prestador', type: 'int'},
				{name: 'alc_cap_temas_capacitacion_administrativos', type: 'int'},
				{name: 'alc_cap_temas_capacitacion_normativos', type: 'int'},
				{name: 'alc_cap_temas_capacitacion_ambientales', type: 'int'},
				{name: 'alc_cap_temas_capacitacion_operativos', type: 'int'},
				{name: 'alc_cap_temas_capacitacion_sui', type: 'int'},
				{name: 'alc_cap_temas_capacitacion_otra_cual', type: 'string'},
				{name: 'alc_cap_instituciones_ofrecieron', type: 'string'},
				{name: 'alc_cap_numero_directiva_hombres', type: 'int'},
				{name: 'alc_cap_numero_directiva_mujeres', type: 'int'}
	])
});

/////////////////////************  capacitacion brindada  ************************

var alc_cap_dada_prestador = new Ext.form.RadioGroup( {
	id: 'alc_cap_dada_prestador',
    fieldLabel: '<html>&iquest;Realiz&oacute; actividades de capacitaci&oacute;n dirigidas a la comunidad en este a&ntilde;o?</html>',
    itemCls: 'x-check-group-alt',
    labelWidth: 300,
	columns: 1,
    name: 'alc_cap_dada_prestador',
    items:
    [
       {
          boxLabel: 'Si',
		  id: 'alc_cap_dada_prestador_si',
          name: 'alc_cap_dada_prestador', 
          checked: true,
		  inputValue: 1,
          listeners:
          {
                'render': function(){
					ayuda('alc_cap_dada_prestador_si', ayuda_alc_cap_dada_prestador);
				}
          }
       },
       { 
    	  boxLabel: 'No',
		  id: 'alc_cap_dada_prestador_no',
    	  name: 'alc_cap_dada_prestador',
		  inputValue: 0,
		  listeners:
          {
				'render': function(){
					ayuda('alc_cap_dada_prestador_no', ayuda_alc_cap_dada_prestador);
				}
          }
       }
    ] 
} );


var alc_cap_actividad_capacitacion_uso_eficiente_agua = new Ext.form.Checkbox({
	fieldLabel: '<html>Indique las formas de participaci&oacute;n ciudadana</html>',
	labelWidth: 300,
	boxLabel: 'Uso eficiente del agua',
	id: 'alc_cap_actividad_capacitacion_uso_eficiente_agua', 
	name: 'alc_cap_actividad_capacitacion_uso_eficiente_agua',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_uso_eficiente_agua', ayuda_alc_cap_actividad_capacitacion_uso_eficiente_agua);
		}
	}
});

var alc_cap_actividad_capacitacion_higiene_personal = new Ext.form.Checkbox({
	boxLabel: 'Higiene personal',
	id: 'alc_cap_actividad_capacitacion_higiene_personal',
	name: 'alc_cap_actividad_capacitacion_higiene_personal',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_higiene_personal', ayuda_alc_cap_actividad_capacitacion_higiene_personal);
		}
	}
});

var alc_cap_actividad_capacitacion_higiene_vivienda = new Ext.form.Checkbox({  
	boxLabel: 'Higiene en la vivienda',
	id: 'alc_cap_actividad_capacitacion_higiene_vivienda',
	name: 'alc_cap_actividad_capacitacion_higiene_vivienda',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_higiene_vivienda', ayuda_alc_cap_actividad_capacitacion_higiene_vivienda);
		}
	}
});

var alc_cap_actividad_capacitacion_higiene_sitios_publicos = new Ext.form.Checkbox({
	boxLabel: 'Higiene en sitios publicos',
	id: 'alc_cap_actividad_capacitacion_higiene_sitios_publicos',
	name: 'alc_cap_actividad_capacitacion_higiene_sitios_publicos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_higiene_sitios_publicos', ayuda_alc_cap_actividad_capacitacion_higiene_sitios_publicos);
		}
	}
});

var alc_cap_actividad_capacitacion_educacion_ambiental = new Ext.form.Checkbox({
	boxLabel: '<html>Educaci&oacute;n ambiental</html>', 
	id: 'alc_cap_actividad_capacitacion_educacion_ambiental',
	name: 'alc_cap_actividad_capacitacion_educacion_ambiental',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_educacion_ambiental', ayuda_alc_cap_actividad_capacitacion_educacion_ambiental);
		}
	}
});

var alc_cap_actividad_capacitacion_participacion_comunitaria = new Ext.form.Checkbox({  
	boxLabel: '<html>Participaci&oacute;n comunitaria</html>', 
	id: 'alc_cap_actividad_capacitacion_participacion_comunitaria',
	name: 'alc_cap_actividad_capacitacion_participacion_comunitaria',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_participacion_comunitaria', ayuda_alc_cap_actividad_capacitacion_participacion_comunitaria);
		}
	}
});

var alc_cap_actividad_capacitacion_funcion_sist_abastecimiento = new Ext.form.Checkbox({
	boxLabel: '<html>Funci&oacute;n del sistema de abastecimiento</html>', 
	id: 'alc_cap_actividad_capacitacion_funcion_sist_abastecimiento',
	name: 'alc_cap_actividad_capacitacion_funcion_sist_abastecimiento',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_funcion_sist_abastecimiento', ayuda_alc_cap_actividad_capacitacion_funcion_sist_abastecimiento);
		}
	}
});

var alc_cap_actividad_capacitacion_veeduria_ciudadana = new Ext.form.Checkbox({
	boxLabel: '<html>Veedur&iacute;a ciudadana</html>', 
	id: 'alc_cap_actividad_capacitacion_veeduria_ciudadana',
	name: 'alc_cap_actividad_capacitacion_veeduria_ciudadana',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_veeduria_ciudadana', ayuda_alc_cap_actividad_capacitacion_veeduria_ciudadana);
		}
	}
});

var alc_cap_actividad_capacitacion_otra = new Ext.form.Checkbox({
	boxLabel: 'Otro',
	id: 'alc_cap_actividad_capacitacion_otra',
	name: 'alc_cap_actividad_capacitacion_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_otra', ayuda_alc_cap_actividad_capacitacion_otra);
		}
	}
});

var alc_cap_actividad_capacitacion_otra_cuales = new Ext.form.TextField( { 
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'alc_cap_actividad_capacitacion_otra_cuales',
	id: 'alc_cap_actividad_capacitacion_otra_cuales',
	fieldLabel: '<html>&iquest;Otra, cu&aacute;l?</html>',
	maxLength: 100,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_actividad_capacitacion_otra_cuales', ayuda_alc_cap_actividad_capacitacion_otra_cuales);
		}
	}              
} );

/////////////////////************  capacitacion recibida  ************************

var alc_cap_capacitacion_recibida_prestador = new Ext.form.RadioGroup( {
	id: 'alc_cap_capacitacion_recibida_prestador',
    fieldLabel: '<html>&iquest;Recibi&oacute; capacitaci&oacute;n durante este a&ntilde;o?</html>',
    itemCls: 'x-check-group-alt',
    labelWidth: 300,
	columns: 1,
    name: 'alc_cap_capacitacion_recibida_prestador',
    items:
    [
       {
          boxLabel: 'Si',
		  id: 'alc_cap_capacitacion_recibida_prest_si',
          name: 'alc_cap_capacitacion_recibida_prestador', 
          checked: true,
		  inputValue: 1,
          listeners:
          {
                'render': function(){
					ayuda('alc_cap_dada_prestador_si', ayuda_alc_cap_capacitacion_recibida_prestador);
				}
          }
       },
       { 
    	  boxLabel: 'No',
		  id: 'alc_cap_capacitacion_recibida_prest_no',
    	  name: 'alc_cap_capacitacion_recibida_prestador',
		  inputValue: 1,
		  listeners:
          {
				'render': function(){
					ayuda('alc_cap_capacitacion_recibida_prest_no', ayuda_alc_cap_capacitacion_recibida_prestador);
				}
          }
       }
    ] 
} );

var alc_cap_temas_capacitacion_administrativos = new Ext.form.Checkbox({
	fieldLabel: '<html>Temas de capacitaci&oacute;n</html>',
	labelStyle: 'width:340px;',
	boxLabel: 'Administrativos',
	id: 'alc_cap_temas_capacitacion_administrativos',
	name: 'alc_cap_temas_capacitacion_administrativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_administrativos', ayuda_alc_cap_temas_capacitacion_administrativos);
		}
	}
});

var alc_cap_temas_capacitacion_normativos = new Ext.form.Checkbox({
	boxLabel: 'Normativos',
	id: 'alc_cap_temas_capacitacion_normativos',
	name: 'alc_cap_temas_capacitacion_normativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_normativos', ayuda_alc_cap_temas_capacitacion_normativos);
		}
	}
});

var alc_cap_temas_capacitacion_ambientales = new Ext.form.Checkbox({ 
	boxLabel: 'Ambientales',
	id: 'alc_cap_temas_capacitacion_ambientales',
	name: 'alc_cap_temas_capacitacion_ambientales',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_ambientales', ayuda_alc_cap_temas_capacitacion_ambientales);
		}
	}
});

var alc_cap_temas_capacitacion_operativos = new Ext.form.Checkbox({
	boxLabel: 'Operativos',
	id: 'alc_cap_temas_capacitacion_operativos',
	name: 'alc_cap_temas_capacitacion_operativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_operativos', ayuda_alc_cap_temas_capacitacion_operativos);
		}
	}
});

var alc_cap_temas_capacitacion_sui = new Ext.form.Checkbox({
	boxLabel: 'SUI',
	id: 'alc_cap_temas_capacitacion_sui',
	name: 'alc_cap_temas_capacitacion_sui',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_sui', ayuda_alc_cap_temas_capacitacion_sui);
		}
	}
});

var alc_cap_temas_capacitacion_otra = new Ext.form.Checkbox({  
	boxLabel: 'Otro',
	id: 'alc_cap_temas_capacitacion_otra',
	name: 'alc_cap_temas_capacitacion_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_otra', ayuda_alc_cap_temas_capacitacion_otra);
		}
	}
});

var alc_cap_temas_capacitacion_otra_cual = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'alc_cap_temas_capacitacion_otra_cual',
	id: 'alc_cap_temas_capacitacion_otra_cual',
	maxLength: 100,
	minLength: 0,
	fieldLabel: '<html>&iquest;Otra, cu&aacute;l?</html>',
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_temas_capacitacion_otra_cual', ayuda_alc_cap_temas_capacitacion_otra_cual);
		}
	}              
} );

var alc_cap_instituciones_ofrecieron = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'alc_cap_instituciones_ofrecieron',
	id: 'alc_cap_instituciones_ofrecieron',
	fieldLabel: 'Instituciones que ofrecieron capacitaciones',
	maxLength: 100,
	minLength: 4,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_instituciones_ofrecieron', ayuda_alc_cap_instituciones_ofrecieron);
		}
	}              
} );

var alc_cap_numero_directiva_hombres = new Ext.form.NumberField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	emptyText: '0',
	name: 'alc_cap_numero_directiva_hombres',
	id: 'alc_cap_numero_directiva_hombres',
	fieldLabel: 'N&uacute;mero de hombres integrantes de la directiva',
	maxLength: 1000,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_numero_directiva_hombres', ayuda_alc_cap_numero_directiva_hombres);
		}
	}              
} );

var alc_cap_numero_directiva_mujeres = new Ext.form.NumberField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	emptyText: '0',
	name: 'alc_cap_numero_directiva_mujeres',
	id: 'alc_cap_numero_directiva_mujeres',
	fieldLabel: 'N&uacute;mero de mujeres integrantes de la directiva',
	maxLength: 1000,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('alc_cap_numero_directiva_mujeres', ayuda_alc_cap_numero_directiva_mujeres);
		}
	}              
} );

var form_alc_capacitacion = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_alc_capacitacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			title: 'Capacitacion brindada',
			id: 'alc_capacitacion_brindada_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 200,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
				alc_cap_dada_prestador, 
				alc_cap_actividad_capacitacion_uso_eficiente_agua,
				alc_cap_actividad_capacitacion_higiene_personal,
				alc_cap_actividad_capacitacion_higiene_vivienda,
				alc_cap_actividad_capacitacion_higiene_sitios_publicos,
				alc_cap_actividad_capacitacion_educacion_ambiental,
				alc_cap_actividad_capacitacion_participacion_comunitaria,
				alc_cap_actividad_capacitacion_funcion_sist_abastecimiento,
				alc_cap_actividad_capacitacion_veeduria_ciudadana,
				//alc_cap_actividad_capacitacion_otra,
				alc_cap_actividad_capacitacion_otra_cuales
			]
	   },
	   { xtype: 'panel', columnWidth: '.01'},
	   {
			xtype: 'fieldset',
			title: 'Capacitacion recibida',
			id: 'alc_capacitacion_recibida_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 200,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ 
				alc_cap_capacitacion_recibida_prestador, 
				alc_cap_temas_capacitacion_administrativos, 
				alc_cap_temas_capacitacion_normativos, 
				alc_cap_temas_capacitacion_ambientales,
				alc_cap_temas_capacitacion_operativos, 
				alc_cap_temas_capacitacion_sui, 
				//alc_cap_temas_capacitacion_otra,
				alc_cap_temas_capacitacion_otra_cual, 
				//{xtype: 'label', html: '<br/><br/>'}, 
				alc_cap_instituciones_ofrecieron, 
				alc_cap_numero_directiva_hombres, 
				alc_cap_numero_directiva_mujeres
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(1);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							alc_capacitacion_subirdatos();
			}
	    }
	]
});

alc_capacitacion_datastore.load({
  callback: function() {
	var record = alc_capacitacion_datastore.getAt(0);
	form_alc_capacitacion.getForm().loadRecord(record);
  }
});

function alc_capacitacion_subirdatos() {

	subirDatos(
		form_alc_capacitacion, 
		'alcantarillado_capacitacion/actualizarCapacitacion',
		{},
		function(){
			Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(3);
		}
	);
	
}
