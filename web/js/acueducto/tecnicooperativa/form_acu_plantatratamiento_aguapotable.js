var form_acu_plantatratamiento_aguapotable = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable-form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_plantatratamiento_aguapotable.getForm().submit({
                url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'subirDatos1'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(4);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_plantatratamiento_aguapotable.getForm().submit({
                url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'subirDatos1'),
                clientValidation: false
            });
            form_acu_plantatratamiento_aguapotable.hide();
            form_acu_plantatratamiento_aguapotable2.show();
        }
    }]
});

var topla_tecnologia_utilizada_cc = {
    xtype: "checkbox",
    inputValue: 1,
    id: "topla_tecnologia_utilizada_cc",
    name: "topla_tecnologia_utilizada_cc",
    fieldLabel: "Ciclo completo",
    items: [{
        name: 'topla_tecnologia_utilizada_cc',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            Ext.getCmp('topla_ciclo_completo_mr').setDisabled(!checked);
            Ext.getCmp('topla_ciclo_completo_flh').setDisabled(!checked);
            Ext.getCmp('topla_ciclo_completo_flm').setDisabled(!checked);
            Ext.getCmp('topla_ciclo_completo_sd').setDisabled(!checked);
            Ext.getCmp('topla_ciclo_completo_fr').setDisabled(!checked);
        }
    }
}

var topla_ciclo_completo_mr = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_ciclo_completo_mr",
    name: "topla_ciclo_completo_mr",
    fieldLabel: "Coagulación y mezcla rápida(MR)",
    items: [{
        name: 'topla_ciclo_completo_mr',
        inputValue: 1
    }]
}

var topla_ciclo_completo_flh = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_ciclo_completo_flh",
    name: "topla_ciclo_completo_flh",
    fieldLabel: "Floculación hidraúlica(FLH)",
    items: [{
        name: 'topla_ciclo_completo_flh',
        inputValue: 1
    }]
}

var topla_ciclo_completo_flm = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_ciclo_completo_flm",
    name: "topla_ciclo_completo_flm",
    fieldLabel: "Floculación mecánica(FLM)",
    items: [{
        name: 'topla_ciclo_completo_flm',
        inputValue: 1
    }]
}

var topla_ciclo_completo_sd = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_ciclo_completo_sd",
    name: "topla_ciclo_completo_sd",
    fieldLabel: "Sedimentación(SD)",
    anchor: '100%',
    items: [{
        name: 'topla_ciclo_completo_sd',
        inputValue: 1
    }]
}

var topla_ciclo_completo_fr = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_ciclo_completo_fr",
    name: "topla_ciclo_completo_fr",
    fieldLabel: "Filtración rápida(FR)",
    items: [{
        name: 'topla_ciclo_completo_fr',
        inputValue: 1,
        hiddenLabel: true
    }]
}

var topla_tecnologia_utilizada_fd = {
    xtype: "checkbox",
    inputValue: 1,
    id: "topla_tecnologia_utilizada_fd",
    name: "topla_tecnologia_utilizada_fd",
    fieldLabel: "Filtración directa",
    items: [{
        name: 'topla_tecnologia_utilizada_fd',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            Ext.getCmp('topla_filtracion_directa_mr').setDisabled(!checked);
            Ext.getCmp('topla_filtracion_directa_flh').setDisabled(!checked);
            Ext.getCmp('topla_filtracion_directa_flm').setDisabled(!checked);
            Ext.getCmp('topla_filtracion_directa_fr').setDisabled(!checked);
        }
    }
}

var topla_filtracion_directa_mr = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_filtracion_directa_mr",
    name: "topla_filtracion_directa_mr",
    fieldLabel: "Coagulación y mezcla rápida(MR)",
    items: [{
        name: 'topla_filtracion_directa_mr',
        inputValue: 1
    }]
}

var topla_filtracion_directa_flh = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_filtracion_directa_flh",
    name: "topla_filtracion_directa_flh",
    fieldLabel: "Floculación hidraúlica(FLH)",
    items: [{
        name: 'topla_filtracion_directa_flh',
        inputValue: 1
    }]
}

var topla_filtracion_directa_flm = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_filtracion_directa_flm",
    name: "topla_filtracion_directa_flm",
    fieldLabel: "Floculación mecánica(FLM)",
    items: [{
        name: 'topla_filtracion_directa_flm',
        inputValue: 1
    }]
}

var topla_filtracion_directa_fr = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "topla_filtracion_directa_fr",
    name: "topla_filtracion_directa_fr",
    fieldLabel: "Filtración rápida(FR)",
    items: [{
        name: 'topla_filtracion_directa_fr',
        inputValue: 1,
        hiddenLabel: true
    }]
}

var topla_tecnologia_utilizada_pc = {
    xtype: "checkbox",
    inputValue: 1,
    id: "topla_tecnologia_utilizada_pc",
    name: "topla_tecnologia_utilizada_pc",
    fieldLabel: "Planta compacta",
    items: [{
        name: 'topla_tecnologia_utilizada_pc',
        inputValue: 1
    }]
}

var acu_plantatratamiento_datastore = new Ext.data.Store({
    id: 'acu_plantatratamiento_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'topla_tecnologia_utilizada_cc',
        type: 'int'
    }, {
        name: 'topla_ciclo_completo_mr',
        type: 'int'
    }, {
        name: 'topla_ciclo_completo_flh',
        type: 'int'
    }, {
        name: 'topla_ciclo_completo_flm',
        type: 'int'
    }, {
        name: 'topla_ciclo_completo_sd',
        type: 'int'
    }, {
        name: 'topla_ciclo_completo_fr',
        type: 'int'
    }, {
        name: 'topla_tecnologia_utilizada_fd',
        type: 'int'
    }, {
        name: 'topla_filtracion_directa_mr',
        type: 'int'
    }, {
        name: 'topla_filtracion_directa_flh',
        type: 'int'
    }, {
        name: 'topla_filtracion_directa_flm',
        type: 'int'
    }, {
        name: 'topla_filtracion_directa_fr',
        type: 'int'
    }, {
        name: 'topla_tecnologia_utilizada_pc',
        type: 'int'
    }])
});

acu_plantatratamiento_datastore.load({
    callback: function(){
        var registro = acu_plantatratamiento_datastore.getAt(0);
        form_acu_plantatratamiento_aguapotable.getForm().loadRecord(registro);
    }
});

form_acu_plantatratamiento_aguapotable.add({
    xtype: 'fieldset',
    title: 'Planta de tratamiento de agua potable',
    labelWidth: 200,
    height: 332,
    items: [{
        xtype: 'label',
        labelSeparator: '',
        fieldLabel: '<b>TECNOLOGÍA UTILIZADA</b>'
    }, {
        layout: 'column',
        labelWidth: 100,
        height: 122,
        items: [{
            layout: 'form',
            items: [topla_tecnologia_utilizada_cc]
        }, {
            layout: 'form',
            labelWidth: 200,
            bodyStyle: 'padding-left: 50px;',
            items: [topla_ciclo_completo_mr, topla_ciclo_completo_flh, topla_ciclo_completo_flm, topla_ciclo_completo_sd, topla_ciclo_completo_fr]
        }]
    }, {
        layout: 'column',
        labelWidth: 100,
        items: [{
            layout: 'form',
            items: [topla_tecnologia_utilizada_fd, {
                layout: 'form',
                bodyStyle: 'padding-top: 80px',
                items: [topla_tecnologia_utilizada_pc]
            }]
        }, {
            layout: 'form',
            labelWidth: 200,
            bodyStyle: 'padding-left: 50px;',
            items: [topla_filtracion_directa_mr, topla_filtracion_directa_flh, topla_filtracion_directa_flm, topla_filtracion_directa_fr]
        }]
    }]
});

//form_acu_plantatratamiento_aguapotable.render('div_form_acu_plantatratamiento_aguapotable');
