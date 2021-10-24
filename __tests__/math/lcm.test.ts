import "prototyped.js/shim";

describe("Math.lcm", () => {
  test("Math.lcm(12, 7) returns 84", () => {
    expect(Math.lcm(12, 7)).toBe(84);
  });
});
