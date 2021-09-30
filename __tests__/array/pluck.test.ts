import "@src/shim";

describe("Array.prototype.pluck", () => {
  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck("a") returns [{b: 1}, {b: 2}, {b: 3}]', () => {
    expect(
      [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].pluck("a"),
    ).toEqual([{ b: 1 }, { b: 2 }, { b: 3 }]);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck("a.b") returns [1, 2, 3]', () => {
    expect(
      [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].pluck("a.b"),
    ).toEqual([1, 2, 3]);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck("a.c") returns [undefined, undefined, undefined]', () => {
    expect(
      [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].pluck("a.c" as never),
    ).toEqual([undefined, undefined, undefined]);
  });
});
