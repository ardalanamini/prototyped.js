import "../../src/shim";

describe("Array.prototype.min", () => {
  test("[1, 2, 3].min() returns 1", () => {
    expect([1, 2, 3].min()).toBe(1);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].min("a") returns 1', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].min("a")).toBe(1);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].min("b") returns +Infinity', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].min("b" as never)).toBe(+Infinity);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min("a.b") returns 1', () => {
    expect([{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].min("a.b")).toBe(
      1,
    );
  });
});
