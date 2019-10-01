require('./helpers/connection')
const { join } = require('path')
const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const app = express()

// Security and cors
app.use(helmet())
app.use(cors())

// Log activity in development
if(process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'))
} else {
  /*
    Only serve nuxt generated files in production. In development the API
    is still exposed but nuxt server is faster for files. View app on :3000
    in development and :3001 in production
  */ 
  app.use(express.static(join(__dirname, '../client/dist')))
}
  

// Express routes
app.use('/api', require('./hello/hello.routes'))

// Catchall route incase doesn't exist.
app.use('*', (req, res) => 
  res.status(404).send('Uh oooh, couldn\'t find anything here.'))

// Exposed port that generally works in prod. too
const PORT = process.env.PORT || 3001

app.listen(PORT, err => {
  if(err) throw new Error(err)
  console.log(`Node server listening on http://localhost:${PORT}`)
})
