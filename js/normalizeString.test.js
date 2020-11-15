const normalizeStr = require('./normalizeString')

test('should return a normalized strin', () => {
  const sampleString = 'Tests Are_cooL'

  expect(normalizeStr(sampleString)).toBe('tests-are-cool')

})
