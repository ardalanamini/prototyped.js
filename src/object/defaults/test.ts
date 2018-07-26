import "./index";

describe("Object.prototype.$defaults", () => {
  test("{ a: 0 }.$defaults({ a: 1, b: 2 }, { b: 3 }) returns { a: 0, b: 2 }", () => {
    expect({ a: 0 }.$defaults({ a: 1, b: 2 }, { b: 3 })).toEqual({ a: 0, b: 2 });
  });
});
