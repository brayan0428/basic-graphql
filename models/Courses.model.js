const mongoose = require('mongoose')
const Schema = mongoose.Schema

var courseSchema = new Schema({title:String,description:String,topic:String,teacher:String})

module.exports = mongoose.model('courses',courseSchema)
