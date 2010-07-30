

	var acu_microcuenca_tabpanel = new Ext.TabPanel( {
	    id:'acu_microcuenca_tabpanel',
	    activeTab: 0,
	    frame: true,
	    autoWidth: true,
		height: largo_panel+20,
		monitorResize : true,
	   // border:false,
	    renderTo: 'div_tabp_acueducto_microcuenca',
		items: [	  
                 {
				frame: true,
				title: 'Informacion general.',
				id: 'acueducto_informaciongeneralmicrocuencas',
				autoLoad: { url: url_arc+'acueducto_informaciongeneralmicrocuencas', scripts: true, scope: this }
				},
				/*{
					frame: true,
					title: 'Fuentes',
					id: 'acueducto_fuentes',
					autoLoad: { url: url_arc+'acueducto_fuentes', scripts: true, scope: this }
				},*/
				{
					frame: true,
					title: 'Cantidad agua en las fuentes',
					id: 'acueducto_fuentes',
					autoLoad: { url: url_arc+'acueducto_fuentes', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Proteccion de la fuentes.',
					id: 'acueducto_proteccionfuentessuperficialesagua',
					autoLoad: { url: url_arc+'acueducto_proteccionfuentessuperficialesagua', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'actividades que inciden en la calidad y cantidad de agua',
					id: 'acueducto_calidadcantidadagua',
					autoLoad: { url: url_arc+'acueducto_calidadcantidadagua', scripts: true, scope: this }
				}
	           ]
	    } );

