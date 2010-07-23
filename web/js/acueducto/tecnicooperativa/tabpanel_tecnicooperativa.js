var tecnicooperativa_acueducto_tabpanel = new Ext.TabPanel({
    width: 840,
    height: 405,
    activeTab: 0,
    frame: true,
    anchor: '100%',
    items: [{
        title: 'Paso 1',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_tecnicooperativa', 'tecnicoOperativa'),
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
    }]
});
