require('../dist/string.js')

describe("String.isInstance", () => {
  test("String.isInstance(2) returns false", () => {
    expect(String.isInstance(2))
      .toBe(false)
  })

  test("String.isInstance('foo bar') returns true", () => {
    expect(String.isInstance('foo bar'))
      .toBe(true)
  })
})

describe("String.prototype.capitalize", () => {
  test("'foo bar'.capitalize() returns 'Foo bar'", () => {
    expect('foo bar'.capitalize())
      .toBe('Foo bar')
  })

  test("'hello world'.capitalize(true) returns 'Hello World'", () => {
    expect('hello world'.capitalize(true))
      .toBe('Hello World')
  })
})

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

describe("String.prototype.mask", () => {
  test("'1234567890'.mask() returns '******7890'", () => {
    expect('1234567890'.mask())
      .toBe('******7890')
  })

  test("'1234567890'.mask(3) returns '*******890'", () => {
    expect('1234567890'.mask(3))
      .toBe('*******890')
  })

  test("'1234567890'.mask(-4, '$') returns '$$$$567890'", () => {
    expect('1234567890'.mask(-4, '$'))
      .toBe('$$$$567890')
  })
})

describe("String.prototype.pluralize", () => {
  test("'apple'.pluralize(0) returns 'apples'", () => {
    expect('apple'.pluralize(0))
      .toBe('apples')
  })

  test("'apple'.pluralize(1) returns 'apple'", () => {
    expect('apple'.pluralize(1))
      .toBe('apple')
  })

  test("'apple'.pluralize(2) returns 'apples'", () => {
    expect('apple'.pluralize(2))
      .toBe('apples')
  })

  test("'person'.pluralize(2, 'people') returns 'people'", () => {
    expect('person'.pluralize(2, 'people'))
      .toBe('people')
  })
})

describe("String.prototype.reverse", () => {
  test("'foobar'.reverse() returns 'raboof'", () => {
    expect('foobar'.reverse())
      .toBe('raboof')
  })
})

describe("String.prototype.lines", () => {
  test("'This\nis a\nmultiline\nstring.\n'.lines() returns ['This', 'is a', 'multiline', 'string.' , '']", () => {
    expect('This\nis a\nmultiline\nstring.\n'.lines())
      .toEqual(['This', 'is a', 'multiline', 'string.' , ''])
  })
})

describe("String.prototype.camelCase", () => {
  test("'some_database_field_name'.camelCase() returns 'someDatabaseFieldName'", () => {
    expect('some_database_field_name'.camelCase())
      .toBe('someDatabaseFieldName')
  })

  test("'Some label that needs to be camelized'.camelCase() returns 'someLabelThatNeedsToBeCamelized'", () => {
    expect('Some label that needs to be camelized'.camelCase())
      .toBe('someLabelThatNeedsToBeCamelized')
  })

  test("'some-javascript-property'.camelCase() returns 'someJavascriptProperty'", () => {
    expect('some-javascript-property'.camelCase())
      .toBe('someJavascriptProperty')
  })

  test("'some-mixed_string with spaces_underscores-and-hyphens'.camelCase() returns 'someMixedStringWithSpacesUnderscoresAndHyphens'", () => {
    expect('some-mixed_string with spaces_underscores-and-hyphens'.camelCase())
      .toBe('someMixedStringWithSpacesUnderscoresAndHyphens')
  })
})

describe("String.prototype.kebabCase", () => {
  test("'camelCase'.kebabCase() returns 'camel-case'", () => {
    expect('camelCase'.kebabCase())
      .toBe('camel-case')
  })

  test("'some text'.kebabCase() returns 'some-text'", () => {
    expect('some text'.kebabCase())
      .toBe('some-text')
  })

  test("'some-mixed_string With spaces_underscores-and-hyphens'.kebabCase() returns 'some-mixed-string-with-spaces-underscores-and-hyphens'", () => {
    expect('some-mixed_string With spaces_underscores-and-hyphens'.kebabCase())
      .toBe('some-mixed-string-with-spaces-underscores-and-hyphens')
  })

  test("'AllThe-small Things'.kebabCase() returns 'all-the-small-things'", () => {
    expect('AllThe-small Things'.kebabCase())
      .toBe('all-the-small-things')
  })

  test("'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.kebabCase() returns 'i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html'", () => {
    expect('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.kebabCase())
      .toBe('i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html')
  })
})

describe("String.prototype.snakeCase", () => {
  test("'camelCase'.snakeCase() returns 'camel_case'", () => {
    expect('camelCase'.snakeCase())
      .toBe('camel_case')
  })

  test("'some text'.snakeCase() returns 'some_text'", () => {
    expect('some text'.snakeCase())
      .toBe('some_text')
  })

  test("'some-mixed_string With spaces_underscores-and-hyphens'.snakeCase(); // 'some_mixed_string_with_spaces_underscores_and_hyphens'", () => {
    expect('some-mixed_string With spaces_underscores-and-hyphens'.snakeCase())
      .toBe('some_mixed_string_with_spaces_underscores_and_hyphens')
  })

  test("'AllThe-small Things'.snakeCase(); // 'all_the_small_things'", () => {
    expect('AllThe-small Things'.snakeCase())
      .toBe('all_the_small_things')
  })

  test("'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase(); // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'", () => {
    expect('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase())
      .toBe('i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html')
  })
})

describe("String.prototype.truncate", () => {
  test("'boomerang'.truncate(7); // 'boom...'", () => {
    expect('boomerang'.truncate(7))
      .toBe('boom...')
  })
})

describe("String.prototype.words", () => {
  test("'I love javaScript!!'.words(); // ['I', 'love', 'javaScript']", () => {
    expect('I love javaScript!!'.words())
      .toEqual(['I', 'love', 'javaScript'])
  })

  test("'python, javaScript & coffee'.words(); // ['python', 'javaScript','coffee']", () => {
    expect('python, javaScript & coffee'.words())
      .toEqual(['python', 'javaScript','coffee'])
  })
})

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
