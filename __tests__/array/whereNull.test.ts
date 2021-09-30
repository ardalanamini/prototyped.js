import "@src/shim";

describe("Array.prototype.whereNull", () => {
  test("[1, 2, 2, 3, null, undefined, 5].whereNull() returns [null, undefined]", () => {
    expect([1, 2, 2, 3, null, undefined, 5].whereNull()).toEqual([
      null,
      undefined,
    ]);
  });

  test('[{count:1}, {count:null}, {foo:15}].whereNull("count") returns [{count:null},{foo:15}]', () => {
    expect(
      [{ count: 1 }, { count: null }, { foo: 15 }].whereNull("count"),
    ).toEqual([{ count: null }, { foo: 15 }]);
  });
});
