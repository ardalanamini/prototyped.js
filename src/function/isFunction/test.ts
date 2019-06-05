import ".";

describe("Function.isFunction", () => {
  test("Function.isFunction(2) returns false", () => {
    expect(Function.isFunction(2)).toBe(false);
  });

  test("Function.isFunction((() => {})) returns true", () => {
    expect(Function.isFunction(() => {})).toBe(true);
  });

  test("Function.isFunction(jest.fn()) returns true", () => {
    expect(Function.isFunction(jest.fn())).toBe(true);
  });
});
