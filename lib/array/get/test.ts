import "./index";

describe("Array.prototype.get", () => {
  test("[1, 2, 3].get(0, \"default value\") returns 1", () => {
    expect([1, 2, 3].get(0, "default value")).toBe(1);
  });

  test("[1, 2, 3].get(4, -10) returns 0", () => {
    expect([1, 2, 3].get(4, -10)).toBe(-10);
  });
});
