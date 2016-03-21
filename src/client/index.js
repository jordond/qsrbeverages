/**
 * Entry-point for the angular application
 *
 * Loads the core module which contains all app-wide deps
 */

import angular from 'angular';

// App modules
import main from './main/main.module';

const app =
  angular.module('app', [main]);

export default app;
