import "./index";

describe("Object.isObject", () => {
  test("Object.isObject(2) returns false", () => {
    expect(Object.isObject(2)).toBe(false);
  });

  test("Object.isObject({foo: \"bar\"}) returns true", () => {
    expect(Object.isObject({foo: "bar"})).toBe(true);
  });

  test("Object.isObject([1, 2]) returns true", () => {
    expect(Object.isObject([1, 2])).toBe(true);
  });

  test("Object.isObject(Function) returns true", () => {
    expect(Object.isObject(Function)).toBe(true);
  });

  test("Object.isObject(null) returns false", () => {
    expect(Object.isObject(null)).toBe(false);
  });
});
