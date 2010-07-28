var acu_participacionciudadana_datastore = new Ext.data.Store({
	id: 'acu_participacionciudadana_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_participacionciudadana/obtenerDatosAcuParticipacionCiudadana', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[
			
			  {name: 'acu_par_participacion_ciudadana_directa', type: 'bool'}, 
			  {name: 'acu_par_participacion_ciudadana_asamblea', type: 'bool'}, 
			  {name: 'acu_par_participacion_ciudadana_comite_desarrollo_social', type: 'bool'}, 
			  {name: 'acu_par_participacion_ciudadana_veedurias', type: 'bool'}, 
			  {name: 'acu_par_participacion_ciudadana_otra_cual', type: 'string'}, 
			  {name: 'acu_par_propuestas_vocales', type: 'boolean'} 
	])
});

var acu_par_tipoparticiacion_checkboxgroup = new Ext.form.CheckboxGroup({
	fieldLabel: 'Indique las formas de participaci&oacute;n ciudadana',
	labelStyle: 'width:310px;',
	itemCls: 'x-check-group-alt',
	columns: 1,
	items: [
	    {
	       boxLabel: 'Participaci&oacute;n directa',
		   name: 'acu_par_participacion_ciudadana_directa',
		   id: 'acu_par_participacion_ciudadana_directa',
	       listeners:
	       {
	                'render': function(){ 
						ayuda( 'acu_par_participacion_ciudadana_directa', ayuda_acu_par_participacion_ciudadana_directa );
					}             
	       }
	    },
	    {
			boxLabel: 'Asamblea de Representantes o Delegados', 
			name: 'acu_par_participacion_ciudadana_asamblea',
			id: 'acu_par_participacion_ciudadana_asamblea',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'acu_par_participacion_ciudadana_asamblea', ayuda_acu_par_participacion_ciudadana_asamblea );
					}                 
	        }
		},
	    {
			boxLabel: 'Comit&eacute; de Desarrollo y Control Social', 
			name: 'acu_par_participacion_ciudadana_comite_desarrollo_control_social',
			id: 'acu_par_participacion_ciudadana_comite_desarrollo_control_social',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'acu_par_participacion_ciudadana_comite_desarrollo_control_social', ayuda_acu_par_participacion_ciudadana_comite_desarrollo_control_social );
					}                 
	        }
		},
	    {
			boxLabel: 'Veedur&iacute;as', 
			name: 'acu_par_participacion_ciudadana_veedurias',
			id: 'acu_par_participacion_ciudadana_veedurias',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'acu_par_participacion_ciudadana_veedurias', ayuda_acu_par_participacion_ciudadana_veedurias );
					}                
	        }
		},
	    {
			boxLabel: 'Otra', 
			name: 'acu_par_participacion_ciudadana_otra',
			id: 'acu_par_participacion_ciudadana_otra',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'acu_par_participacion_ciudadana_otra', ayuda_acu_par_participacion_ciudadana_otra );
	     			}                   
	        }
		}
	]
});

var acu_par_participacion_ciudadana_otra_cual = new Ext.form.TextField({
    enableKeyEvents: true,
    width: 310,
    labelStyle: 'width:310px; text-align:right;',
    name: 'acu_par_participacion_ciudadana_otra_cual',
    id: 'acu_par_participacion_ciudadana_otra_cual',
    fieldLabel: '&iquest; Cu&aacute;l ?',
    disabled : false,
    listeners:
    {
	   	'render': function(){ 
			ayuda( 'acu_par_participacion_ciudadana_otra_cual', ayuda_acu_par_participacion_ciudadana_otra_cual );
  		}               
    }              
});

var acu_par_propuestas_vocales = new Ext.form.RadioGroup({
    xtype: 'radiogroup',
    itemCls: 'x-check-group-alt',
	id: 'acu_par_propuestas_vocales',
    labelStyle: 'width:340px;',
    fieldLabel: '&iquest; Ha recibido propuesta de los Vocales de Control de los Comit&eacute;s de Desarrollo y Control Social, encaminadas a mejorar el servicio ?',
    columns: 1,
	listeners:
    {
	   	'render': function(){ 
			ayuda( 'acu_par_propuestas_vocales', ayuda_acu_par_propuestas_vocales );
  		}               
    },
    items:
    [
       {
		  	boxLabel: 'Si',
			name: 'acu_par_propuestas_vocales', 
			checked: true,
			inputValue: 1
       },
       { 
		  	boxLabel: 'No', 
			name: 'acu_par_propuestas_vocales' ,
			inputValue: 0
       }
    ]                
} );


var form_acu_participacionciudadana = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_acu_participacionciudadana',
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
		           acu_par_tipoparticiacion_checkboxgroup,  
		           acu_par_participacion_ciudadana_otra_cual,
		           acu_par_propuestas_vocales  
		    ]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							//Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							//Ext.getCmp('tabp_acu_administrativafinanciera').setActiveTab(2);
							acu_participacionciudadana_subirdatos();
			}
	    }
	]
});

acu_participacionciudadana_datastore.load({
  callback: function() {
	var record = acu_participacionciudadana_datastore.getAt(0);
	form_acu_participacionciudadana.getForm().loadRecord(record);
  }
});

function acu_participacionciudadana_subirdatos() {

	subirDatos(form_acu_participacionciudadana, 'acueducto_participacionciudadana/actualizarParticipacionCiudadana');
}

