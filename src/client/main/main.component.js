/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div class="container">',
    '<menu-list ',
      'items-left="$ctrl.data.left" ',
      'items-right="$ctrl.data.right">',
    '</menu-list>',
  '</div>'
].join('');

/** @ngInject */
function controller($scope, menuData) {
  menuData.getMenuData()
    .then(data => (this.data = data));

  // menuData.enablePolling();
}

const mainComponent = {
  bindings: {},
  template,
  controller
};

export default mainComponent;
