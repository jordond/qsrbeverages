import './menu-list.scss';

/* eslint indent: 0 */
const template = [
  '<div class="menuList row">',
    '<div class="menuList_image three columns">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.largeImage}}">',
    '</div>',
    '<div class="menuList_left four columns">',
      '<div class="row" ng-repeat="item in $ctrl.itemsLeft">',
        '<menu-item item="item" ng-class="{last: $last}"></menu-item>',
      '</div>',
    '</div>',
    '<div class="menuList_right five columns">',
      '<div class="row" ng-repeat="item in $ctrl.itemsRight">',
        '<menu-item item="item" ng-class="{last: $last}"></menu-item>',
      '</div>',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    largeImage: '@',
    itemsLeft: '=',
    itemsRight: '='
  },
  template
};

export default component;
