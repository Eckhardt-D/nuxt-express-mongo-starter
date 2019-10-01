const mongoose = require('../helpers/connection')

const helloSchema = new mongoose.Schema({
  message: {
    required: true,
    default: 'Hello!',
    type: String
  }
})

const Hello = mongoose.model('hello', helloSchema)

module.exports = Hello