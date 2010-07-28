/*
ARC
desarrollado por maryit sanchez
2010
*/


var acu_analisiscobertura_datos_datastore = new Ext.data.Store({
        id: 'acu_analisiscobertura_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_analisiscobertura/obtenerDatosAnalisiscobertura', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_aco_catastro_usuarios', type: 'int'},	    
                  {name: 'acu_aco_anio_ela_impl_catastro_usu', type: 'string'},
				  {name: 'acu_aco_num_predios_conec_sistema', type: 'string'},
				  {name: 'acu_aco_estrat_soceco_adop_mpio', type: 'int'},
				  {name: 'acu_aco_estra_soceco_adop_mpio_jus', type: 'string'},
				  {name: 'acu_aco_num_predios_area', type: 'string'},
		])
    });
	

	var acu_analisiscobertura_formpanel = new Ext.FormPanel({
		id: 'acu_analisiscobertura_formpanel',
		frame: true,
		hidden: false,
		autoWidth:true,
		height: largo_panel-40,
		layout:'form',
		items:
		[
			{
			   xtype: 'radiogroup',
			   labelStyle: 'width: 370px; '+letra,
			   itemCls: 'x-check-group-alt',
			   labelSeparator: '',		  
			   fieldLabel: '<html>&iquest;Se ha elaborado e implementado un catastro de usuarios?</html>',
			   id: 'acu_aco_catastro_usuarios',
			   columns: 1,
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'acu_aco_catastro_usuarios', id:'acu_aco_catastro_usuarios_si',
					 inputValue: 1, checked: true
				  },
				  { 
					boxLabel: 'No', name: 'acu_aco_catastro_usuarios', id:'acu_aco_catastro_usuarios_no',
					inputValue: 0 
				  }
			   ],
			   listeners:{
			   'render': function() {
							ayuda('acu_aco_catastro_usuarios', ayuda_acu_aco_catastro_usuarios);
						}
			   }
			},
			{  
			   xtype:'textfield', 
			   labelStyle: 'width: 370px; text-align:right;'+letra,
			   fieldLabel: '<html>En que a&ntilde;o lo implemento?</html>',
			   name:'acu_aco_anio_ela_impl_catastro_usu',
			   id:'acu_aco_anio_ela_impl_catastro_usu',
			   listeners:{
			   'render': function() {
							ayuda('acu_aco_anio_ela_impl_catastro_usu', ayuda_acu_aco_anio_ela_impl_catastro_usu);
						}
			   }
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;'+letra,
			   fieldLabel: '<html>N&uacute;mero de predios en el &aacute;rea de prestaci&oacute;n del servicio p&uacute;blico domiciliario</html>',
			   name: 'acu_aco_num_predios_area',
			   id: 'acu_aco_num_predios_area',
			   emptyText: '0',
			   enableKeyEvents: true,
			   width: 120,
			   vtype: 'alphanum',
			   listeners:
			   {
			   'render': function() {
						ayuda('acu_aco_num_predios_area', ayuda_acu_aco_num_predios_area);
					},
			   'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
			   }
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;'+letra,
			   fieldLabel: '<html>N&uacute;mero de predios conectados al sistema</html>',
			   name: 'acu_aco_num_predios_conec_sistema',
			   id: 'acu_aco_num_predios_conec_sistema',
			   enableKeyEvents: true,
			   width: 120,
			   emptyText: '0',
			   listeners:
			   {
			   	'render': function() {
						ayuda('acu_aco_num_predios_conec_sistema', ayuda_acu_aco_num_predios_conec_sistema);
					},
				'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } } 
			   },
				vtype: 'alphanum'
			},
			{
			   xtype: 'radiogroup',
			   id: 'acu_aco_estrat_soceco_adop_mpio',
			   itemCls: 'x-check-group-alt',
			   labelSeparator: '',
			   columns: 1,
			   labelStyle: 'width: '+'370px;'+letra,//+'px;'+letra
			   fieldLabel: '<html>&iquest;Aplica la estratificaci&oacute;n socioecon&oacute;mica aplicada por el municipio de acuerdo con la metodolog&iacute;a del Departamento Nacional de Planeaci&oacute;n?</html>',
			   items:
			   [
				  {
					 boxLabel: 'Si', 
					 name: 'acu_aco_estrat_soceco_adop_mpio',
					 id:'acu_aco_estrat_soceco_adop_mpio_si',
					 inputValue: 1,
					 checked: true,
					 listeners:
					 {
						'check' : function(radio, valor) 
						   {
							  if (!valor) Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').enable();
							  else Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').disable();
						   }                
					 }
				  },
				  { 
					 boxLabel: 'No', 
					 name: 'acu_aco_estrat_soceco_adop_mpio',
					 inputValue: 0,
					 id: 'acu_aco_estrat_soceco_adop_mpio_no' 
				  }
			   ],
			   listeners:
			   {
			   	'render': function() {
						ayuda('acu_aco_estrat_soceco_adop_mpio', ayuda_acu_aco_estrat_soceco_adop_mpio);
					}
			   },
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;text-align:right;'+letra,
			   fieldLabel: '<html>&iquest;Por qu&eacute; no?</html>',
			   name: 'acu_aco_estra_soceco_adop_mpio_jus',
			   id: 'acu_aco_estra_soceco_adop_mpio_jus',
			   disabled : true,
			   width: 300,
			   listeners:
			   {
			   	'render': function() {
						ayuda('acu_aco_estra_soceco_adop_mpio_jus', ayuda_acu_aco_estra_soceco_adop_mpio_jus);
					}
			   }
			}
	   ],
	   buttons:
	   [
		  {
			 text: '<html>Atr&aacute;s</html>',
			 disabled: false,
			 handler: function()
			 {
				 (Ext.getCmp('panel_servicios')).setActiveGroup(0);

			 }
		  },   
		  {
			 text: 'Continuar',
			 handler: function()
			 {  
				acu_analisiscobertura_cargardatostemporal();
				var accion=acu_analisiscobertura_verfiricaraccion();
				if(accion=='crear' || accion=='actualizar')
				{
					acu_analisiscobertura_subirdatos(accion);
				}

				acu_analisiscobertura_estratos_gridpanel.show();
				acu_analisiscobertura_formpanel.hide();						
			 }
		  }      
	   ]
	});


	var acu_analisiscobertura_estratos_datastore=new Ext.data.GroupingStore({
	        proxy: new Ext.data.HttpProxy({
		      url: 'acueducto_analisiscobertura/listarEstratos',	
			  method: 'POST'
	        }),
	        baseParams:{task: 'LISTARESTRATOS'},
			id:'acu_analisiscobertura_estratos_datastore',
			reader:new Ext.data.JsonReader({
			  root:'results',
			  totalProperty:'total',
			  id:'acu_id'},
			  [
			   {name:'est_id'},
			   {name:'est_nombre'},
			   {name:'est_residencial'},
			   {name:'ssacu_numero_suscriptores'},
			   {name:'ssacu_tarifa_sin_medicion'},
			   {name:'ssacu_cargo_fijo'},
			   {name:'ssacu_tarifa_consumo_basico'},
			   {name:'ssacu_tarifa_consumo_complementario'},
			   {name:'ssacu_tarifa_consumo_suntuario'}
			  ]
			 ),
			sortInfo:{field: 'est_nombre', direction: 'ASC'},	
		    groupField:'est_residencial'
    });

	
	var acu_analisiscobertura_estratos_colmodel = new Ext.grid.ColumnModel({
	  defaults:{sortable:false, allowBlank: false, allowNegative: false},
	  columns:[
		{header: "<html>Clasificaci&oacute;n</html>", width: 80,  sortable: true, dataIndex: 'est_nombre'},
		{header: "<html>Clasificaci&oacute;n</html>", width: 80,  sortable: true,hidden:true, dataIndex: 'est_residencial'},
        {header: "<html>N&uacute;mero de <br/>suscriptores</html>", width: 120, dataIndex: 'ssacu_numero_suscriptores', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue: 10000})},
        {header: "<html>Tarifa sin medici&oacute;n <br/>($/Suscr/mes)</html>", width: 100, dataIndex: 'ssacu_tarifa_sin_medicion', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({  maxValue: 100000})},
        {header: "Cargo fijo <br/>($/Suscr/mes)", width: 80, dataIndex: 'ssacu_cargo_fijo', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({  maxValue: 1000000})},
        {header: "<html>Tarifa consumo <br/>b&aacute;sico</html> ($/m3)", width: 120, dataIndex: 'ssacu_tarifa_consumo_basico', renderer: formatoNumeroCelda, 
           editor: new Ext.form.NumberField({  maxValue: 1000000})},
        {header: "Tarifa consumo <br/>complementario ($/m3)", width: 120, dataIndex: 'ssacu_tarifa_consumo_complementario', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue: 1000000})},
        {header: "Tarifa consumo <br/>suntuario ($/m3)", width: 120, dataIndex: 'ssacu_tarifa_consumo_suntuario', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue: 1000000})}                  
		]
	});

   	acu_analisiscobertura_estratos_datastore.load();
	
	//grilla con lo modulos 
	var acu_analisiscobertura_estratos_gridpanel = new Ext.grid.EditorGridPanel({
		id: 'acu_analisiscobertura_estratos_gridpanel',	
        hidden: true,
		columnLines : true,
		stripeRows:true,
		store: acu_analisiscobertura_estratos_datastore,
		cm: acu_analisiscobertura_estratos_colmodel,
		height: largo_panel-15,
		border: true,
		enableColLock:false,
		autoWidth: true,
	    wrap:true,
	    stripeRows: true,
	    clicksToEdit: 1,
	    title: 'An&aacute;lisis de cobertura: Suscriptores',
	    buttons:
	    [
		  {
			 text: '<html>Atr&aacute;s</html>',
			 disabled: false,
			 handler: function()
			 {
			 acu_analisiscobertura_estratos_gridpanel.hide();
			 acu_analisiscobertura_formpanel.show();
			 }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 {
			 acu_comercial_tabpanel.setActiveTab(1);
			 }
		  }      
	    ],
        view: new Ext.grid.GroupingView()
	});
	
   var acu_analisiscobertura_contenedor=new Ext.Panel({
    height:largo_panel-20,
	border:false,
	//frame:true,
	//title: 'An&aacute;lisis de cobertura',
	layout:'fit',
    items:[acu_analisiscobertura_formpanel,acu_analisiscobertura_estratos_gridpanel],
	renderTo:'div_form_acu_analisiscobertura'
   });

//***************Funciones************///
	//***************Funciones************///
    var acu_analisiscobertura_formpanel_datanuevo;
	var acu_analisiscobertura_formpanel_dataviejo=new Array();

	function acu_analisiscobertura_cargardatostemporal(){
	
		if(acu_analisiscobertura_formpanel_datanuevo)
		{
			acu_analisiscobertura_formpanel_dataviejo=acu_analisiscobertura_formpanel_datanuevo;
		}
		acu_analisiscobertura_formpanel_datanuevo=new Array();
		acu_analisiscobertura_formpanel_datanuevo['acu_aco_catastro_usuarios'] = Ext.getCmp('acu_aco_catastro_usuarios').getValue().getGroupValue();
		acu_analisiscobertura_formpanel_datanuevo['acu_aco_anio_ela_impl_catastro_usu'] = Ext.getCmp('acu_aco_anio_ela_impl_catastro_usu').getValue();
		acu_analisiscobertura_formpanel_datanuevo['acu_aco_num_predios_area'] = Ext.getCmp('acu_aco_num_predios_area').getValue();
		acu_analisiscobertura_formpanel_datanuevo['acu_aco_num_predios_conec_sistema'] = Ext.getCmp('acu_aco_num_predios_conec_sistema').getValue();
		acu_analisiscobertura_formpanel_datanuevo['acu_aco_estrat_soceco_adop_mpio'] = Ext.getCmp('acu_aco_estrat_soceco_adop_mpio').getValue().getGroupValue();
		acu_analisiscobertura_formpanel_datanuevo['acu_aco_estra_soceco_adop_mpio_jus'] = Ext.getCmp('acu_aco_estra_soceco_adop_mpio_jus').getValue();
	}
	
	
	
	function acu_analisiscobertura_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_analisiscobertura_formpanel_dataviejo) // si existe el viejo, compare
		{
			if(acu_analisiscobertura_formpanel_datanuevo['acu_aco_catastro_usuarios'] != acu_analisiscobertura_formpanel_dataviejo['acu_aco_catastro_usuarios'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_formpanel_datanuevo['acu_aco_anio_ela_impl_catastro_usu'] != acu_analisiscobertura_formpanel_dataviejo['acu_aco_anio_ela_impl_catastro_usu'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_formpanel_datanuevo['acu_aco_num_predios_area'] != acu_analisiscobertura_formpanel_dataviejo['acu_aco_num_predios_area'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_formpanel_datanuevo['acu_aco_num_predios_conec_sistema'] != acu_analisiscobertura_formpanel_dataviejo['acu_aco_num_predios_conec_sistema'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_formpanel_datanuevo['acu_aco_estrat_soceco_adop_mpio'] != acu_analisiscobertura_formpanel_dataviejo['acu_aco_estrat_soceco_adop_mpio'])
			{accion='actualizar';}
			
			if(acu_analisiscobertura_formpanel_datanuevo['acu_aco_estra_soceco_adop_mpio_jus'] != acu_analisiscobertura_formpanel_dataviejo['acu_aco_estra_soceco_adop_mpio_jus'])
			{accion='actualizar';}
		}
		else
		{
			accion='crear';
		}
		return accion;
	}
	
	function acu_analisiscobertura_subirdatos(accion_realizar){
	
		acu_analisiscobertura_formpanel.getForm().submit({
			method: 'POST',
			url:'acueducto_analisiscobertura/actualizarAnalisisCobertura',
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
	
acu_analisiscobertura_datos_datastore.load({
  callback: function() {
	var record = acu_analisiscobertura_datos_datastore.getAt(0);
	acu_analisiscobertura_formpanel.getForm().loadRecord(record);	
  }
});
