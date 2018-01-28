require('../../../es6/array/pull')

describe("Array.prototype.pull", () => {
  test("myArray = ['a', 'b', 'c', 'a', 'b', 'c'] & myArray.pull('a', 'c') results myArray to be [ 'b', 'b' ]", () => {
    expect((() => {
      let myArray = ['a', 'b', 'c', 'a', 'b', 'c']

      myArray.pull('a', 'c')

      return myArray
    })()).toEqual([ 'b', 'b' ])
  })
})
