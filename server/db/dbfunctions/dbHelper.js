const _ =  require('lodash')

// HELPERS for translating between snake and camel case
const mapToCase = (val, caseFn) => {
  const isArray = Array.isArray(val)
  if (isArray) {
    // is an array of object
    return val.map(obj => {
      return _.mapKeys(obj, (__, key) => caseFn(key))
    })
  } else {
    // is an object itself
    return _.mapKeys(val, (__, key) => caseFn(key))
  }
}

const mapToCamelCase = val => {
  const caseFn = _.camelCase
  return mapToCase(val, caseFn) 
}

const mapToSnakeCase = val => {
  const caseFn = _.snakeCase
  return mapToCase(val, caseFn)
}

module.exports = {
  mapToCamelCase,
  mapToSnakeCase
}