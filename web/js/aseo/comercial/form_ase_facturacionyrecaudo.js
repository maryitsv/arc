/*
ARC
Desarrollado maryit sanchez
2010
*/

	var ase_facturacionyrecaudo_panel = new Ext.FormPanel({
	  id:'ase_facturacionyrecaudo_panel',
	  frame: true,
	  autoWidth: true,
	  height: largo_panel-40,
	 // title: '<html>Facturaci&oacute;n y recaudo</html>',
	  layout:'column',
	  defaults:{ bodyStyle: 'padding:0 10px 0;'},
	  items:
	  [
	  {
			layout:'form',
			width:'300px',
			columnWidth:'1',
			items:
			[
			   {
				   xtype: 'radiogroup',
				   labelStyle: 'width:150px;'+letra,
				   fieldLabel: '<html>&iquest;Factura el servicio?</html>',
				   labelSeparator: '',
				   id:'ase_fac_frecuencia_del_servicio',
				   width:100,
				   columns: 2,
				   items:
				   [
					  {
						 boxLabel: 'Si', name: 'ase_fac_frecuencia_del_servicio',id:'ase_fac_frecuencia_del_servicio_si', 
						 checked: true, inputValue:true,
					  },
					  { 
						boxLabel: 'No', name: 'ase_fac_frecuencia_del_servicio',id:'ase_fac_frecuencia_del_servicio_no',
						inputValue:false 
					  }
				   ],
				   listeners:
				   {
						'render': function() {
								ayuda('ase_fac_frecuencia_del_servicio', ayuda_ase_fac_frecuencia_del_servicio);
								}
				   }
			   }
			]
		}, 
	   {   
		   xtype:'fieldset',
		   title: '<html>Facturaci&oacute;n</html>',
		   columnWidth:'.485',
		   items:[
		   {
			   xtype: 'radiogroup',
			   labelStyle: 'width:200px;'+letra,
			   width:100,
			   id:'ase_fac_frecuenc_facturacion',
			   fieldLabel: '<html>Frecuencia de facturaci&oacute;n</html>',
			   columns: 1,
			   items:
			   [
				  { boxLabel: 'Mensual', name: 'ase_fac_frecuenc_facturacion',id: 'ase_fac_frecuenc_facturacion_mensual',inputValue:'Mensual'},
				  { boxLabel: 'Bimensual', name: 'ase_fac_frecuenc_facturacion',id: 'ase_fac_frecuenc_facturacion_bimensual',inputValue:'Bimensual' },
				  { boxLabel: 'Anual', name: 'ase_fac_frecuenc_facturacion',id: 'ase_fac_frecuenc_facturacion_anual',inputValue: 'Anual'},
				  { 
				     boxLabel: 'Otra', name: 'ase_fac_frecuenc_facturacion',id: 'ase_fac_frecuenc_facturacion_otra',inputValue: 'Otra',
				     listeners:
					 {
	 					'check' :
						{
						   fn: function(radio, valor) 
						   { 
							  if (valor) Ext.getCmp('ase_fac_frecuenc_fac_justificacion').enable();
							  else Ext.getCmp('ase_fac_frecuenc_fac_justificacion').disable();
						   }
						}   
					 } 
				  }
			   ],
			   listeners:
			   {
					'render': function() {
							ayuda('ase_fac_frecuenc_facturacion', ayuda_ase_fac_frecuenc_facturacion);
							}
				}
		   },          
		   {
			   xtype: 'textfield',
			   width: 200,
			   labelStyle: 'width:100px; text-align:right;'+letra,
			   name: 'ase_fac_frecuenc_fac_justificacion',
			   id: 'ase_fac_frecuenc_fac_justificacion',
			   fieldLabel: '<html>&iquest;Cu&aacute;l?</html>',
			   disabled : true,
			   listeners:
			   {
					'render': function() {
							ayuda('ase_fac_frecuenc_fac_justificacion', ayuda_ase_fac_frecuenc_fac_justificacion);
							}
				}
		   },
		   {
			   xtype: 'textfield',
			   enableKeyEvents: true,
			   width: 100,
			   labelStyle: 'width:200px;'+letra,
			   emptyText: '0',
			   name: 'ase_fac_num_fac_exp_ultimo_periodo',
			   id: 'ase_fac_num_fac_exp_ultimo_periodo',
			   fieldLabel: '<html>N&uacute;mero de facturas expedidas en el &uacute;ltimo periodo de facturaci&oacute;n</html>',
			   disabled : false,
			   listeners:
			   {
				  'render': function() {
							ayuda('ase_fac_num_fac_exp_ultimo_periodo', ayuda_ase_fac_num_fac_exp_ultimo_periodo);
							},
				  'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
			   }                
		   }                                 
		   ]
		},
		{
		   xtype:'panel',
		   columnWidth:'.01',
		   bodyStyle: 'padding:5px 5px 5px;'
		},
		{
		   columnWidth:'.505',
			xtype:'fieldset',
			id: 'ase_facturacion_recaudo_fielset',
			title: '</html>Facturaci&oacute;n y recaudo</html>',
			items :
			[
			   {
				   xtype: 'radiogroup',
				   labelStyle: 'width:200px;'+letra,
				   width:100,
				   id:'ase_fac_sist_fac_utilizado',
				   fieldLabel: '<html>&iquest;Qu&eacute; sistema de facturaci&oacute;n del servicio utiliza?</html>',
				   columns: 1,
				   items:
				   [
					  { boxLabel: 'Sistemaztizado', name: 'ase_fac_sist_fac_utilizado', id:'ase_fac_sist_fac_utilizado_sistematizado', checked: true,inputValue:'Sistemaztizado'},
					  { boxLabel: 'Manual', name: 'ase_fac_sist_fac_utilizado', id:'ase_fac_sist_fac_utilizado_manual',inputValue:'Manual' },
					  { 
					     boxLabel: 'Otro', name: 'ase_fac_sist_fac_utilizado',id:'ase_fac_sist_fac_utilizado_otro',inputValue:'Otro',
					     listeners: 
						 {
						 	'check' :
							{
							   fn: function(radio, valor) 
							   {
							      if (valor) Ext.getCmp('ase_fac_frecuencia_fac_justifica').enable();
								  else Ext.getCmp('ase_fac_frecuencia_fac_justifica').disable();
							   }
							}   
						 }
					  }
				   ],
					listeners:
					{
					  'render': function() {
								ayuda('ase_fac_sist_fac_utilizado', ayuda_ase_fac_sist_fac_utilizado);
								}
					}				   
			   },
			   {
				   xtype: 'textfield',
				   width: 200,
				   labelStyle: 'width:100px; text-align:right;'+letra,
				   name: 'ase_fac_frecuencia_fac_justifica',
				   id: 'ase_fac_frecuencia_fac_justifica',
				   fieldLabel: '<html>&iquest;Cu&aacute;l?</html>',
				   disabled : true,
				   listeners:
					{
					  'render': function() {
								ayuda('ase_fac_frecuencia_fac_justifica', ayuda_ase_fac_frecuencia_fac_justifica);
								}
					}
			   },
			   {
				   xtype: 'textfield',
				   enableKeyEvents: true,
				   width: 100,
				   labelStyle: 'width:200px;'+letra,
				   emptyText: '0',
				   name: 'ase_fac_morosidad_promedio',
				   id: 'ase_fac_morosidad_promedio',
				   fieldLabel: '<html>Morosidad promedio de los &uacute;ltimos 3 periodos de pago (%)</html>',
				   listeners:
				   {
				      'render': function() {
								ayuda('ase_fac_morosidad_promedio', ayuda_ase_fac_morosidad_promedio);
								},
					  'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
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
				ase_comercial_tabpanel.setActiveTab(0);
              //  (Ext.getCmp('comercialTabPanel')).setActiveTab(0);
			 }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 {
				ase_comercial_tabpanel.setActiveTab(2);
				// (Ext.getCmp('comercialTabPanel')).setActiveTab(2);
			 }
		  }      
	   ],
	   renderTo:'div_form_ase_facturacionyrecaudo'
	});

