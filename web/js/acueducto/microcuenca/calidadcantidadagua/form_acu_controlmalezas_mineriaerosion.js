	var acu_calidadcantidadagua_controlmalezas_fieldset =new Ext.form.FieldSet({
	 //	columnWidth: '.5',
		width: 490,
		height:185,
		bodyStyle: 'padding:5px;',			
		title:'Control de malezas',
		layout:'column',
		defaults:{layout:'form',border:false},
		items:[
		{  
			width:150,
			bodyStyle: 'padding-top:24px;',
			defaults:{labelStyle: 'width:125px;'+letra},
			items:[
					{xtype: 'label',text: 'Tipos de control usados', cls:'x-form-check-group-label'},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Qu&iacute;mico',
						id:  'acu_cca_control_malezas_quimico',
						name:'acu_cca_control_malezas_quimico',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_malezas_quimico',ayuda_acu_cca_control_malezas_quimico);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_control_malezas_quimico_tendencia').reset();
								Ext.getCmp('acu_cca_control_malezas_mas_usado_quimico').reset();
								}
								Ext.getCmp('acu_cca_control_malezas_quimico_tendencia').setDisabled(!checked);
								Ext.getCmp('acu_cca_control_malezas_mas_usado_quimico').setDisabled(!checked);	
							}
						}
					},
					{
						xtype: 'checkbox', 
						fieldLabel: 'Org&aacute;nico',
						id:   'acu_cca_control_malezas_organico',
						name: 'acu_cca_control_malezas_organico',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_malezas_organico',ayuda_acu_cca_control_malezas_organico);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_control_malezas_organico_tendencia').reset();
								Ext.getCmp('acu_cca_control_malezas_mas_usado_organico').reset();
								}
								Ext.getCmp('acu_cca_control_malezas_organico_tendencia').setDisabled(!checked);
								Ext.getCmp('acu_cca_control_malezas_mas_usado_organico').setDisabled(!checked);	
							}
						}
					},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Mec&aacute;nico o manual',
						id:   'acu_cca_control_malezas_meca_manu',
						name: 'acu_cca_control_malezas_meca_manu',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_malezas_meca_manu',ayuda_acu_cca_control_malezas_meca_manu);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_control_malezas_meca_manu_tendencia').reset();
								Ext.getCmp('acu_cca_control_malezas_mas_usado_meca_manu').reset();
								}
								Ext.getCmp('acu_cca_control_malezas_meca_manu_tendencia').setDisabled(!checked);
								Ext.getCmp('acu_cca_control_malezas_mas_usado_meca_manu').setDisabled(!checked);	
							}
						}
					},
					{
						xtype: 'checkbox', 
						fieldLabel: 'Ninguno',
						id:   'acu_cca_control_malezas_ninguno',
						name: 'acu_cca_control_malezas_ninguno',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_control_malezas_ninguno',ayuda_acu_cca_control_malezas_ninguno);
							}
						}
					}
		   ]
		},{
			width: 79,
			bodyStyle: 'padding-top:8px;',
			defaults:{hideLabel: true},
			items:
			[ 	
				{ xtype: 'label', html: 'Cu&aacute;l es m&aacute;s usado?', cls:'x-form-check-group-label'},
				{
					xtype: 'radiogroup',
					id: 'acu_cca_control_malezas_mas_usado',
					columns: 1,
					defaults:{ height:22, disabled:true },
					items: 	
					[ 
						{ 
							name: 'acu_cca_control_malezas_mas_usado',
							id: 'acu_cca_control_malezas_mas_usado_quimico',
							inputValue: 'quimico'
						},
						{ 
							name: 'acu_cca_control_malezas_mas_usado', 
							inputValue: 'organico',
							id: 'acu_cca_control_malezas_mas_usado_organico'
						},
						{ 
							name: 'acu_cca_control_malezas_mas_usado', 
							inputValue: 'macanico o manual',
							id: 'acu_cca_control_malezas_mas_usado_meca_manu'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_control_malezas_mas_usado',ayuda_acu_cca_control_malezas_mas_usado);
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
					id: 'acu_cca_control_malezas_quimico_tendencia', 
					columns:[ 73, 73, 73],
					items: 
					[		
						{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_control_malezas_quimico_tendencia', 
									id: 'acu_cca_control_malezas_quimico_tendencia_incremento', 
									inputValue: 'incremento'
								}
								]
						},{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Estable', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_control_malezas_quimico_tendencia',
									id: 'acu_cca_control_malezas_quimico_tendencia_estable',
									inputValue: 'estable',
									}
								]
						},{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_control_malezas_quimico_tendencia', 
									id: 'acu_cca_control_malezas_quimico_tendencia_disminucion', 
									inputValue: 'disminucion'}
								]
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_control_malezas_quimico_tendencia',ayuda_acu_cca_control_malezas_quimico_tendencia);
						}
					}
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
							inputValue: 'estable'
						},
						{ name: 'acu_cca_control_malezas_organico_tendencia',
							id: 'acu_cca_control_malezas_organico_tendencia_disminucion',
							inputValue: 'disminucion'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_control_malezas_organico_tendencia',ayuda_acu_cca_control_malezas_organico_tendencia);
						}
					}
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
							inputValue: 'estable'
						},
						{ name: 'acu_cca_control_malezas_meca_manu_tendencia',
							id: 'acu_cca_control_malezas_meca_manu_tendencia_disminucion',
							inputValue: 'disminucion'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_control_malezas_meca_manu_tendencia',ayuda_acu_cca_control_malezas_meca_manu_tendencia);
						}
					}
				}
			]
		}
		]
	});

	var acu_calidadcantidadagua_mineriaerosion_fieldset =new Ext.form.FieldSet({
		xtype:'fieldset',
		//autoWidth: true,
		width: 410,
		height:140,
		bodyStyle: 'padding:5px;',			
		//columnWidth:'.5',
		title:'Miner&iacute;a y erosi&oacute;n',
		layout:'column',
		defaults:{layout:'form',border:false},
		items:[
		{  
		//	width:150,
			bodyStyle: 'padding-top:24px;',
			defaults:{labelStyle: 'width:110px;'+letra,width:35},
			items:[
					{xtype: 'label',text: 'Existe esta actividad', cls:'x-form-check-group-label'},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Minera?',
						id:  'acu_cca_mineria',
						name:'acu_cca_mineria',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_mineria',ayuda_acu_cca_mineria);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_mineria_tendencia').reset();
								}
								Ext.getCmp('acu_cca_mineria_tendencia').setDisabled(!checked);
							}
						}
					},
					{	xtype: 'checkbox', 
						fieldLabel: 'Erosi&oacute;n?',
						id:   'acu_cca_erosion',
						name: 'acu_cca_erosion',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_erosion',ayuda_acu_cca_erosion);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_erosion_tendencia').reset();
								}
								Ext.getCmp('acu_cca_erosion_tendencia').setDisabled(!checked);
							}
						}
					}
		   ]
		},{
			width: 220,
			title: '<center>Tendencia</center>',    
			defaults:{hideLabel: true, disabled:true,columns:[ 73, 73, 73]},
			items:
			[ 	
				{
					xtype: 'radiogroup',
					//anchor: '100%',
					layout: 'column',
					id: 'acu_cca_mineria_tendencia', 
					columns:[ 73, 73, 73],
					items: 
					[		
						{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_mineria_tendencia', 
									id: 'acu_cca_mineria_tendencia_incremento', 
									inputValue: 'incremento'
								}
								]
						},{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Estable', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_mineria_tendencia',
									id: 'acu_cca_mineria_tendencia_estable',
									inputValue: 'estable',
									}
								]
						},{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
								{ name: 'acu_cca_mineria_tendencia', 
									id: 'acu_cca_mineria_tendencia_disminucion', 
									inputValue: 'disminucion'}
								]
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_mineria_tendencia',ayuda_acu_cca_mineria_tendencia);
						}
					}
				},
				{
					xtype: 'radiogroup',
					id: 'acu_cca_erosion_tendencia',
					items: 
					[
						{ name: 'acu_cca_erosion_tendencia',
							id: 'acu_cca_erosion_tendencia_incremento',
							inputValue: 'incremento'
						},
						{ name: 'acu_cca_erosion_tendencia',
							id: 'acu_cca_erosion_tendencia_estable',
							inputValue: 'estable'
						},
						{ name: 'acu_cca_erosion_tendencia',
							id: 'acu_cca_erosion_tendencia_disminucion',
							inputValue: 'disminucion'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_erosion_tendencia',ayuda_acu_cca_erosion_tendencia);
						}
					}
				}
			]
		}
		]

	});
	
	var acu_calidadcantidadagua_controlmalezas_panel = new Ext.FormPanel({
		//frame: true,
		hidden: true,
		autoWidth: true,
		layout:'column',
		height:largo_panel-15,
		items:
		[
			acu_calidadcantidadagua_controlmalezas_fieldset,
			{
				bodyStyle: 'padding-left:5px;padding-right:5px;',
			},
			acu_calidadcantidadagua_mineriaerosion_fieldset
		],
		//renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				acu_calidadcantidadagua_controlmalezas_panel.hide();
				acu_calidadcantidadagua_controlplagas_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				acu_calidadcantidadagua_controlmalezas_subirdatos();
				
				acu_calidadcantidadagua_controlmalezas_panel.hide();
				acu_calidadcantidadagua_modificacionpaisaje_panel.show();
			}
		}]
	});
	
	
	function acu_calidadcantidadagua_controlmalezas_subirdatos()
	{
		subirDatos(
			acu_calidadcantidadagua_controlmalezas_panel,
			'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua',
			{formulario:'controlMalezas'},
			function(){}
		);	
	}
