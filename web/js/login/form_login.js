

var login_title_panel = new Ext.Panel({
	frame: false,
	border: false,
	height: 110,
	html: '<font face="arial" size=36 color=#4E79B2><center>Agua Rural de Colombia</center></font><br /><font face="arial" size=6 color=#4E79B2><center>Peque&ntilde;os Prestadores</center></font>',
	width: 600,
});

var login_colaboradores_bubblepanel = new Ext.ux.BubblePanel({
	padding: 5,
	frame: true,
	autoHeight: true,
	renderTo: 'colaboradores',
	html: '<font face="arial" size=2 color=#4E79B2><center>Descargar Manual</center></font><br /><img src="../images/colaboradores.png" width=380 height=90 border=0 alt="user"></center>',
	width: 500,
});

var login_panel = new Ext.form.FormPanel({
	frame: false,
	autoHeight: true,
	padding: 10,
	defaultType: 'textfield',
	//border: false,
	width   : 300,
	labelWidth: 90,
	xtype: 'fieldset',
	items: [
	  {
		fieldLabel: 'Usuario', 
		emptyText: 'digite su nombre de usuario', 
		anchor: '100%', 
		id: 'usu_login',
		name: 'usu_login',
		maxLength: 30,
		minLength: 4,
		vtype:'alphanum',
		allowBlank:false,
		listeners: {
			specialkey: function(field, e){
				if (e.getKey() == e.ENTER) {
					if(Ext.getCmp('usu_login').isValid() && Ext.getCmp('usu_clave').isValid()){
						login_autenticar();
					}
					else{
						Ext.example.msg('Error', 'campos incompletos');
					}
				}
			},
			'render': function(){ 
				ayuda( 'usu_login', ayuda_usu_login );
			}   
		}
	  },
	  {
		fieldLabel: 'Contrase&ntilde;a', 
		inputType : 'password',
		maxLength: 32,
		minLength: 4,
		emptyText: 'digite su contrasena', 
		anchor: '100%', 
		id: 'usu_clave',
		name: 'usu_clave',
		allowBlank:false,
		listeners: {
			specialkey: function(field, e){
				if (e.getKey() == e.ENTER) {
					if(Ext.getCmp('usu_login').isValid() && Ext.getCmp('usu_clave').isValid()){
						login_autenticar();
					}
					else{
						Ext.example.msg('Error', 'campos incompletos');
					}
				}
			},
			'render': function(){ 
				ayuda( 'usu_clave', ayuda_usu_clave );
			}  
		}
	  }
	],
	buttons:[
	  {text: 'Ingresar', 
	   id:'BguardarEjemplar', 
	   //iconCls:'crear16',
	   iconCls:'login',
	   handler: function(){  
			if(Ext.getCmp('usu_login').isValid() && Ext.getCmp('usu_clave').isValid()){
				login_autenticar();
			}
			else{
				Ext.example.msg('Error', 'campos incompletos');
			}
	   }
	  }
	]
});

var form_login = new Ext.ux.BubblePanel({
	renderTo: 'login',
	frame: true,
	layout: 'form',
	padding: 5,
	width: 600,
	autoHeight: true,
	items: [login_title_panel, login_panel]
});

function login_autenticar(){
	Ext.Ajax.request({  
	waitMsg: 'Espere por favor',
	url: 'login/autenticar', 
	params: {
		usu_login: Ext.getCmp('usu_login').getValue(),
		usu_clave_encriptada: hex_md5(Ext.getCmp('usu_clave').getValue())
	},
	success: function(response, action){	  
		obj = Ext.util.JSON.decode(response.responseText);
		if (obj.success)
		{
			//ocultamos todo y mostramos un mensaje de confirmacion pidiendo el anio
		//	window.location = 'periodoprestadorservicio';
			if(obj.mensaje=='prestador')
			{
				window.location = 'periodoprestadorservicio';
			}
			if(obj.mensaje=='administrador')
			{
				window.location = 'menuadministrador';
			}
						
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

