
var tabp_ase_administrativafinanciera = new Ext.TabPanel( {
    activeTab: 0,
	id: 'tabp_ase_administrativafinanciera',
	renderTo: 'div_tabp_ase_administrativafinanciera',
    frame: true,
    autoWidth: true,
	height: largo_panel+20,
    items: [
            {
				frame: true,
				title: 'Informaci&oacute;n Contable.',
				autoLoad: { url: url_arc+'aseo_informacioncontable', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Participaci&oacute;n Ciudadana.',
				autoLoad: { url: url_arc+'aseo_participacionciudadana', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Capacitaci&oacute;n.',
				autoLoad: { url: url_arc+'aseo_capacitacion', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Plan de Gesti&oacute;n y resultados.',
				autoLoad: { url: url_arc+'aseo_gestionresultado', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Trabajadores y su vinculaci&oacute;n.',
				autoLoad: { url: url_arc+'aseo_trabajadoresyvinculacion', scripts: true, scope: this }
			}
           ]
} );

