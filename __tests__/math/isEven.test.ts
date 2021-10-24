import "prototyped.js/shim";

describe("Math.isEven", () => {
  test("Math.isEven(3) returns false", () => {
    expect(Math.isEven(3)).toBe(false);
  });
});
