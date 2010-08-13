
var ase_comunidadserviciorecoleccion_datastore = new Ext.data.Store({
	id: 'ase_comunidadserviciorecoleccion_datastore',
	proxy: new Ext.data.HttpProxy({
			url: 'acueducto_comunidadserviciorecoleccion/obtenerDatosAseComunidadServicioRecoleccion', 
			method: 'POST'
	}),
	baseParams:{}, 
	reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			},[
				{name: 'ase_csr_id', type: 'int'},
				{name: 'ase_csr_nombre_comunidad', type: 'string'},
				{name: 'ase_csr_numero_viviendas_totales', type: 'int'},
				{name: 'ase_csr_numero_viviendas_con_servicio', type: 'int'},
				{name: 'ase_csr_numero_suscriptores', type: 'int'},
				{name: 'ase_csr_cantidad_prom_residuos_mes', type: 'float'},
				{name: 'ase_csr_fecha_pesaje', type: 'date'}
   ])
});

ase_comunidadserviciorecoleccion_datastore.load();
//ase_tra_trabajadores_datastore.loadData(ase_tra_trabajadores_data);

var ase_comunidadserviciorecoleccion_data = [
   ['Contrato a t&eacute;rmino indefinido'],
   ['Contrato a t&eacute;rmino fijo'],
   ['Oden de prestaci&oacute;n de servicios'],
   ['Sin contrato, con bonificaci&oacute;n']
];


var ase_comunidadserviciorecoleccion_roweditor = new Ext.ux.grid.RowEditor({
	id: 'ase_comunidadserviciorecoleccion_roweditor',
	saveText: 'Guardar',
	cancelText: 'Cancelar',
	showTooltip: function(msg){},
	listeners:
	{
		'afteredit': function(){
			ase_comunidadserviciorecoleccion_subirdatos();
		},
		'canceledit': function(){}
	}
});

var ase_comunidadserviciorecoleccion_gridpanel = new Ext.grid.GridPanel({
	store: ase_comunidadserviciorecoleccion_datastore,
	title: 'Comunidades con servicio de recolecci&oacute;n ',
	frame: true,
	stripeRows: true,
	plugins: [ase_comunidadserviciorecoleccion_roweditor],
	autoWidth: true,
	height: 276,
	columns:
	[
		{
			header: "id",
			width: 140,
			hidden: true,
			sortable: true, 
			dataIndex: 'ase_csr_id'//,
			//editor: new Ext.form.TextField()
		},
		{
			header: 'Nombre de la <br/>comunidad',
			width: 170,
			dataIndex: 'ase_csr_nombre_comunidad',
			editor: new Ext.form.TextField({
				id: 'ase_csr_nombre_comunidad',
				allowBlank: false, 
				maxLength: 30, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_csr_nombre_comunidad', ayuda_ase_csr_nombre_comunidad );
					}
				}
			}) 
		},
		{
			header: 'N&uacute;mero de <br/>viviendas totales', 
			width: 170,
			dataIndex: 'ase_csr_numero_viviendas_totales',
			editor: new Ext.form.NumberField({
				id: 'ase_csr_numero_viviendas_totales',
				allowBlank: false, 
				maxLength: 250, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_csr_numero_viviendas_totales', ayuda_ase_csr_numero_viviendas_totales );
					}
				}
			}) 
		},
		{
			header: "N&uacute;mero de <br/>viviendas con servicio", 
			width: 140, 
			sortable: true,
			maxLength: 100,
			minLength: 0,
			dataIndex: 'ase_csr_numero_viviendas_con_servicio',
			editor: new Ext.form.NumberField({ 
				allowBlank: false,
				id: 'ase_csr_numero_viviendas_con_servicio',
				maxLength: 7, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_csr_numero_viviendas_con_servicio', ayuda_ase_csr_numero_viviendas_con_servicio );
					}
				}
			})
		},
		{
			header: 'N&uacute;mero de <br/>suscriptores', 
			width: 140, 
			sortable: true,
			maxLength: 7,
			minLength: 0,
			dataIndex: 'ase_csr_numero_suscriptores',
			editor: new Ext.form.NumberField({ 
				allowBlank: false,
				id: 'ase_csr_numero_suscriptores',
				maxLength: 7, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_csr_numero_suscriptores', ayuda_ase_csr_numero_suscriptores );
					}
				}
			})
		},
		{
			header: 'Cantidad promedio de residuos <br/>recolectados por mes', 
			width: 130,
			dataIndex: 'ase_csr_cantidad_prom_residuos_mes', 
			editor: new Ext.form.NumberField({ 
				allowBlank: false,
				id: 'ase_csr_cantidad_prom_residuos_mes',
				allowNegative: false, 
				maxLength: 17, 
				minLength: 0,
				listeners: {
					'render': function(){ 
								ayuda( 'ase_csr_cantidad_prom_residuos_mes', ayuda_ase_csr_cantidad_prom_residuos_mes );
					}
				}
			})
		},
		{
			header: 'Fecha del pesaje <br/>de residuos', 
			width: 130,
			dataIndex: 'ase_csr_fecha_pesaje', 
			editor: new Ext.form.DateField({ 
				allowBlank: false,
				id: 'ase_csr_fecha_pesaje',
				listeners: {
					'render': function(){ 
								ayuda( 'ase_csr_fecha_pesaje', ayuda_ase_csr_fecha_pesaje );
					}
				}
			})
		}
	],
	tbar: [
		{
			text: 'Agregar',
			//iconCls: 'agregar',
			handler: ase_comunidadserviciorecoleccion_agregarcomunidad
		}, '-', 
		{
			text: 'Borrar',
			//iconCls: 'eliminar',
			handler: ase_comunidadserviciorecoleccion_eliminarcomunidad
		}, '-'
	],
	viewConfig: {
			forceFit: true
	}
});

var ase_total_toneladas = new Ext.form.NumberField({
	id: 'ase_total_toneladas',
	name: 'ase_total_toneladas',
	labelStyle: 'width:250px;',
	fieldLabel: 'Total toneladas a&ntilde;o',
	allowBlank: false, 
	maxLength: 7, 
	minLength: 0,
	listeners: {
		'render': function(){ 
					ayuda( 'ase_total_toneladas', ayuda_ase_total_toneladas );
		}
	}
});

var form_ase_comunidadserviciorecoleccion = new Ext.FormPanel({
	autoWidth: true,
	border: false,
	//hidden: true,
	layout: 'column',
	renderTo: 'div_form_ase_comunidadserviciorecoleccion',
	height: largo_panel-15,
	padding: 10,
	style: {"margin-right": Ext.isIE6 ? (Ext.isStrict ? "-10px" : "-13px") : "0" },
	items: [
		ase_comunidadserviciorecoleccion_gridpanel,
		ase_total_toneladas
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
							ase_comunidadserviciorecoleccion_subirdatos();
			}
	    }
	]
});

ase_comunidadserviciorecoleccion_datastore.load({
  callback: function() {
	var record = ase_comunidadserviciorecoleccion_datastore.getAt(0);
	form_ase_comunidadserviciorecoleccion.getForm().loadRecord(record);
  }
});

function ase_comunidadserviciorecoleccion_subirdatos() {
	var rec = ase_comunidadserviciorecoleccion_gridpanel.getSelectionModel().getSelected();
	subirDatos(
		form_ase_comunidadserviciorecoleccion, 
		'aseo_comunidadserviciorecoleccion/actualizarComunidadServicioRecoleccion',
		{
			ase_csr_id: rec.get('ase_csr_id'),
			ase_csr_nombre_comunidad: rec.get('ase_csr_nombre_comunidad'),
			ase_csr_numero_viviendas_totales: rec.get('ase_csr_numero_viviendas_totales'),
			ase_csr_numero_viviendas_con_servicio: rec.get('ase_csr_numero_viviendas_con_servicio'),
			ase_csr_numero_suscriptores: rec.get('ase_csr_numero_suscriptores'),
			ase_csr_cantidad_prom_residuos_mes: rec.get('ase_csr_cantidad_prom_residuos_mes'),
			ase_csr_fecha_pesaje: rec.get('ase_csr_fecha_pesaje')
		}
	);
}

function ase_comunidadserviciorecoleccion_agregarcomunidad(btn, ev) {
	var row = new ase_comunidadserviciorecoleccion_gridpanel.store.recordType({
		ase_csr_id: '',
		ase_csr_nombre_comunidad: 'nombre comunidad',
		ase_csr_numero_viviendas_totales: '0',
		ase_csr_numero_viviendas_con_servicio: '0',
		ase_csr_numero_suscriptores: '0',
		ase_csr_cantidad_prom_residuos_mes: '0',
		ase_csr_fecha_pesaje: '2010-01-01'
	});
	ase_comunidadserviciorecoleccion_roweditor.stopEditing();
	ase_comunidadserviciorecoleccion_gridpanel.store.insert(0, row);
}

function ase_comunidadserviciorecoleccion_eliminarcomunidad() {
	var rec = ase_comunidadserviciorecoleccion_gridpanel.getSelectionModel().getSelected();
	
	if (!rec) {
		return false;
	}
	
	if(rec.get('ase_csr_id') == ''){
		ase_comunidadserviciorecoleccion_gridpanel.store.remove(rec);
	}
	else{
		subirDatos(
			form_ase_comunidadserviciorecoleccion, 
			'aseo_comunidadserviciorecoleccion/eliminarComunidad',
			{
				ase_csr_id: rec.get('ase_csr_id')
			},
			function(){
				ase_comunidadserviciorecoleccion_datastore.load();
			}
		);
	}
}