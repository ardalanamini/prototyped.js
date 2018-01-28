export { }

declare global {
  interface Array<T> {
    pull(...args: Array<any>): void
  }
}

/**
 * Mutates the original array to filter out the values specified
 * @memberof Array
 * @param {Array} args
 * @example
 * let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 * myArray.pull('a', 'c'); // myArray = [ 'b', 'b' ];
 */
Array.prototype.pull = function(...args: Array<any>): void {
  let argState = Array.isArray(args[0]) ? args[0] : args
  let pulled = this.filter((value: any) => !argState.includes(value))

  this.length = 0

  pulled.forEach((value) => this.push(value))
}
