import "./index";

describe("Math.gcd", () => {
  test("Math.gcd(...[12, 8, 32]) returns 4", () => {
    expect(Math.gcd(...[12, 8, 32]))
      .toBe(4);
  });
});
