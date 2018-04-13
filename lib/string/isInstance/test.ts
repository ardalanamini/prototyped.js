import "./index";

describe("String.isInstance", () => {
  test("String.isInstance(2) returns false", () => {
    expect(String.isInstance(2))
      .toBe(false);
  });

  test("String.isInstance(\"foo bar\") returns true", () => {
    expect(String.isInstance("foo bar"))
      .toBe(true);
  });
});
