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
});
