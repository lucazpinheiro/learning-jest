const sum = require('./sum')

test('properly adds two numbers', () => {

  expect(sum(10, 5)).toBe(15)

})
