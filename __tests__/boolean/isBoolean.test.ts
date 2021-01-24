import "../../src/shim";

describe("Boolean.isBoolean", () => {
  test('Boolean.isBoolean("foo bar") returns false', () => {
    expect(Boolean.isBoolean("foo bar")).toBe(false);
  });

  test("Boolean.isBoolean(false) returns true", () => {
    expect(Boolean.isBoolean(false)).toBe(true);
  });
});
