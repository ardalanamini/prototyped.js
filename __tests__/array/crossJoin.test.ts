import "prototyped.js/shim";

describe("Array.prototype.crossJoin", () => {
  test('[1, 2].crossJoin(["a", "b"]); returns [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]', () => {
    expect([1, 2].crossJoin(["a", "b"])).toEqual([
      [1, "a"],
      [1, "b"],
      [2, "a"],
      [2, "b"],
    ]);
  });
});
