	/*tecnicooperativa solucioncolectiva alcantarillado
    tosca_ID              serial not null primary key,
    tosca_posee_alcantarillado_colectivo smallint,
    tosca_Sanitario_funciona smallint,
    tosca_Sanitario_numero_suscriptores int4,
    tosca_Sanitario_se_usa  smallint,
    tosca_Sanitario_estado  int4,  
    tosca_Pluvial_funciona smallint,
    tosca_Pluvial_numero_suscriptores int4,
    tosca_Pluvial_se_usa  smallint,
    tosca_Pluvial_estado  int4,
    tosca_Combi_convencional_funciona smallint,
    tosca_Combi_convencional_numero_suscriptores int4,
    tosca_Combi_convencional_se_usa  smallint,
    tosca_Combi_convencional_estado  int4,
    tosca_Combi_no_convencional_funciona smallint,
    tosca_Combi_no_convencional_numero_suscriptores int4,
    tosca_Combi_no_convencional_se_usa  smallint,
    tosca_Combi_no_convencional_estado  int4,
    tosca_Simplificado_funciona smallint,
    tosca_Simplificado_numero_suscriptores int4,
    tosca_Simplificado_se_usa  smallint,
    tosca_Simplificado_estado  int4,
    tosca_Sin_arrastre_solidos_funciona smallint,
    tosca_Sin_arrastre_solidos_numero_suscriptores int4,
    tosca_Sin_arrastre_solidos_se_usa  smallint,
    tosca_Sin_arrastre_solidos_estado  int4,

    tosca_Otro_cual VARCHAR(80),
    tosca_Otro_funciona smallint,
    tosca_Otro_numero_suscriptores int4,
    tosca_Otro_se_usa  smallint,
    tosca_Otro_estado  int4,
   
    tosca_actividades_a_ejecutar int4,	
 */

	var alc_tecnicooperativasolucioncolectivaalcantarillado_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[
			 {
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
			},       
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
							{	
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
										Ext.getCmp('alc_tosca_sanitario_estado').reset();
										}
										Ext.getCmp('alc_tosca_sanitario_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_sanitario_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_sanitario_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_sanitario_estado').setDisabled(!checked);									
									}
								}
							},
							{	
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
										Ext.getCmp('alc_tosca_pluvial_estado').reset();
										}
										Ext.getCmp('alc_tosca_pluvial_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_pluvial_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_pluvial_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_pluvial_estado').setDisabled(!checked);									
											
									}
								}
							},
							{	
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
										Ext.getCmp('alc_tosca_combi_convencional_estado').reset();
										}
										Ext.getCmp('alc_tosca_combi_convencional_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_combi_convencional_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_combi_convencional_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_combi_convencional_estado').setDisabled(!checked);									
										
									}
								}
							},
							{	
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
										Ext.getCmp('alc_tosca_combi_no_convencional_estado').reset();
										}
										Ext.getCmp('alc_tosca_combi_no_convencional_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_combi_no_convencional_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_combi_no_convencional_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_combi_no_convencional_estado').setDisabled(!checked);									
										
									}
								}
							},
							{	
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
										Ext.getCmp('alc_tosca_simplificado_estado').reset();
										}
										Ext.getCmp('alc_tosca_simplificado_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_simplificado_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_simplificado_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_simplificado_estado').setDisabled(!checked);									
									
									}
								}
							},
							{	
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
										Ext.getCmp('alc_tosca_sin_arrastre_solidos_estado').reset();
										}
										Ext.getCmp('alc_tosca_sin_arrastre_solidos_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_sin_arrastre_solidos_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_sin_arrastre_solidos_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_sin_arrastre_solidos_estado').setDisabled(!checked);									
									
									}
								}
							},
							{	
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
										Ext.getCmp('alc_tosca_otro_estado').reset();
										}
										Ext.getCmp('alc_tosca_otro_funciona').setDisabled(!checked);
										Ext.getCmp('alc_tosca_otro_numero_suscriptores').setDisabled(!checked);
										Ext.getCmp('alc_tosca_otro_se_usa').setDisabled(!checked);
										Ext.getCmp('alc_tosca_otro_estado').setDisabled(!checked);									
									}
								}
							}
				   ]
				},{
					bodyStyle: 'padding-top:23px;padding-right:5px;',
					defaults:{hideLabel: true,disabled:true,width:140,maxLength : 49},
					items:
					[ 	
						{ xtype: 'label', html: 'No. suscriptores', cls:'x-form-check-group-label',disabled:false},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_sanitario_numero_suscriptores',
							name: 'alc_tosca_sanitario_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_sanitario_numero_suscriptores',ayuda_alc_tosca_sanitario_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_pluvial_numero_suscriptores',
							name: 'alc_tosca_pluvial_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_pluvial_numero_suscriptores',ayuda_alc_tosca_pluvial_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_combi_convencional_numero_suscriptores',
							name: 'alc_tosca_combi_convencional_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_convencional_numero_suscriptores',ayuda_alc_tosca_combi_convencional_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_combi_no_convencional_numero_suscriptores',
							name: 'alc_tosca_combi_no_convencional_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_no_convencional_numero_suscriptores',ayuda_alc_tosca_combi_no_convencional_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_simplificado_numero_suscriptores',
							name: 'alc_tosca_simplificado_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_simplificado_numero_suscriptores',ayuda_alc_tosca_simplificado_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_sin_arrastre_solidos_numero_suscriptores',
							name: 'alc_tosca_sin_arrastre_solidos_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_sin_arrastre_solidos_numero_suscriptores',ayuda_alc_tosca_sin_arrastre_solidos_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_otro_numero_suscriptores',
							name: 'alc_tosca_otro_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_otro_numero_suscriptores',ayuda_alc_tosca_otro_numero_suscriptores);
								}
							}
						}
						
					]
				},

/************fuciona?****/
				{
					width: 70,
					title: 'Funciona?',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true,columns:[ 35, 35]},
					items:
					[ 	
						{
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
												inputValue: 'si'
											}
											]
									},{
										width: 35,
										items: [
											{ xtype: 'label', html: 'No', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_funciona',
												id: 'alc_tosca_sanitario_funciona_no',
												inputValue: 'no'
												}
											]
									}],
									listeners:
									{
										'render':function(){
											ayuda('alc_tosca_sanitario_funciona',ayuda_alc_tosca_sanitario_funciona);
										}
									}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_pluvial_funciona',
							items: [
								{ 	
									name: 'alc_tosca_pluvial_funciona',
									id: 'alc_tosca_pluvial_funciona_si',
									inputValue: 'si'
								},
								{ 
									name: 'alc_tosca_pluvial_funciona',
									id: 'alc_tosca_pluvial_funciona_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_pluvial_funciona',ayuda_alc_tosca_pluvial_funciona);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_combi_convencional_funciona',
							items: [
								{ 	
									name: 'alc_tosca_combi_convencional_funciona',
									id: 'alc_tosca_combi_convencional_funciona_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_combi_convencional_funciona',
									id: 'alc_tosca_combi_convencional_funciona_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_convencional_funciona',ayuda_alc_tosca_combi_convencional_funciona);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_combi_no_convencional_funciona',
							items: [
								{ 	
									name: 'alc_tosca_combi_no_convencional_funciona',
									id: 'alc_tosca_combi_no_convencional_funciona_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_combi_no_convencional_funciona',
									id: 'alc_tosca_combi_no_convencional_funciona_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_no_convencional_funciona',ayuda_alc_tosca_combi_no_convencional_funciona);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_simplificado_funciona',
							items: [
								{ 	
									name: 'alc_tosca_simplificado_funciona',
									id: 'alc_tosca_simplificado_funciona_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_simplificado_funciona',
									id: 'alc_tosca_simplificado_funciona_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_simplificado_funciona',ayuda_alc_tosca_simplificado_funciona);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_sin_arrastre_solidos_funciona',
							items: [
								{ 	
									name: 'alc_tosca_sin_arrastre_solidos_funciona',
									id: 'alc_tosca_sin_arrastre_solidos_funciona_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_sin_arrastre_solidos_funciona',
									id: 'alc_tosca_sin_arrastre_solidos_funciona_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_sin_arrastre_solidos_funciona',ayuda_alc_tosca_sin_arrastre_solidos_funciona);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_otro_funciona',
							items: [
								{ 	
									name: 'alc_tosca_otro_funciona',
									id: 'alc_tosca_otro_funciona_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_otro_funciona',
									id: 'alc_tosca_otro_funciona_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_otro_funciona',ayuda_alc_tosca_otro_funciona);
								}
							}
						}
					]
				},
/*************/
				{
					width: 70,
					title: 'Se usa?',    
					style: 'margin-right:5px;margin-left:5px;',
					defaults:{ hideLabel:true,disabled:true,columns:[ 35, 35]},
					items:
					[ 	
						{
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
												inputValue: 'si'
											}
											]
									},{
										width: 35,
										items: [
											{ xtype: 'label', html: 'No', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_se_usa',
												id: 'alc_tosca_sanitario_se_usa_no',
												inputValue: 'no'
												}
											]
									}],
									listeners:
									{
										'render':function(){
											ayuda('alc_tosca_sanitario_se_usa',ayuda_alc_tosca_sanitario_se_usa);
										}
									}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_pluvial_se_usa',
							items: [
								{ 	
									name: 'alc_tosca_pluvial_se_usa',
									id: 'alc_tosca_pluvial_se_usa_si',
									inputValue: 'si'
								},
								{ 
									name: 'alc_tosca_pluvial_se_usa',
									id: 'alc_tosca_pluvial_se_usa_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_pluvial_se_usa',ayuda_alc_tosca_pluvial_se_usa);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_combi_convencional_se_usa',
							items: [
								{ 	
									name: 'alc_tosca_combi_convencional_se_usa',
									id: 'alc_tosca_combi_convencional_se_usa_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_combi_convencional_se_usa',
									id: 'alc_tosca_combi_convencional_se_usa_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_convencional_se_usa',ayuda_alc_tosca_combi_convencional_se_usa);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_combi_no_convencional_se_usa',
							items: [
								{ 	
									name: 'alc_tosca_combi_no_convencional_se_usa',
									id: 'alc_tosca_combi_no_convencional_se_usa_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_combi_no_convencional_se_usa',
									id: 'alc_tosca_combi_no_convencional_se_usa_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_no_convencional_se_usa',ayuda_alc_tosca_combi_no_convencional_se_usa);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_simplificado_se_usa',
							items: [
								{ 	
									name: 'alc_tosca_simplificado_se_usa',
									id: 'alc_tosca_simplificado_se_usa_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_simplificado_se_usa',
									id: 'alc_tosca_simplificado_se_usa_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_simplificado_se_usa',ayuda_alc_tosca_simplificado_se_usa);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_sin_arrastre_solidos_se_usa',
							items: [
								{ 	
									name: 'alc_tosca_sin_arrastre_solidos_se_usa',
									id: 'alc_tosca_sin_arrastre_solidos_se_usa_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_sin_arrastre_solidos_se_usa',
									id: 'alc_tosca_sin_arrastre_solidos_se_usa_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_sin_arrastre_solidos_se_usa',ayuda_alc_tosca_sin_arrastre_solidos_se_usa);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_otro_se_usa',
							items: [
								{ 	
									name: 'alc_tosca_otro_se_usa',
									id: 'alc_tosca_otro_se_usa_si',
									inputValue: 'si'
								},
								{ 	
									name: 'alc_tosca_otro_se_usa',
									id: 'alc_tosca_otro_se_usa_no',
									inputValue: 'no'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_otro_se_usa',ayuda_alc_tosca_otro_se_usa);
								}
							}
						}
					]
				},

/******************/

				{
					width: 180,
					title: '<html><center>Estado del sistema</center></html>',    
					defaults:{hideLabel: true, disabled:true,columns:[ 60, 60, 60]},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							layout: 'column',
							columns:[ 60, 60, 60],
							id: 'alc_tosca_sanitario_estado', 							
							items: [{
										width: 60,
										items: [
											{ xtype: 'label', html: 'Bueno', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_estado', 
												id: 'alc_tosca_sanitario_estado_bueno', 
												inputValue: 'bueno'
											}
											]
									},{
										width: 60,
										items: [
											{ xtype: 'label', html: 'Regular', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_estado',
												id: 'alc_tosca_sanitario_estado_regular',
												inputValue: 'regular',
												}
											]
									},{
										width: 60,
										items: [
											{ xtype: 'label', html: 'Malo', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_estado', 
												id: 'alc_tosca_sanitario_estado_malo', 
												inputValue: 'malo'}
											]
									}],
									listeners:
									{
										'render':function(){
											ayuda('alc_tosca_sanitario_estado',ayuda_alc_tosca_sanitario_estado);
										}
									}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_pluvial_estado',
							items: [
								{ 	
									name: 'alc_tosca_pluvial_estado',
									id: 'alc_tosca_pluvial_estado_bueno',
									inputValue: 'bueno'
								},
								{ 
									name: 'alc_tosca_pluvial_estado',
									id: 'alc_tosca_pluvial_estado_regular',
									inputValue: 'regular'
								},
								{ 
									name: 'alc_tosca_pluvial_estado',
									id: 'alc_tosca_pluvial_estado_malo',
									inputValue: 'malo'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_pluvial_estado',ayuda_alc_tosca_pluvial_estado);
								}
							}
						},
						{
							xtype: 'radiogroup',
							id: 'alc_tosca_combi_convencional_estado',
							items: [
								{ 	
									name: 'alc_tosca_combi_convencional_estado',
									id: 'alc_tosca_combi_convencional_estado_bueno',
									inputValue: 'bueno'
								},
								{ 	
									name: 'alc_tosca_combi_convencional_estado',
									id: 'alc_tosca_combi_convencional_estado_regular',
									inputValue: 'regular'
								},
								{ 	
									name: 'alc_tosca_combi_convencional_estado',
									id: 'alc_tosca_combi_convencional_estado_malo',
									inputValue: 'malo'
								}
							],
							listeners:
							{
								'render':function(){
									ayuda('alc_tosca_combi_convencional_estado',ayuda_alc_tosca_combi_convencional_estado);
								}
							}
						},
						{
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
									ayuda('alc_tosca_combi_no_convencional_estado',ayuda_alc_tosca_combi_no_convencional_estado);
								}
							}
						},
						{
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
									ayuda('alc_tosca_simplificado_estado',ayuda_alc_tosca_simplificado_estado);
								}
							}
						},
						{
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
									ayuda('alc_tosca_sin_arrastre_solidos_estado',ayuda_alc_tosca_sin_arrastre_solidos_estado);
								}
							}
						},
						{
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
									ayuda('alc_tosca_otro_estado',ayuda_alc_tosca_otro_estado);
								}
							}
						}
					]
				}
				]
			}
		],
		renderTo: 'div_form_alc_solucioncolectiva',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_microcuenca_tabpanel.setActiveTab(2);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucioncolectivaalcantarillado_subirdatos();
	
				alc_tecnicooperativasolucioncolectivaalcantarillado_panel.hide();
				alc_calidadcantidadagua_actividadpecuaria_panel.show();
				
			}
		}]
	});
	
	function alc_tecnicooperativasolucioncolectivaalcantarillado_subirdatos()
	{
		subirDatos(
			alc_tecnicooperativasolucioncolectivaalcantarillado_panel,
			'alcantarillado_solucioncolectiva/actualizarSolucioncolectiva',
			{formulario:'solucionColectiva'},
			function(){}
		);
		
	}
	

/************Formulario 2*************/



	var alc_tecnicooperativasolucioncolectivaalcantarillado_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		items:
		[
			{
			//	width:220,
				xtype:'fieldset',
				bodyStyle: 'padding:5px;',
				title:'Actividades que ejecuta el Prestador',
				defaults:{labelStyle: 'width:180px;'+letra},
				items:
				[	
					{
						xtype: 'checkbox', 
						name: 'alc_tosca_actividad_recoleccion_transporte',
						id:   'alc_tosca_actividad_recoleccion_transporte',
						inputValue: 1,
						fieldLabel: '<html>Recolecci&oacute;n y trasnporte</html>',
						listeners:
						{
							'render':function(){
								ayuda('alc_tosca_actividad_recoleccion_transporte',ayuda_alc_tosca_actividad_recoleccion_transporte);	
							}
						}
					},
					{
						xtype: 'checkbox', 
						name: 'alc_tosca_actividad_tratamiento',
						id:   'alc_tosca_actividad_tratamiento',
						inputValue: 1,
						fieldLabel: '<html>Tratamiento</html>',
						listeners:
						{
							'render':function(){
								ayuda('alc_tosca_actividad_tratamiento',ayuda_alc_tosca_actividad_tratamiento);
							}
						}
					},
					{
						xtype: 'checkbox', 
						name: 'alc_tosca_actividad_operacion_matenimiento',
						id:   'alc_tosca_actividad_operacion_matenimiento',
						inputValue: 1,
						fieldLabel: '<html>Operaci&oacute;n y mantenimiento</html>',
						listeners:
						{
							'render':function(){
								ayuda('alc_tosca_actividad_operacion_matenimiento',ayuda_alc_tosca_actividad_operacion_matenimiento);
							}
						}
					},
					{
						xtype: 'checkbox', 
						name: 'alc_tosca_actividad_disposicion_final',
						id:   'alc_tosca_actividad_disposicion_final',
						inputValue: 1,
						fieldLabel: '<html>Disposici&oacute;n final</html>',
						listeners:
						{
							'render':function(){
								ayuda('alc_tosca_actividad_disposicion_final',ayuda_alc_tosca_actividad_disposicion_final);
							}
						}
					}
				]
			}
		],
		renderTo: 'div_form_alc_solucioncolectiva',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_microcuenca_tabpanel.setActiveTab(2);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucioncolectivaalcantarillado_subirdatos();
	
				alc_tecnicooperativasolucioncolectivaalcantarillado_panel.hide();
				alc_calidadcantidadagua_actividadpecuaria_panel.show();
				
			}
		}]
	});



/*solucion individual*/
	var alc_tecnicooperativasolucionindividualalcantarillado_panel = new Ext.FormPanel({
		//autoWidth: true,
		height:largo_panel-15,
		defaults: { xtype:'panel' ,layout:'form',columnWidth:'.5'},
		layout:'column',
		items:
		[
			{
			    	layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
						
							{	
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
							}
						]
					},
					{
						layout: 'form',
						width:300,
						border:false,
						defaults:{labelStyle: 'width:180px;'+letra,width:100},
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Letrina seca',
								maxLength: 9,
								id: 'alc_tosia_letrina_seca_numero_viviendas',
								name:'alc_tosia_letrina_seca_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_letrina_seca_numero_viviendas', ayuda_alc_tosia_letrina_seca_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Letrina con poso de absorción',
								maxLength: 9,
								id: 'alc_tosia_letrina_poso_numero_viviendas',
								name:'alc_tosia_letrina_poso_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_letrina_poso_numero_viviendas', ayuda_alc_tosia_letrina_poso_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Letrina ecologica',
								maxLength: 9,
								id: 'alc_tosia_letrina_ecologica_numero_viviendas',
								name:'alc_tosia_letrina_ecologica_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_letrina_ecologica_numero_viviendas', ayuda_alc_tosia_letrina_ecologica_numero_viviendas);
									}
								}
							}
						]
					}
					
				]
        		},
		//sanitario
			{
			    	layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							{	
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
							}
						]
					},
					{
						layout: 'form',
						width:300,
						defaults:{labelStyle: 'width:195px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a campo abierto',
								maxLength: 9,
								id: 'alc_tosia_tasa_sanitaria_campo_numero_viviendas',
								name:'alc_tosia_tasa_sanitaria_campo_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_tasa_sanitaria_campo_numero_viviendas', ayuda_alc_tosia_tasa_sanitaria_campo_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a tanque séptico',
								maxLength: 9,
								id: 'alc_tosia_tasa_sanitaria_tanque_numero_viviendas',
								name:'alc_tosia_tasa_sanitaria_tanque_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_tasa_sanitaria_tanque_numero_viviendas', ayuda_alc_tosia_tasa_sanitaria_tanque_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a alcantarillado',
								maxLength: 9,
								id: 'alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas',
								name:'alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas', ayuda_alc_tosia_tasa_sanitaria_alcantarilla_numero_viviendas);
									}
								}
							}
						]
					}
					
				]
        		},
			//inodoro de bajo consumo
			{
			    	layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							{	
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
							}
						]
					},
					{
						layout: 'form',
						width:300,
						defaults:{labelStyle: 'width:195px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a campo abierto',
								maxLength: 9,
								id: 'alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas',
								name:'alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas', ayuda_alc_tosia_inodoro_bajo_consumo_campo_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a tanque séptico',
								maxLength: 9,
								id: 'alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas',
								name:'alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas', ayuda_alc_tosia_inodoro_bajo_consumo_tanque_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a alcantarillado',
								maxLength: 9,
								id: 'alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas',
								name:'alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas', ayuda_alc_tosia_inodoro_bajo_consumo_alcantarilla_numero_viviendas);
									}
								}
							}
						]
					}
					
				]
        		},
			//inodoro lato consumo
			{
			    	layout: 'column',
				items: 
				[	
					{
						layout: 'form',
						border:false,
						items: 
						[
							{	
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
							}
						]
					},
					{
						layout: 'form',
						width:300,
						defaults:{labelStyle: 'width:195px;'+letra,width:100},
						border:false,
						items: 
						[
							{ xtype: 'label', fieldLabel:'<b></b>',labelSeparator: '',html: '<b>No. viviendas</b>',disabled:false},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a campo abierto',
								maxLength: 9,
								id: 'alc_tosia_inodoro_alto_consumo_campo_numero_viviendas',
								name:'alc_tosia_inodoro_alto_consumo_campo_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_inodoro_alto_consumo_campo_numero_viviendas', ayuda_alc_tosia_inodoro_alto_consumo_campo_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a tanque séptico',
								maxLength: 9,
								id: 'alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas',
								name:'alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas', ayuda_alc_tosia_inodoro_alto_consumo_tanque_numero_viviendas);
									}
								}
							},
							{	
								xtype: 'numberfield', 
								fieldLabel: 'Con descargue a alcantarillado',
								maxLength: 9,
								id: 'alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas',
								name:'alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas',
								listeners:
								{
									'render':function(){
										ayuda('alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas', ayuda_alc_tosia_inodoro_alto_consumo_alcantarilla_numero_viviendas);
									}
								}
							}
						]
					}
					
				]
        		}
    		],
		renderTo: 'div_form_alc_solucioncolectiva',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_microcuenca_tabpanel.setActiveTab(2);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativasolucioncolectivaalcantarillado_subirdatos();
	
				alc_tecnicooperativasolucioncolectivaalcantarillado_panel.hide();
				alc_calidadcantidadagua_actividadpecuaria_panel.show();
				
			}
		}]
	});
