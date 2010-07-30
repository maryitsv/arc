var form_acu_desinfeccion = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable3-form',
    autoWidth: true,
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

var toda_desinfeccion = {
    xtype: "checkboxgroup",
    id: "toda_desinfeccion",
    name: "toda_desinfeccion",
    fieldLabel: "Existencia del proceso de desinfección",
    items: [{
        name: 'toda_desinfeccion',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toda_desinfeccion')).getEl(),
                title: 'Titulo toda_desinfeccion',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_cloro = {
    xtype: "checkboxgroup",
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
                title: 'Titulo toda_desinfeccion_cloro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion_cloro',
                trackMouse: true
            });
        }
    }
}


var toda_desinfeccion_hipoclorito_sodio = {
    xtype: "checkboxgroup",
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
                title: 'Titulo toda_desinfeccion_hipoclorito_sodio',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion_hipoclorito_sodio',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_hipoclorito_calcio = {
    xtype: "checkboxgroup",
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
                title: 'Titulo toda_desinfeccion_hipoclorito_calcio',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion_hipoclorito_calcio',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_ozonacion = {
    xtype: "checkboxgroup",
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
                title: 'Titulo toda_desinfeccion_ozonacion',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion_ozonacion',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_rayos_ultravioleta = {
    xtype: "checkboxgroup",
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
                title: 'Titulo toda_desinfeccion_rayos_ultravioleta',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion_rayos_ultravioleta',
                trackMouse: true
            });
        }
    }
}

var toda_desinfeccion_dioxido_cloro = {
    xtype: "checkboxgroup",
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
                title: 'Titulo toda_desinfeccion_dioxido_cloro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toda_desinfeccion_dioxido_cloro',
                trackMouse: true
            });
        }
    }
}

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
            items: [toda_desinfeccion_cloro, toda_desinfeccion_hipoclorito_sodio, toda_desinfeccion_hipoclorito_calcio, toda_desinfeccion_ozonacion, toda_desinfeccion_rayos_ultravioleta]
        }]
    }]
});

form_acu_desinfeccion.render('div_form_acu_desinfeccion');
