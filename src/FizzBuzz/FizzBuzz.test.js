const { FizzBuzz } = require('./FizzBuzz');

describe('FizzBuzz', () => {
  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe('fizzBuzz generates 1 number', () => {
    it('returns numbers as string, with multiples of 3 as Fizz', () => {
      expect(fizzBuzz.fizzBuzz(1)).toEqual('1');
      expect(fizzBuzz.fizzBuzz(2)).toEqual('2');
      expect(fizzBuzz.fizzBuzz(3)).toEqual('Fizz');
      expect(fizzBuzz.fizzBuzz(6)).toEqual('Fizz');
    });

    it('returns numbers as string, with multiples of 5 as Buzz', () => {
      expect(fizzBuzz.fizzBuzz(5)).toEqual('Buzz');
      expect(fizzBuzz.fizzBuzz(8)).toEqual('8');
      expect(fizzBuzz.fizzBuzz(10)).toEqual('Buzz');
    });

    it('Multiples of 3 and 5 return FizzBuzz', () => {
      expect(fizzBuzz.fizzBuzz(15)).toEqual('FizzBuzz');
      expect(fizzBuzz.fizzBuzz(30)).toEqual('FizzBuzz');
    });
  });

  describe('generate', () => {
    it('generates by default 15 numbers FizzBuzz...', () => {
      expect(fizzBuzz.generate()).toEqual([
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz'
      ]);
    });

    it('generate can receive a range', () => {
      expect(fizzBuzz.generate({ from: 3, to: 7 })).toEqual([
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7'
      ]);
    });
  });

  describe('its configurable', () => {
    it('additional numbers', () => {
      fizzBuzz = new FizzBuzz({
        7: 'Foo',
        11: 'Boo'
      });
      expect(fizzBuzz.fizzBuzz(7)).toEqual('Foo');
      expect(fizzBuzz.fizzBuzz(11)).toEqual('Boo');
      expect(fizzBuzz.fizzBuzz(77)).toEqual('FooBoo');
      expect(fizzBuzz.fizzBuzz(3 * 5 * 7 * 11)).toEqual('FizzBuzzFooBoo');
    });
  });
});
