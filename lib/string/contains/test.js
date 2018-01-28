require('../../../es6/string/contains')

describe("String.prototype.contains", () => {
  test("'javaScript & typescript'.contains('Typescript'); // true", () => {
    expect('javaScript & typescript'.contains('Typescript'))
      .toBe(true)
  })

  test("'javaScript & typescript'.contains('Typescript', true); // false", () => {
    expect('javaScript & typescript'.contains('Typescript', true))
      .toBe(false)
  })
})
