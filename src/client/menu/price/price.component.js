/**
 * Price Component
 *
 * Displays the pricing information
 * Size is determined by the current index value
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
  '<div class="price_dollars">{{$ctrl.value.dollars}}</div>',
  '<div class="price_cents">{{$ctrl.value.cents}}</div>',
  '<div class="price_size">{{$ctrl.size}}</div>'
].join('');

/**
 * Convert the price value into dollars and cents.
 * Determine the size based on the passed in index.
 */
function controller() {
  const dollars = Math.floor(this.value);
  // FIXME if the cents are only one digit, all hell breaks loose
  // TODO pad with a zero
  const cents = (this.value % 1).toFixed(2).substring(2);

  this.value = { dollars, cents };
  this.size = sizes[this.index];
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
