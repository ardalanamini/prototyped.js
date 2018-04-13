import "./index";

describe("Array.prototype.pad", () => {
  test("[1, 2, 3].pad(5, 0) returns [1, 2, 3, 0, 0]", () => {
    expect([1, 2, 3].pad(5, 0)).toEqual([1, 2, 3, 0, 0]);
  });

  test("[1, 2, 3].pad(-5, 0) returns [0, 0, 1, 2, 3]", () => {
    expect([1, 2, 3].pad(-5, 0)).toEqual([0, 0, 1, 2, 3]);
  });
});
