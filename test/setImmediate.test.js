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

  it('should test running order', done => {
    const arr = [];
    setImmediate(() => arr.push('setImmediate'));
    mz.setImmediate().then(() => arr.push('mz.setImmediate'));
    mz.nextTick().then(() => arr.push('mz.nextTick'));
    setTimeout(() => {
      assert.deepEqual(arr, [ 'mz.nextTick', 'setImmediate', 'mz.setImmediate' ]);
      done();
    }, 10);
  });
});
