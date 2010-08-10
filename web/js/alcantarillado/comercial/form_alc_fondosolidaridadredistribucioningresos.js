/*
ARC
Desarrollado maryit sanchez
2010
*/


	var alc_fondosolidaridadredistribucioningresos_panel = new Ext.Panel({
	  frame: true,
	  autoWidth: true,
	  height: largo_panel-40,
	  layout:'form',
	  defaults:{ labelStyle: 'width:120px;'},   
	  items:
	  [
	   {
		 xtype:'fieldset',
		 defaults:{width:100},
		 title: '<html>Fondo de Solidaridad y Redistribuci&oacute;n de Ingresos (FSRI)</html>',
		 items:
		 [
		   {
				xtype: 'radiogroup',
				labelStyle: 'width:360px;',
				itemCls: 'x-check-group-alt',
				id:'alc_fsi_sol_tranferencia_recursos',
				fieldLabel: '<html>&iquest;Ha solicitado, ante el municipio, la transferencia de recursos para la distribuci&oacute;n de subsidios?</html>',
				columns: 1,
				items:
				[
				  { boxLabel: 'Si', name: 'alc_fsi_sol_tranferencia_recursos',id:'alc_fsi_sol_tranferencia_recursos_si', checked: true, inputValue:true },
				  { boxLabel: 'No', name: 'alc_fsi_sol_tranferencia_recursos',id:'alc_fsi_sol_tranferencia_recursos_no', inputValue:false }
				],
				listeners:
				{
				  'render': function() {
							ayuda('alc_fsi_sol_tranferencia_recursos', ayuda_alc_fsi_sol_tranferencia_recursos);
							}
				}
		   },
		   {
				xtype: 'radiogroup',
				itemCls: 'x-check-group-alt',
				labelStyle: 'width:360px;',
				id:'alc_fsi_recibo_recursos',
				fieldLabel: '<html>&iquest;Recibi&oacute; recursos del municipio para subsidios durante el a&ntilde;o?</html>',
				columns: 1,
				items:
				[
				  {
					 boxLabel: 'Si', name: 'alc_fsi_recibo_recursos', id:'alc_fsi_recibo_recursos_si',checked: true, inputValue:true,
					 listeners:
					 {
						'check' :
						{
						   fn: function(radio, valor) 
						   {
							  if (valor) Ext.getCmp('alc_fsi_recibo_recursos_valor_recib').enable();
							  else Ext.getCmp('alc_fsi_recibo_recursos_valor_recib').disable();
						   }
						}                
					 }
				  },
				  {
					 boxLabel: 'No', name: 'alc_fsi_recibo_recursos', id:'alc_fsi_recibo_recursos_no',inputValue:false
				  }
				],
				listeners:
				{
				  'render': function() {
							ayuda('alc_fsi_recibo_recursos', ayuda_alc_fsi_recibo_recursos);
							}
				}				
		   },
		   {
			   xtype: 'textfield',
			   enableKeyEvents: true,
			   width: 100,
			   labelStyle: 'width:360px; text-align:right;',
			   emptyText: '0',
			   name: 'alc_fsi_recibo_recursos_valor_recib',
			   id: 'alc_fsi_recibo_recursos_valor_recib',
			   fieldLabel: 'Valor recibido ($)',
			   disabled : false,
			   listeners:
			   {   
			      'render': function() {
							ayuda('alc_fsi_recibo_recursos_valor_recib', ayuda_alc_fsi_recibo_recursos_valor_recib);
							},
				  'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
			   }              
		   },
		   {
			   xtype: 'radiogroup',
			   labelStyle: 'width:360px;',
			   id:'alc_fsi_aporte_recursos',
			   fieldLabel: '<html>&iquest;Aport&oacute; recursos por contribuciones al Fondo de Solidaridad y Redistribuci&oacute;n de Ingresos (FSRI)?</html>',
			   columns: 1,
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'alc_fsi_aporte_recursos', id:'alc_fsi_aporte_recursos_si',checked: true, inputValue:true,
					 listeners:
					 {
						'check' :
						{
						   fn: function(radio, valor) 
						   {
					          if (valor) Ext.getCmp('alc_fsi_aporte_recursos_valor_apor').enable();
					          else Ext.getCmp('alc_fsi_aporte_recursos_valor_apor').disable();
						   }
						}                
					 }
				  },
				  {
					 boxLabel: 'No', name: 'alc_fsi_aporte_recursos',id:'alc_fsi_aporte_recursos_no',inputValue:false
				  }
			   ],
			    listeners:
			   {   
			      'render': function() {
							ayuda('alc_fsi_aporte_recursos', ayuda_alc_fsi_aporte_recursos);
							}
			   }
		   },
		   {
			   xtype: 'textfield',
			   enableKeyEvents: true,
			   width: 100,
			   labelStyle: 'width:360px; text-align:right;',
			   emptyText: '0',
			   name: 'alc_fsi_aporte_recursos_valor_apor',
			   id: 'alc_fsi_aporte_recursos_valor_apor',
			   fieldLabel: 'Valor aportado ($)',
			   disabled : false,
			   listeners:
			   {
			      'render': function() {
							ayuda('alc_fsi_aporte_recursos_valor_apor', ayuda_alc_fsi_aporte_recursos_valor_apor);
							},
				  'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
			   }               
		   }
		 ]
		},
		{
			xtype:'fieldset',
			title: '<html>Vinculaci&oacute;n al servicio</html>',
			autoWidth: true,
			autoHeigth:true,
		    defaults:{width:100},
			items :
			[
			   {
				   xtype: 'radiogroup',
				   itemCls: 'x-check-group-alt',
				   labelStyle: 'width:380px;',
				   id:'alc_vas_suscripcion_contrato',
				   fieldLabel: '<html>&iquest;Suscribe un contrato de condiciones uniformes con los usuarios?</html>',
				   columns: 1,
				   items:
				   [
					  {
						 boxLabel: 'Si', name: 'alc_vas_suscripcion_contrato',id:'alc_vas_suscripcion_contrato_si', checked: true
					  },
					  { boxLabel: 'No', name: 'alc_vas_suscripcion_contrato',id:'alc_vas_suscripcion_contrato_no' }
				   ],
				   listeners:
					{
					  'render': function() {
								ayuda('alc_vas_suscripcion_contrato', ayuda_alc_vas_suscripcion_contrato);
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
			    alc_comercial_tabpanel.setActiveTab(1);
			  //(Ext.getCmp('comercialTabPanel')).setActiveTab(1);
			 }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 {
				alc_comercial_tabpanel.setActiveTab(3);
			 // (Ext.getCmp('comercialTabPanel')).setActiveTab(3);
			 }
		  }      
	   ],
	   renderTo:'div_form_alc_fondosolidaridadredistribucioningresos'
	});

