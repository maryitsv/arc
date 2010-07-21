
var acu_nombre_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Nombre del diligenciador', 
	emptyText: 'ingrese el nombre del diligenciador',
	anchor: '100%',
	id: 'acu_nombre_diligenciador', 
	name: 'acu_nombre_diligenciador', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_nombre_diligenciador', ayuda_acu_nombre_diligenciador );
     	}
	}
} );

var acu_apellido_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Apellido del diligenciador', 
	emptyText: 'ingrese el apellido del diligenciador', 
	id: 'acu_apellido_diligenciador', 
	name: 'acu_apellido_diligenciador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_apellido_diligenciador', ayuda_acu_apellido_diligenciador );
     	}
	}
} );

var acu_identificacion_diligenciador = new Ext.form.TextField( { 
	fieldLabel: 'Identificacion del diligenciador', 
	emptyText: 'ingrese la identificacion del diligenciador', 
	id: 'acu_identificacion_diligenciador', 
	name: 'acu_identificacion_diligenciador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_identificacion_diligenciador', ayuda_acu_identificacion_diligenciador );
     	}
	}
} );

var acu_telefono_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Tel&eacute;fono fijo &oacute; celular', 
	emptyText: 'ingrese el numero de telefono fijo o celular del diligenciador', 
	id: 'acu_telefono_diligenciador', 
	name: 'acu_telefono_diligenciador', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_telefono_diligenciador', ayuda_acu_telefono_diligenciador );
     	}
	}
} );

var acu_presupuesto = new Ext.form.RadioGroup( { 
	id: 'acu_presupuesto',
	fieldLabel: '&iquest se cuenta con presupuesto anual aprobado para acueducto ?',
	listeners: {
		'render': function(){ 	
					ayuda( 'acu_presupuesto', ayuda_acu_presupuesto );
		}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'acu_presupuesto',
			  	inputValue: true
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'acu_presupuesto',
			  	inputValue: false
		  }]
	}]} );

var acu_suscriptores_morosos = new Ext.form.TextField( {
	fieldLabel: 'Numero de suscriptores que a diciembre 31 deben mas de 3 Facturas', 
	emptyText: 'ingrese la cantidad de suscriptores que a diciembre 31 deben mas de 3 facturas', 
	id: 'acu_suscriptores_morosos', 
	name: 'acu_suscriptores_morosos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_suscriptores_morosos', ayuda_acu_suscriptores_morosos );
     	}
	}
} );

var form_acueducto = new Ext.form.FormPanel({
	title: 'Informaci&oacute;n general de acueducto',
	autoWidth: true,
	frame: true,
	border: false,
	renderTo: 'div_form_acueducto',
	height: largo_panel,
	padding: 10,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	defaultType: 'textfield',
	labelWidth: 360,
	items: [
	   {
			xtype: 'fieldset',
			title: 'Informaci&oacute;n del diligenciador',
			defaultType: 'textfield',
			labelWidth: 210,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ acu_nombre_diligenciador, acu_apellido_diligenciador, acu_identificacion_diligenciador, acu_telefono_diligenciador ]
	   },
	   acu_presupuesto,
	   acu_suscriptores_morosos
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
				Ext.getCmp('acueducto').setActiveTab(1);
			}
	    }
	]
});

function acu_subirdatos() {
	Ext.example.msg('Aviso', 'Subir datos!!!');
}

//Ext.getCmp("acueducto_general").add(form_acueducto);
