var form_acu_conduccionaguacruda3 = new Ext.form.FormPanel({
    id: 'tecnicooperativaconduccionaguacruda3-form',
    autoWidth: true,
    height: 380,
    frame: true,
    hidden: true,
    buttons: [{
        text: 'Atrás',
        handler: function(){
            submit({
                form: form_acu_conduccionaguacruda3,
                url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'subirDatos3'),
                success: function(){
                    form_acu_conduccionaguacruda2.show();
                    form_acu_conduccionaguacruda3.hide();
                }
            });
        }
    }, {
        text: 'Siguiente',
        handler: function(){
            submit({
                form: form_acu_conduccionaguacruda3,
                url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'subirDatos3'),
                success: function(){
                    tecnicooperativa_acueducto_tabpanel.setActiveTab(9);
                }
            });
        }
    }]
});

var tolc_otro = {
    xtype: "checkbox",
    inputValue: 1,
    tabIndex: 18,
    id: "tolc_otro",
    name: "tolc_otro",
    fieldLabel: "Otro tipo",
    items: [{
        name: 'tolc_otro',
        inputValue: 1
    }],
    listeners: {
        check: function(radio, checked){
            var textfield = Ext.getCmp('tolc_otro_tipo_nombre').setDisabled(!checked);
            textfield.focus();
            var textfield = Ext.getCmp('tolc_otro_otro1_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro1_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro1_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro1_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro2_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro2_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro2_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro2_nombre').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro3_longitud').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro3_diametro').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro3_edad').setDisabled(!checked);
            var textfield = Ext.getCmp('tolc_otro_otro3_nombre').setDisabled(!checked);
        }
    }
}

var tolc_otro_tipo_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_tipo_nombre",
    name: "tolc_otro_tipo_nombre",
    allowBlank: false,
    hideLabel: true,
    fieldLabel: 'Otro tipo'
}

var tolc_otro_otro1_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro1_longitud",
    name: "tolc_otro_otro1_longitud",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro1_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro1_diametro",
    name: "tolc_otro_otro1_diametro",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro1_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro1_edad",
    name: "tolc_otro_otro1_edad",
    fieldLabel: "En otro1",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro1_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro1_nombre",
    name: "tolc_otro_otro1_nombre",
    hideLabel: true,
    fieldLabel: 'Otro tipo'
}

var tolc_otro_otro2_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro2_longitud",
    name: "tolc_otro_otro2_longitud",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro2_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro2_diametro",
    name: "tolc_otro_otro2_diametro",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro2_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro2_edad",
    name: "tolc_otro_otro2_edad",
    fieldLabel: "En otro2",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro2_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro2_nombre",
    name: "tolc_otro_otro2_nombre",
    hideLabel: true,
    fieldLabel: 'Otro tipo'
}

var tolc_otro_otro3_longitud = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro3_longitud",
    name: "tolc_otro_otro3_longitud",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro3_diametro = {
    xtype: "numberfield",
    maxLength: 17,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro3_diametro",
    name: "tolc_otro_otro3_diametro",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro3_edad = {
    xtype: "numberfield",
    minLength: 1,
    maxLength: 3,
    allowDecimals: false,
    allowNegative: false,
    value: 0,
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro3_edad",
    name: "tolc_otro_otro3_edad",
    fieldLabel: "En otro3",
    allowBlank: false,
    hideLabel: true
}

var tolc_otro_otro3_nombre = {
    xtype: 'textfield',
    width: 100,
    emptyText: '¿Otro? ¿Cuál?',
    disabled: true,
    tabIndex: 1,
    id: "tolc_otro_otro3_nombre",
    name: "tolc_otro_otro3_nombre",
    hideLabel: true,
    fieldLabel: 'Otro tipo'
}

var acu_conduccionaguacruda3_datastore = new Ext.data.Store({
    id: 'acu_conduccionaguacruda2_datastore',
    proxy: new Ext.data.HttpProxy({
        url: getAbsoluteUrl('acueducto_conduccionaguacruda', 'obtenerDatos'),
        method: 'POST'
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
    }, [{
        name: 'tolc_otro',
        type: 'int'
    }, {
        name: 'tolc_otro_tipo_nombre',
        type: 'string'
    }, {
        name: 'tolc_otro_otro1_longitud',
        type: 'int'
    }, {
        name: 'tolc_otro_otro1_diametro',
        type: 'int'
    }, {
        name: 'tolc_otro_otro1_edad',
        type: 'int'
    }, {
        name: 'tolc_otro_otro1_nombre',
        type: 'string'
    }, {
        name: 'tolc_otro_otro2_longitud',
        type: 'int'
    }, {
        name: 'tolc_otro_otro2_diametro',
        type: 'int'
    }, {
        name: 'tolc_otro_otro2_edad',
        type: 'int'
    }, {
        name: 'tolc_otro_otro2_nombre',
        type: 'string'
    }, {
        name: 'tolc_otro_otro3_longitud',
        type: 'int'
    }, {
        name: 'tolc_otro_otro3_diametro',
        type: 'int'
    }, {
        name: 'tolc_otro_otro3_edad',
        type: 'int'
    }, {
        name: 'tolc_otro_otro3_nombre',
        type: 'string'
    }])
});

acu_conduccionaguacruda3_datastore.load({
    callback: function(){
        var registro = acu_conduccionaguacruda3_datastore.getAt(0);
        form_acu_conduccionaguacruda3.getForm().loadRecord(registro);
    }
});

form_acu_conduccionaguacruda3.add({
    xtype: 'fieldset',
    title: 'Línea de conducción de agua cruda',
    height: 320,
    items: [{
        layout: 'column',
        items: [{
            layout: 'form',
            //            labelWidth: 60,
            items: [tolc_otro, tolc_otro_tipo_nombre]
        }, {
            layout: 'form',
            labelWidth: 150,
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Material</b>',
                labelSeparator: ''
            }, tolc_otro_otro1_nombre, tolc_otro_otro2_nombre, tolc_otro_otro3_nombre]
        }, {
            layout: 'form',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Longitud(metros)</b>',
                labelSeparator: ''
            }, tolc_otro_otro1_longitud, tolc_otro_otro2_longitud, tolc_otro_otro3_longitud]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Diámetro</b>',
                labelSeparator: ''
            }, tolc_otro_otro1_diametro, tolc_otro_otro2_diametro, tolc_otro_otro3_diametro]
        }, {
            layout: 'form',
            bodyStyle: 'padding-left: 50px;',
            items: [{
                xtype: 'label',
                fieldLabel: '<b>Edad(años)</b>',
                labelSeparator: ''
            }, tolc_otro_otro1_edad, tolc_otro_otro2_edad, tolc_otro_otro3_edad]
        }]
    }]
});

var panel_conduccionaguacruda = new Ext.Panel({
    renderTo: 'div_form_acu_conduccionaguacruda',
    autoWidth: true,
    items: [form_acu_conduccionaguacruda, form_acu_conduccionaguacruda2, form_acu_conduccionaguacruda3]
});

//form_acu_conduccionaguacruda3.render('div_form_acu_conduccionaguacruda3');
