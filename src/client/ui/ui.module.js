/**
 * Module which contains all the sections of the ui
 *
 * Contains ui submodules for more complex components
 */

import angular from 'angular';

import core from '../core/core.module';

/** UI sub-modules */

/** UI components */

const dependencies = [
  core
];

const mod =
  angular
    .module('app.ui', dependencies);

export default mod.name;
