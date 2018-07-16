import "./index";

describe("Array.prototype.clone", () => {
  test("[1, 2, 3].clone() returns [1, 2, 3]", () => {
    expect([1, 2, 3].clone()).toEqual([1, 2, 3]);
  });
});
