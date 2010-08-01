var aceducto_datastore = new Ext.data.Store({
	id: 'aceducto_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto/obtenerDatosAcueducto', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[ 
				{name: 'acu_pps_pre_id', type: 'int'},
				{name: 'acu_pps_ser_id', type: 'int'},
				{name: 'acu_pps_anio', type: 'int'},
				{name: 'acu_pps_presupuesto_aprobado', type: 'int'},
				{name: 'acu_pps_suscriptores_pendientes_de_pago', type: 'int'},
				{name: 'acu_pps_estatutos', type: 'int'},
				{name: 'acu_pps_numero_empleados_con_competencias', type: 'int'},
				{name: 'acu_pps_numero_empleados_sin_competencias', type: 'int'},
				{name: 'acu_pps_numero_empleados_proceso_competencias', type: 'int'},
				{name: 'acu_pps_nombre_diligenciador', type: 'string'},
				{name: 'acu_pps_apellido_diligenciador', type: 'string'},
				{name: 'acu_pps_telefono_diligenciador', type: 'string'},
				{name: 'acu_pps_identificacion_diligenciador', type: 'string'},
				{name: 'acu_pps_tipo_identificacion_diligenciador', type: 'string'},
				{name: 'acu_pps_numero_suscriptores', type: 'int'}
	])
});

var acu_pps_estatutos = new Ext.form.RadioGroup( { 
	id: 'acu_pps_estatutos',
	fieldLabel: '&iquest;Cuenta el prestador con estatutos?',
	listeners:
  	{
		'render': function(){ 	
					ayuda( 'acu_pps_estatutos', ayuda_acu_pps_estatutos );
			}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'acu_pps_estatutos',
			  	inputValue: 1
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'acu_pps_estatutos',
			  	inputValue: 0
		  }]
	}]} );

var acu_pps_numero_empleados_con_competencias = new Ext.form.NumberField( {
	fieldLabel: 'Cu&aacute;ntos empleados cuentan con certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que cuentan con certificaci&oacute;n basada en competencias', 
	id: 'acu_pps_numero_empleados_con_competencias', 
	name: 'acu_pps_numero_empleados_con_competencias', 
	anchor: '100%', 
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_pps_numero_empleados_con_competencias', ayuda_acu_pps_numero_empleados_con_competencias );
     	}
	}
} );

var acu_pps_numero_empleados_sin_competencias = new Ext.form.NumberField( {
	fieldLabel: 'Cu&aacute;ntos empleados NO cuentan con certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que NO cuentan con certificaci&oacute;n basada en competencias', 
	id: 'acu_pps_numero_empleados_sin_competencias', 
	name: 'acu_pps_numero_empleados_sin_competencias', 
	anchor: '100%', 
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_pps_numero_empleados_sin_competencias', ayuda_acu_pps_numero_empleados_sin_competencias );
     	}
	}
} );

var acu_pps_numero_empleados_proceso_competencias = new Ext.form.NumberField( { 
	fieldLabel: 'Cu&aacute;ntos empleados est&aacute;n EN PROCESO de certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que est&aacute;n EN PROCESO de certificaci&oacute;n basada en competencias', 
	id: 'acu_pps_numero_empleados_proceso_competencias', 
	name: 'acu_pps_numero_empleados_proceso_competencias', 
	anchor: '100%', 
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_pps_numero_empleados_proceso_competencias', ayuda_acu_pps_numero_empleados_proceso_competencias );
     	}
	}
} );

var acu_pps_numero_suscriptores = new Ext.form.NumberField( {
	fieldLabel: 'N&uacute;mero de suscriptores', 
	emptyText: 'ingrese el n&uacute;mero de suscriptores', 
	id: 'acu_pps_numero_suscriptores', 
	name: 'acu_pps_numero_suscriptores',
	anchor: '100%', 
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'acu_pps_numero_suscriptores', ayuda_acu_pps_numero_suscriptores );
     	}
	}
} );

var acu_pps_nombre_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Nombre del diligenciador',
    emptyText: 'ingrese el nombre del diligenciador',
    anchor: '100%',
    id: 'acu_pps_nombre_diligenciador',
    name: 'acu_pps_nombre_diligenciador',
    width: 300,
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('acu_pps_nombre_diligenciador', ayuda_acu_pps_nombre_diligenciador);
        }
    }
});

var acu_pps_apellido_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Apellido del diligenciador',
    emptyText: 'ingrese el apellido del diligenciador',
    id: 'acu_pps_apellido_diligenciador',
    name: 'acu_pps_apellido_diligenciador',
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('acu_pps_apellido_diligenciador', ayuda_acu_pps_apellido_diligenciador);
        }
    }
});

var acu_pps_identificacion_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Identificaci&oacute;n del diligenciador',
    emptyText: 'ingrese la identificacion del diligenciador',
    id: 'acu_pps_identificacion_diligenciador',
    name: 'acu_pps_identificacion_diligenciador',
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('acu_pps_identificacion_diligenciador', ayuda_acu_pps_identificacion_diligenciador);
        }
    }
});

var acu_pps_tipos_identificacion = new Ext.data.ArrayStore({
    fields: ['tipo'],
    data : [ ['Cedula'], ['Nit'], ['Pasaporte'], ['Rut'] ]
});

var acu_pps_tipo_identificacion_diligenciador = new Ext.form.ComboBox({
    store: acu_pps_tipos_identificacion,
	name : 'acu_pps_tipo_identificacion_diligenciador',
	fieldLabel: 'Tipo de identificaci&oacute;n',
    emptyText:'seleccione el tipo de identificaci&oacute;n del diligenciador',
	id: 'acu_pps_tipo_identificacion_diligenciador',
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
					ayuda( 'acu_pps_tipo_identificacion_diligenciador', ayuda_acu_pps_tipo_identificacion_diligenciador );
			}             
	}
});

var acu_pps_telefono_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Tel&eacute;fono fijo &oacute; celular',
    emptyText: 'ingrese el n&uacute;mero de tel&eacute;fono fijo o celular del diligenciador',
    id: 'acu_pps_telefono_diligenciador',
    name: 'acu_pps_telefono_diligenciador',
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('acu_pps_telefono_diligenciador', ayuda_acu_pps_telefono_diligenciador);
        }
    }
});

var acu_pps_presupuesto_aprobado = new Ext.form.RadioGroup({
    id: 'acu_pps_presupuesto_aprobado',
    fieldLabel: '&iquest;Se cuenta con presupuesto anual aprobado para acueducto?',
    listeners: {
        'render': function(){
            ayuda('acu_pps_presupuesto_aprobado', ayuda_acu_pps_presupuesto_aprobado);
        }
    },
    items: [{
        items: [{
            boxLabel: 'Si',
            name: 'acu_pps_presupuesto_aprobado',
            inputValue: 1
        }, {
            boxLabel: 'No',
            name: 'acu_pps_presupuesto_aprobado',
            inputValue: 0
        }]
    }]
});

var acu_pps_suscriptores_pendientes_de_pago = new Ext.form.NumberField({
    fieldLabel: 'N&uacute;mero de suscriptores que a diciembre 31 deben m&aacute;s de 3 Facturas',
    emptyText: 'ingrese la cantidad de suscriptores que a diciembre 31 deben m&aacute;s de 3 facturas',
    id: 'acu_pps_suscriptores_pendientes_de_pago',
    name: 'acu_pps_suscriptores_pendientes_de_pago',
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('acu_pps_suscriptores_pendientes_de_pago', ayuda_acu_pps_suscriptores_pendientes_de_pago);
        }
    }
});

var form_acueducto = new Ext.FormPanel({
    title: 'Informaci&oacute;n general de acueducto',
    autoWidth: true,
    frame: true,
    border: false,
    renderTo: 'div_form_acueducto',
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
						acu_pps_nombre_diligenciador, 
						acu_pps_apellido_diligenciador, 
						acu_pps_identificacion_diligenciador, 
						acu_pps_tipo_identificacion_diligenciador, 
						acu_pps_telefono_diligenciador
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
						acu_pps_numero_empleados_con_competencias, 
						acu_pps_numero_empleados_sin_competencias, 
						acu_pps_numero_empleados_proceso_competencias
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
						acu_pps_presupuesto_aprobado, 
						acu_pps_suscriptores_pendientes_de_pago
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
						acu_pps_estatutos,
						acu_pps_numero_suscriptores
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
			acueducto_subirDatos();
        }
    }]
});

function acueducto_subirDatos(){
    subirDatos(
		form_acueducto, 
		'acueducto/actualizarAcueducto',
		{},
		function(){
			Ext.getCmp('acueducto').setActiveTab(1);
		}
	);
}

aceducto_datastore.load({
  callback: function() {
	var record = aceducto_datastore.getAt(0);
	form_acueducto.getForm().loadRecord(record);
  }
});

