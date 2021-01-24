import "../../src/shim";

describe("Array.prototype.all", () => {
  test("[4, 2, 3].all((x) => x > 1) returns true", () => {
    expect([4, 2, 3].all((x) => x > 1)).toBe(true);
  });

  test("[4, 2, 3].all((x) => x > 2) returns false", () => {
    expect([4, 2, 3].all((x) => x > 2)).toBe(false);
  });

  test("[1, 2, 3].all() returns true", () => {
    expect([1, 2, 3].all()).toBe(true);
  });
});
