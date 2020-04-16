const _ = require('lodash');

const DEFAULT_RULES = {
  3: 'Fizz',
  5: 'Buzz'
};

class FizzBuzz {
  constructor(rules = {}) {
    this.rules = { ...DEFAULT_RULES, ...rules };
  }

  fizzBuzz(n) {
    let result = '';

    _.forEach(this.rules, (word, number) => {
      if (n % number === 0) {
        result += word;
      }
    });
    if (result) {
      return result;
    }

    return String(n);
  }

  generate(range = { from: 1, to: 15 }) {
    const result = [];
    for (let i = range.from; i <= range.to; i++) {
      result.push(this.fizzBuzz(i));
    }

    return result;
  }
}

module.exports = { FizzBuzz };
