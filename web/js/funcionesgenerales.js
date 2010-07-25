function ayuda( idcomponente, mensaje, titulo ){
	if( titulo == null ){
		titulo= 'Ayuda rapida';
	}
	if(mensaje != null){
		new Ext.ToolTip({
	        target: (Ext.getCmp(idcomponente)).getEl(),
	        title: titulo,
	        anchor: 'top',
	        anchorOffset: 85,
	        html: mensaje,
	        trackMouse:true
		});
	}
}

function formatoNumeroCelda ( algo ){
	
	return algo;
}

function formatoNumeroCampo(algo)
{
return algo
}


function mostrarMensajeRapido(titulo,contenido)
{
	Ext.example.msg(titulo,contenido);
	//Ext.example.msg('as','as');
}

function mostrarMensajeConfirmacion(titulo,contenido)
{
	Ext.Msg.show
	({
	title: titulo,
	msg: contenido,
	buttons: Ext.Msg.OK,
	icon: Ext.MessageBox.WARNING
	});
}


	function subirDatos(panel,url_Action){
	
		panel.getForm().submit({
			method: 'POST',
			url:url_Action,
			params: {
				servicio:'acueducto'
			},
			waitTitle: 'Enviando',
			waitMsg: 'Enviando datos...',
			success: function(response, action)
			{
			  obj = Ext.util.JSON.decode(action.response.responseText);
			   mostrarMensajeRapido('Aviso',obj.mensaje);
			},
			failure: function(form, action, response)
			{
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText); 
					mostrarMensajeConfirmacion('Error',obj.errors.reason);
				}
			}
		});

	}


