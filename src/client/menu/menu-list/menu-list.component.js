/**
 * MenuList Component
 *
 * Contains all of the item components, and the featured image
 */
import './menu-list.scss';

/* eslint indent: 0 */
const template = [
  '<div class="menuList row">',
    '<div class="menuList_image left three columns">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.playlist.featured_image}}">',
    '</div>',
    '<div class="menuList_left left four columns">',
      '<div class="row" ng-repeat="item in $ctrl.playlist.items.left | filter:{available: true}">',
        '<menu-item item="item" show-prices="$ctrl.playlist.prices" ng-class="{last: $last}"></menu-item>',
      '</div>',
    '</div>',
    '<div class="menuList_right five columns">',
      '<div class="row" ng-repeat="item in $ctrl.playlist.items.right | filter:{available: true}">',
        '<menu-item item="item" show-prices="$ctrl.playlist.prices" ng-class="{last: $last}"></menu-item>',
      '</div>',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    playlist: '='
  },
  template
};

export default component;
