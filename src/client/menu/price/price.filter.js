/**
 * Dollars Filter
 * Takes a decimal number and returns the integer value.
 * i.e. (2.34) => 2
 *
 * @param number  input Decimal number
 */
export function dollars() {
  return (input) => Math.floor(input);
}

/**
 * Cents filter
 * Takes a number and returns the decimal value to two places.
 * i.e. (1.136) => 14
 *
 * @param number  input Decimal number
 */
export function cents() {
  return (input) => (input % 1).toFixed(2).substring(2);
}
