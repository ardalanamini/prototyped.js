import ".";

describe("String.prototype.mask", () => {
  test('"1234567890".mask() returns "******7890"', () => {
    expect("1234567890".mask()).toBe("******7890");
  });

  test('"1234567890".mask(3) returns "*******890"', () => {
    expect("1234567890".mask(3)).toBe("*******890");
  });

  test('"1234567890".mask(-4, "$") returns "$$$$567890"', () => {
    expect("1234567890".mask(-4, "$")).toBe("$$$$567890");
  });
});
