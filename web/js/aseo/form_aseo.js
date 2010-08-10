var aseo_datastore = new Ext.data.Store({
	id: 'aseo_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo/obtenerDatosAseo', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},[ 
				{name: 'ase_pps_pre_id', type: 'int'},
				{name: 'ase_pps_ser_id', type: 'int'},
				{name: 'ase_pps_anio', type: 'int'},
				{name: 'ase_pps_presupuesto_aprobado', type: 'int'},
				{name: 'ase_pps_suscriptores_pendientes_de_pago', type: 'int'},
				{name: 'ase_pps_estatutos', type: 'int'},
				{name: 'ase_pps_numero_empleados_con_competencias', type: 'int'},
				{name: 'ase_pps_numero_empleados_sin_competencias', type: 'int'},
				{name: 'ase_pps_numero_empleados_proceso_competencias', type: 'int'},
				{name: 'ase_pps_nombre_diligenciador', type: 'string'},
				{name: 'ase_pps_apellido_diligenciador', type: 'string'},
				{name: 'ase_pps_telefono_diligenciador', type: 'string'},
				{name: 'ase_pps_identificacion_diligenciador', type: 'string'},
				{name: 'ase_pps_tipo_identificacion_diligenciador', type: 'string'},
				{name: 'ase_pps_numero_suscriptores', type: 'int'}
	])
});

var ase_pps_estatutos = new Ext.form.RadioGroup( { 
	id: 'ase_pps_estatutos',
	fieldLabel: '&iquest;Cuenta el prestador con estatutos?',
	listeners:
  	{
		'render': function(){ 	
					ayuda( 'ase_pps_estatutos', ayuda_ase_pps_estatutos );
			}             
	},
	items: 
	[{
	    items:[
			{
				boxLabel: 'Si',
			  	name: 'ase_pps_estatutos',
			  	inputValue: 1,
				checked: true
		  },
		  {
			  	boxLabel: 'No',
			  	name: 'ase_pps_estatutos',
			  	inputValue: 0
		  }]
	}]} );

var ase_pps_numero_empleados_con_competencias = new Ext.form.NumberField( {
	fieldLabel: 'Cu&aacute;ntos empleados cuentan con certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que cuentan con certificaci&oacute;n basada en competencias', 
	id: 'ase_pps_numero_empleados_con_competencias', 
	name: 'ase_pps_numero_empleados_con_competencias', 
	anchor: '100%', 
	minLength : 1,
    maxLength : 7,
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_pps_numero_empleados_con_competencias', ayuda_ase_pps_numero_empleados_con_competencias );
     	}
	}
} );

var ase_pps_numero_empleados_sin_competencias = new Ext.form.NumberField( {
	fieldLabel: 'Cu&aacute;ntos empleados NO cuentan con certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que NO cuentan con certificaci&oacute;n basada en competencias', 
	id: 'ase_pps_numero_empleados_sin_competencias', 
	name: 'ase_pps_numero_empleados_sin_competencias', 
	anchor: '100%',
	minLength : 1,
    maxLength : 7,
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_pps_numero_empleados_sin_competencias', ayuda_ase_pps_numero_empleados_sin_competencias );
     	}
	}
} );

var ase_pps_numero_empleados_proceso_competencias = new Ext.form.NumberField( { 
	fieldLabel: 'Cu&aacute;ntos empleados est&aacute;n EN PROCESO de certificaci&oacute;n basada en competencias rurales', 
	emptyText: 'n&uacute;mero de empleados que est&aacute;n EN PROCESO de certificaci&oacute;n basada en competencias', 
	id: 'ase_pps_numero_empleados_proceso_competencias', 
	name: 'ase_pps_numero_empleados_proceso_competencias', 
	anchor: '100%',
	minLength : 1,
    maxLength : 7,
	//allowBlank:false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_pps_numero_empleados_proceso_competencias', ayuda_ase_pps_numero_empleados_proceso_competencias );
     	}
	}
} );

var ase_pps_numero_suscriptores = new Ext.form.NumberField( {
	fieldLabel: 'N&uacute;mero de suscriptores', 
	emptyText: 'ingrese el n&uacute;mero de suscriptores', 
	id: 'ase_pps_numero_suscriptores', 
	name: 'ase_pps_numero_suscriptores',
	anchor: '100%',
	minLength : 1,
    maxLength : 8,
	//allowBlank: false,
	listeners: {
        'render': function(){ 
					ayuda( 'ase_pps_numero_suscriptores', ayuda_ase_pps_numero_suscriptores );
     	}
	}
} );

var ase_pps_nombre_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Nombre del diligenciador',
    emptyText: 'ingrese el nombre del diligenciador',
    anchor: '100%',
    id: 'ase_pps_nombre_diligenciador',
    name: 'ase_pps_nombre_diligenciador',
    width: 300,
	minLength : 4,
    maxLength : 200,
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('ase_pps_nombre_diligenciador', ayuda_ase_pps_nombre_diligenciador);
        }
    }
});

var ase_pps_apellido_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Apellido del diligenciador',
    emptyText: 'ingrese el apellido del diligenciador',
    id: 'ase_pps_apellido_diligenciador',
    name: 'ase_pps_apellido_diligenciador',
	minLength : 4,
    maxLength : 200,
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('ase_pps_apellido_diligenciador', ayuda_ase_pps_apellido_diligenciador);
        }
    }
});

var ase_pps_identificacion_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Identificaci&oacute;n del diligenciador',
    emptyText: 'ingrese la identificacion del diligenciador',
    id: 'ase_pps_identificacion_diligenciador',
    name: 'ase_pps_identificacion_diligenciador',
	minLength : 4,
    maxLength : 15,
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('ase_pps_identificacion_diligenciador', ayuda_ase_pps_identificacion_diligenciador);
        }
    }
});

var ase_pps_tipos_identificacion = new Ext.data.ArrayStore({
    fields: ['tipo'],
    data : [ ['Cedula'], ['Nit'], ['Pasaporte'], ['Rut'] ]
});

var ase_pps_tipo_identificacion_diligenciador = new Ext.form.ComboBox({
    store: ase_pps_tipos_identificacion,
	name : 'ase_pps_tipo_identificacion_diligenciador',
	fieldLabel: 'Tipo de identificaci&oacute;n',
    emptyText:'seleccione el tipo de identificaci&oacute;n del diligenciador',
	id: 'ase_pps_tipo_identificacion_diligenciador',
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
					ayuda( 'ase_pps_tipo_identificacion_diligenciador', ayuda_ase_pps_tipo_identificacion_diligenciador );
			}             
	}
});

var ase_pps_telefono_diligenciador = new Ext.form.TextField({
    fieldLabel: 'Tel&eacute;fono fijo &oacute; celular',
    emptyText: 'ingrese el n&uacute;mero de tel&eacute;fono fijo o celular del diligenciador',
    id: 'ase_pps_telefono_diligenciador',
    name: 'ase_pps_telefono_diligenciador',
	minLength : 4,
    maxLength : 15,
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('ase_pps_telefono_diligenciador', ayuda_ase_pps_telefono_diligenciador);
        }
    }
});

var ase_pps_presupuesto_aprobado = new Ext.form.RadioGroup({
    id: 'ase_pps_presupuesto_aprobado',
    fieldLabel: '&iquest;Se cuenta con presupuesto anual aprobado para aseo?',
    listeners: {
        'render': function(){
            ayuda('ase_pps_presupuesto_aprobado', ayuda_ase_pps_presupuesto_aprobado);
        }
    },
    items: [{
        items: [{
            boxLabel: 'Si',
            name: 'ase_pps_presupuesto_aprobado',
            inputValue: 1,
			checked: true
        }, {
            boxLabel: 'No',
            name: 'ase_pps_presupuesto_aprobado',
            inputValue: 0
        }]
    }]
});

var ase_pps_suscriptores_pendientes_de_pago = new Ext.form.NumberField({
    fieldLabel: 'N&uacute;mero de suscriptores que a diciembre 31 deben m&aacute;s de 3 Facturas',
    emptyText: 'ingrese la cantidad de suscriptores que a diciembre 31 deben m&aacute;s de 3 facturas',
    id: 'ase_pps_suscriptores_pendientes_de_pago',
    name: 'ase_pps_suscriptores_pendientes_de_pago',
    anchor: '100%',
    //allowBlank: false,
    listeners: {
        'render': function(){
            ayuda('ase_pps_suscriptores_pendientes_de_pago', ayuda_ase_pps_suscriptores_pendientes_de_pago);
        }
    }
});

var form_aseo = new Ext.FormPanel({
    title: 'Informaci&oacute;n general de aseo',
    autoWidth: true,
    frame: true,
    border: false,
    renderTo: 'div_form_aseo',
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
			columnWidth: '1',
			title: 'Informaci&oacute;n del diligenciador',
			defaultType: 'textfield',
			height: 200,
			labelWidth: 210,
			defaults: {
				labelStyle: 'font-size:1.0em;'
			},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [
						ase_pps_nombre_diligenciador, 
						ase_pps_apellido_diligenciador, 
						ase_pps_identificacion_diligenciador, 
						ase_pps_tipo_identificacion_diligenciador, 
						ase_pps_telefono_diligenciador
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
						ase_pps_presupuesto_aprobado, 
						ase_pps_suscriptores_pendientes_de_pago
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
						ase_pps_estatutos,
						ase_pps_numero_suscriptores
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
			aseo_subirDatos();
        }
    }]
});

function aseo_subirDatos(){
    subirDatos(
		form_aseo, 
		'aseo/actualizarAseo',
		{},
		function(){
			Ext.getCmp('aseo').setActiveTab(1);
		}
	);
}

aseo_datastore.load({
  callback: function() {
	var record = aseo_datastore.getAt(0);
	form_aseo.getForm().loadRecord(record);
  }
});

