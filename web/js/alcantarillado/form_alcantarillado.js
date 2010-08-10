var alcantarillado_datastore = new Ext.data.Store({
	id: 'alcantarillado_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'alcantarillado/obtenerDatosAlcantarillado', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[ 
				{name: 'alc_pps_pre_id', type: 'int'},
				{name: 'alc_pps_ser_id', type: 'int'},
				{name: 'alc_pps_anio', type: 'int'},
				{name: 'alc_pps_presupuesto_aprobado', type: 'int'},
				{name: 'alc_pps_suscriptores_pendientes_de_pago', type: 'int'},
				{name: 'alc_pps_estatutos', type: 'int'},
				{name: 'alc_pps_numero_empleados_con_competencias', type: 'int'},
				{name: 'alc_pps_numero_empleados_sin_competencias', type: 'int'},
				{name: 'alc_pps_numero_empleados_proceso_competencias', type: 'int'},
				{name: 'alc_pps_nombre_diligenciador', type: 'string'},
				{name: 'alc_pps_apellido_diligenciador', type: 'string'},
				{name: 'alc_pps_telefono_diligenciador', type: 'string'},
				{name: 'alc_pps_identificacion_diligenciador', type: 'string'},
				{name: 'alc_pps_tipo_identificacion_diligenciador', type: 'string'},
				{name: 'alc_pps_numero_suscriptores', type: 'int'}
	])
});

var alc_pps_estatutos = new Ext.form.RadioGroup( { 
	id: 'alc_pps_estatutos',
	fieldLabel: '&iquest;Cuenta el prestador con estatutos?',
	listeners:
  	{
		'render': function(){ 	
					ayuda( 'alc_pps_estatutos', ayuda_alc_pps_estatutos );
			}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'alc_pps_estatutos',
			  	inputValue: 1
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'alc_pps_estatutos',
			  	inputValue: 0
		  }]
	}]} );

var alc_pps_numero_empleados_con_competencias = new Ext.form.NumberField( {
	fieldLabel: 'Cu&aacute;ntos empleados cuentan con certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que cuentan con certificaci&oacute;n basada en competencias', 
	id: 'alc_pps_numero_empleados_con_competencias', 
	name: 'alc_pps_numero_empleados_con_competencias', 
	anchor: '100%', 
	minLength : 1,
    maxLength : 7,
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_pps_numero_empleados_con_competencias', ayuda_alc_pps_numero_empleados_con_competencias );
     	}
	}
} );

var alc_pps_numero_empleados_sin_competencias = new Ext.form.NumberField( {
	fieldLabel: 'Cu&aacute;ntos empleados NO cuentan con certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que NO cuentan con certificaci&oacute;n basada en competencias', 
	id: 'alc_pps_numero_empleados_sin_competencias', 
	name: 'alc_pps_numero_empleados_sin_competencias', 
	anchor: '100%',
	minLength : 1,
    maxLength : 7,
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_pps_numero_empleados_sin_competencias', ayuda_alc_pps_numero_empleados_sin_competencias );
     	}
	}
} );

var alc_pps_numero_empleados_proceso_competencias = new Ext.form.NumberField( { 
	fieldLabel: 'Cu&aacute;ntos empleados est&aacute;n EN PROCESO de certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que est&aacute;n EN PROCESO de certificaci&oacute;n basada en competencias', 
	id: 'alc_pps_numero_empleados_proceso_competencias', 
	name: 'alc_pps_numero_empleados_proceso_competencias', 
	anchor: '100%',
	minLength : 1,
    maxLength : 7,
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_pps_numero_empleados_proceso_competencias', ayuda_alc_pps_numero_empleados_proceso_competencias );
     	}
	}
} );

var alc_pps_numero_suscriptores = new Ext.form.NumberField( {
	fieldLabel: 'N&uacute;mero de suscriptores', 
	emptyText: 'ingrese el n&uacute;mero de suscriptores', 
	id: 'alc_pps_numero_suscriptores', 
	name: 'alc_pps_numero_suscriptores',
	anchor: '100%',
	minLength : 1,
    maxLength : 8,
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'alc_pps_numero_suscriptores', ayuda_alc_pps_numero_suscriptores );
     	}
	}
} );

var alc_pps_nombre_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Nombre del diligenciador',
    emptyText: 'ingrese el nombre del diligenciador',
    anchor: '100%',
    id: 'alc_pps_nombre_diligenciador',
    name: 'alc_pps_nombre_diligenciador',
    width: 300,
	minLength : 4,
    maxLength : 200,
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('alc_pps_nombre_diligenciador', ayuda_alc_pps_nombre_diligenciador);
        }
    }
});

var alc_pps_apellido_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Apellido del diligenciador',
    emptyText: 'ingrese el apellido del diligenciador',
    id: 'alc_pps_apellido_diligenciador',
    name: 'alc_pps_apellido_diligenciador',
	minLength : 4,
    maxLength : 200,
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('alc_pps_apellido_diligenciador', ayuda_alc_pps_apellido_diligenciador);
        }
    }
});

var alc_pps_identificacion_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Identificaci&oacute;n del diligenciador',
    emptyText: 'ingrese la identificacion del diligenciador',
    id: 'alc_pps_identificacion_diligenciador',
    name: 'alc_pps_identificacion_diligenciador',
	minLength : 4,
    maxLength : 15,
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('alc_pps_identificacion_diligenciador', ayuda_alc_pps_identificacion_diligenciador);
        }
    }
});

var alc_pps_tipos_identificacion = new Ext.data.ArrayStore({
    fields: ['tipo'],
    data : [ ['Cedula'], ['Nit'], ['Pasaporte'], ['Rut'] ]
});

var alc_pps_tipo_identificacion_diligenciador = new Ext.form.ComboBox({
    store: alc_pps_tipos_identificacion,
	name : 'alc_pps_tipo_identificacion_diligenciador',
	fieldLabel: 'Tipo de identificaci&oacute;n',
    emptyText:'seleccione el tipo de identificaci&oacute;n del diligenciador',
	id: 'alc_pps_tipo_identificacion_diligenciador',
    displayField: 'tipo',
    typeAhead: true,
	anchor: '70%',
	//allowBlank: false,
    mode: 'local',
    forceSelection: true,
    triggerAction: 'all',
    selectOnFocus:true,
	listeners:
  	{
		'render': function(){ 	
					ayuda( 'alc_pps_tipo_identificacion_diligenciador', ayuda_alc_pps_tipo_identificacion_diligenciador );
			}             
	}
});

var alc_pps_telefono_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Tel&eacute;fono fijo &oacute; celular',
    emptyText: 'ingrese el n&uacute;mero de tel&eacute;fono fijo o celular del diligenciador',
    id: 'alc_pps_telefono_diligenciador',
    name: 'alc_pps_telefono_diligenciador',
	minLength : 4,
    maxLength : 15,
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('alc_pps_telefono_diligenciador', ayuda_alc_pps_telefono_diligenciador);
        }
    }
});

var alc_pps_presupuesto_aprobado = new Ext.form.RadioGroup({
    id: 'alc_pps_presupuesto_aprobado',
    fieldLabel: '&iquest;Se cuenta con presupuesto anual aprobado para alcantarillado?',
    listeners: {
        'render': function(){
            ayuda('alc_pps_presupuesto_aprobado', ayuda_alc_pps_presupuesto_aprobado);
        }
    },
    items: [{
        items: [{
            boxLabel: 'Si',
            name: 'alc_pps_presupuesto_aprobado',
            inputValue: 1
        }, {
            boxLabel: 'No',
            name: 'alc_pps_presupuesto_aprobado',
            inputValue: 0
        }]
    }]
});

var alc_pps_suscriptores_pendientes_de_pago = new Ext.form.NumberField({
    fieldLabel: 'N&uacute;mero de suscriptores que a diciembre 31 deben m&aacute;s de 3 Facturas',
    emptyText: 'ingrese la cantidad de suscriptores que a diciembre 31 deben m&aacute;s de 3 facturas',
    id: 'alc_pps_suscriptores_pendientes_de_pago',
    name: 'alc_pps_suscriptores_pendientes_de_pago',
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('alc_pps_suscriptores_pendientes_de_pago', ayuda_alc_pps_suscriptores_pendientes_de_pago);
        }
    }
});

var form_alcantarillado = new Ext.FormPanel({
    title: 'Informaci&oacute;n general de alcantarillado',
    autoWidth: true,
    frame: true,
    border: false,
    renderTo: 'div_form_alcantarillado',
    height: largo_panel,
	layout: 'column',
    padding: 10,
    style: {
        "margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0"
    },
    defaultType: 'textfield',
    labelWidth: 370,
    items: [
		{
			xtype: 'fieldset',
			columnWidth: '.495',
			title: 'Informaci&oacute;n del diligenciador',
			defaultType: 'textfield',
			height: 200,
			labelWidth: 210,
			defaults: {
				labelStyle: 'font-size:1.0em;'
			},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
						alc_pps_nombre_diligenciador, 
						alc_pps_apellido_diligenciador, 
						alc_pps_identificacion_diligenciador, 
						alc_pps_tipo_identificacion_diligenciador, 
						alc_pps_telefono_diligenciador
					]
		},
		{xtype: 'panel', columnWidth: '.01' },
		{
			xtype: 'fieldset',
			columnWidth: '.495',
			title: 'Proceso de competencias',
			defaultType: 'textfield',
			height: 200,
			labelWidth: 210,
			defaults: {
				labelStyle: 'font-size:1.0em;'
			},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
						alc_pps_numero_empleados_con_competencias, 
						alc_pps_numero_empleados_sin_competencias, 
						alc_pps_numero_empleados_proceso_competencias
					]
		},
		{
			xtype: 'fieldset',
			columnWidth: '.5',
			border: false,
			defaultType: 'textfield',
			labelWidth: 210,
			defaults: {
				labelStyle: 'font-size:1.0em;'
			},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
						alc_pps_presupuesto_aprobado, 
						alc_pps_suscriptores_pendientes_de_pago
			]
		},
		{
			xtype: 'fieldset',
			columnWidth: '.5',
			border: false,
			defaultType: 'textfield',
			labelWidth: 210,
			defaults: {
				labelStyle: 'font-size:1.0em;'
			},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
						alc_pps_estatutos,
						alc_pps_numero_suscriptores
			]
		}
	],
    buttons: [{
        text: 'Atras',
        iconCls: 'crear16',
        handler: function(){
            Ext.getCmp('panel_servicios').setActiveGroup(0);
        }
    }, {
        text: 'Continuar',
        iconCls: 'crear16',
        handler: function(){
			alcantarillado_subirDatos();
        }
    }]
});

function alcantarillado_subirDatos(){
    subirDatos(
		form_alcantarillado, 
		'alcantarillado/actualizarAlcantarillado',
		{},
		function(){
			Ext.getCmp('alcantarillado').setActiveTab(1);
		}
	);
}

alcantarillado_datastore.load({
  callback: function() {
	var record = alcantarillado_datastore.getAt(0);
	form_alcantarillado.getForm().loadRecord(record);
  }
});

