const dbEnv = process.env.CI

const db = require('./dbfunctions/db')

async function clearTablesByName(...tableNames) {
  const mapP = tableNames.map(tNames => {
    return db.deleteByTableName(tNames)
  })

  return await Promise.allSettled(mapP)
}

async function prod() {
  return await clearTablesByName(
    'sessions', 'users', 'ideas', 'votes'
  )
}

async function admin1() {
  return await clearTablesByName(
    'users', 'ideas', 'votes'
  )
}

async function user1() {
  return await clearTablesByName(
    'ideas', 'votes'
  )
}

async function admin2() {
  return await clearTablesByName(
    'votes'
  )
}

async function configDbState() {
  switch (dbEnv) {
    case 'prod':
      await prod()
      break
    case 'same':
      await Promise.resolve(null)
      break
    case 'full':
      await Promise.resolve(null)
      break
    case 'admin1': 
      await admin1()
      break
    case 'user1':
      await user1()
      break
    case 'admin2': 
      await admin2()
      break
    case 'user2': 
      await Promise.resolve(null)
      break
    default:
      await Promise.resolve(null)
      break 
  }
}

module.exports = configDbState