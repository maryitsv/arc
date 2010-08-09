	/*
create table tecnicooperativa solucioncolectiva alcantarillado
(
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
 
	 tosca_top_id int4,
     tosca_Simplificado_funciona smallint,
	 tosca_Combi_no_convencional_funciona smallint,
   tosca_Otro_cual VARCHAR(80),
   tosca_Sin_arrastre_solidos_funciona smallint,
   
    tosca_Sanitario_numero_suscriptores int4,
    tosca_Pluvial_numero_suscriptores int4,
    tosca_Combi_convencional_numero_suscriptores int4,
	tosca_Combi_no_convencional_numero_suscriptores int4,
	tosca_Simplificado_numero_suscriptores int4,
	tosca_Sin_arrastre_solidos_numero_suscriptores int4,
	tosca_Otro_numero_suscriptores int4,
	
 */

	var alc_tecnicooperativasolucioncolectivaalcantarillado_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		defaults: { xtype:'panel' ,layout:'form'},
		items:
		[
			{
			 xtype:'fieldset',
			 title:'Sistema de alcantarillado colectivo',
			 layout:'column',
			 defaults:{layout:'form',border: false},
			 items:
			 [
				{  
					//width:180,
					bodyStyle: 'padding-top:23px;',
					id:'asdasads',
					defaults:{labelStyle: 'width:150px;'+letra,width:80},
					items:
					[
							{xtype: 'label',text: 'Tipo cultivo', cls:'x-form-check-group-label'},
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
					defaults:{hideLabel: true,disabled:true,width:150,maxLength : 49},
					items:
					[ 	
						{ xtype: 'label', html: 'No. suscriptores', cls:'x-form-check-group-label',disabled:false},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_sanitario_numero_suscriptores',
							name: 'acu_tosca_sanitario_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('acu_tosca_sanitario_numero_suscriptores',ayuda_alc_tosca_sanitario_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_pluvial_numero_suscriptores',
							name: 'acu_tosca_pluvial_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('acu_tosca_pluvial_numero_suscriptores',ayuda_alc_tosca_pluvial_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_combi_convencional_numero_suscriptores',
							name: 'acu_tosca_combi_convencional_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('acu_tosca_combi_convencional_numero_suscriptores',ayuda_alc_tosca_combi_convencional_numero_suscriptores);
								}
							}
						},
						{	
							xtype: 'numberfield', 
							id: 'alc_tosca_combi_no_convencional_numero_suscriptores',
							name: 'acu_tosca_combi_no_convencional_numero_suscriptores',
							listeners:
							{
								'render':function(){
									ayuda('acu_tosca_combi_no_convencional_numero_suscriptores',ayuda_alc_tosca_combi_no_convencional_numero_suscriptores);
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
				},{
					width: 225,
					title: '<html><center>Estado del sistema</center></html>',    
					defaults:{hideLabel: true, disabled:true,columns:[ 73, 73, 73]},
					items:
					[ 	
						{
							xtype: 'radiogroup',
							layout: 'column',
							columns:[ 73, 73, 73],
							id: 'alc_tosca_sanitario_estado', 							
							items: [{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Bueno', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_estado', 
												id: 'alc_tosca_sanitario_estado_bueno', 
												inputValue: 'bueno'
											}
											]
									},{
										width: 73,
										items: [
											{ xtype: 'label', html: 'Regular', cls:'x-form-check-group-label'},
											{ name: 'alc_tosca_sanitario_estado',
												id: 'alc_tosca_sanitario_estado_regular',
												inputValue: 'regular',
												}
											]
									},{
										width: 73,
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
		//alert("asd");
		var url_calidadcantidadagua = 'acueducto_calidadcantidadagua/actualizarCalidadcantidadagua';
		subirDatos(
			alc_tecnicooperativasolucioncolectivaalcantarillado_panel,
			url_calidadcantidadagua,
			{formulario:'actividadAgricola'},
			function(){}
		);
		
	}
	

