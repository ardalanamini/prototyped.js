import "./index";

describe("Array.prototype.median", () => {
  test("[1, 1, 2, 4].median() returns 1.5", () => {
    expect([1, 1, 2, 4].median()).toBe(1.5);
  });

  test("[{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median(\"foo\") returns 15", () => {
    expect([{ foo: 10 }, { foo: 10 }, { foo: 20 }, { foo: 40 }].median("foo")).toBe(15);
  });
});
