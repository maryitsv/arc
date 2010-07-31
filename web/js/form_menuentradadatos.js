var form_menuentradadatos = function () {

return { 
init: function () {
			
			var viewport = new Ext.Viewport({
				layout:'border',
				//region: 'center',
				items:[
					{
						frame: true,
						region: 'north',
						baseCls: 'x-bubble',
						layout: 'fit',
						padding: 5,
						margins: '10 10 0 10',
						contentEl: 'titulo',
						height: 65
						//html: '<font face="arial" size=6 color=#4E79B2>ARC Peque&ntilde;os Prestadores</font> <font face="arial" size=8 color="#4E79B2" align="right"> Periodo: <?php $this->getUser()->getAttribute("pps_anio");?> </font>'// <img src="../images/p-derecha.png" align="right" />'
					},
					{
						region: 'center',
						xtype: 'grouptabpanel',
						deferredRender : false,
						id: 'panel_servicios',
						tabWidth: 170,
						activeGroup: 0,
						items: [/*{
									expanded: true,
									items: [{
										title: 'Bienvenido',
										layout: 'fit',
										iconCls: 'x-icon-configuration',
										tabTip: 'Bienvenido',
										style: 'padding: 50px 50px 50px 50px;',//arriba izquierda abajo derecha
										contentEl: 'bienvenida'
									}]
								},*/
								{
									expanded: false,
									items: [
										{
											id: 'datos_prestador',
											title: 'Datos del Prestador',
											tabTip: 'Datos del Prestador',
											border: false,
											style: 'padding: 10px;',
											items:[
												{
													frame: true,
													autoLoad: { url: url_arc+'prestador', scripts: true, scope: this }
												}
											]                
										}
										]
								},
								{
									expanded: true,
									border: false,
									id: 'acueducto',
									items: [{
										title: 'Acueducto',
										id: 'acueducto_general',
										iconCls: 'x-icon-configuration',
										tabTip: 'Informacion de Acueducto',
										style: 'padding: 10px;',
										items: [ {
													frame: true,
													autoLoad: { url: url_arc+'acueducto', scripts: true, scope: this }
												}
										]
										},{
										title: 'Informacion Financiera',
										id:'acueducto_financiera',
										iconCls: 'x-icon-templates',
										tabTip: 'Informacion Financiera',
										style: 'padding: 10px; ',
										items: [{
													frame: true,
													autoLoad: { url: url_arc+'acueducto_administrativafinanciera', scripts: true, scope: this }
												}
										]	
									},{
										title: 'Informacion Comercial',
										iconCls: 'x-icon-templates',
										id: 'acueducto_comercial',
										tabTip: 'Informacion Comercial',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: { url: url_arc+'acueducto_comercial', scripts: true, scope: this }
												}
										]	
									},{
										title: 'Tecnico-Operativa',
										iconCls: 'x-icon-templates',
										id: 'acueducto_tecnicooperativa',
										tabTip: 'Informacion <br/>Tecnico-Operativa',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'acueducto_tecnicooperativa', scripts: true, scope: this}
												}
										]	
									},{
										title: 'Microcuenca',
										iconCls: 'x-icon-templates',
										id: 'acueducto_microcuenca',
										tabTip: 'Microcuenca',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'acueducto_microcuenca', scripts: true, scope: this}
												}
												]	
									},{
										title: 'Calidad de Agua',
										iconCls: 'x-icon-templates',
										id: 'acueducto_calidad',
										tabTip: 'Calidad de Agua',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'acueducto_calidad', scripts: true, scope: this}
												}
										]	
									}]
								},
								{
									expanded: false,
									border: false,
									id: 'alcantarillado',
									items: [{
										title: 'Alcantarillado',
										id: 'alcantarillado_general',
										iconCls: 'x-icon-configuration',
										tabTip: 'Informacion de Alcantarillado',
										style: 'padding: 10px;',
										items: [ {
											frame: true,
											autoLoad: { url: url_arc+'alcantarillado', scripts: true, scope: this }
										}
								]
									},{
										title: 'Informacion Financiera',
										id: 'alcantarillado_financiera',
										iconCls: 'x-icon-templates',
										tabTip: 'Informacion Financiera',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'alcantarillado_administrativafinanciera', scripts: true, scope: this}
												}
										]	
									},{
										title: 'Informacion Comercial',
										iconCls: 'x-icon-templates',
										id: 'alcantarillado_comercial',
										tabTip: 'Informacion Comercial de Alcantarillado',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: { url: url_arc+'alcantarillado_comercial', scripts: true, scope: this }
												}
										]	
									},{
										title: 'Tecnico-Operativa',
										iconCls: 'x-icon-templates',
										id: 'alcantarillado_tecnicooperativa',
										tabTip: 'Informacion <br/>Tecnico-Operativa',
										style: 'padding: 10px;',
										layout:'fit',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'alcantarillado_tecnicooperativa', scripts: true, scope: this}
												}
										]	
									}]
								},
								{
									expanded: false,
									border: false,
									id: 'aseo',
									items: [{
										title: 'Aseo',
										id: 'aseo_general',
										iconCls: 'x-icon-configuration',
										tabTip: 'Informacion de Aseo',
										style: 'padding: 10px;',
										items: [ {
													frame: true,
													autoLoad: { url: url_arc+'aseo', scripts: true, scope: this }
												 }
										]
									},{
										title: 'Informacion Financiera',
										id:'aseo_financiera',
										iconCls: 'x-icon-templates',
										tabTip: 'Informacion Financiera',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'aseo_administrativafinanciera', scripts: true, scope: this}
												}
										]	
									},{
										title: 'Informacion Comercial',
										iconCls: 'x-icon-templates',
										id: 'aseo_comercial',
										tabTip: 'Informacion Comercial de Aseo',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: { url: url_arc+'aseo_comercial', scripts: true, scope: this }
												}
										]	
									},{
										title: 'Tecnico-Operativa',
										iconCls: 'x-icon-templates',
										id: 'aseo_tecnicooperativa',
										tabTip: 'Informacion <br/>Tecnico-Operativa',
										style: 'padding: 10px;',
										items: [{
													autoScroll: true,
													frame: true,
													autoLoad: {url: url_arc+'aseo_tecnicooperativa', scripts: true, scope: this}
												}
										]	
									}]
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
														/*Ext.Ajax.request({  
														waitMsg: 'Espere por favor',
														url: 'login/desautenticar', 
														success: function(response, action){	  
															obj = Ext.util.JSON.decode(response.responseText);
															if (obj.success)
															{
																//Ext.example.msg('Alerta', obj.mensaje);
																window.location = 'login';
															}	
															else if (obj.success == false)
															{
																Ext.example.msg('Error', obj.errors.reason);
															}
														},
														failure: function(response){
															var result=response.responseText;
															Ext.example.msg('Error', 'no se pudo conectar a la base de datos intente mas tarde'); 
														}
														});*/
														window.location = 'login';
													}
												  }
											]            
										}
									]
								}
						]
					}/*,
					{
						frame: true,
						baseCls: 'x-bubble',
						region: 'south',
						layout: 'fit',
						//padding: 0,
						height: 40,
						//autoWidth: true,
						margins: '0 10 0 10',
						html: '<p align=center><font face="arial" size=2 color=#4E79B2>Deasarrollado por Cedesoft</font></p>'
					}*/
				]
			});
		}
	}
}();
