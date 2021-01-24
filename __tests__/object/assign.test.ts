import "../../src/shim";

describe("Object.prototype.$assign", () => {
  test("{ a: 0 }.$assign({ a: 1 }, { b: 2 }) returns { a: 1, b: 2 }", () => {
    expect({ a: 0 }.$assign({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
