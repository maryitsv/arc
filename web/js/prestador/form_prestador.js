
var prestador_datastore = new Ext.data.Store({
	id: 'prestador_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'prestador/obtenerDatosPrestador', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[ 
			  {name: 'pre_id', type: 'int'},	    
			  {name: 'pre_ran_id', type: 'int'},
			  {name: 'pre_usu_id', type: 'int'},
			  {name: 'pre_identificacion_prestador', type: 'string'},
			  {name: 'pre_tipo_identificacion_prestador', type: 'string'},
			  {name: 'pre_nombre_prestador', type: 'string'}
	])
});
	
var pre_nombre_prestador = new Ext.form.TextField( {
	fieldLabel: 'Nombre del prestador (RUPS)', 
	emptyText: 'ingrese el nombre del prestador',
	anchor: '100%',
	id: 'pre_nombre_prestador', 
	name: 'pre_nombre_prestador', 
	allowBlank: false,
	maxLength: 200,
	minLength: 4,
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
	maxLength: 50,
	minLength: 4,
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
	items: [ pre_nombre_prestador, pre_identificacion_prestador, pre_tipo_identificacion_prestador ],
	buttons: [
	    {
	    	text: 'Continuar', 
	    	id: 'prestador_boton_continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
				prestador_subirdatos();
			}
	    }
	]
});
	
function prestador_subirdatos() {
	subirDatos(
		form_prestador, 
		'prestador/actualizarPrestador',
		{},
		function(){
			Ext.getCmp('panel_servicios').setActiveGroup(1);
			Ext.getCmp('acueducto').setActiveTab(0);
		}
	);
}

prestador_datastore.load({
  callback: function() {
	var record = prestador_datastore.getAt(0);
	form_prestador.getForm().loadRecord(record);
  }
});


