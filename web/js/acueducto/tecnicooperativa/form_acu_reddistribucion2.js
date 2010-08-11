var form_acu_reddistribucion2 = new Ext.form.FormPanel({
    id: 'tecnicooperativareddistribucion2-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: form_acu_reddistribucion2,
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos2'),
                success: function(){
                    form_acu_reddistribucion.show();
                    form_acu_reddistribucion2.hide();
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: form_acu_reddistribucion2,
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos2'),
                success: function(){
                    form_acu_reddistribucion3.show();
                    form_acu_reddistribucion2.hide();
                }
            });
        }
    }]
});

var tord_redes_terciarias = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tord_redes_terciarias",
    name: "tord_redes_terciarias",
    fieldLabel: "Redes terciarias",
    items: [{
        name: 'tord_redes_terciarias',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tord_redes_terciarias_asbesto_cemento_diametro').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tord_redes_terciarias_asbesto_cemento_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_terciarias_hierro_ductil_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_terciarias_hierro_ductil_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_terciarias_concreto_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_terciarias_concreto_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_terciarias_pvc_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_redes_terciarias_pvc_edad').setDisabled(!checked);
        }
    }
}

var tord_redes_terciarias_asbesto_cemento_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_asbesto_cemento_diametro",
    name: "tord_redes_terciarias_asbesto_cemento_diametro",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_asbesto_cemento_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_asbesto_cemento_edad",
    name: "tord_redes_terciarias_asbesto_cemento_edad",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_hierro_ductil_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_hierro_ductil_diametro",
    name: "tord_redes_terciarias_hierro_ductil_diametro",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_hierro_ductil_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_hierro_ductil_edad",
    name: "tord_redes_terciarias_hierro_ductil_edad",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_concreto_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_concreto_diametro",
    name: "tord_redes_terciarias_concreto_diametro",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_concreto_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_concreto_edad",
    name: "tord_redes_terciarias_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_pvc_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_pvc_diametro",
    name: "tord_redes_terciarias_pvc_diametro",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tord_redes_terciarias_pvc_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_pvc_edad",
    name: "tord_redes_terciarias_pvc_edad",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tord_manguera = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tord_manguera",
    name: "tord_manguera",
    fieldLabel: "Manguera",
    items: [{
        name: 'tord_manguera',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tord_manguera_polietileno_hd_diametro').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tord_manguera_polietileno_hd_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_manguera_polietileno_ld_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_manguera_polietileno_ld_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_manguera_otro_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_manguera_otro_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_manguera_otro_edad').setDisabled(!checked);
        }
    }
}

var tord_manguera_polietileno_hd_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_hd_diametro",
    name: "tord_manguera_polietileno_hd_diametro",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true
}

var tord_manguera_polietileno_hd_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_hd_edad",
    name: "tord_manguera_polietileno_hd_edad",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true
}

var tord_manguera_polietileno_ld_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_ld_diametro",
    name: "tord_manguera_polietileno_ld_diametro",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true
}

var tord_manguera_polietileno_ld_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_ld_edad",
    name: "tord_manguera_polietileno_ld_edad",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true
}

var tord_manguera_otro_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_otro_nombre",
    name: "tord_manguera_otro_nombre",
    hideLabel: true
}

var tord_manguera_otro_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_otro_diametro",
    name: "tord_manguera_otro_diametro",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true
}

var tord_manguera_otro_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_otro_edad",
    name: "tord_manguera_otro_edad",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true
}

var acu_reddistribucion2_datastore = new Ext.data.Store({
    id: 'acu_reddistribucion_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_reddistribucion', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tord_redes_terciarias',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_asbesto_cemento_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_asbesto_cemento_edad',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_hierro_ductil_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_hierro_ductil_edad',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_concreto_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_concreto_edad',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_pvc_diametro',
        type: 'int'
    }, {
        name: 'tord_redes_terciarias_pvc_edad',
        type: 'int'
    }, {
        name: 'tord_manguera',
        type: 'int'
    }, {
        name: 'tord_manguera_polietileno_hd_diametro',
        type: 'int'
    }, {
        name: 'tord_manguera_polietileno_hd_edad',
        type: 'int'
    }, {
        name: 'tord_manguera_polietileno_ld_diametro',
        type: 'int'
    }, {
        name: 'tord_manguera_polietileno_ld_edad',
        type: 'int'
    }, {
        name: 'tord_manguera_otro_edad',
        type: 'int'
    }, {
        name: 'tord_manguera_otro_diametro',
        type: 'int'
    }, {
        name: 'tord_manguera_otro_nombre',
        type: 'string'
    }])
});

acu_reddistribucion2_datastore.load({
    callback: function(){
        var registro = acu_reddistribucion2_datastore.getAt(0);
        form_acu_reddistribucion2.getForm().loadRecord(registro);
    }
});

form_acu_reddistribucion2.add({
    xtype: 'fieldset',
    title: 'Red de distribución',
    height: 320,
    items: [{
        layout: 'column',
        height: 130,
        items: [{
            layout: 'form',
            items: [tord_redes_terciarias]
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
            }, tord_redes_terciarias_asbesto_cemento_diametro, tord_redes_terciarias_hierro_ductil_diametro, tord_redes_terciarias_concreto_diametro, tord_redes_terciarias_pvc_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tord_redes_terciarias_asbesto_cemento_edad, tord_redes_terciarias_hierro_ductil_edad, tord_redes_terciarias_concreto_edad, tord_redes_terciarias_pvc_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            items: [tord_manguera]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Polietileno HD:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Polietileno LD:',
                labelSeparator: ''
            }, tord_manguera_otro_nombre]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tord_manguera_polietileno_hd_diametro, tord_manguera_polietileno_ld_diametro, tord_manguera_otro_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tord_manguera_polietileno_hd_edad, tord_manguera_polietileno_ld_edad, tord_manguera_otro_edad]
        }]
    }]
});

//var panel_reddistribucion = new Ext.Panel({
//    renderTo: 'div_form_acu_reddistribucion',
//    autoWidth: true,
//    items: [form_acu_reddistribucion, form_acu_reddistribucion2]
//});
