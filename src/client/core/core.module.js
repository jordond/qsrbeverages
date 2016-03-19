/**
 * Core module which contains all of the apps deps
 */

import angular from 'angular';

// Vendor CSS
import 'font-awesome/css/font-awesome.css';
import 'skeleton-css/css/skeleton.css';
import 'normalize.css/normalize';

// Core vendor libs
import ngAnimate from 'angular-animate';
import ngUiRouter from 'angular-ui-router';

import config from './core.config';

const dependencies = [
  /* Angular modules */
  ngAnimate,

  /* Cross-app modules */

  /* 3rd party modules */
  ngUiRouter
];

const core =
  angular
    .module('app.core', dependencies)
    .config(config);

export default core.name;
