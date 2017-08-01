const { StringCalculator } = require('./StringCalculator');

describe('StringCalculator', () => {
  describe('add', () => {
    const uut = new StringCalculator();

    it('empty string returns zero', () => {
      expect(uut.add()).toEqual(0);
    });

    it('number returns number', () => {
      expect(uut.add('1')).toEqual(1);
      expect(uut.add('2')).toEqual(2);
    });

    it('adds numbers', () => {
      expect(uut.add('1,2')).toEqual(3);
      expect(uut.add('2,3')).toEqual(5);
    });

    it('adds unknown amount of numbers', () => {
      expect(uut.add('1,2,3,4')).toEqual(10);
    });

    it('newline as delimiter', () => {
      expect(uut.add('1\n2,3,4')).toEqual(10);
      expect(uut.add('1,9\n20')).toEqual(30);
    });

    it('custom delimiter', () => {
      expect(uut.add('//;\n1;2')).toEqual(3);
    });

    it('negatives not allows', () => {
      expect(() => uut.add('-1')).toThrowError(new Error('negatives not allowed: -1'));
      expect(() => uut.add('-1,-2')).toThrowError('negatives not allowed: -1,-2');
    });

    it('numbers bigger than 1000 are ignored', () => {
      expect(uut.add('1\n2,1002,3,4,1000')).toEqual(1010);
    });
  });
});
