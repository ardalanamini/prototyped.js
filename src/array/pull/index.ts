/**
 * Mutates the original array to filter out the values specified
 * @param arr
 * @param args
 * @example
 * let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 * pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ];
 */
export default function pull<T>(arr: T[], ...args: T[]): void {
  const pulled = arr.filter(value => !args.includes(value));

  arr.length = 0;

  pulled.forEach(value => arr.push(value));
}
