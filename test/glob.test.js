'use strict';

const path = require('path');
const assert = require('assert');
const fs = require('mz/fs');
const mm = require('mm');
const mz = require('..');
const fixtures = path.join(__dirname, 'fixtures');

describe('test/glob.test.js', () => {
  const tmp = path.join(fixtures, 'a/b/c');
  beforeEach(() => mz.mkdirp(tmp));
  beforeEach(done => fs.writeFile(path.join(tmp, 'a.js'), '', done));
  beforeEach(done => fs.writeFile(path.join(tmp, '.dotfile'), '', done));
  afterEach(mm.restore);
  afterEach(() => mz.rimraf(path.join(fixtures, 'a')));

  it('should glob', function* () {
    const files = yield mz.glob(`${fixtures}/**/c`);
    assert(files.length === 1);
    assert(files[0] === tmp);
  });

  it('should glob with option', function* () {
    const files = yield mz.glob(`${fixtures}/**/*`, { dot: true });
    assert(files.length === 5);
  });

  it('should error', function* () {
    mm(require('fs'), 'readdir', function(_, cb) {
      cb(new Error('readdir error'));
    });
    try {
      yield mz.glob(`${fixtures}/**/c`);
      throw new Error('should not run');
    } catch (err) {
      assert(err.message === 'readdir error');
    }
  });

});
