export { }

declare global {
  interface Array<T> {
    get(index: number, def?: any): any
  }
}

/**
 * Returns the item at a given index. If the index does not exist, def is returned
 * @memberof Array
 * @param {number} index
 * @param {*} [def=undefined]
 * @returns {*}
 * @example
 * [1, 2, 3].get(0, 'default value'); // 1
 * [1, 2, 3].get(4, 0); // 0
 */
Array.prototype.get = function(index: number, def = undefined): any {
  if (index >= this.length) return def

  return this[index]
}
