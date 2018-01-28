require('../../../es6/string/reverse')

describe("String.prototype.reverse", () => {
  test("'foobar'.reverse() returns 'raboof'", () => {
    expect('foobar'.reverse())
      .toBe('raboof')
  })
})
