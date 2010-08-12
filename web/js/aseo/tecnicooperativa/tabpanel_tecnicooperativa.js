var tecnicooperativa_aseo_tabpanel = new Ext.TabPanel({
    id: 'tecnicooperativa_aseo_tabpanel',
    autoWidth: true,
    height: 405,
    activeTab: 0,
    frame: true,
    anchor: '100%',
    renderTo: 'div_tecnicooperativaaseo',
    items: [{
        title: 'Actividades dentro del sistema de gesti&oacute;n de residuos sólidos',
        autoLoad: {
            url: getAbsoluteUrl('aseo_actividadesresiduossolidosaseo', 'index'),
            scripts: true
        }
    }, {
        title: '',
        autoLoad: {
            url: getAbsoluteUrl('', 'index'),
            scripts: true
        }
    }, {
        title: '',
        autoLoad: {
            url: getAbsoluteUrl('', 'index'),
            scripts: true
        }
    }, {
        title: '',
        autoLoad: {
            url: getAbsoluteUrl('', 'index'),
            scripts: true
        }
    }]
});
