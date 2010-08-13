var tratamientoaprovechamiento2_form = new Ext.form.FormPanel({
    id: 'tratamientoaprovechamiento2-form',
    //    width: 840,
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    //    anchor: '100%',
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: tratamientoaprovechamiento2_form,
                url: getAbsoluteUrl('aseo_tratamientoaprovechamiento', 'subirDatos'),
                success: function(){
                    tratamientoaprovechamiento_form.show();
                    tratamientoaprovechamiento2_form.hide();
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: tratamientoaprovechamiento2_form,
                url: getAbsoluteUrl('aseo_tratamientoaprovechamiento', 'subirDatos'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(2);
                }
            });
        }
    }]
});

var tap_desti_rs_sepa_organi_ton_mes = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 3,
    id: "tap_desti_rs_sepa_organi_ton_mes",
    name: "tap_desti_rs_sepa_organi_ton_mes",
    fieldLabel: "Cantidad(toneladas/mes)",
    allowBlank: false
}

var tap_desti_rs_sepa_organi_dis_cie_abie = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 4,
    id: "tap_desti_rs_sepa_organi_dis_cie_abie",
    name: "tap_desti_rs_sepa_organi_dis_cie_abie",
    fieldLabel: "Dispuesto a cielo abierto",
    items: [{
        name: 'tap_desti_rs_sepa_organi_dis_cie_abie',
        inputValue: 1
    }]
}

var tap_desti_rs_sepa_organi_dis_rell_sani = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 6,
    id: "tap_desti_rs_sepa_organi_dis_rell_sani",
    name: "tap_desti_rs_sepa_organi_dis_rell_sani",
    fieldLabel: "Dispuesto en relleno sanitario",
    items: [{
        name: 'tap_desti_rs_sepa_organi_dis_rell_sani',
        inputValue: 1
    }]
}

var tap_desti_rs_sepa_organi_arroja_agua = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 8,
    id: "tap_desti_rs_sepa_organi_arroja_agua",
    name: "tap_desti_rs_sepa_organi_arroja_agua",
    fieldLabel: "Se arrojan a fuente de agua",
    items: [{
        name: 'tap_desti_rs_sepa_organi_arroja_agua',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tap_desti_rs_sepa_organi_arroja_agua_cant');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tap_desti_rs_sepa_organi_arroja_agua_cant = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 9,
    id: "tap_desti_rs_sepa_organi_arroja_agua_cant",
    name: "tap_desti_rs_sepa_organi_arroja_agua_cant",
    fieldLabel: "Cantidad(ton/mes)",
    allowBlank: false
}

var tap_desti_rs_sepa_organi_aprovecha = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 10,
    id: "tap_desti_rs_sepa_organi_aprovecha",
    name: "tap_desti_rs_sepa_organi_aprovecha",
    fieldLabel: "Aprovechamiento(Compostaje – Lombricompostaje)",
    items: [{
        name: 'tap_desti_rs_sepa_organi_aprovecha',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tap_desti_rs_sepa_organi_aprov_total_proce');
            textfield.setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tap_desti_rs_sepa_organi_aprov_total_termi');
            textfield.setDisabled(!checked);
        }
    }
}

var tap_desti_rs_sepa_organi_aprov_total_proce = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 11,
    id: "tap_desti_rs_sepa_organi_aprov_total_proce",
    name: "tap_desti_rs_sepa_organi_aprov_total_proce",
    fieldLabel: "Total procesado(ton/mes)",
    allowBlank: false
}

var tap_desti_rs_sepa_organi_aprov_total_termi = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 13,
    id: "tap_desti_rs_sepa_organi_aprov_total_termi",
    name: "tap_desti_rs_sepa_organi_aprov_total_termi",
    fieldLabel: "Total producto terminado(ton/mes)",
    allowBlank: false
}

var tap_desti_rs_sepa_organi_otro = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 12,
    id: "tap_desti_rs_sepa_organi_otro",
    name: "tap_desti_rs_sepa_organi_otro",
    fieldLabel: "Otro",
    items: [{
        name: 'tap_desti_rs_sepa_organi_otro',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tap_desti_rs_sepa_organi_otro_cual');
            textfield.setDisabled(!checked);
            textfield.focus();
        }
    }
}

var tap_desti_rs_sepa_organi_otro_cual = {
    xtype: "textfield",
    emptyText: '¿Cuál?',
    hideLabel: true,
    disabled: true,
    tabIndex: 15,
    id: "tap_desti_rs_sepa_organi_otro_cual",
    name: "tap_desti_rs_sepa_organi_otro_cual",
    fieldLabel: "¿Cuál?",
    allowBlank: false
}

var acu_tratamientoaprovechamiento_datastore = new Ext.data.Store({
    id: 'acu_tratamientoaprovechamiento_datastore',
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
        name: 'tap_aduccion_cantidad',
        type: 'int'
    }, {
        name: 'tap_desarenador',
        type: 'int'
    }, {
        name: 'tap_desarenador_cantidad',
        type: 'int'
    }, {
        name: 'tap_conduccion_agua_cruda',
        type: 'int'
    }, {
        name: 'tap_conduccion_agua_cruda_cantidad',
        type: 'int'
    }, {
        name: 'tap_planta_tratamiento',
        type: 'int'
    }, {
        name: 'tap_planta_tratamiento_cantidad',
        type: 'int'
    }, {
        name: 'tap_desinfeccion',
        type: 'int'
    }, {
        name: 'tap_desinfeccion_cantidad',
        type: 'int'
    }, {
        name: 'tap_tanque_almacenamiento',
        type: 'int'
    }, {
        name: 'tap_tanque_almacenamiento_cantidad',
        type: 'int'
    }, {
        name: 'tap_conduccion_agua_tratada',
        type: 'int'
    }, {
        name: 'tap_conduccion_agua_tratada_cantidad',
        type: 'int'
    }, {
        name: 'tap_red_distribucion',
        type: 'int'
    }, {
        name: 'tap_red_distribucion_cantidad',
        type: 'int'
    }])
});

acu_tratamientoaprovechamiento_datastore.load({
    callback: function(){
        var registro = acu_tratamientoaprovechamiento_datastore.getAt(0);
        tratamientoaprovechamiento2_form.getForm().loadRecord(registro);
    }
});

tratamientoaprovechamiento2_form.add({
    xtype: 'fieldset',
    title: 'Destino de los residuos sólidos separados y recogidos por el Prestador',
    height: 320,
    layout: 'form',
    items: [{
        bodyStyle: 'padding-right:5px;',
        items: {
            layout: 'form',
            labelWidth: 180,
            items: [{
                xtype: 'label',
                labelSeparator: '',
                fieldLabel: '<b>Material orgánico putrescible<b>'
            }, tap_desti_rs_sepa_organi_ton_mes, tap_desti_rs_sepa_organi_dis_cie_abie, tap_desti_rs_sepa_organi_dis_rell_sani, {
                layout: 'column',
                height: 25,
                items: [{
                    layout: 'form',
                    items: [tap_desti_rs_sepa_organi_arroja_agua]
                }, {
                    layout: 'form',
                    labelWidth: 120,
                    items: [tap_desti_rs_sepa_organi_arroja_agua_cant]
                }]
            }, {
                layout: 'column',
                height: 50,
                items: [{
                    layout: 'form',
                    labelWidth: 320,
                    items: [tap_desti_rs_sepa_organi_aprovecha]
                }, {
                    layout: 'form',
                    labelWidth: 215,
                    items: [{
                        layout: 'form',
                        items: [tap_desti_rs_sepa_organi_aprov_total_proce, tap_desti_rs_sepa_organi_aprov_total_termi]
                    }]
                }                //                {
                //                    layout: 'form',
                //                    labelWidth: 155,
                //                    items: [tap_desti_rs_sepa_organi_aprov_total_proce]
                //                }, {
                //                    layout: 'form',
                //                    bodyStyle: 'padding-left:10px;',
                //                    labelWidth: 215,
                //                    items: [tap_desti_rs_sepa_organi_aprov_total_termi]
                //                }
                ]
            }, {
                layout: 'column',
                height: 25,
                labelWidth: 50,
                items: [{
                    layout: 'form',
                    items: [tap_desti_rs_sepa_organi_otro]
                }, {
                    layout: 'form',
                    items: [tap_desti_rs_sepa_organi_otro_cual]
                }]
            }]
        }
    }]
});

var panel_tratamientoaprovechamiento = new Ext.Panel({
    renderTo: 'div_form_ase_tratamientoaprovechamiento',
    autoWidth: true,
    items: [tratamientoaprovechamiento_form, tratamientoaprovechamiento2_form]
});

//tratamientoaprovechamiento2_form.render('div_form_acu_tratamientoaprovechamiento');
