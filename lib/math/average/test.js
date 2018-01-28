require('../../../es6/math/average')

describe("Math.average", () => {
  test("Math.average(1, 2, 3) returns 2", () => {
    expect(Math.average(1, 2, 3))
      .toBe(2)
  })
})
