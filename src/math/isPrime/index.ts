export default function isPrime(num: number): boolean {
  const boundary = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;

  return num >= 2;
}
