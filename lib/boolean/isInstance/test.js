require('../../../es6/boolean/isInstance')

describe("Boolean.isInstance", () => {
  test("Boolean.isInstance('foo bar') returns false", () => {
    expect(Boolean.isInstance('foo bar'))
      .toBe(false)
  })

  test("Boolean.isInstance(false) returns true", () => {
    expect(Boolean.isInstance(false))
      .toBe(true)
  })
})
