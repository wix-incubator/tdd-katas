const Greeter = require('./Greeter');

describe('Greeter', () => {
  let uut;
  let date;
  let logger;

  beforeEach(() => {
    date = new Date();
    date.setHours(14);
    date.setMinutes(0);

    logger = {
      log: jest.fn()
    };

    uut = new Greeter(() => date.getTime(), logger);
  });

  it('says Hello and name', () => {
    expect(uut.greet('Daniel')).toEqual('Hello Daniel!');
    expect(uut.greet('Bob')).toEqual('Hello Bob!');
  });

  it('capitalizes name', () => {
    expect(uut.greet('daniel')).toEqual('Hello Daniel!');
  });

  it('trims the name', () => {
    expect(uut.greet('  daniel\t\n  ')).toEqual('Hello Daniel!');
  });

  it('says morning greeting', () => {
    date.setHours(6);
    expect(uut.greet('bob')).toEqual('Good morning Bob!');

    date.setHours(7);
    expect(uut.greet('bob')).toEqual('Good morning Bob!');

    date.setHours(11);
    date.setMinutes(59);
    expect(uut.greet('bob')).toEqual('Good morning Bob!');
  });

  it('says evening greeting', () => {
    date.setHours(18);
    date.setMinutes(0);
    expect(uut.greet('bob')).toEqual('Good evening Bob!');
    date.setHours(21);
    date.setMinutes(59);
    expect(uut.greet('bob')).toEqual('Good evening Bob!');
  });

  it('says night greeting', () => {
    date.setHours(22);
    date.setMinutes(0);
    expect(uut.greet('bob')).toEqual('Good night Bob!');
    date.setHours(1);
    expect(uut.greet('bob')).toEqual('Good night Bob!');
  });

  it('logs each call', () => {
    expect(logger.log).not.toHaveBeenCalled();
    uut.greet('gandalf');
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith('greeted Gandalf');
  });
});
