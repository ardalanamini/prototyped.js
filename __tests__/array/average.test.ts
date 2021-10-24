import "prototyped.js/shim";

describe("Array.prototype.average", () => {
  test("[1, 2, 3].average() returns 2", () => {
    expect([1, 2, 3].average()).toBe(2);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].average("a") returns 2', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].average("a")).toBe(2);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average("a.b") returns 2', () => {
    expect(
      [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].average("a.b"),
    ).toBe(2);
  });
});

describe("Array.prototype.avg", () => {
  test("[1, 2, 3].avg() returns 2", () => {
    expect([1, 2, 3].avg()).toBe(2);
  });

  test('[{a: 1}, {a: 2}, {a: 3}].avg("a") returns 2', () => {
    expect([{ a: 1 }, { a: 2 }, { a: 3 }].avg("a")).toBe(2);
  });

  test('[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].avg("a.b") returns 2', () => {
    expect([{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }].avg("a.b")).toBe(
      2,
    );
  });
});
