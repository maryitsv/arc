/*
ARC
Desarrollado maryit sanchez
2010
*/

	var acu_fondosolidaridadredistribucioningresos_datos_datastore = new Ext.data.Store({
        id: 'acu_fondosolidaridadredistribucioningresos_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_fondosolidaridadredistribucioningresos/obtenerDatosFondosolidaridadredistribucioningresos', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_fsi_sol_tranferencia_recursos', type: 'int'},	    
                  {name: 'acu_fsi_recibo_recursos', type: 'int'},
				  {name: 'acu_fsi_recibo_recursos_valor_recib', type: 'string'},
				  {name: 'acu_fsi_aporte_recursos', type: 'int'},
				  {name: 'acu_fsi_aporte_recursos_valor_apor', type: 'string'},
				  {name: 'acu_vas_suscripcion_contrato', type: 'int'},
		])
    });
	
	var acu_fondosolidaridadredistribucioningresos_panel = new Ext.FormPanel({
	 // frame: true,
	  autoWidth: true,
	  height: largo_panel-15,
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
				id:'acu_fsi_sol_tranferencia_recursos',
				fieldLabel: '<html>&iquest;Ha solicitado, ante el municipio, la transferencia de recursos para la distribuci&oacute;n de subsidios?</html>',
				columns: 1,
				width:80,
				items:
				[
				  { boxLabel: 'Si', name: 'acu_fsi_sol_tranferencia_recursos',id:'acu_fsi_sol_tranferencia_recursos_si', checked: true, inputValue:1 },
				  { boxLabel: 'No', name: 'acu_fsi_sol_tranferencia_recursos',id:'acu_fsi_sol_tranferencia_recursos_no', inputValue:0 }
				],
				listeners:
				{
				  'render': function() {
							ayuda('acu_fsi_sol_tranferencia_recursos', ayuda_acu_fsi_sol_tranferencia_recursos);
							}
				}
		   },
		   {
				xtype: 'radiogroup',
				itemCls: 'x-check-group-alt',
				labelStyle: 'width:360px;',
				id:'acu_fsi_recibo_recursos',
				fieldLabel: '<html>&iquest;Recibi&oacute; recursos del municipio para subsidios durante el a&ntilde;o?</html>',
				columns: 1,
				width:80,
				items:
				[
				  {
					 boxLabel: 'Si', name: 'acu_fsi_recibo_recursos', id:'acu_fsi_recibo_recursos_si',checked: true, inputValue:1,
					 listeners:
					 {
						'check' :
						{
						   fn: function(radio, valor) 
						   {
							if (valor) {
								Ext.getCmp('acu_fsi_recibo_recursos_valor_recib').enable();
							}
							else {
								Ext.getCmp('acu_fsi_recibo_recursos_valor_recib').reset();
								Ext.getCmp('acu_fsi_recibo_recursos_valor_recib').disable();
							}						   }
						}                
					 }
				  },
				  {
					 boxLabel: 'No', name: 'acu_fsi_recibo_recursos', id:'acu_fsi_recibo_recursos_no',inputValue:0
				  }
				],
				listeners:
				{
				  'render': function() {
							ayuda('acu_fsi_recibo_recursos', ayuda_acu_fsi_recibo_recursos);
							}
				}				
		   },
		   {
			   xtype: 'textfield',
			   enableKeyEvents: true,
			   width: 100,
			   labelStyle: 'width:360px; text-align:right;',
			   emptyText: '0',
			   name: 'acu_fsi_recibo_recursos_valor_recib',
			   id: 'acu_fsi_recibo_recursos_valor_recib',
			   fieldLabel: 'Valor recibido ($)',
			   disabled : false,
			   listeners:
			   {   
			      'render': function() {
							ayuda('acu_fsi_recibo_recursos_valor_recib', ayuda_acu_fsi_recibo_recursos_valor_recib);
							},
				  'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
			   }              
		   },
		   {
				xtype:'label',
				html:'<br/>'
		   },
		   {
			   xtype: 'radiogroup',
			   labelStyle: 'width:360px;',
			   id:'acu_fsi_aporte_recursos',
			   fieldLabel: '<html>&iquest;Aport&oacute; recursos por contribuciones al Fondo de Solidaridad y Redistribuci&oacute;n de Ingresos (FSRI)?</html>',
			   columns: 1,
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'acu_fsi_aporte_recursos', id:'acu_fsi_aporte_recursos_si',checked: true, inputValue:1,
					 listeners:
					 {
						'check' :
						{
						   fn: function(radio, valor) 
						   {
							if (valor) {
								Ext.getCmp('acu_fsi_aporte_recursos_valor_apor').enable();
							}
							else {
								Ext.getCmp('acu_fsi_aporte_recursos_valor_apor').reset();
								Ext.getCmp('acu_fsi_aporte_recursos_valor_apor').disable();
							}

						   }
						}                
					 }
				  },
				  {
					 boxLabel: 'No', name: 'acu_fsi_aporte_recursos',id:'acu_fsi_aporte_recursos_no',inputValue:0
				  }
			   ],
			    listeners:
			   {   
			      'render': function() {
							ayuda('acu_fsi_aporte_recursos', ayuda_acu_fsi_aporte_recursos);
							}
			   }
		   },
		   {
			   xtype: 'textfield',
			   enableKeyEvents: true,
			   width: 100,
			   labelStyle: 'width:360px; text-align:right;',
			   emptyText: '0',
			   name: 'acu_fsi_aporte_recursos_valor_apor',
			   id: 'acu_fsi_aporte_recursos_valor_apor',
			   fieldLabel: 'Valor aportado ($)',
			   disabled : false,
			   listeners:
			   {
			      'render': function() {
							ayuda('acu_fsi_aporte_recursos_valor_apor', ayuda_acu_fsi_aporte_recursos_valor_apor);
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
			items :
			[
			   {
				   xtype: 'radiogroup',
				   itemCls: 'x-check-group-alt',
				   labelStyle: 'width:380px;',
				   id:'acu_vas_suscripcion_contrato',
				   fieldLabel: '<html>&iquest;Suscribe un contrato de condiciones uniformes con los usuarios?</html>',
				   columns: 1,
				   width:80,
				   items:
				   [
					  {
						 boxLabel: 'Si', name: 'acu_vas_suscripcion_contrato',id:'acu_vas_suscripcion_contrato_si', checked: true,inputValue:1
					  },
					  { boxLabel: 'No', name: 'acu_vas_suscripcion_contrato',id:'acu_vas_suscripcion_contrato_no' ,inputValue:0}
				   ],
				   listeners:
					{
					  'render': function() {
								ayuda('acu_vas_suscripcion_contrato', ayuda_acu_vas_suscripcion_contrato);
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
			  (Ext.getCmp('acu_comercial_tabpanel')).setActiveTab(1);
			 }
		  },
		  {
			 text: 'Continuar',
			 iconCls:'continuar',
			 handler: function()
			 {
				acu_fondosolidaridadredistribucioningresos_cargardatostemporal();
				var accion=acu_fondosolidaridadredistribucioningresos_verfiricaraccion();
				
				if(accion=='crear' || accion=='actualizar')
				{
					acu_fondosolidaridadredistribucioningresos_subirdatos(accion);
				}

			  (Ext.getCmp('acu_comercial_tabpanel')).setActiveTab(3);
			 }
		  }      
	   ],
	   renderTo:'div_form_acu_fondosolidaridadredistribucioningresos'
	});



	var acu_fsri_panel_datanuevo;
	var acu_fsri_panel_dataviejo=new Array();
/*
 acu_fsi_sol_tranferencia_recursos 
 acu_fsi_recibo_recursos 
 acu_fsi_recibo_recursos_valor_recib 
 acu_fsi_aporte_recursos 
 acu_fsi_aporte_recursos_valor_apor 
 acu_vas_suscripcion_contrato 

*/
	function acu_fondosolidaridadredistribucioningresos_cargardatostemporal(){
	
		if(acu_fsri_panel_datanuevo)
		{
			acu_fsri_panel_dataviejo=acu_fsri_panel_datanuevo;
		}
		acu_fsri_panel_datanuevo=new Array();
		acu_fsri_panel_datanuevo['acu_fsi_sol_tranferencia_recursos'] = Ext.getCmp('acu_fsi_sol_tranferencia_recursos').getValue().getGroupValue();
		
		acu_fsri_panel_datanuevo['acu_fsi_recibo_recursos'] =Ext.getCmp('acu_fsi_recibo_recursos').getValue().getGroupValue();
		acu_fsri_panel_datanuevo['acu_fsi_recibo_recursos_valor_recib'] = Ext.getCmp('acu_fsi_recibo_recursos_valor_recib').getValue();
		acu_fsri_panel_datanuevo['acu_fsi_aporte_recursos'] = Ext.getCmp('acu_fsi_aporte_recursos').getValue().getGroupValue();
		acu_fsri_panel_datanuevo['acu_fsi_aporte_recursos_valor_apor'] = Ext.getCmp('acu_fsi_aporte_recursos_valor_apor').getValue();
		acu_fsri_panel_datanuevo['acu_vas_suscripcion_contrato'] = Ext.getCmp('acu_vas_suscripcion_contrato').getValue().getGroupValue();
		
		
	}
	
	
	
	function acu_fondosolidaridadredistribucioningresos_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_fsri_panel_dataviejo) // si existe el viejo, compare
		{
			if(acu_fsri_panel_datanuevo['acu_fsi_sol_tranferencia_recursos'] != acu_fsri_panel_dataviejo['acu_fsi_sol_tranferencia_recursos'])
			{accion='actualizar';}
			
			if(acu_fsri_panel_datanuevo['acu_fsi_recibo_recursos'] != acu_fsri_panel_dataviejo['acu_fsi_recibo_recursos'])
			{accion='actualizar';}
			
			if(acu_fsri_panel_datanuevo['acu_fsi_recibo_recursos_valor_recib'] != acu_fsri_panel_dataviejo['acu_fsi_recibo_recursos_valor_recib'])
			{accion='actualizar';}
			
			if(acu_fsri_panel_datanuevo['acu_fsi_aporte_recursos'] != acu_fsri_panel_dataviejo['acu_fsi_aporte_recursos'])
			{accion='actualizar';}
			
			if(acu_fsri_panel_datanuevo['acu_fsi_aporte_recursos_valor_apor'] != acu_fsri_panel_dataviejo['acu_fsi_aporte_recursos_valor_apor'])
			{accion='actualizar';}
			
			if(acu_fsri_panel_datanuevo['acu_vas_suscripcion_contrato'] != acu_fsri_panel_dataviejo['acu_vas_suscripcion_contrato'])
			{accion='actualizar';}
			
		}
		else
		{
			accion='crear';
		}
			
		return accion;
	}
	
	function acu_fondosolidaridadredistribucioningresos_subirdatos(accion_realizar){
		
		subirDatos(
			acu_fondosolidaridadredistribucioningresos_panel,
			'acueducto_fondosolidaridadredistribucioningresos/actualizarFondosolidaridadredistribucioningresos',
			{},
			function(){}
		);
		
	}


acu_fondosolidaridadredistribucioningresos_datos_datastore.load({
  callback: function() {
	var record = acu_fondosolidaridadredistribucioningresos_datos_datastore.getAt(0);
	acu_fondosolidaridadredistribucioningresos_panel.getForm().loadRecord(record);	
  }
});

				