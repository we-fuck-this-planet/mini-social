const { Schema, model } = require('mongoose')

const Users = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: {
    type: Array,
    default: []
  },
  followings: {
    type: Array,
    default: []
  },
}, { timestamps: true })

module.exports = model('Users', Users)