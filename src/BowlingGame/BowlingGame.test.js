const BowlingGame = require('./BowlingGame');

describe('BowlingGame', () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('gutter game', () => {
    rollMany(20, 0);
    expect(game.getScore()).toEqual(0);
  });

  it('all 1s', () => {
    rollMany(20, 1);
    expect(game.getScore()).toEqual(20);
  });

  it('one spare', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.getScore()).toEqual(16);
  });

  it('one strike', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.getScore()).toEqual(24);
  });

  it('perfect game', () => {
    rollMany(12, 10);
    expect(game.getScore()).toEqual(300);
  });

  function rollMany(n, pins) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
