import "../../src/shim";

describe("Array.prototype.indexOfAll", () => {
  test("[1, 2, 3, 1, 2, 3].indexOfAll(1) returns [0,3]", () => {
    expect([1, 2, 3, 1, 2, 3].indexOfAll(1)).toEqual([0, 3]);
  });

  test("[1, 2, 3].indexOfAll(4) returns []", () => {
    expect([1, 2, 3].indexOfAll(4)).toEqual([]);
  });
});
