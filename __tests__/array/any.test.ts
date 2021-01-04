import "../../src/array/any";

describe("Array.prototype.any", () => {
  test("[0, 1, 2, 0].any((x) => x >= 2) returns true", () => {
    expect([0, 1, 2, 0].any((x) => x >= 2)).toBe(true);
  });

  test("[0, 0, 0].any() returns false", () => {
    expect([0, 0, 0].any()).toBe(false);
  });

  test("[0, 0, 1, 0].any() returns true", () => {
    expect([0, 0, 1, 0].any()).toBe(true);
  });
});
