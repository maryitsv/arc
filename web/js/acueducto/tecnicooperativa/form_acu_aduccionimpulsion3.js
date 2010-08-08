var form_acu_aduccionimpulsion3 = new Ext.form.FormPanel({
    id: 'tecnicooperativaaduccionimpulsion3-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_aduccionimpulsion3.getForm().submit({
                url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'subirDatos3'),
                clientValidation: false
            });
            //            tecnicooperativa_acueducto_tabpanel.setActiveTab(3);
            form_acu_aduccionimpulsion2.show();
            form_acu_aduccionimpulsion3.hide();
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_aduccionimpulsion3.getForm().submit({
                url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'subirDatos3'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(4);
        }
    }]
});

var toai_otro = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "toai_otro",
    name: "toai_otro",
    fieldLabel: "Otro tipo",
    items: [{
        name: 'toai_otro',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toai_otro_tipo_nombre').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('toai_otro_otro1_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro1_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro1_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro1_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro2_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro2_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro2_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro2_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro3_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro3_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro3_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('toai_otro_otro3_nombre').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro')).getEl(),
                title: 'Titulo toai_otro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro',
                trackMouse: true
            });
        }
    }
}

var toai_otro_tipo_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_tipo_nombre",
    name: "toai_otro_tipo_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_tipo_nombre')).getEl(),
                title: 'Titulo toai_otro_tipo_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_tipo_nombre',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro1_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro1_longitud",
    name: "toai_otro_otro1_longitud",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro1_longitud')).getEl(),
                title: 'Titulo toai_otro_otro1_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro1_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro1_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro1_diametro",
    name: "toai_otro_otro1_diametro",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro1_diametro')).getEl(),
                title: 'Titulo toai_otro_otro1_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro1_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro1_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro1_edad",
    name: "toai_otro_otro1_edad",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro1_edad')).getEl(),
                title: 'Titulo toai_otro_otro1_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro1_edad',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro1_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro1_nombre",
    name: "toai_otro_otro1_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro1_nombre')).getEl(),
                title: 'Titulo toai_otro_otro1_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro1_nombre',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro2_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro2_longitud",
    name: "toai_otro_otro2_longitud",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro2_longitud')).getEl(),
                title: 'Titulo toai_otro_otro2_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro2_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro2_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro2_diametro",
    name: "toai_otro_otro2_diametro",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro2_diametro')).getEl(),
                title: 'Titulo toai_otro_otro2_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro2_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro2_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro2_edad",
    name: "toai_otro_otro2_edad",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro2_edad')).getEl(),
                title: 'Titulo toai_otro_otro2_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro2_edad',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro2_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro2_nombre",
    name: "toai_otro_otro2_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro2_nombre')).getEl(),
                title: 'Titulo toai_otro_otro2_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro2_nombre',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro3_longitud = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro3_longitud",
    name: "toai_otro_otro3_longitud",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro3_longitud')).getEl(),
                title: 'Titulo toai_otro_otro3_longitud',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro3_longitud',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro3_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro3_diametro",
    name: "toai_otro_otro3_diametro",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro3_diametro')).getEl(),
                title: 'Titulo toai_otro_otro3_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro3_diametro',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro3_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro3_edad",
    name: "toai_otro_otro3_edad",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro3_edad')).getEl(),
                title: 'Titulo toai_otro_otro3_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro3_edad',
                trackMouse: true
            });
        }
    }
}

var toai_otro_otro3_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "toai_otro_otro3_nombre",
    name: "toai_otro_otro3_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toai_otro_otro3_nombre')).getEl(),
                title: 'Titulo toai_otro_otro3_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para toai_otro_otro3_nombre',
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
        name: 'toai_otro',
        type: 'int'
    }, {
        name: 'toai_otro_tipo_nombre',
        type: 'string'
    }, {
        name: 'toai_otro_otro1_longitud',
        type: 'int'
    }, {
        name: 'toai_otro_otro1_diametro',
        type: 'int'
    }, {
        name: 'toai_otro_otro1_edad',
        type: 'int'
    }, {
        name: 'toai_otro_otro1_nombre',
        type: 'string'
    }, {
        name: 'toai_otro_otro2_longitud',
        type: 'int'
    }, {
        name: 'toai_otro_otro2_diametro',
        type: 'int'
    }, {
        name: 'toai_otro_otro2_edad',
        type: 'int'
    }, {
        name: 'toai_otro_otro2_nombre',
        type: 'string'
    }, {
        name: 'toai_otro_otro3_longitud',
        type: 'int'
    }, {
        name: 'toai_otro_otro3_diametro',
        type: 'int'
    }, {
        name: 'toai_otro_otro3_edad',
        type: 'int'
    }, {
        name: 'toai_otro_otro3_nombre',
        type: 'string'
    }])
});

acu_aduccionimpulsion2_datastore.load({
    callback: function(){
        var registro = acu_aduccionimpulsion2_datastore.getAt(0);
        form_acu_aduccionimpulsion3.getForm().loadRecord(registro);
    }
});

form_acu_aduccionimpulsion3.add({
    xtype: 'fieldset',
    title: 'Líneas de aducción - impulsión',
    height: 320,
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            //            labelWidth: 60,
            items: [toai_otro, toai_otro_tipo_nombre]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, toai_otro_otro1_nombre, toai_otro_otro2_nombre, toai_otro_otro3_nombre]
        }, {
            layout: 'form',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, toai_otro_otro1_longitud, toai_otro_otro2_longitud, toai_otro_otro3_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, toai_otro_otro1_diametro, toai_otro_otro2_diametro, toai_otro_otro3_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, toai_otro_otro1_edad, toai_otro_otro2_edad, toai_otro_otro3_edad]
        }]
    }]
});

var panel_aduccion_impulsion = new Ext.Panel({
    renderTo: 'div_form_acu_aduccionimpulsion',
    autoWidth: true,
    items: [form_acu_aduccionimpulsion, form_acu_aduccionimpulsion2, form_acu_aduccionimpulsion3]
});

//form_acu_aduccionimpulsion3.render('div_form_acu_aduccionimpulsion3');