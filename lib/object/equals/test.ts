import "./index";

describe("Object.prototype.$equals", () => {
  test("{ a: [2, { e: 3 }], b: [4], c: 'foo' }.$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }) returns true", () => {
    expect({ a: [2, { e: 3 }], b: [4], c: "foo" }.$equals({ a: [2, { e: 3 }], b: [4], c: "foo" }))
      .toBe(true);
  });

  test("{ a: [2, { e: 3 }], b: [4], c: 'foo' }.$equals(new Date()) returns false", () => {
    expect({ a: [2, { e: 3 }], b: [4], c: "foo" }.$equals(new Date()))
      .toBe(false);
  });

  test("date.$equals({ a: 1 }) returns false", () => {
    const date = new Date();

    expect(date.$equals({ a: 1 }))
      .toBe(false);
  });
});
