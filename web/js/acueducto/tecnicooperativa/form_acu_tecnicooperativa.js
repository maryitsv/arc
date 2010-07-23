var tecnicooperativaacueducto_form = new Ext.form.FormPanel({
    id: 'tecnicooperativaacueducto-form',
    layout: 'form',
    width: 840,
    height: 380,
    //    height: '400',
    frame: true,
    //    anchor: '100%',
    buttons: [{
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(1);
        }
    }]
});

var toa_gravedad_sin_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 2,
    id: "toa_gravedad_sin_tratamiento",
    name: "toa_gravedad_sin_tratamiento",
    fieldLabel: "Gravedad sin tratamiento",
    items: [{
        name: 'toa_gravedad_sin_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_gravedad_sin_tratamiento')).getEl(),
                title: 'Titulo toa_gravedad_sin_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_gravedad_sin_tratamiento',
                trackMouse: true
            });
        }
    }
}


var toa_bombeo_sin_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 3,
    id: "toa_bombeo_sin_tratamiento",
    name: "toa_bombeo_sin_tratamiento",
    fieldLabel: "Bombeo sin tratamiento",
    items: [{
        name: 'toa_bombeo_sin_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_bombeo_sin_tratamiento')).getEl(),
                title: 'Titulo toa_bombeo_sin_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_bombeo_sin_tratamiento',
                trackMouse: true
            });
        }
    }
}


var toa_gravedad_con_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 4,
    id: "toa_gravedad_con_tratamiento",
    name: "toa_gravedad_con_tratamiento",
    fieldLabel: "Gravedad con tratamiento",
    items: [{
        name: 'toa_gravedad_con_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_gravedad_con_tratamiento')).getEl(),
                title: 'Titulo toa_gravedad_con_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_gravedad_con_tratamiento',
                trackMouse: true
            });
        }
    }
}


var toa_bombeo_con_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 5,
    id: "toa_bombeo_con_tratamiento",
    name: "toa_bombeo_con_tratamiento",
    fieldLabel: "Bombeo con tratamiento",
    items: [{
        name: 'toa_bombeo_con_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_bombeo_con_tratamiento')).getEl(),
                title: 'Titulo toa_bombeo_con_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_bombeo_con_tratamiento',
                trackMouse: true
            });
        }
    }
}


var toa_gravedad_bombeo_sin_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 6,
    id: "toa_gravedad_bombeo_sin_tratamiento",
    name: "toa_gravedad_bombeo_sin_tratamiento",
    fieldLabel: "Gravedad y bombeo sin tratamiento",
    items: [{
        name: 'toa_gravedad_bombeo_sin_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_gravedad_bombeo_sin_tratamiento')).getEl(),
                title: 'Titulo toa_gravedad_bombeo_sin_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_gravedad_bombeo_sin_tratamiento',
                trackMouse: true
            });
        }
    }
}

var toa_gravedad_bombeo_con_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 7,
    id: "toa_gravedad_bombeo_con_tratamiento",
    name: "toa_gravedad_bombeo_con_tratamiento",
    fieldLabel: "Gravedad y bombeo con tratamiento",
    items: [{
        name: 'toa_gravedad_bombeo_con_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_gravedad_bombeo_con_tratamiento')).getEl(),
                title: 'Titulo toa_gravedad_bombeo_con_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_gravedad_bombeo_con_tratamiento',
                trackMouse: true
            });
        }
    }
}

var toa_gravedad_sin_tratamiento_bombeo_con_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 8,
    id: "toa_gravedad_sin_tratamiento_bombeo_con_tratamiento",
    name: "toa_gravedad_sin_tratamiento_bombeo_con_tratamiento",
    fieldLabel: "Gravedad sin tratamiento y bombeo con tratamiento",
    items: [{
        name: 'toa_gravedad_sin_tratamiento_bombeo_con_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_gravedad_sin_tratamiento_bombeo_con_tratamiento')).getEl(),
                title: 'Titulo toa_gravedad_sin_tratamiento_bombeo_con_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_gravedad_sin_tratamiento_bombeo_con_tratamiento',
                trackMouse: true
            });
        }
    }
}

var toa_gravedad_con_tratamiento_bombeo_sin_tratamiento = {
    xtype: "checkboxgroup",
    tabIndex: 9,
    id: "toa_gravedad_con_tratamiento_bombeo_sin_tratamiento",
    name: "toa_gravedad_con_tratamiento_bombeo_sin_tratamiento",
    fieldLabel: "Gravedad con tratamiento y bombeo sin tratamiento",
    items: [{
        name: 'toa_gravedad_con_tratamiento_bombeo_sin_tratamiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_gravedad_con_tratamiento_bombeo_sin_tratamiento')).getEl(),
                title: 'Titulo toa_gravedad_con_tratamiento_bombeo_sin_tratamiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_gravedad_con_tratamiento_bombeo_sin_tratamiento',
                trackMouse: true
            });
        }
    }
}

var toa_cantidad_agua_distribuida_por_ano = {
    xtype: "textfield",
    tabIndex: 10,
    id: "toa_cantidad_agua_distribuida_por_ano",
    name: "toa_cantidad_agua_distribuida_por_ano",
    fieldLabel: "Cantidad de agua distribuida por año(M<sup>3</sup>)",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_cantidad_agua_distribuida_por_ano')).getEl(),
                title: 'Titulo toa_cantidad_agua_distribuida_por_ano',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_cantidad_agua_distribuida_por_ano',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_acarreo = {
    xtype: "checkboxgroup",
    tabIndex: 12,
    id: "toa_solucion_acarreo",
    name: "toa_solucion_acarreo",
    fieldLabel: "Acarreo",
    items: [{
        name: 'toa_solucion_acarreo',
        inputValue: 1,
        listeners: {
            check: function(radio, checked){
                var textfield = Ext.getCmp('toa_solucion_acarreo_viviendas');
                textfield.setDisabled(!checked);
                textfield.focus();
            }
        }
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_acarreo')).getEl(),
                title: 'Titulo toa_solucion_acarreo',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_acarreo',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_acarreo_viviendas = {
    xtype: "textfield",
    tabIndex: 13,
    id: "toa_solucion_acarreo_viviendas",
    name: "toa_solucion_acarreo_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    disabled: true,
    value: 0,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_acarreo_viviendas')).getEl(),
                title: 'Titulo toa_solucion_acarreo_viviendas',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_acarreo_viviendas',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_nacimiento = {
    xtype: "checkboxgroup",
    tabIndex: 14,
    id: "toa_solucion_nacimiento",
    name: "toa_solucion_nacimiento",
    fieldLabel: "Nacimiento",
    items: [{
        name: 'toa_solucion_nacimiento',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_nacimiento')).getEl(),
                title: 'Titulo toa_solucion_nacimiento',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_nacimiento',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_nacimiento_viviendas = {
    xtype: "textfield",
    tabIndex: 15,
    id: "toa_solucion_nacimiento_viviendas",
    name: "toa_solucion_nacimiento_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_nacimiento_viviendas')).getEl(),
                title: 'Titulo toa_solucion_nacimiento_viviendas',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_nacimiento_viviendas',
                trackMouse: true
            });
        }
    }
}

var toa_toa_solucion_aljibe = {
    xtype: "checkboxgroup",
    tabIndex: 16,
    id: "toa_toa_solucion_aljibe",
    name: "toa_toa_solucion_aljibe",
    fieldLabel: "Aljibe",
    items: [{
        name: 'toa_toa_solucion_aljibe',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_toa_solucion_aljibe')).getEl(),
                title: 'Titulo toa_toa_solucion_aljibe',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_toa_solucion_aljibe',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_aljibe_viviendas = {
    xtype: "textfield",
    tabIndex: 17,
    id: "toa_solucion_aljibe_viviendas",
    name: "toa_solucion_aljibe_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_aljibe_viviendas')).getEl(),
                title: 'Titulo toa_solucion_aljibe_viviendas',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_aljibe_viviendas',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_agua_lluvia = {
    xtype: "checkboxgroup",
    tabIndex: 18,
    id: "toa_solucion_agua_lluvia",
    name: "toa_solucion_agua_lluvia",
    fieldLabel: "Agua lluvia",
    items: [{
        name: 'toa_solucion_agua_lluvia',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_agua_lluvia')).getEl(),
                title: 'Titulo toa_solucion_agua_lluvia',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_agua_lluvia',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_agua_lluvia_viviendas = {
    xtype: "textfield",
    tabIndex: 19,
    id: "toa_solucion_agua_lluvia_viviendas",
    name: "toa_solucion_agua_lluvia_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_agua_lluvia_viviendas')).getEl(),
                title: 'Titulo toa_solucion_agua_lluvia_viviendas',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_agua_lluvia_viviendas',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_otro = {
    xtype: "checkboxgroup",
    tabIndex: 20,
    id: "toa_solucion_otro",
    name: "toa_solucion_otro",
    fieldLabel: "Otra",
    items: [{
        name: 'toa_solucion_otro',
        inputValue: 1
    }],
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_otro')).getEl(),
                title: 'Titulo toa_solucion_otro',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_otro',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_otro_cual = {
    xtype: "textfield",
    tabIndex: 21,
    id: "toa_solucion_otro_cual",
    name: "toa_solucion_otro_cual",
    fieldLabel: "¿Cual?",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_otro_cual')).getEl(),
                title: 'Titulo toa_solucion_otro_cual',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_otro_cual',
                trackMouse: true
            });
        }
    }
}

var toa_solucion_otro_viviendas = {
    xtype: "textfield",
    tabIndex: 22,
    id: "toa_solucion_otro_viviendas",
    name: "toa_solucion_otro_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    listeners: {
        render: function(){
            new Ext.ToolTip({
                target: (Ext.getCmp('toa_solucion_otro_viviendas')).getEl(),
                title: 'Titulo toa_solucion_otro_viviendas',
                anchor: 'top',
                html: 'Mensaje de ayuda para toa_solucion_otro_viviendas',
                trackMouse: true
            });
        }
    }
}

tecnicooperativaacueducto_form.add({
    xtype: 'panel',
    layout: 'column',
    items: [{
        bodyStyle: 'padding-right:5px;',
        items: {
            height: 320,
            xtype: 'fieldset',
            title: 'Tipos de sistemas de abastecimiento',
            //            autoHeight: true,
            layout: 'form',
            labelWidth: 300,
            items: [toa_gravedad_sin_tratamiento, toa_bombeo_sin_tratamiento, toa_gravedad_con_tratamiento, toa_bombeo_con_tratamiento, toa_gravedad_bombeo_sin_tratamiento, toa_gravedad_bombeo_con_tratamiento, toa_gravedad_sin_tratamiento_bombeo_con_tratamiento, toa_gravedad_con_tratamiento_bombeo_sin_tratamiento, toa_cantidad_agua_distribuida_por_ano]
        }
    }, {
        bodyStyle: 'padding-left:5px;',
        items: {
            xtype: 'fieldset',
            title: 'Soluciones de la población no atendida por el acueducto',
            //            autoHeight: true,
            layout: 'form',
            labelWidth: 200,
            items: [toa_solucion_acarreo, toa_solucion_acarreo_viviendas, toa_solucion_nacimiento, toa_solucion_nacimiento_viviendas, toa_toa_solucion_aljibe, toa_solucion_aljibe_viviendas, toa_solucion_agua_lluvia, toa_solucion_agua_lluvia_viviendas, toa_solucion_otro, toa_solucion_otro_cual, toa_solucion_otro_viviendas]
        }
    }]
});

tecnicooperativaacueducto_form.render('div_form_acu_tecnicooperativa');
