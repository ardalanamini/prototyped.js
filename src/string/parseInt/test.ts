import ".";

describe("String.prototype.parseInt", () => {
  test('"08".parseInt() returns 8', () => {
    expect("08".parseInt()).toBe(8);
  });
});
