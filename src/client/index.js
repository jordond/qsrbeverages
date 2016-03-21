/**
 * Entry-point for the angular application
 *
 * Bootstraps application.
 */
import angular from 'angular';

import main from './main/main.module';

const app = angular.module('app', [main]);

export default app;
