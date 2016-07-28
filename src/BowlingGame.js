class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  getScore() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._isStrike(frameIndex)) {
        score += 10 + this._strikeBonus(frameIndex);
        frameIndex++;
      } else if (this._isSpare(frameIndex)) {
        score += 10 + this._spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this._sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  _sumOfBallsInFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  _spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }

  _strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  _isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }

  _isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
}

module.exports = BowlingGame;
