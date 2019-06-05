import ".";

describe("Array.prototype.limit", () => {
  test("[2, 1, 2, 5].limit(2) returns [2,1]", () => {
    expect([2, 1, 2, 5].limit(2)).toEqual([2, 1]);
  });
});
