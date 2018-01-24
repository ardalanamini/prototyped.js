require('../es6/math.js')

describe("Math.average", () => {
  test("Math.average(1, 2, 3) returns 2", () => {
    expect(Math.average(1, 2, 3))
      .toBe(2)
  })
})

describe("Math.factorial", () => {
  test("Math.factorial(6) returns 720", () => {
    expect(Math.factorial(6))
      .toBe(720)
  })
})

describe("Math.fibonacci", () => {
  test("Math.fibonacci(6) returns [0, 1, 1, 2, 3, 5]", () => {
    expect(Math.fibonacci(6))
      .toEqual([0, 1, 1, 2, 3, 5])
  })
})

describe("Math.gcd", () => {
  test("Math.gcd(...[12, 8, 32]) returns 4", () => {
    expect(Math.gcd(...[12, 8, 32]))
      .toBe(4)
  })
})

describe("Math.isEven", () => {
  test("Math.isEven(3) returns false", () => {
    expect(Math.isEven(3))
      .toBe(false)
  })
})

describe("Math.isPrime", () => {
  test("Math.isPrime(11) returns true", () => {
    expect(Math.isPrime(11))
      .toBe(true)
  })
})

describe("Math.lcm", () => {
  test("Math.lcm(12, 7) returns 84", () => {
    expect(Math.lcm(12, 7))
      .toBe(84)
  })
})
