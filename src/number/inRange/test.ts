import "./index";

describe("Number.prototype.inRange", () => {
  test("Number.inRange(4, 8) returns true", () => {
    expect(Number.inRange(4, 8)).toBe(true);
  });
});
