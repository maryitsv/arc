var form_acu_desarenador = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable3-form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_desarenador.getForm().submit({
                url: getAbsoluteUrl('acueducto_desarenador', 'subirDatos'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(3);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_desarenador.getForm().submit({
                url: getAbsoluteUrl('acueducto_desarenador', 'subirDatos'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(5);
        }
    }]
});

var todes_bypass = {
    xtype: "radiogroup",
    id: "topla_todes_bypass",
    name: "topla_todes_bypass",
    labelSeparator: '',
    fieldLabel: "¿Presencia de Bypass para mantenimiento?",
    items: [{
        name: 'topla_todes_bypass',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'topla_todes_bypass',
        boxLabel: 'No',
        inputValue: 2
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_todes_bypass')).getEl(),
                title: 'Titulo topla_todes_bypass',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_todes_bypass',
                trackMouse: true
            });
        }
    }
}

var todes_valvula = {
    xtype: "radiogroup",
    id: "topla_todes_valvula",
    name: "topla_todes_valvula",
    labelSeparator: '',
    fieldLabel: "¿Presencia de válvula y desagüe de salida de sólidos?",
    items: [{
        name: 'topla_todes_valvula',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'topla_todes_valvula',
        boxLabel: 'No',
        inputValue: 2
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_todes_valvula')).getEl(),
                title: 'Titulo topla_todes_valvula',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_todes_valvula',
                trackMouse: true
            });
        }
    }
}

var todes_aguas_erosion = {
    xtype: "radiogroup",
    id: "topla_todes_aguas_erosion",
    name: "topla_todes_aguas_erosion",
    labelSeparator: '',
    fieldLabel: "¿Las aguas de rebose y desagüe causan erosión?",
    items: [{
        name: 'topla_todes_aguas_erosion',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'topla_todes_aguas_erosion',
        boxLabel: 'No',
        inputValue: 2
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('topla_todes_aguas_erosion')).getEl(),
                title: 'Titulo topla_todes_aguas_erosion',
                anchor: 'top',
                html: 'Mensaje de ayuda para topla_todes_aguas_erosion',
                trackMouse: true
            });
        }
    }
}

form_acu_desarenador.add({
    xtype: 'fieldset',
    title: 'Desarenador',
    labelWidth: 300,
    height: 330,
    items: [{
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [todes_valvula]
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [todes_bypass]
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [todes_aguas_erosion]
    }]
});

form_acu_desarenador.render('div_form_acu_desarenador');
