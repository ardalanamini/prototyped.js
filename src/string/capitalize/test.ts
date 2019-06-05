import ".";

describe("String.prototype.capitalize", () => {
  test('"foo bar".capitalize() returns "Foo bar"', () => {
    expect("foo bar".capitalize()).toBe("Foo bar");
  });

  test('"hello world".capitalize(true) returns "Hello World"', () => {
    expect("hello world".capitalize(true)).toBe("Hello World");
  });
});
