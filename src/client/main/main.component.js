/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div class="container">',
    '<titles title="$ctrl.playlist.title" subtitle="$ctrl.playlist.subtitle"></titles>',
    '<menu-list ',
      'playlist="$ctrl.playlist">',
    '</menu-list>',
    '<controls></controls>',
  '</div>'
].join('');

/** @ngInject */
function controller($scope, menuDataService) {
  this.playlist = menuDataService.playlist;

  menuDataService.enablePolling(3000);
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
