import "prototyped.js/shim";

describe("Array.prototype.whereBetween", () => {
  test("[1, 2, 2, 3, 4, 4, 5].whereBetween(3,4) returns [3,4,4]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].whereBetween(3, 4)).toEqual([3, 4, 4]);
  });

  test('[{count:1}, {count:20}, {count:15}].whereBetween("count", 1, 15) returns [{count:1},{count:15}]', () => {
    expect(
      [{ count: 1 }, { count: 20 }, { count: 15 }].whereBetween("count", 1, 15),
    ).toEqual([{ count: 1 }, { count: 15 }]);
  });
});
