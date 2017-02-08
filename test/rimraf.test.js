'use strict';

const path = require('path');
const assert = require('assert');
const fs = require('mz/fs');
const mz = require('..');
const fixtures = path.join(__dirname, 'fixtures');

describe('test/rimraf.test.js', () => {
  const tmp = path.join(fixtures, 'a/b/c');
  beforeEach(() => mz.mkdirp(tmp));
  afterEach(() => mz.rimraf(path.join(fixtures, 'a')));

  it('should rimraf', function* () {
    yield mz.rimraf(tmp);
    assert(!(yield fs.exists(tmp)));
  });

  it('should rimraf with option', function* () {
    yield mz.rimraf(`${fixtures}/**/c`, { glob: false });
    assert(yield fs.exists(tmp));
  });

});
