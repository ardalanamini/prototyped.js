import "./index";

describe("Object.prototype.$equals", () => {
  test("{ a: [2, { e: 3 }], b: [4], c: 'foo' }.$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }) returns true", () => {
    expect({ a: [2, { e: 3 }], b: [4], c: "foo" }.$equals({ a: [2, { e: 3 }], b: [4], c: "foo" }))
      .toBe(true);
  });
});
