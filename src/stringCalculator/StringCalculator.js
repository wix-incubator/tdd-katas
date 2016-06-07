import * as _ from 'lodash';

/**
 * @param values {String}
 * @returns {int} sum of values
 */
export function add(values) {
  if (!values) {
    return 0;
  }
  const numbers = rejectGreaterThan1000(parse(split(values)));
  if (hasNegatives(numbers)) {
    throw new Error('negative numbers not supported');
  }
  return sum(numbers);
}

function split(values) {
  if (hasCustomDelimiter(values)) {
    return splitUsingCustomDelimiter(values);
  }
  return _.split(values, /,|\n/);
}
function hasCustomDelimiter(values) {
  return _.startsWith(values, '//');
}
function splitUsingCustomDelimiter(values) {
  const match = /\/\/(.+)\n(.+)/.exec(values);
  const delimiter = match[1];
  const valuesWithoutDelimiter = match[2];
  return _.split(valuesWithoutDelimiter, delimiter);
}
function parse(strings) {
  return _.map(strings, (s) => _.parseInt(s));
}
function rejectGreaterThan1000(numbers) {
  return _.filter(numbers, (n) => n <= 1000);
}
function hasNegatives(numbers) {
  return _.find(numbers, (n) => n < 0);
}
function sum(numbers) {
  return _.reduce(numbers, (total, n) => total + n, 0);
}
