'use strict';

const assert = require('assert');
const mz = require('..');

describe('test/index.test.js', () => {
  it('should exports', () => {
    const keys = Object.keys(mz);
    for (const key of keys) {
      console.log('export', key);
      assert(require('../' + key) === mz[key]);
    }
  });

  it('should check pkg.files', () => {
    const keys = Object.keys(mz);
    const pkg = require('../package.json');
    for (const key of keys) {
      assert(pkg.files.indexOf(key + '.js') > -1);
    }
  });
});
