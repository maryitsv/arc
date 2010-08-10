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
    data: [[1, 'Si'], [0, 'No']]
});

var acu_tanque_almacenamiento_si_no_renderer = function(value){
    switch (value) {
        case 0:
            return 'No';
        case 1:
            return 'Si';
    }
}

var acu_tanque_almacenamiento_estado_datastore = new Ext.data.ArrayStore({
    id: 0,
    fields: ['id', 'text'],
    data: [[1, 'Bueno'], [2, 'Regular'], [3, 'Malo']]
});

var acu_tanque_almacenamiento_estado_general_renderer = function(value){
    switch (value) {
        case 1:
            return 'Bueno';
        case 2:
            return 'Regular';
        case 3:
            return 'Malo';
    }
}

var acu_tanque_almacenamiento_datastore = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tan_id',
        type: 'integer'
    }, {
        name: 'tan_volumen',
        type: 'float'
    }, {
        name: 'tan_estado_id',
        type: 'integer'
    }, {
        name: 'tan_bypass_directo_red',
        type: 'integer'
    }, {
        name: 'tan_presencia_valvula_control',
        type: 'integer'
    }, {
        name: 'tan_proteccion_tapa',
        type: 'integer'
    }, {
        name: 'tan_cerramiento_lote',
        type: 'integer'
    }, {
        name: 'tan_ventosa_salida',
        type: 'integer'
    }, {
        name: 'tan_macro_medidor',
        type: 'integer'
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
        editor: new Ext.form.NumberField({
            minLength: 1,
            maxLength: 17,
            allowNegative: false,
            emptyText: false
        })
    }, {
        header: 'Estado',
        width: 95,
        dataIndex: 'tan_estado_id',
        renderer: acu_tanque_almacenamiento_estado_general_renderer,
        editor: new Ext.form.ComboBox({
            triggerAction: 'all',
            mode: 'local',
            store: acu_tanque_almacenamiento_estado_datastore,
            valueField: 'id',
            displayField: 'text',
            editable: false
        })
    }, {
        header: 'Bypass directo',
        width: 90,
        dataIndex: 'tan_bypass_directo_red',
        renderer: acu_tanque_almacenamiento_si_no_renderer,
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
        renderer: acu_tanque_almacenamiento_si_no_renderer,
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
        renderer: acu_tanque_almacenamiento_si_no_renderer,
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
        renderer: acu_tanque_almacenamiento_si_no_renderer,
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
        renderer: acu_tanque_almacenamiento_si_no_renderer,
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
        renderer: acu_tanque_almacenamiento_si_no_renderer,
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
    clicksToEdit: 1,
    listeners: {
        afteredit: function(){
            registro = acu_tanque_almacenamiento_gridpanel.getSelectionModel().getSelected();
            Ext.Ajax.request({
                url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'actualizarTanque'),
                failure: function(){
                    acu_tanque_almacenamiento_gridpanel.load();
                },
                params: {
                    tan_id: registro.get('tan_id'),
                    tan_volumen: registro.get('tan_volumen'),
                    tan_estado_id: registro.get('tan_estado_id'),
                    tan_bypass_directo_red: registro.get('tan_bypass_directo_red'),
                    tan_presencia_valvula_control: registro.get('tan_presencia_valvula_control'),
                    tan_proteccion_tapa: registro.get('tan_proteccion_tapa'),
                    tan_cerramiento_lote: registro.get('tan_cerramiento_lote'),
                    tan_ventosa_salida: registro.get('tan_ventosa_salida'),
                    tan_macro_medidor: registro.get('tan_macro_medidor')
                }
            });
        }
    }
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
                Ext.Ajax.request({
                    url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'eliminarTanque'),
                    success: function(){
                        acu_tanque_almacenamiento_datastore.load();
                    },
                    params: {
                        tan_id: acu_tanque_almacenamiento_gridpanel.getSelectionModel().getSelected().get('tan_id')
                    }
                });
            }
        }]
    }]
});

form_acu_tanque_almacenamiento.render('div_form_acu_tanque_almacenamiento');
