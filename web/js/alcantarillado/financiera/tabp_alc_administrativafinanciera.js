
var tabp_alc_administrativafinanciera = new Ext.TabPanel( {
    activeTab: 0,
	id: 'tabp_alc_administrativafinanciera',
	title: 'algo',
    frame: true,
    autoWidth: true,
	height: 200,
	height: largo_panel+20,
    items: [
            {
				frame: true,
				title: 'Informaci&oacute;n Contable',
				autoLoad: { url: url_arc+'alcantarillado_informacioncontable', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Participaci&oacute;n Ciudadana',
				autoLoad: { url: url_arc+'alcantarillado_participacionciudadana', scripts: true, scope: this }
			}
           ],
	renderTo: 'div_tabp_alc_administrativafinanciera',
} );