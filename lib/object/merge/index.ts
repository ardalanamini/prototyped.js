import { addPrototype } from '../utils'

export { }

declare global {
  interface Object {
    $merge(...objects: Array<object>): object
  }
}

/**
 * Creates a new object from the combination of two or more objects
 * @memberof Object.prototype
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
 * object.$merge(other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
function $merge(this: { [key: string]: any }, ...objects: Array<object>): object {
  objects = [this, ...objects]

  return [...objects].reduce(
    (acc: { [key: string]: any }, obj: { [key: string]: any }) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]

        return acc
      }, {}),
    {}
  )
}

addPrototype('$merge', $merge)
