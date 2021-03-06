var form_acu_reddistribucion = new Ext.form.FormPanel({
    id: 'tecnicooperativareddistribucion-form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: form_acu_reddistribucion,
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos1'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(8);
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: form_acu_reddistribucion,
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos1'),
                success: function(){
                    form_acu_reddistribucion2.show();
                    form_acu_reddistribucion.hide();
                }
            });
        }
    }]
});

var tord_redes_primarias = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tord_redes_primarias",
    name: "tord_redes_primarias",
    fieldLabel: "Redes primarias",
    items: [{
        name: 'tord_redes_primarias',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tord_redes_primarias_asbesto_cemento_diametro').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tord_redes_primarias_asbesto_cemento_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_primarias_hierro_ductil_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_primarias_hierro_ductil_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_primarias_concreto_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_primarias_concreto_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_primarias_pvc_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_primarias_pvc_edad').setDisabled(!checked);
        }
    }
}

var tord_redes_primarias_asbesto_cemento_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_asbesto_cemento_diametro",
    name: "tord_redes_primarias_asbesto_cemento_diametro",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_asbesto_cemento_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_asbesto_cemento_edad",
    name: "tord_redes_primarias_asbesto_cemento_edad",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_hierro_ductil_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_hierro_ductil_diametro",
    name: "tord_redes_primarias_hierro_ductil_diametro",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_hierro_ductil_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_hierro_ductil_edad",
    name: "tord_redes_primarias_hierro_ductil_edad",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_concreto_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_concreto_diametro",
    name: "tord_redes_primarias_concreto_diametro",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_concreto_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_concreto_edad",
    name: "tord_redes_primarias_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_pvc_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_pvc_diametro",
    name: "tord_redes_primarias_pvc_diametro",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_primarias_pvc_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_primarias_pvc_edad",
    name: "tord_redes_primarias_pvc_edad",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tord_redes_secundarias",
    name: "tord_redes_secundarias",
    fieldLabel: "Redes secundarias",
    items: [{
        name: 'tord_redes_secundarias',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tord_redes_secundarias_asbesto_cemento_diametro').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tord_redes_secundarias_asbesto_cemento_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_secundarias_hierro_ductil_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_secundarias_hierro_ductil_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_secundarias_concreto_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_secundarias_concreto_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_secundarias_pvc_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_secundarias_pvc_edad').setDisabled(!checked);
        }
    }
}

var tord_redes_secundarias_asbesto_cemento_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_asbesto_cemento_diametro",
    name: "tord_redes_secundarias_asbesto_cemento_diametro",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_asbesto_cemento_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_asbesto_cemento_edad",
    name: "tord_redes_secundarias_asbesto_cemento_edad",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_hierro_ductil_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_hierro_ductil_diametro",
    name: "tord_redes_secundarias_hierro_ductil_diametro",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_hierro_ductil_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_hierro_ductil_edad",
    name: "tord_redes_secundarias_hierro_ductil_edad",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_concreto_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_concreto_diametro",
    name: "tord_redes_secundarias_concreto_diametro",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_concreto_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_concreto_edad",
    name: "tord_redes_secundarias_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_pvc_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_pvc_diametro",
    name: "tord_redes_secundarias_pvc_diametro",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_secundarias_pvc_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_secundarias_pvc_edad",
    name: "tord_redes_secundarias_pvc_edad",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var acu_reddistribucion_datastore = new Ext.data.Store({
    id: 'acu_reddistribucion_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_reddistribucion', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tord_redes_primarias',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_asbesto_cemento_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_asbesto_cemento_edad',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_hierro_ductil_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_hierro_ductil_edad',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_concreto_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_concreto_edad',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_pvc_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_primarias_pvc_edad',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_asbesto_cemento_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_asbesto_cemento_edad',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_hierro_ductil_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_hierro_ductil_edad',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_concreto_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_concreto_edad',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_pvc_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_secundarias_pvc_edad',
        type: 'int'
    }])
});

acu_reddistribucion_datastore.load({
    callback: function(){
        var registro = acu_reddistribucion_datastore.getAt(0);
        form_acu_reddistribucion.getForm().loadRecord(registro);
    }
});

form_acu_reddistribucion.add({
    xtype: 'fieldset',
    title: 'Red de distribución',
    height: 320,
    items: [{
        layout: 'column',
        height: 130,
        items: [{
            layout: 'form',
            items: [tord_redes_primarias]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Asbesto o cemento:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Hierro dúctil:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Concreto:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'PVC:',
                labelSeparator: ''
            }]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tord_redes_primarias_asbesto_cemento_diametro, tord_redes_primarias_hierro_ductil_diametro, tord_redes_primarias_concreto_diametro, tord_redes_primarias_pvc_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tord_redes_primarias_asbesto_cemento_edad, tord_redes_primarias_hierro_ductil_edad, tord_redes_primarias_concreto_edad, tord_redes_primarias_pvc_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            items: [tord_redes_secundarias]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Asbesto o cemento:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Hierro dúctil:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Concreto:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'PVC:',
                labelSeparator: ''
            }]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tord_redes_secundarias_asbesto_cemento_diametro, tord_redes_secundarias_hierro_ductil_diametro, tord_redes_secundarias_concreto_diametro, tord_redes_secundarias_pvc_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tord_redes_secundarias_asbesto_cemento_edad, tord_redes_secundarias_hierro_ductil_edad, tord_redes_secundarias_concreto_edad, tord_redes_secundarias_pvc_edad]
        }]
    }]
});
