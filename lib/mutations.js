const { Courses, Students } = require("../models/index");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
module.exports = {
  createCourse: async (root, { input }) => {
    course = new Courses(input);
    await course.save();
    input._id = course.insertedId;
    return input;
  },
  editCourse: async (root, { _id, input }) => {
    await Courses.updateOne({ _id }, { $set: input });
    return Courses.findById(_id);
  },
  deleteCourse: async (root, { _id }) => {
    await Courses.findByIdAndDelete(_id);
    return true;
  },
  createStudent: async (root, { input }) => {
    student = new Students(input);
    await student.save();
    input._id = student.insertedId;
    return input;
  },
  editStudent: async (root, { _id, input }) => {
    console.log(input);
    await Students.updateOne({ _id }, { $set: input });
    return Students.findById(_id);
  },
  deleteStudent: async (root, { _id }) => {
    await Students.findByIdAndDelete(_id);
    return true;
  },
  addPeople: async (root, { courseID, personID }) => {
    let course = await Courses.findById(courseID);
    let person = await Students.findById(personID);
    if (!course || !person) throw new Error("La persona o el curso no existe");
    await Courses.update(
      { _id: courseID },
      { $addToSet: { people: ObjectId(personID) } }
    );
    return course;
  }
};
