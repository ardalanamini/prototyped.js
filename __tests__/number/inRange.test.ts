import "prototyped.js/shim";

describe("Number.prototype.inRange", () => {
  test("(4).inRange(8) returns true", () => {
    expect((4).inRange(8)).toBe(true);
  });
});
