import "../../src/array/whereLike";

describe("Array.prototype.whereLike", () => {
  test('["foo", "bar", "hello", "world"].whereLike("o") returns ["foo","hello","world"]', () => {
    expect(["foo", "bar", "hello", "world"].whereLike("o")).toEqual([
      "foo",
      "hello",
      "world",
    ]);
  });

  // tslint:disable-next-line: max-line-length
  test('[{foo:"hello"},{foo:"bar"},{foo:"world"}].whereLike("foo",/o/i) returns [{foo:"hello"},{foo:"world"}]', () => {
    expect(
      [{ foo: "hello" }, { foo: "bar" }, { foo: "world" }].whereLike(
        "foo",
        /o/i,
      ),
    ).toEqual([{ foo: "hello" }, { foo: "world" }]);
  });
});