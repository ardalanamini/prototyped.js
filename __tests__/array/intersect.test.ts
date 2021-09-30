import "@src/shim";

describe("Array.prototype.intersect", () => {
  test("[1, 2, 3].intersect([4, 3, 2]) returns [2,3]", () => {
    expect([1, 2, 3].intersect([4, 3, 2])).toEqual([2, 3]);
  });
});
