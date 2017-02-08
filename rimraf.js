'use strict';

const rimraf = require('rimraf');

module.exports = (dir, options) => {
  options = options || {};
  return new Promise((resolve, reject) => {
    rimraf(dir, options, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
