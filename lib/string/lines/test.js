require('../../../es6/string/lines')

describe("String.prototype.lines", () => {
  test("'This\nis a\nmultiline\nstring.\n'.lines() returns ['This', 'is a', 'multiline', 'string.' , '']", () => {
    expect('This\nis a\nmultiline\nstring.\n'.lines())
      .toEqual(['This', 'is a', 'multiline', 'string.' , ''])
  })
})
