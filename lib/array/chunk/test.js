require('../../../es6/array/chunk')

describe("Array.prototype.chunk", () => {
  test("[1, 2, 3, 4, 5].chunk(2) returns [[1,2],[3,4],[5]]", () => {
    expect([1,2,3,4,5].chunk(2)).toEqual([[1,2],[3,4],[5]])
  })
})
