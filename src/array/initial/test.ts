import "./index";

describe("Array.prototype.initial", () => {
  test("[1, 2, 3].initial() returns [1, 2]", () => {
    expect([1, 2, 3].initial()).toEqual([1, 2]);
  });
});
