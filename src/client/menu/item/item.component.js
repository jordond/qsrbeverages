import './item.scss';

/* eslint indent: 0 */
const template = [
  '<div class="item">',
    '<div class="item_image two columns" ng-show="$ctrl.item.image">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.item.image}}">',
    '</div>',
    '<div class="item_content ten columns">',
      '<h4 class="item_title">',
        '{{$ctrl.item.english_name}}',
      '</h3>',
      '<h4 class="item_subtitle" ng-show="$ctrl.item.sub_text">',
        '{{$ctrl.item.sub_text}}',
      '</h4>',
      '<ul class="item_price_list">',
        '<li ng-repeat="price in $ctrl.item.prices track by $index">',
          '<menu-price value="price" index="$index"></menu-price>',
        '</li>',
      '</ul>',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    item: '='
  },
  template
};

export default component;
