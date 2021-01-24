export default function isDate(arg: unknown): arg is Date {
  return (
    arg instanceof Date ||
    Object.prototype.toString.call(arg) === "[object Date]"
  );
}
