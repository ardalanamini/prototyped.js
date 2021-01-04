import "../../src/array/max";

describe("Array.prototype.max", () => {
  test("[1, 2, 3].max() returns 3", () => {
    expect([1, 2, 3].max()).toBe(3);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].max("a") returns 3', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].max("a")).toBe(3);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].max("b") returns -Infinity', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].max("b")).toBe(-Infinity);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max("a.b") returns 3', () => {
    expect([{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].max("a.b")).toBe(
      3,
    );
  });
});
