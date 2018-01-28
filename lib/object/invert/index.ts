import { addPrototype } from '../utils'

export { }

declare global {
  interface Object {
    invert(): object
  }
}

/**
 * Inverts the key-value pairs of the object, without mutating it
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * { name: 'John', age: 20 }.invert(); // { 20: 'age', John: 'name' }
 */
function invert(this: { [key: string]: any }): object {
  return Object.keys(this).reduce((acc: { [key: string]: any }, key) => {
    acc[this[key]] = key

    return acc
  }, {})
}

addPrototype('invert', invert)
