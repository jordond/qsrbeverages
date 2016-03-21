/**
 * Module which contains some ui elements
 */
import angular from 'angular';

// 3rd part library
import './lib/ng-jsoneditor';

/** UI components */
import titlesComponent from './titles/titles.component';
import titlesFilter from './titles/word.filter';
import panelComponent from './panel/panel.component';
import controlsComponent from './controls/controls.component';

const dependencies = [
  'ng.jsoneditor'
];

const mod =
  angular
    .module('app.ui', dependencies)
    .component('titles', titlesComponent)
    .filter('words', titlesFilter)
    .component('panel', panelComponent)
    .component('controls', controlsComponent);

export default mod.name;
