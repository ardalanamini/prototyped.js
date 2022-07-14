/**
 * Returns the cached function results if already runned with this method
 * @param func
 * @example
 * const test = cache(() => setTimeout(console.log, 1000, `test`));
 * test(); // takes a second to log 'test'
 * test(); // instantly logs the second 'test'
 */
export default function cache<F extends (...args: unknown[]) => unknown>(
  func: F): F {
  const cacheMap = func.cached ?? (func.cached = (new Map));

  function cached(...args: unknown[]): ReturnType<F> {
    const key = JSON.stringify(args);

    if (cacheMap.has(key)) return cacheMap.get(key);

    const result = func.call(func, ...args) as ReturnType<F>;

    cacheMap.set(key, result);

    return result;
  }

  return cached as F;
}
