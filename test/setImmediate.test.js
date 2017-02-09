'use strict';

const assert = require('assert');
const mz = require('..');

describe('test/setImmediate.test.js', () => {
  it('should setImmediate async', done => {
    let isRun = false;
    mz.setImmediate().then(() => {
      assert(isRun);
      done();
    });
    isRun = true;
  });

  it('should setImmediate after nextTick', done => {
    let calledBy = '';
    mz.nextTick().then(() => {
      calledBy = 'nextTick';
    });
    mz.setImmediate().then(() => {
      calledBy = 'setImmediate';
    });
    setTimeout(() => {
      assert(calledBy === 'setImmediate');
      done();
    }, 10);
  });
});
