	var alc_tecnicooperativasolucionindividualalcantarillado_datos_datastore = new Ext.data.Store({
        id: 'alc_tecnicooperativasolucionindividualalcantarillado_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'alcantarillado_tecnicooperativasolucionindividualalcantarillado/obtenerDatosTecnicooperativasolucionindividualalcantarillado', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
				  {name: 'alc_tosia_letrina', type: 'int'},	    
				  {name: 'alc_tosia_letrina_seca_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_letrina_poso_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_letrina_ecologica_numero_viviendas', type: 'float'},

				  {name: 'alc_tosia_tasa_sanitaria', type: 'int'},	    
				  {name: 'alc_tosia_tasa_sanitaria_campo_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_tasa_sanitaria_tanque_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas', type: 'float'},

				  {name: 'alc_tosia_inodoro_bajo_consumo', type: 'int'},	    
				  {name: 'alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas', type: 'float'},

				  {name: 'alc_tosia_inodoro_alto_consumo', type: 'int'},	    
				  {name: 'alc_tosia_inodoro_alto_consumo_campo_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas', type: 'float'},

				  {name: 'alc_tosia_campo_abierto', type: 'int'},	    
				  {name: 'alc_tosia_campo_abierto_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_otro', type: 'int'},
				  {name: 'alc_tosia_otro_numero_viviendas', type: 'float'},
				  {name: 'alc_tosia_otro_cual', type: 'string'}
		])
	});



	//todo letrina
	var alc_tosia_letrina=new  Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: '<b>Letrina</b>',
		inputValue: 1,
		id: 'alc_tosia_letrina',
		name:'alc_tosia_letrina',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_letrina',ayuda_alc_tosia_letrina);
			},
			'check':function(checkbox,checked){
			
			}
		}
	});
	
	var alc_tosia_letrina_seca_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Letrina seca',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_letrina_seca_numero_viviendas',
		name:'alc_tosia_letrina_seca_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_letrina_seca_numero_viviendas', ayuda_alc_tosia_letrina_seca_numero_viviendas);
			}
		}
	});

	var alc_tosia_letrina_poso_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Letrina con poso de absorción',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_letrina_poso_numero_viviendas',
		name:'alc_tosia_letrina_poso_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_letrina_poso_numero_viviendas', ayuda_alc_tosia_letrina_poso_numero_viviendas);
			}
		}
	});

	var alc_tosia_letrina_ecologica_numero_viviendas=new Ext.form.NumberField({
		 xtype: 'numberfield', 
		fieldLabel: 'Letrina ecologica',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_letrina_ecologica_numero_viviendas',
		name:'alc_tosia_letrina_ecologica_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_letrina_ecologica_numero_viviendas', ayuda_alc_tosia_letrina_ecologica_numero_viviendas);
			}
		}
	});
        
        //sanitario
	var alc_tosia_tasa_sanitaria=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: '<b>Tasa sanitaria</b>',
		inputValue: 1,
		id: 'alc_tosia_tasa_sanitaria',
		name:'alc_tosia_tasa_sanitaria',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_tasa_sanitaria',ayuda_alc_tosia_tasa_sanitaria);
			},
			'check':function(checkbox,checked){
			}
		}
	});

	var alc_tosia_tasa_sanitaria_campo_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a campo abierto',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_tasa_sanitaria_campo_numero_viviendas',
		name:'alc_tosia_tasa_sanitaria_campo_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_tasa_sanitaria_campo_numero_viviendas', ayuda_alc_tosia_tasa_sanitaria_campo_numero_viviendas);
			}
		}
	});

	var alc_tosia_tasa_sanitaria_tanque_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a tanque séptico',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_tasa_sanitaria_tanque_numero_viviendas',
		name:'alc_tosia_tasa_sanitaria_tanque_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_tasa_sanitaria_tanque_numero_viviendas', ayuda_alc_tosia_tasa_sanitaria_tanque_numero_viviendas);
			}
		}
	});

	var alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a alcantarillado',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas',
		name:'alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas', ayuda_alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas);
			}
		}
	});


        // inodoro_bajo_consumo
	var alc_tosia_inodoro_bajo_consumo=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: '<b>Inodoro de bajo consumo</b>',
		inputValue: 1,
		id: 'alc_tosia_inodoro_bajo_consumo',
		name:'alc_tosia_inodoro_bajo_consumo',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_bajo_consumo',ayuda_alc_tosia_inodoro_bajo_consumo);
			},
			'check':function(checkbox,checked){
			}
		}
	});

	var alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a campo abierto',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas',
		name:'alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas', ayuda_alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas);
			}
		}
	});

	var alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a tanque séptico',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas',
		name:'alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas', ayuda_alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas);
			}
		}
	});

	var alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a alcantarillado',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas',
		name:'alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas', ayuda_alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas);
			}
		}
	});

        //sanitario

	var alc_tosia_inodoro_alto_consumo=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: '<b>Inodoro de alto consumo</b>',
		inputValue: 1,
		id: 'alc_tosia_inodoro_alto_consumo',
		name:'alc_tosia_inodoro_alto_consumo',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_alto_consumo',ayuda_alc_tosia_inodoro_alto_consumo);
			},
			'check':function(checkbox,checked){
			}
		}
	});

	var alc_tosia_inodoro_alto_consumo_campo_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a campo abierto',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_inodoro_alto_consumo_campo_numero_viviendas',
		name:'alc_tosia_inodoro_alto_consumo_campo_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_alto_consumo_campo_numero_viviendas', ayuda_alc_tosia_inodoro_alto_consumo_campo_numero_viviendas);
			}
		}
	});

	var alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a tanque séptico',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas',
		name:'alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas', ayuda_alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas);
			}
		}
	});

	var alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: 'Con descargue a alcantarillado',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas',
		name:'alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas', ayuda_alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas);
			}
		}
	});

        //campo
	var alc_tosia_campo_abierto=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: '<b>Campo abierto</b>',
		inputValue: 1,
		id: 'alc_tosia_campo_abierto',
		name:'alc_tosia_campo_abierto',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_campo_abierto',ayuda_alc_tosia_campo_abierto);
			},
			'check':function(checkbox,checked){
			}
		}
	});

	var alc_tosia_campo_abierto_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: '',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_campo_abierto_numero_viviendas',
		name:'alc_tosia_campo_abierto_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_campo_abierto_numero_viviendas', ayuda_alc_tosia_campo_abierto_numero_viviendas);
			}
		}
	});

	//otro
	var alc_tosia_otro=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: '<b>Otro</b>',
		inputValue: 1,
		id: 'alc_tosia_otro',
		name:'alc_tosia_otro',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_otro',ayuda_alc_tosia_otro);
			},
			'check':function(checkbox,checked){
			}
		}
	});
/*
	var alc_tosia_otro_cual=new Ext.form.NumberField({
		xtype: 'textfield', 
		fieldLabel: '',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_otro_cual',
		name:'alc_tosia_otro_cual',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_otro_cual', ayuda_alc_tosia_otro_cual);
			}
		}
	});

	var alc_tosia_otro_numero_viviendas=new Ext.form.NumberField({
		xtype: 'numberfield', 
		fieldLabel: '',
		maxLength: 9,
		emptyText  : '0',
		id: 'alc_tosia_otro_numero_viviendas',
		name:'alc_tosia_otro_numero_viviendas',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosia_otro_numero_viviendas', ayuda_alc_tosia_otro_numero_viviendas);
			}
		}
	});
*/

	var alc_tosia_otro_numero_viviendas=new Ext.form.CompositeField({
		xtype: 'compositefield',
		width:250,
		hideLabel:true,  
		combineErrors: false,
		items: [
			{
				xtype: 'displayfield', 
				value: 'Cual?'
			},{
				xtype: 'textfield', width:100,
				maxLength: 49,
				id: 'alc_tosia_otro_cual',
				name:'alc_tosia_otro_cual',
				listeners:
				{
					'render':function(){
						ayuda('alc_tosia_otro_cual', ayuda_alc_tosia_otro_cual);
					}
				}
			},{
				xtype: 'numberfield', width:100,
				maxLength: 9,
				emptyText  : '0',
				id: 'alc_tosia_otro_numero_viviendas',
				name:'alc_tosia_otro_numero_viviendas',
				listeners:
				{
					'render':function(){
						ayuda('alc_tosia_otro_numero_viviendas', ayuda_alc_tosia_otro_numero_viviendas);
					}
				}
			}
		]
	});

/*solucion individual*/

	var alc_solucion_letrina_sanitario_panel = new Ext.FormPanel({
	  layout:'form',
	  height:largo_panel-15,
	  items:
	  [	
		{
		xtype:'fieldset',
		title:'<b>Soliciones individuales</b>',
		boxMaxWidth : 600,
		items:
		[
			{
				  xtype:'label',
				html:'<b>TECNOLOG&Iacute;AS UTILIZADAS</b>'
			},
		      {
				layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
						
							alc_tosia_letrina
						]
					},{
						layout: 'form',
						width:300,
						border:false,
						defaults:{labelStyle: 'width:180px;'+letra,width:100},
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							alc_tosia_letrina_seca_numero_viviendas,
							alc_tosia_letrina_poso_numero_viviendas,
							alc_tosia_letrina_ecologica_numero_viviendas
						]
					}
				]
			},{
				layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							alc_tosia_tasa_sanitaria
						]
					},{
						layout: 'form',
						width:300,
						defaults:{labelStyle: 'width:195px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							alc_tosia_tasa_sanitaria_campo_numero_viviendas,
							alc_tosia_tasa_sanitaria_tanque_numero_viviendas,
							alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas
						]
					}
				]
			}
		]
		}
	  ],
	  buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_tecnicooperativa_tabpanel.setActiveTab(1);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucionindividualalcantarillado_subirdatos(alc_solucion_letrina_sanitario_panel,'letrina_sanitario');
	
				alc_solucion_letrina_sanitario_panel.hide();
				alc_solucion_inodoroalto_inodorobajo_panel.show();
			}
		}]
	});


	var alc_solucion_inodoroalto_inodorobajo_panel = new Ext.FormPanel({
	hidden:true,
	layout:'form',
	height:largo_panel-15,
	items:
	[
		{
		xtype:'fieldset',
		title:'<b>Soliciones individuales</b>',
		boxMaxWidth : 600,
		items:
		[
		      {
				xtype:'label',
			      html:'<b>TECNOLOG&Iacute;AS UTILIZADAS</b>'
		      },
			{
				layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							alc_tosia_inodoro_bajo_consumo
						]
					},{
						layout: 'form',
						width:300,
						defaults:{labelStyle: 'width:195px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas,
							alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas,
							alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas
						]
					}
				]
			},{
				layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							alc_tosia_inodoro_alto_consumo	
						]
					},{
						layout: 'form',
						width:300,
						defaults:{labelStyle: 'width:195px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							alc_tosia_inodoro_alto_consumo_campo_numero_viviendas,	
							alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas,	
							alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas	
						]
					}
				]
			}
		]
		}
	],
	buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_solucion_inodoroalto_inodorobajo_panel.hide();
				alc_solucion_letrina_sanitario_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucionindividualalcantarillado_subirdatos(alc_solucion_inodoroalto_inodorobajo_panel,'inodoroalto_inodorobajo');
	
				alc_solucion_inodoroalto_inodorobajo_panel.hide();
				alc_solucion_campo_otro_panel.show();
			}
		}]
	});


	var alc_solucion_campo_otro_panel = new Ext.FormPanel({
	//--  hidden:true,
	  layout:'form',
	  height:largo_panel-15,
	  items:
	  [
		{
		xtype:'fieldset',
		title:'<b>Soliciones individuales</b>',
		boxMaxWidth : 600,
		items:
		[
		      {
				xtype:'label',
			      html:'<b>TECNOLOG&Iacute;AS UTILIZADAS</b>'
		      },
		      {
				layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							alc_tosia_campo_abierto
						]
					},{
						layout: 'form',
						width:350,
						defaults:{labelStyle: 'width:140px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							alc_tosia_campo_abierto_numero_viviendas
						]
					}
				]
			}, {
				layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							alc_tosia_otro	
						]
					},{

						layout: 'form',
						width:300,
					      // defaults:{width:250},
						border:false,
						items: 
						[
							//{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							{
							      xtype: 'compositefield',
							      width:250,
							      hideLabel:true,  
							      combineErrors: false,
							      items: [
								      {
									      xtype: 'displayfield',
									      width:150,
									      value: '<b></b>',
								      },{
									      xtype: 'displayfield',
									      value: '<b>No. viviendas</b>'
								      }
							      ]
							},
							alc_tosia_otro_numero_viviendas	
						]
					}		  
				]
			}
		]
		}
	  ],
	  buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_solucion_campo_otro_panel.hide();
				alc_solucion_inodoroalto_inodorobajo_panel.show();
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucionindividualalcantarillado_subirdatos(alc_solucion_campo_otro_panel,'campoabierto_otro');
	
				alc_tecnicooperativa_tabpanel.setActiveTab(3);
				
			}
		}]
	});


	var alc_tecnicooperativasolucionindividualalcantarillado_panel = new Ext.Panel({
		//autoWidth: true,
		height:largo_panel-15,
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[
			alc_solucion_letrina_sanitario_panel,
			alc_solucion_inodoroalto_inodorobajo_panel,
			alc_solucion_campo_otro_panel
    		],
		renderTo: 'div_form_alc_tecnicooperativasolucionindividualalcantarillado'
		
	});


	function alc_tecnicooperativasolucionindividualalcantarillado_subirdatos(tosia_subpanel,nombreform)
	{
		subirDatos(
			tosia_subpanel,
			'alcantarillado_tecnicooperativasolucionindividualalcantarillado/actualizarTecnicooperativasolucionindividualalcantarillado',
			{formulario:nombreform},
			function(){}
		);
		
	}
	
	alc_tecnicooperativasolucionindividualalcantarillado_datos_datastore.load({
	  callback: function() {
		var record = alc_tecnicooperativasolucionindividualalcantarillado_datos_datastore.getAt(0);
		//--alc_tecnicooperativasolucionindividualalcantarillado_panel.getForm().loadRecord(record);
		alc_solucion_letrina_sanitario_panel.getForm().loadRecord(record);
		alc_solucion_inodoroalto_inodorobajo_panel.getForm().loadRecord(record);
		alc_solucion_campo_otro_panel.getForm().loadRecord(record);
	
	  }
	});
