var form_acu_conduccionaguacruda = new Ext.form.FormPanel({
    id: 'tecnicooperativaconduccionaguacruda-form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_conduccionaguacruda.getForm().submit({
                url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'subirDatos1'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(7);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_conduccionaguacruda.getForm().submit({
                url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'subirDatos1'),
                clientValidation: false
            });
            form_acu_conduccionaguacruda.hide();
            form_acu_conduccionaguacruda2.show();
            //            tecnicooperativa_acueducto_tabpanel.setActiveTab(4);
        }
    }]
});

var tolc_canal_abierto = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tolc_canal_abierto",
    name: "tolc_canal_abierto",
    fieldLabel: "Canal abierto",
    items: [{
        name: 'tolc_canal_abierto',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tolc_canal_abierto_tierra_longitud').setDisabled(!checked);
            textfield.focus();
            Ext.getCmp('tolc_canal_abierto_tierra_edad').setDisabled(!checked);
            Ext.getCmp('tolc_canal_abierto_concreto_longitud').setDisabled(!checked);
            Ext.getCmp('tolc_canal_abierto_concreto_edad').setDisabled(!checked);
            Ext.getCmp('tolc_canal_abierto_mamposteria_longitud').setDisabled(!checked);
            Ext.getCmp('tolc_canal_abierto_mamposteria_edad').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto')).getEl(),
                title: 'Titulo tolc_canal_abierto',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_abierto_tierra_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_abierto_tierra_longitud",
    name: "tolc_canal_abierto_tierra_longitud",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto_tierra_longitud')).getEl(),
                title: 'Titulo tolc_canal_abierto_tierra_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto_tierra_longitud',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_abierto_tierra_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_abierto_tierra_edad",
    name: "tolc_canal_abierto_tierra_edad",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto_tierra_edad')).getEl(),
                title: 'Titulo tolc_canal_abierto_tierra_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto_tierra_edad',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_abierto_concreto_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_abierto_concreto_longitud",
    name: "tolc_canal_abierto_concreto_longitud",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto_concreto_longitud')).getEl(),
                title: 'Titulo tolc_canal_abierto_concreto_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto_concreto_longitud',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_abierto_concreto_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_abierto_concreto_edad",
    name: "tolc_canal_abierto_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto_concreto_edad')).getEl(),
                title: 'Titulo tolc_canal_abierto_concreto_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto_concreto_edad',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_abierto_mamposteria_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_abierto_mamposteria_longitud",
    name: "tolc_canal_abierto_mamposteria_longitud",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto_mamposteria_longitud')).getEl(),
                title: 'Titulo tolc_canal_abierto_mamposteria_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto_mamposteria_longitud',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_abierto_mamposteria_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_abierto_mamposteria_edad",
    name: "tolc_canal_abierto_mamposteria_edad",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_abierto_mamposteria_edad')).getEl(),
                title: 'Titulo tolc_canal_abierto_mamposteria_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_abierto_mamposteria_edad',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tolc_canal_cubierto",
    name: "tolc_canal_cubierto",
    fieldLabel: "Canal cubierto",
    items: [{
        name: 'tolc_canal_cubierto',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tolc_canal_cubierto_tierra_longitud').setDisabled(!checked);
            textfield.focus();
            Ext.getCmp('tolc_canal_cubierto_tierra_edad').setDisabled(!checked);
            Ext.getCmp('tolc_canal_cubierto_concreto_longitud').setDisabled(!checked);
            Ext.getCmp('tolc_canal_cubierto_concreto_edad').setDisabled(!checked);
            Ext.getCmp('tolc_canal_cubierto_mamposteria_longitud').setDisabled(!checked);
            Ext.getCmp('tolc_canal_cubierto_mamposteria_edad').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto')).getEl(),
                title: 'Titulo tolc_canal_cubierto',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto_tierra_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_cubierto_tierra_longitud",
    name: "tolc_canal_cubierto_tierra_longitud",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto_tierra_longitud')).getEl(),
                title: 'Titulo tolc_canal_cubierto_tierra_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto_tierra_longitud',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto_tierra_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_cubierto_tierra_edad",
    name: "tolc_canal_cubierto_tierra_edad",
    fieldLabel: "En tierra",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto_tierra_edad')).getEl(),
                title: 'Titulo tolc_canal_cubierto_tierra_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto_tierra_edad',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto_concreto_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_cubierto_concreto_longitud",
    name: "tolc_canal_cubierto_concreto_longitud",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto_concreto_longitud')).getEl(),
                title: 'Titulo tolc_canal_cubierto_concreto_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto_concreto_longitud',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto_concreto_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_cubierto_concreto_edad",
    name: "tolc_canal_cubierto_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto_concreto_edad')).getEl(),
                title: 'Titulo tolc_canal_cubierto_concreto_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto_concreto_edad',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto_mamposteria_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_cubierto_mamposteria_longitud",
    name: "tolc_canal_cubierto_mamposteria_longitud",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto_mamposteria_longitud')).getEl(),
                title: 'Titulo tolc_canal_cubierto_mamposteria_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto_mamposteria_longitud',
                trackMouse: true
            });
        }
    }
}

var tolc_canal_cubierto_mamposteria_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_canal_cubierto_mamposteria_edad",
    name: "tolc_canal_cubierto_mamposteria_edad",
    fieldLabel: "En mamposteria",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tolc_canal_cubierto_mamposteria_edad')).getEl(),
                title: 'Titulo tolc_canal_cubierto_mamposteria_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tolc_canal_cubierto_mamposteria_edad',
                trackMouse: true
            });
        }
    }
}

var acu_conduccionaguacruda_datastore = new Ext.data.Store({
    id: 'acu_conduccionaguacruda_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tolc_canal_abierto',
        type: 'int'
    }, {
        name: 'tolc_canal_abierto_tierra_longitud',
        type: 'int'
    }, {
        name: 'tolc_canal_abierto_tierra_edad',
        type: 'int'
    }, {
        name: 'tolc_canal_abierto_concreto_longitud',
        type: 'int'
    }, {
        name: 'tolc_canal_abierto_concreto_edad',
        type: 'int'
    }, {
        name: 'tolc_canal_abierto_mamposteria_longitud',
        type: 'int'
    }, {
        name: 'tolc_canal_abierto_mamposteria_edad',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto_tierra_longitud',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto_tierra_edad',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto_concreto_longitud',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto_concreto_edad',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto_mamposteria_longitud',
        type: 'int'
    }, {
        name: 'tolc_canal_cubierto_mamposteria_edad',
        type: 'int'
    }])
});

acu_conduccionaguacruda_datastore.load({
    callback: function(){
        var registro = acu_conduccionaguacruda_datastore.getAt(0);
        form_acu_conduccionaguacruda.getForm().loadRecord(registro);
    }
});

form_acu_conduccionaguacruda.add({
    xtype: 'fieldset',
    title: 'Línea de conducción de agua cruda',
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            items: [tolc_canal_abierto]
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
            }, tolc_canal_abierto_tierra_longitud, tolc_canal_abierto_concreto_longitud, tolc_canal_abierto_mamposteria_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tolc_canal_abierto_tierra_edad, tolc_canal_abierto_concreto_edad, tolc_canal_abierto_mamposteria_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            items: [tolc_canal_cubierto]
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
            }, tolc_canal_cubierto_tierra_longitud, tolc_canal_cubierto_concreto_longitud, tolc_canal_cubierto_mamposteria_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tolc_canal_cubierto_tierra_edad, tolc_canal_cubierto_concreto_edad, tolc_canal_cubierto_mamposteria_edad]
        }]
    }]
});

//form_acu_conduccionaguacruda.render('div_form_acu_conduccionaguacruda');
