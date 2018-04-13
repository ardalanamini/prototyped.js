import "./index";

describe("Object.isInstance", () => {
  test("Object.isInstance(2) returns false", () => {
    expect(Object.isInstance(2)).toBe(false);
  });

  test("Object.isInstance({foo: \"bar\"}) returns true", () => {
    expect(Object.isInstance({foo: "bar"})).toBe(true);
  });
});
