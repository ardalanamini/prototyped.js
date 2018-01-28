require('../../../es6/string/truncate')

describe("String.prototype.truncate", () => {
  test("'boomerang'.truncate(7) returns 'boom...'", () => {
    expect('boomerang'.truncate(7))
      .toBe('boom...')
  })

  test("'boomerang'.truncate(7, '....') returns 'boo....'", () => {
    expect('boomerang'.truncate(7, '....'))
      .toBe('boo....')
  })
})
