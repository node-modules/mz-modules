'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const mz = require('..');
const fixtures = path.join(__dirname, 'fixtures');

describe('test/pump.test.js', () => {
  const tmp = path.join(fixtures, 'pump_tmp');
  beforeEach(() => mz.mkdirp(tmp));
  afterEach(() => mz.rimraf(tmp));

  it('should pump work', function* () {
    const sourcePath = path.join(__dirname, 'pump.test.js');
    const destPath = path.join(tmp, 'pump.test.js');
    const source = fs.createReadStream(sourcePath);
    const dest = fs.createWriteStream(destPath);
    yield mz.pump(source, dest);
    assert(fs.readFileSync(destPath, 'utf-8') === fs.readFileSync(sourcePath, 'utf-8'));
  });

  it('should pump throw error if dest close', function* () {
    const sourcePath = path.join(__dirname, 'pump.test.js');
    const destPath = path.join(tmp, 'pump.test.js');
    const source = fs.createReadStream(sourcePath);
    const dest = fs.createWriteStream(destPath);
    process.nextTick(() => {
      dest.destroy();
    });

    let err;
    try {
      yield mz.pump(source, dest);
    } catch (e) {
      err = e;
    }

    assert(err);
  });

  it('should pump throw error if source close', function* () {
    const sourcePath = path.join(__dirname, 'pump.test.js');
    const destPath = path.join(tmp, 'pump.test.js');
    const source = fs.createReadStream(sourcePath);
    const dest = fs.createWriteStream(destPath);
    process.nextTick(() => {
      source.destroy();
    });

    let err;
    try {
      yield mz.pump(source, dest);
    } catch (e) {
      err = e;
    }

    assert(err);
  });
});
