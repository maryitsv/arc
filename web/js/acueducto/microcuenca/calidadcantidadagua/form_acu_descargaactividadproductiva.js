//******************* Actividad descarga productiva**********//
	
	var acu_calidadcantidadagua_descargaactividadproductiva_panel = new Ext.FormPanel({
		//frame: true,
		hidden: true,
		//autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		items:
		[
			{
			 xtype:'fieldset',
			 autoWidth: true,
			 title:'Descarga de actividades productivas',
			 layout:'column',
			 defaults:{layout:'form',border:false},
			 items:[
				{  
					//width:180,
					bodyStyle: 'padding-top:23px;',
					defaults:{labelStyle: 'width:100px;'+letra,width:40},
					items:[
							{xtype: 'label',text: 'Tipo actividad', cls:'x-form-check-group-label'},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Agr&iacute;cola',
								inputValue: 1,
								id: 'acu_cca_descarga_actividad_productiva_agricola',
								name:'acu_cca_descarga_actividad_productiva_agricola',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_descarga_actividad_productiva_agricola',ayuda_acu_cca_descarga_actividad_productiva_agricola);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_descarga_actividad_productiva_agricola_tendencia').reset();
										Ext.getCmp('acu_cca_descarga_actividad_productiva_agricola_especifica').reset();
										}
										Ext.getCmp('acu_cca_descarga_actividad_productiva_agricola_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_descarga_actividad_productiva_agricola_especifica').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Pecuaria',
								inputValue: 1,
								id: 'acu_cca_descarga_actividad_productiva_pecuaria',
								name: 'acu_cca_descarga_actividad_productiva_pecuaria',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_descarga_actividad_productiva_pecuaria',ayuda_acu_cca_descarga_actividad_productiva_pecuaria);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_descarga_actividad_productiva_pecuaria_tendencia').reset();
										Ext.getCmp('acu_cca_descarga_actividad_productiva_pecuaria_especifica').reset();
										}
										Ext.getCmp('acu_cca_descarga_actividad_productiva_pecuaria_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_descarga_actividad_productiva_pecuaria_especifica').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Minera',
								inputValue: 1,
								id: 'acu_cca_descarga_actividad_productiva_minera',
								name: 'acu_cca_descarga_actividad_productiva_minera',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_descarga_actividad_productiva_minera',ayuda_acu_cca_descarga_actividad_productiva_minera);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_descarga_actividad_productiva_minera_tendencia').reset();
										Ext.getCmp('acu_cca_descarga_actividad_productiva_minera_especifica').reset();
										}
										Ext.getCmp('acu_cca_descarga_actividad_productiva_minera_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_descarga_actividad_productiva_minera_especifica').setDisabled(!checked);	
									}
								}
							},
							{
								xtype: 'checkbox', 
								fieldLabel: 'Industrial',
								inputValue: 1,
								id: 'acu_cca_descarga_actividad_productiva_industrial',
								name:'acu_cca_descarga_actividad_productiva_industrial',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_descarga_actividad_productiva_industrial',ayuda_acu_cca_descarga_actividad_productiva_industrial);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_descarga_actividad_productiva_industrial_tendencia').reset();
										Ext.getCmp('acu_cca_descarga_actividad_productiva_industrial_especifica').reset();
										}
										Ext.getCmp('acu_cca_descarga_actividad_productiva_industrial_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_descarga_actividad_productiva_industrial_especifica').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Otra',
								inputValue: 1,
								id: 'acu_cca_descarga_actividad_productiva_otra',
								name: 'acu_cca_descarga_actividad_productiva_otra',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_descarga_actividad_productiva_otra',ayuda_acu_cca_descarga_actividad_productiva_otra);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_descarga_actividad_productiva_otra_tendencia').reset();
										Ext.getCmp('acu_cca_descarga_actividad_productiva_otra_especifica').reset();
										}
										Ext.getCmp('acu_cca_descarga_actividad_productiva_otra_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_descarga_actividad_productiva_otra_especifica').setDisabled(!checked);	
									}
								}
							}
							
				   ]
				},{
					//width: 180,
					bodyStyle: 'padding-top:23px;padding-right:5px;',
					defaults:{hideLabel: true,disabled:true,width:150,maxLength : 49},
					items:
					[ 	
						{ xtype: 'label', html: 'Actividad espec&iacute;fica', cls:'x-form-check-group-label',disabled:false},
						{	
							xtype: 'textfield', 
							id: 'acu_cca_descarga_actividad_productiva_agricola_especifica',
							name: 'acu_cca_descarga_actividad_productiva_agricola_especifica',
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_agricola_especifica',ayuda_acu_cca_descarga_actividad_productiva_agricola_especifica);
								}
							}
						},
						{	
							xtype: 'textfield', 
							id: 'acu_cca_descarga_actividad_productiva_pecuaria_especifica',
							name: 'acu_cca_descarga_actividad_productiva_pecuaria_especifica',
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_pecuaria_especifica',ayuda_acu_cca_descarga_actividad_productiva_pecuaria_especifica);
								}
							}
						},
						{	
							xtype: 'textfield', 
							id: 'acu_cca_descarga_actividad_productiva_minera_especifica',
							name: 'acu_cca_descarga_actividad_productiva_minera_especifica',
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_minera_especifica',ayuda_acu_cca_descarga_actividad_productiva_minera_especifica);
								}
							}
						},
						{	
							xtype: 'textfield', 
							id: 'acu_cca_descarga_actividad_productiva_industrial_especifica',
							name: 'acu_cca_descarga_actividad_productiva_industrial_especifica',
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_industrial_especifica',ayuda_acu_cca_descarga_actividad_productiva_industrial_especifica);
								}
							}
						},
						{	
							xtype: 'textfield', 
							id: 'acu_cca_descarga_actividad_productiva_otra_especifica',
							name: 'acu_cca_descarga_actividad_productiva_otra_especifica',
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_otra_especifica',ayuda_acu_cca_descarga_actividad_productiva_otra_especifica);
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
							anchor: '100%',
							layout: 'column',
							id: 'acu_cca_descarga_actividad_productiva_agricola_tendencia', 
							items: [{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_descarga_actividad_productiva_agricola_tendencia', 
												id: 'acu_cca_descarga_actividad_productiva_agricola_tendencia_incremento', 
												inputValue: 'incremento'
											}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_descarga_actividad_productiva_agricola_tendencia',
												id: 'acu_cca_descarga_actividad_productiva_agricola_tendencia_estable',
												inputValue: 'estable',
												}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_descarga_actividad_productiva_agricola_tendencia', 
												id: 'acu_cca_descarga_actividad_productiva_agricola_tendencia_disminucion', 
												inputValue: 'disminucion'}
											]
									}],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_agricola_tendencia',ayuda_acu_cca_descarga_actividad_productiva_agricola_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia',
							items: [
								{ 
									name: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ 	
									name: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia_estable',
									inputValue: 'estable'
								},
								{ 	
									name: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_pecuaria_tendencia',ayuda_acu_cca_descarga_actividad_productiva_pecuaria_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_descarga_actividad_productiva_minera_tendencia',
							items: [
								{ name: 'acu_cca_descarga_actividad_productiva_minera_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_minera_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_descarga_actividad_productiva_minera_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_minera_tendencia_estable',
									inputValue: 'estable'
								},
								{ name: 'acu_cca_descarga_actividad_productiva_minera_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_minera_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_minera_tendencia',ayuda_acu_cca_descarga_actividad_productiva_minera_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_descarga_actividad_productiva_industrial_tendencia',
							items: [
								{ name: 'acu_cca_descarga_actividad_productiva_industrial_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_industrial_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_descarga_actividad_productiva_industrial_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_industrial_tendencia_estable',
									inputValue: 'estable'
								},
								{ name: 'acu_cca_descarga_actividad_productiva_industrial_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_industrial_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_industrial_tendencia',ayuda_acu_cca_descarga_actividad_productiva_industrial_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_descarga_actividad_productiva_otra_tendencia',
							items: [
								{ name: 'acu_cca_descarga_actividad_productiva_otra_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_otra_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_descarga_actividad_productiva_otra_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_otra_tendencia_estable',
									inputValue: 'estable'
								},
								{ name: 'acu_cca_descarga_actividad_productiva_otra_tendencia',
									id: 'acu_cca_descarga_actividad_productiva_otra_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_descarga_actividad_productiva_otra_tendencia',ayuda_acu_cca_descarga_actividad_productiva_otra_tendencia);
								}
							}
						}
					]
				}
				]
			}
		],
		//renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls: 'atras',
			handler:function(){
				
				acu_calidadcantidadagua_descargaactividadproductiva_panel.hide();
				acu_calidadcantidadagua_modificacionpaisaje_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls: 'continuar',
			handler:function(){
				acu_calidadcantidadagua_descargaactividadproductiva_subirdatos();
				
				//acu_calidadcantidadagua_descargaactividadproductiva_panel.hide();

				Ext.getCmp('acueducto').setActiveTab(5);
			
			}
		}]
	});
	
	function acu_calidadcantidadagua_descargaactividadproductiva_subirdatos()
	{
		subirDatos(
			acu_calidadcantidadagua_descargaactividadproductiva_panel,
			'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua',
			{formulario:'descargasActividadProductiva'},
			function(){}
		);	
	}

	
