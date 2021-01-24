export default function cache<F extends (...args: unknown[]) => unknown>(
  func: F,
): F {
  const cacheMap = func.cached || (func.cached = new Map());

  function cached(...args: unknown[]) {
    const key = JSON.stringify(args);

    if (cacheMap.has(key)) return cacheMap.get(key);

    const result = func.call(func, ...args);

    cacheMap.set(key, result);

    return result;
  }

  return cached as F;
}
