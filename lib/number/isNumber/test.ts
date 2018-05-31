import "./index";

describe("Number.isNumber", () => {
  test("Number.isNumber(\"foo bar\") returns false", () => {
    expect(Number.isNumber("foo bar"))
      .toBe(false);
  });

  test("Number.isNumber(2) returns true", () => {
    expect(Number.isNumber(2))
      .toBe(true);
  });
});
