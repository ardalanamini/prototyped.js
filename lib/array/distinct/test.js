require('../../../es6/array/distinct')

describe("Array.prototype.distinct", () => {
  test("[1, 2, 2, 3, 4, 4, 5].distinct() returns [1,2,3,4,5]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].distinct()).toEqual([1,2,3,4,5])
  })
})
