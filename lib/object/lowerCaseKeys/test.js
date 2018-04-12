require('../../../es6/object/lowerCaseKeys')

describe("Object.prototype.$lowerCaseKeys", () => {
  test("{ Name: 'Adam', sUrnAME: 'Smith' }.$lowerCaseKeys() returns {name: 'Adam', surname: 'Smith'}", () => {
    expect({ Name: 'Adam', sUrnAME: 'Smith' }.$lowerCaseKeys()).toEqual({name: 'Adam', surname: 'Smith'})
  })
})
