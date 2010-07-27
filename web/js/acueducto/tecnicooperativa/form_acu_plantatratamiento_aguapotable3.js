var form_acu_plantatratamiento_aguapotable3 = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable3-form',
    width: 840,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(7);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(9);
        }
    }]
});

var topla_tecnologia_utilizada_combinacion_tecnologias = {
    xtype: "checkboxgroup",
    id: "topla_tecnologia_utilizada_combinacion_tecnologias",
    name: "topla_tecnologia_utilizada_combinacion_tecnologias",
    fieldLabel: "Combinación de tecnologías",
    items: [{
        name: 'topla_tecnologia_utilizada_combinacion_tecnologias',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_tecnologia_utilizada_combinacion_tecnologias')).getEl(),
                title: 'Titulo topla_tecnologia_utilizada_combinacion_tecnologias',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_tecnologia_utilizada_combinacion_tecnologias',
                trackMouse: true
            });
        }
    }
}

var topla_planta_ttmto_funciona = {
    xtype: "radiogroup",
    id: "topla_topla_planta_ttmto_funciona",
    name: "topla_topla_planta_ttmto_funciona",
    labelSeparator: '',
    fieldLabel: "¿Está funcionando la planta de tratamiento?",
    items: [{
        name: 'topla_topla_planta_ttmto_funciona',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'topla_topla_planta_ttmto_funciona',
        boxLabel: 'No',
        inputValue: 2
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_topla_planta_ttmto_funciona')).getEl(),
                title: 'Titulo topla_topla_planta_ttmto_funciona',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_topla_planta_ttmto_funciona',
                trackMouse: true
            });
        }
    }
}

var topla_estructuras_medicion_cau = {
    xtype: "radiogroup",
    id: "topla_topla_estructuras_medicion_cau",
    name: "topla_topla_estructuras_medicion_cau",
    labelSeparator: '',
    fieldLabel: "¿Hay estructuras de medición de caudal funcionando?",
    items: [{
        name: 'topla_topla_estructuras_medicion_cau',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'topla_topla_estructuras_medicion_cau',
        boxLabel: 'No',
        inputValue: 2
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_topla_estructuras_medicion_cau')).getEl(),
                title: 'Titulo topla_topla_estructuras_medicion_cau',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_topla_estructuras_medicion_cau',
                trackMouse: true
            });
        }
    }
}

var topla_menor_caudal_operacion_diseno = {
    xtype: "radiogroup",
    id: "topla_topla_menor_caudal_operacion_diseno",
    name: "topla_topla_menor_caudal_operacion_diseno",
    labelSeparator: '',
    fieldLabel: "¿El caudal de operación es menor que el caudal de diseño?",
    items: [{
        name: 'topla_topla_menor_caudal_operacion_diseno',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'topla_topla_menor_caudal_operacion_diseno',
        boxLabel: 'No',
        inputValue: 2
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_topla_menor_caudal_operacion_diseno')).getEl(),
                title: 'Titulo topla_topla_menor_caudal_operacion_diseno',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_topla_menor_caudal_operacion_diseno',
                trackMouse: true
            });
        }
    }
}

form_acu_plantatratamiento_aguapotable3.add({
    xtype: 'fieldset',
    title: 'Planta de tratamiento de agua potable',
    labelWidth: 300,
    height: 330,
    items: [{
        xtype: 'label',
        labelSeparator: '',
        fieldLabel: '<b>TECNOLOGÍA UTILIZADA</b>'
    }, {
        layout: 'form',
        labelWidth: 200,
        items: [topla_tecnologia_utilizada_combinacion_tecnologias]
    }, {
        xtype: 'label',
        labelSeparator: '',
        fieldLabel: '<b>ESTADO DE LA PLANTA</b>'
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [topla_planta_ttmto_funciona]
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [topla_estructuras_medicion_cau]
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [topla_menor_caudal_operacion_diseno]
    }]
});

form_acu_plantatratamiento_aguapotable3.render('div_form_acu_plantatratamiento_aguapotable3');
