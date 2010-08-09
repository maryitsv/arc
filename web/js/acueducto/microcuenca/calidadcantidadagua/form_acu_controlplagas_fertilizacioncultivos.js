
	var acu_calidadcantidadagua_controlplagas_fieldset =new Ext.form.FieldSet({
		title:'Control de plagas y enfermedades',
		layout:'column',
		//columnWidth:'.5',
		width:470,
		height:190,
		bodyStyle: 'padding:5px;',
		defaults:{layout:'form',border:false},
		items:
		[
			{  
				width:130,
				bodyStyle: 'padding-top:11px;',
				defaults:{labelStyle: 'width:70px;'+letra,width: 40},
				items:[
						{xtype: 'label',html: '<html>Tipo control que <br/>se realiza</html>',anchor:'100%', cls:'x-form-check-group-label'},
						{	
							xtype: 'checkbox', 
							fieldLabel: 'Qu&iacute;mico',
							id: 'acu_cca_control_plagas_enfermedades_quimico',
							name:'acu_cca_control_plagas_enfermedades_quimico',
							inputValue:1,
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_control_plagas_enfermedades_quimico',ayuda_acu_cca_control_plagas_enfermedades_quimico);
								},
								'check':function(checkbox,checked){
									
									if(!checked){
									Ext.getCmp('acu_cca_control_plagas_enfermedades_quimico_tendencia').reset();
									Ext.getCmp('acu_cca_control_plagas_enfermedades_mas_usado_quimico').reset();
									}
									Ext.getCmp('acu_cca_control_plagas_enfermedades_quimico_tendencia').setDisabled(!checked);
									Ext.getCmp('acu_cca_control_plagas_enfermedades_mas_usado_quimico').setDisabled(!checked);	
								}
							}
						},
						{	
							xtype: 'checkbox', 
							fieldLabel: 'Org&aacute;nico',
							id: 'acu_cca_control_plagas_enfermedades_organico',
							name: 'acu_cca_control_plagas_enfermedades_organico',
							inputValue:1,
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_control_plagas_enfermedades_organico',ayuda_acu_cca_control_plagas_enfermedades_organico);
								},
								'check':function(checkbox,checked){
									
									if(!checked){
									Ext.getCmp('acu_cca_control_plagas_enfermedades_organico_tendencia').reset();
									Ext.getCmp('acu_cca_control_plagas_enfermedades_mas_usado_organico').reset();
									}
									Ext.getCmp('acu_cca_control_plagas_enfermedades_organico_tendencia').setDisabled(!checked);
									Ext.getCmp('acu_cca_control_plagas_enfermedades_mas_usado_organico').setDisabled(!checked);	
								}
							}
						},
						{
							xtype: 'checkbox', 
							fieldLabel: 'Biol&oacute;gico',
							id: 'acu_cca_control_plagas_enfermedades_biologico',
							name: 'acu_cca_control_plagas_enfermedades_biologico',
							inputValue:1,
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_control_plagas_enfermedades_biologico',ayuda_acu_cca_control_plagas_enfermedades_biologico);
								},
								'check':function(checkbox,checked){
									
									if(!checked){
									Ext.getCmp('acu_cca_control_plagas_enfermedades_biologico_tendencia').reset();
									Ext.getCmp('acu_cca_control_plagas_enfermedades_mas_usado_biologico').reset();
									}
									Ext.getCmp('acu_cca_control_plagas_enfermedades_biologico_tendencia').setDisabled(!checked);
									Ext.getCmp('acu_cca_control_plagas_enfermedades_mas_usado_biologico').setDisabled(!checked);	
								}
							}
						},
						{
							xtype: 'checkbox', 
							fieldLabel: 'Ninguno',
							id: 'acu_cca_control_plagas_enfermedades_ninguno',
							name:'acu_cca_control_plagas_enfermedades_ninguno',
							inputValue:1,
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_control_plagas_enfermedades_ninguno',ayuda_acu_cca_control_plagas_enfermedades_ninguno);
								}
							}
						}
			   ]
			},{
//				width: 79,
				bodyStyle: 'padding-top:8px;padding-right:5px;',
				defaults:{hideLabel: true,width:79},
				items:
				[ 	
					{ xtype: 'label', html: 'Cu&aacute;l es m&aacute;s <br/>usado?', cls:'x-form-check-group-label'},
					{
						xtype: 'radiogroup',
						columns: 1,
						id: 'acu_cca_control_plagas_enfermedades_mas_usado',
						defaults:{ height:22, disabled:true },
						items: 	
						[		 
							{ 
								name: 'acu_cca_control_plagas_enfermedades_mas_usado',
								id: 'acu_cca_control_plagas_enfermedades_mas_usado_quimico',
								inputValue: 'quimico'
							},
							{ 	name: 'acu_cca_control_plagas_enfermedades_mas_usado', 
								inputValue: 'organico',
								id: 'acu_cca_control_plagas_enfermedades_mas_usado_organico'
							},
							{ 
								name: 'acu_cca_control_plagas_enfermedades_mas_usado', 
								inputValue: 'biologico',
								id: 'acu_cca_control_plagas_enfermedades_mas_usado_biologico'
							}
						],
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_plagas_enfermedades_mas_usado',ayuda_acu_cca_control_plagas_enfermedades_mas_usado);
							}
						}
					}
				]
			},{
				width: 220,
				title: '<center>Tendencia</center>',    
				defaults:{hideLabel: true,disabled:true,columns:[ 73, 73, 73]},
				items:
				[ 	
					{
						xtype: 'radiogroup',
						//anchor: '100%',
						layout: 'column',
						id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', 
						columns:[ 73, 73, 73],
						items: [{
									width: 73,
									items: [
										{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
										{ 
											name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', 
											id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia_incremento', 
											inputValue: 'incremento'
										}
										]
								},{
									width: 73,
									items: [
										{ xtype: 'label', html: 'Estable', cls:'x-form-check-group-label'},
										{ name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia',
											id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia_estable',
											inputValue: 'estable',
											}
										]
								},{
									width: 73,
									items: [
										{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
										{ name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', 
											id: 'acu_cca_control_plagas_enfermedades_quimico_tendencia_disminucion', 
											inputValue: 'disminucion'}
										]
								}],
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_control_plagas_enfermedades_quimico_tendencia',ayuda_acu_cca_control_plagas_enfermedades_quimico_tendencia);
									}
								}
					},
					{
						xtype: 'radiogroup',
						id: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
						items: 
						[
							{ name: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
								id: 'acu_cca_control_plagas_enfermedades_organico_tendencia_incremento',
								inputValue: 'incremento'
							},
							{ name: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
								id: 'acu_cca_control_plagas_enfermedades_organico_tendencia_estable',
								inputValue: 'estable'
							},
							{ name: 'acu_cca_control_plagas_enfermedades_organico_tendencia',
								id: 'acu_cca_control_plagas_enfermedades_organico_tendencia_disminucion',
								inputValue: 'disminucion'
							}
						],
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_plagas_enfermedades_organico_tendencia',ayuda_acu_cca_control_plagas_enfermedades_organico_tendencia);
							}
						}
					},
					{
						xtype: 'radiogroup',
						id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
						items: [
							{ name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
								id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia_incremento',
								inputValue: 'incremento'
							},
							{ name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
								id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia_estable',
								inputValue: 'estable'
							},
							{ name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia',
								id: 'acu_cca_control_plagas_enfermedades_biologico_tendencia_disminucion',
								inputValue: 'disminucion'
							}
						],
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_plagas_enfermedades_biologico_tendencia',ayuda_acu_cca_control_plagas_enfermedades_biologico_tendencia);
							}
						}
					}
				]
			}
		]			
	});

	var acu_calidadcantidadagua_fertilizacioncultivos_fieldset =new Ext.form.FieldSet({
		width:470,
		height:170,
		title:'Fertilizaci&oacute;n de cultivos',
		layout:'column',
		bodyStyle: 'padding:5px;',			
		defaults:{layout:'form',border:false},
		items:[
		{  
			//width:130,
			bodyStyle: 'padding-top:11px;',
			defaults:{labelStyle: 'width:70px;'+letra,width:34},
			items:
			[
					{xtype: 'label',anchor:'100%',html: 'Tipo de fertilizantes<br/> usados', cls:'x-form-check-group-label'},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Qu&iacute;mico',
						id: 'acu_cca_fertilizacion_cultivos_quimico',
						name:'acu_cca_fertilizacion_cultivos_quimico',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_fertilizacion_cultivos_quimico',ayuda_acu_cca_fertilizacion_cultivos_quimico);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_fertilizacion_cultivos_quimico_tendencia').reset();
								Ext.getCmp('acu_cca_fertilizacion_cultivos_mas_usado_quimico').reset();
								}
								Ext.getCmp('acu_cca_fertilizacion_cultivos_quimico_tendencia').setDisabled(!checked);
								Ext.getCmp('acu_cca_fertilizacion_cultivos_mas_usado_quimico').setDisabled(!checked);	
							}
						}
					},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Org&aacute;nico',
						id: 'acu_cca_fertilizacion_cultivos_organico',
						name: 'acu_cca_fertilizacion_cultivos_organico',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_fertilizacion_cultivos_organico',ayuda_acu_cca_fertilizacion_cultivos_organico);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_fertilizacion_cultivos_organico_tendencia').reset();
								Ext.getCmp('acu_cca_fertilizacion_cultivos_mas_usado_organico').reset();
								}
								Ext.getCmp('acu_cca_fertilizacion_cultivos_organico_tendencia').setDisabled(!checked);
								Ext.getCmp('acu_cca_fertilizacion_cultivos_mas_usado_organico').setDisabled(!checked);	
							}
						}
					},
					{
						xtype: 'checkbox', 
						fieldLabel: 'Ninguno',
						id: 'acu_cca_fertilizacion_cultivos_ninguno',
						name:'acu_cca_fertilizacion_cultivos_ninguno',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_fertilizacion_cultivos_ninguno',ayuda_acu_cca_fertilizacion_cultivos_ninguno);
							}
						}
					}
		   ]
		},{
			width: 79,
			bodyStyle: 'padding-top:8px;padding-right:5px;',
			defaults:{ hideLabel: true},
			items:
			[
				{ xtype: 'label', html: 'Cu&aacute;l es m&aacute;s usado?', cls:'x-form-check-group-label'},
				{
					xtype: 'radiogroup',
					id: 'acu_cca_fertilizacion_cultivos_mas_usado',
					columns: 1,
					defaults:{ height:22, disabled:true },
					items: 	
					[
						{ 
							name: 'acu_cca_fertilizacion_cultivos_mas_usado',
							id: 'acu_cca_fertilizacion_cultivos_mas_usado_quimico',
							inputValue: 'quimico'
						},
						{ 
							name: 'acu_cca_fertilizacion_cultivos_mas_usado', 
							inputValue: 'organico',
							id: 'acu_cca_fertilizacion_cultivos_mas_usado_organico'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_fertilizacion_cultivos_mas_usado',ayuda_acu_cca_fertilizacion_cultivos_mas_usado);
						}
					}
				},
				
			]
		},{
			width: 220,
			title: '<center>Tendencia</center>',    
			defaults:{hideLabel: true,disabled:true,columns:[ 73, 73, 73]},
			items:
			[ 	
				{
					xtype: 'radiogroup',
					anchor: '100%',
					layout: 'column',
					id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', 
					columns:[ 73, 73, 73],
					items: 
					[		
						{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', 
									id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia_incremento', 
									inputValue: 'incremento'
								}
								]
						},{
							width: 73,
							items: [
								{ xtype: 'label',html: 'Estable', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia',
									id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia_estable',
									inputValue: 'estable',
									}
								]
						},{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', 
									id: 'acu_cca_fertilizacion_cultivos_quimico_tendencia_disminucion', 
									inputValue: 'disminucion'}
								]
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_fertilizacion_cultivos_quimico_tendencia',ayuda_acu_cca_fertilizacion_cultivos_quimico_tendencia);
						}
					}
				},
				{
					xtype: 'radiogroup',
					id: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
					items: 
					[
						{ 
							name: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
							id: 'acu_cca_fertilizacion_cultivos_organico_tendencia_incremento',
							inputValue: 'incremento'
						},
						{ 	
							name: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
							id: 'acu_cca_fertilizacion_cultivos_organico_tendencia_estable',
							inputValue: 'estable'
						},
						{ 	
							name: 'acu_cca_fertilizacion_cultivos_organico_tendencia',
							id: 'acu_cca_fertilizacion_cultivos_organico_tendencia_disminucion',
							inputValue: 'disminucion'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_fertilizacion_cultivos_organico_tendencia',ayuda_acu_cca_fertilizacion_cultivos_organico_tendencia);
						}
					}
				}
			]
		}
		]
	});
	
	var acu_calidadcantidadagua_controlplagas_panel = new Ext.FormPanel({
		//frame: true,
		hidden: true,
		//autoWidth: true,
		height:largo_panel-15,
		layout:'column',
		items:
		[
			acu_calidadcantidadagua_controlplagas_fieldset,
			{
				bodyStyle: 'padding-left:5px;padding-right:5px;',
			},
			acu_calidadcantidadagua_fertilizacioncultivos_fieldset
		],
		//renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				acu_calidadcantidadagua_controlplagas_panel.hide();
				acu_calidadcantidadagua_actividadpecuaria_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				acu_calidadcantidadagua_controlplagas_subirdatos();
				acu_calidadcantidadagua_controlplagas_panel.hide();
				acu_calidadcantidadagua_controlmalezas_panel.show();
			}
		}]
	});
	
	function acu_calidadcantidadagua_controlplagas_subirdatos()
	{
		subirDatos(
			acu_calidadcantidadagua_controlplagas_panel,
			'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua',
			{formulario:'controlPlagas'},
			function(){}
		);	

	}
	
	

