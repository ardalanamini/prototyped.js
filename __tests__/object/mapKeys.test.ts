import "../../src/shim";

describe("Object.prototype.$mapKeys", () => {
  test("{ a: 1, b: 2 }.$mapKeys((val, key) => key + val) returns { a1: 1, b2: 2 }", () => {
    expect({ a: 1, b: 2 }.$mapKeys((val, key) => key + val)).toEqual({
      a1: 1,
      b2: 2,
    });
  });
});
