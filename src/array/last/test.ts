import ".";

describe("Array.prototype.last", () => {
  test("[1, 2, 3].last() returns 3", () => {
    expect([1, 2, 3].last()).toBe(3);
  });
});
