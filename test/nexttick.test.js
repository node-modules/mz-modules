'use strict';

const assert = require('assert');
const mz = require('..');

describe('test/nexttick.test.js', () => {
  it('should nextTick', done => {
    let isRun = false;
    mz.nexttick().then(() => {
      assert(isRun);
      done();
    });
    isRun = true;
  });
});
