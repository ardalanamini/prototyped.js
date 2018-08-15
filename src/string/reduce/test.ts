import "./index";

describe("String.prototype.reduce", () => {
  test("'123'.reduce((prev, char) => prev + (+char), 0) returns 6", () => {
    expect("123".reduce((prev, char) => prev + (+char), 0)).toBe(6);
  });
});
