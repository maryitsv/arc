
var AspectosLegales=function ( servicio, rango)
{
	var aspectosLegalesPanel = new Ext.FormPanel({
		frame: true,
		title: 'Aspectos Legales',
		autoWidth: true,
		autoScroll:true,
		height: 380,
		bodyStyle: 'padding:0px 0px 0px 10px;',
		defaults:{xtype:'textfield', labelStyle: 'width: 300px;' },
		items:
		[	
			{
			  xtype:'label',
			  labelStyle: letra+'width: 500px;' ,
			  fieldLabel: '<html>&iquest;Cumple con los permisos de acuerdo con el Art&iacute;culo 25 de le Ley 142 de 1994?</html>',
			  anchor:'100%'
			},
			{
			  xtype:      'radiogroup',
			  labelStyle: 'width: 300px;',
			  width: 100,
			  items: 
			  [{
				  boxLabel:   'Si',
				  name:       'cumple',
				  id:         'cumpleSi',
				  inputValue: true,
				  checked:    true
			  },
			  {
				  boxLabel:   'No',
				  name:       'cumple',
				  id:         'cumpleNo',
				  inputValue: false
			  }]
			}
			
		],
		buttons: 
		[
				{
			        text: '<html>Atr&aacute;s<html>',
					handler:function(){
					}
			    },{
				 text: 'Continuar',
				 handler: function()
				 {
				    alert("Has terminado con \u00e9xito la secci\u00f3n 'Microcuencas' del servicio de 'Acueducto'");
				 }
      			}
		]
	});
	
	
	var agregarPreguntasConcesionAguas = function ( nombreFuente ) 
	{	
		var panel=new Ext.form.FieldSet({
		    title:'Fuente '+nombreFuente,
			defaults:{xtype:'textfield', labelStyle: 'width: 260px;'+letra },
			items:[
				{
				  xtype:      'textfield',
				  width: 220,
				  fieldLabel: '<html>Entidad que expidi&oacute; la Concesi&oacute;n de aguas</html>'
				},
				{
					xtype:'datefield',
					width: 150,
					fieldLabel: '<html>Fecha de expedici&oacute;n de la Concesi&oacute;n </html>'
				},
				{
					xtype:'datefield',
					width: 150,
					fieldLabel: '<html>Fecha de vencimiento de la Concesi&oacute;n</html>'//,
					//(dd/mm/aa)
				},
				{
				  xtype:      'numberfield',
				  emptyText: '0',
				  allowNegative: false,
				  decimalPrecision: 5,
				  width: 150,
				  fieldLabel: 'Caudal adjudicado en la Concesi&oacute;n (l/s)',
				}
			]
		});			
		aspectosLegalesPanel.add( panel);
	}
	//la cantidad de veces que se debe llamar a esta funcion es una por cada fuente existente
	agregarPreguntasConcesionAguas('1');
	agregarPreguntasConcesionAguas('2');
	
	return aspectosLegalesPanel;
}