const { Courses, Students } = require("../models/index");

const mutations = require("./mutations");
const types = require("./types");

module.exports = {
  Query: {
    getCourses: () => {
      return Courses.find({});
    },
    getCourse: (root, args) => {
      return Courses.findById(args.id);
    },
    getStudents: () => {
      return Students.find({});
    },
    getStudent: (root, args) => {
      return Students.findById(args.id);
    }
  },
  Mutation: mutations,
  ...types
};
