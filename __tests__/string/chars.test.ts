import "prototyped.js/shim";

describe("String.prototype.chars", () => {
  test('"Hello".chars() returns ["H", "e", "l", "l", "o"]', () => {
    expect("Hello".chars()).toEqual(["H", "e", "l", "l", "o"]);
  });
});
