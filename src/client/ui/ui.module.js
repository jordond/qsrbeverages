/**
 * Module which contains some ui elements
 */
import angular from 'angular';

/** UI components */
import titlesComponent from './titles/titles.component';
import titlesFilter from './titles/word.filter';

const mod =
  angular
    .module('app.ui', [])
    .component('titles', titlesComponent)
    .filter('words', titlesFilter);

export default mod.name;
