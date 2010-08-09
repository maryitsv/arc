var ase_capacitacion_datastore = new Ext.data.Store({
	id: 'ase_capacitacion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo_capacitacion/obtenerDatosAseCapacitacion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
				{name: 'ase_cap_dada_prestador', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_uso_eficiente_agua', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_higiene_personal', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_higiene_vivienda', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_higiene_sitios_publicos', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_educacion_ambiental', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_participacion_comunitaria', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_veeduria_ciudadana', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_funcion_sist_abastecimiento', type: 'int'},
				{name: 'ase_cap_actividad_capacitacion_otra_cuales', type: 'string'},
				{name: 'ase_cap_capacitacion_recibida_prestador', type: 'int'},
				{name: 'ase_cap_temas_capacitacion_administrativos', type: 'int'},
				{name: 'ase_cap_temas_capacitacion_normativos', type: 'int'},
				{name: 'ase_cap_temas_capacitacion_ambientales', type: 'int'},
				{name: 'ase_cap_temas_capacitacion_operativos', type: 'int'},
				{name: 'ase_cap_temas_capacitacion_sui', type: 'int'},
				{name: 'ase_cap_temas_capacitacion_otra_cual', type: 'string'},
				{name: 'ase_cap_instituciones_ofrecieron', type: 'string'},
				{name: 'ase_cap_numero_directiva_hombres', type: 'int'},
				{name: 'ase_cap_numero_directiva_mujeres', type: 'int'}
	])
});

/////////////////////************  capacitacion brindada  ************************

var ase_cap_dada_prestador = new Ext.form.RadioGroup( {
	id: 'ase_cap_dada_prestador',
    fieldLabel: '<html>&iquest;Realiz&oacute; actividades de capacitaci&oacute;n dirigidas a la comunidad en este a&ntilde;o?</html>',
    itemCls: 'x-check-group-alt',
    labelWidth: 300,
	columns: 1,
    name: 'ase_cap_dada_prestador',
    items:
    [
       {
          boxLabel: 'Si',
		  id: 'ase_cap_dada_prestador_si',
          name: 'ase_cap_dada_prestador', 
          checked: true,
		  inputValue: 1,
          listeners:
          {
                'render': function(){
					ayuda('ase_cap_dada_prestador_si', ayuda_ase_cap_dada_prestador);
				}
          }
       },
       { 
    	  boxLabel: 'No',
		  id: 'ase_cap_dada_prestador_no',
    	  name: 'ase_cap_dada_prestador',
		  inputValue: 0,
		  listeners:
          {
				'render': function(){
					ayuda('ase_cap_dada_prestador_no', ayuda_ase_cap_dada_prestador);
				}
          }
       }
    ] 
} );


var ase_cap_actividad_capacitacion_uso_eficiente_agua = new Ext.form.Checkbox({
	fieldLabel: '<html>Indique las formas de participaci&oacute;n ciudadana</html>',
	labelWidth: 300,
	boxLabel: 'Uso eficiente del agua',
	id: 'ase_cap_actividad_capacitacion_uso_eficiente_agua', 
	name: 'ase_cap_actividad_capacitacion_uso_eficiente_agua',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_uso_eficiente_agua', ayuda_ase_cap_actividad_capacitacion_uso_eficiente_agua);
		}
	}
});

var ase_cap_actividad_capacitacion_higiene_personal = new Ext.form.Checkbox({
	boxLabel: 'Higiene personal',
	id: 'ase_cap_actividad_capacitacion_higiene_personal',
	name: 'ase_cap_actividad_capacitacion_higiene_personal',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_higiene_personal', ayuda_ase_cap_actividad_capacitacion_higiene_personal);
		}
	}
});

var ase_cap_actividad_capacitacion_higiene_vivienda = new Ext.form.Checkbox({  
	boxLabel: 'Higiene en la vivienda',
	id: 'ase_cap_actividad_capacitacion_higiene_vivienda',
	name: 'ase_cap_actividad_capacitacion_higiene_vivienda',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_higiene_vivienda', ayuda_ase_cap_actividad_capacitacion_higiene_vivienda);
		}
	}
});

var ase_cap_actividad_capacitacion_higiene_sitios_publicos = new Ext.form.Checkbox({
	boxLabel: 'Higiene en sitios publicos',
	id: 'ase_cap_actividad_capacitacion_higiene_sitios_publicos',
	name: 'ase_cap_actividad_capacitacion_higiene_sitios_publicos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_higiene_sitios_publicos', ayuda_ase_cap_actividad_capacitacion_higiene_sitios_publicos);
		}
	}
});

var ase_cap_actividad_capacitacion_educacion_ambiental = new Ext.form.Checkbox({
	boxLabel: '<html>Educaci&oacute;n ambiental</html>', 
	id: 'ase_cap_actividad_capacitacion_educacion_ambiental',
	name: 'ase_cap_actividad_capacitacion_educacion_ambiental',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_educacion_ambiental', ayuda_ase_cap_actividad_capacitacion_educacion_ambiental);
		}
	}
});

var ase_cap_actividad_capacitacion_participacion_comunitaria = new Ext.form.Checkbox({  
	boxLabel: '<html>Participaci&oacute;n comunitaria</html>', 
	id: 'ase_cap_actividad_capacitacion_participacion_comunitaria',
	name: 'ase_cap_actividad_capacitacion_participacion_comunitaria',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_participacion_comunitaria', ayuda_ase_cap_actividad_capacitacion_participacion_comunitaria);
		}
	}
});

var ase_cap_actividad_capacitacion_funcion_sist_abastecimiento = new Ext.form.Checkbox({
	boxLabel: '<html>Funci&oacute;n del sistema de abastecimiento</html>', 
	id: 'ase_cap_actividad_capacitacion_funcion_sist_abastecimiento',
	name: 'ase_cap_actividad_capacitacion_funcion_sist_abastecimiento',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_funcion_sist_abastecimiento', ayuda_ase_cap_actividad_capacitacion_funcion_sist_abastecimiento);
		}
	}
});

var ase_cap_actividad_capacitacion_veeduria_ciudadana = new Ext.form.Checkbox({
	boxLabel: '<html>Veedur&iacute;a ciudadana</html>', 
	id: 'ase_cap_actividad_capacitacion_veeduria_ciudadana',
	name: 'ase_cap_actividad_capacitacion_veeduria_ciudadana',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_veeduria_ciudadana', ayuda_ase_cap_actividad_capacitacion_veeduria_ciudadana);
		}
	}
});

var ase_cap_actividad_capacitacion_otra = new Ext.form.Checkbox({
	boxLabel: 'Otro',
	id: 'ase_cap_actividad_capacitacion_otra',
	name: 'ase_cap_actividad_capacitacion_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_otra', ayuda_ase_cap_actividad_capacitacion_otra);
		}
	}
});

var ase_cap_actividad_capacitacion_otra_cuales = new Ext.form.TextField( { 
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'ase_cap_actividad_capacitacion_otra_cuales',
	id: 'ase_cap_actividad_capacitacion_otra_cuales',
	fieldLabel: '<html>&iquest;Otra, cu&aacute;l?</html>',
	maxLength: 100,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_actividad_capacitacion_otra_cuales', ayuda_ase_cap_actividad_capacitacion_otra_cuales);
		}
	}              
} );

/////////////////////************  capacitacion recibida  ************************

var ase_cap_capacitacion_recibida_prestador = new Ext.form.RadioGroup( {
	id: 'ase_cap_capacitacion_recibida_prestador',
    fieldLabel: '<html>&iquest;Recibi&oacute; capacitaci&oacute;n durante este a&ntilde;o?</html>',
    itemCls: 'x-check-group-alt',
    labelWidth: 300,
	columns: 1,
    name: 'ase_cap_capacitacion_recibida_prestador',
    items:
    [
       {
          boxLabel: 'Si',
		  id: 'ase_cap_capacitacion_recibida_prest_si',
          name: 'ase_cap_capacitacion_recibida_prestador', 
          checked: true,
		  inputValue: 1,
          listeners:
          {
                'render': function(){
					ayuda('ase_cap_dada_prestador_si', ayuda_ase_cap_capacitacion_recibida_prestador);
				}
          }
       },
       { 
    	  boxLabel: 'No',
		  id: 'ase_cap_capacitacion_recibida_prest_no',
    	  name: 'ase_cap_capacitacion_recibida_prestador',
		  inputValue: 1,
		  listeners:
          {
				'render': function(){
					ayuda('ase_cap_capacitacion_recibida_prest_no', ayuda_ase_cap_capacitacion_recibida_prestador);
				}
          }
       }
    ] 
} );

var ase_cap_temas_capacitacion_administrativos = new Ext.form.Checkbox({
	fieldLabel: '<html>Temas de capacitaci&oacute;n</html>',
	labelStyle: 'width:340px;',
	boxLabel: 'Administrativos',
	id: 'ase_cap_temas_capacitacion_administrativos',
	name: 'ase_cap_temas_capacitacion_administrativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_administrativos', ayuda_ase_cap_temas_capacitacion_administrativos);
		}
	}
});

var ase_cap_temas_capacitacion_normativos = new Ext.form.Checkbox({
	boxLabel: 'Normativos',
	id: 'ase_cap_temas_capacitacion_normativos',
	name: 'ase_cap_temas_capacitacion_normativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_normativos', ayuda_ase_cap_temas_capacitacion_normativos);
		}
	}
});

var ase_cap_temas_capacitacion_ambientales = new Ext.form.Checkbox({ 
	boxLabel: 'Ambientales',
	id: 'ase_cap_temas_capacitacion_ambientales',
	name: 'ase_cap_temas_capacitacion_ambientales',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_ambientales', ayuda_ase_cap_temas_capacitacion_ambientales);
		}
	}
});

var ase_cap_temas_capacitacion_operativos = new Ext.form.Checkbox({
	boxLabel: 'Operativos',
	id: 'ase_cap_temas_capacitacion_operativos',
	name: 'ase_cap_temas_capacitacion_operativos',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_operativos', ayuda_ase_cap_temas_capacitacion_operativos);
		}
	}
});

var ase_cap_temas_capacitacion_sui = new Ext.form.Checkbox({
	boxLabel: 'SUI',
	id: 'ase_cap_temas_capacitacion_sui',
	name: 'ase_cap_temas_capacitacion_sui',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_sui', ayuda_ase_cap_temas_capacitacion_sui);
		}
	}
});

var ase_cap_temas_capacitacion_otra = new Ext.form.Checkbox({  
	boxLabel: 'Otro',
	id: 'ase_cap_temas_capacitacion_otra',
	name: 'ase_cap_temas_capacitacion_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_otra', ayuda_ase_cap_temas_capacitacion_otra);
		}
	}
});

var ase_cap_temas_capacitacion_otra_cual = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'ase_cap_temas_capacitacion_otra_cual',
	id: 'ase_cap_temas_capacitacion_otra_cual',
	maxLength: 100,
	minLength: 0,
	fieldLabel: '<html>&iquest;Otra, cu&aacute;l?</html>',
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_temas_capacitacion_otra_cual', ayuda_ase_cap_temas_capacitacion_otra_cual);
		}
	}              
} );

var ase_cap_instituciones_ofrecieron = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'ase_cap_instituciones_ofrecieron',
	id: 'ase_cap_instituciones_ofrecieron',
	fieldLabel: 'Instituciones que ofrecieron capacitaciones',
	maxLength: 100,
	minLength: 4,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_instituciones_ofrecieron', ayuda_ase_cap_instituciones_ofrecieron);
		}
	}              
} );

var ase_cap_numero_directiva_hombres = new Ext.form.NumberField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	emptyText: '0',
	name: 'ase_cap_numero_directiva_hombres',
	id: 'ase_cap_numero_directiva_hombres',
	fieldLabel: 'N&uacute;mero de hombres integrantes de la directiva',
	maxLength: 1000,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_numero_directiva_hombres', ayuda_ase_cap_numero_directiva_hombres);
		}
	}              
} );

var ase_cap_numero_directiva_mujeres = new Ext.form.NumberField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	emptyText: '0',
	name: 'ase_cap_numero_directiva_mujeres',
	id: 'ase_cap_numero_directiva_mujeres',
	fieldLabel: 'N&uacute;mero de mujeres integrantes de la directiva',
	maxLength: 1000,
	minLength: 0,
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('ase_cap_numero_directiva_mujeres', ayuda_ase_cap_numero_directiva_mujeres);
		}
	}              
} );

var form_ase_capacitacion = new Ext.form.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_ase_capacitacion',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			title: 'Capacitacion brindada',
			id: 'ase_capacitacion_brindada_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 200,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
				ase_cap_dada_prestador, 
				ase_cap_actividad_capacitacion_uso_eficiente_agua,
				ase_cap_actividad_capacitacion_higiene_personal,
				ase_cap_actividad_capacitacion_higiene_vivienda,
				ase_cap_actividad_capacitacion_higiene_sitios_publicos,
				ase_cap_actividad_capacitacion_educacion_ambiental,
				ase_cap_actividad_capacitacion_participacion_comunitaria,
				ase_cap_actividad_capacitacion_funcion_sist_abastecimiento,
				ase_cap_actividad_capacitacion_veeduria_ciudadana,
				//ase_cap_actividad_capacitacion_otra,
				ase_cap_actividad_capacitacion_otra_cuales
			]
	   },
	   { xtype: 'panel', columnWidth: '.01'},
	   {
			xtype: 'fieldset',
			title: 'Capacitacion recibida',
			id: 'ase_capacitacion_recibida_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 200,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ 
				ase_cap_capacitacion_recibida_prestador, 
				ase_cap_temas_capacitacion_administrativos, 
				ase_cap_temas_capacitacion_normativos, 
				ase_cap_temas_capacitacion_ambientales,
				ase_cap_temas_capacitacion_operativos, 
				ase_cap_temas_capacitacion_sui, 
				//ase_cap_temas_capacitacion_otra,
				ase_cap_temas_capacitacion_otra_cual, 
				//{xtype: 'label', html: '<br/><br/>'}, 
				ase_cap_instituciones_ofrecieron, 
				ase_cap_numero_directiva_hombres, 
				ase_cap_numero_directiva_mujeres
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(1);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							ase_capacitacion_subirdatos();
			}
	    }
	]
});

ase_capacitacion_datastore.load({
  callback: function() {
	var record = ase_capacitacion_datastore.getAt(0);
	form_ase_capacitacion.getForm().loadRecord(record);
  }
});

function ase_capacitacion_subirdatos() {

	subirDatos(
		form_ase_capacitacion, 
		'aseo_capacitacion/actualizarCapacitacion',
		{},
		function(){
			Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(3);
		}
	);
	
}
