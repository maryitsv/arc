var tecnicooperativacomponentessistema_form = new Ext.form.FormPanel({
    id: 'tecnicooperativacomponentessistema-form',
    //    width: 840,
    autoWidth: true,
    height: 380,
    frame: true,
    //    anchor: '100%',
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: tecnicooperativacomponentessistema_form,
                url: getAbsoluteUrl('acueducto_componentessistema', 'subirDatos'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(0);
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: tecnicooperativacomponentessistema_form,
                url: getAbsoluteUrl('acueducto_componentessistema', 'subirDatos'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(2);
                }
            });
        }
    }]
});

var tocs_captacion = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 2,
    id: "tocs_captacion",
    name: "tocs_captacion",
    fieldLabel: "Captación",
    items: [{
    
        name: 'tocs_captacion',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_captacion_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_captacion_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 3,
    id: "tocs_captacion_cantidad",
    name: "tocs_captacion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_aduccion = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 4,
    id: "tocs_aduccion",
    name: "tocs_aduccion",
    fieldLabel: "Aducción",
    items: [{
    
        name: 'tocs_aduccion',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_aduccion_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_aduccion_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 5,
    id: "tocs_aduccion_cantidad",
    name: "tocs_aduccion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_desarenador = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 6,
    id: "tocs_desarenador",
    name: "tocs_desarenador",
    fieldLabel: "Desarenador",
    items: [{
    
        name: 'tocs_desarenador',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_desarenador_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_desarenador_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 7,
    id: "tocs_desarenador_cantidad",
    name: "tocs_desarenador_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_conduccion_agua_cruda = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 8,
    id: "tocs_conduccion_agua_cruda",
    name: "tocs_conduccion_agua_cruda",
    fieldLabel: "Conduccion de agua cruda",
    items: [{
    
        name: 'tocs_conduccion_agua_cruda',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_conduccion_agua_cruda_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_conduccion_agua_cruda_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 9,
    id: "tocs_conduccion_agua_cruda_cantidad",
    name: "tocs_conduccion_agua_cruda_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_planta_tratamiento = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 10,
    id: "tocs_planta_tratamiento",
    name: "tocs_planta_tratamiento",
    fieldLabel: "Planta de tratamiento",
    items: [{
    
        name: 'tocs_planta_tratamiento',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_planta_tratamiento_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_planta_tratamiento_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 11,
    id: "tocs_planta_tratamiento_cantidad",
    name: "tocs_planta_tratamiento_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_desinfeccion = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 12,
    id: "tocs_desinfeccion",
    name: "tocs_desinfeccion",
    fieldLabel: "Desinfección",
    items: [{
    
        name: 'tocs_desinfeccion',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_desinfeccion_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_desinfeccion_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 13,
    id: "tocs_desinfeccion_cantidad",
    name: "tocs_desinfeccion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_tanque_almacenamiento = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 14,
    id: "tocs_tanque_almacenamiento",
    name: "tocs_tanque_almacenamiento",
    fieldLabel: "Tanque de almacenamiento",
    items: [{
    
        name: 'tocs_tanque_almacenamiento',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_tanque_almacenamiento_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_tanque_almacenamiento_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 15,
    id: "tocs_tanque_almacenamiento_cantidad",
    name: "tocs_tanque_almacenamiento_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_conduccion_agua_tratada = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 16,
    id: "tocs_conduccion_agua_tratada",
    name: "tocs_conduccion_agua_tratada",
    fieldLabel: "Conduccion de agua tratada",
    items: [{
    
        name: 'tocs_conduccion_agua_tratada',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_conduccion_agua_tratada_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}


var tocs_conduccion_agua_tratada_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 17,
    id: "tocs_conduccion_agua_tratada_cantidad",
    name: "tocs_conduccion_agua_tratada_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var tocs_red_distribucion = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tocs_red_distribucion",
    name: "tocs_red_distribucion",
    fieldLabel: "Red de distribución",
    items: [{
    
        name: 'tocs_red_distribucion',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tocs_red_distribucion_cantidad');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tocs_red_distribucion_cantidad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 19,
    id: "tocs_red_distribucion_cantidad",
    name: "tocs_red_distribucion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false
}

var acu_componentessistema_datastore = new Ext.data.Store({
    id: 'acu_componentessistema_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_componentessistema', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tocs_captacion',
        type: 'int'
    }, {
        name: 'tocs_captacion_cantidad',
        type: 'int'
    }, {
        name: 'tocs_aduccion',
        type: 'int'
    }, {
        name: 'tocs_aduccion_cantidad',
        type: 'int'
    }, {
        name: 'tocs_desarenador',
        type: 'int'
    }, {
        name: 'tocs_desarenador_cantidad',
        type: 'int'
    }, {
        name: 'tocs_conduccion_agua_cruda',
        type: 'int'
    }, {
        name: 'tocs_conduccion_agua_cruda_cantidad',
        type: 'int'
    }, {
        name: 'tocs_planta_tratamiento',
        type: 'int'
    }, {
        name: 'tocs_planta_tratamiento_cantidad',
        type: 'int'
    }, {
        name: 'tocs_desinfeccion',
        type: 'int'
    }, {
        name: 'tocs_desinfeccion_cantidad',
        type: 'int'
    }, {
        name: 'tocs_tanque_almacenamiento',
        type: 'int'
    }, {
        name: 'tocs_tanque_almacenamiento_cantidad',
        type: 'int'
    }, {
        name: 'tocs_conduccion_agua_tratada',
        type: 'int'
    }, {
        name: 'tocs_conduccion_agua_tratada_cantidad',
        type: 'int'
    }, {
        name: 'tocs_red_distribucion',
        type: 'int'
    }, {
        name: 'tocs_red_distribucion_cantidad',
        type: 'int'
    }])
});

acu_componentessistema_datastore.load({
    callback: function(){
        var registro = acu_componentessistema_datastore.getAt(0);
        tecnicooperativacomponentessistema_form.getForm().loadRecord(registro);
    }
});

tecnicooperativacomponentessistema_form.add({
    xtype: 'fieldset',
    title: 'Componentes del sistema',
    height: 320,
    layout: 'column',
    items: [{
        bodyStyle: 'padding-right:5px;',
        items: {
            layout: 'form',
            labelWidth: 180,
            items: [tocs_captacion, tocs_aduccion, tocs_desarenador, tocs_conduccion_agua_cruda, tocs_planta_tratamiento, tocs_desinfeccion, tocs_tanque_almacenamiento, tocs_conduccion_agua_tratada, tocs_red_distribucion]
        }
    }, {
        bodyStyle: 'padding-left:5px;',
        items: {
            layout: 'form',
            labelWidth: 75,
            items: [tocs_captacion_cantidad, tocs_aduccion_cantidad, tocs_desarenador_cantidad, tocs_conduccion_agua_cruda_cantidad, tocs_planta_tratamiento_cantidad, tocs_desinfeccion_cantidad, tocs_tanque_almacenamiento_cantidad, tocs_conduccion_agua_tratada_cantidad, tocs_red_distribucion_cantidad]
        }
    }]
});

tecnicooperativacomponentessistema_form.render('div_form_acu_componentessistema');
