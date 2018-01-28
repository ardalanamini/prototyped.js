require('../../../es6/string/snakeCase')

describe("String.prototype.snakeCase", () => {
  test("'camelCase'.snakeCase() returns 'camel_case'", () => {
    expect('camelCase'.snakeCase())
      .toBe('camel_case')
  })

  test("'some text'.snakeCase() returns 'some_text'", () => {
    expect('some text'.snakeCase())
      .toBe('some_text')
  })

  test("'some-mixed_string With spaces_underscores-and-hyphens'.snakeCase() returns 'some_mixed_string_with_spaces_underscores_and_hyphens'", () => {
    expect('some-mixed_string With spaces_underscores-and-hyphens'.snakeCase())
      .toBe('some_mixed_string_with_spaces_underscores_and_hyphens')
  })

  test("'AllThe-small Things'.snakeCase() returns 'all_the_small_things'", () => {
    expect('AllThe-small Things'.snakeCase())
      .toBe('all_the_small_things')
  })

  test("'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase() returns 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'", () => {
    expect('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase())
      .toBe('i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html')
  })
})
