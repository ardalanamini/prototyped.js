import ".";

describe("String.prototype.reverse", () => {
  test('"foobar".reverse() returns "raboof"', () => {
    expect("foobar".reverse()).toBe("raboof");
  });
});
