import "prototyped.js/shim";

describe("Array.prototype.sum", () => {
  test("[1, 2, 3].sum() returns 6", () => {
    expect([1, 2, 3].sum()).toBe(6);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].sum("a") returns 6', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].sum("a")).toBe(6);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum("a.b") returns 6', () => {
    expect([{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].sum("a.b")).toBe(
      6,
    );
  });

  test('[{a: 1}, {a: 2}, {a: 3}].sum("b") returns 0', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].sum("b" as never)).toBe(0);
  });
});
