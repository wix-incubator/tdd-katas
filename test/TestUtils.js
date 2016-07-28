require('jasmine-expect');
import _ from 'lodash';
const appRootPath = require('app-root-path');
const proxyquireLib = require('proxyquire');

module.exports = {

  asyncSpec: (fn) => {
    return async(done) => {
      try {
        await fn();
        done();
      } catch (err) {
        done.fail(err);
      }
    };
  },

  proxyquire: (path, imports) => {
    return proxyquireLib.noCallThru().noPreserveCache()(appRootPath.resolve(path), imports);
  },

  parameterized: (name, params, test) => {
    _.forEach(params,
      (param, index) => {
        it(`${index}:${name}  ${(param.description || '')}`, () => {
          test(index, param);
        });
      }
    );
  }
};
