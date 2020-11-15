function mergeObjs(objOne, objTwo) {
  return {
    ...objOne,
    ...objTwo
  }
}

module.exports = mergeObjs