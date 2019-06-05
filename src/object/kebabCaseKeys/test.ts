import ".";

describe("Object.prototype.$kebabCaseKeys", () => {
  test(
    '{ First_name: "Adam", lastName: "Smith" }.$kebabCaseKeys() returns ' +
      '{firstName: "Adam", lastName: "Smith"}',
    () => {
      expect(
        { First_name: "Adam", lastName: "Smith" }.$kebabCaseKeys(),
      ).toEqual({ "first-name": "Adam", "last-name": "Smith" });
    },
  );
});
