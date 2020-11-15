const cloneArray = require('./cloneArray')

test('clone array', () => {
  const sampleArray = [10, 5, 20, 50]
 
  expect(cloneArray(sampleArray)).toEqual(sampleArray)

})
