import "./index";

describe("Object.prototype.$clone", () => {
  test("{ foo: 'bar', obj: { a: 1, b: 2 } }.$clone(true)", () => {
    const a = { foo: "bar", obj: { a: 1, b: 2 } };
    const b = a.$clone(true); // a !== b, a.obj !== b.obj

    expect(a).not.toBe(b);
    expect(a.obj).not.toBe((b as any).obj);
  });
});
