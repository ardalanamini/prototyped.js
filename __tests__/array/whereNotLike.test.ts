import "../../src/array/whereNotLike";

describe("Array.prototype.whereNotLike", () => {
  test('["foo", "bar", "hello", "world"].whereNotLike("o") returns ["bar"]', () => {
    expect(["foo", "bar", "hello", "world"].whereNotLike("o")).toEqual(["bar"]);
  });

  // tslint:disable-next-line: max-line-length
  test('[{foo:"hello"}, {foo:"bar"}, {foo:"world"}].whereNotLike("foo", /o/i) returns [{foo:"bar"}]', () => {
    expect(
      [{ foo: "hello" }, { foo: "bar" }, { foo: "world" }].whereNotLike(
        "foo",
        /o/i,
      ),
    ).toEqual([{ foo: "bar" }]);
  });
});
