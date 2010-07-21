<?php

include(dirname(__FILE__).'/../../bootstrap/functional.php');

$browser = new sfTestFunctional(new sfBrowser());

$browser->
  get('/aseo_fondosolidaridadredistribucioningresos/index')->

  with('request')->begin()->
    isParameter('module', 'aseo_fondosolidaridadredistribucioningresos')->
    isParameter('action', 'index')->
  end()->

  with('response')->begin()->
    isStatusCode(200)->
    checkElement('body', '!/This is a temporary page/')->
  end()
;
