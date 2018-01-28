<div align="center">
	<h1>Prototyped.JS</h1>
	<p>Common <b>Typescript ready</b> prototypes available in both <b>ES6</b> and <b>ES5</b></p>
	<a href="https://www.npmjs.com/package/prototyped.js" target="_blank">
	   <img src="https://img.shields.io/npm/v/prototyped.js.svg" alt="npm version">
	</a>
	<a href="https://www.npmjs.com/package/prototyped.js" target="_blank">
	   <img src="https://img.shields.io/npm/dm/prototyped.js.svg" alt="npm monthly downloads">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js/stargazers" target="_blank">
	   <img src="https://img.shields.io/github/stars/ardalanamini/prototyped.js.svg" alt="github stars">
	</a>
	<a href="https://github.com/facebook/jest" target="_blank">
	   <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="tested with jest">
	</a>
	<a href="https://github.com/ardalanamini/prototyped.js/blob/master/LICENSE" target="_blank">
	   <img src="https://img.shields.io/github/license/ardalanamini/prototyped.js.svg" alt="tested with jest">
	</a>
</div>

[TOC]

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
