require('../../../es6/array/deepFlatten')

describe("Array.prototype.deepFlatten", () => {
  test("[1, [2], [[3], 4], 5].deepFlatten() returns [1,2,3,4,5]", () => {
    expect([1, [2], [[3], 4], 5].deepFlatten()).toEqual([1,2,3,4,5])
  })
})
