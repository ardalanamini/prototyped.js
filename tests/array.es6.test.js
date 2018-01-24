require('../es6/array.js')

describe("Array.isInstance", () => {
  test("Array.isInstance(2) returns false", () => {
    expect(Array.isInstance(2)).toBe(false)
  })

  test("Array.isInstance([7, 3]) returns true", () => {
    expect(Array.isInstance([7, 3])).toBe(true)
  })
})

describe("Array.range", () => {
  test("Array.range(5) returns [0,1,2,3,4,5]", () => {
    expect(Array.range(5)).toEqual([0,1,2,3,4,5])
  })

  test("Array.range(7, 3) returns [3,4,5,6,7]", () => {
    expect(Array.range(7, 3)).toEqual([3,4,5,6,7])
  })

  test("Array.range(9, 0, 2) returns [0,2,4,6,8]", () => {
    expect(Array.range(9, 0, 2)).toEqual([0,2,4,6,8])
  })
})

describe("Array.repeat", () => {
  test("Array.repeat(5, 2) returns [2,2,2,2,2]", () => {
    expect(Array.repeat(5, 2)).toEqual([2,2,2,2,2])
  })
})

describe("Array.prototype.first", () => {
  test("[1, 2, 3].first() returns 1", () => {
    expect([1,2,3].first()).toBe(1)
  })
})

describe("Array.prototype.last", () => {
  test("[1, 2, 3].last() returns 3", () => {
    expect([1,2,3].last()).toBe(3)
  })
})

describe("Array.prototype.chunk", () => {
  test("[1, 2, 3, 4, 5].chunk(2) returns [[1,2],[3,4],[5]]", () => {
    expect([1,2,3,4,5].chunk(2)).toEqual([[1,2],[3,4],[5]])
  })
})

describe("Array.prototype.compact", () => {
  test("[0,1,false,2,'',3,'a','e' * 23,NaN,'s',34].compact() returns [1,2,3,'a','s',34]", () => {
    expect([0,1,false,2,'',3,'a','e' * 23,NaN,'s',34].compact()).toEqual([1,2,3,'a','s',34])
  })
})

describe("Array.prototype.count", () => {
  test("[1, 1, 2, 1, 2, 3].count() returns 6", () => {
    expect([1, 1, 2, 1, 2, 3].count()).toBe(6)
  })

  test("[1, 1, 2, 1, 2, 3].count(1) returns 3", () => {
    expect([1, 1, 2, 1, 2, 3].count(1)).toBe(3)
  })
})

describe("Array.prototype.countBy", () => {
  test('[6.1, 4.2, 6.3].countBy(Math.floor) returns {4: 1, 6: 2}', () => {
    expect([6.1, 4.2, 6.3].countBy(Math.floor)).toEqual({4: 1, 6: 2})
  })

  test("['one', 'two', 'three'].countBy('length') returns {3: 2, 5: 1}", () => {
    expect(['one', 'two', 'three'].countBy('length')).toEqual({3: 2, 5: 1})
  })
})

describe("Array.prototype.flatten", () => {
  test("[1, [2], 3, 4].flatten() returns [1, 2, 3, 4]", () => {
    expect([1, [2], 3, 4].flatten()).toEqual([1, 2, 3, 4])
  })

  test("[1, [2, [3, [4, 5], 6], 7], 8].flatten(2) returns [1, 2, 3, [4, 5], 6, 7, 8]", () => {
    expect([1, [2, [3, [4, 5], 6], 7], 8].flatten(2)).toEqual([1, 2, 3, [4, 5], 6, 7, 8])
  })
})

describe("Array.prototype.deepFlatten", () => {
  test("[1, [2], [[3], 4], 5].deepFlatten() returns [1,2,3,4,5]", () => {
    expect([1, [2], [[3], 4], 5].deepFlatten()).toEqual([1,2,3,4,5])
  })
})

describe("Array.prototype.diff", () => {
  test("[1, 2, 3].diff([1, 2, 4]) returns [3]", () => {
    expect([1, 2, 3].diff([1, 2, 4])).toEqual([3])
  })

  test("[1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)) returns [1, 1.2]", () => {
    expect([1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b))).toEqual([1, 1.2])
  })
})

describe("Array.prototype.distinct", () => {
  test("[1, 2, 2, 3, 4, 4, 5].distinct() returns [1,2,3,4,5]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].distinct()).toEqual([1,2,3,4,5])
  })
})

describe("Array.prototype.everyNth", () => {
  test("[1, 2, 3, 4, 5, 6].everyNth() returns [ 2, 4, 6 ]", () => {
    expect([1, 2, 3, 4, 5, 6].everyNth(2)).toEqual([2,4,6])
  })
})

describe("Array.prototype.groupBy", () => {
  test("[6.1, 4.2, 6.3].groupBy(Math.floor) returns {4: [4.2], 6: [6.1, 6.3]}", () => {
    expect([6.1, 4.2, 6.3].groupBy(Math.floor)).toEqual({4: [4.2], 6: [6.1, 6.3]})
  })

  test("['one', 'two', 'three'].groupBy('length') returns {3: ['one', 'two'], 5: ['three']}", () => {
    expect(['one', 'two', 'three'].groupBy('length')).toEqual({3: ['one', 'two'], 5: ['three']})
  })
})

describe("Array.prototype.indexOfAll", () => {
  test("[1, 2, 3, 1, 2, 3].indexOfAll(1) returns [0,3]", () => {
    expect([1, 2, 3, 1, 2, 3].indexOfAll(1)).toEqual([0,3])
  })

  test("[1, 2, 3].indexOfAll(4) returns []", () => {
    expect([1, 2, 3].indexOfAll(4)).toEqual([])
  })
})

describe("Array.prototype.intersect", () => {
  test("[1, 2, 3].intersect([4, 3, 2]) returns [2,3]", () => {
    expect([1, 2, 3].intersect([4, 3, 2])).toEqual([2,3])
  })
})

describe("Array.prototype.partition", () => {
  test("[{ user: 'barney', active: false }, { user: 'fred', active: true }].partition(o => o.active) returns [[{ 'user': 'fred', 'active': true }],[{ 'user': 'barney', 'active': false }]]", () => {
    expect([{ user: 'barney', active: false }, { user: 'fred', active: true }].partition(o => o.active)).toEqual([[{ 'user': 'fred', 'active': true }],[{ 'user': 'barney', 'active': false }]])
  })
})

describe("Array.prototype.pull", () => {
  test("myArray = ['a', 'b', 'c', 'a', 'b', 'c'] & myArray.pull('a', 'c') results myArray to be [ 'b', 'b' ]", () => {
    expect((() => {
      let myArray = ['a', 'b', 'c', 'a', 'b', 'c']

      myArray.pull('a', 'c')

      return myArray
    })()).toEqual([ 'b', 'b' ])
  })
})

describe("Array.prototype.sample", () => {
  test("['a', 'b', 'c', 'd'].sample() returns 'a' or 'b' or 'c' or 'd'", () => {
    expect(['a', 'b', 'c', 'd'].sample()).toMatch(/[abcd]/)
  })
})

describe("Array.prototype.shuffle", () => {
  test("[1, 2, 3].shuffle() returns somthing like [2,3,1]", () => {
    expect([1, 2, 3].shuffle()).toEqual(expect.arrayContaining([2,3,1]))
  })
})

describe("Array.prototype.union", () => {
  test("[1, 2, 3].union([4, 3, 2]) returns [1,2,3,4]", () => {
    expect([1, 2, 3].union([4, 3, 2])).toEqual([1,2,3,4])
  })
})

describe("Array.prototype.zip", () => {
  test("['a', 'b'].zip([1, 2], [true, false]) returns [['a', 1, true], ['b', 2, false]]", () => {
    expect(['a', 'b'].zip([1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]])
  })

  test("['a'].zip([1, 2], [true, false]) returns [['a', 1, true], [undefined, 2, false]]", () => {
    expect(['a'].zip([1, 2], [true, false])).toEqual([['a', 1, true], [undefined, 2, false]])
  })
})

describe("Array.prototype.zipObject", () => {
  test("['a', 'b', 'c'].zipObject([1, 2]) returns {a: 1, b: 2, c: undefined}", () => {
    expect(['a', 'b', 'c'].zipObject([1, 2])).toEqual({a: 1, b: 2, c: undefined})
  })

  test("['a', 'b'].zipObject([1, 2, 3]) returns {a: 1, b: 2}", () => {
    expect(['a', 'b'].zipObject([1, 2, 3])).toEqual({a: 1, b: 2})
  })
})

describe("Array.prototype.pluck", () => {
  test("[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a') returns [{b: 1}, {b: 2}, {b: 3}]", () => {
    expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a')).toEqual([{b: 1}, {b: 2}, {b: 3}])
  })

  test("[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b') returns [1, 2, 3]", () => {
    expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b')).toEqual([1, 2, 3])
  })
})

describe("Array.prototype.sum", () => {
  test("[1, 2, 3].sum() returns 6", () => {
    expect([1, 2, 3].sum()).toBe(6)
  })

  test("[{a: 1}, {a: 2}, {a: 3}].sum('a') returns 6", () => {
    expect([{a: 1}, {a: 2}, {a: 3}].sum('a')).toBe(6)
  })

  test("[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b') returns 6", () => {
    expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b')).toBe(6)
  })
})

describe("Array.prototype.average", () => {
  test("[1, 2, 3].average() returns 2", () => {
    expect([1, 2, 3].average()).toBe(2)
  })

  test("[{a: 1}, {a: 2}, {a: 3}].average('a') returns 2", () => {
    expect([{a: 1}, {a: 2}, {a: 3}].average('a')).toBe(2)
  })

  test("[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average('a.b') returns 2", () => {
    expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average('a.b')).toBe(2)
  })
})

describe("Array.prototype.max", () => {
  test("[1, 2, 3].max() returns 3", () => {
    expect([1, 2, 3].max()).toBe(3)
  })

  test("[{a: 1}, {a: 2}, {a: 3}].max('a') returns 3", () => {
    expect([{a: 1}, {a: 2}, {a: 3}].max('a')).toBe(3)
  })

  test("[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b') returns 3", () => {
    expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b')).toBe(3)
  })
})

describe("Array.prototype.min", () => {
  test("[1, 2, 3].min() returns 1", () => {
    expect([1, 2, 3].min()).toBe(1)
  })

  test("[{a: 1}, {a: 2}, {a: 3}].min('a') returns 1", () => {
    expect([{a: 1}, {a: 2}, {a: 3}].min('a')).toBe(1)
  })

  test("[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b') returns 1", () => {
    expect([{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b')).toBe(1)
  })
})

describe("Array.prototype.contains", () => {
  test("[1, 2, 3].contains(2) returns true", () => {
    expect([1, 2, 3].contains(2)).toBe(true)
  })
})

describe("Array.prototype.crossJoin", () => {
  test("[1, 2].crossJoin(['a', 'b']); returns [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]", () => {
    expect([1, 2].crossJoin(['a', 'b'])).toEqual([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']])
  })
})

describe("Array.prototype.get", () => {
  test("[1, 2, 3].get(0, 'default value') returns 1", () => {
    expect([1, 2, 3].get(0, 'default value')).toBe(1)
  })

  test("[1, 2, 3].get(4, -10) returns 0", () => {
    expect([1, 2, 3].get(4, -10)).toBe(-10)
  })
})

describe("Array.prototype.implode", () => {
  test("[{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', ') returns 'first, second, third'", () => {
    expect([{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', ')).toBe('first, second, third')
  })
})

describe("Array.prototype.clone", () => {
  test("[1, 2, 3].clone() returns [1, 2, 3]", () => {
    expect([1, 2, 3].clone()).toEqual([1, 2, 3])
  })
})

describe("Array.prototype.median", () => {
  test("[1, 1, 2, 4].median() returns 1.5", () => {
    expect([1, 1, 2, 4].median()).toBe(1.5)
  })

  test("[{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo') returns 15", () => {
    expect([{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo')).toBe(15)
  })
})

describe("Array.prototype.pad", () => {
  test("[1, 2, 3].pad(5, 0) returns [1, 2, 3, 0, 0]", () => {
    expect([1, 2, 3].pad(5, 0)).toEqual([1, 2, 3, 0, 0])
  })

  test("[1, 2, 3].pad(-5, 0) returns [0, 0, 1, 2, 3]", () => {
    expect([1, 2, 3].pad(-5, 0)).toEqual([0, 0, 1, 2, 3])
  })
})

describe("Array.prototype.prepend", () => {
  test("[1, 2, 3].prepend(0) returns [0, 1, 2, 3]", () => {
    expect((() => {
      let myArray = [1, 2, 3]
      myArray.prepend(0)
      return myArray
    })()).toEqual([0, 1, 2, 3])
  })
})
