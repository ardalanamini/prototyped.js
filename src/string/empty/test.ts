import "./index";

describe("String.prototype.empty", () => {
  test("\"123\".empty() returns false", () => {
    expect("123".empty()).toEqual(false);
  });

  test("\"\".empty() returns true", () => {
    expect("".empty()).toBe(true);
  });
});
