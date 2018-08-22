import "./index";

describe("Array.prototype.distinctBy", () => {
  test("[1, 2, 2, 3, 4, 4, 5].distinctBy((a, b) => a === b) returns [1,2,3,4,5]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].distinctBy((a, b) => a === b)).toEqual([1, 2, 3, 4, 5]);
  });
});
