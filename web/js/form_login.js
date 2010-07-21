var Login = function () {

return { 
init: function () {

			var title = new Ext.Panel({
				//padding: 10,
				frame: false,
				border: false,
				height: 110,
				//renderTo: 'titulo',
				//html: '<font face="arial" size=36 color=#4E79B2><center>Agua Rural de Colombia<br></center></font>',
				html: '<font face="arial" size=36 color=#4E79B2><center>Agua Rural de Colombia</center></font><br /><font face="arial" size=6 color=#4E79B2><center>Peque&ntilde;os Prestadores</center></font>',
				width: 600,
			});
			
			var colaboradores = new Ext.ux.BubblePanel({
				padding: 5,
				frame: true,
				autoHeight: true,
				renderTo: 'colaboradores',
				html: '<font face="arial" size=2 color=#4E79B2><center>Descargar Manual</center></font><br /><img src="../images/colaboradores.png" width=400 height=80 border=0 alt="user"></center>',
				width: 500,
			});
			
			var login = new Ext.form.FormPanel({
				frame: false,
				autoHeight: true,
				padding: 10,
				defaultType: 'textfield',
				//border: false,
				width   : 300,
				labelWidth: 90,
				xtype: 'fieldset',
				items: [
				  {fieldLabel: 'Usuario', emptyText: 'digite su nombre de usuario', anchor: '100%', id: 'IDNombreUsuario', allowBlank:false},
				  {fieldLabel: 'Contrase&ntilde;a', inputType : 'password', emptyText: 'digite su contrasena', anchor: '100%', id: 'IDContrasena', allowBlank:false}
				],
				buttons:[
				  {text: 'Ingresar', 
				   id:'BguardarEjemplar', 
				   //iconCls:'crear16',
				   iconCls:'login',
				   handler: function(){  
						if(Ext.getCmp('IDNombreUsuario').isValid() && Ext.getCmp('IDContrasena').isValid()){
							autenticar();
						}
						else{
							Ext.example.msg('Error', 'campos incompletos');
						}
				   }
				  }
				]
			});
			
			var cp = new Ext.ux.BubblePanel({
				renderTo: 'login',
				frame: true,
				padding: 5,
				width: 600,
				autoHeight: true,
				items: [title, login]
			});
			
			function autenticar(){
				Ext.Ajax.request({  
				waitMsg: 'Espere por favor',
				url: 'ENTRADA/autenticar', 
				params: {
					usuario: Ext.getCmp('IDNombreUsuario').getValue(),
					contrasena: Ext.getCmp('IDContrasena').getValue()
				},
				success: function(response, action){	  
					obj = Ext.util.JSON.decode(response.responseText);
					if (obj.success)
					{
						//Ext.example.msg('Alerta', obj.mensaje);
						window.location = 'VENTANAPRINCIPAL';
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
				});
			}
		}
	}
}();
