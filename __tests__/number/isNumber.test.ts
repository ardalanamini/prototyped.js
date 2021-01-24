import "../../src/shim";

describe("Number.isNumber", () => {
  test('Number.isNumber("foo bar") returns false', () => {
    expect(Number.isNumber("foo bar")).toBe(false);
  });

  test('Number.isNumber("2") returns false', () => {
    expect(Number.isNumber("2")).toBe(false);
  });

  test("Number.isNumber(new Number(2)) returns true", () => {
    expect(Number.isNumber(new Number(2))).toBe(true);
  });

  test("Number.isNumber(2) returns true", () => {
    expect(Number.isNumber(2)).toBe(true);
  });
});
