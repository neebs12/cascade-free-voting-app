const _ =  require('lodash')
const connection = require('./connection')

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

// REUSABLES
function getByTableName(tableName, db = connection) {
  return db(tableName)
    .select()
    .then(result => mapToCamelCase(result))
    
}

function getByTableNameAndId(tableName, id, db = connection) {
  return db(tableName)
    .select()
    .where({id})
    .then(result => mapToCamelCase(result))
}

function addByTableName(tableName, data, db = connection) {
  data = mapToSnakeCase(data)
  return db(tableName)
    .insert(data)
    // .then(result => mapToCamelCase(result)) // <-- not used as returns [id] of data inserted
}

function updateByTableNameAndId(tableName, id, data, db = connection) {
  data = mapToSnakeCase(data)
  return db(tableName)
    .where({id})
    .update(data)
    // .then(result => mapToCamelCase(result)) // <-- not used as returns number of records updated
}

function deleteByTableNameAndId(tableName, id, db = connection) {
  return db(tableName)
    .where({id})
    .delete()
}

function deleteByTableName(tableName, id, db = connection) {
  return db.delete()
}

module.exports = {
  getByTableName,
  getByTableNameAndId,
  addByTableName,
  updateByTableNameAndId,
  deleteByTableName,
  deleteByTableNameAndId,
}