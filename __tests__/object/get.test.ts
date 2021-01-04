import "../../src/object/get";

describe("Object.prototype.$get", () => {
  // tslint:disable-next-line: max-line-length
  test("{ selector: { to: { val: 'val to select' } } }.$get('selector.to.val') returns 'val to select'", () => {
    expect(
      { selector: { to: { val: "val to select" } } }.$get("selector.to.val"),
    ).toBe("val to select");
  });
});
