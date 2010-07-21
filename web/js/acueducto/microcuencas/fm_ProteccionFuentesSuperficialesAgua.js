var proteccionFuentesProgramas = function ( servicio, rango ) {

	
	var proteccionFuentesProgramasPanel = new Ext.FormPanel({
      frame: true,
	  hidden: true,
	  title: '<html>Protecci&oacute;n de las Fuentes superficiales de Agua</html>',
	  autoWidth: true,
	  height: largo_panel,
	  layout: 'column',
	  items:
	  [{		
	    bodyStyle: 'padding-right:5px;',
		columnWidth: '.5',
        items:       
	     {
	        xtype:'fieldset',
	        title: '<html>Programas</html>',
	        autoWidth: true,
	        autoHeight: true,
			defaultType:'textfield',
	        items :
			[
				{
					xtype: 'label',
					style: letra,
					width: '100%',
					html: 'Indique qu&eacute; programas se adelantan actualmente para la protecci&oacute;n de las fuentes abastecedoras:'
				},
				{
					xtype: 'checkboxgroup',
					hideLabel: true,
					layout: 'column',
					columns: 1,
					items: 
					[
					    {id: 'aisla', boxLabel:'Aislamiento'},
						{id: 'refor', boxLabel:'Reforestaci&oacute;n'},
						{id: 'mejor', boxLabel:'Mejoramiento en el Uso del Suelo'},
						{id: 'adqui', boxLabel:'Adquisici&oacute;n de tierras'},
						{id: 'educ', boxLabel:'Educaci&oacute;n ambiental'},
						{id: 'reducc', boxLabel:'Reducci&oacute;n uso de agroquimicos'}
					]
				}
			]
		},
	  },
      { 
 	   bodyStyle: 'padding-left:5px;',
	   columnWidth: '.5',
	   items:
 	   {
    		xtype:'fieldset',
	        title: '<html>Situaci&oacute;n de Aguas arriba de la captaci&oacute;n</html>',
	        autoWidth: true,
	        autoHeight: true,
			defaults:{width:80},
            items :
			[
				{
					  xtype:      'radiogroup',
					  labelStyle: letra+'width: 170px;',
					  id:'eszonareserva',
					  fieldLabel: '<html>&iquest;Es una zona de reserva?</html>',
					  items: 
					  [ 
					    {
						  boxLabel:   'Si',
						  name:       'zonaReserva',
						  inputValue: true, 
						  checked:    true
						  
						 },
						 {
						  boxLabel:   'No',
						  name:       'zonaReserva',
						  inputValue: false
					     }
					  ],
					  listeners:
					  {
							'render':function(){
								   new Ext.ToolTip({
										target: (Ext.getCmp('eszonareserva')).getEl(),
										title: 'Ayuda rapida',
										anchor: 'top',
										html: 'Es aquella que esta declarada como tal por una autoridad ambiental competente',
										trackMouse:true
									});
								}
					  }
			    },
				{
					  xtype:      'radiogroup',
					  labelStyle: letra+'width: 170px;',
					  id:'eszonaprotegida',
					  fieldLabel: '<html>&iquest;Es una zona protegida?</html>',
					  items: 
					  [
						{
						  boxLabel:   'Si',
						  name:       'zonaPro',
						  inputValue: true,
						  checked:    true
					    },
					    {
						  boxLabel:   'No',
						  name:       'zonaPro',
						  inputValue: false
					    }
					  ],
					  listeners:
					  {
							'render':function(){
								   new Ext.ToolTip({
										target: (Ext.getCmp('eszonaprotegida')).getEl(),
										title: 'Ayuda rapida',
										anchor: 'top',
										html: 'Es aquella protegida por iniciativa de los propietarios, comunidad o por autoridades locales',
										trackMouse:true
									});
								}
					  }
				}
			]
			}
		}
	],
	buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
			}
		},
		{
			text: 'Continuar',
			handler:function(){
			}
		}
	]
	});
	
/*	
	var SUI_Microcuenca_V9 = new Ext.FormPanel({
      frame: true,
	  autoWidth: true,
	  height: 380,
	  layout:'column',
	  title:'Cobertura forestal',
	  defaults: { xtype:'panel' ,layout:'form'},
	  items:
		[   
			{  
				width:280,
				title:'__',
				defaults:{labelStyle: 'width:220px;'+letra},
				items:[
						{xtype: 'label', text: 'Existe', cls:'x-form-check-group-label',labelStyle: 'width:220px;'+letra+'text-align:right;'},
						{xtype: 'checkbox', fieldLabel: 'Bosque natural'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado protector'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado protector productor'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado productor'},
						{xtype: 'checkbox', fieldLabel: '<html>Regeneraci&oacute;n natural</html>'}				
			   ]
			},
			{
				columnWidth: '.3',
				title:'__',
				items:
				[		
					{
					xtype: 'radiogroup',
					defaults:{labelStyle: letra},
					hideLabel: true,
					columns:1,
					items: [
								{xtype: 'label',html: 'Cu&aacute;l ocupa la mayor &aacute;rea', cls:'x-form-check-group-label'},
								{name: 'cuaO'},
								{name: 'cuaO'},
								{name: 'cuaO'},
								{name: 'cuaO'},
								{name: 'cuaO'}			
							]
					}
				]
			},
			{
				columnWidth: '.4',
				title: 'Tendencia',    
				defaults:{hideLabel: true},
				items:
				[ 	
					{
						xtype: 'radiogroup',
						anchor: '100%',
						layout:'column',
						items: [{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'incremento'},
										]
								},{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'disminucion'}
										]
								},{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'estable'}
										]
								}]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia2', inputValue: 'incremento'},
							{ name: 'tendencia2', inputValue: 'disminucion', checked: true},
							{ name: 'tendencia2', inputValue: 'estable'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia3', inputValue: 'incremento'},
							{ name: 'tendencia3',  inputValue: 'disminucion', checked: true},
							{ name: 'tendencia3',  inputValue: 'estable'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia4', inputValue: 'incremento'},
							{ name: 'tendencia4',  inputValue: 'disminucion', checked: true},
							{ name: 'tendencia4',  inputValue: 'estable'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia5', inputValue: 'incremento'},
							{ name: 'tendencia5',  inputValue: 'disminucion', checked: true},
							{ name: 'tendencia5',  inputValue: 'estable'},
						]
					}
				]
			}
		],
	  buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
			}
		},
		{
			text: 'Continuar',
			handler:function(){
			}
		}]
	});	
*/	

	
	var SUI_Microcuenca_V9 = new Ext.FormPanel({
      frame: true,
	  autoWidth: true,
	  height: largo_panel,
	  title:'Cobertura forestal',
	  defaults: { xtype:'panel' ,layout:'form'},
	  items:
		[   
		{
		 xtype:'fieldset',
		 title:'Cobertura forestal',
		 layout:'column',
		 defaults:{layout:'form'},
		 items:[
			{  
				width:280,
				bodyStyle: 'padding-top:27px;',
				 
				defaults:{labelStyle: 'width:220px;'+letra},
				items:[
						{xtype: 'label', text: 'Existencia de este tipo de bosque?', cls:'x-form-check-group-label'},
						{xtype: 'checkbox', fieldLabel: 'Bosque natural',itemCls: 'x-check-group-alt'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado protector'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado protector productor',itemCls: 'x-check-group-alt'},
						{xtype: 'checkbox', fieldLabel: 'Bosque plantado productor'},
						{xtype: 'checkbox', fieldLabel: '<html>Regeneraci&oacute;n natural</html>',itemCls: 'x-check-group-alt'}				
			   ]
			},{
				//columnWidth: '.4',
				width: 100,
				bodyStyle: 'padding-top:12px;padding-rigth:5px;padding-left:5px;',
				defaults:{hideLabel: true},
				items:
				[ 	
					{
						xtype: 'radiogroup',
						columns: 1,
						items: 	[
								 { xtype: 'label', text: 'Cual ocupa mayor area?', cls:'x-form-check-group-label'},
								 { name: 'ocupaMayorArea', inputValue: 'estable',itemCls: 'x-check-group-alt'}
								]
					},
					{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable'}]
					},{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable',itemCls: 'x-check-group-alt'}]
					},{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable'}]
					},{
						xtype: 'radiogroup',
						items: [{ name: 'ocupaMayorArea', inputValue: 'estable',itemCls: 'x-check-group-alt'}]
					}
				]
			},{
				columnWidth: '.4',
				title: '<center>Tendencia</center>',    
				defaults:{hideLabel: true},
				items:
				[ 	
					{
						xtype: 'radiogroup',
						anchor: '100%',
						layout:'column',
						items: [{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Incremento', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
										]
								},{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Disminucion', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'disminucion',itemCls: 'x-check-group-alt'}
										]
								},{
									columnWidth: '.33',
									items: [
										{ xtype: 'label', text: 'Estable', cls:'x-form-check-group-label'},
										{ name: 'tendencia1', inputValue: 'estable',itemCls: 'x-check-group-alt'}
										]
								}]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia2', inputValue: 'incremento'},
							{ name: 'tendencia2', inputValue: 'disminucion', checked: true},
							{ name: 'tendencia2', inputValue: 'estable'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia3', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
							{ name: 'tendencia3',  inputValue: 'disminucion', checked: true,itemCls: 'x-check-group-alt'},
							{ name: 'tendencia3',  inputValue: 'estable',itemCls: 'x-check-group-alt'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia4', inputValue: 'incremento'},
							{ name: 'tendencia4',  inputValue: 'disminucion', checked: true},
							{ name: 'tendencia4',  inputValue: 'estable'},
						]
					},
					{
						xtype: 'radiogroup',
						items: [
							{ name: 'tendencia5', inputValue: 'incremento',itemCls: 'x-check-group-alt'},
							{ name: 'tendencia5',  inputValue: 'disminucion', checked: true,itemCls: 'x-check-group-alt'},
							{ name: 'tendencia5',  inputValue: 'estable',itemCls: 'x-check-group-alt'},
						]
					}
				]
			}
			]
		}
		],
	  buttons: [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
			}
		},
		{
			text: 'Continuar',
			handler:function(){
			}
		}]
	});


	
	 var SUI_Microcuenca_V10 = new Ext.FormPanel({
      frame: true,
      title: 'Cobertura Forestal',
	  hidden: true,
	  autoWidth: true,
	  height: largo_panel,
	  defaults:{width:100, labelStyle: 'width: 360px;',},
	  items:
	  [
	     		{
				  xtype:      'radiogroup',
				  fieldLabel: '<html>&iquest;La cobertura forestal se localiza en el &aacute;rea protectora del cauce?</html>',
				  items: 
				  [{
					  boxLabel:   'Si',
					  name:       'cobertura',
					  inputValue: '01'
					  //checked:    true
				  },
				  {
					  boxLabel:   'No',
					  name:       'cobertura',
					  inputValue: '02',
					  
				  }]
				},{
				  xtype:      'radiogroup',
				  fieldLabel: '<html>&iquest;Existe aislamiento o franja amarilla en la microcuenca?</html>',
				  items: 
				  [{
					  boxLabel:   'Si',
					  name:       'existe',
					  inputValue: '01',
					  //checked:    true
				  },
				  {
					  boxLabel:   'No',
					  name:       'existe',
					  inputValue: '02',
				  }]
				},
				{
				  xtype:      'radiogroup',
				  fieldLabel: '<html>&iquest;Existe &aacute;rea de la microcuenca de propiedad del acueducto?</html>',
				  items: 
				  [{
					  boxLabel:   'Si',
					  name:       'existeA',
					  inputValue: '01',
					  //checked:    true
				  },
				  {
					  boxLabel:   'No',
					  name:       'existeA',
					  inputValue: '02',
				  }
				  ]
				},
				{
					xtype:'numberfield',
					id:'extension',
					name:'extension',
					fieldLabel:'<html>Extensi&oacute;n (Has)</html>',
					width: 50,
					emptyText: '0',
					allowNegative: false,
					decimalPrecision: 5,
					listeners: {
					}
				}
			
	  ],
	  buttons: 
	  [
		{
			text: '<html>Atr&aacute;s<html>',
			handler:function(){
				
			}
		},
		{
			text: 'Continuar',
			handler:function(){
			}
		}
	  ]
	});
	
	
//return proteccionFuentesProgramasPanel;
return SUI_Microcuenca_V10;
}


