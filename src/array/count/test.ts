import ".";

describe("Array.prototype.count", () => {
  test("[1, 1, 2, 1, 2, 3].count() returns 6", () => {
    expect([1, 1, 2, 1, 2, 3].count()).toBe(6);
  });

  test("[1, 1, 2, 1, 2, 3].count(1) returns 3", () => {
    expect([1, 1, 2, 1, 2, 3].count(1)).toBe(3);
  });
});
