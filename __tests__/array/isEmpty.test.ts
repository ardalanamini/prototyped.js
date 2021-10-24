import "prototyped.js/shim";

describe("Array.prototype.isEmpty", () => {
  test("[1,2].isEmpty() returns false", () => {
    expect([1, 2].isEmpty()).toBe(false);
  });

  test("[].isEmpty() returns true", () => {
    expect([].isEmpty()).toBe(true);
  });
});
