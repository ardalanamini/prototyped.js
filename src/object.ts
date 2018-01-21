/**
 * @namespace Object
 */

interface Object {
  is(type: StringConstructor | NumberConstructor | ObjectConstructor | ArrayConstructor | DateConstructor): boolean
  invert(): Object
  lowerCaseKeys(): Object
  map(fn: (value: any, key: string | number, object: Object) => any): Object
  mapKeys(fn: (value: any, key: string | number, object: Object) => any): Object
  merge(...objects: Array<Object>): Object
  size(): number
}

let prototypes: OBJ = {
}


/**
 * Returns true if type is Object
 * @param {*} type
 * @returns {boolean}
 * @example
 * {foo: 'bar'}.is(String); // false
 * {foo: 'bar'}.is(Object); // true
 */
prototypes.is = function(type) {
  if (type.name === 'Object') return true

  return false
}

/**
 * Inverts the key-value pairs of the object, without mutating it
 * @memberof Object
 * @returns {Object}
 * @example
 * { name: 'John', age: 20 }.invert(); // { 20: 'age', John: 'name' }
 */
prototypes.invert = function() {
  return Object.keys(this).reduce((acc: OBJ, key) => {
    acc[this[key]] = key

    return acc
  }, {})
}

/**
 * Creates a new object from the specified object, where all the keys are in lowercase
 * @memberof Object
 * @returns {Object}
 * @example
 * const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
 * const myObjLower = myObj.lowerCaseKeys(); // {name: 'Adam', surname: 'Smith'}
 */
prototypes.lowerCaseKeys = function() {
  return Object.keys(this).reduce((acc: OBJ, key) => {
    acc[key.toLowerCase()] = this[key]

    return acc
  }, {})
}

/**
 * Creates an object with the same keys as the provided object and values generated by running the provided function for each value
 * @memberof Object
 * @param {function} fn
 * @returns {Object}
 * @example
 * const users = {
 *   fred: { user: 'fred', age: 40 },
 *   pebbles: { user: 'pebbles', age: 1 }
 * };
 * users.map(u => u.age); // { fred: 40, pebbles: 1 }
 */
prototypes.map = function(fn) {
  return Object.keys(this).reduce((acc: OBJ, k) => {
    acc[k] = fn(this[k], k, this)

    return acc
  }, {})
}

/**
 * Creates an object with keys generated by running the provided function for each key and the same values as the provided object
 * @memberof Object
 * @param {function} fn
 * @returns {Object}
 * @example
 * { a: 1, b: 2 }.mapKeys((val, key) => key + val); // { a1: 1, b2: 2 }
 */
prototypes.mapKeys = function(fn) {
  return Object.keys(this).reduce((acc: OBJ, k) => {
    acc[fn(this[k], k, this)] = this[k]

    return acc
  }, {})
}

/**
 * Creates a new object from the combination of two or more objects
 * @memberof Object
 * @param {Object[]} objects
 * @returns {Object}
 * @example
 * const object = {
 *   a: [{ x: 2 }, { y: 4 }],
 *   b: 1
 * };
 * const other = {
 *   a: { z: 3 },
 *   b: [2, 3],
 *   c: 'foo'
 * };
 * object.merge(other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
prototypes.merge = function(...objects) {
  objects = [this, ...objects]

  return [...objects].reduce(
    (acc: OBJ, obj: OBJ) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]

        return acc
      }, {}),
    {}
  )
}

/**
 * Get size of the object
 * @memberof Object
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.size(); // 3
 */
prototypes.size = function() {
  return Object.keys(this).length
}

const addPrototypes = (extension: OBJ) => {
  for (let key in extension) {
    if (Object.prototype.hasOwnProperty(key)) continue

    Object.defineProperty(
      Object.prototype,
      key,
      {
        value: extension[key],
        writable: true
      }
    )
  }
}

addPrototypes(prototypes)
