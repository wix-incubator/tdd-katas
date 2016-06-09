import * as _ from 'lodash';

/**
 * @param values {String}
 * @returns {int} sum of values
 */
export function add(values) {
  if (!values) {
    return 0;
  }
  return accumulate(assertNoNegatives(rejectGreaterThan1000(parse(split(values)))));
}

function split(values) {
  return hasCustomDelimiter(values) ? splitUsingCustomDelimiter(values) : splitUsingCommaOrNewline(values);
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
function splitUsingCommaOrNewline(values) {
  return _.split(values, /,|\n/);
}
function parse(strings) {
  return _.map(strings, (s) => _.parseInt(s));
}
function rejectGreaterThan1000(numbers) {
  return _.filter(numbers, (n) => n <= 1000);
}
function assertNoNegatives(numbers) {
  if (_.find(numbers, (n) => n < 0)) {
    throw new Error('negative numbers not supported');
  }
  return numbers;
}
function accumulate(numbers) {
  return _.reduce(numbers, (total, n) => total + n, 0);
}
