
	var ase_comercial_tabpanel = new Ext.TabPanel( {
	    id:'ase_comercial_tabpanel',
	    activeTab: 0,
	    frame: true,
	    autoWidth: true,
		height: largo_panel+20,
		monitorResize : true,
	    border:false,
	    auroScroll: true,
		renderTo: 'div_tabp_aseo_comercial',
	    items: [	  
                 {
				frame: true,
				title: 'Analisis de cobertura',
				id: 'aseo_analisiscobertura',
				autoLoad: { url: url_arc+'aseo_analisiscobertura', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Facturacion y recaudo',
					id: 'aseo_facturacionyrecaudo',
					autoLoad: { url: url_arc+'aseo_facturacionyrecaudo', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Fondo de solidaridad',
					id: 'aseo_fondosolidaridadredistribucioningresos',
					autoLoad: { url: url_arc+'aseo_fondosolidaridadredistribucioningresos', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Peticiones, quejas y recursos',
					id: 'aseo_peticionesquejasrecursos',
					autoLoad: { url: url_arc+'aseo_peticionesquejasrecursos', scripts: true, scope: this }
				}
	           ]
	    } );

