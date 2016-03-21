/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div class="container">',
    '<titles title="$ctrl.playlist.data.title" subtitle="$ctrl.playlist.data.subtitle"></titles>',
    '<menu-list playlist="$ctrl.playlist.data"></menu-list>',
  '</div>',
  '<div class="panel-toggle" ng-click="$ctrl.panelIsVisible = !$ctrl.panelIsVisible">',
    '<i class="fa fa-cogs"></i>',
  '</div>',
  '<panel title="Tools" visible="$ctrl.panelIsVisible">',
    '<controls show-editor="$ctrl.editorVisible = !$ctrl.editorVisible"></controls>',
    '<ng-jsoneditor ng-class="{isVisible: $ctrl.editorVisible}" ',
      'ng-model="$ctrl.playlist.data" options="$ctrl.jsonEditorOptions">',
    '</ng-jsoneditor>',
  '</panel>'
].join('');

/** @ngInject */
function controller(menuDataService) {
  const jsonEditorOptions = {
    mode: 'form',
    search: false
  };

  this.playlist = menuDataService.playlist;
  this.jsonEditorOptions = jsonEditorOptions;

  menuDataService.enablePolling(2000);
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
