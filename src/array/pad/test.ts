import ".";

describe("Array.prototype.pad", () => {
  test("[1, 2, 3].pad(2) returns [1, 2, 3]", () => {
    expect([1, 2, 3].pad(2)).toEqual([1, 2, 3]);
  });

  test("[1, 2, 3].pad(5) returns [1, 2, 3, 0, 0]", () => {
    expect([1, 2, 3].pad(5)).toEqual([1, 2, 3, 0, 0]);
  });

  test("[1, 2, 3].pad(-5, 1) returns [1, 1, 1, 2, 3]", () => {
    expect([1, 2, 3].pad(-5, 1)).toEqual([1, 1, 1, 2, 3]);
  });
});
