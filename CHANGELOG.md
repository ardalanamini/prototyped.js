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

## [v0.15.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.15.0) - *(2018-08-15)*

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
    - :zip: `equals` Added
- `Date`
  - `prototype`
    - :zip: `equals` Added
- `Number`
  - `prototype`
    - :zip: `inRange` Added
- `Object`
  - `prototype`
    - :zip: `$equals` Added
- `String`
  - `prototype`
    - :zip: `equals` Added
    - :zip: `parseInt` Added

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
  - :zip: Added `isBrowser`
- `Number`
  - :boom: `isInstance` Renamed to `isNumber`
- `Object`
  - :boom: `isInstance` Renamed to `isObject`
  - `prototype`
    - :zip: `$set` Added
- `String`
  - :boom: `isInstance` Renamed to `isString`
- :zip: Better object value path handling

## [v0.9.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.9.0) - *(2018-05-29)*

- `Array`
  - `prototype`
    - :zip: `empty` Added
- `Number`
  - :zip: `digitize` Added
- `Object`
  - `prototype`
    - :zip: `$empty` Added
- `String`
  - `prototype`
    - :zip: `empty` Added
    - :zip: `pad` Added
    - :zip: `repeat` Added

## [v0.8.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.8.0) - *(2018-05-25)*

- `Array`
  - `prototype`
    - :zip: `nest` Added
- `Object`
  - `prototype`
    - :star2: `$merge` Improved
    - :zip: `$clone` Added
    - :zip: `$equals` Added
    - :zip: `$get` Added
    - :zip: `$omit` Added

## [v0.7.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.7.0) - *(2018-05-20)*

- `Object`
  - `prototype`
    - :zip: `$camelCaseKeys` Added
    - :zip: `$kebabCaseKeys` Added
    - :zip: `$snakeCaseKeys` Added

## [v0.6.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.6.0) - *(2018-05-11)*

- `Array`
  - `prototype`
    - :zip: `limit` Added
    - :zip: `take` Added
    - :zip: `orderBy` Added
    - :zip: `skip` Added
    - :zip: `offset` Added
    - :zip: `where` Added
    - :zip: `whereBetween` Added
    - :zip: `whereIn` Added
    - :zip: `whereLike` Added
    - :zip: `whereNotBetween` Added
    - :zip: `whereNotIn` Added
    - :zip: `whereNotLike` Added
    - :zip: `whereNotNull` Added
    - :zip: `whereNull` Added

## [v0.5.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.5.0) - *(2018-04-13)*

- `Array`
  - `prototype`
    - :zip: `all` Added
    - :zip: `any` Added
- `Object`
  - `prototype`
    - :boom: `invert` Renamed to `$invert`
    - :boom: `lowerCaseKeys` Renamed to `$lowerCaseKeys`
    - :boom: `mapKeys` Renamed to `$mapKeys`
    - :boom: `merge` Renamed to `$merge`
    - :boom: `size` Renamed to `$size`
- `String`
  - `prototype`
    - :zip: `base64` Added
    - :zip: `base64Decode` Added
    - :zip: `map` Added
    - :star2: `pluralize` Improved
- :star2: Some general enhancements
- :beetle: Typescript usage

## [v0.4.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.4.0) - *(2018-01-28)*

- `String`
  - `prototype`
    - :star2: `truncate` Improved
    - :zip: `chars` Added
    - :zip: `swapCase` Added
    - :zip: `humanize` Added
- :star2: More customizable usage

## [v0.3.2](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.2) - *(2018-01-25)*

- `Array`
  - `prototype`
    - :zip: `initial` Added
    - :zip: `tail` Added
    - :zip: `append` Added
- `String`
  - `prototype`
    - :zip: `contains` Added

## [v0.3.1](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.1) - *(2018-01-24)*

- :star2: `es6` Usage is now available along side `es5` (`dist`)
- :beetle: Typescript usage

## [v0.3.0](https://github.com/ardalanamini/prototyped.js/releases/tag/v0.3.0) - *(2018-01-24)*

- `Array`
  - :zip: `isInstance` Added
  - `prototype`
    - :zip: `avg` Added (alias of `Math.average`)
- `String`
  - :zip: `isInstance` Added
- `Object`
  - :zip: `isInstance` Added
- `Function`
  - :zip: `isInstance` Added
  - `prototype`
    - :zip: `called` Added
    - :zip: `once` Added
    - :zip: `defer` Added
    - :zip: `cached` Added
    - :zip: `cache` Added
- `Boolean`
  - :zip: `isInstance` Added
- `Number`
  - :zip: `isInstance` Added
- `Date`
  - :zip: `isInstance` Added
- `Math`
  - :zip: `average` Added
  - :zip: `avg` Added (alias of `Math.average`)
  - :zip: `factorial` Added
  - :zip: `fibonacci` Added
  - :zip: `gcd` Added
  - :zip: `lcm` Added
  - :zip: `isEven` Added
  - :zip: `isPrime` Added

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
