/*
ARC
Desarrollado maryit sanchez
2010
*/

	var ase_peticionesquejasrecursos_panel = new Ext.FormPanel({
	  id:'ase_peticionesquejasrecursos_panel',
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
					id:'ase_pqr_registro_pqr',
					width:100,
					columns: 1,
					items:
					[
					  {
						 boxLabel: 'Si', name: 'ase_pqr_registro_pqr',id:'ase_pqr_registro_pqr_si', 
						 checked: true, inputValue:true,
					  },
					  { 
						boxLabel: 'No', name: 'ase_pqr_registro_pqr',id:'ase_pqr_registro_pqr_no',
						inputValue:false 
					  }
					],
					listeners:
					{
						'render': function() {
								ayuda('ase_pqr_registro_pqr', ayuda_ase_pqr_registro_pqr);
								}
					}
				}, 
				{
					xtype: 'radiogroup',
					fieldLabel: '<html>&iquest;Se informa al usuario sobre las causales de suspensi&oacute;n y corte del servicio?</html>',
					labelSeparator: '',
					id:'ase_pqr_inf_causa_suspension_corte',
					width:100,
					columns: 1,
					items:
					[
					  {
						 boxLabel: 'Si', name: 'ase_pqr_inf_causa_suspension_corte',id:'ase_pqr_inf_causa_suspension_corte_si', 
						 checked: true, inputValue:true,
						 listeners: 
						 {
						 	'check' :
							{
							   fn: function(radio, valor) 
							   {
							      if (valor) Ext.getCmp('ase_pqr_inf_causa_susp_corte_explic').enable();
								  else Ext.getCmp('ase_pqr_inf_causa_susp_corte_explic').disable();
							   }
							}   
						 }
					  },
					  { 
						boxLabel: 'No', name: 'ase_pqr_inf_causa_suspension_corte',id:'ase_pqr_inf_causa_suspension_corte_no',
						inputValue:false 
					  }
					],
					listeners:
					{
						'render': function() {
								ayuda('ase_pqr_inf_causa_suspension_corte', ayuda_ase_pqr_inf_causa_suspension_corte);
								}
					}
				},
				{
					xtype: 'textfield',
					width: 200,
					labelStyle: 'width:200px; text-align:right;',
					name: 'ase_pqr_inf_causa_susp_corte_explic',
					id: 'ase_pqr_inf_causa_susp_corte_explic',
					fieldLabel: '<html>&iquest;C&oacute;mo?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_inf_causa_susp_corte_explic',ayuda_ase_pqr_inf_causa_susp_corte_explic);
						  }
					   }
					}               
				},
				{
					xtype: 'numberfield',
					width: 100,
					name: 'ase_pqr_cantidad_anual_pqr',
					id: 'ase_pqr_cantidad_anual_pqr',
					fieldLabel: '<html>&iquest;En total cuantas PQR recibio durante el a&ntilde;o?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_cantidad_anual_pqr',ayuda_ase_pqr_cantidad_anual_pqr);
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
					name: 'ase_pqr_cantidad_pqr_facturacion',
					id: 'ase_pqr_cantidad_pqr_facturacion',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por facturaci&oacute;n?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_cantidad_pqr_facturacion',ayuda_ase_pqr_cantidad_pqr_facturacion);
						  }
					   }
					}               
				},
				{
					xtype: 'numberfield',
					name: 'ase_pqr_cantidad_pqr_instalacion',
					id: 'ase_pqr_cantidad_pqr_instalacion',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por instalaci&oacute;n?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_cantidad_pqr_instalacion',ayuda_ase_pqr_cantidad_pqr_instalacion);
						  }
					   }
					}               
				},
				{
					xtype: 'numberfield',
					name: 'ase_pqr_cantidad_pqr_prest_servicio',
					id: 'ase_pqr_cantidad_pqr_prest_servicio',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por prestaci&oacute;n de servicios?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_cantidad_pqr_prest_servicio',ayuda_ase_pqr_cantidad_pqr_prest_servicio);
						  }
					   }
					}               
				},
				{
					xtype: 'numberfield',
					name: 'ase_pqr_cantidad_pqr_otro',
					id: 'ase_pqr_cantidad_pqr_otro',
					fieldLabel: '<html>&iquest;Cantidad de PQR recibidas por facturaci&oacute;n?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_cantidad_pqr_otro',ayuda_ase_pqr_cantidad_pqr_otro);
						  }
					   }
					}               
				},//En total cuantas PQR recibio durante el a&ntilde;o
				{
					xtype: 'textfield',
					width: 200,
					labelStyle: 'width:150px;',
					name: 'ase_pqr_cantidad_pqr_explica_otros',
					id: 'ase_pqr_cantidad_pqr_explica_otros',
					fieldLabel: '<html>&iquest;Cu&aacute;l otra causa?</html>',
					disabled : false,
					listeners:
					{
					  'render' :
					  {
						  fn: function()
						  {
							ayuda('ase_pqr_cantidad_pqr_explica_otros',ayuda_ase_pqr_cantidad_pqr_explica_otros);
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
			 disabled: false,
			 handler: function()
			 {
				ase_comercial_tabpanel.setActiveTab(2);
              //  (Ext.getCmp('comercialTabPanel')).setActiveTab(0);
			 }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 {
				//ase_comercial_tabpanel.setActiveTab(2);
				// (Ext.getCmp('comercialTabPanel')).setActiveTab(2);
			 }
		  }      
	   ],
	   renderTo:'div_form_ase_peticionesquejasrecursos'
	});

