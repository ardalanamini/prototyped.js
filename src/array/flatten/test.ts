import ".";

describe("Array.prototype.flatten", () => {
  test("[1, [2], 3, 4].flatten() returns [1, 2, 3, 4]", () => {
    expect([1, [2], 3, 4].flatten()).toEqual([1, 2, 3, 4]);
  });

  test("[1, [2, [3, [4, 5], 6], 7], 8].flatten(2) returns [1, 2, 3, [4, 5], 6, 7, 8]", () => {
    expect([1, [2, [3, [4, 5], 6], 7], 8].flatten(2)).toEqual([
      1,
      2,
      3,
      [4, 5],
      6,
      7,
      8,
    ]);
  });
});
