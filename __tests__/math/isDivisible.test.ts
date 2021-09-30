import "@src/shim";

describe("Math.isDivisible", () => {
  test("Math.isDivisible(6, 3) returns true", () => {
    expect(Math.isDivisible(6, 3)).toBe(true);
  });
});
