require('../../../es6/array/contains')

describe("Array.prototype.contains", () => {
  test("[1, 2, 3].contains(2) returns true", () => {
    expect([1, 2, 3].contains(2)).toBe(true)
  })
})
