'use strict';

const mkdirp = require('mkdirp');

module.exports = (dir, options) => {
  return new Promise((resolve, reject) => {
    mkdirp(dir, options, (err, made) => {
      if (err) {
        reject(err);
      } else {
        resolve(made);
      }
    });
  });
};
