var acu_cag_control_ca_distribuida = new Ext.form.RadioGroup({
	labelStyle: 'width:340px;',
	width: 70,
	id: 'acu_cag_control_ca_distribuida',
	fieldLabel: '<html>&iquest;Se realizan controles de calidad del agua distribuida?</html>',
	columns: 2,
	items:
	[
		{
			boxLabel: 'Si', 
			name: 'acu_cag_control_ca_distribuida', 
			inputValue: 1, 
			checked: true
		},
		{ 
			boxLabel: 'No', 
			name: 'acu_cag_control_ca_distribuida',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_control_ca_distribuida', ayuda_acu_cag_control_ca_distribuida );
		}
	}
});

var acu_cag_visita_sspd = new Ext.form.RadioGroup({
	id: 'acu_cag_visita_sspd',
	width: 70,
	fieldLabel: '<html>&iquest;En el &uacute;ltimo a&ntilde;o ha recibido visitas de la Superintendencia de Servicios P&uacute;blicos Domiciliarios?</html>',
	columns: 2,
	items:
	[
		{
			boxLabel: 'Si',
			name: 'acu_cag_visita_sspd',
			inputValue: 1, 
			checked: true
		},
		{
			boxLabel: 'No',
			name: 'acu_cag_visita_sspd',
			inputValue: 0
		}
	],
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_visita_sspd', ayuda_acu_cag_visita_sspd );
		}
	}
});

var acu_cag_numero_visita_sspd = new Ext.form.NumberField({
	id: 'acu_cag_numero_visita_sspd',
	width: 100,
	labelStyle: 'width:300px; text-align:center;',
	emptyText: '0',
	name: 'acu_cag_numero_visita_sspd',
	fieldLabel: '<html>&iquest;Cu&aacute;ntas?</html>',
	listeners:
	{
		'render': function(){ 
			ayuda( 'acu_cag_numero_visita_sspd', ayuda_acu_cag_numero_visita_sspd );
		}
	}
});

var acu_calidad_calidadaguadistribuida_data = [
	['Turbiedad(UNT)','Mensual',0,0,0,0],
	['Color Aparente (UPC)','Mensual',0,0,0,0],
	['pH','Mensual',0,0,0,0],
	['Cloro residual libre(mg/l)','Mensual',0,0,0,0],
	['Coliformes totales UFC/100 ml','Bimestral',0,0,0,0],
	['Eschericha Coli en 100 ml','Bimestral',0,0,0,0],
	['Carbono Org&aacute;nico Total (mg/l)','Anual',0,0,0,0],
	['Floruros (mg/l)','Anual',0,0,0,0]
];

var acu_calidad_calidadaguadistribuida_datastore = new Ext.data.Store({
	id: 'acu_calidad_calidadaguadistribuida_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_calidadaguadistribuida/obtenerDatosAcuCalidadAguaDistribuida', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
				{name: 'acu_ppr_id', type: 'id'},
				{name: 'acu_ppr_nombre_parametro', type: 'string'},
				{name: 'acu_pfe_frecuencia_minima', type: 'string'},
				{name: 'acu_rep_resultado_punto_1', type: 'float'},
				{name: 'acu_rep_resultado_punto_2', type: 'float'},
				{name: 'acu_rep_resultado_punto_3', type: 'float'},
				{name: 'acu_pfe_frecuencia_real', type: 'string'}
	])
});

acu_calidad_calidadaguadistribuida_datastore.load();

//acu_calidad_calidadaguadistribuida_datastore.loadData(acu_calidad_calidadaguadistribuida_data);

var acu_calidad_calidadaguadistribuida_roweditor = new Ext.ux.grid.RowEditor({
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	commitChangesText: 'Debe terminar de editar los campos, o cancelar la edicion',
	errorText: 'Error',
	showTooltip: function(msg){},
	listeners:
	{
		'afteredit': function(){
			acu_calidadaguadistribuida_guardarpuntos();
		},
		'canceledit': function(){}
	}
});

var acu_pfe_frecuencia_data = [
   ['Mensual'],
   ['Bimensual'],
   ['Trimestral'],
   ['Semestral'],
   ['Anual']
];

var acu_pfe_frecuencia_minima_datastore = new Ext.data.SimpleStore({
    fields: ['acu_pfe_frecuencia_minima'],
    data : acu_pfe_frecuencia_data
});

var acu_pfe_frecuencia_minima_combobox = new Ext.form.ComboBox({
    store: acu_pfe_frecuencia_minima_datastore,
    displayField: 'acu_pfe_frecuencia_minima',
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var acu_pfe_frecuencia_real_datastore = new Ext.data.SimpleStore({
    fields: ['acu_pfe_frecuencia_real'],
    data : acu_pfe_frecuencia_data
});

var acu_pfe_frecuencia_real_combobox = new Ext.form.ComboBox({
    store: acu_pfe_frecuencia_real_datastore,
    displayField: 'acu_pfe_frecuencia_real',
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true
});

var acu_calidad_calidadaguadistribuida_gridpanel = new Ext.grid.GridPanel({
	store: acu_calidad_calidadaguadistribuida_datastore,
	//id: 'acu_calidad_calidadaguadistribuida_gridpanel',
	plugins: [acu_calidad_calidadaguadistribuida_roweditor],
	columnWidth: '1',
	autoWidth: true,
	height: 255,
	frame: true,
	stripeRows: true,
	autoExpandColumn: 'parametros',
	autoExpandMax: 700,
	clicksToEdit:1,
	title: 'Presente los resultados de los an&#225;lisis del agua que distribuye:',
	columns: [
		{
			header: "Id parametro", 
			hidden: true, 
			dataIndex: 'acu_ppr_id',
			readOnly: true
		},
		{
			id:'parametros',
			header: "Par&aacute;metros", 
			width: 200, 
			dataIndex: 'acu_ppr_nombre_parametro',
			editor: new Ext.form.TextField({ allowBlank: false})
		},
		{
			header: "Frecuencia M&iacute;nima", 
			width: 120, 
			dataIndex: 'acu_pfe_frecuencia_minima', 
			editor: acu_pfe_frecuencia_minima_combobox
		},
		{
			header: "Frecuencia Real", 
			width: 120, 
			dataIndex: 'acu_pfe_frecuencia_real', 
			editor: acu_pfe_frecuencia_real_combobox
		},
		{
			header: "Punto 1:", 
			width: 90, 
			dataIndex: 'acu_rep_resultado_punto_1', 
			editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000})
		},
		{
			header: "Punto 2:", 
			width: 90, 
			dataIndex: 'acu_rep_resultado_punto_2', 
			editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000})
		},
		{
			header: "Punto 3:", 
			width: 90, 
			dataIndex: 'acu_rep_resultado_punto_3', 
			editor: new Ext.form.NumberField({ allowBlank: false, maxValue: 100000})
		}
		
	],
	tbar: [
		{
			text: 'Agregar parametro',
			//iconCls: 'agregar',
			handler: acu_calidadaguadistribuida_agregarparametro
		},'-',
		{
			text: 'Borrar parametro',
			//iconCls: 'eliminar',
			handler: acu_calidadaguadistribuida_borrarparametro
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});

var form_acu_calidad_calidadaguadistribuida = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	layout: 'column',
	renderTo: 'div_form_acu_calidad_calidadaguadistribuida',
	height: largo_panel-15,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '1',
			labelWidth: 330,
			defaults: {labelStyle: 'font-size:1.0em;'},
			bodyStyle: Ext.isIE ? 'padding:5 5 5px 15px;' : 'padding: 3px 3px;',
			items: [ acu_cag_control_ca_distribuida ]
		},
		acu_calidad_calidadaguadistribuida_gridpanel,
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '.6',
			labelWidth: 350,
			defaults: {labelStyle: 'font-size:1.0em;'},
			items: [ acu_cag_visita_sspd ]
		},
		{
			xtype: 'fieldset',
			border: false,
		    columnWidth: '.3',
			defaultType: 'textfield',
			labelWidth: 90,
			defaults: {labelStyle: 'font-size:1.0em;'},
			items: [ acu_cag_numero_visita_sspd ]
		}
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							Ext.getCmp('tabp_acu_calidad').setActiveTab(0);
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							Ext.getCmp('panel_servicios').setActiveGroup(2);
							Ext.getCmp('alcantarillado').setActiveTab(0);
			}
	    }
	]
});

function acu_calidadaguadistribuida_guardarpuntos(){
	var rec = acu_calidad_calidadaguadistribuida_gridpanel.getSelectionModel().getSelected();
	subirDatos(
		form_acu_calidad_calidadaguadistribuida, 
		'acueducto_calidadaguadistribuida/actualizarCalidadAguaDistribuida',
		{
			acu_ppr_id: rec.get('acu_ppr_id'),
			acu_ppr_nombre_parametro: rec.get('acu_ppr_nombre_parametro'),
			acu_pfe_frecuencia_minima: rec.get('acu_pfe_frecuencia_minima'),
			acu_rep_resultado_punto_1: rec.get('acu_rep_resultado_punto_1'),
			acu_rep_resultado_punto_2: rec.get('acu_rep_resultado_punto_2'),
			acu_rep_resultado_punto_3: rec.get('acu_rep_resultado_punto_3'),
			acu_pfe_frecuencia_real: rec.get('acu_pfe_frecuencia_real')
		},
		function(){
		}
	);
}

function acu_calidadaguadistribuida_subirdatos(){
	subirDatos(
		form_acu_calidad_calidadaguadistribuida, 
		'acueducto_calidadaguadistribuida/actualizarCalidadAguaDistribuida',
		{
		},
		function(){
			Ext.getCmp('tabp_acu_calidad').setActiveTab(1);
		}
	);
}

function acu_calidadaguadistribuida_agregarparametro(){
	var row = new acu_calidad_calidadaguadistribuida_gridpanel.store.recordType({
		acu_ppr_id: '',
		acu_ppr_nombre_parametro: '',
		acu_pfe_frecuencia_minima: '',
		acu_rep_resultado_punto_1: 0,
		acu_rep_resultado_punto_2: 0,
		acu_rep_resultado_punto_3: 0,
		acu_pfe_frecuencia_real: ''
	});
	acu_calidad_calidadaguadistribuida_roweditor.stopEditing();
	acu_calidad_calidadaguadistribuida_gridpanel.store.insert(0, row);
}

function acu_calidadaguadistribuida_borrarparametro(){
	var rec = acu_calidad_calidadaguadistribuida_gridpanel.getSelectionModel().getSelected();
	
	if (!rec) {
		return false;
	}
	
	if(rec.get('acu_ppr_id') == ''){
		acu_calidad_calidadaguadistribuida_gridpanel.store.remove(rec);
	}
	else{
		subirDatos(
			form_acu_calidad_calidadaguadistribuida, 
			'acueducto_calidadaguadistribuida/eliminarParametro',
			{
				acu_ppr_id: rec.get('acu_ppr_id')
			},
			function(){
				acu_calidad_calidadaguadistribuida_datastore.load();
			}
		);
	}
}

