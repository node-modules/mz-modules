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

  it.only('should test running order', done => {
    const arr = [];
    process.nextTick(() => arr.push('process.nextTick1'));
    mz.nextTick().then(() => arr.push('mz.nextTick1'));
    new Promise(resolve => process.nextTick(resolve)).then(() => arr.push('promise-nextTick'));
    mz.nextTick().then(() => arr.push('mz.nextTick2'));
    process.nextTick(() => arr.push('process.nextTick2'));
    setTimeout(() => {
      assert.deepEqual(arr, [ 'process.nextTick1', 'process.nextTick2', 'mz.nextTick1', 'mz.nextTick2', 'promise-nextTick' ]);
      done();
    }, 10);
  });

});
