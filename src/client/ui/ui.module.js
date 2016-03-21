/**
 * Module which contains some ui elements
 */
import angular from 'angular';

/** UI components */
import loadingComponent from './loading/loading.component';
import titlesComponent from './titles/titles.component';
import titlesFilter from './titles/word.filter';

const mod =
  angular
    .module('app.ui', [])
    .component('loading', loadingComponent)
    .component('titles', titlesComponent)
    .filter('words', titlesFilter);

export default mod.name;
