# Changelog

## [v0.11.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.11.0) *(2018-07-16)*

**Implemented enhancements:**

- `Array.prototype`
  - Added `equals`
- `Date.prototype`
  - Added `equals`
- `Number.prototype`
  - Added `inRange`
- `Object.prototype`
  - Added `$equals`
- `String.prototype`
  - Added `equals`
  - Added `parseInt`

## [v0.10.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.10.0) *(2018-06-01)*

**Implemented enhancements:**

- better object value path handling
- `Array`
  - removed function `isInstance`
- `Boolean`
  - renamed `isInstance` to `isBoolean`
- `Date`
  - renamed `isInstance` to `isDate`
- `Function`
  - renamed `isInstance` to `isFunction`
- `Global`
  - Added `isBrowser`
- `Number`
  - renamed `isInstance` to `isNumber`
- `Object`
  - renamed `isInstance` to `isObject`
- `String`
  - renamed `isInstance` to `isString`
- `Object.prototype`
  - function `$set` added

## [v0.9.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.9.0) *(2018-05-29)*

**Implemented enhancements:**

- `Array.prototype`
  - function `empty` added
- `Number`
  - function `digitize` added
- `Object.prototype`
  - function `$empty` added
- `String.prototype`
  - function `empty` added
  - function `pad` added
  - function `repeat` added

## [v0.8.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.8.0) *(2018-05-25)*

**Implemented enhancements:**

- `Array.prototype`
  - function `nest` added
- `Object.prototype`
  - function `$merge` improved
  - function `$clone` added
  - function `$equals` added
  - function `$get` added
  - function `$omit` added

## [v0.7.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.7.0) *(2018-05-20)*

**Implemented enhancements:**

- `Object.prototype`
  - function `$camelCaseKeys` added
  - function `$kebabCaseKeys` added
  - function `$snakeCaseKeys` added

## [v0.6.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.6.0) *(2018-05-11)*

**Implemented enhancements:**

- `Array.prototype`
  - function `limit` added
  - function `take` added
  - function `orderBy` added
  - function `skip` added
  - function `offset` added
  - function `where` added
  - function `whereBetween` added
  - function `whereIn` added
  - function `whereLike` added
  - function `whereNotBetween` added
  - function `whereNotIn` added
  - function `whereNotLike` added
  - function `whereNotNull` added
  - function `whereNull` added

## [v0.5.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.5.0) *(2018-04-13)*

**Implemented enhancements:**

- `Array.prototype`
  - function `all` added
  - function `any` added
- `Object.prototype`
  - function `invert` renamed into `$invert`
  - function `lowerCaseKeys` renamed into `$lowerCaseKeys`
  - function `mapKeys` renamed into `$mapKeys`
    - function `merge` renamed into `$merge`
    - function `size` renamed into `$size`
- `String.prototype`
  - function `base64` added
  - function `base64Decode` added
    - function `map` added
    - function `pluralize` improved
- some general enhancements

**Fixed bugs:**

- typescript usage

## [v0.4.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.4.0) *(2018-01-28)*

**Implemented enhancements:**

- more customizable usage
- `String.prototype`
  - function `truncate` parameter `truncateString` added
  - function `chars` added
  - function `swapCase` added
  - function `humanize` added

## [v0.3.2](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.2) *(2018-01-25)*

**Implemented enhancements:**

- `Array.prototype`
  - function `initial` added
  - function `tail` added
  - function `append` added
- `String.prototype`
  - function `contains` added

## [v0.3.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.1) *(2018-01-24)*

**Implemented enhancements:**

- es6 usage is now available along side es5 (dist)

**Fixed bugs:**

- typescript usage

## [v0.3.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.0) *(2018-01-24)*

**Implemented enhancements:**

- `Array`
  - function `isInstance` added
  - `prototype`
    - function `avg` added (alias of `Math.average`)
- `String`
  - function `isInstance` added
- `Object`
  - function `isInstance` added
- `Function`
  - function `isInstance` added
  - `prototype`
    - method `called` added
    - function `once` added
    - function `defer` added
    - method `cached` added
    - function `cache` added
- `Boolean`
  - function `isInstance` added
- `Number`
  - function `isInstance` added
- `Date`
  - function `isInstance` added
- `Math`
  - function `average` added
  - function `avg` added (alias of `Math.average`)
  - function `factorial` added
  - function `fibonacci` added
  - function `gcd` added
  - function `lcm` added
  - function `isEven` added
  - function `isPrime` added

## [v0.2.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.2.0) *(2018-01-18)*

**Implemented enhancements:**

- added tests
- `Array.prototype`
  - function `sum` added
  - function `average` added
  - function `max` added
  - function `min` added
  - function `contains` added
  - function `crossJoin` added
  - function `get` added
  - function `implode` added
  - function `clone` added
  - function `median` added
  - function `pad` added
  - function `prepend` added

**Fixed bugs:**

- `Array.prototype`
  - function `pluck` document examples
  - function `chunk` name
- `String.prototype`
  - function `decapitalize` returning the capitalized string

## [v0.1.2](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.1.2) *(2018-01-15)*

- Fix project name in README.md

## [v0.1.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.1.1) *(2018-01-15)*

- Update README.md usage

## [v0.1.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.1.0) *(2018-01-15)*

- First release
