import "prototyped.js/shim";

describe("String.prototype.reduce", () => {
  test("'123'.reduce((prev, char) => prev + (+char), 0) returns 6", () => {
    expect("123".reduce((prev, char) => prev + +char, 0)).toBe(6);
  });

  test("'123'.reduce((prev = 0, char) => prev + (+char)) returns 6", () => {
    // eslint-disable-next-line @typescript-eslint/default-param-last
    expect("123".reduce((prev = 0, char) => prev + +char)).toBe(6);
  });
});
