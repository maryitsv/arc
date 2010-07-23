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

acu_captacion_fuente_superficial_datastore.loadData([[false, false, false, false, 0]]);

var acu_captacion_fuente_superficial_gridpanel = new Ext.grid.EditorGridPanel({
    store: acu_captacion_fuente_superficial_datastore,
    frame: true,
    border: false,
    columns: [{
        id: 'tipo_de_fondo',
        header: "De fondo",
        width: 80,
        dataIndex: 'tipo_de_fondo',
        editor: new Ext.form.ComboBox({})
    }, {
        header: 'Lateral',
        width: 80,
        dataIndex: 'tipo_lateral',
        editor: new Ext.form.ComboBox({})
    }, {
        header: 'Lecho filtrante',
        width: 80,
        dataIndex: 'tipo_lecho_filtrante',
        editor: new Ext.form.ComboBox({})
    }, {
        header: 'Trincho o represa',
        width: 100,
        dataIndex: 'tipo_trincho_represa',
        editor: new Ext.form.ComboBox({})
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
        editor: new Ext.form.ComboBox({})
    }, {
        header: 'Estado de la bomba',
        width: 120,
        dataIndex: 'estado_bomba_id',
        editor: new Ext.form.ComboBox({})
    }, {
        header: 'Fuente de energia',
        width: 100,
        dataIndex: 'fuente_energia_id',
        editor: new Ext.form.ComboBox({})
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
                text: 'Adicionar'
            }, {
                text: 'Eliminar'
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
