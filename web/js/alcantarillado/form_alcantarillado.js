var alc_nombre_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Nombre del diligenciador', 
	emptyText: 'ingrese el nombre del diligenciador',
	anchor: '100%',
	id: 'alc_nombre_diligenciador', 
	name: 'alc_nombre_diligenciador', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_nombre_diligenciador', ayuda_alc_nombre_diligenciador );
     	}
	}
} );

var alc_apellido_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Apellido del diligenciador', 
	emptyText: 'ingrese el apellido del diligenciador', 
	id: 'alc_apellido_diligenciador', 
	name: 'alc_apellido_diligenciador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_apellido_diligenciador', ayuda_alc_apellido_diligenciador );
     	}
	}
} );

var alc_identificacion_diligenciador = new Ext.form.TextField( { 
	fieldLabel: 'Identificacion del diligenciador', 
	emptyText: 'ingrese la identificacion del diligenciador', 
	id: 'alc_identificacion_diligenciador', 
	name: 'alc_identificacion_diligenciador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_identificacion_diligenciador', ayuda_alc_identificacion_diligenciador );
     	}
	}
} );

var alc_telefono_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Tel&eacute;fono fijo &oacute; celular', 
	emptyText: 'ingrese el numero de telefono fijo o celular del diligenciador', 
	id: 'alc_telefono_diligenciador', 
	name: 'alc_telefono_diligenciador', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_telefono_diligenciador', ayuda_alc_telefono_diligenciador );
     	}
	}
} );

var alc_presupuesto = new Ext.form.RadioGroup( { 
	id: 'alc_presupuesto',
	fieldLabel: '&iquest se cuenta con presupuesto anual aprobado para alcantarillado ?',
	listeners: {
		'render': function(){ 	
					ayuda( 'alc_presupuesto', ayuda_alc_presupuesto );
		}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'alc_presupuesto',
			  	inputValue: true
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'alc_presupuesto',
			  	inputValue: false
		  }]
	}]} );

var alc_suscriptores_morosos = new Ext.form.TextField( {
	fieldLabel: 'Numero de suscriptores que a diciembre 31 deben mas de 3 Facturas', 
	emptyText: 'ingrese la cantidad de suscriptores que a diciembre 31 deben mas de 3 facturas', 
	id: 'alc_suscriptores_morosos', 
	name: 'alc_suscriptores_morosos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_suscriptores_morosos', ayuda_alc_suscriptores_morosos );
     	}
	}
} );

var form_alcantarillado = new Ext.form.FormPanel({
	title: 'Informaci&oacute;n general de alcantarillado',
	autoWidth: true,
	frame: true,
	border: false,
	renderTo: 'div_form_alcantarillado',
	height: largo_panel,
	padding: 10,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	defaultType: 'textfield',
	labelWidth: 370,
	items: [
	   {
			xtype: 'fieldset',
			title: 'Informaci&oacute;n del diligenciador',
			defaultType: 'textfield',
			labelWidth: 210,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ alc_nombre_diligenciador, alc_apellido_diligenciador, alc_identificacion_diligenciador, alc_telefono_diligenciador ]
	   },
	   alc_presupuesto,
	   alc_suscriptores_morosos
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
				Ext.getCmp('panel_servicios').setActiveGroup(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
				Ext.getCmp('alcantarillado').setActiveTab(1);
			}
	    }
	]
});

function alc_subirdatos() {
	Ext.example.msg('Aviso', 'Subir datos!!!');
}

//Ext.getCmp("alcantarillado_general").add(form_alcantarillado);