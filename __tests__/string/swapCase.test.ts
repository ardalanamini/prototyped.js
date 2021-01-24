import "../../src/shim";

describe("String.prototype.swapCase", () => {
  test('"Hello".swapCase() returns "hELLO"', () => {
    expect("Hello".swapCase()).toBe("hELLO");
  });
});
