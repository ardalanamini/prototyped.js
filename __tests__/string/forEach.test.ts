import "../../src/string/forEach";

describe("String.prototype.forEach", () => {
  test('"Hello".forEach((char, i) => char == "o" && (index = i)); // index === 4', () => {
    let index = -1;

    "Hello".forEach((char, i) => char === "o" && (index = i));

    expect(index).toBe(4);
  });
});
