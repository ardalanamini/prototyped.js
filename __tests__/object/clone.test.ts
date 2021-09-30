import "@src/shim";

describe("Object.prototype.$clone", () => {
  test("{ foo: 'bar', obj: { a: 1, b: 2 } }.$clone()", () => {
    const a = { foo: "bar", obj: { a: 1, b: 2 } };
    const b = a.$clone(); // a !== b, a.obj === b.obj

    expect(a).not.toBe(b);
    expect(a.obj).toBe(b.obj);
  });

  test("{ foo: 'bar', obj: { a: 1, b: 2 } }.$clone(true)", () => {
    const a = { foo: "bar", obj: { a: 1, b: 2 } };
    const b = a.$clone(true); // a !== b, a.obj !== b.obj

    expect(a).not.toBe(b);
    expect(a.obj).not.toBe(b.obj);
  });

  test("{ foo: 'bar', arr: [ 1, 2 ] }.$clone(true)", () => {
    const a = { foo: "bar", arr: [1, 2] };
    const b = a.$clone(true); // a !== b, a.arr !== b.arr

    expect(a).not.toBe(b);
    expect(a.arr).not.toBe(b.arr);
  });

  test("{ foo: 'bar', func: () => {} }.$clone(true)", () => {
    const a = {
      foo: "bar",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      func: () => {},
    };
    const b = a.$clone(true); // a !== b

    expect(a).not.toBe(b);
    expect(typeof b.func).toBe("function");
  });
});
