import ".";

describe("Object.prototype.$empty", () => {
  test("{ a: 1 }.$empty()", () => {
    const obj = { a: 1 };
    obj.$empty();
    expect(obj).toEqual({});
  });
});
