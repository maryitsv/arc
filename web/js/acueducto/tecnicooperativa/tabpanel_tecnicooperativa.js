var tecnicooperativa_acueducto_tabpanel = new Ext.TabPanel({
    id: 'tecnicooperativa_acueducto_tabpanel',
    //width: 840,
    autoWidth: true,
    height: 405,
    activeTab: 0,
    frame: true,
    anchor: '100%',
    renderTo: 'div_tecnicooperativaacueducto',
    items: [{
        title: 'Abastecimiento.',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_sistemasabastecimiento', 'index'),
            scripts: true
        }
    }, {
        title: 'Componentes.',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_componentessistema', 'index'),
            scripts: true
        }
    }, {
        title: 'Captación',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_captacion', 'index'),
            scripts: true
        }
    }, {
        title: 'Aducción e impulsión.',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_aduccionimpulsion', 'index'),
            scripts: true
        }
    }, {
        title: 'Desarenador',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_desarenador', 'index'),
            scripts: true
        }
    }, {
        title: 'Planta tratamiento',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_plantatratamiento_aguapotable', 'index'),
            scripts: true
        }
    }, {
        title: 'Desinfección',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_desinfeccion', 'index'),
            scripts: true
        }
    }, {
        title: 'Almacenamiento',
        autoLoad: {
            url: getAbsoluteUrl('acueducto_tanque_almacenamiento', 'index'),
            scripts: true
        }
    }]
});
