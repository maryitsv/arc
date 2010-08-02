/*
ARC
Desarrollado maryit sanchez
2010
*/
	var acu_peticionesquejasrecursos_datos_datastore = new Ext.data.Store({
        id: 'acu_peticionesquejasrecursos_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_peticionesquejasrecursos/obtenerDatosPeticionesquejasrecursos', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_pqr_registro_pqr', type: 'int'},	    
                  {name: 'acu_pqr_inf_causa_suspension_corte', type: 'int'},
				  {name: 'acu_pqr_inf_causa_susp_corte_explic', type: 'string'},
				  {name: 'acu_pqr_cantidad_pqr_facturacion', type: 'int'},
				  {name: 'acu_pqr_cantidad_pqr_instalacion', type: 'int'},
				  {name: 'acu_pqr_cantidad_pqr_prest_servicio', type: 'int'},
				  {name: 'acu_pqr_cantidad_pqr_otro', type: 'int'},
				  {name: 'acu_pqr_cantidad_pqr_explica_otros', type: 'string'},
				  {name: 'acu_pqr_cantidad_anual_pqr', type: 'int'},
		])
    });

	function acu_pqr_calcularcantidadpqr(){
		Ext.getCmp('acu_pqr_cantidad_anual_pqr').setValue(
			Ext.getCmp('acu_pqr_cantidad_pqr_facturacion').getValue() +
			Ext.getCmp('acu_pqr_cantidad_pqr_instalacion').getValue() +
			Ext.getCmp('acu_pqr_cantidad_pqr_prest_servicio').getValue() +
			Ext.getCmp('acu_pqr_cantidad_pqr_otro').getValue()  
		);
		/*validar_formatear(Ext.getCmp('acu_pqr_cantidad_anual_pqr'));*/
	}

	var acu_peticionesquejasrecursos_panel = new Ext.FormPanel({
	  id:'acu_peticionesquejasrecursos_panel',
	  //frame: true,
	  autoWidth: true,
	  height: largo_panel-15,
	  layout:'column',
	  defaults:{ bodyStyle: 'padding:0 10px 0;'},
	  items:
	  [
	    {
			xtype:'fieldset',
			title:'Peticiones, Quejas y Recursos',
			columnWidth: '0.485',
			defaults:{labelStyle: 'width:300px;'+letra,},
			items:
			[
				{
					xtype: 'radiogroup',
					fieldLabel: '<html>&iquest;Lleva un registro de Peticiones, Quejas y Recursos (PQR)?</html>',
					labelSeparator: '',
					id:'acu_pqr_registro_pqr',
					width:100,
					columns: 1,
					items:
					[
					  {
						 boxLabel: 'Si', name: 'acu_pqr_registro_pqr',id:'acu_pqr_registro_pqr_si', 
						 checked: true, inputValue:1
					  },
					  { 
						boxLabel: 'No', name: 'acu_pqr_registro_pqr',id:'acu_pqr_registro_pqr_no',
						inputValue:0 
					  }
					],
					listeners:
					{
						'render': function() {
								ayuda('acu_pqr_registro_pqr', ayuda_acu_pqr_registro_pqr);
								}
					}
				},
				{
					xtype:'label',
					html:'<br/><br/>'
				},
				{
					xtype: 'radiogroup',
					fieldLabel: '<html>&iquest;Se informa al usuario sobre las causales de suspensi&oacute;n y corte del servicio?</html>',
					labelSeparator: '',
					id:'acu_pqr_inf_causa_suspension_corte',
					width:100,
					columns: 1,
					items:
					[
					  {
						 boxLabel: 'Si', name: 'acu_pqr_inf_causa_suspension_corte',id:'acu_pqr_inf_causa_suspension_corte_si', 
						 checked: true, inputValue:1,
						 listeners: 
						 {
						 	'check' :
							{
							   fn: function(radio, valor) 
							   {
								if (valor){
									Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').enable();
								}
								else {
									Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').reset();
									Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').disable();
								}
							   }
							}   
						 }
					  },
					  { 
						boxLabel: 'No', name: 'acu_pqr_inf_causa_suspension_corte',id:'acu_pqr_inf_causa_suspension_corte_no',
						inputValue:0 
					  }
					],
					listeners:
					{
						'render': function() {
								ayuda('acu_pqr_inf_causa_suspension_corte', ayuda_acu_pqr_inf_causa_suspension_corte);
								}
					}
				},
				{
					xtype: 'textfield',
					width: 200,
					labelStyle: 'width:200px; text-align:right;',
					name: 'acu_pqr_inf_causa_susp_corte_explic',
					id: 'acu_pqr_inf_causa_susp_corte_explic',
					fieldLabel: '<html>&iquest;C&oacute;mo?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_inf_causa_susp_corte_explic',ayuda_acu_pqr_inf_causa_susp_corte_explic);
						  }
					   }
					}               
				},
				{
					xtype:'label',
					html:'<br/><br/>'
				}
			]
		},
		{
			xtype:'panel',
			columnWidth: '0.01',
			bodyStyle: 'padding:5px 5px 5px;'
		},
		{
			xtype:'fieldset',
			columnWidth: '0.485',
			title: 'Cantidad detallada de PQR',
			defaults:{width: 100,labelStyle: 'width:190px;'},
			items:
			[
				{
					xtype: 'numberfield',
					width: 100,
					value:'0',
					name: 'acu_pqr_cantidad_anual_pqr',
					id: 'acu_pqr_cantidad_anual_pqr',
					fieldLabel: '<html>&iquest;En total cuantas PQR recibio durante el a&ntilde;o?</html>',
					disabled : true,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_anual_pqr',ayuda_acu_pqr_cantidad_anual_pqr);
						  }
					   } 
					}               
				},
				{
					xtype: 'numberfield',
					enableKeyEvents: true,
					emptyText:'0',
					name: 'acu_pqr_cantidad_pqr_facturacion',
					id: 'acu_pqr_cantidad_pqr_facturacion',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por facturaci&oacute;n?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_pqr_facturacion',ayuda_acu_pqr_cantidad_pqr_facturacion);
						  }
					   },
					  'keyup' : function(){ 
							  acu_pqr_calcularcantidadpqr(); 
					   } 
					}               
				},
				{
					xtype: 'numberfield',
					enableKeyEvents: true,
					emptyText:'0',
					name: 'acu_pqr_cantidad_pqr_instalacion',
					id: 'acu_pqr_cantidad_pqr_instalacion',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por instalaci&oacute;n?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_pqr_instalacion',ayuda_acu_pqr_cantidad_pqr_instalacion);
						  }
					   },
					  'keyup' : function(){ 
							  acu_pqr_calcularcantidadpqr(); 
					   } 
					}               
				},
				{
					xtype: 'numberfield',
					enableKeyEvents: true,
					emptyText:'0',
					name: 'acu_pqr_cantidad_pqr_prest_servicio',
					id: 'acu_pqr_cantidad_pqr_prest_servicio',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por prestaci&oacute;n de servicios?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_pqr_prest_servicio',ayuda_acu_pqr_cantidad_pqr_prest_servicio);
						  }
					   },
					  'keyup' : function(){ 
							  acu_pqr_calcularcantidadpqr(); 
					   } 
					}               
				},
				{
					xtype: 'numberfield',
					enableKeyEvents: true,
					emptyText:'0',
					name: 'acu_pqr_cantidad_pqr_otro',
					id: 'acu_pqr_cantidad_pqr_otro',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por otra causa?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_pqr_otro',ayuda_acu_pqr_cantidad_pqr_otro);
						  }
					   },
					  'keyup' : function(){ 
							  acu_pqr_calcularcantidadpqr(); 

					   } 
					}               
				},//En total cuantas PQR recibio durante el a&ntilde;o
				{
					xtype: 'textfield',
					width: 200,
					labelStyle: 'width:130px;',
					name: 'acu_pqr_cantidad_pqr_explica_otros',
					id: 'acu_pqr_cantidad_pqr_explica_otros',
					fieldLabel: '<html>&iquest;Cu&aacute;l otra causa?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_pqr_explica_otros',ayuda_acu_pqr_cantidad_pqr_explica_otros);
						  }
					   }
					}               
				}
			]
		}
	   ],
	   buttons:
	   [
		  {
			 text: '<html>Atr&aacute;s</html>',
			 iconCls:'atras',
			 handler: function()
			 {
				acu_comercial_tabpanel.setActiveTab(2);
             }
		  },
		  {
			 text: 'Continuar',
			 iconCls:'continuar',
			 handler: function()
			 { 
				acu_peticionesquejasrecursos_cargardatostemporal();
				var accion=acu_peticionesquejasrecursos_verfiricaraccion();
				
				if(accion=='crear' || accion=='actualizar')
				{
					acu_peticionesquejasrecursos_subirdatos(accion);
				}

				 
				 Ext.getCmp('acueducto').setActiveTab(3);
			 }
		  }      
	   ],
	   renderTo:'div_form_acu_peticionesquejasrecursos'
	});



	var acu_peticionesquejasrecursos_panel_datanuevo;
	var acu_peticionesquejasrecursos_panel_dataviejo=new Array();

	function acu_peticionesquejasrecursos_cargardatostemporal(){
	
		if(acu_peticionesquejasrecursos_panel_datanuevo)
		{
			acu_peticionesquejasrecursos_panel_dataviejo=acu_peticionesquejasrecursos_panel_datanuevo;
		}
		acu_peticionesquejasrecursos_panel_datanuevo=new Array();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_registro_pqr'] = Ext.getCmp('acu_pqr_registro_pqr').getValue().getGroupValue();
		
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_inf_causa_suspension_corte'] =Ext.getCmp('acu_pqr_inf_causa_suspension_corte').getValue().getGroupValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_inf_causa_susp_corte_explic'] = Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').getValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_facturacion'] = Ext.getCmp('acu_pqr_cantidad_pqr_facturacion').getValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_instalacion'] = Ext.getCmp('acu_pqr_cantidad_pqr_instalacion').getValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_prest_servicio'] = Ext.getCmp('acu_pqr_cantidad_pqr_prest_servicio').getValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_otro'] = Ext.getCmp('acu_pqr_cantidad_pqr_otro').getValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_explica_otros'] = Ext.getCmp('acu_pqr_cantidad_pqr_explica_otros').getValue();
		acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_anual_pqr'] = Ext.getCmp('acu_pqr_cantidad_anual_pqr').getValue();
		
	}
	
	
	
	function acu_peticionesquejasrecursos_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_peticionesquejasrecursos_panel_dataviejo) // si existe el viejo, compare
		{
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_registro_pqr'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_registro_pqr'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_inf_causa_suspension_corte'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_inf_causa_suspension_corte'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_inf_causa_susp_corte_explic'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_inf_causa_susp_corte_explic'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_facturacion'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_facturacion'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_instalacion'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_instalacion'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_prest_servicio'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_prest_servicio'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_otro'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_otro'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_explica_otros'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_explica_otros'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasrecursos_panel_datanuevo['acu_pqr_cantidad_anual_pqr'] != acu_peticionesquejasrecursos_panel_dataviejo['acu_pqr_cantidad_anual_pqr'])
			{accion='actualizar';}
			
		}
		else
		{
			accion='crear';
		}
			
		return accion;
	}
	
	function acu_peticionesquejasrecursos_subirdatos(accion_realizar){
		var url_acu_pqr='acueducto_peticionesquejasrecursos/actualizarPeticionesquejasrecursos';
		subirDatos(acu_peticionesquejasrecursos_panel,url_acu_pqr,{acu_pqr_cantidad_anual_pqr:Ext.getCmp('acu_pqr_cantidad_anual_pqr').getValue()});
		url_acu_pqr='';
	}
	
acu_peticionesquejasrecursos_datos_datastore.load({
  callback: function() {
	var record = acu_peticionesquejasrecursos_datos_datastore.getAt(0);
	acu_peticionesquejasrecursos_panel.getForm().loadRecord(record);	
  }
});