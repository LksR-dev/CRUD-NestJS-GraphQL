export function toLowerCaseAndTrim(str) {
  return str.toLocaleLowerCase().trim().replace(/\s+/g, '');
}
