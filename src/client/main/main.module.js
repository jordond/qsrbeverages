/**
 * Main Section
 *
 * Consists of a single component that uses directives/components from
 * the UI module
 */

import angular from 'angular';

// Vendor CSS
import 'font-awesome/css/font-awesome.css';
import 'skeleton-css/css/skeleton.css';
import 'normalize.css/normalize';

// Core vendor libs
import ngAnimate from 'angular-animate';
import ngUiRouter from 'angular-ui-router';

// App config
import { routes, config } from './main.config';

// Cross app modules
import menu from '../menu/menu.module';
import uiModule from '../ui/ui.module';

import mainComponent from './main.component';

const dependencies = [
  /* Angular modules */
  ngAnimate,

  /* Cross-app modules */
  menu,
  uiModule,

  /* 3rd party modules */
  ngUiRouter
];

const mod =
  angular
    .module('app.main', dependencies)
    .config(config)
    .config(routes)
    .component('main', mainComponent);

export default mod.name;
