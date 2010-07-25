/*
ARC
Desarrollado maryit sanchez
2010
*/

	var acu_peticionesquejasrecursos_panel = new Ext.FormPanel({
	  id:'acu_peticionesquejasrecursos_panel',
	  frame: true,
	  autoWidth: true,
	  height: largo_panel-40,
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
						 checked: true, inputValue:true,
					  },
					  { 
						boxLabel: 'No', name: 'acu_pqr_registro_pqr',id:'acu_pqr_registro_pqr_no',
						inputValue:false 
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
						 checked: true, inputValue:true,
						 listeners: 
						 {
						 	'check' :
							{
							   fn: function(radio, valor) 
							   {
							      if (valor) Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').enable();
								  else Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').disable();
							   }
							}   
						 }
					  },
					  { 
						boxLabel: 'No', name: 'acu_pqr_inf_causa_suspension_corte',id:'acu_pqr_inf_causa_suspension_corte_no',
						inputValue:false 
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
					xtype: 'numberfield',
					width: 100,
					name: 'acu_pqr_cantidad_anual_pqr',
					id: 'acu_pqr_cantidad_anual_pqr',
					fieldLabel: '<html>&iquest;En total cuantas PQR recibio durante el a&ntilde;o?</html>',
					disabled : false,
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
					   }
					}               
				},
				{
					xtype: 'numberfield',
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
					   }
					}               
				},
				{
					xtype: 'numberfield',
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
					   }
					}               
				},
				{
					xtype: 'numberfield',
					name: 'acu_pqr_cantidad_pqr_otro',
					id: 'acu_pqr_cantidad_pqr_otro',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por facturaci&oacute;n?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('acu_pqr_cantidad_pqr_otro',ayuda_acu_pqr_cantidad_pqr_otro);
						  }
					   }
					}               
				},//En total cuantas PQR recibio durante el a&ntilde;o
				{
					xtype: 'textfield',
					width: 200,
					labelStyle: 'width:150px;',
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
			 handler: function()
			 {
				acu_comercial_tabpanel.setActiveTab(2);
             }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 { 
				acu_peticionesquejasyrecursos_cargardatostemporal();
				var accion=acu_peticionesquejasyrecursos_verfiricaraccion();
				
				if(accion=='crear' || accion=='actualizar')
				{
					acu_peticionesquejasyrecursos_subirdatos(accion);
				}

				 (Ext.getCmp('panel_servicios')).setActiveGroup(2);
			 }
		  }      
	   ],
	   renderTo:'div_form_acu_peticionesquejasrecursos'
	});



	var acu_peticionesquejasyrecursos_panel_datanuevo;
	var acu_peticionesquejasyrecursos_panel_dataviejo=new Array();
/*
acu_pqr_registro_pqr
acu_pqr_inf_causa_suspension_corte
acu_pqr_inf_causa_susp_corte_explic
acu_pqr_cantidad_pqr_facturacion
acu_pqr_cantidad_pqr_instalacion
acu_pqr_cantidad_pqr_prest_servicio
acu_pqr_cantidad_pqr_otro
acu_pqr_cantidad_pqr_explica_otros
acu_pqr_cantidad_anual_pqr
*/
	function acu_peticionesquejasyrecursos_cargardatostemporal(){
	
		if(acu_peticionesquejasyrecursos_panel_datanuevo)
		{
			acu_peticionesquejasyrecursos_panel_dataviejo=acu_peticionesquejasyrecursos_panel_datanuevo;
		}
		acu_peticionesquejasyrecursos_panel_datanuevo=new Array();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_registro_pqr'] = Ext.getCmp('acu_pqr_registro_pqr').getValue().getGroupValue();
		
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_inf_causa_suspension_corte'] =Ext.getCmp('acu_pqr_inf_causa_suspension_corte').getValue().getGroupValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_inf_causa_susp_corte_explic'] = Ext.getCmp('acu_pqr_inf_causa_susp_corte_explic').getValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_facturacion'] = Ext.getCmp('acu_pqr_cantidad_pqr_facturacion').getValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_instalacion'] = Ext.getCmp('acu_pqr_cantidad_pqr_instalacion').getValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_prest_servicio'] = Ext.getCmp('acu_pqr_cantidad_pqr_prest_servicio').getValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_otro'] = Ext.getCmp('acu_pqr_cantidad_pqr_otro').getValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_explica_otros'] = Ext.getCmp('acu_pqr_cantidad_pqr_explica_otros').getValue();
		acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_anual_pqr'] = Ext.getCmp('acu_pqr_cantidad_anual_pqr').getValue();
		
	}
	
	
	
	function acu_peticionesquejasyrecursos_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_peticionesquejasyrecursos_panel_dataviejo) // si existe el viejo, compare
		{
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_registro_pqr'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_registro_pqr'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_inf_causa_suspension_corte'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_inf_causa_suspension_corte'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_inf_causa_susp_corte_explic'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_inf_causa_susp_corte_explic'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_facturacion'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_facturacion'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_instalacion'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_instalacion'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_prest_servicio'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_prest_servicio'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_otro'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_otro'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_pqr_explica_otros'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_cantidad_pqr_explica_otros'])
			{accion='actualizar';}
			
			if(acu_peticionesquejasyrecursos_panel_datanuevo['acu_pqr_cantidad_anual_pqr'] != acu_peticionesquejasyrecursos_panel_dataviejo['acu_pqr_cantidad_anual_pqr'])
			{accion='actualizar';}
			
		}
		else
		{
			accion='crear';
		}
			
		return accion;
	}
	
	function acu_peticionesquejasyrecursos_subirdatos(accion_realizar){
	
		acu_peticionesquejasrecursos_panel.getForm().submit({
			method: 'POST',
			url:'acueducto_peticionesquejasrecursos/actualizarPeticionesquejasrecursos',
			params: {
				servicio:'acueducto'
			},
			waitTitle: 'Enviando',
			waitMsg: 'Enviando datos...',
			success: function(response, action)
			{
				obj = Ext.util.JSON.decode(action.response.responseText);
			    mostrarMensajeRapido('Aviso',obj.mensaje);

			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText); 
					mostrarMensajeConfirmacion('Error',obj.errors.reason);
				}
			}
		});

	}
