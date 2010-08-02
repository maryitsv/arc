var acu_cag_control_ca_fuente = new Ext.form.RadioGroup({
	id: 'acu_cag_control_ca_fuente',
	width: 70,
	fieldLabel: '<html>&iquest;Se realizan controles de la calidad del agua en la fuente?</html>',
	columns: 2,
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'acu_cag_control_ca_fuente', 
			inputValue: 1, 
			checked: true,
		},
		{ 
			boxLabel: 'No', 
			name: 'acu_cag_control_ca_fuente',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_control_ca_fuente', ayuda_acu_cag_control_ca_fuente );
		}
	}
});

var acu_cag_mapa_riesgo = new Ext.form.RadioGroup({
	id: 'acu_cag_mapa_riesgo',
	width: 70,
	fieldLabel: '<html>&iquest;Se ha elaborado el mapa de riesgo de la fuente?</html>',
	columns: 2,
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'acu_cag_mapa_riesgo', 
			inputValue: 1, 
			checked: true
		},
		{
			boxLabel: 'No', 
			name: 'acu_cag_mapa_riesgo', 
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_mapa_riesgo', ayuda_acu_cag_mapa_riesgo );
		}
	}
});

var acu_calidad_calidadaguafuente_data = [
	['DBO<sub>5</sub>(mg/l)',0,0],
	['Coliformes Totales UFC/100 ml',0,0],
	['Ox&iacute;geno disuelto (mg/l)',0,0],
	['pH',0,0],
	['Turbiedad (UNT)',0,0],
	['Color verdadero (UPC)',0,0],
	['Sabor y Olor',0,0],
	['Cloruros (mg-Cl)',0,0],
	['Floruros (mg-F)',0,0]
];


var acu_calidad_calidadaguafuente_datastore = new Ext.data.Store({
	id: 'acu_calidad_calidadaguafuente_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_calidadaguafuente/obtenerDatosAcuCalidadAguaFuente', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
			  {name: 'parametros', type: 'string'},
			  {name: 'valores', type: 'float'},
			  {name: 'frecuencia', type: 'float'}
	])
});

//acu_calidad_calidadaguafuente_datastore.loadData(acu_calidad_calidadaguafuente_data);

var acu_calidad_calidadaguafuente_roweditor = new Ext.ux.grid.RowEditor({
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	commitChangesText: 'Debe terminar de editar los campos, o cancelar la edicion',
	errorText: 'Error'
});

var acu_calidad_calidadaguafuente_gridpanel = new Ext.grid.GridPanel({
	store: acu_calidad_calidadaguafuente_datastore,
	//id: 'acu_calidad_calidadaguafuente_gridpanel',
	plugins: [acu_calidad_calidadaguafuente_roweditor],
	columnWidth: '1',
	height : 255,
	frame: true,
	stripeRows: true,
	autoExpandColumn: 'parametros',
	clicksToEdit:1,
	title:'Calidad de Agua: Presente los resultados y la frecuencia de los an&aacute;lisis de agua que realiza en la fuente',
	columns: [
		{id:'parametros', header: "Par&aacute;metros", width: 160, sortable: true, dataIndex: 'parametros'},
		{header: "Valores", width: 75, sortable: true, dataIndex: 'valores', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})},
		{header: "Frecuencia", width: 75, sortable: true, dataIndex: 'frecuencia', editor: new Ext.form.NumberField({ allowBlank: false, allowNegative: false, maxValue: 100000})}
	]
});

var acu_cag_laboratorio_propio = new Ext.form.RadioGroup({
	id: 'acu_cag_laboratorio_propio',
	labelStyle: 'width:340px;',
	width: 70,
	fieldLabel: '<html>&iquest;El acueducto cuenta con equipo de laboratorio propio?</html>',
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'acu_cag_laboratorio_propio', 
			inputValue: 1,
			checked: true
		},
		{
			boxLabel: 'No',
			name: 'acu_cag_laboratorio_propio',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_laboratorio_propio', ayuda_acu_cag_laboratorio_propio );
		}
	}
});

var form_acu_calidad_calidadaguafuente = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_acu_calidad_calidadaguafuente',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '.52',
			height: 60,
			labelWidth: 325,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_cag_control_ca_fuente ]
		},
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '.48',
			height: 60,
			labelWidth: 290,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_cag_mapa_riesgo ]
		},
		acu_calidad_calidadaguafuente_gridpanel,
		{
			xtype: 'fieldset',
			border: false,
			//height: 310,
		    columnWidth: '1',
			defaultType: 'textfield',
			labelWidth: 330,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_cag_laboratorio_propio ]
		}
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('acueducto').setActiveTab(4);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							acu_trabajadoresyvinculacion_subirdatos();
							//Ext.getCmp('tabp_acu_calidad').setActiveTab(1);
			}
	    }
	]
});

acu_calidad_calidadaguafuente_datastore.load();

function acu_trabajadoresyvinculacion_subirdatos(){
	subirDatos(
		form_acu_calidad_calidadaguafuente, 
		'acueducto_calidadaguafuente/actualizarCalidadAguaFuente',
		{
			acu_cag_db05_valor: acu_calidad_calidadaguafuente_datastore.getAt(0).get('valores'),
			acu_cag_db05_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(0).get('frecuencia'), 
			acu_cag_coliformes_valor: acu_calidad_calidadaguafuente_datastore.getAt(1).get('valores'),
			acu_cag_coliformes_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(1).get('frecuencia'),
			acu_cag_oxigeno_disuelto_valor: acu_calidad_calidadaguafuente_datastore.getAt(2).get('valores'),
			acu_cag_oxigeno_disuelto_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(2).get('frecuencia'),
			acu_cag_ph_valor: acu_calidad_calidadaguafuente_datastore.getAt(3).get('valores'),
			acu_cag_ph_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(3).get('frecuencia'),
			acu_cag_turbiedad_valor: acu_calidad_calidadaguafuente_datastore.getAt(4).get('valores'),
			acu_cag_turbiedad_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(4).get('frecuencia'),
			acu_cag_color_verdadero_valor: acu_calidad_calidadaguafuente_datastore.getAt(5).get('valores'),
			acu_cag_color_verdadero_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(5).get('frecuencia'),
			acu_cag_sabor_olor_valor: acu_calidad_calidadaguafuente_datastore.getAt(6).get('valores'),
			acu_cag_sabor_olor_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(6).get('frecuencia'),
			acu_cag_cloruros_valor: acu_calidad_calidadaguafuente_datastore.getAt(7).get('valores'),
			acu_cag_cloruros_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(7).get('frecuencia'),
			acu_cag_fluoruros_valor: acu_calidad_calidadaguafuente_datastore.getAt(8).get('valores'),
			acu_cag_fluoruros_frecuencia: acu_calidad_calidadaguafuente_datastore.getAt(8).get('frecuencia'),
		},
		function(){
			//Ext.getCmp('tabp_acu_calidad').setActiveTab(1);
		}
	);
}

