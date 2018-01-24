require('../es6/number.js')

describe("Number.isInstance", () => {
  test("Number.isInstance('foo bar') returns false", () => {
    expect(Number.isInstance('foo bar'))
      .toBe(false)
  })

  test("Number.isInstance(2) returns true", () => {
    expect(Number.isInstance(2))
      .toBe(true)
  })
})
