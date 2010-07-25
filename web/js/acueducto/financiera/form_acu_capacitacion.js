

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
		  listeners:
          {
				'render': function(){
					ayuda('acu_cap_dada_prestador_no', ayuda_acu_cap_dada_prestador);
				}
          }
       }
    ] 
} );


var acu_formasdeparticipacion_checkboxgroup = new Ext.form.CheckboxGroup ( {
	xtype: 'checkboxgroup',
	fieldLabel: '<html>Indique las formas de participaci&oacute;n ciudadana</html>',
	labelWidth: 300,
	itemCls: 'x-check-group-alt',
	columns: 1,
	vertical: true,
	items: [
		{
		   boxLabel: 'Uso eficiente del agua',
		   id: 'acu_cap_actividad_capacitacion_uso_eficiente_agua', 
		   name: 'acu_cap_actividad_capacitacion_uso_eficiente_agua',
		   listeners:
		   {
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_uso_eficiente_agua', ayuda_acu_cap_actividad_capacitacion_uso_eficiente_agua);
				}
		   }
		},
		{
			boxLabel: 'Higiene personal',
			id: 'acu_cap_actividad_capacitacion_higene_personal',
			name: 'acu_cap_actividad_capacitacion_higene_personal',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_higene_personal', ayuda_acu_cap_actividad_capacitacion_higene_personal);
				}
			}
			
		},
		{
			boxLabel: 'Higiene en la vivienda',
			id: 'acu_cap_actividad_capacitacion_higene_vivienda',
			name: 'acu_cap_actividad_capacitacion_higene_vivienda',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_higene_vivienda', ayuda_acu_cap_actividad_capacitacion_higene_vivienda);
				}
			}
		},
		{
			boxLabel: 'Higiene en sitios publicos',
			id: 'acu_cap_actividad_capacitacion_higene_sitios_publicos',
			name: 'acu_cap_actividad_capacitacion_higene_sitios_publicos',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_higene_sitios_publicos', ayuda_acu_cap_actividad_capacitacion_higene_sitios_publicos);
				}
			}
		},
		{
			boxLabel: '<html>Educaci&oacute;n ambiental</html>', 
			id: 'acu_cap_actividad_capacitacion_educacion_ambiental',
			name: 'acu_cap_actividad_capacitacion_educacion_ambiental',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_educacion_ambiental', ayuda_acu_cap_actividad_capacitacion_educacion_ambiental);
				}
			}
		},
		{	
			boxLabel: '<html>Participaci&oacute;n comunitaria</html>', 
			id: 'acu_cap_actividad_capacitacion_participacion_comunitaria',
			name: 'acu_cap_actividad_capacitacion_participacion_comunitaria',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_participacion_comunitaria', ayuda_acu_cap_actividad_capacitacion_participacion_comunitaria);
				}
			}
		},
		{	
			boxLabel: '<html>Funci&oacute;n del sistema de abastecimiento</html>', 
			id: 'acu_cap_actividad_capacitacion_funcion_sist_abastecimiento',
			name: 'acu_cap_actividad_capacitacion_funcion_sist_abastecimiento',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_funcion_sist_abastecimiento', ayuda_acu_cap_actividad_capacitacion_funcion_sist_abastecimiento);
				}
			}
		},
		{	
			boxLabel: '<html>Veedur&iacute;a ciudadana</html>', 
			id: 'acu_cap_actividad_capacitacion_veeduria_ciudadana',
			name: 'acu_cap_actividad_capacitacion_veeduria_ciudadana',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_veeduria_ciudadana', ayuda_acu_cap_actividad_capacitacion_veeduria_ciudadana);
				}
			}
		},
		{
			boxLabel: 'Otro',
			id: 'acu_cap_actividad_capacitacion_otra',
			name: 'acu_cap_actividad_capacitacion_otra',
			listeners:
			{
				'render': function(){
					ayuda('acu_cap_actividad_capacitacion_otra', ayuda_acu_cap_actividad_capacitacion_otra);
				}
			}
		}
	]
} );

var acu_cap_actividad_capacitacion_otra_cuales = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_actividad_capacitacion_otra_cuales',
	id: 'acu_cap_actividad_capacitacion_otra_cuales',
	fieldLabel: '<html>&iquest;Cu&aacute;l?</html>',
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_actividad_capacitacion_otra_cuales', ayuda_acu_cap_actividad_capacitacion_otra_cuales);
		}
	}              
} );

var acu_cap_capacitacion_recibida_prest = new Ext.form.RadioGroup( {
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
		  listeners:
          {
				'render': function(){
					ayuda('acu_cap_capacitacion_recibida_prest_no', ayuda_acu_cap_capacitacion_recibida_prestador);
				}
          }
       }
    ] 
} );

var acu_cap_temas_capacitacion_checkboxgroup = new Ext.form.CheckboxGroup( {
	id: 'acu_cap_temas_capacitacion_checkboxgroup',
	fieldLabel: '<html>Temas de capacitaci&oacute;n</html>',
	labelStyle: 'width:340px;',
	itemCls: 'x-check-group-alt',
	columns: 2,
	vertical: true,
	items: [
		{
		   boxLabel: 'Administrativos',
		   id: 'acu_cap_temas_capacitacion_administrativos',
		   name: 'acu_cap_temas_capacitacion_administrativos',
		   listeners:
		   {
			    'render': function(){
					ayuda('acu_cap_temas_capacitacion_administrativos', ayuda_acu_cap_temas_capacitacion_administrativos);
				}
		   }
		},
		{
			boxLabel: 'Normativos',
			id: 'acu_cap_temas_capacitacion_normativos',
			name: 'acu_cap_temas_capacitacion_normativos',
			listeners:
			{
			    'render': function(){
					ayuda('acu_cap_temas_capacitacion_normativos', ayuda_acu_cap_temas_capacitacion_normativos);
				}
			}
		},
		{
			boxLabel: 'Ambientales',
			id: 'acu_cap_temas_capacitacion_ambientales',
			name: 'acu_cap_temas_capacitacion_ambientales',
			listeners:
			{
			    'render': function(){
					ayuda('acu_cap_temas_capacitacion_ambientales', ayuda_acu_cap_temas_capacitacion_ambientales);
				}
			}
		},
		{
			boxLabel: 'Operativos',
			id: 'acu_cap_temas_capacitacion_operativos',
			name: 'acu_cap_temas_capacitacion_operativos',
			listeners:
			{
			    'render': function(){
					ayuda('acu_cap_temas_capacitacion_operativos', ayuda_acu_cap_temas_capacitacion_operativos);
				}
			}
		},
		{
			boxLabel: 'SUI',
			id: 'acu_cap_temas_capacitacion_sui',
			name: 'acu_cap_temas_capacitacion_sui',
			listeners:
			{
			    'render': function(){
					ayuda('acu_cap_temas_capacitacion_sui', ayuda_acu_cap_temas_capacitacion_sui);
				}
			}
		},
		{
			boxLabel: 'Otro',
			id: 'acu_cap_temas_capacitacion_otra',
			name: 'acu_cap_temas_capacitacion_otra',
			listeners:
			{
			    'render': function(){
					ayuda('acu_cap_temas_capacitacion_otra', ayuda_acu_cap_temas_capacitacion_otra);
				}
			}
		}
	]
} );

var acu_cap_temas_capacitacion_otra_cual = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_temas_capacitacion_otra_cual',
	id: 'acu_cap_temas_capacitacion_otra_cual',
	fieldLabel: '<html>&iquest;Cu&aacute;l?</html>',
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
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_instituciones_ofrecieron', ayuda_acu_cap_instituciones_ofrecieron);
		}
	}              
} );

var acu_cap_numero_directiva_hombres = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_numero_directiva_hombres',
	id: 'acu_cap_numero_directiva_hombres',
	fieldLabel: 'N&uacute;mero de hombres integrantes de la directiva',
	disabled : false,
	listeners:
	{
		'render': function(){
			ayuda('acu_cap_numero_directiva_hombres', ayuda_acu_cap_numero_directiva_hombres);
		}
	}              
} );

var acu_cap_numero_directiva_mujeres = new Ext.form.TextField( {
	anchor: '100%',
	labelStyle: 'width:300px; text-align:right;',
	name: 'acu_cap_numero_directiva_mujeres',
	id: 'acu_cap_numero_directiva_mujeres',
	fieldLabel: 'N&uacute;mero de mujeres integrantes de la directiva',
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
			labelWidth: 170,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [acu_cap_dada_prestador, acu_formasdeparticipacion_checkboxgroup, acu_cap_actividad_capacitacion_otra_cuales]
	   },
	   { xtype: 'panel', columnWidth: '.01'},
	   {
			xtype: 'fieldset',
			title: 'Capacitacion recibida',
			id: 'acu_capacitacion_recibida_fieldset',
			height: 350,
		    columnWidth: '.495',
			defaultType: 'textfield',
			labelWidth: 150,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ acu_cap_capacitacion_recibida_prest, acu_cap_temas_capacitacion_checkboxgroup, acu_cap_temas_capacitacion_otra_cual, {xtype: 'label', html: '<br/><br/>'}, acu_cap_instituciones_ofrecieron, acu_cap_numero_directiva_hombres, acu_cap_numero_directiva_mujeres]
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
							Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(3);
							acu_capacitacion_subirdatos();
			}
	    }
	]
});


function acu_capacitacion_subirdatos() {

	subirDatos(form_acu_capacitacion, 'acueducto_capacitacion/actualizarCapacitacion');
	
}