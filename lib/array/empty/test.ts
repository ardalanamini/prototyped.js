import "./index";

describe("Array.prototype.empty", () => {
  test("[1,2].empty() returns false", () => {
    expect([1, 2].empty()).toEqual(false);
  });

  test("[].empty() returns true", () => {
    expect([].empty()).toBe(true);
  });
});
