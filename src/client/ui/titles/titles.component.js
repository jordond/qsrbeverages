/**
 * Titles Component
 *
 * Instead of hardcoding the two titles, they can be dynamically generated.
 * The first word in `$ctrl.title` will be red and italic.
 */
import './titles.scss';

/* eslint indent: 0 */
const template = [
  '<div class="titles_container row">',
    '<div class="titles title">',
      '<div class="word" ng-repeat="word in $ctrl.title | words">',
        '{{word}}',
      '</div>',
    '</div>',
    '<div class="titles subtitle">',
      '{{$ctrl.subtitle}}',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    title: '=',
    subtitle: '='
  },
  template
};

export default component;
