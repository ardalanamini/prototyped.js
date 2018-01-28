export { }

declare global {
  interface Array<T> {
    append(value?: any): void
  }
}

/**
 * Same as push but uses concat
 * @memberof Array
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.append(0); // myArray => [1, 2, 3, 0]
 */
Array.prototype.append = function(value: any): void {
  let array = this.concat([value])

  this.length = 0

  this.push(...array)
}
