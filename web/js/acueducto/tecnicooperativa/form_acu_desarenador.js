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
    id: "todes_bypass",
    name: "todes_bypass",
    labelSeparator: '',
    fieldLabel: "¿Presencia de Bypass para mantenimiento?",
    items: [{
        name: 'todes_bypass',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'todes_bypass',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('todes_bypass')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: '¿Presencia de Bypass para mantenimiento?',
                trackMouse: true
            });
        }
    }
}

var todes_valvula = {
    xtype: "radiogroup",
    id: "todes_valvula",
    name: "todes_valvula",
    labelSeparator: '',
    fieldLabel: "¿Presencia de válvula y desagüe de salida de sólidos?",
    items: [{
        name: 'todes_valvula',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'todes_valvula',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('todes_valvula')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: '¿Presencia de válvula y desagüe de salida de sólidos?',
                trackMouse: true
            });
        }
    }
}

var todes_aguas_erosion = {
    xtype: "radiogroup",
    id: "todes_aguas_erosion",
    name: "todes_aguas_erosion",
    labelSeparator: '',
    fieldLabel: "¿Las aguas de rebose y desagüe causan erosión?",
    items: [{
        name: 'todes_aguas_erosion',
        boxLabel: 'Si',
        inputValue: 1
    }, {
        name: 'todes_aguas_erosion',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('todes_aguas_erosion')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: '¿Las aguas de rebose y desagüe causan erosión?',
                trackMouse: true
            });
        }
    }
}

var acu_desarenador_datastore = new Ext.data.Store({
    id: 'acu_desarenador_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_desarenador', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'todes_valvula',
        type: 'int'
    }, {
        name: 'todes_bypass',
        type: 'int'
    }, {
        name: 'todes_aguas_erosion',
        type: 'int'
    }])
});

acu_desarenador_datastore.load({
    callback: function(){
        var registro = acu_desarenador_datastore.getAt(0);
        form_acu_desarenador.getForm().loadRecord(registro);
    }
});

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
