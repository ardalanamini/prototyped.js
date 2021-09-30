import "@src/shim";

describe("Object.prototype.$snakeCaseKeys", () => {
  test(
    '{ FirstName: "Adam", "last-name": "Smith" }.$snakeCaseKeys() returns ' +
      '{first_name: "Adam", last_name: "Smith"}',
    () => {
      expect(
        { FirstName: "Adam", "last-name": "Smith" }.$snakeCaseKeys(),
      ).toEqual({ first_name: "Adam", last_name: "Smith" });
    },
  );
});
