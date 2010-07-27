var form_acu_aduccionimpulsion2 = new Ext.form.FormPanel({
    id: 'tecnicooperativaaduccionimpulsion2-form',
    width: 840,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(3);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(5);
        }
    }]
});

var toai_tuberia = {
    xtype: "checkboxgroup",
    tabIndex: 18,
    id: "toai_tuberia",
    name: "toai_tuberia",
    fieldLabel: "Tuberia",
    items: [{
        name: 'toai_tuberia',
        inputValue: 1
    }],
    listeners: {
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
    xtype: "checkboxgroup",
    tabIndex: 18,
    id: "toai_manguera",
    name: "toai_manguera",
    fieldLabel: "Manguera",
    items: [{
        name: 'toai_manguera',
        inputValue: 1
    }],
    listeners: {
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

form_acu_aduccionimpulsion2.render('div_form_acu_aduccionimpulsion2');
