interface Array<T> {
  first(): T
  last(): T
  chunck(size: number): Array<Array<T>>
  compact(): Array<T>
  diff(array: Array<T>): Array<T>
  groupBy(fn: string | (() => any)): { [key: string]: Array<T> }
  indexOfAll(value: T): Array<number>
  intersect(array: Array<T>): Array<T>
  pull(...args: Array<T>): void
  pluck(key: string): Array<T>
}

if (!Array.prototype.first) {
  /**
   * Returns the first item of the array
   * @returns {*}
   * @example
   * [1, 2, 3].first(); // 1
   */
  Array.prototype.first = function() {
    return this[0]
  }
}

if (!Array.prototype.last) {
  /**
   * Returns the last item of the array
   * @returns {*}
   * @example
   * [1, 2, 3].last(); // 3
   */
  Array.prototype.last = function() {
    return this[this.length - 1]
  }
}

if (!Array.prototype.chunck) {
  /**
   * Chunks the array into smaller arrays of a specified size
   * @param {number} size
   * @returns {Array[]}
   * @example
   * [1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
   */
  Array.prototype.chunck = function(size: number) {
    return Array.from({ length: Math.ceil(this.length / size) }, (value: any, index: number) => this.slice(index * size, index * size + size))
  }
}

if (!Array.prototype.compact) {
  /**
   * Removes falsey values from the array
   * @returns {Array}
   * @example
   * [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34].compact(); // [ 1, 2, 3, 'a', 's', 34 ]
   */
  Array.prototype.compact = function() {
    return this.filter(Boolean)
  }
}

if (!Array.prototype.diff) {
  /**
   * Returns the difference between this and another array
   * @param {Array} array
   * @returns {Array}
   * @example
   * [1, 2, 3].diff([1, 2, 4]); // [3]
   */
  Array.prototype.diff = function(array: Array<any>) {
    const set = new Set(array)

    return this.filter((item: any) => !set.has(item))
  }
}

if (!Array.prototype.groupBy) {
  /**
   * Groups the elements of an array based on the given function
   * @param {String|Function} fn
   * @returns {Object}
   * @example
   * [6.1, 4.2, 6.3].groupBy(Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
   * ['one', 'two', 'three'].groupBy('length'); // {3: ['one', 'two'], 5: ['three']}
   */
  Array.prototype.groupBy = function(fn) {
    return this.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(this[i])

      return acc
    }, {})
  }
}

if (!Array.prototype.indexOfAll) {
  /**
   * Returns all indices of value in the array. If value never occurs, returns []
   * @param {*} value
   * @returns {number[]}
   * @example
   * [1, 2, 3, 1, 2, 3].indexOfAll(1); // [0,3]
   * [1, 2, 3].indexOfAll(4); // []
   */
  Array.prototype.indexOfAll = function(value) {
    let indices: Array<number> = []

    this.forEach((item, index) => item === value && indices.push(index))

    return indices
  }
}

if (!Array.prototype.intersect) {
  /**
   * Returns a list of elements that exist in both arrays
   * @param {Array} array
   * @returns {Array}
   * @example
   * [1, 2, 3].intersect([4, 3, 2]); // [2,3]
   */
  Array.prototype.intersect = function(array) {
    const set = new Set(array)

    return this.filter(item => set.has(item))
  }
}

if (!Array.prototype.pull) {
  /**
   * Mutates the original array to filter out the values specified
   * @param  ...args [description]
   * @example
   * let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
   * myArray.pull('a', 'c'); // myArray = [ 'b', 'b' ];
   */
  Array.prototype.pull = function(...args) {
    let argState = Array.isArray(args[0]) ? args[0] : args
    let pulled = this.filter((value: any) => !argState.includes(value))

    this.length = 0

    pulled.forEach((value) => this.push(value))
  }
}

if (!Array.prototype.pluck) {
  /**
   * Returns all of the values for the given key
   * @param {String} key
   * @returns {Array}
   * @example
   * [1, 2, 3].intersect([4, 3, 2]); // [2,3]
   */
  Array.prototype.pluck = function(key) {
    let keys = key.split('.')

    return this.map((item) => {
      keys.map((k) => item = item && item[k] || undefined)

      return item
    })
  }
}
