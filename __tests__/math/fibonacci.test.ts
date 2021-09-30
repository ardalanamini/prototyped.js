import "@src/shim";

describe("Math.fibonacci", () => {
  test("Math.fibonacci(6) returns [0, 1, 1, 2, 3, 5]", () => {
    expect(Math.fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
});
