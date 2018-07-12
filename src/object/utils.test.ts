import * as utils from "./utils";

describe("Object utils", () => {
  test("addPrototype", () => {
    utils.addPrototype("a", () => 1);

    utils.addPrototype("a", () => 2);

    expect((Object.prototype as any).a()).toBe(1);
  });
});
