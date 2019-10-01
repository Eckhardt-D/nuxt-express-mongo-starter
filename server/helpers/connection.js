const mongoose = require('mongoose')

const config = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/nuxt-express-mongo', config, err => {
  if(err) throw new Error(err)
  console.log('Database connected on default settings')
})

module.exports = mongoose