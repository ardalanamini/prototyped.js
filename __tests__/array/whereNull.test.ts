import "prototyped.js/shim";

describe("Array.prototype.whereNull", () => {
  test("[1, 2, 2, 3, null, undefined, 5].whereNull() returns [null, undefined]", () => {
    // eslint-disable-next-line no-undefined
    expect([1, 2, 2, 3, null, undefined, 5].whereNull()).toEqual([
      null,
      // eslint-disable-next-line no-undefined
      undefined,
    ]);
  });

  test('[{count:1}, {count:null}, {foo:15}].whereNull("count") returns [{count:null},{foo:15}]', () => {
    expect([{ count: 1 }, { count: null }, { foo: 15 }].whereNull("count")).toEqual([{ count: null }, { foo: 15 }]);
  });
});
