/**
 * Panel Component
 *
 * Creates a sliding menu element.
 * Currently only option is to open on the left.
 *
 * Menu opens when $ctrl.visible is true
 */
import './panel.scss';

/* eslint indent: 0 */
const template = [
  '<div class="panel" ng-class="{\'is-visible\': $ctrl.visible}">',
    '<header class="panel_header">',
      '<a class="panel_close" ng-click="$ctrl.visible = false">',
        '<i class="fa fa-times"></i>',
      '</a>',
      '<h1>{{$ctrl.title}}</h1>',
    '</header>',
    '<div class="panel_container">',
      '<div class="panel_content" ng-transclude></div>',
    '</div>',
  '</div>',
].join('');

const component = {
  bindings: {
    title: '@',
    visible: '='
  },
  template,
  transclude: true
};

export default component;
