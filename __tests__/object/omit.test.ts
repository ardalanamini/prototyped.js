import "prototyped.js/shim";

describe("Object.prototype.$omit", () => {
  test("{ a: 1, b: '2', c: 3 }.$omit(['b']) returns { a: 1, c: 3 }", () => {
    expect({
      a: 1,
      b: "2",
      c: 3,
    }.$omit(["b"])).toEqual({
      a: 1,
      c: 3,
    });
  });

  test("{ a: 1, b: '2', c: 3 }.$omit((x) => typeof x === 'number') returns { b: '2' }", () => {
    expect({
      a: 1,
      b: "2",
      c: 3,
    }.$omit(x => typeof x === "number")).toEqual({
      b: "2",
    });
  });
});
