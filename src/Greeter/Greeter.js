const _ = require('lodash');

class Greeter {
  constructor(getCurrentTimeMillisFn, logger) {
    this.getCurrentTimeMillisFn = getCurrentTimeMillisFn;
    this.logger = logger;
  }

  greet(name) {
    const theName = _.capitalize(_.trim(name));

    const currentTime = new Date(this.getCurrentTimeMillisFn());
    const hourOfDay = currentTime.getHours();

    this.logger.log(`greeted ${theName}`);
    const greeting = this._getGreeting(hourOfDay);

    return `${greeting} ${theName}!`;
  }

  _getGreeting(hourOfDay) {
    let greeting;
    if (hourOfDay >= 6 && hourOfDay < 12) {
      greeting = 'Good morning';
    } else if (hourOfDay >= 12 && hourOfDay < 18) {
      greeting = 'Hello';
    } else if (hourOfDay >= 18 && hourOfDay < 22) {
      greeting = 'Good evening';
    } else {
      greeting = 'Good night';
    }

    return greeting;
  }
}

module.exports = Greeter;
