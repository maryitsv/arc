
	var acu_calidadcantidadagua_actividadagricola_panel = new Ext.Panel({
		//frame: true,
		//hidden: true,
		title: 'Actividad agricola',
		autoWidth: true,
		height: 380,
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Actividad agricola',
			 layout:'column',
			 defaults:{layout:'form'},
			 items:[
				{  
					width:180,
					bodyStyle: 'padding-top:27px;',
					defaults:{labelStyle: 'width:150px;'+letra},
					items:[
							{xtype: 'label',text: 'Tipo cultivo', cls:'x-form-check-group-label'},
							{xtype: 'checkbox', fieldLabel: 'Cultivo permanente',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividades_agricola_cultivos_permanentes',
								name:'acu_cca_actividades_agricola_cultivos_permanentes',
							},
							{xtype: 'checkbox', fieldLabel: 'Cultivo semipermanente',
								id: 'acu_cca_actividades_agricola_cultivos_semipermanentes',
								name: 'acu_cca_actividades_agricola_cultivos_semipermanentes'
							},
							{xtype: 'checkbox', fieldLabel: 'Cultivo temporal',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividades_agricola_cultivos_temporales',
								name: 'acu_cca_actividades_agricola_cultivos_temporales'
							}
				   ]
				},{
					width: 70,
					bodyStyle: 'padding-top:12px;',
					id: 'acu_cca_actividades_agricola_mayor_area',
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							columns: 1,
							items: 	[
									 { xtype: 'label', text: 'Cual ocupa mayor area?', cls:'x-form-check-group-label'},
									 { name: 'acu_cca_actividades_agricola_mayor_area',
										id: 'acu_cca_actividades_agricola_mayor_area_permanente',
										inputValue: 'permanentes',itemCls: 'x-check-group-alt'}
									]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividades_agricola_mayor_area', inputValue: 'semipermanentes',
										id: 'acu_cca_actividades_agricola_mayor_area_semipermanente'
									}]
						},{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividades_agricola_mayor_area', inputValue: 'temporales',itemCls: 'x-check-group-alt',
										id: 'acu_cca_actividades_agricola_mayor_area_temporales'
									}]
						}
					]
				},{
					width: 220,
					title: '<center>Tendencia</center>',    
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia', 
							items: [{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia', 
												id: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia_incremento', 
												inputValue: 'incremento',itemCls: 'x-check-group-alt'
											}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia',
												id: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia_estable',
												inputValue: 'estable',itemCls: 'x-check-group-alt',
												}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia', 
												id: 'acu_cca_actividades_agricola_cultivos_permanentes_tendencia_disminucion', 
												inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
											]
									}]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia',
							items: [
								{ name: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia',
									id: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia',
									id: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia',
									id: 'acu_cca_actividades_agricola_cultivos_semipermanentes_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							items: [
								{ name: 'acu_cca_actividades_agricola_cultivos_temporales_tendencia',
									id: 'acu_cca_actividades_agricola_cultivos_temporales_tendencia_incremento',
									inputValue: 'incremento',itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividades_agricola_cultivos_temporales_tendencia',
									id: 'acu_cca_actividades_agricola_cultivos_temporales_tendencia_estable',
									inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividades_agricola_cultivos_temporales_tendencia',
									id: 'acu_cca_actividades_agricola_cultivos_temporales_tendencia_disminucion',
									inputValue: 'disminucion', itemCls: 'x-check-group-alt'
								}
							]
						}
					]
				}
				]
			}
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V10.show();
			}
		},
		{
			text: 'Continuar',
			handler:function(){
				//var tab=Ext.getCmp('tabPanel').getActiveTab();
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V12.show();
			}
		}]
	});
	
	//******************* Actividad pecuaria**********//
	
	var acu_calidadcantidadagua_actividadpecuaria_panel = new Ext.Panel({
		//frame: true,
		//hidden: true,
		title: 'Actividad pecuaria',
		autoWidth: true,
		height: 380,
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Actividad pecuaria',
			 layout:'column',
			 defaults:{layout:'form'},
			 items:[
				{  
					width:180,
					bodyStyle: 'padding-top:27px;',
					defaults:{labelStyle: 'width:150px;'+letra},
					items:[
							{xtype: 'label',text: 'Tipo actividad', cls:'x-form-check-group-label'},
							{xtype: 'checkbox', fieldLabel: 'Ganaderia bovina',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividad_pecuaria_ganaderia_bovina',
								name:'acu_cca_actividad_pecuaria_ganaderia_bovina',
							},
							{xtype: 'checkbox', fieldLabel: 'Ganaderia equina',
								id: 'acu_cca_actividad_pecuaria_pecuaria_ganaderia_equina',
								name: 'acu_cca_actividad_pecuaria_pecuaria_ganaderia_equina'
							},
							{xtype: 'checkbox', fieldLabel: 'Porcicultura',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividad_pecuaria_porcicultura',
								name: 'acu_cca_actividad_pecuaria_porcicultura'
							},
							{xtype: 'checkbox', fieldLabel: 'Capricultura y/o ovinos',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividad_pecuaria_capricultura_ovinos',
								name:'acu_cca_actividad_pecuaria_capricultura_ovinos',
							},
							{xtype: 'checkbox', fieldLabel: 'Avicultura',
								id: 'acu_cca_actividad_pecuaria_avicultura',
								name: 'acu_cca_actividad_pecuaria_avicultura'
							},
							{xtype: 'checkbox', fieldLabel: 'Piscicultura',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividad_pecuaria_piscicultura',
								name: 'acu_cca_actividad_pecuaria_piscicultura'
							},
							{xtype: 'checkbox', fieldLabel: 'Otro',itemCls: 'x-check-group-alt',
								id: 'acu_cca_actividad_pecuaria_otros_cual',
								name: 'acu_cca_actividad_pecuaria_otros_cual'
							}
				   ]
				},{
					width: 70,
					bodyStyle: 'padding-top:12px;',
					id: 'acu_cca_actividad_pecuaria_mayor_area',
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							columns: 1,
							items: 	[
									 { xtype: 'label', text: 'Cual ocupa mayor area?', cls:'x-form-check-group-label'},
									 { name: 'acu_cca_actividad_pecuaria_mayor_area',
										id: 'acu_cca_actividad_pecuaria_mayor_area_ganaderia_bovina',
										inputValue: 'ganaderia bovina',itemCls: 'x-check-group-alt'}
									]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividad_pecuaria_mayor_area', inputValue: 'ganaderia equina',
										id: 'acu_cca_actividad_pecuaria_mayor_area_ganaderia_equina'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividad_pecuaria_mayor_area', inputValue: 'porcicultura',itemCls: 'x-check-group-alt',
										id: 'acu_cca_actividad_pecuaria_mayor_area_porcicultura'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividad_pecuaria_mayor_area', inputValue: 'capricultura y/u ovinos',
										id: 'acu_cca_actividad_pecuaria_mayor_area_capricultura_ovinos'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividad_pecuaria_mayor_area', inputValue: 'avicultura',itemCls: 'x-check-group-alt',
										id: 'acu_cca_actividad_pecuaria_mayor_area_avicultura'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividad_pecuaria_mayor_area', inputValue: 'piscicultura',
										id: 'acu_cca_actividad_pecuaria_mayor_area_piscicultura'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_actividad_pecuaria_mayor_area', inputValue: 'otro',itemCls: 'x-check-group-alt',
										id: 'acu_cca_actividad_pecuaria_mayor_area_otro'
									}]
						}
					]
				},{
					width: 220,
					title: '<center>Tendencia</center>',    
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', 
							items: [{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', 
												id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia_incremento', 
												inputValue: 'incremento',itemCls: 'x-check-group-alt'
											}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia',
												id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia_estable',
												inputValue: 'estable',itemCls: 'x-check-group-alt',
												}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', 
												id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia_disminucion', 
												inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
											]
									}]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
									id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
									id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
									id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia_incremento',
									inputValue: 'incremento',itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia_estable',
									inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia_disminucion',
									inputValue: 'disminucion', itemCls: 'x-check-group-alt'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia',
									id: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia',
									id: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia',
									id: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_avicultura_tendencia_incremento',
									inputValue: 'incremento',itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_avicultura_tendencia_estable',
									inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_avicultura_tendencia_disminucion',
									inputValue: 'disminucion', itemCls: 'x-check-group-alt'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_piscicultura_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_piscicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_piscicultura_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividad_pecuaria_piscicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_piscicultura_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_actividad_pecuaria_piscicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_piscicultura_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_otros_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_otros_tendencia',
									id: 'acu_cca_actividad_pecuaria_otros_tendencia_incremento',
									inputValue: 'incremento',itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividad_pecuaria_otros_tendencia',
									id: 'acu_cca_actividad_pecuaria_otros_tendencia_estable',
									inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_actividad_pecuaria_otros_tendencia',
									id: 'acu_cca_actividad_pecuaria_otros_tendencia_disminucion',
									inputValue: 'disminucion', itemCls: 'x-check-group-alt'
								}
							]
						}
					]
				}
				]
			}
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V10.show();
			}
		},
		{
			text: 'Continuar',
			handler:function(){
				//SUI_Microcuenca_V12.show();
			}
		}]
	});
	
	
	//******************* Control de plagas y enfermedades**********//
	
	var acu_calidadcantidadagua_controlplagas_panel = new Ext.Panel({
		//frame: true,
		//hidden: true,
		title: 'Control de plagas y enfermedades',
		autoWidth: true,
		height: 380,
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Control de plagas y enfermedades',
			 layout:'column',
			 defaults:{layout:'form'},
			 items:[
				{  
					width:180,
					bodyStyle: 'padding-top:27px;',
					defaults:{labelStyle: 'width:150px;'+letra},
					items:[
							{xtype: 'label',text: 'Tipo control que se realiza', cls:'x-form-check-group-label'},
							{xtype: 'checkbox', fieldLabel: 'Quimico',itemCls: 'x-check-group-alt',
								id: 'acu_cca_control_plagas_enfermedades_quimico',
								name:'acu_cca_control_plagas_enfermedades_quimico',
							},
							{xtype: 'checkbox', fieldLabel: 'Organico',
								id: 'acu_cca_control_plagas_enfermedades_organico',
								name: 'acu_cca_control_plagas_enfermedades_organico'
							},
							{xtype: 'checkbox', fieldLabel: 'Biologico',itemCls: 'x-check-group-alt',
								id: 'acu_cca_control_plagas_enfermedades_biologico',
								name: 'acu_cca_control_plagas_enfermedades_biologico'
							},
							{xtype: 'checkbox', fieldLabel: 'Ninguno',itemCls: 'x-check-group-alt',
								id: 'acu_cca_control_plagas_enfermedades_ninguno',
								name:'acu_cca_control_plagas_enfermedades_ninguno',
							}
				   ]
				},{
					width: 70,
					bodyStyle: 'padding-top:12px;',
					id: 'acu_cca_control_plagas_enfermedades_mas_usado',
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							columns: 1,
							items: 	[
									 { xtype: 'label', text: 'Cual es mas usado?', cls:'x-form-check-group-label'},
									 { name: 'acu_cca_control_plagas_enfermedades_mas_usado',
										id: 'acu_cca_control_plagas_enfermedades_mas_usado_quimico',
										inputValue: 'quimico',itemCls: 'x-check-group-alt'}
									]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_control_plagas_enfermedades_mas_usado', inputValue: 'organico',
										id: 'acu_cca_control_plagas_enfermedades_mas_usado_organico'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_control_plagas_enfermedades_mas_usado', inputValue: 'biologico',itemCls: 'x-check-group-alt',
										id: 'acu_cca_control_plagas_enfermedades_mas_usado_biologico'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_control_plagas_enfermedades_mas_usado', inputValue: 'ninguno',
										id: 'acu_cca_control_plagas_enfermedades_mas_usado_ninguno'
									}]
						}
					]
				},{
					width: 220,
					title: '<center>Tendencia</center>',    
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', 
							items: [{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', 
												id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia_incremento', 
												inputValue: 'incremento',itemCls: 'x-check-group-alt'
											}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia',
												id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia_estable',
												inputValue: 'estable',itemCls: 'x-check-group-alt',
												}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', 
												id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia_disminucion', 
												inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
											]
									}]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
							items: [
								{ name: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_organico_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_organico_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_organico_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
							items: [
								{ name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia_incremento',
									inputValue: 'incremento',itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia_estable',
									inputValue: 'estable', checked: true,itemCls: 'x-check-group-alt'
								},
								{ name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia_disminucion',
									inputValue: 'disminucion', itemCls: 'x-check-group-alt'
								}
							]
						}/*,
						{
							xtype: 'radiogroup',
							id: 'acu_cca_control_plagas_enfermedades_otro_tendencia',
							items: [
								{ name: 'acu_cca_control_plagas_enfermedades_otro_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_otro_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_control_plagas_enfermedades_otro_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_otro_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_control_plagas_enfermedades_otro_tendencia',
									id: 'acu_cca_control_plagas_enfermedades_otro_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						}*/
					]
				}
				]
			}
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V10.show();
			}
		},
		{
			text: 'Continuar',
			handler:function(){
				//SUI_Microcuenca_V12.show();
			}
		}]
	});
	
	//******************* Fertilizacion de cultivos**********//
	
	var acu_calidadcantidadagua_fertilizacioncultivos_panel = new Ext.Panel({
		//frame: true,
		//hidden: true,
		title: 'Fertilizacion de cultivos',
		autoWidth: true,
		height: 380,
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Fertilizacion de cultivos',
			 layout:'column',
			 defaults:{layout:'form'},
			 items:[
				{  
					width:180,
					bodyStyle: 'padding-top:27px;',
					defaults:{labelStyle: 'width:150px;'+letra},
					items:[
							{xtype: 'label',text: 'Tipo de fertilizantes usados', cls:'x-form-check-group-label'},
							{xtype: 'checkbox', fieldLabel: 'Quimico',itemCls: 'x-check-group-alt',
								id: 'acu_cca_fertilizacion_cultivos_quimico',
								name:'acu_cca_fertilizacion_cultivos_quimico',
							},
							{xtype: 'checkbox', fieldLabel: 'Organico',
								id: 'acu_cca_fertilizacion_cultivos_organico',
								name: 'acu_cca_fertilizacion_cultivos_organico'
							},
							{xtype: 'checkbox', fieldLabel: 'Ninguno',itemCls: 'x-check-group-alt',
								id: 'acu_cca_fertilizacion_cultivos_ninguno',
								name:'acu_cca_fertilizacion_cultivos_ninguno',
							}
				   ]
				},{
					width: 70,
					bodyStyle: 'padding-top:12px;',
					id: 'acu_cca_fertilizacion_cultivos_mas_usado',
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							columns: 1,
							items: 	[
									 { xtype: 'label', text: 'Cual es mas usado?', cls:'x-form-check-group-label'},
									 { name: 'acu_cca_fertilizacion_cultivos_mas_usado',
										id: 'acu_cca_fertilizacion_cultivos_mas_usado_quimico',
										inputValue: 'quimico',itemCls: 'x-check-group-alt'}
									]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_fertilizacion_cultivos_mas_usado', inputValue: 'organico',
										id: 'acu_cca_fertilizacion_cultivos_mas_usado_organico'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_fertilizacion_cultivos_mas_usado', inputValue: 'ninguno',
										id: 'acu_cca_fertilizacion_cultivos_mas_usado_ninguno'
									}]
						}
					]
				},{
					width: 220,
					title: '<center>Tendencia</center>',    
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', 
							items: [{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', 
												id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia_incremento', 
												inputValue: 'incremento',itemCls: 'x-check-group-alt'
											}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia',
												id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia_estable',
												inputValue: 'estable',itemCls: 'x-check-group-alt',
												}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', 
												id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia_disminucion', 
												inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
											]
									}]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
							items: [
								{ name: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_organico_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_organico_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_organico_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						}/*,
						{
							xtype: 'radiogroup',
							id: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia',
							items: [
								{ name: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_ninguno_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						}*/
					]
				}
				]
			}
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V10.show();
			}
		},
		{
			text: 'Continuar',
			handler:function(){
				//SUI_Microcuenca_V12.show();
			}
		}]
	});
	
	
	//******************* Control de malezas**********//
	
	var acu_calidadcantidadagua_controlmalezas_panel = new Ext.Panel({
		//frame: true,
		//hidden: true,
		title: 'Control de malezas',
		autoWidth: true,
		height: 380,
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Control de malezas',
			 layout:'column',
			 defaults:{layout:'form'},
			 items:[
				{  
					width:180,
					bodyStyle: 'padding-top:27px;',
					defaults:{labelStyle: 'width:150px;'+letra},
					items:[
							{xtype: 'label',text: 'Tipo de fertilizantes usados', cls:'x-form-check-group-label'},
							{xtype: 'checkbox', fieldLabel: 'Quimico',itemCls: 'x-check-group-alt',
								id:  'acu_cca_control_malezas_quimico',
								name:'acu_cca_control_malezas_quimico',
							},
							{xtype: 'checkbox', fieldLabel: 'Organico',
								id:   'acu_cca_control_malezas_organico',
								name: 'acu_cca_control_malezas_organico'
							},
							{xtype: 'checkbox', fieldLabel: 'Organico',
								id:   'acu_cca_control_malezas_meca_manu',
								name: 'acu_cca_control_malezas_meca_manu'
							},
							{xtype: 'checkbox', fieldLabel: 'Ninguno',itemCls: 'x-check-group-alt',
								id:   'acu_cca_control_malezas_ninguno',
								name: 'acu_cca_control_malezas_ninguno',
							}
				   ]
				},{
					width: 70,
					bodyStyle: 'padding-top:12px;',
					id: 'acu_cca_control_malezas_mas_usado',
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							columns: 1,
							items: 	[
									 { xtype: 'label', text: 'Cual es mas usado?', cls:'x-form-check-group-label'},
									 { name: 'acu_cca_control_malezas_mas_usado',
										id: 'acu_cca_control_malezas_mas_usado_quimico',
										inputValue: 'quimico',itemCls: 'x-check-group-alt'}
									]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_control_malezas_mas_usado', inputValue: 'organico',
										id: 'acu_cca_control_malezas_mas_usado_organico'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_control_malezas_mas_usado', inputValue: 'macanico o manual',
										id: 'acu_cca_control_malezas_mas_usado_meca_manu'
									}]
						},
						{
							xtype: 'radiogroup',
							items: [{ name: 'acu_cca_control_malezas_mas_usado', inputValue: 'ninguno',
										id: 'acu_cca_control_malezas_mas_usado_ninguno'
									}]
						}
					]
				},{
					width: 220,
					title: '<center>Tendencia</center>',    
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_control_malezas_quimico_tendencia', 
							items: [{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_control_malezas_quimico_tendencia', 
												id: 'acu_cca_control_malezas_quimico_tendencia_incremento', 
												inputValue: 'incremento',itemCls: 'x-check-group-alt'
											}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_control_malezas_quimico_tendencia',
												id: 'acu_cca_control_malezas_quimico_tendencia_estable',
												inputValue: 'estable',itemCls: 'x-check-group-alt',
												}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_control_malezas_quimico_tendencia', 
												id: 'acu_cca_control_malezas_quimico_tendencia_disminucion', 
												inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
											]
									}]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_control_malezas_organico_tendencia',
							items: [
								{ name: 'acu_cca_control_malezas_organico_tendencia',
									id: 'acu_cca_control_malezas_organico_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_control_malezas_organico_tendencia',
									id: 'acu_cca_control_malezas_organico_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_control_malezas_organico_tendencia',
									id: 'acu_cca_control_malezas_organico_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_control_malezas_meca_manu_tendencia',
							items: [
								{ name: 'acu_cca_control_malezas_meca_manu_tendencia',
									id: 'acu_cca_control_malezas_meca_manu_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_control_malezas_meca_manu_tendencia',
									id: 'acu_cca_control_malezas_meca_manu_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_control_malezas_meca_manu_tendencia',
									id: 'acu_cca_control_malezas_meca_manu_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_control_malezas_ninguno_tendencia',
							items: [
								{ name: 'acu_cca_control_malezas_ninguno_tendencia',
									id: 'acu_cca_control_malezas_ninguno_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_control_malezas_ninguno_tendencia',
									id: 'acu_cca_control_malezas_ninguno_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_control_malezas_ninguno_tendencia',
									id: 'acu_cca_control_malezas_ninguno_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						}
					]
				}
				]
			}
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V10.show();
			}
		},
		{
			text: 'Continuar',
			handler:function(){
				//SUI_Microcuenca_V12.show();
			}
		}]
	});
	
	
	//******************* Minera y erosion**********//
	
	var acu_calidadcantidadagua_controlmalezas_panel = new Ext.Panel({
		//frame: true,
		//hidden: true,
		title: 'Control de malezas',
		autoWidth: true,
		height: 380,
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Minera y erosion',
			 layout:'column',
			 defaults:{layout:'form'},
			 items:[
				{  
					width:180,
					bodyStyle: 'padding-top:27px;',
					defaults:{labelStyle: 'width:150px;'+letra},
					items:[
							{xtype: 'label',text: 'Existe esta actividad', cls:'x-form-check-group-label'},
							{xtype: 'checkbox', fieldLabel: 'Minera?',itemCls: 'x-check-group-alt',
								id:  'acu_cca_mineria',
								name:'acu_cca_mineria',
							},
							{xtype: 'checkbox', fieldLabel: 'Erosion?',
								id:   'acu_cca_erosion',
								name: 'acu_cca_erosion'
							}
				   ]
				},{
					width: 220,
					title: '<center>Tendencia</center>',    
					defaults:{hideLabel: true},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_mineria_tendencia', 
							items: [{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_mineria_tendencia', 
												id: 'acu_cca_mineria_tendencia_incremento', 
												inputValue: 'incremento',itemCls: 'x-check-group-alt'
											}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_mineria_tendencia',
												id: 'acu_cca_mineria_tendencia_estable',
												inputValue: 'estable',itemCls: 'x-check-group-alt',
												}
											]
									},{
										columnWidth: '.33',
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_mineria_tendencia', 
												id: 'acu_cca_mineria_tendencia_disminucion', 
												inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
											]
									}]
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_erosion_tendencia',
							items: [
								{ name: 'acu_cca_erosion_tendencia',
									id: 'acu_cca_erosion_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_erosion_tendencia',
									id: 'acu_cca_erosion_tendencia_estable',
									inputValue: 'estable', checked: true
								},
								{ name: 'acu_cca_erosion_tendencia',
									id: 'acu_cca_erosion_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							]
						}
					]
				}
				]
			}
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				//SUI_Microcuenca_V11.hide();
				//SUI_Microcuenca_V10.show();
			}
		},
		{
			text: 'Continuar',
			handler:function(){
				//SUI_Microcuenca_V12.show();
			}
		}]
	});
	/*modi paisaje
	descarga de vivi
	acti product
	*/