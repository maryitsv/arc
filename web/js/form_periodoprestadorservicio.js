
var periodoprestadorservicio_titulo_panel = new Ext.Panel({
	frame: false,
	border: false,
	height: 110,
	html: '<font face="arial" size=36 color=#4E79B2><center>Agua Rural de Colombia</center></font><br /><font face="arial" size=6 color=#4E79B2><center>Peque&ntilde;os Prestadores</center></font>',
	width: 600,
});

var periodoprestadorservicio_panel = new Ext.form.FormPanel({
	frame: false,
	autoHeight: true,
	padding: 10,
	defaultType: 'textfield',
	//border: false,
	width : 350,
	labelWidth: 130,
	xtype: 'fieldset',
	items: [
		{
			xtype: 'checkboxgroup',
			fieldLabel: 'Selecciones los servicios',
			labelStyle: 'width:150px; align:left;',
			labelWidth: 130,
			cls  : 'panelpps',
			defaults:{width:'100'},
			columns: 1,
			items: [
				{
				   boxLabel: 'Acueducto',
				   name: 'pps_ser_acu',
				   id: 'pps_ser_acu',
				   cls: 'align:right;',
				   inputValue: 1,
				   listeners:
				   {
							'render': function(){ 
								ayuda( 'pps_ser_acu', ayuda_pps_ser_acu );
							}             
				   }
				},
				{
					boxLabel: 'Alcantarillado', 
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
					boxLabel: 'Aseo', 
					name: 'pps_ser_ase',
					id: 'pps_ser_ase',
					inputValue: 1,
					listeners:
					{
							'render': function(){ 
								ayuda( 'pps_ser_ase', ayuda_pps_ser_ase );
							}                 
					}
				}
			]
		},
		{xtype: 'label', html: '<br/>'},
		{
			xtype: 'spinnerfield',
			fieldLabel: 'Seleccione el A&ntilde;o',
			id: 'pps_anio',
			name: 'pps_anio',
			labelWidth: 150,
			minValue: 2005,
			maxValue: 2015,
			value: 2010,
			labelStyle: 'width:120px;',
			//width: 100,
			accelerate: true,
			listeners:
			{
					'render': function(){ 
						ayuda( 'pps_anio', ayuda_pps_anio );
					}                 
			}
        }
	],
	buttons:[
	  {
		text: 'Aceptar', 
		iconCls:'login',
		handler: function(){
			if( Ext.getCmp('pps_ser_ase').getValue() == 1 || Ext.getCmp('pps_ser_alc').getValue() == 1 || Ext.getCmp('pps_ser_acu').getValue() == 1 ){
				periodoprestadorservicio_subirDatos();
			}
			else{
				mostrarMensajeRapido('Alerta','Seleccione al menos un servicio');
			}
		}
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
			window.location = 'menuentradadatos';
			mostrarMensajeRapido('Aviso',obj.mensaje);
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
