
/*
ARC
Desarrollado maryit sanchez
2010
*/


    var acu_informaciongeneralmicrocuencas_departamento_datastore= new Ext.data.Store({
		id: 'acu_informaciongeneralmicrocuencas_departamento_datastore',
		proxy: new Ext.data.HttpProxy({
			url: 'acueducto_informaciongeneralmicrocuencas/listarDepartamentos', 
			method: 'POST'
			}),
		baseParams:{}, 
		reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},
			[{name: 'dep_id'},{name: 'dep_nombre'}]),
		sortInfo:{field: 'dep_nombre', direction: "ASC"}
    });

	acu_informaciongeneralmicrocuencas_departamento_datastore.load();


    var acu_informaciongeneralmicrocuencas_municipio_datastore= new Ext.data.Store({
		id: 'acu_informaciongeneralmicrocuencas_municipio_datastore',
		proxy: new Ext.data.HttpProxy({
			url: 'acueducto_informaciongeneralmicrocuencas/listarMunicipios', 
			method: 'POST'
			}),
		baseParams:{}, 
		reader: new Ext.data.JsonReader({
			root: 'results',
			totalProperty: 'total',
			id: 'id'
			},
			[{name: 'mun_id'},{name: 'mun_nombre'}]),
		sortInfo:{field: 'mun_nombre', direction: "ASC"}
    });

	acu_informaciongeneralmicrocuencas_municipio_datastore.load();
	
	var acu_informaciongeneralmicrocuencas_panel = new Ext.FormPanel({
	  id:'acu_informaciongeneralmicrocuencas_panel',
	  frame: true,
	  autoWidth: true,
	  height: largo_panel-40,
	  layout:'form',
	  defaults:{ bodyStyle: 'padding:0 10px 0;', anchor:'98%'},
	  items:
	  [    
		{
		   xtype: 'textfield',		 
		   labelStyle: 'width:100px; text-align:right;'+letra,
		   name: 'acu_imi_localidad',
		   id: 'acu_imi_localidad',
		   fieldLabel: '<html>Localidad</html>',
		   listeners:
		   {
				'render': function() {
						ayuda('acu_imi_localidad', ayuda_acu_imi_localidad);
						}
			}
		},
		new Ext.form.ComboBox({
			xtype: 'combobox',
			labelStyle: 'width:100px; text-align:right;'+letra,
			id:'acu_imi_dep_id',
			name:'acu_imi_dep_id',
			fieldLabel:'Departamento',
			store:acu_informaciongeneralmicrocuencas_departamento_datastore,
			mode:'local',
			emptyText:'Selecione ...',
			displayField:'dep_nombre',
			valueField:'dep_id',
			triggerAction:'all',
			forceSelection:true,
			listeners:
		   {
				'render': function() {
						ayuda('acu_imi_dep_id', ayuda_acu_imi_dep_id);
						},
				'select':function() {
						Ext.getCmp('acu_imi_mun_id').clearValue();
						acu_informaciongeneralmicrocuencas_municipio_datastore.removeAll();
			
						acu_informaciongeneralmicrocuencas_municipio_datastore.baseParams = {
								dep_id: Ext.getCmp('acu_imi_dep_id').getValue()
								};
						
						acu_informaciongeneralmicrocuencas_municipio_datastore.reload();
						
						}
			}
		}),
		new Ext.form.ComboBox({
			xtype: 'combobox',
			labelStyle: 'width:100px; text-align:right;'+letra,
			id:'acu_imi_mun_id',
			name:'acu_imi_mun_id',
			fieldLabel:'Municipio',
			store:acu_informaciongeneralmicrocuencas_municipio_datastore,
			mode:'local',
			emptyText:'Selecione ...',
			displayField:'mun_nombre',
			valueField:'mun_id',
			triggerAction:'all',
			forceSelection:true,
			listeners:
		   {
				'render': function() {
						ayuda('acu_imi_mun_id', ayuda_acu_imi_mun_id);
						}
			}
		}),/*
		{
		   xtype: 'textfield',
		   labelStyle: 'width:100px; text-align:right;'+letra,
		   name: 'acu_imi_mun_id',
		   id: 'acu_imi_mun_id',
		   fieldLabel: '<html>Municipio</html>',
		   listeners:
		   {
				'render': function() {
						ayuda('acu_imi_mun_id', ayuda_acu_imi_mun_id);
						}
			}
		},*/
		{
		   xtype: 'textfield',
		   labelStyle: 'width:100px; text-align:right;'+letra,
		   name: 'acu_imi_microcuenca',
		   id: 'acu_imi_microcuenca',
		   fieldLabel: '<html>Microcuenca</html>',
		   listeners:
		   {
				'render': function() {
						ayuda('acu_imi_microcuenca', ayuda_acu_imi_microcuenca);
						}
			}
		},
		{
		   xtype: 'textfield',
		   labelStyle: 'width:100px; text-align:right;'+letra,
		   name: 'acu_imi_codigo_cuenca',
		   id: 'acu_imi_codigo_cuenca',
		   fieldLabel: '<html>C&oacute;digo cuenca</html>',
		   listeners:
		   {
				'render': function() {
						ayuda('acu_imi_codigo_cuenca', ayuda_acu_imi_codigo_cuenca);
						}
			}
		},
		{
		   xtype: 'datefield',
		   labelStyle: 'width:100px; text-align:right;'+letra,
		   name: 'acu_imi_fecha',
		   id: 'acu_imi_fecha',
		   fieldLabel: '<html>Fecha</html>',
		   listeners:
		   {
				'render': function() {
						ayuda('acu_imi_fecha', ayuda_acu_imi_fecha);
						}
			}
		}
	  ],
	  buttons:
	  [
		  {
			 text: '<html>Atr&aacute;s</html>',
			 handler: function()
			 {
			     acu_comercial_tabpanel.setActiveTab(0);			 
              //  (Ext.getCmp('comercialTabPanel')).setActiveTab(0);
			 }
		  },
		  {
			 text: 'Continuar',
			 handler: function()
			 {
				acu_informaciongeneralmicrocuencas_cargardatostemporal();
				var accion=acu_informaciongeneralmicrocuencas_verfiricaraccion();
				
				if(accion=='crear' || accion=='actualizar')
				{
					acu_informaciongeneralmicrocuencas_subirdatos(accion);
				}
			     acu_comercial_tabpanel.setActiveTab(2);
			 }
		  }      
	   ],
	   renderTo:'div_form_acu_informaciongeneralmicrocuencas'
	});

/*
var ayuda_ acu_imi_localidad='Escriba la localidad de la microcuenca';
var ayuda_ acu_imi_dep_id='Escoja el departamento en que se ubica la microcuenca';
var ayuda_ acu_imi_mun_id='Escoja el departamento, y luego escoja el municipio en que se ubica la microcuenca';
var ayuda_ acu_imi_microcuenca='Escriba el nombre de la microcuenca';
var ayuda_ acu_imi_codigo_cuenca='Escriba el codigo de la cuenca';
var ayuda_ acu_imi_fecha='Escriba la fecha de la ???';

*/
    var acu_informaciongeneralmicrocuencas_panel_datanuevo;
	var acu_informaciongeneralmicrocuencas_panel_dataviejo=new Array();

	function acu_informaciongeneralmicrocuencas_cargardatostemporal(){
	
		if(acu_informaciongeneralmicrocuencas_panel_datanuevo)
		{
			acu_informaciongeneralmicrocuencas_panel_dataviejo=acu_informaciongeneralmicrocuencas_panel_datanuevo;
		}
		acu_informaciongeneralmicrocuencas_panel_datanuevo=new Array();
		acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_localidad'] = Ext.getCmp('acu_imi_localidad').getValue();
		acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_dep_id'] =Ext.getCmp('acu_imi_dep_id').getValue();
		acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_mun_id'] = Ext.getCmp('acu_imi_mun_id').getValue();
		acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_microcuenca'] = Ext.getCmp('acu_imi_microcuenca').getValue();
		acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_codigo_cuenca'] = Ext.getCmp('acu_imi_codigo_cuenca').getValue();
		acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_fecha'] = Ext.getCmp('acu_imi_fecha').getValue();
		
	}
	
	
	
	function acu_informaciongeneralmicrocuencas_verfiricaraccion()
	{//compara dos arraglos si son diferentes actualiza sino solo pasa al siguiente form
		var accion='ninguna';
	
		if(acu_informaciongeneralmicrocuencas_panel_dataviejo) // si existe el viejo, compare
		{
			if(acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_localidad'] != acu_informaciongeneralmicrocuencas_panel_dataviejo['acu_imi_localidad'])
			{accion='actualizar';}
			
			if(acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_dep_id'] != acu_informaciongeneralmicrocuencas_panel_dataviejo['acu_imi_dep_id'])
			{accion='actualizar';}
			
			if(acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_mun_id'] != acu_informaciongeneralmicrocuencas_panel_dataviejo['acu_imi_mun_id'])
			{accion='actualizar';}
			
			if(acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_microcuenca'] != acu_informaciongeneralmicrocuencas_panel_dataviejo['acu_imi_microcuenca'])
			{accion='actualizar';}
			
			if(acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_codigo_cuenca'] != acu_informaciongeneralmicrocuencas_panel_dataviejo['acu_imi_codigo_cuenca'])
			{accion='actualizar';}
			
			if(acu_informaciongeneralmicrocuencas_panel_datanuevo['acu_imi_fecha'] != acu_informaciongeneralmicrocuencas_panel_dataviejo['acu_imi_fecha'])
			{accion='actualizar';}
			
		}
		else
		{
			accion='crear';
		}
			
		return accion;
	}
	
	function acu_informaciongeneralmicrocuencas_subirdatos(accion_realizar){
		subirDatos(acu_informaciongeneralmicrocuencas_panel,'acueducto_informaciongeneralmicrocuencas/actualizarInformaciongeneralmicrocuencas');	
	}
