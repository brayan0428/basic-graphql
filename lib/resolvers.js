
const {Courses} = require('../models/index')

const mutations = require('./mutations')

module.exports = {
    Query: {
        getCourses: async () => {
            return Courses.find({})
        },
        getCourse:(root,args) => {
            return Courses.findById(args.id)
        }
    },
    Mutation: mutations
}
  