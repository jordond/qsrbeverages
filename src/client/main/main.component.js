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
  '</div>'
].join('');

/** @ngInject */
function controller($scope, menuData) {
  this.playlist = menuData.playlist;

  menuData.enablePolling(3000);
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
