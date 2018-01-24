require('../es6/date.js')

describe("Date.isInstance", () => {
  test("Date.isInstance('foo bar') returns false", () => {
    expect(Date.isInstance('foo bar'))
      .toBe(false)
  })

  test("Date.isInstance(new Date()) returns true", () => {
    expect(Date.isInstance(new Date()))
      .toBe(true)
  })
})
