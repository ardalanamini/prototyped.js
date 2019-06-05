import ".";

describe("Array.prototype.whereNotNull", () => {
  test("[1, 2, 2, 3, null, undefined, 5].whereNotNull() returns [1,2,2,3,5]", () => {
    expect([1, 2, 2, 3, null, undefined, 5].whereNotNull()).toEqual([
      1,
      2,
      2,
      3,
      5,
    ]);
  });

  test('[{count:1}, {count:null}, {foo:15}].whereNotNull("count") returns [{count:1}]', () => {
    expect(
      [{ count: 1 }, { count: null }, { foo: 15 }].whereNotNull("count"),
    ).toEqual([{ count: 1 }]);
  });
});
