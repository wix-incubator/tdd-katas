const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
  describe('generate', () => {
    it('transformation: null to constant', () => {
      expect(PrimeFactors.generate(1)).toEqual([]);
    });

    it('transformation: constant to variable (generalize, split-flow)', () => {
      expect(PrimeFactors.generate(2)).toEqual([2]);
    });

    it('transformation: constant to variable (generalize), add-computation', () => {
      expect(PrimeFactors.generate(3)).toEqual([3]);
    });

    it('transformation: split-flow, generalize', () => {
      expect(PrimeFactors.generate(4)).toEqual([2, 2]);
      expect(PrimeFactors.generate(5)).toEqual([5]);
      expect(PrimeFactors.generate(6)).toEqual([2, 3]);
      expect(PrimeFactors.generate(7)).toEqual([7]);
    });

    it('transformation: if to while (then incrementor to for)', () => {
      expect(PrimeFactors.generate(8)).toEqual([2, 2, 2]);
    });

    it('transformation: add-computation, if to while', () => {
      expect(PrimeFactors.generate(9)).toEqual([3, 3]);
    });

    it('QED', () => {
      expect(PrimeFactors.generate(4620)).toEqual([2, 2, 3, 5, 7, 11]);
    });
  });
});
