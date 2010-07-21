
	var alc_comercial_tabpanel = new Ext.TabPanel( {
	    id:'alc_comercial_tabpanel',
	    activeTab: 0,
	    frame: true,
	    autoWidth: true,
		height: largo_panel+20,
		monitorResize : true,
	    border:false,
	    auroScroll: true,
		renderTo: 'div_tabp_alcantarillado_comercial',
	    items: [	  
                 {
				frame: true,
				title: 'Analisis de cobertura',
				id: 'alcantarillado_analisiscobertura',
				autoLoad: { url: url_arc+'alcantarillado_analisiscobertura', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Facturacion y recaudo',
					id: 'alcantarillado_facturacionyrecaudo',
					autoLoad: { url: url_arc+'alcantarillado_facturacionyrecaudo', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Fondo de solidaridad',
					id: 'alcantarillado_fondosolidaridadredistribucioningresos',
					autoLoad: { url: url_arc+'alcantarillado_fondosolidaridadredistribucioningresos', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Peticiones, quejas y recursos',
					id: 'alcantarillado_peticionesquejasrecursos',
					autoLoad: { url: url_arc+'alcantarillado_peticionesquejasrecursos', scripts: true, scope: this }
				}
	           ]
	    } );

