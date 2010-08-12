
	var alc_tecnicooperativacombinadoalcantarillado_datos_datastore = new Ext.data.Store({
        id: 'alc_tecnicooperativacombinadoalcantarillado_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'alcantarillado_tecnicooperativacombinadoalcantarillado/obtenerDatosTecnicooperativacombinadoalcantarillado', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
				  {name: 'alc_tocca_caja_domiciliar', type: 'int'},
				  {name: 'alc_tocca_colectores', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion', type: 'int'},
				  {name: 'alc_tocca_sumideros', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo', type: 'int'},
				  {name: 'alc_tocca_emisor_final', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga', type: 'int'},
							  
				  {name: 'alc_tocca_caja_domiciliar_funciona', type: 'int'},
				  {name: 'alc_tocca_colectores_funciona', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion_funciona', type: 'int'},
				  {name: 'alc_tocca_sumideros_funciona', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion_funciona', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo_funciona', type: 'int'},
				  {name: 'alc_tocca_emisor_final_funciona', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga_funciona', type: 'int'},
				
				  {name: 'alc_tocca_caja_domiciliar_se_usa', type: 'int'},
				  {name: 'alc_tocca_colectores_se_usa', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion_se_usa', type: 'int'},
				  {name: 'alc_tocca_sumideros_se_usa', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion_se_usa', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo_se_usa', type: 'int'},
				  {name: 'alc_tocca_emisor_final_se_usa', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga_se_usa', type: 'int'},

				  {name: 'alc_tocca_caja_domiciliar_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_colectores_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_sumideros_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_emisor_final_problema_taponamiento', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga_problema_taponamiento', type: 'int'},

				  {name: 'alc_tocca_caja_domiciliar_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_colectores_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_sumideros_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_emisor_final_problema_rebose', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga_problema_rebose', type: 'int'},
							  
				  {name: 'alc_tocca_caja_domiciliar_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_colectores_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_sumideros_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_emisor_final_problema_rotura', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga_problema_rotura', type: 'int'},
				 
				  {name: 'alc_tocca_caja_domiciliar_problema_olor', type: 'int'},
				  {name: 'alc_tocca_colectores_problema_olor', type: 'int'},
				  {name: 'alc_tocca_camara_inspeccion_problema_olor', type: 'int'},
				  {name: 'alc_tocca_sumideros_problema_olor', type: 'int'},
				  {name: 'alc_tocca_estructura_separacion_problema_olor', type: 'int'},
				  {name: 'alc_tocca_estacion_bombeo_problema_olor', type: 'int'},
				  {name: 'alc_tocca_emisor_final_problema_olor', type: 'int'},
				  {name: 'alc_tocca_estructura_descarga_problema_olor', type: 'int'}
		])
	});


	
        //todo opcion caja_domiciliar
	var alc_tocca_caja_domiciliar = new Ext.form.Checkbox({	
		  xtype: 'checkbox', 
		  fieldLabel: 'Caja domiciliar',
		  inputValue: 1,
		  id: 'alc_tocca_caja_domiciliar',
		  name:'alc_tocca_caja_domiciliar',
		  listeners:
		  {
			  'render':function(){
				  ayuda('alc_tocca_caja_domiciliar',ayuda_alc_tocca_caja_domiciliar);
			  },
			  'check':function(checkbox,checked){
				  
				  if(!checked){
				  Ext.getCmp('alc_tocca_caja_domiciliar_funciona').reset();
				  Ext.getCmp('alc_tocca_caja_domiciliar_se_usa').reset();
				  Ext.getCmp('alc_tocca_caja_domiciliar_problemas').reset();

				  }
				  Ext.getCmp('alc_tocca_caja_domiciliar_funciona').setDisabled(!checked);
				  Ext.getCmp('alc_tocca_caja_domiciliar_se_usa').setDisabled(!checked);
				  Ext.getCmp('alc_tocca_caja_domiciliar_problemas').setDisabled(!checked);	
								
			  }
		  }
	  });

	

	var alc_tocca_caja_domiciliar_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		layout: 'column',
		columns:[ 35, 35],
		id: 'alc_tocca_caja_domiciliar_funciona', 							
		items: [{
					width: 35,
					items: [
						{ xtype: 'label', html: 'Si', cls:'x-form-check-group-label'},
						{ name: 'alc_tocca_caja_domiciliar_funciona', 
							id: 'alc_tocca_caja_domiciliar_funciona_si', 
							inputValue: 1
						}
						]
				},{
					width: 35,
					items: [
						{ xtype: 'label', html: 'No', cls:'x-form-check-group-label'},
						{ name: 'alc_tocca_caja_domiciliar_funciona',
							id: 'alc_tocca_caja_domiciliar_funciona_no',
							inputValue: 0
							}
						]
			}],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_caja_domiciliar_funciona',ayuda_alc_tocca_caja_domiciliar_funciona);
			}
		}
	});

	var alc_tocca_caja_domiciliar_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		layout: 'column',
		columns:[ 35, 35],
		id: 'alc_tocca_caja_domiciliar_se_usa', 							
		items: [{
					width: 35,
					items: [
						{ xtype: 'label', html: 'Si', cls:'x-form-check-group-label'},
						{ name: 'alc_tocca_caja_domiciliar_se_usa', 
							id: 'alc_tocca_caja_domiciliar_se_usa_si', 
							inputValue: 1
						}
						]
				},{
					width: 35,
					items: [
						{ xtype: 'label', html: 'No', cls:'x-form-check-group-label'},
						{ name: 'alc_tocca_caja_domiciliar_se_usa',
							id: 'alc_tocca_caja_domiciliar_se_usa_no',
							inputValue: 0
							}
						]
		}],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_caja_domiciliar_se_usa',ayuda_alc_tocca_caja_domiciliar_se_usa);
			}
		}
	});

	var alc_tocca_problemas_cajadomiciliar_width=35;
	var alc_tocca_problemas_otros_width=30;
	var alc_tocca_caja_domiciliar_problemas = new Ext.form.CheckboxGroup({
		xtype: 'checkboxGroup',
		layout: 'column',
		columns:4,
		id: 'alc_tocca_caja_domiciliar_problemas', 							
		items: [{
				
				items: [
					{ xtype: 'label', html: 'TP', cls:'x-form-check-group-label',width: alc_tocca_problemas_cajadomiciliar_width},
					{
						xtype: 'checkbox', 
						width: alc_tocca_problemas_cajadomiciliar_width,
						inputValue: 1,
						//id: 'alc_tocca_caja_domiciliar_problema_taponamiento',
						name:'alc_tocca_caja_domiciliar_problema_taponamiento',
						listeners:
						{
							'render':function(){
							//	ayuda('alc_tocca_caja_domiciliar_problema_taponamiento',ayuda_alc_tocca_caja_domiciliar_problema_taponamiento);
							}
						}
					}
					]
			},{
				items: [
					{ xtype: 'label', html: 'RB', cls:'x-form-check-group-label',width: alc_tocca_problemas_cajadomiciliar_width},
					{
						xtype: 'checkbox', 
						width: alc_tocca_problemas_cajadomiciliar_width,
						inputValue: 1,
						//id: 'alc_tocca_caja_domiciliar_problema_rebose',
						name:'alc_tocca_caja_domiciliar_problema_rebose',
						listeners:
						{
							'render':function(){
								//ayuda('alc_tocca_caja_domiciliar_problema_rebose',ayuda_alc_tocca_caja_domiciliar_problema_rebose);
							}
						}
					}
					]
			},{
				
				items: [
					{ xtype: 'label', html: 'RT', cls:'x-form-check-group-label',width: alc_tocca_problemas_cajadomiciliar_width},
					{
						xtype: 'checkbox', 
						width: alc_tocca_problemas_cajadomiciliar_width,
						inputValue: 1,
						//id: 'alc_tocca_caja_domiciliar_problema_rotura',
						name:'alc_tocca_caja_domiciliar_problema_rotura',
						listeners:
						{
							'render':function(){
								//ayuda('alc_tocca_caja_domiciliar_problema_rotura',ayuda_alc_tocca_caja_domiciliar_problema_rotura);
							}
						}
					}
					]
			},{
				
				items: [
					{ xtype: 'label', html: 'OL', cls:'x-form-check-group-label',width: alc_tocca_problemas_cajadomiciliar_width},
					{
						xtype: 'checkbox', 
						width: alc_tocca_problemas_cajadomiciliar_width,
						inputValue: 1,
						//id: 'alc_tocca_caja_domiciliar_problema_olor',
						name:'alc_tocca_caja_domiciliar_problema_olor',
						listeners:
						{
							'render':function(){
							//	ayuda('alc_tocca_caja_domiciliar_problema_olor',ayuda_alc_tocca_caja_domiciliar_problema_olor);
							}
						}
					}
					]
			}]
				
	});


	//todo colectores
	var alc_tocca_colectores = new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: 'Colectores',
		inputValue: 1,
		id: 'alc_tocca_colectores',
		name: 'alc_tocca_colectores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_colectores',ayuda_alc_tocca_colectores);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_colectores_funciona').reset();
				Ext.getCmp('alc_tocca_colectores_problemas').reset();
				Ext.getCmp('alc_tocca_colectores_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_colectores_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_colectores_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_colectores_se_usa').setDisabled(!checked);
					
			}
		}
	});


	var alc_tocca_colectores_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_colectores_funciona',
		items: [
			{ 	
				name: 'alc_tocca_colectores_funciona',
				id: 'alc_tocca_colectores_funciona_si',
				inputValue: 1
			},
			{ 
				name: 'alc_tocca_colectores_funciona',
				id: 'alc_tocca_colectores_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_colectores_funciona',ayuda_alc_tocca_colectores_funciona);
			}
		}
	});

	var alc_tocca_colectores_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_colectores_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_colectores_se_usa',
				id: 'alc_tocca_colectores_se_usa_si',
				inputValue: 1
			},
			{ 
				name: 'alc_tocca_colectores_se_usa',
				id: 'alc_tocca_colectores_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_colectores_se_usa',ayuda_alc_tocca_colectores_se_usa);
			}
		}					
	});


	var alc_tocca_colectores_problemas = new Ext.form.CompositeField({
		id:'alc_tocca_colectores_problemas',
		name:'alc_tocca_colectores_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_colectores_problema_taponamiento',
				name:'alc_tocca_colectores_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_colectores_problema_taponamiento',ayuda_alc_tocca_colectores_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_colectores_problema_rebose',
				name:'alc_tocca_colectores_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_colectores_problema_rebose',ayuda_alc_tocca_colectores_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_colectores_problema_rotura',
				name:'alc_tocca_colectores_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_colectores_problema_rotura',ayuda_alc_tocca_colectores_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_colectores_problema_olor',
				name:'alc_tocca_colectores_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_colectores_problema_olor',ayuda_alc_tocca_colectores_problema_olor);
					}
				}
			}
		]
	});



	//todo camara
	var alc_tocca_camara_inspeccion = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Camara inspeccion',
		inputValue: 1,
		id: 'alc_tocca_camara_inspeccion',
		name: 'alc_tocca_camara_inspeccion',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_camara_inspeccion',ayuda_alc_tocca_camara_inspeccion);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_camara_inspeccion_funciona').reset();
				Ext.getCmp('alc_tocca_camara_inspeccion_problemas').reset();
				Ext.getCmp('alc_tocca_camara_inspeccion_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_camara_inspeccion_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_camara_inspeccion_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_camara_inspeccion_se_usa').setDisabled(!checked);									
				
			}
		}
	});


	var alc_tocca_camara_inspeccion_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_camara_inspeccion_funciona',
		items: [
			{ 	
				name: 'alc_tocca_camara_inspeccion_funciona',
				id: 'alc_tocca_camara_inspeccion_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_camara_inspeccion_funciona',
				id: 'alc_tocca_camara_inspeccion_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_camara_inspeccion_funciona',ayuda_alc_tocca_camara_inspeccion_funciona);
			}
		}

	});

	var alc_tocca_camara_inspeccion_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_camara_inspeccion_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_camara_inspeccion_se_usa',
				id: 'alc_tocca_camara_inspeccion_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_camara_inspeccion_se_usa',
				id: 'alc_tocca_camara_inspeccion_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_camara_inspeccion_se_usa',ayuda_alc_tocca_camara_inspeccion_se_usa);
			}
		}
	});

	var alc_tocca_camara_inspeccion_problemas = new Ext.form.CompositeField({
		id:'alc_tocca_camara_inspeccion_problemas',
		name:'alc_tocca_camara_inspeccion_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_camara_inspeccion_problema_taponamiento',
				name:'alc_tocca_camara_inspeccion_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_camara_inspeccion_problema_taponamiento',ayuda_alc_tocca_camara_inspeccion_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_camara_inspeccion_problema_rebose',
				name:'alc_tocca_camara_inspeccion_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_camara_inspeccion_problema_rebose',ayuda_alc_tocca_camara_inspeccion_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_camara_inspeccion_problema_rotura',
				name:'alc_tocca_camara_inspeccion_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_camara_inspeccion_problema_rotura',ayuda_alc_tocca_camara_inspeccion_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_camara_inspeccion_problema_olor',
				name:'alc_tocca_camara_inspeccion_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_camara_inspeccion_problema_olor',ayuda_alc_tocca_camara_inspeccion_problema_olor);
					}
				}
			}
		]
	});
	//sumideros 
var alc_tocca_sumideros = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Sumideros',
		inputValue: 1,
		id: 'alc_tocca_sumideros',
		name: 'alc_tocca_sumideros',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_sumideros',ayuda_alc_tocca_sumideros);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_sumideros_funciona').reset();
				Ext.getCmp('alc_tocca_sumideros_problemas').reset();
				Ext.getCmp('alc_tocca_sumideros_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_sumideros_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_sumideros_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_sumideros_se_usa').setDisabled(!checked);									
				
			}
		}
	});


	var alc_tocca_sumideros_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_sumideros_funciona',
		items: [
			{ 	
				name: 'alc_tocca_sumideros_funciona',
				id: 'alc_tocca_sumideros_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_sumideros_funciona',
				id: 'alc_tocca_sumideros_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_sumideros_funciona',ayuda_alc_tocca_sumideros_funciona);
			}
		}

	});

	var alc_tocca_sumideros_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_sumideros_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_sumideros_se_usa',
				id: 'alc_tocca_sumideros_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_sumideros_se_usa',
				id: 'alc_tocca_sumideros_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_sumideros_se_usa',ayuda_alc_tocca_sumideros_se_usa);
			}
		}
	});

	var alc_tocca_sumideros_problemas = new Ext.form.CompositeField({
		id:'alc_tocca_sumideros_problemas',
		name:'alc_tocca_sumideros_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_sumideros_problema_taponamiento',
				name:'alc_tocca_sumideros_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_sumideros_problema_taponamiento',ayuda_alc_tocca_sumideros_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_sumideros_problema_rebose',
				name:'alc_tocca_sumideros_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_sumideros_problema_rebose',ayuda_alc_tocca_sumideros_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_sumideros_problema_rotura',
				name:'alc_tocca_sumideros_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_sumideros_problema_rotura',ayuda_alc_tocca_sumideros_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_sumideros_problema_olor',
				name:'alc_tocca_sumideros_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_sumideros_problema_olor',ayuda_alc_tocca_sumideros_problema_olor);
					}
				}
			}
		]
	});


//todo estructura_separacion
	var alc_tocca_estructura_separacion = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Estructura separacion',
		inputValue: 1,
		id: 'alc_tocca_estructura_separacion',
		name: 'alc_tocca_estructura_separacion',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estructura_separacion',ayuda_alc_tocca_estructura_separacion);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_estructura_separacion_funciona').reset();
				Ext.getCmp('alc_tocca_estructura_separacion_problemas').reset();
				Ext.getCmp('alc_tocca_estructura_separacion_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_estructura_separacion_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_estructura_separacion_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_estructura_separacion_se_usa').setDisabled(!checked);									
				
			}
		}
	});


	var alc_tocca_estructura_separacion_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_estructura_separacion_funciona',
		items: [
			{ 	
				name: 'alc_tocca_estructura_separacion_funciona',
				id: 'alc_tocca_estructura_separacion_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_estructura_separacion_funciona',
				id: 'alc_tocca_estructura_separacion_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estructura_separacion_funciona',ayuda_alc_tocca_estructura_separacion_funciona);
			}
		}

	});

	var alc_tocca_estructura_separacion_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_estructura_separacion_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_estructura_separacion_se_usa',
				id: 'alc_tocca_estructura_separacion_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_estructura_separacion_se_usa',
				id: 'alc_tocca_estructura_separacion_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estructura_separacion_se_usa',ayuda_alc_tocca_estructura_separacion_se_usa);
			}
		}
	});

	var alc_tocca_estructura_separacion_problemas = new Ext.form.CompositeField({
		id:'alc_tocca_estructura_separacion_problemas',
		name:'alc_tocca_estructura_separacion_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_separacion_problema_taponamiento',
				name:'alc_tocca_estructura_separacion_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_separacion_problema_taponamiento',ayuda_alc_tocca_estructura_separacion_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_separacion_problema_rebose',
				name:'alc_tocca_estructura_separacion_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_separacion_problema_rebose',ayuda_alc_tocca_estructura_separacion_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_separacion_problema_rotura',
				name:'alc_tocca_estructura_separacion_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_separacion_problema_rotura',ayuda_alc_tocca_estructura_separacion_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_separacion_problema_olor',
				name:'alc_tocca_estructura_separacion_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_separacion_problema_olor',ayuda_alc_tocca_estructura_separacion_problema_olor);
					}
				}
			}
		]
	});

	//todo bombeo
	var alc_tocca_estacion_bombeo = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Estaci&oacute;n de bombeo',
		inputValue: 1,
		id: 'alc_tocca_estacion_bombeo',
		name: 'alc_tocca_estacion_bombeo',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estacion_bombeo',ayuda_alc_tocca_estacion_bombeo);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_estacion_bombeo_funciona').reset();
				Ext.getCmp('alc_tocca_estacion_bombeo_problemas').reset();
				Ext.getCmp('alc_tocca_estacion_bombeo_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_estacion_bombeo_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_estacion_bombeo_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_estacion_bombeo_se_usa').setDisabled(!checked);									
				
			}
		}
	});

	

	var alc_tocca_estacion_bombeo_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_estacion_bombeo_funciona',
		items: [
			{ 	
				name: 'alc_tocca_estacion_bombeo_funciona',
				id: 'alc_tocca_estacion_bombeo_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_estacion_bombeo_funciona',
				id: 'alc_tocca_estacion_bombeo_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estacion_bombeo_funciona',ayuda_alc_tocca_estacion_bombeo_funciona);
			}
		}
	});


	var alc_tocca_estacion_bombeo_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_estacion_bombeo_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_estacion_bombeo_se_usa',
				id: 'alc_tocca_estacion_bombeo_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_estacion_bombeo_se_usa',
				id: 'alc_tocca_estacion_bombeo_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estacion_bombeo_se_usa',ayuda_alc_tocca_estacion_bombeo_se_usa);
			}
		}
	});

	
	var alc_tocca_estacion_bombeo_problemas = new Ext.form.CompositeField({
		id: 'alc_tocca_estacion_bombeo_problemas',
		name: 'alc_tocca_estacion_bombeo_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estacion_bombeo_problema_taponamiento',
				name:'alc_tocca_estacion_bombeo_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estacion_bombeo_problema_taponamiento',ayuda_alc_tocca_estacion_bombeo_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estacion_bombeo_problema_rebose',
				name:'alc_tocca_estacion_bombeo_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estacion_bombeo_problema_rebose',ayuda_alc_tocca_estacion_bombeo_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estacion_bombeo_problema_rotura',
				name:'alc_tocca_estacion_bombeo_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estacion_bombeo_problema_rotura',ayuda_alc_tocca_estacion_bombeo_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estacion_bombeo_problema_olor',
				name:'alc_tocca_estacion_bombeo_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estacion_bombeo_problema_olor',ayuda_alc_tocca_estacion_bombeo_problema_olor);
					}
				}
			}
		]
	});

	//todo emisor final
	var alc_tocca_emisor_final= new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Emisor final',
		inputValue: 1,
		id: 'alc_tocca_emisor_final',
		name: 'alc_tocca_emisor_final',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_emisor_final',ayuda_alc_tocca_emisor_final);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_emisor_final_funciona').reset();
				Ext.getCmp('alc_tocca_emisor_final_problemas').reset();
				Ext.getCmp('alc_tocca_emisor_final_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_emisor_final_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_emisor_final_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_emisor_final_se_usa').setDisabled(!checked);									
			
			}
		}
	});

	

	var alc_tocca_emisor_final_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_emisor_final_funciona',
		items: [
			{ 	
				name: 'alc_tocca_emisor_final_funciona',
				id: 'alc_tocca_emisor_final_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_emisor_final_funciona',
				id: 'alc_tocca_emisor_final_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_emisor_final_funciona',ayuda_alc_tocca_emisor_final_funciona);
			}
		}
	});

	var alc_tocca_emisor_final_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_emisor_final_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_emisor_final_se_usa',
				id: 'alc_tocca_emisor_final_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_emisor_final_se_usa',
				id: 'alc_tocca_emisor_final_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_emisor_final_se_usa',ayuda_alc_tocca_emisor_final_se_usa);
			}
		}
	});

	var alc_tocca_emisor_final_problemas = new Ext.form.CompositeField({
		id:'alc_tocca_emisor_final_problemas',
		name:'alc_tocca_emisor_final_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_emisor_final_problema_taponamiento',
				name:'alc_tocca_emisor_final_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_emisor_final_problema_taponamiento',ayuda_alc_tocca_emisor_final_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_emisor_final_problema_rebose',
				name:'alc_tocca_emisor_final_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_emisor_final_problema_rebose',ayuda_alc_tocca_emisor_final_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_emisor_final_problema_rotura',
				name:'alc_tocca_emisor_final_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_emisor_final_problema_rotura',ayuda_alc_tocca_emisor_final_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_emisor_final_problema_olor',
				name:'alc_tocca_emisor_final_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_emisor_final_problema_olor',ayuda_alc_tocca_emisor_final_problema_olor);
					}
				}
			}
		]
	});

	//todo descarga
	var alc_tocca_estructura_descarga = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Estructura descarga',
		inputValue: 1,
		id: 'alc_tocca_estructura_descarga',
		name: 'alc_tocca_estructura_descarga',
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estructura_descarga',ayuda_alc_tocca_estructura_descarga);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tocca_estructura_descarga_funciona').reset();
				Ext.getCmp('alc_tocca_estructura_descarga_problemas').reset();
				Ext.getCmp('alc_tocca_estructura_descarga_se_usa').reset();
				}
				Ext.getCmp('alc_tocca_estructura_descarga_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tocca_estructura_descarga_problemas').setDisabled(!checked);
				Ext.getCmp('alc_tocca_estructura_descarga_se_usa').setDisabled(!checked);									
			
			}
		}
	});

	
	var alc_tocca_estructura_descarga_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_estructura_descarga_funciona',
		items: [
			{ 	
				name: 'alc_tocca_estructura_descarga_funciona',
				id: 'alc_tocca_estructura_descarga_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_estructura_descarga_funciona',
				id: 'alc_tocca_estructura_descarga_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estructura_descarga_funciona',ayuda_alc_tocca_estructura_descarga_funciona);
			}
		}
	});

	var alc_tocca_estructura_descarga_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tocca_estructura_descarga_se_usa',
		items: [
			{ 	
				name: 'alc_tocca_estructura_descarga_se_usa',
				id: 'alc_tocca_estructura_descarga_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tocca_estructura_descarga_se_usa',
				id: 'alc_tocca_estructura_descarga_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tocca_estructura_descarga_se_usa',ayuda_alc_tocca_estructura_descarga_se_usa);
			}
		}
	});

	var alc_tocca_estructura_descarga_problemas = new Ext.form.CompositeField({
		id:'alc_tocca_estructura_descarga_problemas',
		name:'alc_tocca_estructura_descarga_problemas',
		height:22,
		defaults:{width: alc_tocca_problemas_otros_width },
		items: [
			{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_descarga_problema_taponamiento',
				name:'alc_tocca_estructura_descarga_problema_taponamiento',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_descarga_problema_taponamiento',ayuda_alc_tocca_estructura_descarga_problema_taponamiento);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_descarga_problema_rebose',
				name:'alc_tocca_estructura_descarga_problema_rebose',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_descarga_problema_rebose',ayuda_alc_tocca_estructura_descarga_problema_rebose);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_descarga_problema_rotura',
				name:'alc_tocca_estructura_descarga_problema_rotura',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_descarga_problema_rotura',ayuda_alc_tocca_estructura_descarga_problema_rotura);
					}
				}
			},{
				xtype: 'checkbox', 
				inputValue: 1,
				id: 'alc_tocca_estructura_descarga_problema_olor',
				name:'alc_tocca_estructura_descarga_problema_olor',
				listeners:
				{
					'render':function(){
						ayuda('alc_tocca_estructura_descarga_problema_olor',ayuda_alc_tocca_estructura_descarga_problema_olor);
					}
				}
			}
		]
	});
	

	var alc_tecnicooperativacombinadoalcantarillado_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[      
			{xtype:'label',html:'<br/>'},
			{
			 xtype:'fieldset',
			 title:'Sistema de alcantarillado colectivo',
			 layout:'column',
			 defaults:{layout:'form',border: false},
			 items:
			 [
				{  
					width:210,
					bodyStyle: 'padding-top:23px;',
					defaults:{labelStyle: 'width:176px;'+letra},
					items:
					[
						{xtype: 'label',html: 'Soluci&oacute;n colectiva', cls:'x-form-check-group-label'},
						alc_tocca_caja_domiciliar,
						alc_tocca_colectores,
						alc_tocca_camara_inspeccion,
						alc_tocca_sumideros,
						alc_tocca_estructura_separacion,
						alc_tocca_estacion_bombeo,
						alc_tocca_emisor_final,
						alc_tocca_estructura_descarga
						
					]
				},

				//fuciona/
				{
					width: 70,
					title: 'Funciona?',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true,columns:[ 35, 35]},
					items:
					[ 	
						alc_tocca_caja_domiciliar_funciona,
						alc_tocca_colectores_funciona,
						alc_tocca_camara_inspeccion_funciona,
						alc_tocca_sumideros_funciona,
						alc_tocca_estructura_separacion_funciona,
						alc_tocca_estacion_bombeo_funciona,
						alc_tocca_emisor_final_funciona,
						alc_tocca_estructura_descarga_funciona
						
					]
				},
//se usa
				{
					width: 70,
					title: 'Se usa?',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true,columns:[ 35, 35]},
					items:
					[ 	
						alc_tocca_caja_domiciliar_se_usa,
						alc_tocca_colectores_se_usa,
						alc_tocca_camara_inspeccion_se_usa,
						alc_tocca_sumideros_se_usa,
						alc_tocca_estructura_separacion_se_usa,
						alc_tocca_estacion_bombeo_se_usa,
						alc_tocca_emisor_final_se_usa,
						alc_tocca_estructura_descarga_se_usa
					]
				},
				{
					width: 150,
					title: 'Problemas',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true },
					items:
					[ 	
						alc_tocca_caja_domiciliar_problemas,
						alc_tocca_colectores_problemas,
						alc_tocca_camara_inspeccion_problemas,
						alc_tocca_sumideros_problemas,
						alc_tocca_estructura_separacion_problemas,
						alc_tocca_estacion_bombeo_problemas,
						alc_tocca_emisor_final_problemas,
						alc_tocca_estructura_descarga_problemas
					]
				}
				]
			}
		],
		renderTo: 'div_form_alc_tecnicooperativacombinadoalcantarillado',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_tecnicooperativa_tabpanel.setActiveTab(2);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativacombinadoalcantarillado_subirdatos();
	
				alc_tecnicooperativa_tabpanel.setActiveTab(0);
				
			}
		}]
	});
	
	function alc_tecnicooperativacombinadoalcantarillado_subirdatos()
	{
		subirDatos(
			alc_tecnicooperativacombinadoalcantarillado_panel,
			'alcantarillado_tecnicooperativacombinadoalcantarillado/actualizarTecnicooperativacombinadoalcantarillado',
			{},
			function(){}
		);
		
	}
	
	alc_tecnicooperativacombinadoalcantarillado_datos_datastore.load({
	  callback: function() {
		var record = alc_tecnicooperativacombinadoalcantarillado_datos_datastore.getAt(0);
		alc_tecnicooperativacombinadoalcantarillado_panel.getForm().loadRecord(record);	
	  }
	});
