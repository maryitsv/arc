/*
ARC
desarrollado por maryit sanchez
2010
*/

/* Que paso con estas variables no las encuentro
aco_num_sus_servicio_oficial	ACO_NUM_SUS_SERVICIO_OFICIAL	
aco_tarif_estr_servicio_oficial	ACO_TARIF_ESTR_SERVICIO_OFICIAL
*/

	var ase_analisiscobertura_panel = new Ext.FormPanel({
		id: 'ase_analisiscobertura_panel',
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
			   id: 'ase_aco_catastro_usuarios',
			   columns: 1,
			   items:
			   [
				  {
					 boxLabel: 'Si', name: 'ase_aco_catastro_usuarios', id:'ase_aco_catastro_usuarios_si',
					 inputValue: true, checked: true
				  },
				  { 
					boxLabel: 'No', name: 'ase_aco_catastro_usuarios', id:'ase_aco_catastro_usuarios_no',
					inputValue: false 
				  }
			   ],
			   listeners:{
			   'render': function() {
							ayuda('ase_aco_catastro_usuarios', ayuda_ase_aco_catastro_usuarios);
						}
			   }
			},
			{  
			   xtype:'textfield', 
			   labelStyle: 'width: 370px; text-align:right;'+letra,
			   fieldLabel: '<html>¿En qu&eacute; a&ntilde;o lo implement&oacute;?</html>',
			   name:'ase_aco_anio_ela_impl_catastro_usu',
			   id:'ase_aco_anio_ela_impl_catastro_usu',
			   listeners:{
			   'render': function() {
							ayuda('ase_aco_anio_ela_impl_catastro_usu', ayuda_ase_aco_anio_ela_impl_catastro_usu);
						}
			   }
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;'+letra,
			   fieldLabel: '<html>N&uacute;mero de predios en el &aacute;rea de prestaci&oacute;n del servicio p&uacute;blico domiciliario</html>',
			   name: 'ase_aco_num_predios_area',
			   id: 'ase_aco_num_predios_area',
			   emptyText: '0',
			   enableKeyEvents: true,
			   width: 120,
			   vtype: 'alphanum',
			   listeners:
			   {
			   'render': function() {
						ayuda('ase_aco_num_predios_area', ayuda_ase_aco_num_predios_area);
					},
			   'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } }                
			   }
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;'+letra,
			   fieldLabel: '<html>N&uacute;mero de predios conectados al sistema</html>',
			   name: 'ase_aco_num_predios_conec_sistema',
			   id: 'ase_aco_num_predios_conec_sistema',
			   enableKeyEvents: true,
			   width: 120,
			   emptyText: '0',
			   listeners:
			   {
			   	'render': function() {
						ayuda('ase_aco_num_predios_conec_sistema', ayuda_ase_aco_num_predios_conec_sistema);
					},
				'keyup' : { fn: function(campo) { formatoNumeroCampo(this); } } 
			   },
				vtype: 'alphanum'
			},
			{
			   xtype: 'radiogroup',
			   id: 'ase_aco_estrat_soceco_adop_mpio',
			   itemCls: 'x-check-group-alt',
			   labelSeparator: '',
			   columns: 1,
			   labelStyle: 'width: '+'370px;'+letra,//+'px;'+letra
			   fieldLabel: '<html>&iquest;Aplica la estratificaci&oacute;n socioecon&oacute;mica aplicada por el municipio de acuerdo con la metodolog&iacute;a del Departamento Nacional de Planeaci&oacute;n?</html>',
			   items:
			   [
				  {
					 boxLabel: 'Si', 
					 name: 'ase_aco_estrat_soceco_adop_mpio',
					 id:'ase_aco_estrat_soceco_adop_mpio_si',
					 inputValue: true,
					 checked: true,
					 listeners:
					 {
						'check' : function(radio, valor) 
						   {
							  if (!valor) Ext.getCmp('ase_aco_estra_soceco_adop_mpio_jus').enable();
							  else Ext.getCmp('ase_aco_estra_soceco_adop_mpio_jus').disable();
						   }                
					 }
				  },
				  { 
					 boxLabel: 'No', 
					 name: 'ase_aco_estrat_soceco_adop_mpio',
					 inputValue: false,
					 id: 'ase_aco_estrat_soceco_adop_mpio_no' 
				  }
			   ],
			   listeners:
			   {
			   	'render': function() {
						ayuda('ase_aco_estrat_soceco_adop_mpio', ayuda_ase_aco_estrat_soceco_adop_mpio);
					}
			   },
			},
			{
			   xtype: 'textfield',
			   labelStyle: 'width: 370px;text-align:right;'+letra,
			   fieldLabel: '<html>&iquest;Por qu&eacute; no?</html>',
			   name: 'ase_aco_estra_soceco_adop_mpio_jus',
			   id: 'ase_aco_estra_soceco_adop_mpio_jus',
			   disabled : true,
			   width: 300,
			   listeners:
			   {
			   	'render': function() {
						ayuda('ase_aco_estra_soceco_adop_mpio_jus', ayuda_ase_aco_estra_soceco_adop_mpio_jus);
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
				if (confirm("\xbfDeseas ir atr\xe1s a la secci\xf3n 'Informaci\xf3n Administrativa y Financiera'?"))
				{
		 
				}
			 }
		  },   
		  {
			 text: 'Continuar',
			 handler: function()
			 {  
				ase_analisiscobertura_estratos_gridpanel.show();
				ase_analisiscobertura_panel.hide();						
			 }
		  }      
	   ]
	});


	var ase_analisiscobertura_estratos_datastore=new Ext.data.GroupingStore({
	        proxy: new Ext.data.HttpProxy({
		      url: 'acueducto_analisiscobertura/cargar',	
			  method: 'POST'
	        }),
	        baseParams:{task: 'LISTARESTRATOS'},
			id:'ase_analisiscobertura_estratos_datastore',
			reader:new Ext.data.JsonReader({
			  root:'results',
			  totalProperty:'total',
			  id:'ase_id'},
			  [
			   {name:'est_id'},
			   {name:'est_nombre'},
			   {name:'est_residencial'}
			  ]
			 ),
			sortInfo:{field: 'est_nombre', direction: 'ASC'},	
		    groupField:'est_residencial'
    });

	
	var ase_analisiscobertura_estratos_colmodel = new Ext.grid.ColumnModel({
	  defaults:{sortable:false, allowBlank: false, allowNegative: false},
	  columns:[
		{header: "<html>Clasificaci&oacute;n</html>", width: 80,  sortable: true, dataIndex: 'est_nombre'},
		{header: "<html>Clasificaci&oacute;n</html>", width: 80,  sortable: true,hidden:true, dataIndex: 'est_residencial'},
        {header: "<html>N&uacute;mero de <br/>suscriptores</html>", width: 140, dataIndex: 'numeroSuscriptores', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({ maxValue: 10000})},
        {header: "<html>Tarifa <br/>($/Suscr/mes)</html>", width: 120, dataIndex: 'tarifa', renderer: formatoNumeroCelda,
         editor: new Ext.form.NumberField({  maxValue: 100000})}
		]
	});

   	ase_analisiscobertura_estratos_datastore.load();
	
	//grilla con lo modulos
	var ase_analisiscobertura_estratos_gridpanel = new Ext.grid.EditorGridPanel({
		id: 'ase_analisisCoberturaAcueductoAlcantarillado2',	
        hidden: true,
		columnLines : true,
		stripeRows:true,
		store: ase_analisiscobertura_estratos_datastore,
		cm: ase_analisiscobertura_estratos_colmodel,
		height: largo_panel-40,
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
			 ase_analisiscobertura_estratos_gridpanel.hide();
			 ase_analisiscobertura_panel.show();
			 }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 {
			 ase_comercial_tabpanel.setActiveTab(1);
			 //(Ext.getCmp('ase_comercial_tabpanel')).setActiveTab(1);
			 }
		  }      
	    ],
        view: new Ext.grid.GroupingView()
	});
	
   var ase_analisiscobertura_contenedor=new Ext.Panel({
    height:largo_panel-20,
	//frame:true,
	//title: 'An&aacute;lisis de cobertura',
	layout:'fit',
    items:[ase_analisiscobertura_panel,ase_analisiscobertura_estratos_gridpanel],
	renderTo:'div_form_ase_analisiscobertura'
   });

//***************Funciones************///
	function ase_analisiscobertura_subirdatos(){
	
		/*
		ase_analisiscobertura_panel.getForm().submit({
			method: 'POST',
			url:'analisisCobertura/cargar',
			params: {
				task: 'CREARANALISISCOBERTURA',
				servicio:servicio
			},
			waitTitle: 'Enviando',
			waitMsg: 'Enviando datos...',
			success: function(response, action)
			{
			  obj = Ext.util.JSON.decode(action.response.responseText);
			  alert(obj.mensaje);
			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText); 
					alert(obj.errors.reason);
				}
			}
		});*/

	}
	
	
