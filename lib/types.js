const { Courses, Students } = require("../models/index");

module.exports = {
  Course: {
    people: async ({ people }) => {
      let ids, peopleData;
      ids = people ? people : [];
      peopleData = ids.length > 0 ? Students.find({ _id: { $in: ids } }) : [];
      return peopleData;
    }
  }
};
