/**
 * Item Component
 *
 * Build the item with it's image, titles, and pricing information.
 *
 * The array of price values is converted into price components
 */
import './item.scss';

/* eslint indent: 0 */
const template = [
  '<div class="item" ng-class="{\'no-prices\': !$ctrl.showPrices}">',
    '<div class="item_image three columns" ng-show="$ctrl.item.image">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.item.image}}">',
    '</div>',
    '<div class="item_content nine columns" ng-class="{no_image: !$ctrl.item.image}">',
      '<h4 class="item_title">',
        '{{$ctrl.item.english_name}}',
      '</h3>',
      '<h4 class="item_subtitle" ng-show="$ctrl.item.sub_text">',
        '{{$ctrl.item.sub_text}}',
      '</h4>',
      '<ul class="item_price_list animate-show" ng-show="$ctrl.showPrices">',
        '<li ng-repeat="price in $ctrl.item.prices track by $index">',
          '<menu-price value="price" index="$index"></menu-price>',
        '</li>',
        '<hr>',
      '</ul>',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    item: '=',
    showPrices: '='
  },
  template
};

export default component;
