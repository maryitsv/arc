var captacionacueducto_form = new Ext.Panel({
    id: 'captacionacueducto-form',
    layout: 'form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(1);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(3);
        }
    }]
});

var acu_captacion_si_no_datastore = new Ext.data.ArrayStore({
    fields: ['value', 'text'],
    data: [[1, 'Si'], [0, 'No']]
});

var acu_captacion_si_no_renderer = function(value){
    switch (value) {
        case 0:
            return 'No';
        case 1:
            return 'Si';
    }
}

var acu_captacion_estado_general_datastore = new Ext.data.ArrayStore({
    id: 0,
    fields: ['id', 'text'],
    data: [[1, 'Bueno'], [2, 'Regular'], [3, 'Malo']]
});

var acu_captacion_estado_general_renderer = function(value){
    switch (value) {
        case 1:
            return 'Bueno';
        case 2:
            return 'Regular';
        case 3:
            return 'Malo';
    }
}

var acu_captacion_fuente_energia_datastore = new Ext.data.ArrayStore({
    id: 0,
    fields: ['id', 'text'],
    data: [[1, 'Eléctrica'], [2, 'Eólica'], [3, 'Diesel'], [4, 'Gasolina']]
});

var acu_captacion_fuente_energia_renderer = function(value){
    switch (value) {
        case 1:
            return 'Eléctrica';
        case 2:
            return 'Eólica';
        case 3:
            return 'Diesel';
        case 4:
            return 'Gasolina';
    }
}

var acu_captacion_fuente_superficial_datastore = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_captacion', 'obtenerDatosFuentesSuperficiales'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'casp_id',
        type: 'int'
    }, {
        name: 'casp_tipo_de_fondo',
        type: 'int'
    }, {
        name: 'casp_tipo_lateral',
        type: 'int'
    }, {
        name: 'casp_tipo_lecho_filtrante',
        type: 'int'
    }, {
        name: 'casp_tipo_trincho_represa',
        type: 'int'
    }, {
        name: 'casp_estado_estructura_id',
        type: 'int'
    }])
});

acu_captacion_fuente_superficial_datastore.load();

var acu_captacion_fuente_superficial_gridpanel = new Ext.grid.EditorGridPanel({
    store: acu_captacion_fuente_superficial_datastore,
    frame: true,
    border: false,
    selModel: new Ext.grid.RowSelectionModel({
        singleSelect: true
    }),
    columns: [{
        id: 'tipo_de_fondo',
        header: "De fondo",
        width: 55,
        dataIndex: 'casp_tipo_de_fondo',
        renderer: acu_captacion_si_no_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Lateral',
        width: 45,
        dataIndex: 'casp_tipo_lateral',
        renderer: acu_captacion_si_no_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Lecho filtrante',
        width: 80,
        dataIndex: 'casp_tipo_lecho_filtrante',
        renderer: acu_captacion_si_no_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Trincho o represa',
        width: 100,
        dataIndex: 'casp_tipo_trincho_represa',
        renderer: acu_captacion_si_no_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Estado estructura',
        width: 95,
        dataIndex: 'casp_estado_estructura_id',
        renderer: acu_captacion_estado_general_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_estado_general_datastore,
            valueField: 'id',
            displayField: 'text',
            editable: false,
        })
    }],
    width: 400,
    height: 240,
    wrap: true,
    stripeRows: true,
    clicksToEdit: 1,
    listeners: {
        afteredit: function(){
            registro = acu_captacion_fuente_superficial_gridpanel.getSelectionModel().getSelected();
            Ext.Ajax.request({
                url: getAbsoluteUrl('acueducto_captacion', 'actualizarFuenteSuperficial'),
                failure: function(){
                    acu_captacion_fuente_superficial_datastore.load();
                },
                params: {
                    casp_id: registro.get('casp_id'),
                    casp_tipo_de_fondo: registro.get('casp_tipo_de_fondo'),
                    casp_tipo_lateral: registro.get('casp_tipo_lateral'),
                    casp_tipo_lecho_filtrante: registro.get('casp_tipo_lecho_filtrante'),
                    casp_tipo_trincho_represa: registro.get('casp_tipo_trincho_represa'),
                    casp_estado_estructura_id: registro.get('casp_estado_estructura_id')
                }
            });
        }
    }
});

var acu_captacion_fuente_subterranea_datastore = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_captacion', 'obtenerDatosFuentesSubterraneas'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data'
    }, [{
        name: 'casb_id',
        type: 'int'
    }, {
        name: 'casb_estado_pozo_id',
        type: 'int'
    }, {
        name: 'casb_estado_bomba_id',
        type: 'int'
    }, {
        name: 'casb_fuente_energia_id',
        type: 'int'
    }])
});

acu_captacion_fuente_subterranea_datastore.load();

var acu_captacion_fuente_subterranea_gridpanel = new Ext.grid.EditorGridPanel({
    store: acu_captacion_fuente_subterranea_datastore,
    frame: true,
    border: false,
    selModel: new Ext.grid.RowSelectionModel({
        singleSelect: true
    }),
    columns: [{
        id: 'estado_pozo_id',
        header: "Estado del pozo",
        width: 100,
        dataIndex: 'casb_estado_pozo_id',
        renderer: acu_captacion_estado_general_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_estado_general_datastore,
            valueField: 'id',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Estado de la bomba',
        width: 120,
        dataIndex: 'casb_estado_bomba_id',
        renderer: acu_captacion_estado_general_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_estado_general_datastore,
            valueField: 'id',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Fuente de energia',
        width: 100,
        dataIndex: 'casb_fuente_energia_id',
        renderer: acu_captacion_fuente_energia_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_fuente_energia_datastore,
            valueField: 'id',
            displayField: 'text',
            editable: false
        })
    }],
    height: 240,
    wrap: true,
    stripeRows: true,
    clicksToEdit: 1,
    listeners: {
        afteredit: function(){
            registro = acu_captacion_fuente_subterranea_gridpanel.getSelectionModel().getSelected();
            Ext.Ajax.request({
                url: getAbsoluteUrl('acueducto_captacion', 'actualizarFuenteSubterranea'),
                failure: function(){
                    acu_captacion_fuente_subterranea_datastore.load();
                },
                params: {
                    casb_id: registro.get('casb_id'),
                    casb_estado_pozo_id: registro.get('casb_estado_pozo_id'),
                    casb_estado_bomba_id: registro.get('casb_estado_bomba_id'),
                    casb_fuente_energia_id: registro.get('casb_fuente_energia_id')
                }
            });
        }
    }
});

captacionacueducto_form.add({
    layout: 'column',
    items: [{
        bodyStyle: 'padding-right:5px;',
        items: [{
            xtype: 'fieldset',
            width: 422,
            height: 320,
            title: 'Captación de fuentes superficiales',
            items: [acu_captacion_fuente_superficial_gridpanel],
            buttonAlign: 'left',
            buttons: [{
                text: 'Adicionar',
                handler: function(){
                    Ext.Ajax.request({
                        url: getAbsoluteUrl('acueducto_captacion', 'adicionarFuenteSuperficial'),
                        success: function(){
                            acu_captacion_fuente_superficial_datastore.load();
                        }
                    });
                }
            }, {
                text: 'Eliminar',
                handler: function(){
                    Ext.Ajax.request({
                        url: getAbsoluteUrl('acueducto_captacion', 'eliminarFuenteSuperficial'),
                        success: function(){
                            acu_captacion_fuente_superficial_datastore.load();
                        },
                        params: {
                            casp_id: acu_captacion_fuente_superficial_gridpanel.getSelectionModel().getSelected().get('casp_id')
                        }
                    });
                }
            }]
        }]
    }, {
        bodyStyle: 'padding-left:5px;',
        items: [{
            xtype: 'fieldset',
            height: 320,
            title: 'Captación de fuentes subterráneas',
            items: [acu_captacion_fuente_subterranea_gridpanel],
            buttonAlign: 'left',
            buttons: [{
                text: 'Adicionar',
                handler: function(){
                    Ext.Ajax.request({
                        url: getAbsoluteUrl('acueducto_captacion', 'adicionarFuenteSubterranea'),
                        success: function(){
                            acu_captacion_fuente_subterranea_datastore.load();
                        }
                    });
                }
            }, {
                text: 'Eliminar',
                handler: function(){
                    Ext.Ajax.request({
                        url: getAbsoluteUrl('acueducto_captacion', 'eliminarFuenteSubterranea'),
                        success: function(){
                            acu_captacion_fuente_subterranea_datastore.load();
                        },
                        params: {
                            casb_id: acu_captacion_fuente_subterranea_gridpanel.getSelectionModel().getSelected().get('casb_id')
                        }
                    });
                }
            }]
        }]
    }]
});

captacionacueducto_form.render('div_form_acu_captacion');
