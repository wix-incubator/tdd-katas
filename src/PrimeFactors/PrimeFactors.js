/**
 * @param {int} number - number of primes to generate
 * @returns {Array<int>} prime factors
 */
function generate(number) {
  const factors = [];

  for (let divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }

  return factors;
}

module.exports = {
  generate
};
