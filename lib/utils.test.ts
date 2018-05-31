import * as utils from "./utils";

describe("General utils", () => {
  test("pathToKeys", () => {
    expect(utils.pathToKeys("selector.to[0][11].value"))
      .toEqual(["selector", "to", 0, 11, "value"]);
  });
});
