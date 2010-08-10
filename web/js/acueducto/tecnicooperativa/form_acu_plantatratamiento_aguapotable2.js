var form_acu_plantatratamiento_aguapotable2 = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable2-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_plantatratamiento_aguapotable2.getForm().submit({
                url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'subirDatos2'),
                clientValidation: false
            });
            form_acu_plantatratamiento_aguapotable.show();
            form_acu_plantatratamiento_aguapotable2.hide();
            //            tecnicooperativa_acueducto_tabpanel.setActiveTab(6);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_plantatratamiento_aguapotable2.getForm().submit({
                url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'subirDatos2'),
                clientValidation: false
            });
            form_acu_plantatratamiento_aguapotable2.hide();
            form_acu_plantatratamiento_aguapotable3.show();
            //            tecnicooperativa_acueducto_tabpanel.setActiveTab(8);
        }
    }]
});

var topla_tecnologia_utilizada_fime = {
    xtype: "checkbox",
    inputValue: 1,
    id: "topla_tecnologia_utilizada_fime",
    name: "topla_tecnologia_utilizada_fime",
    fieldLabel: "Filtración en múltiples etapas(FiME)",
    items: [{
        name: 'topla_tecnologia_utilizada_fime',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            Ext.getCmp('topla_fime_fgdi').setDisabled(!checked);
            Ext.getCmp('topla_fime_fgac').setDisabled(!checked);
            Ext.getCmp('topla_fime_fgas2').setDisabled(!checked);
            Ext.getCmp('topla_fime_fgas3').setDisabled(!checked);
            Ext.getCmp('topla_fime_fla').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_tecnologia_utilizada_fime')).getEl(),
                title: 'Titulo topla_tecnologia_utilizada_fime',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_tecnologia_utilizada_fime',
                trackMouse: true
            });
        }
    }
}

var topla_fime_fgdi = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_fime_fgdi",
    name: "topla_fime_fgdi",
    fieldLabel: "Filtro grueso dinámico(FGDi)",
    items: [{
        name: 'topla_fime_fgdi',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_fime_fgdi')).getEl(),
                title: 'Titulo topla_fime_fgdi',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_fime_fgdi',
                trackMouse: true
            });
        }
    }
}

var topla_fime_fgac = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_fime_fgac",
    name: "topla_fime_fgac",
    fieldLabel: "Filtro grueso ascendente en capas(FGAC)",
    items: [{
        name: 'topla_fime_fgac',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_fime_fgac')).getEl(),
                title: 'Titulo topla_fime_fgac',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_fime_fgac',
                trackMouse: true
            });
        }
    }
}

var topla_fime_fgas2 = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_fime_fgas2",
    name: "topla_fime_fgas2",
    fieldLabel: "Filtro grueso ascendente en serie de 2 etapas(FGAS2)",
    items: [{
        name: 'topla_fime_fgas2',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_fime_fgas2')).getEl(),
                title: 'Titulo topla_fime_fgas2',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_fime_fgas2',
                trackMouse: true
            });
        }
    }
}

var topla_fime_fgas3 = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_fime_fgas3",
    name: "topla_fime_fgas3",
    fieldLabel: "Filtro grueso ascendente en serie de 3 etapas(FGAS3)",
    anchor: '100%',
    items: [{
        name: 'topla_fime_fgas3',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_fime_fgas3')).getEl(),
                title: 'Titulo topla_fime_fgas3',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_fime_fgas3',
                trackMouse: true
            });
        }
    }
}

var topla_fime_fla = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_fime_fla",
    name: "topla_fime_fla",
    fieldLabel: "Filtración lenta en arena(FLA)",
    items: [{
        name: 'topla_fime_fla',
        inputValue: 1,
        hiddenLabel: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_fime_fla')).getEl(),
                title: 'Titulo topla_fime_fla',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_fime_fla',
                trackMouse: true
            });
        }
    }
}

var topla_tecnologia_utilizada_rhm = {
    xtype: "checkbox",
    inputValue: 1,
    id: "topla_tecnologia_utilizada_rhm",
    name: "topla_tecnologia_utilizada_rhm",
    fieldLabel: "Remoción de hierro y manganeso",
    items: [{
        name: 'topla_tecnologia_utilizada_rhm',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            Ext.getCmp('topla_rhm_bandejas_cascadas').setDisabled(!checked);
            Ext.getCmp('topla_rhm_aspersores').setDisabled(!checked);
            Ext.getCmp('topla_rhm_sd').setDisabled(!checked);
            Ext.getCmp('topla_rhm_fr').setDisabled(!checked);
            Ext.getCmp('topla_rhm_fime').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_tecnologia_utilizada_rhm')).getEl(),
                title: 'Titulo topla_tecnologia_utilizada_rhm',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_tecnologia_utilizada_rhm',
                trackMouse: true
            });
        }
    }
}

var topla_rhm_bandejas_cascadas = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_rhm_bandejas_cascadas",
    name: "topla_rhm_bandejas_cascadas",
    fieldLabel: "Bandejas o cascadas",
    items: [{
        name: 'topla_rhm_bandejas_cascadas',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_rhm_bandejas_cascadas')).getEl(),
                title: 'Titulo topla_rhm_bandejas_cascadas',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_rhm_bandejas_cascadas',
                trackMouse: true
            });
        }
    }
}

var topla_rhm_aspersores = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_rhm_aspersores",
    name: "topla_rhm_aspersores",
    fieldLabel: "Aspersores",
    items: [{
        name: 'topla_rhm_aspersores',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_rhm_aspersores')).getEl(),
                title: 'Titulo topla_rhm_aspersores',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_rhm_aspersores',
                trackMouse: true
            });
        }
    }
}

var topla_rhm_sd = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_rhm_sd",
    name: "topla_rhm_sd",
    fieldLabel: "Sedimentación(SD)",
    items: [{
        name: 'topla_rhm_sd',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_rhm_sd')).getEl(),
                title: 'Titulo topla_rhm_sd',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_rhm_sd',
                trackMouse: true
            });
        }
    }
}

var topla_rhm_fr = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_rhm_fr",
    name: "topla_rhm_fr",
    fieldLabel: "Filtración rápida(FR)",
    items: [{
        name: 'topla_rhm_fr',
        inputValue: 1,
        hiddenLabel: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_rhm_fr')).getEl(),
                title: 'Titulo topla_rhm_fr',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_rhm_fr',
                trackMouse: true
            });
        }
    }
}

var topla_rhm_fime = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_rhm_fime",
    name: "topla_rhm_fime",
    fieldLabel: "Filtración en múltiples etapas(FIME)",
    items: [{
        name: 'topla_rhm_fime',
        inputValue: 1,
        hiddenLabel: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_rhm_fime')).getEl(),
                title: 'Titulo topla_rhm_fime',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_rhm_fime',
                trackMouse: true
            });
        }
    }
}

var acu_plantatratamiento_datastore2 = new Ext.data.Store({
    id: 'acu_plantatratamiento_datastore2',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'topla_tecnologia_utilizada_fime',
        type: 'int'
    }, {
        name: 'topla_fime_fgdi',
        type: 'int'
    }, {
        name: 'topla_fime_fgac',
        type: 'int'
    }, {
        name: 'topla_fime_fgas2',
        type: 'int'
    }, {
        name: 'topla_fime_fgas3',
        type: 'int'
    }, {
        name: 'topla_fime_fla',
        type: 'int'
    }, {
        name: 'topla_tecnologia_utilizada_rhm',
        type: 'int'
    }, {
        name: 'topla_rhm_bandejas_cascadas',
        type: 'int'
    }, {
        name: 'topla_rhm_aspersores',
        type: 'int'
    }, {
        name: 'topla_rhm_sd',
        type: 'int'
    }, {
        name: 'topla_rhm_fr',
        type: 'int'
    }, {
        name: 'topla_rhm_fime',
        type: 'int'
    }])
});

acu_plantatratamiento_datastore2.load({
    callback: function(){
        var registro = acu_plantatratamiento_datastore2.getAt(0);
        form_acu_plantatratamiento_aguapotable2.getForm().loadRecord(registro);
    }
});

form_acu_plantatratamiento_aguapotable2.add({
    xtype: 'fieldset',
    title: 'Planta de tratamiento de agua potable',
    labelWidth: 200,
    height: 330,
    items: [{
        xtype: 'label',
        labelSeparator: '',
        fieldLabel: '<b>TECNOLOGÍA UTILIZADA</b>'
    }, {
        layout: 'column',
        labelWidth: 200,
        height: 125,
        items: [{
            layout: 'form',
            items: [topla_tecnologia_utilizada_fime]
        }, {
            layout: 'form',
            labelWidth: 320,
            bodyStyle: 'padding-left: 50px;',
            items: [topla_fime_fgdi, topla_fime_fgac, topla_fime_fgas2, topla_fime_fgas3, topla_fime_fla]
        }]
    }, {
        layout: 'column',
        labelWidth: 200,
        items: [{
            layout: 'form',
            items: [topla_tecnologia_utilizada_rhm]
        }, {
            layout: 'form',
            labelWidth: 200,
            bodyStyle: 'padding-left: 50px;',
            items: [topla_rhm_bandejas_cascadas, topla_rhm_aspersores, topla_rhm_sd, topla_rhm_fr, topla_rhm_fime]
        }]
    }]
});

//form_acu_plantatratamiento_aguapotable2.render('div_form_acu_plantatratamiento_aguapotable2');
