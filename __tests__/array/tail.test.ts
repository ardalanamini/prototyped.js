import "prototyped.js/shim";

describe("Array.prototype.tail", () => {
  test("[1, 2, 3].tail() returns [2, 3]", () => {
    expect([1, 2, 3].tail()).toEqual([2, 3]);
  });

  test("[1].tail() returns []", () => {
    expect([1].tail()).toEqual([]);
  });
});
