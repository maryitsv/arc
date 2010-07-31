var form_menuadministrador = function () {

return { 
init: function () {
			
			var viewport = new Ext.Viewport({
				layout:'border',
				items:[
					{
						frame: true,
						region: 'north',
						baseCls: 'x-bubble',
						layout: 'fit',
						padding: 8,
						margins: '10 10 0 10',
						html: '<font face="arial" size=6 color=#4E79B2>ARC Peque&ntilde;os Prestadores</font>'
					},
					{
						region: 'center',
						xtype: 'grouptabpanel',
						deferredRender : false,
						id: 'panel_servicios',
						tabWidth: 170,
						activeGroup: 0,
						items: [
								{
									expanded: false,
									items: [
										{
											id: 'datos_usuario',
											title: 'Manejo de usuarios',
											tabTip: 'Manejo de ususarios',
											border: false,
											style: 'padding: 10px;',
											items:[
												{
													frame: true,
													autoLoad: { url: url_arc+'usuario', scripts: true, scope: this }
												}
											]                
										}
										]
								},
								{
									expanded: false,
									items: [
										{
											id: 'datos_prestador',
											title: 'Manejo de prestadores',
											tabTip: 'Manejo de prestadores',
											border: false,
											style: 'padding: 10px;',
											items:[
												{
													frame: true,
													autoLoad: { url: url_arc+'prestador_gestionar', scripts: true, scope: this }
												}
											]                
										}
										]
								},
								{
									expanded: false,
									items: [
										{
											title: 'Salir',
											tabTip: 'salir',
											style: 'padding: 50px;',
											html: '<center><font face="arial" size=15 color=#4E79B2>Gracias por usar ARC Pequenos Prestadores</font><br><br><br></center>',
											buttons: [{
													text: '<font face="arial" size=5 color=black>Terminar Sesion</font>',
													//iconCls: 'salir32',
													height: 70,
													width: 250,
													scale: 'large',
													handler: function(){  
													
														window.location = 'login';
													}
												  }
											]            
										}
									]
								}
						]
					}
				]
			});
		}
	}
}();
