# Changelog

## Emojis

- New Features -> :zap:
- Enhancements -> :star2:
- Breaking Changes -> :boom:
- Bugs -> :beetle:
- Pull Requests -> :book:
- Documents -> :mortar_board:
- Tests -> :eyeglasses:

---

## [v0.17.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.17.0) - *(2018-08-17)*

- `Array`
  - `prototype`
    - :star2: `distinct` method can get an argument to unique the array by that
- `Number`
  - `prototype`
    - :zap: `equals` Added
- `Object`
  - `prototype`
    - :zap: `$reduce` Added
- `String`
  - `prototype`
    - :zap: `reduce` Added
- :star2: Some general enhancements

## [v0.16.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.16.0) - *(2018-08-15)*

- `Array`
  - `prototype`
    - :zap: `sortBy` Added
    - :star2: `clone` Added support for deep cloning
- `Number`
  - :boom: `digitize` Moved to `Number.prototype`
  - :boom: `inRange` Moved to `Number.prototype`
- `Object`
  - `prototype`
    - :beetle: `$clone` Fixed deep cloning bug

## [v0.14.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.14.1) - *(2018-08-11)*

- `String`
  - `prototype`
    - :beetle: `camelCase` Fixed regex bug
    - :beetle: `kebabCase` Fixed regex bug
    - :beetle: `snakeCase` Fixed regex bug

## [v0.14.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.14.0) - *(2018-08-10)*

- `Date`
  - :zap: `today` Added
  - :zap: `tomorrow` Added
  - :zap: `yesterday` Added
- `Math`
  - :zap: `degreesToRads` Added
  - :zap: `isDivisible` Added
  - :zap: `primes` Added
  - :zap: `radsToDegrees` Added
- `Object`
  - `prototype`
    - :boom: `$map` Renamed to `$mapValues`
    - :zap: `$map` Added
    - :zap: `isObjectLike` Added
    - :zap: `isPlainObject` Added
    - :zap: `$values` Added
- `String`
  - `prototype`
    - :zap: `forEach` Added
- :mortar_board: Improved documents

## [v0.13.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.13.0) - *(2018-08-01)*

- `String`
  - `prototype`
    - :boom: `empty` Renamed to `isEmpty`
- `Array`
  - `prototype`
    - :boom: `empty` Renamed to `isEmpty`
    - :zap: `empty` Added
- `Object`
  - `prototype`
    - :boom: `$empty` Renamed to `$isEmpty`
    - :zap: `$empty` Added
- `Number`
  - :beetle: `isNumber` Fixed considering numeral strings as number

## [v0.12.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.12.1) - *(2018-07-31)*

- `Array`
  - `prototype`
    - :beetle: `nest` Fixed finding children of children bug

## [v0.12.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.12.0) - *(2018-07-26)*

- `Object`
  - `prototype`
    - :zap: `$assign` Added
    - :zap: `$defaults` Added
    - :zap: `$keys` Added

## [v0.11.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.11.0) - *(2018-07-16)*

- `Array`
  - `prototype`
    - :zap: `equals` Added
- `Date`
  - `prototype`
    - :zap: `equals` Added
- `Number`
  - `prototype`
    - :zap: `inRange` Added
- `Object`
  - `prototype`
    - :zap: `$equals` Added
- `String`
  - `prototype`
    - :zap: `equals` Added
    - :zap: `parseInt` Added

## [v0.10.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.10.0) - *(2018-06-01)*

- `Array`
  - :boom: `isInstance` Removed
- `Boolean`
  - :boom: `isInstance` Renamed to `isBoolean`
- `Date`
  - :boom: `isInstance` Renamed to `isDate`
- `Function`
  - :boom: `isInstance` Renamed to `isFunction`
- `Global`
  - :zap: Added `isBrowser`
- `Number`
  - :boom: `isInstance` Renamed to `isNumber`
- `Object`
  - :boom: `isInstance` Renamed to `isObject`
  - `prototype`
    - :zap: `$set` Added
- `String`
  - :boom: `isInstance` Renamed to `isString`
- :star2: Better object value path handling

## [v0.9.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.9.0) - *(2018-05-29)*

- `Array`
  - `prototype`
    - :zap: `empty` Added
- `Number`
  - :zap: `digitize` Added
- `Object`
  - `prototype`
    - :zap: `$empty` Added
- `String`
  - `prototype`
    - :zap: `empty` Added
    - :zap: `pad` Added
    - :zap: `repeat` Added

## [v0.8.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.8.0) - *(2018-05-25)*

- `Array`
  - `prototype`
    - :zap: `nest` Added
- `Object`
  - `prototype`
    - :star2: `$merge` Improved
    - :zap: `$clone` Added
    - :zap: `$equals` Added
    - :zap: `$get` Added
    - :zap: `$omit` Added

## [v0.7.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.7.0) - *(2018-05-20)*

- `Object`
  - `prototype`
    - :zap: `$camelCaseKeys` Added
    - :zap: `$kebabCaseKeys` Added
    - :zap: `$snakeCaseKeys` Added

## [v0.6.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.6.0) - *(2018-05-11)*

- `Array`
  - `prototype`
    - :zap: `limit` Added
    - :zap: `take` Added
    - :zap: `orderBy` Added
    - :zap: `skip` Added
    - :zap: `offset` Added
    - :zap: `where` Added
    - :zap: `whereBetween` Added
    - :zap: `whereIn` Added
    - :zap: `whereLike` Added
    - :zap: `whereNotBetween` Added
    - :zap: `whereNotIn` Added
    - :zap: `whereNotLike` Added
    - :zap: `whereNotNull` Added
    - :zap: `whereNull` Added

## [v0.5.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.5.0) - *(2018-04-13)*

- `Array`
  - `prototype`
    - :zap: `all` Added
    - :zap: `any` Added
- `Object`
  - `prototype`
    - :boom: `invert` Renamed to `$invert`
    - :boom: `lowerCaseKeys` Renamed to `$lowerCaseKeys`
    - :boom: `mapKeys` Renamed to `$mapKeys`
    - :boom: `merge` Renamed to `$merge`
    - :boom: `size` Renamed to `$size`
- `String`
  - `prototype`
    - :zap: `base64` Added
    - :zap: `base64Decode` Added
    - :zap: `map` Added
    - :star2: `pluralize` Improved
- :star2: Some general enhancements
- :beetle: Typescript usage

## [v0.4.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.4.0) - *(2018-01-28)*

- `String`
  - `prototype`
    - :star2: `truncate` Improved
    - :zap: `chars` Added
    - :zap: `swapCase` Added
    - :zap: `humanize` Added
- :star2: More customizable usage

## [v0.3.2](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.2) - *(2018-01-25)*

- `Array`
  - `prototype`
    - :zap: `initial` Added
    - :zap: `tail` Added
    - :zap: `append` Added
- `String`
  - `prototype`
    - :zap: `contains` Added

## [v0.3.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.1) - *(2018-01-24)*

- :star2: `es6` Usage is now available along side `es5` (`dist`)
- :beetle: Typescript usage

## [v0.3.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.0) - *(2018-01-24)*

- `Array`
  - :zap: `isInstance` Added
  - `prototype`
    - :zap: `avg` Added (alias of `Math.average`)
- `String`
  - :zap: `isInstance` Added
- `Object`
  - :zap: `isInstance` Added
- `Function`
  - :zap: `isInstance` Added
  - `prototype`
    - :zap: `called` Added
    - :zap: `once` Added
    - :zap: `defer` Added
    - :zap: `cached` Added
    - :zap: `cache` Added
- `Boolean`
  - :zap: `isInstance` Added
- `Number`
  - :zap: `isInstance` Added
- `Date`
  - :zap: `isInstance` Added
- `Math`
  - :zap: `average` Added
  - :zap: `avg` Added (alias of `Math.average`)
  - :zap: `factorial` Added
  - :zap: `fibonacci` Added
  - :zap: `gcd` Added
  - :zap: `lcm` Added
  - :zap: `isEven` Added
  - :zap: `isPrime` Added

## [v0.2.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.2.0) - *(2018-01-18)*

- `Array`
  - `prototype`
    - :zap: `sum` Added
    - :zap: `average` Added
    - :zap: `max` Added
    - :zap: `min` Added
    - :zap: `contains` Added
    - :zap: `crossJoin` Added
    - :zap: `get` Added
    - :zap: `implode` Added
    - :zap: `clone` Added
    - :zap: `median` Added
    - :zap: `pad` Added
    - :zap: `prepend` Added
    - :beetle: `pluck` Fixed document examples
    - :beetle: `chunk` Fixed name
- `String`
  - `prototype`
    - :beetle: `decapitalize` Fixed returning the capitalized string
- :eyeglasses: Added tests

## [v0.1.2](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.1.2) - *(2018-01-15)*

- :mortar_board: Fix project name in README.md

## [v0.1.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.1.1) - *(2018-01-15)*

- :mortar_board: Update README.md usage

## [v0.1.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.1.0) - *(2018-01-15)*

- :tada: First release
