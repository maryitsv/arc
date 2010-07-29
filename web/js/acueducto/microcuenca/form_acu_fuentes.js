	/*
create table FUENTES
(
   FUE_ID               SERIAL NOT NULL,
   FUE_MIC_ID           INT NOT NULL,
   
   FUE_TIENE_FUENTES_SUPERFICIALES int2, --nuevo
   FUE_TIENE_FUENTES_SUBTERRANEAS int2, --nuevo
   FUE_COMPRA_AGUA_BLOQUE int2,
   
 -- cambiar este FUE_NUMERO_FUENTES  por el siguiente 
   FUE_NUMERO_FUENTES_SUPERFICIALES INT,
   FUE_NUMERO_FUENTES_SUBTERRANEAS INT,
   FUE_METODO_AFORO_VOLUMETRICO int2,
   FUE_METODO_AFORO_MICROMOLINETE int2,
   FUE_METODO_AFORO_VELOCIDAD int2,
   FUE_METODO_AFORO_OTRO_CUAL VARCHAR(100),
   FUE_CUMPLE_PERMISOS int2,
   PRIMARY KEY (FUE_ID)
);

	*/
	var acu_fuentes_abastecenelsistema_panel = new Ext.FormPanel({
	//	renderTo:'div_form_acu_fuentes',
		id:'acu_fuentes_abastecenelsistema_panel',
		frame: false,
		border:false,
		autoWidth: true,
		height: largo_panel-15,
		layout:'column',
		bodyStyle: 'padding:10px;',
		defaults:{  anchor:'98%'},
		items:
		[    
			{
				xtype:'fieldset',
				title:'Fuentes que abastecen el sistema',
				layout:'column',
				columnWidth:'.58',
				bodyStyle: 'padding:10px;',
				defaults:{layout:'form',border:false},
				items:
				[
					{
						width:220,
						defaults:{labelStyle: 'width:160px;'+letra},
						items:
						[	{xtype: 'label', html: '<html>Existencia de este tipo de fuente?</html>', cls:'x-form-check-group-label'},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_tiene_fuentes_superficiales',
								id:   'acu_fue_tiene_fuentes_superficiales',
								inputValue: 1,
								fieldLabel: '<html>Fuentes superficiales</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_tiene_fuentes_superficiales',ayuda_acu_fue_tiene_fuentes_superficiales);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_tiene_fuentes_subterraneas',
								id:   'acu_fue_tiene_fuentes_subterraneas',
								inputValue: 1,
								fieldLabel: '<html>Fuentes subterraneas</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_tiene_fuentes_subterraneas',ayuda_acu_fue_tiene_fuentes_subterraneas);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_compra_agua_bloque',
								id:   'acu_fue_compra_agua_bloque',
								inputValue: 1,
								fieldLabel: '<html>Compra agua en bloque</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_compra_agua_bloque',ayuda_acu_fue_compra_agua_bloque);
									}
								}
							}
						]
					},{
						width:110,
						defaults:{width:100,hideLabel:true},
						items:
						[	
							{xtype: 'label', text: 'Cantidad', cls:'x-form-check-group-label'},
							{
							   xtype: 'textfield',
							   name: 'acu_fue_numero_fuentes_superficiales',
							   id: 'acu_fue_numero_fuentes_superficiales',
							   listeners:
							   {
									'render': function() {
											ayuda('acu_fue_numero_fuentes_superficiales', ayuda_acu_fue_numero_fuentes_superficiales);
											}
								}
							},
							{
							   xtype: 'textfield',
							   name: 'acu_fue_numero_fuentes_subterraneas',
							   id: 'acu_fue_numero_fuentes_subterraneas',
							   listeners:
							   {
									'render': function() {
											ayuda('acu_fue_numero_fuentes_subterraneas', ayuda_acu_fue_numero_fuentes_subterraneas);
											}
								}
							}
						]
					}
				]
			},
			{
				columnWidth:'.02',
				bodyStyle: 'padding-left:10px;padding-right:10px;',
			},
			{
				xtype:'fieldset',
				title:'Metodo de aforo',
				layout:'column',
				columnWidth:'.4',
				defaults:{layout:'form',border:false},
				items:
				[
					{
					//	width:220,
						bodyStyle: 'padding:5px;',
						defaults:{labelStyle: 'width:100px;'+letra},
						items:
						[	
							{
								xtype: 'checkbox', 
								name: 'acu_fue_metodo_aforo_volumetrico',
								id:   'acu_fue_metodo_aforo_volumetrico',
								inputValue: 1,
								fieldLabel: '<html>Volumetrico</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_volumetrico',ayuda_acu_fue_metodo_aforo_volumetrico);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_metodo_aforo_micromolinete',
								id:   'acu_fue_metodo_aforo_micromolinete',
								inputValue: 1,
								fieldLabel: '<html>Micromolinete</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_micromolinete',ayuda_acu_fue_metodo_aforo_micromolinete);
									}
								}
							},
							{
								xtype: 'checkbox', 
								name: 'acu_fue_metodo_aforo_velocidad',
								id:   'acu_fue_metodo_aforo_velocidad',
								inputValue: 1,
								fieldLabel: '<html>Velocidad</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_velocidad',ayuda_acu_fue_metodo_aforo_velocidad);
									}
								}
							},
							{
								xtype: 'textfield', 
								name: 'acu_fue_metodo_aforo_otro_cual',
								id:   'acu_fue_metodo_aforo_otro_cual',
								fieldLabel: '<html>Otro</html>',
								listeners:
								{
									'render':function(){
										ayuda('acu_fue_metodo_aforo_otro_cual',ayuda_acu_fue_metodo_aforo_otro_cual);
									}
								}
							}
						]
					}
				]
			},
			{
				bodyStyle: 'padding-top:10px;',
				items:[
				{
					xtype:'fieldset',
					bodyStyle: 'padding-top:5px;',
					title:'Aspectos legales',
					border:false,
					layout:'form',
					columnWidth:'1',
					defaults:{layout:'form',border:false},
					items:
					[
						{
							xtipe:'label',
							labelStyle: 'width:150px;'+letra,
							html: '<html>Cumple con los permisos de acuerdo con el Art&iacute;culo 25 de la Ley 142 de 1994?</html>'
						},
						{
							xtype: 'radiogroup',
							id:'acu_fue_cumple_permisos',
							width:100,
							hideLabel:true,
							columns: 2,
							items:
							[
								{
								 boxLabel: 'Si', name: 'acu_fue_cumple_permisos',id:'acu_fue_cumple_permisos_si', 
								 checked: true, inputValue:1,
								},
								{ 
								boxLabel: 'No', name: 'acu_fue_cumple_permisos',id:'acu_fue_cumple_permisos_no',
								inputValue:0 
								}
							],
							listeners:
							{
							'render': function() {
									ayuda('acu_fue_cumple_permisos', ayuda_acu_fue_cumple_permisos);
									}
							}
						}
					]
				}]
			}
		],
		buttons:
		[
		  {
			 text: '<html>Atr&aacute;s</html>',
			 iconCls:'atras',
			 handler: function()
			 {
				acu_microcuenca_tabpanel.setActiveTab(0);
			 }
		  },
		  {
			 text: 'Continuar',
			 iconCls:'continuar',
			 handler: function()
			 {
				acu_fuentes_abastecenelsistema_panel.hide();
				acu_cantidadaguafuentesuperficiales_grid.show();
				
				/*acu_informaciongeneralmicrocuencas_cargardatostemporal();
				var accion=acu_informaciongeneralmicrocuencas_verfiricaraccion();
				
				if(accion=='crear' || accion=='actualizar')
				{
					acu_informaciongeneralmicrocuencas_subirdatos(accion);
				}
				
				 acu_microcuenca_tabpanel.setActiveTab(1);*/
			 }
		  }      
		]
	});

/****************************************Fuentes superficiales*****************/


    var acu_cantidadaguafuentesuperficiales_fields = [
	      {type: 'string', name: 'caf_nombre'},
          {type: 'string', name: 'caf_tipo_fuente'},
          {type: 'int', name: 'caf_epoca_lluvia_caudal_captado'},
          {type: 'int', name: 'caf_epoca_lluvia_caudal_total'},
	      {type: 'int', name: 'caf_epoca_seca_caudal_captado'},
          {type: 'int', name: 'caf_epoca_seca_caudal_total'},
		  {type: 'string', name: 'caf_entidad_expidio_concesion'},
          {type: 'string', name: 'caf_fecha_expedicion_concesion'},
	      {type: 'string', name: 'caf_fecha_vencimiento_concesion'},
          {type: 'string', name: 'caf_caudal_adjudicado_concesion'},
      ];
	  
    var acu_cantidadaguafuentesuperficiales_columns = [
			{dataIndex: 'caf_nombre', header: 'Nombre',
				 editor: new Ext.form.TextField({
                    allowBlank: false
                }),
				tooltip:'Nombre de la fuente'
			},
			{dataIndex: 'caf_tipo_fuente', header: 'Tipo',
				//editor: new Ext.form.ComboBox({
                  //  typeAhead: true,
                    //triggerAction: 'all'
                //}),
				tooltip:'Tipo de fuente superficial'
			},
			{dataIndex: 'caf_epoca_lluvia_caudal_captado', header: 'Caudal captado',
				editor: new Ext.form.NumberField({
                    allowBlank: false,
                    allowNegative: false,
                    maxValue: 100000
                })
			},
			{dataIndex: 'caf_epoca_lluvia_caudal_total', header: 'Caudal total',
				editor: new Ext.form.NumberField({
                    allowBlank: false,
                    allowNegative: false,
                    maxValue: 100000
                })
			},
			{dataIndex: 'caf_epoca_seca_caudal_captado', header: 'Caudal captado',
				editor: new Ext.form.NumberField({
                    allowBlank: false,
                    allowNegative: false,
                    maxValue: 100000
                })
			},
			{dataIndex: 'caf_epoca_seca_caudal_total', header: 'Caudal total',
				editor: new Ext.form.NumberField({
                    allowBlank: false,
                    allowNegative: false,
                    maxValue: 100000
                })
			},			
			{dataIndex: 'caf_entidad_expidio_concesion', header: 'Entidad expidio',
				//editor: new Ext.form.ComboBox({
                  //  typeAhead: true,
                    //triggerAction: 'all'
                //}),
				tooltip:'Entidad que expidio la concesion'
			},
			{dataIndex: 'caf_fecha_expedicion_concesion', header: 'Fecha expedicion',
				format:'d/m/Y',xtype: 'datecolumn',
				editor: {
					xtype: 'datefield',
                    allowBlank: false
                },
				tooltip:'Fecha de expidicion de la concesion de aguas'
			},
			{dataIndex: 'caf_fecha_vencimiento_concesion', header: 'Fecha vencimiento',
				format:'d/m/Y',xtype: 'datecolumn',
				editor: {
					xtype: 'datefield',
                    allowBlank: false
                },
				tooltip:'Fecha de vencimiento de la concesion'
			},
			{dataIndex: 'caf_caudal_adjudicado_concesion', header: 'Caudal adjudicado (l/s)',
				editor: new Ext.form.TextField({
                    allowBlank: false
                }),
				tooltip:'Caudal adjudicado en la concesion'
			}
      ];
    var acu_cantidadaguafuentesuperficiales_data = [['t1','r2','2','4','9','0']];
    var acu_cantidadaguafuentesuperficiales_nombreCampos = [
			{header: 'Datos de la Fuente', colspan:2 , align: 'center'},
			{header: 'Epoca de lluvia', colspan: 2, align: 'center'},
			{header: 'Epoca seca', colspan: 2, align: 'center'},
			{header: 'Aspectos legales', colspan: 4, align: 'center'},
     ];
    
    var acu_cantidadaguafuentesuperficiales_group = new Ext.ux.grid.ColumnHeaderGroup({
        rows: [ acu_cantidadaguafuentesuperficiales_nombreCampos]
    });
    
    var acu_cantidadaguafuentesuperficiales_grid = new Ext.grid.EditorGridPanel({
		frame: true,
		hidden:true,
        title: 'Fuentes Superficiales',
		id:'acu_cantidadaguafuentesuperficiales_grid',
		autoWidth:true,
		clicksToEdit: 1,
        height: largo_panel-15,
        store: new Ext.data.ArrayStore({//poner esto en un datastore
            fields: acu_cantidadaguafuentesuperficiales_fields,
            data: acu_cantidadaguafuentesuperficiales_data
        }),
        columns: acu_cantidadaguafuentesuperficiales_columns,
        viewConfig: {
            forceFit: true
        },
		tbar:[{text:'Agregar otra fuente'}],
		bbar:
		[	'->',
			{
				text: '<html>Atr&aacute;s<html>',
				iconCls:'atras',
				handler:function(){
				acu_fuentes_abastecenelsistema_panel.show();
				acu_cantidadaguafuentesuperficiales_grid.hide();
				
				}
			},
			{
				text: 'Continuar',
				iconCls:'continuar',
				handler:function(){
				
				acu_cantidadaguafuentesuperficiales_grid.hide();
				acu_fuentessubterraneas_grid.show();
					//acu_proteccionfuentessuperficialesagua_programas_subirdatos();
					//acu_proteccionfuentessuperficialesagua_programas_panel.hide();
					//acu_proteccionfuentessuperficialesagua_coberturaforestal_panel.show();
				}
			}
		],
        plugins: acu_cantidadaguafuentesuperficiales_group
    }); 
	
	
	/*Metodo de aforo*/
	/*lo que falta de aspectos legales*/
/*****************Fuentes subterraneas***************/


    var acu_fuentessubterraneas_fields = [
	      {type: 'string', name: 'fsu_nombre'},
          {type: 'int', name: 'fsu_promedio_captacion'},
		  {type: 'string', name: 'fsu_entidad_expidio_concesion'},
          {type: 'string', name: 'fsu_fecha_expedicion_concesion'},
	      {type: 'string', name: 'fsu_fecha_vencimiento_concesion'},
          {type: 'string', name: 'fsu_caudal_adjudicado_concesion'},
      ];
	  
    var acu_fuentessubterraneas_columns = [
			{dataIndex: 'fsu_nombre', header: 'Nombre',
				 editor: new Ext.form.TextField({
                    allowBlank: false
                }),
				tooltip:'Nombre de la fuente'
			},
			{dataIndex: 'fsu_promedio_captacion', header: 'Promedio caudal captado',
				editor: new Ext.form.TextField({
                    allowBlank: false
                })
			},			
			{dataIndex: 'fsu_entidad_expidio_concesion', header: 'Entidad expidio',
				//editor: new Ext.form.ComboBox({
                  //  typeAhead: true,
                    //triggerAction: 'all'
                //}),
				tooltip:'Entidad que expidio la concesion'
			},
			{dataIndex: 'fsu_fecha_expedicion_concesion', header: 'Fecha expedicion',
				format:'d/m/Y',xtype: 'datecolumn',
				editor: {
					xtype: 'datefield',
                    allowBlank: false
                },
				tooltip:'Fecha de expidicion de la concesion de aguas'
			},
			{dataIndex: 'fsu_fecha_vencimiento_concesion', header: 'Fecha vencimiento',
				format:'d/m/Y',xtype: 'datecolumn',
				editor: {
					xtype: 'datefield',
                    allowBlank: false
                },
				tooltip:'Fecha de vencimiento de la concesion'
			},
			{dataIndex: 'fsu_caudal_adjudicado_concesion', header: 'Caudal adjudicado (l/s)',
				editor: new Ext.form.TextField({
                    allowBlank: false
                }),
				tooltip:'Caudal adjudicado en la concesion'
			}
      ];
    var acu_fuentessubterraneas_data = [['manuelita','234','codechoco','04/09/09','05/10/10','250']];
    var acu_fuentessubterraneas_nombreCampos = [
			{header: 'Datos de la Fuente', colspan:2 , align: 'center'},
			{header: 'Aspectos legales', colspan: 4, align: 'center'},
     ];
    
    var acu_fuentessubterraneas_group = new Ext.ux.grid.ColumnHeaderGroup({
        rows: [ acu_fuentessubterraneas_nombreCampos]
    });
    
    var acu_fuentessubterraneas_grid = new Ext.grid.EditorGridPanel({
        //renderTo: 'div_form_acu_fuentes',
		frame: true,
		hidden:true,
		id:'acu_fuentessubterraneas_grid',
        title: 'Fuentes Subterraneas',
		autoWidth:true,
		clicksToEdit: 1,
        height: largo_panel-15,
        store: new Ext.data.ArrayStore({//poner esto en un datastore
            fields: acu_fuentessubterraneas_fields,
            data: acu_fuentessubterraneas_data
        }),
        columns: acu_fuentessubterraneas_columns,
        viewConfig: {
            forceFit: true
        },
		tbar:[{text:'Agregar otra fuente'}],
        plugins: acu_fuentessubterraneas_group,
		bbar:
		[	'->',
			{
				text: '<html>Atr&aacute;s<html>',
				iconCls:'atras',
				handler:function(){
				acu_fuentessubterraneas_grid.hide();
				acu_cantidadaguafuentesuperficiales_grid.show();
				}
			},
			{
				text: 'Continuar',
				iconCls:'continuar',
				handler:function(){
				acu_microcuenca_tabpanel.setActiveTab(2);
					//acu_proteccionfuentessuperficialesagua_programas_subirdatos();
				}
			}
		]
    });
	
	
	/*****************Contenedor de panels*********************/
	
   var acu_fuentes_contenedor=new Ext.Panel({
    height:largo_panel-15,
	border:false,
	layout:'fit',
    items:
	[	acu_fuentes_abastecenelsistema_panel,
		acu_cantidadaguafuentesuperficiales_grid,
		acu_fuentessubterraneas_grid
	],
	renderTo:'div_form_acu_fuentes'
   });

