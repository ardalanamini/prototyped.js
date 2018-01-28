require('../../../es6/array/tail')

describe("Array.prototype.tail", () => {
  test("[1, 2, 3].tail() returns [2, 3]", () => {
    expect([1,2,3].tail()).toEqual([2, 3])
  })
})
