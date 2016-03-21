/**
 * Module which contains some ui elements
 */
import angular from 'angular';

/** UI components */
import titlesComponent from './titles/titles.component';
import titlesFilter from './titles/word.filter';
import panelComponent from './panel/panel.component';
import controlsComponent from './controls/controls.component';

const mod =
  angular
    .module('app.ui', [])
    .component('titles', titlesComponent)
    .filter('words', titlesFilter)
    .component('panel', panelComponent)
    .component('controls', controlsComponent);

export default mod.name;
