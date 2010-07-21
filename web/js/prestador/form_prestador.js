
var pre_nombre_prestador = new Ext.form.TextField( {
	fieldLabel: 'Nombre del prestador (RUPS)', 
	emptyText: 'ingrese el nombre del prestador',
	anchor: '100%',
	id: 'pre_nombre_prestador', 
	name: 'pre_nombre_prestador', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'pre_nombre_prestador', ayuda_pre_nombre_prestador );
     	}
	}
} );

var pre_identificacion_prestador = new Ext.form.TextField( {
	fieldLabel: 'Numero de identificaci&oacute;n', 
	emptyText: 'ingrese el numero de identificacion del prestador', 
	id: 'pre_identificacion_prestador', 
	name: 'pre_identificacion_prestador', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'pre_identificacion_prestador', ayuda_pre_identificacion_prestador );
     	}
	}
} );

var pre_tipos_identificacion = new Ext.data.ArrayStore({
    fields: ['tipo'],
    data : [ ['Cedula'], ['Nit'], ['Pasaporte'], ['Rut'] ]
});

var pre_tipo_identificacion_prestador = new Ext.form.ComboBox({
    store: pre_tipos_identificacion,
	name : 'pre_tipo_identificacion_prestador',
	fieldLabel: 'Tipo de identificaci&oacute;n',
    emptyText:'seleccione el tipo de identificacion del prestador',
	id: 'pre_tipo_identificacion_prestador',
    displayField: 'tipo',
    typeAhead: true,
	anchor: '70%',
	allowBlank: false,
    mode: 'local',
    forceSelection: true,
    triggerAction: 'all',
    selectOnFocus:true,
	listeners:
  	{
		'render': function(){ 	
					ayuda( 'pre_tipo_identificacion_prestador', ayuda_pre_tipo_identificacion_prestador );
			}             
	}
});

var pre_estatutos = new Ext.form.RadioGroup( { 
	id: 'pre_estatutos',
	fieldLabel: '&iquest; Cuenta el prestador con estatutos ?',
	listeners:
  	{
		'render': function(){ 	
					ayuda( 'pre_estatutos', ayuda_pre_estatutos );
			}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'pre_estatutos',
			  	inputValue: true
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'pre_estatutos',
			  	inputValue: false
		  }]
	}]} );

var pre_numero_empleados_con_competencias = new Ext.form.TextField( {
	fieldLabel: 'Cuantos empleados cuentan con certificacion basada en competencias rurales', 
	emptyText: 'numero de empleados que cuentan con certificacion basada en competencias', 
	id: 'pre_numero_empleados_con_competencias', 
	name: 'pre_numero_empleados_con_competencias', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'pre_numero_empleados_con_competencias', ayuda_pre_numero_empleados_con_competencias );
     	}
	}
} );

var pre_numero_empleados_sin_competencias = new Ext.form.TextField( {
	fieldLabel: 'Cuantos empleados no cuentan con certificacion basada en competencias rurales', 
	emptyText: 'numero de empleados que no cuentan con certificacion basada en competencias', 
	id: 'pre_numero_empleados_sin_competencias', 
	name: 'pre_numero_empleados_sin_competencias', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'pre_numero_empleados_sin_competencias', ayuda_pre_numero_empleados_sin_competencias );
     	}
	}
} );

var pre_numero_empleados_proceso_competencias = new Ext.form.TextField( { 
	fieldLabel: 'Cuantos empleados estan en proceso de certificacion basada en competencias rurales', 
	emptyText: 'numero de empleados que estan en proceso de certificacion basada en competencias', 
	id: 'pre_numero_empleados_proceso_competencias', 
	name: 'pre_numero_empleados_proceso_competencias', 
	anchor: '100%', 
	allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'pre_numero_empleados_proceso_competencias', ayuda_pre_numero_empleados_proceso_competencias );
     	}
	}
} );

var pre_numero_suscriptores = new Ext.form.TextField( {
	fieldLabel: 'Numero de suscriptores', 
	emptyText: 'ingrese el numero de suscriptores', 
	id: 'pre_numero_suscriptores', 
	name: 'pre_numero_suscriptores', 
	anchor: '100%', 
	allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'pre_numero_suscriptores', ayuda_pre_numero_suscriptores );
     	}
	}
} );

var form_prestador = new Ext.form.FormPanel({
	autoWidth: true,
	title: 'Datos del Prestador',
	frame: true,
	border: false,
	renderTo: 'div_form_prestador',
	padding: 10,
	defaultType: 'textfield',
	labelWidth: 310,
	height: largo_panel,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [ pre_nombre_prestador, pre_identificacion_prestador, pre_tipo_identificacion_prestador, pre_estatutos, pre_numero_empleados_con_competencias, pre_numero_empleados_sin_competencias, pre_numero_empleados_proceso_competencias, pre_numero_suscriptores ],
	buttons: [
	    {
	    	text: 'Continuar', 
	    	id: 'prestador_boton_continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
				Ext.getCmp('panel_servicios').setActiveGroup(1);
				Ext.getCmp('acueducto').setActiveTab(0);
			}
	    }
	]
});
	
function subirDatos() {
	Ext.example.msg('Aviso', 'Subir datos!!!');
}

//Ext.getCmp("datos_prestador").add(form_prestador);

