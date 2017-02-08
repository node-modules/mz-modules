'use strict';

const glob = require('glob');

module.exports = (pattern, options) => {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, matches) => {
      if (err) {
        reject(err);
      } else {
        resolve(matches);
      }
    });
  });
};
