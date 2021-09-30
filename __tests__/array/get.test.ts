import "@src/shim";

describe("Array.prototype.get", () => {
  test('[1, 2, 3].get(0, "default value") returns 1', () => {
    expect([1, 2, 3].get(0, "default value")).toBe(1);
  });

  test("[1, 2, 3].get(4, -10) returns -10", () => {
    expect([1, 2, 3].get(4, -10)).toBe(-10);
  });

  test("[1, 2, 3].get(4) returns null", () => {
    expect([1, 2, 3].get(4)).toBe(null);
  });
});
