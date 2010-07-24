var form_acu_aduccionimpulsion = new Ext.form.FormPanel({
    id: 'tecnicooperativaaduccionimpulsion-form',
    width: 840,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(2);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(4);
        }
    }]
});

var toai_canal_abierto = {
    xtype: "checkboxgroup",
    tabIndex: 18,
    id: "toai_canal_abierto",
    name: "toai_canal_abierto",
    fieldLabel: "Canal abierto",
    items: [{
        name: 'toai_canal_abierto',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_abierto')).getEl(),
                title: 'Titulo toai_canal_abierto',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_tierra_longitud = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_abierto_tierra_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto_tierra_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_tierra_edad = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_abierto_tierra_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto_tierra_edad',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_concreto_longitud = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_abierto_concreto_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto_concreto_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_concreto_edad = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_abierto_concreto_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto_concreto_edad',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_mamposteria_longitud = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_abierto_mamposteria_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto_mamposteria_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_abierto_mamposteria_edad = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_abierto_mamposteria_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_abierto_mamposteria_edad',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto = {
    xtype: "checkboxgroup",
    tabIndex: 18,
    id: "toai_canal_cubierto",
    name: "toai_canal_cubierto",
    fieldLabel: "Canal cubierto",
    items: [{
        name: 'toai_canal_cubierto',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_canal_cubierto')).getEl(),
                title: 'Titulo toai_canal_cubierto',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_tierra_longitud = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_cubierto_tierra_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto_tierra_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_tierra_edad = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_cubierto_tierra_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto_tierra_edad',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_concreto_longitud = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_cubierto_concreto_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto_concreto_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_concreto_edad = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_cubierto_concreto_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto_concreto_edad',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_mamposteria_longitud = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_cubierto_mamposteria_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto_mamposteria_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_canal_cubierto_mamposteria_edad = {
    xtype: "textfield",
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
                title: 'Titulo toai_canal_cubierto_mamposteria_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_canal_cubierto_mamposteria_edad',
                trackMouse: true
            });
        }
    }
}

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

form_acu_aduccionimpulsion.render('div_form_acu_aduccionimpulsion');
