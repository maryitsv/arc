
var ase_nombre_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Nombre del diligenciador', 
	emptyText: 'ingrese el nombre del diligenciador',
	anchor: '100%',
	id: 'ase_nombre_diligenciador', 
	name: 'ase_nombre_diligenciador', 
	width: 300, 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_nombre_diligenciador', ayuda_ase_nombre_diligenciador );
     	}
	}
} );

var ase_apellido_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Apellido del diligenciador', 
	emptyText: 'ingrese el apellido del diligenciador', 
	id: 'ase_apellido_diligenciador', 
	name: 'ase_apellido_diligenciador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_apellido_diligenciador', ayuda_ase_apellido_diligenciador );
     	}
	}
} );

var ase_identificacion_diligenciador = new Ext.form.TextField( { 
	fieldLabel: 'Identificacion del diligenciador', 
	emptyText: 'ingrese la identificacion del diligenciador', 
	id: 'ase_identificacion_diligenciador', 
	name: 'ase_identificacion_diligenciador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_identificacion_diligenciador', ayuda_ase_identificacion_diligenciador );
     	}
	}
} );

var ase_telefono_diligenciador = new Ext.form.TextField( {
	fieldLabel: 'Tel&eacute;fono fijo &oacute; celular', 
	emptyText: 'ingrese el numero de telefono fijo o celular del diligenciador', 
	id: 'ase_telefono_diligenciador', 
	name: 'ase_telefono_diligenciador', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_telefono_diligenciador', ayuda_ase_telefono_diligenciador );
     	}
	}
} );

var ase_presupuesto = new Ext.form.RadioGroup( { 
	id: 'ase_presupuesto',
	fieldLabel: '&iquest se cuenta con presupuesto anual aprobado para aseo ?',
	listeners: {
		'render': function(){ 	
					ayuda( 'ase_presupuesto', ayuda_ase_presupuesto );
		}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'ase_presupuesto',
			  	inputValue: true
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'ase_presupuesto',
			  	inputValue: false
		  }]
	}]} );

var ase_suscriptores_morosos = new Ext.form.TextField( {
	fieldLabel: 'Numero de suscriptores que a diciembre 31 deben mas de 3 Facturas', 
	emptyText: 'ingrese la cantidad de suscriptores que a diciembre 31 deben mas de 3 facturas', 
	id: 'ase_suscriptores_morosos', 
	name: 'ase_suscriptores_morosos', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_suscriptores_morosos', ayuda_ase_suscriptores_morosos );
     	}
	}
} );

var form_aseo = new Ext.form.FormPanel({
	title: 'Informaci&oacute;n general de aseo',
	autoWidth: true,
	frame: true,
	border: false,
	renderTo: 'div_form_aseo',
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
			items: [ ase_nombre_diligenciador, ase_apellido_diligenciador, ase_identificacion_diligenciador, ase_telefono_diligenciador ]
	   },
	   ase_presupuesto,
	   ase_suscriptores_morosos
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
				Ext.getCmp('aseo').setActiveTab(1);
			}
	    }
	]
});

function ase_subirdatos() {
	Ext.example.msg('Aviso', 'Subir datos!!!');
}

//Ext.getCmp("aseo_general").add(form_aseo);