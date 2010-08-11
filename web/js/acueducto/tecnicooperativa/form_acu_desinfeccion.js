var form_acu_desinfeccion = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable3-form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_desinfeccion.getForm().submit({
                url: getAbsoluteUrl('acueducto_desinfeccion', 'subirDatos'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(5);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_desinfeccion.getForm().submit({
                url: getAbsoluteUrl('acueducto_desinfeccion', 'subirDatos'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(7);
        }
    }]
});

var toda_desinfeccion = {
    xtype: "checkbox",
    inputValue: 1,
    id: "toda_desinfeccion",
    name: "toda_desinfeccion",
    fieldLabel: "Existencia del proceso de desinfección",
    items: [{
        name: 'toda_desinfeccion',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            Ext.getCmp('toda_desinfeccion_cloro').setDisabled(!checked);
            Ext.getCmp('toda_desinfeccion_hipoclorito_sodio').setDisabled(!checked);
            Ext.getCmp('toda_desinfeccion_hipoclorito_calcio').setDisabled(!checked);
            Ext.getCmp('toda_desinfeccion_ozonacion').setDisabled(!checked);
            Ext.getCmp('toda_desinfeccion_rayos_ultravioleta').setDisabled(!checked);
            Ext.getCmp('toda_desinfeccion_dioxido_cloro').setDisabled(!checked);
        },
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: '¿Existencia del proceso de desinfección?',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_cloro = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "toda_desinfeccion_cloro",
    name: "toda_desinfeccion_cloro",
    fieldLabel: "Cloro gaseoso",
    items: [{
        name: 'toda_desinfeccion_cloro',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion_cloro')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Cloro gaseoso',
                trackMouse: true
            });
        }
    }
}


var toda_desinfeccion_hipoclorito_sodio = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "toda_desinfeccion_hipoclorito_sodio",
    name: "toda_desinfeccion_hipoclorito_sodio",
    fieldLabel: "Hipoclorito de sodio",
    items: [{
        name: 'toda_desinfeccion_hipoclorito_sodio',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion_hipoclorito_sodio')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Hipoclorito de sodio',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_hipoclorito_calcio = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "toda_desinfeccion_hipoclorito_calcio",
    name: "toda_desinfeccion_hipoclorito_calcio",
    fieldLabel: "Hipoclorito de calcio",
    items: [{
        name: 'toda_desinfeccion_hipoclorito_calcio',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion_hipoclorito_calcio')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Hipoclorito de calcio',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_ozonacion = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "toda_desinfeccion_ozonacion",
    name: "toda_desinfeccion_ozonacion",
    fieldLabel: "Ozonación",
    items: [{
        name: 'toda_desinfeccion_ozonacion',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion_ozonacion')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Ozonación',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_rayos_ultravioleta = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "toda_desinfeccion_rayos_ultravioleta",
    name: "toda_desinfeccion_rayos_ultravioleta",
    fieldLabel: "Rayos ultravioleta",
    items: [{
        name: 'toda_desinfeccion_rayos_ultravioleta',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion_rayos_ultravioleta')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Rayos ultravioleta',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_dioxido_cloro = {
    xtype: "checkbox",
    inputValue: 1,
    disabled: true,
    id: "toda_desinfeccion_dioxido_cloro",
    name: "toda_desinfeccion_dioxido_cloro",
    fieldLabel: "Dióxido de cloro",
    items: [{
        name: 'toda_desinfeccion_dioxido_cloro',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion_dioxido_cloro')).getEl(),
                title: 'Ayuda rápida',
                anchor: 'top',
                html: 'Dióxido de cloro',
                trackMouse: true
            });
        }
    }
}

var acu_desinfeccion_datastore = new Ext.data.Store({
    id: 'acu_desinfeccion_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_desinfeccion', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'toda_desinfeccion',
        type: 'int'
    }, {
        name: 'toda_desinfeccion_cloro',
        type: 'int'
    }, {
        name: 'toda_desinfeccion_hipoclorito_sodio',
        type: 'int'
    }, {
        name: 'toda_desinfeccion_hipoclorito_calcio',
        type: 'int'
    }, {
        name: 'toda_desinfeccion_ozonacion',
        type: 'int'
    }, {
        name: 'toda_desinfeccion_rayos_ultravioleta',
        type: 'int'
    }, {
        name: 'toda_desinfeccion_dioxido_cloro',
        type: 'int'
    }])
});

acu_desinfeccion_datastore.load({
    callback: function(){
        var registro = acu_desinfeccion_datastore.getAt(0);
        form_acu_desinfeccion.getForm().loadRecord(registro);
    }
});

form_acu_desinfeccion.add({
    xtype: 'fieldset',
    title: 'Desinfección',
    labelWidth: 300,
    height: 330,
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            labelWidth: 230,
            bodyStyle: 'padding-right: 50px',
            items: [toda_desinfeccion]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [toda_desinfeccion_cloro, toda_desinfeccion_hipoclorito_sodio, toda_desinfeccion_hipoclorito_calcio, toda_desinfeccion_ozonacion, toda_desinfeccion_rayos_ultravioleta, toda_desinfeccion_dioxido_cloro]
        }]
    }]
});

form_acu_desinfeccion.render('div_form_acu_desinfeccion');
