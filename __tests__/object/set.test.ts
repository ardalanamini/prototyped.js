import "prototyped.js/shim";

describe("Object.prototype.$set", () => {
  test("{ selector: { to: { val: 'val to select' } } }.$set('selector.to.val', 'new value')", () => {
    const obj = { selector: { to: { val: "val to select" } } };

    obj.$set("selector.to.val", "new value");

    expect(obj).toEqual({ selector: { to: { val: "new value" } } });
  });

  it("shouldn't set/overwrite prototype/constructor keys", () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    expect(({} as Record<string, unknown>).foo).toBeUndefined();

    ({}.$set("__proto__.foo", "bar"));

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    expect(({} as Record<string, unknown>).foo).toBeUndefined();
  });
});
