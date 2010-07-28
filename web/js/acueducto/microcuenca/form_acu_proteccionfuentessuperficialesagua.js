
	
	var acu_proteccionfuentessuperficialesagua_programas_panel = new Ext.FormPanel({
		id:'acu_proteccionfuentessuperficialesagua_programas_panel',
		renderTo: 'div_form_acu_proteccionfuentessuperficialesagua',
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
						id:'acu_pfu_situacion_arriba_capatacion_reserva',
						fieldLabel: '<html>&iquest;Es una zona de reserva?</html>',
						items: 
						[ 
							{
							  boxLabel:   'Si',
							  name:       'acu_pfu_situacion_arriba_capatacion_reserva',
							  id:		  'acu_pfu_situacion_arriba_capatacion_reserva_si',
							  inputValue: 1, 
							  checked:    true
							  
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_situacion_arriba_capatacion_reserva',
							  id: 		'acu_pfu_situacion_arriba_capatacion_reserva_no',
							  inputValue: 0
							}
						],
						listeners:
						{
							'render':function(){
								 ayuda('acu_pfu_situacion_arriba_capatacion_reserva',ayuda_acu_pfu_situacion_arriba_capatacion_reserva); 
								}
						}
					},
					{
						xtype:      'radiogroup',
						labelStyle: letra+'width: 170px;',
						id:'acu_pfu_situacion_arriba_capatacion_protegida',
						fieldLabel: '<html>&iquest;Es una zona protegida?</html>',
						items: 
						[
							{
							  boxLabel:   'Si',
							  name:       'acu_pfu_situacion_arriba_capatacion_protegida',
							  id:         'acu_pfu_situacion_arriba_capatacion_protegida_si',
							  inputValue: 1,
							  checked:    true
							},
							{
							  boxLabel:   'No',
							  name:       'acu_pfu_situacion_arriba_capatacion_protegida',
							  id:         'acu_pfu_situacion_arriba_capatacion_protegida_no',
							  inputValue: 0
							}
						],
						listeners:
						{
							'render':function(){
								ayuda('acu_pfu_situacion_arriba_capatacion_protegida',ayuda_acu_pfu_situacion_arriba_capatacion_protegida);
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
			handler:function(){
			}
		},
		{
			text: 'Continuar',
			handler:function(){
			}
		}
	]
	});
	
	/*
PROTECCIONFUENTESSUPERFICIALESAGUA
   PFU_ID               serial not null ,
   PFU_MIC_ID           int not null,
   
   PFU_COBERTURA_FORESTAL_BOSQUE_NATURAL int2,
   PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR int2,
   PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR_PRODUCTOR int2,
   PFU_COBERTURA_FORESTAL_PRODUCTOR int2,
   PFU_COBERTURA_FORESTAL_REGENERACION_NATURAL int2,
   PFU_COBERTURA_FORESTAL_BOSQUE_NATURAL_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_BOSQUE_PROTECTOR_PRODUCTOR_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_PRODUCTOR_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_REGENERACION_NATURAL_TENDENCIA varchar(50),
   
   */

/*	
	var SUI_Microcuenca_V9 = new Ext.FormPanel({
      frame: true,
	  autoWidth: true,
	  height: largo_panel,
	  title:'Cobertura forestal',
	  defaults: { xtype:'panel' ,layout:'form'},
	  items:
		[   
		{
		 xtype:'fieldset',
		 title:'Cobertura forestal',
		 layout:'column',
		 defaults:{layout:'form'},
		 items:[
			{  
				width:250,
				bodyStyle: 'padding-top:27px;',
				//columnWidth: '.40', 
				defaults:{labelStyle: 'width:220px;'+letra},
				items:[
						{xtype: 'label', text: 'Existencia de este tipo de bosque?', cls:'x-form-check-group-label'},
						{xtype: 'checkbox', fieldLabel: 'Bosque natural',itemCls: 'x-check-group-alt'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado protector'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado protector productor',itemCls: 'x-check-group-alt'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado productor'},
						{xtype: 'checkbox', fieldLabel: '<html>Regeneraci&oacute;n natural</html>',itemCls: 'x-check-group-alt'}				
			   ]
			},{
				//columnWidth: '.30',
				width: 70,
				bodyStyle: 'padding-top:12px;',
				defaults:{hideLabel: true},
				items:
				[ 	
					{
						xtype: 'radiogroup',
						columns: 1,
						items: 	[
								 { xtype: 'label', text: 'Cual ocupa mayor area?', cls:'x-form-check-group-label'},
								 { name: 'ocupaMayorArea', inputValue: 'estable',itemCls: 'x-check-group-alt'}
								]
					},
					{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable'}]
					},{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable',itemCls: 'x-check-group-alt'}]
					},{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable'}]
					},{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable',itemCls: 'x-check-group-alt'}]
					}
				]
			},{
				//columnWidth: '.34',
				width: 220,
				title: '<center>Tendencia</center>',    
				defaults:{hideLabel: true},
				items:
				[ 	
					{
						xtype: 'radiogroup',
						anchor: '100%',
						layout:'column',
						items: [{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
										]
								},{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'estable',itemCls: 'x-check-group-alt'}
										]
								},{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
										]
								}]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia2', inputValue: 'incremento'},
							{ name: 'tendencia2', inputValue: 'estable', checked: true},
							{ name: 'tendencia2', inputValue: 'disminucion'}
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia3', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
							{ name: 'tendencia3',  inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'},
							{ name: 'tendencia3',  inputValue: 'disminucion', itemCls: 'x-check-group-alt'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia4', inputValue: 'incremento'},
							{ name: 'tendencia4',  inputValue: 'estable', checked: true},
							{ name: 'tendencia4',  inputValue: 'disminucion'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia5', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
							{ name: 'tendencia5',  inputValue: 'estable',checked: true,itemCls: 'x-check-group-alt'},
							{ name: 'tendencia5',  inputValue: 'disminucion', itemCls: 'x-check-group-alt'},
						]
					}
				]
			}
			]
		}
		],
	  renderTo:'div_form_acu_proteccionfuentessuperficialesagua',
	  buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
			}
		},
		{
			text: 'Continuar',
			handler:function(){
			}
		}]
	});


	
*/
