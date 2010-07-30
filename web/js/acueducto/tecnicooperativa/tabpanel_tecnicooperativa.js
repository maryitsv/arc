var tecnicooperativa_acueducto_tabpanel = new Ext.TabPanel({
    id: 'tecnicooperativa_acueducto_tabpanel',
    width: 840,
    height: 405,
    activeTab: 0,
    frame: true,
    anchor: '100%',
    renderTo: 'div_tecnicooperativaacueducto',
    items: [{
        title: 'Paso 1',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_sistemasabastecimiento', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 2',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_componentessistema', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 3',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_captacion', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 4',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 5',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'index2'),
            scripts: true
        }
    }, {
        title: 'Paso 6',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_desarenador', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 7',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 8',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'index2'),
            scripts: true
        }
    }, {
        title: 'Paso 9',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'index3'),
            scripts: true
        }
    }, {
        title: 'Paso 10',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_desinfeccion', 'index'),
            scripts: true
        }
    }, {
        title: 'Paso 11',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'index'),
            scripts: true
        }
    }]
});
