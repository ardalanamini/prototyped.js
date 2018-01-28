require('../../../es6/string/decapitalize')

describe("String.prototype.decapitalize", () => {
  test("'Foo Bar'.decapitalize() returns 'foo Bar'", () => {
    expect('Foo Bar'.decapitalize())
      .toBe('foo Bar')
  })

  test("'Hello World'.decapitalize(true) returns 'hello world'", () => {
    expect('Hello World'.decapitalize(true))
      .toBe('hello world')
  })
})
