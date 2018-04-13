import "./index";

describe("Array.prototype.all", () => {
  test("[4, 2, 3].all((x) => x > 1) returns true", () => {
    expect([4, 2, 3].all((x) => x > 1)).toBe(true);
  });

  test("[1, 2, 3].all() returns true", () => {
    expect([1, 2, 3].all()).toBe(true);
  });
});
