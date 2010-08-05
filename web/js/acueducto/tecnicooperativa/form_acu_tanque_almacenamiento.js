var form_acu_tanque_almacenamiento = new Ext.Panel({
    id: 'tanque_almacenamiento-form',
    layout: 'form',
    autoWidth: true,
    height: 380,
    frame: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(6);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            tecnicooperativa_acueducto_tabpanel.setActiveTab(8);
        }
    }]
});

var acu_tanque_almacenamiento_si_no_datastore = new Ext.data.ArrayStore({
    fields: ['value', 'text'],
    data: [[true, 'Si'], [false, 'No']]
});

var acu_tanque_almacenamiento_estado_datastore = new Ext.data.ArrayStore({
    id: 0,
    fields: ['id', 'text'],
    data: [[0, 'Bueno'], [1, 'Regular'], [2, 'Malo']]
});

var acu_tanque_almacenamiento_datastore = new Ext.data.SimpleStore({
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tan_volumen',
        type: 'float'
    }, {
        name: 'tan_estado_id',
        type: 'integer'
    }, {
        name: 'tan_bypass_directo_red',
        type: 'bool'
    }, {
        name: 'tan_presencia_valvula_control',
        type: 'bool'
    }, {
        name: 'tan_proteccion_tapa',
        type: 'bool'
    }, {
        name: 'tan_cerramiento_lote',
        type: 'bool'
    }, {
        name: 'tan_ventosa_salida',
        type: 'bool'
    }, {
        name: 'tan_macro_medidor',
        type: 'bool'
    }])
});

acu_tanque_almacenamiento_datastore.load();

var acu_tanque_almacenamiento_gridpanel = new Ext.grid.EditorGridPanel({
    store: acu_tanque_almacenamiento_datastore,
    frame: true,
    border: false,
    selModel: new Ext.grid.RowSelectionModel({
        singleSelect: true
    }),
    columns: [{
        id: 'tan_volumen',
        header: "Volumen(M<sup>3</sup>)",
        width: 80,
        dataIndex: 'tan_volumen',
        editor: new Ext.form.TextField({
            emptyText: false
        })
    }, {
        header: 'Estado',
        width: 50,
        dataIndex: 'tan_estado_id',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Bypass directo',
        width: 90,
        dataIndex: 'tan_bypass_directo_red',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Válvula de control',
        width: 100,
        dataIndex: 'tan_presencia_valvula_control',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Protección por tapa',
        width: 110,
        dataIndex: 'tan_proteccion_tapa',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Cerramiento del lote',
        width: 110,
        dataIndex: 'tan_cerramiento_lote',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Ventosa en la salida',
        width: 110,
        dataIndex: 'tan_ventosa_salida',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Macro-medidor',
        width: 100,
        dataIndex: 'tan_macro_medidor',
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_si_no_datastore,
            valueField: 'value',
            displayField: 'text',
            editable: false
        })
    }],
    width: '100%',
    height: 240,
    wrap: true,
    stripeRows: true,
    clicksToEdit: 1
});

form_acu_tanque_almacenamiento.add({
    bodyStyle: 'padding-right:5px;',
    items: [{
        xtype: 'fieldset',
        height: 320,
        title: 'Tanques de almacenamiento',
        items: [acu_tanque_almacenamiento_gridpanel],
        buttonAlign: 'left',
        buttons: [{
            text: 'Adicionar',
            handler: function(){
                Ext.Ajax.request({
                    url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'adicionarTanque'),
                    success: function(){
                        acu_tanque_almacenamiento_datastore.load();
                    }
                });
            }
        }, {
            text: 'Eliminar',
            handler: function(){
              
            }
        }]
    }]
});

form_acu_tanque_almacenamiento.render('div_form_acu_tanque_almacenamiento');
