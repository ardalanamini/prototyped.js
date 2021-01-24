import "../../src/shim";

describe("Number.prototype.equals", () => {
  test('(22).equals("22") returns false', () => {
    expect((22).equals("22")).toBe(false);
  });

  test("(22).equals(22) returns true", () => {
    expect((22).equals(22)).toBe(true);
  });
});
