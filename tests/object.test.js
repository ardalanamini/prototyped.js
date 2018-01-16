require('../dist/object.js')

describe("Object.prototype.invert", () => {
  test("{ name: 'John', age: 20 }.invert() returns { 20: 'age', John: 'name' }", () => {
    expect({ name: 'John', age: 20 }.invert()).toEqual({ 20: 'age', John: 'name' })
  })
})

describe("Object.prototype.lowerCaseKeys", () => {
  test("{ Name: 'Adam', sUrnAME: 'Smith' }.lowerCaseKeys() returns {name: 'Adam', surname: 'Smith'}", () => {
    expect({ Name: 'Adam', sUrnAME: 'Smith' }.lowerCaseKeys()).toEqual({name: 'Adam', surname: 'Smith'})
  })
})

describe("Object.prototype.map", () => {
  test("{fred: { user: 'fred', age: 40 }, pebbles: { user: 'pebbles', age: 1 }}.map(u => u.age) returns { fred: 40, pebbles: 1 }", () => {
    expect({fred: { user: 'fred', age: 40 }, pebbles: { user: 'pebbles', age: 1 }}.map(u => u.age)).toEqual({ fred: 40, pebbles: 1 })
  })
})

describe("Object.prototype.mapKeys", () => {
  test("{ a: 1, b: 2 }.mapKeys((val, key) => key + val) returns { a1: 1, b2: 2 }", () => {
    expect({ a: 1, b: 2 }.mapKeys((val, key) => key + val)).toEqual({ a1: 1, b2: 2 })
  })
})

describe("Object.prototype.merge", () => {
  test("{a: [{ x: 2 }, { y: 4 }], b: 1}.merge({a: { z: 3 }, b: [2, 3], c: 'foo'}) returns { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }", () => {
    expect({a: [{ x: 2 }, { y: 4 }], b: 1}.merge({a: { z: 3 }, b: [2, 3], c: 'foo'}))
      .toEqual({ a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' })
  })
})

describe("Object.prototype.size", () => {
  test("{ one: 1, two: 2, three: 3 }.size() returns 3", () => {
    expect({ one: 1, two: 2, three: 3 }.size())
      .toBe(3)
  })
})
