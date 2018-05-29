import "./index";

describe("String.repeat", () => {
  test("String.repeat(5, \"2\") returns \"22222\"", () => {
    expect(String.repeat(5, "2")).toEqual("22222");
  });

  test("String.repeat(2) returns \"  \"", () => {
    expect(String.repeat(2)).toEqual("  ");
  });
});
