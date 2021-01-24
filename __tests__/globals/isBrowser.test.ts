import "../../src/shim";

beforeAll(() => {
  // Jest creates virtual ones !
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (global as any).window;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (global as any).document;
});

describe("Global.isBrowser", () => {
  test("isBrowser() returns false", () => {
    expect(isBrowser()).toBe(false);
  });
});
