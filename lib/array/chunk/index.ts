export { }

declare global {
  interface Array<T> {
    chunk(size: number): Array<Array<T>>
  }
}

/**
 * Chunks the array into smaller arrays of a specified size
 * @memberof Array
 * @param {number} size
 * @returns {Array[]}
 * @example
 * [1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
 */
Array.prototype.chunk = function(size: number): Array<Array<any>> {
  return Array.from({ length: Math.ceil(this.length / size) }, (value: any, index: number) => this.slice(index * size, index * size + size))
}
