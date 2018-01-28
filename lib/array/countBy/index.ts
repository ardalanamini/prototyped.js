export { }

declare global {
  interface Array<T> {
    countBy(fn: string | (() => any)): { [key: string]: any }
  }
}

/**
 * Groups the elements of an array based on the given function and returns the count of elements in each group
 * @memberof Array
 * @param {String|Function} fn
 * @returns {Object}
 * @example
 * [6.1, 4.2, 6.3].countBy(Math.floor); // {4: 1, 6: 2}
 * ['one', 'two', 'three'].countBy('length'); // {3: 2, 5: 1}
 */
Array.prototype.countBy = function(fn: string | (() => any)): { [key: string]: any } {
  return this.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc: { [key: string]: any }, val: string, i) => {
    acc[val] = (acc[val] || 0) + 1

    return acc
  }, {})
  }
