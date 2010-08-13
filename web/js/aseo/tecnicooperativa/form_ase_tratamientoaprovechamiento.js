var tratamientoaprovechamiento_form = new Ext.form.FormPanel({
    id: 'tratamientoaprovechamiento-form',
    //    width: 840,
    autoWidth: true,
    height: 380,
    frame: true,
    //    anchor: '100%',
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: tratamientoaprovechamiento_form,
                url: getAbsoluteUrl('aseo_tratamientoaprovechamiento', 'subirDatos'),
                success: function(){
                    tecnicooperativa_aseo_tabpanel.setActiveTab(0);
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: tratamientoaprovechamiento_form,
                url: getAbsoluteUrl('aseo_tratamientoaprovechamiento', 'subirDatos'),
                success: function(){
                    //                    tecnicooperativa_aseo_tabpanel.setActiveTab(2);
                    tratamientoaprovechamiento2_form.show();
                    tratamientoaprovechamiento_form.hide();
                }
            });
        }
    }]
});

var tap_peso_residuos_comida_jardin = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 3,
    id: "tap_peso_residuos_comida_jardin",
    name: "tap_peso_residuos_comida_jardin",
    fieldLabel: "Residuos de comida y jardín",
    allowBlank: false
}

var tap_peso_papel_carton = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 5,
    id: "tap_peso_papel_carton",
    name: "tap_peso_papel_carton",
    fieldLabel: "Productos de papel y cartón",
    allowBlank: false
}

var tap_peso_plasticos = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 7,
    id: "tap_peso_plasticos",
    name: "tap_peso_plasticos",
    fieldLabel: "Plástico en general (bolsas, empaques, envases, pasta)",
    allowBlank: false
}

var tap_peso_caucho_cuero = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 9,
    id: "tap_peso_caucho_cuero",
    name: "tap_peso_caucho_cuero",
    fieldLabel: "Caucho  y cuero",
    allowBlank: false
}

var tap_peso_textiles = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 11,
    id: "tap_peso_textiles",
    name: "tap_peso_textiles",
    fieldLabel: "Textiles",
    allowBlank: false
}

var tap_peso_madera = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 13,
    id: "tap_peso_madera",
    name: "tap_peso_madera",
    fieldLabel: "Madera",
    allowBlank: false
}

var tap_peso_productos_metalicos = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 15,
    id: "tap_peso_productos_metalicos",
    name: "tap_peso_productos_metalicos",
    fieldLabel: "Productos metálicos (ferrosos y no ferrosos)",
    allowBlank: false
}

var tap_peso_vidrios = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 17,
    id: "tap_peso_vidrios",
    name: "tap_peso_vidrios",
    fieldLabel: "Vidrio",
    allowBlank: false
}

var tap_peso_ceramicos_roca_escombro = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 19,
    id: "tap_peso_ceramicos_roca_escombro",
    name: "tap_peso_ceramicos_roca_escombro",
    fieldLabel: "Productos cerámicos cenizas, rocas y escombros",
    allowBlank: false
}

var tap_peso_huesos = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 19,
    id: "tap_peso_huesos",
    name: "tap_peso_huesos",
    fieldLabel: "Huesos",
    allowBlank: false
}

var tap_peso_residuos_higenicos = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 19,
    id: "tap_peso_residuos_higenicos",
    name: "tap_peso_residuos_higenicos",
    fieldLabel: "Residuos de higiénicos",
    allowBlank: false
}

var tap_peso_otros_residuos = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    
    tabIndex: 19,
    id: "tap_peso_otros_residuos",
    name: "tap_peso_otros_residuos",
    fieldLabel: "Otros",
    allowBlank: false
}

var ase_tratamientoaprovechamiento_datastore = new Ext.data.Store({
    id: 'ase_tratamientoaprovechamiento_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('aseo_tratamientoaprovechamiento', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tap_captacion',
        type: 'int'
    }, {
        name: 'tap_captacion_cantidad',
        type: 'int'
    }, {
        name: 'tap_aduccion',
        type: 'int'
    }, {
        name: 'tap_peso_papel_carton',
        type: 'int'
    }, {
        name: 'tap_desarenador',
        type: 'int'
    }, {
        name: 'tap_peso_plasticos',
        type: 'int'
    }, {
        name: 'tap_conduccion_agua_cruda',
        type: 'int'
    }, {
        name: 'tap_peso_caucho_cuero',
        type: 'int'
    }, {
        name: 'tap_planta_tratamiento',
        type: 'int'
    }, {
        name: 'tap_peso_textiles',
        type: 'int'
    }, {
        name: 'tap_desinfeccion',
        type: 'int'
    }, {
        name: 'tap_peso_madera',
        type: 'int'
    }, {
        name: 'tap_tanque_almacenamiento',
        type: 'int'
    }, {
        name: 'tap_peso_productos_metalicos',
        type: 'int'
    }, {
        name: 'tap_conduccion_agua_tratada',
        type: 'int'
    }, {
        name: 'tap_peso_vidrios',
        type: 'int'
    }, {
        name: 'tap_red_distribucion',
        type: 'int'
    }, {
        name: 'tap_peso_ceramicos_roca_escombro',
        type: 'int'
    }])
});

ase_tratamientoaprovechamiento_datastore.load({
    callback: function(){
        var registro = ase_tratamientoaprovechamiento_datastore.getAt(0);
        tratamientoaprovechamiento_form.getForm().loadRecord(registro);
    }
});

tratamientoaprovechamiento_form.add({
    xtype: 'fieldset',
    title: 'Caracterización de los residuos sólidos recolectados',
    height: 320,
    layout: 'column',
    items: [{
        bodyStyle: 'padding-left:5px;',
        items: {
            layout: 'form',
            labelWidth: 325,
            items: [{
                layout: 'column',
                height: 20,
                items: [{
                    layout: 'form',
                    width: 100,
                    items: {
                        xtype: 'label',
                        labelSeparator: '',
                        fieldLabel: '<b>Categoría<b>'
                    }
                }, {
                    layout: 'form',
                    width: 350,
                    bodyStyle: 'padding-left:230px;',
                    items: {
                        xtype: 'label',
                        labelSeparator: '',
                        fieldLabel: '<b>Peso(Kilogramos)<b>'
                    }
                }]
            }, tap_peso_residuos_comida_jardin, tap_peso_papel_carton, tap_peso_plasticos, tap_peso_caucho_cuero, tap_peso_textiles, tap_peso_madera, tap_peso_productos_metalicos, tap_peso_vidrios, tap_peso_ceramicos_roca_escombro]
        }
    }, {
        bodyStyle: 'padding-left:50px;',
        items: {
            layout: 'form',
            labelWidth: 150,
            items: [{
                layout: 'column',
                height: 20,
                items: [{
                    layout: 'form',
                    width: 100,
                    items: {
                        xtype: 'label',
                        labelSeparator: '',
                        fieldLabel: '<b>Categoría<b>'
                    }
                }, {
                    layout: 'form',
                    width: 170,
                    bodyStyle: 'padding-left:55px;',
                    items: {
                        xtype: 'label',
                        labelSeparator: '',
                        fieldLabel: '<b>Peso(Kilogramos)<b>'
                    }
                }]
            }, tap_peso_huesos, tap_peso_residuos_higenicos, tap_peso_otros_residuos]
        }
    }]
});

//tratamientoaprovechamiento_form.render('div_form_ase_tratamientoaprovechamiento');
