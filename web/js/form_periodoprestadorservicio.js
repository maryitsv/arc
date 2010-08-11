
var periodoprestadorservicio_titulo_panel = new Ext.Panel({
	frame: false,
	border: false,
	height: 110,
	html: '<font face="arial" size=36 color=#4E79B2><center>Agua Rural de Colombia</center></font><br /><font face="arial" size=6 color=#4E79B2><center>Peque&ntilde;os Prestadores</center></font>',
	width: 600,
});

var pps_fecha = new Date();

var pps_mes_data = [
	[1, 'Enero'], [2, 'Febrero'], [3, 'Marzo'], [4, 'Abril'],
	[5, 'Mayo'], [6, 'Junio'], [7, 'Julio'], [8, 'Agosto'],
	[9, 'Noviembre'], [10, 'Octubre'], [11, 'Noviembre'], [12, 'Diciembre']
];

var pps_mes_store = new Ext.data.SimpleStore({
    fields: ['pps_mes', 'nombre_mes'],
    data: pps_mes_data
});

var pps_mes_combobox = new Ext.form.ComboBox({
	id: 'pps_mes_combobox',
    store: pps_mes_store,
    displayField: 'nombre_mes',
	hiddenName: 'pps_mes',
	valueField: 'pps_mes',
	width: 100,
	value: pps_fecha.getMonth()+1,
    typeAhead: true,
	allowBlank: false,
	forceSelection: true,
    mode: 'local',
    triggerAction: 'all',
    emptyText: 'Selecciona...',
    selectOnFocus: true,
	listeners:
	{
		'render': function(){ 
			ayuda( 'pps_mes_combobox', ayuda_pps_mes );
		}                 
	}
});

var periodoprestadorservicio_panel = new Ext.form.FormPanel({
	frame: false,
	autoHeight: true,
	padding: 10,
	defaultType: 'textfield',
	//border: false,
	width : 500,
	labelWidth: 130,
	xtype: 'fieldset',
	items: [
		
		{xtype: 'label', labelWidth: 180, html: 'Seleccione los servicios<br/><br/>'},
		{
			xtype: 'compositefield',
			fieldLabel: 'Acueducto',
			items:
			[
				{
					xtype: 'checkbox',
					boxLabel: 'numero de suscriptores',
					name: 'pps_ser_acu',
					id: 'pps_ser_acu',
					inputValue: 1,
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_ser_acu', ayuda_pps_ser_acu );
							}             
					}
				},
				{
					xtype: 'numberfield',
					id: 'pps_numero_suscriptores_acueducto',
					name: 'pps_numero_suscriptores_acueducto',
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_numero_suscriptores_acueducto', ayuda_pps_numero_suscriptores_acueducto );
							}             
					}
				}
			]
		},
		{
			xtype: 'compositefield',
			fieldLabel: 'Alcantarillado',
			items:
			[
				{
					xtype: 'checkbox',
					boxLabel: 'numero de suscriptores', 
					name: 'pps_ser_alc',
					id: 'pps_ser_alc',
					inputValue: 1,
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_ser_alc', ayuda_pps_ser_alc );
							}                 
					}
				},
				{
					xtype: 'numberfield',
					id: 'pps_numero_suscriptores_alcantarillado',
					name: 'pps_numero_suscriptores_alcantarillado',
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_numero_suscriptores_alcantarillado', ayuda_pps_numero_suscriptores_alcantarillado );
							}             
					}
				}
			]
		},
		{
			xtype: 'compositefield',
			fieldLabel: 'Aseo', 
			items:
			[
				{
					xtype: 'checkbox',
					boxLabel: 'numero de suscriptores', 
					name: 'pps_ser_ase',
					id: 'pps_ser_ase',
					inputValue: 1,
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_ser_ase', ayuda_pps_ser_ase );
							}                 
					}
				},
				{
					xtype: 'numberfield',
					id: 'pps_numero_suscriptores_aseo',
					name: 'pps_numero_suscriptores_aseo',
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_numero_suscriptores_aseo', ayuda_pps_numero_suscriptores_aseo );
							}             
					}
				}
			]
		},
		{xtype: 'label', html: '<br/>'},
		{
			xtype: 'compositefield',
			fieldLabel: 'seleccione el periodo',
			items: [
				{
					xtype: 'spinnerfield',
					fieldLabel: 'A&ntilde;o',
					id: 'pps_anio',
					name: 'pps_anio',
					//labelWidth: 50,
					minValue: pps_fecha.getFullYear()-3,
					maxValue: pps_fecha.getFullYear(),
					value: pps_fecha.getFullYear(),
					labelStyle: 'width:120px;',
					width: 80,
					accelerate: true,
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_anio', ayuda_pps_anio );
							}                 
					}
				},
				pps_mes_combobox
			]
		}
	],
	buttons:[
		{
			text: 'Aceptar', 
			iconCls:'login',
			handler: periodoprestadorservicio_subirDatos	  
		}
	]
});

var form_periodoprestadorservicio = new Ext.ux.BubblePanel({
	renderTo: 'div_periodoprestadorservicio',
	frame: true,
	layout: 'form',
	padding: 5,
	width: 600,
	autoHeight: true,
	items: [periodoprestadorservicio_titulo_panel, periodoprestadorservicio_panel]
});

function periodoprestadorservicio_subirDatos(){
	
	periodoprestadorservicio_panel.getForm().submit({
		method: 'POST',
		url: 'periodoprestadorservicio/seleccionarPeriodoPrestadorServicio',
		waitTitle: 'Enviando',
		waitMsg: 'Enviando datos...',
		success: function(response, action)
		{
			salida = true;
			obj = Ext.util.JSON.decode(action.response.responseText);
			id_rango_acueducto = obj.rango_acueducto;
			id_rango_alcantarillado = obj.rango_alcantarillado;
			id_rango_aseo = obj.rango_aseo;
			//mostrarMensajeRapido('Aviso', 'id_rango_acueducto:'+id_rango_acueducto+', id_rango_alcantarillado:'+id_rango_alcantarillado+', id_rango_aseo:'+id_rango_aseo);
			window.location = 'menuentradadatos';
		},
		failure: function(form, action, response)
		{
			salida = false;
			if(action.failureType == 'server'){
				obj = Ext.util.JSON.decode(action.response.responseText); 
				mostrarMensajeConfirmacion('Error',obj.errors.reason);
			}
		}
	});
}
/*
function periodoprestadorservicio_subirDatos(){
	subirDatos(
		periodoprestadorservicio_panel, 
		'periodoprestadorservicio/seleccionarPeriodoPrestadorServicio',
		{},
		function(){
			//window.location = 'menuentradadatos';
		}
	);
}
*/