   
	var acu_comercial_tabpanel = new Ext.TabPanel( {
	    id:'acu_comercial_tabpanel',
	    activeTab: 0,
	    frame: true,
	    autoWidth: true,
		height: largo_panel+20,
		monitorResize : true,
	    border:true,
	    auroScroll: true,
		renderTo: 'div_tabp_acueducto_comercial',
	    items: [	  
				{
					frame: true,
					title: 'An&aacute;lisis de cobertura.',
					id: 'acueducto_analisiscobertura',
					autoLoad: { url: url_arc+'acueducto_analisiscobertura', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Facturaci&oacute;n y recaudo.',
					id: 'acueducto_facturacionyrecaudo',
					autoLoad: { url: url_arc+'acueducto_facturacionyrecaudo', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Fondo de solidaridad.',
					id: 'acueducto_fondosolidaridadredistribucioningresos',
					autoLoad: { url: url_arc+'acueducto_fondosolidaridadredistribucioningresos', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Peticiones, quejas y recursos.',
					id: 'acueducto_peticionesquejasrecursos',
					autoLoad: { url: url_arc+'acueducto_peticionesquejasrecursos', scripts: true, scope: this }
				}
	           ]
	    } );

