import "./index";

describe("Math.isPrime", () => {
  test("Math.isPrime(4) returns false", () => {
    expect(Math.isPrime(4))
      .toBe(false);
  });

  test("Math.isPrime(11) returns true", () => {
    expect(Math.isPrime(11))
      .toBe(true);
  });
});
