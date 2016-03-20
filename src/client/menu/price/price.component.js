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

function controller() {
  const dollars = Math.floor(this.value);
  const cents = (this.value % 1).toFixed(2).substring(2);

  this.value = {
    dollars,
    cents
  };
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
