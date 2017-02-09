'use strict';

const assert = require('assert');
const mz = require('..');

describe('test/nextTick.test.js', () => {
  it('should nextTick async', done => {
    let isRun = false;
    mz.nextTick().then(() => {
      assert(isRun);
      done();
    });
    isRun = true;
  });
});
