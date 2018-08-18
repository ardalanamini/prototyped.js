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
});
