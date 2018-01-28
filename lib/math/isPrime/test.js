require('../../../es6/math/isPrime')

describe("Math.isPrime", () => {
  test("Math.isPrime(11) returns true", () => {
    expect(Math.isPrime(11))
      .toBe(true)
  })
})
