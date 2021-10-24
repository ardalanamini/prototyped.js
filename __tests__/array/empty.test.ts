import "prototyped.js/shim";

describe("Array.prototype.empty", () => {
  test("[1,2].empty()", () => {
    const arr = [1, 2];
    arr.empty();
    expect(arr).toEqual([]);
  });
});
