import './menu-list.scss';

/* eslint indent: 0 */
const template = [
  '<div class="menuList row">',
    '<div class="menuList_left seven columns">',
      '<div class="row" ng-repeat="item in $ctrl.itemsLeft">',
        '<menu-item item="item"></menu-item>',
      '</div>',
    '</div>',
    '<div class="menuList_right five columns">',
      '<div class="row" ng-repeat="item in $ctrl.itemsRight">',
        '<menu-item item="item"></menu-item>',
      '</div>',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    itemsLeft: '=',
    itemsRight: '='
  },
  template
};

export default component;
