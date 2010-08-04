
var tabp_acu_administrativafinanciera = new Ext.TabPanel( {
    activeTab: 0,
	id: 'tabp_acu_administrativafinanciera',
	renderTo: 'div_tabp_acu_administrativafinanciera',
    frame: true,
    autoWidth: true,
	height: largo_panel+20,
    items: [
            {
				frame: true,
				title: 'Informaci&oacute;n Contable.',
				autoLoad: { url: url_arc+'acueducto_informacioncontable', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Participaci&oacute;n Ciudadana.',
				autoLoad: { url: url_arc+'acueducto_participacionciudadana', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Capacitaci&oacute;n.',
				autoLoad: { url: url_arc+'acueducto_capacitacion', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Plan de Gestion y resultados.',
				autoLoad: { url: url_arc+'acueducto_gestionresultado', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Trabajadores y su vinculacion.',
				autoLoad: { url: url_arc+'acueducto_trabajadoresyvinculacion', scripts: true, scope: this }
			}
           ]
} );

