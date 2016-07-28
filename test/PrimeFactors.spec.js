const TestUtils = require('app-root-path').require('test/TestUtils');
const PrimeFactors = require('app-root-path').require('src/PrimeFactors');

describe('PrimeFactors', () => {
  describe('generate', () => {
    const params = [
      {
        description: 'transformation: null to constant',
        number: 1,
        result: []
      },
      {
        description: 'transformation: constant to variable (generalize, split-flow)',
        number: 2,
        result: [2]
      },
      {
        description: 'transformation: constant to variable (generalize), add-computation',
        number: 3,
        result: [3]
      },
      {
        description: 'transformation: split-flow, generalize',
        number: 4,
        result: [2, 2]
      },
      {
        number: 5,
        result: [5]
      },
      {
        number: 6,
        result: [2, 3]
      },
      {
        number: 7,
        result: [7]
      },
      {
        description: 'transformation: if to while (then incrementor to for)',
        number: 8,
        result: [2, 2, 2]
      },
      {
        description: 'transformation: add-computation, if to while',
        number: 9,
        result: [3, 3]
      },
      {
        description: 'QED',
        number: 4620,
        result: [2, 2, 3, 5, 7, 11]
      }
    ];

    TestUtils.parameterized('generates list of prime factors', params, (i, p) => {
      expect(PrimeFactors.generate(p.number)).toEqual(p.result);
    });
  });
});
