var ase_par_tipoparticiacion_checkboxgroup = new Ext.form.CheckboxGroup({
	fieldLabel: 'Indique las formas de participaci&oacute;n ciudadana',
	labelStyle: 'width:310px;',
	itemCls: 'x-check-group-alt',
	columns: 1,
	items: [
	    {
	       boxLabel: 'Participaci&oacute;n directa',
		   name: 'ase_par_participacion_ciudadana_directa',
		   id: 'ase_par_participacion_ciudadana_directa',
	       listeners:
	       {
	                'render': function(){ 
						ayuda( 'ase_par_participacion_ciudadana_directa', ayuda_ase_par_participacion_ciudadana_directa );
					}             
	       }
	    },
	    {
			boxLabel: 'Asamblea de Representantes o Delegados', 
			name: 'ase_par_participacion_ciudadana_asamblea',
			id: 'ase_par_participacion_ciudadana_asamblea',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'ase_par_participacion_ciudadana_asamblea', ayuda_ase_par_participacion_ciudadana_asamblea );
					}                 
	        }
		},
	    {
			boxLabel: 'Comit&eacute; de Desarrollo y Control Social', 
			name: 'ase_par_participacion_ciudadana_comite_desarrollo_social',
			id: 'ase_par_participacion_ciudadana_comite_desarrollo_social',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'ase_par_participacion_ciudadana_comite_desarrollo_social', ayuda_ase_par_participacion_ciudadana_comite_desarrollo_social );
					}                 
	        }
		},
	    {
			boxLabel: 'Veedur&iacute;as', 
			name: 'ase_par_participacion_ciudadana_veedurias',
			id: 'ase_par_participacion_ciudadana_veedurias',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'ase_par_participacion_ciudadana_veedurias', ayuda_ase_par_participacion_ciudadana_veedurias );
					}                
	        }
		},
	    {
			boxLabel: 'Otra', 
			name: 'ase_par_participacion_ciudadana_otra_cual',
			id: 'ase_par_participacion_ciudadana_otra_cual',
			listeners:
	        {
	                'render': function(){ 
						ayuda( 'ase_par_participacion_ciudadana_otra_cual', ayuda_ase_par_participacion_ciudadana_otra_cual );
	     			}                   
	        }
		}
	]
});

var ase_par_otra_cual = new Ext.form.TextField({
    enableKeyEvents: true,
    width: 310,
    labelStyle: 'width:310px; text-align:right;',
    name: 'ase_par_otra_cual',
    id: 'ase_par_otra_cual',
    fieldLabel: '&iquest; Cu&aacute;l ?',
    disabled : false,
    listeners:
    {
	   	'render': function(){ 
				ayuda( 'ase_par_otra_cual', ayuda_ase_par_otra_cual );
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
			checked: true
       },
       { 
		  	boxLabel: 'No', 
			name: 'ase_par_propuestas_vocales' 
       }
    ]                
} );


var form_ase_participacionciudadana = new Ext.form.FormPanel({
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
		           ase_par_tipoparticiacion_checkboxgroup,  
		           ase_par_otra_cual,
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


function ase_participacionciudadana_subirdatos() {
	Ext.example.msg('Aviso', 'Subir datos!!!');
}
