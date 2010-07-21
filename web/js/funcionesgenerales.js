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

function formatoNumeroCelda ( algo ){
	
	return algo;
}
