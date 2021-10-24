import "prototyped.js/shim";

describe("Array.prototype.shuffle", () => {
  test("[1, 2, 3].shuffle() returns something like [2,3,1]", () => {
    expect([1, 2, 3].shuffle()).toEqual(expect.arrayContaining([2, 3, 1]));
  });
});
