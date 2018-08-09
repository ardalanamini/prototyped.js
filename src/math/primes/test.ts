import "./index";

describe("Math.primes", () => {
  test("Math.primes(10) returns [2, 3, 5, 7]", () => {
    expect(Math.primes(10))
      .toEqual([2, 3, 5, 7]);
  });
});
