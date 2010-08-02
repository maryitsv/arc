	var acu_calidadcantidadagua_actividadagricola_datos_datastore = new Ext.data.Store({
        id: 'acu_calidadcantidadagua_actividadagricola_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_calidadcantidadagua/obtenerDatosCalidadcantidadagua', 
                method: 'POST'
        }),
        baseParams:{
			formulario:'actividadAgricola'
		}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_cca_actividad_agricola_permanentes', type: 'int'},	    
                  {name: 'acu_cca_actividad_agricola_semipermanentes', type: 'int'},
				  {name: 'acu_cca_actividad_agricola_temporales', type: 'int'},
				  {name: 'acu_cca_actividad_agricola_mayor_area', type: 'string'},
				  {name: 'acu_cca_actividad_agricola_permanentes_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_agricola_semipermanentes_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_agricola_temporales_tendencia', type: 'string'},

                  {name: 'acu_cca_actividad_pecuaria_ganaderia_bovina', type: 'int'},	    
                  {name: 'acu_cca_actividad_pecuaria_ganaderia_equina', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_porcicultura', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_capricultura_ovinos', type: 'int'},	
				  {name: 'acu_cca_actividad_pecuaria_avicultura', type: 'int'},					  
                  {name: 'acu_cca_actividad_pecuaria_piscicultura', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_otros', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_otros_cual', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_mayor_area', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia', type: 'string'},				  
				  {name: 'acu_cca_actividad_pecuaria_avicultura_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_piscicultura_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_otros_tendencia', type: 'string'},
				  
				  {name: 'acu_cca_control_plagas_enfermedades_quimico', type: 'int'},	    
                  {name: 'acu_cca_control_plagas_enfermedades_organico', type: 'int'},
				  {name: 'acu_cca_control_plagas_enfermedades_biologico', type: 'int'},
				  {name: 'acu_cca_control_plagas_enfermedades_ninguno', type: 'int'},	
				  {name: 'acu_cca_control_plagas_enfermedades_mas_usado', type: 'string'},					  
                  {name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', type: 'string'},
				  {name: 'acu_cca_control_plagas_enfermedades_organico_tendencia', type: 'string'},
				  {name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia', type: 'string'},
				  
				  {name: 'acu_cca_fertilizacion_cultivos_quimico', type: 'int'},
				  {name: 'acu_cca_fertilizacion_cultivos_organico', type: 'int'},
				  {name: 'acu_cca_fertilizacion_cultivos_ninguno', type: 'int'},
				  {name: 'acu_cca_fertilizacion_cultivos_mas_usado', type: 'string'},
				  {name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', type: 'string'},				  
				  {name: 'acu_cca_fertilizacion_cultivos_organico_tendencia', type: 'string'}				  
		])
    });


	var acu_calidadcantidadagua_actividadagricola_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[
			{
			 xtype:'fieldset',
			 title:'Actividad agricola',
			 layout:'column',
			 defaults:{layout:'form',border: false},
			 items:
			 [
				{  
					//width:180,
					bodyStyle: 'padding-top:23px;',
					id:'asdasads',
					defaults:{labelStyle: 'width:150px;'+letra,width:80},
					items:
					[
							{xtype: 'label',text: 'Tipo cultivo', cls:'x-form-check-group-label'},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Cultivo permanente',
								inputValue: 1,
								id: 'acu_cca_actividad_agricola_permanentes',
								name:'acu_cca_actividad_agricola_permanentes',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_agricola_permanentes',ayuda_acu_cca_actividad_agricola_permanentes);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_agricola_permanentes_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_agricola_mayor_area_permanente').reset();
										}
										Ext.getCmp('acu_cca_actividad_agricola_permanentes_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_agricola_mayor_area_permanente').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Cultivo semipermanente',
								inputValue: 1,
								id: 'acu_cca_actividad_agricola_semipermanentes',
								name: 'acu_cca_actividad_agricola_semipermanentes',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_agricola_semipermanentes',ayuda_acu_cca_actividad_agricola_semipermanentes);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_agricola_semipermanentes_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_agricola_mayor_area_semipermanentes').reset();
										}
										Ext.getCmp('acu_cca_actividad_agricola_semipermanentes_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_agricola_mayor_area_semipermanentes').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Cultivo temporal',
								inputValue: 1,
								id: 'acu_cca_actividad_agricola_temporales',
								name: 'acu_cca_actividad_agricola_temporales',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_agricola_temporales',ayuda_acu_cca_actividad_agricola_temporales);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_agricola_temporales_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_agricola_mayor_area_temporales').reset();
										}
										Ext.getCmp('acu_cca_actividad_agricola_temporales_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_agricola_mayor_area_temporales').setDisabled(!checked);	
									}
								}
							}
				   ]
				},{
					width: 79,
					bodyStyle: 'padding-top:8px;padding-right:5px;',
					id:'acu_cca_actividad_agricola_mayor_area_panel',
					defaults:{labelStyle: 'width:1px;text-align:center;',hideLabel: true},
					items:
					[ 	
						{ xtype: 'label', html: 'Cual ocupa <br/>mayor area?', cls:'x-form-check-group-label'},
						{
							xtype: 'radiogroup',
							columns: 1,
							id: 'acu_cca_actividad_agricola_mayor_area',
							defaults:{ height:22, disabled:true },
							items: 	
							[
								{ 	
									id: 'acu_cca_actividad_agricola_mayor_area_permanente',
									name: 'acu_cca_actividad_agricola_mayor_area',
									inputValue: 'permanentes'
								},
								{ 
									id: 'acu_cca_actividad_agricola_mayor_area_semipermanentes',
									name: 'acu_cca_actividad_agricola_mayor_area', 
									inputValue: 'semipermanentes'
								},
								{
									id: 'acu_cca_actividad_agricola_mayor_area_temporales', 
									name: 'acu_cca_actividad_agricola_mayor_area', 
									inputValue: 'temporales'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_agricola_mayor_area',ayuda_acu_cca_actividad_agricola_mayor_area);
								}
							}
						}
					]
				},
				{
					width: 225,
					title: '<html><center>Tendencia</center></html>',    
					defaults:{hideLabel: true, disabled:true,columns:[ 73, 73, 73]},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							layout: 'column',
							columns:[ 73, 73, 73],
							id: 'acu_cca_actividad_agricola_permanentes_tendencia', 							
							items: [{
										width: 73,
										items: [
											{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_agricola_permanentes_tendencia', 
												id: 'acu_cca_actividad_agricola_permanentes_tendencia_incremento', 
												inputValue: 'incremento'
											}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_agricola_permanentes_tendencia',
												id: 'acu_cca_actividad_agricola_permanentes_tendencia_estable',
												inputValue: 'estable',
												}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_agricola_permanentes_tendencia', 
												id: 'acu_cca_actividad_agricola_permanentes_tendencia_disminucion', 
												inputValue: 'disminucion'}
											]
									}],
									listeners:
									{
										'render':function(){
											ayuda('acu_cca_actividad_agricola_permanentes_tendencia',ayuda_acu_cca_actividad_agricola_permanentes_tendencia);
										}
									}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_agricola_semipermanentes_tendencia',
							items: [
								{ 	
									name: 'acu_cca_actividad_agricola_semipermanentes_tendencia',
									id: 'acu_cca_actividad_agricola_semipermanentes_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ 
									name: 'acu_cca_actividad_agricola_semipermanentes_tendencia',
									id: 'acu_cca_actividad_agricola_semipermanentes_tendencia_estable',
									inputValue: 'estable'
								},
								{ 
									name: 'acu_cca_actividad_agricola_semipermanentes_tendencia',
									id: 'acu_cca_actividad_agricola_semipermanentes_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_agricola_semipermanentes_tendencia',ayuda_acu_cca_actividad_agricola_semipermanentes_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_agricola_temporales_tendencia',
							items: [
								{ 	
									name: 'acu_cca_actividad_agricola_temporales_tendencia',
									id: 'acu_cca_actividad_agricola_temporales_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ 	
									name: 'acu_cca_actividad_agricola_temporales_tendencia',
									id: 'acu_cca_actividad_agricola_temporales_tendencia_estable',
									inputValue: 'estable'
								},
								{ 	
									name: 'acu_cca_actividad_agricola_temporales_tendencia',
									id: 'acu_cca_actividad_agricola_temporales_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_agricola_temporales_tendencia',ayuda_acu_cca_actividad_agricola_temporales_tendencia);
								}
							}
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
			iconCls:'atras',
			handler:function(){
				acu_microcuenca_tabpanel.setActiveTab(2);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				acu_calidadcantidadagua_actividadagricola_subirdatos();
	
				acu_calidadcantidadagua_actividadagricola_panel.hide();
				acu_calidadcantidadagua_actividadpecuaria_panel.show();
				
			}
		}]
	});
	
	function acu_calidadcantidadagua_actividadagricola_subirdatos()
	{
		//alert("asd");
		var url_calidadcantidadagua = 'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua';
		subirDatos(acu_calidadcantidadagua_actividadagricola_panel,url_calidadcantidadagua,{formulario:'actividadAgricola'});
		
	}
	

