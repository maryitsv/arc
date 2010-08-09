var ase_participacionciudadana_datastore = new Ext.data.Store({
	id: 'ase_participacionciudadana_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo_participacionciudadana/obtenerDatosAseParticipacionCiudadana', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
			
			  {name: 'ase_par_participacion_ciudadana_directa', type: 'int'}, 
			  {name: 'ase_par_participacion_ciudadana_asamblea', type: 'int'}, 
			  {name: 'ase_par_participacion_ciudadana_comite_desarrollo_control_social', type: 'int'}, 
			  {name: 'ase_par_participacion_ciudadana_veedurias', type: 'int'}, 
			  {name: 'ase_par_participacion_ciudadana_otra_cual', type: 'string'}, 
			  {name: 'ase_par_propuestas_vocales', type: 'int'} 
	])
});

var ase_par_tipoparticiacion_label = new Ext.form.Label({
	fieldLabel: 'Indique las formas de participaci&oacute;n ciudadana'
});

var ase_par_participacion_ciudadana_directa = new Ext.form.Checkbox({
	boxLabel: 'Participaci&oacute;n directa',
	name: 'ase_par_participacion_ciudadana_directa',
	id: 'ase_par_participacion_ciudadana_directa',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'ase_par_participacion_ciudadana_directa', ayuda_ase_par_participacion_ciudadana_directa );
			}             
	}
});

var ase_par_participacion_ciudadana_asamblea = new Ext.form.Checkbox({
	boxLabel: 'Asamblea de Representantes o Delegados', 
	name: 'ase_par_participacion_ciudadana_asamblea',
	id: 'ase_par_participacion_ciudadana_asamblea',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'ase_par_participacion_ciudadana_asamblea', ayuda_ase_par_participacion_ciudadana_asamblea );
			}                 
	}
});

var ase_par_participacion_ciudadana_comite_desarrollo_control_social = new Ext.form.Checkbox({
	boxLabel: 'Comit&eacute; de Desarrollo y Control Social', 
	name: 'ase_par_participacion_ciudadana_comite_desarrollo_control_social',
	id: 'ase_par_participacion_ciudadana_comite_desarrollo_control_social',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'ase_par_participacion_ciudadana_comite_desarrollo_control_social', ayuda_ase_par_participacion_ciudadana_comite_desarrollo_control_social );
			}                 
	}
});

var ase_par_participacion_ciudadana_veedurias = new Ext.form.Checkbox({
	boxLabel: 'Veedur&iacute;as', 
	name: 'ase_par_participacion_ciudadana_veedurias',
	id: 'ase_par_participacion_ciudadana_veedurias',
	inputValue: 1,
	listeners:
	{
			'render': function(){ 
				ayuda( 'ase_par_participacion_ciudadana_veedurias', ayuda_ase_par_participacion_ciudadana_veedurias );
			}                
	}
});

var ase_par_participacion_ciudadana_otra = new Ext.form.Checkbox({
	boxLabel: 'Otra', 
	name: 'ase_par_participacion_ciudadana_otra',
	id: 'ase_par_participacion_ciudadana_otra',
	inputValue: 1,
	listeners:
	{
		'render': function(){ 
			ayuda( 'ase_par_participacion_ciudadana_otra', ayuda_ase_par_participacion_ciudadana_otra );
		},
		'check' :
		{
		   fn: function(radio, valor) 
		   { 
			  if (valor) Ext.getCmp('ase_par_participacion_ciudadana_otra_cual').enable();
			  else Ext.getCmp('ase_par_participacion_ciudadana_otra_cual').disable();
		   }
		}   
	}
});

var ase_par_participacion_ciudadana_otra_cual = new Ext.form.TextField({
    enableKeyEvents: true,
    width: 310,
    labelStyle: 'width:310px; text-align:right;',
    name: 'ase_par_participacion_ciudadana_otra_cual',
    id: 'ase_par_participacion_ciudadana_otra_cual',
    fieldLabel: '&iquest; Cu&aacute;l ?',
	maxLength: 100,
	minLength: 0,
    disabled : false,
    listeners:
    {
	   	'render': function(){ 
			ayuda( 'ase_par_participacion_ciudadana_otra_cual', ayuda_ase_par_participacion_ciudadana_otra_cual );
  		}               
    }              
});

var ase_par_propuestas_vocales = new Ext.form.RadioGroup({
    xtype: 'radiogroup',
    itemCls: 'x-check-group-alt',
	id: 'ase_par_propuestas_vocales',
    labelStyle: 'width:340px;',
    fieldLabel: '&iquest; Ha recibido propuesta de los Vocales de Control de los Comit&eacute;s de Desarrollo y Control Social, encaminadas a mejorar el servicio ?',
    columns: 1,
	listeners:
    {
	   	'render': function(){ 
			ayuda( 'ase_par_propuestas_vocales', ayuda_ase_par_propuestas_vocales );
  		}               
    },
    items:
    [
       {
		  	boxLabel: 'Si',
			name: 'ase_par_propuestas_vocales', 
			checked: true,
			inputValue: 1
       },
       { 
		  	boxLabel: 'No', 
			name: 'ase_par_propuestas_vocales' ,
			inputValue: 0
       }
    ]                
} );


var form_ase_participacionciudadana = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_ase_participacionciudadana',
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
					ase_par_tipoparticiacion_label, 
					ase_par_participacion_ciudadana_directa, 
					ase_par_participacion_ciudadana_asamblea, 
					ase_par_participacion_ciudadana_comite_desarrollo_control_social,
					ase_par_participacion_ciudadana_veedurias, 
					ase_par_participacion_ciudadana_otra,
					ase_par_participacion_ciudadana_otra_cual,
					ase_par_propuestas_vocales
		    ]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							ase_participacionciudadana_subirdatos();
			}
	    }
	]
});

ase_participacionciudadana_datastore.load({
  callback: function() {
	var record = ase_participacionciudadana_datastore.getAt(0);
	form_ase_participacionciudadana.getForm().loadRecord(record);
	if(record.get('ase_par_participacion_ciudadana_otra_cual') != ''){
		Ext.getCmp('ase_par_participacion_ciudadana_otra').setValue(1);
	}
  }
});

function ase_participacionciudadana_subirdatos() {

	subirDatos(
		form_ase_participacionciudadana, 
		'aseo_participacionciudadana/actualizarParticipacionCiudadana',
		{},
		function(){
			Ext.getCmp('tabp_ase_administrativafinanciera').setActiveTab(2);
		}
	);
}

