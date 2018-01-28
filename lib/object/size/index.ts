import { addPrototype } from '../utils'

export { }

declare global {
  interface Object {
    size(): number
  }
}

/**
 * Get size of the object
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * { one: 1, two: 2, three: 3 }.size(); // 3
 */
function size(this: { [key: string]: any }): number {
  return Object.keys(this).length
}

addPrototype('size', size)
