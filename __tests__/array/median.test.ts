import "../../src/shim";

describe("Array.prototype.median", () => {
  test("[1, 1, 2, 4].median() returns 1.5", () => {
    expect([1, 1, 2, 4].median()).toBe(1.5);
  });

  test("[1, 1, 2].median() returns 1", () => {
    expect([1, 1, 2].median()).toBe(1);
  });

  test('[{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median("foo") returns 15', () => {
    expect(
      [{ foo: 10 }, { foo: 10 }, { foo: 20 }, { foo: 40 }].median("foo"),
    ).toBe(15);
  });

  test('[{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median("bar") returns NaN', () => {
    expect(
      [{ foo: 10 }, { foo: 10 }, { foo: 20 }, { foo: 40 }].median(
        "bar" as never,
      ),
    ).toBeNaN();
  });

  test('[{foo: 10}, {foo: 10}, {foo: 20}].median("foo") returns 10', () => {
    expect([{ foo: 10 }, { foo: 10 }, { foo: 20 }].median("foo")).toBe(10);
  });
});
