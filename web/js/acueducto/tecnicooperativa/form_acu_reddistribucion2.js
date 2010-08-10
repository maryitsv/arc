var form_acu_reddistribucion2 = new Ext.form.FormPanel({
    id: 'tecnicooperativareddistribucion2-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_reddistribucion2.getForm().submit({
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos2'),
                clientValidation: false
            });
            form_acu_reddistribucion.show();
            form_acu_reddistribucion2.hide();
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_reddistribucion2.getForm().submit({
                url: getAbsoluteUrl('acueducto_reddistribucion', 'subirDatos2'),
                clientValidation: false
            });
            form_acu_reddistribucion3.show();
            form_acu_reddistribucion2.hide();
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
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias')).getEl(),
                title: 'Titulo tord_redes_terciarias',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_asbesto_cemento_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_asbesto_cemento_diametro",
    name: "tord_redes_terciarias_asbesto_cemento_diametro",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_asbesto_cemento_diametro')).getEl(),
                title: 'Titulo tord_redes_terciarias_asbesto_cemento_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_asbesto_cemento_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_asbesto_cemento_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_asbesto_cemento_edad",
    name: "tord_redes_terciarias_asbesto_cemento_edad",
    fieldLabel: "En asbesto_cemento",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_asbesto_cemento_edad')).getEl(),
                title: 'Titulo tord_redes_terciarias_asbesto_cemento_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_asbesto_cemento_edad',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_hierro_ductil_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_hierro_ductil_diametro",
    name: "tord_redes_terciarias_hierro_ductil_diametro",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_hierro_ductil_diametro')).getEl(),
                title: 'Titulo tord_redes_terciarias_hierro_ductil_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_hierro_ductil_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_hierro_ductil_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_hierro_ductil_edad",
    name: "tord_redes_terciarias_hierro_ductil_edad",
    fieldLabel: "En hierro_ductil",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_hierro_ductil_edad')).getEl(),
                title: 'Titulo tord_redes_terciarias_hierro_ductil_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_hierro_ductil_edad',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_concreto_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_concreto_diametro",
    name: "tord_redes_terciarias_concreto_diametro",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_concreto_diametro')).getEl(),
                title: 'Titulo tord_redes_terciarias_concreto_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_concreto_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_concreto_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_concreto_edad",
    name: "tord_redes_terciarias_concreto_edad",
    fieldLabel: "En concreto",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_concreto_edad')).getEl(),
                title: 'Titulo tord_redes_terciarias_concreto_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_concreto_edad',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_pvc_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_pvc_diametro",
    name: "tord_redes_terciarias_pvc_diametro",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_pvc_diametro')).getEl(),
                title: 'Titulo tord_redes_terciarias_pvc_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_pvc_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_redes_terciarias_pvc_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_redes_terciarias_pvc_edad",
    name: "tord_redes_terciarias_pvc_edad",
    fieldLabel: "En pvc",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_redes_terciarias_pvc_edad')).getEl(),
                title: 'Titulo tord_redes_terciarias_pvc_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_redes_terciarias_pvc_edad',
                trackMouse: true
            });
        }
    }
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
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera')).getEl(),
                title: 'Titulo tord_manguera',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_polietileno_hd_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_hd_diametro",
    name: "tord_manguera_polietileno_hd_diametro",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_polietileno_hd_diametro')).getEl(),
                title: 'Titulo tord_manguera_polietileno_hd_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_polietileno_hd_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_polietileno_hd_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_hd_edad",
    name: "tord_manguera_polietileno_hd_edad",
    fieldLabel: "En polietileno_hd",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_polietileno_hd_edad')).getEl(),
                title: 'Titulo tord_manguera_polietileno_hd_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_polietileno_hd_edad',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_polietileno_ld_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_ld_diametro",
    name: "tord_manguera_polietileno_ld_diametro",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_polietileno_ld_diametro')).getEl(),
                title: 'Titulo tord_manguera_polietileno_ld_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_polietileno_ld_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_polietileno_ld_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_polietileno_ld_edad",
    name: "tord_manguera_polietileno_ld_edad",
    fieldLabel: "En polietileno_ld",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_polietileno_ld_edad')).getEl(),
                title: 'Titulo tord_manguera_polietileno_ld_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_polietileno_ld_edad',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_otro_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_otro_nombre",
    name: "tord_manguera_otro_nombre",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_otro_nombre')).getEl(),
                title: 'Titulo tord_manguera_otro_nombre',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_otro_nombre',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_otro_diametro = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_otro_diametro",
    name: "tord_manguera_otro_diametro",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_otro_diametro')).getEl(),
                title: 'Titulo tord_manguera_otro_diametro',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_otro_diametro',
                trackMouse: true
            });
        }
    }
}

var tord_manguera_otro_edad = {
    xtype: "textfield",
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tord_manguera_otro_edad",
    name: "tord_manguera_otro_edad",
    fieldLabel: "En otro",
    allowBlank: false,
    hideLabel: true,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tord_manguera_otro_edad')).getEl(),
                title: 'Titulo tord_manguera_otro_edad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tord_manguera_otro_edad',
                trackMouse: true
            });
        }
    }
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

acu_reddistribucion_datastore.load({
    callback: function(){
        var registro = acu_reddistribucion_datastore.getAt(0);
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
