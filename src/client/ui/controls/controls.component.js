import './controls.scss';

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

function controller() {

}

const component = {
  bindings: {},
  template,
  controller
};

export default component;
