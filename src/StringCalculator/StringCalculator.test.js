const { StringCalculator } = require('./StringCalculator');

describe('StringCalculator', () => {
  const uut = new StringCalculator();

  describe('add', () => {
    it('zero for empty string ', () => {
      expect(uut.add('')).toEqual(0);
    });

    it('number for single number string', () => {
      expect(uut.add('2')).toEqual(2);
      expect(uut.add('1')).toEqual(1);
    });

    it('sum of 2 numbers', () => {
      expect(uut.add('1,2')).toEqual(3);
      expect(uut.add('3,4')).toEqual(7);
    });

    it('newline delimited returns the sum', () => {
      expect(uut.add('1\n2')).toEqual(3);
    });

    it('three numbers delimited either way returns the sum', () => {
      expect(uut.add('2\n3,4')).toEqual(9);
    });

    it('negatives not allowed', () => {
      expect(() => uut.add('-1,2,-3')).toThrow(new Error('negatives not allowed: -1,-3'));
    });

    it('numbers greater than 1000 are ignored', () => {
      expect(uut.add('1,2\n3,4,1000,1001')).toEqual(1010);
    });

    it('support custom single char delimiter on first line', () => {
      expect(uut.add('//#\n1#2')).toEqual(3);
      expect(uut.add('//;\n2;3')).toEqual(5);
    });

    it('support custom multi char delimiter on first line', () => {
      expect(uut.add('//xyz\n1xyz2')).toEqual(3);
      expect(uut.add('//=-=-=-=-=-asdzxc123\n1=-=-=-=-=-asdzxc1232')).toEqual(3);
    });
  });
});
