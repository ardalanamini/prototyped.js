/**
 * @namespace Array
 */

export { }

declare global {
  interface ArrayConstructor {
    isInstance(arg: any): arg is Array<any>
    range(end: number, start?: number, step?: number): Array<number>
    repeat(n: number, value?: any): Array<any>
  }

  interface Array<T> {
    first(): T
    last(): T
    chunk(size: number): Array<Array<T>>
    compact(): Array<T>
    count(value?: T): number
    countBy(fn: string | (() => any)): { [key: string]: any }
    flatten(depth?: number): Array<T>
    deepFlatten(): Array<T>
    diff(array: Array<T>, comp?: (a: T, b: T) => boolean): Array<T>
    distinct(): Array<T>
    everyNth(nth: number): Array<T>
    groupBy(fn: string | (() => any)): { [key: string]: Array<T> }
    indexOfAll(value: T): Array<number>
    intersect(array: Array<T>): Array<T>
    partition(fn: (value: T, index: number, array: Array<T>) => boolean): Array<T>
    pull(...args: Array<T>): void
    sample(): T
    shuffle(): Array<T>
    union(array: Array<T>): Array<T>
    zip(...arrays: Array<Array<any>>): Array<Array<any>>
    zipObject(array: Array<T>): object
    pluck(key: String): Array<T>
    sum(key?: String): number
    average(key?: String): number
    avg(key?: String): number
    max(key?: String): number
    min(key?: String): number
    contains(value: T): boolean
    crossJoin(array: Array<any>): Array<[T, any]>
    get(index: number, def?: T | any): T | any
    implode(key: string, separator?: string): string
    clone(): Array<T>
    median(key?: string): number
    pad(size: number, value?: any): Array<any>
    prepend(value?: any): void
  }
}

if (!Array.isInstance) {
  /**
   * An alias of Array.isArray
   * @param {*} arg
   * @returns {boolean}
   * @example
   * Array.isInstance(2); // false
   * Array.isInstance([7, 3]); // true
   */
  Array.isInstance = Array.isArray
}

if (!Array.range) {
  /**
   * Initializes an array containing the numbers in the specified range where start and end are inclusive with there common difference step
   * @param {number} end
   * @param {number} [start=0]
   * @param {number} [step=1]
   * @returns {number[]}
   * @example
   * Array.range(5); // [0,1,2,3,4,5]
   * Array.range(7, 3); // [3,4,5,6,7]
   * Array.range(9, 0, 2); // [0,2,4,6,8]
   */
  Array.range = (end: number, start = 0, step = 1): Array<number> => Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start)
}

if (!Array.repeat) {
  /**
   * Initializes and fills an array with the specified value
   * @param {number} n
   * @param {*} [value=0]
   * @returns {Array}
   * @example
   * Array.repeat(5, 2); // [2,2,2,2,2]
   */
  Array.repeat = (n: number, value = 0): Array<any> => Array(n).fill(value)
}

if (!Array.prototype.first) {
  /**
   * Returns the first item of the array
   * @returns {*}
   * @example
   * [1, 2, 3].first(); // 1
   */
  Array.prototype.first = function(): any {
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
  Array.prototype.last = function(): any {
    return this[this.length - 1]
  }
}

if (!Array.prototype.chunk) {
  /**
   * Chunks the array into smaller arrays of a specified size
   * @param {number} size
   * @returns {Array[]}
   * @example
   * [1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
   */
  Array.prototype.chunk = function(size: number): Array<Array<any>> {
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
  Array.prototype.compact = function(): Array<any> {
    return this.filter(Boolean)
  }
}

if (!Array.prototype.count) {
  /**
   * Counts the occurrences of a value in an array
   * @param {*} [value]
   * @returns {number}
   * @example
   * [1, 1, 2, 1, 2, 3].count(); // 6
   * [1, 1, 2, 1, 2, 3].count(1); // 3
   */
  Array.prototype.count = function(value: any): number {
    if (!value) return this.length

    return this.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
  }
}

if (!Array.prototype.countBy) {
  /**
   * Groups the elements of an array based on the given function and returns the count of elements in each group
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
}

if (!Array.prototype.flatten) {
  /**
   * Flattens an array up to the specified depth
   * @param {number} [depth=1]
   * @returns {Array}
   * @example
   * [1, [2], 3, 4].flatten(); // [1, 2, 3, 4]
   * [1, [2, [3, [4, 5], 6], 7], 8].flatten(2); // [1, 2, 3, [4, 5], 6, 7, 8]
   */
  Array.prototype.flatten = function(depth = 1): Array<any> {
    const _flatten: (arr: Array<any>, depth?: number) => Array<any> = (arr, depth = 1) =>
      depth != 1
        ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? _flatten(v, depth - 1) : v), [])
        : arr.reduce((a, v) => a.concat(v), [])

    return _flatten(this, depth)
  }
}

if (!Array.prototype.deepFlatten) {
  /**
   * Deep flattens an array
   * @returns {Array}
   * @example
   * [1, [2], [[3], 4], 5].deepFlatten(); // [1,2,3,4,5]
   */
  Array.prototype.deepFlatten = function(): Array<any> {
    const _deepFlatten: (arr: Array<any>) => Array<any> = (arr) => [].concat(...arr.map(v => (Array.isArray(v) ? _deepFlatten(v) : v)))

    return _deepFlatten(this)
  }
}

if (!Array.prototype.diff) {
  /**
   * Returns the difference between this and another array
   * if `comp` is given, filters out all values from an array for which the comparator function does not return true
   * @param {Array} array
   * @param {function} [comp]
   * @returns {Array}
   * @example
   * [1, 2, 3].diff([1, 2, 4]); // [3]
   * [1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
   */
  Array.prototype.diff = function(array: Array<any>, comp?: (a: any, b: any) => boolean): Array<any> {
    if (comp) return this.filter((a) => array.findIndex((b) => comp(a, b)) === -1)

    const set = new Set(array)

    return this.filter((item: any) => !set.has(item))
  }
}

if (!Array.prototype.distinct) {
  /**
   * Returns all the distinct values of an array
   * @returns {Array}
   * @example
   * [1, 2, 2, 3, 4, 4, 5].distinct(); // [1,2,3,4,5]
   */
  Array.prototype.distinct = function(): Array<any> {
    return [...new Set(this)]
  }
}

if (!Array.prototype.everyNth) {
  /**
   * Returns every nth element in an array
   * @returns {Array}
   * @example
   * [1, 2, 3, 4, 5, 6].everyNth(2); // [ 2, 4, 6 ]
   */
  Array.prototype.everyNth = function(nth: number): Array<any> {
    return this.filter((e, i) => i % nth === nth - 1)
  }
}

if (!Array.prototype.groupBy) {
  /**
   * Groups the elements of an array based on the given function
   * @param {string|function} fn
   * @returns {Object}
   * @example
   * [6.1, 4.2, 6.3].groupBy(Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
   * ['one', 'two', 'three'].groupBy('length'); // {3: ['one', 'two'], 5: ['three']}
   */
  Array.prototype.groupBy = function(fn: string | (() => any)): { [key: string]: any } {
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
  Array.prototype.indexOfAll = function(value: any): Array<number> {
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
  Array.prototype.intersect = function(array: Array<any>): Array<any> {
    const set = new Set(array)

    return this.filter(item => set.has(item))
  }
}

if (!Array.prototype.partition) {
  /**
   * Groups the elements into two arrays, depending on the provided function's truthiness for each element
   * @param {function} fn
   * @returns {Array}
   * @example
   * const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
   * users.partition(o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
   */
  Array.prototype.partition = function(fn: (value: any, index: number, array: Array<any>) => boolean): Array<any> {
    return this.reduce(
      (acc, val, i, arr) => {
        acc[fn(val, i, arr) ? 0 : 1].push(val);
        return acc;
      },
      [[], []]
    )
  }
}

if (!Array.prototype.pull) {
  /**
   * Mutates the original array to filter out the values specified
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
}

if (!Array.prototype.sample) {
  /**
   * Returns a random element from an array
   * @returns {*}
   * @example
   * [3, 7, 9, 11].sample(); // 9
   */
  Array.prototype.sample = function(): any {
    return this[Math.floor(Math.random() * this.length)]
  }
}

if (!Array.prototype.shuffle) {
  /**
   * Randomizes the order of the values of an array, returning a new array
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
}

if (!Array.prototype.union) {
  /**
   * Returns every element that exists in any of the two arrays once
   * @param {Array} array
   * @returns {Array}
   * @example
   * [1, 2, 3].union([4, 3, 2]); // [1,2,3,4]
   */
  Array.prototype.union = function(array: Array<any>): Array<any> {
    return Array.from(new Set([...this, ...array]))
  }
}

if (!Array.prototype.zip) {
  /**
   * Creates an array of elements, grouped based on the position in the original arrays
   * @param {Array[]} array
   * @returns {Array}
   * @example
   * ['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
   * ['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
   */
  Array.prototype.zip = function(...arrays: Array<Array<any>>): Array<Array<any>> {
    arrays = [this, ...arrays]

    const maxLength = Math.max(...arrays.map(x => x.length))

    return Array.from({ length: maxLength }).map((_, i) => {
      return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    })
  }
}

if (!Array.prototype.zipObject) {
  /**
   * Creates an array of elements, grouped based on the position in the original arrays
   * @param {Array} array
   * @returns {Array}
   * @example
   * ['a', 'b', 'c'].zipObject([1, 2]); // {a: 1, b: 2, c: undefined}
   * ['a', 'b'].zipObject([1, 2, 3]); // {a: 1, b: 2}
   */
  Array.prototype.zipObject = function(array: Array<any>): object {
    return this.reduce((obj, prop, index) => ((obj[prop] = array[index]), obj), {})
  }
}

if (!Array.prototype.pluck) {
  /**
   * Returns all of the values for the given key
   * @param {string} key
   * @returns {Array}
   * @example
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a'); // [{b: 1}, {b: 2}, {b: 3}]
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b'); // [1, 2, 3]
   */
  Array.prototype.pluck = function(key: string): Array<any> {
    let keys = key.split('.')

    return this.map((item) => {
      keys.map((k) => item = item && item[k] || undefined)

      return item
    })
  }
}

if (!Array.prototype.sum) {
  /**
   * Returns the minimum value of a given key
   * @param {String} [key]
   * @returns {number}
   * @example
   * [1, 2, 3].sum(); // 6
   * [{a: 1}, {a: 2}, {a: 3}].sum('a'); // 6
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b'); // 6
   */
  Array.prototype.sum = function(key?: string): number {
    let sum = 0

    if (key) {
      let keys = key.split('.')

      this.map((item) => {
        keys.map((k) => item = item && item[k] || 0)

        sum += item
      })

      return sum
    }

    this.map((number) => sum += number)

    return sum
  }
}

if (!Array.prototype.average) {
  /**
   * Returns the average value of a given key
   * @param {String} [key]
   * @returns {number}
   * @example
   * [1, 2, 3].average(); // 2
   * [{a: 1}, {a: 2}, {a: 3}].average('a'); // 2
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average('a.b'); // 2
   */
  Array.prototype.average = function(key?: string): number {
    return this.sum(key) / this.length
  }
}

if (!Array.prototype.avg) {
  /**
   * An alias of Array.prototype.average
   * @param {String} [key]
   * @returns {number}
   * @example
   * [1, 2, 3].avg(); // 2
   * [{a: 1}, {a: 2}, {a: 3}].avg('a'); // 2
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].avg('a.b'); // 2
   */
  Array.prototype.avg = Array.prototype.average
}

if (!Array.prototype.max) {
  /**
   * Returns the maximum value of a given key
   * @param {String} [key]
   * @returns {number}
   * @example
   * [1, 2, 3].max(); // 3
   * [{a: 1}, {a: 2}, {a: 3}].max('a'); // 3
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b'); // 3
   */
  Array.prototype.max = function(key?: string): number {
    let max: number = -Infinity

    if (key) {
      let keys = key.split('.')

      this.map((item) => {
        keys.map((k) => item = item && item[k] || 0)

        max = Math.max(item, max)
      })

      return max
    }

    this.map((number) => max = Math.max(number, max))

    return max
  }
}

if (!Array.prototype.min) {
  /**
   * Returns the minimum value of a given key
   * @param {String} [key]
   * @returns {number}
   * @example
   * [1, 2, 3].min(); // 1
   * [{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
   * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
   */
  Array.prototype.min = function(key?: string): number {
    let min: number = +Infinity

    if (key) {
      let keys = key.split('.')

      this.map((item) => {
        keys.map((k) => item = item && item[k] || 0)

        min = Math.min(item, min)
      })

      return min
    }

    this.map((number) => min = Math.min(number, min))

    return min
  }
}

if (!Array.prototype.contains) {
  /**
   * Determines whether the collection contains a given item
   * @param {*} value
   * @returns {boolean}
   * @example
   * [1, 2, 3].contains(2); // true
   */
  Array.prototype.contains = function(value: any): boolean {
    return this.indexOf(value) !== -1
  }
}

if (!Array.prototype.crossJoin) {
  /**
   * Cross joins the array's values among the given arrays, returning a Cartesian product with all possible permutations
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
}

if (!Array.prototype.get) {
  /**
   * Returns the item at a given index. If the index does not exist, def is returned
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
}

if (!Array.prototype.implode) {
  /**
   * It's like join but u get to git it which keys to join
   * @param {String} key
   * @param {String} [separator=", "]
   * @returns {String}
   * @example
   * [{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', '); // 'first, second, third'
   */
  Array.prototype.implode = function(key: string, separator = ', '): string {
    let keys = key.split('.')
    let array: Array<string> = []

    this.map((item) => {
      keys.map((k) => item = item && item[k] || undefined)

      array.push(item)
    })

    return array.compact().join(separator)
  }
}

if (!Array.prototype.clone) {
  /**
   * Returns the cloned array
   * @returns {Array}
   * @example
   * [1, 2, 3].clone(); // [1, 2, 3]
   */
  Array.prototype.clone = function(): Array<any> {
    return [...this]
  }
}

if (!Array.prototype.median) {
  /**
   * Returns the median value of a given key
   * @returns {Array}
   * @example
   * [1, 1, 2, 4].median(); // 1.5
   * [{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
   */
  Array.prototype.median = function(key?: string): number {
    let array = this

    array.sort((a, b) => a - b)

    let half = Math.floor(array.length / 2)

    if (key) {
      let keys = key.split('.')

      if (array.length % 2) {
        let value = array[half]

        keys.map((k) => value = value && value[k] || value)

        return value
      }

      let value1 = array[half - 1]
      let value2 = array[half]

      keys.map((k) => value1 = value1 && value1[k] || value1)
      keys.map((k) => value2 = value2 && value2[k] || value2)

      return (value1 + value2) / 2
    }

    if (array.length % 2) return array[half]

    return (array[half - 1] + array[half]) / 2
  }
}

if (!Array.prototype.pad) {
  /**
   * FillS the array with the given value until the array reaches the specified size
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

    let array = Array.repeat(s - this.length, value)

    if (size < 0) return array.concat(this)

    return this.concat(array)
  }
}

if (!Array.prototype.prepend) {
  /**
   * Adds an item to the beginning of the array
   * @param {*} value
   * @example
   * var myArray = [1, 2, 3]
   * myArray.prepend(0); // myArray => [0, 1, 2, 3]
   */
  Array.prototype.prepend = function(value: any): void {
    let array = this.clone()

    this.length = 0

    this.push(...[value].concat(array))
  }
}
