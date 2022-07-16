const connection = require('../connection')

const {mapToCamelCase, mapToSnakeCase} = require('./dbHelper') 

function populateSession(data, db = connection) {
  // delete the contents of the `sessions` table
  return db('sessions').delete().then(() => {
    // then here, 'sessions' table has been cleared of records
    // then we add new information from it!
    // -- the promise returned by this insert is used!
    data = mapToSnakeCase(data)
    return db('sessions').insert(data) 
  })
  // Note: inserts returns a id integer if the information that is inserted
  // <-- therefore no need to be converted to CamelCase :) 
}

module.exports = {
  populateSession,
}