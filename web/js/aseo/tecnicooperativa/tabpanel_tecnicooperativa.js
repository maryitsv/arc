var tecnicooperativa_aseo_tabpanel = new Ext.TabPanel({
    id: 'tecnicooperativa_aseo_tabpanel',
    autoWidth: true,
    height: largo_panel + 20,
    activeTab: 0,
    frame: true,
    renderTo: 'div_tecnicooperativaaseo',
    items: [{
        title: 'ASGRS',
        frame: true,
        autoLoad: {
            url: getAbsoluteUrl('aseo_actividadesresiduossolidosaseo', 'index'),
            scripts: true
        }
    }, {
        title: 'Servicio de recolecci&oacute;n',
        frame: true,
        autoLoad: {
            url: getAbsoluteUrl('aseo_comunidadserviciorecoleccion', 'index'),
            scripts: true
        }
    }, {
        title: 'Recolecci&oacute;n y Transporte',
        frame: true,
        autoLoad: {
            url: getAbsoluteUrl('aseo_vehiculorecoleccion', 'index'),
            scripts: true
        }
    },{
        title: 'Tratamiento y aprovechamiento',
        autoLoad: {
            url: getAbsoluteUrl('aseo_tratamientoaprovechamiento', 'index'),
            scripts: true
        }
    }, {
        title: '',
        frame: true,
        autoLoad: {
            url: getAbsoluteUrl('', 'index'),
            scripts: true
        }
    }]
});
