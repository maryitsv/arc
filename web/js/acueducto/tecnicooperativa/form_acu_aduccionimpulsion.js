var form_acu_aduccionimpulsion = new Ext.form.FormPanel({
    id: 'tecnicooperativaaduccionimpulsion-form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: form_acu_aduccionimpulsion,
                url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'subirDatos1'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(2);
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: form_acu_aduccionimpulsion,
                url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'subirDatos1'),
                success: function(){
                    form_acu_aduccionimpulsion.hide();
                    form_acu_aduccionimpulsion2.show();
                }
            });
        }
    }]
});

var toai_canal_abierto = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "toai_canal_abierto",
    name: "toai_canal_abierto",
    fieldLabel: "Canal abierto",
    items: [{
        name: 'toai_canal_abierto',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toai_canal_abierto_tierra_longitud').setDisabled(!checked);
            textfield.focus();
            Ext.getCmp('toai_canal_abierto_tierra_edad').setDisabled(!checked);
            Ext.getCmp('toai_canal_abierto_concreto_longitud').setDisabled(!checked);
            Ext.getCmp('toai_canal_abierto_concreto_edad').setDisabled(!checked);
            Ext.getCmp('toai_canal_abierto_mamposteria_longitud').setDisabled(!checked);
            Ext.getCmp('toai_canal_abierto_mamposteria_edad').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Canal abierto',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_tierra_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_abierto_tierra_longitud",
    name: "toai_canal_abierto_tierra_longitud",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto_tierra_longitud')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En tierra -> Longitud(m)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_tierra_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_abierto_tierra_edad",
    name: "toai_canal_abierto_tierra_edad",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto_tierra_edad')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En tierra -> Edad(años)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_concreto_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_abierto_concreto_longitud",
    name: "toai_canal_abierto_concreto_longitud",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto_concreto_longitud')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En concreto -> Longitud(m)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_concreto_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_abierto_concreto_edad",
    name: "toai_canal_abierto_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto_concreto_edad')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En concreto -> Edad(años)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_mamposteria_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_abierto_mamposteria_longitud",
    name: "toai_canal_abierto_mamposteria_longitud",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto_mamposteria_longitud')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En mamposteria -> Longitud(m)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_mamposteria_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_abierto_mamposteria_edad",
    name: "toai_canal_abierto_mamposteria_edad",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto_mamposteria_edad')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En mamposteria -> Edad(años)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "toai_canal_cubierto",
    name: "toai_canal_cubierto",
    fieldLabel: "Canal cubierto",
    items: [{
        name: 'toai_canal_cubierto',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toai_canal_cubierto_tierra_longitud').setDisabled(!checked);
            textfield.focus();
            Ext.getCmp('toai_canal_cubierto_tierra_edad').setDisabled(!checked);
            Ext.getCmp('toai_canal_cubierto_concreto_longitud').setDisabled(!checked);
            Ext.getCmp('toai_canal_cubierto_concreto_edad').setDisabled(!checked);
            Ext.getCmp('toai_canal_cubierto_mamposteria_longitud').setDisabled(!checked);
            Ext.getCmp('toai_canal_cubierto_mamposteria_edad').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Canal cubierto',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_tierra_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_cubierto_tierra_longitud",
    name: "toai_canal_cubierto_tierra_longitud",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto_tierra_longitud')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En tierra -> Longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_tierra_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_cubierto_tierra_edad",
    name: "toai_canal_cubierto_tierra_edad",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto_tierra_edad')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En tierra -> Edad(años)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_concreto_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_cubierto_concreto_longitud",
    name: "toai_canal_cubierto_concreto_longitud",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto_concreto_longitud')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En concreto -> Longitud(m)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_concreto_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_cubierto_concreto_edad",
    name: "toai_canal_cubierto_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto_concreto_edad')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En concreto -> Edad(años)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_mamposteria_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_cubierto_mamposteria_longitud",
    name: "toai_canal_cubierto_mamposteria_longitud",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto_mamposteria_longitud')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En mamposteria -> Longitud(m)',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_mamposteria_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_canal_cubierto_mamposteria_edad",
    name: "toai_canal_cubierto_mamposteria_edad",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto_mamposteria_edad')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'En mamposteria -> Edad(años)',
                trackMouse: true
            });
        }
    }
}

var acu_aduccionimpulsion_datastore = new Ext.data.Store({
    id: 'acu_aduccionimpulsion_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'toai_canal_abierto',
        type: 'int'
    }, {
        name: 'toai_canal_abierto_tierra_longitud',
        type: 'int'
    }, {
        name: 'toai_canal_abierto_tierra_edad',
        type: 'int'
    }, {
        name: 'toai_canal_abierto_concreto_longitud',
        type: 'int'
    }, {
        name: 'toai_canal_abierto_concreto_edad',
        type: 'int'
    }, {
        name: 'toai_canal_abierto_mamposteria_longitud',
        type: 'int'
    }, {
        name: 'toai_canal_abierto_mamposteria_edad',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto_tierra_longitud',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto_tierra_edad',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto_concreto_longitud',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto_concreto_edad',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto_mamposteria_longitud',
        type: 'int'
    }, {
        name: 'toai_canal_cubierto_mamposteria_edad',
        type: 'int'
    }])
});

acu_aduccionimpulsion_datastore.load({
    callback: function(){
        var registro = acu_aduccionimpulsion_datastore.getAt(0);
        form_acu_aduccionimpulsion.getForm().loadRecord(registro);
    }
});

form_acu_aduccionimpulsion.add({
    xtype: 'fieldset',
    title: 'Líneas de aducción - impulsión',
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            items: [toai_canal_abierto]
        }, {
            layout: 'form',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'En tierra:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Concreto:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Mampostería:',
                labelSeparator: ''
            }]
        }, {
            layout: 'form',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, toai_canal_abierto_tierra_longitud, toai_canal_abierto_concreto_longitud, toai_canal_abierto_mamposteria_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, toai_canal_abierto_tierra_edad, toai_canal_abierto_concreto_edad, toai_canal_abierto_mamposteria_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            items: [toai_canal_cubierto]
        }, {
            layout: 'form',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'En tierra:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Concreto:',
                labelSeparator: ''
            }, {
                xtype: 'label',
                fieldLabel: 'Mampostería:',
                labelSeparator: ''
            }]
        }, {
            layout: 'form',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, toai_canal_cubierto_tierra_longitud, toai_canal_cubierto_concreto_longitud, toai_canal_cubierto_mamposteria_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, toai_canal_cubierto_tierra_edad, toai_canal_cubierto_concreto_edad, toai_canal_cubierto_mamposteria_edad]
        }]
    }]
});

//form_acu_aduccionimpulsion.render('div_form_acu_aduccionimpulsion');
