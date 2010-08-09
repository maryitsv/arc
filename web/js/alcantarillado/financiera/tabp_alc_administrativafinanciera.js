
var tabp_alc_administrativafinanciera = new Ext.TabPanel( {
    activeTab: 0,
	id: 'tabp_alc_administrativafinanciera',
	renderTo: 'div_tabp_alc_administrativafinanciera',
    frame: true,
    autoWidth: true,
	height: largo_panel+20,
    items: [
            {
				frame: true,
				title: 'Informaci&oacute;n Contable.',
				autoLoad: { url: url_arc+'alcantarillado_informacioncontable', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Participaci&oacute;n Ciudadana.',
				autoLoad: { url: url_arc+'alcantarillado_participacionciudadana', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Capacitaci&oacute;n.',
				autoLoad: { url: url_arc+'alcantarillado_capacitacion', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Trabajadores y su vinculaci&oacute;n.',
				autoLoad: { url: url_arc+'alcantarillado_trabajadoresyvinculacion', scripts: true, scope: this }
			}
           ]
} );

