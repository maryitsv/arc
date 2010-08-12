	
	var alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_datos_datastore = new Ext.data.Store({
        id: 'alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarillado/obtenerDatosTecnicooperativaactividadesaejecutarporprestadoralcantarillado', 
                method: 'POST'
        }),
        baseParams:{}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
				  {name: 'alc_toaaep_actividad_recoleccion_transporte', type: 'int'},	    
				  {name: 'alc_toaaep_actividad_tratamiento', type: 'int'},
				  {name: 'alc_toaaep_actividad_operacion_matenimiento', type: 'int'},
				  {name: 'alc_toaaep_actividad_disposicion_final', type: 'int'}
		])
	});



	var alc_toaaep_actividad_recoleccion_transporte= new Ext.form.Checkbox({
	      xtype: 'checkbox', 
	      name: 'alc_toaaep_actividad_recoleccion_transporte',
	      id:   'alc_toaaep_actividad_recoleccion_transporte',
	      inputValue: 1,
	      fieldLabel: '<html>Recolecci&oacute;n y trasnporte</html>',
	      listeners:
	      {
		      'render':function(){
			      ayuda('alc_toaaep_actividad_recoleccion_transporte',ayuda_alc_toaaep_actividad_recoleccion_transporte);	
		      }
	      }
	});


	var  alc_toaaep_actividad_tratamiento=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		name: 'alc_toaaep_actividad_tratamiento',
		id:   'alc_toaaep_actividad_tratamiento',
		inputValue: 1,
		fieldLabel: '<html>Tratamiento</html>',
		listeners:
		{
			'render':function(){
				ayuda('alc_toaaep_actividad_tratamiento',ayuda_alc_toaaep_actividad_tratamiento);
			}
		}
	});

	var alc_toaaep_actividad_operacion_matenimiento=new Ext.form.Checkbox({
		xtype: 'checkbox', 
		name: 'alc_toaaep_actividad_operacion_matenimiento',
		id:   'alc_toaaep_actividad_operacion_matenimiento',
		inputValue: 1,
		fieldLabel: '<html>Operaci&oacute;n y mantenimiento</html>',
		listeners:
		{
			'render':function(){
				ayuda('alc_toaaep_actividad_operacion_matenimiento',ayuda_alc_toaaep_actividad_operacion_matenimiento);
			}
		}
	});


	var alc_toaaep_actividad_disposicion_final= new Ext.form.Checkbox({
		xtype: 'checkbox', 
		name: 'alc_toaaep_actividad_disposicion_final',
		id:   'alc_toaaep_actividad_disposicion_final',
		inputValue: 1,
		fieldLabel: '<html>Disposici&oacute;n final</html>',
		listeners:
		{
			'render':function(){
				ayuda('alc_toaaep_actividad_disposicion_final',ayuda_alc_toaaep_actividad_disposicion_final);
			}
		}
	});

	var alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_panel = new Ext.FormPanel({
		autoWidth: true,
		height:largo_panel-15,
		layout:'form',
		items:
		[
			{
				xtype:'fieldset',
				bodyStyle: 'padding:5px;',
				title:'Actividades que ejecuta el Prestador',
				defaults:{labelStyle: 'width:180px;'+letra},
				items:
				[	
					alc_toaaep_actividad_recoleccion_transporte,
					alc_toaaep_actividad_tratamiento,
					alc_toaaep_actividad_operacion_matenimiento,
					alc_toaaep_actividad_disposicion_final
				]
			}
		],
		renderTo: 'div_form_alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado',
		buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			iconCls:'atras',
			handler:function(){
				alc_tecnicooperativa_tabpanel.setActiveTab(0);
			}
		},
		{
			text: 'Continuar',
			iconCls:'continuar',
			handler:function(){
				alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_subirdatos();
				alc_tecnicooperativa_tabpanel.setActiveTab(2);
				
			}
		}]
	});


	function alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_subirdatos()
	{
		subirDatos(
			alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_panel,
			'alcantarillado_tecnicooperativaactividadesaejecutarporprestadoralcantarillado/actualizarTecnicooperativaactividadesaejecutarporprestadoralcantarillado',
			{},
			function(){}
		);
		
	}
	
	alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_datos_datastore.load({
	  callback: function() {
		var record = alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_datos_datastore.getAt(0);
		alc_tecnicooperativaactividadesaejecutarporprestadoralcantarillado_panel.getForm().loadRecord(record);	
	  }
	});
