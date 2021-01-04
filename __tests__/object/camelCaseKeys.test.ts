import "../../src/object/camelCaseKeys";

describe("Object.prototype.$camelCaseKeys", () => {
  test(
    '{ First_name: "Adam", "last-name": "Smith" }.$camelCaseKeys() returns ' +
      '{firstName: "Adam", lastName: "Smith"}',
    () => {
      expect(
        { First_name: "Adam", "last-name": "Smith" }.$camelCaseKeys(),
      ).toEqual({ firstName: "Adam", lastName: "Smith" });
    },
  );
});
