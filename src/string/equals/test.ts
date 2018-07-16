import "./index";

describe("String.prototype.equals", () => {
  test("\"hello\".lines(\"hello\") returns true", () => {
    expect("hello".equals("hello")).toBe(true);
  });

  test("\"hello\".lines(\"Hello\") returns false", () => {
    expect("hello".equals("Hello")).toBe(false);
  });
});
