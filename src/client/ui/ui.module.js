/**
 * Contains components that make up the non-menu elements
 */
import angular from 'angular';

// 3rd part library
import './lib/ng-jsoneditor';

/** UI components */
import titlesFilter from './titles/word.filter';
import titlesComponent from './titles/titles.component';
import panelComponent from './panel/panel.component';
import controlsComponent from './controls/controls.component';

const dependencies = [
  'ng.jsoneditor'
];

const mod =
  angular
    .module('app.ui', dependencies)
    .filter('words', titlesFilter)
    .component('titles', titlesComponent)
    .component('panel', panelComponent)
    .component('controls', controlsComponent);

export default mod.name;
