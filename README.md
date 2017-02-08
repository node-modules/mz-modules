# mz-modules


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/mz-modules.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mz-modules
[travis-image]: https://img.shields.io/travis/node-modules/mz-modules.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/mz-modules
[codecov-image]: https://codecov.io/gh/node-modules/mz-modules/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/node-modules/mz-modules
[david-image]: https://img.shields.io/david/node-modules/mz-modules.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/mz-modules
[snyk-image]: https://snyk.io/test/npm/mz-modules/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/mz-modules
[download-image]: https://img.shields.io/npm/dm/mz-modules.svg?style=flat-square
[download-url]: https://npmjs.org/package/mz-modules

Same as [mz], but wrap modules in the world rather than core API.

## Usage

Install it

```bash
$ npm i mz-modules
```

Require it

```js
const mkdirp = require('mz-modules/mkdirp');
```

You can also require it from the main entry, but it will load other modules in mz-modules.

```js
const mkdirp = require('mz-modules').mkdirp;
```

## Modules

- 
