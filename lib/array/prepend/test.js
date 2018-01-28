require('../../../es6/array/prepend')

describe("Array.prototype.prepend", () => {
  test("myArray = [1, 2, 3] & myArray.prepend(0) results myArray to be [0, 1, 2, 3]", () => {
    expect((() => {
      let myArray = [1, 2, 3]
      myArray.prepend(0)
      return myArray
    })()).toEqual([0, 1, 2, 3])
  })
})
