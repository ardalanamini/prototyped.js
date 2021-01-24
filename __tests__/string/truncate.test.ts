import "../../src/shim";

describe("String.prototype.truncate", () => {
  test('"boomerang".truncate(7) returns "boom..."', () => {
    expect("boomerang".truncate(7)).toBe("boom...");
  });

  test('"boomerang".truncate(7, "....") returns "boo...."', () => {
    expect("boomerang".truncate(7, "....")).toBe("boo....");
  });

  test('"boomerang".truncate(10) returns "boomerang"', () => {
    expect("boomerang".truncate(10)).toBe("boomerang");
  });

  test('"boomerang".truncate(2) returns "bo..."', () => {
    expect("boomerang".truncate(2)).toBe("bo...");
  });
});
