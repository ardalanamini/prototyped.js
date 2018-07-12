import "./index";

describe("Object.prototype.$get", () => {
  test("{ selector: { to: { val: 'val to select' } } }.$get('selector.to.val') returns 'val to select'", () => {
    expect({ selector: { to: { val: "val to select" } } }.$get("selector.to.val"))
      .toBe("val to select");
  });
});
