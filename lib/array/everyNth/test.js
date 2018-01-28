require('../../../es6/array/everyNth')

describe("Array.prototype.everyNth", () => {
  test("[1, 2, 3, 4, 5, 6].everyNth() returns [ 2, 4, 6 ]", () => {
    expect([1, 2, 3, 4, 5, 6].everyNth(2))
      .toEqual([2,4,6])
  })
})
