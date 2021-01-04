import "../../src/function/isFunction";

describe("Function.isFunction", () => {
  test("Function.isFunction(2) returns false", () => {
    expect(Function.isFunction(2)).toBe(false);
  });

  test("Function.isFunction((() => {})) returns true", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(Function.isFunction(() => {})).toBe(true);
  });

  test("Function.isFunction(jest.fn()) returns true", () => {
    expect(Function.isFunction(jest.fn())).toBe(true);
  });
});
