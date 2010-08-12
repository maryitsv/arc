   
	var alc_tecnicooperativa_tabpanel = new Ext.TabPanel( {
	    id:'alc_tecnicooperativa_tabpanel',
	    activeTab: 0,
	    frame: true,
	    autoWidth: true,
		height: largo_panel+20,
		monitorResize : true,
	    border:true,
	    auroScroll: true,
		renderTo: 'div_tabp_alcantarillado_tecnicooperativa',
	    items: [	  
				{
					frame: true,
					title: 'Actividades ejecuta',
					id: 'alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarillado',
					autoLoad: { url: url_arc+'alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarillado', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Soluci&oacute;n Colectiva',
					id: 'alcantarillado_tecnicooperativasolucioncolectivaalcantarillado ',
					autoLoad: { url: url_arc+'alcantarillado_tecnicooperativasolucioncolectivaalcantarillado', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Soluci&oacute;n Individual',
					id: 'alcantarillado_tecnicooperativasolucionindividualalcantarillado',
					autoLoad: { url: url_arc+'alcantarillado_tecnicooperativasolucionindividualalcantarillado', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Recoleci&oacute;n y transporte ',
					tooltip: 'Recoleci&oacute;n y transporte de excretas y aguas residuales',
					id: 'alcantarillado_tecnicooperativasanitarioalcantarillado',
					autoLoad: { url: url_arc+'alcantarillado_tecnicooperativasanitarioalcantarillado', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'Combinado',
					id: 'alcantarillado_tecnicooperativacombinadoalcantarillado',
					autoLoad: { url: url_arc+'alcantarillado_tecnicooperativacombinadoalcantarillado', scripts: true, scope: this }
				},
				{
					frame: true,
					title: 'otros',
					id: 'alcantarillado_',
					autoLoad: { url: url_arc+'alcantarillado_', scripts: true, scope: this }
				}
	           ]
	    } );

