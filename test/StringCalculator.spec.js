const TestUtils = require('app-root-path').require('test/TestUtils');
const StringCalculator = require('app-root-path').require('src/StringCalculator');

describe('StringCalculator', () => {
  const params = [
    {
      description: 'empty string returns 0',
      input: '',
      result: 0
    },
    {
      description: 'null returns 0',
      input: null,
      result: 0
    },
    {
      description: 'undefined returns 0',
      input: undefined,
      result: 0
    },
    {
      description: 'single number returns number',
      input: '1',
      result: 1
    },
    {
      input: '2',
      result: 2
    },
    {
      input: '123',
      result: 123
    },
    {
      description: 'two numbers comma delimited returns the sum',
      input: '1,2',
      result: 3
    },
    {
      description: 'two numbers newline delimited returns the sum',
      input: '1\n2',
      result: 3
    },
    {
      description: 'three numbers delimited comma or newline returns the sum',
      input: '1\n2,3',
      result: 6
    },
    {
      input: '1,2\n3',
      result: 6
    },
    {
      description: 'numbers greater than 1000 are ignored',
      input: '1\n2,3,1001',
      result: 6
    },
    {
      description: 'custom single-char delimiter can be defined starting with // on the first line',
      input: '//#\n1#2',
      result: 3
    },
    {
      input: '//x\n1x2',
      result: 3
    },
    {
      description: 'custom multi-char delimiter can be defined starting with // on the first line',
      input: '//###\n1###2',
      result: 3
    },
    {
      input: '//xyz\n1xyz2',
      result: 3
    }
  ];

  TestUtils.parameterized('add', params, (index, param) => {
    expect(StringCalculator.add(param.input)).toEqual(param.result);
  });

  it('throws exception on negative numbers', () => {
    expect(() => StringCalculator.add('-1')).toThrow(new Error('negative numbers not supported'));
  });
});
