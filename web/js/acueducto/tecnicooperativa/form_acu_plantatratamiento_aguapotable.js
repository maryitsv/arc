var form_acu_plantatratamiento_aguapotable = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable-form',
    width: 840,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(5);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(7);
        }
    }]
});

var topla_tecnologia_utilizada_cc = {
    xtype: "checkboxgroup",
    id: "topla_tecnologia_utilizada_cc",
    name: "topla_tecnologia_utilizada_cc",
    fieldLabel: "Ciclo completo",
    items: [{
        name: 'topla_tecnologia_utilizada_cc',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_tecnologia_utilizada_cc')).getEl(),
                title: 'Titulo topla_tecnologia_utilizada_cc',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_tecnologia_utilizada_cc',
                trackMouse: true
            });
        }
    }
}

var topla_ciclo_completo_mr = {
    xtype: "checkboxgroup",
    id: "topla_ciclo_completo_mr",
    name: "topla_ciclo_completo_mr",
    fieldLabel: "Coagulación y mezcla rápida(MR)",
    items: [{
        name: 'topla_ciclo_completo_mr',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_ciclo_completo_mr')).getEl(),
                title: 'Titulo topla_ciclo_completo_mr',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_ciclo_completo_mr',
                trackMouse: true
            });
        }
    }
}

var topla_ciclo_completo_flh = {
    xtype: "checkboxgroup",
    id: "topla_ciclo_completo_flh",
    name: "topla_ciclo_completo_flh",
    fieldLabel: "Floculación hidraúlica(FLH)",
    items: [{
        name: 'topla_ciclo_completo_flh',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_ciclo_completo_flh')).getEl(),
                title: 'Titulo topla_ciclo_completo_flh',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_ciclo_completo_flh',
                trackMouse: true
            });
        }
    }
}

var topla_ciclo_completo_flm = {
    xtype: "checkboxgroup",
    id: "topla_ciclo_completo_flm",
    name: "topla_ciclo_completo_flm",
    fieldLabel: "Floculación mecánica(FLM)",
    items: [{
        name: 'topla_ciclo_completo_flm',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_ciclo_completo_flm')).getEl(),
                title: 'Titulo topla_ciclo_completo_flm',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_ciclo_completo_flm',
                trackMouse: true
            });
        }
    }
}

var topla_ciclo_completo_sd = {
    xtype: "checkboxgroup",
    id: "topla_ciclo_completo_sd",
    name: "topla_ciclo_completo_sd",
    fieldLabel: "Sedimentación(SD)",
    anchor: '100%',
    items: [{
        name: 'topla_ciclo_completo_sd',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_ciclo_completo_sd')).getEl(),
                title: 'Titulo topla_ciclo_completo_sd',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_ciclo_completo_sd',
                trackMouse: true
            });
        }
    }
}

var topla_ciclo_completo_fr = {
    xtype: "checkboxgroup",
    id: "topla_ciclo_completo_fr",
    name: "topla_ciclo_completo_fr",
    fieldLabel: "Filtración rápida(FR)",
    items: [{
        name: 'topla_ciclo_completo_fr',
        inputValue: 1,
        hiddenLabel: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_ciclo_completo_fr')).getEl(),
                title: 'Titulo topla_ciclo_completo_fr',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_ciclo_completo_fr',
                trackMouse: true
            });
        }
    }
}

var topla_tecnologia_utilizada_fd = {
    xtype: "checkboxgroup",
    id: "topla_tecnologia_utilizada_fd",
    name: "topla_tecnologia_utilizada_fd",
    fieldLabel: "Filtración directa",
    items: [{
        name: 'topla_tecnologia_utilizada_fd',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_tecnologia_utilizada_fd')).getEl(),
                title: 'Titulo topla_tecnologia_utilizada_fd',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_tecnologia_utilizada_fd',
                trackMouse: true
            });
        }
    }
}

var topla_filtracion_directa_mr = {
    xtype: "checkboxgroup",
    id: "topla_filtracion_directa_mr",
    name: "topla_filtracion_directa_mr",
    fieldLabel: "Coagulación y mezcla rápida(MR)",
    items: [{
        name: 'topla_filtracion_directa_mr',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_filtracion_directa_mr')).getEl(),
                title: 'Titulo topla_filtracion_directa_mr',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_filtracion_directa_mr',
                trackMouse: true
            });
        }
    }
}

var topla_filtracion_directa_flh = {
    xtype: "checkboxgroup",
    id: "topla_filtracion_directa_flh",
    name: "topla_filtracion_directa_flh",
    fieldLabel: "Floculación hidraúlica(FLH)",
    items: [{
        name: 'topla_filtracion_directa_flh',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_filtracion_directa_flh')).getEl(),
                title: 'Titulo topla_filtracion_directa_flh',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_filtracion_directa_flh',
                trackMouse: true
            });
        }
    }
}

var topla_filtracion_directa_flm = {
    xtype: "checkboxgroup",
    id: "topla_filtracion_directa_flm",
    name: "topla_filtracion_directa_flm",
    fieldLabel: "Floculación mecánica(FLM)",
    items: [{
        name: 'topla_filtracion_directa_flm',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_filtracion_directa_flm')).getEl(),
                title: 'Titulo topla_filtracion_directa_flm',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_filtracion_directa_flm',
                trackMouse: true
            });
        }
    }
}

var topla_filtracion_directa_fr = {
    xtype: "checkboxgroup",
    id: "topla_filtracion_directa_fr",
    name: "topla_filtracion_directa_fr",
    fieldLabel: "Filtración rápida(FR)",
    items: [{
        name: 'topla_filtracion_directa_fr',
        inputValue: 1,
        hiddenLabel: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_filtracion_directa_fr')).getEl(),
                title: 'Titulo topla_filtracion_directa_fr',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_filtracion_directa_fr',
                trackMouse: true
            });
        }
    }
}

var topla_tecnologia_utilizada_pc = {
    xtype: "checkboxgroup",
    id: "topla_tecnologia_utilizada_pc",
    name: "topla_tecnologia_utilizada_pc",
    fieldLabel: "Planta compacta",
    items: [{
        name: 'topla_tecnologia_utilizada_pc',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_tecnologia_utilizada_pc')).getEl(),
                title: 'Titulo topla_tecnologia_utilizada_pc',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_tecnologia_utilizada_pc',
                trackMouse: true
            });
        }
    }
}

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

form_acu_plantatratamiento_aguapotable.render('div_form_acu_plantatratamiento_aguapotable');
