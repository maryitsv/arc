	var acu_calidadcantidadagua_modificacionpaisaje_fieldset =new Ext.form.FieldSet({
		width: 460,
		height:180,
		bodyStyle: 'padding:5px;',			
		title:'Modificaciones paisaje',
		layout:'column',
		defaults:{layout:'form',border:false},
		items:
		[
		{  
			//width:180,
			bodyStyle: 'padding-top:8px;',
			defaults:{labelStyle: 'width:150px;'+letra,width:80},
			items:[
					{xtype: 'label',html: 'Existe este tipo de <br/>construcci&oacute;n', cls:'x-form-check-group-label'},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Construcci&oacute;n de v&iacute;as',
						id:  'acu_cca_modificacion_paisaje_construccion_vias',
						name:'acu_cca_modificacion_paisaje_construccion_vias',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_modificacion_paisaje_construccion_vias',ayuda_acu_cca_modificacion_paisaje_construccion_vias);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_modificacion_paisaje_construccion_vias_tendencia').reset();
								}
								Ext.getCmp('acu_cca_modificacion_paisaje_construccion_vias_tendencia').setDisabled(!checked);
							}
						}
					},
					{
						xtype: 'checkbox', 
						fieldLabel: 'Construcci&oacute;n de vivienda',
						id:   'acu_cca_modificacion_paisaje_construccion_vivienda',
						name: 'acu_cca_modificacion_paisaje_construccion_vivienda',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_modificacion_paisaje_construccion_vivienda',ayuda_acu_cca_modificacion_paisaje_construccion_vivienda);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_modificacion_paisaje_construccion_vivienda_tendencia').reset();
								}
								Ext.getCmp('acu_cca_modificacion_paisaje_construccion_vivienda_tendencia').setDisabled(!checked);								
							}
						}
					},
					{	
						xtype: 'checkbox', 
						fieldLabel: 'Otro tipo de construcci&oacute;n',
						id:   'acu_cca_modificacion_paisaje_construccion_otro',
						name: 'acu_cca_modificacion_paisaje_construccion_otro',
						inputValue:1,
						listeners:
						{
							'render':function(){
								ayuda('acu_cca_modificacion_paisaje_construccion_otro',ayuda_acu_cca_modificacion_paisaje_construccion_otro);
							},
							'check':function(checkbox,checked){
								
								if(!checked){
								Ext.getCmp('acu_cca_modificacion_paisaje_construccion_otro_tendencia').reset();
								}
								Ext.getCmp('acu_cca_modificacion_paisaje_construccion_otro_tendencia').setDisabled(!checked);
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
					id: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia',
					columns:[ 73, 73, 73],					
					items: 
					[		
						{
							width: 73,
							items: [
								{ xtype: 'label', html: 'Incremento', cls:'x-form-check-group-label'},
								{ 	
									name: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia', 
									id: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia_incremento', 
									inputValue: 'incremento'
								}
								]
						},{
							width: 73,
							items: 
							[
								{ xtype: 'label', html: 'Estable', cls:'x-form-check-group-label'},
								{ 	
									name: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia',
									id: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia_estable',
									inputValue: 'estable',
								}
							]
						},{
							width: 73,
							items: 
							[
								{ xtype: 'label', html: 'Disminuci&oacute;n', cls:'x-form-check-group-label'},
								{ 
									name: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia', 
									id: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia_disminucion', 
									inputValue: 'disminucion'
								}
							]
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_modificacion_paisaje_construccion_vias_tendencia',ayuda_acu_cca_modificacion_paisaje_construccion_vias_tendencia);
						}
					}
				},
				{
					xtype: 'radiogroup',
					id: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia',
					items: [
						{ name: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia',
							id: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia_incremento',
							inputValue: 'incremento'
						},
						{ name: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia',
							id: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia_estable',
							inputValue: 'estable'
						},
						{ name: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia',
							id: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia_disminucion',
							inputValue: 'disminucion'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_modificacion_paisaje_construccion_vivienda_tendencia',ayuda_acu_cca_modificacion_paisaje_construccion_vivienda_tendencia);
						}
					}
				},
				{
					xtype: 'radiogroup',
					id: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia',
					items: [
						{ name: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia',
							id: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia_incremento',
							inputValue: 'incremento'
						},
						{ name: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia',
							id: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia_estable',
							inputValue: 'estable'
						},
						{ name: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia',
							id: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia_disminucion',
							inputValue: 'disminucion'
						}
					],
					listeners:
					{
						'render':function(){
							ayuda('acu_cca_modificacion_paisaje_construccion_otro_tendencia',ayuda_acu_cca_modificacion_paisaje_construccion_otro_tendencia);
						}
					}
				}
			]
		}
		]
	});

	var acu_calidadcantidadagua_descargaviviendas_fieldset =new Ext.form.FieldSet({
		xtype:'fieldset',
		//autoWidth: true,
		width: 430,
		height:180,
		bodyStyle: 'padding:5px;',			
		//columnWidth:'.5',
		title:'Descarga de viviendas',
		layout:'form',
		defaults:{border:false,labelStyle: 'width:270px;'+letra,columns: 2},
		items:
		[
			{
			   xtype: 'radiogroup',
			   fieldLabel: '<html>Viviendas con descargas directas de residuos l&iacute;quidos a la fuente?</html>',
			   labelSeparator: ':',
			    width:100,
			   id:'acu_cca_descarga_vivienda_liquido',
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'acu_cca_descarga_vivienda_liquido',id:'acu_cca_descarga_vivienda_liquido_si', 
					 checked: true, inputValue:1, width:50
				  },
				  { 
					boxLabel: 'No', name: 'acu_cca_descarga_vivienda_liquido',id:'acu_cca_descarga_vivienda_liquido_no',
					inputValue:0 , width:50
				  }
			   ],
			   listeners:
			   {
					'render': function() {
							ayuda('acu_cca_descarga_vivienda_liquido', ayuda_acu_cca_descarga_vivienda_liquido);
							}
			   }
			},
			{
			   xtype: 'radiogroup',
			   fieldLabel: '<html>Viviendas con descargas directas de residuos s&oacute;lidos a la fuente?</html>',
			   labelSeparator: ':',
			    width:100,
			   id:'acu_cca_descarga_vivienda_solido',
			   
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'acu_cca_descarga_vivienda_solido',id:'acu_cca_descarga_vivienda_solido_si', 
					 checked: true, inputValue:1, width:50
				  },
				  { 
					boxLabel: 'No', name: 'acu_cca_descarga_vivienda_solido',id:'acu_cca_descarga_vivienda_solido_no',
					inputValue:0 , width:50
				  }
			   ],
			   listeners:
			   {
					'render': function() {
							ayuda('acu_cca_descarga_vivienda_solido', ayuda_acu_cca_descarga_vivienda_solido);
							}
			   }
			},
			{
			   xtype: 'radiogroup',
			   fieldLabel: '<html>Se han desarrollado actividades que modifican el paisaje?</html>',
			   labelSeparator: ':',
			   id:'acu_cca_desarrolla_modificacion_paisaje',	
			   width:100,
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'acu_cca_desarrolla_modificacion_paisaje',id:'acu_cca_desarrolla_modificacion_paisaje_si', 
					 checked: true, inputValue:1, width:50
				  },
				  { 
					boxLabel: 'No', name: 'acu_cca_desarrolla_modificacion_paisaje',id:'acu_cca_desarrolla_modificacion_paisaje_no',
					inputValue:0 , width:50
				  }
			   ],
			   listeners:
			   {
					'render': function() {
							ayuda('acu_cca_desarrolla_modificacion_paisaje', ayuda_acu_cca_desarrolla_modificacion_paisaje);
							}
			   }
			}
		]
	});
	
	var acu_calidadcantidadagua_modificacionpaisaje_panel = new Ext.FormPanel({
		//frame: true,
		hidden: true,
		autoWidth: true,
		layout:'column',
		height:largo_panel-15,
		items:
		[
			acu_calidadcantidadagua_descargaviviendas_fieldset,
			{
				bodyStyle: 'padding-left:5px;padding-right:5px;',
			},
			acu_calidadcantidadagua_modificacionpaisaje_fieldset
		],
	//	renderTo: 'div_form_acu_calidadcantidadagua',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				acu_calidadcantidadagua_modificacionpaisaje_panel.hide();
				acu_calidadcantidadagua_controlmalezas_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				acu_calidadcantidadagua_modificacionpaisaje_subirdatos();
				
				acu_calidadcantidadagua_modificacionpaisaje_panel.hide();
				acu_calidadcantidadagua_descargaactividadproductiva_panel.show();
			}
		}]
	});
	
	
	function acu_calidadcantidadagua_modificacionpaisaje_subirdatos()
	{
		var url_calidadcantidadagua = 'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua';
		subirDatos(acu_calidadcantidadagua_modificacionpaisaje_panel,url_calidadcantidadagua,{formulario:'modificacionPaisaje'});	
		var url_calidadcantidadagua = '';
	}