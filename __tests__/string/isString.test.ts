import "../../src/shim";

describe("String.isString", () => {
  test("String.isString(2) returns false", () => {
    expect(String.isString(2)).toBe(false);
  });

  test('String.isString("foo bar") returns true', () => {
    expect(String.isString("foo bar")).toBe(true);
  });
});
