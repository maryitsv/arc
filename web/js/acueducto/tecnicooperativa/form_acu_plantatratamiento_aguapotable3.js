var form_acu_plantatratamiento_aguapotable3 = new Ext.form.FormPanel({
    id: 'tecnicooperativaplantatratamientoaguapotable3-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            form_acu_plantatratamiento_aguapotable3.getForm().submit({
                url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'subirDatos3'),
                clientValidation: false
            });
            form_acu_plantatratamiento_aguapotable2.show();
            form_acu_plantatratamiento_aguapotable3.hide();
            //            tecnicooperativa_acueducto_tabpanel.setActiveTab(7);
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            form_acu_plantatratamiento_aguapotable3.getForm().submit({
                url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'subirDatos3'),
                clientValidation: false
            });
            tecnicooperativa_acueducto_tabpanel.setActiveTab(6);
        }
    }]
});

var topla_tecnologia_utilizada_ct = {
    xtype: "checkbox",
    inputValue: 1,
    id: "topla_tecnologia_utilizada_ct",
    name: "topla_tecnologia_utilizada_ct",
    fieldLabel: "Combinación de tecnologías",
    items: [{
        name: 'topla_tecnologia_utilizada_ct',
        inputValue: 1
    }]
}

var topla_planta_ttmto_funciona = {
    xtype: "radiogroup",
    id: "topla_planta_ttmto_funciona",
    name: "topla_planta_ttmto_funciona",
    labelSeparator: '',
    fieldLabel: "¿Está funcionando la planta de tratamiento?",
    items: [{
        name: 'topla_planta_ttmto_funciona',
        boxLabel: 'Si',
        inputValue: 1,
        width: 50
    }, {
        name: 'topla_planta_ttmto_funciona',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }]
}

var topla_estructuras_medicion_cau = {
    xtype: "radiogroup",
    id: "topla_estructuras_medicion_cau",
    name: "topla_estructuras_medicion_cau",
    labelSeparator: '',
    fieldLabel: "¿Hay estructuras de medición de caudal funcionando?",
    items: [{
        name: 'topla_estructuras_medicion_cau',
        boxLabel: 'Si',
        inputValue: 1,
        width: 50
    }, {
        name: 'topla_estructuras_medicion_cau',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }]
}

var topla_menor_caudal_operacion_diseno = {
    xtype: "radiogroup",
    id: "topla_menor_caudal_operacion_diseno",
    name: "topla_menor_caudal_operacion_diseno",
    labelSeparator: '',
    fieldLabel: "¿El caudal de operación es menor que el caudal de diseño?",
    items: [{
        name: 'topla_menor_caudal_operacion_diseno',
        boxLabel: 'Si',
        inputValue: 1,
        width: 50
    }, {
        name: 'topla_menor_caudal_operacion_diseno',
        boxLabel: 'No',
        inputValue: 0,
        checked: true
    }]
}

var acu_plantatratamiento_datastore3 = new Ext.data.Store({
    id: 'acu_plantatratamiento_datastore3',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'topla_tecnologia_utilizada_ct',
        type: 'int'
    }, {
        name: 'topla_planta_ttmto_funciona',
        type: 'int'
    }, {
        name: 'topla_estructuras_medicion_cau',
        type: 'int'
    }, {
        name: 'topla_menor_caudal_operacion_diseno',
        type: 'int'
    }])
});

acu_plantatratamiento_datastore3.load({
    callback: function(){
        var registro = acu_plantatratamiento_datastore3.getAt(0);
        form_acu_plantatratamiento_aguapotable3.getForm().loadRecord(registro);
    }
});

form_acu_plantatratamiento_aguapotable3.add({
    xtype: 'fieldset',
    title: 'Planta de tratamiento de agua potable',
    labelWidth: 300,
    height: 330,
    items: [{
        xtype: 'label',
        labelSeparator: '',
        fieldLabel: '<b>TECNOLOGÍA UTILIZADA</b>'
    }, {
        layout: 'form',
        labelWidth: 200,
        items: [topla_tecnologia_utilizada_ct]
    }, {
        xtype: 'label',
        labelSeparator: '',
        fieldLabel: '<b>ESTADO DE LA PLANTA</b>'
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [topla_planta_ttmto_funciona]
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [topla_estructuras_medicion_cau]
    }, {
        layout: 'form',
        width: 500,
        labelWidth: 350,
        items: [topla_menor_caudal_operacion_diseno]
    }]
});

var panel_plantatratamiento = new Ext.Panel({
    renderTo: 'div_form_acu_plantatratamiento_aguapotable',
    autoWidth: true,
    items: [form_acu_plantatratamiento_aguapotable, form_acu_plantatratamiento_aguapotable2, form_acu_plantatratamiento_aguapotable3]
});

//form_acu_plantatratamiento_aguapotable3.render('div_form_acu_plantatratamiento_aguapotable3');
