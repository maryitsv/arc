
-----------------------------------------------------------------------------
-- actividadesresiduossolidosaseo
-----------------------------------------------------------------------------

DROP TABLE "actividadesresiduossolidosaseo" CASCADE;


CREATE TABLE "actividadesresiduossolidosaseo"
(
	"ars_id" serial  NOT NULL,
	"ars_top_id" INTEGER,
	"ars_recole_trans_residuos_no_peligrosos" BOOLEAN,
	"ars_tratamiento_residuos_no_peligrosos" BOOLEAN,
	"ars_aprovechamiento_residuos" BOOLEAN,
	"ars_disposicion_final" BOOLEAN,
	"ars_barrido_limpieza_area_publica" BOOLEAN,
	"ars_recole_trasn_residuos_hospitalarios_no_peligrosos" BOOLEAN,
	"ars_recole_trasn_residuos_hospitalarios_peligrosos" BOOLEAN,
	PRIMARY KEY ("ars_id")
);

COMMENT ON TABLE "actividadesresiduossolidosaseo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- administrativafinanciera
-----------------------------------------------------------------------------

DROP TABLE "administrativafinanciera" CASCADE;


CREATE TABLE "administrativafinanciera"
(
	"iaf_id" serial  NOT NULL,
	"iaf_pps_pre_id" INTEGER,
	"iaf_pps_anio" INTEGER,
	"iaf_pps_ser_id" INTEGER,
	"iaf_nombre_diligenciador" VARCHAR(200),
	"iaf_apellido_diligenciador" VARCHAR(200),
	"iaf_cedula_diligenciador" VARCHAR(15),
	"iaf_telefono_diligenciador" VARCHAR(15),
	PRIMARY KEY ("iaf_id")
);

COMMENT ON TABLE "administrativafinanciera" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- analisiscobertura
-----------------------------------------------------------------------------

DROP TABLE "analisiscobertura" CASCADE;


CREATE TABLE "analisiscobertura"
(
	"aco_id" serial  NOT NULL,
	"aco_com_id" INTEGER,
	"aco_catastro_usuarios" BOOLEAN,
	"aco_anio_ela_impl_catastro_usu" INTEGER,
	"aco_num_predios_area" INTEGER,
	"aco_num_predios_conec_sistema" INTEGER,
	"aco_estrat_soceco_adop_mpio" BOOLEAN,
	"aco_estra_soceco_adop_mpio_jus" CHAR(50),
	"aco_num_sus_servicio_oficial" INTEGER,
	"aco_tarif_estr_servicio_oficial" VARCHAR(255),
	PRIMARY KEY ("aco_id")
);

COMMENT ON TABLE "analisiscobertura" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- aspectos_legales
-----------------------------------------------------------------------------

DROP TABLE "aspectos_legales" CASCADE;


CREATE TABLE "aspectos_legales"
(
	"ale_id" serial  NOT NULL,
	"ale_mic_id" INTEGER,
	"ale_cumple_perisos" BOOLEAN,
	"ale_entidad_exidio_concesion" VARCHAR(100),
	"ale_fecha_expedicion_concesion" DATE,
	"ale_fecha_vencimiento_concesion" DATE,
	"ale_caudal_adjudicado_concesion" INTEGER,
	PRIMARY KEY ("ale_id")
);

COMMENT ON TABLE "aspectos_legales" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- autoridadambiental
-----------------------------------------------------------------------------

DROP TABLE "autoridadambiental" CASCADE;


CREATE TABLE "autoridadambiental"
(
	"aua_id" serial  NOT NULL,
	"aua_nombre" VARCHAR(300),
	PRIMARY KEY ("aua_id")
);

COMMENT ON TABLE "autoridadambiental" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- calidad
-----------------------------------------------------------------------------

DROP TABLE "calidad" CASCADE;


CREATE TABLE "calidad"
(
	"cal_id" serial  NOT NULL,
	"cal_pps_pre_id" INTEGER,
	"cal_pps_anio" INTEGER,
	"cal_pps_ser_id" INTEGER,
	"cal_nombre_diligenciador" VARCHAR(200),
	"cal_apellido_diligenciador" VARCHAR(200),
	"cal_cedula_diligenciador" VARCHAR(15),
	"cal_telefono_diligenciador" VARCHAR(15),
	PRIMARY KEY ("cal_id")
);

COMMENT ON TABLE "calidad" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- calidadagua
-----------------------------------------------------------------------------

DROP TABLE "calidadagua" CASCADE;


CREATE TABLE "calidadagua"
(
	"cag_id" serial  NOT NULL,
	"cag_cal_id" INTEGER,
	"cag_control_ca_fuente" BOOLEAN,
	"cag_mapa_riesgo" BOOLEAN,
	"cag_db05_valor" VARCHAR(255),
	"cag_db05_frecuencia" VARCHAR(255),
	"cag_coliformes_valor" VARCHAR(255),
	"cag_coliformes_frecuencia" VARCHAR(255),
	"cag_oxigeno_disuelto_valor" VARCHAR(255),
	"cag_oxigeno_disuelto_frecuencia" VARCHAR(255),
	"cag_ph_valor" VARCHAR(255),
	"cag_ph_frecuencia" VARCHAR(255),
	"cag_turbiedad_valor" VARCHAR(255),
	"cag_turbiedad_frecuencia" VARCHAR(255),
	"cag_color_verdadero_valor" VARCHAR(255),
	"cag_color_verdadero_frecuencia" VARCHAR(255),
	"cag_sabor_olor_valor" VARCHAR(255),
	"cag_sabor_olor_frecuencia" VARCHAR(255),
	"cag_cloruros_valor" VARCHAR(255),
	"cag_cloruros_frecuencia" VARCHAR(255),
	"cag_fluoruros_valor" VARCHAR(255),
	"cag_fluoruros_frecuencia" VARCHAR(255),
	"cag_laboratorio_propio" BOOLEAN,
	"cag_control_ca_distribuida" BOOLEAN,
	"cag_puntos_red_analizados" INTEGER,
	"cag_visita_sspd" BOOLEAN,
	PRIMARY KEY ("cag_id")
);

COMMENT ON TABLE "calidadagua" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- calidadcantidadagua
-----------------------------------------------------------------------------

DROP TABLE "calidadcantidadagua" CASCADE;


CREATE TABLE "calidadcantidadagua"
(
	"cca_id" serial  NOT NULL,
	"cca_mic_id" INTEGER,
	"cca_actividades_agricola_cultivos_permanentes" BOOLEAN,
	"cca_actividades_agricola_cultivos_semipermanentes" BOOLEAN,
	"cca_actividades_agricola_temporales" BOOLEAN,
	"cca_actividad_pecuaria_ganaderia_bobina" BOOLEAN,
	"cca_actividad_pecuaria_ganaderia_equina" BOOLEAN,
	"cca_actividad_pecuaria_porcicultura" BOOLEAN,
	"cca_actividad_pecuaria_capricultura_ovinos" BOOLEAN,
	"cca_actividad_pecuaria_avicultura" BOOLEAN,
	"cca_actividad_pecuaria_piscicultura" BOOLEAN,
	"cca_actividad_pecuaria_otros_cual" BOOLEAN,
	"cca_control_plagas_enfermedades_quimico" BOOLEAN,
	"cca_control_plagas_enfermedades_organico" BOOLEAN,
	"cca_control_plagas_enfermedades_biologico" BOOLEAN,
	"cca_control_plagas_enfermedades_ninguno" BOOLEAN,
	"cca_fertilizacion_cultivos_quimico" BOOLEAN,
	"cca_fertilizacion_cultivos_organico" BOOLEAN,
	"cca_fertilizacion_cultivos_ninguno" BOOLEAN,
	"cca_capacitacion_dada_prestador" BOOLEAN,
	"cca_control_malezas_quimico" BOOLEAN,
	"cca_control_malezas_meca_manu" BOOLEAN,
	"cca_control_malezas_organico" BOOLEAN,
	"cca_control_malezas_ninguno" BOOLEAN,
	"cca_mineria" BOOLEAN,
	"cca_erosion" BOOLEAN,
	"cca_modificaciones_paisaje_construcion_vias" BOOLEAN,
	"cca_modificaciones_paisaje_construcion_vivienda" BOOLEAN,
	"cca_modificaciones_paisaje_construcion_otro" BOOLEAN,
	"cca_descargas_vivienda_liquido" BOOLEAN,
	"cca_descargas_vivienda_solido" BOOLEAN,
	"cca_descarga_actividad_productiva_agricola" BOOLEAN,
	"cca_descarga_actividad_productiva_pecuaria" BOOLEAN,
	"cca_descarga_actividad_productiva_minera" BOOLEAN,
	"cca_descarga_actividad_productiva_industrial" BOOLEAN,
	"cca_descarga_actividad_productiva_otra" BOOLEAN,
	PRIMARY KEY ("cca_id")
);

COMMENT ON TABLE "calidadcantidadagua" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- cantidadaguafuentessuperficiales
-----------------------------------------------------------------------------

DROP TABLE "cantidadaguafuentessuperficiales" CASCADE;


CREATE TABLE "cantidadaguafuentessuperficiales"
(
	"caf_id" serial  NOT NULL,
	"caf_fue_id" INTEGER,
	"caf_nombre_fuente" VARCHAR(100),
	"caf_epoca_lluvia_caudal_total" VARCHAR(255),
	"caf_epoca_lluvia_caudal_captado" VARCHAR(255),
	"caf_epoca_seca_caudal_total" VARCHAR(255),
	"caf_epoca_seca_caudal_captado" VARCHAR(255),
	PRIMARY KEY ("caf_id")
);

COMMENT ON TABLE "cantidadaguafuentessuperficiales" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- capacitacion
-----------------------------------------------------------------------------

DROP TABLE "capacitacion" CASCADE;


CREATE TABLE "capacitacion"
(
	"cap_id" serial  NOT NULL,
	"cap_iaf_id" INTEGER,
	"cap_dada_prestador" BOOLEAN,
	"cap_actividad_capacitacion_uso_eficiente_agua" BOOLEAN,
	"cap_actividad_capacitacion_higene_personal" BOOLEAN,
	"cap_actividad_capacitacion_higene_vivienda" BOOLEAN,
	"cap_actividad_capacitacion_higene_sitios_publicos" BOOLEAN,
	"cap_actividad_capacitacion_educacion_ambiental" BOOLEAN,
	"cap_actividad_capacitacion_participacion_comunitaria" BOOLEAN,
	"cap_actividad_capacitacion_veeduria_ciudadana" BOOLEAN,
	"cap_actividad_capacitacion_funcion_sist_abastecimiento" BOOLEAN,
	"cap_actividad_capacitacion_otra_cuales" VARCHAR(100),
	"cap_capacitacion_recibida_prest" BOOLEAN,
	"cap_temas_capacitacion_administrativos" BOOLEAN,
	"cap_temas_capacitacion_normativos" BOOLEAN,
	"cap_temas_capacitacion_ambientales" BOOLEAN,
	"cap_temas_capacitacion_operativos" BOOLEAN,
	"cap_temas_capacitacion_sui" BOOLEAN,
	"cap_temas_capacitacion_otra_cual" VARCHAR(100),
	"cap_instituciones_ofrecieron" VARCHAR(100),
	"cap_numero_directiva_hombres" VARCHAR(255),
	"cap_numero_directiva_mujeres" VARCHAR(255),
	PRIMARY KEY ("cap_id")
);

COMMENT ON TABLE "capacitacion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- captacion
-----------------------------------------------------------------------------

DROP TABLE "captacion" CASCADE;


CREATE TABLE "captacion"
(
	"capt_id" serial  NOT NULL,
	"capt_tipo_de_fondo" BOOLEAN,
	"capt_tipo_lateral" BOOLEAN,
	"capt_tipo_lecho_filtrante" BOOLEAN,
	"capt_tipo_lecho_represa" BOOLEAN,
	"capt_estado_estructura_id" INTEGER,
	"capt_estado_pozo_id" INTEGER,
	"capt_estado_bomba_id" INTEGER,
	"capt_fuente_energia_id" INTEGER,
	PRIMARY KEY ("capt_id")
);

COMMENT ON TABLE "captacion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- comunidadserviciorecoleccion
-----------------------------------------------------------------------------

DROP TABLE "comunidadserviciorecoleccion" CASCADE;


CREATE TABLE "comunidadserviciorecoleccion"
(
	"csr_id" serial  NOT NULL,
	"csr_srsf_id" INTEGER  NOT NULL,
	"csr_nombre_comunidad" VARCHAR(200),
	"csr_numero_viviendas_totales" INTEGER,
	"csr_numero_viviendas_con_servicio" INTEGER,
	"csr_numero_suscriptores" INTEGER,
	"csr_cantidad_prom_residuos_mes" VARCHAR(255),
	"csr_fecha_pesaje" DATE,
	PRIMARY KEY ("csr_id")
);

COMMENT ON TABLE "comunidadserviciorecoleccion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- cormecial
-----------------------------------------------------------------------------

DROP TABLE "cormecial" CASCADE;


CREATE TABLE "cormecial"
(
	"com_id" serial  NOT NULL,
	"com_pps_pre_id" INTEGER,
	"com_pps_anio" INTEGER,
	"com_pps_ser_id" INTEGER,
	"com_nombre_diligenciador" VARCHAR(200),
	"com_apellido_diligenciador" VARCHAR(200),
	"com_cedula_diligenciador" VARCHAR(15),
	"com_telefono_diligenciador" VARCHAR(15),
	PRIMARY KEY ("com_id")
);

COMMENT ON TABLE "cormecial" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- departamento
-----------------------------------------------------------------------------

DROP TABLE "departamento" CASCADE;


CREATE TABLE "departamento"
(
	"dep_id" serial  NOT NULL,
	"dep_nombre" VARCHAR(100),
	"dep_region" VARCHAR(100),
	"dep_zona" VARCHAR(100),
	PRIMARY KEY ("dep_id")
);

COMMENT ON TABLE "departamento" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- disposicionfinalresiduosaseo
-----------------------------------------------------------------------------

DROP TABLE "disposicionfinalresiduosaseo" CASCADE;


CREATE TABLE "disposicionfinalresiduosaseo"
(
	"dfr_id" serial  NOT NULL,
	"dfr_autoridad_autonoma_id" INTEGER,
	"dfr_estado_via_acceso_sitio_id" INTEGER,
	"dfr_departamento_dispocision_id" INTEGER,
	"dfr_municipio_disposicion_id" INTEGER,
	"dfr_top_id" INTEGER,
	"dfr_contrata_disposicion_final" BOOLEAN,
	"dfr_nombre_entidad_prestadora_servicio_disposicion" VARCHAR(200),
	"dfr_corregimiento_disposicion" VARCHAR(200),
	"dfr_vereda_disposicion" VARCHAR(200),
	"dfr_cuenta_autorizacion_ambiental_disposicion" BOOLEAN,
	"dfr_tipo_autorizacion_ambiental" VARCHAR(100),
	"dfr_resolucion_autoriza_disposicion" VARCHAR(100),
	"dfr_fecha_resolucion" DATE,
	"dfr_fecha_terminacion_resolucion" DATE,
	"dfr_fecha_terminacion_vida_util_sitio_disposicion" DATE,
	"dfr_cantidad_anual_residuos_botadero_cielo_abierto" VARCHAR(255),
	"dfr_cantidad_anual_residuos_relleno_sanitario" VARCHAR(255),
	"dfr_dist_centro_poblado_mas_cercano_sitio" VARCHAR(100),
	"dfr_dist_cuerpo_agua_mas_cercano_sitio" VARCHAR(100),
	"drf_anios_utilizacion_sitio" INTEGER,
	"dfr_area_destinada_para_disposicion_sitio" VARCHAR(255),
	"dfr_si_relleno_tipo_relleno" BOOLEAN,
	"dfr_presencia_recicladores_sitio" BOOLEAN,
	"dfr_cantidad_personas_sitio" INTEGER,
	"dfr_tratamiento_lixiviados_sitio" BOOLEAN,
	"dfr_tipo_tratamiento_lixiviados_sitio" VARCHAR(200),
	"dfr_lixi_entrada_fecha" DATE,
	"dfr_lixi_entrada_caudal" VARCHAR(255),
	"dfr_lixi_entrada_dbo5" VARCHAR(255),
	"dfr_lixi_entrada_sst" VARCHAR(255),
	"dfr_lixi_salida_fecha2" DATE,
	"dfr_lixi_salida_caudal2" VARCHAR(255),
	"dfr_lixi_salida_dbo6" VARCHAR(255),
	"dfr_lixi_salida_sst2" VARCHAR(255),
	"dfr_descarga_lixi_rio" BOOLEAN,
	"dfr_descarga_lixi_lago" BOOLEAN,
	"dfr_descarga_lixi_mar" BOOLEAN,
	"dfr_descarga_lixi_suelo" BOOLEAN,
	"dfr_descarga_lixi_rio_nombre" VARCHAR(100),
	"dfr_descarga_lixi_lago_nombre" VARCHAR(100),
	"dfr_descarga_lixi_mar_nombre" VARCHAR(100),
	"dfr_descarga_lixi_suelo_nombre" VARCHAR(100),
	"dfr_programa_control_vectores" BOOLEAN,
	"dfr_programa_control_gases" BOOLEAN,
	PRIMARY KEY ("dfr_id")
);

COMMENT ON TABLE "disposicionfinalresiduosaseo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- estadogeneral
-----------------------------------------------------------------------------

DROP TABLE "estadogeneral" CASCADE;


CREATE TABLE "estadogeneral"
(
	"esg_id" serial  NOT NULL,
	"esg_nombre" VARCHAR(50),
	PRIMARY KEY ("esg_id")
);

COMMENT ON TABLE "estadogeneral" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- estrato
-----------------------------------------------------------------------------

DROP TABLE "estrato" CASCADE;


CREATE TABLE "estrato"
(
	"est_id" serial  NOT NULL,
	"est_nombre" VARCHAR(50),
	"est_residencial" BOOLEAN,
	PRIMARY KEY ("est_id")
);

COMMENT ON TABLE "estrato" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- facturacionyrecaudo
-----------------------------------------------------------------------------

DROP TABLE "facturacionyrecaudo" CASCADE;


CREATE TABLE "facturacionyrecaudo"
(
	"fac_id" serial  NOT NULL,
	"fac_com_id" INTEGER,
	"fac_frecuencia_del_servicio" BOOLEAN,
	"fac_frecuenc_facturacion" VARCHAR(255),
	"fac_frecuenc_fac_justificacion" CHAR(30),
	"fac_num_fac_exp_ultimo_periodo" INTEGER,
	"fac_sist_fac_utilizado" BOOLEAN,
	"fac_frecuencia_fac_justifica" CHAR(30),
	"fac_morosidad_promedio" VARCHAR(255),
	"fac_vol_agua_fac_en_el_anio_acu" VARCHAR(255),
	"fac_vol_agua_suministrado_anio_acu" VARCHAR(255),
	PRIMARY KEY ("fac_id")
);

COMMENT ON TABLE "facturacionyrecaudo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- fondosolidaridadredistribucioningresos
-----------------------------------------------------------------------------

DROP TABLE "fondosolidaridadredistribucioningresos" CASCADE;


CREATE TABLE "fondosolidaridadredistribucioningresos"
(
	"fsi_id" serial  NOT NULL,
	"fsi_com_id" INTEGER,
	"fsi_sol_tranferencia_recursos" BOOLEAN,
	"fsi_recibo_recursos" BOOLEAN,
	"fsi_recibo_recursos_valor_recib" VARCHAR(255),
	"fsi_aporte_recursos" BOOLEAN,
	"fsi_aporte_recursos_valor_apor" VARCHAR(255),
	PRIMARY KEY ("fsi_id")
);

COMMENT ON TABLE "fondosolidaridadredistribucioningresos" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- fuenteenergia
-----------------------------------------------------------------------------

DROP TABLE "fuenteenergia" CASCADE;


CREATE TABLE "fuenteenergia"
(
	"fen_id" serial  NOT NULL,
	"fen_nombre" VARCHAR(100),
	PRIMARY KEY ("fen_id")
);

COMMENT ON TABLE "fuenteenergia" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- fuentes
-----------------------------------------------------------------------------

DROP TABLE "fuentes" CASCADE;


CREATE TABLE "fuentes"
(
	"fue_id" serial  NOT NULL,
	"fue_mic_id" INTEGER,
	"fue_numero_fuentes" INTEGER,
	"fue_numero_fuentes_subterraneas" INTEGER,
	"fue_compra_agua_bloque" BOOLEAN,
	"fue_metodo_aforo_volumetrico" BOOLEAN,
	"fue_metodo_aforo_micromolinete" BOOLEAN,
	"fue_metodo_aforo_velocidad" BOOLEAN,
	"fue_metodo_aforo_otro_cual" VARCHAR(100),
	PRIMARY KEY ("fue_id")
);

COMMENT ON TABLE "fuentes" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- fuentesdubterraneas
-----------------------------------------------------------------------------

DROP TABLE "fuentesdubterraneas" CASCADE;


CREATE TABLE "fuentesdubterraneas"
(
	"fsu_id" serial  NOT NULL,
	"fsu_fue_id" INTEGER,
	"fsu_nombre" VARCHAR(100),
	"fsu_promedio_captacion" VARCHAR(255),
	PRIMARY KEY ("fsu_id")
);

COMMENT ON TABLE "fuentesdubterraneas" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- gestionresultado
-----------------------------------------------------------------------------

DROP TABLE "gestionresultado" CASCADE;


CREATE TABLE "gestionresultado"
(
	"gre_id" serial  NOT NULL,
	"gre_iaf_id" INTEGER,
	"gre_plan_gestion_resultados" BOOLEAN,
	"gre_micromedidores_funcionando" INTEGER,
	"gre_total_suscriptores_micromed" INTEGER,
	"gre_valor_micomedicion" VARCHAR(255),
	"gre_macromedidores_funcionando" INTEGER,
	"gre_macromedidores_proyectados" INTEGER,
	"gre_valor_macromedicion" VARCHAR(255),
	"gre_muestras_tomadas" INTEGER,
	"gre_muestras_aptas" INTEGER,
	"gre_valor_calidad_agua" VARCHAR(255),
	"gre_total_suscriptores_facturac" INTEGER,
	"gre_total_facturas_diciembre" INTEGER,
	"gre_valor_facturacion" VARCHAR(255),
	PRIMARY KEY ("gre_id")
);

COMMENT ON TABLE "gestionresultado" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- informacioncontable
-----------------------------------------------------------------------------

DROP TABLE "informacioncontable" CASCADE;


CREATE TABLE "informacioncontable"
(
	"ico_id" serial  NOT NULL,
	"ico_iaf_id" INTEGER,
	"ico_balance_general" DATE,
	"ico_activos" VARCHAR(255),
	"ico_activos_corrientes" VARCHAR(255),
	"ico_efectivo" VARCHAR(255),
	"ico_deudores" VARCHAR(255),
	"ico_inventario" VARCHAR(255),
	"ico_activos_fijos" VARCHAR(255),
	"ico_propiedad_planta_equipos" VARCHAR(255),
	"ico_otros_activos" VARCHAR(255),
	"ico_pasivo" VARCHAR(255),
	"ico_pasivos_corrientes" VARCHAR(255),
	"ico_obligaciones_financieras" VARCHAR(255),
	"ico_otras_cuentas_por_pagar" VARCHAR(255),
	"ico_obligaciones_laborales" VARCHAR(255),
	"ico_otros_pasivos" VARCHAR(255),
	"ico_patrimonio" VARCHAR(255),
	"ico_estado_de_resultados" DATE,
	"ico_total_ingresos" VARCHAR(255),
	"ico_ingresos_operacionales" VARCHAR(255),
	"ico_ingresos_no_operacionales" VARCHAR(255),
	"ico_total_egresos" VARCHAR(255),
	"ico_gastos_administrativos" VARCHAR(255),
	"ico_costo_operacion_mantenimien" VARCHAR(255),
	"ico_costo_inversion" VARCHAR(255),
	"ico_resultados_ejercicio" VARCHAR(255),
	PRIMARY KEY ("ico_id")
);

COMMENT ON TABLE "informacioncontable" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- informaciongeneralmicrocuencas
-----------------------------------------------------------------------------

DROP TABLE "informaciongeneralmicrocuencas" CASCADE;


CREATE TABLE "informaciongeneralmicrocuencas"
(
	"imi_id" serial  NOT NULL,
	"imi_mic_id" INTEGER,
	"imi_dep_id" INTEGER,
	"imi_mun_id" INTEGER,
	"imi_localidad" VARCHAR(100),
	"imi_microcuenta" VARCHAR(100),
	"imi_codigo_cuenca" VARCHAR(100),
	"imi_fecha" DATE,
	PRIMARY KEY ("imi_id")
);

COMMENT ON TABLE "informaciongeneralmicrocuencas" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- informacionvisual
-----------------------------------------------------------------------------

DROP TABLE "informacionvisual" CASCADE;


CREATE TABLE "informacionvisual"
(
	"iv_id" serial  NOT NULL,
	"iv_pre_id" INTEGER,
	"iv_nombre" VARCHAR(100),
	"iv_url" VARCHAR(200),
	"iv_descripcion" VARCHAR(200),
	"iv_tipo" VARCHAR(50),
	PRIMARY KEY ("iv_id")
);

COMMENT ON TABLE "informacionvisual" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- materialcanal
-----------------------------------------------------------------------------

DROP TABLE "materialcanal" CASCADE;


CREATE TABLE "materialcanal"
(
	"mca_id" serial  NOT NULL,
	"mca_nombre" VARCHAR(100),
	PRIMARY KEY ("mca_id")
);

COMMENT ON TABLE "materialcanal" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- materialreddistribucion
-----------------------------------------------------------------------------

DROP TABLE "materialreddistribucion" CASCADE;


CREATE TABLE "materialreddistribucion"
(
	"mrd_id" serial  NOT NULL,
	"mrd_nombre" VARCHAR(100),
	PRIMARY KEY ("mrd_id")
);

COMMENT ON TABLE "materialreddistribucion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- microcuencas
-----------------------------------------------------------------------------

DROP TABLE "microcuencas" CASCADE;


CREATE TABLE "microcuencas"
(
	"mic_id" serial  NOT NULL,
	"mic_pps_pre_id" INTEGER,
	"mic_pps_anio" INTEGER,
	"mic_pps_ser_id" INTEGER,
	"mic_nombre_diligenciador" VARCHAR(200),
	"mic_apellido_diligenciador" VARCHAR(200),
	"mic_cedula_diligenciador" VARCHAR(15),
	"mic_telefono_diligenciador" VARCHAR(15),
	PRIMARY KEY ("mic_id")
);

COMMENT ON TABLE "microcuencas" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- municipio
-----------------------------------------------------------------------------

DROP TABLE "municipio" CASCADE;


CREATE TABLE "municipio"
(
	"mun_id" serial  NOT NULL,
	"mun_dep_id" INTEGER,
	"mun_nombre" VARCHAR(200),
	"mun_zona" VARCHAR(50),
	PRIMARY KEY ("mun_id")
);

COMMENT ON TABLE "municipio" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- parametrospuntosred
-----------------------------------------------------------------------------

DROP TABLE "parametrospuntosred" CASCADE;


CREATE TABLE "parametrospuntosred"
(
	"ppr_id" serial  NOT NULL,
	"ppr_nombre_paramentro" VARCHAR(100),
	PRIMARY KEY ("ppr_id")
);

COMMENT ON TABLE "parametrospuntosred" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- parametroxfrecuencia
-----------------------------------------------------------------------------

DROP TABLE "parametroxfrecuencia" CASCADE;


CREATE TABLE "parametroxfrecuencia"
(
	"pfe_id" serial  NOT NULL,
	"pfe_ppr_id_paramentro" INTEGER,
	"pfe_cag_id" INTEGER,
	"pfe_frecuanecia_minima" VARCHAR(100),
	"pfe_frecuanecia_real" VARCHAR(255),
	PRIMARY KEY ("pfe_id")
);

COMMENT ON TABLE "parametroxfrecuencia" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- participacionciudadana
-----------------------------------------------------------------------------

DROP TABLE "participacionciudadana" CASCADE;


CREATE TABLE "participacionciudadana"
(
	"par_id" serial  NOT NULL,
	"par_iaf_id" INTEGER,
	"par_participacion_ciudadana_directa" BOOLEAN,
	"par_participacion_ciudadana_asamblea_repre_dele" BOOLEAN,
	"par_participacion_ciudadana_comite_desarr_control_social" BOOLEAN,
	"par_participacion_ciudadana_veedurias" BOOLEAN,
	"par_participacion_ciudadana_otra_cual" VARCHAR(100),
	"par_propuestas_vocales" BOOLEAN,
	PRIMARY KEY ("par_id")
);

COMMENT ON TABLE "participacionciudadana" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- perfil
-----------------------------------------------------------------------------

DROP TABLE "perfil" CASCADE;


CREATE TABLE "perfil"
(
	"per_id" serial  NOT NULL,
	"per_nombre" VARCHAR(50),
	PRIMARY KEY ("per_id")
);

COMMENT ON TABLE "perfil" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- periodoporprestadorservicio
-----------------------------------------------------------------------------

DROP TABLE "periodoporprestadorservicio" CASCADE;


CREATE TABLE "periodoporprestadorservicio"
(
	"pps_pre_id" INTEGER  NOT NULL,
	"pps_ser_id" INTEGER  NOT NULL,
	"pps_anio" INTEGER  NOT NULL,
	"pps_presupuesto_aprobado" BOOLEAN,
	"pps_suscriptores_pendientes_de_pago" VARCHAR(255),
	PRIMARY KEY ("pps_pre_id","pps_ser_id","pps_anio")
);

COMMENT ON TABLE "periodoporprestadorservicio" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- peticionesquejasrecursos
-----------------------------------------------------------------------------

DROP TABLE "peticionesquejasrecursos" CASCADE;


CREATE TABLE "peticionesquejasrecursos"
(
	"pqr_id" serial  NOT NULL,
	"pqr_com_id" INTEGER,
	"pqr_registro_pqr" BOOLEAN,
	"pqr_cantidad_anual_pqr" INTEGER,
	"pqr_cantidad_pqr_facturacion" INTEGER,
	"pqr_cantidad_pqr_instalacion" INTEGER,
	"pqr_cantida_pqr_prest_servicio" INTEGER,
	"pqr_cantidad_pqr_otro" INTEGER,
	"pqr_cantidad_pqr_explica_otros" CHAR(50),
	"pqr_inf_causa_suspension_corte" BOOLEAN,
	"pqr_inf_causa_susp_corte_explic" CHAR(50),
	PRIMARY KEY ("pqr_id")
);

COMMENT ON TABLE "peticionesquejasrecursos" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- prestador
-----------------------------------------------------------------------------

DROP TABLE "prestador" CASCADE;


CREATE TABLE "prestador"
(
	"pre_id" serial  NOT NULL,
	"pre_ran_id" INTEGER,
	"pre_usu_id" INTEGER,
	"pre_identificacion_prestador" VARCHAR(50),
	"pre_tipo_identificacion_prestad" VARCHAR(50),
	"pre_nombre_prestador" VARCHAR(200),
	"pre_estatutos" BOOLEAN,
	"pre_numero_empleados_con_competencias" VARCHAR(255),
	"pre_numero_empleados_sin_competencias" VARCHAR(255),
	"pre_numero_empleados_proceso_competencias" VARCHAR(255),
	PRIMARY KEY ("pre_id"),
	CONSTRAINT "pre_identificacion_prestador_idx" UNIQUE ("pre_identificacion_prestador")
);

COMMENT ON TABLE "prestador" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- proteccionfuentessuperficialesagua
-----------------------------------------------------------------------------

DROP TABLE "proteccionfuentessuperficialesagua" CASCADE;


CREATE TABLE "proteccionfuentessuperficialesagua"
(
	"pfu_id" serial  NOT NULL,
	"pfu_mic_id" INTEGER,
	"pfu_programas_aislamiento" BOOLEAN,
	"pfu_programas_reforestacion" BOOLEAN,
	"pfu_programas_mejoramiento_uso_suelo" BOOLEAN,
	"pfu_programas_adquisicion_tierra" BOOLEAN,
	"pfu_programas_educacion_ambiental" BOOLEAN,
	"pfu_programas_reduccion_uso_agroquimicos" BOOLEAN,
	"pfu_situacion_arriba_captacion_reserva" BOOLEAN,
	"pfu_situacion_arriba_captacion_protegida" BOOLEAN,
	"pfu_cobertura_forestal_bosque_natural" BOOLEAN,
	"pfu_cobertura_forestal_bosque_protector" BOOLEAN,
	"pfu_cobertura_forestal_bosque_protector_productor" BOOLEAN,
	"pfu_cobertura_forestal_productor" BOOLEAN,
	"pfu_cobertura_forestal_regeneracion_natural" BOOLEAN,
	"pfu_cobertura_forestal_area_protectora_cauce" BOOLEAN,
	"pfu_aislamiento_franja_amarilla_microcuenca" BOOLEAN,
	"pfu_area_microcuenca_propiedad_acueducto" BOOLEAN,
	PRIMARY KEY ("pfu_id")
);

COMMENT ON TABLE "proteccionfuentessuperficialesagua" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- rango
-----------------------------------------------------------------------------

DROP TABLE "rango" CASCADE;


CREATE TABLE "rango"
(
	"ran_id" serial  NOT NULL,
	"ran_tipo" VARCHAR(50),
	PRIMARY KEY ("ran_id")
);

COMMENT ON TABLE "rango" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- recolecciontrasnporteaseo
-----------------------------------------------------------------------------

DROP TABLE "recolecciontrasnporteaseo" CASCADE;


CREATE TABLE "recolecciontrasnporteaseo"
(
	"rtr_id" serial  NOT NULL,
	"rtr_top_id" INTEGER,
	"rtr_tipo_recoleccion_selectiva" BOOLEAN,
	"rtr_tipo_recoleccion_conjuntiva" BOOLEAN,
	"rtr_distancia_recorrida_sitio_final" VARCHAR(50),
	"rtr_frecuencia_servicio_barrido" VARCHAR(100),
	"rtr_frecuencia_servicio_recoleccion" VARCHAR(100),
	PRIMARY KEY ("rtr_id")
);

COMMENT ON TABLE "recolecciontrasnporteaseo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- reddistribucion
-----------------------------------------------------------------------------

DROP TABLE "reddistribucion" CASCADE;


CREATE TABLE "reddistribucion"
(
	"rdist_id" serial  NOT NULL,
	"rdist_nombre" VARCHAR(100),
	PRIMARY KEY ("rdist_id")
);

COMMENT ON TABLE "reddistribucion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- resultadosxpunto
-----------------------------------------------------------------------------

DROP TABLE "resultadosxpunto" CASCADE;


CREATE TABLE "resultadosxpunto"
(
	"rep_id" serial  NOT NULL,
	"rep_ppr_id_paramentro" INTEGER,
	"rep_cag_id" INTEGER,
	"rep_punto" INTEGER,
	"rep_resultado" VARCHAR(255),
	PRIMARY KEY ("rep_id")
);

COMMENT ON TABLE "resultadosxpunto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- separacionresiduossolidosfuentesaseo
-----------------------------------------------------------------------------

DROP TABLE "separacionresiduossolidosfuentesaseo" CASCADE;


CREATE TABLE "separacionresiduossolidosfuentesaseo"
(
	"srsf_id" serial  NOT NULL,
	"srsf_top_id" INTEGER,
	"srsf_programa_separacion_residuos_solidos" BOOLEAN,
	"srsf_materiales_separados_organico" BOOLEAN,
	"srsf_materiales_separados_otros_vidrio" BOOLEAN,
	"srsf_materiales_separados_otros_papel" BOOLEAN,
	"srsf_materiales_separados_otros_plastico" BOOLEAN,
	"srsf_materiales_separados_otros_metales" BOOLEAN,
	"srsf_materiales_separados_otros_otros" BOOLEAN,
	"srsf_materiales_separados_higenicos" BOOLEAN,
	"srsf_numero_suscriptores_que__separan" INTEGER,
	"srsf_existe_separacion_sitio_final" BOOLEAN,
	"srsf_toneladas_residuos_anio" VARCHAR(255),
	PRIMARY KEY ("srsf_id")
);

COMMENT ON TABLE "separacionresiduossolidosfuentesaseo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- servicio
-----------------------------------------------------------------------------

DROP TABLE "servicio" CASCADE;


CREATE TABLE "servicio"
(
	"ser_id" serial  NOT NULL,
	"ser_nombre" VARCHAR(50),
	PRIMARY KEY ("ser_id")
);

COMMENT ON TABLE "servicio" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- suscriptoresservicioacueducto
-----------------------------------------------------------------------------

DROP TABLE "suscriptoresservicioacueducto" CASCADE;


CREATE TABLE "suscriptoresservicioacueducto"
(
	"ssacu_id" serial  NOT NULL,
	"ssacu_aco_id" INTEGER,
	"ssacu_est_id" INTEGER,
	"ssacu_numero_suscriptores" INTEGER,
	"ssacu_tarifa_sin_medicion" VARCHAR(255),
	"ssacu_cargo_fijo" VARCHAR(255),
	"ssacu_tarifa_consumo_basico" VARCHAR(255),
	"ssacu_tarifa_consumo_complementario" VARCHAR(255),
	"ssacu_tarifa_consumo_suntuario" VARCHAR(255),
	PRIMARY KEY ("ssacu_id")
);

COMMENT ON TABLE "suscriptoresservicioacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- suscriptoresservicioaseo
-----------------------------------------------------------------------------

DROP TABLE "suscriptoresservicioaseo" CASCADE;


CREATE TABLE "suscriptoresservicioaseo"
(
	"ssase_id" serial  NOT NULL,
	"ssase_aco_id" INTEGER,
	"ssase_est_id" INTEGER,
	"ssase_tarifa" VARCHAR(255),
	"ssase_numero_suscriptores" INTEGER,
	PRIMARY KEY ("ssase_id")
);

COMMENT ON TABLE "suscriptoresservicioaseo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tanque
-----------------------------------------------------------------------------

DROP TABLE "tanque" CASCADE;


CREATE TABLE "tanque"
(
	"tan_id" serial  NOT NULL,
	"tan_estado_id" INTEGER,
	"tan_bypass_directo_red" BOOLEAN,
	"tan_presencia_valvula_control" BOOLEAN,
	"tan_proteccion_tapa" BOOLEAN,
	"tan_cerramiento_lote" BOOLEAN,
	"tan_ventosa_salida" BOOLEAN,
	"tan_macro_medidor" BOOLEAN,
	PRIMARY KEY ("tan_id")
);

COMMENT ON TABLE "tanque" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativaacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativaacueducto" CASCADE;


CREATE TABLE "tecnicooperativaacueducto"
(
	"toa_id" serial  NOT NULL,
	"toa_top_id" INTEGER,
	"toa_tipos_sistema_abastecimiento" VARCHAR(100),
	"toa_gravedad_sin_tratamiento" BOOLEAN,
	"toa_bombeo_sin_tratamiento" BOOLEAN,
	"toa_gravedad_con_tratamiento" BOOLEAN,
	"toa_bombeo_con_tratamiento" BOOLEAN,
	"toa_gravedad_bombeo_sin_tratamiento" BOOLEAN,
	"toa_gravedad_bombeo_con_tratamiento" BOOLEAN,
	"toa_gravedad_sin_tratamiento_bombeo_con_tratamiento" BOOLEAN,
	"toa_gravedad_con_tratamiento_bombeo_sin_tratamiento" BOOLEAN,
	"toa_cantidad_agua_distribuida_por_ano" VARCHAR(255),
	"toa_soluciones_poblacion_no_atendido_por_acueducto" VARCHAR(100),
	"toa_solucion_acarreo" BOOLEAN,
	"toa_solucion_acarreo_viviendas" INTEGER,
	"toa_solucion_nacimiento" BOOLEAN,
	"toa_solucion_nacimiento_viviendas" INTEGER,
	"toa_toa_solucion_aljibe" BOOLEAN,
	"toa_solucion_aljibe_viviendas" INTEGER,
	"toa_solucion_agua_lluvia" BOOLEAN,
	"toa_solucion_agua_lluvia_viviendas" INTEGER,
	"toa_solucion_otro" BOOLEAN,
	"toa_solucion_otro_cual" VARCHAR(100),
	"toa_solucion_otro_viviendas" INTEGER,
	PRIMARY KEY ("toa_id")
);

COMMENT ON TABLE "tecnicooperativaacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativaaduccionimpulsionacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativaaduccionimpulsionacueducto" CASCADE;


CREATE TABLE "tecnicooperativaaduccionimpulsionacueducto"
(
	"toai_id" serial  NOT NULL,
	"toai_top_id" INTEGER,
	"toai_material_canal_id" INTEGER,
	"toai_tipo_canal_id" INTEGER,
	"toai_longitud" VARCHAR(255),
	"toai_diametro" VARCHAR(255),
	"toai_edad" INTEGER,
	PRIMARY KEY ("toai_id")
);

COMMENT ON TABLE "tecnicooperativaaduccionimpulsionacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativaalmacenamientoacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativaalmacenamientoacueducto" CASCADE;


CREATE TABLE "tecnicooperativaalmacenamientoacueducto"
(
	"toaa_id" serial  NOT NULL,
	"toaa_top_id" INTEGER  NOT NULL,
	"toaa_tan_id" INTEGER  NOT NULL,
	PRIMARY KEY ("toaa_id","toaa_top_id","toaa_tan_id")
);

COMMENT ON TABLE "tecnicooperativaalmacenamientoacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativacaptacionacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativacaptacionacueducto" CASCADE;


CREATE TABLE "tecnicooperativacaptacionacueducto"
(
	"toca_id" serial  NOT NULL,
	"toca_top_id" INTEGER  NOT NULL,
	"toca_capt_id" INTEGER  NOT NULL,
	PRIMARY KEY ("toca_id","toca_top_id","toca_capt_id")
);

COMMENT ON TABLE "tecnicooperativacaptacionacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativacomponentessistema
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativacomponentessistema" CASCADE;


CREATE TABLE "tecnicooperativacomponentessistema"
(
	"tocs_id" serial  NOT NULL,
	"tocs_top_id" INTEGER,
	"tocs_componentes" VARCHAR(100),
	"tocs_captacion" BOOLEAN,
	"tocs_captacion_cantidad" INTEGER,
	"tocs_aduccion" BOOLEAN,
	"tocs_aduccion_cantidad" INTEGER,
	"tocs_desarenador" BOOLEAN,
	"tocs_desarenador_cantidad" INTEGER,
	"tocs_conduccion_agua_cruda" BOOLEAN,
	"tocs_conduccion_agua_cruda_cantidad" INTEGER,
	"tocs_planta_tratamiento" BOOLEAN,
	"tocs_planta_tratamiento_cantidad" INTEGER,
	"tocs_desinfeccion" BOOLEAN,
	"tocs_desinfeccion_cantidad" INTEGER,
	"tocs_tanque_almacenamiento" BOOLEAN,
	"tocs_tanque_almacenamiento_cantidad" INTEGER,
	"tocs_conduccion_agua_tratada" BOOLEAN,
	"tocs_conduccion_agua_tratada_cantidad" INTEGER,
	"tocs_red_distribucion" BOOLEAN,
	"tocs_red_distribucion_cantidad" INTEGER,
	PRIMARY KEY ("tocs_id")
);

COMMENT ON TABLE "tecnicooperativacomponentessistema" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativadesarenadoracueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativadesarenadoracueducto" CASCADE;


CREATE TABLE "tecnicooperativadesarenadoracueducto"
(
	"todes_id" serial  NOT NULL,
	"todes_top_id" INTEGER,
	"todes_desarenador" VARCHAR(100),
	"todes_bypass" BOOLEAN,
	"todes_valvula" BOOLEAN,
	"todes_aguas_erosion" BOOLEAN,
	PRIMARY KEY ("todes_id")
);

COMMENT ON TABLE "tecnicooperativadesarenadoracueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativadesinfeccionacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativadesinfeccionacueducto" CASCADE;


CREATE TABLE "tecnicooperativadesinfeccionacueducto"
(
	"toda_id" serial  NOT NULL,
	"toda_top_id" INTEGER,
	"toda_desinfeccion" BOOLEAN,
	"toda_tipo_desinfeccion" VARCHAR(100),
	"toda_desinfeccion_cloro" BOOLEAN,
	"toda_desinfeccion_hipoclorito_sodio" BOOLEAN,
	"toda_desinfeccion_hipoclorito_calcio" BOOLEAN,
	"toda_desinfeccion_ozonacion" BOOLEAN,
	"toda_desinfeccion_rayos_ultravioleta" BOOLEAN,
	"toda_desinfeccion_dioxido_cloro" BOOLEAN,
	PRIMARY KEY ("toda_id")
);

COMMENT ON TABLE "tecnicooperativadesinfeccionacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativalineaconduccionaguacrudaacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativalineaconduccionaguacrudaacueducto" CASCADE;


CREATE TABLE "tecnicooperativalineaconduccionaguacrudaacueducto"
(
	"tolc_id" serial  NOT NULL,
	"tolc_top_id" INTEGER,
	"tolc_tipo_canal_id" INTEGER,
	"tolc_material_canal_id" INTEGER,
	"tolc_longitud" VARCHAR(255),
	"tolc_diametro" VARCHAR(255),
	"tolc_edad" INTEGER,
	PRIMARY KEY ("tolc_id")
);

COMMENT ON TABLE "tecnicooperativalineaconduccionaguacrudaacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativaplantaaguapotableacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativaplantaaguapotableacueducto" CASCADE;


CREATE TABLE "tecnicooperativaplantaaguapotableacueducto"
(
	"topla_id" serial  NOT NULL,
	"topla_top_id" INTEGER,
	"topla_tecnologia_utilizada" VARCHAR(100),
	"topla_tecnologia_utilizada_cc" BOOLEAN,
	"topla_tecnologia_utilizada_fd" BOOLEAN,
	"topla_tecnologia_utilizada_pc" BOOLEAN,
	"topla_tecnologia_utilizada_fime" BOOLEAN,
	"topla_tecnologia_utilizada_ct" BOOLEAN,
	"topla_tecnologia_utilizada_rhm" BOOLEAN,
	"topla_ciclo_completo" VARCHAR(100),
	"topla_ciclo_completo_mr" BOOLEAN,
	"topla_ciclo_completo_flh" BOOLEAN,
	"topla_ciclo_completo_flm" BOOLEAN,
	"topla_ciclo_completo_sd" BOOLEAN,
	"topla_ciclo_completo_fr" BOOLEAN,
	"topla_filtracion_directa" VARCHAR(100),
	"topla_filtracion_directa_mr" BOOLEAN,
	"topla_filtracion_directa_flh" BOOLEAN,
	"topla_filtracion_directa_flm" BOOLEAN,
	"topla_filtracion_directa_fr" BOOLEAN,
	"topla_filtracion_multiples_etapas" VARCHAR(100),
	"topla_fime_fgd" BOOLEAN,
	"topla_fime_fgac" BOOLEAN,
	"topla_fime_fgas2" BOOLEAN,
	"topla_fime_fgas3" BOOLEAN,
	"topla_fime_fla" BOOLEAN,
	"topla_remocion_hierro_manganeso" VARCHAR(100),
	"topla_rhm_bandejas_cascadas" BOOLEAN,
	"topla_rhm_aspersores" BOOLEAN,
	"topla_rhm_sd" BOOLEAN,
	"topla_rhm_fr" BOOLEAN,
	"topla_rhm_fime" BOOLEAN,
	"topla_planta_ttmto_funciona" BOOLEAN,
	"topla_estructuras_medicion_cau" BOOLEAN,
	PRIMARY KEY ("topla_id")
);

COMMENT ON TABLE "tecnicooperativaplantaaguapotableacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativareddistribucionacueducto
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativareddistribucionacueducto" CASCADE;


CREATE TABLE "tecnicooperativareddistribucionacueducto"
(
	"tord_id" serial  NOT NULL,
	"tord_top_id" INTEGER,
	"tord_red_distribucion_id" INTEGER,
	"tord_material_distribucion_id" INTEGER,
	"tord_material_diametro" VARCHAR(255),
	"tord_material_edad" INTEGER,
	PRIMARY KEY ("tord_id")
);

COMMENT ON TABLE "tecnicooperativareddistribucionacueducto" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tecnicooperativo
-----------------------------------------------------------------------------

DROP TABLE "tecnicooperativo" CASCADE;


CREATE TABLE "tecnicooperativo"
(
	"top_id" serial  NOT NULL,
	"top_pps_pre_id" INTEGER,
	"top_pps_anio" INTEGER,
	"top_pps_ser_id" INTEGER,
	"top_nombre_diligenciador" VARCHAR(200),
	"top_apellido_diligenciador" VARCHAR(200),
	"top_cedula_diligenciador" VARCHAR(15),
	"top_telefono_diligenciador" VARCHAR(15),
	PRIMARY KEY ("top_id")
);

COMMENT ON TABLE "tecnicooperativo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tipocanal
-----------------------------------------------------------------------------

DROP TABLE "tipocanal" CASCADE;


CREATE TABLE "tipocanal"
(
	"tca_id" serial  NOT NULL,
	"tca_nombre" VARCHAR(100),
	PRIMARY KEY ("tca_id")
);

COMMENT ON TABLE "tipocanal" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tipofuentesuperficial
-----------------------------------------------------------------------------

DROP TABLE "tipofuentesuperficial" CASCADE;


CREATE TABLE "tipofuentesuperficial"
(
	"tfu_id" serial  NOT NULL,
	"tfu_fue_id" INTEGER,
	"tfu_nacimiento" VARCHAR(100),
	"tfu_quebrada_rio" VARCHAR(100),
	"tfu_reservorio" VARCHAR(100),
	"tfu_mar" VARCHAR(100),
	PRIMARY KEY ("tfu_id")
);

COMMENT ON TABLE "tipofuentesuperficial" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- trabajadoresyvinculacion
-----------------------------------------------------------------------------

DROP TABLE "trabajadoresyvinculacion" CASCADE;


CREATE TABLE "trabajadoresyvinculacion"
(
	"tra_id" serial  NOT NULL,
	"tra_iaf_id" INTEGER,
	"tra_area_administrativa" INTEGER,
	"tra_cargo_administrativo" VARCHAR(50),
	"tra_tipo_vincula_admin_termino_indefinido" BOOLEAN,
	"tra_tipo_vincula_admin_termino_fijo" BOOLEAN,
	"tra_tipo_vincula_admin_prestacion_servicios" BOOLEAN,
	"tra_tipo_vincula_admin_sin_contrato_con_bonificacion" BOOLEAN,
	"tra_tipo_vincula_admin_remuneracion_mensual" BOOLEAN,
	"tra_valor_remuneracion_admin" VARCHAR(255),
	"tra_area_operativa" INTEGER,
	"tra_cargo_operativo" VARCHAR(50),
	"tra_tipo_vincula_ope_termino_indefinido" BOOLEAN,
	"tra_tipo_vincula_ope_termino_fijo" BOOLEAN,
	"tra_tipo_vincula_ope_prestacion_servicios" BOOLEAN,
	"tra_tipo_vincula_ope_sin_contrato_con_bonificacion" BOOLEAN,
	"tra_tipo_vincula_ope_remuneracion_mensual" BOOLEAN,
	"tra_valor_remuneracion_ope" VARCHAR(255),
	"tra_manual_procedimiento" BOOLEAN,
	"tra_manual_funciones" BOOLEAN,
	PRIMARY KEY ("tra_id")
);

COMMENT ON TABLE "trabajadoresyvinculacion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- tratamientoaprovechamientoresiduossolidosaseo
-----------------------------------------------------------------------------

DROP TABLE "tratamientoaprovechamientoresiduossolidosaseo" CASCADE;


CREATE TABLE "tratamientoaprovechamientoresiduossolidosaseo"
(
	"tap_id" serial  NOT NULL,
	"tap_top_id" INTEGER,
	"tap_peso_residuos_comida_jardin" VARCHAR(255),
	"tap_peso_papel_carton" VARCHAR(255),
	"tap_peso_plasticos" VARCHAR(255),
	"tap_peso_caucho_cuero" VARCHAR(255),
	"tap_peso_textiles" VARCHAR(255),
	"tap_peso_madera" VARCHAR(255),
	"tap_peso_productos_metalicos" VARCHAR(255),
	"tap_peso_vidrios" VARCHAR(255),
	"tap_peso_ceramicos_roca_escombro" VARCHAR(255),
	"tap_peso_huesos" VARCHAR(255),
	"tap_peso_residuos_higenicos" VARCHAR(255),
	"tap_peso_otros_residuos" VARCHAR(255),
	"tap_desti_rs_sepa_organi_ton_mes" VARCHAR(255),
	"tap_desti_rs_sepa_organi_dis_cie_abie" BOOLEAN,
	"tap_desti_rs_sepa_organi_dis_rell_sani" BOOLEAN,
	"tap_desti_rs_sepa_organi_arroja_agua" BOOLEAN,
	"tap_desti_rs_sepa_organi_arroja_agua_cant" VARCHAR(255),
	"tap_desti_rs_sepa_organi_aprovecha" BOOLEAN,
	"tap_desti_rs_sepa_organi_aprov_total_proce" VARCHAR(255),
	"tap_desti_rs_sepa_organi_aprov_total_termi" VARCHAR(255),
	"tap_desti_rs_sepa_organi_otro_cual" VARCHAR(100),
	"tap_desti_rs_sepa_resicla_ton_mes" VARCHAR(255),
	"tap_desti_rs_sepa_resicla_queman" BOOLEAN,
	"tap_desti_rs_sepa_resicla_dis_cie_abie" BOOLEAN,
	"tap_desti_rs_sepa_resicla_dis_rell_sani" BOOLEAN,
	"tap_desti_rs_sepa_resicla_arroja_agua" BOOLEAN,
	"tap_desti_rs_sepa_resicla_arroja_agua_cant" VARCHAR(255),
	"tap_desti_rs_sepa_resicla_regalan" BOOLEAN,
	"tap_desti_rs_sepa_resicla_venden" BOOLEAN,
	"tap_desti_rs_sepa_resicla_ven_vidrio" BOOLEAN,
	"tap_desti_rs_sepa_resicla_ven_papel" BOOLEAN,
	"tap_desti_rs_sepa_resicla_ven_plasti" BOOLEAN,
	"tap_desti_rs_sepa_resicla_ven_metal" BOOLEAN,
	"tap_desti_rs_sepa_resicla_ven_vidrio_cant" VARCHAR(255),
	"tap_desti_rs_sepa_resicla_ven_papel_cant" VARCHAR(255),
	"tap_desti_rs_sepa_resicla_ven_plasti_cant" VARCHAR(255),
	"tap_desti_rs_sepa_resicla_ven_metal_cant" VARCHAR(255),
	"tap_desti_rs_sepa_higen_queman" BOOLEAN,
	"tap_desti_rs_sepa_higen_dis_cie_abie" BOOLEAN,
	"tap_desti_rs_sepa_higen_dis_rell_sani" BOOLEAN,
	"tap_desti_rs_sepa_higen_arroja_agua" BOOLEAN,
	"tap_desti_rs_sepa_higen_arroja_agua_cant" VARCHAR(255),
	"tap_desti_rs_sepa_higen_otro_cual" VARCHAR(100),
	"tap_desti_rs_nosepa_recole_queman" BOOLEAN,
	"tap_desti_rs_nosepa_recole_dis_cie_abie" BOOLEAN,
	"tap_desti_rs_nosepa_recole_dis_rell_sani" BOOLEAN,
	"tap_desti_rs_nosepa_recole_arroja_agua" BOOLEAN,
	"tap_desti_rs_nosepa_recole_arroja_agua_cant" VARCHAR(255),
	"tap_desti_rs_nosepa_recole_sepa_sit_disp" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_nocomer" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_vidrio" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_papel" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_plasti" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_metal" BOOLEAN,
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_vidrio_cant" VARCHAR(255),
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_papel_cant" VARCHAR(255),
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_plasti_cant" VARCHAR(255),
	"tap_desti_rs_nosepa_recole_sepa_sit_disp_comer_metal_cant" VARCHAR(255),
	"tap_desti_rs_nosepa_recole_otro_cual" VARCHAR(100),
	PRIMARY KEY ("tap_id")
);

COMMENT ON TABLE "tratamientoaprovechamientoresiduossolidosaseo" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- usuario
-----------------------------------------------------------------------------

DROP TABLE "usuario" CASCADE;


CREATE TABLE "usuario"
(
	"usu_id" serial  NOT NULL,
	"usu_per_id" INTEGER,
	"usu_login" VARCHAR(30),
	"usu_clave" VARCHAR(30),
	PRIMARY KEY ("usu_id")
);

COMMENT ON TABLE "usuario" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- vehiculorecoleccion
-----------------------------------------------------------------------------

DROP TABLE "vehiculorecoleccion" CASCADE;


CREATE TABLE "vehiculorecoleccion"
(
	"ver_id" serial  NOT NULL,
	"ver_rtr_id" INTEGER,
	"ver_tipo_vehiculo" VARCHAR(50),
	"ver_tipo_traccion" VARCHAR(50),
	"ver_capacidad" VARCHAR(50),
	"ver_esado_vehiculo" VARCHAR(50),
	PRIMARY KEY ("ver_id")
);

COMMENT ON TABLE "vehiculorecoleccion" IS '';


SET search_path TO public;
-----------------------------------------------------------------------------
-- vinculacionalservicio
-----------------------------------------------------------------------------

DROP TABLE "vinculacionalservicio" CASCADE;


CREATE TABLE "vinculacionalservicio"
(
	"vas_id" serial  NOT NULL,
	"vas_com_id" INTEGER,
	"vas_suscripcion_contrato" BOOLEAN,
	PRIMARY KEY ("vas_id")
);

COMMENT ON TABLE "vinculacionalservicio" IS '';


SET search_path TO public;
ALTER TABLE "actividadesresiduossolidosaseo" ADD CONSTRAINT "actividadesresiduossolidosa_FK_1" FOREIGN KEY ("ars_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "administrativafinanciera" ADD CONSTRAINT "administrativafinanciera_FK_1" FOREIGN KEY ("iaf_pps_pre_id") REFERENCES "periodoporprestadorservicio" ("pps_pre_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "analisiscobertura" ADD CONSTRAINT "analisiscobertura_FK_1" FOREIGN KEY ("aco_com_id") REFERENCES "cormecial" ("com_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "aspectos_legales" ADD CONSTRAINT "aspectos_legales_FK_1" FOREIGN KEY ("ale_mic_id") REFERENCES "microcuencas" ("mic_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "calidad" ADD CONSTRAINT "calidad_FK_1" FOREIGN KEY ("cal_pps_pre_id") REFERENCES "periodoporprestadorservicio" ("pps_pre_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "calidadagua" ADD CONSTRAINT "calidadagua_FK_1" FOREIGN KEY ("cag_cal_id") REFERENCES "calidad" ("cal_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "calidadcantidadagua" ADD CONSTRAINT "calidadcantidadagua_FK_1" FOREIGN KEY ("cca_mic_id") REFERENCES "microcuencas" ("mic_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "cantidadaguafuentessuperficiales" ADD CONSTRAINT "cantidadaguafuentessuperfic_FK_1" FOREIGN KEY ("caf_fue_id") REFERENCES "fuentes" ("fue_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "capacitacion" ADD CONSTRAINT "capacitacion_FK_1" FOREIGN KEY ("cap_iaf_id") REFERENCES "administrativafinanciera" ("iaf_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "captacion" ADD CONSTRAINT "captacion_FK_1" FOREIGN KEY ("capt_estado_estructura_id") REFERENCES "estadogeneral" ("esg_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "captacion" ADD CONSTRAINT "captacion_FK_2" FOREIGN KEY ("capt_estado_pozo_id") REFERENCES "estadogeneral" ("esg_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "captacion" ADD CONSTRAINT "captacion_FK_3" FOREIGN KEY ("capt_estado_bomba_id") REFERENCES "estadogeneral" ("esg_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "captacion" ADD CONSTRAINT "captacion_FK_4" FOREIGN KEY ("capt_fuente_energia_id") REFERENCES "fuenteenergia" ("fen_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "comunidadserviciorecoleccion" ADD CONSTRAINT "comunidadserviciorecoleccio_FK_1" FOREIGN KEY ("csr_srsf_id") REFERENCES "separacionresiduossolidosfuentesaseo" ("srsf_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "cormecial" ADD CONSTRAINT "cormecial_FK_1" FOREIGN KEY ("com_pps_pre_id") REFERENCES "periodoporprestadorservicio" ("pps_pre_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "disposicionfinalresiduosaseo" ADD CONSTRAINT "disposicionfinalresiduosase_FK_1" FOREIGN KEY ("dfr_autoridad_autonoma_id") REFERENCES "autoridadambiental" ("aua_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "disposicionfinalresiduosaseo" ADD CONSTRAINT "disposicionfinalresiduosase_FK_2" FOREIGN KEY ("dfr_estado_via_acceso_sitio_id") REFERENCES "estadogeneral" ("esg_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "disposicionfinalresiduosaseo" ADD CONSTRAINT "disposicionfinalresiduosase_FK_3" FOREIGN KEY ("dfr_departamento_dispocision_id") REFERENCES "departamento" ("dep_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "disposicionfinalresiduosaseo" ADD CONSTRAINT "disposicionfinalresiduosase_FK_4" FOREIGN KEY ("dfr_municipio_disposicion_id") REFERENCES "municipio" ("mun_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "disposicionfinalresiduosaseo" ADD CONSTRAINT "disposicionfinalresiduosase_FK_5" FOREIGN KEY ("dfr_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "facturacionyrecaudo" ADD CONSTRAINT "facturacionyrecaudo_FK_1" FOREIGN KEY ("fac_com_id") REFERENCES "cormecial" ("com_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "fondosolidaridadredistribucioningresos" ADD CONSTRAINT "fondosolidaridadredistribuc_FK_1" FOREIGN KEY ("fsi_com_id") REFERENCES "cormecial" ("com_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "fuentes" ADD CONSTRAINT "fuentes_FK_1" FOREIGN KEY ("fue_mic_id") REFERENCES "microcuencas" ("mic_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "fuentesdubterraneas" ADD CONSTRAINT "fuentesdubterraneas_FK_1" FOREIGN KEY ("fsu_fue_id") REFERENCES "fuentes" ("fue_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "gestionresultado" ADD CONSTRAINT "gestionresultado_FK_1" FOREIGN KEY ("gre_iaf_id") REFERENCES "administrativafinanciera" ("iaf_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "informacioncontable" ADD CONSTRAINT "informacioncontable_FK_1" FOREIGN KEY ("ico_iaf_id") REFERENCES "administrativafinanciera" ("iaf_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "informaciongeneralmicrocuencas" ADD CONSTRAINT "informaciongeneralmicrocuen_FK_1" FOREIGN KEY ("imi_mic_id") REFERENCES "microcuencas" ("mic_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "informaciongeneralmicrocuencas" ADD CONSTRAINT "informaciongeneralmicrocuen_FK_2" FOREIGN KEY ("imi_dep_id") REFERENCES "departamento" ("dep_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "informaciongeneralmicrocuencas" ADD CONSTRAINT "informaciongeneralmicrocuen_FK_3" FOREIGN KEY ("imi_mun_id") REFERENCES "municipio" ("mun_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "informacionvisual" ADD CONSTRAINT "informacionvisual_FK_1" FOREIGN KEY ("iv_pre_id") REFERENCES "prestador" ("pre_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "microcuencas" ADD CONSTRAINT "microcuencas_FK_1" FOREIGN KEY ("mic_pps_pre_id") REFERENCES "periodoporprestadorservicio" ("pps_pre_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "municipio" ADD CONSTRAINT "municipio_FK_1" FOREIGN KEY ("mun_dep_id") REFERENCES "departamento" ("dep_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "parametroxfrecuencia" ADD CONSTRAINT "parametroxfrecuencia_FK_1" FOREIGN KEY ("pfe_ppr_id_paramentro") REFERENCES "parametrospuntosred" ("ppr_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "parametroxfrecuencia" ADD CONSTRAINT "parametroxfrecuencia_FK_2" FOREIGN KEY ("pfe_cag_id") REFERENCES "calidadagua" ("cag_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "participacionciudadana" ADD CONSTRAINT "participacionciudadana_FK_1" FOREIGN KEY ("par_iaf_id") REFERENCES "administrativafinanciera" ("iaf_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "periodoporprestadorservicio" ADD CONSTRAINT "periodoporprestadorservicio_FK_1" FOREIGN KEY ("pps_pre_id") REFERENCES "prestador" ("pre_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "periodoporprestadorservicio" ADD CONSTRAINT "periodoporprestadorservicio_FK_2" FOREIGN KEY ("pps_ser_id") REFERENCES "servicio" ("ser_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "peticionesquejasrecursos" ADD CONSTRAINT "peticionesquejasrecursos_FK_1" FOREIGN KEY ("pqr_com_id") REFERENCES "cormecial" ("com_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "prestador" ADD CONSTRAINT "prestador_FK_1" FOREIGN KEY ("pre_ran_id") REFERENCES "rango" ("ran_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "prestador" ADD CONSTRAINT "prestador_FK_2" FOREIGN KEY ("pre_usu_id") REFERENCES "usuario" ("usu_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "proteccionfuentessuperficialesagua" ADD CONSTRAINT "proteccionfuentessuperficia_FK_1" FOREIGN KEY ("pfu_mic_id") REFERENCES "microcuencas" ("mic_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "recolecciontrasnporteaseo" ADD CONSTRAINT "recolecciontrasnporteaseo_FK_1" FOREIGN KEY ("rtr_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "resultadosxpunto" ADD CONSTRAINT "resultadosxpunto_FK_1" FOREIGN KEY ("rep_ppr_id_paramentro") REFERENCES "parametrospuntosred" ("ppr_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "resultadosxpunto" ADD CONSTRAINT "resultadosxpunto_FK_2" FOREIGN KEY ("rep_cag_id") REFERENCES "calidadagua" ("cag_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "separacionresiduossolidosfuentesaseo" ADD CONSTRAINT "separacionresiduossolidosfu_FK_1" FOREIGN KEY ("srsf_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "suscriptoresservicioacueducto" ADD CONSTRAINT "suscriptoresservicioacueduc_FK_1" FOREIGN KEY ("ssacu_aco_id") REFERENCES "analisiscobertura" ("aco_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "suscriptoresservicioacueducto" ADD CONSTRAINT "suscriptoresservicioacueduc_FK_2" FOREIGN KEY ("ssacu_est_id") REFERENCES "estrato" ("est_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "suscriptoresservicioaseo" ADD CONSTRAINT "suscriptoresservicioaseo_FK_1" FOREIGN KEY ("ssase_aco_id") REFERENCES "analisiscobertura" ("aco_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "suscriptoresservicioaseo" ADD CONSTRAINT "suscriptoresservicioaseo_FK_2" FOREIGN KEY ("ssase_est_id") REFERENCES "estrato" ("est_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tanque" ADD CONSTRAINT "tanque_FK_1" FOREIGN KEY ("tan_estado_id") REFERENCES "estadogeneral" ("esg_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaacueducto" ADD CONSTRAINT "tecnicooperativaacueducto_FK_1" FOREIGN KEY ("toa_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaaduccionimpulsionacueducto" ADD CONSTRAINT "tecnicooperativaaduccionimp_FK_1" FOREIGN KEY ("toai_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaaduccionimpulsionacueducto" ADD CONSTRAINT "tecnicooperativaaduccionimp_FK_2" FOREIGN KEY ("toai_material_canal_id") REFERENCES "materialcanal" ("mca_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaaduccionimpulsionacueducto" ADD CONSTRAINT "tecnicooperativaaduccionimp_FK_3" FOREIGN KEY ("toai_tipo_canal_id") REFERENCES "tipocanal" ("tca_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaalmacenamientoacueducto" ADD CONSTRAINT "tecnicooperativaalmacenamie_FK_1" FOREIGN KEY ("toaa_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaalmacenamientoacueducto" ADD CONSTRAINT "tecnicooperativaalmacenamie_FK_2" FOREIGN KEY ("toaa_tan_id") REFERENCES "tanque" ("tan_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativacaptacionacueducto" ADD CONSTRAINT "tecnicooperativacaptacionac_FK_1" FOREIGN KEY ("toca_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativacaptacionacueducto" ADD CONSTRAINT "tecnicooperativacaptacionac_FK_2" FOREIGN KEY ("toca_capt_id") REFERENCES "captacion" ("capt_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativacomponentessistema" ADD CONSTRAINT "tecnicooperativacomponentes_FK_1" FOREIGN KEY ("tocs_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativadesarenadoracueducto" ADD CONSTRAINT "tecnicooperativadesarenador_FK_1" FOREIGN KEY ("todes_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativadesinfeccionacueducto" ADD CONSTRAINT "tecnicooperativadesinfeccio_FK_1" FOREIGN KEY ("toda_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativalineaconduccionaguacrudaacueducto" ADD CONSTRAINT "tecnicooperativalineaconduc_FK_1" FOREIGN KEY ("tolc_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativalineaconduccionaguacrudaacueducto" ADD CONSTRAINT "tecnicooperativalineaconduc_FK_2" FOREIGN KEY ("tolc_tipo_canal_id") REFERENCES "tipocanal" ("tca_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativalineaconduccionaguacrudaacueducto" ADD CONSTRAINT "tecnicooperativalineaconduc_FK_3" FOREIGN KEY ("tolc_material_canal_id") REFERENCES "materialcanal" ("mca_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativaplantaaguapotableacueducto" ADD CONSTRAINT "tecnicooperativaplantaaguap_FK_1" FOREIGN KEY ("topla_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativareddistribucionacueducto" ADD CONSTRAINT "tecnicooperativareddistribu_FK_1" FOREIGN KEY ("tord_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativareddistribucionacueducto" ADD CONSTRAINT "tecnicooperativareddistribu_FK_2" FOREIGN KEY ("tord_red_distribucion_id") REFERENCES "reddistribucion" ("rdist_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativareddistribucionacueducto" ADD CONSTRAINT "tecnicooperativareddistribu_FK_3" FOREIGN KEY ("tord_material_distribucion_id") REFERENCES "materialreddistribucion" ("mrd_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tecnicooperativo" ADD CONSTRAINT "tecnicooperativo_FK_1" FOREIGN KEY ("top_pps_pre_id") REFERENCES "periodoporprestadorservicio" ("pps_pre_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "tipofuentesuperficial" ADD CONSTRAINT "tipofuentesuperficial_FK_1" FOREIGN KEY ("tfu_fue_id") REFERENCES "fuentes" ("fue_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "trabajadoresyvinculacion" ADD CONSTRAINT "trabajadoresyvinculacion_FK_1" FOREIGN KEY ("tra_iaf_id") REFERENCES "administrativafinanciera" ("iaf_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "tratamientoaprovechamientoresiduossolidosaseo" ADD CONSTRAINT "tratamientoaprovechamientor_FK_1" FOREIGN KEY ("tap_top_id") REFERENCES "tecnicooperativo" ("top_id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE "usuario" ADD CONSTRAINT "usuario_FK_1" FOREIGN KEY ("usu_per_id") REFERENCES "perfil" ("per_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "vehiculorecoleccion" ADD CONSTRAINT "vehiculorecoleccion_FK_1" FOREIGN KEY ("ver_rtr_id") REFERENCES "recolecciontrasnporteaseo" ("rtr_id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "vinculacionalservicio" ADD CONSTRAINT "vinculacionalservicio_FK_1" FOREIGN KEY ("vas_com_id") REFERENCES "cormecial" ("com_id") ON UPDATE CASCADE ON DELETE RESTRICT;
