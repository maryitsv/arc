
	/************************Formulario 1*******************/

	var acu_proteccionfuentessuperficialesagua_programas_datos_datastore = new Ext.data.Store({
        id: 'acu_proteccionfuentessuperficialesagua_programas_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_proteccionfuentessuperficialesagua/obtenerDatosProteccionfuentessuperficialesagua', 
                method: 'POST'
        }),
        baseParams:{
			formulario:'programas'
		}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_pfu_programas_aislamiento', type: 'int'},	    
                  {name: 'acu_pfu_programas_reforestacion', type: 'int'},
				  {name: 'acu_pfu_programas_mejoramiento_uso_suelo', type: 'int'},
				  {name: 'acu_pfu_programas_adquisicion_tierra', type: 'int'},
				  {name: 'acu_pfu_programas_educacion_ambiental', type: 'int'},
				  {name: 'acu_pfu_programas_reduccion_uso_agroquimicos', type: 'int'},
				  {name: 'acu_pfu_cobertura_forestal_area_protectora_cauce', type: 'int'},
				  {name: 'acu_pfu_aislamiento_franja_amarilla_microcuenca', type: 'int'},
				  {name: 'acu_pfu_area_microcuenca_propiedad_acueducto', type: 'int'},
				  {name: 'acu_pfu_extension_has', type: 'string'},
				  {name: 'acu_pfu_situacion_arriba_captacion_reserva', type: 'int'},
				  {name: 'acu_pfu_situacion_arriba_captacion_protegida', type: 'int'}
		])
    });

	var acu_proteccionfuentessuperficialesagua_programas_panel = new Ext.FormPanel({
		id:'acu_proteccionfuentessuperficialesagua_programas_panel',
		//renderTo: 'div_form_acu_proteccionfuentessuperficialesagua',
		tabtip: '<html>Protecci&oacute;n de las Fuentes superficiales de Agua</html>',
		autoWidth: true,
		height: largo_panel-15,
		layout: 'column',
		items:
		[
			{		
				bodyStyle: 'padding-right:10px;',
				columnWidth: '.4',
				layout:'form',
				items:
				[			
					{
						xtype:'fieldset',
						title: '<html>Programas</html>',
						autoWidth: true,
						autoHeight: true,
						defaultType:'checkbox',
						defaults: {hideLabel:true},
						items :
						[
							{
								xtype: 'label',
								style: letra,
								width: '100%',
								html: 'Indique qu&eacute; programas se adelantan actualmente para la protecci&oacute;n de las fuentes abastecedoras:'
							},
							{	
								id: 'acu_pfu_programas_aislamiento', 
								name:'acu_pfu_programas_aislamiento',
								boxLabel:'Aislamiento',
								inputValue: 1,
								listeners:
								{
									'render':function(){
										 ayuda('acu_pfu_programas_aislamiento',ayuda_acu_pfu_programas_aislamiento); 
										}
								}								
							},
							{	
								id: 'acu_pfu_programas_reforestacion',
								name: 'acu_pfu_programas_reforestacion',
								boxLabel:'Reforestaci&oacute;n',
								inputValue: 1,
								listeners:
								{
									'render':function(){
										 ayuda('acu_pfu_programas_reforestacion',ayuda_acu_pfu_programas_reforestacion); 
										}
								}
							},
							{
								id: 'acu_pfu_programas_mejoramiento_uso_suelo', 
								name: 'acu_pfu_programas_mejoramiento_uso_suelo', 
								boxLabel:'Mejoramiento en el Uso del Suelo',
								inputValue: 1,
								listeners:
								{
									'render':function(){
										 ayuda('acu_pfu_programas_mejoramiento_uso_suelo',ayuda_acu_pfu_programas_mejoramiento_uso_suelo); 
										}
								}
							},
							{	
								id: 'acu_pfu_programas_adquisicion_tierra', 
								name: 'acu_pfu_programas_adquisicion_tierra', 
								boxLabel:'Adquisici&oacute;n de tierras',
								inputValue: 1,
								listeners:
								{
									'render':function(){
										 ayuda('acu_pfu_programas_adquisicion_tierra',ayuda_acu_pfu_programas_adquisicion_tierra); 
										}
								}
							},
							{
								id: 'acu_pfu_programas_educacion_ambiental', 
								name: 'acu_pfu_programas_educacion_ambiental', 
								boxLabel:'Educaci&oacute;n ambiental',
								inputValue: 1,
								listeners:
								{
									'render':function(){
										 ayuda('acu_pfu_programas_educacion_ambiental',ayuda_acu_pfu_programas_educacion_ambiental); 
										}
								}
							},
							{	
								id: 'acu_pfu_programas_reduccion_uso_agroquimicos', 
								name: 'acu_pfu_programas_reduccion_uso_agroquimicos', 
								boxLabel:'Reducci&oacute;n uso de agroquimicos',
								inputValue: 1,
								listeners:
								{
									'render':function(){
										 ayuda('acu_pfu_programas_reduccion_uso_agroquimicos',ayuda_acu_pfu_programas_reduccion_uso_agroquimicos); 
										}
								}
							}
						]
					}
				]
			},		
			{ 
			   layout:'form',
			   bodyStyle: 'padding-left:5px;',
			   columnWidth: '.6',
			   items:
			   [
					{
					xtype:'fieldset',
					title:'Cobertura forestal',
					defaults:{width:80, labelStyle: letra+'width: 360px;',},
					items:
					[
						{
							xtype:      'radiogroup',
							id:         'acu_pfu_cobertura_forestal_area_protectora_cauce',
							fieldLabel: '<html>&iquest;La cobertura forestal se localiza en el &aacute;rea protectora del cauce?</html>',
							items: 
							[{
							  boxLabel:   'Si',
							  name:       'acu_pfu_cobertura_forestal_area_protectora_cauce',
							  id:         'acu_pfu_cobertura_forestal_area_protectora_cauce_si',
							  inputValue: 1,
							  checked:    true
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_cobertura_forestal_area_protectora_cauce',
							  id:         'acu_pfu_cobertura_forestal_area_protectora_cauce_no',
							  inputValue: 0
							  
							}],
							listeners:
							{
								'render':function(){
									 ayuda('acu_pfu_cobertura_forestal_area_protectora_cauce',ayuda_acu_pfu_cobertura_forestal_area_protectora_cauce); 
									}
							}
						},
						{
							xtype:      'radiogroup',
							id:'acu_pfu_aislamiento_franja_amarilla_microcuenca',
							fieldLabel: '<html>&iquest;Existe aislamiento o franja amarilla en la microcuenca?</html>',
							items: 
							[{
							  boxLabel:   'Si',
							  name:       'acu_pfu_aislamiento_franja_amarilla_microcuenca',
							  id:         'acu_pfu_aislamiento_franja_amarilla_microcuenca_si',
							  inputValue: 1,
							  checked:    true
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_aislamiento_franja_amarilla_microcuenca',
							  id:         'acu_pfu_aislamiento_franja_amarilla_microcuenca_no',
							  inputValue: 0
							}],
							listeners:
							{
								'render':function(){
									 ayuda('acu_pfu_aislamiento_franja_amarilla_microcuenca',ayuda_acu_pfu_aislamiento_franja_amarilla_microcuenca); 
									}
							}
						},
						{
							xtype:      'radiogroup',
							id:       'acu_pfu_area_microcuenca_propiedad_acueducto',
							fieldLabel: '<html>&iquest;Existe &aacute;rea de la microcuenca de propiedad del acueducto?</html>',
							items: 
							[{
							  boxLabel:   'Si',
							  name:       'acu_pfu_area_microcuenca_propiedad_acueducto',
							  id:         'acu_pfu_area_microcuenca_propiedad_acueducto_si',
							  inputValue: 1,
							  checked:    true
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_area_microcuenca_propiedad_acueducto',
							  id:         'acu_pfu_area_microcuenca_propiedad_acueducto_no',
							  inputValue: 0
							}
							],
							listeners:
							{
								'render':function(){
									 ayuda('acu_pfu_area_microcuenca_propiedad_acueducto',ayuda_acu_pfu_area_microcuenca_propiedad_acueducto); 
									}
							}
						},
						{
							xtype:'numberfield',
							id:'acu_pfu_extension_has',
							name:'acu_pfu_extension_has',
							fieldLabel:'<html>Extensi&oacute;n (Has)</html>',
							width: 50,
							emptyText: '0',
							allowNegative: false,
							decimalPrecision: 5,
							listeners:
							{
								'render':function(){
									 ayuda('acu_pfu_extension_has',ayuda_acu_pfu_extension_has); 
									}
							}
						}
					]
					}
				]
			},
			{ 
			   layout:'form',
			   columnWidth: '1',
			   items:
			   [{
				xtype:'fieldset',
				border:false,
				title: '<html>Situaci&oacute;n de Aguas arriba de la captaci&oacute;n</html>',
				autoWidth: true,
				autoHeight: true,
				defaults:{width:80},
				items :
				[
					{
						xtype:      'radiogroup',
						labelStyle: letra+'width: 170px;',
						id:'acu_pfu_situacion_arriba_captacion_reserva',
						fieldLabel: '<html>&iquest;Es una zona de reserva?</html>',
						items: 
						[ 
							{
							  boxLabel:   'Si',
							  name:       'acu_pfu_situacion_arriba_captacion_reserva',
							  id:		  'acu_pfu_situacion_arriba_captacion_reserva_si',
							  inputValue: 1, 
							  checked:    true
							  
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_situacion_arriba_captacion_reserva',
							  id: 		'acu_pfu_situacion_arriba_captacion_reserva_no',
							  inputValue: 0
							}
						],
						listeners:
						{
							'render':function(){
								 ayuda('acu_pfu_situacion_arriba_captacion_reserva',ayuda_acu_pfu_situacion_arriba_captacion_reserva); 
								}
						}
					},
					{
						xtype:      'radiogroup',
						labelStyle: letra+'width: 170px;',
						id:'acu_pfu_situacion_arriba_captacion_protegida',
						fieldLabel: '<html>&iquest;Es una zona protegida?</html>',
						items: 
						[
							{
							  boxLabel:   'Si',
							  name:       'acu_pfu_situacion_arriba_captacion_protegida',
							  id:         'acu_pfu_situacion_arriba_captacion_protegida_si',
							  inputValue: 1,
							  checked:    true
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_situacion_arriba_captacion_protegida',
							  id:         'acu_pfu_situacion_arriba_captacion_protegida_no',
							  inputValue: 0
							}
						],
						listeners:
						{
							'render':function(){
								ayuda('acu_pfu_situacion_arriba_captacion_protegida',ayuda_acu_pfu_situacion_arriba_captacion_protegida);
							}
						}
					}
				]}
			   ]
			}
	],
	buttons: 
	[
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
			acu_microcuenca_tabpanel.setActiveTab(1);
			
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				acu_proteccionfuentessuperficialesagua_programas_subirdatos();
				acu_proteccionfuentessuperficialesagua_programas_panel.hide();
				acu_proteccionfuentessuperficialesagua_coberturaforestal_panel.show();
			}
		}
	]
	});
	
	
	function acu_proteccionfuentessuperficialesagua_programas_subirdatos()
	{
		subirDatos(acu_proteccionfuentessuperficialesagua_programas_panel,
					'acueducto_proteccionfuentessuperficialesagua/actualizarProteccionfuentessuperficialesagua',
					{formulario:'programas'});
	}

	acu_proteccionfuentessuperficialesagua_programas_datos_datastore.load({
	  callback: function() {
		var record = acu_proteccionfuentessuperficialesagua_programas_datos_datastore.getAt(0);
		acu_proteccionfuentessuperficialesagua_programas_panel.getForm().loadRecord(record);	
	  }
	});
	
/************************Formulario 2*******************/
//
//
/*******************************************************/

	var acu_proteccionfuentessuperficialesagua_coberturaforestal_datos_datastore = new Ext.data.Store({
        id: 'acu_proteccionfuentessuperficialesagua_coberturaforestal_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_proteccionfuentessuperficialesagua/obtenerDatosProteccionfuentessuperficialesagua', 
                method: 'POST'
        }),
        baseParams:{
			formulario:'coberturaForestal'
		}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_pfu_cobertura_forestal_natural', type: 'int'},	    
                  {name: 'acu_pfu_cobertura_forestal_protector', type: 'int'},
				  {name: 'acu_pfu_cobertura_forestal_protector_productor', type: 'int'},
				  {name: 'acu_pfu_cobertura_forestal_productor', type: 'int'},
				  {name: 'acu_pfu_cobertura_forestal_regeneracion_natural', type: 'int'},
				  
				  {name: 'acu_pfu_cobertura_forestal_natural_tendencia', type: 'string'},
				  {name: 'acu_pfu_cobertura_forestal_protector_tendencia', type: 'string'},
				  {name: 'acu_pfu_cobertura_forestal_protector_productor_tendencia', type: 'string'},
				  {name: 'acu_pfu_cobertura_forestal_productor_tendencia', type: 'string'},
				  {name: 'acu_pfu_cobertura_forestal_regeneracion_natural_tendencia', type: 'string'},
				  {name: 'acu_pfu_cobertura_forestal_mas_usada', type: 'string'}
		])
    });


	var acu_proteccionfuentessuperficialesagua_coberturaforestal_panel = new Ext.FormPanel({
		autoWidth: true,
		height: largo_panel-15,
		hidden:true,
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[   
			{
				xtype:'fieldset',
				title:'Cobertura forestal y tendencias',
				layout:'column',
				defaults:{layout:'form',border:false},
				items:
				[
					{
					width:260,
					bodyStyle: 'padding-top:23px;',
					//border:true,
					defaults:{labelStyle: 'width:220px;'+letra},
					items:
					[
						{xtype: 'label', text: 'Existencia de este tipo de bosque?', cls:'x-form-check-group-label'},
						{
							xtype: 'checkbox', 
							name: 'acu_pfu_cobertura_forestal_natural',
							id:   'acu_pfu_cobertura_forestal_natural',
							inputValue: 1,
							fieldLabel: 'Bosque natural',
							listeners:
							{
								'render':function(){
									ayuda('acu_pfu_cobertura_forestal_natural',ayuda_acu_pfu_cobertura_forestal_natural);
								}
							}
						},
						{	
							xtype: 'checkbox', 
							name: 'acu_pfu_cobertura_forestal_protector',
							id:   'acu_pfu_cobertura_forestal_protector',
							inputValue: 1,
							fieldLabel: 'Bosque plantado protector',
							itemCls: 'x-check-group-alt',
							listeners:
							{
								'render':function(){
									ayuda('acu_pfu_cobertura_forestal_protector',ayuda_acu_pfu_cobertura_forestal_protector);
								}
							}
						},
						{	
							xtype: 'checkbox', 
							name: 'acu_pfu_cobertura_forestal_protector_productor',
							id:   'acu_pfu_cobertura_forestal_protector_productor',
							inputValue: 1,
							fieldLabel: 'Bosque plantado protector productor',
							listeners:
							{
								'render':function(){
									ayuda('acu_pfu_cobertura_forestal_protector_productor',ayuda_acu_pfu_cobertura_forestal_protector_productor);
								}
							}
						},
						{	
							xtype: 'checkbox', 
							name: 'acu_pfu_cobertura_forestal_productor',
							id:   'acu_pfu_cobertura_forestal_productor',
							inputValue: 1,
							fieldLabel: 'Bosque plantado productor',
							itemCls: 'x-check-group-alt',
							listeners:
							{
								'render':function(){
									ayuda('acu_pfu_cobertura_forestal_productor',ayuda_acu_pfu_cobertura_forestal_productor);
								}
							}
						},
						{
							xtype: 'checkbox', 
							name: 'acu_pfu_cobertura_forestal_regeneracion_natural',
							id:   'acu_pfu_cobertura_forestal_regeneracion_natural',
							inputValue: 1,
							fieldLabel: '<html>Regeneraci&oacute;n natural</html>',
							listeners:
							{
								'render':function(){
									ayuda('acu_pfu_cobertura_forestal_regeneracion_natural',ayuda_acu_pfu_cobertura_forestal_regeneracion_natural);
								}
							}
						}			
					   //end checks
					]},
					{
						width: 78,
						//border:true,
						id:'acu_pfu_cobertura_forestal_mas_usada',
						bodyStyle: 'padding-top:8px;padding-right:5px;',
						defaults:{labelStyle: 'width:1px;text-align:center;',hideLabel:true},
						items:
						[
							{ xtype: 'label', text: 'Cual ocupa mayor area?', cls:'x-form-check-group-label'},
							{
								xtype: 'radiogroup',
								columns: 1,
								defaults:{height:22 },
								name: 'acu_pfu_cobertura_forestal_mas_usada',
								items: 	[{ name: 'acu_pfu_cobertura_forestal_mas_usada', inputValue: 'bosque natural'},
								{ name: 'acu_pfu_cobertura_forestal_mas_usada', inputValue: 'bosque protector',itemCls: 'x-check-group-alt'},
								{ name: 'acu_pfu_cobertura_forestal_mas_usada', inputValue: 'bosque protector productor'},
								{ name: 'acu_pfu_cobertura_forestal_mas_usada', inputValue: 'bosque productor',itemCls: 'x-check-group-alt'},
								{ name: 'acu_pfu_cobertura_forestal_mas_usada', inputValue: 'regeneracion natural'}
								]
							}
						],
						listeners:
						{
							'render':function(){
								ayuda('acu_pfu_cobertura_forestal_mas_usada',ayuda_acu_pfu_cobertura_forestal_mas_usada);
							}
						}
					},{
						width: 220,
						title: '<center>Tendencia</center>',  
						defaults:{hideLabel: true,columns:[ 73, 73, 73]},
						items:
						[ 	
							{
								xtype: 'radiogroup',
								columns:[ 73, 73, 73],
								id :'acu_pfu_cobertura_forestal_natural_tendencia',
								items: [
										{
											width: 73,
											items: [
												{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
												{ name: 'acu_pfu_cobertura_forestal_natural_tendencia', inputValue: 'incremento'},
												]
										},{
											width: 73,
											items: [
												{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
												{ name: 'acu_pfu_cobertura_forestal_natural_tendencia', inputValue: 'estable',checked:true}
												]
										},{
											width: 73,
											items: [
												{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
												{ name: 'acu_pfu_cobertura_forestal_natural_tendencia', inputValue: 'disminucion'}
												]
										}
								],
								listeners:
								{
									'render':function(){
										ayuda('acu_pfu_cobertura_forestal_natural_tendencia',ayuda_acu_pfu_cobertura_forestal_natural_tendencia);
									}
								}
							},
							{
								xtype: 'radiogroup',
								id: 'acu_pfu_cobertura_forestal_protector_tendencia',
								items: [
									{ name: 'acu_pfu_cobertura_forestal_protector_tendencia', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
									{ name: 'acu_pfu_cobertura_forestal_protector_tendencia', inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'},
									{ name: 'acu_pfu_cobertura_forestal_protector_tendencia', inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
								],
								listeners:
								{
									'render':function(){
										ayuda('acu_pfu_cobertura_forestal_protector_tendencia',ayuda_acu_pfu_cobertura_forestal_protector_tendencia);
									}
								}
							},
							{
								xtype: 'radiogroup',
								id:'acu_pfu_cobertura_forestal_protector_productor_tendencia',
								items: [
									{ name: 'acu_pfu_cobertura_forestal_protector_productor_tendencia', inputValue: 'incremento'},
									{ name: 'acu_pfu_cobertura_forestal_protector_productor_tendencia',  inputValue: 'estable', checked: true},
									{ name: 'acu_pfu_cobertura_forestal_protector_productor_tendencia',  inputValue: 'disminucion'},
								],
								listeners:
								{
									'render':function(){
										ayuda('acu_pfu_cobertura_forestal_protector_productor_tendencia',ayuda_acu_pfu_cobertura_forestal_protector_productor_tendencia);
									}
								}
							},
							{
								xtype: 'radiogroup',
								id: 'acu_pfu_cobertura_forestal_productor_tendencia',
								items: [
									{ name: 'acu_pfu_cobertura_forestal_productor_tendencia', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
									{ name: 'acu_pfu_cobertura_forestal_productor_tendencia',  inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'},
									{ name: 'acu_pfu_cobertura_forestal_productor_tendencia',  inputValue: 'disminucion',itemCls: 'x-check-group-alt'},
								],
								listeners:
								{
									'render':function(){
										ayuda('acu_pfu_cobertura_forestal_productor_tendencia',ayuda_acu_pfu_cobertura_forestal_productor_tendencia);
									}
								}
							},
							{
								xtype: 'radiogroup',
								id:'acu_pfu_cobertura_forestal_regeneracion_natural_tendencia',
								items: [
									{ name: 'acu_pfu_cobertura_forestal_regeneracion_natural_tendencia', inputValue: 'incremento'},
									{ name: 'acu_pfu_cobertura_forestal_regeneracion_natural_tendencia',  inputValue: 'estable',checked: true},
									{ name: 'acu_pfu_cobertura_forestal_regeneracion_natural_tendencia',  inputValue: 'disminucion'},
								],
								listeners:
								{
									'render':function(){
										ayuda('acu_pfu_cobertura_forestal_regeneracion_natural_tendencia',ayuda_acu_pfu_cobertura_forestal_regeneracion_natural_tendencia);
									}
								}
							}
						]
					}
				]
			}
		],
		//renderTo:'div_form_acu_proteccionfuentessuperficialesagua',
		buttons: 
		[
			{
				text: '<html>Atr&aacute;s<html>',
				handler:function(){
				iconCls:'atras',
				acu_proteccionfuentessuperficialesagua_coberturaforestal_panel.hide();
				acu_proteccionfuentessuperficialesagua_programas_panel.show();
				}
			},
			{
				text: 'Continuar',
				iconCls:'continuar',
				handler:function(){
				acu_proteccionfuentessuperficialesagua_coberturaforestal_subirdatos();
				
			     acu_microcuenca_tabpanel.setActiveTab(3);
				}
			}
		]
	});

	
	function acu_proteccionfuentessuperficialesagua_coberturaforestal_subirdatos()
	{
		subirDatos(acu_proteccionfuentessuperficialesagua_coberturaforestal_panel,
					'acueducto_proteccionfuentessuperficialesagua/actualizarProteccionfuentessuperficialesagua',
					{formulario:'coberturaForestal'});
	}
	
	acu_proteccionfuentessuperficialesagua_coberturaforestal_datos_datastore.load({
	  callback: function() {
		var record = acu_proteccionfuentessuperficialesagua_coberturaforestal_datos_datastore.getAt(0);
		acu_proteccionfuentessuperficialesagua_coberturaforestal_panel.getForm().loadRecord(record);	
	  }
	});

	/*****************Contenedor de panels*********************/
	
   var acu_proteccionfuentessuperficialesagua_contenedor=new Ext.Panel({
    height:largo_panel-15,
	border:false,
	layout:'fit',
    items:
	[
			acu_proteccionfuentessuperficialesagua_programas_panel,
			acu_proteccionfuentessuperficialesagua_coberturaforestal_panel
	],
	renderTo:'div_form_acu_proteccionfuentessuperficialesagua'
   });
