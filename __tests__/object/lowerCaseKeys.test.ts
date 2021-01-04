import "../../src/object/lowerCaseKeys";

describe("Object.prototype.$lowerCaseKeys", () => {
  // tslint:disable-next-line: max-line-length
  test('{ Name: "Adam", sUrnAME: "Smith" }.$lowerCaseKeys() returns {name: "Adam", surname: "Smith"}', () => {
    expect({ Name: "Adam", sUrnAME: "Smith" }.$lowerCaseKeys()).toEqual({
      name: "Adam",
      surname: "Smith",
    });
  });
});
