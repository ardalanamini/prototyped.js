export { }

declare global {
  interface Array<T> {
    pad(size: number, value?: any): Array<any>
  }
}

/**
 * FillS the array with the given value until the array reaches the specified size
 * @memberof Array
 * @param {number} size
 * @param {*} [value=0]
 * @returns {Array}
 * @example
 * [1, 2, 3].pad(5, 0); // [1, 2, 3, 0, 0]
 * [1, 2, 3].pad(-5, 0); // [0, 0, 1, 2, 3]
 */
Array.prototype.pad = function(size: number, value: any = 0): Array<any> {
  let s = Math.abs(size)

  if (s <= this.length) return this

  let array = Array(s - this.length).fill(value)

  if (size < 0) return array.concat(this)

  return this.concat(array)
}
