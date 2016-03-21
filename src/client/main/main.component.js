/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div class="container">',
    '<titles title="$ctrl.playlist.title" subtitle="$ctrl.playlist.subtitle"></titles>',
    '<menu-list playlist="$ctrl.playlist"></menu-list>',
  '</div>',
  '<div class="panel-toggle" ng-click="$ctrl.panelIsVisible = !$ctrl.panelIsVisible">',
    '<i class="fa fa-cogs"></i>',
  '</div>',
  '<panel title="Edit playlist data" visible="$ctrl.panelIsVisible"><p>This is a test</p></panel>'
].join('');

/** @ngInject */
function controller(menuDataService) {
  this.playlist = menuDataService.playlist;

  menuDataService.enablePolling(3000);
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
