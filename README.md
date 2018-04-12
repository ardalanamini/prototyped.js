<div align="center">
	<h1>Prototyped.JS</h1>
	<p>Common <b>Typescript ready</b> prototypes available in <b>ES5</b> and <b>ES6</b>, <b>Server-Side</b> and <b>Client-Side</b></p>
	<a href="https://www.npmjs.com/package/prototyped.js" target="_blank">
	   <img src="https://img.shields.io/npm/v/prototyped.js.svg" alt="npm version">
	</a>
	<a href="https://www.typescriptlang.org" target="_blank">
		<img src="https://img.shields.io/npm/types/prototyped.js.svg" alt="typescript version">
	</a>
	<a href="http://packagequality.com/#?package=prototyped.js" target="_blank">
		<img src="http://npm.packagequality.com/shield/prototyped.js.svg" alt="package quality">
	</a>
	<a href="https://www.npmjs.com/package/prototyped.js" target="_blank">
		<img src="https://img.shields.io/npm/dt/prototyped.js.svg" alt="npm downloads">
	</a>
	<a href="https://www.npmjs.com/package/prototyped.js" target="_blank">
	   <img src="https://img.shields.io/npm/dm/prototyped.js.svg" alt="npm monthly downloads">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js/issues?q=is%3Aopen+is%3Aissue" target="_blank">
		<img src="https://img.shields.io/github/issues-raw/ardalanamini/prototyped.js.svg" alt="open issues">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js/issues?q=is%3Aissue+is%3Aclosed" target="_blank">
		<img src="https://img.shields.io/github/issues-closed-raw/ardalanamini/prototyped.js.svg" alt="closed issues">
	</a>
	<a href="https://github.com/facebook/jest" target="_blank">
	   <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="tested with jest">
	</a><a href="https://snyk.io/test/github/ardalanamini/prototyped.js?targetFile=package.json" target="_blank">
		<img src="https://snyk.io/test/github/ardalanamini/prototyped.js/badge.svg?targetFile=package.json" alt="known vulnerabilities" data-canonical-src="https://snyk.io/test/github/ardalanamini/prototyped.js?targetFile=package.json" style="max-width:100%;">
	</a>
	<a href="https://david-dm.org/ardalanamini/prototyped.js" target="_blank">
		<img src="https://david-dm.org/ardalanamini/prototyped.js.svg" alt="dependencies status">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js/pulls" target="_blank">
		<img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg" alt="pull requests">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js/blob/master/LICENSE" target="_blank">
		<img src="https://img.shields.io/github/license/ardalanamini/prototyped.js.svg" alt="license">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js" target="_blank">
		<img src="https://img.shields.io/github/stars/ardalanamini/prototyped.js.svg?style=social&label=Stars" alt="github stars">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js" target="_blank">
		<img src="https://img.shields.io/github/forks/ardalanamini/prototyped.js.svg?style=social&label=Fork" alt="github stars">
	</a>
	<br>
</div>

- - -

> if you have a method you think needs to be a part of this package, feel free to contribute

## Installation

```bash
npm i -s prototyped.js
```

## Usage

import all prototypes

```javascript
// es5 (default)
require('prototyped.js');
import 'prototyped.js';

// es6
require('prototyped.js/es6');
import 'prototyped.js/es6';

console.log('hello world!'.words()); // ['hello', 'world']
```

or simply import the prototypes you want

```javascript
require('prototyped.js/dist/string');
// or
require('prototyped.js/dist/string/words');

console.log('hello world!'.words()); // ['hello', 'world']
```

All documents are available at [API.md](https://github.com/ardalanamini/prototyped.js/blob/master/API.md)
