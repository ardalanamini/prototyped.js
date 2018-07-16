import "./index";

beforeAll(() => {
  // Jest creates virtual ones !
  delete (global as any).window;
  delete (global as any).document;
});

describe("Global.isBrowser", () => {
  test("isBrowser() returns false", () => {
    expect(isBrowser()).toBe(false);
  });
});
