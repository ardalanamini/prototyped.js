import "../../src/array/orderBy";

describe("Array.prototype.orderBy", () => {
  test("[2, 1, 2, 5].orderBy() returns [1,2,2,5]", () => {
    expect([2, 1, 2, 5].orderBy()).toEqual([1, 2, 2, 5]);
  });

  test('[2, 1, 2, 5].orderBy("desc") returns [5,2,2,1]', () => {
    expect([2, 1, 2, 5].orderBy("desc")).toEqual([5, 2, 2, 1]);
  });

  test('[{count:1},{count:20},{count:15}].orderBy("count","asc") returns [{count:1},{count:15},{count:20}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].orderBy("count", "asc"),
    ).toEqual([{ count: 1 }, { count: 15 }, { count: 20 }]);
  });
});
