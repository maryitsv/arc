function getAbsoluteUrl (module, action) {
  return urlPrefix+module+'/'+action;
}

function ayuda( idcomponente, mensaje, titulo ){
	if( titulo == null ){
		titulo= 'Ayuda rapida';
	}
	if(mensaje != null){
		new Ext.ToolTip({
	        target: (Ext.getCmp(idcomponente)).getEl(),
	        title: titulo,
	        anchor: 'top',
	        //anchorOffset: 85,
	        html: mensaje,
	        trackMouse:true
		});
	}
}
/*
function formatoNumeroCelda ( algo ){ //esta funcion esta implementada mas abajo
	
	return algo;
}
*/
/*
function formatoNumeroCampo(algo)   //esta funcion esta implementada mas abajo
{
	return algo
}
*/

function mostrarMensajeRapido(titulo, contenido)
{
	Ext.example.msg(titulo,contenido);
	//Ext.example.msg('as','as');
}

function mostrarMensajeConfirmacion(titulo, contenido)
{
	Ext.Msg.show
	({
	title: titulo,
	msg: contenido,
	buttons: Ext.Msg.OK,
	icon: Ext.MessageBox.WARNING
	});
}

function subirDatos(panel, url_Action, extraParams, funcionSuccess, funcionFailure){
	
	panel.getForm().submit({
		method: 'POST',
		url: url_Action,
		params: extraParams,
		waitTitle: 'Enviando',
		waitMsg: 'Enviando datos...',
		success: function(response, action)
		{
			obj = Ext.util.JSON.decode(action.response.responseText);
			salida = true;
			funcionSuccess();
			mostrarMensajeRapido('Aviso',obj.mensaje);
		},
		failure: function(form, action, response)
		{
			if(action.failureType == 'server'){
				obj = Ext.util.JSON.decode(action.response.responseText); 
				mostrarMensajeConfirmacion('Error',obj.errors.reason);
			}
			funcionFailure();
		}
	});
}

function subirDatosAjax(url_Action, extraParams, funcionSuccess, funcionFailure){
	
	Ext.Ajax.request({  
		method: 'POST',
		url: url_Action,
		params: extraParams,
		waitTitle: 'Enviando',
		waitMsg: 'Enviando datos...',
		success: function(response)
		{
			obj = Ext.util.JSON.decode(response.responseText);
			salida = true;
			funcionSuccess();
			mostrarMensajeRapido('Aviso',obj.mensaje);
		},
		failure: function(form,  response)
		{
			if(action.failureType == 'server'){
				obj = Ext.util.JSON.decode(response.responseText); 
				mostrarMensajeConfirmacion('Error',obj.errors.reason);
			}
			funcionFailure();
		}
	});
		
}

function formatoNumeroCelda(valor)
{
	valor += ''; 
	var expresionRegular = /(\d+)(\d{3})/;
	while (expresionRegular.test(valor))
	{
	  valor = valor.replace(expresionRegular, '$1' + ',' + '$2');
	}
	return valor;
}

function formatoNumeroCampo(campo)
{
	valor =  campo.getValue() + '';
	separandoDecimales = valor.split('.');
	separandoMilesAnteriores = separandoDecimales[0].split(',');
	parteEntera = '';
	for (i=0; i<separandoMilesAnteriores.length; i++)
	{
	parteEntera += ''+ separandoMilesAnteriores[i] +'' ;
	}
	parteDecimal = separandoDecimales.length > 1 ? '.' + separandoDecimales[1] : '';
	var expresionRegular = /(\d+)(\d{3})/;
	while (expresionRegular.test(parteEntera))
	{
	parteEntera = parteEntera.replace(expresionRegular, '$1' + ',' + '$2');
	}
	campo.setValue(parteEntera + parteDecimal);
	return false;
}

function quitarFormatoNumeroCampo(campo)
{
	valor =  campo.getValue() + '';
	var expresionRegular = /(\d+)(\W*)(\d*)(\W*)(\d*)/;
	sinFormato = valor.replace(expresionRegular, '$1' + '$3' + '$5');
	if(sinFormato == ''){
		sinFormato = '0';
	}
	return sinFormato;
}

function validar_formatear(campo){
	var activo = parseFloat(quitarFormatoNumeroCampo(campo));
	var valorFormateado = formatoNumeroCelda(activo);
	campo.setValue(valorFormateado);
}
