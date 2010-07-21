<?php
// auto-generated by sfViewConfigHandler
// date: 2010/07/21 09:51:25
$response = $this->context->getResponse();


  $templateName = sfConfig::get('symfony.view.'.$this->moduleName.'_'.$this->actionName.'_template', $this->actionName);
  $this->setTemplate($templateName.$this->viewName.$this->getExtension());



  if (null !== $layout = sfConfig::get('symfony.view.'.$this->moduleName.'_'.$this->actionName.'_layout'))
  {
    $this->setDecoratorTemplate(false === $layout ? false : $layout.$this->getExtension());
  }
  else if (null === $this->getDecoratorTemplate() && !$this->context->getRequest()->isXmlHttpRequest())
  {
    $this->setDecoratorTemplate('' == 'layout' ? false : 'layout'.$this->getExtension());
  }
  $response->addHttpMeta('content-type', 'text/html', false);

  $response->addStylesheet('main.css', '', array ());
  $response->addStylesheet('../extjs/resources/css/ext-all.css', '', array ());
  $response->addStylesheet('../extjs/resources/css/xtheme-blue.css', '', array ());
  $response->addStylesheet('../extjs/examples/shared/examples.css', '', array ());
  $response->addStylesheet('../extjs/examples/panel/css/bubble.css', '', array ());
  $response->addStylesheet('../extjs/examples/ux/css/Portal.css', '', array ());
  $response->addStylesheet('../extjs/examples/ux/css/GroupTab.css', '', array ());
  $response->addStylesheet('../extjs/examples/ux/css/ux-all.css', '', array ());
  $response->addJavascript('../extjs/adapter/ext/ext-base.js', '', array ());
  $response->addJavascript('../extjs/ext-all.js', '', array ());
  $response->addJavascript('../extjs/src/locale/ext-lang-es.js', '', array ());
  $response->addJavascript('../extjs/examples/shared/examples.js', '', array ());
  $response->addJavascript('../extjs/examples/panel/BubblePanel.js', '', array ());
  $response->addJavascript('../extjs/examples/ux/GroupTabPanel.js', '', array ());
  $response->addJavascript('../extjs/examples/ux/GroupTab.js', '', array ());
  $response->addJavascript('../extjs/examples/ux/Portal.js', '', array ());
  $response->addJavascript('../extjs/examples/ux/PortalColumn.js', '', array ());
  $response->addJavascript('../extjs/examples/ux/ux-all.js', '', array ());
  $response->addJavascript('../extjs/examples/ux/Portlet.js', '', array ());
  $response->addJavascript('variablesgenerales.js', '', array ());
  $response->addJavascript('funcionesgenerales.js', '', array ());
  $response->addJavascript('form_login.js', '', array ());
  $response->addJavascript('form_menuentradadatos.js', '', array ());


