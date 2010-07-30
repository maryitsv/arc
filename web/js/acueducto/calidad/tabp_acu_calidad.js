
var tabp_acu_administrativafinanciera = new Ext.TabPanel( {
    activeTab: 0,
	id: 'tabp_acu_calidad',
	renderTo: 'div_tabp_acu_calidad',
    frame: true,
    autoWidth: true,
	height: largo_panel+20,
    items: [
            {
				frame: true,
				title: 'Calidad del agua en la fuente',
				autoLoad: { url: url_arc+'acueducto_calidadaguafuente', scripts: true, scope: this }
			},
			{
				frame: true,
				title: 'Calidad del agua distribuida',
				autoLoad: { url: url_arc+'acueducto_calidadaguadistribuida', scripts: true, scope: this }
			}
           ]
} );

