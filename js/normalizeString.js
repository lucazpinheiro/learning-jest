function normalizeStr(str) {
  return str.toLowerCase()
    .replace(' ', '-')
    .replace('_', '-')
}

module.exports = normalizeStr
