export { }

declare global {
  interface Function {
    cached?: Array<{ key: string, result: any }>
    cache(...args: Array<any>): any
  }
}

/**
 * Returns the cached function results if already runned with this method
 * @memberof Function
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = () => setTimeout(console.log, 1000, `test`);
 * test.cache(); // takes a second to log 'test'
 * test.cache(); // instantly logs the second 'test'
 */
Function.prototype.cache = function(...args: Array<any>): any {
  let key = JSON.stringify(args)
  let cached = this.cached || []

  let index = cached.findIndex((c: { [key: string]: any }) => c.key === args)
  if (index !== -1) return cached[index].result

  let result = this.call(this, ...args)

  cached.push({
    key,
    result
  })

  this.cached = cached

  return result
}
