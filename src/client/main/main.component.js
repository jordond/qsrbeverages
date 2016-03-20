/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div class="container">',
    '<menu-list ',
      'large-image="{{$ctrl.playlist.largeImage}}" ',
      'items-left="$ctrl.playlist.left" ',
      'items-right="$ctrl.playlist.right">',
    '</menu-list>',
  '</div>'
].join('');


/** @ngInject */
function controller($scope, menuData) {
  this.playlist = menuData.playlist;

  menuData.enablePolling();
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
