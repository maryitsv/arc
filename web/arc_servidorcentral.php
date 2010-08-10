<?php


require_once(dirname(__FILE__).'/../config/ProjectConfiguration.class.php');

$configuration = ProjectConfiguration::getApplicationConfiguration('arc_servidorcentral', 'prod', false);
sfContext::createInstance($configuration)->dispatch();
