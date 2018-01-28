require('../../../es6/array/isInstance')

describe("Array.isInstance", () => {
  test("Array.isInstance(2) returns false", () => {
    expect(Array.isInstance(2)).toBe(false)
  })

  test("Array.isInstance([7, 3]) returns true", () => {
    expect(Array.isInstance([7, 3])).toBe(true)
  })
})
