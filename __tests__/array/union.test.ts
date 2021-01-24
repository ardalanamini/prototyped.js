import "../../src/shim";

describe("Array.prototype.union", () => {
  test("[1, 2, 3].union([4, 3, 2]) returns [1,2,3,4]", () => {
    expect([1, 2, 3].union([4, 3, 2])).toEqual([1, 2, 3, 4]);
  });
});
