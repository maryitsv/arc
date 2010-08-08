//******************* Actividad pecuaria**********//
	
	var acu_calidadcantidadagua_actividadpecuaria_panel = new Ext.FormPanel({
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
			 title:'Actividad pecuaria',
			 layout:'column',
			 defaults:{layout:'form',border:false},
			 items:[
				{  
					//width:180,
					bodyStyle: 'padding-top:23px;',
					defaults:{labelStyle: 'width:150px;'+letra,width:80},
					items:[
							{xtype: 'label',text: 'Tipo actividad', cls:'x-form-check-group-label'},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Ganader&iacute;a bovina',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_ganaderia_bovina',
								name:'acu_cca_actividad_pecuaria_ganaderia_bovina',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_ganaderia_bovina',ayuda_acu_cca_actividad_pecuaria_ganaderia_bovina);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_ganaderia_bovina').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_ganaderia_bovina').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Ganader&iacute;a equina',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_ganaderia_equina',
								name: 'acu_cca_actividad_pecuaria_ganaderia_equina',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_ganaderia_equina',ayuda_acu_cca_actividad_pecuaria_ganaderia_equina);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_ganaderia_equina_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_ganaderia_equina').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_ganaderia_equina_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_ganaderia_equina').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Porcicultura',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_porcicultura',
								name: 'acu_cca_actividad_pecuaria_porcicultura',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_porcicultura',ayuda_acu_cca_actividad_pecuaria_porcicultura);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_porcicultura_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_porcicultura').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_porcicultura_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_porcicultura').setDisabled(!checked);	
									}
								}
							},
							{
								xtype: 'checkbox', 
								fieldLabel: 'Capricultura y/o ovinos',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_capricultura_ovinos',
								name:'acu_cca_actividad_pecuaria_capricultura_ovinos',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_capricultura_ovinos',ayuda_acu_cca_actividad_pecuaria_capricultura_ovinos);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_capricultura_ovinos').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_capricultura_ovinos').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Avicultura',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_avicultura',
								name: 'acu_cca_actividad_pecuaria_avicultura',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_avicultura',ayuda_acu_cca_actividad_pecuaria_avicultura);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_avicultura_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_avicultura').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_avicultura_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_avicultura').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Piscicultura',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_piscicultura',
								name: 'acu_cca_actividad_pecuaria_piscicultura',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_piscicultura',ayuda_acu_cca_actividad_pecuaria_piscicultura);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_piscicultura_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_piscicultura').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_piscicultura_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_piscicultura').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'checkbox', 
								fieldLabel: 'Otro',
								inputValue: 1,
								id: 'acu_cca_actividad_pecuaria_otros',
								name: 'acu_cca_actividad_pecuaria_otros',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_otros',ayuda_acu_cca_actividad_pecuaria_otros);
									},
									'check':function(checkbox,checked){
										
										if(!checked){
										Ext.getCmp('acu_cca_actividad_pecuaria_otros_tendencia').reset();
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_otros').reset();
										}
										Ext.getCmp('acu_cca_actividad_pecuaria_otros_tendencia').setDisabled(!checked);
										Ext.getCmp('acu_cca_actividad_pecuaria_mayor_area_otros').setDisabled(!checked);	
									}
								}
							},
							{	
								xtype: 'textfield', 
								fieldLabel: '&iquest;Cu&aacute;l?',
								labelStyle: 'width:40px;'+letra,
								inputValue: 1,
								width: 120,
								maxLength : 100,
								id: 'acu_cca_actividad_pecuaria_otros_cual',
								name: 'acu_cca_actividad_pecuaria_otros_cual',
								listeners:
								{
									'render':function(){
										ayuda('acu_cca_actividad_pecuaria_otros_cual',ayuda_acu_cca_actividad_pecuaria_otros_cual);
									}
								}
							}
				   ]
				},{
					width: 79,
					bodyStyle: 'padding-top:7px;padding-right:5px;',
					defaults:{hideLabel: true,disabled:true},
					items:
					[ 	
						{ xtype: 'label', html: 'Cu&aacute;l ocupa mayor area?', cls:'x-form-check-group-label',disabled:false},
						{
							xtype: 'radiogroup',
							columns: 1,
							id: 'acu_cca_actividad_pecuaria_mayor_area',
							defaults:{height:22 },
							items: 	
							[
								{ 
									name: 'acu_cca_actividad_pecuaria_mayor_area',
									id: 'acu_cca_actividad_pecuaria_mayor_area_ganaderia_bovina',
									inputValue: 'ganaderia bovina'
								},
								{ 	
									name: 'acu_cca_actividad_pecuaria_mayor_area', 
									inputValue: 'ganaderia equina',
									id: 'acu_cca_actividad_pecuaria_mayor_area_ganaderia_equina'
								},
								{ 
									name: 'acu_cca_actividad_pecuaria_mayor_area', 
									inputValue: 'porcicultura',
									id: 'acu_cca_actividad_pecuaria_mayor_area_porcicultura'
								},
								{ 
									name: 'acu_cca_actividad_pecuaria_mayor_area', 
									inputValue: 'capricultura y/u ovinos',
									id: 'acu_cca_actividad_pecuaria_mayor_area_capricultura_ovinos'
								},
								{ 
									name: 'acu_cca_actividad_pecuaria_mayor_area', 
									inputValue: 'avicultura',
									id: 'acu_cca_actividad_pecuaria_mayor_area_avicultura'
								},
								{ 
									name: 'acu_cca_actividad_pecuaria_mayor_area', 
									inputValue: 'piscicultura',
									id: 'acu_cca_actividad_pecuaria_mayor_area_piscicultura'
								},
								{ 
									name: 'acu_cca_actividad_pecuaria_mayor_area', 
									inputValue: 'otro',
									id: 'acu_cca_actividad_pecuaria_mayor_area_otros'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_mayor_area',ayuda_acu_cca_actividad_pecuaria_mayor_area);
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
							id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', 
							items: [{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', 
												id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia_incremento', 
												inputValue: 'incremento'
											}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Estable', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia',
												id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia_estable',
												inputValue: 'estable',
												}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
											{ name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', 
												id: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia_disminucion', 
												inputValue: 'disminucion'}
											]
									}],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia',ayuda_acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
							items: [
								{ 
									name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
									id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ 	
									name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
									id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia_estable',
									inputValue: 'estable'
								},
								{ 	
									name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',
									id: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_ganaderia_equina_tendencia',ayuda_acu_cca_actividad_pecuaria_ganaderia_equina_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia_estable',
									inputValue: 'estable'
								},
								{ name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_porcicultura_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_porcicultura_tendencia',ayuda_acu_cca_actividad_pecuaria_porcicultura_tendencia);
								}
							}
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
									inputValue: 'estable'
								},
								{ name: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia',
									id: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia',ayuda_acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_avicultura_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_avicultura_tendencia_estable',
									inputValue: 'estable'
								},
								{ name: 'acu_cca_actividad_pecuaria_avicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_avicultura_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_avicultura_tendencia',ayuda_acu_cca_actividad_pecuaria_avicultura_tendencia);
								}
							}
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
									inputValue: 'estable'
								},
								{ name: 'acu_cca_actividad_pecuaria_piscicultura_tendencia',
									id: 'acu_cca_actividad_pecuaria_piscicultura_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_piscicultura_tendencia',ayuda_acu_cca_actividad_pecuaria_piscicultura_tendencia);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'acu_cca_actividad_pecuaria_otros_tendencia',
							items: [
								{ name: 'acu_cca_actividad_pecuaria_otros_tendencia',
									id: 'acu_cca_actividad_pecuaria_otros_tendencia_incremento',
									inputValue: 'incremento'
								},
								{ name: 'acu_cca_actividad_pecuaria_otros_tendencia',
									id: 'acu_cca_actividad_pecuaria_otros_tendencia_estable',
									inputValue: 'estable'
								},
								{ name: 'acu_cca_actividad_pecuaria_otros_tendencia',
									id: 'acu_cca_actividad_pecuaria_otros_tendencia_disminucion',
									inputValue: 'disminucion'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('acu_cca_actividad_pecuaria_otros_tendencia',ayuda_acu_cca_actividad_pecuaria_otros_tendencia);
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
			iconCls: 'atras',
			handler:function(){
				
				acu_calidadcantidadagua_actividadpecuaria_panel.hide();
				acu_calidadcantidadagua_actividadagricola_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls: 'continuar',
			handler:function(){
				acu_calidadcantidadagua_actividadpecuaria_subirdatos();
				
				acu_calidadcantidadagua_actividadpecuaria_panel.hide();
				acu_calidadcantidadagua_controlplagas_panel.show();
			
			}
		}]
	});
	
	function acu_calidadcantidadagua_actividadpecuaria_subirdatos()
	{
		var url_calidadcantidadagua = 'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua';
		subirDatos(
			acu_calidadcantidadagua_actividadpecuaria_panel,
			url_calidadcantidadagua,
			{formulario:'actividadPecuaria'},
			function(){}
		);	
	}
/*	
	acu_calidadcantidadagua_actividadagricola_datos_datastore.load({
	  callback: function() {
		var record = acu_calidadcantidadagua_actividadagricola_datos_datastore.getAt(0);
		acu_calidadcantidadagua_actividadagricola_panel.getForm().loadRecord(record);	
		acu_calidadcantidadagua_actividadpecuaria_panel.getForm().loadRecord(record);
	  }
	});
*/
