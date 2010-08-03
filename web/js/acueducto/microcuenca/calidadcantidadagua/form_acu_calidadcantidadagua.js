	var acu_calidadcantidadagua_actividadagricola_datos_datastore = new Ext.data.Store({
        id: 'acu_calidadcantidadagua_actividadagricola_datos_datastore',
        proxy: new Ext.data.HttpProxy({
                url: 'acueducto_calidadcantidadagua/obtenerDatosCalidadcantidadagua', 
                method: 'POST'
        }),
        baseParams:{
			formulario:'actividadAgricola'
		}, 
        reader: new Ext.data.JsonReader({
                root: 'results',
                totalProperty: 'total',
                id: 'id'
                },[ 
                  {name: 'acu_cca_actividad_agricola_permanentes', type: 'int'},	    
                  {name: 'acu_cca_actividad_agricola_semipermanentes', type: 'int'},
				  {name: 'acu_cca_actividad_agricola_temporales', type: 'int'},
				  {name: 'acu_cca_actividad_agricola_mayor_area', type: 'string'},
				  {name: 'acu_cca_actividad_agricola_permanentes_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_agricola_semipermanentes_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_agricola_temporales_tendencia', type: 'string'},

                  {name: 'acu_cca_actividad_pecuaria_ganaderia_bovina', type: 'int'},	    
                  {name: 'acu_cca_actividad_pecuaria_ganaderia_equina', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_porcicultura', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_capricultura_ovinos', type: 'int'},	
				  {name: 'acu_cca_actividad_pecuaria_avicultura', type: 'int'},					  
                  {name: 'acu_cca_actividad_pecuaria_piscicultura', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_otros', type: 'int'},
				  {name: 'acu_cca_actividad_pecuaria_otros_cual', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_mayor_area', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_ganaderia_equina_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_porcicultura_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia', type: 'string'},				  
				  {name: 'acu_cca_actividad_pecuaria_avicultura_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_piscicultura_tendencia', type: 'string'},
				  {name: 'acu_cca_actividad_pecuaria_otros_tendencia', type: 'string'},
				  
				  {name: 'acu_cca_control_plagas_enfermedades_quimico', type: 'int'},	    
                  {name: 'acu_cca_control_plagas_enfermedades_organico', type: 'int'},
				  {name: 'acu_cca_control_plagas_enfermedades_biologico', type: 'int'},
				  {name: 'acu_cca_control_plagas_enfermedades_ninguno', type: 'int'},	
				  {name: 'acu_cca_control_plagas_enfermedades_mas_usado', type: 'string'},					  
                  {name: 'acu_cca_control_plagas_enfermedades_quimico_tendencia', type: 'string'},
				  {name: 'acu_cca_control_plagas_enfermedades_organico_tendencia', type: 'string'},
				  {name: 'acu_cca_control_plagas_enfermedades_biologico_tendencia', type: 'string'},
				  
				  {name: 'acu_cca_fertilizacion_cultivos_quimico', type: 'int'},
				  {name: 'acu_cca_fertilizacion_cultivos_organico', type: 'int'},
				  {name: 'acu_cca_fertilizacion_cultivos_ninguno', type: 'int'},
				  {name: 'acu_cca_fertilizacion_cultivos_mas_usado', type: 'string'},
				  {name: 'acu_cca_fertilizacion_cultivos_quimico_tendencia', type: 'string'},				  
				  {name: 'acu_cca_fertilizacion_cultivos_organico_tendencia', type: 'string'},		
				  
				  {name: 'acu_cca_control_malezas_quimico', type: 'int'},
				  {name: 'acu_cca_control_malezas_organico', type: 'int'},
				  {name: 'acu_cca_control_malezas_meca_manu', type: 'int'},
				  {name: 'acu_cca_control_malezas_ninguno', type: 'int'},
				  {name: 'acu_cca_control_malezas_mas_usado', type: 'string'},
				  {name: 'acu_cca_control_malezas_quimico_tendencia', type: 'string'},
				  {name: 'acu_cca_control_malezas_organico_tendencia', type: 'string'},				  
				  {name: 'acu_cca_control_malezas_meca_manu_tendencia', type: 'string'},
				  {name: 'acu_cca_mineria', type: 'int'},
				  {name: 'acu_cca_erosion', type: 'int'},
				  {name: 'acu_cca_mineria_tendencia', type: 'string'},				  
				  {name: 'acu_cca_erosion_tendencia', type: 'string'},		

				  {name: 'acu_cca_desarrolla_modificacion_paisaje', type: 'int'},	    
                  {name: 'acu_cca_modificacion_paisaje_construccion_vias', type: 'int'},
				  {name: 'acu_cca_modificacion_paisaje_construccion_vivienda', type: 'int'},
				  {name: 'acu_cca_modificacion_paisaje_construccion_otro', type: 'int'},	
				  {name: 'acu_cca_modificacion_paisaje_construccion_vias_tendencia', type: 'string'},					  
                  {name: 'acu_cca_modificacion_paisaje_construccion_vivienda_tendencia', type: 'string'},
				  {name: 'acu_cca_modificacion_paisaje_construccion_otro_tendencia', type: 'string'},
				  {name: 'acu_cca_descarga_vivienda_liquido', type: 'int'},
				  {name: 'acu_cca_descarga_vivienda_solido', type: 'int'},
				  
				  {name: 'acu_cca_descarga_actividad_productiva_agricola', type: 'int'},	    
                  {name: 'acu_cca_descarga_actividad_productiva_pecuaria', type: 'int'},
				  {name: 'acu_cca_descarga_actividad_productiva_minera', type: 'int'},
				  {name: 'acu_cca_descarga_actividad_productiva_industrial', type: 'int'},	
				  {name: 'acu_cca_descarga_actividad_productiva_otra', type: 'int'},					  
                  {name: 'acu_cca_descarga_actividad_productiva_agricola_especifica', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_pecuaria_especifica', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_minera_especifica', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_industrial_especifica', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_otra_especifica', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_agricola_tendencia', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_pecuaria_tendencia', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_minera_tendencia', type: 'string'},				  
				  {name: 'acu_cca_descarga_actividad_productiva_industrial_tendencia', type: 'string'},
				  {name: 'acu_cca_descarga_actividad_productiva_otra_tendencia', type: 'string'}
		])
    });

	
	var acu_calidadcantidadagua_contenedor_panel = new Ext.Panel({
		autoWidth: true,
		height:largo_panel-15,
		items:
		[
			acu_calidadcantidadagua_actividadagricola_panel,
			acu_calidadcantidadagua_actividadpecuaria_panel,
			acu_calidadcantidadagua_controlplagas_panel,
			acu_calidadcantidadagua_controlmalezas_panel,
			acu_calidadcantidadagua_modificacionpaisaje_panel,
			acu_calidadcantidadagua_descargaactividadproductiva_panel
		],
		renderTo: 'div_form_acu_calidadcantidadagua',
	});
	
	
	
	acu_calidadcantidadagua_actividadagricola_datos_datastore.load({
	  callback: function() {
		var record = acu_calidadcantidadagua_actividadagricola_datos_datastore.getAt(0);
		acu_calidadcantidadagua_actividadagricola_panel.getForm().loadRecord(record);	
		acu_calidadcantidadagua_actividadpecuaria_panel.getForm().loadRecord(record);
		acu_calidadcantidadagua_controlplagas_panel.getForm().loadRecord(record);
		acu_calidadcantidadagua_controlmalezas_panel.getForm().loadRecord(record);
		acu_calidadcantidadagua_modificacionpaisaje_panel.getForm().loadRecord(record);
		acu_calidadcantidadagua_descargaactividadproductiva_panel.getForm().loadRecord(record);
	  }
	});
