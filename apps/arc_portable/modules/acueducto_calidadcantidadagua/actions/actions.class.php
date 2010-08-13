<?php

/**
 * acueducto_calidadcantidadagua actions.
 *
 * @package    arc
 * @subpackage acueducto_calidadcantidadagua
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class acueducto_calidadcantidadaguaActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
   // $this->forward('default', 'module');
  }
  
  /**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo obtiene el id de un servicio
  */
  protected function obtenerServicioId($ser_nombre)
	{
		$conexion = new Criteria();			
		$conexion->add(ServicioPeer::SER_NOMBRE, $ser_nombre);
		$servicio = ServicioPeer::doSelectOne($conexion);
		$ser_id = $servicio->getSerId();
		return  $ser_id;
	}
	
	/**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo obtiene el id de una microcuenca dados el periodo, y id del prestador, basicamente busca la microcuenca para obtener el id, pero si no existe la crea
  */
    public function obtenerMicId()
  { 
	$pps_pre_id = $this->getUser()->getAttribute('pps_pre_id');
	$pps_periodo = $this->getUser()->getAttribute('pps_periodo');
	$pps_ser_id = $this->obtenerServicioId('acueducto');
	
	$conexion = new Criteria();
	$conexion->add(MicrocuencasPeer::MIC_PPS_PRE_ID, $pps_pre_id);
	$conexion->add(MicrocuencasPeer::MIC_PPS_PERIODO, $pps_periodo);
	$conexion->add(MicrocuencasPeer::MIC_PPS_SER_ID, $pps_ser_id);
	
	$microcuencafila = MicrocuencasPeer::doSelectOne($conexion);
	
	if(!$microcuencafila){
	$microcuencafila=new Microcuencas();
	$microcuencafila->setMicPpsPreId($pps_pre_id);
	$microcuencafila->setMicPpsPeriodo($pps_periodo);
	$microcuencafila->setMicPpsSerId($pps_ser_id);
	$microcuencafila->save();
	}
				
	return $microcuencafila->getMicId();
  }
 
 /**
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Este metodo llama a funciones especificas que actualizan la informacion de Calidadcantidadagua
  *@param: formulario : valores que toma,  programas o coberturaForestal
  */
  public function executeActualizarCalidadcantidadagua(sfWebRequest $request)
  {
	$salida = '';
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(CalidadcantidadaguaPeer::CCA_MIC_ID, $mic_id);
			$calidadcantidadagua = CalidadcantidadaguaPeer::doSelectOne($conexion);
			
			if(!$calidadcantidadagua)
			{
				$calidadcantidadagua =new Calidadcantidadagua();
				$calidadcantidadagua->setCcaMicId($mic_id);
			}
			
			if($calidadcantidadagua){
				
				$formulario=$this->getRequestParameter('formulario');
				
				if($formulario=='actividadAgricola')
				{
					$calidadcantidadagua->setCcaActividadAgricolaPermanentes($this->getRequestParameter('acu_cca_actividad_agricola_permanentes'));
					$calidadcantidadagua->setCcaActividadAgricolaSemipermanentes($this->getRequestParameter('acu_cca_actividad_agricola_semipermanentes'));
					$calidadcantidadagua->setCcaActividadAgricolaTemporales($this->getRequestParameter('acu_cca_actividad_agricola_temporales'));
					$calidadcantidadagua->setCcaActividadAgricolaMayorArea($this->getRequestParameter('acu_cca_actividad_agricola_mayor_area'));
					$calidadcantidadagua->setCcaActividadAgricolaPermanentesTendencia($this->getRequestParameter('acu_cca_actividad_agricola_permanentes_tendencia'));
					$calidadcantidadagua->setCcaActividadAgricolaSemipermanentesTendencia($this->getRequestParameter('acu_cca_actividad_agricola_semipermanentes_tendencia'));
					$calidadcantidadagua->setCcaActividadAgricolaTemporalesTendencia($this->getRequestParameter('acu_cca_actividad_agricola_temporales_tendencia'));
				}

				if($formulario=='actividadPecuaria')
				{
					$calidadcantidadagua->setCcaActividadPecuariaGanaderiaBovina($this->getRequestParameter('acu_cca_actividad_pecuaria_ganaderia_bovina'));
					$calidadcantidadagua->setCcaActividadPecuariaGanaderiaEquina($this->getRequestParameter('acu_cca_actividad_pecuaria_ganaderia_equina'));
					$calidadcantidadagua->setCcaActividadPecuariaPorcicultura($this->getRequestParameter('acu_cca_actividad_pecuaria_porcicultura'));
					$calidadcantidadagua->setCcaActividadPecuariaCapriculturaOvinos($this->getRequestParameter('acu_cca_actividad_pecuaria_capricultura_ovinos'));
					$calidadcantidadagua->setCcaActividadPecuariaAvicultura($this->getRequestParameter('acu_cca_actividad_pecuaria_avicultura'));
					$calidadcantidadagua->setCcaActividadPecuariaPiscicultura($this->getRequestParameter('acu_cca_actividad_pecuaria_piscicultura'));
					$calidadcantidadagua->setCcaActividadPecuariaOtros($this->getRequestParameter('acu_cca_actividad_pecuaria_otros'));				
					$calidadcantidadagua->setCcaActividadPecuariaOtrosCual($this->getRequestParameter('acu_cca_actividad_pecuaria_otros_cual'));
					$calidadcantidadagua->setCcaActividadPecuariaMayorArea($this->getRequestParameter('acu_cca_actividad_pecuaria_mayor_area'));
					
					$calidadcantidadagua->setCcaActividadPecuariaGanaderiaBovinaTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia'));
					$calidadcantidadagua->setCcaActividadPecuariaGanaderiaEquinaTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_ganaderia_equina_tendencia'));
					$calidadcantidadagua->setCcaActividadPecuariaPorciculturaTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_porcicultura_tendencia'));
					$calidadcantidadagua->setCcaActividadPecuariaCapriculturaOvinosTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia'));
					$calidadcantidadagua->setCcaActividadPecuariaAviculturaTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_avicultura_tendencia'));
					$calidadcantidadagua->setCcaActividadPecuariaPisciculturaTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_piscicultura_tendencia'));
					$calidadcantidadagua->setCcaActividadPecuariaOtrosTendencia($this->getRequestParameter('acu_cca_actividad_pecuaria_otros_tendencia'));				
				}
				
				if($formulario=='controlPlagas')
				{
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesQuimico($this->getRequestParameter('acu_cca_control_plagas_enfermedades_quimico'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesOrganico($this->getRequestParameter('acu_cca_control_plagas_enfermedades_organico'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesBiologico($this->getRequestParameter('acu_cca_control_plagas_enfermedades_biologico'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesNinguno($this->getRequestParameter('acu_cca_control_plagas_enfermedades_ninguno'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesMasUsado($this->getRequestParameter('acu_cca_control_plagas_enfermedades_mas_usado'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesQuimicoTendencia($this->getRequestParameter('acu_cca_control_plagas_enfermedades_quimico_tendencia'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesOrganicoTendencia($this->getRequestParameter('acu_cca_control_plagas_enfermedades_organico_tendencia'));
					$calidadcantidadagua->setCcaControlPlagasEnfermedadesBiologicoTendencia($this->getRequestParameter('acu_cca_control_plagas_enfermedades_biologico_tendencia'));

					$calidadcantidadagua->setCcaFertilizacionCultivosQuimico($this->getRequestParameter('acu_cca_fertilizacion_cultivos_quimico'));
					$calidadcantidadagua->setCcaFertilizacionCultivosOrganico($this->getRequestParameter('acu_cca_fertilizacion_cultivos_organico'));
					$calidadcantidadagua->setCcaFertilizacionCultivosNinguno($this->getRequestParameter('acu_cca_fertilizacion_cultivos_ninguno'));
					$calidadcantidadagua->setCcaFertilizacionCultivosMasUsado($this->getRequestParameter('acu_cca_fertilizacion_cultivos_mas_usado'));
					$calidadcantidadagua->setCcaFertilizacionCultivosQuimicoTendencia($this->getRequestParameter('acu_cca_fertilizacion_cultivos_quimico_tendencia'));
					$calidadcantidadagua->setCcaFertilizacionCultivosOrganicoTendencia($this->getRequestParameter('acu_cca_fertilizacion_cultivos_organico_tendencia'));
				}			
				
				if($formulario=='controlMalezas')
				{
					$calidadcantidadagua->setCcaControlMalezasQuimico($this->getRequestParameter('acu_cca_control_malezas_quimico'));
					$calidadcantidadagua->setCcaControlMalezasOrganico($this->getRequestParameter('acu_cca_control_malezas_organico'));
					$calidadcantidadagua->setCcaControlMalezasMecaManu($this->getRequestParameter('acu_cca_control_malezas_meca_manu'));
					$calidadcantidadagua->setCcaControlMalezasNinguno($this->getRequestParameter('acu_cca_control_malezas_ninguno'));
					$calidadcantidadagua->setCcaControlMalezasMasUsado($this->getRequestParameter('acu_cca_control_malezas_mas_usado'));
					$calidadcantidadagua->setCcaControlMalezasQuimicoTendencia($this->getRequestParameter('acu_cca_control_malezas_quimico_tendencia'));
					$calidadcantidadagua->setCcaControlMalezasOrganicoTendencia($this->getRequestParameter('acu_cca_control_malezas_organico_tendencia'));
					$calidadcantidadagua->setCcaControlMalezasMecaManuTendencia($this->getRequestParameter('acu_cca_control_malezas_meca_manu_tendencia'));

					$calidadcantidadagua->setCcaMineria($this->getRequestParameter('acu_cca_mineria'));
					$calidadcantidadagua->setCcaErosion($this->getRequestParameter('acu_cca_erosion'));
					$calidadcantidadagua->setCcaMineriaTendencia($this->getRequestParameter('acu_cca_mineria_tendencia'));
					$calidadcantidadagua->setCcaErosionTendencia($this->getRequestParameter('acu_cca_erosion_tendencia'));
				}	
								
				if($formulario=='modificacionPaisaje')
				{
					$calidadcantidadagua->setCcaDesarrollaModificacionPaisaje($this->getRequestParameter('acu_cca_desarrolla_modificacion_paisaje'));
					$calidadcantidadagua->setCcaModificacionPaisajeConstruccionVias($this->getRequestParameter('acu_cca_modificacion_paisaje_construccion_vias'));
					$calidadcantidadagua->setCcaModificacionPaisajeConstruccionVivienda($this->getRequestParameter('acu_cca_modificacion_paisaje_construccion_vivienda'));
					$calidadcantidadagua->setCcaModificacionPaisajeConstruccionOtro($this->getRequestParameter('acu_cca_modificacion_paisaje_construccion_otro'));
					$calidadcantidadagua->setCcaModificacionPaisajeConstruccionViasTendencia($this->getRequestParameter('acu_cca_modificacion_paisaje_construccion_vias_tendencia'));
					$calidadcantidadagua->setCcaModificacionPaisajeConstruccionViviendaTendencia($this->getRequestParameter('acu_cca_modificacion_paisaje_construccion_vivienda_tendencia'));
					$calidadcantidadagua->setCcaModificacionPaisajeConstruccionOtroTendencia($this->getRequestParameter('acu_cca_modificacion_paisaje_construccion_otro_tendencia'));
					$calidadcantidadagua->setCcaDescargaViviendaLiquido($this->getRequestParameter('acu_cca_descarga_vivienda_liquido'));
					$calidadcantidadagua->setCcaDescargaViviendaSolido($this->getRequestParameter('acu_cca_descarga_vivienda_solido'));
				}	
				
				if($formulario=='descargasActividadProductiva')
				{
					$calidadcantidadagua->setCcaDescargaActividadProductivaAgricola($this->getRequestParameter('acu_cca_descarga_actividad_productiva_agricola'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaPecuaria($this->getRequestParameter('acu_cca_descarga_actividad_productiva_pecuaria'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaMinera($this->getRequestParameter('acu_cca_descarga_actividad_productiva_minera'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaIndustrial($this->getRequestParameter('acu_cca_descarga_actividad_productiva_industrial'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaOtra($this->getRequestParameter('acu_cca_descarga_actividad_productiva_otra'));
				
					$calidadcantidadagua->setCcaDescargaActividadProductivaAgricolaEspecifica($this->getRequestParameter('acu_cca_descarga_actividad_productiva_agricola_especifica'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaPecuariaEspecifica($this->getRequestParameter('acu_cca_descarga_actividad_productiva_pecuaria_especifica'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaMineraEspecifica($this->getRequestParameter('acu_cca_descarga_actividad_productiva_minera_especifica'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaIndustrialEspecifica($this->getRequestParameter('acu_cca_descarga_actividad_productiva_industrial_especifica'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaOtraEspecifica($this->getRequestParameter('acu_cca_descarga_actividad_productiva_otra_especifica'));

					$calidadcantidadagua->setCcaDescargaActividadProductivaAgricolaTendencia($this->getRequestParameter('acu_cca_descarga_actividad_productiva_agricola_tendencia'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaPecuariaTendencia($this->getRequestParameter('acu_cca_descarga_actividad_productiva_pecuaria_tendencia'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaMineraTendencia($this->getRequestParameter('acu_cca_descarga_actividad_productiva_minera_tendencia'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaIndustrialTendencia($this->getRequestParameter('acu_cca_descarga_actividad_productiva_industrial_tendencia'));
					$calidadcantidadagua->setCcaDescargaActividadProductivaOtraTendencia($this->getRequestParameter('acu_cca_descarga_actividad_productiva_otra_tendencia'));
				}


				$calidadcantidadagua->save();
			
				$salida = "({success: true, mensaje:'La info de proteccion fuentes superficiales de agua fue actualizado exitosamente'})";
			}
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en proteccion fuentes superficiales de agua ".$excepcion."'}})";
		}

	return $this->renderText($salida);
  }
  
   
   /*
  *@author:maryit sanchez
  *@date:29 de julio de 2010
  *Esta funcion devuelve un registro con la informacion
  *concerniente al primer formulario de  Calidadcantidadagua para 
  *un periodo un prestador y un servicio especifico
  */
 public function executeObtenerDatosCalidadcantidadagua(sfWebRequest $request)
  {  
	$salida='({"total":"0", "results":""})';
	$fila=0;
	$datos;
		
	
		try{

			$mic_id = $this->obtenerMicId();
			$conexion = new Criteria();
			$conexion->add(CalidadcantidadaguaPeer::CCA_MIC_ID, $mic_id);
			$calidadcantidadagua = CalidadcantidadaguaPeer::doSelectOne($conexion);

			if($calidadcantidadagua)
			{
				$datos[$fila]['acu_cca_actividad_agricola_permanentes'] = $calidadcantidadagua->getCcaActividadAgricolaPermanentes();
				$datos[$fila]['acu_cca_actividad_agricola_semipermanentes'] = $calidadcantidadagua->getCcaActividadAgricolaSemipermanentes();
				$datos[$fila]['acu_cca_actividad_agricola_temporales'] = $calidadcantidadagua->getCcaActividadAgricolaTemporales();
				$datos[$fila]['acu_cca_actividad_agricola_mayor_area'] = $calidadcantidadagua->getCcaActividadAgricolaMayorArea();
				$datos[$fila]['acu_cca_actividad_agricola_permanentes_tendencia'] = $calidadcantidadagua->getCcaActividadAgricolaPermanentesTendencia();
				$datos[$fila]['acu_cca_actividad_agricola_semipermanentes_tendencia'] = $calidadcantidadagua->getCcaActividadAgricolaSemipermanentesTendencia();
				$datos[$fila]['acu_cca_actividad_agricola_temporales_tendencia'] = $calidadcantidadagua->getCcaActividadAgricolaTemporalesTendencia();
				
				$datos[$fila]['acu_cca_actividad_pecuaria_ganaderia_bovina'] = $calidadcantidadagua->getCcaActividadPecuariaGanaderiaBovina();
				$datos[$fila]['acu_cca_actividad_pecuaria_ganaderia_equina'] = $calidadcantidadagua->getCcaActividadPecuariaGanaderiaEquina();
				$datos[$fila]['acu_cca_actividad_pecuaria_porcicultura'] = $calidadcantidadagua->getCcaActividadPecuariaPorcicultura();
				$datos[$fila]['acu_cca_actividad_pecuaria_capricultura_ovinos'] = $calidadcantidadagua->getCcaActividadPecuariaCapriculturaOvinos();
				$datos[$fila]['acu_cca_actividad_pecuaria_avicultura'] = $calidadcantidadagua->getCcaActividadPecuariaAvicultura();
				$datos[$fila]['acu_cca_actividad_pecuaria_piscicultura'] = $calidadcantidadagua->getCcaActividadPecuariaPiscicultura();
				$datos[$fila]['acu_cca_actividad_pecuaria_otros'] = $calidadcantidadagua->getCcaActividadPecuariaOtros();
				$datos[$fila]['acu_cca_actividad_pecuaria_otros_cual'] = $calidadcantidadagua->getCcaActividadPecuariaOtrosCual();
				$datos[$fila]['acu_cca_actividad_pecuaria_mayor_area'] = $calidadcantidadagua->getCcaActividadPecuariaMayorArea();
				$datos[$fila]['acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaGanaderiaBovinaTendencia();
				$datos[$fila]['acu_cca_actividad_pecuaria_ganaderia_equina_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaGanaderiaEquinaTendencia();
				$datos[$fila]['acu_cca_actividad_pecuaria_porcicultura_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaPorciculturaTendencia();
				$datos[$fila]['acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaCapriculturaOvinosTendencia();
				$datos[$fila]['acu_cca_actividad_pecuaria_avicultura_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaAviculturaTendencia();
				$datos[$fila]['acu_cca_actividad_pecuaria_piscicultura_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaPisciculturaTendencia();
				$datos[$fila]['acu_cca_actividad_pecuaria_otros_tendencia'] = $calidadcantidadagua->getCcaActividadPecuariaOtrosTendencia();
				
				$datos[$fila]['acu_cca_control_plagas_enfermedades_quimico'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesQuimico();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_organico'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesOrganico();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_biologico'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesBiologico();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_ninguno'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesNinguno();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_mas_usado'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesMasUsado();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_quimico_tendencia'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesQuimicoTendencia();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_organico_tendencia'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesOrganicoTendencia();
				$datos[$fila]['acu_cca_control_plagas_enfermedades_biologico_tendencia'] = $calidadcantidadagua->getCcaControlPlagasEnfermedadesBiologicoTendencia();

				$datos[$fila]['acu_cca_fertilizacion_cultivos_quimico'] = $calidadcantidadagua->getCcaFertilizacionCultivosQuimico();
				$datos[$fila]['acu_cca_fertilizacion_cultivos_organico'] = $calidadcantidadagua->getCcaFertilizacionCultivosOrganico();
				$datos[$fila]['acu_cca_fertilizacion_cultivos_ninguno'] = $calidadcantidadagua->getCcaFertilizacionCultivosNinguno();
				$datos[$fila]['acu_cca_fertilizacion_cultivos_mas_usado'] = $calidadcantidadagua->getCcaFertilizacionCultivosMasUsado();
				$datos[$fila]['acu_cca_fertilizacion_cultivos_quimico_tendencia'] = $calidadcantidadagua->getCcaFertilizacionCultivosQuimicoTendencia();
				$datos[$fila]['acu_cca_fertilizacion_cultivos_organico_tendencia'] = $calidadcantidadagua->getCcaFertilizacionCultivosOrganicoTendencia();

				$datos[$fila]['acu_cca_control_malezas_quimico'] = $calidadcantidadagua->getCcaControlMalezasQuimico();
				$datos[$fila]['acu_cca_control_malezas_organico'] = $calidadcantidadagua->getCcaControlMalezasOrganico();
				$datos[$fila]['acu_cca_control_malezas_meca_manu'] = $calidadcantidadagua->getCcaControlMalezasMecaManu();
				$datos[$fila]['acu_cca_control_malezas_ninguno'] = $calidadcantidadagua->getCcaControlMalezasNinguno();
				$datos[$fila]['acu_cca_control_malezas_mas_usado'] = $calidadcantidadagua->getCcaControlMalezasMasUsado();	
				$datos[$fila]['acu_cca_control_malezas_quimico_tendencia'] = $calidadcantidadagua->getCcaControlMalezasQuimicoTendencia();
				$datos[$fila]['acu_cca_control_malezas_organico_tendencia'] = $calidadcantidadagua->getCcaControlMalezasOrganicoTendencia();
				$datos[$fila]['acu_cca_control_malezas_meca_manu_tendencia'] = $calidadcantidadagua->getCcaControlMalezasMecaManuTendencia();
				$datos[$fila]['acu_cca_mineria'] = $calidadcantidadagua->getCcaMineria();
				$datos[$fila]['acu_cca_erosion'] = $calidadcantidadagua->getCcaErosion();
				$datos[$fila]['acu_cca_mineria_tendencia'] = $calidadcantidadagua->getCcaMineriaTendencia();
				$datos[$fila]['acu_cca_erosion_tendencia'] = $calidadcantidadagua->getCcaErosionTendencia();
				
				$datos[$fila]['acu_cca_desarrolla_modificacion_paisaje'] = $calidadcantidadagua->getCcaDesarrollaModificacionPaisaje();
				$datos[$fila]['acu_cca_modificacion_paisaje_construccion_vias'] = $calidadcantidadagua->getCcaModificacionPaisajeConstruccionVias();
				$datos[$fila]['acu_cca_modificacion_paisaje_construccion_vivienda'] = $calidadcantidadagua->getCcaModificacionPaisajeConstruccionVivienda();
				$datos[$fila]['acu_cca_modificacion_paisaje_construccion_otro'] = $calidadcantidadagua->getCcaModificacionPaisajeConstruccionOtro();
				$datos[$fila]['acu_cca_modificacion_paisaje_construccion_vias_tendencia'] = $calidadcantidadagua->getCcaModificacionPaisajeConstruccionViasTendencia();
				$datos[$fila]['acu_cca_modificacion_paisaje_construccion_vivienda_tendencia'] = $calidadcantidadagua->getCcaModificacionPaisajeConstruccionViviendaTendencia();
				$datos[$fila]['acu_cca_modificacion_paisaje_construccion_otro_tendencia'] = $calidadcantidadagua->getCcaModificacionPaisajeConstruccionOtroTendencia();
				$datos[$fila]['acu_cca_descarga_vivienda_liquido'] = $calidadcantidadagua->getCcaDescargaViviendaLiquido();
				$datos[$fila]['acu_cca_descarga_vivienda_solido'] = $calidadcantidadagua->getCcaDescargaViviendaSolido();
				
				$datos[$fila]['acu_cca_descarga_actividad_productiva_agricola'] = $calidadcantidadagua->getCcaDescargaActividadProductivaAgricola();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_pecuaria'] = $calidadcantidadagua->getCcaDescargaActividadProductivaPecuaria();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_minera'] = $calidadcantidadagua->getCcaDescargaActividadProductivaMinera();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_industrial'] = $calidadcantidadagua->getCcaDescargaActividadProductivaIndustrial();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_otra'] = $calidadcantidadagua->getCcaDescargaActividadProductivaOtra();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_agricola_especifica'] = $calidadcantidadagua->getCcaDescargaActividadProductivaAgricolaEspecifica();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_pecuaria_especifica'] = $calidadcantidadagua->getCcaDescargaActividadProductivaPecuariaEspecifica();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_minera_especifica'] = $calidadcantidadagua->getCcaDescargaActividadProductivaMineraEspecifica();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_industrial_especifica'] = $calidadcantidadagua->getCcaDescargaActividadProductivaIndustrialEspecifica();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_otra_especifica'] = $calidadcantidadagua->getCcaDescargaActividadProductivaOtraEspecifica();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_agricola_tendencia'] = $calidadcantidadagua->getCcaDescargaActividadProductivaAgricolaTendencia();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_pecuaria_tendencia'] = $calidadcantidadagua->getCcaDescargaActividadProductivaPecuariaTendencia();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_minera_tendencia'] = $calidadcantidadagua->getCcaDescargaActividadProductivaMineraTendencia();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_industrial_tendencia'] = $calidadcantidadagua->getCcaDescargaActividadProductivaIndustrialTendencia();
				$datos[$fila]['acu_cca_descarga_actividad_productiva_otra_tendencia'] = $calidadcantidadagua->getCcaDescargaActividadProductivaOtraTendencia();
				

				$fila++;
				$jsonresult = json_encode($datos);
				$salida= '({"total":"'.$fila.'","results":'.$jsonresult.'})';
			} 
		
		}
		catch (Exception $excepcion)
		{
			$salida = "({success: false, errors: { reason: 'Hubo una excepcion en Calidadcantidadagua formulario 1 ".$excepcion."'}})";
		}
		
	return $this->renderText($salida);
  }
  /*				
//actividadAgricola
var ayuda_ acu_cca_actividad_agricola_permanentes = 'Existe actividad agricola con cultivos permanentes, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_agricola_semipermanentes = 'Existe actividad agricola con cultivos semipermanentes, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_agricola_temporales = 'Existe actividad agricola con cultivos temporales, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_agricola_mayor_area = 'Cual de estas actividad agricola con cultivos ocupa mayor ares, selecione la que mayor area ocupe';
var ayuda_ acu_cca_actividad_agricola_permanentes_tendencia = 'Cual es la tendencia de los cultivos permanetes';
var ayuda_ acu_cca_actividad_agricola_semipermanentes_tendencia = 'Cual es la tendencia de los cultivos semipermanetes';
var ayuda_ acu_cca_actividad_agricola_temporales_tendencia = 'Cual es la tendencia de los cultivos temporales';
 
//actividadPecuaria
var ayuda_ acu_cca_actividad_pecuaria_ganaderia_bovina = 'Existe actividad pecuaria con ganaderia bovina, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_ganaderia_equina = 'Existe actividad pecuaria con ganaderia equina, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_porcicultura = 'Existe actividad pecuaria con porcicultura, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_capricultura_ovinos = 'Existe actividad pecuaria con capricultura y/o ovinos, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_avicultura = 'Existe actividad pecuaria con avicultura, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_piscicultura = 'Existe actividad pecuaria con piscicultura, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_otros_cual = 'Existen otras actividades pecuaria, si exite seleccione esta casilla';
var ayuda_ acu_cca_actividad_pecuaria_mayor_area = 'Cual de estas actividad pecuarias ocupa mayor area, selecione la que mayor area ocupe';
var ayuda_ acu_cca_actividad_pecuaria_ganaderia_bovina_tendencia = 'Cual es la tendencia de la ganaderia bovina';
var ayuda_ acu_cca_actividad_pecuaria_ganaderia_equina_tendencia = 'Cual es la tendencia de la ganaderia equina';
var ayuda_ acu_cca_actividad_pecuaria_porcicultura_tendencia = 'Cual es la tendencia de la porcicultura';
var ayuda_ acu_cca_actividad_pecuaria_capricultura_ovinos_tendencia = 'Cual es la tendencia de la capricultura y/o ovinos';
var ayuda_ acu_cca_actividad_pecuaria_avicultura_tendencia = 'Cual es la tendencia de la avicultura';
var ayuda_ acu_cca_actividad_pecuaria_piscicultura_tendencia = 'Cual es la tendencia la piscicultura';
var ayuda_ acu_cca_actividad_pecuaria_otros_tendencia = 'Cual es la tendencia de las otras actividades pecuarias';

//controPlagas
var ayuda_ acu_cca_control_plagas_enfermedades_quimico = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_organico = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_biologico = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_ninguno = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_mas_usado = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_quimico_tendencia = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_organico_tendencia = 'Cual es la tendencia de las otras actividades pecuarias';
var ayuda_ acu_cca_control_plagas_enfermedades_biologico_tendencia = 'Cual es la tendencia de las otras actividades pecuarias';

var ayuda_ acu_cca_fertilizacion_cultivos_quimico = '';
var ayuda_ acu_cca_fertilizacion_cultivos_organico = '';
var ayuda_ acu_cca_fertilizacion_cultivos_ninguno = '';
var ayuda_ acu_cca_fertilizacion_cultivos_mas_usado = '';
var ayuda_ acu_cca_fertilizacion_cultivos_quimico_tendencia = '';
var ayuda_ acu_cca_fertilizacion_cultivos_organico_tendencia = '';
//
acu_cca_control_malezas_quimico = '';
acu_cca_control_malezas_organico = '';
acu_cca_control_malezas_meca_manu = '';
acu_cca_control_malezas_ninguno = '';
acu_cca_control_malezas_mas_usado = '';
acu_cca_control_malezas_quimico_tendencia = '';
acu_cca_control_malezas_organico_tendencia = '';
acu_cca_control_malezas_meca_manu_tendencia = '';

acu_cca_mineria = '';
acu_cca_erosion = '';
acu_cca_mineria_tendencia = '';
acu_cca_erosion_tendencia = '';

//

//modificaciones al paisaje
acu_cca_desarrolla_modificacion_paisaje = '';
acu_cca_modificacion_paisaje_construccion_vias = '';
acu_cca_modificacion_paisaje_construccion_vivienda = '';
acu_cca_modificacion_paisaje_construccion_otro = '';
acu_cca_modificacion_paisaje_construccion_vias_tendencia = '';
acu_cca_modificacion_paisaje_construccion_vivienda_tendencia = '';
acu_cca_modificacion_paisaje_construccion_otro_tendencia = '';
acu_cca_descarga_vivienda_liquido = '';
acu_cca_descarga_vivienda_solido = '';


//descargas
acu_cca_descarga_actividad_productiva_agricola = '';
acu_cca_descarga_actividad_productiva_pecuaria = '';
acu_cca_descarga_actividad_productiva_minera = '';
acu_cca_descarga_actividad_productiva_industrial = '';
acu_cca_descarga_actividad_productiva_otra = '';
acu_cca_descarga_actividad_productiva_agricola_especifica = '';
acu_cca_descarga_actividad_productiva_pecuaria_especifica = '';
acu_cca_descarga_actividad_productiva_minera_especifica = '';
acu_cca_descarga_actividad_productiva_industrial_especifica = '';
acu_cca_descarga_actividad_productiva_otra_especifica = '';
acu_cca_descarga_actividad_productiva_agricola_tendencia = '';
acu_cca_descarga_actividad_productiva_pecuaria_tendencia = '';
acu_cca_descarga_actividad_productiva_minera_tendencia = '';
acu_cca_descarga_actividad_productiva_industrial_tendencia = '';
acu_cca_descarga_actividad_productiva_otra_tendencia = '';
 */
}
