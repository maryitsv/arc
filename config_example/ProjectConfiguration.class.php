<?php

require_once 'C:\\xampp\\htdocs\\symfony\\lib/autoload/sfCoreAutoload.class.php';
//require_once '/usr/share/php/symfony/autoload/sfCoreAutoload.class.php';

//$path = '../../php/PEAR/symfony/autoload/sfCoreAutoload.class.php';
<<<<<<< HEAD:config_example/ProjectConfiguration.class.php
//$path = '/usr/share/php/symfony/autoload/sfCoreAutoload.class.php';
$path = 'C:\Users\pedroabp\Desktop\xampplite\php\PEAR\symfony\autoload\sfCoreAutoload.class.php';
=======

$path = 'C:\\xampp\\htdocs\\symfony\\lib/autoload/sfCoreAutoload.class.php';

//$path = '/usr/share/php/symfony/autoload/sfCoreAutoload.class.php';

>>>>>>> beec9d48f8ce3337afc9b1e1e83dc97e88e69a09:config/ProjectConfiguration.class.php

/*
if(basename(getcwd())=='web') {
  $path = '../'.$path;
} 
*/
<<<<<<< HEAD:config_example/ProjectConfiguration.class.php

require_once $path;
=======
//require_once $path;
>>>>>>> beec9d48f8ce3337afc9b1e1e83dc97e88e69a09:config/ProjectConfiguration.class.php

sfCoreAutoload::register();

class ProjectConfiguration extends sfProjectConfiguration
{
  public function setup()
  {
    $this->enablePlugins('sfPropelPlugin');
  }
}
