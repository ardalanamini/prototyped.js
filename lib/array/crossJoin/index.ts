export { }

declare global {
  interface Array<T> {
    crossJoin(array: Array<any>): Array<[T, any]>
  }
}

/**
 * Cross joins the array's values among the given arrays, returning a Cartesian product with all possible permutations
 * @memberof Array
 * @param {Array} array
 * @returns {Array[]}
 * @example
 * [1, 2].crossJoin(['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 */
Array.prototype.crossJoin = function(array: Array<any>): Array<[any, any]> {
  let joined: Array<[any, any]> = []

  this.map((item) => {
    array.map((value) => {
      joined.push([
        item,
        value
      ])
    })
  })

  return joined
}
