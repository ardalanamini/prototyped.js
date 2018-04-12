import { addPrototype } from '../utils'

export { }

declare global {
  interface Object {
    $lowerCaseKeys(): object
  }
}

/**
 * Creates a new object from the specified object, where all the keys are in lowercase
 * @memberof Object.prototype
 * @returns {Object}
 * @example
 * const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
 * const myObjLower = myObj.$lowerCaseKeys(); // {name: 'Adam', surname: 'Smith'}
 */
function $lowerCaseKeys(this: { [key: string]: any }): object {
  return Object.keys(this).reduce((acc: { [key: string]: any }, key) => {
    acc[key.toLowerCase()] = this[key]

    return acc
  }, {})
}

addPrototype('$lowerCaseKeys', $lowerCaseKeys)
