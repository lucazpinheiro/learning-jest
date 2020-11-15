const mergeObjs = require('./mergeObjects')

test('should return a merged obj', () => {

  expect(mergeObjs({
    a: 'xxxx',
    b: 'yyyy'
  }, {
    c: 'zzzz',
  })).toEqual({
    a: 'xxxx',
    b: 'yyyy',
    c: 'zzzz'
  })
  
})
