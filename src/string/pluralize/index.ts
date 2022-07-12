import { hasOwnProperty } from "../../utils.js";
import isString from "../isString/index.js";

/**
 * Returns the singular or plural form of the word based on the input number
 * @param str
 * @param [count]
 * @example
 * pluralize('apple'); // 'apples'
 * @example
 * pluralize('apple', 0); // 'apples'
 * @example
 * pluralize('apple', 1); // 'apple'
 * @example
 * pluralize('apple', 2); // 'apples'
 * @example
 * pluralize('person', 2); // 'people'
 * @example
 * pluralize('people', 1); // 'person'
 */
export default function pluralize(str: string, count?: number): string {
  if (count === 1) return singular(str);

  return plural(str);
}

const IRREGULAR_RULES = [
  // Pronouns.
  ["I", "we"],
  ["me", "us"],
  ["he", "they"],
  ["she", "they"],
  ["them", "them"],
  ["myself", "ourselves"],
  ["yourself", "yourselves"],
  ["itself", "themselves"],
  ["herself", "themselves"],
  ["himself", "themselves"],
  ["themself", "themselves"],
  ["is", "are"],
  ["was", "were"],
  ["has", "have"],
  ["this", "these"],
  ["that", "those"],
  // Words ending in with a consonant and `o`.
  ["echo", "echoes"],
  ["dingo", "dingoes"],
  ["volcano", "volcanoes"],
  ["tornado", "tornadoes"],
  ["torpedo", "torpedoes"],
  // Ends with `us`.
  ["genus", "genera"],
  ["viscus", "viscera"],
  // Ends with `ma`.
  ["stigma", "stigmata"],
  ["stoma", "stomata"],
  ["dogma", "dogmata"],
  ["lemma", "lemmata"],
  ["schema", "schemata"],
  ["anathema", "anathemata"],
  // Other irregular rules.
  ["ox", "oxen"],
  ["axe", "axes"],
  ["die", "dice"],
  ["yes", "yeses"],
  ["foot", "feet"],
  ["eave", "eaves"],
  ["goose", "geese"],
  ["tooth", "teeth"],
  ["quiz", "quizzes"],
  ["human", "humans"],
  ["proof", "proofs"],
  ["carve", "carves"],
  ["valve", "valves"],
  ["looey", "looies"],
  ["thief", "thieves"],
  ["groove", "grooves"],
  ["pickaxe", "pickaxes"],
  ["whiskey", "whiskies"],
];

const PLURALIZATION_RUES: Array<[RegExp | string, string]> = [
  [/s?$/i, "s"],
  // eslint-disable-next-line no-control-regex
  [/[^\u0000-\u007F]$/i, "$0"],
  [/([^aeiou]ese)$/i, "$1"],
  [/(ax|test)is$/i, "$1es"],
  [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
  [/(e[mn]u)s?$/i, "$1s"],
  [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
  [
    /(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
    "$1i",
  ],
  [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
  [/(seraph|cherub)(?:im)?$/i, "$1im"],
  [/(her|at|gr)o$/i, "$1oes"],
  [
    // eslint-disable-next-line max-len
    /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
    "$1a",
  ],
  [
    /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
    "$1a",
  ],
  [/sis$/i, "ses"],
  [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
  [/([^aeiouy]|qu)y$/i, "$1ies"],
  [/([^ch][ieo][ln])ey$/i, "$1ies"],
  [/(x|ch|ss|sh|zz)$/i, "$1es"],
  [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
  [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
  [/(pe)(?:rson|ople)$/i, "$1ople"],
  [/(child)(?:ren)?$/i, "$1ren"],
  [/eaux$/i, "$0"],
  [/m[ae]n$/i, "men"],
  ["thou", "you"],
];

const SINGULARIZATION_RULES: Array<[RegExp, string]> = [
  [/s$/i, ""],
  [/(ss)$/i, "$1"],
  [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
  [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
  [/ies$/i, "y"],
  [
    /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
    "$1ie",
  ],
  [/\b(mon|smil)ies$/i, "$1ey"],
  [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
  [/(seraph|cherub)im$/i, "$1"],
  [
    /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|ris)(?:es)?$/i,
    "$1",
  ],
  [
    /(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,
    "$1sis",
  ],
  [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
  [/(test)(?:is|es)$/i, "$1is"],
  [
    /(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
    "$1us",
  ],
  [
    /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
    "$1um",
  ],
  [
    /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
    "$1on",
  ],
  [/(alumn|alg|vertebr)ae$/i, "$1a"],
  [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
  [/(matr|append)ices$/i, "$1ix"],
  [/(pe)(rson|ople)$/i, "$1rson"],
  [/(child)ren$/i, "$1"],
  [/(eau)x?$/i, "$1"],
  [/men$/i, "man"],
];

const UNCOUNTABLE_RULES = [
  // Singular words with no plurals.
  "adulthood",
  "advice",
  "agenda",
  "aid",
  "alcohol",
  "ammo",
  "anime",
  "athletics",
  "audio",
  "bison",
  "blood",
  "bream",
  "buffalo",
  "butter",
  "carp",
  "cash",
  "chassis",
  "chess",
  "clothing",
  "cod",
  "commerce",
  "cooperation",
  "corps",
  "debris",
  "diabetes",
  "digestion",
  "elk",
  "energy",
  "equipment",
  "excretion",
  "expertise",
  "flounder",
  "fun",
  "gallows",
  "garbage",
  "graffiti",
  "headquarters",
  "health",
  "herpes",
  "highjinks",
  "homework",
  "housework",
  "information",
  "jeans",
  "justice",
  "kudos",
  "labour",
  "literature",
  "machinery",
  "mackerel",
  "mail",
  "media",
  "mews",
  "moose",
  "music",
  "mud",
  "manga",
  "news",
  "pike",
  "plankton",
  "pliers",
  "police",
  "pollution",
  "premises",
  "rain",
  "research",
  "rice",
  "salmon",
  "scissors",
  "series",
  "sewage",
  "shambles",
  "shrimp",
  "species",
  "staff",
  "swine",
  "tennis",
  "traffic",
  "transportation",
  "trout",
  "tuna",
  "wealth",
  "welfare",
  "whiting",
  "wildebeest",
  "wildlife",
  "you",
  // RegExes.
  /[^aeiou]ese$/i, // "chinese", "japanese"
  /deer$/i, // "deer", "reindeer"
  /fish$/i, // "fish", "blowfish", "angelfish"
  /measles$/i,
  /o[iu]s$/i, // "carnivorous"
  /pox$/i, // "chickpox", "smallpox"
  /sheep$/i,
];

// Rule storage - pluralize and singularize need to be run sequentially,
// while other rules can be optimized using an object for instant lookups.
const pluralRules: Array<[RegExp, string]> = [];
const singularRules: Array<[RegExp, string]> = [];
const uncountables: { [keys: string]: boolean } = {};
const irregularPlurals: { [keys: string]: string } = {};
const irregularSingles: { [keys: string]: string } = {};

/**
 * Sanitize a pluralization rule to a usable regular expression.
 *
 * @private
 * @param {RegExp|String} rule
 * @return {RegExp}
 */
const sanitizeRule = (rule: RegExp | string) =>
  isString(rule) ? new RegExp(`^${rule}$`, "i") : rule;

/**
 * Pass in a word token to produce a function that can replicate the case on
 * another word.
 *
 * @private
 * @param {String} word
 * @param {String} token
 * @return {Function}
 */
const restoreCase = (word: string, token: string) => {
  // Tokens are an exact match.
  if (word === token) return token;

  // Upper cased words. E.g. "HELLO".
  if (word === word.toUpperCase()) return token.toUpperCase();

  // Title cased words. E.g. "Title".
  if (word[0] === word[0].toUpperCase()) {
    return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
  }

  // Lower cased words. E.g. "test".
  return token.toLowerCase();
};

/**
 * Replace a word with the updated word.
 *
 * @private
 * @param {Object} replaceMap
 * @param {Object} keepMap
 * @param {Array} rules
 * @return {Function}
 */
const replaceWord = (
  replaceMap: { [keys: string]: string },
  keepMap: { [keys: string]: string },
  rules: Array<[RegExp, string]>,
) => (word: string) => {
  // Get the correct token and case restoration functions.
  const token = word.toLowerCase();

  // Check against the keep object map.
  if (hasOwnProperty.call(keepMap, token)) return restoreCase(word, token);

  // Check against the replacement map for a direct word replacement.
  if (hasOwnProperty.call(replaceMap, token)) {
    return restoreCase(word, replaceMap[token]);
  }

  // Run all the rules against the word.

  if (!token.length || hasOwnProperty.call(uncountables, token)) return word;

  let len = rules.length;

  // Iterate over the sanitization rules and use the first one to match.
  while (len--) {
    const rule = rules[len];

    if (rule[0].test(word)) {
      return word.replace(rule[0], (match, index, ...rest) => {
        const args = [match, index].concat(rest);
        const result = rule[1].replace(/\$(\d{1,2})/g, (_, i) => args[i] || "");

        if (match === "") return restoreCase(word[index - 1], result);

        return restoreCase(match, result);
      });
    }
  }

  return word;
};

/**
 * Add a pluralization rule to the collection.
 *
 * @private
 * @param {String|RegExp} rule
 * @param {String} replacement
 */
const addPluralRule = (rule: string | RegExp, replacement: string) =>
  pluralRules.push([sanitizeRule(rule) as any, replacement]);

/**
 * Add a singularization rule to the collection.
 *
 * @private
 * @param {String|RegExp} rule
 * @param {String} replacement
 */
const addSingularRule = (rule: string | RegExp, replacement: string) =>
  singularRules.push([sanitizeRule(rule) as any, replacement]);

IRREGULAR_RULES.forEach((rule) => {
  const pl = rule[1].toLowerCase();
  const single = rule[0].toLowerCase();

  irregularSingles[single] = pl;
  irregularPlurals[pl] = single;
});

PLURALIZATION_RUES.forEach((rule) => addPluralRule(rule[0], rule[1]));

SINGULARIZATION_RULES.forEach((rule) => addSingularRule(rule[0], rule[1]));

UNCOUNTABLE_RULES.forEach((word) => {
  if (isString(word)) {
    uncountables[word.toLowerCase()] = true;

    return;
  }

  // Set singular and plural references for the word.
  addPluralRule(word, "$0");
  addSingularRule(word, "$0");
});

/**
 * Pluralize a word.
 *
 * @private
 * @type {Function}
 */
const plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);

/**
 * Singularize a word.
 *
 * @private
 * @type {Function}
 */
const singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
