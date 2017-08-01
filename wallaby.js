module.exports = function () {
  return {
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    files: [
      './package.json',
      'src/**/*.js',
      '!src/**/*.test.js'
    ],

    tests: [
      'src/**/*.test.js'
    ],

    setup: (w) => {
      w.testFramework.configure(require('./package.json').jest);
    }
  };
};
