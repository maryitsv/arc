var acu_capacitacion_datastore = new Ext.data.Store({
	id: 'acu_capacitacion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_capacitacion/obtenerDatosAcuCapacitacion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
				{name: 'acu_cap_dada_prestador', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_uso_eficiente_agua', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_higiene_personal', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_higiene_vivienda', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_higiene_sitios_publicos', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_educacion_ambiental', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_participacion_comunitaria', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_veeduria_ciudadana', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_funcion_sist_abastecimiento', type: 'int'},
				{name: 'acu_cap_actividad_capacitacion_otra_cuales', type: 'string'},
				{name: 'acu_cap_capacitacion_recibida_prestador', type: 'int'},
				{name: 'acu_cap_temas_capacitacion_administrativos', type: 'int'},
				{name: 'acu_cap_temas_capacitacion_normativos', type: 'int'},
				{name: 'acu_cap_temas_capacitacion_ambientales', type: 'int'},
				{name: 'acu_cap_temas_capacitacion_operativos', type: 'int'},
				{name: 'acu_cap_temas_capacitacion_sui', type: 'int'},
				{name: 'acu_cap_temas_capacitacion_otra_cual', type: 'string'},
				{name: 'acu_cap_instituciones_ofrecieron', type: 'string'},
				{name: 'acu_cap_numero_directiva_hombres', type: 'int'},
				{name: 'acu_cap_numero_directiva_mujeres', type: 'int'}
	])
});

/////////////////////************  capacitacion brindada  ************************

var acu_cap_dada_prestador = new Ext.form.RadioGroup( {
	id: 'acu_cap_dada_prestador',
    fieldLabel: '<html>&iquest;Realiz&oacute; actividades de capacitaci&oacute;n dirigidas a la comunidad en este a&ntilde;o?</html>',
    itemCls: 'x-check-group-alt',
    labelWidth: 300,
	columns: 1,
    name: 'acu_cap_dada_prestador',
    items:
    [
       {
          boxLabel: 'Si',
		  id: 'acu_cap_dada_prestador_si',
          name: 'acu_cap_dada_prestador', 
          checked: true,
		  inputValue: 1,
          listeners:
          {
                'render': function(){
					ayuda('acu_cap_dada_prestador_si', ayuda_acu_cap_dada_prestador);
				}
          }
       },
       { 
    	  boxLabel: 'No',
		  id: 'acu_cap_dada_prestador_no',
    	  name: 'acu_cap_dada_prestador',
		  inputValue: 0,
		  listeners:
          {
				'render': function(){
					ayuda('acu_cap_dada_prestador_no', ayuda_acu_cap_dada_prestador);
				}
          }
       }
    ] 
} );


var acu_cap_actividad_capacitacion_uso_eficiente_agua = new Ext.form.Checkbox({
	fieldLabel: '<html>Indique las formas de participaci&oacute;n ciudadana</html>',
	labelWidth: 300,
	boxLabel: 'Uso eficiente del agua',
	id: 'acu_cap_actividad_capacitacion_uso_eficiente_agua', 
	name: 'acu_cap_actividad_capacitacion_uso_eficiente_agua',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_uso_eficiente_agua', ayuda_acu_cap_actividad_capacitacion_uso_eficiente_agua);
		}
	}
});

var acu_cap_actividad_capacitacion_higiene_personal = new Ext.form.Checkbox({
	boxLabel: 'Higiene personal',
	id: 'acu_cap_actividad_capacitacion_higiene_personal',
	name: 'acu_cap_actividad_capacitacion_higiene_personal',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_higiene_personal', ayuda_acu_cap_actividad_capacitacion_higiene_personal);
		}
	}
});

var acu_cap_actividad_capacitacion_higiene_vivienda = new Ext.form.Checkbox({  
	boxLabel: 'Higiene en la vivienda',
	id: 'acu_cap_actividad_capacitacion_higiene_vivienda',
	name: 'acu_cap_actividad_capacitacion_higiene_vivienda',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_higiene_vivienda', ayuda_acu_cap_actividad_capacitacion_higiene_vivienda);
		}
	}
});

var acu_cap_actividad_capacitacion_higiene_sitios_publicos = new Ext.form.Checkbox({
	boxLabel: 'Higiene en sitios publicos',
	id: 'acu_cap_actividad_capacitacion_higiene_sitios_publicos',
	name: 'acu_cap_actividad_capacitacion_higiene_sitios_publicos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_higiene_sitios_publicos', ayuda_acu_cap_actividad_capacitacion_higiene_sitios_publicos);
		}
	}
});

var acu_cap_actividad_capacitacion_educacion_ambiental = new Ext.form.Checkbox({
	boxLabel: '<html>Educaci&oacute;n ambiental</html>', 
	id: 'acu_cap_actividad_capacitacion_educacion_ambiental',
	name: 'acu_cap_actividad_capacitacion_educacion_ambiental',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_educacion_ambiental', ayuda_acu_cap_actividad_capacitacion_educacion_ambiental);
		}
	}
});

var acu_cap_actividad_capacitacion_participacion_comunitaria = new Ext.form.Checkbox({  
	boxLabel: '<html>Participaci&oacute;n comunitaria</html>', 
	id: 'acu_cap_actividad_capacitacion_participacion_comunitaria',
	name: 'acu_cap_actividad_capacitacion_participacion_comunitaria',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_participacion_comunitaria', ayuda_acu_cap_actividad_capacitacion_participacion_comunitaria);
		}
	}
});

var acu_cap_actividad_capacitacion_funcion_sist_abastecimiento = new Ext.form.Checkbox({
	boxLabel: '<html>Funci&oacute;n del sistema de abastecimiento</html>', 
	id: 'acu_cap_actividad_capacitacion_funcion_sist_abastecimiento',
	name: 'acu_cap_actividad_capacitacion_funcion_sist_abastecimiento',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_funcion_sist_abastecimiento', ayuda_acu_cap_actividad_capacitacion_funcion_sist_abastecimiento);
		}
	}
});

var acu_cap_actividad_capacitacion_veeduria_ciudadana = new Ext.form.Checkbox({
	boxLabel: '<html>Veedur&iacute;a ciudadana</html>', 
	id: 'acu_cap_actividad_capacitacion_veeduria_ciudadana',
	name: 'acu_cap_actividad_capacitacion_veeduria_ciudadana',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_veeduria_ciudadana', ayuda_acu_cap_actividad_capacitacion_veeduria_ciudadana);
		}
	}
});

var acu_cap_actividad_capacitacion_otra = new Ext.form.Checkbox({
	boxLabel: 'Otro',
	id: 'acu_cap_actividad_capacitacion_otra',
	name: 'acu_cap_actividad_capacitacion_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_otra', ayuda_acu_cap_actividad_capacitacion_otra);
		}
	}
});

var acu_cap_actividad_capacitacion_otra_cuales = new Ext.form.TextField( { 
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_actividad_capacitacion_otra_cuales',
	id: 'acu_cap_actividad_capacitacion_otra_cuales',
	fieldLabel: '<html>&iquest;Otra, cu&aacute;l?</html>',
	maxLength: 100,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_otra_cuales', ayuda_acu_cap_actividad_capacitacion_otra_cuales);
		}
	}              
} );

/////////////////////************  capacitacion recibida  ************************

var acu_cap_capacitacion_recibida_prestador = new Ext.form.RadioGroup( {
	id: 'acu_cap_capacitacion_recibida_prestador',
    fieldLabel: '<html>&iquest;Recibi&oacute; capacitaci&oacute;n durante este a&ntilde;o?</html>',
    itemCls: 'x-check-group-alt',
    labelWidth: 300,
	columns: 1,
    name: 'acu_cap_capacitacion_recibida_prestador',
    items:
    [
       {
          boxLabel: 'Si',
		  id: 'acu_cap_capacitacion_recibida_prest_si',
          name: 'acu_cap_capacitacion_recibida_prestador', 
          checked: true,
		  inputValue: 1,
          listeners:
          {
                'render': function(){
					ayuda('acu_cap_dada_prestador_si', ayuda_acu_cap_capacitacion_recibida_prestador);
				}
          }
       },
       { 
    	  boxLabel: 'No',
		  id: 'acu_cap_capacitacion_recibida_prest_no',
    	  name: 'acu_cap_capacitacion_recibida_prestador',
		  inputValue: 1,
		  listeners:
          {
				'render': function(){
					ayuda('acu_cap_capacitacion_recibida_prest_no', ayuda_acu_cap_capacitacion_recibida_prestador);
				}
          }
       }
    ] 
} );

var acu_cap_temas_capacitacion_administrativos = new Ext.form.Checkbox({
	fieldLabel: '<html>Temas de capacitaci&oacute;n</html>',
	labelStyle: 'width:340px;',
	boxLabel: 'Administrativos',
	id: 'acu_cap_temas_capacitacion_administrativos',
	name: 'acu_cap_temas_capacitacion_administrativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_administrativos', ayuda_acu_cap_temas_capacitacion_administrativos);
		}
	}
});

var acu_cap_temas_capacitacion_normativos = new Ext.form.Checkbox({
	boxLabel: 'Normativos',
	id: 'acu_cap_temas_capacitacion_normativos',
	name: 'acu_cap_temas_capacitacion_normativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_normativos', ayuda_acu_cap_temas_capacitacion_normativos);
		}
	}
});

var acu_cap_temas_capacitacion_ambientales = new Ext.form.Checkbox({ 
	boxLabel: 'Ambientales',
	id: 'acu_cap_temas_capacitacion_ambientales',
	name: 'acu_cap_temas_capacitacion_ambientales',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_ambientales', ayuda_acu_cap_temas_capacitacion_ambientales);
		}
	}
});

var acu_cap_temas_capacitacion_operativos = new Ext.form.Checkbox({
	boxLabel: 'Operativos',
	id: 'acu_cap_temas_capacitacion_operativos',
	name: 'acu_cap_temas_capacitacion_operativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_operativos', ayuda_acu_cap_temas_capacitacion_operativos);
		}
	}
});

var acu_cap_temas_capacitacion_sui = new Ext.form.Checkbox({
	boxLabel: 'SUI',
	id: 'acu_cap_temas_capacitacion_sui',
	name: 'acu_cap_temas_capacitacion_sui',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_sui', ayuda_acu_cap_temas_capacitacion_sui);
		}
	}
});

var acu_cap_temas_capacitacion_otra = new Ext.form.Checkbox({  
	boxLabel: 'Otro',
	id: 'acu_cap_temas_capacitacion_otra',
	name: 'acu_cap_temas_capacitacion_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_otra', ayuda_acu_cap_temas_capacitacion_otra);
		}
	}
});

var acu_cap_temas_capacitacion_otra_cual = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_temas_capacitacion_otra_cual',
	id: 'acu_cap_temas_capacitacion_otra_cual',
	maxLength: 100,
	minLength: 0,
	fieldLabel: '<html>&iquest;Otra, cu&aacute;l?</html>',
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_temas_capacitacion_otra_cual', ayuda_acu_cap_temas_capacitacion_otra_cual);
		}
	}              
} );

var acu_cap_instituciones_ofrecieron = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_instituciones_ofrecieron',
	id: 'acu_cap_instituciones_ofrecieron',
	fieldLabel: 'Instituciones que ofrecieron capacitaciones',
	maxLength: 100,
	minLength: 4,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_instituciones_ofrecieron', ayuda_acu_cap_instituciones_ofrecieron);
		}
	}              
} );

var acu_cap_numero_directiva_hombres = new Ext.form.NumberField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	emptyText: '0',
	name: 'acu_cap_numero_directiva_hombres',
	id: 'acu_cap_numero_directiva_hombres',
	fieldLabel: 'N&uacute;mero de hombres integrantes de la directiva',
	maxLength: 1000,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_numero_directiva_hombres', ayuda_acu_cap_numero_directiva_hombres);
		}
	}              
} );

var acu_cap_numero_directiva_mujeres = new Ext.form.NumberField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	emptyText: '0',
	name: 'acu_cap_numero_directiva_mujeres',
	id: 'acu_cap_numero_directiva_mujeres',
	fieldLabel: 'N&uacute;mero de mujeres integrantes de la directiva',
	maxLength: 1000,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_numero_directiva_mujeres', ayuda_acu_cap_numero_directiva_mujeres);
		}
	}              
} );

var form_acu_capacitacion = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_acu_capacitacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			title: 'Capacitacion brindada',
			id: 'acu_capacitacion_brindada_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 200,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
				acu_cap_dada_prestador, 
				acu_cap_actividad_capacitacion_uso_eficiente_agua,
				acu_cap_actividad_capacitacion_higiene_personal,
				acu_cap_actividad_capacitacion_higiene_vivienda,
				acu_cap_actividad_capacitacion_higiene_sitios_publicos,
				acu_cap_actividad_capacitacion_educacion_ambiental,
				acu_cap_actividad_capacitacion_participacion_comunitaria,
				acu_cap_actividad_capacitacion_funcion_sist_abastecimiento,
				acu_cap_actividad_capacitacion_veeduria_ciudadana,
				//acu_cap_actividad_capacitacion_otra,
				acu_cap_actividad_capacitacion_otra_cuales
			]
	   },
	   { xtype: 'panel', columnWidth: '.01'},
	   {
			xtype: 'fieldset',
			title: 'Capacitacion recibida',
			id: 'acu_capacitacion_recibida_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 200,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ 
				acu_cap_capacitacion_recibida_prestador, 
				acu_cap_temas_capacitacion_administrativos, 
				acu_cap_temas_capacitacion_normativos, 
				acu_cap_temas_capacitacion_ambientales,
				acu_cap_temas_capacitacion_operativos, 
				acu_cap_temas_capacitacion_sui, 
				//acu_cap_temas_capacitacion_otra,
				acu_cap_temas_capacitacion_otra_cual, 
				//{xtype: 'label', html: '<br/><br/>'}, 
				acu_cap_instituciones_ofrecieron, 
				acu_cap_numero_directiva_hombres, 
				acu_cap_numero_directiva_mujeres
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(1);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							acu_capacitacion_subirdatos();
			}
	    }
	]
});

acu_capacitacion_datastore.load({
  callback: function() {
	var record = acu_capacitacion_datastore.getAt(0);
	form_acu_capacitacion.getForm().loadRecord(record);
  }
});

function acu_capacitacion_subirdatos() {

	subirDatos(
		form_acu_capacitacion, 
		'acueducto_capacitacion/actualizarCapacitacion',
		{},
		function(){
			Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(3);
		}
	);
	
}
