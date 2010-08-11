var form_acu_conduccionaguacruda2 = new Ext.form.FormPanel({
    id: 'tecnicooperativaconduccionaguacruda2-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: form_acu_conduccionaguacruda2,
                url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'subirDatos2'),
                success: function(){
                    form_acu_conduccionaguacruda.show();
                    form_acu_conduccionaguacruda2.hide();
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: form_acu_conduccionaguacruda2,
                url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'subirDatos2'),
                success: function(){
                    form_acu_conduccionaguacruda3.show();
                    form_acu_conduccionaguacruda2.hide();
                }
            });
        }
    }]
});

var tolc_tuberia = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tolc_tuberia",
    name: "tolc_tuberia",
    fieldLabel: "Tuberia",
    items: [{
        name: 'tolc_tuberia',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tolc_tuberia_asbesto_cemento_longitud').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tolc_tuberia_asbesto_cemento_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_asbesto_cemento_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_hierro_ductil_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_hierro_ductil_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_hierro_ductil_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_concreto_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_concreto_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_concreto_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_pvc_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_pvc_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_tuberia_pvc_edad').setDisabled(!checked);
        }
    }
}

var tolc_tuberia_asbesto_cemento_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_asbesto_cemento_longitud",
    name: "tolc_tuberia_asbesto_cemento_longitud",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_asbesto_cemento_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_asbesto_cemento_diametro",
    name: "tolc_tuberia_asbesto_cemento_diametro",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_asbesto_cemento_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_asbesto_cemento_edad",
    name: "tolc_tuberia_asbesto_cemento_edad",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_hierro_ductil_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_hierro_ductil_longitud",
    name: "tolc_tuberia_hierro_ductil_longitud",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_hierro_ductil_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_hierro_ductil_diametro",
    name: "tolc_tuberia_hierro_ductil_diametro",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_hierro_ductil_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_hierro_ductil_edad",
    name: "tolc_tuberia_hierro_ductil_edad",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_concreto_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_concreto_longitud",
    name: "tolc_tuberia_concreto_longitud",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_concreto_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_concreto_diametro",
    name: "tolc_tuberia_concreto_diametro",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_concreto_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_concreto_edad",
    name: "tolc_tuberia_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_pvc_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_pvc_longitud",
    name: "tolc_tuberia_pvc_longitud",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_pvc_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_pvc_diametro",
    name: "tolc_tuberia_pvc_diametro",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tolc_tuberia_pvc_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_tuberia_pvc_edad",
    name: "tolc_tuberia_pvc_edad",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tolc_manguera",
    name: "tolc_manguera",
    fieldLabel: "Manguera",
    items: [{
        name: 'tolc_manguera',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tolc_manguera_polietileno_hd_longitud').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tolc_manguera_polietileno_hd_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_polietileno_hd_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_polietileno_ld_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_polietileno_ld_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_polietileno_ld_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_otro_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_otro_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_otro_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_manguera_otro_edad').setDisabled(!checked);
        }
    }
}

var tolc_manguera_polietileno_hd_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_polietileno_hd_longitud",
    name: "tolc_manguera_polietileno_hd_longitud",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_polietileno_hd_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_polietileno_hd_diametro",
    name: "tolc_manguera_polietileno_hd_diametro",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_polietileno_hd_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_polietileno_hd_edad",
    name: "tolc_manguera_polietileno_hd_edad",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_polietileno_ld_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_polietileno_ld_longitud",
    name: "tolc_manguera_polietileno_ld_longitud",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_polietileno_ld_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_polietileno_ld_diametro",
    name: "tolc_manguera_polietileno_ld_diametro",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_polietileno_ld_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_polietileno_ld_edad",
    name: "tolc_manguera_polietileno_ld_edad",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_otro_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_otro_nombre",
    name: "tolc_manguera_otro_nombre",
    hideLabel: true
}

var tolc_manguera_otro_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_otro_longitud",
    name: "tolc_manguera_otro_longitud",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_otro_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_otro_diametro",
    name: "tolc_manguera_otro_diametro",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true
}

var tolc_manguera_otro_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_manguera_otro_edad",
    name: "tolc_manguera_otro_edad",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true
}

var acu_conduccionaguacruda2_datastore = new Ext.data.Store({
    id: 'acu_conduccionaguacruda2_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tolc_tuberia',
        type: 'int'
    }, {
        name: 'tolc_tuberia_asbesto_cemento_longitud',
        type: 'int'
    }, {
        name: 'tolc_tuberia_asbesto_cemento_diametro',
        type: 'int'
    }, {
        name: 'tolc_tuberia_asbesto_cemento_edad',
        type: 'int'
    }, {
        name: 'tolc_tuberia_hierro_ductil_longitud',
        type: 'int'
    }, {
        name: 'tolc_tuberia_hierro_ductil_diametro',
        type: 'int'
    }, {
        name: 'tolc_tuberia_hierro_ductil_edad',
        type: 'int'
    }, {
        name: 'tolc_tuberia_concreto_longitud',
        type: 'int'
    }, {
        name: 'tolc_tuberia_concreto_diametro',
        type: 'int'
    }, {
        name: 'tolc_tuberia_concreto_edad',
        type: 'int'
    }, {
        name: 'tolc_tuberia_pvc_longitud',
        type: 'int'
    }, {
        name: 'tolc_tuberia_pvc_diametro',
        type: 'int'
    }, {
        name: 'tolc_tuberia_pvc_edad',
        type: 'int'
    }, {
        name: 'tolc_manguera',
        type: 'int'
    }, {
        name: 'tolc_manguera_polietileno_hd_longitud',
        type: 'int'
    }, {
        name: 'tolc_manguera_polietileno_hd_diametro',
        type: 'int'
    }, {
        name: 'tolc_manguera_polietileno_hd_edad',
        type: 'int'
    }, {
        name: 'tolc_manguera_polietileno_ld_longitud',
        type: 'int'
    }, {
        name: 'tolc_manguera_polietileno_ld_diametro',
        type: 'int'
    }, {
        name: 'tolc_manguera_polietileno_ld_edad',
        type: 'int'
    }, {
        name: 'tolc_manguera_otro_edad',
        type: 'int'
    }, {
        name: 'tolc_manguera_otro_longitud',
        type: 'int'
    }, {
        name: 'tolc_manguera_otro_diametro',
        type: 'int'
    }, {
        name: 'tolc_manguera_otro_nombre',
        type: 'string'
    }])
});

acu_conduccionaguacruda2_datastore.load({
    callback: function(){
        var registro = acu_conduccionaguacruda2_datastore.getAt(0);
        form_acu_conduccionaguacruda2.getForm().loadRecord(registro);
    }
});

form_acu_conduccionaguacruda2.add({
    xtype: 'fieldset',
    title: 'Línea de conducción de agua cruda',
    height: 320,
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            items: [tolc_tuberia]
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
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, tolc_tuberia_asbesto_cemento_longitud, tolc_tuberia_hierro_ductil_longitud, tolc_tuberia_concreto_longitud, tolc_tuberia_pvc_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tolc_tuberia_asbesto_cemento_diametro, tolc_tuberia_hierro_ductil_diametro, tolc_tuberia_concreto_diametro, tolc_tuberia_pvc_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tolc_tuberia_asbesto_cemento_edad, tolc_tuberia_hierro_ductil_edad, tolc_tuberia_concreto_edad, tolc_tuberia_pvc_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            items: [tolc_manguera]
        }, {
            layout: 'form',
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
            }, tolc_manguera_otro_nombre]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, tolc_manguera_polietileno_hd_longitud, tolc_manguera_polietileno_ld_longitud, tolc_manguera_otro_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tolc_manguera_polietileno_hd_diametro, tolc_manguera_polietileno_ld_diametro, tolc_manguera_otro_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tolc_manguera_polietileno_hd_edad, tolc_manguera_polietileno_ld_edad, tolc_manguera_otro_edad]
        }]
    }]
});

//form_acu_conduccionaguacruda2.render('div_form_acu_conduccionaguacruda2');
