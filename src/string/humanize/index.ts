/**
 * Converts an underscored, camelized, or dasherized string into a humanized one.
 * Also removes beginning and ending whitespace
 * @param str
 * @example
 * humanize('  capitalize dash-CamelCase_underscore trim  ');
 * // 'Capitalize dash camel case underscore trim'
 */
export default function humanize(str: string): string {
  return (
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) ?? [""]
  )
    .map(x => x.toLowerCase())
    .join(" ")
    .replace(/^[a-z]/, char => char.toUpperCase());
}
