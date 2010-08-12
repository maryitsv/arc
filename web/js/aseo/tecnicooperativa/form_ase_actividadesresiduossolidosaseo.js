

var ase_ars_recole_trans_residuos_no_peligrosos = new Ext.form.Checkbox({
	id: 'ase_ars_recole_trans_residuos_no_peligrosos',
	name: 'ase_ars_recole_trans_residuos_no_peligrosos',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Recolecci&oacute;n y Transporte de residuos no peligrosos', 
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_recole_trans_residuos_no_peligrosos', ayuda_ase_ars_recole_trans_residuos_no_peligrosos );
     	}              
	}
});

var ase_ars_tratamiento_residuos_no_peligrosos = new Ext.form.Checkbox({
	id: 'ase_ars_tratamiento_residuos_no_peligrosos',
	name: 'ase_ars_tratamiento_residuos_no_peligrosos',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Tratamiento de residuos no peligrosos',
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_tratamiento_residuos_no_peligrosos', ayuda_ase_ars_tratamiento_residuos_no_peligrosos );
     	}              
	}
});

var ase_ars_aprovechamiento_residuos = new Ext.form.Checkbox({
	id: 'ase_ars_aprovechamiento_residuos',
	name: 'ase_ars_aprovechamiento_residuos',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Aprovechamiento de residuos', 
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_aprovechamiento_residuos', ayuda_ase_ars_aprovechamiento_residuos );
     	}              
	}
});

var ase_ars_disposicion_final = new Ext.form.Checkbox({
	id: 'ase_ars_disposicion_final',
	name: 'ase_ars_disposicion_final',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Disposici&oacute;n final',
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_disposicion_final', ayuda_ase_ars_disposicion_final );
     	}              
	}
});

var ase_ars_barrido_limpieza_area_publica = new Ext.form.Checkbox({
	id: 'ase_ars_barrido_limpieza_area_publica',
	name: 'ase_ars_barrido_limpieza_area_publica',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Barrido y limpieza de &aacute;reas p&uacute;blicas',
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_barrido_limpieza_area_publica', ayuda_ase_ars_barrido_limpieza_area_publica );
     	}              
	}
});

var ase_ars_recole_trasn_residuos_hospitalarios_no_peligrosos = new Ext.form.Checkbox({
	id: 'ase_ars_recole_trasn_residuos_hospitalarios_no_peligrosos',
	name: 'ase_ars_recole_trasn_residuos_hospitalarios_no_peligrosos',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Recolecci&oacute;n y transporte residuos hospitalarios no peligrosos',
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_recole_trasn_residuos_hospitalarios_no_peligrosos', ayuda_ase_ars_recole_trasn_residuos_hospitalarios_no_peligrosos );
     	}              
	}
});

var ase_ars_recole_trasn_residuos_hospitalarios_peligrosos = new Ext.form.Checkbox({
	id: 'ase_ars_recole_trasn_residuos_hospitalarios_peligrosos',
	name: 'ase_ars_recole_trasn_residuos_hospitalarios_peligrosos',
	inputValue: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;', 
	boxLabel:'Recolecci&oacute;n y transporte residuos hospitalarios peligrosos',
	listeners:
	{
		'render': function(){ 
					ayuda( 'ase_ars_recole_trasn_residuos_hospitalarios_peligrosos', ayuda_ase_ars_recole_trasn_residuos_hospitalarios_peligrosos );
     	}              
	}
});
/*
var ase_ars_actividades_checkboxgroup = new Ext.form.CheckboxGroup({
	hideLabel: true,
	//layout: 'column',
	columns: 1,
	style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;',
	anchor: '100%',
	items: [
		
	]
});*/

var form_ase_actividadesresiduossolidosaseo = new Ext.FormPanel({
	//hidden: true,
	autoWidth: true,
	border: false,
	//frame: true, 
	layout: 'column',
	height: largo_panel-15,
	renderTo: 'div_form_ase_actividadesresiduossolidosaseo',
	padding: 10,
	//style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
	   {
			xtype: 'fieldset',
			title: 'Actividades dentro del Sistema de Gesti&oacute;n de Residuos S&oacute;lidos',
		    columnWidth: '1',
			id: 'form_ase_actividadesresiduossolidosaseo',
			labelWidth: 310,
			defaults: {labelStyle: 'font-size:1.0em;', hideLabel: true},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 10px 10px;',
			items: [ase_ars_recole_trans_residuos_no_peligrosos, 
					ase_ars_tratamiento_residuos_no_peligrosos, 
					ase_ars_aprovechamiento_residuos,
					ase_ars_disposicion_final, 
					ase_ars_barrido_limpieza_area_publica,
					ase_ars_recole_trasn_residuos_hospitalarios_no_peligrosos,
					ase_ars_recole_trasn_residuos_hospitalarios_peligrosos
			]
	   }
	],
	buttons:[
		{
			text: 'Atras', 
			//iconCls: 'crear16', 
			handler: function(){
							
			}
		},
	    {
	    	text: 'Continuar', 
	    	//iconCls: 'crear16', 
	    	handler: function(){
							ase_actividadesresiduossolidosaseo_subirdatos();
			}
	    }
	]
});


  
	
