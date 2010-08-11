var sistemasabastecimiento_form = new Ext.form.FormPanel({
    id: 'sistemasabastecimiento-form',
    layout: 'form',
    width: 840,
    autoWidth: true,
    height: 380,
    //    height: '400',
    frame: true,
    //    anchor: '100%',
    buttons: [{
        text: 'Siguiente',
        handler: function(){
            submit({
                form: sistemasabastecimiento_form,
                url: getAbsoluteUrl('acueducto_sistemasabastecimiento', 'subirDatos'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(1);
                }
            });
        }
    }]
});

var toa_gravedad_sin_tratamiento = {
    xtype: "checkbox",
    tabIndex: 2,
    id: "toa_gravedad_sin_tratamiento",
    name: "toa_gravedad_sin_tratamiento",
    fieldLabel: "Gravedad sin tratamiento",
    inputValue: 1
}


var toa_bombeo_sin_tratamiento = {
    xtype: "checkbox",
    tabIndex: 3,
    id: "toa_bombeo_sin_tratamiento",
    name: "toa_bombeo_sin_tratamiento",
    fieldLabel: "Bombeo sin tratamiento",
    inputValue: 1
}


var toa_gravedad_con_tratamiento = {
    xtype: "checkbox",
    tabIndex: 4,
    id: "toa_gravedad_con_tratamiento",
    name: "toa_gravedad_con_tratamiento",
    fieldLabel: "Gravedad con tratamiento",
    inputValue: 1
}


var toa_bombeo_con_tratamiento = {
    xtype: "checkbox",
    tabIndex: 5,
    id: "toa_bombeo_con_tratamiento",
    name: "toa_bombeo_con_tratamiento",
    fieldLabel: "Bombeo con tratamiento",
    inputValue: 1
}


var toa_gravedad_bombeo_sin_tratamiento = {
    xtype: "checkbox",
    tabIndex: 6,
    id: "toa_gravedad_bombeo_sin_tratamiento",
    name: "toa_gravedad_bombeo_sin_tratamiento",
    fieldLabel: "Gravedad y bombeo sin tratamiento",
    inputValue: 1
}

var toa_gravedad_bombeo_con_tratamiento = {
    xtype: "checkbox",
    tabIndex: 7,
    id: "toa_gravedad_bombeo_con_tratamiento",
    name: "toa_gravedad_bombeo_con_tratamiento",
    fieldLabel: "Gravedad y bombeo con tratamiento",
    inputValue: 1
}

var toa_gravedad_sin_tratamiento_bombeo_con_tratamiento = {
    xtype: "checkbox",
    tabIndex: 8,
    id: "toa_gravedad_sin_tratamiento_bombeo_con_tratamiento",
    name: "toa_gravedad_sin_tratamiento_bombeo_con_tratamiento",
    fieldLabel: "Gravedad sin tratamiento y bombeo con tratamiento",
    inputValue: 1
}

var toa_gravedad_con_tratamiento_bombeo_sin_tratamiento = {
    xtype: "checkbox",
    tabIndex: 9,
    id: "toa_gravedad_con_tratamiento_bombeo_sin_tratamiento",
    name: "toa_gravedad_con_tratamiento_bombeo_sin_tratamiento",
    fieldLabel: "Gravedad con tratamiento y bombeo sin tratamiento",
    inputValue: 1
}

var toa_cantidad_agua_distribuida_por_ano = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 17,
    allowNegative: false,
    tabIndex: 10,
    id: "toa_cantidad_agua_distribuida_por_ano",
    name: "toa_cantidad_agua_distribuida_por_ano",
    fieldLabel: "Cantidad de agua distribuida por año(M<sup>3</sup>)",
    allowBlank: false,
    value: 0
}

var toa_solucion_acarreo = {
    xtype: "checkbox",
    tabIndex: 12,
    id: "toa_solucion_acarreo",
    name: "toa_solucion_acarreo",
    fieldLabel: "Acarreo",
    inputValue: 1,
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toa_solucion_acarreo_viviendas');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var toa_solucion_acarreo_viviendas = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    tabIndex: 13,
    id: "toa_solucion_acarreo_viviendas",
    name: "toa_solucion_acarreo_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    disabled: true,
    value: 0
}

var toa_solucion_nacimiento = {
    xtype: "checkbox",
    tabIndex: 14,
    id: "toa_solucion_nacimiento",
    name: "toa_solucion_nacimiento",
    fieldLabel: "Nacimiento",
    inputValue: 1,
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toa_solucion_nacimiento_viviendas');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var toa_solucion_nacimiento_viviendas = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    tabIndex: 15,
    id: "toa_solucion_nacimiento_viviendas",
    name: "toa_solucion_nacimiento_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    disabled: true,
    value: 0
}

var toa_solucion_aljibe = {
    xtype: "checkbox",
    tabIndex: 16,
    id: "toa_solucion_aljibe",
    name: "toa_solucion_aljibe",
    fieldLabel: "Aljibe",
    inputValue: 1,
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toa_solucion_aljibe_viviendas');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var toa_solucion_aljibe_viviendas = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    tabIndex: 17,
    id: "toa_solucion_aljibe_viviendas",
    name: "toa_solucion_aljibe_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    disabled: true,
    value: 0
}

var toa_solucion_agua_lluvia = {
    xtype: "checkbox",
    tabIndex: 18,
    id: "toa_solucion_agua_lluvia",
    name: "toa_solucion_agua_lluvia",
    fieldLabel: "Agua lluvia",
    inputValue: 1,
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toa_solucion_agua_lluvia_viviendas');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var toa_solucion_agua_lluvia_viviendas = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    tabIndex: 19,
    id: "toa_solucion_agua_lluvia_viviendas",
    name: "toa_solucion_agua_lluvia_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    disabled: true,
    value: 0
}

var toa_solucion_otro = {
    xtype: "checkbox",
    tabIndex: 20,
    id: "toa_solucion_otro",
    name: "toa_solucion_otro",
    fieldLabel: "Otra",
    inputValue: 1,
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('toa_solucion_otro_cual');
            textfield.setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('toa_solucion_otro_viviendas');
            textfield.setDisabled(!checked);
        }
    }
}

var toa_solucion_otro_cual = {
    xtype: "textfield",
    maxLength: 100,
    tabIndex: 21,
    id: "toa_solucion_otro_cual",
    name: "toa_solucion_otro_cual",
    fieldLabel: "¿Cual?",
    allowBlank: false,
    disabled: true,
    value: 0
}

var toa_solucion_otro_viviendas = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    tabIndex: 22,
    id: "toa_solucion_otro_viviendas",
    name: "toa_solucion_otro_viviendas",
    fieldLabel: "Número de viviendas",
    allowBlank: false,
    disabled: true,
    value: 0
}

sistemasabastecimiento_form.add({
    xtype: 'panel',
    layout: 'column',
    items: [{
        bodyStyle: 'padding-right:5px;',
        items: {
            height: 310,
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
            items: [toa_solucion_acarreo, toa_solucion_acarreo_viviendas, toa_solucion_nacimiento, toa_solucion_nacimiento_viviendas, toa_solucion_aljibe, toa_solucion_aljibe_viviendas, toa_solucion_agua_lluvia, toa_solucion_agua_lluvia_viviendas, toa_solucion_otro, toa_solucion_otro_cual, toa_solucion_otro_viviendas]
        }
    }]
});

var acu_sistemasabastecimiento_datastore = new Ext.data.Store({
    id: 'acu_sistemasabastecimiento_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_sistemasabastecimiento', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'toa_gravedad_sin_tratamiento',
        type: 'int'
    }, {
        name: 'toa_bombeo_sin_tratamiento',
        type: 'int'
    }, {
        name: 'toa_gravedad_con_tratamiento',
        type: 'int'
    }, {
        name: 'toa_bombeo_con_tratamiento',
        type: 'int'
    }, {
        name: 'toa_gravedad_bombeo_sin_tratamiento',
        type: 'int'
    }, {
        name: 'toa_gravedad_bombeo_con_tratamiento',
        type: 'int'
    }, {
        name: 'toa_gravedad_sin_tratamiento_bombeo_con_tratamiento',
        type: 'int'
    }, {
        name: 'toa_gravedad_con_tratamiento_bombeo_sin_tratamiento',
        type: 'int'
    }, {
        name: 'toa_cantidad_agua_distribuida_por_ano',
        type: 'int'
    }, {
        name: 'toa_solucion_acarreo',
        type: 'int'
    }, {
        name: 'toa_solucion_acarreo_viviendas',
        type: 'int'
    }, {
        name: 'toa_solucion_nacimiento',
        type: 'int'
    }, {
        name: 'toa_solucion_nacimiento_viviendas',
        type: 'int'
    }, {
        name: 'toa_solucion_aljibe',
        type: 'int'
    }, {
        name: 'toa_solucion_aljibe_viviendas',
        type: 'int'
    }, {
        name: 'toa_solucion_agua_lluvia',
        type: 'int'
    }, {
        name: 'toa_solucion_agua_lluvia_viviendas',
        type: 'int'
    }, {
        name: 'toa_solucion_otro',
        type: 'int'
    }, {
        name: 'toa_solucion_otro_cual',
        type: 'string'
    }, {
        name: 'toa_solucion_otro_viviendas',
        type: 'int'
    }])
});

acu_sistemasabastecimiento_datastore.load({
    callback: function(){
        //        alert(acu_sistemasabastecimiento_datastore.getCount());
        var registro = acu_sistemasabastecimiento_datastore.getAt(0);
        sistemasabastecimiento_form.getForm().loadRecord(registro);
    }
});

sistemasabastecimiento_form.render('div_form_acu_sistemasabastecimiento');
