import "./index";

describe("Object.isObject", () => {
  test("Object.isObject(2) returns false", () => {
    expect(Object.isObject(2)).toBe(false);
  });

  test("Object.isObject({foo: \"bar\"}) returns true", () => {
    expect(Object.isObject({foo: "bar"})).toBe(true);
  });
});
