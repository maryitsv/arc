var form_acu_aduccionimpulsion2 = new Ext.form.FormPanel({
    id: 'tecnicooperativaaduccionimpulsion2-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_aduccionimpulsion2.getForm().submit({
                url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'subirDatos2'),
                clientValidation: false
            });
//            tecnicooperativa_acueducto_tabpanel.setActiveTab(3);
            form_acu_aduccionimpulsion.show();
            form_acu_aduccionimpulsion2.hide();
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_aduccionimpulsion2.getForm().submit({
                url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'subirDatos2'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(4);
        }
    }]
});

var toai_tuberia = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "toai_tuberia",
    name: "toai_tuberia",
    fieldLabel: "Tuberia",
    items: [{
        name: 'toai_tuberia',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toai_tuberia_asbesto_cemento_longitud').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('toai_tuberia_asbesto_cemento_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_asbesto_cemento_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_hierro_ductil_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_hierro_ductil_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_hierro_ductil_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_concreto_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_concreto_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_concreto_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_pvc_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_pvc_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_tuberia_pvc_edad').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia')).getEl(),
                title: 'Titulo toai_tuberia',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_asbesto_cemento_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_asbesto_cemento_longitud",
    name: "toai_tuberia_asbesto_cemento_longitud",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_asbesto_cemento_longitud')).getEl(),
                title: 'Titulo toai_tuberia_asbesto_cemento_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_asbesto_cemento_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_asbesto_cemento_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_asbesto_cemento_diametro",
    name: "toai_tuberia_asbesto_cemento_diametro",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_asbesto_cemento_diametro')).getEl(),
                title: 'Titulo toai_tuberia_asbesto_cemento_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_asbesto_cemento_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_asbesto_cemento_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_asbesto_cemento_edad",
    name: "toai_tuberia_asbesto_cemento_edad",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_asbesto_cemento_edad')).getEl(),
                title: 'Titulo toai_tuberia_asbesto_cemento_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_asbesto_cemento_edad',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_hierro_ductil_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_hierro_ductil_longitud",
    name: "toai_tuberia_hierro_ductil_longitud",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_hierro_ductil_longitud')).getEl(),
                title: 'Titulo toai_tuberia_hierro_ductil_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_hierro_ductil_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_hierro_ductil_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_hierro_ductil_diametro",
    name: "toai_tuberia_hierro_ductil_diametro",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_hierro_ductil_diametro')).getEl(),
                title: 'Titulo toai_tuberia_hierro_ductil_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_hierro_ductil_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_hierro_ductil_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_hierro_ductil_edad",
    name: "toai_tuberia_hierro_ductil_edad",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_hierro_ductil_edad')).getEl(),
                title: 'Titulo toai_tuberia_hierro_ductil_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_hierro_ductil_edad',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_concreto_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_concreto_longitud",
    name: "toai_tuberia_concreto_longitud",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_concreto_longitud')).getEl(),
                title: 'Titulo toai_tuberia_concreto_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_concreto_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_concreto_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_concreto_diametro",
    name: "toai_tuberia_concreto_diametro",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_concreto_diametro')).getEl(),
                title: 'Titulo toai_tuberia_concreto_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_concreto_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_concreto_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_concreto_edad",
    name: "toai_tuberia_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_concreto_edad')).getEl(),
                title: 'Titulo toai_tuberia_concreto_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_concreto_edad',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_pvc_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_pvc_longitud",
    name: "toai_tuberia_pvc_longitud",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_pvc_longitud')).getEl(),
                title: 'Titulo toai_tuberia_pvc_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_pvc_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_pvc_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_pvc_diametro",
    name: "toai_tuberia_pvc_diametro",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_pvc_diametro')).getEl(),
                title: 'Titulo toai_tuberia_pvc_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_pvc_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_tuberia_pvc_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_tuberia_pvc_edad",
    name: "toai_tuberia_pvc_edad",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_tuberia_pvc_edad')).getEl(),
                title: 'Titulo toai_tuberia_pvc_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_tuberia_pvc_edad',
                trackMouse: true
            });
        }
    }
}

var toai_manguera = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "toai_manguera",
    name: "toai_manguera",
    fieldLabel: "Manguera",
    items: [{
        name: 'toai_manguera',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toai_manguera_polietileno_hd_longitud').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('toai_manguera_polietileno_hd_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_manguera_polietileno_hd_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_manguera_polietileno_ld_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_manguera_polietileno_ld_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_manguera_polietileno_ld_edad').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera')).getEl(),
                title: 'Titulo toai_manguera',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera',
                trackMouse: true
            });
        }
    }
}

var toai_manguera_polietileno_hd_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_manguera_polietileno_hd_longitud",
    name: "toai_manguera_polietileno_hd_longitud",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera_polietileno_hd_longitud')).getEl(),
                title: 'Titulo toai_manguera_polietileno_hd_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera_polietileno_hd_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_manguera_polietileno_hd_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_manguera_polietileno_hd_diametro",
    name: "toai_manguera_polietileno_hd_diametro",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera_polietileno_hd_diametro')).getEl(),
                title: 'Titulo toai_manguera_polietileno_hd_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera_polietileno_hd_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_manguera_polietileno_hd_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_manguera_polietileno_hd_edad",
    name: "toai_manguera_polietileno_hd_edad",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera_polietileno_hd_edad')).getEl(),
                title: 'Titulo toai_manguera_polietileno_hd_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera_polietileno_hd_edad',
                trackMouse: true
            });
        }
    }
}

var toai_manguera_polietileno_ld_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_manguera_polietileno_ld_longitud",
    name: "toai_manguera_polietileno_ld_longitud",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera_polietileno_ld_longitud')).getEl(),
                title: 'Titulo toai_manguera_polietileno_ld_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera_polietileno_ld_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_manguera_polietileno_ld_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_manguera_polietileno_ld_diametro",
    name: "toai_manguera_polietileno_ld_diametro",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera_polietileno_ld_diametro')).getEl(),
                title: 'Titulo toai_manguera_polietileno_ld_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera_polietileno_ld_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_manguera_polietileno_ld_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_manguera_polietileno_ld_edad",
    name: "toai_manguera_polietileno_ld_edad",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_manguera_polietileno_ld_edad')).getEl(),
                title: 'Titulo toai_manguera_polietileno_ld_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_manguera_polietileno_ld_edad',
                trackMouse: true
            });
        }
    }
}

var acu_aduccionimpulsion2_datastore = new Ext.data.Store({
    id: 'acu_aduccionimpulsion2_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'toai_tuberia',
        type: 'int'
    }, {
        name: 'toai_tuberia_asbesto_cemento_longitud',
        type: 'int'
    }, {
        name: 'toai_tuberia_asbesto_cemento_diametro',
        type: 'int'
    }, {
        name: 'toai_tuberia_asbesto_cemento_edad',
        type: 'int'
    }, {
        name: 'toai_tuberia_hierro_ductil_longitud',
        type: 'int'
    }, {
        name: 'toai_tuberia_hierro_ductil_diametro',
        type: 'int'
    }, {
        name: 'toai_tuberia_hierro_ductil_edad',
        type: 'int'
    }, {
        name: 'toai_tuberia_concreto_longitud',
        type: 'int'
    }, {
        name: 'toai_tuberia_concreto_diametro',
        type: 'int'
    }, {
        name: 'toai_tuberia_concreto_edad',
        type: 'int'
    }, {
        name: 'toai_tuberia_pvc_longitud',
        type: 'int'
    }, {
        name: 'toai_tuberia_pvc_diametro',
        type: 'int'
    }, {
        name: 'toai_tuberia_pvc_edad',
        type: 'int'
    }, {
        name: 'toai_manguera',
        type: 'int'
    }, {
        name: 'toai_manguera_polietileno_hd_longitud',
        type: 'int'
    }, {
        name: 'toai_manguera_polietileno_hd_diametro',
        type: 'int'
    }, {
        name: 'toai_manguera_polietileno_hd_edad',
        type: 'int'
    }, {
        name: 'toai_manguera_polietileno_ld_longitud',
        type: 'int'
    }, {
        name: 'toai_manguera_polietileno_ld_diametro',
        type: 'int'
    }, {
        name: 'toai_manguera_polietileno_ld_edad',
        type: 'int'
    }])
});

acu_aduccionimpulsion2_datastore.load({
    callback: function(){
        var registro = acu_aduccionimpulsion2_datastore.getAt(0);
        form_acu_aduccionimpulsion2.getForm().loadRecord(registro);
    }
});

form_acu_aduccionimpulsion2.add({
    xtype: 'fieldset',
    title: 'Líneas de aducción - impulsión',
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            items: [toai_tuberia]
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
            }, toai_tuberia_asbesto_cemento_longitud, toai_tuberia_hierro_ductil_longitud, toai_tuberia_concreto_longitud, toai_tuberia_pvc_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, toai_tuberia_asbesto_cemento_diametro, toai_tuberia_hierro_ductil_diametro, toai_tuberia_concreto_diametro, toai_tuberia_pvc_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, toai_tuberia_asbesto_cemento_edad, toai_tuberia_hierro_ductil_edad, toai_tuberia_concreto_edad, toai_tuberia_pvc_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            items: [toai_manguera]
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
            }]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, toai_manguera_polietileno_hd_longitud, toai_manguera_polietileno_ld_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, toai_manguera_polietileno_hd_diametro, toai_manguera_polietileno_ld_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, toai_manguera_polietileno_hd_edad, toai_manguera_polietileno_ld_edad]
        }]
    }]
});

var panel_aduccion_impulsion = new Ext.Panel({
    renderTo: 'div_form_acu_aduccionimpulsion',
    autoWidth: true,
    items: [form_acu_aduccionimpulsion, form_acu_aduccionimpulsion2]
});

//form_acu_aduccionimpulsion2.render('div_form_acu_aduccionimpulsion2');
