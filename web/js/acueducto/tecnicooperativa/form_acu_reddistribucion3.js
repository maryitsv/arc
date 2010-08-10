var form_acu_reddistribucion3 = new Ext.form.FormPanel({
    id: 'tecnicooperativareddistribucion3-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_reddistribucion3.getForm().submit({
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos3'),
                clientValidation: false
            });
            //            tecnicooperativa_acueducto_tabpanel.setActiveTab(3);
            form_acu_reddistribucion2.show();
            form_acu_reddistribucion3.hide();
        }
    } //    , {
    //        text: 'Siguiente',
    //        handler: function(){
    //            form_acu_reddistribucion3.getForm().submit({
    //                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos3'),
    //                clientValidation: false
    //            });
    //            tecnicooperativa_acueducto_tabpanel.setActiveTab(9);
    //        }
    //    }
    ]
});

var tord_otro = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tord_otro",
    name: "tord_otro",
    fieldLabel: "Otro tipo",
    items: [{
        name: 'tord_otro',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tord_otro_tipo_nombre').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tord_otro_otro1_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro1_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro1_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro2_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro2_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro2_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro3_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro3_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tord_otro_otro3_nombre').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro')).getEl(),
                title: 'Titulo tord_otro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro',
                trackMouse: true
            });
        }
    }
}

var tord_otro_tipo_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_tipo_nombre",
    name: "tord_otro_tipo_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_tipo_nombre')).getEl(),
                title: 'Titulo tord_otro_tipo_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_tipo_nombre',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro1_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro1_diametro",
    name: "tord_otro_otro1_diametro",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro1_diametro')).getEl(),
                title: 'Titulo tord_otro_otro1_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro1_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro1_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro1_edad",
    name: "tord_otro_otro1_edad",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro1_edad')).getEl(),
                title: 'Titulo tord_otro_otro1_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro1_edad',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro1_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro1_nombre",
    name: "tord_otro_otro1_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro1_nombre')).getEl(),
                title: 'Titulo tord_otro_otro1_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro1_nombre',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro2_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro2_diametro",
    name: "tord_otro_otro2_diametro",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro2_diametro')).getEl(),
                title: 'Titulo tord_otro_otro2_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro2_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro2_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro2_edad",
    name: "tord_otro_otro2_edad",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro2_edad')).getEl(),
                title: 'Titulo tord_otro_otro2_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro2_edad',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro2_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro2_nombre",
    name: "tord_otro_otro2_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro2_nombre')).getEl(),
                title: 'Titulo tord_otro_otro2_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro2_nombre',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro3_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro3_diametro",
    name: "tord_otro_otro3_diametro",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro3_diametro')).getEl(),
                title: 'Titulo tord_otro_otro3_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro3_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro3_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro3_edad",
    name: "tord_otro_otro3_edad",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro3_edad')).getEl(),
                title: 'Titulo tord_otro_otro3_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro3_edad',
                trackMouse: true
            });
        }
    }
}

var tord_otro_otro3_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tord_otro_otro3_nombre",
    name: "tord_otro_otro3_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_otro_otro3_nombre')).getEl(),
                title: 'Titulo tord_otro_otro3_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_otro_otro3_nombre',
                trackMouse: true
            });
        }
    }
}

var toa_planos_actualizados = {
    xtype: "radiogroup",
    id: "toa_planos_actualizados",
    name: "toa_planos_actualizados",
    labelSeparator: '',
    fieldLabel: "¿Existen planos actualizados de la red de distribución?",
    width: 100,
    items: [{
        name: 'toa_planos_actualizados',
        boxLabel: 'Si',
        inputValue: 1,
        listeners: {
            check: function(radio, checked){
                var textfield = Ext.getCmp('toa_ano_actualizacion_planos');
                textfield.setDisabled(!checked);
                textfield.focus();
            }
        }
    }, {
        name: 'toa_planos_actualizados',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_planos_actualizados')).getEl(),
                title: 'Titulo toa_planos_actualizados',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_planos_actualizados',
                trackMouse: true
            });
        }
    }
}

var toa_ano_actualizacion_planos = {
    xtype: 'textfield',
    width: 100,
    emptyText: '2010',
    disabled: true,
    tabIndex: 1,
    id: "toa_ano_actualizacion_planos",
    name: "toa_ano_actualizacion_planos",
    allowBlank: false,
    fieldLabel: 'Año de actualización',
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_ano_actualizacion_planos')).getEl(),
                title: 'Titulo toa_ano_actualizacion_planos',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_ano_actualizacion_planos',
                trackMouse: true
            });
        }
    }
}

var acu_reddistribucion3_datastore = new Ext.data.Store({
    id: 'acu_reddistribucion3_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_reddistribucion', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tord_otro',
        type: 'int'
    }, {
        name: 'tord_otro_tipo_nombre',
        type: 'string'
    }, {
        name: 'tord_otro_otro1_diametro',
        type: 'int'
    }, {
        name: 'tord_otro_otro1_edad',
        type: 'int'
    }, {
        name: 'tord_otro_otro1_nombre',
        type: 'string'
    }, {
        name: 'tord_otro_otro2_diametro',
        type: 'int'
    }, {
        name: 'tord_otro_otro2_edad',
        type: 'int'
    }, {
        name: 'tord_otro_otro2_nombre',
        type: 'string'
    }, {
        name: 'tord_otro_otro3_diametro',
        type: 'int'
    }, {
        name: 'tord_otro_otro3_edad',
        type: 'int'
    }, {
        name: 'tord_otro_otro3_nombre',
        type: 'string'
    }, {
        name: 'toa_planos_actualizados',
        type: 'int'
    }, {
        name: 'toa_ano_actualizacion_planos',
        type: 'int'
    }])
});

acu_reddistribucion3_datastore.load({
    callback: function(){
        var registro = acu_reddistribucion3_datastore.getAt(0);
        form_acu_reddistribucion3.getForm().loadRecord(registro);
    }
});

form_acu_reddistribucion3.add({
    xtype: 'fieldset',
    title: 'Red de distribución',
    height: 320,
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            //            labelWidth: 60,
            items: [tord_otro, tord_otro_tipo_nombre]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, tord_otro_otro1_nombre, tord_otro_otro2_nombre, tord_otro_otro3_nombre]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tord_otro_otro1_diametro, tord_otro_otro2_diametro, tord_otro_otro3_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tord_otro_otro1_edad, tord_otro_otro2_edad, tord_otro_otro3_edad]
        }]
    }, {
        layout: 'column',
        items: [{
            layout: 'form',
            labelWidth: 300,
            width: 400,
            items: [toa_planos_actualizados]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [toa_ano_actualizacion_planos]
        }]
    }]
});



var panel_reddistribucion = new Ext.Panel({
    renderTo: 'div_form_acu_reddistribucion',
    autoWidth: true,
    items: [form_acu_reddistribucion, form_acu_reddistribucion2, form_acu_reddistribucion3]
});

//form_acu_reddistribucion3.render('div_form_acu_reddistribucion3');
