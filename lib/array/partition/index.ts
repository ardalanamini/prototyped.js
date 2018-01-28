export { }

declare global {
  interface Array<T> {
    partition(fn: (value: T, index: number, array: Array<T>) => boolean): [Array<T>, Array<T>]
  }
}

/**
 * Groups the elements into two arrays, depending on the provided function's truthiness for each element
 * @memberof Array
 * @param {function} fn
 * @returns {Array}
 * @example
 * const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
 * users.partition(o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
 */
Array.prototype.partition = function(fn: (value: any, index: number, array: Array<any>) => boolean): [Array<any>, Array<any>] {
  return this.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  )
}
