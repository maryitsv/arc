var captacionacueducto_form = new Ext.Panel({
    id: 'captacionacueducto-form',
    layout: 'form',
    width: 840,
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
    data: [[true, 'Si'], [false, 'No']]
});

var acu_captacion_estado_general_datastore = new Ext.data.ArrayStore({
    id: 0,
    fields: ['id', 'text'],
    data: [[0, 'Bueno'], [1, 'Regular'], [2, 'Malo']]
});

var acu_captacion_fuente_energia_datastore = new Ext.data.ArrayStore({
    id: 0,
    fields: ['id', 'text'],
    data: [[0, 'Eléctrica'], [1, 'Eólica'], [2, 'Diesel'], [3, 'Gasolina']]
});

var acu_captacion_fuente_superficial_datastore = new Ext.data.SimpleStore({
    fields: [{
        name: 'tipo_de_fondo',
        type: 'bool'
    }, {
        name: 'tipo_lateral',
        type: 'bool'
    }, {
        name: 'tipo_lecho_filtrante',
        type: 'bool'
    }, {
        name: 'tipo_trincho_represa',
        type: 'bool'
    }, {
        name: 'estado_estructura_id',
        type: 'int'
    }]
});

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
        width: 80,
        dataIndex: 'tipo_de_fondo',
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
        width: 80,
        dataIndex: 'tipo_lateral',
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
        dataIndex: 'tipo_lecho_filtrante',
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
        dataIndex: 'tipo_trincho_represa',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_captacion_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }],
    width: 400,
    height: 240,
    wrap: true,
    stripeRows: true,
    clicksToEdit: 1
});

var acu_captacion_fuente_subterranea_datastore = new Ext.data.SimpleStore({
    fields: [{
        name: 'estado_pozo_id',
        type: 'int'
    }, {
        name: 'estado_bomba_id',
        type: 'int'
    }, {
        name: 'fuente_energia_id',
        type: 'int'
    }]
});

acu_captacion_fuente_subterranea_datastore.loadData([[0, 0, 0]]);

var acu_captacion_fuente_subterranea_gridpanel = new Ext.grid.EditorGridPanel({
    store: acu_captacion_fuente_subterranea_datastore,
    frame: true,
    border: false,
    columns: [{
        id: 'estado_pozo_id',
        header: "Estado del pozo",
        width: 100,
        dataIndex: 'estado_pozo_id',
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
        dataIndex: 'estado_bomba_id',
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
        dataIndex: 'fuente_energia_id',
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
    clicksToEdit: 1
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
                    acu_captacion_fuente_superficial_datastore.loadData([[false, false, false, false, 0]], true);
                }
            }, {
                text: 'Eliminar',
                handler: function(){
                    acu_captacion_fuente_superficial_datastore.remove(acu_captacion_fuente_superficial_gridpanel.getSelectionModel().getSelected());
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
                text: 'Adicionar'
            }, {
                text: 'Eliminar'
            }]
        }]
    }]
});

captacionacueducto_form.render('div_form_acu_captacion');
