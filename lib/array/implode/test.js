require('../../../es6/array/implode')

describe("Array.prototype.implode", () => {
  test("[{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', ') returns 'first, second, third'", () => {
    expect([{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', ')).toBe('first, second, third')
  })
})
