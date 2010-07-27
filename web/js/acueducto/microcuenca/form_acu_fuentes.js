
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
        renderTo: 'div_form_acu_fuentes',
		//frame: true,
        title: 'Fuentes Superficiales',
        //width: 700,
		id:'v',
		autoWidth:true,
		clicksToEdit: 1,
        height: largo_panel-45,
        store: new Ext.data.ArrayStore({//poner esto en un datastore
            fields: acu_cantidadaguafuentesuperficiales_fields,
            data: acu_cantidadaguafuentesuperficiales_data
        }),
        columns: acu_cantidadaguafuentesuperficiales_columns,
        viewConfig: {
            forceFit: true
        },
		tbar:[{text:'Agregar otra fuente'}],
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
        renderTo: 'div_form_acu_fuentes',
		//frame: true,
		id:'acu_fuentessubterraneas_grid',
        title: 'Fuentes Subterraneas',
        //width: 700,
		autoWidth:true,
		clicksToEdit: 1,
        height: largo_panel-45,
        store: new Ext.data.ArrayStore({//poner esto en un datastore
            fields: acu_fuentessubterraneas_fields,
            data: acu_fuentessubterraneas_data
        }),
        columns: acu_fuentessubterraneas_columns,
        viewConfig: {
            forceFit: true
        },
		tbar:[{text:'Agregar otra fuente'}],
        plugins: acu_fuentessubterraneas_group
    });
