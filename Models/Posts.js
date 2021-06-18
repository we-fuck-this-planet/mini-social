const { Schema, model } = require('mongoose')

const Posts = new Schema({
  userId: {
    type: String,
    required: true
  },
  text: {
    type: String,
    min: 0,
    max: 255
  },
  likes: {
    type: Array,
    default: []
  }
}, { timestamps: true })

module.exports = model('Posts', Posts)