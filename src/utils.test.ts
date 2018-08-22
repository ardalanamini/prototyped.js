import * as utils from "./utils";

describe("utils", () => {
  test("pathToKeys", () => {
    expect(utils.pathToKeys("selector.to[0][11].value"))
      .toEqual(["selector", "to", 0, 11, "value"]);
  });

  test("addPrototype to Object", () => {
    utils.addPrototype(Object, "a", () => 1);

    utils.addPrototype(Object, "a", () => 2);

    expect((Object.prototype as any).a()).toBe(1);
  });

  test("addPrototype to String", () => {
    utils.addPrototype(String, "a", () => 1);

    utils.addPrototype(String, "a", () => 2);

    expect((String.prototype as any).a()).toBe(1);
  });

  test("deepClone String", () => {
    expect(utils.deepClone("Hello world")).toBe("Hello world");
  });

  test("deepClone Number", () => {
    expect(utils.deepClone(22)).toBe(22);
  });

  test("deepClone Boolean", () => {
    expect(utils.deepClone(true)).toBe(true);
  });

  test("deepClone Function", () => {
    function a() { }
    expect(utils.deepClone(a)).toBe(a);
  });

  test("deepClone Date", () => {
    const base = new Date();
    const date = new Date(base.getTime());

    const cloned = utils.deepClone(date);

    expect(cloned).toBeInstanceOf(Date);

    date.setDate(date.getDate() + 1);

    expect(date).not.toEqual(base);
    expect(cloned).toEqual(base);
  });
});
