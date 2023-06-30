const mongoose = require('mongoose')
// const Teacher  = require('./teacherModel')
const UserSchema = new mongoose.Schema({
    fbid:{
        type: String,
        required: true,
        unique: true
      },
      name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [50, 'name can not be more than 50 characters'],
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
      },
      recipe:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
      }]  
    })

    module.exports = mongoose.model('User', UserSchema)