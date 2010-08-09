var alc_participacionciudadana_datastore = new Ext.data.Store({
	id: 'alc_participacionciudadana_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'alcantarillado_participacionciudadana/obtenerDatosAlcParticipacionCiudadana', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
			
			  {name: 'alc_par_participacion_ciudadana_directa', type: 'int'}, 
			  {name: 'alc_par_participacion_ciudadana_asamblea', type: 'int'}, 
			  {name: 'alc_par_participacion_ciudadana_comite_desarrollo_control_social', type: 'int'}, 
			  {name: 'alc_par_participacion_ciudadana_veedurias', type: 'int'}, 
			  {name: 'alc_par_participacion_ciudadana_otra_cual', type: 'string'}, 
			  {name: 'alc_par_propuestas_vocales', type: 'int'} 
	])
});

var alc_par_tipoparticiacion_label = new Ext.form.Label({
	fieldLabel: 'Indique las formas de participaci&oacute;n ciudadana'
});

var alc_par_participacion_ciudadana_directa = new Ext.form.Checkbox({
	boxLabel: 'Participaci&oacute;n directa',
	name: 'alc_par_participacion_ciudadana_directa',
	id: 'alc_par_participacion_ciudadana_directa',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'alc_par_participacion_ciudadana_directa', ayuda_alc_par_participacion_ciudadana_directa );
			}             
	}
});

var alc_par_participacion_ciudadana_asamblea = new Ext.form.Checkbox({
	boxLabel: 'Asamblea de Representantes o Delegados', 
	name: 'alc_par_participacion_ciudadana_asamblea',
	id: 'alc_par_participacion_ciudadana_asamblea',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'alc_par_participacion_ciudadana_asamblea', ayuda_alc_par_participacion_ciudadana_asamblea );
			}                 
	}
});

var alc_par_participacion_ciudadana_comite_desarrollo_control_social = new Ext.form.Checkbox({
	boxLabel: 'Comit&eacute; de Desarrollo y Control Social', 
	name: 'alc_par_participacion_ciudadana_comite_desarrollo_control_social',
	id: 'alc_par_participacion_ciudadana_comite_desarrollo_control_social',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'alc_par_participacion_ciudadana_comite_desarrollo_control_social', ayuda_alc_par_participacion_ciudadana_comite_desarrollo_control_social );
			}                 
	}
});

var alc_par_participacion_ciudadana_veedurias = new Ext.form.Checkbox({
	boxLabel: 'Veedur&iacute;as', 
	name: 'alc_par_participacion_ciudadana_veedurias',
	id: 'alc_par_participacion_ciudadana_veedurias',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'alc_par_participacion_ciudadana_veedurias', ayuda_alc_par_participacion_ciudadana_veedurias );
			}                
	}
});

var alc_par_participacion_ciudadana_otra = new Ext.form.Checkbox({
	boxLabel: 'Otra', 
	name: 'alc_par_participacion_ciudadana_otra',
	id: 'alc_par_participacion_ciudadana_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){ 
			ayuda( 'alc_par_participacion_ciudadana_otra', ayuda_alc_par_participacion_ciudadana_otra );
		},
		'check' :
		{
		   fn: function(radio, valor) 
		   { 
			  if (valor) Ext.getCmp('alc_par_participacion_ciudadana_otra_cual').enable();
			  else Ext.getCmp('alc_par_participacion_ciudadana_otra_cual').disable();
		   }
		}   
	}
});

var alc_par_participacion_ciudadana_otra_cual = new Ext.form.TextField({
    enableKeyEvents: true,
    width: 310,
    labelStyle: 'width:310px; text-align:right;',
    name: 'alc_par_participacion_ciudadana_otra_cual',
    id: 'alc_par_participacion_ciudadana_otra_cual',
    fieldLabel: '&iquest; Cu&aacute;l ?',
	maxLength: 100,
	minLength: 0,
    disabled : false,
    listeners:
    {
	   	'render': function(){ 
			ayuda( 'alc_par_participacion_ciudadana_otra_cual', ayuda_alc_par_participacion_ciudadana_otra_cual );
  		}               
    }              
});

var alc_par_propuestas_vocales = new Ext.form.RadioGroup({
    xtype: 'radiogroup',
    itemCls: 'x-check-group-alt',
	id: 'alc_par_propuestas_vocales',
    labelStyle: 'width:340px;',
    fieldLabel: '&iquest; Ha recibido propuesta de los Vocales de Control de los Comit&eacute;s de Desarrollo y Control Social, encaminadas a mejorar el servicio ?',
    columns: 1,
	listeners:
    {
	   	'render': function(){ 
			ayuda( 'alc_par_propuestas_vocales', ayuda_alc_par_propuestas_vocales );
  		}               
    },
    items:
    [
       {
		  	boxLabel: 'Si',
			name: 'alc_par_propuestas_vocales', 
			checked: true,
			inputValue: 1
       },
       { 
		  	boxLabel: 'No', 
			name: 'alc_par_propuestas_vocales' ,
			inputValue: 0
       }
    ]                
} );


var form_alc_participacionciudadana = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_alc_participacionciudadana',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
		    columnWidth: '1',
			defaultType: 'textfield',
			labelWidth: 250,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
					alc_par_tipoparticiacion_label, 
					alc_par_participacion_ciudadana_directa, 
					alc_par_participacion_ciudadana_asamblea, 
					alc_par_participacion_ciudadana_comite_desarrollo_control_social,
					alc_par_participacion_ciudadana_veedurias, 
					alc_par_participacion_ciudadana_otra,
					alc_par_participacion_ciudadana_otra_cual,
					alc_par_propuestas_vocales
		    ]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							alc_participacionciudadana_subirdatos();
			}
	    }
	]
});

alc_participacionciudadana_datastore.load({
  callback: function() {
	var record = alc_participacionciudadana_datastore.getAt(0);
	form_alc_participacionciudadana.getForm().loadRecord(record);
	if(record.get('alc_par_participacion_ciudadana_otra_cual') != ''){
		Ext.getCmp('alc_par_participacion_ciudadana_otra').setValue(1);
	}
  }
});

function alc_participacionciudadana_subirdatos() {

	subirDatos(
		form_alc_participacionciudadana, 
		'alcantarillado_participacionciudadana/actualizarParticipacionCiudadana',
		{},
		function(){
			Ext.getCmp('tabp_alc_administrativafinanciera').setActiveTab(2);
		}
	);
}

