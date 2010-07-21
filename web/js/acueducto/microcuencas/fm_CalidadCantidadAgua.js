   /*
     * ================  Ventanas de las Microcuencas  =======================
     */
    var SUI_Microcuenca_V1 = new Ext.Panel({
      frame: true,
	  hidden: false,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: '<html>Informaci&oacute;n general</html>',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
	        items :
	        [{
				  xtype:'label',
				  style : 'margin: 0px 0px 30px 0px;',
			  },{
                  width: 120,
                  fieldLabel: 'Localidad',
                  name: 'localidad',
                  id: 'localidad',
                  allowBlank:false,
				  listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}   
                },{
                  width: 120,
                  //fieldClass: 'texto',
                  fieldLabel: 'Municipio',
                  name: 'municipio',
                  id: 'municipio',
                  allowBlank:false,
				  //Esta propiedad retrasa la suma de los campos
                  //validationDelay: 600,
				  listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				  }  
                },{
                  width: 120,
                  fieldLabel: 'Departamento',
                  id: 'departamento',
                  //emptyText: '$0',
                  //labelStyle: 'width: 102px;',
                  name: 'departamento',
                  allowBlank:false,
				  enableKeyEvents: true,
                  listeners: {
                   },
                                  
				  }  
                },{
                  width: 120,
                  //fieldClass: 'texto',
                  fieldLabel: 'Microcuenca',
                  id: 'microcuenca',
                  name: 'microcuenca',
				  allowBlank:false,
                  enableKeyEvents: true,
                  listeners: {
                  }  
                }, {
                  width: 120,
                  fieldLabel: '<html>C&oacute;digo de Microcuenca</html>',
                  id: 'codigoMicro',
                  name: 'codigoMicro',
				  allowBlank:false,
				  enableKeyEvents: true,
                  listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
                  }  
			    },{
				
		        id:'fecha',
				xtype : 'form',
				autoScroll : true,
				style:'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;',
				//height : 300,
				//fieldLabel:'Fecha(DD/MM/AA)',
				layout : 'column',
				items : [
					{
		                columnWidth : .156,
						xtype : 'label',
						text:'Fecha(DD/MM/AA):'
						//hideLabel:true,
						//layout : 'form',
		            },
		            {
		                columnWidth : .1,
						xtype : 'numberfield',
						emptyText: '0',
						allowNegative: false,
						allowDecimals: false,
						//hideLabel:true,
						width:30,
						listeners: {
		                  'focus' : {
		                      fn: function(){
		                         
		                         
		                         
		                      }
		                   },
		                                  
		               }  
						//layout : 'form',
		            },{
		                columnWidth : .1,
						xtype : 'numberfield',
						emptyText: '0',
						allowNegative: false,
						allowDecimals: false,
						width:30,
						listeners: {
						  'focus' : {
							  fn: function(){
								 
								 
								 
							  }
						   },
						                  
					   }  
		            },{
		                columnWidth : .1,
						xtype : 'numberfield',
						emptyText: '0',
						allowNegative: false,
						allowDecimals: false,
						width:30,
						listeners: {
		                  'focus' : {
		                      fn: function(){
		                         
		                         
		                         
		                      }
		                   },
		                                  
		               }  
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
						SUI_Microcuenca_V1.hide();
						SUI_Acueducto_V2.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V1.hide();
						SUI_Microcuenca_V2.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V2 = new Ext.Panel({
       frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Fuentes',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:15px 0px 0px 10px;',
              items :[{
				id:'',
				xtype : 'form',
				border : false,
				frame : false,
				style: 'padding:0px 0px 20px 0px;',
				items : [
// 				  {
// 					  xtype:'label',
// 					  html: 'N&uacute;mero de fuentes que abastecen el Sistema',
// // 					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
// 				  }
				  {
				  labelSeparator:' ',
				  xtype:'numberfield',
				  id:'numFuentes',
				  name:'numFuentes',
				  emptyText: '0',
				  allowNegative: false,
				  allowDecimals: false,
				  width:50,
				  fieldLabel:'<html>N&uacute;mero de fuentes que abastecen el Sistema:</html>',
				  labelStyle:'width: 300px;text-align:left;'
				},
				]},
				  {
					  xtype:'label',
					  text: 'Tipo de fuente(s) de abastecimiento:',
					  style : 'padding:0px 0px 0px 0px; font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
				  },
					{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
		style: 'padding:0px 0px 20px 0px;',
        //anchor: '100%',
        items: [{
            columnWidth: '.03',
            items: [
                {height:27, xtype: 'label', style: 'padding:0px 0px 17px 80px;'},
                {height:120, xtype: 'checkbox', id: 'fuenteS', boxLabel:'Fuente superficial',
                     handler: function(){
                  //      brindarAyuda('AC','CA','fuente','preg1');
                        
                     } }
            ]
        },{
            columnWidth: '.07',
            items: [
				{xtype: 'label', style: 'padding:11px 0px 15px 0px;'},
                {xtype: 'label', height:28, text: 'Nacimiento'},
				{xtype: 'label', height:23, text: 'Quebrada o Rio'},
				{xtype: 'label', height:29, text: 'Lago o Reservorio'},
				{xtype: 'label', height:21, text: 'Mar'}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', text: 'Nombre 1', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nom111', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				} },
                {xtype: 'textfield', width:90, id: 'nom112', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:90, id: 'nom113', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
				{xtype: 'textfield', width:90, id: 'nom114', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', text: 'Nombre 2', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nom121', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:90, id: 'nom122', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:90, id: 'nom123', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
				{xtype: 'textfield', width:90, id: 'nom124', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', text: 'Nombre 3', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nom131', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:90, id: 'nom132', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:90, id: 'nom133', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
				{xtype: 'textfield', width:90, id: 'nom134', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V2.hide();
						SUI_Microcuenca_V1.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V2.hide();
						SUI_Microcuenca_V3.show();
					}
			    }]
	});
	
	
	 var SUI_Microcuenca_V10 = new Ext.Panel({
         frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: '<html>Protecci&oacute;n de las Fuentes superficiales de Agua</html>',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
              items :[{
			id:'forma1',
			xtype : 'form',
			border : true,
			frame : false,
			style: 'padding:0px 0px 0px 4px;',
			items : [
			{
				xtype:'label',
				text:'Cobertura Forestal',
				style:'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;'
			},
            		{
			  xtype:      'radiogroup',
			  labelStyle: 'width: 300px;',
			  fieldLabel: '<html><br> &iquest;La cobertura forestal se localiza en el &aacute;rea protectora del cauce?</html>',
			  style: 'padding:53px 0px 0px 4px;',
			  items: 
			  [{
					  layout: 'column',
					  column: '0.5',
					  items:
					  [{
						  boxLabel:   'Si',
						  name:       'cobertura',
						  id:         'coberturaSi',
						  inputValue: '01',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
						  //checked:    true
					  },
					  {
						  boxLabel:   'No',
						  name:       'cobertura',
						  id:         'coberturaNo',
						  inputValue: '02',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
					  }]
				}]
			}
			]},{
			
			id:'forma2',
			xtype : 'form',
			border : true,
			frame : false,
			 style: 'padding:30px 0px 0px 4px;',
			items : [{
			  xtype:      'radiogroup',
			  labelStyle: 'width: 300px;',
			  fieldLabel: '<html>&iquest;Existe aislamiento o franja amarilla en la microcuenca?</html>',
			  style: 'padding:30px 0px 0px 4px;',
			  items: 
			  [{
					  layout: 'column',
					  column: '0.5',
					  items:
					  [{
						  boxLabel:   'Si',
						  name:       'existe',
						  id:         'existeSi',
						  inputValue: '01',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
						  //checked:    true
					  },
					  {
						  boxLabel:   'No',
						  name:       'existe',
						  id:         'existeNo',
						  inputValue: '02',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
					  }]
				}]
			}
			]},{
			
			id:'forma3',
			xtype : 'form',
			border : true,
			frame : false,
			//style: 'padding:30px 0px 0px 4px;',
			items : [{
			  xtype:      'radiogroup',
			  labelStyle: 'width: 300px;',
			  fieldLabel: '<html>&iquest;Existe &aacute;rea de la microcuenca de propiedad del acueducto?</html>',
			  style: 'padding:43px 0px 0px 0px;',
			  items: 
			  [{
					  layout: 'column',
					  column: '0.5',
					  items:
					  [{
						  boxLabel:   'Si',
						  name:       'existeA',
						  id:         'existeASi',
						  inputValue: '01',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
						  //checked:    true
					  },
					  {
						  boxLabel:   'No',
						  name:       'existeA',
						  id:         'existeANo',
						  inputValue: '02',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
					  }]
				}
				]
			},{
					border : false,
					frame : false, 
					width:360,
					layout : 'form',
					style: 'margin:-23px 0px 0px 180px;',
					items : [
					{
						xtype:'numberfield',
						id:'extension',
						name:'extension',
						//labelStyle: 'width:0px;',
						fieldLabel:'<html>Extensi&oacute;n (Has)</html>',
						width: 50,
						emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,
						listeners: {
						  'focus' : {
							  fn: function(){
								 
								 
								 
							  }
						   },
						                  
						}
					}
					]}
			]}
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V10.hide();
						SUI_Microcuenca_V9.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V10.hide();
						SUI_Microcuenca_V11.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V11 = new Ext.Panel({
         frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Actividades que inciden en la Cantidad y la calidad del Agua',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
              items :[
				  {
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					style: 'padding:5px 0px 0px 0px;',
					items : [
				  {
					  xtype:'label',
					  html: 'Actividad Agr&iacute;cola',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;'
				  }
				  ]},
				  {
		autoScroll: false,
		closeAction:'hide',
		border: true,
		xtype: 'form',
		bodyStyle: 'padding:5px 0px 10px 10px;',
		items : [
            {
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
            columnWidth: '.20',
            items: [
                {xtype: 'label',style: 'padding:3px 0px 39px 0px;', id: '',cls:'x-form-check-group-label3', anchor:'-5'},
                {xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblCultiP',text: 'Cultivos permanentes', cls:'x-form-check-group-label2'},
                {xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblCultiS',text: 'Cultivos semipermanentes', cls:'x-form-check-group-label2'},
                {xtype: 'label',id: 'lblCultiT',text: 'Cultivos temporales', cls:'x-form-check-group-label2'}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:18px 0px 17px 0px;', text: 'Existencia', cls:'x-form-check-group-label', anchor:'-5'},
                {height:36, id: 'exis11',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {height:34, id: 'exis21',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {id: 'exis31',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:4px 0px 17px 0px;', html: 'Cu&aacute;l ocupa la mayor &aacute;rea', cls:'x-form-check-group-label', anchor:'-5'},
                {height:36, id: 'cuaO11',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {height:34, id: 'cuaO21',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {id: 'cuaO31',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:18px 0px 17px 0px;', text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {height:36, id: 'incre11',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {height:34, id: 'incre21',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {id: 'incre31',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:4px 0px 17px 0px;', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {height:36, id: 'tend11',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {height:34, id: 'tend21',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {id: 'tend31',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:18px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {height:36, id: 'esta11',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {height:34, id: 'esta21',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }},
                {id: 'esta31',
		  handler: function(){
		  //      brindarAyuda('AC','CA','fuente','preg1');
			
		  }}
            ]
        }]
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
						SUI_Microcuenca_V11.hide();
						SUI_Microcuenca_V10.show();
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V11.hide();
						SUI_Microcuenca_V12.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V16 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: '<html>Miner&iacute;a</html>',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
              items :[
			  {
					id:'',
					xtype : 'form',
					border : false,
					frame : false,
					style: 'padding:5px 0px 10px 0px;',
					items : [
				  {
					  xtype:'label',
					  html: '&iquest;Existe actividad minera?',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
				  }
		]},
        {
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		style: 'padding:0px 0px 0px 20px;',
        items: [{
			  layout: 'column',
			  column: '0.5',
			  columnWidth: '.07',
			  style: 'padding:43px 0px 0px 0px;',
			  /* labelStyle: 'width: 200px;',
			  fieldStyle: 'width: 200px;', */
			  items:
			  [{
				  xtype: 'radio',
				  boxLabel:   'Si',
				  name:       'minera',
				  id:         'mineraSi',
				  inputValue: '01',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }
				  //checked:    true
			  },
			  {
				  xtype: 'radio',
				  boxLabel:   'No',
				  name:       'minera',
				  id:         'mineraNo',
				  inputValue: '02',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }
			  }]
		},{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:5px 0px 15px 0px;', text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'incre51'}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'tend51'}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:5px 0px 15px 0px;', text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'esta51'}
            ]
        }]
    }
			  
			
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V16.hide();
						SUI_Microcuenca_V15.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V16.hide();
						SUI_Microcuenca_V17.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V17 = new Ext.Panel({
         frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: '<html>Erosi&oacute;n</html>',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
              items :[
			  {
					id:'',
					xtype : 'form',
					border : false,
					frame : false,
					style: 'padding:5px 0px 10px 0px;',
					items : [
				  {
					  xtype:'label',
					  html: '&iquest;Existe erosi&oacute;n?',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
				  }
		]},
        {
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		style: 'padding:0px 0px 0px 20px;',
        items: [{
			  layout: 'column',
			  column: '0.5',
			  columnWidth: '.07',
			  style: 'padding:43px 0px 0px 0px;',
			  /* labelStyle: 'width: 200px;',
			  fieldStyle: 'width: 200px;', */
			  items:
			  [{
				  xtype: 'radio',
				  boxLabel:   'Si',
				  name:       'erosion',
				  id:         'erosionSi',
				  inputValue: '01',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }
				  //checked:    true
			  },
			  {
				  xtype: 'radio',
				  boxLabel:   'No',
				  name:       'erosion',
				  id:         'erosionNo',
				  inputValue: '02',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }
			  }]
		},{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:5px 0px 15px 0px;', text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'incre61'}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'tend61'}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:5px 0px 15px 0px;', text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'esta61'}
            ]
        }]
    }
			  
			
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V17.hide();
						SUI_Microcuenca_V16.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V17.hide();
						SUI_Microcuenca_V19.show();
					}
			    }]
	});
	
// 	var SUI_Microcuenca_V18 = new Ext.Panel({
//          frame: true,
// 	  hidden: true,
// 	  title: 'Microcuencas',
// 	  autoWidth: true,
// 	  height: 380,
// 	  items:
// 	  [
// 	     {
// 	        xtype:'fieldset',
// 	        title: 'Modificaciones del Paisaje',
// 	        autoWidth: true,
// 	        height: 300,
// 			defaultType:'textfield',
//               items :[
// 					{
// 					id:'',
// 					xtype : 'form',
// 					border : true,
// 					frame : false,
// 					style: 'padding:20px 0px 0px 4px;',
// 					items : [
// 		            {
// 					  xtype: 'radiogroup',
// 					  labelStyle: 'width: 300px;',
// 					  fieldLabel: '<html>&iquest;Se han desarrollado actividades que modifican el paisaje?</html>',
// 					  style: 'padding:43px 0px 0px 4px;',
// 					  items: 
// 					  [{
// 							  layout: 'column',
// 							  column: '0.5',
// 							  items:
// 							  [{
// 								  boxLabel:   'Si',
// 								  name:       'opcion',
// 								  id:         'opSi',
// 								  inputValue: '01'
// 								  //checked:    true
// 							  },
// 							  {
// 								  boxLabel:   'No',
// 								  name:       'opcion',
// 								  id:         'opNo',
// 								  inputValue: '02'
// 							  }]
// 						}]
// 					}
// 					]}
// 			    ]
// 			    }
// 			    ],
// 			    buttons: [
// 				{
// 			        text: '<html>Atr&aacute;s<html>',
// 					handler:function(){
// 						SUI_Microcuenca_V18.hide();
// 						SUI_Microcuenca_V17.show();
// 						
// 					}
// 			    },
// 				{
// 			        text: 'Continuar',
// 					handler:function(){
// 						//var tab=Ext.getCmp('tabPanel').getActiveTab();
// 						SUI_Microcuenca_V18.hide();
// 						SUI_Microcuenca_V19.show();
// 					}
// 			    }]
// 	});
	
	var SUI_Microcuenca_V20 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Descargas de Viviendas',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
              items :[
					{
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					style: 'padding:20px 0px 0px 4px;',
					items : [
		            {
					  xtype:      'radiogroup',
					  labelStyle: 'width: 300px;',
					  fieldLabel: '<html>&iquest;Viviendas con descargas directas de residuos l&iacute;quidos a la fuente?</html>',
					  style: 'padding:43px 0px 0px 4px;',
					  items: 
					  [{
							  layout: 'column',
							  column: '0.5',
							  items:
							  [{
								  boxLabel:   'Si',
								  name:       'vivendas',
								  id:         'vivendasSi',
								  inputValue: '01',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }
								  //checked:    true
							  },
							  {
								  boxLabel:   'No',
								  name:       'vivendas',
								  id:         'vivendasNo',
								  inputValue: '02',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }
							  }]
						}]
					}
					]},{
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					 style: 'padding:30px 0px 0px 4px;',
					items : [{
					  xtype:      'radiogroup',
					  labelStyle: 'width: 300px;',
					  fieldLabel: '<html>&iquest;Viviendas con descargas directas de residuos s&oacute;lidos a la fuente?</html>',
					  style: 'padding:43px 0px 0px 4px;',
					  items: 
					  [{
							  layout: 'column',
							  column: '0.5',
							  items:
							  [{
								  boxLabel:   'Si',
								  name:       'vivendasD',
								  id:         'vivendasDSi',
								  inputValue: '01',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }
								  //checked:    true
							  },
							  {
								  boxLabel:   'No',
								  name:       'vivendasD',
								  id:         'vivendasDNo',
								  inputValue: '02',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }
							  }]
						}]
					}
					]}
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V20.hide();
						SUI_Microcuenca_V19.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V20.hide();
						SUI_Microcuenca_V21.show(); 
					}
			    }]
	});
	
	var SUI_Microcuenca_V13 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Control de Plagas y Enfermedades',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:15px 0px 0px 10px;',
              items :[
					{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
            columnWidth: '.15',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 3px 0px;', text: 'Tipo de control que se realiza', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'checkbox', id: 'exis81', boxLabel:'<html>Qu&iacute;mico</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis82', boxLabel:'<html>Org&aacute;nico</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis83', boxLabel:'<html>Biol&oacute;gico</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis84', boxLabel:'Ninguno',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } }
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Cu&aacute;l es el m&aacute;s usado', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'radio', id: 'cuaO81', name:'masUsado',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO82', name:'masUsado',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO83', name:'masUsado',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO84', name:'masUsado',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;', text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'incre81',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre82',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre83',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre84',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'tend81',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend82',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend83',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend84',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'esta81',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta82',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta83',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta84',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V13.hide();
						SUI_Microcuenca_V12.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V13.hide();
						SUI_Microcuenca_V14.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V14 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: '<html>Fertilizaci&oacute;n de los cultivos</html>',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			bodyStyle: 'padding:15px 0px 0px 10px;',
            items :[
					{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
            columnWidth: '.15',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 3px 0px;', text: 'Tipo de control que se realiza', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'checkbox', id: 'exis91', boxLabel:'Qu&iacute;mico',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis92', boxLabel:'Org&aacute;nico',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis94', boxLabel:'Ninguno',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } }
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Cu&aacute;l es el m&aacute;s usado', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'radio', id: 'cuaO91', name:'masUsado1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO92', name:'masUsado1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO93', name:'masUsado1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'incre91',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre92',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre93',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'tend91',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend92',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend93',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'esta91',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta92',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta93',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V14.hide();
						SUI_Microcuenca_V13.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V14.hide();
						SUI_Microcuenca_V15.show(); 
					}
			    }]
	});
	
	var SUI_Microcuenca_V15 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Control de Malezas',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:15px 0px 0px 10px;',
              items :[
					{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
            columnWidth: '.15',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 3px 0px;', text: 'Tipo de control que se realiza', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'checkbox', id: 'exis111', boxLabel:'<html>Qu&iacute;mico</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis112', boxLabel:'<html>Org&aacute;nico</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis113', boxLabel:'Mecanico y/o Manual',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {xtype: 'checkbox', id: 'exis114', boxLabel:'Ninguno',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } }
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Cu&aacute;l es el m&aacute;s usado', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'radio', id: 'cuaO111', name:'masUsado2',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO112', name:'masUsado2',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO113', name:'masUsado2',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'cuaO114', name:'masUsado2',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'incre111',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre112',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre113',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'incre114',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'tend111',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend112',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend113',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tend114',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'esta111',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta112',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta113',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'esta114',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V15.hide();
						SUI_Microcuenca_V14.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V15.hide();
						SUI_Microcuenca_V16.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V21 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Descargas de actividades Productivas',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:15px 0px 0px 10px;',
              items :[
					{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:11px 0px 30px 0px;'},
                {height:60, xtype: 'checkbox', id: 'agro', boxLabel:'<html>Agr&iacute;cola</html>',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  } },
                {height:22, xtype: 'checkbox', id: 'pecua', boxLabel:'Pecuaria',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  } },
                {height:22, xtype: 'checkbox', id: 'mine', boxLabel:'Minera',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  } },
                {height:22, xtype: 'checkbox', id: 'indus', boxLabel:'Industrial',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  } },
				{xtype: 'checkbox', id: 'otra', boxLabel:'Otra',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  } }
            ]
        },{
            columnWidth: '.12',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 3px 0px;', html: 'Actividad espec&iacute;fica', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:100, id: 'actiEs1', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:100, id: 'actiEs2', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:100, id: 'actiEs3', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', width:100, id: 'actiEs4', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
				{xtype: 'textfield', width:100, id: 'actiEs5', hideLabel: true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'incre121',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'incre122',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'incre123',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'incre124',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
		{id: 'incre125',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'tend121',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'tend122',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'tend123',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'tend124',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
		{id: 'tend125',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
                {id: 'esta121',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'esta122',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'esta123',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
                {id: 'esta124',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }},
		{id: 'esta125',
								  handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								  }}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V21.hide();
						SUI_Microcuenca_V20.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V21.hide();
						SUI_Microcuenca_V22.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V3 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Fuentes',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:15px 0px 0px 10px;',
              items :[{
				id:'',
				xtype : 'form',
				border : false,
				frame : false,
				style: 'padding:0px 0px 20px 0px;',
				items : [
// 				  {
// 					  xtype:'label',
// 					  text: 'Numero de fuentes que abastecen el Sistema',
// 					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
// 				  }
				 {
				  labelSeparator:' ',
				  xtype:'numberfield',
				  id:'numFuentesSubt',
				  name:'numFuentesSubt',
				  emptyText: '0',
				  allowNegative: false,
				  allowDecimals: false,
				  width:50,
				  fieldLabel:'<html>N&uacute;mero de fuentes subterr&aacute;neas:</html>',
				  labelStyle:'width: 250px;text-align:left;'
				},
				]},
				{
				id:'',
				xtype : 'form',
				border : false,
				frame : false,
				style: 'padding:0px 0px 20px 0px;',
				items : [
				  {
					  xtype:'label',
					  text: 'Tipo de fuente(s) de abastecimiento:',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
				  }
				]},
				{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        anchor: '100%',
        items: [{
            columnWidth: '.15',
            items: [
                {xtype: 'label', style: 'padding:11px 0px 17px 80px;'},
                {height:72, xtype: 'checkbox', id: 'fuenteSub', boxLabel:'<html>Fuente subterr&aacute;nea</html>', handler: function(){
                  //      brindarAyuda('AC','CA','fuente','preg1');
                        
                     } },
                {xtype: 'checkbox', id: 'compra', boxLabel:'Compra de agua en Bloque',
                     handler: function(){
                  //      brindarAyuda('AC','CA','fuente','preg1');
                        
                     } }
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', text: 'Nombre 1', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nomb11', hideLabel:true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'label', text: 'Nombre 1', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nomb12', hideLabel:true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', text: 'Nombre 2', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nomb21', hideLabel:true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'label', text: 'Nombre 2', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nomb22', hideLabel:true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', text: 'Nombre 3', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nomb31', hideLabel:true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'label', text: 'Nombre 3', cls:'x-form-check-group-label', anchor:'-5'},
                {xtype: 'textfield', width:90, id: 'nomb32', hideLabel:true, listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V3.hide();
						SUI_Microcuenca_V2.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V3.hide();
						SUI_Microcuenca_V4.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V8 = new Ext.Panel({
       frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: '<html>Protecci&oacute;n de las Fuentes superficiales de Agua</html>',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
					{
						id:'',
						xtype : 'form',
						border : false,
						frame : false,
						style: 'padding:5px 0px 0px 0px;',
						items : [
					  {
						  xtype:'label',
						  text: 'Programas',
						  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;'
					  }
					]},
					  {
						xtype: 'label',
						style: 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;',
						html: 'Indique qu&eacute; programas se adelantan actualmente para la protecci&oacute;n de las fuentes abastecedoras:'
					  },
					{
				        xtype: 'checkboxgroup',
				        hideLabel: true,
				        layout: 'column',
						style : 'padding: 0px 0px 0px 30px;',
				        //anchor: '100%',
				        items: [{
				            columnWidth: '.24',
				            items: [
								{xtype: 'label', cls: 'x-form-check-group-label',style: 'padding:3px 0px 0px 0px;',hidden:'true'},
				                {id: 'aisla', boxLabel:'Aislamiento', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }},
				                {id: 'refor', boxLabel:'Reforestaci&oacute;n', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }},
						{id: 'mejor', boxLabel:'Mejoramiento en el Uso del Suelo', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }},
						{id: 'adqui', boxLabel:'Adquisici&oacute;n de tierras', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }},
						{id: 'educ', boxLabel:'Educaci&oacute;n ambiental', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }},
						{id: 'reducc', boxLabel:'Reducci&oacute;n uso de agroquimicos', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }}
				            ]
				        }
				        ]
					},
					{
						xtype: 'label',
						style: 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;',
						html: 'Situaci&oacute;n de Aguas arriba de la captaci&oacute;n'
					},
					{
						id:'',
						xtype : 'form',
						border : false,
						frame : false,
						style: 'padding:0px 0px 0px 24px;',
						items : [
						{
						  xtype:      'radiogroup',
						  labelStyle: 'width: 150px;',
						  fieldLabel: '<html>&iquest;Es una zona de reserva?</html>',
						  style: 'padding:0px 0px 0px 4px;',
						  items: 
						  [{
								  layout: 'column',
								  column: '0.5',
								  items:
								  [{
									  boxLabel:   'Si',
									  name:       'zonaReserva',
									  id:         'zonaRSi',
									  inputValue: '01', 
									  handler: function(){
									  //      brindarAyuda('AC','CA','fuente','preg1');
										
									  }
									  //checked:    true
								  },
								  {
									  boxLabel:   'No',
									  name:       'zonaReserva',
									  id:         'zonaRNo',
									  inputValue: '02',
									  handler: function(){
									  //      brindarAyuda('AC','CA','fuente','preg1');
										
									  }
								  }]
							}]
						}
					]},
					{
						id:'',
						xtype : 'form',
						border : false,
						frame : false,
						style: 'padding:0px 0px 0px 24px;',
						items : [
						{
						  xtype:      'radiogroup',
						  labelStyle: 'width: 150px;',
						  fieldLabel: '<html>&iquest;Es una zona protegida?</html>',
						  style: 'padding:0px 0px 0px 4px;',
						  items: 
						  [{
								  layout: 'column',
								  column: '0.5',
								  items:
								  [{
									  boxLabel:   'Si',
									  name:       'zonaPro',
									  id:         'zonaPSi',
									  inputValue: '01',
									  handler: function(){
									  //      brindarAyuda('AC','CA','fuente','preg1');
										
									  }
									  //checked:    true
								  },
								  {
									  boxLabel:   'No',
									  name:       'zonaPro',
									  id:         'zonaPNo',
									  inputValue: '02',
									  handler: function(){
									  //      brindarAyuda('AC','CA','fuente','preg1');
										
									  }
								  }]
							}]
						}
					]}
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V8.hide();
						SUI_Microcuenca_V7.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V8.hide();
						SUI_Microcuenca_V9.show();
					}
			    }]
	});
	
	
	var SUI_Microcuenca_V19 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Modificaciones del Paisaje',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
					{
			id:'',
			xtype : 'form',
			border : false,
			frame : false,
			style: 'padding:20px 0px 20px 4px;',
			items : [
			{
			  xtype: 'radiogroup',
			  labelStyle: 'width: 300px;',
			  fieldLabel: '<html>&iquest;Se han desarrollado actividades que modifican el paisaje?',
			  style: 'padding:43px 0px 0px 4px;',
			  items: 
			  [{
					  layout: 'column',
					  column: '0.5',
					  items:
					  [{
						  boxLabel:   'Si',
						  name:       'desarrollo',
						  id:         'desarrolloSi4',
						  inputValue: '01',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
						  //checked:    true
					  },
					  {
						  boxLabel:   'No',
						  name:       'desarrollo',
						  id:         'desarrolloNo',
						  inputValue: '02',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }
					  }]
				}]
			}
		]},
		{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
        items: [{
            columnWidth: '.15',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 40px 170px;'},
                {height:60, id: 'const1', boxLabel:'<html>Construcci&oacute;n de v&iacute;as</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {height:21, id: 'const2', boxLabel:'<html>Construcci&oacute;n de viviendas</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } },
                {height:60, id: 'const3', boxLabel:'<html>Construcci&oacute;n de otro tipo de infraestructura</html>',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  } }
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;', text: 'Incremento', cls:'x-form-check-group-label'},
                {xtype: 'radio', id: 'increm1', name:'increment1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'increm2', name:'increment1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {xtype: 'radio', id: 'increm3', name:'increment1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.07',
            items: [
                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label'},
                {id: 'tendD1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tendD2',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'tendD3',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        },{
            columnWidth: '.05',
            items: [
                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label'},
                {id: 'estab1',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'estab2',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
                {id: 'estab3',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
            ]
        }]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V19.hide();
						SUI_Microcuenca_V17.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V19.hide();
						SUI_Microcuenca_V20.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V12 = new Ext.Panel({
         frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Actividades que inciden en la Cantidad y la calidad del Agua',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
				{
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					style: 'padding:0px 0px 0px 0px;',
					items : [
				  {
					  xtype:'label',
					  text: 'Actividad Pecuaria',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;'
				  }
				]},
			{
		        xtype: 'checkboxgroup',
		        hideLabel: true,
		        layout: 'column',
				style: 'padding:5px 0px 0px 10px;',
		        //anchor: '100%',
		        items: [{
		            columnWidth: '.11',
		            items: [
		                {xtype: 'label',style: 'padding:3px 0px 39px 0px;', id: '',cls:'x-form-check-group-label3', anchor:'-5'},
		                {xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblGanB',html: 'Ganader&iacute;a bovina', cls:'x-form-check-group-label2'},
		                {xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblGanE',html: 'Ganader&iacute;a equina', cls:'x-form-check-group-label2'},
		                {xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblPorc',text: 'Porcicultura', cls:'x-form-check-group-label2'},
						{xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblCapric',text: 'Capricultura y/u ovinos', cls:'x-form-check-group-label2'},
						{xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblAvicul',text: 'Avicultura', cls:'x-form-check-group-label2'},
						{xtype: 'label',style: 'padding:3px 0px 8px 0px;', id: 'lblPisci',text: 'Piscicultura', cls:'x-form-check-group-label2'},
		                {xtype: 'label',id: 'lblOtro1',html: 'Otro: &iquest;Cu&aacute;l?'},
						{xtype: 'textfield',id: 'lblOtro2', width:90, listeners: {
		                  'focus' : {
		                      fn: function(){
		                         
		                         
		                         
		                      }
		                   },
		                                  
						}}
		            ]
		        },{
		            columnWidth: '.05',
		            items: [
		                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Existencia', cls:'x-form-check-group-label', anchor:'-5'},
		                {id: 'exis12',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }},
		                {id: 'exis22',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }},
		                {id: 'exis32',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }},
		                {id: 'exis42',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }},
				{height:23, id: 'exis52',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }},
				{height:38, id: 'exis62',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }},
				{id: 'exis72',
				  handler: function(){
				  //      brindarAyuda('AC','CA','fuente','preg1');
					
				  }}
		            ]
		        },{
		            columnWidth: '.07',
		            items: [
		                {xtype: 'label', html: 'Cu&aacute;l ocupa la mayor &aacute;rea', cls:'x-form-check-group-label', anchor:'-5'},
		                {id: 'cuaO12',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'cuaO22',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'cuaO32',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'cuaO42',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:23, id: 'cuaO52',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:38, id: 'cuaO62',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{id: 'cuaO72',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
		            ]
		        },{
		            columnWidth: '.07',
		            items: [
		                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Incremento', cls:'x-form-check-group-label', anchor:'-5'},
		                {id: 'incre12',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'incre22',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'incre32',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'incre42',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:23, id: 'incre52',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:38, id: 'incre62',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{id: 'incre72',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
		            ]
		        },{
		            columnWidth: '.07',
		            items: [
		                {xtype: 'label', html: 'Tendencia Disminuci&oacute;n', cls:'x-form-check-group-label', anchor:'-5'},
		                {id: 'tend12',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'tend22',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'tend32',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'tend42',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:23, id: 'tend52',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:38, id: 'tend62',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{id: 'tend72',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
		            ]
		        },{
		            columnWidth: '.05',
		            items: [
		                {xtype: 'label', style: 'padding:3px 0px 17px 0px;',text: 'Estable', cls:'x-form-check-group-label', anchor:'-5'},
		                {id: 'esta12',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'esta22',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'esta32',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
		                {id: 'esta42',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:23, id: 'esta52',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{height:38, id: 'esta62',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }},
				{id: 'esta72',
						  handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						  }}
		            ]
		        }]
				}
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V12.hide();
						SUI_Microcuenca_V11.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V12.hide();
						SUI_Microcuenca_V13.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V4 = new Ext.Panel({
         frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Cantidad de Agua en las Fuentes',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
					{
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					style: 'padding:5px 0px 20px 0px;',
					items : [
				  {
					  xtype:'label',
					  html: 'Fuentes Superficiales',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;font-weight:bold;'
				  }
				]},{
					  xtype:'label',
					  html: '<html>&Eacute;poca de Lluvia</html>',
					  style : 'padding:0px 0px 0px 100px; font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;'
				  },
		{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
	            columnWidth: '.20',
	            items: [
	                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: '<html>Nombre de<br>la Fuente</html>', cls:'x-form-check-group-label'},
	                {xtype: 'textfield', id: 'nombF1', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
	                {xtype: 'textfield', id: 'nombF2', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
	                {xtype: 'textfield', id: 'nombF3', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
	                {xtype: 'textfield', id: 'nombF4', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
	            ]
			},{
		            columnWidth: '.03',
		            items: [
					{xtype: 'label', style: 'padding:46px 0px 0px 20px;', html: '<html>Caudal Total<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(l/s)<html>', cls:'x-form-check-group-label'},
		                {width:50, xtype: 'numberfield', id: 'caudal1', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal2', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal3', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal4', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
		            ]
		        },/*{
					columnWidth: '.03',
		            items: [
		                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', text: 'Total', cls:'x-form-check-group-label'},
		                {width:10, xtype: 'label', height:26, id: 'total1', text:'l/s'},
		                {width:10, xtype: 'label', height:26, id: 'total2', text:'l/s'},
		                {width:50, xtype: 'label', height:27, id: 'total3', text:'l/s'},
		                {width:50, xtype: 'label', id: 'total4', text:'l/s'}
		            ]
		        },*/{
		            columnWidth: '.25',
		            items: [
		                {
						  xtype: 'label', style: 'padding:46px 0px 0px 20px;', html: '<html>Caudal Captado<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(l/s)</html>', cls:'x-form-check-group-label'
						},
		                {width:50, xtype: 'numberfield', id: 'caudal11',emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5, style:'margin-left:20px;',
							  listeners: {
								'focus' : {
									fn: function(){
									  
									  
									  
									}
											  },
								                
							  }},
		                {width:50, xtype: 'numberfield', id: 'caudal12', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal13', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal14', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
		            ]
		        },/*{
					columnWidth: '.03',
		            items: [
		                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', text: 'Captado', cls:'x-form-check-group-label'},
		                {width:50, xtype: 'label', height:26, id: 'captado1', text:'I/s'},
		                {width:50, xtype: 'label', height:26, id: 'captado2', text:'I/s'},
		                {width:50, xtype: 'label', height:27, id: 'captado3', text:'I/s'},
		                {width:50, xtype: 'label', id: 'captado4', text:'I/s'}
		            ]
		        }*/
		
		]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V4.hide();
						SUI_Microcuenca_V3.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V4.hide();
						SUI_Microcuenca_V5.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V5 = new Ext.Panel({
       frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Cantidad de Agua en las Fuentes',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
					{
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					style: 'padding:5px 0px 20px 0px;',
					items : [
				  {
					  xtype:'label',
					  html: 'Fuentes Superficiales',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;font-weight:bold;'
				  }
				]},{
					  xtype:'label',
					  html: '&Eacute;poca Seca',
					  style : 'padding:0px 0px 0px 100px; font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;'
				  },
		{
        xtype: 'checkboxgroup',
        hideLabel: true,
        layout: 'column',
        //anchor: '100%',
		
        items: [{
            columnWidth: '.20',
            items: [
                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: '<html>Nombre de<br>la Fuente</html>', cls:'x-form-check-group-label'},
                {xtype: 'textfield', id: 'nombF11', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', id: 'nombF12', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', id: 'nombF13', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
                {xtype: 'textfield', id: 'nombF14', listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
            ]
			},{
		            columnWidth: '.03',
		            items: [
					{xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: '<html>Caudal Total<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(l/s)<html>', cls:'x-form-check-group-label'},
		                {width:50, xtype: 'numberfield', id: 'caudal21', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal22', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal23', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal24', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
		            ]
		        },/*{
					columnWidth: '.03',
		            items: [
		                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', text: 'Total', cls:'x-form-check-group-label'},
		                {width:50, xtype: 'label', height:26, id: 'total11', text:'I/s'},
		                {width:50, xtype: 'label', height:26, id: 'total12', text:'I/s'},
		                {width:50, xtype: 'label', height:27, id: 'total13', text:'I/s'},
		                {width:50, xtype: 'label', id: 'total14', text:'I/s'}
		            ]
		        },*/{
		            columnWidth: '.25',
		            items: [
					{xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: '<html>Caudal Captado<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(l/s)</html>', cls:'x-form-check-group-label'},
		                {width:50, xtype: 'numberfield', id: 'caudal31',emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5, style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal32', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal33', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}},
		                {width:50, xtype: 'numberfield', id: 'caudal34', emptyText: '0',
						allowNegative: false,
						decimalPrecision: 5,style:'margin-left:20px;',listeners: {
                  'focus' : {
                      fn: function(){
                         
                         
                         
                      }
                   },
                                  
				}}
		            ]
		        },/*{
					columnWidth: '.03',
		            items: [
		                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', text: 'Captado', cls:'x-form-check-group-label'},
		                {width:50, xtype: 'label', height:26, id: 'captado11', text:'I/s'},
		                {width:50, xtype: 'label', height:26, id: 'captado12', text:'I/s'},
		                {width:50, xtype: 'label', height:27, id: 'captado13', text:'I/s'},
		                {width:50, xtype: 'label', id: 'captado14', text:'I/s'}
		            ]
		        }*/
		
		]
    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V5.hide();
						SUI_Microcuenca_V4.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V5.hide();
						SUI_Microcuenca_V6.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V6 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Cantidad de Agua en las Fuentes',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			  bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
					{
					id:'',
					xtype : 'form',
					border : true,
					frame : false,
					style: 'padding:5px 0px 15px 0px;',
					items : [
				  {
					  xtype:'label',
					  html: 'Fuentes superficiales',
					  style : 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;font-weight: bold;'
				  }
				]},
					{
						id:'',
						xtype : 'form',
						border : false,
						frame : false,
						style: 'padding:5px 0px 0px 0px;',
						items : [
					  {
						  xtype:'label',
						  html: '<html>M&eacute;todo de Aforo:</html>',cls: 'x-form-check-group-label',
						  style : 'margin-left:33px;font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;'
					  }
					]},
					{
				        xtype: 'checkboxgroup',
				        hideLabel: true,
				        layout: 'column',
						style : 'padding: 0px 0px 0px 30px;',
				        //anchor: '100%',
				        items: [{
				            columnWidth: '.08',
				            items: [
							{xtype: 'label', cls: 'x-form-check-group-label',style: 'padding:3px 0px 0px 0px;',},
				                {id: 'volum', boxLabel:'<html>Volum&eacute;trico</html>', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     } },
								  {xtype: 'label', style: 'padding:5px 0px 0px 0px;', cls:'espacio'},
								{id: 'micro', boxLabel:'Micromolinete', style : 'margin-top:55px;', handler: function(){
								  //      brindarAyuda('AC','CA','fuente','preg1');
									
								     }},
								  {xtype: 'label', style: 'padding:5px 0px 0px 0px;', cls:'espacio'},
				                {id: 'velo', boxLabel:'Velocidad', handler: function(){
						  //      brindarAyuda('AC','CA','fuente','preg1');
							
						     }},
								  {xtype: 'label', style: 'padding:5px 0px 0px 0px;', cls:'espacio'},
								{id: 'otro', boxLabel:'Otro',
									handler: function(){
										if (!(Ext.getCmp('cualOtro').isVisible())){
										 Ext.getCmp('cualOtro').show();
										} 
										else Ext.getCmp('cualOtro').hide();
										
									}	
								},{xtype: 'label', style: 'padding:5px 0px 0px 0px;', cls:'espacio'},
				            ]
						},
				        ]
					},
				  {
						  //id:'',
							xtype : 'form',
							id: 'cualOtro',
							hidden:true,
							border : false,
							frame : false,
							//style: 'padding:5px 0px 0px 0px;',
							items: [
							{
							  xtype: 'textfield',
							fieldLabel:'<html>&iquest;Cu&aacute;l?</html>',
							labelStyle:'width: 140px;text-align:right;',
							width:150, 
							listeners: {
							  'focus' : {
								fn: function(){
								  
								  
								  
								}
							  },
							                  
							}}
							]
						}
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V6.hide();
						SUI_Microcuenca_V5.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V6.hide();
						SUI_Microcuenca_V7.show();
					}
			    }]
	});
	
	var SUI_Microcuenca_V7 = new Ext.Panel({
        frame: true,
	  hidden: true,
	  title: 'Microcuencas',
	  autoWidth: true,
	  height: 380,
	  items:
	  [
	     {
	        xtype:'fieldset',
	        title: 'Cantidad de Agua en las Fuentes',
	        autoWidth: true,
	        height: 290,
			defaultType:'textfield',
			 // bodyStyle: 'padding:0px 0px 0px 10px;',
              items :[
					
					{
						id:'',
						xtype : 'form',
						border : false,
						frame : false,
						style: 'padding:5px 0px 10px 0px;',
						items : [
						{
							xtype: 'label',
							style: 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif; font-weight: bold;',
							html: 'Fuentes Subterr&aacute;neas'
						}
					]},
					{
						id:'',
						xtype : 'form',
						border : false,
						frame : false,
						style: 'padding:5px 0px 15px 0px;',
						items : [
						{
							xtype: 'label',
							style: 'font-size: 13px; font-family: Arial, Verdana, Helvetica, sans-serif;',
							html: 'Cantidad que se capta de cada fuente subterr&aacute;nea de abastecimiento:'
						}
					]},
					{
				        xtype: 'checkboxgroup',
				        hideLabel: false,
				        layout: 'column',
				        //anchor: '100%',
						
				        items: [
								{
						            columnWidth: '.25',
						            items: [
						                {xtype: 'label', style: 'espacio;', hidden:true,},
						                {xtype: 'label',
										width:100, height: 120,
										hideLabel:false, labelSeparator:' ',
										id: 'capta1', 
										style: 'padding:65px 0px 0px 5px;',
										text:'Caudal promedio captado:',
										labelStyle:'text-align:left;', 
										listeners: {
						                  'focus' : {
						                      fn: function(){
						                         
						                         
						                         
						                      }
						                   },
						                                  
										}}
						            ]
						        },
								{
						            columnWidth: '.055',
						            items: [
						                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: 'Captaci&oacute;n 1 (l/s)', cls:'x-form-check-group-label'},
										   {xtype: 'numberfield',width:90, emptyText: '0',
										   allowNegative: false,
										   decimalPrecision: 5,id: 'capta1', listeners: {
						                  'focus' : {
						                      fn: function(){
						                         
						                         
						                         
						                      }
						                   },
						                                  
										}}
						            ]
						        },{
						            columnWidth: '.055',
						            items: [
						                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: 'Captaci&oacute;n 2 (l/s)', cls:'x-form-check-group-label'},
										   {width:90, xtype: 'numberfield', emptyText: '0',
										   allowNegative: false,
										   decimalPrecision: 5,id: 'capta2', listeners: {
						                  'focus' : {
						                      fn: function(){
						                         
						                         
						                         
						                      }
						                   },
						                                  
										}}
						            ]
						        },{
						            columnWidth: '.055',
						            items: [
						                {xtype: 'label', style: 'padding:46px 0px 0px 0px;', html: 'Captaci&oacute;n 3 (l/s)', cls:'x-form-check-group-label'},
										   {width:90, xtype: 'numberfield', emptyText: '0',
										   allowNegative: false,
										   decimalPrecision: 5,id: 'capta3', listeners: {
						                  'focus' : {
						                      fn: function(){
						                         
						                         
						                         
						                      }
						                   },
						                                  
										}}
						            ]
						        },
						
						]
				    }
			    ]
			    }
			    ],
			    buttons: [
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
						SUI_Microcuenca_V7.hide();
						SUI_Microcuenca_V6.show();
						
					}
			    },
				{
			        text: 'Continuar',
					handler:function(){
						//var tab=Ext.getCmp('tabPanel').getActiveTab();
						SUI_Microcuenca_V7.hide();
						SUI_Microcuenca_V8.show(); 
					}
			    }]
	});
