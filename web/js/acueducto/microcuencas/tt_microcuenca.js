
var Microcuenca = function (servicio, rango) {
    Ext.QuickTips.init();

	Ext.BLANK_IMAGE_URL = '../extjs/resources/images/default/s.gif';

	microcuencaTabPanel = new Ext.TabPanel( {
	    id:'microcuencaTabPanel',
	    activeTab: 0,
	    frame: true,
	    autoWidth: true,
		height: largo_panel,
		monitorResize : true,
	    border:false,
	    auroScroll: true,
	    items: [	  
                // FondoSolidaridad('acueducto','>600'),
				proteccionFuentesProgramas('acueducto','>600'),
				{
	            	title: 'Proteccion de aguas',
					html:'trabajando'
	            	//autoLoad: {url: url_arc+'proteccionfuentessuperficialesagua', scripts: true, scope: this}
	            }
	           ]
	    } );
	
return microcuencaTabPanel;
}
