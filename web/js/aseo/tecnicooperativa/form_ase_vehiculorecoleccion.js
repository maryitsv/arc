
var ase_vehiculorecoleccion_datastore = new Ext.data.Store({
	id: 'ase_vehiculorecoleccion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'aseo_vehiculorecoleccion/obtenerDatosAseVehiculoRecoleccion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
				{name: 'ase_ver_id', type: 'int'},
				{name: 'ase_ver_tipo_vehiculo', type: 'string'},
				{name: 'ase_ver_tipo_traccion', type: 'string'},
				{name: 'ase_ver_capacidad', type: 'float'},
				{name: 'ase_ver_estado_vehiculo', type: 'string'},
				{name: 'ase_ver_tipo_combustible', type: 'string'}
   ])
});

ase_vehiculorecoleccion_datastore.load();

var ase_ver_estado_vehiculo_data = [
   ['Bueno'],
   ['Regular'],
   ['Malo']
];

var ase_ver_estado_vehiculo_datastore = new Ext.data.SimpleStore({
    fields: ['ase_ver_estado_vehiculo'],
    data : ase_ver_estado_vehiculo_data
});

var ase_ver_estado_vehiculo_combobox = new Ext.form.ComboBox({
    store: ase_ver_estado_vehiculo_datastore,
    displayField: 'ase_ver_estado_vehiculo',
    typeAhead: true,
	id: 'ase_ver_estado_vehiculo', 
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_ver_estado_vehiculo', ayuda_ase_ver_estado_vehiculo );
		}
	}
});	

var ase_ver_tipo_vehiculo_data = [
   ['Volqueta'],
   ['Veh&iacute;culo compactador'],
   ['Carretilla'],
   ['Barco, Lancha, Nave o Canoa'],
   ['Tractor'],
   ['Triciclo']
];

var ase_ver_tipo_vehiculo_datastore = new Ext.data.SimpleStore({
    fields: ['ase_ver_tipo_vehiculo'],
    data : ase_ver_tipo_vehiculo_data
});

var ase_ver_tipo_vehiculo_combobox = new Ext.form.ComboBox({
    store: ase_ver_tipo_vehiculo_datastore,
    displayField: 'ase_ver_tipo_vehiculo',
    typeAhead: true,
	id: 'ase_ver_tipo_vehiculo', 
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_ver_tipo_vehiculo', ayuda_ase_ver_tipo_vehiculo );
		}
	}
});	

var ase_ver_tipo_traccion_data = [
   ['Mec&aacute;nica'],
   ['Manual']
];

var ase_ver_tipo_traccion_datastore = new Ext.data.SimpleStore({
    fields: ['ase_ver_tipo_traccion'],
    data : ase_ver_tipo_traccion_data
});

var ase_ver_tipo_traccion_combobox = new Ext.form.ComboBox({
    store: ase_ver_tipo_traccion_datastore,
    displayField: 'ase_ver_tipo_traccion',
    typeAhead: true,
	id: 'ase_ver_tipo_traccion', 
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_ver_tipo_traccion', ayuda_ase_ver_tipo_traccion );
		}
	}
});

var ase_ver_tipo_combustible_data = [
   ['Diesel'],
   ['Gasolina'],
   ['Gas propano'],
   ['Tracci&oacute;n humana'],
   ['Tracci&oacute;n animal']
];

var ase_ver_tipo_combustible_datastore = new Ext.data.SimpleStore({
    fields: ['ase_ver_tipo_combustible'],
    data : ase_ver_tipo_combustible_data
});

var ase_ver_tipo_combustible_combobox = new Ext.form.ComboBox({
    store: ase_ver_tipo_combustible_datastore,
    displayField: 'ase_ver_tipo_combustible',
    typeAhead: true,
	id: 'ase_ver_tipo_combustible', 
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_ver_tipo_combustible', ayuda_ase_ver_tipo_combustible );
		}
	}
});

var ase_vehiculorecoleccion_roweditor = new Ext.ux.grid.RowEditor({
	id: 'ase_vehiculorecoleccion_roweditor',
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	showTooltip: function(msg){},
	listeners:
	{
		'afteredit': function(){
			ase_vehiculorecoleccion_subirdatos();
		},
		'canceledit': function(){}
	}
});

var ase_vehiculorecoleccion_gridpanel = new Ext.grid.GridPanel({
	store: ase_vehiculorecoleccion_datastore,
	title: 'Veh&iacute;culo de recolecci&oacute;n',
	frame: true,
	stripeRows: true,
	plugins: [ase_vehiculorecoleccion_roweditor],
	autoWidth: true,
	height: 320,
	columns:
	[
		{
			header: "id",
			width: 140,
			hidden: true,
			sortable: true, 
			dataIndex: 'ase_ver_id'
		},
		{
			header: 'Tipo de vehiculo',
			width: 170,
			dataIndex: 'ase_ver_tipo_vehiculo',
			editor: ase_ver_tipo_vehiculo_combobox
		},
		{
			header: 'Tipo de tracci&oacute;n', 
			width: 170,
			dataIndex: 'ase_ver_tipo_traccion',
			editor: ase_ver_tipo_traccion_combobox
		},
		{
			header: "Tipo de combustible", 
			width: 140, 
			dataIndex: 'ase_ver_tipo_combustible',
			editor: ase_ver_tipo_combustible_combobox
		},
		{
			header: 'Capacidad (Toneladas)', 
			width: 140, 
			sortable: true,
			maxLength: 7,
			minLength: 0,
			dataIndex: 'ase_ver_capacidad',
			editor: new Ext.form.NumberField({ 
				allowBlank: false,
				id: 'ase_ver_capacidad',
				maxLength: 7, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_ver_capacidad', ayuda_ase_ver_capacidad );
					}
				}
			})
		},
		{
			header: 'Estado del vehiculo', 
			width: 130,
			dataIndex: 'ase_ver_estado_vehiculo', 
			editor: ase_ver_estado_vehiculo_combobox
		}
	],
	tbar: [
		{
			text: 'Agregar',
			//iconCls: 'agregar',
			handler: ase_vehiculorecoleccion_agregarvehiculo
		}, '-', 
		{
			text: 'Borrar',
			//iconCls: 'eliminar',
			handler: ase_vehiculorecoleccion_eliminarvehiculo
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});

var form_ase_vehiculorecoleccion = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	//hidden: true,
	layout: 'column',
	renderTo: 'div_form_ase_vehiculorecoleccion',
	height: largo_panel-15,
	padding: 10,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		ase_vehiculorecoleccion_gridpanel
	],
	buttons:[
		{
			text: 'Atras', 
			iconCls: 'crear16', 
			handler: function(){
							
			}
		},
	    {
	    	text: 'Continuar', 
	    	iconCls: 'crear16', 
	    	handler: function(){
							//Ext.getCmp('acueducto').setActiveTab(2);
							ase_vehiculorecoleccion_subirdatos();
			}
	    }
	]
});

function ase_vehiculorecoleccion_subirdatos() {
	var rec = ase_vehiculorecoleccion_gridpanel.getSelectionModel().getSelected();
	subirDatos(
		form_ase_vehiculorecoleccion, 
		'aseo_vehiculorecoleccion/actualizarVehiculoRecoleccion',
		{
			ase_ver_id: rec.get('ase_ver_id'),
			ase_ver_tipo_vehiculo: rec.get('ase_ver_tipo_vehiculo'),
			ase_ver_tipo_traccion: rec.get('ase_ver_tipo_traccion'),
			ase_ver_capacidad: rec.get('ase_ver_capacidad'),
			ase_ver_estado_vehiculo: rec.get('ase_ver_estado_vehiculo'),
			ase_ver_tipo_combustible: rec.get('ase_ver_tipo_combustible')
		}
	);
}

function ase_vehiculorecoleccion_agregarvehiculo(btn, ev) {
	var row = new ase_vehiculorecoleccion_gridpanel.store.recordType({
		ase_ver_id: '',
		ase_ver_tipo_vehiculo: '',
		ase_ver_tipo_traccion: '',
		ase_ver_capacidad: '0',
		ase_ver_estado_vehiculo: '',
		ase_ver_tipo_combustible: ''
	});
	ase_vehiculorecoleccion_roweditor.stopEditing();
	ase_vehiculorecoleccion_gridpanel.store.insert(0, row);
}

function ase_vehiculorecoleccion_eliminarvehiculo() {
	var rec = ase_vehiculorecoleccion_gridpanel.getSelectionModel().getSelected();
	
	if (!rec) {
		return false;
	}
	
	if(rec.get('ase_ver_id') == ''){
		ase_vehiculorecoleccion_gridpanel.store.remove(rec);
	}
	else{
		subirDatos(
			form_ase_vehiculorecoleccion, 
			'aseo_vehiculorecoleccion/eliminarVehiculo',
			{
				ase_ver_id: rec.get('ase_ver_id')
			},
			function(){
				ase_vehiculorecoleccion_datastore.load();
			}
		);
	}
}