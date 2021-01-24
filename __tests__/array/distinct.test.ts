import "../../src/shim";

describe("Array.prototype.distinct", () => {
  test("[1, 2, 2, 3, 4, 4, 5].distinct() returns [1,2,3,4,5]", () => {
    expect([1, 2, 2, 3, 4, 4, 5].distinct()).toEqual([1, 2, 3, 4, 5]);
  });

  test('[{foo:{bar:[0,1]}}, {foo:{bar:[4,1]}}].distinct("foo.bar[1]") returns [{foo:{bar:[0,1]}}]', () => {
    expect(
      [{ foo: { bar: [0, 1] } }, { foo: { bar: [4, 1] } }].distinct(
        "foo.bar[1]",
      ),
    ).toEqual([{ foo: { bar: [0, 1] } }]);
  });

  test("[1, 2, 2.2, 3, 4.9, 4, 5].distinct(Math.floor) returns [1,2,3,4.9,5]", () => {
    expect([1, 2, 2.2, 3, 4.9, 4, 5].distinct(Math.floor)).toEqual([
      1,
      2,
      3,
      4.9,
      5,
    ]);
  });
});
