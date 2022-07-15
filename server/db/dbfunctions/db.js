const connection = require('../connection')

const {mapToCamelCase, mapToSnakeCase} = require('./dbHelper') 

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

function deleteByTableName(tableName, db = connection) {
  return db(tableName).delete()
}

module.exports = {
  getByTableName,
  getByTableNameAndId,
  addByTableName,
  updateByTableNameAndId,
  deleteByTableName,
  deleteByTableNameAndId,
}