const {Courses} = require('../models/index')

module.exports = {
    createCourse: async(root,{input}) => {
        console.log(input)
        course = new Courses(input)
        course.save()
        input._id = course.insertedId
        return input
    }   
}