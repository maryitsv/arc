<?php

//require_once 'C:\\xampp\\htdocs\\symfony\\lib/autoload/sfCoreAutoload.class.php';
require_once '/usr/share/php/symfony/autoload/sfCoreAutoload.class.php';

//$path = '../../php/PEAR/symfony/autoload/sfCoreAutoload.class.php';
//$path = '/usr/share/php/symfony/autoload/sfCoreAutoload.class.php';
//$path = 'C:\Users\pedroabp\Desktop\xampplite\php\PEAR\symfony\autoload\sfCoreAutoload.class.php';

/*
 if(basename(getcwd())=='web') {
 $path = '../'.$path;
 }
 */

//require_once $path;

sfCoreAutoload::register();

class ProjectConfiguration extends sfProjectConfiguration
{
	public function setup()
	{
		$this->enablePlugins('sfPropelPlugin');
	}
}
