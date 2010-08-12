	var alc_tecnicooperativasolucioncolectivaalcantarillado_datos_datastore = new Ext.data.Store({
        id: 'alc_tecnicooperativasolucioncolectivaalcantarillado_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'alcantarillado_tecnicooperativasolucioncolectivaalcantarillado/obtenerDatosTecnicooperativasolucioncolectivaalcantarillado', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
				  {name: 'alc_tosca_posee_alcantarillado_colectivo', type: 'int'},	    
				  {name: 'alc_tosca_sanitario', type: 'int'},
				  {name: 'alc_tosca_pluvial', type: 'int'},
				  {name: 'alc_tosca_combi_convencional', type: 'int'},
				  {name: 'alc_tosca_combi_no_convencional', type: 'int'},
				  {name: 'alc_tosca_simplificado', type: 'int'},
				  {name: 'alc_tosca_sin_arrastre_solidos', type: 'int'},
				  {name: 'alc_tosca_otro', type: 'int'},

				  {name: 'alc_tosca_sanitario_numero_suscriptores', type: 'string'},
				  {name: 'alc_tosca_pluvial_numero_suscriptores', type: 'string'},
				  {name: 'alc_tosca_combi_convencional_numero_suscriptores', type: 'string'},
				  {name: 'alc_tosca_combi_no_convencional_numero_suscriptores', type: 'string'},
				  {name: 'alc_tosca_simplificado_numero_suscriptores', type: 'string'},
				  {name: 'alc_tosca_sin_arrastre_solidos_numero_suscriptores', type: 'string'},				  
				  {name: 'alc_tosca_otro_numero_suscriptores', type: 'string'},
		
				  {name: 'alc_tosca_sanitario_funciona', type: 'int'},
				  {name: 'alc_tosca_pluvial_funciona', type: 'int'},
				  {name: 'alc_tosca_combi_convencional_funciona', type: 'int'},
				  {name: 'alc_tosca_combi_no_convencional_funciona', type: 'int'},
				  {name: 'alc_tosca_simplificado_funciona', type: 'int'},
				  {name: 'alc_tosca_sin_arrastre_solidos_funciona', type: 'int'},
				  {name: 'alc_tosca_otro_funciona', type: 'int'},

				  {name: 'alc_tosca_sanitario_se_usa', type: 'int'},
				  {name: 'alc_tosca_pluvial_se_usa', type: 'int'},
				  {name: 'alc_tosca_combi_convencional_se_usa', type: 'int'},
				  {name: 'alc_tosca_combi_no_convencional_se_usa', type: 'int'},
				  {name: 'alc_tosca_simplificado_se_usa', type: 'int'},
				  {name: 'alc_tosca_sin_arrastre_solidos_se_usa', type: 'int'},
				  {name: 'alc_tosca_otro_se_usa', type: 'int'},

				  {name: 'alc_tosca_sanitario_estado', type: 'string'},
				  {name: 'alc_tosca_pluvial_estado', type: 'string'},
				  {name: 'alc_tosca_combi_convencional_estado', type: 'string'},
				  {name: 'alc_tosca_combi_no_convencional_estado', type: 'string'},
				  {name: 'alc_tosca_simplificado_estado', type: 'string'},
				  {name: 'alc_tosca_sin_arrastre_solidos_estado', type: 'string'},				  
				  {name: 'alc_tosca_otro_estado', type: 'string'}
		])
	});


	var alc_tosca_posee_alcantarillado_colectivo = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		itemCls: 'x-check-group-alt',
		labelStyle: 'width:300px;',
		id:'alc_tosca_posee_alcantarillado_colectivo',
		fieldLabel: '<html>&iquest;Posee sistema de alcantarillado colectivo?</html>',
		columns:2,
		width: 150,
		items:
		[
			{
				boxLabel: 'Si', 
				width:50,
				name: 'alc_tosca_posee_alcantarillado_colectivo',
				id:'alc_tosca_posee_alcantarillado_colectivo_si', 
				checked: true,
				inputValue:1,
				listeners:{
					'check':function(radio,checked){
						Ext.getCmp('alc_alcantarilladocolectivo_fieldset').setDisabled(!checked);		
					}
				}
			},
			{ 
				boxLabel: 'No', 
				width:50,
				name: 'alc_tosca_posee_alcantarillado_colectivo',
				id:'alc_tosca_posee_alcantarillado_colectivo_no' ,
				inputValue:0
			}
		],
		listeners:
		{
		  'render': function() {
					ayuda('alc_tosca_posee_alcantarillado_colectivo', ayuda_alc_tosca_posee_alcantarillado_colectivo);
					}
		}
	});

        //todo opcion sanitario
	var alc_tosca_sanitario = new Ext.form.Checkbox({	
		  xtype: 'checkbox', 
		  fieldLabel: 'Sanitario',
		  inputValue: 1,
		  id: 'alc_tosca_sanitario',
		  name:'alc_tosca_sanitario',
		  listeners:
		  {
			  'render':function(){
				  ayuda('alc_tosca_sanitario',ayuda_alc_tosca_sanitario);
			  },
			  'check':function(checkbox,checked){
				  
				  if(!checked){
				  Ext.getCmp('alc_tosca_sanitario_funciona').reset();
				  Ext.getCmp('alc_tosca_sanitario_numero_suscriptores').reset();
				  Ext.getCmp('alc_tosca_sanitario_se_usa').reset();
				  Ext.getCmp('alc_tosca_sanitario_estado_combo').reset();
				  }
				  Ext.getCmp('alc_tosca_sanitario_funciona').setDisabled(!checked);
				  Ext.getCmp('alc_tosca_sanitario_numero_suscriptores').setDisabled(!checked);
				  Ext.getCmp('alc_tosca_sanitario_se_usa').setDisabled(!checked);
				  Ext.getCmp('alc_tosca_sanitario_estado_combo').setDisabled(!checked);									
			  }
		  }
	  });

	var alc_tosca_sanitario_numero_suscriptores= new  Ext.form.NumberField({	
		xtype: 'numberfield', 
		id: 'alc_tosca_sanitario_numero_suscriptores',
		name: 'alc_tosca_sanitario_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sanitario_numero_suscriptores',ayuda_alc_tosca_sanitario_numero_suscriptores);
			}
		}
	});

	var alc_tosca_sanitario_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		layout: 'column',
		columns:[ 35, 35],
		id: 'alc_tosca_sanitario_funciona', 							
		items: [{
					width: 35,
					items: [
						{ xtype: 'label', html: 'Si', cls:'x-form-check-group-label'},
						{ name: 'alc_tosca_sanitario_funciona', 
							id: 'alc_tosca_sanitario_funciona_si', 
							inputValue: 1
						}
						]
				},{
					width: 35,
					items: [
						{ xtype: 'label', html: 'No', cls:'x-form-check-group-label'},
						{ name: 'alc_tosca_sanitario_funciona',
							id: 'alc_tosca_sanitario_funciona_no',
							inputValue: 0
							}
						]
			}],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sanitario_funciona',ayuda_alc_tosca_sanitario_funciona);
			}
		}
	});

	var alc_tosca_sanitario_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		layout: 'column',
		columns:[ 35, 35],
		id: 'alc_tosca_sanitario_se_usa', 							
		items: [{
					width: 35,
					items: [
						{ xtype: 'label', html: 'Si', cls:'x-form-check-group-label'},
						{ name: 'alc_tosca_sanitario_se_usa', 
							id: 'alc_tosca_sanitario_se_usa_si', 
							inputValue: 1
						}
						]
				},{
					width: 35,
					items: [
						{ xtype: 'label', html: 'No', cls:'x-form-check-group-label'},
						{ name: 'alc_tosca_sanitario_se_usa',
							id: 'alc_tosca_sanitario_se_usa_no',
							inputValue: 0
							}
						]
		}],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sanitario_se_usa',ayuda_alc_tosca_sanitario_se_usa);
			}
		}
	});


	var  alc_tosca_estados_listado_datastore = new Ext.data.JsonStore({
		id: ' alc_tosca_estados_listado_datastore',
		url:'alcantarillado_tecnicooperativasolucioncolectivaalcantarillado/listarEstados',
		root: 'results',
		baseParams:{},
		totalProperty: 'total',
		fields:[
			{name: 'esg_id', type: 'string'},
			{name: 'esg_nombre', type: 'string'},
		],
		sortInfo:{field: 'esg_nombre', direction: 'ASC'}
	});
	alc_tosca_estados_listado_datastore.load();
		

	var alc_tosca_sanitario_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_sanitario_estado',
		name: 'alc_tosca_sanitario_estado',
		id: 'alc_tosca_sanitario_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_sanitario_estado_combo',ayuda_alc_tosca_sanitario_estado);
			}
		}
	});



	//todo pluvial
	var alc_tosca_pluvial = new Ext.form.Checkbox({
		xtype: 'checkbox', 
		fieldLabel: 'Pluvial',
		inputValue: 1,
		id: 'alc_tosca_pluvial',
		name: 'alc_tosca_pluvial',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_pluvial',ayuda_alc_tosca_pluvial);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tosca_pluvial_funciona').reset();
				Ext.getCmp('alc_tosca_pluvial_numero_suscriptores').reset();
				Ext.getCmp('alc_tosca_pluvial_se_usa').reset();
				Ext.getCmp('alc_tosca_pluvial_estado_combo').reset();
				}
				Ext.getCmp('alc_tosca_pluvial_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tosca_pluvial_numero_suscriptores').setDisabled(!checked);
				Ext.getCmp('alc_tosca_pluvial_se_usa').setDisabled(!checked);
				Ext.getCmp('alc_tosca_pluvial_estado_combo').setDisabled(!checked);									
					
			}
		}
	});

	var alc_tosca_pluvial_numero_suscriptores = new  Ext.form.NumberField({	
		xtype: 'numberfield', 
		id: 'alc_tosca_pluvial_numero_suscriptores',
		name: 'alc_tosca_pluvial_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_pluvial_numero_suscriptores',ayuda_alc_tosca_pluvial_numero_suscriptores);
			}
		}
	});

	var alc_tosca_pluvial_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_pluvial_funciona',
		items: [
			{ 	
				name: 'alc_tosca_pluvial_funciona',
				id: 'alc_tosca_pluvial_funciona_si',
				inputValue: 1
			},
			{ 
				name: 'alc_tosca_pluvial_funciona',
				id: 'alc_tosca_pluvial_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_pluvial_funciona',ayuda_alc_tosca_pluvial_funciona);
			}
		}
	});

	var alc_tosca_pluvial_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_pluvial_se_usa',
		items: [
			{ 	
				name: 'alc_tosca_pluvial_se_usa',
				id: 'alc_tosca_pluvial_se_usa_si',
				inputValue: 1
			},
			{ 
				name: 'alc_tosca_pluvial_se_usa',
				id: 'alc_tosca_pluvial_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_pluvial_se_usa',ayuda_alc_tosca_pluvial_se_usa);
			}
		}					
	});

	
	

	var alc_tosca_pluvial_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_pluvial_estado',
		name: 'alc_tosca_pluvial_estado',
		id: 'alc_tosca_pluvial_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_pluvial_estado_combo',ayuda_alc_tosca_pluvial_estado);
			}
		}
	});


	//todo combi convencional
	var alc_tosca_combi_convencional = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Combinado convencional',
		inputValue: 1,
		id: 'alc_tosca_combi_convencional',
		name: 'alc_tosca_combi_convencional',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_convencional',ayuda_alc_tosca_combi_convencional);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tosca_combi_convencional_funciona').reset();
				Ext.getCmp('alc_tosca_combi_convencional_numero_suscriptores').reset();
				Ext.getCmp('alc_tosca_combi_convencional_se_usa').reset();
				Ext.getCmp('alc_tosca_combi_convencional_estado_combo').reset();
				}
				Ext.getCmp('alc_tosca_combi_convencional_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tosca_combi_convencional_numero_suscriptores').setDisabled(!checked);
				Ext.getCmp('alc_tosca_combi_convencional_se_usa').setDisabled(!checked);
				Ext.getCmp('alc_tosca_combi_convencional_estado_combo').setDisabled(!checked);									
				
			}
		}
	});

	var alc_tosca_combi_convencional_numero_suscriptores = new  Ext.form.NumberField({	
		xtype: 'numberfield', 
		id: 'alc_tosca_combi_convencional_numero_suscriptores',
		name: 'alc_tosca_combi_convencional_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_convencional_numero_suscriptores',ayuda_alc_tosca_combi_convencional_numero_suscriptores);
			}
		}
	});



	var alc_tosca_combi_convencional_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_combi_convencional_funciona',
		items: [
			{ 	
				name: 'alc_tosca_combi_convencional_funciona',
				id: 'alc_tosca_combi_convencional_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_combi_convencional_funciona',
				id: 'alc_tosca_combi_convencional_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_convencional_funciona',ayuda_alc_tosca_combi_convencional_funciona);
			}
		}

	});

	var alc_tosca_combi_convencional_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_combi_convencional_se_usa',
		items: [
			{ 	
				name: 'alc_tosca_combi_convencional_se_usa',
				id: 'alc_tosca_combi_convencional_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_combi_convencional_se_usa',
				id: 'alc_tosca_combi_convencional_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_convencional_se_usa',ayuda_alc_tosca_combi_convencional_se_usa);
			}
		}
	});

	var alc_tosca_combi_convencional_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_combi_convencional_estado',
		name: 'alc_tosca_combi_convencional_estado',
		id: 'alc_tosca_combi_convencional_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_combi_convencional_estado_combo',ayuda_alc_tosca_combi_convencional_estado);
			}
		}
	});
	

	//todo combi no convencional
	var alc_tosca_combi_no_convencional = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Combinado no convencional',
		inputValue: 1,
		id: 'alc_tosca_combi_no_convencional',
		name: 'alc_tosca_combi_no_convencional',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_no_convencional',ayuda_alc_tosca_combi_no_convencional);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tosca_combi_no_convencional_funciona').reset();
				Ext.getCmp('alc_tosca_combi_no_convencional_numero_suscriptores').reset();
				Ext.getCmp('alc_tosca_combi_no_convencional_se_usa').reset();
				Ext.getCmp('alc_tosca_combi_no_convencional_estado_combo').reset();
				}
				Ext.getCmp('alc_tosca_combi_no_convencional_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tosca_combi_no_convencional_numero_suscriptores').setDisabled(!checked);
				Ext.getCmp('alc_tosca_combi_no_convencional_se_usa').setDisabled(!checked);
				Ext.getCmp('alc_tosca_combi_no_convencional_estado_combo').setDisabled(!checked);									
				
			}
		}
	});

	var alc_tosca_combi_no_convencional_numero_suscriptores = new  Ext.form.NumberField({	
		xtype: 'numberfield', 
		id: 'alc_tosca_combi_no_convencional_numero_suscriptores',
		name: 'alc_tosca_combi_no_convencional_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_no_convencional_numero_suscriptores',ayuda_alc_tosca_combi_no_convencional_numero_suscriptores);
			}
		}
	});

	var alc_tosca_combi_no_convencional_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_combi_no_convencional_funciona',
		items: [
			{ 	
				name: 'alc_tosca_combi_no_convencional_funciona',
				id: 'alc_tosca_combi_no_convencional_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_combi_no_convencional_funciona',
				id: 'alc_tosca_combi_no_convencional_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_no_convencional_funciona',ayuda_alc_tosca_combi_no_convencional_funciona);
			}
		}
	});


	var alc_tosca_combi_no_convencional_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_combi_no_convencional_se_usa',
		items: [
			{ 	
				name: 'alc_tosca_combi_no_convencional_se_usa',
				id: 'alc_tosca_combi_no_convencional_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_combi_no_convencional_se_usa',
				id: 'alc_tosca_combi_no_convencional_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_no_convencional_se_usa',ayuda_alc_tosca_combi_no_convencional_se_usa);
			}
		}
	});

	var alc_tosca_combi_no_convencional_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_combi_no_convencional_estado',
		name: 'alc_tosca_combi_no_convencional_estado',
		id: 'alc_tosca_combi_no_convencional_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_combi_no_convencional_estado_combo',ayuda_alc_tosca_combi_no_convencional_estado);
			}
		}
	});
/*
	var alc_tosca_combi_no_convencional_estado = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_combi_no_convencional_estado',
		items: [
			{ 	
				name: 'alc_tosca_combi_no_convencional_estado',
				id: 'alc_tosca_combi_no_convencional_estado_bueno',
				inputValue: 'bueno'
			},
			{ 	
				name: 'alc_tosca_combi_no_convencional_estado',
				id: 'alc_tosca_combi_no_convencional_estado_regular',
				inputValue: 'regular'
			},
			{ 	
				name: 'alc_tosca_combi_no_convencional_estado',
				id: 'alc_tosca_combi_no_convencional_estado_malo',
				inputValue: 'malo'
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_combi_no_convencional_estado_combo',ayuda_alc_tosca_combi_no_convencional_estado);
			}
		}
	});

*/
	//todo simplificado
	var alc_tosca_simplificado= new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Simplificado',
		inputValue: 1,
		id: 'alc_tosca_simplificado',
		name: 'alc_tosca_simplificado',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_simplificado',ayuda_alc_tosca_simplificado);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tosca_simplificado_funciona').reset();
				Ext.getCmp('alc_tosca_simplificado_numero_suscriptores').reset();
				Ext.getCmp('alc_tosca_simplificado_se_usa').reset();
				Ext.getCmp('alc_tosca_simplificado_estado_combo').reset();
				}
				Ext.getCmp('alc_tosca_simplificado_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tosca_simplificado_numero_suscriptores').setDisabled(!checked);
				Ext.getCmp('alc_tosca_simplificado_se_usa').setDisabled(!checked);
				Ext.getCmp('alc_tosca_simplificado_estado_combo').setDisabled(!checked);									
			
			}
		}
	});

	var alc_tosca_simplificado_numero_suscriptores = new  Ext.form.NumberField({
		xtype: 'numberfield', 
		id: 'alc_tosca_simplificado_numero_suscriptores',
		name: 'alc_tosca_simplificado_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_simplificado_numero_suscriptores',ayuda_alc_tosca_simplificado_numero_suscriptores);
			}
		}
	
	});

	var alc_tosca_simplificado_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_simplificado_funciona',
		items: [
			{ 	
				name: 'alc_tosca_simplificado_funciona',
				id: 'alc_tosca_simplificado_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_simplificado_funciona',
				id: 'alc_tosca_simplificado_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_simplificado_funciona',ayuda_alc_tosca_simplificado_funciona);
			}
		}
	});

	var alc_tosca_simplificado_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_simplificado_se_usa',
		items: [
			{ 	
				name: 'alc_tosca_simplificado_se_usa',
				id: 'alc_tosca_simplificado_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_simplificado_se_usa',
				id: 'alc_tosca_simplificado_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_simplificado_se_usa',ayuda_alc_tosca_simplificado_se_usa);
			}
		}
	});


	var alc_tosca_simplificado_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_simplificado_estado',
		name: 'alc_tosca_simplificado_estado',
		id: 'alc_tosca_simplificado_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_simplificado_estado_combo',ayuda_alc_tosca_simplificado_estado);
			}
		}
	});
/*
	var alc_tosca_simplificado_estado = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_simplificado_estado',
		items: [
			{ 	
				name: 'alc_tosca_simplificado_estado',
				id: 'alc_tosca_simplificado_estado_bueno',
				inputValue: 'bueno'
			},
			{ 	
				name: 'alc_tosca_simplificado_estado',
				id: 'alc_tosca_simplificado_estado_regular',
				inputValue: 'regular'
			},
			{ 	
				name: 'alc_tosca_simplificado_estado',
				id: 'alc_tosca_simplificado_estado_malo',
				inputValue: 'malo'
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_simplificado_estado_combo',ayuda_alc_tosca_simplificado_estado);
			}
		}
	});*/

	//todo sin arrastre
	var alc_tosca_sin_arrastre_solidos = new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Sin arrastre de s&oacute;lidos',
		inputValue: 1,
		id: 'alc_tosca_sin_arrastre_solidos',
		name: 'alc_tosca_sin_arrastre_solidos',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sin_arrastre_solidos',ayuda_alc_tosca_sin_arrastre_solidos);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_funciona').reset();
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_numero_suscriptores').reset();
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_se_usa').reset();
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_estado_combo').reset();
				}
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_numero_suscriptores').setDisabled(!checked);
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_se_usa').setDisabled(!checked);
				Ext.getCmp('alc_tosca_sin_arrastre_solidos_estado_combo').setDisabled(!checked);									
			
			}
		}
	});

	var alc_tosca_sin_arrastre_solidos_numero_suscriptores = new  Ext.form.NumberField({	
		xtype: 'numberfield', 
		id: 'alc_tosca_sin_arrastre_solidos_numero_suscriptores',
		name: 'alc_tosca_sin_arrastre_solidos_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sin_arrastre_solidos_numero_suscriptores',ayuda_alc_tosca_sin_arrastre_solidos_numero_suscriptores);
			}
		}
	});

	var alc_tosca_sin_arrastre_solidos_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_sin_arrastre_solidos_funciona',
		items: [
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_funciona',
				id: 'alc_tosca_sin_arrastre_solidos_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_funciona',
				id: 'alc_tosca_sin_arrastre_solidos_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sin_arrastre_solidos_funciona',ayuda_alc_tosca_sin_arrastre_solidos_funciona);
			}
		}
	});

	var alc_tosca_sin_arrastre_solidos_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_sin_arrastre_solidos_se_usa',
		items: [
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_se_usa',
				id: 'alc_tosca_sin_arrastre_solidos_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_se_usa',
				id: 'alc_tosca_sin_arrastre_solidos_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sin_arrastre_solidos_se_usa',ayuda_alc_tosca_sin_arrastre_solidos_se_usa);
			}
		}
	});

	var alc_tosca_sin_arrastre_solidos_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_sin_arrastre_solidos_estado',
		name: 'alc_tosca_sin_arrastre_solidos_estado',
		id: 'alc_tosca_sin_arrastre_solidos_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_sin_arrastre_solidos_estado_combo',ayuda_alc_tosca_sin_arrastre_solidos_estado);
			}
		}
	});
/*
	var alc_tosca_sin_arrastre_solidos_estado = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_sin_arrastre_solidos_estado',
		items: [
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_estado',
				id: 'alc_tosca_sin_arrastre_solidos_estado_bueno',
				inputValue: 'bueno'
			},
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_estado',
				id: 'alc_tosca_sin_arrastre_solidos_estado_regular',
				inputValue: 'regular'
			},
			{ 	
				name: 'alc_tosca_sin_arrastre_solidos_estado',
				id: 'alc_tosca_sin_arrastre_solidos_estado_malo',
				inputValue: 'malo'
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_sin_arrastre_solidos_estado_combo',ayuda_alc_tosca_sin_arrastre_solidos_estado);
			}
		}
	});*/

	//todo otro
	var alc_tosca_otro= new Ext.form.Checkbox({	
		xtype: 'checkbox', 
		fieldLabel: 'Otro',
		inputValue: 1,
		id: 'alc_tosca_otro',
		name: 'alc_tosca_otro',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_otro',ayuda_alc_tosca_otro);
			},
			'check':function(checkbox,checked){
				if(!checked){
				Ext.getCmp('alc_tosca_otro_funciona').reset();
				Ext.getCmp('alc_tosca_otro_numero_suscriptores').reset();
				Ext.getCmp('alc_tosca_otro_se_usa').reset();
				Ext.getCmp('alc_tosca_otro_estado_combo').reset();
				}
				Ext.getCmp('alc_tosca_otro_funciona').setDisabled(!checked);
				Ext.getCmp('alc_tosca_otro_numero_suscriptores').setDisabled(!checked);
				Ext.getCmp('alc_tosca_otro_se_usa').setDisabled(!checked);
				Ext.getCmp('alc_tosca_otro_estado_combo').setDisabled(!checked);									
			}
		}
	});

	var alc_tosca_otro_numero_suscriptores = new  Ext.form.NumberField({	
		xtype: 'numberfield', 
		id: 'alc_tosca_otro_numero_suscriptores',
		name: 'alc_tosca_otro_numero_suscriptores',
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_otro_numero_suscriptores',ayuda_alc_tosca_otro_numero_suscriptores);
			}
		}
	});

	var alc_tosca_otro_funciona = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_otro_funciona',
		items: [
			{ 	
				name: 'alc_tosca_otro_funciona',
				id: 'alc_tosca_otro_funciona_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_otro_funciona',
				id: 'alc_tosca_otro_funciona_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_otro_funciona',ayuda_alc_tosca_otro_funciona);
			}
		}
	});

	var alc_tosca_otro_se_usa = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_otro_se_usa',
		items: [
			{ 	
				name: 'alc_tosca_otro_se_usa',
				id: 'alc_tosca_otro_se_usa_si',
				inputValue: 1
			},
			{ 	
				name: 'alc_tosca_otro_se_usa',
				id: 'alc_tosca_otro_se_usa_no',
				inputValue: 0
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_otro_se_usa',ayuda_alc_tosca_otro_se_usa);
			}
		}
	});

	var alc_tosca_otro_estado = new Ext.form.ComboBox({
		hideLabel:true,
		xtype: 'combo',
		store:  alc_tosca_estados_listado_datastore,
		hiddenName :'alc_tosca_otro_estado',
		name: 'alc_tosca_otro_estado',
		id: 'alc_tosca_otro_estado_combo',
		mode:'local', 
		valueField:'esg_id',
		forceSelection:true,
		displayField: 'esg_nombre',
		triggerAction: 'all',
		emptyText: 'Selecione....',
		selectOnFocus: true,
		listeners:
		{
			render:function(){
				ayuda('alc_tosca_otro_estado_combo',ayuda_alc_tosca_otro_estado);
			}
		}
	});
/*
	var alc_tosca_otro_estado = new Ext.form.RadioGroup({
		xtype: 'radiogroup',
		id: 'alc_tosca_otro_estado',
		items: [
			{ 	
				name: 'alc_tosca_otro_estado',
				id: 'alc_tosca_otro_estado_bueno',
				inputValue: 'bueno'
			},
			{ 	
				name: 'alc_tosca_otro_estado',
				id: 'alc_tosca_otro_estado_regular',
				inputValue: 'regular'
			},
			{ 	
				name: 'alc_tosca_otro_estado',
				id: 'alc_tosca_otro_estado_malo',
				inputValue: 'malo'
			}
		],
		listeners:
		{
			'render':function(){
				ayuda('alc_tosca_otro_estado_combo',ayuda_alc_tosca_otro_estado);
			}
		}
	});*/


	var alc_tecnicooperativasolucioncolectivaalcantarillado_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[
			 alc_tosca_posee_alcantarillado_colectivo,       
			{xtype:'label',html:'<br/>'},
			{
			 xtype:'fieldset',
			 title:'Sistema de alcantarillado colectivo',
			 layout:'column',
			 id:'alc_alcantarilladocolectivo_fieldset',
			 defaults:{layout:'form',border: false},
			 items:
			 [
				{  
					width:210,
					bodyStyle: 'padding-top:23px;',
					id:'alc_solucioncolectiva_panelchecks',
					defaults:{labelStyle: 'width:176px;'+letra},
					items:
					[
						{xtype: 'label',html: 'Soluci&oacute;n colectiva', cls:'x-form-check-group-label'},
						alc_tosca_sanitario,
						alc_tosca_pluvial,
						alc_tosca_combi_convencional,
						alc_tosca_combi_no_convencional,
						alc_tosca_simplificado,
						alc_tosca_sin_arrastre_solidos,
						alc_tosca_otro
					]
				},{ //numero de suscritores
					bodyStyle: 'padding-top:23px;padding-right:5px;',
					defaults:{hideLabel: true,disabled:true,width:140,maxLength : 9},
					items:
					[ 	
						{ xtype: 'label', html: 'No. suscriptores', cls:'x-form-check-group-label',disabled:false},
						alc_tosca_sanitario_numero_suscriptores,
						alc_tosca_pluvial_numero_suscriptores,
						alc_tosca_combi_convencional_numero_suscriptores,	
						alc_tosca_combi_no_convencional_numero_suscriptores,
						alc_tosca_simplificado_numero_suscriptores,
						alc_tosca_sin_arrastre_solidos_numero_suscriptores,
						alc_tosca_otro_numero_suscriptores
					]
				},

				//fuciona/
				{
					width: 70,
					title: 'Funciona?',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true,columns:[ 35, 35]},
					items:
					[ 	
						alc_tosca_sanitario_funciona,
						alc_tosca_pluvial_funciona,
						alc_tosca_combi_convencional_funciona,
						alc_tosca_combi_no_convencional_funciona,
						alc_tosca_simplificado_funciona,
						alc_tosca_sin_arrastre_solidos_funciona,
						alc_tosca_otro_funciona
					]
				},
//se usa
				{
					width: 70,
					title: 'Se usa?',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true,columns:[ 35, 35]},
					items:
					[ 	
						alc_tosca_sanitario_se_usa,
						alc_tosca_pluvial_se_usa,
						alc_tosca_combi_convencional_se_usa,
						alc_tosca_combi_no_convencional_se_usa,
						alc_tosca_simplificado_se_usa,
						alc_tosca_sin_arrastre_solidos_se_usa,
						alc_tosca_otro_se_usa
					]
				},

//estado
				{ //numero de suscritores
					bodyStyle: 'padding-top:23px;padding-right:5px;',
					defaults:{hideLabel: true,disabled:true,width:100,maxLength : 9},
					items:
					[ 	
						{ xtype: 'label', html: 'Estado', cls:'x-form-check-group-label',disabled:false},
						alc_tosca_sanitario_estado,
						alc_tosca_pluvial_estado,
						alc_tosca_combi_convencional_estado,
						alc_tosca_combi_no_convencional_estado,
						alc_tosca_simplificado_estado,
						alc_tosca_sin_arrastre_solidos_estado,
						alc_tosca_otro_estado
					]
				}/*,

				{
					width: 180,
					title: '<html><center>Estado del sistema</center></html>',    
					defaults:{hideLabel: true, disabled:true,columns:[ 60, 60, 60]},
					items:
					[ 	
						alc_tosca_sanitario_estado,
						alc_tosca_pluvial_estado,
						alc_tosca_combi_convencional_estado,
						alc_tosca_combi_no_convencional_estado,
						alc_tosca_simplificado_estado,
						alc_tosca_sin_arrastre_solidos_estado,
						alc_tosca_otro_estado
					]
				}*/
				]
			}
		],
		renderTo: 'div_form_alc_tecnicooperativasolucioncolectivaalcantarillado',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_tecnicooperativa_tabpanel.setActiveTab(2);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucioncolectivaalcantarillado_subirdatos();
	
				alc_tecnicooperativa_tabpanel.setActiveTab(0);
				
			}
		}]
	});
	
	function alc_tecnicooperativasolucioncolectivaalcantarillado_subirdatos()
	{
		subirDatos(
			alc_tecnicooperativasolucioncolectivaalcantarillado_panel,
			'alcantarillado_tecnicooperativasolucioncolectivaalcantarillado/actualizarTecnicooperativasolucioncolectivaalcantarillado',
			{},
			function(){}
		);
		
	}
	
	alc_tecnicooperativasolucioncolectivaalcantarillado_datos_datastore.load({
	  callback: function() {
		var record = alc_tecnicooperativasolucioncolectivaalcantarillado_datos_datastore.getAt(0);
		alc_tecnicooperativasolucioncolectivaalcantarillado_panel.getForm().loadRecord(record);	
	  }
	});
