'use strict';

const path = require('path');
const assert = require('assert');
const fs = require('mz/fs');
const rimraf = require('rimraf');
const os = require('os');
const mz = require('..');
const fixtures = path.join(__dirname, 'fixtures');

describe('test/mkdirp.test.js', () => {
  const tmp = path.join(fixtures, 'a/b/c');
  afterEach(done => rimraf(path.join(fixtures, 'a'), done));

  it('should mkdir', function* () {
    const made = yield mz.mkdirp(tmp);
    assert(made === path.join(fixtures, 'a'));
    assert(yield fs.exists(tmp));
  });

  it('should mkdir.sync', function* () {
    const made = mz.mkdirp.sync(tmp);
    assert(made === path.join(fixtures, 'a'));
    assert(yield fs.exists(tmp));
  });

  if (os.platform() === 'win32') return;

  it('should mkdir with option', function* () {
    yield mz.mkdirp(tmp, { mode: 0o744 }); // drwxr--r--
    const stat = yield fs.stat(tmp);
    // https://github.com/TooTallNate/stat-mode/blob/master/index.js#L133
    /* eslint no-bitwise: "off" */
    const octal = stat.mode & 0o777;
    assert(octal.toString(8) === '744');
  });

  it('should mkdir error', function* () {
    try {
      yield mz.mkdirp(tmp, { mode: 0o222 });
      throw new Error('should not run');
    } catch (err) {
      assert(/EACCES: permission denied/.test(err.message));
    }
  });
});
