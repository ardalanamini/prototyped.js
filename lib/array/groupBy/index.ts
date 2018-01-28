export { }

declare global {
  interface Array<T> {
    groupBy(fn: string | (() => any)): { [key: string]: Array<T> }
  }
}

/**
 * Groups the elements of an array based on the given function
 * @memberof Array
 * @param {string|function} fn
 * @returns {Object}
 * @example
 * [6.1, 4.2, 6.3].groupBy(Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
 * ['one', 'two', 'three'].groupBy('length'); // {3: ['one', 'two'], 5: ['three']}
 */
Array.prototype.groupBy = function(fn: string | (() => any)): { [key: string]: any } {
  return this.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(this[i])

    return acc
  }, {})
}
