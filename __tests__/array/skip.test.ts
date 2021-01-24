import "../../src/shim";

describe("Array.prototype.skip", () => {
  test("[2, 1, 2, 5].skip(1) returns [1,2,5]", () => {
    expect([2, 1, 2, 5].skip(1)).toEqual([1, 2, 5]);
  });
});
