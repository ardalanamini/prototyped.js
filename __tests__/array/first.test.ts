import "prototyped.js/shim";

describe("Array.prototype.first", () => {
  test("[1, 2, 3].first() returns 1", () => {
    expect([1, 2, 3].first()).toBe(1);
  });
});
