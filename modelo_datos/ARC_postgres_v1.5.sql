
/*
dropdb -U postgres arc ; createdb  -U postgres arc ;  psql -U postgres arc    < ~lugarcia/Desktop/Dropbox/Personal/ARC/modelo_datos/ARC_postgres_v1.5.sql    &> /tmp/log  ; grep -ni error /tmp/log ; grep -ni AVISO /tmp/log

dropdb -U administrador arc_p -h 172.17.8.215 ; createdb  -U administrador arc_p -h 172.17.8.215 ;  psql -U administrador arc_p -h 172.17.8.215    < $HOME/Dropbox/Personal/ARC/modelo_datos/ARC_postgres_v1.5.sql    &> /tmp/log  ; grep -ni error /tmp/log;  grep -ni AVISO /tmp/log

cd ~lugarcia/Desktop/Dropbox/Public/ ;  rm ARC_final.sql ; ln -sf ~lugarcia/Desktop/Dropbox/Personal/ARC/modelo_datos/ARC_postgres_v1.5.sql ARC_final.sql ; ls -altr



*/


/*==============================================================*/
/* Table: ACTIVIDADESRESIDUOSSOLIDOSASEO                        */
/*==============================================================*/
create table ACTIVIDADESRESIDUOSSOLIDOSASEO
(
   ARS_ID               serial not null,
   ARS_TOP_ID           int not null,
   ARS_RECOLE_TRANS_RESIDUOS_NO_PELIGROSOS smallint,
   ARS_TRATAMIENTO_RESIDUOS_NO_PELIGROSOS smallint,
   ARS_APROVECHAMIENTO_RESIDUOS smallint,
   ARS_DISPOSICION_FINAL smallint,
   ARS_BARRIDO_LIMPIEZA_AREA_PUBLICA smallint,
   ARS_RECOLE_TRASN_RESIDUOS_HOSPITALARIOS_NO_PELIGROSOS smallint,
   ARS_RECOLE_TRASN_RESIDUOS_HOSPITALARIOS_PELIGROSOS smallint,
   primary key (ARS_ID)
);

/*==============================================================*/
/* Table: analisiscobertura              */
/*==============================================================*/
create table analisiscobertura
(
   ACO_ID               serial not null,
   ACO_COM_ID           int not null,
   ACO_CATASTRO_USUARIOS smallint,
   ACO_ANIO_ELA_IMPL_CATASTRO_USU int,
   ACO_NUM_PREDIOS_AREA int,
   ACO_NUM_PREDIOS_CONEC_SISTEMA int,
   ACO_ESTRAT_SOCECO_ADOP_MPIO smallint,
   ACO_ESTRA_SOCECO_ADOP_MPIO_JUS char(50),
   --ACO_NUM_SUS_SERVICIO_OFICIAL int, -- Eliminados 2010-07-22
   --ACO_TARIF_ESTR_SERVICIO_OFICIAL float(7), -- Eliminados 2010-07-22
   primary key (ACO_ID)
);

/*==============================================================*/
/* Table: ASPECTOSLEGALES     */
-- Eliminada por olicitud de Maryit, 2010-07-25
/*==============================================================*/
/*
create table ASPECTOSLEGALES
(
   ALE_ID               serial not null,
   ALE_FUE_ID           int not null,
   ALE_CUMPLE_PERISOS   smallint,
   ALE_ENTIDAD_EXIDIO_CONCESION varchar(100),
   ALE_FECHA_EXPEDICION_CONCESION date,
   ALE_FECHA_VENCIMIENTO_CONCESION date,
   ALE_CAUDAL_ADJUDICADO_CONCESION int,
   primary key (ALE_ID)
);
*/

/*==============================================================*/
/* Table: AUTORIDADAMBIENTAL                                    */
/*==============================================================*/
create table AUTORIDADAMBIENTAL
(
   AUA_ID               serial not null,
   AUA_NOMBRE           varchar(300) not null UNIQUE,
   primary key (AUA_ID)
);

/*==============================================================*/
/* Table: CALIDAD                                               */
/*==============================================================*/
create table CALIDAD
(
   CAL_ID               serial not null,
   CAL_PPS_PRE_ID       int not null,
   CAL_PPS_ANIO         int not null,
   CAL_PPS_SER_ID       int not null,
   primary key (CAL_ID)
);

CREATE UNIQUE INDEX CALIDAD_idx ON CALIDAD  (cal_pps_pre_id,cal_pps_anio,cal_pps_ser_id);


/*==============================================================*/
/* Table: CALIDADAGUA                                           */
/*==============================================================*/
create table CALIDADAGUA
(
   CAG_ID               serial not null,
   CAG_CAL_ID           int not null,
   CAG_CONTROL_CA_FUENTE smallint,
   CAG_MAPA_RIESGO      smallint,
   CAG_DB05_VALOR       float(16),
   CAG_DB05_FRECUENCIA  float(16),
   CAG_COLIFORMES_VALOR float(16),
   CAG_COLIFORMES_FRECUENCIA float(16),
   CAG_OXIGENO_DISUELTO_VALOR float(16),
   CAG_OXIGENO_DISUELTO_FRECUENCIA float(16),
   CAG_PH_VALOR         float(16),
   CAG_PH_FRECUENCIA    float(16),
   CAG_TURBIEDAD_VALOR  float(16),
   CAG_TURBIEDAD_FRECUENCIA float(16),
   CAG_COLOR_VERDADERO_VALOR float(16),
   CAG_COLOR_VERDADERO_FRECUENCIA float(16),
   CAG_SABOR_OLOR_VALOR float(16),
   CAG_SABOR_OLOR_FRECUENCIA float(16),
   CAG_CLORUROS_VALOR   float(16),
   CAG_CLORUROS_FRECUENCIA float(16),
   CAG_FLUORUROS_VALOR  float(16),
   CAG_FLUORUROS_FRECUENCIA float(16),
   CAG_LABORATORIO_PROPIO smallint,
   CAG_CONTROL_CA_DISTRIBUIDA smallint,
   --CAG_PUNTOS_RED_ANALIZADOS int, -- eliminado
   CAG_NUMERO_VISITA_SSPD      integer,
   primary key (CAG_ID)
);

/*==============================================================*/
/* Table: MICROCUENCAS                                          */
/*==============================================================*/
create table MICROCUENCAS
(
   MIC_ID               serial not null,
   MIC_PPS_PRE_ID       int not null,
   MIC_PPS_ANIO         int not null,
   MIC_PPS_SER_ID       int not null,
   
   primary key (MIC_ID)
);

CREATE UNIQUE INDEX MICROCUENCAS_idx ON MICROCUENCAS   (mic_pps_pre_id,mic_pps_anio,mic_pps_ser_id);


/*==============================================================*/
/* Table: CALIDADCANTIDADAGUA                                   */
/*==============================================================*/
CREATE TABLE calidadcantidadagua
(
  cca_id serial NOT NULL,
  cca_mic_id integer NOT NULL,
  cca_actividad_agricola_permanentes smallint,--cambio see quito es a actividades y cultivo
  cca_actividad_agricola_semipermanentes smallint,--cambio see quito es a actividades  y cultivo
  cca_actividad_agricola_temporales smallint,--cambio see quito es a actividades  y cultivo
  cca_actividad_pecuaria_ganaderia_bovina smallint,
  cca_actividad_pecuaria_ganaderia_equina smallint,
  cca_actividad_pecuaria_porcicultura smallint,
  cca_actividad_pecuaria_capricultura_ovinos smallint,
  cca_actividad_pecuaria_avicultura smallint,
  cca_actividad_pecuaria_piscicultura smallint,
  cca_actividad_pecuaria_otros smallint, --cambio de otros_cual  a otros
  cca_actividad_pecuaria_otros_cual character varying(100), --add
  cca_control_plagas_enfermedades_quimico smallint,
  cca_control_plagas_enfermedades_organico smallint,
  cca_control_plagas_enfermedades_biologico smallint,
  cca_control_plagas_enfermedades_ninguno smallint,
  cca_fertilizacion_cultivos_quimico smallint,
  cca_fertilizacion_cultivos_organico smallint,
  cca_fertilizacion_cultivos_ninguno smallint,
  cca_capacitacion_dada_prestador smallint,
  cca_control_malezas_quimico smallint,
  cca_control_malezas_meca_manu smallint,
  cca_control_malezas_organico smallint,
  cca_control_malezas_ninguno smallint,
  cca_mineria smallint,
  cca_erosion smallint,
  cca_modificacion_paisaje_construccion_vias smallint,
  cca_modificacion_paisaje_construccion_vivienda smallint,
  cca_modificacion_paisaje_construccion_otro smallint,
  cca_descarga_vivienda_liquido smallint,--cambio quite la s de descargas
  cca_descarga_vivienda_solido smallint,--cambio quite la s de descargas
  cca_desarrolla_modificacion_paisaje smallint,
  cca_descarga_actividad_productiva_agricola smallint,
  cca_descarga_actividad_productiva_pecuaria smallint,
  cca_descarga_actividad_productiva_minera smallint,
  cca_descarga_actividad_productiva_industrial smallint,
  cca_descarga_actividad_productiva_otra smallint,
  cca_actividad_agricola_mayor_area character varying(50),
  cca_actividad_agricola_permanentes_tendencia character varying(50),
  cca_actividad_agricola_semipermanentes_tendencia character varying(50),
  cca_actividad_agricola_temporales_tendencia character varying(50),
  cca_actividad_pecuaria_mayor_area character varying(50),
  cca_actividad_pecuaria_ganaderia_bovina_tendencia character varying(50),
  cca_actividad_pecuaria_ganaderia_equina_tendencia character varying(50),
  cca_actividad_pecuaria_porcicultura_tendencia character varying(50),
  cca_actividad_pecuaria_capricultura_ovinos_tendencia character varying(50),
  cca_actividad_pecuaria_avicultura_tendencia character varying(50),
  cca_actividad_pecuaria_piscicultura_tendencia character varying(50),
  cca_actividad_pecuaria_otros_tendencia character varying(50),
  cca_control_plagas_enfermedades_mas_usado character varying(50),
  cca_control_plagas_enfermedades_quimico_tendencia character varying(50),
  cca_control_plagas_enfermedades_organico_tendencia character varying(50),
  cca_control_plagas_enfermedades_biologico_tendencia character varying(50),
--  cca_control_plagas_enfermedades_ninguno_tendencia character varying(50),--eliminar porque se considera que si dice ninguno no ay tendencia
  cca_fertilizacion_cultivos_mas_usado character varying(50),
  cca_fertilizacion_cultivos_quimico_tendencia character varying(50),
  cca_fertilizacion_cultivos_organico_tendencia character varying(50),
 -- cca_fertilizacion_cultivos_ninguno_tendencia character varying(50),--eliminar
  cca_control_malezas_mas_usado character varying(50),
  cca_control_malezas_quimico_tendencia character varying(50),
  cca_control_malezas_meca_manu_tendencia character varying(50),
  cca_control_malezas_organico_tendencia character varying(50),
  --cca_control_malezas_ninguno_tendencia character varying(50),--eliminar
  cca_mineria_tendencia character varying(50),
  cca_erosion_tendencia character varying(50),
  cca_modificacion_paisaje_construccion_vias_tendencia character varying(50),
  cca_modificacion_paisaje_construccion_vivienda_tendencia character varying(50),
  cca_modificacion_paisaje_construccion_otro_tendencia character varying(50),
  cca_descarga_actividad_productiva_agricola_tendencia character varying(50),
  cca_descarga_actividad_productiva_pecuaria_tendencia character varying(50),
  cca_descarga_actividad_productiva_minera_tendencia character varying(50),
  cca_descarga_actividad_productiva_industrial_tendencia character varying(50),
  cca_descarga_actividad_productiva_otra_tendencia character varying(50),
  cca_descarga_actividad_productiva_agricola_especifica character varying(50),
  cca_descarga_actividad_productiva_pecuaria_especifica character varying(50),
  cca_descarga_actividad_productiva_minera_especifica character varying(50),
  cca_descarga_actividad_productiva_industrial_especifica character varying(50),
  cca_descarga_actividad_productiva_otra_especifica character varying(50),
  
  CONSTRAINT calidadcantidadagua_pkey PRIMARY KEY (cca_id),
  CONSTRAINT fk_reference_30 FOREIGN KEY (cca_mic_id)
      REFERENCES microcuencas (mic_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
);


/*==============================================================*/
/* Table: fuentessuperficiales                      */
/*==============================================================*/
create table fuentessuperficiales
(
    FSP_ID               SERIAL NOT NULL,
    FSP_FUE_ID           INT NOT NULL,
    FSP_NOMBRE_FUENTE    VARCHAR(100) NOT NULL,
    FSP_EPOCA_LLUVIA_CAUDAL_TOTAL FLOAT(16),
    FSP_EPOCA_LLUVIA_CAUDAL_CAPTADO FLOAT(16),
    FSP_EPOCA_SECA_CAUDAL_TOTAL FLOAT(16),
    FSP_EPOCA_SECA_CAUDAL_CAPTADO FLOAT(16),
 
    FSP_ENTIDAD_EXPIDIO_CONCESION   VARCHAR(200),
    FSP_FECHA_EXPEDICION_CONCESION  DATE,
    FSP_FECHA_VENCIMIENTO_CONCESION  DATE,
    FSP_CAUDAL_ADJUDICADO_CONCESION REAL,
    FSP_TIPO_FUENTE VARCHAR(30) ,
 
   primary key (fsp_ID)
);

/*==============================================================*/
/* Table: CAPACITACION                                          */
/*==============================================================*/
create table CAPACITACION
(
   CAP_ID               serial not null,
   CAP_IAF_ID           int not null,
   CAP_DADA_PRESTADOR   smallint not null,
   CAP_ACTIVIDAD_CAPACITACION_USO_EFICIENTE_AGUA smallint,
   
   CAP_ACTIVIDAD_CAPACITACION_HIGIENE_PERSONAL_ACU SMALLINT,
   CAP_ACTIVIDAD_CAPACITACION_HIGIENE_VIVIENDA_ACU smallint,
   CAP_ACTIVIDAD_CAPACITACION_HIGIENE_SITIOS_PUBLICOS_ACU smallint,
   CAP_CAPACITACION_RECIBIDA_PRESTADOR_ACU smallint,
 
   CAP_ACTIVIDAD_CAPACITACION_EDUCACION_AMBIENTAL smallint,
   CAP_ACTIVIDAD_CAPACITACION_PARTICIPACION_COMUNITARIA smallint,
   CAP_ACTIVIDAD_CAPACITACION_VEEDURIA_CIUDADANA smallint,
   CAP_ACTIVIDAD_CAPACITACION_FUNCION_SIST_ABASTECIMIENTO smallint,
   CAP_ACTIVIDAD_CAPACITACION_OTRA_CUALES varchar(100),
   
   CAP_TEMAS_CAPACITACION_ADMINISTRATIVOS smallint,
   CAP_TEMAS_CAPACITACION_NORMATIVOS smallint,
   CAP_TEMAS_CAPACITACION_AMBIENTALES smallint,
   CAP_TEMAS_CAPACITACION_OPERATIVOS smallint,
   CAP_TEMAS_CAPACITACION_SUI smallint, -- SUI: Sistema Unico de Informacion, de la SuperIntendencia
   CAP_TEMAS_CAPACITACION_OTRA_CUAL varchar(100),
   CAP_INSTITUCIONES_OFRECIERON varchar(100),
   CAP_NUMERO_DIRECTIVA_HOMBRES smallint,
   CAP_NUMERO_DIRECTIVA_MUJERES smallint,
   primary key (CAP_ID)
);




/*==============================================================*/
/* Table: COMUNIDADSERVICIORECOLECCION                          */
/*==============================================================*/
create table COMUNIDADSERVICIORECOLECCION
(
   CSR_ID               serial not null,
   CSR_SRSF_ID          int not null,
   CSR_NOMBRE_COMUNIDAD varchar(200) not null,
   CSR_NUMERO_VIVIENDAS_TOTALES INTEGER,
   CSR_NUMERO_VIVIENDAS_CON_SERVICIO INTEGER,
   CSR_NUMERO_SUSCRIPTORES INTEGER,
   CSR_CANTIDAD_PROM_RESIDUOS_MES float(16),
   CSR_FECHA_PESAJE     date,
   primary key (CSR_ID)
);

/*==============================================================*/
/* Table: COMERCIAL                                             */
/*==============================================================*/
create table COMERCIAL
(
   COM_ID               serial not null,
   COM_PPS_PRE_ID       int not null,
   COM_PPS_ANIO         int not null,
   COM_PPS_SER_ID       int not null,
   primary key (COM_ID)
);

CREATE UNIQUE INDEX COMERCIAL_idx ON COMERCIAL  (com_pps_pre_id,com_pps_anio,com_pps_ser_id);


/*==============================================================*/
/* Table: DEPARTAMENTO                                          */
/*==============================================================*/
create table DEPARTAMENTO
(
   DEP_ID               serial not null,
   DEP_NOMBRE           varchar(100) not null UNIQUE,
   DEP_REGION           varchar(100),
   DEP_ZONA             varchar(100),
   primary key (DEP_ID)
);

/*==============================================================*/
/* Table: DISPOSICIONFINALRESIDUOSASEO                          */
/*==============================================================*/
create table DISPOSICIONFINALRESIDUOSASEO
(
   DFR_ID               serial not null,
   DFR_AUTORIDAD_AUTONOMA_ID int not null,
   DFR_ESTADO_VIA_ACCESO_SITIO_ID int not null,
   DFR_DEPARTAMENTO_DISPOCISION_ID int not null,
   DFR_MUNICIPIO_DISPOSICION_ID int not null,
   DFR_TOP_ID           int not null,
   DFR_CONTRATA_DISPOSICION_FINAL smallint,
   DFR_NOMBRE_ENTIDAD_PRESTADORA_SERVICIO_DISPOSICION varchar(200),
   DFR_CORREGIMIENTO_DISPOSICION varchar(200),
   DFR_VEREDA_DISPOSICION varchar(200),
   DFR_CUENTA_AUTORIZACION_AMBIENTAL_DISPOSICION smallint,
   DFR_TIPO_AUTORIZACION_AMBIENTAL varchar(100),
   DFR_RESOLUCION_AUTORIZA_DISPOSICION varchar(100),
   DFR_FECHA_RESOLUCION date,
   DFR_FECHA_TERMINACION_RESOLUCION date,
   DFR_FECHA_TERMINACION_VIDA_UTIL_SITIO_DISPOSICION date,
   DFR_CANTIDAD_ANUAL_RESIDUOS_BOTADERO_CIELO_ABIERTO float(16),
   DFR_CANTIDAD_ANUAL_RESIDUOS_RELLENO_SANITARIO float(16),
   DFR_DIST_CENTRO_POBLADO_MAS_CERCANO_SITIO varchar(100),
   DFR_DIST_CUERPO_AGUA_MAS_CERCANO_SITIO varchar(100),
   DFR_ANIOS_UTILIZACION_SITIO INTEGER,
   DFR_AREA_DESTINADA_PARA_DISPOSICION_SITIO float(7),
   DFR_SI_RELLENO_TIPO_RELLENO smallint,
   DFR_PRESENCIA_RECICLADORES_SITIO smallint,
   DFR_CANTIDAD_PERSONAS_SITIO INTEGER,
   DFR_TRATAMIENTO_LIXIVIADOS_SITIO smallint,
   DFR_TIPO_TRATAMIENTO_LIXIVIADOS_SITIO varchar(200),
   DFR_LIXI_ENTRADA_FECHA date,
   DFR_LIXI_ENTRADA_CAUDAL float(16),
   DFR_LIXI_ENTRADA_DBO5 float(16),
   DFR_LIXI_ENTRADA_SST float(16),
   DFR_LIXI_SALIDA_FECHA2 date,
   DFR_LIXI_SALIDA_CAUDAL2 float(16),
   DFR_LIXI_SALIDA_DBO6 float(16),
   DFR_LIXI_SALIDA_SST2 float(16),
   DFR_DESCARGA_LIXI_RIO smallint,
   DFR_DESCARGA_LIXI_LAGO smallint,
   DFR_DESCARGA_LIXI_MAR smallint,
   DFR_DESCARGA_LIXI_SUELO smallint,
   DFR_DESCARGA_LIXI_RIO_NOMBRE varchar(100),
   DFR_DESCARGA_LIXI_LAGO_NOMBRE varchar(100),
   DFR_DESCARGA_LIXI_MAR_NOMBRE varchar(100),
   DFR_DESCARGA_LIXI_SUELO_NOMBRE varchar(100),
   DFR_PROGRAMA_CONTROL_VECTORES smallint,
   DFR_PROGRAMA_CONTROL_GASES smallint,
   primary key (DFR_ID)
);

/*==============================================================*/
/* Table: ESTADOGENERAL                                         */
/*==============================================================*/
create table ESTADOGENERAL
(
   ESG_ID               serial not null,
   ESG_NOMBRE           varchar(50) not null UNIQUE,
   primary key (ESG_ID)
);

/*==============================================================*/
/* Table: ESTRATO                                               */
/*==============================================================*/
create table ESTRATO
(
   EST_ID               serial not null,
   EST_NOMBRE           varchar(50) not null UNIQUE,
   EST_RESIDENCIAL      smallint,
   primary key (EST_ID)
);

/*==============================================================*/
/* Table: facturacionyrecaudo                          */
/*==============================================================*/
create table facturacionyrecaudo
(
   FAC_ID               serial not null,
   FAC_COM_ID           int not null,
   FAC_FRECUENCIA_DEL_SERVICIO smallint,
   FAC_FRECUENC_FACTURACION varchar(30),
   FAC_FRECUENC_FAC_JUSTIFICACION varchar(30),
   FAC_NUM_FAC_EXP_ULTIMO_PERIODO int,
   FAC_SIST_FAC_UTILIZADO  varchar(30),
   FAC_FRECUENCIA_FAC_JUSTIFICA varchar(30),
   FAC_MOROSIDAD_PROMEDIO float(7),
   FAC_VOL_AGUA_FAC_EN_EL_ANIO_ACU float(7),
   FAC_VOL_AGUA_SUMINISTRADO_ANIO_ACU float(7),
   primary key (FAC_ID)
);

/*==============================================================*/
/* Table: fondosolidaridadredistribucioningresos                       */
/*==============================================================*/
create table fondosolidaridadredistribucioningresos
(
   FSI_ID               serial not null,
   FSI_COM_ID           int not null,
   FSI_SOL_TRANFERENCIA_RECURSOS smallint,
   FSI_RECIBO_RECURSOS  smallint,
   FSI_RECIBO_RECURSOS_VALOR_RECIB float(7),
   FSI_APORTE_RECURSOS  smallint,
   FSI_APORTE_RECURSOS_VALOR_APOR float(7),
   primary key (FSI_ID)
);

/*==============================================================*/
/* Table: FUENTEENERGIA                                         */
/*==============================================================*/
create table FUENTEENERGIA
(
   FEN_ID               serial not null,
   FEN_NOMBRE           varchar(100) not null UNIQUE,
   primary key (FEN_ID)
);

/*==============================================================*/
/* Table: FUENTES                                               */
/*==============================================================*/
create table FUENTES
(
    FUE_ID               SERIAL NOT NULL,
    FUE_MIC_ID           INT NOT NULL,
    
    FUE_TIENE_FUENTES_SUPERFICIALES smallint, --nuevo
    FUE_TIENE_FUENTES_SUBTERRANEAS smallint, --nuevo
    FUE_COMPRA_AGUA_BLOQUE smallint,
    
    -- cambiar este FUE_NUMERO_FUENTES  por el siguiente
    FUE_NUMERO_FUENTES_SUPERFICIALES INT,
    FUE_NUMERO_FUENTES_SUBTERRANEAS INT,
    FUE_METODO_AFORO_VOLUMETRICO smallint,
    FUE_METODO_AFORO_MICROMOLINETE smallint,
    FUE_METODO_AFORO_VELOCIDAD smallint,
    FUE_METODO_AFORO_OTRO_CUAL VARCHAR(100),
    FUE_CUMPLE_PERMISOS smallint,
    PRIMARY KEY (FUE_ID)
);


/*==============================================================*/
/* Table: FUENTESSUBTERRANEAS                                   */
/*==============================================================*/
create table FUENTESSUBTERRANEAS
(
    FSU_ID               SERIAL NOT NULL,
    FSU_FUE_ID           INT NOT NULL,
    FSU_NOMBRE           VARCHAR(100) NOT NULL,
    FSU_PROMEDIO_CAPTACION FLOAT(16),
    FSU_ENTIDAD_EXPIDIO_CONCESION VARCHAR(200),
    FSU_FECHA_EXPEDICION_CONCESION DATE,
    FSU_FECHA_VENCIMIENTO_CONCESION DATE,
    FSU_CAUDAL_ADJUDICADO_CONCESION REAL,
 
   primary key (FSU_ID)
);

/*==============================================================*/
/* Table: GESTIONRESULTADO                                      */
/*==============================================================*/
create table GESTIONRESULTADO
(
   GRE_ID               serial not null,
   GRE_IAF_ID           int not null,
   GRE_PLAN_GESTION_RESULTADOS smallint,
   GRE_MICROMEDIDORES_FUNCIONANDO int,
   GRE_TOTAL_SUSCRIPTORES_MICROMEDICION  int,
   GRE_VALOR_MICROMEDICION float(16),
   GRE_MACROMEDIDORES_FUNCIONANDO int,
   GRE_MACROMEDIDORES_PROYECTADOS int,
   GRE_VALOR_MACROMEDICION float(16),
   GRE_MUESTRAS_TOMADAS int,
   GRE_MUESTRAS_APTAS   int,
   GRE_VALOR_CALIDAD_AGUA float(16),
   GRE_TOTAL_SUSCRIPTORES_FACTURACION int,
   GRE_TOTAL_FACTURAS_DICIEMBRE int,
   GRE_VALOR_FACTURACION float(16),
   primary key (GRE_ID)
);

/*==============================================================*/
/* Table: ADMINISTRATIVAFINANCIERA                   */
/*==============================================================*/
create table ADMINISTRATIVAFINANCIERA
(
   IAF_ID               serial not null,
   IAF_PPS_PRE_ID       int not null,
   IAF_PPS_ANIO         int not null,
   IAF_PPS_SER_ID       int not null,
   primary key (IAF_ID)
);

CREATE UNIQUE INDEX ADMINISTRATIVAFINANCIERA_idx ON ADMINISTRATIVAFINANCIERA  (iaf_pps_pre_id,iaf_pps_anio,iaf_pps_ser_id);

/*==============================================================*/
/* Table: INFORMACIONCONTABLE                                   */
/*==============================================================*/
create table INFORMACIONCONTABLE
(
   ICO_ID               serial not null,
   ICO_IAF_ID           int not null,
   ICO_BALANCE_GENERAL  date,
   ICO_ACTIVOS          FLOAT,
   ICO_ACTIVOS_CORRIENTES FLOAT,
   ICO_EFECTIVO         FLOAT,
   ICO_DEUDORES         FLOAT,
   ICO_INVENTARIO       FLOAT,
   ICO_ACTIVOS_FIJOS    FLOAT,
   ICO_PROPIEDAD_PLANTA_EQUIPOS FLOAT,
   ICO_OTROS_ACTIVOS    FLOAT,
   ICO_PASIVOS           FLOAT,
   ICO_PASIVOS_CORRIENTES FLOAT,
   ICO_OBLIGACIONES_FINANCIERAS FLOAT,
   ICO_OTRAS_CUENTAS_POR_PAGAR FLOAT,
   ICO_OBLIGACIONES_LABORALES FLOAT,
   ICO_OTROS_PASIVOS    FLOAT,
   ICO_PATRIMONIO       FLOAT,
   ICO_ESTADO_DE_RESULTADOS date,
   ICO_TOTAL_INGRESOS   FLOAT,
   ICO_INGRESOS_OPERACIONALES FLOAT,
   ICO_INGRESOS_NO_OPERACIONALES FLOAT,
   ICO_TOTAL_EGRESOS    FLOAT,
   ICO_GASTOS_ADMINISTRATIVOS FLOAT,
   ICO_COSTO_OPERACION_MANTENIMIENTO  FLOAT,
   ICO_COSTO_INVERSION  FLOAT,
   ICO_RESULTADOS_EJERCICIO FLOAT,
   primary key (ICO_ID)
);

/*==============================================================*/
/* Table: INFORMACIONGENERALMICROCUENCAS                        */
/*==============================================================*/
create table INFORMACIONGENERALMICROCUENCAS
(
   IMI_ID               serial not null,
   IMI_MIC_ID           int not null,
   IMI_DEP_ID           int not null,
   IMI_MUN_ID           int not null,
   IMI_LOCALIDAD        varchar(100) not null,
   IMI_MICROCUENCA      varchar(100),
   IMI_CODIGO_CUENCA    varchar(100),
   IMI_FECHA            date,
   primary key (IMI_ID)
);

/*==============================================================*/
/* Table: INFORMACIONVISUAL                                     */
/*==============================================================*/
create table INFORMACIONVISUAL
(
   IV_ID                serial not null,
   IV_PRE_ID            int not null,
   IV_NOMBRE            varchar(100) not null,
   IV_URL               varchar(200),
   IV_DESCRIPCION       varchar(200),
   IV_TIPO              varchar(50),
   primary key (IV_ID)
);

/*==============================================================*/
/* Table: MATERIALCANAL                                         */
/*==============================================================*/
create table MATERIALCANAL
(
   MCA_ID               serial not null,
   MCA_NOMBRE           varchar(100) not null UNIQUE,
   primary key (MCA_ID)
);

/*==============================================================*/
/* Table: MATERIALREDDISTRIBUCION                               */
/*==============================================================*/
create table MATERIALREDDISTRIBUCION
(
   MRD_ID               serial not null,
   MRD_NOMBRE           varchar(100) not null UNIQUE,
   primary key (MRD_ID)
);



/*==============================================================*/
/* Table: MUNICIPIO                                             */
/*==============================================================*/
create table MUNICIPIO
(
   MUN_ID               serial not null,
   MUN_DEP_ID           int not null,
   MUN_NOMBRE           varchar(200) not null,
   MUN_ZONA             varchar(50),
   primary key (MUN_ID)
);

/*==============================================================*/
/* Table: PARAMETROSPUNTOSRED                                   */
/*==============================================================*/
create table PARAMETROSPUNTOSRED
(
   PPR_ID               serial not null,
   PPR_NOMBRE_PARAMENTRO varchar(100) not null UNIQUE,
   primary key (PPR_ID)
);

/*==============================================================*/
/* Table: PARAMETROXFRECUENCIA                                  */
/*==============================================================*/
create table PARAMETROXFRECUENCIA
(
   PFE_ID               serial not null,
   PFE_PPR_ID_PARAMENTRO int not null,
   PFE_CAG_ID           int not null,
   PFE_FRECUENCIA_MINIMA varchar(100),
   PFE_FRECUENCIA_REAL float(16),
   primary key (PFE_ID)
);

/*==============================================================*/
/* Table: PARTICIPACIONCIUDADANA                                */
/*==============================================================*/
create table PARTICIPACIONCIUDADANA
(
   PAR_ID               serial not null,
   PAR_IAF_ID           int not null,
   PAR_PARTICIPACION_CIUDADANA_DIRECTA smallint,
   PAR_PARTICIPACION_CIUDADANA_ASAMBLEA  smallint,
   par_participacion_ciudadana_comite_desarrollo_control_social smallint,
   PAR_PARTICIPACION_CIUDADANA_VEEDURIAS smallint,
   PAR_PARTICIPACION_CIUDADANA_OTRA_CUAL varchar(100),
   PAR_PROPUESTAS_VOCALES smallint,
   primary key (PAR_ID)
);


/*==============================================================*/
/* Table: PERFIL                                                */
/*==============================================================*/
create table PERFIL
(
   PER_ID               serial not null,
   PER_NOMBRE           varchar(50) not null UNIQUE,
   primary key (PER_ID)
);



/*==============================================================*/
/* Table: peticionesquejasrecursos                       */
/*==============================================================*/
create table peticionesquejasrecursos
(
   PQR_ID               serial not null,
   PQR_COM_ID           int not null,
   PQR_REGISTRO_PQR     smallint,
   PQR_CANTIDAD_ANUAL_PQR int,
   PQR_CANTIDAD_PQR_FACTURACION int,
   PQR_CANTIDAD_PQR_INSTALACION int,
   PQR_CANTIDAD_PQR_PREST_SERVICIO int,
   PQR_CANTIDAD_PQR_OTRO int,
   PQR_CANTIDAD_PQR_EXPLICA_OTROS char(50),
   PQR_INF_CAUSA_SUSPENSION_CORTE smallint,
   PQR_INF_CAUSA_SUSP_CORTE_EXPLIC char(50),
   primary key (PQR_ID)
);

/*==============================================================*/
/* Table: PRESTADOR                                             */
/*==============================================================*/
create table PRESTADOR
(
   PRE_ID               serial not null,
   PRE_RAN_ID           int not null,
   PRE_USU_ID           int not null,
   PRE_IDENTIFICACION_PRESTADOR varchar(50) not null,
   PRE_TIPO_IDENTIFICACION_PRESTADOR varchar(50) not null,
   PRE_NOMBRE_PRESTADOR varchar(200) not null,
   
 
   -- PRE_PRESUPUESTO      smallint, -- Trasladado a PERIODOPORPRESTADORSERVICIO
   -- PRE_SUSCRIPTORES     int,  -- Trasladado a PERIODOPORPRESTADORSERVICIO
   primary key (PRE_ID)
);

CREATE UNIQUE INDEX PRE_IDENTIFICACION_PRESTADOR_idx on PRESTADOR (PRE_IDENTIFICACION_PRESTADOR);





/*==============================================================*/
/* Table: PROTECCIONFUENTESSUPERFICIALESAGUA                    */
/*==============================================================*/
create table PROTECCIONFUENTESSUPERFICIALESAGUA
(
   PFU_ID               serial not null ,
   PFU_MIC_ID           int not null,
   PFU_PROGRAMAS_AISLAMIENTO smallint,
   PFU_PROGRAMAS_REFORESTACION smallint,
   PFU_PROGRAMAS_MEJORAMIENTO_USO_SUELO smallint,
   PFU_PROGRAMAS_ADQUISICION_TIERRA smallint,
   PFU_PROGRAMAS_EDUCACION_AMBIENTAL smallint,
   PFU_PROGRAMAS_REDUCCION_USO_AGROQUIMICOS smallint,
   PFU_SITUACION_ARRIBA_CAPTACION_RESERVA smallint,
   PFU_SITUACION_ARRIBA_CAPTACION_PROTEGIDA smallint,
   --cambia esto
   PFU_COBERTURA_FORESTAL_NATURAL smallint,
   PFU_COBERTURA_FORESTAL_PROTECTOR smallint,
   PFU_COBERTURA_FORESTAL_PROTECTOR_PRODUCTOR smallint,
   PFU_COBERTURA_FORESTAL_PRODUCTOR smallint,
   PFU_COBERTURA_FORESTAL_REGENERACION_NATURAL smallint,
   PFU_COBERTURA_FORESTAL_NATURAL_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_PROTECTOR_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_PROTECTOR_PRODUCTOR_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_PRODUCTOR_TENDENCIA varchar(50),
   PFU_COBERTURA_FORESTAL_REGENERACION_NATURAL_TENDENCIA varchar(50),
   --agregar esta
   PFU_EXTENSION_HAS INTEGER,
  
   PFU_AISLAMIENTO_FRANJA_AMARILLA_MICROCUENCA smallint,
   PFU_COBERTURA_FORESTAL_AREA_PROTECTORA_CAUCE smallint,
   PFU_AREA_MICROCUENCA_PROPIEDAD_ACUEDUCTO smallint,
   PFU_COBERTURA_FORESTAL_MAS_USADA varchar(100),
   primary key (PFU_ID)
);

/*==============================================================*/
/* Table: RANGO                                                 */
/*==============================================================*/
create table RANGO
(
   RAN_ID               serial not null,
   RAN_TIPO             varchar(50) not null UNIQUE,
   primary key (RAN_ID)
);

/*==============================================================*/
/* Table: RECOLECCIONTRASNPORTEASEO                             */
/*==============================================================*/
create table RECOLECCIONTRASNPORTEASEO
(
   RTR_ID               serial not null,
   RTR_TOP_ID           int not null,
   RTR_TIPO_RECOLECCION_SELECTIVA smallint,
   RTR_TIPO_RECOLECCION_CONJUNTIVA smallint,
   RTR_DISTANCIA_RECORRIDA_SITIO_FINAL varchar(50),
   RTR_FRECUENCIA_SERVICIO_BARRIDO varchar(100),
   RTR_FRECUENCIA_SERVICIO_RECOLECCION varchar(100),
   primary key (RTR_ID)
);

/*==============================================================*/
/* Table: REDDISTRIBUCION                                       */
/*==============================================================*/
create table REDDISTRIBUCION
(
   RDIST_ID             serial not null,
   RDIST_NOMBRE         varchar(100) not null UNIQUE,
   primary key (RDIST_ID)
);

/*==============================================================*/
/* Table: RESULTADOSXPUNTO                                      */
/*==============================================================*/
create table RESULTADOSXPUNTO
(
   REP_ID               serial not null,
   REP_PPR_ID_PARAMENTRO int not null,
   REP_CAG_ID           int not null,
   REP_PUNTO            INTEGER,
   REP_RESULTADO        float(16),
   primary key (REP_ID)
);

/*==============================================================*/
/* Table: SEPARACIONRESIDUOSSOLIDOSFUENTESASEO                  */
/*==============================================================*/
create table SEPARACIONRESIDUOSSOLIDOSFUENTESASEO
(
   SRSF_ID              serial not null,
   SRSF_TOP_ID          int not null,
   SRSF_PROGRAMA_SEPARACION_RESIDUOS_SOLIDOS smallint,
   SRSF_MATERIALES_SEPARADOS_ORGANICO smallint,
   SRSF_MATERIALES_SEPARADOS_OTROS_VIDRIO smallint,
   SRSF_MATERIALES_SEPARADOS_OTROS_PAPEL smallint,
   SRSF_MATERIALES_SEPARADOS_OTROS_PLASTICO smallint,
   SRSF_MATERIALES_SEPARADOS_OTROS_METALES smallint,
   SRSF_MATERIALES_SEPARADOS_OTROS_OTROS smallint,
   SRSF_MATERIALES_SEPARADOS_HIGENICOS smallint,
   SRSF_NUMERO_SUSCRIPTORES_QUE_SEPARAN INTEGER,
   SRSF_EXISTE_SEPARACION_SITIO_FINAL smallint,
   SRSF_TONELADAS_RESIDUOS_ANIO float(16),
   primary key (SRSF_ID)
);

/*==============================================================*/
/* Table: SERVICIO                                              */
/*==============================================================*/
create table SERVICIO
(
   SER_ID               serial not null,
   SER_NOMBRE           varchar(50) not null UNIQUE,
   primary key (SER_ID)
);


/*==============================================================*/
/* Table: PRESTADORPORSERVICIO, add luis, 2010-07-27                           */
/*==============================================================*/
create table PRESTADORPORSERVICIO
(
   PPSG_PRE_ID           INT4 NOT NULL REFERENCES Prestador ON UPDATE CASCADE, -- Prestador
   PPSG_SER_ID           INT4 NOT NULL REFERENCES Servicio ON UPDATE CASCADE, -- Servicio 
   PPSG_OBSERVACION    TEXT,

   primary key (PPSG_PRE_ID, PPSG_SER_ID)
);


/*==============================================================*/
/* Table: PERIODOPORPRESTADORSERVICIO                           */
/*==============================================================*/
create table PERIODOPORPRESTADORSERVICIO
(
   PPS_PRE_ID           int not null, -- Prestador
   PPS_SER_ID           int not null, -- Servicio
   PPS_ANIO             int not null,
 
   PPS_NUMERO_SUSCRIPTORES INT2 null,
   PPS_PRESUPUESTO_APROBADO smallint,
   PPS_SUSCRIPTORES_PENDIENTES_DE_PAGO INT2,

   PPS_ESTATUTOS        smallint,
   PPS_NUMERO_EMPLEADOS_CON_COMPETENCIAS INT2,
   PPS_NUMERO_EMPLEADOS_SIN_COMPETENCIAS INT2,
   PPS_NUMERO_EMPLEADOS_PROCESO_COMPETENCIAS INT2,

   PPS_NOMBRE_DILIGENCIADOR varchar(200) null,
   PPS_APELLIDO_DILIGENCIADOR varchar(200) null,
   
   PPS_TIPO_IDENTIFICACION_DILIGENCIADOR varchar(50) null,
   PPS_IDENTIFICACION_DILIGENCIADOR varchar(15) null,
 
   PPS_TELEFONO_DILIGENCIADOR varchar(15),

   FOREIGN KEY (PPS_PRE_ID,PPS_SER_ID) REFERENCES PRESTADORPORSERVICIO ON UPDATE CASCADE,

   primary key (PPS_PRE_ID, PPS_SER_ID, PPS_ANIO)
);



/*==============================================================*/
/* Table: SUSCRIPTORESSERVICIOACUEDUCTO                         */
/*==============================================================*/
create table SUSCRIPTORESSERVICIOACUEDUCTO
(
   SSACU_ID             serial not null,
   SSACU_ACO_ID         int not null,
   SSACU_EST_ID         int not null,
   SSACU_NUMERO_SUSCRIPTORES int not null,
   SSACU_TARIFA_SIN_MEDICION float(16),
   SSACU_CARGO_FIJO     float(16),
   SSACU_TARIFA_CONSUMO_BASICO float(16),
   SSACU_TARIFA_CONSUMO_COMPLEMENTARIO float(16),
   SSACU_TARIFA_CONSUMO_SUNTUARIO float(16),
   primary key (SSACU_ID)
);

/*==============================================================*/
/* Table: SUSCRIPTORESSERVICIOASEO                              */
/*==============================================================*/
create table SUSCRIPTORESSERVICIOASEO
(
   SSASE_ID             serial not null,
   SSASE_ACO_ID         int not null,
   SSASE_EST_ID         int not null,
   SSASE_TARIFA         float(16),
   SSASE_NUMERO_SUSCRIPTORES int,
   primary key (SSASE_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVAACUEDUCTO                             */
/*==============================================================*/
create table TECNICOOPERATIVAACUEDUCTO
(
   TOA_ID               serial not null,
   TOA_TOP_ID           int not null,
   --- TOA_TIPOS_SISTEMA_ABASTECIMIENTO varchar(100) , -- Es una etiqueta del formulario
   TOA_GRAVEDAD_SIN_TRATAMIENTO smallint,
   TOA_BOMBEO_SIN_TRATAMIENTO smallint,
   TOA_GRAVEDAD_CON_TRATAMIENTO smallint,
   TOA_BOMBEO_CON_TRATAMIENTO smallint,
   TOA_GRAVEDAD_BOMBEO_SIN_TRATAMIENTO smallint,
   TOA_GRAVEDAD_BOMBEO_CON_TRATAMIENTO smallint,
   TOA_GRAVEDAD_SIN_TRATAMIENTO_BOMBEO_CON_TRATAMIENTO smallint,
   TOA_GRAVEDAD_CON_TRATAMIENTO_BOMBEO_SIN_TRATAMIENTO smallint,
   TOA_CANTIDAD_AGUA_DISTRIBUIDA_POR_ANO float(16) ,
   -- TOA_SOLUCIONES_POBLACION_NO_ATENDIDO_POR_ACUEDUCTO varchar(100) , -- Es una etiqueta del formulario
   TOA_SOLUCION_ACARREO smallint,
   TOA_SOLUCION_ACARREO_VIVIENDAS int ,
   TOA_SOLUCION_NACIMIENTO smallint,
   TOA_SOLUCION_NACIMIENTO_VIVIENDAS int ,
   TOA_SOLUCION_ALJIBE smallint,
   TOA_SOLUCION_ALJIBE_VIVIENDAS int ,
   TOA_SOLUCION_AGUA_LLUVIA smallint,
   TOA_SOLUCION_AGUA_LLUVIA_VIVIENDAS int ,
   TOA_SOLUCION_OTRO    smallint,
   TOA_SOLUCION_OTRO_CUAL varchar(100) ,
   TOA_SOLUCION_OTRO_VIVIENDAS int ,
   primary key (TOA_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVAADUCCIONIMPULSIONACUEDUCTO            */
/*==============================================================*/
create table TECNICOOPERATIVAADUCCIONIMPULSIONACUEDUCTO
(
   TOAI_ID              serial not null,
   TOAI_TOP_ID          int not null,
   TOAI_MATERIAL_CANAL_ID int not null,
   TOAI_TIPO_CANAL_ID   int not null,
   TOAI_LONGITUD        float(16),
   TOAI_DIAMETRO        float(16),
   TOAI_EDAD            int,
   primary key (TOAI_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVAALMACENAMIENTOACUEDUCTO               */
/*==============================================================*/
/*
create table TECNICOOPERATIVAALMACENAMIENTOACUEDUCTO
(
   TOAA_ID              serial not null,
   TOAA_TOP_ID          int not null,
   TOAA_TAN_ID          int not null,
   primary key (TOAA_ID)
);

CREATE UNIQUE INDEX TECNICOOPERATIVAALMACENAMIENTOACUEDUCTO_idx on TECNICOOPERATIVAALMACENAMIENTOACUEDUCTO (TOAA_TOP_ID,TOAA_TAN_ID);
*/


/*==============================================================*/
/* Table: TECNICOOPERATIVACAPTACIONACUEDUCTO                    */
/*==============================================================*/
/* eliminado por sugerencia de Pedro, 2010-07-30
create table TECNICOOPERATIVACAPTACIONACUEDUCTO
(
   TOCA_ID              serial not null,
   TOCA_TOP_ID          int not null,
   TOCA_CAPT_ID         int not null,
   primary key (TOCA_ID)
);
*/

--CREATE UNIQUE INDEX TECNICOOPERATIVACAPTACIONACUEDUCTO_idx on TECNICOOPERATIVACAPTACIONACUEDUCTO (TOCA_TOP_ID,TOCA_CAPT_ID);


/*==============================================================*/
/* Table: TECNICOOPERATIVACOMPONENTESSISTEMA                    */
/*==============================================================*/
create table TECNICOOPERATIVACOMPONENTESSISTEMA
(
   TOCS_ID              serial not null,
   TOCS_TOP_ID          int not null,
   -- TOCS_COMPONENTES     varchar(100)  not null,
   TOCS_CAPTACION       smallint,
   TOCS_CAPTACION_CANTIDAD int ,
   TOCS_ADUCCION        smallint,
   TOCS_ADUCCION_CANTIDAD int ,
   TOCS_DESARENADOR     smallint,
   TOCS_DESARENADOR_CANTIDAD int  ,
   TOCS_CONDUCCION_AGUA_CRUDA smallint,
   TOCS_CONDUCCION_AGUA_CRUDA_CANTIDAD int ,
   TOCS_PLANTA_TRATAMIENTO smallint,
   TOCS_PLANTA_TRATAMIENTO_CANTIDAD int ,
   TOCS_DESINFECCION    smallint,
   TOCS_DESINFECCION_CANTIDAD int ,
   TOCS_TANQUE_ALMACENAMIENTO smallint,
   TOCS_TANQUE_ALMACENAMIENTO_CANTIDAD int ,
   TOCS_CONDUCCION_AGUA_TRATADA smallint,
   TOCS_CONDUCCION_AGUA_TRATADA_CANTIDAD int ,
   TOCS_RED_DISTRIBUCION smallint,
   TOCS_RED_DISTRIBUCION_CANTIDAD int ,
   primary key (TOCS_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVADESARENADORACUEDUCTO                  */
/*==============================================================*/
create table TECNICOOPERATIVADESARENADORACUEDUCTO
(
   TODES_ID             serial not null,
   TODES_TOP_ID         int not null,
   -- TODES_DESARENADOR    varchar(100) not null,
   TODES_BYPASS         smallint,
   TODES_VALVULA        smallint,
   TODES_AGUAS_EROSION  smallint,
   primary key (TODES_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVADESINFECCIONACUEDUCTO                 */
/*==============================================================*/
create table TECNICOOPERATIVADESINFECCIONACUEDUCTO
(
   TODA_ID              serial not null,
   TODA_TOP_ID          int not null,
   TODA_DESINFECCION    smallint,
   -- TODA_TIPO_DESINFECCION varchar(100),
   TODA_DESINFECCION_CLORO smallint,
   TODA_DESINFECCION_HIPOCLORITO_SODIO smallint,
   TODA_DESINFECCION_HIPOCLORITO_CALCIO smallint,
   TODA_DESINFECCION_OZONACION smallint,
   TODA_DESINFECCION_RAYOS_ULTRAVIOLETA smallint,
   TODA_DESINFECCION_DIOXIDO_CLORO smallint,
   primary key (TODA_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVALINEACONDUCCIONAGUACRUDAACUEDUCTO     */
/*==============================================================*/
create table TECNICOOPERATIVALINEACONDUCCIONAGUACRUDAACUEDUCTO
(
   TOLC_ID              serial not null,
   TOLC_TOP_ID          int not null,
   TOLC_TIPO_CANAL_ID   int not null,
   TOLC_MATERIAL_CANAL_ID int not null,
   TOLC_LONGITUD        float(16),
   TOLC_DIAMETRO        float(16),
   TOLC_EDAD            int,
   primary key (TOLC_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVAPLANTAAGUAPOTABLEACUEDUCTO            */
/*==============================================================*/
create table TECNICOOPERATIVAPLANTAAGUAPOTABLEACUEDUCTO
(
   TOPLA_ID             serial not null,
   TOPLA_TOP_ID         int not null,
   TOPLA_TECNOLOGIA_UTILIZADA_CC smallint,
   TOPLA_TECNOLOGIA_UTILIZADA_FD smallint,
   TOPLA_TECNOLOGIA_UTILIZADA_PC smallint,
   TOPLA_TECNOLOGIA_UTILIZADA_FIME smallint,
   TOPLA_TECNOLOGIA_UTILIZADA_CT smallint,
   TOPLA_TECNOLOGIA_UTILIZADA_RHM smallint,
   TOPLA_CICLO_COMPLETO_MR smallint,
   TOPLA_CICLO_COMPLETO_FLH smallint,
   TOPLA_CICLO_COMPLETO_FLM smallint,
   TOPLA_CICLO_COMPLETO_SD smallint,
   TOPLA_CICLO_COMPLETO_FR smallint,
   TOPLA_FILTRACION_DIRECTA_MR smallint,
   TOPLA_FILTRACION_DIRECTA_FLH smallint,
   TOPLA_FILTRACION_DIRECTA_FLM smallint,
   TOPLA_FILTRACION_DIRECTA_FR smallint,
   TOPLA_FIME_FGD       smallint,
   TOPLA_FIME_FGAC      smallint,
   TOPLA_FIME_FGAS2     smallint,
   TOPLA_FIME_FGAS3     smallint,
   TOPLA_FIME_FLA       smallint,
   TOPLA_RHM_BANDEJAS_CASCADAS smallint,
   TOPLA_RHM_ASPERSORES smallint,
   TOPLA_RHM_SD         smallint,
   TOPLA_RHM_FR         smallint,
   TOPLA_RHM_FIME       smallint,
   TOPLA_PLANTA_TTMTO_FUNCIONA smallint,
   TOPLA_ESTRUCTURAS_MEDICION_CAU smallint,
   topla_menor_caudal_operacion_diseno smallint,
   topla_planta_compacta smallint, 

 
   primary key (TOPLA_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVAREDDISTRIBUCIONACUEDUCTO              */
/*==============================================================*/
create table TECNICOOPERATIVAREDDISTRIBUCIONACUEDUCTO
(
   TORD_ID              serial not null,
   TORD_TOP_ID          int not null,
   TORD_RED_DISTRIBUCION_ID int not null,
   TORD_MATERIAL_DISTRIBUCION_ID int not null,
   TORD_MATERIAL_DIAMETRO float(16),
   TORD_MATERIAL_EDAD   int,
   primary key (TORD_ID)
);

/*==============================================================*/
/* Table: TECNICOOPERATIVO                                      */
/*==============================================================*/
create table TECNICOOPERATIVO
(
   TOP_ID               serial not null,
   TOP_PPS_PRE_ID       int not null,
   TOP_PPS_ANIO         int not null,
   TOP_PPS_SER_ID       int not null,
   primary key (TOP_ID)
);

CREATE UNIQUE INDEX TECNICOOPERATIVO_idx ON TECNICOOPERATIVO (top_pps_pre_id,top_pps_anio,top_pps_ser_id);



/*==============================================================*/
/* Table: TANQUE                                                */
/*==============================================================*/
create table TANQUE
(
   TAN_ID               serial not null,
   TAN_ESTADO_ID        int not null,
   TAN_BYPASS_DIRECTO_RED smallint,
   TAN_PRESENCIA_VALVULA_CONTROL smallint,
   TAN_PROTECCION_TAPA  smallint,
   TAN_CERRAMIENTO_LOTE smallint,
   TAN_VENTOSA_SALIDA   smallint,
   TAN_MACRO_MEDIDOR    smallint,
   TAN_VOLUMEN            real,
   TAN_TOP_ID           INT4 NOT NULL REFERENCES tecnicooperativo ON UPDATE CASCADE, 
 
   primary key (TAN_ID)
);


/*==============================================================*/
/* Table: CAPTACION                                             */
/*==============================================================*/
/* Eliminado por Pedro, 2010-08-04
create table CAPTACION
(
   CAPT_ID              serial not null,
   CAPT_TIPO_DE_FONDO   smallint,
   CAPT_TIPO_LATERAL    smallint,
   CAPT_TIPO_LECHO_FILTRANTE smallint,
   CAPT_TIPO_TRINCHO_REPRESA smallint,
   CAPT_ESTADO_ESTRUCTURA_ID int,
   CAPT_ESTADO_POZO_ID  int not null,
   CAPT_ESTADO_BOMBA_ID int not null,
   CAPT_FUENTE_ENERGIA_ID int not null,
   CAPT_FUENTE_SUPERFICIAL smallint,
   CAPT_TOP_ID INT4 NOT NULL REFERENCES tecnicooperativo ON UPDATE CASCADE,
  primary key (CAPT_ID)
);
*/

create table CAPTACION_SUPERFICIAL
(
   CASP_ID              serial not null,
   CASP_TOP_ID INT4 NOT NULL REFERENCES tecnicooperativo ON UPDATE CASCADE,
   CASP_TIPO_DE_FONDO   smallint,
   CASP_TIPO_LATERAL    smallint,
   CASP_TIPO_LECHO_FILTRANTE smallint,
   CASP_TIPO_TRINCHO_REPRESA smallint,
   CASP_ESTADO_ESTRUCTURA_ID int,
   primary key (CASP_ID)
);


create table CAPTACION_SUBTERRANEA
(
   CASB_ID              serial not null,
   CASB_TOP_ID INT4 NOT NULL REFERENCES tecnicooperativo ON UPDATE CASCADE,
   CASB_ESTADO_POZO_ID  int not null,
   CASB_ESTADO_BOMBA_ID int not null,
   CASB_FUENTE_ENERGIA_ID int not null,
  primary key (CASB_ID)
);

/*==============================================================*/
/* Table: TIPOCANAL                                             */
/*==============================================================*/
create table TIPOCANAL
(
   TCA_ID               serial not null,
   TCA_NOMBRE           varchar(100) not null UNIQUE,
   primary key (TCA_ID)
);

/*==============================================================*/
/* Table: TIPOFUENTESUPERFICIAL                                 */
/*==============================================================*/
create table TIPOFUENTESUPERFICIAL
(
   TFU_ID               serial not null,
   TFU_FUE_ID           int not null,
   TFU_NACIMIENTO       varchar(100) not null,
   TFU_QUEBRADA_RIO     varchar(100),
   TFU_RESERVORIO       varchar(100),
   TFU_MAR              varchar(100),
   primary key (TFU_ID)
);

/*==============================================================*/
/* Table: TRABAJADORESYVINCULACION                              */
/*==============================================================*/


create table TRABAJADORESYVINCULACION (
   TRA_ID               SERIAL               not null,
   TRA_IAF_ID           INT4                 null,
   TRA_MANUAL_PROCEDIMIENTO smallint                 null,
   TRA_MANUAL_FUNCIONES smallint                 null,
   constraint PK_TRABAJADORESYVINCULACION primary key (TRA_ID),
   constraint FK_TRABAJAD_REFERENCE_INFORMAC foreign key (TRA_IAF_ID)
      references administrativafinanciera (IAF_ID)
      on delete restrict on update cascade
);


/*==============================================================*/
/* Table: PERSONALADMINISTRATIVO                                */
/*==============================================================*/
/*
create table PERSONALADMINISTRATIVO (
   PAD_ID               SERIAL               not null,
   PAD_TRA_ID           INT4                 null,
   PAD_CARGO            VARCHAR(100)         null,
   PAD_CONTRATO_TERMINO_INDEFINIDO smallint                 null,
   PAD_CONTRATO_TERMINO_FIJO smallint                 null,
   PAD_ORDEN_PESTACION_SERVICIOS smallint                 null,
   PAD_SIN_CONTRATO_CON_BONIFICACION smallint                 null,
   PAD_REMUNERACION_MENSUAL FLOAT8               null,
   constraint PK_PERSONALADMINISTRATIVO primary key (PAD_ID),
   constraint FK_PERSONAL_REFERENCE_TRABAJAD foreign key (PAD_TRA_ID)
      references TRABAJADORESYVINCULACION (TRA_ID)
      on delete restrict on update cascade
);
*/

/*==============================================================*/
/* Table: PERSONALOPERATIVO                                     */
/*==============================================================*/
/*
create table PERSONALOPERATIVO (
   POP_ID               SERIAL               not null,
   POP_TRA_ID           INT4                 null,
   POP_CARGO            VARCHAR(100)         null,
   POP_CONTRATO_TERMINO_INDEFINIDO smallint                 null,
   POP_CONTRATO_TERMINO_FIJO smallint                 null,
   POP_ORDEN_PRESTACION_SERVICIOS smallint                 null,
   POP_SIN_CONTRATO_CON_BONIFICACION smallint                 null,
   POP_REMUNERACION_MENSUAL FLOAT8               null,
   constraint PK_PERSONALOPERATIVO primary key (POP_ID),
   constraint FK_PERSONAL_REFERENCE_TRABAJAD foreign key (POP_TRA_ID)
      references TRABAJADORESYVINCULACION (TRA_ID)
      on delete restrict on update cascade
);
*/


CREATE TABLE personaloperativoadministrativo
(
  poa_id serial NOT NULL,
  poa_tra_id integer NOT NULL,
  poa_cedula character varying(100) NOT NULL,
  poa_nombre character varying(250) NOT NULL,
  poa_cargo character varying(100),
  poa_tipo_vinculacion character varying(100),
  poa_remuneracion_mensual double precision,
  poa_tipo_trabajador character varying(30),
  CONSTRAINT pk_personaloperativoadministrativo PRIMARY KEY (poa_id),
  CONSTRAINT fk_personal_reference_trabajadoresyvinculacion FOREIGN KEY (poa_tra_id)
      REFERENCES trabajadoresyvinculacion (tra_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
);


/*==============================================================*/
/* Table: TRATAMIENTOAPROVECHAMIENTORESIDUOSSOLIDOSASEO         */
/*==============================================================*/
create table TRATAMIENTOAPROVECHAMIENTORESIDUOSSOLIDOSASEO
(
   TAP_ID               serial not null,
   TAP_TOP_ID           int not null,
   TAP_PESO_RESIDUOS_COMIDA_JARDIN float(16),
   TAP_PESO_PAPEL_CARTON float(16),
   TAP_PESO_PLASTICOS   float(16),
   TAP_PESO_CAUCHO_CUERO float(16),
   TAP_PESO_TEXTILES    float(16),
   TAP_PESO_MADERA      float(16),
   TAP_PESO_PRODUCTOS_METALICOS float(16),
   TAP_PESO_VIDRIOS     float(16),
   TAP_PESO_CERAMICOS_ROCA_ESCOMBRO float(16),
   TAP_PESO_HUESOS      float(16),
   TAP_PESO_RESIDUOS_HIGENICOS float(16),
   TAP_PESO_OTROS_RESIDUOS float(16),
   TAP_DESTI_RS_SEPA_ORGANI_TON_MES float(16),
   TAP_DESTI_RS_SEPA_ORGANI_DIS_CIE_ABIE smallint,
   TAP_DESTI_RS_SEPA_ORGANI_DIS_RELL_SANI smallint,
   TAP_DESTI_RS_SEPA_ORGANI_ARROJA_AGUA smallint,
   TAP_DESTI_RS_SEPA_ORGANI_ARROJA_AGUA_CANT float(16),
   TAP_DESTI_RS_SEPA_ORGANI_APROVECHA smallint,
   TAP_DESTI_RS_SEPA_ORGANI_APROV_TOTAL_PROCE float(16),
   TAP_DESTI_RS_SEPA_ORGANI_APROV_TOTAL_TERMI float(16),
   TAP_DESTI_RS_SEPA_ORGANI_OTRO_CUAL varchar(100),
   TAP_DESTI_RS_SEPA_RESICLA_TON_MES float(16),
   TAP_DESTI_RS_SEPA_RESICLA_QUEMAN smallint,
   TAP_DESTI_RS_SEPA_RESICLA_DIS_CIE_ABIE smallint,
   TAP_DESTI_RS_SEPA_RESICLA_DIS_RELL_SANI smallint,
   TAP_DESTI_RS_SEPA_RESICLA_ARROJA_AGUA smallint,
   TAP_DESTI_RS_SEPA_RESICLA_ARROJA_AGUA_CANT float(16),
   TAP_DESTI_RS_SEPA_RESICLA_REGALAN smallint,
   TAP_DESTI_RS_SEPA_RESICLA_VENDEN smallint,
   TAP_DESTI_RS_SEPA_RESICLA_VEN_VIDRIO smallint,
   TAP_DESTI_RS_SEPA_RESICLA_VEN_PAPEL smallint,
   TAP_DESTI_RS_SEPA_RESICLA_VEN_PLASTI smallint,
   TAP_DESTI_RS_SEPA_RESICLA_VEN_METAL smallint,
   TAP_DESTI_RS_SEPA_RESICLA_VEN_VIDRIO_CANT float(16),
   TAP_DESTI_RS_SEPA_RESICLA_VEN_PAPEL_CANT float(16),
   TAP_DESTI_RS_SEPA_RESICLA_VEN_PLASTI_CANT float(16),
   TAP_DESTI_RS_SEPA_RESICLA_VEN_METAL_CANT float(16),
   TAP_DESTI_RS_SEPA_HIGEN_QUEMAN smallint,
   TAP_DESTI_RS_SEPA_HIGEN_DIS_CIE_ABIE smallint,
   TAP_DESTI_RS_SEPA_HIGEN_DIS_RELL_SANI smallint,
   TAP_DESTI_RS_SEPA_HIGEN_ARROJA_AGUA smallint,
   TAP_DESTI_RS_SEPA_HIGEN_ARROJA_AGUA_CANT float(16),
   TAP_DESTI_RS_SEPA_HIGEN_OTRO_CUAL varchar(100),
   TAP_DESTI_RS_NOSEPA_RECOLE_QUEMAN smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_DIS_CIE_ABIE smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_DIS_RELL_SANI smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_ARROJA_AGUA smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_ARROJA_AGUA_CANT float(16),
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_NOCOMER smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_VIDRIO smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PAPEL smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PLASTI smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_METAL smallint,
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_VIDRIO_CANT float(16),
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PAPEL_CANT float(16),
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_PLASTI_CANT float(16),
   TAP_DESTI_RS_NOSEPA_RECOLE_SEPA_SIT_DISP_COMER_METAL_CANT float(16),
   TAP_DESTI_RS_NOSEPA_RECOLE_OTRO_CUAL varchar(100),
   primary key (TAP_ID)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   USU_ID               serial not null,
   USU_PER_ID           int NOT NULL,
   USU_LOGIN            varchar(30) NOT NULL,
   USU_CLAVE            varchar(32) NOT NULL, -- para guardar en formato md5
   usu_estado           varchar(20) NOT NULL,
   primary key (USU_ID)
);

/*==============================================================*/
/* Table: VEHICULORECOLECCION                                   */
/*==============================================================*/
create table VEHICULORECOLECCION
(
   VER_ID               serial not null,
   VER_RTR_ID           int not null,
   VER_TIPO_VEHICULO    varchar(50),
   VER_TIPO_TRACCION    varchar(50),
   VER_CAPACIDAD        varchar(50),
   VER_ESADO_VEHICULO   varchar(50),
   primary key (VER_ID)
);

/*==============================================================*/
/* Table: vinculacionalservicio                        */
/*==============================================================*/
create table vinculacionalservicio
(
   VAS_ID               serial not null,
   VAS_COM_ID           int not null,
   VAS_SUSCRIPCION_CONTRATO smallint,
   primary key (VAS_ID)
);

alter table ACTIVIDADESRESIDUOSSOLIDOSASEO add constraint FK_REFERENCE_76 foreign key (ARS_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table analisiscobertura add constraint FK_REFERENCE_32 foreign key (ACO_COM_ID)
      references COMERCIAL (COM_ID) on delete restrict on update cascade;


-- Eliminada por olicitud de Maryit, 2010-07-25
/*
alter table ASPECTOSLEGALES add constraint FK_REFERENCE_55 foreign key (ALE_FUE_ID)
references FUENTES (FUE_ID) on delete restrict on update cascade;
*/

alter table CALIDAD add constraint FK_REFERENCE_51 foreign key (CAL_PPS_PRE_ID, CAL_PPS_ANIO, CAL_PPS_SER_ID)
      references PERIODOPORPRESTADORSERVICIO (PPS_PRE_ID, PPS_ANIO, PPS_SER_ID) on delete restrict on update cascade;

alter table CALIDADAGUA add constraint FK_REFERENCE_29 foreign key (CAG_CAL_ID)
      references CALIDAD (CAL_ID) on delete restrict on update cascade;


alter table fuentessuperficiales add constraint FK_REFERENCE_16 foreign key (fsp_FUE_ID)
      references FUENTES (FUE_ID) on delete restrict on update restrict;

alter table CAPACITACION add constraint FK_REFERENCE_5 foreign key (CAP_IAF_ID)
      references ADMINISTRATIVAFINANCIERA (IAF_ID) on delete restrict on update restrict;


alter table COMUNIDADSERVICIORECOLECCION add constraint FK_REFERENCE_25 foreign key (CSR_SRSF_ID)
      references SEPARACIONRESIDUOSSOLIDOSFUENTESASEO (SRSF_ID) on delete restrict on update restrict;

alter table COMERCIAL add constraint FK_REFERENCE_53 foreign key (COM_PPS_PRE_ID, COM_PPS_ANIO, COM_PPS_SER_ID)
      references PERIODOPORPRESTADORSERVICIO (PPS_PRE_ID, PPS_ANIO, PPS_SER_ID) on delete restrict on update cascade;

alter table DISPOSICIONFINALRESIDUOSASEO add constraint FK_REFERENCE_26 foreign key (DFR_AUTORIDAD_AUTONOMA_ID)
      references AUTORIDADAMBIENTAL (AUA_ID) on delete restrict on update restrict;

alter table DISPOSICIONFINALRESIDUOSASEO add constraint FK_REFERENCE_72 foreign key (DFR_ESTADO_VIA_ACCESO_SITIO_ID)
      references ESTADOGENERAL (ESG_ID) on delete restrict on update cascade;

alter table DISPOSICIONFINALRESIDUOSASEO add constraint FK_REFERENCE_73 foreign key (DFR_DEPARTAMENTO_DISPOCISION_ID)
      references DEPARTAMENTO (DEP_ID) on delete restrict on update cascade;

alter table DISPOSICIONFINALRESIDUOSASEO add constraint FK_REFERENCE_74 foreign key (DFR_MUNICIPIO_DISPOSICION_ID)
      references MUNICIPIO (MUN_ID) on delete restrict on update cascade;

alter table DISPOSICIONFINALRESIDUOSASEO add constraint FK_REFERENCE_75 foreign key (DFR_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table facturacionyrecaudo add constraint FK_REFERENCE_33 foreign key (FAC_COM_ID)
      references COMERCIAL (COM_ID) on delete restrict on update cascade;

alter table fondosolidaridadredistribucioningresos add constraint FK_REFERENCE_34 foreign key (FSI_COM_ID)
      references COMERCIAL (COM_ID) on delete restrict on update cascade;

alter table FUENTES add constraint FK_REFERENCE_57 foreign key (FUE_MIC_ID)
      references MICROCUENCAS (MIC_ID) on delete restrict on update cascade;

alter table FUENTESSUBTERRANEAS add constraint FK_REFERENCE_15 foreign key (FSU_FUE_ID)
      references FUENTES (FUE_ID) on delete restrict on update restrict;

alter table GESTIONRESULTADO add constraint FK_REFERENCE_6 foreign key (GRE_IAF_ID)
      references ADMINISTRATIVAFINANCIERA (IAF_ID) on delete restrict on update restrict;

alter table ADMINISTRATIVAFINANCIERA add constraint FK_REFERENCE_25 foreign key (IAF_PPS_PRE_ID, IAF_PPS_ANIO, IAF_PPS_SER_ID)
      references PERIODOPORPRESTADORSERVICIO (PPS_PRE_ID, PPS_ANIO, PPS_SER_ID) on delete restrict on update restrict;

alter table INFORMACIONCONTABLE add constraint FK_REFERENCE_3 foreign key (ICO_IAF_ID)
      references ADMINISTRATIVAFINANCIERA (IAF_ID) on delete restrict on update restrict;

alter table INFORMACIONGENERALMICROCUENCAS add constraint FK_REFERENCE_22 foreign key (IMI_DEP_ID)
      references DEPARTAMENTO (DEP_ID) on delete restrict on update restrict;

alter table INFORMACIONGENERALMICROCUENCAS add constraint FK_REFERENCE_23 foreign key (IMI_MUN_ID)
      references MUNICIPIO (MUN_ID) on delete restrict on update restrict;

alter table INFORMACIONGENERALMICROCUENCAS add constraint FK_REFERENCE_56 foreign key (IMI_MIC_ID)
      references MICROCUENCAS (MIC_ID) on delete restrict on update cascade;

alter table INFORMACIONVISUAL add constraint FK_REFERENCE_58 foreign key (IV_PRE_ID)
      references PRESTADOR (PRE_ID) on delete restrict on update cascade;

alter table MICROCUENCAS add constraint FK_REFERENCE_52 foreign key (MIC_PPS_PRE_ID, MIC_PPS_ANIO, MIC_PPS_SER_ID)
      references PERIODOPORPRESTADORSERVICIO (PPS_PRE_ID, PPS_ANIO, PPS_SER_ID) on delete restrict on update cascade;

alter table MUNICIPIO add constraint FK_REFERENCE_21 foreign key (MUN_DEP_ID)
      references DEPARTAMENTO (DEP_ID) on delete restrict on update restrict;

alter table PARAMETROXFRECUENCIA add constraint FK_REFERENCE_17 foreign key (PFE_PPR_ID_PARAMENTRO)
      references PARAMETROSPUNTOSRED (PPR_ID) on delete restrict on update restrict;

alter table PARAMETROXFRECUENCIA add constraint FK_REFERENCE_20 foreign key (PFE_CAG_ID)
      references CALIDADAGUA (CAG_ID) on delete restrict on update restrict;

alter table PARTICIPACIONCIUDADANA add constraint FK_REFERENCE_4 foreign key (PAR_IAF_ID)
      references ADMINISTRATIVAFINANCIERA (IAF_ID) on delete restrict on update restrict;


alter table peticionesquejasrecursos add constraint FK_REFERENCE_35 foreign key (PQR_COM_ID)
      references COMERCIAL (COM_ID) on delete restrict on update cascade;

alter table PRESTADOR add constraint FK_REFERENCE_27 foreign key (PRE_RAN_ID)
      references RANGO (RAN_ID) on delete restrict on update restrict;

alter table PRESTADOR add constraint FK_REFERENCE_28 foreign key (PRE_USU_ID)
      references USUARIO (USU_ID) on delete restrict on update restrict;

alter table PROTECCIONFUENTESSUPERFICIALESAGUA add constraint FK_REFERENCE_31 foreign key (PFU_MIC_ID)
      references MICROCUENCAS (MIC_ID) on delete restrict on update cascade;

alter table RECOLECCIONTRASNPORTEASEO add constraint FK_REFERENCE_78 foreign key (RTR_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table RESULTADOSXPUNTO add constraint FK_REFERENCE_18 foreign key (REP_CAG_ID)
      references CALIDADAGUA (CAG_ID) on delete restrict on update restrict;

alter table RESULTADOSXPUNTO add constraint FK_REFERENCE_19 foreign key (REP_PPR_ID_PARAMENTRO)
      references PARAMETROSPUNTOSRED (PPR_ID) on delete restrict on update restrict;

alter table SEPARACIONRESIDUOSSOLIDOSFUENTESASEO add constraint FK_REFERENCE_77 foreign key (SRSF_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table SUSCRIPTORESSERVICIOACUEDUCTO add constraint FK_REFERENCE_37 foreign key (SSACU_EST_ID)
      references ESTRATO (EST_ID) on delete restrict on update cascade;

alter table SUSCRIPTORESSERVICIOACUEDUCTO add constraint FK_REFERENCE_38 foreign key (SSACU_ACO_ID)
      references analisiscobertura (ACO_ID) on delete restrict on update cascade;

alter table SUSCRIPTORESSERVICIOASEO add constraint FK_REFERENCE_39 foreign key (SSASE_EST_ID)
      references ESTRATO (EST_ID) on delete restrict on update cascade;

alter table SUSCRIPTORESSERVICIOASEO add constraint FK_REFERENCE_40 foreign key (SSASE_ACO_ID)
      references analisiscobertura (ACO_ID) on delete restrict on update cascade;

alter table TANQUE add constraint FK_REFERENCE_65 foreign key (TAN_ESTADO_ID)
      references ESTADOGENERAL (ESG_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAACUEDUCTO add constraint FK_REFERENCE_47 foreign key (TOA_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAADUCCIONIMPULSIONACUEDUCTO add constraint FK_REFERENCE_42 foreign key (TOAI_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAADUCCIONIMPULSIONACUEDUCTO add constraint FK_REFERENCE_70 foreign key (TOAI_MATERIAL_CANAL_ID)
      references MATERIALCANAL (MCA_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAADUCCIONIMPULSIONACUEDUCTO add constraint FK_REFERENCE_71 foreign key (TOAI_TIPO_CANAL_ID)
      references TIPOCANAL (TCA_ID) on delete restrict on update cascade;



alter table TECNICOOPERATIVACOMPONENTESSISTEMA add constraint FK_REFERENCE_48 foreign key (TOCS_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVADESARENADORACUEDUCTO add constraint FK_REFERENCE_50 foreign key (TODES_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVADESINFECCIONACUEDUCTO add constraint FK_REFERENCE_49 foreign key (TODA_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVALINEACONDUCCIONAGUACRUDAACUEDUCTO add constraint FK_REFERENCE_41 foreign key (TOLC_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVALINEACONDUCCIONAGUACRUDAACUEDUCTO add constraint FK_REFERENCE_68 foreign key (TOLC_TIPO_CANAL_ID)
      references TIPOCANAL (TCA_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVALINEACONDUCCIONAGUACRUDAACUEDUCTO add constraint FK_REFERENCE_69 foreign key (TOLC_MATERIAL_CANAL_ID)
      references MATERIALCANAL (MCA_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAPLANTAAGUAPOTABLEACUEDUCTO add constraint FK_REFERENCE_45 foreign key (TOPLA_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAREDDISTRIBUCIONACUEDUCTO add constraint FK_REFERENCE_44 foreign key (TORD_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAREDDISTRIBUCIONACUEDUCTO add constraint FK_REFERENCE_66 foreign key (TORD_RED_DISTRIBUCION_ID)
      references REDDISTRIBUCION (RDIST_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVAREDDISTRIBUCIONACUEDUCTO add constraint FK_REFERENCE_67 foreign key (TORD_MATERIAL_DISTRIBUCION_ID)
      references MATERIALREDDISTRIBUCION (MRD_ID) on delete restrict on update cascade;

alter table TECNICOOPERATIVO add constraint FK_REFERENCE_54 foreign key (TOP_PPS_PRE_ID, TOP_PPS_ANIO, TOP_PPS_SER_ID)
      references PERIODOPORPRESTADORSERVICIO (PPS_PRE_ID, PPS_ANIO, PPS_SER_ID) on delete restrict on update cascade;

alter table TIPOFUENTESUPERFICIAL add constraint FK_REFERENCE_14 foreign key (TFU_FUE_ID)
      references FUENTES (FUE_ID) on delete restrict on update restrict;


alter table TRATAMIENTOAPROVECHAMIENTORESIDUOSSOLIDOSASEO add constraint FK_REFERENCE_79 foreign key (TAP_TOP_ID)
      references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade;

alter table USUARIO add constraint FK_REFERENCE_26 foreign key (USU_PER_ID)
      references PERFIL (PER_ID) on delete restrict on update restrict;

alter table VEHICULORECOLECCION add constraint FK_REFERENCE_24 foreign key (VER_RTR_ID)
      references RECOLECCIONTRASNPORTEASEO (RTR_ID) on delete restrict on update restrict;

alter table vinculacionalservicio add constraint FK_REFERENCE_36 foreign key (VAS_COM_ID)
      references COMERCIAL (COM_ID) on delete restrict on update cascade;



create table ACTIVIDADESAEJECUTARPORPRESTADORALCANTARILLADO
(
    aaep_id SERIAL NOT NULL primary key,
    aaep_nombre VARCHAR (80) NOT NULL
);



create table TECNICOOPERATIVASOLUCIONCOLECTIVAALCANTARILLADO
(
    tosca_ID              serial not null primary key,
 
    tosca_posee_alcantarillado_colectivo smallint,
 
    tosca_Sanitario_funciona smallint,
    tosca_Sanitario_numero_suscriptores int4,
    tosca_Sanitario_se_usa  smallint,
    tosca_Sanitario_estado  int4,
    
    tosca_Pluvial_funciona smallint,
    tosca_Pluvial_numero_suscriptores int4,
    tosca_Pluvial_se_usa  smallint,
    tosca_Pluvial_estado  int4,
    
    tosca_Combi_convencional_funciona smallint,
    tosca_Combi_convencional_numero_suscriptores int4,
    tosca_Combi_convencional_se_usa  smallint,
    tosca_Combi_convencional_estado  int4,
 
    tosca_Combi_no_convencional_funciona smallint,
    tosca_Combi_no_convencional_numero_suscriptores int4,
    tosca_Combi_no_convencional_se_usa  smallint,
    tosca_Combi_no_convencional_estado  int4,

    tosca_Simplificado_funciona smallint,
    tosca_Simplificado_numero_suscriptores int4,
    tosca_Simplificado_se_usa  smallint,
    tosca_Simplificado_estado  int4,
 
    tosca_Sin_arrastre_solidos_funciona smallint,
    tosca_Sin_arrastre_solidos_numero_suscriptores int4,
    tosca_Sin_arrastre_solidos_se_usa  smallint,
    tosca_Sin_arrastre_solidos_estado  int4,
 
    tosca_Otro_cual VARCHAR(80),
    tosca_Otro_funciona smallint,
    tosca_Otro_numero_suscriptores int4,
    tosca_Otro_se_usa  smallint,
    tosca_Otro_estado  int4,
    
    tosca_actividades_a_ejecutar int4,
 
    tosca_top_id int4,
    
 
 constraint FK_REFERENCE_599 foreign key (tosca_Sanitario_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_600 foreign key (tosca_Pluvial_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_601 foreign key (tosca_Pluvial_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_602 foreign key (tosca_Combi_convencional_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,

 constraint FK_REFERENCE_603 foreign key (tosca_Combi_no_convencional_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_604 foreign key (tosca_Simplificado_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_605 foreign key (tosca_Sin_arrastre_solidos_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_606 foreign key (tosca_Otro_estado)
 references ESTADOGENERAL (esg_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_607 foreign key (tosca_actividades_a_ejecutar)
 references ACTIVIDADESAEJECUTARPORPRESTADORALCANTARILLADO (aaep_id) on delete restrict on update cascade,
 
 constraint FK_REFERENCE_608 foreign key (TOSCA_TOP_ID)
 references TECNICOOPERATIVO (TOP_ID) on delete restrict on update cascade
 
);


create table TIPODESOLUCIONINDIVIDUALALCANTARILLADO
(
    tdsia_id SERIAL NOT NULL primary key,
    tdsia_nombre VARCHAR (80) NOT NULL
);
 

create table CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO
(
    ctdsia_id SERIAL NOT NULL primary key,
    ctdsia_nombre VARCHAR (80) NOT NULL,
    ctdsia_tdsia_id INT4 REFERENCES TIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE
 
 );
 
 
create table TECNICOOPERATIVASOLUCIONINDIVIDUALALCANTARILLADO
(
    tosia_ID              serial not null primary key,
    -- No esta normalizado a proposito
    tosia_opcion1_ctdsia_id       INT4 REFERENCES CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE,
    tosia_opcion2_ctdsia_id       INT4 REFERENCES CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE,
    tosia_opcion3_ctdsia_id       INT4 REFERENCES CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE,
    tosia_opcion4_ctdsia_id       INT4 REFERENCES CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE,
    tosia_opcion5_ctdsia_id       INT4 REFERENCES CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE,
    tosia_opcion6_ctdsia_id       INT4 REFERENCES CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO ON UPDATE CASCADE,
    tosia_ctdsia_otro     VARCHAR (80),
    
    tosia_opcion1_numero_viviendas  INT2,
    tosia_opcion2_numero_viviendas  INT2,
    tosia_opcion3_numero_viviendas  INT2,
    tosia_opcion4_numero_viviendas  INT2,
    tosia_opcion5_numero_viviendas  INT2,
    tosia_opcion6_numero_viviendas  INT2,

    tosia_TOP_ID                 INT4 REFERENCES TECNICOOPERATIVO ON UPDATE CASCADE
 
);



-- Ingresando algunos datos:
insert into estrato values (1,'1',1);
insert into estrato values (2,'2',1);
insert into estrato values (3,'3',1);
insert into estrato values (4,'4',1);
insert into estrato values (5,'5',1);
insert into estrato values (6,'6',1);
insert into estrato values (7,'Multi Usuario mixto',0);
insert into estrato values (8,'industrial',0);
insert into estrato values (9,'comercial',0);
insert into estrato values (10,'oficial',0);
insert into estrato values (11,'especial',0);
insert into estrato values (12,'temporal',0);

insert into servicio values (1,'acueducto');
insert into servicio values (2,'alcantarillado');
insert into servicio values (3,'aseo');

insert into perfil(per_id, per_nombre) values (1, 'administrador');
insert into perfil(per_id, per_nombre) values (2, 'prestador');
insert into perfil(per_id, per_nombre) values (3, 'alcaldia');
insert into perfil(per_id, per_nombre) values (4, 'gobernacion');


insert into autoridadambiental (aua_nombre) values ('CODECHOCO');
insert into autoridadambiental (aua_nombre) values ('CORMAGDALENA');
insert into autoridadambiental (aua_nombre) values ('CORPOURABA');
insert into autoridadambiental (aua_nombre) values ('CDA');
insert into autoridadambiental (aua_nombre) values ('DADIMA');
insert into autoridadambiental (aua_nombre) values ('CORALINA');
insert into autoridadambiental (aua_nombre) values ('DAGMA');
insert into autoridadambiental (aua_nombre) values ('CORMACARENA');
insert into autoridadambiental (aua_nombre) values ('DAMA');
insert into autoridadambiental (aua_nombre) values ('CORPOCALDAS');
insert into autoridadambiental (aua_nombre) values ('CARDIQUE');
insert into autoridadambiental (aua_nombre) values ('CORPOMOJANA');
insert into autoridadambiental (aua_nombre) values ('CARSUCRE');
insert into autoridadambiental (aua_nombre) values ('DAMARENA');
insert into autoridadambiental (aua_nombre) values ('CVC');
insert into autoridadambiental (aua_nombre) values ('AREA METROPOLITANA DEL VALLE DE ABURRA');
insert into autoridadambiental (aua_nombre) values ('MINISTERIO DE AMBIENTE, VIVIENDA Y DESARROLLO TERRITORIAL');
insert into autoridadambiental (aua_nombre) values ('CORPORACION AUTONOMA REGIONAL DEL ATLANTICO');
insert into autoridadambiental (aua_nombre) values ('CORPORACION AUTONOMA REGIONAL DEL CAUCA -CRC');
insert into autoridadambiental (aua_nombre) values ('CORPORACION AUTONOMA REGIONAL DE NARI�O');
insert into autoridadambiental (aua_nombre) values ('OTRA');

insert into parametrospuntosred (ppr_nombre_paramentro) values ('Turbulencia');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Color aparente');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Ph');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Cloro residual libre');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Colifirme total');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Escherichia coli');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Carbono organico total');
insert into parametrospuntosred (ppr_nombre_paramentro) values ('Fluoruros');

INSERT INTO ESTADOGENERAL (esg_id,esg_nombre) values (1, 'Bueno');
INSERT INTO ESTADOGENERAL (esg_id,esg_nombre) values (2, 'Regular');
INSERT INTO ESTADOGENERAL (esg_id,esg_nombre) values (3, 'Malo');


INSERT INTO ACTIVIDADESAEJECUTARPORPRESTADORALCANTARILLADO (aaep_nombre) VALUES ('Recoleccion y transporte');

INSERT INTO ACTIVIDADESAEJECUTARPORPRESTADORALCANTARILLADO (aaep_nombre) VALUES ('Tratamiento');

INSERT INTO ACTIVIDADESAEJECUTARPORPRESTADORALCANTARILLADO (aaep_nombre) VALUES ('Operacion y Mantenimiento');

INSERT INTO ACTIVIDADESAEJECUTARPORPRESTADORALCANTARILLADO (aaep_nombre) VALUES ('Disposicion final');

INSERT INTO TIPODESOLUCIONINDIVIDUALALCANTARILLADO (tdsia_id, tdsia_nombre) VALUES (1, 'Letrina' );
INSERT INTO TIPODESOLUCIONINDIVIDUALALCANTARILLADO (tdsia_id, tdsia_nombre) VALUES (2, 'Tasa Sanitaria' );
INSERT INTO TIPODESOLUCIONINDIVIDUALALCANTARILLADO (tdsia_id, tdsia_nombre) VALUES (3, 'Inodoro de bajo consumo' );
INSERT INTO TIPODESOLUCIONINDIVIDUALALCANTARILLADO (tdsia_id, tdsia_nombre) VALUES (4, 'Inodoro de alto consumo' );
INSERT INTO TIPODESOLUCIONINDIVIDUALALCANTARILLADO (tdsia_id, tdsia_nombre) VALUES (5, 'Campo Abierto' );
INSERT INTO TIPODESOLUCIONINDIVIDUALALCANTARILLADO (tdsia_id, tdsia_nombre) VALUES (6, 'Otro' );

SELECT setval ('tipodesolucionindividualalcantarillado_tdsia_id_seq', (select max(tdsia_id) from TIPODESOLUCIONINDIVIDUALALCANTARILLADO));

INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (1, 'Letrina Seca', 1 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (2, 'Letrina con pozo de absorcion', 1 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (3, 'Letrina Ecologica', 1 );
---
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (4, 'Con descargue a campo abierto', 2 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (5, 'Con descargue a tanque septico', 2 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (6, 'Con descargue a alcantarillado', 2 );
---
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (7, 'Con descargue a campo abierto', 3 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (8, 'Con descargue a tanque septico', 3 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (9, 'Con descargue a alcantarillado', 3 );
---
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (10, 'Con descargue a campo abierto', 4 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (11, 'Con descargue a tanque septico', 4 );
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (12, 'Con descargue a alcantarillado', 4 );
---
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (13, 'Campo Abierto', 5 );
----
INSERT INTO CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO (ctdsia_id, ctdsia_nombre, ctdsia_tdsia_id) VALUES (14, 'Otro', 6 );


SELECT setval ('categoriadetipodesolucionindividualalcantarillado_ctdsia_id_seq', (select max(ctdsia_id) from CATEGORIADETIPODESOLUCIONINDIVIDUALALCANTARILLADO));


INSERT INTO fuenteenergia (fen_id, fen_nombre) VALUES (1, 'Electrica');
INSERT INTO fuenteenergia (fen_id, fen_nombre) VALUES (2, 'Elica');
INSERT INTO fuenteenergia (fen_id, fen_nombre) VALUES (3, 'Diesel');
INSERT INTO fuenteenergia (fen_id, fen_nombre) VALUES (4, 'Gasolina');
SELECT setval ('fuenteenergia_fen_id_seq', (select max(fen_id) from fuenteenergia));


INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (1, 'En tierra');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (2, 'Concreto');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (3, 'Mamposteria');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (4, 'Asbesto o cemento');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (5, 'Hierro ductil');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (6, 'PVC');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (7, 'Polietileno HD');
INSERT INTO materialcanal (mca_id, mca_nombre) VALUES (8, 'Polietileno LD');
SELECT setval ('materialcanal_mca_id_seq', (select max(mca_id) from materialcanal));


INSERT INTO tipocanal (tca_id, tca_nombre) VALUES (1, 'Canal abierto');
INSERT INTO tipocanal (tca_id, tca_nombre) VALUES (2, 'Canal cubierto');
INSERT INTO tipocanal (tca_id, tca_nombre) VALUES (3, 'Tuberia');
INSERT INTO tipocanal (tca_id, tca_nombre) VALUES (4, 'Manguera');

SELECT setval ('tipocanal_tca_id_seq', (select max(tca_id) from tipocanal));


INSERT INTO rango (ran_id,ran_tipo) values (1, '>600');
INSERT INTO rango (ran_id,ran_tipo) values (2, '<600');
INSERT INTO rango (ran_id,ran_tipo) values (3, '>100');

\echo 
\echo "AVISO: Subir los scripts: departamentos.sql y municipios.sql"
\echo 
