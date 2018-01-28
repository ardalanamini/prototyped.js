require('../../../es6/function/isInstance')

describe("Function.isInstance", () => {
  test("Function.isInstance(2) returns false", () => {
    expect(Function.isInstance(2))
      .toBe(false)
  })

  test("Function.isInstance((() => {})) returns true", () => {
    expect(Function.isInstance((() => {})))
      .toBe(true)
  })
})
