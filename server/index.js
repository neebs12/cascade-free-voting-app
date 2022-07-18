const server = require('./server')

const PORT = process.env.PORT || 3000

const configureDatabase = require('./db/config-db-state');

// the conditionals will environment variables will have to be run here
// -- PRIOR to the server.listen, so that the database state is 'ready to go'
// -- as soon as this is completed
(async () => {
  await configureDatabase()

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT} under environment "${process.env.CI}"`)
  })
})()