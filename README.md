# Prototyped.js [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Common%20Typescript%20ready%20prototypes%20available%20in%20ES5%20and%20ES6,%20Server-Side%20and%20Client-Side&url=https://github.com/ardalanamini/prototyped.js&via=ardalanamini&hashtags=prototype,nodejs,web,typescript,es5,es6,server-side,client-side,developers,fast)

Common **Typescript ready** prototypes available in **ES5** and **ES6**, **Server-Side** and **Client-Side**

[![Npm Version](https://img.shields.io/npm/v/prototyped.js.svg)](https://www.npmjs.com/package/prototyped.js)
[![TypeScript Version](https://img.shields.io/npm/types/prototyped.js.svg)](https://www.typescriptlang.org)
[![Build Status](https://api.travis-ci.com/ardalanamini/prototyped.js.svg?branch=master)](https://travis-ci.com/ardalanamini/prototyped.js)
[![Coverage Status](https://codecov.io/gh/ardalanamini/prototyped.js/branch/master/graph/badge.svg)](https://codecov.io/gh/ardalanamini/prototyped.js)
[![Package Quality](https://npm.packagequality.com/shield/prototyped.js.svg)](https://packagequality.com/#?package=prototyped.js)
[![Npm Total Downloads](https://img.shields.io/npm/dt/prototyped.js.svg)](https://www.npmjs.com/package/prototyped.js)
[![Npm Monthly Downloads](https://img.shields.io/npm/dm/prototyped.js.svg)](https://www.npmjs.com/package/prototyped.js)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/prototyped.js.svg)](https://www.npmjs.com/package/prototyped.js)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/prototyped.js.svg)](https://www.npmjs.com/package/prototyped.js)
[![Open Issues](https://img.shields.io/github/issues-raw/ardalanamini/prototyped.js.svg)](https://github.com/ardalanamini/prototyped.js/issues?q=is%3Aopen+is%3Aissue)
[![Closed Issues](https://img.shields.io/github/issues-closed-raw/ardalanamini/prototyped.js.svg)](https://github.com/ardalanamini/prototyped.js/issues?q=is%3Aissue+is%3Aclosed)
[![Tested With Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Known Vulnerabilities](https://snyk.io/test/github/ardalanamini/prototyped.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ardalanamini/prototyped.js?targetFile=package.json)
[![Dependencies Status](https://david-dm.org/ardalanamini/prototyped.js.svg)](https://david-dm.org/ardalanamini/prototyped.js)
[![Pull Requests](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/ardalanamini/prototyped.js/pulls)
[![License](https://img.shields.io/github/license/ardalanamini/prototyped.js.svg)](https://github.com/ardalanamini/prototyped.js/blob/master/LICENSE)
[![Github Stars](https://img.shields.io/github/stars/ardalanamini/prototyped.js.svg?style=social&label=Stars)](https://github.com/ardalanamini/prototyped.js)
[![Github Forks](https://img.shields.io/github/forks/ardalanamini/prototyped.js.svg?style=social&label=Fork)](https://github.com/ardalanamini/prototyped.js)

**More than `100` useful methods collected in one place**

> if you have a method you think needs to be a part of this package, feel free to contribute

## Table of Content <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Support](#support)

## Installation

```bash
npm i -s prototyped.js
```

## Usage

import all prototypes

```javascript
// es6 (default)
require('prototyped.js');
import 'prototyped.js';

// es5
require('prototyped.js/es5');
import 'prototyped.js/es5';

console.log('hello world!'.words()); // ['hello', 'world']
```

or simply import the prototypes you want

```javascript
require('prototyped.js/es6/string');
// or
require('prototyped.js/es5/string/words');

console.log('hello world!'.words()); // ['hello', 'world']
```

even better, just import the method you want

```javascript
const words = require('prototyped.js/es6/string/words/method');

console.log(words('hello world!')); // ['hello', 'world']

const methods = require('prototyped.js/es5/methods');

console.log(methods.string.words('hello world!')); // ['hello', 'world']
```

**All documents are available at [here](https://prototyped.js.org)**

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available, see the [tags on this repository](https://github.com/ardalanamini/prototyped.js/tags).

## Authors

- **Ardalan Amini** - *Owner/Developer* - [@ardalanamini](https://github.com/ardalanamini)

See also the list of [contributors](https://github.com/ardalanamini/prototyped.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Support

If my work helps you, please consider

[![Become A Patron](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/ardalanamini)

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/ardalanamini)
