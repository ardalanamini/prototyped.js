export { }

declare global {
  interface Array<T> {
    shuffle(): Array<T>
  }
}

/**
 * Randomizes the order of the values of an array, returning a new array
 * @memberof Array
 * @returns {Array}
 * @example
 * const foo = [1, 2, 3];
 * foo.shuffle(); // [2,3,1], foo = [1,2,3]
 */
Array.prototype.shuffle = function(): Array<any> {
  const _shuffle = ([...arr]) => {
    let m = arr.length

    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }

    return arr
  }

  return _shuffle(this)
}
