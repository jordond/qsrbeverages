/**
 * Price Component
 *
 * Displays the pricing information.
 * Dollars, and cents are filtered with `./price.filter.js`
 * Size is determined by the current index value.
 */
import './price.scss';

const sizes = [
  'x-small',
  'small',
  'medium',
  'large',
  'x-large'
];

/* eslint indent: 0 */
const template = [
  '<div class="price_dollars">{{$ctrl.value | dollars}}</div>',
  '<div class="price_cents">{{$ctrl.value | cents}}</div>',
  '<div class="price_size">{{$ctrl.sizes[$ctrl.index]}}</div>'
].join('');

/**
 * Simple controller needed to assign size array to $ctrl
 */
function controller() {
  this.sizes = sizes;
}

const component = {
  bindings: {
    value: '=',
    index: '='
  },
  controller,
  template
};

export default component;
