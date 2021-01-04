import "../../src/array/whereNotIn";

describe("Array.prototype.whereNotIn", () => {
  test("[1, 2, 2, 3, 4, 4, 5].whereNotIn([3,4]) returns [1,2,2,5]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].whereNotIn([3, 4])).toEqual([1, 2, 2, 5]);
  });

  test('[{count:1}, {count:20}, {count:15}].whereNotIn("count", [1, 15]) returns [{count:20}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].whereNotIn("count", [1, 15]),
    ).toEqual([{ count: 20 }]);
  });
});
