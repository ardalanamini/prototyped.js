# Prototyped.js [![Tweet][twitter-badge]][twitter-url]

Common **Typescript ready** helpers & prototypes available for both **Server-Side** and **Client-Side** applications.

[![Npm Version][npm-badge]][npm-url]
[![Build Status][build-badge]][build-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![TypeScript Version][typescript-badge]][typescript-url]
[![Tested With Jest][jest-badge]][jest-url]
[![Npm Total Downloads][npm-total-downloads-badge]][npm-url]
[![Npm Monthly Downloads][npm-monthly-downloads-badge]][npm-url]
[![npm bundle size (minified)][bundle-size-badge]][npm-url]
[![npm bundle size (minified + gzip)][bundle-size-gzip-badge]][npm-url]
[![Open Issues][issues-badge]][issues-url]
[![License][license-badge]][license-url]
[![Github Stars][github-stars-badge]][github-url]
[![Github Forks][github-forks-badge]][github-url]

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
// es6
import "prototyped.js/dist/shim";

// or es5
require("prototyped.js/dist/shim");

console.log("hello world!".words()); // ['hello', 'world']
```

or simply import the prototypes you want

```javascript
require("prototyped.js/dist/string/shim");
// or
require("prototyped.js/dist/string/words/shim");

console.log("hello world!".words()); // ['hello', 'world']
```

even better, just import the method you want

```javascript
const words = require("prototyped.js/dist/string/words");

console.log(words("hello world!")); // ['hello', 'world']

const string = require("prototyped.js/dist/string");

console.log(string.words("hello world!")); // ['hello', 'world']

const pt = require("prototyped.js");

console.log(pt.string.words("hello world!")); // ['hello', 'world']
```

**All documents are available at [here][documents-url]**

## Versioning

We use [SemVer][semver-url] for versioning. For the versions available, see
the [releases on this repository][releases-url].

## Authors

- **Ardalan Amini** - _Core Maintainer_ - [@ardalanamini](https://github.com/ardalanamini)

See also the list of [contributors][contributors-url] who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE][license-url] file for details

## Support

If my work helps you, please consider

[![Become A Patron](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/ardalanamini)

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/ardalanamini)


[documents-url]: https://prototyped.js.org

[releases-url]: https://github.com/ardalanamini/prototyped.js/releases

[contributors-url]: https://github.com/ardalanamini/prototyped.js/contributors

[semver-url]: http://semver.org

[twitter-badge]: https://img.shields.io/twitter/url/http/shields.io.svg?style=social

[twitter-url]: https://twitter.com/intent/tweet?text=Common%20Typescript%20ready%20prototypes%20available%20in%20ES5%20and%20ES6,%20Server-Side%20and%20Client-Side&url=https://github.com/ardalanamini/prototyped.js&via=ardalanamini&hashtags=prototype,nodejs,web,typescript,es5,es6,server-side,client-side,developers,fast

[npm-badge]: https://img.shields.io/npm/v/prototyped.js.svg

[npm-url]: https://www.npmjs.com/package/prototyped.js

[build-badge]: https://github.com/ardalanamini/prototyped.js/workflows/Test/badge.svg

[build-url]: https://github.com/ardalanamini/prototyped.js/actions

[coverage-badge]: https://codecov.io/gh/ardalanamini/prototyped.js/branch/master/graph/badge.svg

[coverage-url]: https://codecov.io/gh/ardalanamini/prototyped.js

[typescript-badge]: https://img.shields.io/npm/types/prototyped.js.svg

[typescript-url]: https://www.typescriptlang.org

[jest-badge]: https://img.shields.io/badge/tested_with-jest-99424f.svg

[jest-url]: https://github.com/facebook/jest

[npm-total-downloads-badge]: https://img.shields.io/npm/dt/prototyped.js.svg

[npm-monthly-downloads-badge]: https://img.shields.io/npm/dm/prototyped.js.svg

[bundle-size-badge]: https://img.shields.io/bundlephobia/min/prototyped.js.svg

[bundle-size-gzip-badge]: https://img.shields.io/bundlephobia/minzip/prototyped.js.svg

[issues-badge]: https://img.shields.io/github/issues-raw/ardalanamini/prototyped.js.svg

[issues-url]: https://github.com/ardalanamini/prototyped.js/issues?q=is%3Aopen+is%3Aissue

[license-badge]: https://img.shields.io/github/license/ardalanamini/prototyped.js.svg

[license-url]: https://github.com/ardalanamini/prototyped.js/blob/master/LICENSE

[github-stars-badge]: https://img.shields.io/github/stars/ardalanamini/prototyped.js.svg?style=social&label=Stars

[github-forks-badge]: https://img.shields.io/github/forks/ardalanamini/prototyped.js.svg?style=social&label=Fork

[github-url]: https://github.com/ardalanamini/prototyped.js
