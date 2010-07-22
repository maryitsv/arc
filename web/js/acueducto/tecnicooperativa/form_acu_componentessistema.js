var tecnicooperativacomponentessistema_form = new Ext.form.FormPanel({
    id: 'tecnicooperativacomponentessistema-form',
    width: 840,
    height: 380,
    frame: true,
    //    anchor: '100%',
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(0);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(2);
        }
    }]
});

var tocs_captacion = {
    xtype: "checkboxgroup",
    tabIndex: 2,
    id: "tocs_captacion",
    name: "tocs_captacion",
    fieldLabel: "Captación",
    items: [{
    
        name: 'tocs_captacion',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_captacion')).getEl(),
                title: 'Titulo tocs_captacion',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_captacion',
                trackMouse: true
            });
        }
    }
}

var tocs_captacion_cantidad = {
    xtype: "textfield",
    tabIndex: 3,
    id: "tocs_captacion_cantidad",
    name: "tocs_captacion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_captacion_cantidad')).getEl(),
                title: 'Titulo tocs_captacion_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_captacion_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_aduccion = {
    xtype: "checkboxgroup",
    tabIndex: 4,
    id: "tocs_aduccion",
    name: "tocs_aduccion",
    fieldLabel: "Aducción",
    items: [{
    
        name: 'tocs_aduccion',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_aduccion')).getEl(),
                title: 'Titulo tocs_aduccion',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_aduccion',
                trackMouse: true
            });
        }
    }
}

var tocs_aduccion_cantidad = {
    xtype: "textfield",
    tabIndex: 5,
    id: "tocs_aduccion_cantidad",
    name: "tocs_aduccion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_aduccion_cantidad')).getEl(),
                title: 'Titulo tocs_aduccion_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_aduccion_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_desarenador = {
    xtype: "checkboxgroup",
    tabIndex: 6,
    id: "tocs_desarenador",
    name: "tocs_desarenador",
    fieldLabel: "Desarenador",
    items: [{
    
        name: 'tocs_desarenador',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_desarenador')).getEl(),
                title: 'Titulo tocs_desarenador',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_desarenador',
                trackMouse: true
            });
        }
    }
}

var tocs_desarenador_cantidad = {
    xtype: "textfield",
    tabIndex: 7,
    id: "tocs_desarenador_cantidad",
    name: "tocs_desarenador_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_desarenador_cantidad')).getEl(),
                title: 'Titulo tocs_desarenador_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_desarenador_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_conduccion_agua_cruda = {
    xtype: "checkboxgroup",
    tabIndex: 8,
    id: "tocs_conduccion_agua_cruda",
    name: "tocs_conduccion_agua_cruda",
    fieldLabel: "Conduccion de agua cruda",
    items: [{
    
        name: 'tocs_conduccion_agua_cruda',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_conduccion_agua_cruda')).getEl(),
                title: 'Titulo tocs_conduccion_agua_cruda',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_conduccion_agua_cruda',
                trackMouse: true
            });
        }
    }
}

var tocs_conduccion_agua_cruda_cantidad = {
    xtype: "textfield",
    tabIndex: 9,
    id: "tocs_conduccion_agua_cruda_cantidad",
    name: "tocs_conduccion_agua_cruda_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_conduccion_agua_cruda_cantidad')).getEl(),
                title: 'Titulo tocs_conduccion_agua_cruda_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_conduccion_agua_cruda_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_planta_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 10,
    id: "tocs_planta_tratamiento",
    name: "tocs_planta_tratamiento",
    fieldLabel: "Planta de tratamiento",
    items: [{
    
        name: 'tocs_planta_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_planta_tratamiento')).getEl(),
                title: 'Titulo tocs_planta_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_planta_tratamiento',
                trackMouse: true
            });
        }
    }
}

var tocs_planta_tratamiento_cantidad = {
    xtype: "textfield",
    tabIndex: 11,
    id: "tocs_planta_tratamiento_cantidad",
    name: "tocs_planta_tratamiento_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_planta_tratamiento_cantidad')).getEl(),
                title: 'Titulo tocs_planta_tratamiento_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_planta_tratamiento_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_desinfeccion = {
    xtype: "checkboxgroup",
    tabIndex: 12,
    id: "tocs_desinfeccion",
    name: "tocs_desinfeccion",
    fieldLabel: "Desinfección",
    items: [{
    
        name: 'tocs_desinfeccion',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_desinfeccion')).getEl(),
                title: 'Titulo tocs_desinfeccion',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_desinfeccion',
                trackMouse: true
            });
        }
    }
}

var tocs_desinfeccion_cantidad = {
    xtype: "textfield",
    tabIndex: 13,
    id: "tocs_desinfeccion_cantidad",
    name: "tocs_desinfeccion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_desinfeccion_cantidad')).getEl(),
                title: 'Titulo tocs_desinfeccion_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_desinfeccion_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_tanque_almacenamiento = {
    xtype: "checkboxgroup",
    tabIndex: 14,
    id: "tocs_tanque_almacenamiento",
    name: "tocs_tanque_almacenamiento",
    fieldLabel: "Tanque de almacenamiento",
    items: [{
    
        name: 'tocs_tanque_almacenamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_tanque_almacenamiento')).getEl(),
                title: 'Titulo tocs_tanque_almacenamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_tanque_almacenamiento',
                trackMouse: true
            });
        }
    }
}

var tocs_tanque_almacenamiento_cantidad = {
    xtype: "textfield",
    tabIndex: 15,
    id: "tocs_tanque_almacenamiento_cantidad",
    name: "tocs_tanque_almacenamiento_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_tanque_almacenamiento_cantidad')).getEl(),
                title: 'Titulo tocs_tanque_almacenamiento_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_tanque_almacenamiento_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_conduccion_agua_tratada = {
    xtype: "checkboxgroup",
    tabIndex: 16,
    id: "tocs_conduccion_agua_tratada",
    name: "tocs_conduccion_agua_tratada",
    fieldLabel: "Conduccion de agua tratada",
    items: [{
    
        name: 'tocs_conduccion_agua_tratada',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_conduccion_agua_tratada')).getEl(),
                title: 'Titulo tocs_conduccion_agua_tratada',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_conduccion_agua_tratada',
                trackMouse: true
            });
        }
    }
}


var tocs_conduccion_agua_tratada_cantidad = {
    xtype: "textfield",
    tabIndex: 17,
    id: "tocs_conduccion_agua_tratada_cantidad",
    name: "tocs_conduccion_agua_tratada_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_conduccion_agua_tratada_cantidad')).getEl(),
                title: 'Titulo tocs_conduccion_agua_tratada_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_conduccion_agua_tratada_cantidad',
                trackMouse: true
            });
        }
    }
}

var tocs_red_distribucion = {
    xtype: "checkboxgroup",
    tabIndex: 18,
    id: "tocs_red_distribucion",
    name: "tocs_red_distribucion",
    fieldLabel: "Red de distribución",
    items: [{
    
        name: 'tocs_red_distribucion',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_red_distribucion')).getEl(),
                title: 'Titulo tocs_red_distribucion',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_red_distribucion',
                trackMouse: true
            });
        }
    }
}

var tocs_red_distribucion_cantidad = {
    xtype: "textfield",
    tabIndex: 19,
    id: "tocs_red_distribucion_cantidad",
    name: "tocs_red_distribucion_cantidad",
    fieldLabel: "Cantidad",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('tocs_red_distribucion_cantidad')).getEl(),
                title: 'Titulo tocs_red_distribucion_cantidad',
                anchor: 'top',
                html: 'Mensaje de ayuda para tocs_red_distribucion_cantidad',
                trackMouse: true
            });
        }
    }
}

tecnicooperativacomponentessistema_form.add({
    xtype: 'fieldset',
    title: 'Componentes del sistema',
    height: 320,
    layout: 'column',
    items: [{
        bodyStyle: 'padding-right:5px;',
        items: {
            layout: 'form',
            labelWidth: 180,
            items: [tocs_captacion, tocs_aduccion, tocs_desarenador, tocs_conduccion_agua_cruda, tocs_planta_tratamiento, tocs_desinfeccion, tocs_tanque_almacenamiento, tocs_conduccion_agua_tratada, tocs_red_distribucion]
        }
    }, {
        bodyStyle: 'padding-left:5px;',
        items: {
            layout: 'form',
            labelWidth: 75,
            items: [tocs_captacion_cantidad, tocs_aduccion_cantidad, tocs_desarenador_cantidad, tocs_conduccion_agua_cruda_cantidad, tocs_planta_tratamiento_cantidad, tocs_desinfeccion_cantidad, tocs_tanque_almacenamiento_cantidad, tocs_conduccion_agua_tratada_cantidad, tocs_red_distribucion_cantidad]
        }
    }]
});

tecnicooperativacomponentessistema_form.render('div_form_acu_componentessistema');
