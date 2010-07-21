<?php

/**
 * alcantarillado_trabajadoresyvinculacion actions.
 *
 * @package    arc
 * @subpackage alcantarillado_trabajadoresyvinculacion
 * @author     Your name here
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class alcantarillado_trabajadoresyvinculacionActions extends sfActions
{
 /**
  * Executes index action
  *
  * @param sfRequest $request A request object
  */
  public function executeIndex(sfWebRequest $request)
  {
    $this->forward('default', 'module');
  }
}
